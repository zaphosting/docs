---
id: ark-configuration
title: "ARK: Configurazione del server"
description: "Scopri come ottimizzare le impostazioni del tuo server di gioco ARK per un gameplay migliore e più personalizzazione → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configurazione Server

La configurazione di un **server di gioco ARK** può creare confusione e senso di impotenza in alcune persone. Ma c’è un motivo per questo. ARK offre tantissime opzioni di configurazione per il gioco. Inoltre, la configurazione avviene in diversi file di configurazione, dove devi anche fare attenzione a quali comandi vanno in quale file. In questa guida vogliamo darti una panoramica più chiara su come funziona la configurazione di un server di gioco ARK.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Differenze tra i file di configurazione

La configurazione del **server di gioco ARK** avviene tramite i file di configurazione **GameUserSettings.ini** e **Game.ini**. Puoi modificarli sia tramite il nostro **Webinterface** sotto **Configs** sia via **FTP**.

| File di configurazione | Webinterface                                                  | FTP                                      |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| GameUserSettings.ini   | `Gameserver Administration -> Configs ->GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini               | `Gameserver Administration -> Configs ->Game.ini`             | `ShooterGame/Saved/Config/LinuxServer/` |

Il file di configurazione **GameUserSettings.ini** contiene opzioni sia per il client di gioco che per il server. Le opzioni per il client non vengono usate dal server. Le opzioni server sono specificate nella sezione **[ServerSettings]**, che di solito si trova alla fine del file. Per modifiche avanzate, come cambiare i punti engram o l’XP guadagnata per livello, disabilitare certi contenuti o personalizzare i gusti dei giocatori, si usa il file di configurazione **Game.ini**.

## Configurazione

Qui sotto ti spieghiamo i due file di configurazione. Ti mostreremo i comandi più comuni e come funzionano.

## Configurazione: Mappa

ARK offre diverse mappe su cui puoi giocare sul server. Puoi scegliere quale mappa vuoi giocare nel webinterface sotto impostazioni.

| Mappe          | Data di pubblicazione | Nome comando      |
| -------------- | --------------------- | ----------------- |
| The Island     | 02.06.2015            | `TheIsland`       |
| The Center     | 17.05.2016            | `TheCenter`       |
| Scorched Earth | 01.09.2016            | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017            | `Ragnarok`        |
| Aberration     | 12.12.2017            | `Aberration_P`    |
| Extinction     | 06.11.2018            | `Extinction`      |
| Valguero       | 18.06.2019            | `Valguero_P`      |
| Genesis        | 25.02.2020            | `Genesis`         |
| Crystal Isles  | 11.06.2020            | `CrystalIsles`    |

Basta inserire il nome comando della mappa nel campo **Map** e verrà caricata al prossimo avvio del server.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Configurazione: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Questo comando definisce se attivare o meno la visuale in terza persona.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**AllowCaveBuildingPvE**

Questo comando definisce se permettere o meno la costruzione di strutture nelle grotte (quando è attivo il PVE).

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**alwaysNotifyPlayerJoined**

Questo comando definisce se i giocatori riceveranno una notifica quando un giocatore entra nel server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**alwaysNotifyPlayerLeft**

Questo comando definisce se i giocatori riceveranno una notifica quando un giocatore lascia il server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**bAllowFlyerCarryPvE**

Questo comando definisce se i giocatori possono sollevare dinosauri con un dinosauro volante o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**bDisableStructureDecayPvE**

Questo comando disabilita il decadimento progressivo delle costruzioni dei giocatori.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**DayCycleSpeedScale**

Questo comando definisce il fattore di scala per il passare del tempo in ARK e controlla quanto spesso il giorno diventa notte e viceversa. Il valore di default 1 fornisce la stessa velocità del ciclo della modalità single player (e sui server ufficiali pubblici). Valori inferiori a 1 rallentano il ciclo, valori più alti lo accelerano. 1 minuto di tempo reale corrisponde a circa 28 minuti di tempo di gioco. Per un ciclo giorno/notte di circa 24 ore in gioco, si dovrebbe usare il valore 0.035.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DayTimeSpeedScale**

Questo comando definisce il fattore di scala per il passare del tempo durante il giorno in ARK. Determina la lunghezza di ogni giorno, rispetto alla lunghezza della notte (determinata da NightTimeSpeedScale). Diminuire questo valore aumenta la durata del giorno.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**NightTimeSpeedScale**

Questo comando definisce il fattore di scala per il passare del tempo durante la notte in ARK. Determina la lunghezza di ogni notte, rispetto alla lunghezza del giorno (determinata da DayTimeSpeedScale). Diminuire questo valore aumenta la durata della notte.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoCharacterFoodDrainMultiplier**

Questo comando definisce il consumo di cibo di un dinosauro. Un valore più alto aumenta il consumo (i dinosauri diventano più affamati). Influisce anche sui tempi di addomesticamento.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoCharacterHealthRecoveryMultiplier**

Questo comando definisce la rigenerazione della salute di un dinosauro. Un valore più alto aumenta la velocità di rigenerazione, un valore più basso la rallenta.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoCharacterStaminaDrainMultiplier**

Questo comando definisce quanto velocemente un dinosauro si stanca. Un valore più alto aumenta la velocità di consumo della stamina, un valore più basso la rallenta.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoCountMultiplier**

Questo comando definisce quanti dinosauri dovrebbero spawnare. Un valore più alto aumenta la probabilità di spawn, un valore più basso la diminuisce.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoDamageMultiplier**

Questo comando definisce quanto danno fa un dinosauro. Un valore più alto aumenta il danno, un valore più basso lo diminuisce.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**DinoResistanceMultiplier**

Questo comando definisce la resistenza di un dinosauro. Un valore più alto aumenta la resistenza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**globalVoiceChat**

Questo comando definisce se la chat vocale globale deve essere abilitata sul server o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**HarvestAmountMultiplier**

Questo comando definisce la quantità di risorse raccolte durante il farming. Un valore più alto significa più risorse raccolte, un valore più basso meno.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**HarvestHealthMultiplier**

Questo comando definisce la salute delle risorse che possono essere raccolte. Valori più alti aumentano la quantità di materiali raccolti per ogni colpo.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**HarvestAmountMultiplier**

Questo comando definisce la quantità di risorse che possono essere raccolte durante il farming. Un valore più alto significa più risorse raccolte, un valore più basso meno.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**noTributeDownloads**

Questo comando permette di vietare il download dei personaggi di gioco dal server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PreventDownloadSurvivors**

Questo comando permette di impedire il download dei personaggi sopravvissuti dal server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PreventDownloadItems**

Questo comando permette di impedire il download degli oggetti dal server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PreventDownloadDinos**

Questo comando permette di impedire il download dei dinosauri dal server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerCharacterFoodDrainMultiplier**

Questo comando definisce quanto velocemente un giocatore ha fame. Aumentare il valore fa diventare il giocatore più affamato più velocemente, diminuirlo lo fa diventare affamato più lentamente. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerCharacterHealthRecoveryMultiplier**

Questo comando definisce quanto velocemente un giocatore si cura. Aumentare il valore accelera la guarigione, diminuirlo la rallenta. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerCharacterStaminaDrainMultiplier**

Questo comando definisce quanto velocemente i giocatori si stancano. Aumentare il valore fa stancare più velocemente, diminuirlo più lentamente. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerCharacterWaterDrainMultiplier**

Questo comando definisce quanto velocemente un giocatore ha sete. Aumentare il valore fa diventare i giocatori assetati più velocemente, diminuirlo più lentamente. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerDamageMultiplier**

Questo comando definisce quanto danno fa un giocatore. Aumentare il valore fa più danno, diminuirlo meno. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PlayerResistanceMultiplier**

Questo comando definisce la resistenza di un giocatore. Aumentare il valore aumenta la resistenza, diminuirlo la diminuisce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**proximityChat**

Questo comando definisce se la chat locale sul server deve essere abilitata o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**ResourceNoReplenishRadiusPlayers**

Questo comando definisce la distanza tra giocatori e risorse entro cui le risorse non si rigenerano più. Aumentare il valore aumenta il raggio, diminuirlo lo riduce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**ResourceNoReplenishRadiusStructures**

Questo comando definisce la distanza tra strutture e risorse entro cui le risorse non si rigenerano più. Aumentare il valore aumenta il raggio, diminuirlo lo riduce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**ResourcesRespawnPeriodMultiplier**

Questo comando definisce il moltiplicatore per il tempo di respawn delle risorse. Aumentare il valore aumenta il tempo di respawn, diminuirlo lo riduce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**ServerAdminPassword**

Questo comando definisce la password per accedere come admin. Puoi trovare più info nella nostra guida: [Diventa admin](ark-becomeadmin.md)

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  String   |        N/A        |   Qualsiasi  |

**ServerCrosshair**

Questo comando definisce se deve essere mostrato un mirino al giocatore o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**serverForceNoHud**

Questo comando definisce se i controlli in-game devono essere mostrati al giocatore o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**serverHardcore**

Questo comando definisce se attivare la modalità hardcore (se un giocatore muore, deve ricominciare da capo).

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**ServerPassword**

Questo comando imposta la password per accedere al server. Se solo certe persone devono avere accesso, puoi impostare una password. Di default è disabilitata e si attiva impostando una password.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  String   |        N/A        |   Qualsiasi  |

**serverPVE**

Questo comando definisce se il PVP deve essere abilitato sul server o no. Se il PVP è disabilitato, allora è possibile solo il PVE.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**ShowMapPlayerLocation**

Questo comando definisce se i giocatori devono essere mostrati sulla mappa tramite marker o no. - [Esempio](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**StructureDamageMultiplier**

Questo comando definisce quanta resistenza ha una struttura. Aumentare il valore aumenta la resistenza, diminuirlo la diminuisce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**StructureResistanceMultiplier**

Questo comando definisce quanto danno riceve una struttura quando viene attaccata. Aumentare il valore fa più danno, diminuirlo meno. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**TamedDinoDamageMultiplier**

Questo comando definisce il danno di un dinosauro addomesticato quando attacca. Aumentare il valore fa più danno, diminuirlo meno. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**TamedDinoResistanceMultiplier**

Questo comando definisce la resistenza di un dinosauro addomesticato. Aumentare il valore aumenta la resistenza, diminuirlo la diminuisce. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**TamingSpeedMultiplier**

Questo comando definisce la velocità di addomesticamento. Aumentare il valore accelera l’addomesticamento, diminuirlo lo rallenta. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**XPMultiplier**

Questo comando definisce i punti esperienza che un giocatore riceve. Aumentare il valore dà più XP, diminuirlo meno. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**EnablePVPGamma**

Questo comando definisce se l’uso della gamma è permesso su un server PVP o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**EnablePVEGamma**

Questo comando definisce se l’uso della gamma è permesso su un server PVE o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**SpectatorPassword**

Questo comando definisce la password che un non-admin deve inserire per entrare in modalità spettatore.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  String   |        N/A        |   Qualsiasi  |

**DifficultyOffset**

Questo comando definisce il livello di difficoltà del server. Per calcolare il livello massimo delle creature per un dato valore di difficoltà, moltiplica semplicemente per 30 (funziona perché il livello massimo scala linearmente con la difficoltà, e un valore di 1.0 dà un livello massimo di 30). Per calcolare un offset di difficoltà per un livello massimo, usa questa formula:

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  String   |      0.50000      |   Qualsiasi  |

**PvEStructureDecayPeriodMultiplier**

Questo comando definisce il periodo di tempo dopo cui le costruzioni iniziano a decadere. Aumentare il valore allunga il tempo di decadimento, diminuirlo lo accorcia. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PvEStructureDecayDestructionPeriod**

Questo comando definisce quando le strutture possono essere distrutte da altri giocatori su un server PVE. Aumentare il valore allunga il tempo di attesa, diminuirlo lo accorcia. Un valore di 2.0 raddoppia il valore di default, 0.5 lo dimezza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**PvPStructureDecay**

Questo comando definisce se abilitare o disabilitare il decadimento automatico delle costruzioni su un server PVP.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**DisableDinoDecayPvE**

Questo comando disabilita (true) o abilita (false) l’abbandono automatico dei dinosauri.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**PvEDinoDecayPeriodMultiplier**

Questo comando definisce il moltiplicatore per la velocità con cui un dinosauro viene abbandonato (più alto = più veloce, più basso = più lento).

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**AdminLogging**

Questo comando abilita la visualizzazione dei comandi cheat admin nella chat se usati da un admin in gioco.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**MaxTamedDinos**

Questo comando definisce il numero massimo di dinosauri addomesticabili sull’isola.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |       8300        |      ∞       |

**MaxNumbersofPlayersInTribe**

Questo comando definisce il numero massimo di giocatori per tribù.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |         2         |      ∞       |

**KickIdlePlayersPeriod**

Questo comando definisce il tempo di inattività dopo cui un giocatore inattivo viene espulso dal server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  | 1800 (secondi)    |      ∞       |

**PerPlatformMaxStructuresMultiplier**

Questo comando definisce il moltiplicatore per le strutture sulle piattaforme da sella. Usalo con cautela - valori troppo alti possono causare grossi cali di performance.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |      1.00000      |      ∞       |

**StructureDamageRepairCooldown**

Questo comando definisce il tempo di attesa prima che una struttura danneggiata possa essere riparata di nuovo. (0 permette la riparazione senza attesa)

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |        180        |      ∞       |

**bForceAllStructureLocking**

Questo comando definisce se tutti i tipi di contenitori possono essere bloccati.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         1         |     0/1      |

**bUseVSync**

Questo comando definisce se abilitare o meno la VSync (può minimizzare problemi con alcune schede grafiche).

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         0         |     0/1      |

**MaxPlatformSaddleStructureLimit**

Questo comando definisce il numero massimo di strutture sopra la piattaforma da sella.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |        100        |      ∞       |

**RCONPort**

Questo comando definisce la porta RCON da usare per il login via console RCON.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |        100        |      ∞       |

**AutoSavePeriodMinutes**

Questo comando definisce l’intervallo (in minuti) in cui il server salva automaticamente.

:::info
Questo valore è impostato a 30 minuti e non può essere cambiato.
:::

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |        30         |      ∞       |

**RCONServerGameLogBuffer**

Questo comando definisce quante righe di chat devono essere elencate negli strumenti RCON.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |        600        |      ∞       |

**PreventOfflinePvPInterval**

Questo comando definisce quanti secondi un giocatore deve essere disconnesso per essere considerato effettivamente offline.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  | 60 (secondi)      |      ∞       |

**bPvPDinoDecay**

Questo comando definisce se i dinosauri della tribù/giocatore sono protetti durante la protezione offline raid attivata.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         1         |     0/1      |

**bPvPStructureDecay**

Questo comando definisce se le strutture della tribù/giocatore sono protette durante la protezione offline raid attivata.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         1         |     0/1      |

**DisableImprintDinoBuff**

Questo comando definisce se disattivare il bonus extra che ottieni come giocatore se hai cresciuto un dinosauro da cucciolo.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         1         |     0/1      |

**AllowAnyoneBabyImprintCuddle**

Questo comando definisce se ogni giocatore può coccolare i dinosauri cuccioli.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  |         1         |     0/1      |

**OverrideOfficialDifficulty**

Questo comando sovrascrive il livello di difficoltà.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |         1         |     0/1      |

**TheMaxStructuresInRange**

Questo comando definisce il numero massimo consentito di strutture in un’area ristretta.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |       10500       |      ∞       |

**PvEAllowStructuresAtSupplyDrops**

Questo comando definisce se è permesso costruire strutture vicino alle casse di rifornimento.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**AutoDestroyDecayedDinos**

Questo comando definisce se i dinosauri devono essere distrutti direttamente invece di diventare reclamabili.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**ClampItemSpoilingTimes**

Questo comando definisce tutti i tempi di scadenza degli oggetti e li imposta al massimo tempo di scadenza.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**AllowCrateSpawnsOnTopOfStructures**

Questo comando definisce se le casse di rifornimento possono atterrare sulle strutture.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (disabilitato)  |     0/1      |

**PreventOfflinePvP**

Questo comando definisce se attivare o meno la "Offline Raid Protection" su server PVE/PVP.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 1 (attivato)      |     0/1      |

**AllowMultipleAttachedC4**

Questo comando permette di attaccare più esplosivi C4 ai dinosauri.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 1 (attivato)      |     0/1      |

**bPvEDisableFriendlyFire**

Questo comando definisce se disabilitare il fuoco amico in PVE o no.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 1 (attivato)      |     0/1      |

**ServerAutoForceRespawnWildDinosInterval**

Questo comando definisce il tempo in secondi dopo cui viene forzato il respawn di tutti i dinosauri selvatici. Per esempio, un valore di 86400 significa un respawn forzato dopo un giorno.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Integer  |       86400       |     0/1      |

**DisableWeatherFog**

Questo comando definisce se la nebbia sulla mappa deve essere attivata o disattivata.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  Boolean  | 0 (attivato)      |     0/1      |

### **[/script/engine.gamesession]**

**MaxPlayers**

Questo comando definisce quanti giocatori possono giocare contemporaneamente sul server.

| Tipo dato |                      Valore di default                       | Range valori |
| :-------: | :----------------------------------------------------------: | :----------: |
|   Float   | Dipende dalla selezione slot durante l’ordine (Slot fissi) |    10-130    |

### **[SessionSettings]**

**SessionName**

Questo comando imposta il nome del server che verrà mostrato nel browser server, nel gioco, ecc.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |    ARK #XXXXXX    |      ∞       |

### **[MessageOfTheDay]**

**Duration**

Questo comando definisce per quanto tempo il messaggio di benvenuto deve essere mostrato dopo la connessione.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|  integer  |      1.00000      |     X-X      |

**Message**

Questo comando definisce il messaggio di benvenuto che verrà mostrato quando un giocatore si connette al server.

| Tipo dato | Valore di default | Range valori |
| :-------: | :---------------: | :----------: |
|   Float   |       "..."       |      /       |

## Configurazione: Game.ini

Come già detto, modifiche più estese si fanno tramite il Game.ini. Questo include, per esempio, cambiare i punti engram o l’XP guadagnata per livello.

### Limite di livello

C’è un modo per aumentare il livello massimo raggiungibile da giocatori e dinosauri. Per questo si usa la funzione `LevelExperienceRampOverrides`. È stata introdotta con la versione v194. Info più dettagliate ed esempi li trovi nel forum Steam: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

Il comando va applicato due volte: la prima per il livello giocatore, la seconda per il livello dinosauro. La sintassi è questa:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Le parentesi quadre definiscono i livelli (**LEVELVALUE**) e dopo il segno uguale la quantità di XP (**Points**) necessaria per raggiungere quel livello.

Per esempio, se vuoi avere 500 livelli come limite, sarà così:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Accorciato per chiarezza
ExperiencePointsForLevel[499]=50000)
```

### Punti Engram

Ad ogni **level-up** ottieni **punti Engram**. Il numero di **punti Engram** per livello può essere cambiato dalla versione v193. La sintassi è:

```
OverridePlayerLevelEngramPoints=
```

Per ogni livello devi aggiungere una riga di comando. Per esempio, se definisci 10 livelli e vuoi 5 punti engram in più per ogni livello, sarà così:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

Il numero di righe dipende dal limite di livello definito prima.

:::info
ARK è un gioco in continua evoluzione e quindi include molti cambiamenti regolari. Questo riguarda anche la configurazione del server. Ti consigliamo quindi di dare un’occhiata alla documentazione ufficiale per info più dettagliate: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />