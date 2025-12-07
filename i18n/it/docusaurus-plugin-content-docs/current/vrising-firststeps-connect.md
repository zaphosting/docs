---
id: vrising-firststeps-connect
title: "V Rising: Connessione al Server V Rising"
description: "Scopri come connetterti al tuo server V Rising direttamente o tramite la lista server per un setup di gioco senza intoppi → Scopri di più ora"
sidebar_label: Connessione al Server
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come connetterti al tuo server V Rising. Ci sono due modi per connettersi: direttamente tramite l’indirizzo IP del server oppure tramite la lista server. Ti consigliamo di configurare il server a tuo piacimento prima di iniziare, scopri di più nella nostra guida [Configurazione Server](vrising-configuration.md).

<InlineVoucher />

## Connessione Diretta via IP

### Come Ottenere l’IP del Server

Prima di tutto, devi conoscere l’IP e la porta del tuo server V Rising per poterti connettere direttamente. Vai semplicemente al tuo [webinterface ZAP-Hosting](https://zap-hosting.com/en/customer/) e prendi nota dell’IP completo e della porta.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Se stai usando un server dedicato esterno, l’IP sarà quello della macchina host e la porta quella che hai impostato nel file di configurazione (di default è 9876). Dai un’occhiata alla nostra guida [Configurazione Server](vrising-configuration.md) per maggiori dettagli sulla porta.

### Connessione In-Game

Avvia V Rising dal tuo launcher. Nel menu principale seleziona **Play**, poi scegli l’opzione **Online Play**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Scegli la modalità di gioco che vuoi, oppure premi direttamente **Show all Servers** in basso a destra per aprire il browser dei server.

Ora clicca su **Direct Connect** in basso e inserisci il tuo IP seguito dalla porta, per esempio: `123.456.679.123:9876`. Se il server ha una password, il gioco ti chiederà di inserirla dopo la connessione.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Se non riesci a entrare e ricevi un errore di timeout, controlla che IP e porta siano corretti e che il server sia online. Puoi usare la console nel webinterface del tuo server V Rising per aiutarti a fare debug.

## Connessione Tramite Lista Server

Il modo più semplice per connetterti è tramite la lista server. Però, il tuo server deve essere impostato come pubblico nelle impostazioni di configurazione.

Controlla la nostra guida [Configurazione Server](vrising-configuration.md) per aggiungere i parametri `Name` e `ListOnMasterServer` nel file di configurazione o tramite il pannello webinterface.

Una volta fatto, nel menu principale seleziona **Play**, poi **Online Play** e di nuovo premi **Show all Servers** in basso a destra. Ora puoi usare il browser server per trovare il tuo server usando i filtri disponibili come ricerca per nome, modalità di gioco, difficoltà e molto altro.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />