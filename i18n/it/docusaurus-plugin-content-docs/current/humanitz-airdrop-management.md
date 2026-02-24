---
id: humanitz-airdrop-management
title: "HumanitZ: Gestione degli Airdrop"
description: "Scopri come attivare, disattivare e configurare gli airdrop sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Gestione Airdrop"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

Gli airdrop in HumanitZ offrono loot preziosi e possono influenzare notevolmente il movimento dei giocatori, le zone di conflitto e la dinamica generale del server. A seconda dello stile di gioco del tuo server, potresti voler avere supply drop frequenti per aumentare l’azione o disabilitarli completamente per un’esperienza survival più dura e con risorse scarse.

<InlineVoucher />

## Configurazione

Le impostazioni degli airdrop si gestiscono nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**. All’interno del file di configurazione, cerca questi parametri:

```
; Imposta se gli airdrop sono abilitati o meno
AirDrop=true
;Quanti giorni di gioco passano tra un Airdrop e l'altro
AirDropInterval=1
```

La configurazione funziona così:

- `AirDrop=true` – Attiva gli airdrop  
- `AirDrop=false` – Disattiva completamente gli airdrop  
- `AirDropInterval` – Definisce quanti giorni di gioco devono passare tra un airdrop e l’altro  

Per esempio, se vuoi che gli airdrop avvengano ogni tre giorni di gioco:

```
AirDrop=true
AirDropInterval=3
```

Se invece vuoi disabilitare completamente gli airdrop:

```
AirDrop=false
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare le nuove impostazioni.

## Conclusione

Complimenti! Modificando i valori `AirDrop` e `AirDropInterval` nel file `GameServerSettings.ini`, hai configurato con successo il comportamento degli airdrop sul tuo server HumanitZ. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />