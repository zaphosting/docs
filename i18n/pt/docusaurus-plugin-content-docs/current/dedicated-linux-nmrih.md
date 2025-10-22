---
id: dedicated-linux-nmrih
title: "Servidor Dedicado: Configuração do Servidor Dedicado No More Room In Hell no Linux"
description: "Descubra como configurar um servidor dedicado No More Room In Hell no seu VPS Linux de forma eficiente → Saiba mais agora"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado No More Room In Hell nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em apenas alguns cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso. Também será necessário fazer uma configuração inicial do SteamCMD se for a primeira vez que você o usa no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se de que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação usando o comando abaixo para instalar facilmente via SteamCMD diretamente no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, você verá uma mensagem de sucesso confirmando isso.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor No More Room In Hell. Você pode fazer configurações adicionais editando diretamente o arquivo de inicialização.

Vá para o diretório raiz. Dentro dele, navegue até o diretório cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## Registrando o Token GSL

Para que outros jogadores possam entrar no seu servidor, você precisa gerar e incluir um Game Server Login Token (GSLT). Esse token autentica seu servidor junto ao Steam. Para gerar um GSLT, visite http://steamcommunity.com/dev/managegameservers e crie um token usando o ID do jogo 317670, que corresponde ao No More Room In Hell.

Depois de obter o token, inclua-o nos parâmetros de inicialização do servidor com `+sv_setsteamaccount <TOKEN>`.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o seguinte comando de inicialização:
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Você deverá ver logs aparecerem no seu terminal, indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores, procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor No More Room In Hell no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configuração do Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />