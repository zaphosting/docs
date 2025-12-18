---
id: vserver-linux-conan
title: "VPS: Configuração do Servidor Dedicado Conan Exiles no Linux"
description: "Descubra como instalar e rodar um servidor dedicado de Conan Exiles no seu VPS Linux usando SteamCMD e compatibilidade com Wine → Saiba mais agora"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Linux e quer instalar o serviço de servidor dedicado de Conan Exiles nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard da ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
Conan Exiles atualmente não oferece uma versão nativa de servidor para Linux, então é necessário um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso guia rápido de [Configuração da Camada de Compatibilidade Wine](vserver-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação com o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Conan Exiles. Pode fazer configurações adicionais editando o arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **WindowsServerEngine.ini** que fica no seguinte caminho:
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

Recomendamos dar uma olhada na [Wiki de Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para uma lista completa de opções disponíveis.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e rode o executável **ConanSandboxServer.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine64** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Você verá vários logs aparecendo no terminal indicando que o servidor está iniciando. Você poderá se conectar direto procurando o servidor na lista ou conectando direto via: `[seu_endereço_ip]:7777`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor de Conan Exiles no seu VPS! Como próximo passo, recomendamos conferir nosso guia de [Configurar Serviço Linux](vserver-linux-create-gameservice.md), que explica como transformar seu servidor dedicado em um serviço. Isso traz vários benefícios como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível todos os dias para te ajudar!

<InlineVoucher />