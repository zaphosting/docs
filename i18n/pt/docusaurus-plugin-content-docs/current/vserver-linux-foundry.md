---
id: vserver-linux-foundry
title: "VPS: Configuração do Servidor Dedicado Foundry no Linux"
description: "Descubra como instalar o servidor dedicado Foundry no seu VPS Linux para um aluguel de servidores e gerenciamento de jogos sem complicações → Saiba mais agora"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço do servidor dedicado Foundry nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
O Foundry atualmente não oferece uma versão nativa para Linux do servidor, o que significa que é necessário um passo extra para rodar a versão Windows no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez que usa isso no seu servidor Linux. Use nosso guia rápido de [Configuração da Camada de Compatibilidade Wine](vserver-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Foundry. Pode fazer configurações adicionais editando o arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **app.cfg** que fica na raiz do diretório.
```
nano /home/steam/Foundry-Server/app.cfg
```

Confira nosso guia de [Configuração do Servidor Foundry](foundry-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo executável **FoundryDedicatedServerLauncher.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Você deve ver os logs aparecerem no prompt de comando, indicando que o servidor iniciou com sucesso. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você pode conectar direto usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:3724`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Foundry no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configuração do Serviço Linux](vserver-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, disponível todos os dias para te ajudar!

<InlineVoucher />