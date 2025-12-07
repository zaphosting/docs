---
id: gameserver-database-external-access
title: 'Game server: Accesso esterno al database'
description: "Scopri come gestire i database MySQL di ZAP-Hosting per game server usando tool come Navicat o HeidiSQL → Scopri di più ora"
sidebar_label: Accesso esterno al database
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

ZAP-Hosting include database MySQL per i prodotti game server. Questi possono essere gestiti internamente tramite phpMyAdmin o esternamente con tool di amministrazione MySQL come Navicat o HeidiSQL.

Per farlo ti servono le credenziali d’accesso al database. Le trovi nell’admin del game server sotto la sezione database. Ti servono le info su **server/IP**, **database**, **utente**, **password** e la porta di default **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Preparazione

Prima di tutto ti serve un software, qui ti mostriamo [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) o [HeidiSQL](https://www.heidisql.com/download.php). Dopo aver scaricato il file, esegui l’installazione seguendo la procedura guidata. Quando hai finito, avvia il programma e configura la connessione al database.

## HeidiSQL

Per connetterti con HeidiSQL, crea una nuova connessione cliccando su "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Nel campo Hostname / IP inserisci il nome del tuo database, nel nostro esempio "mysql-mariadb-5-101.zap-hosting.com". Username e password li prendi sempre dai dati, la porta resta 3306.

Poi clicca su "Open" e sei dentro.


## Navicat

Per connetterti con Navicat crea una nuova connessione. Sotto **Connection** scegli **MySQL**. Si aprirà una finestra dove inserire i dati del database.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

Il **Connection Name** serve solo per identificare la connessione e puoi sceglierlo come vuoi. Tutte le altre info le prendi dall’interfaccia come spiegato sopra. Clicca su **OK** e la configurazione è fatta. La connessione la trovi poi a sinistra nella panoramica database. Per aprirla fai doppio click o clic destro e scegli "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Dopodiché il database si apre con tutte le tabelle esistenti. Ora puoi modificare o gestire il database come con phpMyAdmin, sia cliccando che usando comandi SQL.
![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)





## Conclusione

Hai collegato con successo il tuo database e ora puoi gestirlo come vuoi. Per domande o supporto, il nostro team è sempre pronto ad aiutarti ogni giorno! 🙂

<InlineVoucher />