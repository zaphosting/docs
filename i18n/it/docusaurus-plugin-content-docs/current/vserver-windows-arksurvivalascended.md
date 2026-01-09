---
id: vserver-windows-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedicated Server Setup su Windows"
description: "Scopri come configurare un server dedicato ARK: Survival Ascended su un VPS Windows per un gameplay fluido e il controllo completo del server → Scopri di più ora"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Windows e vuoi installare il server dedicato di ARK: Survival Ascended? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="Configurazione Server Dedicato ARK: Survival Ascended su VPS Windows" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi installare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file dal workshop Steam e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo dentro la cartella `steamcmd`. Ora devi estrarre il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come .7zip o Winrar. Alla fine otterrai il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, l’installazione è andata a buon fine e puoi passare all’installazione del server dedicato ARK: Survival Ascended nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella finestra di comando di **steamcmd.exe** che hai aperto. Prima di tutto devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione preferita con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare per il server. Per esempio: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Ora esegui il comando `app_update 2430930` per avviare il download. L’App ID **2430930** corrisponde al server dedicato **ARK: Survival Ascended**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Potrebbe volerci un po’, ma ne vale la pena! :)
:::

### Creazione del file di avvio

Quando il download è finito, vai nella cartella dove hai installato e apri la sottocartella:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Qui devi creare il file di avvio necessario per lanciare il server dedicato. Crea un file chiamato: `start-ark.bat`. Puoi prima creare un documento di testo e poi rinominarlo con estensione `.bat`.

:::info
Assicurati di avere attivato l’opzione "Mostra estensioni file" in Esplora Risorse per usare l’estensione corretta.
:::

Apri il file con un editor di testo (tipo Notepad++) e inserisci questo contenuto:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nome_server]?ServerAdminPassword=[password_admin]?Port=7777?QueryPort=27015?MaxPlayers=[max_giocatori] -NoBattlEye
exit
```

Sostituisci `[nome_server]`, `[password_admin]` e `[max_giocatori]` con i valori che preferisci.

Se vuoi anche impostare una password per i giocatori normali, aggiungi `?ServerPassword=[password_join]` al comando, così:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nome_server]?ServerPassword=[password_join]?ServerAdminPassword=[password_admin]?Port=7777?QueryPort=27015?MaxPlayers=[max_giocatori] -NoBattlEye
exit
```

Salva il file dopo aver impostato tutto.

Il server sarà accessibile localmente su `127.0.0.1:7777` quando lancerai il file di avvio e il server sarà online. Però devi ancora configurare il port forwarding su Windows Firewall per renderlo accessibile pubblicamente, come vediamo nella sezione successiva.

### Port forwarding del server

Per far sì che il server sia raggiungibile da fuori, devi aprire le porte usate dal server dedicato. Puoi farlo via comandi Powershell (più semplice) o tramite l’interfaccia di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Clicca col tasto destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Devi eseguire Powershell come amministratore, altrimenti le regole potrebbero non applicarsi correttamente.
:::

Copia e incolla questi comandi nel prompt di Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il server ARK: Survival Ascended accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Apri la ricerca di Windows e cerca **Impostazioni Windows Firewall con sicurezza avanzata**. Se apri la pagina base del firewall, clicca su **Impostazioni avanzate** per aprire la finestra giusta.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Devi creare nuove regole per il server ARK: Survival Ascended. Clicca su regole in entrata e in uscita e aggiungi queste porte e protocolli:
- TCP in entrata e uscita: 27020
- UDP in entrata e uscita: 27015
- UDP in entrata e uscita: 7777-7778

Se ti serve aiuto, usa la nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà raggiungibile pubblicamente tramite l’IP del tuo VPS. Per connetterti, apri la console in-game di ARK: Survival Ascended e digita `open [tuo_ip]:7777`.

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di connetterti.

## Configurazione

A questo punto hai finito di installare il server dedicato ARK: Survival Ascended. Puoi personalizzare il server modificando due file di configurazione nella cartella del server.

Vai nelle cartelle:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Troverai i file **DefaultGameUserSettings.ini** e **GameUserSettings.ini**. Qui puoi modificare tante opzioni e variabili per il tuo server.

:::warning[CROSSPLAY SUPPORT]
Dal 18 novembre 2023, i proprietari di server devono installare manualmente la lista di revoca certificati scaricabile da https://dev.epicgames.com/ (o direttamente da http://crl.r2m02.amazontrust.com/r2m02.crl). Il file r2m02.crl scaricato va installato (clic destro sul file) scegliendo "Posiziona tutti i certificati nel seguente archivio" e selezionando "Autorità di certificazione radice attendibili". Potrebbe essere necessario riavviare il sistema.

Se prima del 18 novembre 2023 hai installato il certificato r2m02.cer e il server non appare, quel certificato va rimosso per far tornare visibili i server. Per rimuoverlo, esegui (Windows + R) certmgr.msc e cerca "Amazon RSA 2048 M02" in "Autorità di certificazione radice attendibili". Fai lo stesso con certlm.msc. Infine, potrebbe servire un riavvio del sistema.
:::

## Avvio & Connessione al server

Ora è il momento di avviare il server. Per farlo partire correttamente, devi prima installare il [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sul tuo VPS Windows.

:::info
Devi installare il [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sul VPS prima di avviare il server, altrimenti il server potrebbe non partire.
:::

Dopo averlo installato, avvia il server eseguendo il file **start-ark.bat** che hai creato.

Si aprirà la console del server in un prompt dei comandi e partirà l’avvio. Se tutto va bene, il server comparirà nella lista server. In alternativa, puoi connetterti direttamente aprendo la console in-game e digitando `open [tuo_ip]:7777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server ARK: Survival Ascended sul tuo VPS! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />