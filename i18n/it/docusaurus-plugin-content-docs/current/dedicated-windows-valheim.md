---
id: dedicated-windows-valheim
title: "Server Dedicato: Configurazione Valheim Dedicated Server su Windows"
description: "Scopri come configurare un server dedicato Valheim sul tuo server per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un server dedicato e vuoi installarci dei game server? Per esempio un Valheim Dedicated Server? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Configurazione Valheim Dedicated Server su Windows VPS" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione
Per configurare un server Valheim ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni dedicate ai server dei giochi più popolari su Steam. Puoi trovare SteamCMD sul sito ufficiale degli sviluppatori Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo scaricato, otterrai il file **steamcmd.zip**, che va prima estratto. Ti consigliamo di creare una cartella dedicata dove decomprimerlo. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server Valheim.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 896660`. L’App ID **896660** corrisponde all’applicazione **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Può volerci un attimo, ma ne vale la pena! :)
:::


Vai nella cartella dove hai fatto l’installazione e poi nella sottocartella:  **../steamapps/common/Valheim dedicated Server**/

Qui devi creare il file di avvio, necessario per far partire il server. Crea un file chiamato: start_headless.bat

:::info
Assicurati di avere attivato l’opzione per mostrare le estensioni dei file, così usi quella giusta.
:::

Apri il file, incolla questo contenuto e salva:

```
@echo off
set SteamAppId-892970

echo "Avvio server PREMI CTRL-C per uscire"

REM Consiglio: fai una copia locale di questo script per evitare che venga sovrascritto da Steam.
REM ATTENZIONE: la password deve essere lunga almeno 5 caratteri & non può essere uguale al nome del server.
REM ATTENZIONE: assicurati che le porte 2456-2458 siano inoltrate al tuo server tramite router e firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Devi aggiungere regole sia per il traffico in entrata che in uscita, come mostrato qui sotto, per le porte: 2456-2458 sia TCP che UDP.




## Configurazione

La configurazione base è fatta. Puoi personalizzare altre impostazioni nel file **start_headless_server.bat**. Qui puoi cambiare nome server, password, password admin e tante altre opzioni. Trovi il file in:

```
../steamapps/common/Valheim dedicated Server/
```



## Gioca

Alla fine della configurazione puoi avviare il server eseguendo il file **start_headless_server.bat** che hai creato. Si aprirà la console del server e partirà il processo di avvio. Se tutto va bene, il server comparirà nella lista server dopo l’avvio riuscito.