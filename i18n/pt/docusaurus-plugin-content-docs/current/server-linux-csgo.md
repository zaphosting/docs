---
id: server-linux-csgo
title: "Configuração de Servidor Dedicado CS:GO no Linux"
description: "Descubra como configurar um servidor dedicado de CS:GO no seu servidor Linux para um aluguel de servidores sem travas → Saiba mais agora"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS/servidor dedicado Linux e quer instalar o serviço de servidor dedicado de CS:GO nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu VPS/servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu VPS/servidor dedicado via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda. Também será necessário fazer a configuração inicial do SteamCMD se for a primeira vez que você o usa no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação com o comando abaixo para rodar o SteamCMD diretamente no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/CS:GO-ds' +login anonymous +app_update 730 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Nesta etapa, você já terminou a configuração do seu servidor CS:GO. Pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Vá para o diretório raiz. Dentro dele, navegue até o diretório cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.
```
nano /home/steam/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores entrem no seu servidor, você precisa gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto ao Steam. Para gerar um GSLT, acesse http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo **4465480**, que corresponde ao novo CS:GO Standalone.

Depois de gerar o token, inclua ele nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o comando de inicialização:
```
./CS:GO -dedicated +map de_dust2
```

Você verá logs aparecerem no prompt de comando indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor CS:GO no seu VPS/servidor dedicado! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso a logs, e muito mais!

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂