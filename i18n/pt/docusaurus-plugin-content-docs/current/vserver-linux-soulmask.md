---
id: vserver-linux-soulmask
title: "VPS: Configuração do Servidor Dedicado Soulmask no Linux"
description: "Descubra como instalar e configurar o servidor dedicado Soulmask no seu VPS Linux de forma rápida e eficiente → Saiba mais agora"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço do servidor dedicado Soulmask nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard da ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar o processo de instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Nesta etapa, você já terminou a configuração inicial do seu servidor Soulmask. Pode fazer ajustes adicionais nos arquivos de configuração dentro do diretório do servidor.

Você poderá alterar todos os parâmetros acessando e editando o arquivo **Engine.ini** que fica dentro da pasta Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o arquivo executável **StartServer.sh** com o comando abaixo.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Você verá logs aparecerem no seu terminal indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar direto usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:18888`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Soulmask no seu VPS! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](vserver-linux-create-gameservice.md), que explica como transformar seu servidor dedicado em um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar todos os dias!

<InlineVoucher />