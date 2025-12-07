---
id: dedicated-windows-ark
title: "Server Dedicato: Setup ARK Survival Evolved Dedicated Server su Windows"
description: "Scopri come configurare un ARK: Survival Evolved Dedicated Server su un VPS Windows per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Setup ARK Survival Evolved Dedicated Server
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Hai un VPS Windows e vuoi installarci dei game server? Tipo un ARK: Survival Evolved Dedicated Server? Sei nel posto giusto! Qui ti spieghiamo passo passo come installare questo servizio sul tuo server. Connettiti al tuo VPS via RDP per configurare il tuo ARK: Survival Evolved Dedicated Server. Se non sai come connetterti via RDP, ti consigliamo di dare un’occhiata alla guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Setup ARK: Survival Evolved Dedicated Server su Windows VPS" description="Ti è più chiaro vedere le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare in modo super coinvolgente!"/>



## Preparazione

Per configurare un server ARK ti serve SteamCMD. SteamCMD è la **versione a riga di comando del client Steam**. Questo tool ti permette di scaricare velocemente e facilmente i server dedicati dei giochi Steam più popolari. Puoi scaricare SteamCMD dal sito ufficiale Valve per sviluppatori: https://developer.valvesoftware.com/wiki/SteamCMD. 

Dopo il download otterrai il file **steamcmd.zip**, che va prima estratto. Ti consigliamo di creare una cartella dedicata dove scompattare il file. Alla fine dovresti vedere il file **steamcmd.exe**. Avvialo e aspetta che l’installazione sia completata.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Quando vedi il messaggio **Loading Steam API.... OK**, significa che tutto è andato a buon fine e puoi partire con l’installazione del server ARK.



## Installazione

Dopo l’installazione dovresti poter eseguire comandi nella **Steam command line (steamcmd.exe)**. Qui devi fare il login. Usa l’utente **anonymous**. Esegui questo comando: `login anonymous`

Il passo successivo è l’installazione vera e propria, con il comando `app_update 376030`. L’App ID **376030** è quella del **ARK: Survival Evolved Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Non interrompere il processo prima che sia finito per evitare errori. Può volerci un po’, ma ne vale la pena! :)
:::



Vai nella cartella dove hai fatto l’installazione e poi nella sottocartella: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Qui devi creare il file di avvio, che serve per far partire il server. Crea un file chiamato: start-ark.bat

:::info
Assicurati di avere attivato l’opzione per mostrare le estensioni dei file, così usi l’estensione giusta.
:::

Apri il file, incolla questo contenuto e salva:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Per rendere il server visibile e accessibile dall’esterno, devi aprire/forwardare le porte usate dal server nel firewall. Apri le impostazioni del Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Devi aggiungere regole sia per il traffico in entrata che in uscita. Clicca su regole in entrata e in uscita e aggiungi queste porte e protocolli:

- TCP in entrata e uscita: 27020
- UDP in entrata e uscita: 27015
- UDP in entrata e uscita: 7777-7778



## Configurazione

La parte base è fatta. Puoi personalizzare il server modificando i file di configurazione **DefaultGameUserSettings.ini** e **Gameusersettings.ini**. Qui puoi cambiare nome server, password, password admin e tante altre opzioni. Li trovi in queste cartelle:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Gioca

Alla fine del setup puoi avviare il server eseguendo il file **start-ark.bat** che hai creato. Si aprirà la console del server e partirà l’avvio. Se tutto va bene, il server comparirà nella lista server dopo l’avvio.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)