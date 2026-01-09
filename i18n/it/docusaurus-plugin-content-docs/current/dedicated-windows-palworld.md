---
id: dedicated-windows-palworld
title: "Server Dedicato: Configurazione Palworld Dedicated Server su Windows"
description: "Scopri come configurare rapidamente ed efficacemente un Palworld Dedicated Server sul tuo VPS o server Windows → Scopri di più ora"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows o un server dedicato e vuoi installarci il servizio Palworld Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Come configurare Palworld Dedicated Server su Windows VPS!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop di Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Otterrai così il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server Palworld nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai appena aperto. Devi prima fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione preferita con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\Palworld-Server
```
:::

Ora esegui il comando `app_update 2394010` per avviare il download. L’App ID **2394010** corrisponde a **Palworld**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::

Quando finito, vai nella cartella di download dove sono stati scaricati tutti i file del server. Qui puoi usare **PalServer.exe** per avviare il server. Ti consigliamo però di configurare prima il port forwarding e le impostazioni del server.

### Port Forwarding del server

Per far sì che il tuo server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell (più semplice) o tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

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

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il tuo server Palworld. Clicca sulle regole in entrata e in uscita come descritto e aggiungi le seguenti porte e protocolli:
- TCP in entrata e uscita: 8211
- UDP in entrata e uscita: 8211

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile e potrai connetterti tramite l’indirizzo IP del server. Basta andare nella lista server e cercare `[tuo_indirizzo_ip]:8211`.

Ti consigliamo di configurare prima il server nella sezione seguente prima di accedervi.

## Configurazione

A questo punto hai completato la configurazione base del server Palworld. Puoi fare ulteriori personalizzazioni tramite un file di configurazione nella cartella del server.

Vai nella cartella:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Qui trovi il file **PalWorldSettings.ini**. In questo file puoi modificare tantissime impostazioni del server. Dai un’occhiata alla nostra guida [Configurazione Server](palworld-configuration.md) per vedere tutte le opzioni e cosa fanno.

:::note
Se non vedi questo file, avvia il server almeno **una volta** così si genera automaticamente. In alternativa, puoi copiare le impostazioni di default da `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Attivare la Modalità Xbox

I server dedicati Palworld ora possono funzionare anche come server Microsoft Store/Xbox, così i giocatori Xbox e PC Microsoft Store possono giocare insieme sullo stesso server.

:::note
Il cross-play tra versioni Steam e Microsoft Store/Xbox non è ancora possibile. Il server può funzionare solo per Steam o per Microsoft Store/Xbox.
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

Per farlo, crea un file `StartServer.bat` nella cartella principale e inserisci: `PalServer.exe -publiclobby`. Il flag speciale `-publiclobby` abilita la modalità Community Server, rendendolo visibile nella lista server.

Imposta anche un nome server facile da trovare, vedi la nostra guida [Configurazione Server](palworld-configuration.md) per come fare.
:::

## Avvio & Connessione al server

Ora puoi avviare il server. Potresti dover installare il [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) se non è già presente sul tuo Windows Dedicated Server.

Vai nella cartella base del server Palworld e lancia **PalServer.exe** per avviare il processo. Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Se tutto va bene, il server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente cercando `[tuo_indirizzo_ip]:8211` nella barra di ricerca in basso nella lista server.

Hai installato con successo Palworld sul tuo Windows Dedicated Server.