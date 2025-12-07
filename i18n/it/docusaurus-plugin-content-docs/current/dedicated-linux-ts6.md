---
id: dedicated-linux-ts6
title: "Dedicated Server: Configura il server Teamspeak 6 sul tuo Dedicated Linux"
description: "Scopri come configurare e ottimizzare il TeamSpeak 6 Server per un hosting affidabile e prestazioni top → Scopri di più ora"
sidebar_label: Installa Teamspeak 6 Server
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nell’estate 2025, TeamSpeak ha rilasciato la **versione Beta** del **TeamSpeak 6 Server**. Ora puoi provare in anteprima la nuova generazione di TeamSpeak!

Vuoi ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere per farlo girare al meglio.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Requisiti

Prima di installare il **Teamspeak 6 Server**, assicurati che il tuo ambiente di hosting rispetti i seguenti requisiti per un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo     | Consiglio ZAP-Hosting      |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 core CPU | 4 core CPU                 |
| RAM        | 1 GB       | 4 GB                       |
| Spazio disco | 1 GB     | 25 GB                      |



## Preparazione

Prima di configurare il **TeamSpeak 6 Server**, devi preparare il sistema. Questo include aggiornare il sistema operativo all’ultima versione e installare tutte le dipendenze necessarie. Così garantisci un ambiente stabile e eviti problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia software e patch di sicurezza aggiornati, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema sarà pronto con le ultime versioni prima di procedere.

### Installa le dipendenze
Una volta aggiornato il sistema, puoi installare le dipendenze. Per un’installazione rapida, semplice e consigliata, ti suggeriamo di usare Docker. Per farlo, devi installare Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installazione
Ora che hai tutto pronto e i requisiti soddisfatti, puoi procedere con l’installazione del Teamspeak 6 Server.

Il passo successivo è creare il file Docker Compose `docker-compose.yml` per il TeamSpeak 6 Server. Puoi scegliere qualsiasi cartella, ma in questo esempio lo creeremo in `/opt/containers/ts6/`. Useremo il file Compose ufficiale di TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Porta Voce
      - "30033:30033/tcp" # Trasferimento File
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Vai nella cartella dove vuoi creare il file e crea il file con `nano docker-compose.yml`, poi incolla il contenuto.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Per avviare il container Docker e il TeamSpeak 6 Server, usa questo comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Ora il container Docker per il TeamSpeak 6 Server partirà. Di default non gira ancora in background. Al primo avvio vedrai **info importanti** sull’**account Server Query Admin** e sulla **chiave di privilegio**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Salva queste info in un posto sicuro, perché non verranno più mostrate ai prossimi avvii. Poi ferma il container con `CTRL+C`.



## Configurazione

Puoi personalizzare altre impostazioni del TeamSpeak 6 Server usando le **variabili d’ambiente** nel file Docker Compose. Così configuri il server come vuoi tu. La lista completa delle opzioni la trovi nella documentazione ufficiale [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Esempio da inserire in `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Gestione server

Per tenere il TeamSpeak 6 Server sempre attivo in background, avvia il container con:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Per fermare il TeamSpeak 6 Server, spegni il container con:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Connessione

Quando il TeamSpeak 6 Server è attivo, puoi connetterti usando il client TeamSpeak 6. Inserisci semplicemente l’IP del tuo server e la porta corretta. Così ti colleghi e puoi iniziare a testare.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusione e risorse utili

Complimenti! Hai installato e configurato con successo il Teamspeak 6 Server sul tuo Dedicated Server. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti durante la configurazione:

- [Sito Ufficiale](https://teamspeak.com/en/) - Info e download per TeamSpeak 6
- [Forum Community](https://community.teamspeak.com/) - Supporto utenti e discussioni
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Segnala bug e controlla problemi aperti

Hai domande specifiche che non trovi qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team di assistenza, sempre pronto ad aiutarti ogni giorno! 🙂