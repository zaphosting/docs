---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Attiva/Disattiva le Notifiche di Morte"
description: "Scopri come attivare o disattivare le notifiche di morte dei giocatori sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Attiva/Disattiva Notifiche di Morte"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

Le notifiche di morte avvisano i giocatori quando qualcuno sul server muore. Anche se possono essere utili per monitorare l’attività, alcuni server preferiscono un’esperienza più immersiva o competitiva senza messaggi pubblici di morte.

HumanitZ ti permette di attivare o disattivare le notifiche di morte dei giocatori direttamente dal file di configurazione del server.

<InlineVoucher />

## Configurazione

Le impostazioni delle notifiche di morte si gestiscono nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**.  
All’interno del file di configurazione, trova questo parametro:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Disattiva le notifiche di morte per i giocatori normali. Gli admin le vedranno comunque.  
- `NoDeathFeedback=false` – Attiva le notifiche di morte per tutti i giocatori.

Se vuoi che le notifiche di morte siano visibili a tutti, imposta il valore su:

```
NoDeathFeedback=false
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare la nuova impostazione.

## Conclusione

Complimenti! Modificando il valore `NoDeathFeedback` nel file `GameServerSettings.ini`, hai configurato con successo le notifiche di morte sul tuo server HumanitZ. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂 

<InlineVoucher />