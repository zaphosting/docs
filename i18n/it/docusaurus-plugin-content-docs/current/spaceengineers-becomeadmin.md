---
id: spaceengineers-becomeadmin
title: "Space Engineers: Diventa admin del server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione in-game senza intoppi → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

Per gestire al meglio il tuo game server direttamente in-game è fondamentale avere il rank Admin.

### SteamID64 tramite sito web

Per prima cosa, apri il profilo Steam e fai clic destro da qualsiasi parte del profilo.  
Da lì puoi copiare l’URL Steam del profilo.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Una volta fatto, puoi inserire l’URL in uno di questi siti:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Inserire lo SteamID nella Config

Ora accedi al tuo pannello e al server.  
Vai alla scheda **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Apri il file **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Dopodiché premi **STR + F** e cerca *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Ora scrivi questo:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Dovrebbe risultare così:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Ora **Salva** il file di Config ed è fatta!

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />