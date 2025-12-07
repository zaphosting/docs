---
id: dedicated-linux-password-change
title: "Dedicated Server: Cambia la password root per server Linux"
description: "Scopri come cambiare e gestire in modo sicuro la password del tuo server tramite interfaccia web o console per un controllo accessi potenziato → Scopri di più ora"
sidebar_label: Cambia Password
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Interfaccia Web

La password può essere cambiata tramite la nostra interfaccia web. Apri la pagina "Accesso e Sicurezza", che trovi nella navigazione a sinistra.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

Il campo della password root si trova lì, dove puoi impostare la password desiderata.

:::info
Ricorda che deve essere lunga almeno 8 caratteri e contenere lettere maiuscole e minuscole (a-z/A-Z), numeri (1-9) e caratteri speciali (!@=#$%&-?_;:.,). Se non rispetta questi requisiti, non verrà applicata al server.
:::

Dopo aver inserito la password, apparirà un messaggio pop-up che puoi confermare con "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Se tutti i requisiti sono soddisfatti, il sistema confermerà che la password è stata cambiata con successo.


✅ La password è stata cambiata con successo.


Da ora in poi, la password sarà visibile nella nostra interfaccia web per 3 ore. Dopo questo periodo verrà cancellata per motivi di sicurezza. Per visualizzare la password, clicca semplicemente sull’icona dell’occhio accanto a "Password".

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Subito dopo apparirà una finestra pop-up con la password mostrata.


## Console del Server

La password può essere cambiata anche tramite la Console del Server, non importa se accedi via Putty o tramite console seriale.

:::info
Importante: Questa opzione è utilizzabile solo se hai ancora accesso al server.
:::

Se sei loggato nella console, puoi cambiare la password con il comando "passwd". Dopo dovrai digitare nuovamente la password per confermarla. Se la password corrisponde a quella inserita la console confermerà la modifica.


Se le due password non corrispondono, la console interromperà l’operazione. In questo caso dovrai eseguire di nuovo il comando "passwd".

:::info
Importante: Se cambi la password tramite Console, non potrà essere visualizzata per 3 ore nella nostra interfaccia web sotto Accesso e Sicurezza.
:::
