---
id: dedicated-linux-docker
title: "Dedicated Server: Installazione di Docker"
description: "Scopri come installare Docker sul tuo server Linux per eseguire applicazioni isolate in modo efficiente e ottimizzare l’uso delle risorse → Scopri di più ora"
sidebar_label: Installa Docker
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduzione

Docker è un software di virtualizzazione leggero e open source che permette di fornire servizi o applicazioni in isolamento su un singolo sistema. A differenza delle vere macchine virtuali, non viene emulato o ospitato un sistema operativo aggiuntivo, ma solo un ambiente applicativo all’interno del sistema host. Questo non solo fa risparmiare risorse in generale, ma comporta anche un overhead molto basso rispetto alla virtualizzazione completa. In questa guida vedremo come installare Docker sul tuo server.

## Preparazione

Per iniziare, devi connetterti al tuo server Linux via SSH. Dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](dedicated-linux-ssh.md) se ti serve una mano. In questa guida useremo Ubuntu come distribuzione Linux.

### Abilita la Compatibilità Docker

Devi abilitare la **Compatibilità Docker** nel pannello web del tuo server per permettere ai container Docker di funzionare, altrimenti riceverai errori `Permission Denied`.

Vai nella sezione **Impostazioni** del pannello web del tuo server, attiva l’opzione **Compatibilità Docker** e salva.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Dopo aver salvato, assicurati di riavviare il server prima di procedere.

## Installazione

Ora che sei connesso al tuo server Linux, puoi procedere con i metodi di installazione. Scegli una delle distribuzioni Linux qui sotto per vedere i passaggi specifici.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Per iniziare, devi aggiungere il pacchetto Docker usando `apt` e configurarlo. Questo ti permetterà di installare e aggiornare Docker facilmente dal repository in futuro.

Usa questi comandi per aggiungere la chiave GPG ufficiale di Docker alla lista dei repository.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Una volta fatto, aggiungi il repository alle sorgenti `apt` con questo comando.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Ora che hai aggiunto il repository Docker, aggiorna la lista dei pacchetti.
```
sudo apt-get update
```

A questo punto hai configurato correttamente il repository Docker. Come ultimo passo, installa i pacchetti Docker con questo comando.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Per iniziare, installa il pacchetto `dnf-plugins-core` che aiuta nella gestione dei repository.
```
sudo dnf -y install dnf-plugins-core
```

Ora aggiungi il repository Docker e installalo con questo comando.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker dovrebbe essere installato. Come ultimo passo, avvialo e abilitalo per farlo partire automaticamente.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Per verificare che l’installazione sia andata a buon fine, prova a eseguire l’immagine **hello-world** con questo comando.
```
sudo docker run hello-world
```

Se tutto va bene, vedrai un messaggio di benvenuto con alcune info base. Se ricevi errori `Permission Denied`, assicurati di aver abilitato la **Compatibilità Docker** nel pannello web e di aver riavviato il server come spiegato nella sezione preparazione.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Hai installato Docker con successo sul tuo server Linux.

## Configurazione Post-Installazione

Ora che Docker è installato, puoi fare qualche setup extra per non dover usare `sudo` ogni volta che esegui comandi Docker e per far partire Docker automaticamente all’avvio del server.

### Gestire Docker senza Sudo

Puoi evitare di dover scrivere `sudo` prima di ogni comando Docker creando un gruppo Docker e aggiungendo i tuoi utenti a questo gruppo. È più comodo, ma attenzione: questo dà indirettamente privilegi di root all’utente.

Crea il gruppo `docker` e aggiungi il tuo utente con questi comandi.
```
# Crea il gruppo Docker
sudo groupadd docker

# Aggiungi l’utente corrente al gruppo Docker
sudo usermod -aG docker $USER
```

Dopo, ti consigliamo di riavviare il server per aggiornare i permessi del gruppo. In alternativa puoi usare `newgrp docker`.

Ora verifica che puoi eseguire comandi Docker senza `sudo` provando di nuovo con:
```
docker run hello-world
```

:::tip
A volte potresti ricevere un errore su un file di configurazione se hai eseguito il comando con `sudo` in precedenza. Per risolvere, elimina la cartella Docker con `rmdir ~/.docker/`, che verrà ricreata automaticamente al prossimo comando.
:::

Se il comando funziona senza problemi, hai configurato Docker per funzionare senza `sudo`.

### Avviare Docker all’Avvio

Puoi configurare Docker per partire automaticamente all’avvio del server usando `systemd`, usato dalla maggior parte delle distribuzioni Linux.

:::tip
Su Ubuntu e Debian Docker è già impostato per partire automaticamente all’avvio, quindi non devi fare nulla.
:::

Per abilitare il servizio Docker all’avvio, usa questi comandi.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Per disabilitarlo all’avvio, sostituisci `enable` con `disable`. Puoi anche gestire il servizio con altri comandi `systemctl` come:
```
sudo systemctl start [tuo_servizio]
sudo systemctl stop [tuo_servizio]
sudo systemctl restart [tuo_servizio]
```

## Conclusione

Complimenti, hai installato e configurato Docker sul tuo server Linux! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!