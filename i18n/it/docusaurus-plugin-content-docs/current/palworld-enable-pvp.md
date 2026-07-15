---
id: palworld-enable-pvp
title: "Palworld: Abilitare il PvP"
description: "Scopri come abilitare il PvP in Palworld, configurare il comportamento di combattimento della base e applicare le impostazioni PvP consigliate sul tuo server. -> Scopri di più ora"
sidebar_label: Palworld: Abilitare il PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld include una modalità PvP che permette ai giocatori di combattere tra loro e modifica il funzionamento del combattimento base e dell’interazione tra gilde sul tuo server. In questa guida, imparerai come abilitare manualmente il PvP modificando il file di configurazione corretto nell’amministrazione del server di gioco ZAP-Hosting e applicando le impostazioni necessarie.

:::caution Funzionalità in Fase di Prova
Il PvP in Palworld è considerato una funzionalità in fase di prova dallo sviluppatore del gioco. Le opzioni di configurazione e il comportamento di gioco potrebbero cambiare con futuri aggiornamenti.
:::

## Preparazione

Prima di iniziare, assicurati di:

- Avere accesso al tuo server di gioco Palworld tramite l’interfaccia web ZAP-Hosting
- Avere il server fermo o poterlo riavviare dopo le modifiche
- Comprendere che il PvP modifica significativamente il gameplay, soprattutto per quanto riguarda il combattimento tra giocatori, la difesa della base e la perdita di oggetti alla morte

:::info Accesso alla Configurazione
Per i server Palworld di ZAP-Hosting, il file di configurazione rilevante è accessibile tramite l’amministrazione del server di gioco sotto la voce `Configs`.
:::

## Aprire il File di Configurazione di Palworld

Per abilitare il PvP, devi modificare il file `PalWorldSettings.ini`.

### Trova il file nell’interfaccia ZAP-Hosting

1. Accedi all’interfaccia web ZAP-Hosting.
2. Apri il tuo server di gioco Palworld.
3. Vai su `Configs` nell’amministrazione del server di gioco.
4. Apri il file `PalWorldSettings.ini`.



:::note Formato della Configurazione
Le impostazioni del server Palworld sono solitamente memorizzate all’interno della sezione `OptionSettings=(...)` in `PalWorldSettings.ini`. Devi aggiungere o modificare le chiavi richieste all’interno di questo blocco di impostazioni.
:::

## Abilitare le Impostazioni PvP Richieste

Per attivare il PvP, devi assicurarti che le seguenti tre impostazioni siano impostate su `True` in `PalWorldSettings.ini`.

### Chiavi PvP richieste

| Impostazione | Valore richiesto | Descrizione |
|---|---|---|
| `bIsPvP` | `True` | Abilita la modalità PvP sul server |
| `bEnablePlayerToPlayerDamage` | `True` | Permette il danno diretto tra giocatori |
| `bEnableDefenseOtherGuildPlayer` | `True` | Permette l’interazione difensiva con giocatori di altre gilde |

### Esempio di configurazione

Aggiungi questi valori alla tua riga `OptionSettings=(...)` o modifica quelli esistenti se già presenti:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Evita Chiavi Duplicate
Se un’impostazione esiste già in `PalWorldSettings.ini`, modifica il valore esistente invece di aggiungere la stessa chiave una seconda volta. Voci duplicate possono causare comportamenti imprevisti o complicare la risoluzione dei problemi.
:::

## Impostazioni PvP Consigliate

Una volta abilitato il PvP, puoi anche regolare impostazioni aggiuntive per un’esperienza PvP più bilanciata. I seguenti valori sono comunemente consigliati per server focalizzati sul PvP.

### Valori suggeriti

| Impostazione | Valore consigliato | Descrizione |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Impedisce l’assegnazione del parametro HP |
| `bAllowEnhanceStat_Attack` | `False` | Impedisce l’assegnazione del parametro Attacco |
| `bEnableFastTravel` | `True` | Mantiene abilitato il viaggio rapido |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Limita il viaggio rapido ai campi base |
| `bExistPlayerAfterLogout` | `True` | Mantiene i giocatori nel mondo dopo il logout |
| `bEnableAimAssistPad` | `False` | Disabilita l’assistenza al mirino per controller |
| `DeathPenalty` | `All` | Fa cadere tutti gli oggetti e i Pals alla morte |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Permette di raccogliere gli oggetti lasciati da altri giocatori |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Mostra le aree base delle altre gilde |
| `bBuildAreaLimit` | `True` | Aiuta a prevenire costruzioni in aree limitate |
| `GuildPlayerMaxNum` | `4` | Limita la dimensione della gilda |
| `BaseCampMaxNumInGuild` | `2` | Limita il numero di basi per gilda |
| `MaxBuildingLimitNum` | `1000` | Limita le strutture per giocatore |
| `GuildRejoinCooldownMinutes` | `60` | Imposta il cooldown per rientrare in gilda |
| `BlockRespawnTime` | `5.0` | Imposta il ritardo di respawn della base |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Tempo prima che la penalità di respawn si resetti |
| `RespawnPenaltyTimeScale` | `2.0` | Moltiplicatore della penalità di respawn dopo morti ripetute |

### Esempio di blocco impostazioni PvP

Se vuoi usare i valori PvP consigliati, includi le seguenti voci nella tua sezione `OptionSettings=(...)`:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Restrizioni e Ricompense PvP Opzionali

A seconda di quanto competitivo vuoi che sia il tuo server PvP, puoi anche configurare restrizioni tecnologiche e ricompense PvP.

### Restringere le tecnologie di movimento rapido

Puoi limitare alcune tecnologie legate al movimento impostando `DenyTechnologyList`.

| Impostazione | Valore di esempio |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Esempio di voce:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Verifica la Sintassi Esistente
Il formato della configurazione di Palworld può variare a seconda della versione del server e di come è strutturata la riga `OptionSettings=(...)`. Prima di salvare, assicurati che la tua voce corrisponda allo stile di sintassi già usato nel file.
:::

### Configurare le ricompense PvP

Palworld include anche opzioni di ricompensa legate alle uccisioni PvP.

| Impostazione | Descrizione |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Abilita il drop di oggetti aggiuntivi alle uccisioni PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Definisce l’ID dell’oggetto da droppare |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Imposta la quantità di oggetti droppati |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Mostra il numero di oggetti PvP sulla mappa mondiale per le basi |
| `bDisplayPvPItemNumOnWorldMap_Player` | Mostra il numero di oggetti PvP sulla mappa mondiale per i giocatori |

Esempio di configurazione:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Compatibilità ID Oggetti
Se usi un valore personalizzato per `AdditionalDropItemWhenPlayerKillingInPvPMode`, assicurati che l’ID oggetto sia valido per la versione attuale di Palworld. Identificatori non validi potrebbero far fallire o ignorare l’impostazione.
:::

## Cosa Cambia Quando il PvP È Abilitato

Dopo aver abilitato il PvP, il gameplay sul tuo server cambia in diversi modi importanti. Basandosi sulle indicazioni PvP pubbliche attualmente disponibili per Palworld, puoi aspettarti generalmente il seguente comportamento:

- I giocatori possono danneggiarsi a vicenda
- Entrare nella base di un altro giocatore può far diventare ostili i Pals della base
- I giocatori volanti e i Pals montati possono subire danni aumentati
- I Pals evocati e i Pals base possono subire danni ridotti
- I giocatori possono accedere a forzieri di altre gilde
- Il danno delle armi corpo a corpo contro le strutture di altri giocatori può essere ridotto
- I Pals base possono difendere un’area più ampia
- La distanza consentita tra basi vicine può aumentare
- I giocatori possono ricevere notifiche quando la loro base è sotto attacco
- Costruire e riparare può essere limitato durante un attacco alla base
- Alcune armi possono avere valori di gittata o danno modificati in modalità PvP

:::danger Avviso Impatto sul Gameplay
Abilitare il PvP può cambiare significativamente la progressione, la sicurezza della base e la permanenza dei giocatori sul tuo server. Se gestisci un server pubblico, è consigliato informare i giocatori prima di applicare queste modifiche.
:::

## Salva il File e Riavvia il Server

Dopo aver finito di modificare `PalWorldSettings.ini`, salva il file nell’area `Configs` di ZAP-Hosting.

### Applica le modifiche

Per attivare le nuove impostazioni PvP:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione del server di gioco ZAP-Hosting.

È necessario un riavvio per applicare le modifiche di configurazione.

:::info Nessun Comando Aggiuntivo Necessario
Non è normalmente richiesto alcun comando in-game o console dopo aver modificato `PalWorldSettings.ini`. Il riavvio completo del server è il passaggio necessario per applicare la nuova configurazione PvP.
:::

## Verifica che il PvP sia Attivo

Dopo il riavvio del server, entra nel server e testa il comportamento in gioco.

### Controlli di base

Puoi verificare la configurazione controllando se:

- I giocatori possono danneggiarsi a vicenda
- Il comportamento PvP relativo alla base è attivo
- Le penalità di morte e le regole di loot corrispondono ai valori configurati
- Le restrizioni opzionali come `DenyTechnologyList` funzionano come previsto

Se le modifiche non si applicano, riapri `PalWorldSettings.ini` e verifica:

- Nomi delle impostazioni scritti male
- Chiavi duplicate
- Virgole o formattazione errate dentro `OptionSettings=(...)`
- Valori non salvati correttamente prima del riavvio

## Conclusione

Congratulazioni, hai abilitato con successo il PvP sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂