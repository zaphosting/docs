---
id: vserver-windows-palworld
title: "VPS: Palworld Dedicated Server Setup su Windows"
description: "Scopri come configurare un Palworld Dedicated Server sul tuo VPS Windows per un hosting di gioco senza intoppi → Scopri di più ora"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installare il servizio Palworld Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Come configurare Palworld Dedicated Server su Windows VPS!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del dedicated server. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop Steam e dedicati ai server. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Alla fine dovresti avere il file **steamcmd.exe** estratto.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del Palworld dedicated server nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai appena aperto. Devi prima fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la directory di installazione preferita con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Palworld-Server
```
:::

Ora esegui il comando `app_update 2394010` per iniziare il download. L’App ID **2394010** è l’applicazione **Palworld**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Potrebbe volerci un attimo, ma vale la pena aspettare! :)
:::

Quando finisce, vai nella cartella di download dove sono stati salvati tutti i file del server. Qui puoi usare **PalServer.exe** per avviare il server. Ti consigliamo però di fare prima il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del dedicated server. Puoi farlo tramite comandi Powershell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Fai click destro e scegli **Esegui come amministratore** per avere i permessi necessari e far funzionare tutto correttamente.

:::info
Assicurati di eseguire Powershell in modalità Amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt di Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Palworld accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Palworld. Per farlo, clicca sulle regole in ingresso e in uscita come descritto e aggiungile per questi protocolli e porte:
- TCP in ingresso e uscita: 8211
- UDP in ingresso e uscita: 8211

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile e potrai connetterti tramite l’indirizzo IP del server. Basta andare nella lista server e cercare il tuo IP con la porta: `[tuo_indirizzo_ip]:8211`

Ti consigliamo di configurare prima il server con la sezione seguente prima di accedervi.

## Configurazione

A questo punto hai finito la configurazione base del tuo server Palworld. Puoi fare ulteriori personalizzazioni tramite un file di configurazione nella cartella del server.

Vai nella cartella:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Troverai il file di configurazione **PalWorldSettings.ini**. In questo file puoi modificare un sacco di parametri per il server. Dai un’occhiata alla nostra guida [Configurazione Server](palworld-configuration.md) per vedere tutte le opzioni e cosa fanno.

:::note
Se non vedi questo file, avvia il server almeno **una volta** così si genera automaticamente. In alternativa, puoi copiare le impostazioni di default da `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Attivare la modalità Xbox

I server dedicati Palworld ora possono funzionare come server dedicati Microsoft Store/Xbox per permettere ai giocatori Xbox e PC Microsoft Store di giocare insieme sullo stesso server.

:::note
Il cross-play tra versioni Steam e Microsoft Store/Xbox non è ancora possibile. Il server può essere configurato solo per Steam o per Microsoft Store/Xbox.
:::

Vai nella cartella e apri il file **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Aggiungi questo snippet per attivare la modalità Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Salva il file e al prossimo avvio il server sarà in modalità Xbox.

:::info
Su console Xbox non puoi connetterti direttamente via IP, quindi se vuoi giocare da Xbox devi rendere il server pubblico.

Per farlo, crea un file `StartServer.bat` nella cartella principale con dentro: `PalServer.exe -publiclobby`. Il flag speciale `-publiclobby` abilita la modalità Community Server rendendolo visibile nella lista server.

Imposta anche un nome server facile da trovare, vedi la nostra guida [Configurazione Server](palworld-configuration.md) per come fare.
:::

## Avvio e connessione al server

Ora è il momento di avviare il server. Potresti dover installare il [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) se non ce l’hai già sul VPS Windows.

Vai nella cartella base del server Palworld e lancia **PalServer.exe** per avviare il processo. Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Se tutto va bene, il server sarà visibile nella lista. In alternativa puoi connetterti direttamente cercando nella barra in basso della lista server: `[tuo_indirizzo_ip]:8211`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Palworld sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />