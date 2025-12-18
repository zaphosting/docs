---
id: dedicated-linux-dods
title: "Servidor Dedicado: Configuração do Servidor Day of Defeat: Source no Linux"
description: "Descubra como configurar um servidor dedicado de Day of Defeat: Source no seu VPS Linux de forma rápida e eficiente → Saiba mais agora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado de Day of Defeat: Source nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard da ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda. Também será necessário fazer a configuração inicial do SteamCMD se for a primeira vez que você usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Tenha paciência enquanto o download termina, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Day of Defeat: Source. Você pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Vá até o diretório raiz. Dentro dele, navegue até a pasta cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você precisa gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto ao Steam. Para gerar um GSLT, acesse http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo 232290, que corresponde ao Day of Defeat: Source.

Depois de gerar o token, inclua ele nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório principal do jogo e execute o comando de inicialização:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Você verá logs aparecerem no seu terminal indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores, procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Day of Defeat: Source no seu VPS! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂