---
id: dedicated-windows-mythofempires
title: "Dedicated Server: Myth of Empires Dedicated Server Windows Setup"
description: "Scopri come configurare rapidamente ed efficacemente un server dedicato Myth of Empires sul tuo VPS Windows → Scopri di più ora"
sidebar_label: Configurazione Server MOE
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Windows e vuoi installarci un server dedicato MOE? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Come configurare un server Myth Of Empires su Windows VPS!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione
Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve aiuto, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta entrato nel server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente vari file dal workshop Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte nel server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come .7zip o Winrar. Otterrai così il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server dedicato MOE nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai aperto prima. Devi fare il login prima di poter fare qualsiasi cosa, usando l’utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi impostare la directory di installazione preferita con il comando `force_install_dir [path]`, sostituendo `[path]` con il percorso che vuoi usare per il server. Per esempio:
```
force_install_dir C:\MOE-Server
```
:::
 
Ora esegui il comando `app_update 1794810` per avviare il download. L’App ID **1794810** è l’applicazione **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Può richiedere un po’ di tempo, ma vale la pena aspettare! :)
:::

Quando finito, vai nella cartella di download dove sono stati scaricati tutti i file del server.

### Accesso a PrivateServerTool

A differenza delle installazioni SteamCMD standard, MOE richiede di prendere una cartella dalla tua installazione locale del gioco Steam per poter far partire il server su Windows.

Apri Steam sul tuo PC, clicca col tasto destro su **Myth of Empires** e seleziona **Sfoglia file locali** nel menu **Gestisci**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Nella cartella principale che si apre, trova la cartella **PrivateServerTool**. Questa è la cartella che devi copiare sul server. Puoi farlo facilmente con `CTRL+C` sul PC locale e `CTRL+V` per incollare nel server Windows via RDP. Assicurati di incollarla nella directory principale del server dedicato.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ora vai alla sezione successiva per configurare il port forwarding e il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del server dedicato. Puoi farlo tramite comandi Powershell (più semplice) o tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Clicca col tasto destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell in modalità Amministratore, altrimenti le impostazioni potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nella console Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server MOE accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Windows Firewall con sicurezza avanzata**. Potresti dover cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il server MOE. Per farlo, clicca sulle regole in entrata e in uscita come descritto e aggiungi le seguenti porte e protocolli:
- TCP in entrata e uscita: 11888, 12888
- UDP in entrata e uscita: 11888, 12888

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Prima di accedere al server, vai alla sezione successiva per creare il file di configurazione e il file `.bat` di avvio.

## Configurazione

Ora userai lo strumento server nella cartella che hai copiato prima dai file di gioco, per creare il file di configurazione e il file `.bat` di avvio che userai per lanciare il server.

Vai nella directory (la cartella che hai copiato prima):
```
../MOE/PrivateServerTool
```

In questa cartella, esegui il file **PrivateServerTool.exe**. Con questo tool, configura le opzioni del server come preferisci, inclusi mod, impostazioni di gioco e altro.

Consigliamo di impostare almeno i parametri base come **Nome Server** prima di procedere.

Quando sei pronto, vai nella scheda **Start Console** del tool, clicca su **Save Config** e poi su **Start Server**. Questo genererà il file `StartPrivateServer.bat` che userai per avviare il server.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Consigliamo di creare un collegamento al file `StartPrivateServer.bat` cliccando col tasto destro e scegliendo **Crea collegamento**, così sarà più facile avviare il server.

:::note
Potresti dover modificare il percorso della cartella gioco nel file `StartPrivateServer.bat` generato automaticamente. Apri il file con un editor tipo notepad e assicurati che il percorso all’inizio corrisponda a quello del server.

Se il percorso è sbagliato, puoi cliccare due volte sulla barra del percorso in alto nella cartella principale del server MOE per copiarlo e incollarlo nel file dove serve.
:::

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella del server Myth of Empires e lancia **StartPrivateServer.bat** (o il collegamento se l’hai creato) per iniziare l’avvio. Si aprirà la console del server in un prompt dei comandi e partirà il processo. Potrai connetterti direttamente al server andando nella scheda **Custom Server** e cercandolo nella barra di ricerca.

:::tip
Se hai problemi a connetterti, apri il file `StartPrivateServer.bat` con un editor come notepad e verifica che i due parametri IP corrispondano all’IP del tuo server Windows. Dovrebbe essere compilato automaticamente dal tool, ma è un ottimo passo per il troubleshooting.
:::

Hai installato con successo Myth of Empires sul tuo Dedicated Server Windows.