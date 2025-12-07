---
id: vserver-windows-soulmask
title: "VPS: Soulmask Dedicated Server Windows Setup"
description: "Scopri come installare il server dedicato Soulmask sul tuo VPS o server dedicato Windows per un gameplay senza intoppi → Scopri di più ora"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows o un server dedicato e vuoi installarci il server dedicato di Soulmask? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file dal workshop di Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora estrai il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Dovresti ottenere il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Quando vedi il messaggio **Loading Steam API.... OK**, l’installazione è finita e puoi passare all’installazione del server dedicato Soulmask nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella finestra di comando di **steamcmd.exe** che hai aperto. Prima di fare qualsiasi cosa, devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Soulmask-Server
```
:::

Ora esegui il comando `app_update 3017310` per iniziare il download. L’App ID **3017310** è l’applicazione **Soulmask**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Può volerci un attimo, ma ne vale la pena! :)
:::

Quando il download è completato, vai nella cartella di installazione dove sono stati scaricati tutti i file del server. Qui puoi usare il file **StartServer.bat** per avviare il server. Ti consigliamo però di configurare prima il port forwarding e le impostazioni del server.

### Port Forwarding del server

Per far sì che il server sia raggiungibile pubblicamente, devi aprire le porte usate dal server dedicato. Puoi farlo tramite comandi PowerShell, che è più veloce, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Clicca col tasto destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire PowerShell come amministratore, altrimenti le regole potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella finestra di PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Soulmask accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Apri la ricerca di Windows e cerca **Impostazioni Firewall di Windows con sicurezza avanzata**. Se apri la pagina base del firewall, clicca su **Impostazioni avanzate** per aprire la finestra giusta.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Devi creare nuove regole per il server Soulmask. Clicca su regole in entrata e in uscita e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 8777, 27015
- UDP in entrata e uscita: 8777, 27015

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà raggiungibile pubblicamente. Potrai connetterti inserendo l’indirizzo IP del server nel menu multiplayer, usando la funzione IP Direct Connect e la porta 3724 di default (o quella che hai configurato).

Ti consigliamo di configurare prima le impostazioni del server nella sezione seguente prima di connetterti.

## Configurazione

A questo punto hai completato l’installazione del server Soulmask. Puoi personalizzare ulteriormente il server modificando i parametri nel file **StartServer.bat** nella cartella principale e nel file **GameUserSettings.ini** che trovi in `../WS/Saved/Config/WindowsServer`.

Dai un’occhiata alla nostra guida [Configurazione Server](soulmask-configuration.md) per scoprire tutti i parametri e le opzioni di configurazione disponibili per il tuo server Soulmask.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale e lancia **StartServer.bat** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio.

:::tip
Se il server non parte e la finestra del prompt si chiude subito, vai nella cartella `../WS/Saved/Logs` e controlla l’ultimo log per capire il problema.

Un problema comune riguarda il servizio Steam che non parte sui binari Windows del server dedicato a causa di un packaging errato. Se l’errore è legato a Steam, sposta questi file dalla cartella principale in `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Poi prova a riavviare il server, dovrebbe partire correttamente.
:::

Ora puoi connetterti direttamente al server inserendo l’IP e la porta 8777 nel menu multiplayer in-game.

Se vuoi che il server compaia nella lista server, controlla la nostra guida [Configurazione Server](soulmask-configuration.md) e aggiungi il parametro `-SteamServerName` nel file **StartServer.bat**. Salva e rilancia il batch.

Hai installato con successo Soulmask sul tuo server dedicato Windows.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Soulmask sul tuo VPS! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />