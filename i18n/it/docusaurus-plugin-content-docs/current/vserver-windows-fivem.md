---
id: vserver-windows-fivem
title: "VPS: Configurazione Server Dedicato FiveM"
description: "Scopri come installare e configurare il tuo server dedicato FiveM su un VPS per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduzione

Hai un VPS e vuoi installare e gestire il tuo server dedicato FiveM con txAdmin? Sei nel posto giusto! Qui ti spieghiamo tutti i passaggi necessari per installarlo, configurarlo e cosa devi tenere a mente. 


## Preparazione

Per configurare un server FiveM, ci sono alcuni passaggi preparatori da fare prima di iniziare con l’installazione vera e propria del server dedicato FiveM.



### Configura il database

Se vuoi usare e installare risorse che richiedono un database, ti serve un **server database** aggiuntivo. Ci sono diversi modi per configurarlo. Nel nostro tutorial [Install MySQL](vserver-windows-installmysql.md) ti mostriamo come installare un **server database** direttamente sul tuo **VPS**.



### Scarica il software del server FiveM

Il passo successivo è scaricare il software del server FiveM. Vai sul sito [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) di FiveM tramite il browser che preferisci e scarica l’ultima build del server FiveM.

Estrai il file scaricato nella cartella Download e sposta i file del server FiveM preferibilmente in una cartella dedicata. In questo esempio, il software del server si trova in una cartella chiamata **FiveM** sul desktop.

:::warning Serve un tool per estrarre
Per estrarre il software del server FiveM scaricato, ti serve un tool di decompressione. In questo esempio usiamo [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Crea la license key per il server FiveM

Ogni server FiveM ha bisogno di una license key, gestita tramite il nuovo [Cfx.re Portal](http://portal.cfx.re/). La license key è collegata al tuo account Cfx.re. Accedi al sito, vai nella categoria **Server** e clicca su **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configurazione

Ora puoi partire con l’installazione del server FiveM e txAdmin. Per iniziare, apri la cartella del server FiveM e avvia l’applicazione `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Una volta avviato il server, si apriranno la console del server e txAdmin. Nell’interfaccia di txAdmin devi collegare il tuo **account Cfx.re** a txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configurazione txAdmin

Durante la configurazione di txAdmin, il tuo server FiveM viene installato e configurato in 5 step. Segui le istruzioni nell’interfaccia txAdmin e definisci prima un **nome server**. Poi scegli il **tipo di server** che vuoi. In questo esempio installiamo un server FiveM con QBCore preinstallato.

Seleziona l’opzione **Popular Recipes** nel passo **Deployment Type** e poi scegli il **QBCore Framework Template**. Conferma la **Data Directory** desiderata e avvia il **Recipe Deployer** per completare l’installazione.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante il Recipe Deployer devi inserire le ultime info prima di poter avviare il server. Inserisci la license key FiveM creata prima nel campo **License Key**. Poi clicca su **Show/Hide Database Options (Advanced)** e inserisci i dati di accesso del tuo server database. In questo caso serve solo la password definita per l’utente **root**. Tutte le altre impostazioni possono restare così. Controlla tutto e clicca su **Run Recipe** per avviare il processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configurazione firewall
Per fare in modo che il tuo server sia raggiungibile pubblicamente, devi aprire le porte usate dal processo del server dedicato. Puoi farlo tramite comandi Powershell (più semplice) oppure tramite la pagina di Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Ricordati di cliccare con il tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell come amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Ora copia e incolla questi comandi nel prompt di Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server FiveM accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni firewall di Windows con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server FiveM. Clicca sulle regole in entrata e in uscita come spiegato qui sotto e aggiungi le porte e protocolli:
- TCP in entrata e uscita: 30120
- UDP in entrata e uscita: 30120

Se ti serve una mano, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusione

Hai installato e configurato con successo un server dedicato FiveM sul tuo VPS. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />