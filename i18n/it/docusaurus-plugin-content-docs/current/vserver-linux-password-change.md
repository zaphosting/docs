---
id: vserver-linux-password-change
title: "VPS: Cambia la password root del server Linux"
description: "Scopri come cambiare e gestire in sicurezza la password del tuo server tramite web interface o console per un controllo accessi potenziato → Scopri di più ora"
sidebar_label: Cambia Password
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Webinterface

La password può essere cambiata tramite la nostra web interface. Apri la pagina "Accesso e Sicurezza", che trovi nella navigazione a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

Il campo per la password root si trova lì, dove puoi impostare la password desiderata.

:::info
Ricorda che deve essere lunga almeno 8 caratteri e contenere lettere maiuscole e minuscole (a-z/A-Z), numeri (1-9) e caratteri speciali (!@=#$%&-?_;:.,). Se non rispetta questi requisiti, non verrà applicata al server.
:::

Dopo aver inserito la password, apparirà un pop-up che puoi confermare cliccando su "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Se tutti i requisiti sono soddisfatti, il sistema confermerà che la password è stata cambiata con successo.

✅ La password è stata cambiata.

Da ora in poi, la password sarà visibile nella nostra web interface per 3 ore. Dopo di che verrà cancellata per motivi di sicurezza. Per visualizzarla, clicca sull’icona dell’occhio accanto a "Password".

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Subito dopo apparirà una finestra pop-up con la password mostrata.


## Console del Server

La password può essere cambiata anche tramite la Console del Server, sia che tu acceda via Putty o tramite console seriale.

:::info
Importante: questa opzione è utilizzabile solo se hai ancora accesso al server.
:::

Una volta loggato in console, puoi cambiare la password con il comando `passwd`. Dopo dovrai digitare di nuovo la password per confermarla. Se la conferma corrisponde, la console ti confermerà l’avvenuto cambio.

Se le due password non corrispondono, la console interromperà l’operazione. In questo caso dovrai eseguire di nuovo il comando `passwd`.

:::info
Importante: se cambi la password tramite Console, non sarà visibile per 3 ore nella nostra web interface sotto Accesso e Sicurezza.
:::

<InlineVoucher />