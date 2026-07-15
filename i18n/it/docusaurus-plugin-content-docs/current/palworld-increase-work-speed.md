---
id: palworld-increase-work-speed
title: "Palworld: Aumenta la Velocità di Lavoro"
description: "Scopri come aumentare la velocità di lavoro in Palworld modificando l'impostazione WorkSpeedRate per far lavorare più velocemente giocatori e Pal sul tuo server. -> Scopri di più ora"
sidebar_label: "Aumenta la Velocità di Lavoro"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di regolare la velocità con cui giocatori e Pal completano i lavori alla base modificando un valore di configurazione del server. In questa guida, imparerai come aumentare la velocità di lavoro sul tuo server Palworld di ZAP-Hosting modificando il file di configurazione corretto e applicando le modifiche nel modo giusto.



## Preparazione

Prima di iniziare, assicurati di avere accesso all’amministrazione del tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting.

:::info Configurazione Manuale Necessaria
Questa configurazione va effettuata manualmente tramite l’editor di configurazione. Devi modificare personalmente il file di configurazione del server Palworld nella sezione `Configs` dell’amministrazione del tuo server di gioco.
:::

## Apri il File di Configurazione di Palworld

Per cambiare la velocità di lavoro, devi modificare il file `PalWorldSettings.ini`.

### Dove trovare il file

1. Accedi al sito di ZAP-Hosting.
2. Apri l’amministrazione del tuo server di gioco **Palworld**.
3. Vai alla sezione **Configs**.
4. Apri il file chiamato `PalWorldSettings.ini`.

Questo file contiene le impostazioni di gioco che controllano i tassi e i moltiplicatori per il tuo server Palworld.

:::note Posizione del File di Configurazione
Su ZAP-Hosting, il file rilevante per questa modifica è disponibile direttamente nell’amministrazione del server di gioco sotto `Configs`. Se il tuo server mostra più file di configurazione, assicurati di modificare `PalWorldSettings.ini`.
:::

## Modifica l’Impostazione della Velocità di Lavoro

L’impostazione usata per aumentare la velocità di lavoro è `WorkSpeedRate`.

### Cosa fa questa impostazione

`WorkSpeedRate` controlla la velocità con cui giocatori e Pal eseguono i compiti legati al lavoro alla base. Il valore predefinito è solitamente `1.0`, che indica velocità normale.

Valori più alti aumentano il moltiplicatore di velocità:

| Chiave Config | Valore Predefinito | Valore Esempio | Effetto |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Velocità di lavoro raddoppiata |
| `WorkSpeedRate` | `1.0` | `10.0` | Velocità di lavoro molto elevata |

### Modifica il valore

Cerca la riga `OptionSettings` all’interno di `PalWorldSettings.ini`. La voce `WorkSpeedRate` è contenuta in quel blocco di impostazioni.

Se la voce esiste già, modifica il suo valore. Per esempio:

```ini
WorkSpeedRate=1.000000
```

Cambia il valore in uno più alto, ad esempio:

```ini
WorkSpeedRate=2.000000
```

Per un risultato molto più veloce, puoi usare un moltiplicatore più alto come:

```ini
WorkSpeedRate=10.000000
```

### Esempio di snippet di configurazione

A seconda del contenuto attuale del file, l’impostazione potrebbe apparire come parte di una riga `OptionSettings` più lunga simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Modifica la Sintassi Esistente con Attenzione
`PalWorldSettings.ini` usa un formato rigoroso. Assicurati di modificare solo il valore di `WorkSpeedRate` e di non rimuovere virgole, parentesi o virgolette dalla riga `OptionSettings` circostante.
:::

## Salva e Riavvia il Server

Dopo aver modificato il file, devi salvare le modifiche e riavviare il server Palworld.

### Applica le modifiche

1. Salva il file aggiornato `PalWorldSettings.ini`.
2. Riavvia il tuo server di gioco Palworld dall’amministrazione server di ZAP-Hosting.

Il riavvio è necessario perché Palworld legge queste impostazioni di gioco all’avvio del server. Il nuovo valore di velocità di lavoro non sarà applicato correttamente finché il server non sarà stato riavviato.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Riavvia il server | Sì |
| Comando console aggiuntivo | No |

:::tip Test Consigliato
Inizia con un valore moderato come `2.0` e testa il risultato in gioco. Valori troppo alti potrebbero rendere la progressione molto più veloce del previsto, influenzando l’equilibrio complessivo del gameplay.
:::

## Verifica la Nuova Velocità di Lavoro

Quando il server sarà di nuovo online, entra nel tuo server Palworld e prova le attività di lavoro alla base.

Dovresti notare che giocatori e Pal completano i compiti più velocemente rispetto a prima. Se non noti cambiamenti, riapri `PalWorldSettings.ini` e verifica che:

- `WorkSpeedRate` sia presente
- il valore sia impostato correttamente
- il file sia stato salvato con successo
- il server sia stato completamente riavviato dopo la modifica

:::note Equilibrio del Gameplay
Aumentare la velocità di lavoro può cambiare significativamente la rapidità con cui la tua base si sviluppa. Se vuoi un’esperienza bilanciata, aumenta il valore gradualmente invece di impostare subito una velocità estremamente alta.
:::

## Conclusione

Congratulazioni, hai aumentato con successo la velocità di lavoro sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂