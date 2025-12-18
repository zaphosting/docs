---
id: dedicated-linux-l4d2
title: "Servidor Dedicado: Configuração do Servidor Dedicado Left 4 Dead 2 no Linux"
description: "Descubra como configurar um servidor dedicado de Left 4 Dead 2 no seu VPS Linux para uma jogatina multiplayer sem travas → Saiba mais agora"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado de Left 4 Dead 2 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Vamos usar o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda. Também será necessário fazer a configuração inicial do SteamCMD se for a primeira vez que você usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar o processo de instalação usando o comando abaixo para rodar a instalação via SteamCMD direto no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

Tenha paciência enquanto o download acontece, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso vai aparecer confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Left 4 Dead 2. Você pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Vá para o diretório raiz. Dentro dele, navegue até o diretório cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você precisa gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto ao Steam. Para gerar um GSLT, acesse http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo 222840, que corresponde ao Left 4 Dead 2.

Depois de gerar o token, inclua ele nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o comando de inicialização:
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Você deve ver os logs aparecerem no seu terminal, indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar direto usando a barra de busca na lista de servidores e procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor de Left 4 Dead 2 no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂