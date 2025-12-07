---
id: fivem-serverbanner
title: "FiveM: Configura il banner del tuo server"
description: "Scopri come migliorare l’aspetto del tuo server FiveM con un banner personalizzato per un look unico e professionale → Scopri di più ora"
sidebar_label: Configura il banner del server
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Un banner personalizzato per il server è un modo semplice ma efficace per far risaltare il tuo server FiveM. Dona al tuo server un look unico nella lista server e aggiunge un tocco professionale quando i giocatori si connettono.

Che tu usi uno screenshot personalizzato o una grafica creata ad hoc, impostare un banner aiuta la tua community a riconoscere subito il tuo server e lascia una forte prima impressione.

<InlineVoucher />



## Configurazione

Per impostare un banner personalizzato per il tuo server FiveM, ti serve prima un’immagine adatta. Ti consigliamo di fare uno screenshot in-game che rappresenti bene il tuo server. Puoi catturare uno screenshot in-game rapidamente premendo il tasto **F8** mentre giochi e usando il comando `screenshot`.

Una volta ottenuto lo screenshot, caricalo su un servizio di hosting immagini che fornisca un **link diretto** al file immagine (ad esempio, che finisca con `.jpg` o `.png`). Assicurati che l’immagine sia accessibile tramite URL diretto.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview) 

Per aggiungere il banner, apri il tuo pannello txAdmin e vai nelle impostazioni di configurazione del server. Cerca il campo **Server banner URL** e incolla lì il link diretto all’immagine. Salva le modifiche. Il tuo banner personalizzato apparirà ora nei dettagli del server quando i giocatori lo vedranno nella lista server.

```
# Imposta un’immagine opzionale per il banner info server e durante la connessione.
# La dimensione non è un problema, qualsiasi immagine in formato banner va bene.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Sostituisci gli URL di esempio con il link diretto all’immagine che hai caricato. Salva il file nell’Editor CFG e riavvia il server per applicare le modifiche.



## Conclusione

Il tuo banner personalizzato apparirà ora nella lista server e durante la schermata di connessione, rendendo il tuo server più unico e professionale. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />