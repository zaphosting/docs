---
id: vserver-linux-proxy
title: "VPS: Configurar um Reverse Proxy com nginx no Linux"
description: "Descubra como configurar um reverse proxy seguro e eficiente para sites e servidores de jogos para melhorar o acesso e a proteção → Saiba mais agora"
sidebar_label: Reverse Proxy
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Um servidor reverse proxy é um servidor que atua como intermediário entre os usuários finais e outro servidor. Sites e servidores de jogos são motivos populares para implementar um reverse proxy, cada um com suas várias vantagens, incluindo segurança, facilidade de acesso e proteção.

Neste guia, vamos explorar o processo de configuração de um reverse proxy para uso geral em sites, assim como um voltado para servidores de jogos.

<InlineVoucher />

## Preparação

Para configurar um reverse proxy, você vai precisar de um **Servidor Linux** que hospedará seu proxy. Neste exemplo, usaremos o Ubuntu como distro Linux, mas os passos de instalação devem ser bem similares para a maioria das distribuições Linux.

:::tip Especificações recomendadas para VPS
Para um reverse proxy focado em servidores de jogos, recomendamos fortemente adquirir velocidades de rede mais altas, especialmente se seu servidor tiver muitos jogadores. Isso porque seu VPS vai transmitir TCP/UDP bruto diretamente entre o cliente (jogador) e o servidor de jogos. Caso contrário, um servidor com especificações básicas e upgrades mínimos deve ser suficiente para um proxy relacionado a sites. :)
:::

Recomendamos configurar o proxy com um **Domínio** que você possua. Para cada subdomínio que planeja usar, você deve criar um registro DNS `A` (por exemplo, `zapdocs.example.com`), apontando para o Endereço IP do seu __VPS Linux__. É assim que os usuários vão acessar seu site ou servidor de jogos.

### Acessando o VPS

Com seu VPS Linux pronto, você precisará se conectar a ele. Use nosso guia de [Acesso Inicial via SSH](vserver-linux-ssh.md) para aprender como fazer isso.

### Instalando o Nginx

Você vai usar o Nginx para hospedar o servidor reverse proxy, pois é um servidor web open-source altamente performático e popular.

Agora que você acessou seu VPS, use o comando abaixo para instalar o Nginx.

```
sudo apt install nginx
```

Depois de instalado, você precisará ajustar seu firewall para garantir que o serviço seja acessível pela internet. Para este guia, usaremos o **Firewall UFW**, já que o Nginx se registra como um app, facilitando o ajuste das configurações. Você pode aprender mais sobre o Firewall UFW no nosso guia [Dicas de Segurança Linux](vserver-linux-security-tips.md).

:::note
Se você estiver usando outros firewalls (como Iptables), certifique-se de liberar o acesso relevante para o Nginx, especificamente nas portas 80 e 443, onde o serviço nginx opera.
:::

Você pode checar os perfis do Nginx rodando `sudo ufw app list`. Neste cenário, queremos selecionar a opção **Nginx Full**, que libera acesso HTTP para testes e HTTPS para uso em produção.

```
sudo ufw allow 'Nginx Full'
```

Com o Nginx configurado, tente acessar a página via navegador para garantir que está funcionando como esperado. Se a página de teste funcionar, você pode continuar com o guia.

```
http://[seu_endereço_ip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Para Sites

Um reverse proxy para sites pode ser muito útil por vários motivos, incluindo redirecionar para recursos internos do servidor, como uma instância do vaultwarden (sem precisar da porta na URL), ou encaminhar o usuário para conteúdo externo, o que é útil para balanceamento de carga e proteção.

Um dos maiores benefícios é que seu servidor pode lidar com requisições de quantas fontes/domínios forem necessárias, ao contrário de um único servidor web rodando na porta 80/443.

### Configuração do Nginx

Comece criando uma entrada dentro do diretório do Nginx para o domínio que você escolheu anteriormente, que normalmente será um subdomínio como `zapdocs.example.com`, como no nosso exemplo.

:::important
Garanta que você configurou um registro `A` apontando para o Endereço IP do seu servidor proxy antes de continuar. Sem isso, o domínio e os passos seguintes não funcionarão como esperado.
:::

Acesse a pasta dos blocos de servidor com o comando abaixo. É aqui que você vai armazenar todas as suas configurações de proxy.

```
cd /etc/nginx/sites-available/
```

Agora use o comando abaixo para criar um novo arquivo de configuração. Recomendamos usar o domínio como nome do arquivo, para facilitar a identificação (ex: zapdocs.example.com). Substitua `[your_filename]` pelo nome que quiser usar.

```
sudo nano [your_filename]
```

Isso vai abrir o editor nano, onde você poderá inserir o conteúdo. Copie o template abaixo para o editor. Você precisa ajustar `[your_domain]` com o domínio que quer proxyar e `[your_target_server]` com o servidor alvo que deseja alcançar.

```
upstream targetServer {
    # Adicione o servidor alvo que deseja alcançar. Pode ser:
    # Redirecionamento interno "localhost" (ex: 127.0.0.1:9090)
    # Servidor externo (ex: 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domínio que será atendido (ex: zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Com todos os valores adaptados para sua configuração, salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

Agora você precisa ativar o bloco de servidor criando um link simbólico para o diretório ativo.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Para garantir que está tudo correto, especialmente a sintaxe, use `sudo nginx -t` para verificar se há erros. Se retornar sucesso, o último passo é reiniciar o Nginx para aplicar o novo bloco de servidor.

```
systemctl reload nginx.service
```

Com o serviço reiniciado, teste acessar o domínio que você usou para o reverse proxy no navegador. Se funcionar, a página deve carregar o conteúdo desejado que você configurou como parâmetro `targetServer`. Se tiver problemas, recomendamos checar os logs para troubleshooting com `journalctl -f -u nginx.service` para identificar possíveis erros.

## Para Servidores de Jogos

Um reverse proxy para servidores de jogos pode ser muito útil por vários motivos, incluindo fornecer uma camada extra de segurança e confiabilidade ao melhorar a mitigação e restringir o acesso ao host principal.

:::tip
A maioria dos servidores dedicados de jogos deve funcionar perfeitamente com um proxy de endpoint TCP/UDP bruto que você vai configurar. Porém, uma pequena minoria de jogos, como BeamMP, pode não funcionar bem com VPNs e proxies, então você terá que testar caso a caso.
:::

### Configuração do Nginx

Para isso, é necessário o módulo **Nginx Stream**, que não faz parte da instalação padrão do Nginx.

#### Instalar módulo Nginx stream

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Configuração do Nginx stream

Você vai adicionar um novo bloco `stream` no arquivo principal `nginx.conf`, onde definirá o servidor upstream e a porta pela qual ele será acessado no seu proxy.

Abra o arquivo com o comando:

```
sudo nano /etc/nginx/nginx.conf
```

Agora, copie o template abaixo para dentro do arquivo, que adiciona um bloco `stream`. Substitua `[your_target_server]` pelo servidor para o qual deseja transmitir, incluindo a porta relevante (como `:30120` para FiveM). Da mesma forma, substitua `[your_port_listener]` pela porta pela qual as pessoas vão acessar seu conteúdo via proxy.

```
stream {
    upstream targetServer {
        # Adicione o servidor alvo que deseja alcançar (ex: 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Porta que escuta e faz a ponte das conexões (ex: 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Na prática, o Nginx vai escutar na porta específica por conexões e transmitir tudo para o servidor alvo que você definiu (do seu proxy para o servidor real de jogos).

Com todos os valores adaptados para sua configuração, salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

Para garantir que está tudo correto, especialmente a sintaxe, use `sudo nginx -t` para verificar se há erros. Se retornar sucesso, o último passo é reiniciar o Nginx para aplicar a nova configuração.

```
systemctl reload nginx.service
```

Com o serviço reiniciado, tente conectar ao seu servidor de jogos via domínio do proxy. Se funcionar, você deve conseguir se conectar ao servidor de jogos que configurou como parâmetro `targetServer`. Se tiver problemas, recomendamos checar os logs para troubleshooting com `journalctl -f -u nginx.service` para identificar possíveis erros.

## Certificado SSL

Com seu reverse proxy configurado, recomendamos fortemente adicionar um Certificado SSL aos seus domínios usados para garantir que o site transmita dados de forma segura via HTTPS. Confira nosso guia [Instalar Certbot](dedicated-linux-certbot.md), que cobre todo o processo de solicitação e renovação automática de Certificados SSL para seu(s) domínio(s).

## Conclusão

Parabéns, você configurou com sucesso um reverse proxy para um site ou seu servidor de jogos (ou ambos :), garantindo várias melhorias em segurança, confiabilidade e desempenho. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />