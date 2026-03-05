---
id: csgo-becomeadmin
title: "CS:GO: Diventa admin"
description: "Scopri come assegnare e gestire i permessi di amministratore per il pieno controllo del server in CS:GO → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Preparazione
Per usare i privilegi da admin, devi prima creare una base. Di default, CS:GO non offre una gestione amministrativa completa. Però esistono framework appositi, come CounterStrikeSharp. Il framework va installato per poter configurare tutto. Se non l’hai ancora fatto, dai un’occhiata alla nostra guida [Install Plugins](csgo-plugins).

## Definire gli Admin

Per aggiungere un admin si usa il file di configurazione `admins.json`, che trovi in `../CS:GO/game/csgo/addons/CounterStrikeSharp/addons/configs/`. Per dichiarare un nuovo admin devi creare una nuova voce. Serve un nome, un identificatore (identity) e delle flags (permessi). Il nome puoi sceglierlo liberamente, serve solo come etichetta/identificativo. Per l’identificatore "identity" devi inserire lo SteamID dell’account Steam. Infine, definisci le flags necessarie.

```js title="admins.json (Esempio)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Definire i Gruppi Admin
Puoi anche definire gruppi admin. Così i permessi di un admin vengono assegnati tramite il gruppo corrispondente. In questo modo non devi configurare i permessi singolarmente per ogni admin. I gruppi si definiscono nel file `admin_groups.json`, che trovi in `../CS:GO/game/csgo/addons/CounterStrikeSharp/addons/configs/`.
```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Definire l’Immunità Admin
Puoi assegnare un valore di immunità agli admin. Se un admin o un giocatore con immunità più bassa attacca un admin o giocatore con immunità più alta, il comando fallirà. Puoi definire il valore di immunità aggiungendo la chiave immunity a ogni admin in `configs/admins.json`.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Il controllo dell’immunità non viene eseguito automaticamente da CounterStrikeSharp. Sta ai singoli plugin gestire e applicare il controllo dell’immunità.
:::

## Conclusione

Complimenti, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />