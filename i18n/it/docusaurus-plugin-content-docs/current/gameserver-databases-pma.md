---
id: gameserver-databases-pma
title: 'Gameserver: Accesso a PHPMyAdmin'
description: "Scopri come gestire facilmente i database MySQL con phpMyAdmin sui gameserver ZAP-Hosting per un controllo database senza intoppi → Scopri di più ora"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Con phpMyAdmin puoi gestire i database MySQL in modo rapido e semplice tramite un’interfaccia web. ZAP-Hosting include database MySQL con i prodotti gameserver. Questi possono essere gestiti sia con phpMyAdmin che con programmi esterni di amministrazione MySQL come Navicat o HeidiSQL. Abbiamo anche una guida dedicata che trovi qui: [Accesso esterno al database](gameserver-database-external-access.md).

<InlineVoucher />

## Login a phpMyAdmin

Per prima cosa andiamo alla lista dei database creati per il gameserver. Apri il menu "Database" nella sidebar sinistra del server sotto la scheda "Tools".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Qui trovi tutti i database di questo server. Il login a phpMyAdmin è super semplice perché il sistema effettua l’accesso automaticamente. Ti basta cliccare sul pulsante blu "Manage".

:::info
Se il login automatico non funziona, dovrai accedere manualmente con le credenziali utente corrispondenti. Le info le trovi nell’area evidenziata in rosso in questo esempio.
:::


## Strumenti per le tabelle

All’inizio vedrai solo la homepage di phpMyAdmin. Per vedere e modificare le tabelle del database, devi aprire il database:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Ora ti vengono mostrate tutte le tabelle del database e alcuni strumenti per eseguire azioni specifiche, ad esempio puoi cancellare tabelle cliccando sul pulsante rosso "Delete".

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Per risparmiare tempo puoi applicare azioni a più tabelle contemporaneamente. Seleziona la casella a sinistra di ogni tabella finché non hai scelto tutte quelle che vuoi modificare. Se vuoi agire su tutte le tabelle, usa il pulsante "Select All" che seleziona automaticamente tutto. Poi scegli l’azione dal menu a tendina e conferma con "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modifica contenuti delle tabelle

Puoi modificare i valori in una tabella velocemente facendo doppio click sul campo che vuoi cambiare. Assicurati però che la tabella sia configurata per permettere la modifica, cosa che si riconosce dalla presenza di tre pulsanti di azione come in questo esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Esegui comandi SQL

Con phpMyAdmin puoi anche eseguire comandi SQL normali. Prima seleziona il database e poi clicca su "SQL" nella barra menu in alto.

Arrivato alla schermata dei comandi, inserisci tutte le query SQL che vuoi ed esegui cliccando su "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />