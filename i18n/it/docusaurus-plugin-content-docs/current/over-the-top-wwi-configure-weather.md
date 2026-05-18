---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Configura il Meteo"
description: "Scopri come configurare le impostazioni meteo sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Meteo
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni meteo in **Over the Top WWI** influenzano direttamente il gameplay, la visibilità e l’atmosfera. Regolando questi valori, puoi creare condizioni limpide per combattimenti bilanciati o introdurre ambienti sfidanti come nebbia, pioggia o tempeste.

Le configurazioni meteo personalizzate ti permettono di modellare l’esperienza complessiva e rendere le partite più dinamiche o immersive.

<InlineVoucher />

## Configurazione

Le impostazioni meteo si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` abilita o disabilita i cambiamenti meteo dinamici

- `0` → Disabilitato
- `1` → Abilitato

- `CurrentWeather` definisce il tipo di meteo attuale

- `0` → Sereno
- `1` → Pioggia
- `2` → Nebbia
- `3` → Neve
- Aggiungi `+3` per versioni più intense

- `CloudCoverage` controlla quanto del cielo è coperto dalle nuvole

- Valori più bassi significano cieli più limpidi
- Valori più alti aumentano la densità delle nuvole

- `TimeToChangeWeather` definisce ogni quanto cambia il meteo in secondi

- `TimeToChangeClouds` controlla la frequenza di aggiornamento delle condizioni nuvolose

Impostazioni ambientali aggiuntive:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` regola la forza del vento che influenza il gameplay
- `WindDirection` definisce la direzione del vento
- `ChanceOfLightningOccuring` imposta la probabilità che si verifichi un fulmine
- `LightningTimer` controlla la frequenza con cui appaiono i fulmini
- `CanLightningKill` determina se i fulmini possono danneggiare i giocatori

Dopo aver modificato il `ServerConfiguration.ini`, salva il file e riavvia il server. Le nuove impostazioni meteo verranno applicate automaticamente.

## Conclusione

Congratulazioni! Hai configurato con successo le impostazioni meteo sul tuo **server Over the Top WWI**. Regolando questi valori puoi creare ambienti dinamici e migliorare l’esperienza di gioco per i tuoi player.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />