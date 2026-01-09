---
id: vserver-windows-enshrouded
title: "VPS: Enshrouded Dedicated Server Windows Setup"
description: "Scopri come configurare un server dedicato Enshrouded sul tuo VPS Windows per un gameplay fluido e controllo totale → Scopri di più ora"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Windows e vuoi installare il server dedicato di Enshrouded? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Come configurare un server dedicato Enshrouded su VPS Windows!" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente workshop e file per server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo dentro la cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Otterrai così il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del server dedicato Enshrouded nella sezione successiva.

## Installazione

Dopo l’installazione, potrai eseguire comandi nella console di **steamcmd.exe** che hai aperto. Prima di tutto devi fare il login come utente **anonymous** con questo comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella dove installare il server con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare. Per esempio:
```
force_install_dir C:\Enshrouded-Server
```
:::

Ora esegui il comando `app_update 2278520` per avviare il download. L’App ID **2278520** corrisponde a **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Potrebbe volerci un attimo, ma ne vale la pena! :)
:::

Quando il download è completato, vai nella cartella dove sono stati scaricati i file del server. Qui puoi avviare il server con **enshrouded_server.exe**. Ti consigliamo però di configurare prima il port forwarding e le impostazioni del server.

### Port Forwarding del server

Per far sì che il tuo server sia raggiungibile pubblicamente, devi aprire le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell (più semplice) oppure tramite la pagina di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Ricordati di cliccare col tasto destro e scegliere **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell come amministratore, altrimenti le regole potrebbero non applicarsi correttamente.
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

Devi creare nuove regole per il tuo server Enshrouded. Clicca su regole in entrata e in uscita e aggiungi le porte per questi protocolli:
- TCP in entrata e uscita: 15636-15637
- UDP in entrata e uscita: 15636-15637

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà raggiungibile pubblicamente. Potrai connetterti inserendo l’IP del server nel gioco: seleziona il tuo personaggio nel menu principale, vai su **Trova Partite** e clicca su **Aggiungi Server**. Inserisci l’IP del server, la porta (default 15636) e la password del server (se impostata, altrimenti lascia vuoto).

:::tip
Dai un’occhiata alla nostra guida [Configurazione Server](enshrouded-configuration.md) se vuoi impostare una password o modificare altre opzioni.
:::

Ti consigliamo di configurare prima il server seguendo la sezione qui sotto prima di connetterti.

## Configurazione

A questo punto hai completato l’installazione del server Enshrouded. Puoi personalizzare ulteriormente il server modificando il file di configurazione che trovi nella cartella del server.

Vai nella directory:
```
..EnshroudedServer/ (cartella principale)
```

Troverai il file **enshrouded_server.json**. Qui puoi modificare diversi parametri del server. Consulta la nostra guida [Configurazione Server](enshrouded-configuration.md) per scoprire tutte le opzioni disponibili e cosa fanno.

## Avvio e connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del server Enshrouded e lancia **enshrouded_server.exe** per far partire il processo. Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Potrai connetterti direttamente dal gioco andando su **Trova Partite**, cliccando su **Aggiungi Server** e inserendo IP e porta (default 15636).

## Conclusione

Congratulazioni, hai installato e configurato con successo il server Enshrouded sul tuo VPS! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />