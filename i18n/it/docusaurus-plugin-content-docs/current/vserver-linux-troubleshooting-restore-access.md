---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Accesso ripristinato"
description: "Scopri come riottenere l'accesso al tuo VPS Linux dopo un blocco password e ridurre al minimo i tempi di inattività → Scopri di più ora"
sidebar_label: Ripristina accesso
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Può succedere in un attimo. Provi a fare il login sul tuo server Linux, ma la password non viene più accettata o l’hai dimenticata. Di conseguenza, l’accesso al sistema e ai dati o servizi critici non è più possibile. Questa situazione può essere frustrante, soprattutto quando il server è fondamentale per le operazioni in corso. Nella maggior parte delle distribuzioni Linux, l’accesso può essere ripristinato usando la modalità recovery senza dover reinstallare il sistema operativo. Seguendo i passaggi qui sotto, potrai riottenere l’accesso al tuo server e continuare a lavorare con il minimo downtime.



## Ripristina accesso

Per resettare la password usando la modalità recovery, il sistema deve essere avviato con accesso al menu di boot GRUB. Durante l’avvio, apri il menu GRUB e seleziona **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Nella schermata successiva, scegli la voce che avvia il sistema in **modalità recovery**. Questo caricherà l’ambiente di recovery invece del sistema operativo normale.

Quando appare il menu di recovery, seleziona **root – Drop to root shell prompt** e conferma la scelta. Premi di nuovo Invio per accedere alla shell root.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

In modalità recovery, il filesystem root è montato in sola lettura di default. Per poter cambiare la password, deve essere rimontato con permessi di scrittura. Esegui questo comando:

```bash
mount -o remount,rw /
```

Se non conosci il nome utente, puoi vedere tutti gli account disponibili controllando le home directory:

```
ls /home
```

Per resettare la password, usa il comando `passwd` seguito dal nome utente:

```
passwd username
```

Sostituisci `username` con il nome dell’account reale. Inserisci la nuova password e confermala quando richiesto. L’input della password non sarà visibile sullo schermo. Una volta aggiornata con successo la password, riavvia il sistema con il comando `reboot`.



## Conclusione

Una volta completata la procedura, avrai impostato con successo una nuova password per l’utente desiderato. Ora potrai usarla per fare di nuovo login tramite la connessione desktop remota. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂