---
id: fivem-gamebuild
title: "FiveM: Attiva contenuti DLC"
description: "Scopri come forzare versioni DLC specifiche sul tuo server FiveM per accedere alle mappe, veicoli e contenuti più recenti → Scopri di più ora"
sidebar_label: Attiva build DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Forzare la game build ti permette di impostare una versione DLC specifica sul tuo server, così puoi giocare con le mappe, vestiti, veicoli e molto altro più recenti!

<InlineVoucher />

## Gamebuild disponibili

Ecco una panoramica di tutti i DLC disponibili con i rispettivi Build ID:

| Build ID |        Nome Build         |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |
|   3570   |        Money Fronts       |



## Attiva la build

Per usare contenuti DLC extra come Cayo Perico, il Tuner DLC o Los Santos Summer Special, devi impostarlo nella configurazione del tuo server. Per settare la build DLC, apri l’interfaccia txAdmin e vai nelle impostazioni FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Ora aggiungi semplicemente la gamebuild che vuoi nella sezione **Additional Arguments** usando il comando set, sostituendo `BUILD_ID_CHOICE` con uno della tabella:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusione

Dopo aver scelto la build, riavvia il tuo server FiveM. Ora il server partirà con la build DLC specificata. Hai impostato con successo una gamebuild per il tuo server FiveM. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile per aiutarti! 🙂

<InlineVoucher />