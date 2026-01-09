---
id: dedicated-windows-ragemp
title: "Server Dedicato: Configurazione RageMP Dedicated Server su Windows"
description: "Scopri come configurare RageMP Dedicated Server sul tuo server Windows per ospitare sessioni multiplayer di GTA V → Scopri di più ora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un Server Dedicato Windows e vuoi installarci il servizio RageMP Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato tramite Remote Desktop (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, inizia installando il [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), prerequisito fondamentale per RageMP. Assicurati che sia installato prima di andare avanti. Se non sei sicuro, lancia l’installer e ti dirà se è già presente.

Dopo aver installato la dipendenza, scarica l’ultima release del server dal [Sito Ufficiale di RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Se hai già RageMP installato, puoi saltare direttamente alla sezione **Switching to Server Branch**. Non serve reinstallare RageMP.
:::

## Installazione

Una volta scaricato il file, esegui **RAGEMultiplayer_Setup.exe** e segui i passaggi per l’installazione. Ti consigliamo di scegliere un percorso di installazione personalizzato durante il setup.

Con RageMP installato, avvia l’app **RAGE Multiplayer** che ora troverai tra le app di Windows.

Al primo avvio ti verrà chiesto di indicare la cartella di installazione di GTA:V. La directory dipende dal launcher da cui hai installato il gioco e di solito si trova in `C:/Program Files` o `C:/Program Files (x86)`.

Ora devi cambiare il branch per scaricare i file server.

### Switch al Branch Server

Vai nella cartella dove hai installato RageMP. Trova il file **config.xml** e modifica il parametro `channel` da `prerelease` a `prerelease_server`, poi salva.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Ora esegui **updater.exe**: scaricherà i file server necessari in base al cambio di branch. Vedrai comparire una nuova cartella **server-files** nella directory di RageMP, è quella che ti serve.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Puoi ora riportare `channel` a `prerelease` e rilanciare **update.exe** per tornare alla versione client e giocare di nuovo.

:::tip
Puoi spostare i file server e rinominare la cartella come vuoi, per esempio sul desktop. Non è obbligatorio far girare tutto dentro la cartella `RAGEMP`.
:::

Per avviare il server, lancia **ragemp-server.exe** dentro la cartella `server-files` o quella dove hai messo i file server: il server inizierà a partire. Ti consigliamo però di configurare prima il port forwarding.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Port Forwarding del server

Per far sì che il server sia raggiungibile pubblicamente, devi aprire le porte usate dal processo del server dedicato. Puoi farlo via PowerShell (più semplice) o tramite la pagina di Windows Defender Firewall.

:::tip
Al primo avvio del server ti uscirà un prompt UAC. Se accetti, le regole firewall si configurano automaticamente e puoi saltare alla sezione successiva. Altrimenti, segui uno dei metodi qui sotto.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Fai click destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell come amministratore, altrimenti le regole potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server RageMP accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Apri la ricerca di Windows e cerca **Impostazioni Firewall di Windows con sicurezza avanzata**. Se apri la pagina base del firewall, clicca su **Impostazioni avanzate** per aprire la finestra giusta.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server RageMP. Clicca su regole in entrata e in uscita e aggiungi queste regole per i protocolli e porte:

- TCP in entrata e uscita: 22005
- UDP in entrata e uscita: 22005

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà raggiungibile tramite l’IP del server.

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di connetterti.

## Configurazione

A questo punto hai finito l’installazione del server RageMP. Puoi personalizzare ulteriormente il server modificando un file di configurazione.

Torna nella cartella principale e apri il file **conf.json**. Qui puoi cambiare parametri come la porta, il nome del server e altro.

Ecco qualche esempio di configurazione:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella `server-files` o quella dove hai i file server e lancia **ragemp-server.exe**. Si aprirà la console del server in un prompt dei comandi e inizierà il processo di avvio.

Ora potrai connetterti direttamente al server in-game tramite il launcher di RageMP.

## Conclusione

Complimenti, hai installato e configurato con successo il server RageMP sul tuo Server Dedicato! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti ogni giorno!