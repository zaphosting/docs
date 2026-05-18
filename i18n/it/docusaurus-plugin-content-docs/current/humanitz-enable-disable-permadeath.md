---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Attiva/Disattiva Permadeath"
description: "Scopri come attivare o disattivare il permadeath sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Attiva/Disattiva Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

Il permadeath aumenta di molto la difficoltà e la tensione nel gameplay survival di HumanitZ. Quando attivato, i giocatori perdono definitivamente il loro personaggio alla morte e devono crearne uno nuovo. Questa impostazione è molto usata su server hardcore o survival ad alto rischio.

<InlineVoucher />

## Configurazione

Il permadeath si gestisce nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**. All’interno del file di configurazione, cerca questo parametro:

```
;Quando impostato su true il giocatore morto perderà il personaggio e dovrà crearne uno nuovo
PermaDeath=false
```

- `PermaDeath=true` – Attiva il permadeath. I giocatori perdono definitivamente il personaggio alla morte.  
- `PermaDeath=false` – Disattiva il permadeath. I giocatori possono respawnare con il personaggio esistente.

Se vuoi attivare il permadeath, cambia il valore in:

```
PermaDeath=true
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare la nuova impostazione.

## Conclusione

Complimenti! Modificando il valore `PermaDeath` nel file `GameServerSettings.ini` hai attivato o disattivato con successo il permadeath sul tuo server HumanitZ. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />