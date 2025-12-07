---
id: vserver-windows-rdp-freeze
title: "VPS: Connessione Desktop Remoto che si blocca"
description: "Scopri come risolvere i problemi di blocco RDP migliorando la stabilità della connessione e aumentando la produttività del desktop remoto → Scopri di più ora"
sidebar_label: Connessione RDP che si blocca
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il problema del blocco RDP è un fenomeno comune in cui, a seconda del sistema operativo e della versione utilizzata, le sessioni di desktop remoto si bloccano improvvisamente. Questo problema può essere frustrante e compromettere notevolmente la produttività. In questo documento scoprirai di più sulla causa del problema e come risolverlo.

<InlineVoucher />

## Causa Principale

Diverse fonti indicano sempre più che il problema è dovuto alla scarsa resilienza del protocollo RDP alla perdita di pacchetti o a pacchetti corrotti. Inoltre, un bug in alcune versioni di Windows può causare il mancato passaggio fluido tra i protocolli TCP e UDP, peggiorando ulteriormente la situazione.

## Come Risolvere

Per risolvere il problema, puoi disabilitare il protocollo UDP per la connessione RDP e usare invece il più stabile protocollo TCP. Per farlo, apri il Prompt dei comandi (cmd.exe) come amministratore sul tuo PC ed esegui questo comando:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Eseguendo questo comando, il tuo PC userà il protocollo TCP invece di UDP per la sessione RDP. Questo può migliorare la stabilità della connessione, specialmente in reti instabili o con alta perdita di pacchetti.

:::info 
**Conferma l’input** premendo Invio e **riavvia il PC dopo** per applicare la modifica e farla entrare in vigore.
:::

<InlineVoucher />