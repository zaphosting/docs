---
id: fivem-mastodon
title: "FiveM: Configurando um feed de atividades para o seu servidor"
description: "Descubra como integrar um feed de atividades do Mastodon no seu servidor para atualizações em tempo real e maior engajamento da comunidade → Saiba mais agora"
sidebar_label: Configurar Feed de Atividades
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparação

Para configurar um feed de atividades no nosso servidor, primeiro precisamos registrar uma conta no Mastodon.

## Configuração

Agora abrimos nosso Perfil no Mastodon e copiamos nosso nome de usuário, no nosso caso é `zaphosting@mstdn.instance`

Agora podemos abrir as "Configs" no nosso servidor FiveM e editar o server.cfg.

Inserimos a seguinte linha no final do arquivo:

```
sets activitypubFeed username
```

"username" deve ser substituído pelo seu nome de usuário do Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Agora salvamos o arquivo e reiniciamos nosso servidor, após cerca de 20 minutos a aba "Feed" estará disponível depois que seu servidor for iniciado.


<InlineVoucher />
