---
id: fivem-steam-web-api-key
title: "FiveM: Configurazione Steam Web API Key"
description: "Scopri come ottenere e attivare una Steam Web API Key per FiveM per abilitare l'autenticazione e migliorare le funzionalità del server → Scopri di più ora"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La Steam Web API Key è fondamentale per FiveM. Serve, ad esempio, per l’autenticazione tramite API Key quando Steam viene usato come identificatore da vari script e/o risorse.

<InlineVoucher />

## Preparazione

Per richiedere una API Key ti serve un account Steam non limitato. Gli account Steam limitati hanno accesso ridotto alle funzionalità di Steam, quindi senza accesso completo non puoi richiedere una API Key. Devi aver speso almeno **5,00 USD** nello store Steam per sbloccare il tuo account e tutte le sue funzionalità.

## Richiedere una API Key

Quando il tuo account Steam è pronto, puoi richiedere la tua Steam Web API Key. Basta fare il login [sul sito di Steam](https://steamcommunity.com/dev/apikey) con il nome e la password del tuo account Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Dopo il login, devi inserire un nome dominio, accettare i termini d’uso della Steam Web API e cliccare su **Register**. Il dominio va impostato con il tuo **IP del server** *(senza porta)*, quindi inseriscilo lì.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Se tutto va a buon fine, vedrai la tua Steam Web API Key, come nell’esempio qui sotto.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Attivazione della API Key

Ora che hai la tua Steam Web API Key, devi inserirla nel file di configurazione del server (`server.cfg`) del tuo game server FiveM. Puoi accedere al `server.cfg` tramite l’interfaccia **txAdmin** sotto **CFG Editor**. Cerca una riga esistente o creane una nuova se non c’è, e aggiungi questa riga sostituendo `YOUR_KEY_HERE` con la tua key:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## Conclusione

Infine, riavvia il server. La tua Steam Web API Key verrà caricata al prossimo avvio completo del server. Hai aggiunto con successo una Steam Web API Key al tuo game server FiveM. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />