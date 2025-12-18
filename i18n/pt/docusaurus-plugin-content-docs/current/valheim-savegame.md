---
id: valheim-savegame
title: "Valheim: Gerenciando savegames em servidores"
description: "Descubra como gerenciar, baixar e restaurar seus savegames de Valheim de forma eficiente usando o Savegame-Manager → Saiba mais agora"
sidebar_label: Gerenciar Savegames
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Baixar Savegames

:::info
Nota: Antes de baixar o savegame, você precisa parar o servidor para salvar o savegame ativo. Após parar o servidor, o savegame aparecerá depois de recarregar a página uma vez.
:::

Para baixar seu savegame, você pode usar o `Savegame-Manager` no webinterface:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Aqui você pode facilmente baixar seu savegame clicando no botão verde "Download":

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Importante, você precisa baixar tanto os arquivos `.db` **quanto** `.fwl`.
:::

Pronto! Agora você pode usar o backup para outros fins ou fazer o upload novamente depois.

## Fazer Upload & Ativar Savegame

Para fazer upload dos seus próprios savegames, primeiro abra o seu savegame manager.

Aqui podemos fazer upload do nosso savegame por drag&drop, deve ficar assim depois:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Lembre-se que seu savegame deve ter o mesmo nome que foi criado pelo jogo.
:::

No nosso caso, os arquivos de backup se chamam `380622.fwl` e `380622.db`.

Agora inserimos o nome do backup acima em `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Em `ZAP Backups` procuramos nosso savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Agora só precisamos apertar o botão amarelo "Restore" em ambos os arquivos e confirmar, assim nosso savegame será carregado.

Depois que o carregamento terminar, uma mensagem aparece no canto inferior direito:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Agora o servidor pode ser iniciado, o savegame enviado estará ativo no servidor.



## Autosaves

Infelizmente, Valheim ainda não suporta Autosaves. Para salvar seu progresso, o servidor precisa ser parado. O Restart Planner no webinterface pode ser usado para reiniciar seu servidor automaticamente em horários específicos:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Aqui podemos adicionar um horário para reinício Diário ou Semanal:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Depois de salvar o reinício, você pode adicionar mais de um reinício diário ou semanal.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Pronto! Seu servidor agora vai reiniciar nesses horários específicos, e o savegame será salvo durante esses reinícios.

<InlineVoucher />