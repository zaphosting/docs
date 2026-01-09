---
id: dedicated-windows-fivem
title: "Server Dedicato: Configurazione Server Dedicato FiveM"
description: "Scopri come configurare e gestire il tuo Server Dedicato FiveM con txAdmin per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduzione

Hai un server dedicato e vuoi installare e gestire il tuo Server Dedicato FiveM con txAdmin? Sei nel posto giusto! Qui ti spieghiamo tutti i passaggi necessari per installarlo, configurarlo e cosa devi tenere a mente.



:::warning Sistema operativo selezionato e installato
Si presume che tu abbia già scelto e installato un sistema operativo per il tuo server dedicato. Se non hai ancora completato questo passaggio, devi prima seguire la guida [Configurazione iniziale](dedicated-setup.md) per server dedicati.
:::



## Preparazione

Per configurare un server FiveM, sono necessari alcuni passaggi preparatori da completare prima di iniziare l’installazione vera e propria del Server Dedicato FiveM.



### Configura il database

Se vuoi usare e installare risorse che richiedono un database, ti serve un **server database** aggiuntivo. Ci sono vari modi per configurarlo. Nella nostra guida [Installare MySQL](dedicated-windows-installmysql.md) ti mostriamo come installare il tuo **server database** sul **server dedicato**.



### Scarica il software del server FiveM

Il passo successivo è scaricare il software del server FiveM. Vai sul sito [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) di FiveM tramite uno dei browser installati e scarica l’ultima build del server FiveM.

Estrai il file scaricato nella cartella Download e sposta i file del server FiveM preferibilmente in una cartella separata. In questo esempio, il software del server si trova in una cartella chiamata **FiveM** sul desktop.

:::warning Serve un tool per estrarre
Per estrarre il software del server FiveM scaricato, serve un tool di decompressione per il file compresso. In questo esempio usiamo [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Crea la chiave di licenza del server FiveM

Ogni server FiveM richiede una chiave di licenza, gestita tramite il nuovo [Portale Cfx.re](http://portal.cfx.re/). La chiave è collegata al tuo account Cfx.re. Accedi al sito, vai nella categoria **Server** e clicca su **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configurazione

Ora puoi iniziare l’installazione del Server FiveM e txAdmin. Per partire, apri la cartella del Server FiveM e avvia l’applicazione `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Una volta avviata l’applicazione server, si apriranno la console del server e txAdmin. Nell’interfaccia di txAdmin devi collegare il tuo **account Cfx.re** a txAdmin.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Configurazione txAdmin

Durante la configurazione di txAdmin, il tuo server FiveM viene installato e configurato in cinque passaggi. Segui le istruzioni nell’interfaccia txAdmin e definisci prima un **nome server**. Poi scegli il **tipo di server** desiderato. Questo esempio mostra l’installazione di un server FiveM con QBCore preinstallato.

Seleziona l’opzione **Popular Recipes** nel passaggio **Deployment Type** e poi il **QBCore Framework Template**. Conferma la **Data Directory** desiderata e avvia il **Recipe Deployer** per completare l’installazione.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Durante il Recipe Deployer devi inserire le ultime informazioni prima di poter avviare il server. Inserisci la chiave di licenza FiveM creata prima nel campo **License Key**. Poi clicca su **Show/Hide Database Options (Advanced)** e inserisci i dati di accesso del tuo server database. In questo caso serve solo la password definita per l’utente **root**. Tutte le altre impostazioni possono restare invariate. Controlla i dati inseriti e clicca su **Run Recipe** per avviare il processo.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Configurazione firewall
Per far sì che il tuo server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi Powershell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Assicurati di cliccare con il tasto destro e selezionare **Esegui come amministratore** per avere i permessi necessari e far funzionare tutto correttamente.

:::info
Assicurati di eseguire Powershell in modalità amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
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

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe essere necessario cliccare su **Impostazioni avanzate** per aprire la finestra corretta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server FiveM. Per farlo, clicca sulle regole in entrata e in uscita come descritto e aggiungile per i seguenti protocolli e porte:
- TCP in entrata e uscita: 30120
- UDP in entrata e uscita: 30120

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Conclusione

Hai installato e configurato con successo un Server Dedicato FiveM sul tuo server dedicato. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



