---
id: dedicated-windows-satisfactory
title: "Dedicated Server: Configurazione Dedicated Server Satisfactory su Windows"
description: "Scopri come configurare un Dedicated Server Satisfactory sul tuo server per un gameplay fluido e una gestione facile → Scopri di più ora"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un server dedicato e vuoi installarci dei game server? Per esempio un Dedicated Server di Satisfactory? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Configurazione Dedicated Server Satisfactory su Windows VPS" description="Ti viene più facile capire se vedi le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>



## Preparazione

Per configurare un server Satisfactory ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni dedicate server dei giochi Steam più popolari. Puoi scaricare SteamCMD dal sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo il download, otterrai il file **steamcmd.zip**, che va prima estratto. Ti consigliamo di creare una cartella dedicata dove decomprimerlo. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server Satisfactory.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 1690800`. L’App ID **1690800** corrisponde all’applicazione **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Non interrompere il processo prima che sia finito per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::



Vai nella cartella dove hai fatto l’installazione e poi nella sottocartella: **../steamapps/common/SatisfactoryDedicatedServer**

Qui devi creare il file di avvio, necessario per far partire il server. Crea un file chiamato: server-start.bat

:::info
Assicurati di avere attivata l’opzione “Mostra estensioni file” così da usare l’estensione corretta.
:::

Apri il file, incolla questo contenuto e salva:

```
Factoryserver.exe -log -unattended
```



Ora esegui il file. Al primo avvio dovrebbe comparire una finestra popup che ti dice che servono alcuni componenti per far partire il programma. Il gioco richiede il Visual C++ Runtime. Clicca su Sì e completa l’installazione. 

Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Devi aggiungere regole in entrata e uscita come descritto qui sotto, per il protocollo UDP e la porta 15000.



## Configurazione

La configurazione base è fatta. Puoi fare altre modifiche nel file di configurazione **ServerSettings.ini**. Qui puoi cambiare il nome del server, la password e altre opzioni. Vai nella cartella:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Gioca

Alla fine della configurazione puoi avviare il server eseguendo il file **server-start.bat** che hai creato prima. Si aprirà la console del server e partirà il processo di avvio. Se tutto va bene, il server sarà visibile nella lista server dopo l’avvio riuscito.