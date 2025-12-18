---
id: vserver-linux-cscz
title: "VPS: Configuração do Servidor Dedicado Counter-Strike: Condition Zero no Linux"
description: "Descubra como configurar um servidor dedicado de Counter-Strike: Condition Zero em um VPS Linux para uma hospedagem de jogos sem complicações → Saiba mais agora"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado de Counter-Strike: Condition Zero nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu VPS? Assim, você configura serviços de servidor de jogos com integração direta ao seu dashboard da ZAP-Hosting, em poucos cliques! Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda. Também será necessário fazer a configuração inicial do SteamCMD se for a primeira vez que você usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Com o login feito, você pode iniciar a instalação usando o comando abaixo para rodar o SteamCMD diretamente como usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor Counter-Strike: Condition Zero. Para configurar mais opções do servidor, edite diretamente o arquivo de inicialização.

Vá para o diretório raiz. Dentro dele, navegue até o diretório cfg e abra o arquivo `server.cfg`. Lá você pode editar as opções do servidor.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o comando de inicialização:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Você verá os logs aparecerem no seu terminal, indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Alternativamente, você pode se conectar diretamente usando a barra de busca na lista de servidores, procurando por: `[seu_endereço_ip]:2456`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor de Counter-Strike: Condition Zero no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia [Configurar Serviço Linux](vserver-linux-create-gameservice.md), que explica como transformar seu servidor dedicado em um serviço. Isso traz vários benefícios, como inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso aos logs, entre outros!

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />