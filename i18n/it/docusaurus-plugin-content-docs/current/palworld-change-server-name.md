---
id: palworld-change-server-name
title: "Palworld: Cambiare il Nome del Server"
description: "Scopri come cambiare il nome del tuo server Palworld e aggiornare il nome mostrato nel browser server ai giocatori modificando manualmente il file di configurazione corretto. -> Scopri di più ora"
sidebar_label: Palworld: Cambiare il Nome del Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld utilizza un file di configurazione per definire il nome del server mostrato nel browser server in-game. In questa guida, imparerai come cambiare manualmente il nome del server visualizzato nell’interfaccia web di ZAP-Hosting e applicare correttamente la modifica.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e il permesso di modificare i suoi file di configurazione.

:::info Configurazione Manuale Necessaria
Questa modifica si effettua modificando manualmente la configurazione del server Palworld. Il file rilevante è accessibile tramite l’amministrazione del server di gioco sotto la voce `Configs`.
:::

## Aprire il File di Configurazione di Palworld

Per cambiare il nome del server, devi modificare il file `PalWorldSettings.ini`.

Nell’interfaccia web di ZAP-Hosting:

1. Apri il tuo server di gioco **Palworld**.
2. Vai su **Configs** nell’amministrazione del server.
3. Apri il file `PalWorldSettings.ini`.

:::note Posizione del File di Configurazione
Nei server dedicati Palworld, le impostazioni rilevanti sono solitamente memorizzate in `PalWorldSettings.ini`. Nell’interfaccia ZAP-Hosting, dovresti modificare questo file tramite la sezione `Configs` invece di cambiare manualmente i percorsi dei file.
:::

## Modificare il Nome del Server

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings`. Il nome mostrato nel browser server è controllato dalla voce `ServerName`.

Puoi anche opzionalmente impostare una descrizione del server con `ServerDescription`.

### Esempio di Configurazione

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="La descrizione del tuo server Palworld")
```

Se il tuo file contiene già una riga `OptionSettings=(...)` più lunga, devi solo cambiare i valori esistenti per `ServerName` e opzionalmente `ServerDescription`.

### Valori da Modificare

| Chiave Config | Descrizione | Valore di esempio |
| --- | --- | --- |
| `ServerName` | Il nome mostrato nel browser server di Palworld | `"zaphosting"` |
| `ServerDescription` | Testo descrittivo opzionale mostrato con il server | `"Server survival pubblico"` |

:::caution Mantieni Intatte le Impostazioni Esistenti
`OptionSettings` spesso contiene molte altre impostazioni del server in un’unica riga. Modifica solo i valori di `ServerName` e `ServerDescription` a meno che tu non voglia modificare intenzionalmente altre opzioni.
:::

## Salvare le Modifiche

Dopo aver modificato i valori:

1. Salva il file `PalWorldSettings.ini` nella sezione **Configs**.
2. Verifica che le virgolette e le virgole siano formattate correttamente.

### Esempio di Riga Esistente

Se il tuo file contiene una riga simile all’esempio seguente, aggiorna solo il testo rilevante:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Server survival pubblico",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Riavviare il Server

Dopo aver salvato la configurazione, devi riavviare il tuo server Palworld affinché venga caricato il nuovo nome.

### Applicare la Nuova Configurazione

Usa la funzione di riavvio nel pannello di amministrazione del server di gioco ZAP-Hosting.

| Azione | Necessaria |
| --- | --- |
| Salvare `PalWorldSettings.ini` | Sì |
| Riavviare il server | Sì |
| Eseguire comandi console aggiuntivi | No |

:::tip Ritardo nell’Aggiornamento del Browser Server
Dopo il riavvio, il nome aggiornato del server potrebbe non apparire immediatamente a tutti i giocatori nel browser server. Se necessario, attendi qualche minuto e aggiorna la lista server.
:::

## Verificare il Nuovo Nome del Server

Una volta che il server è stato riavviato:

1. Apri Palworld.
2. Controlla il browser server multiplayer.
3. Cerca il nome che hai configurato in `ServerName`.

Se appare ancora il nome vecchio, riapri `PalWorldSettings.ini` e verifica che:
- il valore di `ServerName` sia stato cambiato correttamente
- il file sia stato salvato con successo
- il server sia stato completamente riavviato dopo la modifica

## Conclusione

Congratulazioni, hai cambiato con successo il nome del tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂