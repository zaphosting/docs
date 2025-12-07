---
id: fivem-notlisted
title: "FiveM: Il server non appare nella lista server"
description: "Scopri come risolvere i problemi di visualizzazione del server e assicurati che il tuo server appaia correttamente nella lista → Scopri di più ora"
sidebar_label: Server non in lista
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Se il server non appare nella lista server, questo può dipendere da diversi motivi. Se questa guida non risolve il problema, ti chiediamo di contattare il nostro [Supporto](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Errore di configurazione

Spesso sono semplici errori di configurazione a causare questo problema, per prima cosa dobbiamo controllare se il nostro server ha disabilitato la visualizzazione, per farlo controlliamo la riga `sv_master1`:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Questa riga dovrebbe **sempre** essere commentata con un #, se non è così, il server non verrà mostrato nella lista.
:::


Controlla anche il nome del server (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)


In questo caso manca la virgoletta alla fine della riga, con alcuni nomi server possono esserci problemi anche a causa della formattazione, ti consigliamo di rimuoverli in questi casi, ad esempio [DE], caratteri speciali come ä, ü, ö.

## Risorse problematiche

È anche possibile che alcune risorse impediscano al server di essere mostrato, in questo caso ti consigliamo di rimuovere le risorse installate più di recente e lasciare il server online per circa 1 ora, nella maggior parte dei casi tornerà a comparire.

## Reinstallazione

Se nulla di tutto ciò funziona, consigliamo una reinstallazione pulita, che resetterà tutti i file del server ai valori di default.

:::info
Assicurati di fare un backup prima di reinstallare, altrimenti i dati sul server andranno persi.
:::

<InlineVoucher />