---
id: palworld-max-players
title: "Palworld: Max Players"
description: "Learn how to change the Palworld max players setting on your Palworld game server by editing the correct config file in the ZAP interface. -> Learn more now"
sidebar_label: Palworld: Max Players
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di controllare quanti giocatori possono connettersi al tuo server contemporaneamente. In questa guida, imparerai come modificare manualmente il numero massimo di giocatori modificando il file di configurazione corretto nella gestione del tuo server di gioco ZAP-Hosting.



## Preparazione

Prima di iniziare, assicurati di avere accesso alla gestione del tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting.

:::info Accesso al File di Configurazione
Devi modificare manualmente la configurazione del server tramite l’area **Configs** nella gestione del tuo server di gioco. Se non sai ancora come accedere al tuo server, aprilo prima dall’interfaccia web di ZAP-Hosting.
:::

## Individua il File di Configurazione di Palworld

Per cambiare il numero massimo di giocatori, devi modificare il file `PalWorldSettings.ini`.

Nella gestione del tuo server di gioco ZAP-Hosting:

1. Apri il tuo server **Palworld**
2. Vai su **Configs**
3. Apri il file chiamato `PalWorldSettings.ini`

Questo file contiene le impostazioni principali di gioco e del server, incluso il numero massimo di giocatori consentiti.

:::note File Corretto
Per questa modifica, devi modificare solo `PalWorldSettings.ini`. Se il tuo server contiene altri file, non cambiare valori non correlati a meno che tu non sappia esattamente cosa fanno.
:::

## Modifica il Numero Massimo di Giocatori

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings` e trova la voce `ServerPlayerMaxNum`.

L’impostazione rilevante è:

| Chiave Config | Descrizione | Valore Predefinito |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Imposta il numero massimo di giocatori che possono connettersi al server | `32` |

Una voce tipica appare così:

```ini
ServerPlayerMaxNum=32
```

Modifica il valore con il limite di giocatori che preferisci. Per esempio, per permettere 16 giocatori:

```ini
ServerPlayerMaxNum=16
```

Oppure per mantenere il valore predefinito di 32 giocatori:

```ini
ServerPlayerMaxNum=32
```

:::caution Usa Valori Supportati
I server dedicati Palworld usano comunemente `32` come massimo predefinito. Se imposti un valore molto più alto, potresti influire sulla stabilità o sulle prestazioni del server a seconda del piano e della versione del gioco. Se non sei sicuro, inizia con un valore più basso e testa il server.
:::

## Esempio di Configurazione

A seconda del formato del file, l’impostazione potrebbe apparire all’interno di una riga più lunga `OptionSettings`. In questo caso, devi solo cambiare il valore di `ServerPlayerMaxNum`.

Esempio:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Se il tuo file usa questo formato, non rimuovere virgole, parentesi o virgolette da altre voci. Sostituisci solo il numero dopo `ServerPlayerMaxNum=`.

## Salva e Applica le Modifiche

Dopo aver cambiato il valore:

1. Salva il file `PalWorldSettings.ini`
2. Riavvia il server Palworld

Il riavvio è necessario affinché il nuovo limite massimo di giocatori venga applicato.

| Azione | Necessaria |
| --- | --- |
| Salva `PalWorldSettings.ini` | Sì |
| Esegui comandi console aggiuntivi | Nessun comando aggiuntivo verificato necessario |
| Riavvia il server | Sì |

:::tip Riavvio Necessario
Le modifiche a `ServerPlayerMaxNum` non vengono applicate immediatamente mentre il server è in esecuzione. Devi riavviare il server affinché Palworld carichi le nuove impostazioni.
:::

## Verifica il Nuovo Limite di Giocatori

Dopo il riavvio, il server dovrebbe usare il nuovo limite massimo di giocatori.

Puoi verificarlo:

- controllando i dettagli del server nella gestione del tuo server di gioco, se mostrati
- connettendoti al server con più giocatori
- rivedendo la configurazione attuale nel file `PalWorldSettings.ini`

Se l’impostazione non viene applicata, riapri il file e conferma che:

- `ServerPlayerMaxNum=[tuo_valore]` è presente
- il formato del file non è stato corrotto
- il server è stato riavviato completamente dopo il salvataggio

:::caution Sintassi della Configurazione
Se rimuovi accidentalmente una virgola, parentesi o un altro valore dalla riga `OptionSettings`, il server potrebbe ignorare l’impostazione o non caricare correttamente la configurazione. Modifica il file con attenzione e cambia solo il valore richiesto.
:::

## Conclusione

Congratulazioni, hai modificato con successo il numero massimo di giocatori sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂