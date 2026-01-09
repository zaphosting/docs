---
id: vserver-windows-foundry
title: "VPS: Foundry Dedicated Server Setup su Windows"
description: "Scopri come configurare un Foundry Dedicated Server sul tuo VPS Windows per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installarci il servizio Foundry Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Come configurare Foundry Dedicated Server su Windows VPS!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del dedicated server. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop di Steam e i file dei dedicated server. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Alla fine otterrai un file **steamcmd.exe** estratto.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del Foundry dedicated server nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella finestra di comando di **steamcmd.exe** che hai aperto. Devi prima fare il login con l’utente **anonymous** usando il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la directory di installazione preferita con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Foundry-Server
```
:::

Ora esegui il comando `app_update 2915550` per iniziare il download. L’App ID **2915550** è l’applicazione **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Può richiedere un po’ di tempo, ma vale la pena aspettare! :)
:::

Quando è finito, vai nella cartella di download dove sono stati scaricati tutti i file del server. Qui puoi usare **FoundryDedicatedServerLauncher.exe** per avviare il server. Però ti consigliamo prima di fare il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del dedicated server. Puoi farlo tramite comandi PowerShell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **PowerShell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** così hai i permessi necessari e tutto funziona correttamente.

:::info
Assicurati di eseguire PowerShell in modalità Amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt di PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Foundry accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Foundry. Per farlo, clicca sulle regole in entrata e in uscita come spiegato qui sotto e aggiungi le porte e protocolli:
- TCP in entrata e uscita: 3724, 27015
- UDP in entrata e uscita: 3724, 27015

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile, quindi potrai connetterti tramite l’indirizzo IP del server. Vai su Multiplayer dal menu principale, scegli IP Direct Connect e inserisci IP e porta (di default 3724, come hai configurato).

Ti consigliamo di configurare prima il server nella sezione seguente prima di accedervi.

## Configurazione

A questo punto hai finito la configurazione base del tuo server Foundry. Puoi fare ulteriori configurazioni tramite un file di configurazione. Torna nella cartella del gioco e crea un file **app.cfg** (se non esiste già) nella directory principale, cioè nella stessa cartella di **FoundryDedicatedServerLauncher.exe**.

Apri **app.cfg** con il Blocco Note o un editor a scelta e inizia ad aggiungere le opzioni di configurazione che vuoi modificare. Per ogni parametro crea una nuova riga con il nome, un uguale e il valore che vuoi impostare.

Ecco un esempio con tre opzioni configurate:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Dai un’occhiata alla nostra guida [Configurazione Server](foundry-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale e lancia **FoundryDedicatedServerLauncher.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e inizierà l’avvio.

Potrai connetterti direttamente al server via IP andando su **Multiplayer->IP Direct Connect** e inserendo l’IP del server e la porta 3724, che è quella di default e che hai aperto nel port forwarding.

Se vuoi che il server compaia nella lista pubblica, dai un’occhiata alla nostra guida [Configurazione Server](foundry-configuration.md) e aggiungi i parametri `server_name` e `server_is_public` nel file di configurazione. Salva e riavvia il server.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Foundry sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />