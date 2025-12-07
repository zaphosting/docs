---
id: dedicated-linux-fivem
title: "Server Dedicato: Configurazione Server Dedicato FiveM Linux (Interfaccia GS/TS3)"
description: "Scopri come configurare e gestire il tuo Server Dedicato FiveM con txAdmin per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduzione
Hai un server dedicato e vuoi installare e gestire il tuo Server Dedicato FiveM con txAdmin? Sei nel posto giusto! Qui ti spieghiamo tutti i passaggi necessari per installarlo, configurarlo e cosa devi tenere a mente.

:::warning  Sistema operativo selezionato e installato
Si presume che tu abbia già scelto e installato un sistema operativo per il tuo server dedicato. Se non hai ancora completato questo passaggio, devi prima seguire la guida [Configurazione iniziale](dedicated-setup.md) per server dedicati.
:::



## Preparazione

Per configurare un server FiveM, servono alcuni passaggi preparatori da fare prima di iniziare con l’installazione vera e propria del Server Dedicato FiveM.


### Configura il database

Per la nostra opzione interfaccia GS/TS3 forniamo già i database inclusi. Però, se preferisci configurare un tuo server database e database, ti consigliamo di dare un’occhiata alla guida [Installa database](dedicated-linux-databases.md). 

:::warning
Se usi un database tuo, durante la configurazione di txAdmin dovrai sostituire le info del database predefinito con quelle tue.
:::



###  Installa l’interfaccia GS/TS3
Con l’interfaccia GS/TS3 super user-friendly puoi installare il tuo Server Dedicato FiveM con pochi click. Non serve nessuna conoscenza tecnica per questa installazione. L’installazione di tutti i pacchetti necessari, i file server e l’installazione vera e propria sono completamente automatizzati, risparmiandoti tempo e fatica.

:::warning
L’interfaccia GS/TS3 funziona con questi sistemi operativi:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Stiamo già lavorando per supportare altri sistemi operativi e versioni più recenti a breve.
:::

Se non conosci ancora l’interfaccia GS/TS3, ti consigliamo di dare un’occhiata alla nostra guida [Interfaccia GS/TS3](dedicated-linux-gs-interface.md). 

Se hai già installato l’interfaccia GS/TS3, apri il servizio del game server appena creato. Qui devi selezionare il gioco. Vai alla pagina **Games**, clicca sui giochi disponibili, cerca txAdmin e clicca sul pulsante di installazione. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Crea la chiave licenza del server FiveM

Ogni server FiveM ha bisogno della sua chiave licenza, gestita tramite il nuovo [Portale Cfx.re](http://portal.cfx.re/). La chiave licenza è collegata al tuo account Cfx.re. Accedi al sito, vai nella categoria **Server** e clicca su **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configurazione

Ora puoi iniziare a configurare il server FiveM e txAdmin. Apri la dashboard del tuo game server. Troverai il link e i dati di login per l’istanza txAdmin nella sezione txAdmin. Aprila e fai il login. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Configurazione txAdmin

Durante la configurazione di txAdmin, il tuo server FiveM viene installato e configurato in cinque step. Segui le istruzioni nell’interfaccia txAdmin e definisci prima un **nome server**. Poi seleziona il **tipo di server** desiderato. Questo esempio mostra l’installazione di un server FiveM con QBCore preinstallato.

Seleziona l’opzione **Popular Recipes** nel passaggio **Deployment Type** e poi il **QBCore Framework Template**. Conferma la **Data Directory** desiderata e avvia il **Recipe Deployer** per completare l’installazione.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Configurazione firewall

Installando il server FiveM tramite l’interfaccia GS/TS3, il port forwarding necessario viene configurato **automaticamente** nel firewall. Se dovessi avere problemi, puoi configurare il port forwarding manualmente via SSH con questo comando: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Conclusione

Hai installato e configurato con successo un Server Dedicato FiveM sul tuo server dedicato. Per domande o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂



