---
id: vserver-linux-ts6
title: "Configura il Server TeamSpeak 6 su un Server Linux - Lancia la Tua Piattaforma Vocale"
description: "Scopri come installare e ottimizzare il Server TeamSpeak 6 per un hosting affidabile e prestazioni top → Scopri di più ora"
sidebar_label: Installa Server Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nell’estate 2025, TeamSpeak ha rilasciato la **Beta** del **Server TeamSpeak 6**. Ora puoi provare in anteprima la nuova generazione di TeamSpeak!

Vuoi ospitare questo servizio in autonomia? Ti guidiamo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisiti

Prima di installare il **Server Teamspeak 6**, assicurati che il tuo ambiente di hosting rispetti i seguenti requisiti per un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consigliato da ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core               |
| RAM        | 1 GB         | 4 GB                       |
| Spazio disco | 1 GB         | 25 GB                      |



## Preparazione

Prima di configurare il **Server TeamSpeak 6**, devi preparare il sistema. Aggiorna il sistema operativo all’ultima versione e installa tutte le dipendenze necessarie. Così garantisci un ambiente stabile e eviti problemi durante o dopo l’installazione.


### Aggiorna il sistema
Per assicurarti che il sistema abbia software e patch di sicurezza aggiornati, esegui sempre prima un aggiornamento. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il sistema sarà aggiornato con le ultime patch di sicurezza e versioni software prima di procedere.

### Installa le dipendenze
Terminato l’aggiornamento, puoi installare le dipendenze. Per un’installazione rapida, semplice e consigliata, usa Docker. Per farlo, installa il Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installazione
Ora che hai tutto pronto e i requisiti rispettati, puoi procedere con l’installazione del Server Teamspeak 6.

Il passo successivo è creare il file Docker Compose `docker-compose.yml` per il Server TeamSpeak 6. Puoi scegliere qualsiasi directory, ma in questo esempio lo creiamo in `/opt/containers/ts6/`. Useremo il file Compose ufficiale di TeamSpeak:

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


Per avviare il container Docker e il Server TeamSpeak 6, usa questo comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Ora il container del Server TeamSpeak 6 partirà. Di default non gira ancora in background. Al primo avvio vedrai **info importanti** sull’**account admin Server Query** e sulla **chiave di privilegio**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Salva queste info in un posto sicuro, perché non verranno più mostrate ai prossimi avvii. Poi ferma il container con `CTRL+C`.



## Configurazione

Puoi personalizzare altre impostazioni del Server TeamSpeak 6 usando **variabili d’ambiente** nel file Docker Compose. Così configuri il server come vuoi tu. La lista completa delle opzioni è nella documentazione ufficiale [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Esempio nel `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Gestione del server

Per far girare il Server TeamSpeak 6 in background, avvia il container con:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Per fermare il Server TeamSpeak 6, ferma il container con:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Connessione

Quando il Server TeamSpeak 6 è attivo, connettiti con il client TeamSpeak 6. Usa l’IP del tuo server e la porta corretta. Inserisci questi dati nel client per collegarti e iniziare a testare.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusione e risorse utili

Complimenti! Hai installato e configurato con successo il Server Teamspeak 6 sul tuo VPS/Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti durante la configurazione:

- [Sito Ufficiale](https://teamspeak.com/en/) - Info e download TeamSpeak 6
- [Forum Community](https://community.teamspeak.com/) - Supporto utenti e discussioni
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Segnala bug e controlla problemi aperti

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, contatta pure il nostro team assistenza, sempre pronto ad aiutarti ogni giorno! 🙂