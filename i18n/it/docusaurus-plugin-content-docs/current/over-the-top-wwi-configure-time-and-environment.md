---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Configura tempo e ambiente"
description: "Scopri come regolare l'ora del giorno e le impostazioni ambientali sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Tempo & Ambiente
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni di tempo e ambiente in **Over the Top WWI** influenzano visibilità, atmosfera e condizioni di gioco complessive. Regolando questi valori, puoi creare battaglie diurne luminose, scenari più oscuri o ambientazioni stagionali diverse.

Queste impostazioni ti permettono di personalizzare l’aspetto e la sensazione del tuo server, aumentando l’immersione per i tuoi giocatori.

<InlineVoucher />

## Configurazione

Le impostazioni di tempo e ambiente si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` definisce l’ora di gioco
- `Season` controlla la stagione attuale

- `0` → Default
- `1` → Primavera
- `2` → Estate
- `3` → Autunno
- `4` → Inverno

- `TemperatureinCelcius` regola la temperatura ambientale
- Questo può influenzare l’atmosfera e gli effetti ambientali

Queste impostazioni ti permettono di creare scenari diversi, come battaglie all’alba, combattimenti notturni o ambientazioni stagionali.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni ambientali verranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo tempo e ambiente sul tuo **server Over the Top WWI**. Ora puoi personalizzare l’atmosfera e creare esperienze di gioco uniche per i tuoi giocatori.

Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />