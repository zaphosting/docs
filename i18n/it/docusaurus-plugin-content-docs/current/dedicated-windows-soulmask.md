---
id: dedicated-windows-soulmask
title: "Server Dedicato: Configurazione Server Dedicato Soulmask su Windows"
description: "Scopri come installare rapidamente ed efficacemente il server dedicato Soulmask sul tuo VPS Windows o server dedicato → Scopri di più ora"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows o un server dedicato e vuoi installare il server dedicato Soulmask? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop di Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte nel server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o WinRAR. Otterrai così il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi procedere con l’installazione del server dedicato Soulmask nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai aperto. Prima di fare qualsiasi cosa, devi effettuare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la directory di installazione preferita con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la cartella dove vuoi installare il server. Per esempio:
```
force_install_dir C:\Soulmask-Server
```
:::

Ora esegui il comando `app_update 3017310` per avviare il download. L’App ID **3017310** corrisponde a **Soulmask**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Potrebbe volerci un attimo, ma ne vale la pena! :)
:::

Quando il download è finito, vai nella cartella di installazione dove sono stati scaricati tutti i file del server. Qui puoi usare il file **StartServer.bat** per avviare il server. Ti consigliamo però di configurare prima il port forwarding e le impostazioni del server.

### Port Forwarding del server

Per far sì che il tuo server sia raggiungibile pubblicamente, devi configurare il port forwarding per le porte usate dal server dedicato. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell come amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Soulmask accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe essere necessario cliccare su **Impostazioni avanzate** per aprire la finestra completa se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il server Soulmask. Clicca su regole in entrata e in uscita e aggiungi le seguenti porte e protocolli:
- TCP in entrata e uscita: 8777, 27015
- UDP in entrata e uscita: 8777, 27015

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà raggiungibile pubblicamente. Potrai connetterti inserendo l’indirizzo IP del server nel menu multiplayer, scegliendo IP Direct Connect e inserendo IP e porta (di default 8777 o quella che hai configurato).

Ti consigliamo di configurare prima le impostazioni del server nella sezione seguente prima di connetterti.

## Configurazione

A questo punto hai completato l’installazione del server Soulmask. Puoi personalizzare ulteriormente il server modificando i parametri nel file **StartServer.bat** nella cartella principale e nel file **GameUserSettings.ini** che trovi in `../WS/Saved/Config/WindowsServer`.

Dai un’occhiata alla nostra guida [Configurazione Server](soulmask-configuration.md) per scoprire tutti i parametri e le opzioni di configurazione disponibili per il tuo server Soulmask.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale e lancia **StartServer.bat** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio.

:::tip
Se il server non parte e la finestra del prompt si chiude subito, vai nella cartella `../WS/Saved/Logs` e controlla l’ultimo log per capire il problema.

Un problema comune riguarda il fallimento dell’avvio del servizio Steam online sui binari Windows del server dedicato a causa di un packaging errato. Se l’errore è legato a Steam, sposta i file `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll` dalla cartella principale in `../WS/Binaries/Win64`. Prova di nuovo ad avviare il server e dovrebbe partire correttamente nel prompt.
:::

Ora potrai connetterti direttamente al server inserendo l’IP e la porta 8777 nel menu multiplayer in-game.

Se vuoi che il server compaia nella lista pubblica, dai un’occhiata alla nostra guida [Configurazione Server](soulmask-configuration.md) e aggiungi il parametro `-SteamServerName` nel file **StartServer.bat**. Salva e rilancia il batch.

Hai installato con successo Soulmask sul tuo server dedicato Windows!