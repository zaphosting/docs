---
id: vserver-windows-conan
title: "VPS: Setup Server Dedicato Conan Exiles su Windows"
description: "Scopri come configurare rapidamente e facilmente un server dedicato di Conan Exiles sul tuo VPS Windows → Scopri di più ora"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installarci il server dedicato di Conan Exiles? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

:::note Tool Server Launcher
In alternativa a SteamCMD, gli sviluppatori di Conan Exiles mantengono un utile tool launcher per server, utilizzabile su Windows per semplificare l’avvio del server.

Ti consigliamo di leggere il [Post Ufficiale sul Forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) se vuoi usare questo metodo.
:::

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file di workshop e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora estrai il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Otterrai il file **steamcmd.exe**.

Esegui semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server dedicato Conan Exiles nella sezione successiva.

## Installazione

Dopo l’installazione, potrai eseguire comandi nella console di **steamcmd.exe** che hai aperto. Prima di tutto devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la cartella di installazione preferita con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Conan-Server
```
:::

Ora esegui il comando `app_update 443030` per iniziare il download. L’App ID **443030** è l’applicazione **Conan Exiles**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::

Quando finisce, vai nella cartella di download dove sono stati scaricati tutti i file del server. Qui puoi usare il file **StartServer.bat** per avviare il server. Ti consigliamo però di fare prima il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Fai click destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell in modalità amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Conan Exiles accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Firewall di Windows con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Conan Exiles. Clicca su regole in entrata e in uscita come descritto e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 7777, 25575
- UDP in entrata e uscita: 7777, 7778, 27015

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà accessibile e potrai connetterti tramite l’IP del server. Ti consigliamo però di configurare prima il server nella sezione seguente.

## Configurazione

A questo punto hai finito la configurazione base del server Conan Exiles. Puoi fare ulteriori personalizzazioni tramite un file di configurazione nella cartella del server.

Vai nella directory:
```
../Conan-Server/Engine/Config/Windows
```

Troverai il file di configurazione **WindowsServerEngine.ini**. Qui puoi modificare tante opzioni aggiungendo parametri specifici.

Per esempio, per impostare nome server, password e password admin, aggiungi questo al file:
```
[OnlineSubsystem]
ServerName=[tuo_nome_server]
ServerPassword=[tua_password]

[ServerSettings]
AdminPassword=[tua_password_admin]
```

Ti consigliamo di dare un’occhiata al [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) per una lista completa delle opzioni disponibili.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella base del server Conan Exiles e lancia **StartServer.bat** che hai creato prima. Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Potrai connetterti direttamente al server tramite il browser in-game inserendo IP e porta del server (default 7777).

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Conan Exiles sul tuo VPS! Se hai domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />