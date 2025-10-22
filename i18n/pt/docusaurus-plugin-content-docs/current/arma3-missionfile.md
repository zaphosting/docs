---
id: arma3-missionfile
title: "Arma 3: Faça upload do seu próprio arquivo de missão"
description: "Descubra como fazer upload e carregar arquivos de missão personalizados no seu servidor de jogos Arma 3 para uma experiência de jogo personalizada → Saiba mais agora"
sidebar_label: Faça upload do seu próprio arquivo de missão
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Faça upload do arquivo de missão

Para fazer upload do seu próprio arquivo de missão, você precisa se conectar ao seu servidor via FTP antes: [Acesso via FTP](gameserver-ftpaccess.md).  
Lá, você deve enviar o arquivo de missão para o diretório **mpmissions**, que você encontra em **/gxxxxxx/arma3/**.  
Neste exemplo, fazemos upload do arquivo de missão **King_of_the_hill.Altis** para o nosso servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Carregando o arquivo de missão no servidor

Para carregar o arquivo de missão no servidor, vá até a interface do seu servidor de jogos Arma 3 e clique na aba **Configs** no menu à esquerda:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Lá, edite o arquivo **server.cfg** e insira o nome do seu arquivo de missão conforme mostrado na imagem:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Depois disso, clique em **Salvar** e você pode iniciar seu servidor. O novo arquivo de missão será carregado.

<InlineVoucher />