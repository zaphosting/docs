---
id: palworld-change-server-type
title: "Palworld: Cambiare il Tipo di Server"
description: "Scopri come cambiare il tipo di server Palworld tra Linux e Windows, aggiornare il percorso corretto della configurazione e applicare correttamente la modifica per la compatibilità con le mod. -> Scopri di più ora"
sidebar_label: Palworld: Cambiare il Tipo di Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Palworld possono funzionare con diversi tipi di server, solitamente Linux o Windows, a seconda della tua configurazione di hosting e delle esigenze di modding. In questa guida, imparerai come cambiare il tipo di server nell’interfaccia ZAP-Hosting, identificare il percorso corretto del file di configurazione e applicare correttamente la modifica.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web ZAP-Hosting e il permesso di fermare e riavviare il server.

:::info Informazioni Importanti sul Cambio Tipo di Server
Cambiare il tipo di server da Linux a Windows, o viceversa, può influire sui percorsi dei file, sulla compatibilità delle mod e sulle posizioni delle configurazioni esistenti. Il tipo di server Windows è spesso richiesto per alcune configurazioni di mod basate su UE4SS.
:::

:::caution Verifica la Necessità di Reinstallazione
A seconda di come il prodotto Palworld è distribuito sul tuo servizio, cambiare il tipo di server potrebbe richiedere una reinstallazione o una nuova distribuzione del software. Se l’opzione esatta non è disponibile direttamente nella tua interfaccia attuale, contatta il supporto prima di procedere.
:::

## Cosa Cambia Quando Cambi Tipo di Server

Cambiare il tipo di server di solito non significa modificare un valore all’interno della configurazione di gioco di Palworld. La modifica principale riguarda l’ambiente software sottostante del server, che cambia anche la posizione dei file di configurazione attivi.

Per Palworld, il file di configurazione principale è solitamente:

- `PalWorldSettings.ini`

La cartella che contiene questo file dipende dal tipo di server selezionato.

| Tipo di server | Percorso cartella config | File di configurazione principale |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Perché è Importante
Se modifichi il file di configurazione Linux ma il tuo server sta attualmente girando come tipo Windows, le modifiche potrebbero non essere applicate perché il server leggerà dal percorso specifico di Windows.
:::

## Ferma il Server

Prima di cambiare il tipo di server, devi fermare il server per evitare conflitti di file e modifiche incomplete.

1. Accedi all’interfaccia web del server di gioco ZAP-Hosting.
2. Apri l’amministrazione del tuo server Palworld.
3. Ferma il server usando le opzioni di controllo.

:::tip Consigliato Prima di Modificare
È buona pratica creare un backup prima di cambiare il tipo di server, soprattutto se usi già mod o hai modificato manualmente i file di configurazione.
:::

## Cambia il Tipo di Server nell’Interfaccia ZAP-Hosting

Il cambio del tipo di server viene generalmente gestito tramite le impostazioni del prodotto o del software nell’interfaccia ZAP-Hosting, non modificando una riga dentro `PalWorldSettings.ini`.

1. Nell’amministrazione del tuo server Palworld, cerca l’area delle impostazioni del software o del gioco.
2. Trova l’opzione che controlla il tipo di server o la variante del software installato.
3. Cambia l’impostazione da `Linux` a `Windows`, o da `Windows` a `Linux`, a seconda della configurazione desiderata.
4. Salva la modifica.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Se Non Riesci a Trovare l’Opzione Tipo di Server
La dicitura esatta e la posizione di questa impostazione possono variare a seconda dell’interfaccia ZAP-Hosting o della generazione del prodotto. Se non è visibile un selettore del tipo di server, la modifica potrebbe richiedere una reinstallazione o assistenza dal supporto.
:::

## Modifica il File di Configurazione Corretto

Dopo aver cambiato il tipo di server, devi verificare di modificare il file di configurazione attivo nella cartella corretta.

### Apri la Sezione Configs

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su `Configs`.
3. Naviga nella cartella corrispondente al tipo di server selezionato.

Usa uno dei seguenti percorsi:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Poi apri:

- `PalWorldSettings.ini`

### Verifica o Riapplica le Tue Impostazioni

Se hai modificato le impostazioni mentre usavi l’altro tipo di server, quelle modifiche potrebbero esistere solo nella vecchia cartella. Dovresti confrontare entrambe le versioni di `PalWorldSettings.ini` e riapplicare i valori necessari nel file ora attivo.

| Cosa controllare | Perché è importante |
| --- | --- |
| Impostazioni personalizzate esistenti | Potrebbero esistere solo nella cartella del tipo di server precedente |
| Impostazioni relative alle mod | Il tipo di server Windows è spesso usato per il supporto mod UE4SS |
| Valori di gameplay | Il server legge solo il file dal percorso attivo specifico per OS |

:::caution Non Dare per Scontato che Entrambi i File Siano Sincronizzati
Le cartelle di configurazione Linux e Windows sono separate. Cambiare il tipo di server non garantisce automaticamente che le tue impostazioni personalizzate vengano copiate tra le due posizioni.
:::

## Controlla le Voci di Configurazione

Il tipo di server di per sé non è normalmente controllato da una riga dentro `PalWorldSettings.ini`. Tuttavia, dopo il cambio, dovresti comunque confermare che il file di configurazione attivo contenga le impostazioni che ti aspetti.

Una struttura tipica di `PalWorldSettings.ini` è simile a questa:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Sostituisci i segnaposto come:

- `[your_server_name]` con il nome reale del tuo server
- `[your_admin_password]` con la tua password admin
- `[your_server_password]` con la password di accesso se usata
- `[your_server_ip]` con l’IP pubblico del server se richiesto dalla tua configurazione

:::note Nessun Comando Speciale è Richiesto nel File
Non esiste alcuna voce nota in `PalWorldSettings.ini` che cambi il tipo di server sottostante da Linux a Windows o viceversa. Questa modifica è gestita dall’ambiente server installato nell’interfaccia di hosting.
:::

## Applica la Modifica

Una volta cambiato il tipo di server e confermato il file di configurazione corretto, devi applicare la nuova configurazione.

### Riavvia il Server

Avvia nuovamente il server dall’interfaccia web ZAP-Hosting dopo aver salvato le modifiche.

In molti casi, un riavvio normale è sufficiente se il tipo di software del server è già stato cambiato con successo.

### Reinstalla se l’Interfaccia lo Richiede

Alcune distribuzioni potrebbero richiedere una reinstallazione o un passaggio di reinstallazione dopo il cambio del tipo di software. Se la tua interfaccia presenta questa opzione, seguila attentamente e verifica poi che:

- il tipo di server corretto sia attivo
- il percorso di configurazione corretto venga usato
- i valori di `PalWorldSettings.ini` siano ancora presenti

:::danger La Reinstallazione Può Sovrascrivere i File
Se è richiesta una reinstallazione, i file personalizzati o le mod potrebbero essere rimossi a meno che non siano stati prima salvati. Verifica sempre i dati di salvataggio, le mod e i file di configurazione prima di confermare una reinstallazione.
:::

## Verifica che il Nuovo Tipo di Server sia Attivo

Dopo che il server è ripartito, conferma che la modifica sia andata a buon fine.

### Conferma Tramite il Percorso di Configurazione

Apri di nuovo `Configs` e controlla se il percorso del file attivo corrisponde ora al tipo di server selezionato:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Conferma la Compatibilità delle Mod

Se hai cambiato a Windows specificamente per il modding UE4SS, verifica che i file delle mod e la configurazione correlata corrispondano ora all’ambiente server Windows.

### Controlla il Comportamento del Server

Verifica che il server si avvii normalmente e che le impostazioni previste siano caricate correttamente.

| Punto di verifica | Risultato atteso |
| --- | --- |
| Avvio server riuscito | Nessun errore all’avvio dopo il cambio tipo |
| Percorso config corretto | Corrisponde al tipo di server Linux o Windows |
| Impostazioni personalizzate caricate | Il server usa il `PalWorldSettings.ini` modificato |
| Supporto mod | Le mod basate su Windows possono ora essere usate se applicabile |

## Risoluzione Problemi

### L’Opzione Tipo di Server Non è Visibile

Se non trovi un’impostazione per cambiare il tipo di server, potrebbe significare che l’opzione non è esposta direttamente nell’interfaccia del tuo prodotto attuale. In questo caso, contatta il supporto ZAP-Hosting e chiedi se il tuo servizio Palworld può essere cambiato tra tipo server Linux e Windows.

### Le Mie Impostazioni Non Sono State Applicate Dopo il Cambio

Succede di solito quando è stato modificato il percorso di configurazione sbagliato. Controlla se hai aggiornato:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

oppure

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

in base al tipo di server attivo.

### Le Mod Non Funzionano Ancora

Passare al tipo di server Windows da solo potrebbe non completare l’intera configurazione delle mod. Alcune mod richiedono file aggiuntivi, loader o passaggi di installazione manuale oltre al cambio del tipo di server.

## Conclusione

Congratulazioni, hai cambiato con successo il tipo di server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂