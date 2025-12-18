---
id: vserver-windows-satisfactory
title: "VPS: Setup Server Dedicato Satisfactory su Windows"
description: "Scopri come installare rapidamente e facilmente un server dedicato Satisfactory sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un server dedicato di Satisfactory? Allora sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Setup Server Dedicato Satisfactory su Windows VPS" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione

Per configurare un server Satisfactory ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni dedicate ai server di tanti giochi Steam popolari. Puoi scaricare SteamCMD dal sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo il download otterrai il file **steamcmd.zip**, che dovrai estrarre. Ti consigliamo di creare una cartella dedicata dove decomprimerlo. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi procedere con l’installazione del server Satisfactory.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous** con questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria, che si fa con il comando `app_update 1690800`. L’App ID **1690800** corrisponde all’applicazione **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Non interrompere il processo prima che sia finito per evitare errori. Può volerci un attimo, ma ne vale la pena! :)
:::



Vai nella cartella dove hai fatto l’installazione e poi nella sottocartella: **../steamapps/common/SatisfactoryDedicatedServer**

Qui devi creare il file di avvio, necessario per far partire il server. Crea un file chiamato: server-start.bat

:::info
Assicurati di avere attivato l’opzione per mostrare le estensioni dei file, così usi l’estensione giusta.
:::

Apri il file, incolla questo contenuto e salva:

```
Factoryserver.exe -log -unattended
```



Esegui il file. Al primo avvio dovrebbe comparire una finestra popup che ti dice che servono alcuni componenti per far partire il programma. Il gioco richiede il Visual C++ Runtime. Clicca su Sì e completa l’installazione. 

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


Devi aggiungere regole sia per il traffico in entrata che in uscita, come mostrato qui sotto, per il protocollo UDP e la porta 15000.



## Configurazione

Il setup vero e proprio è fatto. Puoi fare altre modifiche nel file di configurazione **ServerSettings.ini**. Qui puoi cambiare il nome del server, la password e altre opzioni. Vai in questa cartella: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Gioca

Alla fine del setup puoi avviare il server eseguendo il file **server-start.bat** che hai creato prima. Si aprirà la console del server e partirà il processo di avvio. Se tutto va bene, il server sarà visibile nella lista server dopo l’avvio.



## Conclusione

Congratulazioni, hai installato e configurato con successo il server Satisfactory sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno! 

<InlineVoucher />