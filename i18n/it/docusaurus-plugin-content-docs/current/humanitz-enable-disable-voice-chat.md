---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Attiva o Disattiva la Chat Vocale"
description: "Scopri come attivare o disattivare la chat vocale sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Attiva/Disattiva Chat Vocale"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

La comunicazione vocale può cambiare completamente l’atmosfera di un server HumanitZ. Attivare la chat vocale permette ai giocatori di comunicare direttamente a distanza ravvicinata, aumentando immersione e collaborazione. Disattivandola, invece, si può incentivare l’uso di piattaforme esterne o creare un’esperienza di sopravvivenza più silenziosa e isolata.

In HumanitZ, la chat vocale si configura direttamente nel file di configurazione del server.

<InlineVoucher />

## Configurazione

Le impostazioni della chat vocale si gestiscono nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di controllo del server, sotto la sezione **Configs**. All’interno del file, cerca questo parametro:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

La configurazione funziona così:

- `Voip=true` o `Voip=1` – Attiva la chat vocale  
- `Voip=false` o `Voip=0` – Disattiva la chat vocale  

Per cambiare l’impostazione, modifica semplicemente il valore come preferisci. Dopo aver salvato il file, riavvia il server per applicare la nuova configurazione.

## Conclusione

Complimenti! Modificando il valore `Voip` nel file `GameServerSettings.ini`, hai attivato o disattivato con successo la chat vocale sul tuo server HumanitZ. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />