---
id: dedicated-linux-debian
title: "Server Dedicato: Installazione di Debian"
description: "Scopri come installare e configurare il sistema operativo Debian sul tuo server dedicato per prestazioni e affidabilità ottimali → Scopri di più ora"
sidebar_label: Installa Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Qui ti spieghiamo passo passo come installare e configurare il sistema operativo Debian sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info

La guida si basa sull’uso di Debian 10. Le installazioni con versioni precedenti o più recenti potrebbero differire leggermente nel processo.

:::



## Preparazione

Per installare e configurare un sistema operativo, è fondamentale montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, ti consigliamo di dare un’occhiata alle nostre guide su [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).



## Installazione

Quando l’ISO è caricata con successo, il server entra nella fase di setup.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

In questo esempio seguiamo l’installazione “classica”.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Scegli la lingua in cui vuoi che venga mostrato il wizard di installazione. Ricorda che questa lingua influenzerà il sistema installato.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

La nostra posizione desiderata non è nella prima pagina, quindi clicchiamo su "Altro".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

Nel nostro esempio scegliamo "Europa".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

A seconda del fuso orario, selezioniamo il fuso orario tedesco.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Scegliamo Stati Uniti come locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

Nel nostro caso scegliamo la tastiera tedesca, ovvero layout QWERTZ. Se sei americano, il layout di default è QWERTY.

:::info
Il server sta preparando alcuni componenti necessari per l’installazione, questo può richiedere qualche minuto.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Il server configura automaticamente l’interfaccia di rete tramite DHCP. Seleziona `eno1`, che è la scheda di rete predefinita del tuo server dedicato ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

Puoi modificare l’hostname se vuoi, ma non è obbligatorio.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

Anche il nome di dominio non deve essere cambiato necessariamente.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Qui devi impostare la password per l’account "root". Annotati la password scelta.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Conferma la password inserendola di nuovo.

:::info
Il wizard ti chiederà di creare un secondo account utente.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Inserisci il nome del proprietario per un account utente normale. Puoi scegliere liberamente cosa inserire.

:::info
Ovviamente puoi usare anche l’account "root" alla fine.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Ora inserisci il nome utente per l’account. Scegli anche una password e confermala. Il server preparerà i prossimi passaggi.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Ora puoi creare le partizioni o usare l’intero SSD come una sola partizione. Se non vuoi modificare nulla, scegli "Guidato - Usa l’intero disco".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Seleziona l’SSD installato nel server. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

In generale va bene che tutta la struttura sia su una sola partizione. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Confermiamo con "Termina partizionamento e scrivi modifiche su disco".

:::info
Se ci sono vecchie partizioni sull’SSD, conferma la sovrascrittura con "Sì".
:::

Il server ora partiziona e prepara l’installazione del sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Se vuoi aggiungere altri media di installazione, ad esempio per pacchetti particolari, puoi farlo ora. Di solito però puoi scaricare tutto comodamente dopo tramite il package manager (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

I nostri server dedicati sono in Germania, quindi consigliamo di scegliere il mirror tedesco per la massima velocità di download.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Consigliamo di usare il repository Debian di default.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Se vuoi usare un proxy HTTP, puoi inserirlo qui (non è obbligatorio).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

Il sistema vuole raccogliere statistiche anonime, puoi accettare o rifiutare.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Ora seleziona i pacchetti da installare:

* Ambiente desktop Debian  
Creerebbe un’interfaccia grafica, ma in questo esempio usiamo solo la shell.

* Server SSH  
Serve per connettersi, ad esempio, con PuTTY.

* Utility di sistema standard  
Fornisce vari pacchetti base.

Seleziona con `TAB` e le frecce, attiva/disattiva con la barra spaziatrice. Quando sei pronto premi `TAB` fino a "Continua" e conferma con Invio.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Conferma che questo sistema operativo è l’unico sul server con `Sì`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Come posizione di archiviazione scegliamo quella di default sull’SSD.

:::info
🎉 L’installazione del tuo sistema Debian è finita.
:::

Apri "Virtual Media" nel tuo iLO e clicca su "Espelli Media" per rimuovere l’ISO.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Quando fatto, seleziona Continua, il server si riavvierà.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configurazione

### Login SSH

Dopo il riavvio e l’installazione riuscita, ti verrà chiesto di fare il login.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Ovviamente vuoi gestire il server via SSH, tipo con PuTTY, quindi dobbiamo abilitare il login:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Apri con nano il file di configurazione SSH `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Cerca `#PermitRootLogin no` e cambialo in `PermitRootLogin yes`.

Ora premi `CTRL + X` e conferma con `Y`.

Dopodiché riavvia il servizio SSH con `service ssh restart`.

Ora il login SSH è attivo e puoi connetterti con PuTTY, per esempio.  
Inserisci l’IP del server che vedi nel tuo dashboard ZAP e usa le credenziali che hai impostato.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti!
:::





## Conclusione

Congratulazioni, hai installato con successo Debian sul tuo server dedicato. Per qualsiasi domanda o supporto, il nostro team è disponibile ogni giorno per darti una mano! 🙂