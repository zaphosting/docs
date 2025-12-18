---
id: redm-steam-web-api-key
title: "RedM: Configurazione della Steam Web API Key"
description: "Scopri come ottenere e attivare una Steam Web API Key per RedM per abilitare l'autenticazione e migliorare la configurazione del tuo server → Scopri di più ora"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Una Steam Web API Key è fondamentale per RedM. Serve, tra le altre cose, per l'autenticazione tramite API Key quando Steam viene usato come identificatore da vari script e/o risorse.

<InlineVoucher />

## Preparazione

Per richiedere una API key ti serve un account Steam non limitato. Gli account Steam limitati hanno accesso ridotto alle funzionalità di Steam, quindi senza accesso completo non puoi richiedere una API key. Devi aver speso almeno **5,00 USD** nello store di Steam per sbloccare il tuo account e tutte le sue funzionalità.

## Richiedere una API key

Quando il tuo account Steam è pronto, puoi richiedere la tua Steam Web API Key. Basta registrarti [sul sito di Steam](https://steamcommunity.com/dev/apikey) con il nome e la password del tuo account Steam.

![](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

Una volta loggato, dovrai inserire un nome dominio, accettare i termini di utilizzo della Steam Web API e cliccare sul pulsante **Register**. Il dominio va impostato con il tuo **IP del server** *(senza porta)*, quindi inseriscilo lì.

![](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

Se tutto va a buon fine, vedrai la tua Steam Web API Key, come nell’esempio qui sotto.

![](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## Attivazione della API key

Ora che hai la tua Steam Web API Key, devi inserirla nel file di configurazione del server (`server.cfg`) del tuo game server RedM. Puoi accedere al `server.cfg` tramite l’**interfaccia txAdmin** sotto **CFG Editor**. Cerca una riga esistente o creane una nuova se non c’è, e aggiungi questa riga sostituendo `YOUR_KEY_HERE` con la tua key generata:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)



## Conclusione

Infine, riavvia il server. La tua Steam Web API Key verrà caricata al prossimo avvio completo del server. Hai aggiunto con successo una Steam Web API Key al tuo game server RedM. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />