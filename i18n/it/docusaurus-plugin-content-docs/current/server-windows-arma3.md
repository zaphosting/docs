---
id: server-windows-arma3
title: "Arma 3 Dedicated Server Setup su Windows"
description: "Scopri come configurare un Arma 3 Dedicated Server sul tuo server Windows per un gameplay fluido e controllo totale → Scopri di più ora"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS/Dedicated Server Windows e vuoi installarci il servizio Arma 3 Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS/Dedicated Server tramite Remote Desktop (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del dedicated server. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file dal workshop Steam e i file dei dedicated server. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Alla fine dovresti avere il file **steamcmd.exe** estratto.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, il processo è finito con successo e puoi passare all’installazione del dedicated server Arma 3 nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai appena aperto. Prima di fare qualsiasi cosa, devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: Puoi impostare la directory di installazione preferita con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la cartella dove vuoi installare il server. Per esempio:
```
force_install_dir C:\arma3-server
```
:::

Ora esegui il comando `app_update 233780` per iniziare il download. L’App ID **233780** è l’applicazione **Arma 3**.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Ci vuole un attimo, ma ne vale la pena! :)
:::

Quando finisce, vai nella cartella di download dove sono stati scaricati tutti i file del server. Qui puoi usare **Arma 3_server.exe** per avviare il server. Però ti consigliamo prima di fare il port forwarding e configurare il server.

### Port Forwarding del server

Per far sì che il server sia accessibile pubblicamente, devi modificare le regole di port forwarding per le porte usate dal processo del VPS/Dedicated Server. Puoi farlo tramite comandi Powershell, che è più semplice, oppure tramite la pagina di Windows Defender Firewall.

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
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server Arma 3 accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Usa la ricerca di Windows per aprire **Impostazioni Firewall di Windows con sicurezza avanzata**. Potrebbe servirti cliccare su **Impostazioni avanzate** per aprire la finestra giusta se apri la pagina base del Firewall di Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Devi creare nuove regole per il tuo server Arma 3. Per farlo, clicca sulle regole in entrata e in uscita come spiegato qui sotto e aggiungi le seguenti porte e protocolli:
- UDP in entrata e uscita: 2302–2306

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il tuo server sarà accessibile pubblicamente e potrai connetterti tramite l’indirizzo IP del server. Basta andare nel menu principale, selezionare il personaggio, aprire la scheda **Find Games** e cliccare su **Add Server**. Qui inserisci l’IP del server, la porta (di default 2302) e la password del server (se impostata, altrimenti lascia vuoto).

Ti consigliamo di configurare prima il server nella sezione seguente prima di accedervi.

## Configurazione

A questo punto hai finito la configurazione base del tuo server Arma 3. Puoi fare ulteriori personalizzazioni tramite il file di configurazione che trovi nella cartella del server.

Vai nella cartella:
```
C:\arma3-Server
```

Qui troverai il file **server.cfg**. In questo file puoi modificare diversi parametri del server.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia l’eseguibile **arma3server_x64.exe**.

Si aprirà la console del server e partirà il processo di avvio.

I giocatori possono connettersi al tuo server tramite il **browser server di Arma 3** usando l’**IP del server** e la porta di default **2302**.

## Conclusione

Congratulazioni, hai installato e configurato con successo il **server Arma 3** sul tuo VPS/Dedicated Server! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />