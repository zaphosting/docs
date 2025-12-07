---
id: fivem-installels
title: "FiveM: Installare ELS sul tuo server"
description: "Scopri come configurare e abilitare ELS-FiveM con carmods per un gameplay potenziato sul tuo server → Scopri di più ora"
sidebar_label: Installa ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connettiti via FTP

Per poter installare la risorsa, è necessario configurare l’[Accesso via FTP](gameserver-ftpaccess.md).

## Preparazione

Prima di tutto scarichiamo l’ultima [versione di ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest), che trovi sotto la sezione "Assets".

Una volta scaricato ELS, estrai il file e apri la cartella "ELS-FiveM".

## Configurazione

Ora configuriamo ELS-FiveM facendo una copia del file `vcf.default.lua` e rinominandola in `vcf.lua`.

:::info
Nota: Il file originale `vcf.default.lua` non va cancellato.
:::

Altre impostazioni possono essere modificate nel file "config.lua", ma per ora lasciamole di default.

## Carica la risorsa

Puoi installare ELS-FiveM caricando i file tramite drag & drop nella cartella "resources".

Una volta caricati, apri il file server.cfg nella cartella server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Tra le altre risorse da avviare, aggiungi la voce per ELS-FiveM.

Dopodiché riavvia il server e ELS-FiveM sarà disponibile in game!

## Configurazione Carmods

Per aggiungere nuovi carmods a ELS-FiveM, prima ti serve la configurazione ELS, che spesso si trova nella cartella del carmod scaricato. Di solito si chiama `autoname.xml`, nel nostro caso è `scpdvic.xml`.

Caricali nella cartella "vcf" dentro la cartella di ELS-FiveM via FTP.

Ora che il file è caricato, apri il file 'vcf.lua' nella cartella ELS-FiveM.

:::info
Assicurati che la riga precedente finisca sempre con una virgola.
:::

Fatto! Il nostro Carmod ora dovrebbe essere abilitato per ELS e funzionante dopo il riavvio del server.

<InlineVoucher />