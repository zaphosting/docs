---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Configura i Limiti delle Classi"
description: "Scopri come configurare i limiti delle classi sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Limiti delle Classi
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I limiti delle classi in **Over the Top WWI** controllano quanti giocatori possono usare tipi di unità specifiche come cecchini, genieri o unità pesanti. Regolare questi limiti aiuta a bilanciare il gameplay e a evitare che certe classi vengano sovrautilizzate.

Configurando i limiti delle classi, puoi garantire composizioni di squadra più equilibrate e creare un’esperienza di gioco più strutturata e tattica.

<InlineVoucher />

## Configurazione

I limiti delle classi si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Configs**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` abilita o disabilita le restrizioni delle classi  
- `0` → Disabilitato  
- `1` → Abilitato  

- `PercentofCavPerTeam` definisce la percentuale di unità di cavalleria consentite per squadra  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` definiscono quanti giocatori possono usare ciascuna classe  

- `NumberofInfOfficers` controlla il numero di ruoli ufficiali disponibili  

- `MinimumNumOfPlayerForClassLimits` definisce quanti giocatori devono essere sul server prima che i limiti delle classi vengano applicati  

Modifica questi valori per controllare quanti giocatori possono scegliere ogni classe e per bilanciare il tuo server secondo il tuo stile di gioco preferito.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. I nuovi limiti delle classi verranno applicati automaticamente.

## Conclusione

Complimenti! Hai configurato con successo i limiti delle classi sul tuo **server Over the Top WWI**. Questo ti permette di bilanciare le composizioni delle squadre e migliorare l’esperienza di gioco complessiva.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />