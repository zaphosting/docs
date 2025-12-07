---
id: eco-whitelist
title: "ECO: Attiva la Whitelist"
description: "Scopri come proteggere il tuo server gestendo l'accesso dei giocatori con la whitelist di ECO → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

La whitelist di ECO ti permette di proteggere il tuo server consentendo la connessione solo ai giocatori selezionati nella lista.

<InlineVoucher />

### Attivazione (Config)

L'attivazione della whitelist avviene automaticamente. Diventa attiva non appena almeno un giocatore viene aggiunto alla lista. I giocatori devono essere inseriti nel file di configurazione **Users.eco**. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Il campo **$values** contiene gli SteamID dei giocatori che vuoi aggiungere alla whitelist. Puoi trovarli aprendo prima il tuo profilo Steam e poi cliccando con il tasto destro da qualche parte nel profilo. Da lì puoi copiare l’URL Steam del profilo. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Dopodiché apri una delle seguenti pagine e incolla lì l’URL del tuo profilo: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Qui otterrai info generali e lo Steam ID del tuo account. A noi serve solo lo SteamID64. Lo SteamID64 va inserito in **$values**. Il risultato sarà così:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "altroSteamID"      
      ]
    }
```



### Attivazione (Chat)

In alternativa, puoi aggiungere altri giocatori alla whitelist direttamente in-game se hai i permessi da admin. Per aggiungere un giocatore alla whitelist usa questo comando in chat/console:

```
/whitelist [player]
```



## Gestione Whitelist

La gestione della whitelist può essere fatta solo modificando il file di configurazione **Users.eco**, perché non esiste un comando server per rimuovere un giocatore dalla whitelist. Se vuoi rimuovere un giocatore, basta eliminarlo dal file di config. Ricordati che per applicare la modifica è necessario riavviare il server. 

<InlineVoucher />