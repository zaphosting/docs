---
id: vserver-windows-avorion
title: "VPS: Configurazione Server Dedicato Avorion su Windows"
description: "Scopri come configurare rapidamente e facilmente un server dedicato Avorion sul tuo VPS Windows → Scopri di più ora"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installare il server dedicato di Avorion? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Come Configurare un Server Dedicato Avorion su VPS Windows!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file dal workshop Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora estrai il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Dovresti ottenere il file **steamcmd.exe**.

Esegui semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server dedicato Avorion nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai aperto prima. Devi prima fare il login come utente **anonymous** con questo comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la cartella che vuoi usare per il server. Per esempio: 
```
force_install_dir C:\Avorion-Server
```
:::

Ora esegui il comando `app_update 565060` per iniziare il download. L’App ID **565060** è l’applicazione **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Potrebbe volerci un attimo, ma ne vale la pena! :)
:::

Quando finisce, vai nella cartella di download dove sono stati salvati i file del server. Qui fai una copia del file **server.bat** e rinominala in **startserver.bat** o come preferisci. Userai questo nuovo file `.bat` per avviare il server e modificare le opzioni di configurazione nella sezione successiva. Ti consigliamo di fare prima il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell (più semplice) o tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell in modalità amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Avorion accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Avorion. Clicca su regole in entrata e in uscita e aggiungi queste porte e protocolli:
- TCP in entrata e uscita: 27000
- UDP in entrata e uscita: 27000, 27003, 27020, 27021

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile pubblicamente tramite l’IP del server. Ti consigliamo di configurare prima le impostazioni del server nella sezione successiva prima di connetterti.

## Configurazione

A questo punto hai finito la configurazione base del server Avorion. Puoi modificare le impostazioni del server direttamente nel file **startserver.bat** che hai copiato prima. Aprilo con un editor di testo come Notepad e personalizza i parametri.

Se vuoi modificare parametri specifici del mondo di gioco, devi accedere ai salvataggi della galassia e modificare il file di configurazione **server.ini**. Lo trovi nella cartella AppData di Windows, al percorso:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Puoi accedere facilmente a questa cartella premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione questo percorso: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Premi **OK** e sarai nella cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella base del server Avorion e lancia **startserver.bat** che hai creato prima per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio. Potrai connetterti direttamente al server tramite il browser server in-game inserendo l’IP e la porta del server (default 27000).

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Avorion sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />