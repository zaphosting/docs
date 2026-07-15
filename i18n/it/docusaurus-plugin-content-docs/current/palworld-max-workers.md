---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di modificare il numero massimo di Pals lavoratori assegnati a ogni base camp sul tuo server. In questa guida, imparerai come modificare il file di configurazione corretto nell’interfaccia web di ZAP-Hosting, regolare il valore `BaseCampWorkerMaxNum` e applicare correttamente la modifica.



## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite il pannello di amministrazione server di gioco ZAP-Hosting.

:::info Accesso alla Configurazione Necessario
Devi avere accesso all’amministrazione web del tuo server per poter aprire la sezione **Configs** e modificare manualmente i file di configurazione di Palworld.
:::

## Comprendere l’Impostazione Max Workers

L’impostazione di Palworld responsabile del numero massimo di lavoratori è `BaseCampWorkerMaxNum`. Questa opzione controlla quanti Pals possono lavorare in ogni singolo base camp.

| Impostazione | File di configurazione | Scopo | Valore predefinito | Massimo vanilla |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Imposta il numero massimo di Pals lavoratori per base camp | `15` | `50` |

:::note Informazioni sul Limite Vanilla
La documentazione pubblica attuale indica che il massimo normale in gioco è `50`. Valori superiori a `50` generalmente richiedono modding e non fanno parte della configurazione standard vanilla.
:::

:::caution Impatto sulle Prestazioni
Aumentare il numero di lavoratori può aumentare l’uso di CPU e memoria perché più Pals saranno attivi nelle tue basi. Se usi un valore alto, monitora le prestazioni del server dopo la modifica.
:::

## Aprire il File di Configurazione di Palworld

Per modificare l’impostazione max workers, devi editare il file `PalWorldSettings.ini`.

### Trova il file nell’interfaccia ZAP-Hosting

Apri l’amministrazione del tuo server di gioco Palworld e naviga in:

- `Configs`
- `PalWorldSettings.ini`

Questo è il file di configurazione dove sono memorizzate le impostazioni di gioco per il tuo server Palworld.



## Modificare il Valore BaseCampWorkerMaxNum

Una volta aperto `PalWorldSettings.ini`, cerca la riga `OptionSettings`. Le impostazioni del server Palworld sono solitamente memorizzate come coppie chiave-valore separate da virgole all’interno di questa sezione.

### Cambia la voce di configurazione

Trova la seguente chiave:

```ini
BaseCampWorkerMaxNum=15
```

Modifica il valore con la quantità che preferisci. Per esempio, per permettere `20` Pals lavoratori per base, usa:

```ini
BaseCampWorkerMaxNum=20
```

### Esempio di configurazione

A seconda del tuo file attuale, l’impostazione apparirà di solito all’interno di una voce `OptionSettings` più lunga simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Modifica Solo il Valore Necessario
Modifica solo `BaseCampWorkerMaxNum` a meno che tu non voglia intenzionalmente cambiare altre impostazioni di gioco. Questo aiuta a evitare errori accidentali di configurazione.
:::

## Valori Consigliati

Puoi scegliere qualsiasi valore che si adatti al tuo stile di gioco, purché rimanga entro i limiti vanilla supportati.

| Valore | Risultato | Raccomandazione |
| --- | --- | --- |
| `15` | Limite lavoratori Palworld predefinito | Ideale per il gameplay standard |
| `20` a `30` | Automazione base aumentata | Buon equilibrio per la maggior parte dei server privati |
| `40` a `50` | Numero molto alto di lavoratori | Usalo solo se il tuo server ha risorse sufficienti |
| Oltre `50` | Comportamento non standard vanilla | Di solito richiede mod e non è consigliato senza test |

## Salva e Applica le Modifiche

Dopo aver modificato il valore, salva il file `PalWorldSettings.ini` nell’editor di configurazione di ZAP-Hosting.

### Riavvia il server

Una volta salvato il file, riavvia il tuo server Palworld affinché la nuova impostazione max workers venga caricata.

:::info Riavvio Necessario
Le modifiche a `PalWorldSettings.ini` non vengono applicate immediatamente mentre il server è in esecuzione. Devi riavviare il server dopo aver salvato il file.
:::

## Verifica il Nuovo Limite di Lavoratori

Dopo il riavvio del server, entra nel tuo server Palworld e controlla una delle tue basi. Ora dovresti poter assegnare Pals lavoratori fino al nuovo limite configurato.

Se la modifica non sembra funzionare, verifica quanto segue:

| Controllo | Cosa verificare |
| --- | --- |
| File corretto | Hai modificato `PalWorldSettings.ini` |
| Chiave corretta | `BaseCampWorkerMaxNum` è presente e scritta correttamente |
| Sintassi valida | La riga `OptionSettings` circostante non è stata rotta |
| Riavvio completato | Il server è stato riavviato completamente dopo il salvataggio |
| Intervallo valore | Il valore è entro il limite vanilla normale di `50` |

:::caution Sintassi della Configurazione
Le voci di configurazione di Palworld sono sensibili al formato. Se rimuovi accidentalmente virgole, parentesi o altre parti della riga `OptionSettings`, il server potrebbe ignorare l’impostazione o non caricarla correttamente.
:::

## Conclusione

Congratulazioni, hai modificato con successo il numero massimo di lavoratori per base camp sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂