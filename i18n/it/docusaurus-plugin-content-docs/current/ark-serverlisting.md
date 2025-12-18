---
id: ark-serverlisting
title: "ARK: Problemi di elenco server con giochi Steam che usano Steamworks"
description: "Scopri perché giochi popolari hanno problemi con l'elenco server a causa dei limiti di Steamworks e come questo impatta la tua esperienza multiplayer → Scopri di più ora"
sidebar_label: Problemi di Serverlisting
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Purtroppo, molti giochi popolari come ARK o Valheim hanno grossi problemi nel mostrare tutti i server nella lista server in-game.

Questo succede perché questi giochi usano il software "Steamworks" per il loro elenco.

Steamworks può mostrare al massimo 4880 server. Se un gioco ha più server attivi di questo numero, solo una piccola parte dei server attivi verrà mostrata al giocatore.

È molto casuale se il giocatore 1 vede il server Y o no.  
Succede quindi che il giocatore 1 veda il server Y, ma il giocatore 2 no. Il giocatore 3 invece lo vede di nuovo, ma non vede un altro server che il giocatore 1 invece vede.

Per escludere un problema con il provider del server, puoi cercare il server sotto "Steam" - "Visualizza" - "Server" usando IP e porta. Se lo trovi lì, la connessione tra giocatore e server è perfetta. Questo perché la query viene fatta direttamente dal giocatore.

Un esempio chiaro per confermare il problema è che i giocatori di ARK che aprono il gioco tramite Steam spesso non trovano i server. Se invece aprono ARK tramite Epic Games, i server si trovano perfettamente. Qui non viene usato Steamworks.

Ci sono anche vari sviluppatori che hanno commentato questo problema. Per esempio, Garry Newman di Garrysmod pensava che il problema fosse legato al suo provider OVH. Ma non era così. Il problema riguarda anche ZAP-Hosting e qualsiasi altro provider, perché è un limite di Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Fonte: https://x.com/garrynewman/status/1334446218437681152?s=20

Anche Rust ne parla nel loro blog:

```
Non è tutto rose e fiori quando hai un aumento improvviso di popolarità.  
Cominciano a vedersi crepe nelle fondamenta, la cosa più evidente per noi è che il browser server non è mai stato pensato per gestire così tanti server.  
Senza entrare troppo nei dettagli tecnici, questo ha fatto sì che molti server non venissero mostrati agli utenti, causando molta frustrazione ai proprietari dei server.  
Stiamo lavorando e cercando soluzioni, quindi vi chiediamo un po’ di pazienza.
```

Fonte: https://rust.facepunch.com/blog/

Continueremo a monitorare il problema e ti aggiorneremo qui non appena ci sarà una soluzione.

<InlineVoucher />