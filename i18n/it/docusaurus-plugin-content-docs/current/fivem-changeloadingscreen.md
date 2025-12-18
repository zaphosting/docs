---
id: fivem-changeloadingscreen
title: "FiveM: Installazione di Custom Loading Screen"
description: "Scopri come personalizzare il tuo loading screen di FiveM per un'esperienza unica e migliorare la grafica del tuo server → Scopri di più ora"
sidebar_label: Installa Custom Loading Screen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Vuoi usare un loading screen personalizzato invece di quello di default di FiveM? Qui sotto ti spieghiamo come fare e quali passaggi seguire!

<InlineVoucher />



## Preparazione

Per installare il tuo loading screen, prima devi trovare una risorsa adatta. Puoi trovare una vasta selezione di risorse sul sito ufficiale [Cfx.re](https://forum.cfx.re/c/releases/7). Scarica la risorsa e scompattala sul tuo PC.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installazione

L’installazione del loading screen avviene via FTP. Collegati al tuo game server tramite FTP. Se non sai ancora come usare FTP, dai un’occhiata alla nostra guida su [Accesso FTP](gameserver-ftpaccess.md).

Una volta connesso via FTP, vai nella cartella delle risorse. A seconda del framework che hai installato, la troverai in questa struttura: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Carica la cartella della risorsa che hai scaricato e scompattato sul tuo PC in questa posizione.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Ora che la risorsa del loading screen è stata caricata con successo, devi aggiungerla al file di configurazione del server `server.cfg`. Per farlo, accedi all’interfaccia txAdmin e apri il CFG Editor.

Aggiungi la tua risorsa alla config usando il comando `start resourcename`. Nell’esempio, sarebbe `start loadingscreen`. Salva le modifiche e riavvia il server.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusione

Se hai seguito tutti i passaggi, al prossimo riavvio del server vedrai il tuo nuovo loading screen. Per domande o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />