---
id: fivem-editlocalfiles
title: "FiveM: File Locali (Variabili di lingua)"
description: "Scopri come personalizzare e aggiungere lingue alla tua risorsa per un'esperienza su misura → Scopri di più ora"
sidebar_label: File Locali (Lingua)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Vuoi cambiare le variabili di lingua di una risorsa o aggiungere altre lingue che ancora non ci sono? I file locali ti permettono di modificare le variabili di lingua della risorsa che vuoi.

<InlineVoucher />



## Dove trovare i file locali

I file locali vanno modificati tramite un client FTP. Se sei nuovo all’uso di FTP, ti consigliamo di leggere prima la guida su [Accesso FTP](gameserver-ftpaccess.md). Una volta connesso, vai nella cartella della risorsa ESX che vuoi modificare. Apri la cartella locales dentro la directory della risorsa.

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

Dentro la cartella locales troverai tutti i file di lingua disponibili per quella risorsa. Da qui puoi modificare un file esistente oppure copiarne uno con un nuovo nome per creare una nuova lingua, che poi potrai modificare.

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Modifica file locali

Ora puoi modificare il contenuto delle singole variabili di lingua nel file locale aperto. Il testo delle variabili si trova dopo il segno di uguale, racchiuso tra virgolette. Cambia il testo come preferisci e salva le modifiche alla fine.

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Imposta la lingua (Locale)

La lingua usata si definisce nel file di configurazione `config.lua` nella cartella della risorsa. Per farlo, modifica il valore di `Config.Locale = GetConvar('esx:locale', 'en')`.

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusione

Complimenti, se hai seguito tutti i passaggi hai modificato con successo il file locale della tua risorsa. Per qualsiasi domanda o aiuto, non esitare a contattare il nostro supporto, disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />