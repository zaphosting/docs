---
id: redm-deletecache
title: "RedM: Cache Vuoto"
description: "Scopri come svuotare la cache del tuo server RedM migliora le prestazioni e risolve errori per un’esperienza di gioco più fluida → Scopri di più ora"
sidebar_label: Elimina Cache
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Svuotare la cache sul server RedM assicura che i file temporanei vengano cancellati. Questo forza il server a riscaricare o ricreare tutti i file necessari al prossimo avvio. Aiuta a rimuovere dati obsoleti o corrotti, risolvendo problemi di prestazioni, errori di script, crash o problemi nel caricamento del mondo di gioco.

<InlineVoucher />

## Metodo semplice

Eliminare la cache sul tuo server RedM è davvero facile. Prima di tutto, vai al pannello web del tuo game server. Trova e apri la sezione **Impostazioni** nel pannello web del tuo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Poi scorri fino in fondo alla pagina, dove troverai diversi pulsanti sotto la sottosezione **Azioni**. Qui clicca su **Elimina file cache** per svuotare la cache del tuo server di gioco.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
Questo riavvierà immediatamente il server per svuotare la cache, quindi assicurati di essere pronto a farlo.
:::


## Metodo alternativo

Prima di tutto, devi connetterti al server via FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso FTP](gameserver-ftpaccess.md). Nel passo successivo, devi trovare la cartella cache ed eliminarla. Segui questo percorso `/gXXXXXX/redm-txadmin/server-data/cache` per accedere alla cartella cache.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Ora devi semplicemente svuotare la cache. Per farlo, clicca sulla cartella **Cache** e poi su **File**. Seleziona tutte le cartelle presenti dentro la cartella **Cache** e cancellale.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Infine, riavvia il tuo server RedM per applicare le modifiche. Al riavvio, il server ricreerà la cache. 



## Conclusione

Se hai seguito tutti i passaggi, hai svuotato con successo la cache del tuo server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />