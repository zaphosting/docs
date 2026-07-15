---
id: palworld-supply-drop-settings
title: "Palworld: Impostazioni Supply Drop"
description: "Scopri come modificare la frequenza dei supply drop in Palworld sul tuo server di gioco Palworld modificando manualmente l’impostazione SupplyDropSpan. -> Scopri di più ora"
sidebar_label: Palworld: Impostazioni Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld include supply drop che appaiono a intervalli regolari e possono contenere risorse utili. In questa guida imparerai come modificare manualmente la frequenza dei supply drop sul tuo server di gioco Palworld di ZAP-Hosting modificando il file di configurazione corretto e applicando le modifiche correttamente.

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld tramite l’interfaccia web di ZAP-Hosting e che il server sia attualmente disponibile nella tua amministrazione server di gioco.

:::info Configurazione Manuale Necessaria
Questa configurazione si esegue modificando manualmente la configurazione del server Palworld. Dovrai aprire il file di configurazione tramite la sezione **Configs** nella tua amministrazione server di gioco.
:::

## Individua il File di Configurazione

Per modificare l’intervallo dei supply drop, devi modificare il file `PalWorldSettings.ini`.

Nella tua amministrazione server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.



:::note Posizione del File di Configurazione
Su ZAP-Hosting, le impostazioni rilevanti di Palworld per il gameplay sono generalmente gestite tramite il file `PalWorldSettings.ini` nell’area **Configs** della tua amministrazione server. Se la tua interfaccia è leggermente diversa, usa la lista dei file di configurazione disponibili e cerca specificamente `PalWorldSettings.ini`.
:::

## Modifica l’Impostazione Supply Drop

L’impostazione usata per la frequenza dei supply drop è `SupplyDropSpan`.

Questo valore definisce l’intervallo tra i supply drop in **minuti**.

### Trova la Sezione Corretta

Nel file `PalWorldSettings.ini`, le impostazioni del server Palworld sono solitamente memorizzate all’interno della riga `OptionSettings`. Devi individuare il blocco di impostazioni esistente e verificare se `SupplyDropSpan` è già presente.

Se esiste già, modifica il suo valore.

Se non esiste, aggiungilo all’interno della sezione `OptionSettings=(...)` insieme alle altre impostazioni separate da virgola.

### Voce di Configurazione

Usa il seguente formato:

```ini
SupplyDropSpan=[your_value]
```

Sostituisci `[your_value]` con il numero di minuti che vuoi impostare.

### Valori di Esempio

| Impostazione | Significato |
| --- | --- |
| `SupplyDropSpan=180` | Intervallo predefinito di 3 ore |
| `SupplyDropSpan=60` | Supply drop ogni 1 ora |
| `SupplyDropSpan=360` | Supply drop ogni 6 ore |
| `SupplyDropSpan=30` | Supply drop molto frequenti |

Ecco un esempio di come l’impostazione può apparire all’interno del blocco completo `OptionSettings`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Mantieni Intatta la Sintassi Esistente
Non rimuovere virgole, parentesi o altri valori esistenti nella riga `OptionSettings`. Un errore di formattazione in questa riga può impedire al server di caricare correttamente la configurazione.
:::

## Salva e Applica le Modifiche

Dopo aver modificato il valore:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione server di gioco ZAP-Hosting.

È necessario un riavvio perché Palworld non applica questa impostazione di gameplay in tempo reale mentre il server è in esecuzione.

### Serve un Comando Aggiuntivo?

Non è normalmente richiesto alcun comando in-game o console per questa modifica specifica. Il riavvio del server è il passaggio necessario per caricare il valore aggiornato di `SupplyDropSpan`.

| Azione | Necessaria |
| --- | --- |
| Modifica `PalWorldSettings.ini` | Sì |
| Aggiungi o modifica `SupplyDropSpan` | Sì |
| Esegui comando console extra | No |
| Riavvia server dopo il salvataggio | Sì |

## Verifica l’Impostazione

Una volta che il server è stato riavviato, il nuovo intervallo dei supply drop dovrebbe essere attivo.

Poiché questa impostazione controlla eventi temporizzati nel mondo di gioco, potresti dover aspettare il prossimo ciclo di spawn prima di poter confermare completamente la modifica in-game. Se imposti un intervallo più breve come `60` o `30`, la verifica sarà più semplice.

:::tip Testa le Modifiche Più Velocemente
Se vuoi confermare che l’impostazione funziona senza aspettare diverse ore, imposta temporaneamente `SupplyDropSpan=30`. Dopo il test, potrai modificarlo di nuovo con il valore preferito a lungo termine.
:::

## Risoluzione dei Problemi

### L’Impostazione Non Si Applica

Se la frequenza dei supply drop non sembra cambiare, verifica quanto segue:

- Assicurati che `SupplyDropSpan` sia scritto esattamente come mostrato
- Conferma che il valore sia all’interno della sezione `OptionSettings=(...)`
- Verifica che non ci siano virgole mancanti o parentesi rotte
- Riavvia il server dopo aver salvato il file

### Il Server Ha Errori di Configurazione

Se il server non si avvia dopo aver modificato il file, ripristina la configurazione precedente e controlla attentamente la sintassi.

:::danger Formattazione INI Errata
Palworld memorizza molte impostazioni di gameplay in una singola riga `OptionSettings`. Anche un solo carattere fuori posto può rompere la configurazione. Controlla sempre con attenzione le modifiche prima di salvare.
:::

## Conclusione

Congratulazioni, hai modificato con successo le impostazioni dei supply drop in Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂