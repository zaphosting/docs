---
id: valheim-serverlisting
title: "Valheim: Problemi con la lista server nei giochi Steam che usano Steamworks"
description: "Scopri perché i giochi più popolari faticano a mostrare tutti i server attivi a causa dei limiti di Steamworks e come questo impatta la tua esperienza multiplayer → Scopri di più ora"
sidebar_label: Problemi con la lista server
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Purtroppo, molti giochi famosi come ARK o Valheim hanno grossi problemi a mostrare tutti i server nella lista server in-game.

Questo succede perché questi giochi usano il software "Steamworks" per la lista server.

Steamworks può mostrare al massimo 4880 server. Se un gioco ha più server attivi di questo numero, solo una piccola parte dei server attivi verrà mostrata al giocatore.

È molto casuale se il giocatore 1 vede il server Y oppure no.  
Succede quindi che il giocatore 1 vede il server Y, ma il giocatore 2 no. Il giocatore 3 invece lo vede di nuovo, ma non vede un altro server che invece il giocatore 1 vede.

Per escludere un problema con il provider del server, puoi cercare il server su "Steam" - "Visualizza" - "Server" usando IP e porta. Se lo trovi lì, la connessione tra giocatore e server è perfetta. Questo perché la query viene fatta direttamente dal giocatore.

Un esempio perfetto per confermare il problema è che i giocatori di ARK che aprono il gioco tramite Steam spesso non trovano i server. Se invece aprono ARK tramite Epic Games, i server si trovano senza problemi. Qui non viene usato Steamworks.

Anche diversi sviluppatori hanno commentato questo problema. Per esempio, Garry Newman di Garrysmod pensava che il problema fosse legato al suo provider OVH. Ma non era così. Il problema c’è anche con ZAP-Hosting e qualsiasi altro provider, perché è un limite di Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/mWWpmZzJ6ZXX59W/preview)

Fonte: https://x.com/garrynewman/status/1334446218437681152?s=20

Anche Rust ne parla nel loro blog:

```
Non è tutto rose e fiori quando hai un’impennata improvvisa di popolarità.  
Cominciano a creparsi le fondamenta, e per noi il browser dei server non è mai stato pensato per gestire così tanti server.  
Senza entrare troppo nei tecnicismi, questo ha fatto sì che molti server non venissero mostrati agli utenti, causando molta frustrazione ai proprietari dei server.  
Stiamo lavorando e cercando soluzioni, quindi abbiate pazienza con noi.
```

Fonte: https://rust.facepunch.com/blog/

Continueremo a monitorare la situazione e ti aggiorneremo qui appena ci saranno novità o soluzioni.

<InlineVoucher />