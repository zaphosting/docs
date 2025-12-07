---
id: cs2-becomeadmin
title: "CS2: Diventa admin"
description: "Scopri come assegnare e gestire i permessi di amministratore per il pieno controllo del server in CS2 → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Preparazione
Per usare i privilegi da admin, devi prima creare una base. Di default, CS2 non offre una gestione amministrativa completa. Però esistono framework appositi, come CounterStrikeSharp. Il framework deve essere installato per poter configurare tutto. Se non l’hai ancora fatto, dai un’occhiata alla nostra guida [Install Plugins](cs2-plugins).

## Definire gli Admin

Per aggiungere un admin devi modificare il file di configurazione `admins.json`, che trovi in `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`. Per dichiarare un nuovo admin, crea una nuova voce con nome, identificatore (identity) e flags (permessi). Il nome è a tua scelta, serve solo come etichetta. Per l’identificatore "identity" devi inserire lo SteamID dell’account Steam. Infine, definisci le flags necessarie.

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
Puoi anche definire gruppi admin. In questo modo i permessi di un admin vengono assegnati tramite il gruppo corrispondente, senza dover configurare ogni singolo admin. I gruppi si definiscono nel file `admin_groups.json`, che trovi in `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`.
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
Puoi assegnare un valore di immunità agli admin. Se un admin o giocatore con immunità più bassa tenta di attaccare un admin o giocatore con immunità più alta, il comando fallirà. Definisci il valore di immunità aggiungendo la chiave immunity a ogni admin in `configs/admins.json`.

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
Il controllo dell’immunità non viene eseguito automaticamente da CounterStrikeSharp. Sta ai singoli plugin gestire e applicare questo controllo.
:::

## Conclusione

Complimenti, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />