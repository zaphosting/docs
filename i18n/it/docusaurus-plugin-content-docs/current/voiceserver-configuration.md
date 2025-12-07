---
id: voiceserver-configuration
title: "Voiceserver: Configurazione"
description: "Scopri come personalizzare le impostazioni del tuo server Teamspeak per un'esperienza su misura e una gestione utenti ottimizzata → Scopri di più ora"
sidebar_label: Configurazione server
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il server Teamspeak può essere configurato in modo personalizzato. Di seguito ti spieghiamo come configurare il tuo server. Vedremo come personalizzare impostazioni generali come il nome del server, icona, banner, permessi utenti, permessi di canali e gruppi server.

<InlineVoucher />

## Generale

**Webinterface**

Se vuoi fare la configurazione generale del tuo server tramite l’interfaccia web, puoi trovare le opzioni nella Teamspeak Server Administration sotto Impostazioni. La pagina delle impostazioni sarà così:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Client Teamspeak**

Se preferisci configurare il server direttamente dal client Teamspeak, puoi trovare le opzioni cliccando col tasto destro sul canale principale **TeamSpeak ]I[ Server** e poi su **Modifica Server Virtuale**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)


Dato che le impostazioni nell’interfaccia web sono pensate per essere semplici e non tutto è modificabile lì, questa guida si concentra sulla configurazione tramite client Teamspeak.



### Nome

Nel campo **Nome Server** puoi definire il nome del tuo server Teamspeak. Questo sarà visibile nella lista server, sul sito e ovunque venga mostrato.



### Banner

Se hai attivato l’opzione banner personalizzato, puoi aggiungere il tuo banner nel campo **Banner Gfx URL**. È importante inserire il link diretto all’immagine, altrimenti non verrà riconosciuta. Nel campo **URL** puoi impostare dove deve rimandare il banner quando qualcuno ci clicca sopra.

:::info
Se non hai attivato un banner personalizzato, il banner verrà sostituito automaticamente con quello di default di ZAP.
:::



### Slot (slot riservati)

Gli slot sono impostati da noi e non possono essere modificati. Però puoi configurare slot riservati: questi sono riservati nel caso il server Teamspeak sia pieno. Così gli utenti con i permessi giusti possono comunque connettersi.



### Messaggio di benvenuto

Qui puoi aggiungere un messaggio di benvenuto personalizzato. Questo messaggio verrà mostrato quando ti connetti. Può essere qualcosa del genere:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Livello di sicurezza

Il livello di sicurezza richiesto determina quanto tempo serve agli utenti per aumentare il livello di sicurezza della loro identità fino a quando questa è considerata abbastanza sicura. In pratica, riduce il rischio di spam e abusi. Più alto è il livello, più tempo ci vuole. Ecco una panoramica dei tempi:

- Livello 0-23 - generato in pochi secondi
- Livello 23-29 - generato in pochi minuti
- Livello 29-34 - generato in alcune ore
- Livello 35-39 - generato in alcuni giorni
- Livello 40-43 - generato in alcuni mesi
- Livello 44+ - generato in anni



### Gestione utenti (kick, ban, lista ban, lista reclami)

Puoi fare kick o ban cliccando col tasto destro sull’utente. In caso di ban, identità e IP vengono salvati nella lista ban, che trovi nella **barra di navigazione -> extra**. Da lì puoi rimuovere ban esistenti.

Trovi anche la lista reclami, una funzione di Teamspeak che permette agli utenti di segnalare altri utenti, il server o altro, nel caso non ci sia un admin online.



## Personalizza

Puoi creare più canali e gruppi server per personalizzare ancora di più il tuo server Teamspeak. Ti spieghiamo come fare.



### Canale

Per creare nuovi canali, fai **click destro** sotto i canali esistenti e poi clicca su **Crea canale**. Si aprirà una finestra popup dove puoi configurare il canale con queste opzioni: Nome canale, Password, Icona, Descrizione, Tipo di canale e altro.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Gruppi server

Per creare gruppi server aggiuntivi, clicca su **permessi** nella **barra di navigazione** e poi su **gruppi server**. Qui trovi una panoramica dei gruppi esistenti, i loro permessi e gli utenti assegnati. In fondo alla lista clicca sul **simbolo +** per creare un nuovo gruppo.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Permessi

Ora che sai come modificare le impostazioni generali e personalizzare il server con canali e gruppi, vediamo come gestire i permessi.



### Permessi: Utenti

I permessi degli utenti dipendono dai gruppi server assegnati. Di default, un utente riceve il gruppo **Normale**. Se vuoi aggiungere permessi, clicca col destro sull’utente, poi su Gruppi Server e assegna il gruppo desiderato.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Permessi: Canale

I permessi si possono definire per ogni canale. Ad esempio, puoi decidere quali utenti possono **entrare, iscriversi, descrivere, vedere, modificare, cancellare** il canale e **accedere al File Browser del canale**.



![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



Il valore di ogni campo dipende dal gruppo server. Se crei un gruppo chiamato **Member** e solo loro devono accedere al canale, il valore deve corrispondere a quello del gruppo server. Se il gruppo ha valore 50, allora devi mettere **50** nei campi corrispondenti.



### Permessi: Gruppi server

Per i permessi dei gruppi server ci sono diverse categorie personalizzabili, tra cui:

- Opzioni generali
- Gestione gruppi
- Aggiungi, rimuovi utenti, gestisci chiavi permessi
- Gestione utenti (sposta, kick, ban)
- Gestione canali
- Basi


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Puoi modificare questi permessi come vuoi. Per cambi più avanzati, vai nelle opzioni del client Teamspeak, poi su Applicazione e attiva il **Sistema avanzato di permessi**.


<InlineVoucher />