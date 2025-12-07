---
id: redm-licensekey
title: "RedM: Aggiungi una License Key Personalizzata"
description: "Scopri come creare e gestire la tua license key RedM per sbloccare i vantaggi dell’abbonamento e personalizzare il setup del tuo server → Scopri di più ora"
sidebar_label: License Key Personalizzata
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Di default, il tuo Game Server RedM viene fornito con una license key generata automaticamente. Modificarla e usare una tua license key personalizzata può essere super utile per vari motivi, come accedere ai vantaggi dell’abbonamento RedM Element Club tipo Onesync, cambiare il proprietario del server col tuo nome e molto altro. In questa guida ti spieghiamo come creare e aggiungere la tua license key personalizzata al tuo Game Server RedM.

<InlineVoucher />

## Preparazione

Per iniziare a creare la key, vai sul sito ufficiale **[Cfx.re Portal](https://portal.cfx.re/)** e fai il login col tuo account del forum Cfx.re. Se non ce l’hai ancora, puoi registrarti facilmente.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nuovo Cfx.re Portal
Il Cfx.re Portal è la nuova casa per tutto ciò che riguarda RedM, sostituendo il vecchio RedM Keymaster e Patreon. Qui puoi gestire le license key del server, accedere agli asset acquistati e gestire il tuo abbonamento RedM tutto in un unico posto.

Ti consigliamo di leggere il [post ufficiale sul blog](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) per info su come migrare gli abbonamenti Patreon al nuovo Cfx.re Portal e mantenere tutti i tuoi vantaggi.
:::

## Generare la License Key

Dopo il login, vai nella sezione **Servers** dalla barra di navigazione in alto per accedere all’area principale di gestione delle key. Questo sostituisce il vecchio sito RedM Keymaster con un portale tutto-in-uno. Puoi anche aggiornare qualsiasi license key usando l’opzione **Re-Activate** su questa pagina.

Clicca su **Generate Key** per aprire la finestra di registrazione.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Inserisci un nome utile per la key così da riconoscerla facilmente in futuro. Quando sei pronto, clicca su genera.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Ora vedrai una nuova voce nella tabella con la key appena generata. Copia la key usando i pulsanti azione a destra e tienila pronta per il prossimo step.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Aggiungere la Key al Server

Con la license key pronta, devi ora sostituire quella esistente sul tuo server RedM con quella nuova. Per farlo, accedi al pannello txAdmin del tuo server RedM tramite la dashboard web del server. Usa le credenziali indicate per il login.

Una volta dentro txAdmin, vai su **CFG Editor** nel menu a sinistra per aprire il file `server.cfg`. Trova la riga con il parametro `sv_licensekey` e sostituiscila con la tua license key personalizzata. Premi salva per confermare le modifiche.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Conclusione

Dopo aver configurato la license key personalizzata, riavvia il server per applicarla. Hai aggiunto con successo una license key personalizzata al tuo Game Server RedM. Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />