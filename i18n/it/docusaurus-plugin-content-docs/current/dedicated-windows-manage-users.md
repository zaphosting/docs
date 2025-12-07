---
id: dedicated-windows-manage-users
title: "Dedicated Server: Gestisci gli Utenti su Windows Server"
description: "Scopri come gestire più utenti su Windows Server per un accesso remoto sicuro e simultaneo con ambienti personalizzati → Scopri di più ora"
sidebar_label: Aggiungi & Gestisci Utenti
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Windows OS offre una gestione utenti integrata che ti permette di gestire facilmente utenti aggiuntivi. Alcuni vantaggi dell’utilizzo di utenti individuali includono l’accesso simultaneo (fino a 2) tramite Remote Desktop con credenziali proprie, desktop e file personali, oltre a un sistema di permessi semplice da usare. In questa guida vedremo come gestire gli utenti sul tuo server Windows.

## Preparazione

Inizia collegandoti al tuo server Windows tramite RDP. Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](dedicated-windows-userdp.md).

:::important Privilegi Amministrativi
Assicurati di usare l’utente **Administrator** o un utente con privilegi amministrativi per accedere al server Windows, altrimenti non potrai gestire gli utenti.
:::

Ogni utente che crei sul server Windows potrà usare le proprie credenziali per connettersi tramite Remote Desktop. Ogni utente avrà il proprio desktop, file e programmi indipendenti dagli altri, visibili solo agli utenti con privilegi amministrativi. I programmi installati per tutti gli utenti saranno accessibili globalmente.

Con la licenza standard di Windows Server, **2** account possono accedere e usare il server contemporaneamente. Se si supera questo limite e un altro utente si connette, il primo utente connesso verrà disconnesso a favore del nuovo. Non c’è invece limite al numero di account utente che puoi creare.

## Accesso alla Gestione Utenti

La gestione degli account utente si fa tramite il Pannello di Controllo. Apri il menu Start sul tuo server Windows e seleziona **Pannello di Controllo**. Poi scegli l’opzione **Account utente** che ti porterà a un sotto-menu.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Seleziona di nuovo **Account utente** nel menu per arrivare alla panoramica.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Nella pagina panoramica, clicca su **Gestisci un altro account** per accedere alla sezione **Gestisci Account**, usata principalmente per gestire gli utenti.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Ora sei pronto per gestire gli utenti sul tuo server Windows, procedi con la sezione che corrisponde all’azione che vuoi fare.

## Creare un Nuovo Utente

Per iniziare la creazione di un utente, seleziona l’opzione **Aggiungi un account utente** nella sezione **Gestisci Account**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Si aprirà una finestra dove dovrai inserire alcune informazioni per l’account, come nome utente, password e suggerimento per la password. Assicurati che la password sia forte, altrimenti potresti ricevere un errore di validazione.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Quando hai finito, clicca su Avanti e il nuovo utente sarà creato.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Infine, devi aggiungere il nuovo utente alla lista di accesso remoto per permettere al server di accettare connessioni RDP da quell’utente. Vai al **Pannello di Controllo** e apri **Sistema e sicurezza**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Qui trova e seleziona **Consenti accesso remoto** per aprire un nuovo menu.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Nel menu, clicca su **Seleziona utenti...** in basso per vedere gli utenti attualmente autorizzati all’accesso remoto.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

Nel menu che appare, clicca su **Aggiungi...** per aprire la finestra di selezione utenti e poi su **Avanzate...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

La finestra si espanderà per facilitare la ricerca. Usa il pulsante **Trova ora** per ottenere la lista utenti e trova il nuovo utente, in questo esempio `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Seleziona l’utente e usa i pulsanti **OK** per chiudere tutte le finestre e confermare le modifiche.

Hai creato con successo un nuovo utente sul tuo server Windows con accesso remoto. Prova a connetterti via RDP usando le credenziali del nuovo utente per verificare che tutto funzioni.

## Gestire gli Utenti

Puoi gestire facilmente tutti gli utenti dalla sezione **Gestisci Account**. Seleziona semplicemente l’utente che vuoi modificare.

:::important Privilegi Amministrativi
Per gestire gli utenti devi usare l’account principale **Administrator** o un utente con tipo account amministratore che ha tutti i privilegi necessari.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

In questa pagina potrai usare varie funzioni per gestire l’utente, come modificare nome utente, password, tipo di account o cancellare l’utente.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)