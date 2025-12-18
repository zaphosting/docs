---
id: dedicated-linux-soulmask
title: "Servidor Dedicado: Configuração do Servidor Dedicado Soulmask no Linux"
description: "Descubra como configurar e instalar um Servidor Dedicado Soulmask no Linux para um aluguel de servidores e gerenciamento de jogos sem complicações → Saiba mais agora"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do servidor dedicado Soulmask nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que o usa no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Soulmask. Pode fazer configurações adicionais editando os arquivos de configuração dentro do diretório do servidor.

Você pode ajustar todos os parâmetros acessando e editando o arquivo **Engine.ini** que fica dentro da pasta Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo executável **StartServer.sh** com o comando abaixo.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Você verá logs aparecerem no seu terminal indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:18888`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Soulmask no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como transformar seu novo servidor dedicado de jogos em um serviço. Isso traz várias vantagens, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, entre em contato com nosso time de suporte, disponível para te ajudar todos os dias!