---
id: fivem-proxy
title: "FiveM: Configurar um Reverse Proxy"
description: "Descubra como melhorar a segurança e confiabilidade do seu servidor FiveM com a configuração de um reverse proxy para melhor proteção contra DDoS e desempenho → Saiba mais agora"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Um servidor reverse proxy é um servidor que atua como intermediário entre os usuários finais (seus jogadores) e seu servidor FiveM. Isso pode ser muito útil para servidores que sofrem ataques DDoS frequentes, pois oferece uma camada extra de segurança e confiabilidade ao reduzir a visibilidade do host principal e fornecer mitigação adicional.

Neste guia, vamos explorar o processo de configuração de um reverse proxy para seu servidor FiveM. Existem dois tipos de reverse proxy nesse cenário; o connect proxy, que é usado para o endpoint connect, e o server proxy, que é usado para o endpoint do servidor onde ocorre o proxying bruto TCP/UDP. Ambos podem ser configurados de forma independente.

<InlineVoucher />

## Preparação

Para configurar um reverse proxy, você vai precisar de um **Servidor Linux** (como um VPS) que hospedará seu servidor proxy. Neste exemplo, usaremos o Ubuntu como distro Linux, mas os passos de instalação devem ser bem similares para a maioria das distribuições Linux.

:::tip Especificações recomendadas para VPS
Recomendamos fortemente adquirir velocidades de rede maiores se você planeja configurar um server proxy, especialmente se seu servidor tiver muitos jogadores. Isso porque seu VPS vai transmitir TCP/UDP bruto diretamente entre o cliente (jogador) e o servidor FiveM. Caso contrário, um servidor com especificações básicas e upgrades mínimos deve ser suficiente. :)
:::

Também recomendamos configurar o proxy com um **Domínio** que você possua. Você deve criar um registro `A` no domínio que deseja usar (por exemplo, `zapdocs.example.com`), apontando para o Endereço IP do seu __VPS Linux__. É esse domínio que os jogadores usarão para se conectar ao servidor, embora tecnicamente você possa usar o endereço IP do seu servidor proxy se preferir.

### Acessando o VPS

Com seu VPS Linux pronto, você precisará se conectar a ele. Use nosso guia de [Acesso Inicial via SSH](vserver-linux-ssh.md) para aprender como fazer isso.

### Instalando o Nginx

Você usará o Nginx para hospedar o servidor reverse proxy, pois é um servidor web open-source altamente performático e popular.

Agora que você acessou seu VPS, use o comando abaixo para instalar o Nginx.

```
sudo apt install nginx
```

Depois de instalado, você precisará ajustar seu firewall para garantir que o serviço esteja acessível pela internet. Para este guia, usaremos o **Firewall UFW**, já que o Nginx se registra como um app, facilitando o ajuste das configurações. Você pode aprender mais sobre o Firewall UFW no nosso guia de [Dicas de Segurança Linux](vserver-linux-security-tips.md).

:::note
Se você estiver usando outros firewalls (como Iptables), certifique-se de liberar o acesso relevante para o Nginx, especificamente nas portas 80 e 443, onde o serviço nginx opera.
:::

Você pode verificar os perfis do Nginx rodando `sudo ufw app list`. Neste cenário, queremos selecionar a opção **Nginx Full**, que libera acesso HTTP para testes e HTTPS para uso em produção.

```
sudo ufw allow 'Nginx Full'
```

Com o Nginx configurado, tente acessar a página via navegador para garantir que está funcionando como esperado. Se a página de teste carregar, você pode continuar com o guia.

```
http://[seu_endereço_ip_do_servidor]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Um connect proxy é usado para fazer proxy do endpoint connect do seu servidor FiveM. Na prática, isso significa que seu servidor proxy será responsável por receber as requisições do endpoint connect e repassá-las para seu servidor FiveM principal. Isso traz um grande benefício ao mascarar o verdadeiro endereço IP do host FiveM na lista de servidores, reduzindo a visibilidade.

### Configuração do Nginx

Comece criando uma entrada dentro do diretório do Nginx para o host que você selecionou anteriormente durante a configuração do domínio. Neste exemplo, usaremos `zapdocs.example.com` como antes.

Use o comando abaixo para criar o bloco de servidor para seu domínio, substituindo `[your_domain]` pelo seu domínio.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Agora copie o template abaixo para o editor e ajuste com seus valores.

```
upstream backend {
    # Endereço IP do servidor FiveM
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Por exemplo: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Necessário para passar os headers de autenticação corretamente
        proxy_pass_request_headers on;
        # Necessário para não fechar a conexão instantaneamente
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Bloco extra para proxy com cache
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Com todos os valores adaptados para sua configuração, salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

Agora você precisa ativar o arquivo do bloco de servidor criando um link simbólico para o diretório ativo.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Para garantir que tudo está correto, especialmente a sintaxe, use `sudo nginx -t` para verificar se há erros. Se retornar sucesso, o último passo é reiniciar o Nginx para aplicar o novo bloco de servidor.

```
systemctl reload nginx.service
```

Com o serviço reiniciado, teste acessar o domínio que você usou para o reverse proxy no navegador. Se funcionar, a página deve carregar o conteúdo desejado que você configurou como parâmetro `targetServer`. Se tiver problemas, recomendamos verificar os logs para troubleshooting com `journalctl -f -u nginx.service` para identificar possíveis erros.

### Configuração do FiveM

Com o proxy configurado, você precisará ajustar alguns valores no arquivo `server.cfg` do seu servidor FiveM.

Adicione o seguinte conteúdo na configuração, substituindo os valores pela sua configuração.

```
# Impede que a lista de servidores anuncie seu servidor usando o IP real
set sv_forceIndirectListing true

# Faz a lista de servidores usar seu domínio em vez do padrão (exemplo: zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Lista separada por espaços de redes IPv4 em notação CIDR para permitir 'X-Real-IP' e ignorar o limitador de taxa
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# O endpoint real onde seu servidor está hospedado, ou um ou mais proxies de endpoint do servidor
set sv_endpoints "[your_fivem_serverip]:30120"
```

Agora salve o arquivo e reinicie o servidor. Na próxima vez que o servidor iniciar, seu domínio deverá resolver para seu servidor FiveM, podendo ser usado para conexão.

Você pode verificar se está funcionando tentando acessar: `https://[your_domain]/info.json`. Se carregar corretamente, seu connect proxy está funcionando.

## Server Proxy

Um server proxy é usado para fazer proxy do endpoint do servidor para seu servidor FiveM, que faz proxy direto dos endpoints e streams TCP/UDP brutos.

### Configuração do Nginx

Para isso, você usará o módulo **stream** que faz parte do Nginx. Acesse e abra o arquivo `nginx.conf` usando o nano.

```
sudo nano /etc/nginx/nginx.conf
```

Agora copie o conteúdo abaixo no escopo raiz, substituindo os valores pela sua configuração.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Com todos os valores adaptados, salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

Para garantir que tudo está correto, especialmente a sintaxe, use `sudo nginx -t` para verificar se há erros. Se retornar sucesso, o último passo é reiniciar o Nginx para aplicar a nova configuração.

```
systemctl reload nginx.service
```

Com o serviço reiniciado, tente conectar ao seu servidor de jogos via domínio do proxy. Se funcionar, você deverá conseguir se conectar ao servidor, especificamente ao servidor que você configurou como parâmetro `targetServer`. Se tiver problemas, recomendamos verificar os logs para troubleshooting com `journalctl -f -u nginx.service` para identificar possíveis erros.

### Configuração do FiveM

Com o proxy configurado, você precisará ajustar um valor no arquivo `server.cfg` do seu servidor FiveM.

:::tip
Se você já configurou o parâmetro `set sv_endpoints` ao configurar um Connect Proxy, pode pular esta etapa.
:::

Adicione a linha abaixo na configuração, substituindo o valor pela sua configuração.

```
# O endpoint real onde seu servidor está hospedado, ou um ou mais proxies de endpoint do servidor
set sv_endpoints "[your_fivem_serverip]:30120"
```

Agora salve o arquivo e reinicie o servidor. Na próxima vez que o servidor iniciar, os endpoints TCP/UDP brutos deverão estar transmitindo através do seu reverse proxy.

Você pode verificar isso analisando o endereço IP dos jogadores, que deverá ser o endereço IP do seu servidor proxy seguido de portas alocadas aleatoriamente.

## Certificado SSL

Com seu reverse proxy FiveM configurado, recomendamos fortemente adicionar um Certificado SSL aos seus domínios usados para garantir que o site transmita dados de forma segura via HTTPS.

Confira nosso guia [Instalar Certbot](dedicated-linux-certbot.md), que cobre todo o processo de solicitação e renovação automática de Certificados SSL para seu(s) domínio(s).

## Conclusão

Parabéns, você configurou com sucesso um reverse proxy para seu servidor FiveM, garantindo várias melhorias em segurança, confiabilidade e desempenho. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />