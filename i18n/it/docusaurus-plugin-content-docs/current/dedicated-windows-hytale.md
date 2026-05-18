---
id: dedicated-windows-hytale
title: "Dedicated Server: Configurazione Server Dedicato Hytale"
description: "Scopri come configurare il server dedicato Hytale sul tuo Dedicated Server Windows per una gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Dedicated Server e vuoi ospitare il tuo server Hytale? In questa guida ti spieghiamo passo passo come installare e far girare il server dedicato Hytale su un sistema Windows.

## Preparazione

Per far girare un server Hytale, il tuo sistema deve soddisfare alcuni requisiti base. Il server gira su Java 25 e richiede almeno 4 GB di RAM. Sono supportate sia architetture x64 che arm64. L’uso effettivo delle risorse dipende dal numero di giocatori, distanza di visuale e attività nel mondo, quindi per server più grandi potrebbero servire risorse extra.

Prima di continuare, assicurati che Java 25 sia installato sul tuo sistema Windows. Puoi verificarlo aprendo il prompt dei comandi e digitando:

```
java --version
```

Se Java non è ancora installato, segui la nostra guida dedicata all’Installazione di Java per server Windows. Questa guida ti spiega come installare e configurare Java correttamente nel tuo ambiente.



## Installazione

Inizia creando una cartella dedicata per il server Hytale. Così tieni tutti i file del server organizzati in un unico posto. Per esempio:

```
C:\Hytale
```

Il server richiede due componenti principali: l’applicazione server e gli asset di gioco. Questi file si ottengono usando il downloader da linea di comando di Hytale, pensato per deploy server e aggiornamenti più semplici.

Il downloader CLI offre un modo strutturato per scaricare e aggiornare i file del server Hytale. Dopo aver scaricato l’archivio del downloader, estrailo in una cartella temporanea. Dentro l’archivio trovi un file QUICKSTART.md che spiega come usare lo strumento.

Avvia il downloader da linea di comando e segui le istruzioni per scaricare l’ultima versione del server. Quando finisce, copia i file del server scaricati e l’archivio degli asset nella tua cartella server. Dopo questo passaggio, la cartella dovrebbe contenere il file JAR del server e un archivio asset come Assets.zip.

| **Comando**                                   | **Descrizione**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Scarica l’ultima release              |
| `./hytale-downloader -print-version`          | Mostra la versione del gioco senza scaricare |
| `./hytale-downloader -version`                | Mostra la versione del downloader Hytale |
| `./hytale-downloader -check-update`           | Controlla aggiornamenti per il downloader |
| `./hytale-downloader -download-path game.zip` | Scarica in un file specifico          |
| `./hytale-downloader -patchline pre-release`  | Scarica dalla release pre-release     |
| `./hytale-downloader -skip-update-check`      | Salta il controllo automatico aggiornamenti |



## Configurazione

### Avvio del server

Il server si avvia lanciando il file JAR e specificando il percorso dell’archivio asset. Modifica il percorso se i tuoi asset sono in un’altra posizione. Apri il prompt dei comandi nella cartella del server e digita:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
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

Una volta autenticato, il tuo server può accettare connessioni dai giocatori.



### Configurazione firewall

Di default, il server ascolta sulla porta UDP 5520 e si lega a tutte le interfacce disponibili. Puoi cambiare indirizzo e porta se vuoi. Il server comunica via UDP usando QUIC. Assicurati che il firewall permetta traffico UDP in ingresso sulla porta scelta, usando Iptables o UFW. Per applicare facilmente questa regola firewall su Windows, esegui questo comando in PowerShell:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Note sulle prestazioni

La distanza di visuale è uno dei fattori più importanti che influenzano il consumo di memoria. Valori più alti aumentano l’uso di RAM perché più dati del mondo devono restare attivi contemporaneamente.

Per la maggior parte delle configurazioni, una distanza massima di 12 chunk (384 blocchi) offre un buon equilibrio tra prestazioni server e esperienza di gioco.

Per confronto, i server Minecraft usano una distanza di visuale di default di 10 chunk (160 blocchi). Il default di Hytale di 384 blocchi corrisponde a circa 24 chunk Minecraft, il che spiega i requisiti di memoria più alti. Questo valore va regolato in base al numero previsto di giocatori e alle risorse disponibili.



## Conclusione

Congratulazioni, ora hai un server Hytale funzionante sul tuo sistema. Da qui puoi espandere la configurazione installando mod, modificando le impostazioni del mondo e ottimizzando i parametri di performance per la tua community. Ti consigliamo di monitorare regolarmente l’uso delle risorse per garantire stabilità man mano che il server cresce.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂