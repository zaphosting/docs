---
id: dedicated-windows-arksurvivalascended
title: "Server Dedicato: ARK Survival Ascended Dedicated Server Setup su Windows"
description: "Scopri come configurare un server dedicato ARK: Survival Ascended sul tuo VPS Windows o server dedicato in modo rapido e semplice → Scopri di più ora"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Windows o un server dedicato e vuoi installare il server dedicato di ARK: Survival Ascended? Sei nel posto giusto! In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="Setup Server Dedicato ARK: Survival Ascended su VPS Windows" description="Ti piace capire meglio vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione

Per cominciare, connettiti al tuo VPS tramite Desktop Remoto (RDP). Se ti serve una mano, usa la nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente file di workshop e server dedicati. Scarica [SteamCMD dal sito ufficiale Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o direttamente [qui](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nuova cartella da qualche parte sul server, in questo esempio la chiameremo `steamcmd`. Vai nella cartella Download, trova il file **steamcmd.zip** appena scaricato e spostalo nella cartella `steamcmd`. Ora estrai il file cliccando col tasto destro e usando la funzione di estrazione di Windows, oppure con programmi come 7zip o Winrar. Dovresti ottenere il file **steamcmd.exe**.

Lancia semplicemente **steamcmd.exe** e aspetta che l’installazione sia completata.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Quando vedi il messaggio **Loading Steam API.... OK**, l’installazione è finita e puoi passare all’installazione del server dedicato ARK: Survival Ascended nella sezione successiva.

## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella console di **steamcmd.exe** che hai aperto. Prima di fare qualsiasi cosa, devi fare il login come utente **anonymous** con il comando: `login anonymous`

Una volta loggato, puoi iniziare a scaricare i file.

:::tip
Opzionale: puoi scegliere la cartella di installazione con il comando `force_install_dir [percorso]`, sostituendo `[percorso]` con la directory che vuoi usare per il server. Per esempio:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Ora esegui il comando `app_update 2430930` per iniziare il download. L’App ID **2430930** è l’applicazione **ARK: Survival Ascended Dedicated Server**.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Non interrompere il processo prima che sia completato per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::

### Creazione del file di avvio

Quando il download è finito, vai nella cartella dove hai installato il server e apri questa sottocartella:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Qui devi creare il file di avvio necessario per lanciare il server dedicato. Crea un file chiamato `start-ark.bat`. Puoi prima creare un file di testo e poi rinominarlo con estensione `.bat`.

:::info
Assicurati di avere attivato l’opzione "Mostra estensioni file" in Esplora Risorse per usare l’estensione corretta.
:::

Apri il file con un editor di testo (es. Notepad++) e inserisci questo contenuto:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Sostituisci `[server_name]`, `[admin_password]` e `[max_players]` con i valori che preferisci.

Se vuoi anche impostare una password per i giocatori normali, aggiungi `?ServerPassword=[join_password]` al comando, così:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Salva il file dopo aver impostato le variabili.

Ora il server sarà accessibile localmente su `127.0.0.1:7777` quando lancerai il file di avvio e il server sarà online. Però devi ancora aprire le porte nel firewall di Windows per renderlo accessibile pubblicamente, come vedremo nella sezione successiva.

### Port forwarding del server

Per far sì che il server sia raggiungibile da fuori, devi aprire le porte usate dal server dedicato. Puoi farlo tramite comandi Powershell (più semplice) o tramite l’interfaccia di Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Apri la ricerca di Windows e cerca **Powershell**. Clicca col tasto destro e scegli **Esegui come amministratore** per avere i permessi necessari.

:::info
Assicurati di eseguire Powershell come amministratore, altrimenti le modifiche potrebbero non applicarsi.
:::

Copia e incolla questi comandi nella console Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Questi comandi creeranno automaticamente le regole firewall necessarie per rendere il tuo server ARK: Survival Ascended accessibile pubblicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Apri la ricerca di Windows e cerca **Impostazioni Windows Firewall con sicurezza avanzata**. Se apri la pagina base del firewall, clicca su **Impostazioni avanzate** per aprire la finestra giusta.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Devi creare nuove regole per il server ARK: Survival Ascended. Crea regole in entrata e uscita per questi protocolli e porte:
- TCP in entrata e uscita: 27020
- UDP in entrata e uscita: 27015
- UDP in entrata e uscita: 7777-7778

Se ti serve aiuto, dai un’occhiata alla nostra guida [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Dopo aver aggiunto queste regole, il server sarà raggiungibile pubblicamente tramite l’IP del tuo server. Per connetterti, apri la console in-game di ARK: Survival Ascended e digita `open [tuo_indirizzo_ip]:7777`.

Ti consigliamo di configurare prima il server con la sezione qui sotto prima di collegarti.

## Configurazione

A questo punto hai completato l’installazione del server dedicato ARK: Survival Ascended. Puoi personalizzare ulteriormente il server modificando due file di configurazione nella cartella del server.

Vai nelle cartelle:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Qui troverai i file **DefaultGameUserSettings.ini** e **GameUserSettings.ini**. In questi file puoi modificare tantissime opzioni e variabili per il tuo server.


:::warning[CROSSPLAY SUPPORT]
Dal 18 novembre 2023, i proprietari dei server devono installare manualmente la lista di revoca certificati che si può scaricare da https://dev.epicgames.com/ (o direttamente da http://crl.r2m02.amazontrust.com/r2m02.crl). Il file r2m02.crl scaricato deve essere installato (clic destro sul file) selezionando "Posiziona tutti i certificati nel seguente archivio" e scegliendo "Autorità di certificazione radice attendibili". Potrebbe essere necessario riavviare il sistema.

Se prima del 18 novembre 2023 i proprietari avevano installato il certificato r2m02.cer e il server non appare, quel certificato deve essere rimosso per far tornare visibili i server. Per rimuoverlo, esegui (Windows + R) certmgr.msc e cerca "Amazon RSA 2048 M02" in "Autorità di certificazione radice attendibili". Fai lo stesso con certlm.msc. Infine, potrebbe essere necessario un riavvio del sistema.
:::





## Avvio & Connessione al server

Ora è il momento di avviare il server. Per farlo partire correttamente, devi prima installare il [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sul tuo VPS Windows.

:::info
Devi installare il [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sul tuo VPS Windows prima di avviare il server, se non l’hai già fatto, perché è una dipendenza fondamentale. Il server potrebbe non partire senza questo.
:::

Dopo averlo installato, puoi avviare il server eseguendo il file **start-ark.bat** che hai creato prima.

Si aprirà la console del server in un prompt dei comandi e partirà il processo di avvio. Se tutto va come previsto, il server sarà visibile nella lista server. In alternativa, puoi connetterti direttamente aprendo la console in-game e digitando `open [tuo_indirizzo_ip]:7777`.

Hai installato con successo ARK: Survival Ascended sul tuo server dedicato Windows.