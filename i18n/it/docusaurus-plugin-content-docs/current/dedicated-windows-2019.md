---
id: dedicated-windows-2019
title: "Dedicated Server: Installazione di Windows Server 2019"
description: "Scopri come installare e configurare Windows Server sul tuo server dedicato per prestazioni e sicurezza ottimali → Scopri di più ora"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Qui ti spieghiamo passo passo come installare e configurare il sistema operativo Windows Server sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info Windows Server 2019
I passaggi di setup e la dimostrazione in questa guida si basano sul sistema operativo Windows Server 2019. Versioni OS più vecchie possono differire nella struttura e nell’aspetto, ma la procedura è simile.
:::

:::warning Versione più recente disponibile / Dettagli EOL

L’ultima versione di Windows Server di Microsoft è la [2025](dedicated-windows.md). Ti consigliamo di usare sempre l’ultima versione per progetti a lungo termine.

Il supporto per le versioni più vecchie di Windows Server verrà interrotto prima o poi. Queste sono le scadenze previste per la versione 2019:

- Supporto attivo: 09.01.2024
- Supporto sicurezza: 09.01.2029

:::

## Preparazione
Per installare e configurare un sistema operativo, è importante montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, dai un’occhiata alle nostre guide su [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).

## Installazione
Per installare Windows Server ti serve un file ISO della versione scelta, che puoi selezionare direttamente nel nostro webinterface. In alternativa, puoi usare un ISO personalizzato, per cui abbiamo una guida dedicata: [ISO personalizzata](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Se vedi questa schermata nella console remota, significa che l’ISO è stato caricato correttamente e possiamo partire con il setup.
Scegli la lingua desiderata e clicca su “Next” per continuare.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clicca su “Install now” per avviare il processo di installazione.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows ora richiede un product key. Inseriscilo se ne hai uno.

:::note
Noi non vendiamo licenze Windows, devi acquistare la chiave da solo.
:::

Puoi comprare product key Windows in vari shop online, assicurati che siano validi per la versione di Windows che stai installando, perché ci sono diverse edizioni.
Per esempio, Windows Server 2019 ha due edizioni principali: la standard e la datacenter.
Se non sei sicuro di cosa ti serve, clicca su “I don’t have a product key” e potrai aggiungerlo in seguito.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Ora seleziona la versione che vuoi installare.
Assicurati di scegliere quella giusta, perché non potrai cambiarla dopo.
Ricordati anche di scegliere una versione con “(Desktop Experience)”, altrimenti Windows sarà solo a riga di comando.
Dopo aver scelto, seleziona la versione e clicca su “Next”.

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Accetta i termini e procedi cliccando su “Next”.

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Se vuoi fare un’installazione pulita di Windows, scegli “Custom”. Puoi scegliere “Upgrade” se vuoi aggiornare da Windows Server 2016 a 2019, per esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

Nel passaggio successivo devi creare le partizioni sul tuo server dedicato. Di solito non ci sono partizioni create, ma se ci sono, selezionale e clicca su “Delete”.

Puoi creare più partizioni piccole o una grande. Se crei partizioni piccole, ti consigliamo almeno 50GB per la partizione principale di Windows.
Clicca su “New” per crearne una.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Se vuoi una sola partizione grande, clicca su “Apply”. Il setup prenderà automaticamente la dimensione massima disponibile.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows richiede una piccola partizione di sistema, accetta cliccando “OK”.

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Se sei soddisfatto delle partizioni, scegli quella su cui vuoi installare Windows e clicca su “Next”.
Il setup di Windows ora procede da solo, ci vorranno alcuni minuti.
Non devi fare altro finché non finisce.

## Configurazione

Quando il setup è finito, Windows ti chiederà di impostare una password.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Imposta la password che vuoi.

:::info
Ti consigliamo di scegliere una password forte con caratteri speciali.

Se dimentichi la password, non c’è modo di recuperarla, quindi scrivila da qualche parte.
:::

Dopo aver impostato la password, arrivi alla schermata di blocco di Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Per accedere a Windows, premi la combinazione di tasti `CTRL + ALT + DELETE`. Puoi farlo facilmente dalla console remota.
(La trovi nella console Java sotto “Keyboard”)
Ora effettua il login con la tua password.

Il passo successivo è abilitare il Desktop Remoto, così puoi connetterti facilmente al server.
Apri Esplora Risorse e fai clic destro su “This PC”.

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Scegli “Properties”.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Apri “Remote Settings”.

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accetta l’avviso del firewall cliccando “OK” e poi “Apply”.

Ora apri il Remote Desktop sul tuo PC e inserisci l’indirizzo IP del tuo server ZAP.
L’username è sempre Administrator e la password quella che hai impostato prima.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Puoi ignorare l’avviso del certificato, spunta “Don’t ask me again for connections to this computer”.
Conferma tutto cliccando “Yes”.

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop ora si connette al tuo server dedicato e puoi usarlo.
La configurazione di rete viene applicata automaticamente via DHCP, quindi non serve altro.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Se hai altre domande o problemi, il nostro supporto è qui per aiutarti!
:::

## Conclusione
Congratulazioni, hai installato con successo Windows Server 2019 sul tuo server dedicato. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per darti una mano! 🙂