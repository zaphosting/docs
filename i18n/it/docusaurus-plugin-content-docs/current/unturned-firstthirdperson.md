---
id: unturned-firstthirdperson
title: "Unturned: Imposta la visuale 1ª/3ª persona per il server"
description: "Scopri come personalizzare la visuale dei giocatori sul tuo server Unturned tra prima persona, terza persona o entrambe per un gameplay migliorato → Scopri di più ora"
sidebar_label: 1ª/3ª Persona
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Visuale 1ª / 3ª persona

Unturned ti permette di cambiare la visuale sul server. Puoi scegliere tra la visuale in prima persona e quella in terza persona. Di default il gioco si gioca in prima persona. Però, dalla versione 3.9.9.0, puoi anche cambiarla. Qui sotto ti spieghiamo come fare per il tuo server.



## Configurazione

La modifica si fa nel file di configurazione **Commands.dat**. Lo trovi nel **Webinterface sotto Configs**. A seconda di quale visuale vuoi impostare, devi aggiungere questo comando nella config:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Visuale in 1ª persona (default):

Questa opzione è già attiva di default, anche se il comando non è ancora stato aggiunto nella config. Comunque, per completezza, puoi aggiungerlo senza problemi. Il comando per questa opzione è:

```
perspective first
```



### Visuale in 3ª persona:

Se vuoi usare la visuale in terza persona invece della prima, puoi impostarla così. Il comando è:

```
perspective third
```



### Entrambe le visuali:

Puoi anche usare entrambe le visuali insieme. In questo caso, devi solo cambiare il valore del comando. Il comando per questa opzione è:

```
perspective both
```



Al prossimo riavvio del server, l’opzione scelta sarà attiva!

<InlineVoucher />