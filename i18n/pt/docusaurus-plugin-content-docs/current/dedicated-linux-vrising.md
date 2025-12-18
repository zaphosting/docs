---
id: dedicated-linux-vrising
title: "Servidor Dedicado: Configuração do Servidor Dedicado V-Rising no Linux"
description: "Descubra como configurar o Servidor Dedicado V-Rising no Linux para um aluguel de servidores e gerenciamento sem complicações → Saiba mais agora"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do Servidor Dedicado V-Rising nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se de que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
O V-Rising atualmente não oferece uma versão nativa para servidor Linux, o que significa que há um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez que usa isso no seu servidor Linux. Use nosso rápido guia de [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar a instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários do Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor V-Rising. Pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Você pode ajustar todos os parâmetros de configuração acessando e editando os arquivos **ServerGameSettings.json** e **ServerHostSettings.json** que ficam na pasta Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Confira nosso guia de [Configuração do Servidor V-Rising](vrising-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo, onde recomendamos criar uma cópia do arquivo batch de exemplo.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Você pode editar o arquivo se quiser. Quando estiver pronto, execute o novo arquivo executável **start_server.bat** com o comando abaixo. Lembre-se de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Você deve ver os logs aparecerem no terminal, indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar direto usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:8211`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor V-Rising no seu Servidor Dedicado! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configuração do Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar você todos os dias!