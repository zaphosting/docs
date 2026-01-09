---
id: dedicated-windows-enshrouded
title: "Dedicated Server: Configurazione Dedicated Server Enshrouded su Windows"
description: "Scopri come configurare rapidamente ed efficacemente un Dedicated Server Enshrouded sul tuo VPS Windows o server dedicato → Scopri di più ora"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Windows o un server dedicato e vuoi installarci il servizio Dedicated Server di Enshrouded? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Come configurare un Dedicated Server Enshrouded su Windows VPS!" description="Ti sembra più facile capire quando vedi le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto nel dettaglio. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, dovrai configurare **SteamCMD** per poter scaricare i file necessari del dedicated server. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop Steam e dedicati ai server. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o WinRAR. Otterrai così il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del dedicated server Enshrouded nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai appena aperto. Prima di fare qualsiasi cosa, devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la directory di installazione preferita con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Enshrouded-Server
```
:::

Ora esegui il comando `app_update 2278520` per avviare il download. L’App ID **2278520** è l’applicazione **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Potrebbe volerci un attimo, ma ne vale la pena! :)
:::

Quando il download è finito, vai nella cartella dove sono stati scaricati i file del server. Qui puoi usare **enshrouded_server.exe** per avviare il server. Ti consigliamo però di fare prima il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il tuo server sia raggiungibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del dedicated server. Puoi farlo direttamente con comandi Powershell (più semplice) oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell in modalità Amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Enshrouded accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Enshrouded. Per farlo, clicca sulle regole in entrata e in uscita come spiegato qui sotto e aggiungi le porte e protocolli seguenti:
- TCP in entrata e uscita: 15636-15637
- UDP in entrata e uscita: 15636-15637

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile e potrai connetterti tramite l’IP del server. Basta selezionare il tuo personaggio nel menu principale, andare nella scheda **Find Games** e cliccare su **Add Server**. Qui inserisci l’IP del server, la porta (default 15636) e la password del server (se impostata, altrimenti lascia vuoto).

:::tip
Dai un’occhiata alla nostra guida [Configurazione Server](enshrouded-configuration.md) se vuoi abilitare una password o modificare altre impostazioni.
:::

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di accedervi.

## Configurazione

A questo punto hai completato la configurazione base del tuo server Enshrouded. Puoi fare ulteriori personalizzazioni tramite un file di configurazione nella cartella del server.

Vai nella directory:
```
..EnshroudedServer/ (cartella principale)
```

Troverai il file di configurazione **enshrouded_server.json**. Qui puoi modificare vari parametri del server. Consulta la nostra guida [Configurazione Server](enshrouded-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del server Enshrouded e lancia **enshrouded_server.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Potrai connetterti direttamente andando nella scheda **Find Games**, cliccando su **Add Server** e inserendo IP e porta del server (default 15636).

Hai installato con successo Enshrouded sul tuo Dedicated Server Windows.