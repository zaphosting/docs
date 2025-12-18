---
id: dedicated-linux-mythofempires
title: "Servidor Dedicado: Configuração do Servidor Dedicado Myth of Empires no Linux"
description: "Descubra como instalar o Servidor Dedicado Myth of Empires no Linux e otimizar seu setup de aluguel de servidores → Saiba mais agora"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do Servidor Dedicado Myth of Empires nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
Myth of Empires atualmente não oferece uma versão nativa do servidor para Linux, o que significa que há um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez que usa isso no seu servidor Linux. Use nosso guia rápido de [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece logando no usuário `steam` e indo para o diretório raiz do usuário `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação usando o comando abaixo para rodar a instalação via SteamCMD direto no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Myth of Empires. Pode fazer configurações adicionais através de vários arquivos de configuração dentro do diretório do servidor.

Você poderá ajustar todos os parâmetros acessando e editando os arquivos `.ini` dentro da pasta Saved. Use o comando `ls` para ver quais arquivos existem.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Para editar um arquivo, basta rodar `nano ./[nome_do_arquivo].ini` para abrir o editor nano.

Confira nosso guia de [Configuração do Servidor Myth of Empires](moe-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o executável **MOEServer.exe** com o comando abaixo. Certifique-se de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Você verá logs aparecerem no prompt, indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Você poderá se conectar diretamente buscando os detalhes do servidor na aba **Custom Server**: `[seu_endereço_ip]:15636`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Myth of Empires no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia de [Configuração do Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!