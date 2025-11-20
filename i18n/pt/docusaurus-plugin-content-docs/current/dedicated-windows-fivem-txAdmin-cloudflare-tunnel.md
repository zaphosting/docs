---
id: dedicated-windows-fivem-txAdmin-cloudflare-tunnel
title: "Servidor Dedicado: Configurando Cloudflare Tunnel para txAdmin"
description: "Descubra como configurar o Cloudflare Tunnel para txAdmin para mais segurança → Saiba mais agora"
sidebar_label: Cloudflare Tunnel para txAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Se você quer adicionar uma camada extra de segurança além da Proteção DDoS já oferecida pela ZAP-Hosting, pode proteger ainda mais sua instância txAdmin usando um Cloudflare Tunnel. Essa configuração garante que a interface web do txAdmin não fique mais exposta pelo endereço IP público do seu servidor, mas sim acessada com segurança pelo seu próprio domínio. Quaisquer ataques direcionados à porta do txAdmin são filtrados pelo Cloudflare, enquanto você pode bloquear completamente a porta local sem perder o acesso.



## Pré-requisitos

Para usar um Cloudflare Tunnel no Windows, você precisa de um Servidor Dedicado Windows, uma instalação txAdmin funcionando, a porta do seu txAdmin e um domínio que já esteja conectado à sua conta Cloudflare. Se seu domínio ainda não estiver conectado ao Cloudflare, siga primeiro nosso [guia de Configuração do Cloudflare](domain-cloudflare-setup.md).

O Cloudflare Tunnel funciona criando uma conexão criptografada de saída do seu servidor para o Cloudflare, assim nenhuma porta pública precisa ficar aberta para o txAdmin.


## Configuração do Cloudflare

Antes de instalar o cloudflared no seu vServer Windows, você cria e configura o túnel diretamente no seu dashboard do Cloudflare.

Faça login na sua conta Cloudflare e navegue até a seção Zero Trust. Lá você pode criar um novo túnel que encaminhará o tráfego para a interface do seu txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Instalação do Cloudflare Tunnel

O Cloudflare oferece uma ferramenta pequena chamada cloudflared. A instalação do cloudflared no Windows é bem simples. Primeiro, baixe o [instalador para Windows](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Depois que o arquivo for baixado, execute o instalador e finalize a instalação. Após a instalação, abra o Prompt de Comando como Administrador. Nesta janela, execute o comando fornecido:

```
cloudflared.exe service install eyJhIjoiMj...
```

Depois de executar o comando, seu servidor vai se conectar ao Cloudflare através do túnel. Se a configuração for concluída com sucesso, o status na seção Connectors mudará para **Connected**, confirmando que o túnel está ativo e funcionando.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Configurar o Cloudflare Tunnel

Agora, configure as opções de Roteamento de Tráfego. Crie uma nova entrada de subdomínio da sua escolha. Neste exemplo, o subdomínio `txAdmin` é usado, que será usado para acessar a interface do txAdmin.

Selecione o domínio que deseja usar, depois defina o tipo de serviço para **HTTP** e insira **localhost:porta** como URL. Substitua porta pela porta definida para sua instância txAdmin. No exemplo, será usada a porta 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Recomendação de Segurança
Ao invés de usar a porta padrão do txAdmin **40120**, é recomendado usar uma porta diferente para melhorar a segurança.
:::



## Configurar o Firewall do Windows

Para evitar que a porta fique acessível fora do túnel, configure o Firewall do Windows para que a porta correspondente aceite conexões apenas do localhost. Limite o campo de endereço remoto da regra para 127.0.0.1. Isso força todo o tráfego a vir do sistema local e bloqueia qualquer acesso externo, garantindo que o serviço por trás do cloudflared não seja acessível pela rede fora do túnel.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Com essa configuração, qualquer tentativa de acesso de fora da máquina será bloqueada, garantindo que o serviço por trás do cloudflared não seja acessível fora do túnel.



## Conclusão

Assim que o Cloudflare Tunnel estiver ativo, sua interface txAdmin fica disponível apenas pelo seu próprio domínio, enquanto todas as requisições passam pelo Cloudflare, onde são filtradas e protegidas.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

O acesso direto à porta do txAdmin pelo IP do servidor é bloqueado, eliminando completamente a superfície original de ataque. Isso torna o txAdmin estável, seguro e acessível de forma confiável mesmo se alguém tentar sobrecarregar ou atacar a interface.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />