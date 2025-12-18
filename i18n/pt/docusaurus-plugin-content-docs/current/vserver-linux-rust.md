---
id: vserver-linux-rust
title: "VPS: Configuração de Servidor Dedicado Rust no Linux"
description: "Aprenda como configurar um servidor dedicado Rust no seu VPS Linux usando SteamCMD para um aluguel de servidores de jogos tranquilo → Saiba mais agora"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Linux e quer instalar o serviço de servidor dedicado Rust nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Vamos usar o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda com isso.

Você também precisará fazer a configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia [Configuração SteamCMD Linux](vserver-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, pode iniciar a instalação com o comando abaixo para rodar o SteamCMD direto no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Tenha paciência enquanto o download acontece, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso vai aparecer confirmando.

## Configuração

Neste ponto, você já terminou a configuração do seu servidor Rust. Pode fazer configurações adicionais através dos arquivos de configuração dentro do diretório do servidor.

Vá para o diretório raiz e crie um arquivo `.sh`. Esse será o arquivo bash usado para iniciar o servidor e ajustar vários parâmetros de configuração.
```
nano /home/steam/Rust-Server/start_server.sh
```

Agora adicione o conteúdo abaixo no arquivo bash. No comando, alguns dos parâmetros básicos e mais usados já estão incluídos. Se quiser adicionar mais ou aprender sobre cada um, recomendamos dar uma olhada na [wiki oficial do Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver), que traz todas as opções de configuração disponíveis.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Salve o arquivo com `CTRL+X`, depois `Y` e `Enter`. Por fim, para deixar o arquivo bash executável sem precisar de sudo, rode o comando abaixo para adicionar permissão de execução.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Iniciando & Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo shell **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Você deve ver os logs aparecerem no prompt, indicando que o servidor iniciou com sucesso. Lembre-se que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Se tudo ocorrer como esperado, seu servidor vai aparecer na lista de servidores. Alternativamente, você pode conectar direto buscando por: `[seu_endereço_ip]:28015`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Rust no seu VPS! Como próximo passo, recomendamos conferir nosso guia [Configurar Serviço Linux](vserver-linux-create-gameservice.md), que explica como transformar seu novo servidor dedicado de jogos em um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar todos os dias!

<InlineVoucher />