---
id: minecraft-add-own-world
title: "Minecraft: Adicionando seu próprio mundo no servidor"
description: "Aprenda como enviar e configurar mundos personalizados de Minecraft no seu servidor para uma experiência de jogo única → Saiba mais agora"
sidebar_label: Adicione seu próprio mundo
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer usar seu próprio mundo ou um mundo baixado da internet no seu servidor? Então você está no lugar certo! Tudo que você precisa é do seu mundo e de um cliente FTP. Se você não sabe o que é um cliente FTP e como usá-lo, dê uma olhada neste guia: [Acesso via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Como enviar MAPAS personalizados no seu servidor de Minecraft" description="Prefere entender vendo as coisas em ação? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais legal possível!"/>

Depois de estabelecer a conexão com o servidor via FTP, você pode começar a configurar seu próprio mundo. Para isso, primeiro vá até o diretório onde o mundo atual está localizado. Ele fica no seguinte caminho: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Agora o novo mundo precisa ser enviado para esse diretório. Você pode deletar e substituir a pasta **world** antiga ou enviar o novo mundo com um nome diferente. Neste exemplo, enviamos o mundo com um nome novo:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Agora o mundo recém-enviado só precisa ser configurado no arquivo **server.properties**. Você encontra ele na **administração do servidor de jogos** em **Configs**. Lá você deve ajustar o valor do comando **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Depois de reiniciar o servidor, o novo mundo já deve estar ativo. Curta seu novo mundo! 🙂

<InlineVoucher />

<InlineVoucher />