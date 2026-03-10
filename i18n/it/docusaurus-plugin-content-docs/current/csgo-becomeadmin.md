---
id: csgo-becomeadmin
title: "CS:GO: Diventa admin"
description: "Scopri come assegnare e gestire i permessi di amministratore per il pieno controllo del tuo server CS:GO con Sourcemod → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili di Sourcemod direttamente in gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Preparazione

Per usare i privilegi da amministratore, prima devi creare una base. Di default, CS:GO non offre una gestione amministrativa completa. Però esistono framework appositi, come Sourcemod. Il framework deve essere installato per poter configurare tutto. Se non l’hai ancora fatto, dai un’occhiata alla nostra guida all’installazione del plugin per CS:GO.

## Definire gli Admin

Puoi aggiungere admin tramite il file di configurazione `admins_simple.ini` o `admins.cfg`, che trovi in `../csgo/cstrike/addons/sourcemod/configs/`. Per setup semplici, `admins_simple.ini` è di solito sufficiente. Qui puoi definire gli admin tramite SteamID e assegnare direttamente i flag dei permessi.

```ini title="admins_simple.ini (Esempio)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

In questo esempio, il primo admin riceve tutti i permessi con il flag `z`, mentre il secondo ha solo permessi selezionati.

Se vuoi configurazioni più avanzate come gruppi, immunità o password, usa invece `admins.cfg`.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Definire i Gruppi Admin

Puoi anche definire gruppi di admin. Così i permessi di un admin si gestiscono tramite il gruppo corrispondente. Non serve configurare i permessi singolarmente per ogni admin. I gruppi si definiscono nel file `admin_groups.cfg`, che trovi in `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Dopodiché puoi assegnare un gruppo a un admin nel file `admins.cfg`:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Definire l’Immunità Admin

Puoi assegnare un valore di immunità agli admin o ai gruppi. Se un admin con immunità più bassa prova a colpire un admin con immunità più alta, il comando fallirà. Puoi definire l’immunità aggiungendo la chiave `immunity` a ogni admin in `admins.cfg` o direttamente in `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Un valore di immunità più alto significa una protezione maggiore contro azioni amministrative da parte di altri admin con immunità inferiore.

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore per il tuo server CS:GO con Sourcemod. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />