---
id: dedicated-linux-plex
title: "Server Dedicato: Configura Plex su Linux"
description: "Scopri come gestire e fare lo streaming della tua libreria multimediale personale con Plex per un accesso facile da tutti i dispositivi → Scopri di più ora"
sidebar_label: Installa Plex
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plex è una piattaforma per gestire e fare lo streaming di contenuti multimediali come film, serie TV, musica e foto da un unico punto centrale. Con Plex Media Server, puoi organizzare le librerie, arricchirle automaticamente con i metadata e fare lo streaming su vari dispositivi sia in rete locale che via internet. Plex è quindi una soluzione super flessibile per accedere facilmente e comodamente alla tua collezione personale di media.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere per farlo al meglio.





## Prerequisiti

Prima di installare **Plex**, assicurati che il tuo ambiente di hosting rispetti i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 vCPU Core | 8 vCPU Core                |
| RAM        | 4 GB         | 8 GB                       |
| Spazio disco | 25 GB       | 25 GB                      |

Il software richiede che tutte le dipendenze necessarie siano installate e che giri su un sistema operativo supportato. Assicurati che il tuo server rispetti questi requisiti prima di procedere con l’installazione:

**Dipendenze:** Nessuna

**Sistema Operativo:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Verifica che tutte le dipendenze siano installate e che la versione del sistema operativo sia corretta per evitare problemi di compatibilità durante l’installazione di Plex.



## Installazione

Il sito ufficiale di Plex Media offre la versione Linux aggiornata del Plex Media Server per il download. Usa la variante a 64 bit per garantire compatibilità con tutte le distro Linux moderne. Esegui questo comando per scaricare il file `.deb`

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Dopo il download, puoi eseguire l’installer per configurare Plex Media Server. Una volta installato, la configurazione si fa tramite l’interfaccia web nel browser, dove potrai creare le librerie e gestire la tua collezione multimediale. Esegui questo comando per avviare l’installazione:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Per configurare Plex Media Server, sullo stesso server dove hai installato il software, apri il browser e vai su `http://127.0.0.1:32400/web`. A questo punto ti verrà chiesto di fare il login con un account Plex esistente o di crearne uno nuovo se non ne hai già uno.

Questo passaggio è fondamentale per collegare il server al tuo account personale, abilitando funzionalità come l’accesso remoto, la gestione utenti e la sincronizzazione tra dispositivi. Dopo il login, entrerai nella tua istanza Plex personale. Da qui potrai creare librerie per film, serie TV, musica o foto, scaricare automaticamente i metadata e condividere i contenuti con altri utenti in rete locale o via internet.

Dopo la configurazione, potrai anche accedere al tuo Plex Media Server dall’esterno aprendo l’interfaccia web nel browser tramite `http://<ip-address>:32400`. Sostituisci `<ip-address>` con l’indirizzo pubblico del tuo server.

La porta 32400 è quella di default per l’accesso web a Plex e potrebbe essere necessario aprirla nel firewall o nel router se vuoi connetterti da internet.

Una volta raggiunto l’indirizzo, verrai reindirizzato alla pagina di login Plex e potrai gestire librerie e impostazioni. Per un accesso esterno sicuro, ti consigliamo di abilitare l’Accesso Remoto nelle impostazioni Plex, così da avere una connessione criptata e il traffico instradato tramite il servizio Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusione e Risorse Extra

Congratulazioni! Hai appena installato e configurato Plex sul tuo Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono darti una mano extra durante la configurazione del server:

- [Plex.com](https://Plex.com/) - Sito Ufficiale
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centro Assistenza Plex (Documentazione)

Hai domande specifiche che non abbiamo coperto qui? Per qualsiasi dubbio o supporto, non esitare a contattare il nostro team di assistenza, sempre disponibile per darti una mano! 🙂