---
id: fivem-qbcore-admin
title: "FiveM: Diventa admin con QBCore"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione in-game potenziata → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in-game. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.

<InlineVoucher />

## Configurazione

La configurazione dei permessi admin avviene tramite il file di configurazione ``server.cfg``. Per farlo, accedi all’interfaccia txAdmin e apri il CFG Editor. Poi scorri fino alla fine del file di configurazione, fino alla sezione `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore supporta diversi identificatori giocatore, tra cui FiveM ID (`identifier.fivem:`), licenze Rockstar (`identifier.license:`) e Discord ID (`identifier.discord:`). Puoi recuperare questi identificatori direttamente dall’interfaccia txAdmin. A questo punto puoi decidere se assegnare loro lo status GOD, Admin o Mod.

Una volta ottenuti gli identificatori e deciso lo status da assegnare, puoi dare i permessi ai singoli giocatori aggiungendoli al tuo `server.cfg`. Per farlo, aggiungi una di queste tre opzioni come nuova voce nella sezione permissions:

```
add_principal identifier.license:xxxxxx qbcore.god   # Nome Giocatore
add_principal identifier.license:xxxxxx qbcore.admin # Nome Giocatore
add_principal identifier.license:xxxxxx qbcore.mod   # Nome Giocatore
```

Il risultato finale potrebbe essere, ad esempio, questo:

```
## Permissions ##
add_ace group.admin command allow # consenti tutti i comandi
# Nota Deployer: questo admin master non ha identificatori per essere aggiunto automaticamente.
# add_principal identifier.discord:111111111111111111 group.admin #esempio

add_principal identifier.fivem:16219250 qbcore.admin # Nome Giocatore
```

## Conclusione

Se hai seguito tutti i passaggi correttamente, ora sei admin sul tuo server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />