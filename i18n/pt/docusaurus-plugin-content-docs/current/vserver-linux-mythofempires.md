---
id: vserver-linux-mythofempires
title: "VPS: Configuração do Servidor Dedicado Myth of Empires no Linux"
description: "Descubra como instalar e rodar o servidor dedicado Myth of Empires no seu VPS Linux para um aluguel de servidores sem complicações → Saiba mais agora"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço do servidor dedicado Myth of Empires nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
Atualmente, Myth of Empires não oferece uma versão nativa do servidor para Linux, o que significa que há um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso rápido guia de [Configuração da Camada de Compatibilidade Wine](vserver-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece logando como o usuário `steam` e indo para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Myth of Empires. Pode fazer configurações adicionais editando vários arquivos de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando os arquivos `.ini` dentro da pasta Saved. Use o comando `ls` para ver os arquivos disponíveis.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Para editar um arquivo, rode `nano ./[nome_do_arquivo].ini` para abrir o editor nano.

Confira nosso guia de [Configuração do Servidor Myth of Empires](moe-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o executável **MOEServer.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Você verá logs aparecerem no terminal, indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Você poderá se conectar direto procurando os detalhes do servidor na aba **Custom Server**: `[seu_endereço_ip]:15636`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Myth of Empires no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configuração do Serviço Linux](vserver-linux-create-gameservice.md), que mostra como configurar seu servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível todos os dias para te ajudar!

<InlineVoucher />