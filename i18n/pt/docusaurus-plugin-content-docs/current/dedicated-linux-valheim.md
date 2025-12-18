---
id: dedicated-linux-valheim
title: "Servidor Dedicado: Configuração do Servidor Dedicado Valheim no Linux"
description: "Descubra como configurar um Servidor Dedicado Valheim no Linux para hospedar seu jogo de forma eficiente e otimizar o desempenho do seu servidor → Saiba mais agora"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do Servidor Dedicado Valheim nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para instalar facilmente via SteamCMD direto no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Nesta etapa, você já terminou a configuração do seu servidor Valheim. Pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Vá para o diretório raiz e abra o arquivo `.sh`. Você pode editar os parâmetros aqui.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo shell **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Você deverá ver logs aparecerem no prompt de comando indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:2456`.

:::info
Se não conseguir conectar e receber erros `PlayFab` no console, pode ser necessário desabilitar o suporte a crossplay para resolver, pois este é um problema atual na versão Linux. Para isso, rode `nano /home/steam/Valheim-Server/start_server.sh` e remova a flag `-crossplay`.

Se precisar do crossplay, uma solução alternativa é instalar a versão Windows e usar o **Wine** como camada de compatibilidade. Use nosso rápido guia [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar. Quando pronto, instale a versão Windows do servidor Valheim via SteamCMD com:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Depois de instalado, use o comando abaixo para iniciar a versão Windows via Wine: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Valheim no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso a logs, entre outros!

Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!