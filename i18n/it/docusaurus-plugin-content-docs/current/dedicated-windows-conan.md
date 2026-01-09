---
id: dedicated-windows-conan
title: "Server Dedicato: Setup Server Dedicato Conan Exiles su Windows"
description: "Scopri come configurare un server dedicato di Conan Exiles su Windows Dedicated Server per un gameplay fluido e una gestione facile → Scopri di più ora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un Windows Dedicated Server e vuoi installarci il server dedicato di Conan Exiles? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server tramite Remote Desktop (RDP). Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

:::note Tool Server Launcher
In alternativa a SteamCMD, gli sviluppatori di Conan Exiles hanno creato un comodo tool launcher per server, utilizzabile su Windows, che rende più semplice avviare il server.

Ti consigliamo di leggere il [Post Ufficiale sul Forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) se vuoi usare questo metodo.
:::

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file dal workshop Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo dentro la cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows o un programma come 7zip o Winrar. Alla fine dovresti avere il file **steamcmd.exe** estratto.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi passare all’installazione del server dedicato di Conan Exiles nella sezione successiva.

## Installazione

Dopo l’installazione, potrai eseguire comandi nella finestra di comando di **steamcmd.exe** che hai aperto. Prima di tutto devi fare il login come utente **anonymous** con questo comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella dove installare il server con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare. Per esempio:
```
force_install_dir C:\Conan-Server
```
:::

Ora esegui il comando `app_update 443030` per iniziare il download. L’App ID **443030** è l’applicazione di **Conan Exiles**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Potrebbe volerci un po’, ma ne vale la pena! :)
:::

Quando il download è completato, vai nella cartella dove sono stati scaricati i file del server. Qui puoi usare il file **StartServer.bat** per avviare il server. Però ti consigliamo prima di fare il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il tuo server sia raggiungibile pubblicamente, devi aprire le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell (più semplice) o tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Fai click destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell come amministratore, altrimenti le regole potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt di Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Conan Exiles accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Firewall di Windows con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Conan Exiles. Clicca su regole in entrata e in uscita e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 7777, 25575
- UDP in entrata e uscita: 7777, 7778, 27015

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà raggiungibile pubblicamente tramite l’IP del server. Ti consigliamo però di configurare prima il server nella sezione qui sotto.

## Configurazione

A questo punto hai finito la configurazione base del server Conan Exiles. Puoi personalizzare ulteriormente il server modificando un file di configurazione nella cartella del server.

Vai nella cartella:
```
../Conan-Server/Engine/Config/Windows
```

Troverai il file di configurazione **WindowsServerEngine.ini**. Qui puoi aggiungere parametri per modificare tante opzioni.

Per esempio, per impostare nome server, password e password admin, aggiungi queste righe:
```
[OnlineSubsystem]
ServerName=[tuo_nome_server]
ServerPassword=[tua_password]

[ServerSettings]
AdminPassword=[tua_password_admin]
```

Ti consigliamo di dare un’occhiata al [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) per una lista completa delle opzioni disponibili.

## Avvio e Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del server Conan Exiles e lancia **StartServer.bat** che hai creato prima. Si aprirà la console del server in un prompt dei comandi e partirà il processo di avvio. Potrai connetterti direttamente al server tramite il browser in-game inserendo l’IP e la porta del server (default 7777).

## Conclusione

Complimenti, hai installato e configurato con successo il server Conan Exiles sul tuo dedicated server! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!