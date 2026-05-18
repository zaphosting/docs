---
id: hytale-become-invisible
title: "Hytale: Diventa invisibile"
description: "Scopri come diventare invisibile su un server Hytale → Scopri di più ora"
sidebar_label: Diventa invisibile
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

L'invisibilità può essere super utile sui server Hytale per moderazione, test o creazione di contenuti. Ti permette di osservare i giocatori senza farti notare, controllare attività sospette o esplorare aree senza interferire con il gameplay. A seconda della configurazione del server e dei permessi disponibili, l'invisibilità si può attivare di solito tramite comandi in-game o dalla console live.

<InlineVoucher />

## Requisiti

Per usare le funzioni di invisibilità, devi avere i permessi giusti sul server. Nella maggior parte dei casi, servono privilegi da operatore o accesso ai comandi di moderazione e gameplay. Se non hai i permessi necessari, il comando verrà rifiutato e non potrai attivare l’invisibilità. Per ottenere i permessi necessari, segui la nostra guida [Diventa admin](hytale-becomeadmin.md).

## Come diventare invisibile

Per diventare invisibile, apri la chat in-game e inserisci il comando invisibilità supportato dal server. Esegui questo comando:

```
/hide <playername>
```

Una volta eseguito con successo, il tuo personaggio non sarà più visibile agli altri giocatori nel mondo. Potrai comunque muoverti, interagire e monitorare l’attività a seconda delle regole del server e di come è implementata l’invisibilità.

Oltre al comando base hide, Hytale offre opzioni avanzate per controllare chi può vedere un giocatore. Per esempio, puoi nascondere un giocatore solo a un giocatore specifico, oppure applicare l’invisibilità a tutti sul server.

I comandi disponibili sono:
- `/hide <playername>`  Rende invisibile il giocatore specificato.
- `/hide <playername> --target <playername>`  Rende invisibile il giocatore specificato solo per il giocatore target.
- `/hide all`  Rende invisibili tutti i giocatori.

## Disattivare l’invisibilità

Per tornare visibile normalmente, esegui di nuovo il comando corrispondente per disattivare l’invisibilità. Dopo la conferma, gli altri giocatori potranno vedere di nuovo il tuo personaggio come al solito.

```
/hide show <playername>
```

Ci sono anche comandi aggiuntivi per rimuovere l’invisibilità in scenari più specifici, come ripristinare la visibilità solo per certi giocatori target o togliere l’invisibilità a tutti.

I comandi disponibili sono:
- `/hide show <playername>`  Rimuove l’invisibilità dal giocatore specificato.
- `/hide show <playername> --target <playername>`  Rimuove l’invisibilità dal giocatore specificato per il giocatore target.
- `/hide showall`  Rimuove l’invisibilità da tutti i giocatori.

## Conclusione

Diventare invisibile su un server Hytale è uno strumento super utile per admin e mod che devono monitorare il gameplay in modo discreto. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />