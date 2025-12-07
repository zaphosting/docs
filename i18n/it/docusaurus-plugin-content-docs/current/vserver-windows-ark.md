---
id: vserver-windows-ark
title: "VPS: ARK Survival Evolved Dedicated Server Setup su Windows"
description: "Scopri come configurare rapidamente e facilmente un ARK: Survival Evolved Dedicated Server sul tuo VPS Windows → Scopri di più ora"
sidebar_label: Configurazione Dedicated Server ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione
Hai un VPS Windows e vuoi installarci dei game server? Per esempio un ARK: Survival Evolved Dedicated Server? Sei nel posto giusto! Qui sotto ti spieghiamo passo passo come installare questo servizio sul tuo server.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="Configurazione Dedicated Server ARK: Survival Evolved su VPS Windows" description="Ti piace capire meglio vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

Connettiti al tuo VPS via RDP per configurare il tuo ARK: Survival Evolved Dedicated Server. Se non sai come connetterti via RDP, ti consigliamo di dare un’occhiata alla guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Preparazione

Per configurare un server ARK ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente le applicazioni dedicate server dei giochi Steam più popolari. Puoi trovare SteamCMD sul sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo scaricato, otterrai il file **steamcmd.zip**, che va prima estratto. Ti consigliamo di creare una cartella dedicata dove decomprimerlo. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server ARK.



## Installazione

Dopo l’installazione, dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria. Usa il comando `app_update 376030`. L’App ID **376030** corrisponde all’applicazione **ARK: Survival Evolved Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Non interrompere il processo prima che sia finito per evitare errori. Può volerci un attimo, ma ne vale la pena! :)
:::



Vai nella cartella dove hai fatto l’installazione e poi entra nella sottocartella: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Qui devi creare il file di avvio, necessario per far partire il server. Crea un file chiamato: start-ark.bat

:::info
Assicurati di avere attivato l’opzione Mostra estensioni file per usare l’estensione corretta.
:::

Apri il file, incolla questo contenuto e salva:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Aggiungi regole nuove nelle impostazioni. Clicca su regole in ingresso e in uscita come indicato e aggiungi queste per i protocolli e porte:

- TCP in ingresso e uscita: 27020
- UDP in ingresso e uscita: 27015
- UDP in ingresso e uscita: 7777-7778



## Configurazione

La configurazione base è fatta. Puoi fare altre modifiche nei file di config **DefaultGameUserSettings.ini** e **Gameusersettings.ini**. Qui puoi cambiare nome server, password di accesso, password admin e tante altre opzioni. Li trovi in queste cartelle:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Gioca

Alla fine della configurazione puoi avviare il server eseguendo il file **start-ark.bat** che hai creato. Si aprirà la console del server e partirà l’avvio. Se tutto va bene, il server sarà visibile nella lista server dopo l’avvio.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Conclusione

Congratulazioni, hai installato e configurato con successo il server ARK Survival sul tuo VPS! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno! 

<InlineVoucher />