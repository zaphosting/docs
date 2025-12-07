---
id: dedicated-windows-2016
title: "Dedicated Server: Installazione di Windows Server 2016"
description: "Scopri come installare e configurare Windows Server sul tuo server dedicato per prestazioni e sicurezza ottimali → Scopri di più ora"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Qui ti spieghiamo passo passo come installare e configurare il sistema operativo Windows Server sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info Windows Server 2016
I passaggi di setup e la demo in questa guida si basano su Windows Server 2016 (aspetto 2019 - stesso design). Versioni più vecchie potrebbero differire nella struttura e nell’aspetto, ma la procedura è simile.
:::

:::warning Versione più recente disponibile / Dettagli EOL

L’ultima versione di Windows Server di Microsoft è la [2025](dedicated-windows.md). Ti consigliamo di usare sempre l’ultima versione per progetti a lungo termine.

Il supporto per le versioni più vecchie di Windows Server verrà interrotto prima o poi. Queste sono le scadenze per la versione 2016:

- Supporto attivo: 11.01.2022
- Supporto sicurezza: 12.01.2027

:::

## Preparazione
Per installare e configurare un sistema operativo, è fondamentale montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, dai un’occhiata alle nostre guide [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).

## Installazione
Per installare Windows Server ti serve un file ISO della versione scelta, che puoi selezionare direttamente nel nostro webinterface. In alternativa, puoi usare un ISO personalizzato, per cui abbiamo una guida [ISO personalizzata](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Se vedi questa schermata nella console remota, significa che l’ISO è stato caricato correttamente e possiamo partire con il setup.
Scegli la lingua desiderata e clicca su "Avanti" per continuare.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clicca su "Installa ora" per avviare il processo di setup.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows ora richiede un product key. Inseriscilo se ne hai uno.

:::note
Noi non vendiamo licenze Windows, devi acquistare la chiave da solo.
:::

Puoi comprare product key Windows in vari shop online, assicurati che siano validi per la versione di Windows che stai installando, perché ci sono diverse edizioni.
Ad esempio, in Windows Server 2019 ci sono due edizioni: quella standard e la datacenter.
Se non sei sicuro di cosa ti serve, clicca su "Non ho un product key", potrai aggiungerlo in seguito.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Ora seleziona la versione che vuoi installare.
Assicurati di scegliere la versione giusta, non potrai cambiarla dopo.
Ricorda anche di scegliere una versione con "(Desktop Experience)", altrimenti Windows sarà solo a riga di comando.
Dopo aver scelto, seleziona la versione e clicca su "Avanti".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Accetta i termini e procedi cliccando su "Avanti".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Seleziona 'Personalizzata' se vuoi fare un’installazione pulita di Windows. Puoi scegliere "Aggiorna" se vuoi aggiornare da 2016 a 2019, per esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

Nel passaggio successivo devi creare le partizioni sul tuo server dedicato, di solito non ce ne sono ancora.
Se ci sono voci, selezionale e clicca su elimina.

Puoi creare più partizioni piccole o una grande. Se crei partizioni piccole, ti consigliamo almeno 50GB per la partizione principale di Windows.
Clicca su "Nuovo" per creare una partizione.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Se vuoi una sola partizione grande, clicca su Applica. Il setup prenderà automaticamente la dimensione massima disponibile.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows richiede una piccola partizione di sistema, accetta cliccando su "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Se sei soddisfatto delle partizioni, scegli quella su cui installare Windows e clicca su "Avanti".
Il setup farà tutto da solo, ci vorranno alcuni minuti.
Non serve fare altro finché non finisce.

## Configurazione

Quando il setup è finito, Windows ti chiederà di impostare una password.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Imposta la password che vuoi.

:::info
Consigliamo di scegliere una password forte con caratteri speciali.

Se dimentichi la password, non c’è modo di recuperarla, quindi scrivila da qualche parte.
:::

Dopo aver impostato la password, arrivi alla schermata di blocco di Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Per accedere a Windows, premi la combinazione di tasti `CTRL + ALT + CANC`. Puoi farlo facilmente dalla console remota.
(La trovi nella console Java sotto "Tastiera")
Ora accedi con la tua password.

Nel passaggio successivo devi abilitare il Desktop Remoto, così potrai connetterti facilmente al server.
Apri Esplora Risorse e fai clic destro su "Questo PC".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Scegli Proprietà.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Apri "Impostazioni di sistema remote".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accetta l’avviso del firewall con "OK" e clicca su "Applica".

Ora apri Desktop Remoto sul tuo PC e inserisci l’indirizzo IP del tuo server ZAP.
Il nome utente è sempre Administrator e la password quella che hai impostato prima.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Puoi ignorare l’avviso del certificato, spunta "Non chiedermi più per le connessioni a questo computer".
Conferma tutto cliccando su "Sì".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Ora Desktop Remoto si connetterà al tuo server dedicato e potrai usarlo.
La configurazione di rete viene applicata automaticamente via DHCP, quindi non serve altro.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Se hai altre domande o problemi, il nostro supporto è qui per aiutarti!
:::

## Conclusione
Congratulazioni, hai installato con successo Windows Server 2016 sul tuo server dedicato. Per qualsiasi domanda o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per darti una mano! 🙂