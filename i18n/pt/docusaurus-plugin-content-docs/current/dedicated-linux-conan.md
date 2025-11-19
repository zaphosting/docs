---
id: dedicated-linux-conan
title: "Servidor Dedicado: Configuração do Servidor Dedicado Conan Exiles no Linux"
description: "Descubra como configurar um Servidor Dedicado Conan Exiles no Linux para um aluguel de servidores e gerenciamento sem complicações → Saiba mais agora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um Servidor Dedicado Linux e quer instalar o serviço do servidor dedicado de Conan Exiles nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
Conan Exiles atualmente não oferece uma versão nativa de servidor para Linux, o que significa que há um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso rápido guia de [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação usando o comando abaixo para rodar a instalação via SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Conan Exiles. Pode fazer configurações adicionais através de um arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo de configuração **WindowsServerEngine.ini** que fica no seguinte caminho:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Para adicionar opções de configuração, basta incluir parâmetros específicos. Por exemplo, para definir nome do servidor, senha e senha de admin, adicione o seguinte no arquivo:
```
[OnlineSubsystem]
ServerName=[seu_nome_do_servidor]
ServerPassword=[sua_senha]

[ServerSettings]
AdminPassword=[sua_senha_admin]
```

Recomendamos dar uma olhada na [Wiki do Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para uma lista completa de opções disponíveis.

## Iniciando & Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo executável **ConanSandboxServer.exe** usando o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine64** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Você verá vários logs aparecerem no terminal, indicando que o servidor está iniciando. Você poderá se conectar diretamente buscando o servidor na lista ou conectando direto via: `[seu_endereço_ip]:7777`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Conan Exiles no seu servidor dedicado! Como próximo passo, recomendamos conferir nosso guia de [Configuração do Serviço Linux](dedicated-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso a logs, entre outros!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!