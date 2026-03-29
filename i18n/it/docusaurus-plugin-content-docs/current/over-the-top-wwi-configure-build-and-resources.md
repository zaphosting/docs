---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Configura Build Points e Risorse"
description: "Scopri come configurare build points, cannoni e limiti di risorse sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Build Points & Risorse
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I build points e le impostazioni delle risorse in **Over the Top WWI** controllano quanti edifici, difese e equipaggiamenti i giocatori possono piazzare durante una partita. Questi valori influenzano direttamente l’equilibrio del gameplay, soprattutto nelle modalità dove costruire e fortificare è fondamentale.

Modificando queste impostazioni, puoi creare un gameplay più difensivo con fortificazioni estese oppure limitare le risorse per partite più veloci e aggressive.

<InlineVoucher />

## Configurazione

Le impostazioni di build e risorse si configurano nel file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Configs**. Trova e apri il file `ServerConfiguration.ini`. All’interno, cerca questi parametri:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` e `DefenderBuildPoints` definiscono quanti build points ha a disposizione ogni squadra

- `AttackerCannonPoints` e `DefenderCannonPoints` controllano quanti cannoni o unità di artiglieria possono essere schierati

- `SapperBPRegenAmount` indica quanti build points si rigenerano nel tempo

- `SapperCannonPRegenAmount` regola la velocità di rigenerazione dei cannon points

- `SapperPropBPRegenTime` e `CannonPropPRegenTime` definiscono il tempo in secondi tra ogni tick di rigenerazione

Modifica questi valori per gestire quanti edifici e difese i giocatori possono costruire e quanto velocemente le risorse si ricaricano durante la partita.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni delle risorse saranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo build points e risorse sul tuo **server Over the Top WWI**. Ora puoi controllare le fortificazioni, bilanciare il gameplay e modellare l’esperienza di battaglia.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />