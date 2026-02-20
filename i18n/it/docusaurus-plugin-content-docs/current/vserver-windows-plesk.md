---
id: vserver-windows-plesk
title: "Configura Plesk su un Server Windows - Gestisci i tuoi siti con un pannello di controllo potente"
description: "Scopri come gestire facilmente siti web e server con la piattaforma versatile di Plesk, perfetta per principianti ed esperti → Scopri di più ora"
sidebar_label: Installa Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Plesk è una piattaforma completa per hosting web e gestione server che permette di amministrare siti web, server, account email e molto altro tramite un’interfaccia semplice e intuitiva. È una soluzione versatile, adatta sia ai principianti che agli sviluppatori web e amministratori di sistema più esperti.  
<InlineVoucher />


## Connessione al server

Per installare Plesk sul server, devi prima connetterti ad esso. Come fare è spiegato nel dettaglio nella nostra guida dedicata: [Accesso iniziale (RDP)](vserver-windows-userdp.md)

## Installer di Plesk

Ora ti serve l’installer di Plesk, necessario per l’installazione. Puoi scaricarlo cliccando su [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Questo installer va salvato in una cartella, nel nostro esempio usiamo una cartella "Plesk" creata sul desktop. Il percorso di questo file sarà importante per i prossimi passaggi.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Apri il Prompt dei comandi

Ora devi aprire la console CMD per procedere con l’installazione.  
Puoi farlo premendo la combinazione di tasti [Windows] + [R] oppure cercando "cmd" nella barra di ricerca di Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Installazione di Plesk

Nel prompt dei comandi devi navigare nella cartella dove hai salvato l’installer di Plesk. Nel nostro esempio è la cartella "Plesk" sul desktop.

Per spostarti in questa directory usa il comando "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Una volta nella cartella giusta, l’ultimo passo è eseguire il comando per avviare l’installer. Così partirà l’installazione automatica dell’ultima versione di Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
L’installazione può durare dai 30 ai 60 minuti, al termine Plesk sarà installato e pronto all’uso.
:::


## Conclusione

Congratulazioni, hai installato e configurato con successo Plesk sul tuo VPS o Server Dedicato! Se hai altre domande o problemi, il nostro supporto è sempre a disposizione per aiutarti ogni giorno!

<InlineVoucher />