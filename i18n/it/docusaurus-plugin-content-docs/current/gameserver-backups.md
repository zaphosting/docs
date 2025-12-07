---
id: gameserver-backups
title: 'Server di gioco: crea, scarica e importa backup'
description: "Scopri come creare e ripristinare facilmente backup manuali o automatici per il tuo server di gioco per proteggere i tuoi dati → Scopri di più ora"
sidebar_label: Backup
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Offriamo la possibilità di creare backup individuali con un clic. Questo ti permette di creare backup in modo semplice e senza sforzi, oltre a importarli in qualsiasi momento in seguito. Questa funzione è disponibile sia per i file del tuo server di gioco che per i database associati. Tutti i backup vengono salvati sul tuo server di storage, che include di default 10GB di spazio gratuito. Se ti serve di più, puoi sempre fare l’upgrade a Premium Storage.

Oltre a creare backup manualmente, puoi anche impostare backup completamente automatici. I backup possono essere programmati giornalmente o settimanalmente a un orario specifico. Dopo aver ripristinato un backup, il server tornerà allo stato in cui si trovava al momento della creazione del backup.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="Come creare BACKUP per il tuo Server!" description="Ti sembra più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Crea backup manualmente

Premi il pulsante verde **+** accanto alla lista dei backup per creare un backup manualmente. Il processo di backup partirà subito dopo.

:::info
La creazione del backup può richiedere qualche minuto a seconda della dimensione dei file del tuo server!
:::

## Crea backup automaticamente

In fondo alla pagina trovi altre opzioni, inclusa la configurazione per i backup automatici. Per attivare questa funzione devi abilitare l’opzione **Crea backup automaticamente**. Inoltre, devi impostare l’intervallo di tempo.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

A seconda del gioco, è sempre una buona idea fare il backup anche del database, visto che lì vengono spesso salvati dati importanti come punteggi, permessi e molto altro.

>⚠️ È fondamentale avere spazio di archiviazione sufficiente per creare backup regolari. Assicurati di avere sempre abbastanza spazio disponibile.

## Scarica/elimina backup

Se vuoi scaricare o eliminare backup, devi connetterti al server di storage tramite FTP. Qui trovi le istruzioni per usare FTP: [Accesso via FTP](gameserver-ftpaccess.md)
![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Qui puoi vedere le credenziali utente del tuo server di storage e lo spazio attualmente utilizzato. Una volta connesso via FTP, puoi scaricare o eliminare i backup direttamente da lì.

<InlineVoucher />