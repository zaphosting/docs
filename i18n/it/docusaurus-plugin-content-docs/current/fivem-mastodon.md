---
id: fivem-mastodon
title: "FiveM: Configura un feed attività usando Mastodon"
description: "Scopri come integrare un feed attività Mastodon nel tuo server per aggiornamenti in tempo reale e una community più coinvolta → Scopri di più ora"
sidebar_label: Configura il Feed Attività
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Un feed attività aiuta a tenere i giocatori aggiornati direttamente all’interno del tuo server FiveM. Collegando un account Mastodon, aggiornamenti del server, annunci e messaggi brevi possono essere mostrati in tempo reale, senza che i giocatori debbano controllare piattaforme esterne.

Questa integrazione crea un canale di comunicazione chiaro tra il server e la sua community, assicurando che le info importanti siano sempre visibili in un unico posto centrale.

## Preparazione

Prima di configurare il feed attività, serve un account Mastodon. Questo account sarà usato per pubblicare aggiornamenti che poi appariranno sul server.

Se non hai ancora un account, registrati su un’istanza [Mastodon](https://joinmastodon.org/) a tua scelta. Dopo la registrazione, assicurati che il profilo sia accessibile e pronto per postare aggiornamenti, perché questi post saranno mostrati nel feed attività.



## Configurazione

Apri il tuo profilo Mastodon e copia il tuo username completo.  
Lo username di solito ha questo formato:

```
username@instance.domain
```

In questo esempio, lo username è `zaphosting@mstdn.instance`. Ora apri la sezione **Configs** del tuo server FiveM e modifica il file `server.cfg`. Scorri fino in fondo al file e aggiungi questa riga:

```
sets activitypubFeed username
```

Sostituisci `username` con il tuo username Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Salva il file e riavvia il server. Dopo il riavvio, potrebbero volerci fino a 20 minuti prima che il feed attività sia disponibile. Una volta attivo, comparirà una nuova scheda **Feed** aprendo il server, che mostrerà i post dell’account Mastodon collegato.



## Conclusione

Con il feed attività configurato, aggiornamenti e annunci del server vengono mostrati direttamente ai giocatori in modo chiaro e accessibile. Questa configurazione aumenta la trasparenza, rafforza l’interazione nella community e offre un modo efficiente per condividere news e info senza dipendere da link o piattaforme esterne.



Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂