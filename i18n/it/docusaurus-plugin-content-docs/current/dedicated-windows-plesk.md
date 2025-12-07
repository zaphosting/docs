---
id: dedicated-windows-plesk
title: "Dedicated Server: Installazione di Plesk"
description: "Scopri come gestire siti web e server in modo efficiente con Plesk, sia per principianti che per esperti → Scopri di più ora"
sidebar_label: Installa Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plesk è una piattaforma completa per il web hosting e la gestione dei server che permette di gestire siti web, server, account email e molto altro tramite un’interfaccia super intuitiva. È una soluzione versatile, perfetta sia per chi è alle prime armi sia per sviluppatori web e sysadmin esperti.

## Connessione al server

Per installare Plesk sul server, prima devi collegarti ad esso. Come fare lo spieghiamo nel dettaglio nelle nostre guide dedicate: [Accesso iniziale (RDP)](vserver-windows-userdp.md)

## Installer di Plesk

Ora ti serve il Plesk Installer, indispensabile per l’installazione di Plesk. Puoi scaricarlo cliccando su [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Questo installer va salvato in una cartella, nel nostro esempio usiamo una cartella "Plesk" creata sul desktop. Il percorso di questo file sarà importante per i prossimi passaggi.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Apri il Prompt dei comandi

Ora devi aprire la console CMD per procedere con l’installazione. Puoi farlo con la combinazione di tasti [Windows] + [R] oppure cercando "command" nella barra di ricerca di Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Installazione di Plesk

Nel prompt dei comandi devi navigare nella cartella dove hai salvato il Plesk installer. Nel nostro esempio è la cartella "Plesk" sul desktop.

Per entrare in questa cartella da CMD usa il comando "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Una volta nella cartella giusta, l’ultimo step è eseguire il comando per avviare l’installer. Così partirà l’installazione automatica dell’ultima versione di Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
L’installazione può durare dai 30 ai 60 minuti, al termine Plesk sarà installato e pronto all’uso.
:::

## Conclusione

Complimenti, hai installato Plesk con successo! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂