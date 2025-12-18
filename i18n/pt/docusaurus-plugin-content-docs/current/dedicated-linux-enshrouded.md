---
id: dedicated-linux-enshrouded
title: "Servidor Dedicado: Configuração do Servidor Dedicado Enshrouded Linux"
description: "Descubra como instalar e rodar o Servidor Dedicado Enshrouded no Linux para um aluguel de servidores e gerenciamento sem complicações → Saiba mais agora"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do Servidor Dedicado Enshrouded nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

:::info Camada de Compatibilidade Wine
O Enshrouded atualmente não oferece uma versão nativa para servidor Linux, o que significa que é necessário um passo extra para rodar a versão Windows do servidor no Linux.

Você precisa fazer uma instalação única da camada de compatibilidade **Wine** se for a primeira vez usando isso no seu servidor Linux. Use nosso guia rápido de [Configuração da Camada de Compatibilidade Wine](dedicated-linux-wine.md) para configurar antes de continuar.
:::

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, inicie o processo de instalação com o comando abaixo para usar o SteamCMD diretamente no usuário `steam`. Usando o parâmetro `+@sSteamCmdForcePlatformType windows`, você força a instalação dos binários Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando finalizar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Enshrouded. Pode fazer configurações adicionais editando o arquivo de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **enshrouded_server.json** que fica no diretório raiz.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Confira nosso guia de [Configuração do Servidor Enshrouded](enshrouded-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o executável **enshrouded_server.exe** com o comando abaixo. Não esqueça de usar os comandos **xvfb-run** e **wine** para rodar via camada de compatibilidade Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Você verá vários logs aparecerem no terminal. Se aparecer a mensagem `[Session] 'HostOnline' (up)!`, isso indica que o servidor iniciou com sucesso. Você poderá se conectar diretamente adicionando os detalhes do servidor na aba **Find Games**: `[seu_endereço_ip]:15636`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Enshrouded no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia de [Configuração do Serviço Linux](dedicated-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar todos os dias!