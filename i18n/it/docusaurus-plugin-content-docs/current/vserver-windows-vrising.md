---
id: vserver-windows-vrising
title: "VPS: Setup Server Dedicato V-Rising su Windows"
description: "Scopri come configurare un server dedicato V Rising su Windows per prestazioni di gioco ottimali e hosting senza intoppi → Scopri di più ora"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Come configurare un server dedicato V RISING su Windows!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Informazioni di base: 
Serve un server basato su Windows Server 2016/2019 con almeno 4x CPU da 2.4 GHz (AMD/Intel) e almeno 4GB di RAM (DDR3/4) e 6GB di spazio libero su disco (SSD o meglio, preferito). Il server deve girare su architettura a 64 bit.

## Passo 1 Crea una cartella per V-Rising

Per prima cosa, devi connetterti al tuo server usando [Accesso Iniziale (RDP)](vserver-windows-userdp.md). Una volta connesso, crea una nuova cartella sul server dove installerai i file di V-Rising.  
In questo esempio, creeremo una nuova cartella sul Desktop.  
Fai clic destro con il mouse, poi scegli "Nuovo -> Cartella".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Puoi chiamarla come vuoi. Nel nostro esempio la chiamiamo "VRising".

## Passo 2 Scarica SteamCMD sul tuo server Windows

Apri il browser e vai al [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Questo scaricherà SteamCMD per Windows sul tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Il file verrà scaricato e dovrebbe trovarsi nella cartella download (la cartella può variare).

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Per comodità, copiamo il file steamcmd.zip nella cartella VRising che abbiamo creato sul desktop.  
Per farlo, clicca sul file e premi "CTRL+C".  
Poi apri la cartella VRising sul desktop e premi "CTRL+V".  
Ora vedrai il file dentro la cartella VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Fai clic destro sul file steamcmd.zip e scegli "Estrai tutto". Conferma cliccando su Estrai.

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Quando finito, fai doppio clic sul file steamcmd.exe.  
Si aprirà una nuova finestra che installerà i file di steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Passo 3 Scarica i file di V Rising

Una volta installati i file di steamcmd, vedrai questa schermata nella finestra aperta.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Ora devi indicare dove scaricare i file.  
Usa il comando "force_install_dir".  
Nel nostro esempio è così:  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Poi devi fare il login come utente anonimo.  
Digita: "login anonymous"

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Ora puoi finalmente scaricare i file con questo comando:  
app_update 1829350 validate

Il download partirà e potrebbe richiedere qualche minuto.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Quando finito, troverai tutti i file nella cartella VRising sul server.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Passo 4 Avvia e configura il server V Rising

Puoi modificare il file start_server_example.bat per fare qualche personalizzazione.  
Fai clic destro sul file e scegli modifica.  
Puoi cambiare il nome del server e il percorso dove salvare i dati.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Altre modifiche si possono fare nei file di configurazione, che si trovano nella cartella VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

Nel file ServerHostSettings.json puoi cambiare impostazioni generali come le porte, la descrizione del server, l’intervallo di salvataggio e la password del server.  
Io ho cambiato il nome del server in "ZAP-Hosting Test Server".

Per avviare il server fai doppio clic sul file start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

L’avvio richiederà un po’ di tempo.  
Se le porte sono state aperte correttamente, il server apparirà nella lista server.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Passo 5 Sblocca le porte nel firewall

Il server deve essere accessibile pubblicamente per giocare con gli amici.  
Per questo, devi aprire le porte nel firewall di Windows.  
Le porte 9876 e 9877 devono essere aperte sia per TCP che UDP.  
9876 è la porta del gioco, 9877 è la porta Query.  
Come aprire le porte su Windows, vedi [Port Forwarding (Firewall)](vserver-windows-port.md).

Dopo aver aperto le porte, il server sarà accessibile pubblicamente se è stato avviato.

## Conclusione

Congratulazioni, hai installato e configurato con successo V-Rising sul tuo VPS!  
Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />