---
id: fivem-resolve-dbconnection
title: "FiveM: Risolvi i problemi di connessione al database"
description: "Scopri come risolvere i problemi di connessione al database del server FiveM e ripristinare una comunicazione fluida con il tuo database → Scopri di più ora"
sidebar_label: Risolvi Connessione DB
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Oxmysql è una risorsa open-source super utile per FiveM, già preinstallata sul tuo server FiveM, che permette la comunicazione tra il server e il database. Durante lo sviluppo, può capitare di fare modifiche (tipo aggiornare le credenziali del database) che richiedono di aggiornare la stringa di connessione di oxmysql. Ecco un esempio di problema di connessione al database:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

In questa guida vedremo come risolvere i problemi di connessione al database sul tuo server FiveM, modificando la stringa di connessione nel file di configurazione del server.

<InlineVoucher />



## Metodo Automatico

Inizia aprendo il pannello web del tuo server sul sito e vai nella sezione **Impostazioni**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Scorri fino in fondo alla pagina dove trovi i pulsanti **Azioni**. Usa semplicemente il pulsante **Riconfigura stringa di connessione MySQL** e, una volta cliccato, riavvia il server per applicare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Questo aggiornerà automaticamente il file `server.cfg` con le credenziali corrette e aggiornate, così il database dovrebbe tornare a funzionare senza problemi.

## Metodo Manuale

Se vuoi risolvere manualmente, ti serve accedere al file `server.cfg` e modificare la stringa di connessione inserendo le credenziali che trovi nel pannello web. Accedi all’interfaccia txAdmin e apri l’editor CFG. Poi, in un’altra scheda, vai su **Strumenti->Database** dove puoi vedere le credenziali attuali.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

Nel file `server.cfg`, aggiungi questa riga (o **sostituisci** quella esistente), inserendo i dati del tuo database presi dal pannello web.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Dopo aver fatto questo, salva il file e riavvia il server.



## Conclusione

Al prossimo avvio, il server dovrebbe riuscire a connettersi di nuovo al database e tutto dovrebbe funzionare alla grande. Hai risolto con successo i problemi di connessione al database! Per qualsiasi domanda o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />