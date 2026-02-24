---
id: vserver-linux-bitwarden
title: "Configura Bitwarden su un Server Linux - Proteggi la Gestione delle Tue Password"
description: "Scopri come ospitare in sicurezza Bitwarden per gestire le password con crittografia end-to-end e funzionalità avanzate per le credenziali → Scopri di più ora"
sidebar_label: Installa Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Bitwarden è un password manager open source per password e passkey che utilizza zero knowledge e crittografia end-to-end per proteggere i dati. Puoi usarlo come servizio cloud o auto-ospitarlo, con funzionalità per generare, salvare e compilare automaticamente credenziali robuste.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

<InlineVoucher />



## Prerequisiti

Prima di installare **Bitwarden**, assicurati che il tuo ambiente di hosting soddisfi i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core                |
| RAM        | 2 GB         | 4 GB                       |
| Spazio disco | 12 GB      | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** `Docker (Engine 26+ e Compose)`

**Sistema Operativo:** Ultima versione di Ubuntu/Debian che supporta Docker 26+

Verifica che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Bitwarden.



## Preparazione

Prima di configurare **Bitwarden**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze richieste. Questi passaggi assicurano un ambiente stabile e aiutano a prevenire problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia software e patch di sicurezza aggiornati, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema avrà le ultime patch di sicurezza e versioni software prima di procedere.

### Installa le dipendenze
Una volta completato l’aggiornamento, puoi procedere con l’installazione delle dipendenze. Bitwarden verrà eseguito tramite una serie di container Docker, quindi Docker deve essere installato prima. Usa questi comandi:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guida completa all’installazione e all’uso di Docker è disponibile nella nostra guida [Docker](dedicated-linux-docker.md).



### Crea utente & directory

Ti consigliamo di configurare il server Linux con un account di servizio dedicato `bitwarden` da cui installare ed eseguire Bitwarden. Così la tua istanza Bitwarden sarà isolata da altre app sul server.

Crea l’utente bitwarden e imposta una password forte e unica:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Crea il gruppo docker se non esiste e aggiungi l’utente bitwarden al gruppo docker:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Crea la directory di lavoro, imposta i permessi e assegna la proprietà a bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Configura il tuo dominio

Di default Bitwarden gira sul server sulle porte 80 (HTTP) e 443 (HTTPS). Configura un dominio con record DNS che puntano al server, ad esempio server.example.com, soprattutto se lo esponi su internet. Evita di includere “Bitwarden” nel nome host per ridurre la visibilità del ruolo o software del server.




## Installazione
Ora che hai tutto pronto, puoi procedere con l’installazione di Bitwarden.

Scarica lo script di installazione sul server ed eseguilo. Verrà creata una cartella `./bwdata` relativa alla posizione di `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

Durante l’installazione inserisci il nome dominio della tua istanza Bitwarden, di solito il record DNS configurato. Poi scegli se Let’s Encrypt deve generare un certificato SSL gratuito e affidabile. Se sì, fornisci una mail per le notifiche di scadenza. Se no, seguiranno domande sul certificato.

Inserisci il tuo Installation ID e Installation Key, ottenuti su [Bitwarden](https://bitwarden.com/host). Poi scegli la regione US o EU, utile solo se colleghi l’istanza self-hosted a un abbonamento a pagamento.

Se non usi Let’s Encrypt puoi usare un certificato esistente mettendo i file in `./bwdata/ssl/your.domain` e indicando se è trusted. In alternativa puoi generare un certificato self-signed, consigliato solo per test. Se scegli nessun certificato devi mettere un proxy HTTPS davanti all’installazione, altrimenti Bitwarden non funzionerà.



## Configurazione

Dopo l’installazione completa la configurazione base con due file. Prima modifica il file ambiente `./bwdata/env/global.override.env`. Imposta i dati SMTP, come host, porta, SSL, username e password, così Bitwarden può inviare mail di verifica e inviti organizzazione. Se vuoi accedere al System Administrator Portal, aggiungi un’email admin in `adminSettings__admins`.

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

Verifica la configurazione SMTP con `./bitwarden.sh checksmtp`. Se tutto è ok vedrai un messaggio di successo, altrimenti messaggi su OpenSSL mancante o valori errati. Applica le modifiche con `./bitwarden.sh restart`.

Poi controlla i parametri di installazione in `./bwdata/config.yml`. Questo file gestisce gli asset generati e va modificato per ambienti speciali, ad esempio dietro proxy o con porte alternative. Applica modifiche con `./bitwarden.sh rebuild`.

Infine avvia l’istanza con `./bitwarden.sh start`. La prima esecuzione può richiedere tempo mentre Docker scarica le immagini. Usa `docker ps` per verificare che tutti i container siano sani. Poi apri il web vault sul dominio configurato e registra un account se serve. La verifica email richiede SMTP configurato correttamente.

## Conclusione e Risorse Utili

Complimenti! Hai installato e configurato con successo Bitwarden sul tuo VPS/Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti ulteriormente nella configurazione del server:

- [bitwarden.com](https://bitwarden.com/) - Sito Ufficiale
- https://bitwarden.com/help/ - Centro Assistenza Bitwarden (Documentazione)

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂