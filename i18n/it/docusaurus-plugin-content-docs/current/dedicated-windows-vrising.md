---
id: dedicated-windows-vrising
title: "Server Dedicato: Configurazione Server Dedicato V-Rising su Windows"
description: "Scopri come configurare un server dedicato V Rising su Windows per prestazioni di gioco ottimali e gestione server → Scopri di più ora"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Come configurare un Server Dedicato V RISING su Windows!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Informazioni Base: 
Serve un server basato su Windows Server 2016/2019 con almeno CPU 4x 2.4 GHz (AMD/Intel) e almeno 4GB RAM (DDR3/4) e 6GB di spazio libero su disco (SSD o meglio, consigliato). Il server deve girare su architettura a 64 bit. 

## Passo 1 Crea una cartella per V-Rising

Per prima cosa, devi connetterti al tuo server usando [Accesso Iniziale (RDP)](vserver-windows-userdp.md). Una volta connesso, crea una nuova cartella sul server dove installerai i file di V-Rising.
In questo esempio, creeremo una nuova cartella sul Desktop.
Fai clic destro con il mouse.
Poi scegli "Nuovo -> Cartella".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Puoi chiamarla come vuoi. Nel nostro esempio la chiamiamo "VRising"

## Passo 2 Scarica SteamCMD sul tuo server Windows

Apri il browser e vai al [link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Questo scaricherà SteamCMD per Windows sul tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Il file verrà scaricato e dovrebbe trovarsi nella cartella download. (La cartella download può variare)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Per comodità, copiamo il file steamcmd.zip nella cartella VRising che abbiamo creato prima sul desktop.
Per farlo, clicca sul file e premi "CTRL+C".
Poi apri la cartella VRising sul desktop e premi "CTRL+V".
Ora vedrai il file nella cartella VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Fai clic destro sul file steamcmd.zip e scegli Estrai tutto. Conferma il messaggio cliccando su Estrai.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Quando finito, fai doppio clic sul file steamcmd.
Si aprirà una nuova finestra che installerà i file di steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Passo 3 Scarica i file di V Rising

Una volta installati i file di steamcmd, vedrai questa finestra.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Ora devi indicare dove scaricare i file.
Lo fai con il comando "force_install_dir".
Il comando completo nel nostro esempio è:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Poi devi fare il login come utente anonimo.
Digita "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Ora puoi finalmente scaricare i file.
Usa questo comando:
app_update 1829350 validate

I file verranno scaricati.
Ci vorranno alcuni minuti.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Quando finito, vedrai tutti i file nella cartella VRising sul server.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Passo 4 Avvia e configura il server V Rising

Puoi modificare il file start_server_example.bat per fare qualche personalizzazione.
Fai clic destro sul file e scegli modifica.
Puoi cambiare il nome del server e il percorso dove salvare i dati.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Altre modifiche si possono fare nei file di configurazione.
Si trovano nella cartella VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

Nel file ServerHostSettings.json puoi fare modifiche generali.
Tipo definire le porte, la descrizione del server, l’intervallo di salvataggio e la password del server.
Io ho cambiato il nome del server in "ZAP-Hosting Test Server".

Per avviare il server fai doppio clic sul file start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

L’avvio richiederà un po’ di tempo.
Se le porte sono state aperte correttamente, il server apparirà nella lista server.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Passo 5 Sblocca le porte nel firewall

Il server deve essere accessibile pubblicamente per giocare con gli amici. Per questo, le porte del server devono essere abilitate nel firewall di Windows. Le porte 9876 e 9877 devono essere aperte per i protocolli TCP E UDP. 9876 è la porta del game server, 9877 è la Query Port.
Come aprire le porte su Windows: [Port Forwarding (Firewall)](vserver-windows-port.md). 

Dopo aver aperto le porte, il server sarà accessibile pubblicamente, se avviato. 


