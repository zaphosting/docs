---
id: vserver-windows-valheim
title: "VPS: Configurazione Server Dedicato Valheim su Windows"
description: "Scopri come configurare rapidamente ed efficacemente un server dedicato Valheim sul tuo VPS o server dedicato → Scopri di più ora"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS o un server dedicato e vuoi installarci dei game server? Per esempio un server dedicato Valheim? Sei nel posto giusto! Qui ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Configurazione Server Dedicato Valheim su Windows VPS" description="Ti piace capire meglio vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>
<InlineVoucher />

## Preparazione
Per configurare un server Valheim ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare facilmente e velocemente le applicazioni server dedicate dei giochi Steam più popolari. Puoi trovare SteamCMD sul sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD.

Dopo scarichi il file, che sarà uno **steamcmd.zip**, da estrarre. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Quando vedi il messaggio **Loading Steam API.... OK** significa che tutto è andato a buon fine e puoi partire con l’installazione del server Valheim.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous** con questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 896660`. L’App ID **896660** è quella del **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Non interrompere il processo prima che sia finito per evitare errori. Può richiedere un po’ di tempo, ma ne vale la pena! :)
:::


Vai nella cartella dove hai installato e apri la sottocartella:  **../steamapps/common/Valheim dedicated Server/**

Qui devi creare il file di avvio, che serve per far partire il server. Crea un file chiamato: start_headless.bat

:::info
Assicurati di avere attivato l’opzione per mostrare le estensioni dei file, così usi l’estensione giusta.
:::

Apri il file, incolla questo contenuto e salva:

```
@echo off
set SteamAppId-892970

echo "Avvio server PREMI CTRL-C per uscire"

REM Consiglio: fai una copia locale di questo script per evitare che venga sovrascritto da Steam.
REM ATTENZIONE: la password deve essere lunga almeno 5 caratteri e non può essere uguale al nome del server.
REM ATTENZIONE: assicurati che le porte 2456-2458 siano inoltrate al tuo server tramite router e firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Per rendere il server visibile e accessibile dall’esterno, devi aprire/inoltrare le porte usate dal server nel firewall. Apri le impostazioni di Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Devi aggiungere regole in entrata e uscita per le porte 2456-2458 sia TCP che UDP, come mostrato qui sotto.




## Configurazione

La configurazione base è fatta. Puoi modificare altre impostazioni nel file **start_headless_server.bat**. Qui puoi cambiare nome server, password, password admin e tante altre opzioni. Trovi il file in:

```
../steamapps/common/Valheim dedicated Server/
```



## Gioca

Alla fine della configurazione puoi avviare il server eseguendo il file **start_headless_server.bat** che hai creato. Si aprirà la console del server e partirà l’avvio. Se tutto va bene, il server comparirà nella lista server dopo l’avvio.


## Conclusione

Complimenti, hai installato e configurato con successo Valheim sul tuo VPS! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />