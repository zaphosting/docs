---
id: dedicated-linux-palworld
title: "Servidor Dedicado: Configuração do Servidor Dedicado Palworld no Linux"
description: "Descubra como configurar e instalar um Servidor Dedicado Palworld no Linux para uma gestão de gameplay sem complicações → Saiba mais agora"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço do servidor dedicado Palworld nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Tenha paciência enquanto o download acontece, pode levar um tempo dependendo do tamanho do jogo. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a instalação do seu servidor Palworld. Pode fazer configurações adicionais através de um arquivo de configuração dentro do diretório do servidor.

Você precisará criar uma cópia do arquivo de configuração padrão e colocá-la na pasta de salvamento antes de editar.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Com a cópia criada, edite os parâmetros principais abrindo o arquivo **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Confira nosso guia de [Configuração do Servidor Palworld](palworld-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o arquivo shell **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Você verá logs aparecerem no seu terminal, incluindo o log da versão do jogo, indicando que o servidor iniciou com sucesso. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você pode conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:8211`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Palworld no seu Servidor Dedicado! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como transformar seu servidor dedicado de jogos em um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, entre em contato com nosso time de suporte, disponível para te ajudar todos os dias!