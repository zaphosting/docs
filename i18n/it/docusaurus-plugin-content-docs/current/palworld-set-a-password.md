---
id: palworld-set-a-password
title: "Palworld: Impostare una Password"
description: "Scopri come impostare una password per il server Palworld modificando manualmente la configurazione del gioco e applicando correttamente la modifica. -> Scopri di più ora"
sidebar_label: Palworld: Impostare una Password
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld ti permette di proteggere il tuo server con una password, così solo i giocatori autorizzati possono accedere. In questa guida, imparerai come impostare o modificare manualmente la password del server nella configurazione del tuo server di gioco ZAP-Hosting e applicare correttamente la password.



## Preparazione

Prima di iniziare, assicurati che:

- il tuo server di gioco Palworld sia online nell’interfaccia web ZAP-Hosting
- tu abbia accesso all’amministrazione del server di gioco
- tu conosca la password che vuoi usare per l’accesso al server

:::info Configurazione Manuale Necessaria
Per Palworld, la password può essere configurata manualmente tramite i file di configurazione del server. Nell’interfaccia ZAP-Hosting puoi accedere a questi file tramite l’amministrazione del server di gioco sotto la voce `Configs`.
:::

## Aprire il File di Configurazione di Palworld

Per impostare una password per il tuo server Palworld, devi modificare il file `PalWorldSettings.ini`.

### Trova il file nell’interfaccia ZAP-Hosting

1. Accedi all’interfaccia web ZAP-Hosting.
2. Apri l’amministrazione del tuo server di gioco **Palworld**.
3. Vai su **Configs**.
4. Apri il file `PalWorldSettings.ini`.

Questo file contiene le impostazioni principali del server Palworld, inclusa la voce che controlla se è richiesta una password per accedere.

:::note Scopo del File di Configurazione
Il file `PalWorldSettings.ini` memorizza le opzioni del server in una singola riga di configurazione, solitamente all’interno della sezione `OptionSettings=(...)`. Devi modificare il valore `ServerPassword` in questa sezione.
:::

## Modificare la Password del Server

Una volta aperto `PalWorldSettings.ini`, cerca la voce `ServerPassword`.

### Voce di configurazione richiesta

Usa il seguente valore:

```ini
ServerPassword="[your_password]"
```

Sostituisci `[your_password]` con la password che vuoi far inserire ai giocatori per accedere al tuo server.

Se la password è attualmente disabilitata, il valore potrebbe essere così:

```ini
ServerPassword=""
```

Un valore vuoto significa che non è impostata alcuna password per l’accesso.

### Esempio di configurazione

In Palworld, l’impostazione fa parte del blocco `OptionSettings=(...)`. Potrebbe apparire simile a questo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Mantieni Intatto il Formato Esistente
Modifica solo il valore dentro `ServerPassword="..."`. Non rimuovere virgole, virgolette, parentesi o altre voci nella riga `OptionSettings=(...)`, altrimenti il server potrebbe non caricare correttamente la configurazione.
:::

## Riferimento Configurazione

La tabella seguente mostra l’impostazione rilevante per questa modifica della password:

| Impostazione | Valore di esempio | Scopo |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Richiede ai giocatori di inserire una password prima di entrare nel server |

### Consigli per la password

Quando scegli una password, tieni a mente questi punti:

| Consiglio | Spiegazione |
| --- | --- |
| Usa una password unica | Evita di riutilizzare la password di un account di altri servizi |
| Evita parole troppo semplici | Le password facili sono più facili da indovinare |
| Condividila solo con giocatori fidati | Chiunque abbia la password può tentare di entrare |
| Conserva la password in modo sicuro | Un password manager può aiutarti a tenerla al sicuro |

:::tip Scegli una Password Forte
Se vuoi gestire un server Palworld privato per amici o una community ristretta, usa una password forte invece di una parola semplice o il nome del server. Questo riduce i tentativi di accesso indesiderati.
:::

## Salva le Modifiche e Riavvia il Server

Dopo aver modificato la password, salva il file nella sezione `Configs`.

### Applica la nuova password

Per rendere attiva la modifica della password:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server di gioco Palworld.

Il riavvio è necessario perché Palworld legge le impostazioni del server dal file di configurazione all’avvio. Senza riavvio, la nuova password potrebbe non essere applicata.

:::info Riavvio Necessario
Dopo aver cambiato `ServerPassword`, devi riavviare manualmente il server dall’amministrazione del server di gioco ZAP-Hosting affinché la nuova impostazione venga caricata.
:::

## Verifica la Password

Dopo il riavvio, testa la configurazione entrando nel server dal gioco Palworld.

### Cosa controllare

Quando ti connetti, verifica che:

- il server richieda ora una password prima di entrare
- la password configurata funzioni correttamente
- i giocatori senza password non possano accedere al server

Se il server non chiede la password, riapri `PalWorldSettings.ini` e controlla che:

- `ServerPassword` sia presente nella sezione `OptionSettings=(...)`
- il valore non sia vuoto
- il file sia stato salvato correttamente
- il server sia stato riavviato dopo la modifica

:::note Visibilità della Password
La password è memorizzata in chiaro nel file di configurazione. Assicurati di condividere l’accesso all’amministrazione del server solo con utenti fidati.
:::

## Conclusione

Congratulazioni, hai impostato con successo una password per il tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂