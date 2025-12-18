---
id: dedicated-windows-bitwarden
title: "Server Dedicato: Configura Bitwarden su Windows"
description: "Scopri come gestire le password in modo sicuro con Bitwarden usando la crittografia end-to-end e opzioni di self-hosting → Scopri di più ora"
sidebar_label: Installa Bitwarden
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Bitwarden è un password manager open source per password e passkey che utilizza zero knowledge e crittografia end-to-end per proteggere i dati. Puoi usarlo come servizio cloud o self-hostarlo, con funzionalità per generare, memorizzare e compilare automaticamente credenziali robuste.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come configurarlo e impostarlo, con tutto quello che devi sapere per farlo al meglio.



## Prerequisiti

Prima di installare **Bitwarden**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo     | Consiglio ZAP-Hosting      |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 Core CPU | 4 Core CPU                 |
| RAM        | 2 GB       | 4 GB                       |
| Spazio disco | 12 GB    | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Docker (Engine 26+ e Compose)`

**Sistema Operativo:** Ultima versione di Windows Server che supporta Docker 26+

Verifica che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Bitwarden.



## Preparazione

Prima di configurare **Bitwarden**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi assicurano un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema giri con le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima gli aggiornamenti di sistema. Così avrai le versioni più recenti e sicure prima di andare avanti.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze. Bitwarden verrà eseguito sulla tua macchina tramite una serie di container Docker, quindi devi prima installare Docker. Per farlo, installa [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) sul tuo server.

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-linux-docker.md).



### Crea utente & cartella

Ti consigliamo di configurare il tuo server Windows con un account di servizio dedicato `bitwarden`, da cui installare e far girare Bitwarden. Così la tua istanza Bitwarden sarà isolata dalle altre app sul server.

Apri PowerShell come amministratore. Crea l’utente locale Bitwarden con questi comandi. Dopo il primo comando, comparirà una finestra per inserire la password, confermala e poi esegui il secondo comando per completare.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Poi crea una cartella Bitwarden sotto `C:\` per il nuovo utente:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop vai su **Settings → Resources → File Sharing**. Aggiungi la cartella `C:\Bitwarden` ai percorsi condivisi. Seleziona Applica & Riavvia per confermare.



### Configura il tuo dominio

Di default, Bitwarden gira sul server sulle porte 80 (HTTP) e 443 (HTTPS). Configura un dominio con record DNS che puntano al server, tipo server.example.com, soprattutto se lo esponi su internet. Evita di includere “Bitwarden” nel nome host per non svelare troppo sul ruolo o software del server.




## Installazione
Ora che hai tutto pronto e i prerequisiti soddisfatti, puoi procedere con l’installazione di Bitwarden.

Scarica lo script di installazione sul server ed esegui lo script:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

Durante l’installazione inserisci il nome dominio della tua istanza Bitwarden, di solito il record DNS configurato. Poi scegli se Let’s Encrypt deve generare un certificato SSL gratuito e affidabile. Se sì, fornisci un’email per le notifiche di scadenza. Se no, ti verranno chieste info sul certificato.

Inserisci il tuo Installation ID e Installation Key, entrambi ottenuti su [Bitwarden](https://bitwarden.com/host). Poi scegli la regione US o EU, importante solo se colleghi un’istanza self-hosted a un abbonamento a pagamento.

Se non usi Let’s Encrypt puoi usare un certificato esistente mettendo i file in `C:\Bitwarden\bwdata\ssl\<tuo_dominio>` e specificando se è trusted. In alternativa puoi generare un certificato self-signed, consigliato solo per test. Se scegli di non usare certificati devi mettere un proxy HTTPS davanti all’installazione, altrimenti Bitwarden non funzionerà.



## Configurazione

Dopo l’installazione, completa la configurazione base modificando due file. Prima modifica il file ambiente in `\bwdata\env\global.override.env`. Imposta i dati del server SMTP, tipo host, porta, SSL, username e password, così Bitwarden può inviare email di verifica e inviti alle organizzazioni. Se ti serve accesso al System Administrator Portal, aggiungi un’email admin in `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Verifica la configurazione SMTP. Se è corretta vedrai un messaggio di successo, altrimenti messaggi su OpenSSL mancante o valori errati. Applica le modifiche con `.\bitwarden.ps1 -start`.

Se tutto è ok, vedrai successo; altrimenti messaggi di errore. Applica le modifiche con `.\bitwarden.ps1 -restart`.

Poi controlla i parametri di installazione in `.\bwdata\config.yml`. Questo file gestisce gli asset generati e va modificato per ambienti speciali, tipo se usi un proxy o porte alternative. Applica modifiche con `.\bitwarden.ps1 -rebuild`.

Infine avvia l’istanza con `.\bitwarden.ps1 -start`. La prima esecuzione può richiedere tempo mentre Docker scarica le immagini. Usa `docker ps` per controllare che tutti i container siano sani. Poi apri il web vault sul dominio configurato e registrati se serve. La verifica email funziona solo con SMTP configurato correttamente.

## Conclusione e risorse utili

Complimenti! Hai installato e configurato Bitwarden con successo sul tuo Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti durante la configurazione del server:

- [bitwarden.com](https://bitwarden.com/) - Sito ufficiale
- https://bitwarden.com/help/ - Centro assistenza Bitwarden (Documentazione)

Hai domande specifiche non coperte qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team di assistenza, disponibile ogni giorno per darti una mano! 🙂