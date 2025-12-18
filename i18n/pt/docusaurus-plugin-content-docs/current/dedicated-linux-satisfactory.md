---
id: dedicated-linux-satisfactory
title: "Servidor Dedicado: Configuração do Servidor Dedicado Satisfactory no Linux"
description: "Comece a instalar e configurar um Servidor Dedicado Satisfactory no seu servidor Linux para um aluguel de servidores de jogos sem complicações → Saiba mais agora"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço de Servidor Dedicado Satisfactory nele? Você está no lugar certo. Neste guia, vamos explicar passo a passo como instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que o usa no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se de que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz do usuário `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação usando o comando abaixo para começar a instalação via SteamCMD diretamente no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar com sucesso, uma mensagem confirmando aparecerá.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Satisfactory. Pode fazer configurações adicionais editando os arquivos de configuração dentro do diretório do servidor.

Você poderá ajustar todos os parâmetros acessando e editando os arquivos **Engine.ini** e **GameUserSettings.ini** que ficam na pasta Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o arquivo shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Você deverá ver os logs aparecerem no seu terminal, indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:15777`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Satisfactory no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia de [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso a logs, entre outros!

Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, disponível para te ajudar todos os dias!