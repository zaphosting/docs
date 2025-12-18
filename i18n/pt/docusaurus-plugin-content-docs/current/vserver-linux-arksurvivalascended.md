---
id: vserver-linux-arksurvivalascended
title: "VPS: Configuração do Servidor Dedicado ARK Survival Ascended no Linux"
description: "Descubra como configurar o servidor dedicado ARK: Survival Ascended no seu VPS Linux para uma gestão de gameplay sem complicações → Saiba mais agora"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado ARK: Survival Ascended nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
ARK: Survival Ascended ainda não oferece uma versão nativa de servidor para Linux, o que significa que há um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso guia rápido de [Configuração da Camada de Compatibilidade Wine](vserver-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor ARK: Survival Ascended. Pode fazer configurações adicionais editando o arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **GameUserSettings.ini** que fica na pasta Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Confira nosso [guia de Configuração do Servidor ARK: Survival Ascended](ark-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo executável **ArkAscendedServer.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Infelizmente, por falta de suporte, você não pode rodar a versão do servidor com Anti-Cheat Battleye no Linux. Isso porque o Anti-Cheat não é compatível.
:::

Você deve ver logs aparecerem no prompt de comando indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar direto usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:7777`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor ARK: Survival Ascended no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configuração de Serviço Linux](vserver-linux-create-gameservice.md), que explica como transformar seu servidor dedicado em um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar você todos os dias!

<InlineVoucher />