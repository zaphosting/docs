---
id: dedicated-linux-odoo
title: "Configure o Odoo em um Servidor Linux - Tenha Seu Próprio ERP e CRM Open Source"
description: "Descubra como gerenciar e automatizar processos empresariais com a plataforma integrada ERP e CRM do Odoo para operações empresariais simplificadas → Saiba mais agora"
sidebar_label: Instalar Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Odoo é uma plataforma modular open source que combina recursos de Planejamento de Recursos Empresariais (ERP) e Gestão de Relacionamento com o Cliente (CRM). Ela permite que empresas gerenciem e automatizem processos como contabilidade, estoque, gerenciamento de projetos e vendas a partir de um único sistema.

Com suas extensões flexíveis, o Odoo pode ser personalizado para necessidades específicas e oferece uma solução integrada para gerenciar todas as áreas de uma empresa.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar tudo que precisa ficar de olho.



## Pré-requisitos

Antes de instalar o **Odoo**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendado  |
| ---------- | ------------ | ------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU |
| RAM        | 1 GB         | 4 GB         |
| Espaço em disco | 15 GB        | 25 GB        |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Garanta que seu servidor atenda aos seguintes requisitos antes de prosseguir com a instalação:

**Dependências:** `Docker`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 26+

Confirme que todas as dependências estão instaladas e que a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Odoo.



## Preparação

Antes de configurar o **Odoo**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, você deve sempre começar atualizando o sistema. Para isso, execute o seguinte comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Após o processo de atualização, você pode prosseguir com a instalação das dependências. O Odoo será implantado e executado na sua máquina usando uma série de containers Docker. Para isso, o Docker precisa estar instalado primeiro. Execute o seguinte comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um guia completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](dedicated-linux-docker.md).



### Configure seu domínio

Por padrão, o Odoo roda no host pelas portas 80 (HTTP) e 443 (HTTPS). Configure um domínio com registros DNS apontando para o host. Se o domínio for gerenciado por nós, você pode fazer isso facilmente usando a opção [EasyDNS](domain-easydns.md).




## Instalação
Agora que todos os requisitos foram atendidos e as preparações necessárias concluídas, você pode prosseguir com a instalação do aplicativo Odoo.

Quando se trabalha com múltiplas configurações Docker, é uma boa prática criar uma estrutura de diretórios clara para manter os projetos isolados uns dos outros. Uma abordagem comum é criar uma pasta *docker* dentro do diretório home do usuário, com uma subpasta dedicada para cada domínio. Assim, vários projetos podem ser hospedados no mesmo servidor sem conflitos de configuração.

Por exemplo, para preparar a estrutura para o domínio `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Dentro desse diretório do projeto, é recomendado criar subpastas que serão montadas como volumes pelos containers. Esses volumes permitem que dados sejam compartilhados entre serviços ou mantidos persistentes. Um caso crítico é o webroot compartilhado, que tanto o nginx quanto o certbot precisam acessar para gerar e renovar certificados SSL. Uma estrutura adequada pode ser criada assim:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Isso fornece diretórios dedicados para configuração do nginx, certificados SSL, arquivos include e conteúdo específico do Odoo, como configs e addons.




### Criar Docker Compose

Dentro do seu projeto docker, crie o arquivo compose.yml usando `nano compose.yml`. Insira o código abaixo:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### Firewall

Para que o nginx e o certbot funcionem corretamente, você precisa liberar as portas TCP 80 (HTTP) e 443 (HTTPS) no firewall. Essas portas são essenciais porque o certbot usa a porta 80 para validação HTTP, enquanto a porta 443 é necessária para servir tráfego criptografado via HTTPS. Se o UFW (Uncomplicated Firewall) estiver ativado, você pode adicionar as regras necessárias com os comandos:

```
sudo ufw allow http
sudo ufw allow https
```

Depois, verifique as regras com `sudo ufw status` para confirmar que as portas estão abertas. Certifique-se de que nenhuma outra configuração de firewall esteja bloqueando o acesso a essas portas, caso contrário a geração do certificado ou o tráfego HTTPS seguro podem falhar.



### Configuração do Nginx

A configuração do nginx começa criando um arquivo de configuração para seu domínio. Dentro do diretório `nginx/conf`, crie um novo arquivo com o nome do seu domínio. Para isso, execute `nano nginx/conf/example.com.conf` e adicione as diretivas básicas no arquivo, substituindo o placeholder pelo seu domínio real:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Essa configuração permite que o certbot complete o desafio ACME e emita certificados SSL válidos. Também garante que todas as requisições HTTP sejam redirecionadas para HTTPS.

Depois de salvar o arquivo, você pode iniciar os containers necessários. Eles incluem o banco de dados, Odoo e nginx. Execute o comando:

```
sudo docker compose up -d db odoo nginx
```

Os containers vão rodar em background, e o nginx já usará a nova configuração, permitindo que o certbot gere os certificados no próximo passo.


### Gerar certificados SSL

Execute o comando abaixo para criar certificados SSL usando o certbot. Certifique-se de especificar seu próprio domínio após a flag `-d` e substituir o endereço de email exemplo user@mail.com pelo seu email válido.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Depois, gere um arquivo dedicado de parâmetros DH para fortalecer ainda mais a segurança da troca de chaves criptográficas.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Agora crie o arquivo `ssl.conf` usando `nano nginx/ssl/ssl.conf` e adicione o conteúdo abaixo. Lembre-se de substituir example.com pelo seu domínio:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## Configuração



### Configuração do Nginx

Edite o arquivo de configuração do nginx que você criou anteriormente e substitua seu conteúdo pela configuração abaixo para garantir que seu site seja servido apenas via HTTPS.

Não esqueça de inserir seu domínio real na diretiva `server_name` e especificar os caminhos corretos para seus arquivos de certificado nas diretivas `ssl_certificate` e `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Inclui as configurações SSL da Mozilla
    include /etc/nginx/ssl/ssl.conf;

    # Caminhos dos certificados (confira se batem com seu volume montado)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Cabeçalhos de segurança
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip
    include /etc/nginx/inc/gzip.conf;

    # Configurações de proxy para o Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Timeouts recomendados para requisições padrão
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache para arquivos estáticos
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Aumenta timeouts para long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Permite que o Certbot acesse a URL do desafio
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Depois de salvar as alterações na configuração do nginx, aplique as novas configurações reiniciando o container nginx:

```
sudo docker compose restart nginx
```

Reiniciar garante que o nginx carregue a configuração atualizada e comece a servir as requisições com os novos parâmetros imediatamente. Fique de olho em mensagens de erro durante o processo. Se ocorrerem problemas, você pode inspecionar os logs do container com `sudo docker compose logs nginx` para diagnosticar possíveis erros de configuração. Quando o container rodar sem erros, acesse seu site para confirmar que o HTTPS está ativo e o site está funcionando como esperado.



### Opções de Configuração do Odoo

Para aplicar configurações personalizadas, você pode criar um arquivo de configuração dedicado para o Odoo. Coloque um novo arquivo em `config/odoo.conf` e adicione as opções desejadas.

Nesse arquivo, você pode definir vários parâmetros úteis: `list_db = False` oculta a seleção de banco de dados na página de login, `proxy_mode = True` informa ao Odoo que ele está rodando atrás de um proxy reverso, e se quiser usar addons personalizados, pode descomentar a linha `addons_path` e apontar para o diretório de addons que você criou anteriormente. Exemplo de configuração:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Remover flag -i base

A flag `-i base` deve ser removida do arquivo `compose.yml`, caso contrário ela recriará o banco de dados toda vez que você recriar o container do odoo. Para removê-la, acesse o arquivo compose. Abra o arquivo com `nano compose.yml` e ajuste o comando para ficar assim:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Acessando o site

Depois que a instalação e configuração estiverem completas e todos os serviços rodando, você pode acessar seu site com segurança digitando seu domínio na barra de endereços do navegador.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Isso vai carregar a página inicial da sua nova instalação. Para o login inicial, uma conta padrão é fornecida com o usuário `admin` e a senha `admin`. Recomendamos fortemente que você altere essas credenciais.



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Odoo no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante o processo de configuração do servidor:

- [Odoo.com](https://odoo.com) - Site Oficial
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Documentação do Odoo

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



