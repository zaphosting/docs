---
id: fivem-mods-installreplace
title: "FiveM: Installa mod auto sostitutivi sul server"
description: "Scopri come configurare e caricare mod sul tuo server FiveM per esperienze di gioco personalizzate → Scopri di più ora"
sidebar_label: Installa mod auto sostitutivi
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connettiti via FTP
Per prima cosa connettiti al tuo server tramite FTP, puoi usare la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per farlo.

## Preparazione

Ora crea una cartella per le tue mod dentro la cartella "resources".

:::info
Puoi chiamare la cartella come vuoi, basta che non contenga caratteri speciali. Nel nostro esempio si chiama "assets".
:::

Adesso crea un file fxmanifest.lua nella cartella "assets" appena creata.

Inserisci questo testo nel file:

```
fx_version 'cerulean'
games { 'gta5' }

```

Poi salva e chiudi il fxmanifest.lua, non ci servirà più.

Nella cartella assets crea ora una cartella chiamata "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Carica le Mod

Apri la cartella stream, qui puoi caricare tutti i file ytd e yft con drag & drop:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Dopo aver caricato tutte le mod, ti basta inserire la tua risorsa nel server.cfg, che trovi nella cartella "server-data" del tuo server FiveM.

Puoi aprirlo con qualsiasi editor di testo, sotto le voci "start" inserisci la tua risorsa così:

```
start assets
```

Fatto! Dopo un riavvio del server, la mod auto sarà disponibile sul server!

<InlineVoucher />