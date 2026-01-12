---
id: vserver-linux-hytale
title: "VPS: Configurazione Server Dedicato Hytale"
description: "Scopri come configurare il server dedicato Hytale sul tuo VPS Linux per una gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare Hytale su di esso? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux.

<InlineVoucher />

## Preparazione

Per far girare un server Hytale, il tuo sistema deve soddisfare alcuni requisiti base. Il server funziona con Java 25 e richiede almeno 4 GB di RAM. Sono supportate sia architetture x64 che arm64. L’uso effettivo delle risorse dipende dal numero di giocatori, dalla distanza di visuale e dall’attività nel mondo, quindi potrebbero servire risorse extra per server più grandi.

Prima di continuare, assicurati che Java 25 sia installato sul tuo sistema. Puoi verificarlo con:

```
java --version
```

Se Java non è ancora installato, segui la nostra guida dedicata [Installare Java](vserver-linux-java) per server Linux. Questa guida spiega come installare e configurare Java correttamente nel tuo ambiente.



## Installazione

Inizia creando una cartella dedicata per il server Hytale. Così tutti i file del server restano organizzati in un unico posto.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

Il server richiede due componenti principali: l’applicazione server e gli asset di gioco. Questi file si ottengono usando il downloader da linea di comando di Hytale, pensato per deploy server e aggiornamenti più semplici.

Il downloader CLI offre un modo strutturato per scaricare e aggiornare i file del server Hytale. Dopo aver scaricato l’archivio del downloader, estrailo in una cartella temporanea. Dentro troverai un file QUICKSTART.md che spiega come usare lo strumento.

Avvia il downloader da terminale e segui le istruzioni per scaricare l’ultima versione del server. Quando finisce, copia i file del server scaricati e l’archivio degli asset nella tua cartella server. A questo punto, la cartella dovrebbe contenere il file JAR del server e un archivio asset come Assets.zip.

| **Comando**                                   | **Descrizione**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Scarica l’ultima release              |
| `./hytale-downloader -print-version`          | Mostra la versione del gioco senza scaricare |
| `./hytale-downloader -version`                | Mostra la versione del downloader Hytale |
| `./hytale-downloader -check-update`           | Controlla aggiornamenti del downloader |
| `./hytale-downloader -download-path game.zip` | Scarica in un file specifico          |
| `./hytale-downloader -patchline pre-release`  | Scarica dal canale pre-release        |
| `./hytale-downloader -skip-update-check`      | Salta il controllo automatico aggiornamenti |



## Configurazione

### Avvio del server

Il server si avvia lanciando il file JAR e specificando il percorso dell’archivio asset. Modifica il percorso se i tuoi asset sono in un’altra posizione.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### Autenticazione

Al primo avvio, il server deve essere autenticato prima che i giocatori possano connettersi. Questo avviene direttamente dalla console del server tramite un login device-based. Segui le istruzioni mostrate in console per completare l’autenticazione.

```
/auth login device
```

L’output sarà simile a questo:

```
> /auth login device
===================================================================
AUTORIZZAZIONE DISPOSITIVO
===================================================================
Visita: https://accounts.hytale.com/device
Inserisci codice: ABCD-1234
Oppure visita: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
In attesa di autorizzazione (scade in 900 secondi)...

[Utente completa autorizzazione nel browser]

> Autenticazione riuscita! Modalità: OAUTH_DEVICE
```

Una volta autenticato, il tuo server può accettare connessioni dei giocatori.



### Configurazione firewall

Di default, il server ascolta sulla porta UDP 5520 e si lega a tutte le interfacce disponibili. Puoi cambiare indirizzo e porta se vuoi. Il server comunica via UDP usando QUIC. Assicurati che il firewall permetta traffico UDP in ingresso sulla porta scelta, usando Iptables o UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Note sulle prestazioni

La distanza di visuale è uno dei fattori più importanti che influenzano il consumo di memoria. Valori più alti aumentano l’uso di RAM perché più dati del mondo devono restare attivi contemporaneamente.

Per la maggior parte delle configurazioni, una distanza di visuale massima di 12 chunk (384 blocchi) offre un buon equilibrio tra prestazioni server e esperienza di gioco.

Per confronto, i server Minecraft usano una distanza di visuale di default di 10 chunk (160 blocchi). Il default di Hytale di 384 blocchi è circa equivalente a 24 chunk Minecraft, il che spiega i requisiti di memoria più alti. Questo valore va regolato in base al numero previsto di giocatori e alle risorse di sistema disponibili.



## Conclusione

Congratulazioni, ora hai un server Hytale funzionante sul tuo sistema. Da qui puoi espandere la configurazione installando mod, modificando le impostazioni del mondo e ottimizzando i parametri di performance per la tua community. Ti consigliamo di monitorare regolarmente l’uso delle risorse per garantire stabilità man mano che il server cresce.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />