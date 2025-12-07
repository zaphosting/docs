---
id: fivem-mastodon
title: "FiveM: Configura un feed attività per il tuo server"
description: "Scopri come integrare un feed attività Mastodon nel tuo server per aggiornamenti in tempo reale e una community più coinvolta → Scopri di più ora"
sidebar_label: Configura Feed Attività
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparazione

Per configurare un feed attività sul nostro server, dobbiamo prima registrarci su Mastodon.

## Configurazione

Ora apriamo il nostro profilo Mastodon e copiamo il nostro username, nel nostro caso è `zaphosting@mstdn.instance`

Adesso apriamo le "Configs" del nostro server FiveM e modifichiamo il server.cfg.

Inseriamo la seguente riga in fondo al file:

```
sets activitypubFeed username
```

Sostituisci "username" con il tuo username Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Salviamo il file e riavviamo il server, dopo circa 20 minuti la scheda "Feed" sarà disponibile una volta che il server sarà online.


<InlineVoucher />