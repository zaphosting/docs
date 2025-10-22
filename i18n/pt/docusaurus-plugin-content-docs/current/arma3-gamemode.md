---
id: arma3-gamemode
title: "Arma 3: Alterar modo de jogo"
description: "Descubra como configurar e carregar modos de jogo no seu servidor de jogos Arma 3 para uma experiência personalizada → Saiba mais agora"
sidebar_label: Alterar modo de jogo
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Defina o modo de jogo

Para alterar o modo de jogo no seu servidor de jogos Arma 3, você precisa enviar o arquivo de missão apropriado para o modo de jogo no seu servidor.

Atualmente, oferecemos os seguintes arquivos de missão sem que você precise enviá-los:

- Arma 3 Wasteland

Eles já estão no seu diretório **mpmissions**.

<InlineVoucher />

## Enviar o arquivo de missão

Para enviar o arquivo de missão, você precisa se conectar ao seu servidor via FTP antes: [Acesso via FTP](gameserver-ftpaccess.md).  
Lá, envie o arquivo de missão correspondente para o seu diretório **mpmissions**, que você encontra em **/gxxxxxx/arma3/**.  
Neste exemplo, enviamos o modo de jogo **King of the Hill** para o nosso servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Carregar o arquivo de missão no servidor

Para carregar o arquivo de missão no servidor, vá até a interface do seu servidor de jogos Arma 3 e clique na aba **Configs** no menu à esquerda:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Lá, edite o arquivo **server.cfg** e insira o nome do seu arquivo de missão conforme mostrado na imagem:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Depois disso, clique em **Salvar** e você pode iniciar seu servidor. O novo arquivo de missão será carregado.

<InlineVoucher />