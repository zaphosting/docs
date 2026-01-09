---
id: dedicated-windows-foundry
title: "Server Dedicato: Setup Foundry Dedicated Server su Windows"
description: "Scopri come configurare rapidamente e facilmente un Foundry Dedicated Server sul tuo VPS Windows o server dedicato → Scopri di più ora"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows o un server dedicato e vuoi installarci il servizio Foundry Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Come Configurare Foundry Dedicated Server su Windows VPS!" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione

Per cominciare, connettiti al tuo VPS tramite Remote Desktop (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente workshop e file di server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo dentro la cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come .7zip o Winrar. Alla fine otterrai il file **steamcmd.exe** estratto.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server Foundry nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai appena aperto. Prima di fare qualsiasi cosa devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione preferita con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Foundry-Server
```
:::

Ora esegui il comando `app_update 2915550` per iniziare il download. L’App ID **2915550** è l’applicazione **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::

Quando finisce, vai nella cartella di download dove sono stati scaricati tutti i file del server. Qui puoi usare **FoundryDedicatedServerLauncher.exe** per avviare il server. Ti consigliamo però di fare prima il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell in modalità amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Foundry accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra corretta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Foundry. Per farlo, clicca sulle regole in entrata e in uscita come descritto e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 3724, 27015
- UDP in entrata e uscita: 3724, 27015

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà accessibile pubblicamente, quindi potrai connetterti tramite l’indirizzo IP del server. Vai su Multiplayer dal menu principale, scegli IP Direct Connect e inserisci IP e porta (di default 3724, come hai configurato).

Ti consigliamo di configurare prima le impostazioni del server nella sezione seguente prima di accedere.

## Configurazione

A questo punto hai finito la configurazione base del server Foundry. Puoi fare ulteriori personalizzazioni tramite un file di configurazione. Torna nella cartella del gioco e crea un file **app.cfg** (se non esiste già) nella directory principale, cioè nella stessa cartella di **FoundryDedicatedServerLauncher.exe**.

Apri **app.cfg** con notepad o un editor a tua scelta e inizia ad aggiungere le opzioni di configurazione che vuoi modificare. Per ogni parametro crea una nuova riga con il nome, un uguale e il valore che vuoi impostare.

Ecco un esempio con tre opzioni configurate:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Dai un’occhiata alla nostra guida [Server Configuration](foundry-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale e lancia **FoundryDedicatedServerLauncher.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio.

Ora puoi connetterti direttamente al server via IP andando su **Multiplayer->IP Direct Connect** e inserendo l’indirizzo IP del server e la porta 3724, che è quella di default e che hai aperto.

Se vuoi che il server compaia nella lista pubblica, dai un’occhiata alla nostra guida [Server Configuration](foundry-configuration.md) e aggiungi i parametri `server_name` e `server_is_public` nel file di configurazione. Salva e riavvia il server.

Hai installato Foundry con successo sul tuo Windows Dedicated Server!