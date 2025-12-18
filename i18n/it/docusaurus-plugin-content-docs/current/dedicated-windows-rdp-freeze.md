---
id: dedicated-windows-rdp-freeze
title: "Dedicated Server: Connessione Desktop Remoto che si Disconnette"
description: "Scopri come risolvere il freeze di RDP migliorando la stabilità della connessione e prevenendo interruzioni di sessione → Scopri di più ora"
sidebar_label: Connessione RDP che si Disconnette
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il problema del freeze di RDP è un fenomeno comune in cui, a seconda del sistema operativo e della versione utilizzata, le sessioni di desktop remoto si bloccano improvvisamente. Questo problema può essere frustrante e compromettere notevolmente la produttività. In questo documento scoprirai di più sulla causa del problema e come risolverlo.

## Causa Principale

Diverse fonti indicano sempre più che il problema è dovuto alla ridotta resilienza del protocollo RDP alla perdita di pacchetti o pacchetti corrotti. Inoltre, un bug in alcune versioni di Windows può causare il mancato passaggio fluido tra i protocolli TCP e UDP, aggravando ulteriormente la situazione.

## Soluzione

Per risolvere il problema, puoi disabilitare il protocollo UDP per la connessione RDP e utilizzare invece il più stabile protocollo TCP. Per farlo, apri il Prompt dei comandi (cmd.exe) come amministratore sul tuo PC ed esegui il seguente comando:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Eseguendo questo comando, il tuo PC userà il protocollo TCP invece di UDP per la sessione RDP. Questo può migliorare la stabilità della connessione, specialmente in reti con connessioni instabili o alta perdita di pacchetti.

:::info 
**Conferma l’input** premendo il tasto Invio e **riavvia il computer dopo** affinché la modifica venga applicata e abbia effetto.
:::