---
id: dedicated-linux-rust
title: "Servidor Dedicado: Configuração do Servidor Dedicado Rust no Linux"
description: "Aprenda como configurar um Servidor Dedicado Rust no Linux para hospedar seu jogo de forma eficiente e otimizar o desempenho do servidor → Saiba mais agora"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um Servidor Dedicado Linux e quer instalar o serviço do Servidor Dedicado Rust nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux usando o SteamCMD. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu servidor dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3 aqui](dedicated-linux-gs-interface.md).
:::

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia de [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda para isso.

Você também precisará fazer uma configuração inicial do SteamCMD se for a primeira vez que usa ele no seu servidor Linux. Use nosso guia de [Configuração SteamCMD Linux](dedicated-linux-steamcmd.md) e certifique-se que o SteamCMD está totalmente configurado antes de continuar.

## Instalação

Comece fazendo login como usuário `steam` e vá para o diretório raiz `home/steam` para manter tudo organizado.
```
sudo -u steam -s
cd ~
```

Quando estiver logado, você pode iniciar o processo de instalação com o comando abaixo para instalar facilmente via SteamCMD direto no usuário `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Tenha paciência enquanto o download é concluído, pode levar um tempo para jogos maiores. Quando terminar, uma mensagem de sucesso aparecerá confirmando.

## Configuração

Nesta etapa, você já terminou a configuração do seu servidor Rust. Pode fazer configurações adicionais através dos arquivos de configuração dentro do diretório do servidor.

Vá para o diretório raiz e crie um arquivo `.sh`. Esse será o arquivo bash usado para iniciar o servidor e ajustar vários parâmetros de configuração.
```
nano /home/steam/Rust-Server/start_server.sh
```

Agora adicione o conteúdo abaixo no arquivo bash. No comando, alguns dos parâmetros básicos e mais usados foram adicionados. Se quiser adicionar mais ou aprender sobre cada um, recomendamos visitar a [wiki oficial do Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) que traz todas as opções de configuração disponíveis.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Salve o arquivo com `CTRL+X`, depois `Y` e `Enter`. Por fim, para tornar o arquivo bash executável sem precisar de sudo, rode o comando abaixo para adicionar permissão de execução.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e execute o arquivo shell **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Você verá logs aparecerem no prompt de comando indicando que o servidor iniciou com sucesso. Note que a primeira inicialização pode demorar um pouco enquanto tudo é configurado. Se tudo ocorrer como esperado, seu servidor aparecerá na lista de servidores. Alternativamente, você pode conectar diretamente buscando por: `[seu_endereço_ip]:28015`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Rust no seu Servidor Dedicado! Como próximo passo, recomendamos conferir nosso guia de [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como transformar seu novo servidor dedicado de jogos em um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver dúvidas ou problemas, fale com nosso time de suporte, disponível para te ajudar todos os dias!