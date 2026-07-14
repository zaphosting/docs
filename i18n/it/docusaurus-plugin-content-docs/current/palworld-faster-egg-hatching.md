---
id: palworld-faster-egg-hatching
title: "Palworld: Schiusa delle Uova più Veloce"
description: "Scopri come ridurre il tempo di schiusa delle uova in Palworld modificando l'impostazione del server Palworld per una schiusa più rapida. -> Scopri di più ora"
sidebar_label: Palworld: Schiusa delle Uova più Veloce
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In Palworld, il tempo di schiusa delle uova è gestito tramite un valore di configurazione del server. In questa guida, imparerai come ridurre il tempo di schiusa delle uova sul tuo server Palworld di ZAP-Hosting modificando il file di configurazione corretto e applicando la modifica nel modo giusto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di:

- avere accesso all’interfaccia web del tuo server di gioco ZAP-Hosting
- che il tuo server Palworld sia disponibile nell’amministrazione del server di gioco
- poter modificare i file nella sezione **Configs**

:::info Accesso al File di Configurazione
Per Palworld su ZAP-Hosting, le impostazioni rilevanti del server possono essere modificate tramite l’amministrazione del server di gioco nella sezione **Configs**. Per questa operazione, devi modificare il file `PalWorldSettings.ini`.
:::

## Comprendere l’Impostazione del Tempo di Schiusa

Palworld utilizza l’impostazione `PalEggDefaultHatchingTime` per definire il tempo base di schiusa delle uova in ore. Un valore più basso significa che le uova si schiuderanno più velocemente.

Secondo le attuali referenze di configurazione del server Palworld, il valore predefinito è `72`, che rappresenta 72 ore per un’Uovo Gigante. Anche gli altri tipi di uova si basano su questo valore.

| Chiave di Configurazione | Valore Predefinito | Descrizione |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Tempo base di schiusa delle uova in ore |

:::note Come Funziona l’Impostazione
Questo valore influenza il processo generale di schiusa delle uova sul tuo server. Se lo riduci, la schiusa sarà più veloce per tutti i giocatori che usano incubatrici.
:::

## Aprire il File di Configurazione di Palworld

Per prima cosa, devi accedere al file di configurazione corretto nell’interfaccia ZAP-Hosting.

### Vai alla Sezione Configs

Apri l’amministrazione del tuo server di gioco Palworld e vai alla sezione **Configs**. Qui, individua e apri il file chiamato:

```ini
PalWorldSettings.ini
```

Questo è il file che contiene le voci di configurazione del gameplay per il tuo server Palworld, incluso il tempo di schiusa delle uova.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Modificare il Tempo di Schiusa delle Uova

Una volta aperto `PalWorldSettings.ini`, cerca la riga `OptionSettings`. Palworld memorizza molte impostazioni di gioco all’interno di questa sezione.

### Cambiare la Chiave di Configurazione Richiesta

Trova questa voce:

```ini
PalEggDefaultHatchingTime=72.000000
```

Modifica il valore con un numero più basso per rendere la schiusa delle uova più veloce.

Ad esempio:

```ini
PalEggDefaultHatchingTime=24.000000
```

Questo ridurrebbe il tempo base di schiusa da 72 ore a 24 ore.

### Valori di Esempio

Puoi usare valori diversi a seconda di quanto veloce vuoi che sia la schiusa sul tuo server.

| Valore | Risultato |
| --- | --- |
| `72.000000` | Tempo di schiusa predefinito |
| `48.000000` | Riduzione più lenta, gameplay più bilanciato |
| `24.000000` | Schiusa delle uova molto più veloce |
| `12.000000` | Schiusa delle uova molto rapida |
| `1.000000` | Schiusa estremamente veloce |

:::caution Usa Valori Realistici
Valori troppo bassi possono alterare significativamente l’equilibrio del gameplay. Se vuoi una progressione più naturale, inizia con un valore moderato come `24.000000` o `48.000000`.
:::

### Esempio di Configurazione

A seconda della tua configurazione attuale, l’impostazione apparirà all’interno del blocco `OptionSettings`. Un esempio tipico è simile a questo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Modifica la Voce Corretta
Se la chiave `PalEggDefaultHatchingTime` esiste già, modifica il valore esistente invece di aggiungere una voce duplicata. Valori duplicati nello stesso blocco `OptionSettings` possono causare ignoramento o sovrascrittura delle impostazioni.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il valore, salva il file `PalWorldSettings.ini` nell’interfaccia ZAP-Hosting.

### Riavvia il Server

Una volta salvato il file, riavvia il tuo server Palworld affinché il nuovo tempo di schiusa venga caricato.

:::info Riavvio Necessario
La configurazione aggiornata non sarà applicata finché il server non sarà stato riavviato.
:::

## Comportamento Importante per le Uova Esistenti

Se le uova sono già in incubazione, il nuovo valore di schiusa non si aggiorna in modo affidabile per quei timer di incubazione attivi. In pratica, dovresti rimuovere e riavviare il processo di incubazione delle uova interessate affinché venga applicata la nuova velocità.

| Situazione | Azione Richiesta |
| --- | --- |
| Uova nuove posizionate dopo la modifica | Nessuna azione extra dopo il riavvio |
| Uova già in incubazione prima della modifica | Riavvia l’incubazione per quelle uova |

:::note Timer di Incubazione Esistenti
Se cambi il tempo di schiusa e non vedi il risultato atteso, verifica se l’uovo era già in incubazione prima della modifica della configurazione.
:::

## Conclusione

Congratulazioni, hai ridotto con successo il tempo di schiusa delle uova sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂