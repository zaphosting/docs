---
id: dedicated-pterodactyl
title: "Servidor Dedicado: Instalação do Pterodactyl"
description: "Descubra como configurar e gerenciar seu próprio painel de servidor de jogos Pterodactyl de forma eficiente → Saiba mais agora"
sidebar_label: Instalar Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Painel Pterodactyl é um painel de controle open source projetado para gerenciar e hospedar servidores de jogos com facilidade. Ele oferece uma interface que permite aos administradores configurar e gerenciar múltiplos servidores de jogos de forma centralizada.

Neste guia, vamos explorar os passos necessários para configurar sua própria instância do Pterodactyl no seu servidor.

## Preparação

Você vai precisar de um servidor dedicado rodando Linux para instalar o Painel Pterodactyl. Use um dos sistemas operacionais compatíveis listados na tabela abaixo.

| SO      | Versões compatíveis |
| ------- | ------------------- |
| Ubuntu  | 20.04, 22.04        |
| CentOS  | 7, 8                |
| Debian  | 11, 12              |

## Dependências

O Pterodactyl requer várias dependências para ser instalado e rodar corretamente. Ele também depende de um gerenciador de dependências popular para PHP chamado Composer.

### Lista de Dependências

Aqui está uma lista resumida das dependências que você vai precisar para este guia. Vá para a seção seguinte para aprender como instalar essas dependências.

- PHP 8.1 com as seguintes extensões: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml ou dom, curl, zip e fpm.
- MariaDB
- Servidor web - Neste guia usaremos Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Instalando Dependências

Primeiro, rode este comando essencial para permitir que você adicione pacotes que não são padrão no SO.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Agora instale os repositórios adicionais para PHP, Redis e MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Você também precisará instalar o Redis, que é necessário para armazenamento temporário de dados.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Para o servidor web, escolhemos usar Nginx por ser confiável e open-source. Você deve instalar este ou pode usar servidores alternativos como Apache ou Caddy, embora isso não combine com este guia.

```bash
sudo apt install nginx # Baixar e instalar Nginx
sudo ufw allow 'Nginx Full' # Ajustar firewall
```

Recomendamos acessar `http://[seu_ip_do_servidor]/`, substituindo `[seu_ip_do_servidor]` pelo IP do seu servidor para testar e garantir que o Nginx está rodando. Você deve ver uma página de boas-vindas padrão.

Continuando, instale o MariaDB, que será usado como seu banco de dados MySQL.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Por fim, atualize a lista de repositórios e instale as dependências restantes.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Agora você deve ter todas as dependências necessárias instaladas e pode prosseguir para instalar o Composer.

### Instalando o Composer

Com as dependências principais instaladas, você precisa instalar o Composer, que é um gerenciador de dependências popular para PHP. Isso vai permitir que você baixe e instale facilmente todo o serviço Pterodactyl.

Basta rodar o comando abaixo:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Baixando o Painel

Com todos os pré-requisitos prontos, você deve instalar o Painel Pterodactyl.

Crie uma pasta onde o painel será armazenado usando o comando abaixo.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Agora, clone o repositório oficial do Pterodactyl no GitHub para baixar os arquivos necessários.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Quando o download terminar, o painel estará baixado com sucesso. Na próxima seção, você vai configurar várias opções essenciais para garantir que o painel seja instalado corretamente e funcione bem.

## Instalação

A primeira parte da instalação envolve configurar um banco de dados MySQL que armazenará todos os dados do seu painel Pterodactyl. Se você já tem um banco MySQL pronto com um usuário apropriado, pode pular a próxima subseção.

### Configuração do Banco de Dados

Você precisa fazer login no seu banco de dados MySQL para começar. Se for uma instância nova, basta rodar:
```
mysql -u root -p
```

Se já tiver uma instância MySQL, use seu login com `-u` sendo o nome do usuário e `-p` para a senha.

Depois de logado, crie um novo usuário para sua instância Pterodactyl. Substitua `[sua_senha]` pela senha que deseja usar:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[sua_senha]';
```

Agora crie o banco de dados para o Pterodactyl e conceda permissões ao usuário criado:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Você configurou com sucesso o usuário e o banco de dados MySQL para sua instância Pterodactyl. Use o comando `exit` para sair do MySQL.

### Continuando a Configuração

Agora copie o arquivo de ambiente padrão onde você vai armazenar seus tokens secretos.
```bash
cp .env.example .env
```

Depois, use o Composer para instalar automaticamente todos os pacotes necessários:
```bash
composer install --no-dev --optimize-autoloader
```

Gere uma chave de criptografia para sua aplicação:
```bash
php artisan key:generate --force
```

### Configuração do Ambiente

Configure sua instância Pterodactyl rodando os comandos abaixo. Cada um vai abrir um setup interativo cobrindo várias configurações como sessões, email, cache e mais.

```bash
php artisan p:environment:setup # Primeiro comando
php artisan p:environment:database # Segundo comando
```

### Configurando o Banco de Dados

Agora configure os dados base necessários para o painel rodar, usando o banco que você criou. Rode o comando abaixo.

:::info
Isso pode levar alguns minutos para completar. Não saia do processo para evitar problemas. Tenha paciência :)
:::

```bash
php artisan migrate --seed --force
```

### Criando o Usuário Admin

Com o banco pronto, crie seu primeiro usuário administrador para acessar o painel:
```bash
php artisan p:user:make
```

### Configurando Permissões

Defina as permissões necessárias para os arquivos do painel para garantir que ele possa sempre ler e escrever sem problemas.

Rode o comando:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Agora você deve conseguir acessar seu painel Pterodactyl pelo link abaixo, substituindo `seu_endereco_ip` pelo IP do seu servidor:
```
http://[seu_endereco_ip]/
```

### Queue Workers

A última etapa da instalação é configurar um cronjob que roda em intervalos regulares junto com um queue worker responsável por várias tarefas em background.

Abra seu crontab com `sudo crontab -e`. Adicione o cronjob que roda a cada minuto para o painel:
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Agora crie um queue worker usando `systemd` para manter o processo rodando em background.

Crie um arquivo para o worker com o nano:
```
nano /etc/systemd/system/pteroq.service
```

Cole o conteúdo abaixo:
```
# Arquivo do Queue Worker do Pterodactyl
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Em alguns sistemas o usuário e grupo podem ser diferentes.
# Alguns usam `apache` ou `nginx` como usuário e grupo.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
Se estiver usando CentOS, substitua `redis-server.service` por `redis.service` no arquivo acima.
:::

Salve com `CTRL + X` e confirme com `Y`.

Por fim, habilite o serviço do Redis e o serviço que você criou para rodar na inicialização:
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Você instalou o Pterodactyl com sucesso no seu servidor. Acesse o painel pelo link abaixo, substituindo `[seu_ip_do_servidor]` pelo IP do seu servidor:
```
http://[seu_ip_do_servidor]
```

## Opcional: Configurando o Servidor Web

Como recurso extra, você pode configurar seu servidor web. Neste guia usamos Nginx, então esta seção mostra como ajustar a configuração para ele.

Configurar o servidor web permite usar seu próprio domínio e configurar um certificado SSL para o site do painel.

### Registro DNS do Domínio

Para que seu servidor seja acessível pelo seu domínio, configure um registro DNS do tipo `A` para esse domínio. Isso depende do provedor que você usa, mas geralmente fica disponível em algum painel de DNS ao gerenciar seu domínio. O conteúdo do registro deve ser o endereço IP do seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Removendo a configuração padrão

Comece removendo a configuração padrão do Nginx. Basta remover o arquivo:
```bash
rm /etc/nginx/sites-enabled/default
```

Agora use o conteúdo abaixo para criar um novo arquivo de configuração para o site do seu painel Pterodactyl. Decida se quer usar SSL ou não, pois a configuração e os passos vão variar um pouco.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx Com SSL" default>

### Configurando o Certbot

Para ter um certificado SSL, você deve configurar um sistema que gerencie e renove automaticamente seus certificados. Aqui usaremos o Certbot, que é open-source.

Primeiro instale o Certbot no seu servidor. Para Nginx, instale também o pacote python3-certbot-nginx.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Agora configure a verificação para gerar o certificado. Usaremos o desafio DNS, que é mais seguro que o HTTP.

Você precisará criar um registro DNS do tipo `TXT` para o domínio que quer usar. Isso depende do seu provedor, mas deve estar disponível no painel de DNS do seu domínio.

Rode o comando abaixo para obter o conteúdo do registro `TXT`. Substitua `[seu_dominio]` pelo domínio que quer usar.
```bash
certbot -d [seu_dominio] --manual --preferred-challenges dns certonly
```

Depois de criar o registro DNS, configure a renovação automática com um cronjob. Abra o crontab com `sudo crontab -e` e adicione o comando para renovar todo dia às 23:00 no horário do sistema.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Criando o Arquivo de Configuração

Com o certificado SSL pronto, crie o arquivo de configuração.

Abra o nano no local correto:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Cole o conteúdo abaixo, substituindo `[seu_dominio]` pelo domínio que você configurou no DNS.

:::warning
Certifique-se de que o certificado SSL está configurado, caso contrário o servidor web não vai iniciar corretamente.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [seu_dominio];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [seu_dominio];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[seu_dominio]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[seu_dominio]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx Sem SSL">

#### Criando o Arquivo de Configuração

Abra o nano no local correto:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Cole o conteúdo abaixo, substituindo `[seu_dominio]` pelo domínio que você configurou no DNS apontando para o IP do seu servidor.

:::warning
Certifique-se de que o certificado SSL está configurado, caso contrário o servidor web não vai iniciar corretamente.
:::

```
server {
    listen 80;
    server_name [seu_dominio];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### Aplicando a Configuração

Depois de fazer as alterações, habilite a configuração rodando:
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Não necessário no CentOS

sudo systemctl restart nginx # Reiniciar Nginx
```

Se tudo foi feito corretamente, agora você deve conseguir acessar seu painel Pterodactyl usando o domínio configurado nesta seção.

Você configurou seu servidor web com sucesso para usar seu domínio e adicionar um certificado SSL ao seu site.