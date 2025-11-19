---
id: dedicated-linux-foundry
title: "Servidor Dedicado: Configuração do Foundry Dedicated Server no Linux"
description: "Descubra como instalar o Foundry Dedicated server no seu servidor Linux para um aluguel de servidores e gerenciamento de jogos sem complicações → Saiba mais agora"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço Foundry Dedicated server nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
O Foundry atualmente não oferece uma versão nativa para Linux, o que significa que há um passo extra para rodar a versão Windows no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso guia rápido [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece logando no usuário `steam` e indo para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie a instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Tenha paciência enquanto o download acontece, pode levar um tempo dependendo do tamanho do jogo. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Foundry. Pode fazer ajustes adicionais no arquivo de configuração dentro do diretório do servidor.

Você pode editar todos os parâmetros acessando o arquivo **app.cfg** que fica na raiz do diretório.
```
nano /home/steam/Foundry-Server/app.cfg
```

Confira nosso guia de [Configuração do Servidor Foundry](foundry-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o executável **FoundryDedicatedServerLauncher.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Você verá logs aparecerem no terminal indicando que o servidor iniciou com sucesso. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você pode conectar direto usando a barra de busca da lista e procurando por: `[seu_endereço_IP]:3724`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Foundry no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que ensina a configurar seu novo servidor de jogos dedicado como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, disponível todos os dias para te ajudar!