---
id: dedicated-windows-2022
title: "Dedicated Server: Installazione di Windows Server 2022"
description: "Scopri come installare e configurare Windows Server sul tuo server dedicato per prestazioni e sicurezza ottimali → Scopri di più ora"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Qui ti spieghiamo passo passo come installare e configurare il sistema operativo Windows Server sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info Windows Server 2022
I passaggi di setup e la dimostrazione in questa guida si basano sul sistema operativo Windows Server 2022 (look 2019 - stesso design). Versioni OS più vecchie possono differire nella struttura e nell’aspetto, ma la procedura è simile.
:::

:::warning Versione più recente disponibile / Dettagli EOL

L’ultima versione di Windows Server di Microsoft è la [2025](dedicated-windows.md). Ti consigliamo di usare sempre la versione più recente per progetti a lungo termine.

Il supporto per le versioni più vecchie di Windows Server verrà interrotto prima o poi. Le scadenze previste per la versione 2022 sono:

- Supporto attivo: 13.06.2026
- Supporto sicurezza: 14.10.2031

:::

## Preparazione
Per installare e configurare un sistema operativo, è importante montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale
2. Montaggio tramite iLO (Virtual Media)
3. Montaggio tramite iLO (Remote Console)

Se non hai mai montato un file ISO, dai un’occhiata alle nostre guide [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).

## Installazione
Per installare Windows Server ti serve un file ISO della versione che preferisci. Puoi scegliere la versione Windows desiderata direttamente dal nostro webinterface oppure usare un ISO personalizzato, per cui abbiamo una guida dedicata [ISO personalizzata](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Se vedi questa schermata nella console remota, significa che l’ISO è stato caricato correttamente e possiamo partire con il setup.
Scegli la lingua che preferisci e clicca su "Avanti" per continuare.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clicca su "Installa ora" per avviare il processo di setup.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows ora ti chiede il product key. Inseriscilo se ce l’hai.

:::note
Noi non vendiamo licenze Windows, devi acquistare il product key autonomamente.
:::

Puoi comprare product key Windows in vari shop online, assicurati che siano validi per la versione Windows che stai installando, perché ci sono diverse edizioni.
Ad esempio, Windows Server 2022 ha due edizioni principali: quella standard e la Datacenter.
Se non sei sicuro di quale ti serve, clicca su "Non ho un product key", potrai inserirlo in seguito.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Ora seleziona la versione che vuoi installare.
Assicurati di scegliere quella giusta, non potrai cambiarla dopo.
Ricordati anche di scegliere una versione con "(Desktop Experience)", altrimenti Windows sarà solo a riga di comando.
Dopo aver scelto, seleziona la versione e clicca su "Avanti".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Accetta i termini e procedi cliccando su "Avanti".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Se vuoi fare un’installazione pulita di Windows, scegli "Personalizzata". Puoi scegliere "Aggiorna" se vuoi aggiornare da 2016 a 2022, per esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

Nel passaggio successivo devi creare le partizioni sul tuo server dedicato, di solito non ce ne sono ancora.
Se ci sono voci, selezionale e clicca su elimina.

Puoi creare più partizioni piccole o una grande. Se crei partizioni piccole, ti consigliamo almeno 50GB per la partizione principale di Windows.
Clicca su "Nuovo" per crearne una.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Se vuoi una sola partizione grande, clicca su Applica. Il setup prenderà automaticamente la dimensione massima disponibile.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows richiede una piccola partizione di sistema, accetta cliccando su "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Se sei soddisfatto delle partizioni, scegli quella su cui vuoi installare Windows e clicca su "Avanti".
Il setup di Windows ora procede da solo, ci vorranno alcuni minuti.
Non serve fare altro finché non finisce.

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

Per accedere a Windows, premi la combinazione di tasti `CTRL + ALT + CANC`. Puoi farlo facilmente dalla console remota.
(La trovi nella console Java sotto "Tastiera")
Ora effettua il login con la password.

Il passo successivo è abilitare il Desktop Remoto, così puoi connetterti facilmente al server.
Apri Esplora risorse e fai clic destro su "Questo PC".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Scegli Proprietà.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Apri "Impostazioni di sistema remote".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accetta l’avviso del firewall con "OK" e clicca su "Applica".

Ora apri il Remote Desktop sul tuo PC e inserisci l’indirizzo IP del tuo server ZAP.
L’username è sempre Administrator e la password quella che hai impostato prima.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Puoi ignorare l’avviso del certificato, spunta la casella "Non chiedermi più per le connessioni a questo computer".
Conferma tutto cliccando su "Sì".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop ora stabilisce la connessione al tuo server dedicato e puoi usarlo.
La configurazione di rete viene applicata automaticamente via DHCP, quindi non serve altro.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Se hai altre domande o problemi, il nostro supporto è qui per aiutarti!
:::

## Conclusione
Congratulazioni, hai installato con successo Windows Server 2022 sul tuo server dedicato. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per darti una mano! 🙂