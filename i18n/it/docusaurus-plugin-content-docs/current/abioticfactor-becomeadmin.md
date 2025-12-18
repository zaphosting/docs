---
id: abioticfactor-becomeadmin
title: "Abiotic Factor: Diventa admin"
description: "Scopri come assegnare i diritti admin ai giocatori per il pieno controllo del server e una gestione di gioco potenziata → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In **Abiotic Factor**, gli admin del server hanno bisogno di permessi elevati per gestire i giocatori, eseguire comandi server o modificare le impostazioni durante il gameplay.

<InlineVoucher />

## Configurazione

La configurazione avviene tramite il file `admin.ini`. Per accedervi, apri la sezione **Configs** nell’amministrazione del game server e trova il file `admin.ini`. Di default, il file dovrebbe contenere questa voce, dove puoi definire gli admin. Sostituisci i valori `ExampleID` con il **SteamID64** dei giocatori a cui vuoi dare i diritti admin.

```
[Moderators]
Moderator=ExampleID1
Moderator=ExampleID2
```

## Conclusione

Una volta inserite correttamente le informazioni e riavviato il server, il giocatore specificato avrà accesso admin completo in-game. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />