---
id: rust-custom-map
title: "Rust: Usa una mappa personalizzata sul tuo server"
description: "Scopri come configurare e far girare una mappa personalizzata sul tuo server Rust usando l'impostazione Level URL → Scopri di più ora"
sidebar_label: Mappa Personalizzata
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le mappe personalizzate permettono ai proprietari di server Rust di creare esperienze di gioco uniche che vanno oltre le mappe procedurali di default. Molte community usano mappe personalizzate per introdurre nuovi monumenti, layout del terreno modificati, eventi speciali o ambienti completamente ridisegnati.

Queste mappe vengono solitamente create con strumenti come **RustEdit** e distribuite tramite piattaforme come **Lone Design**, **Codefling** o repository di mappe della community. Una volta che hai un file mappa o un link per scaricarla, puoi configurarla direttamente nelle impostazioni del tuo server.

<InlineVoucher />



## Preparazione

Prima di configurare una mappa personalizzata, ti serve un **URL valido per il download della mappa**. Le mappe personalizzate sono di solito ospitate su piattaforme di distribuzione mappe o fornite dai creatori delle mappe.

L’URL punta tipicamente a un file `.map` o a un pacchetto mappa scaricabile. Assicurati che il link sia accessibile pubblicamente così il server Rust può scaricarlo all’avvio. Esempio di URL mappa:

```
https://example-map-host.com/maps/custommap.map
```



## Configurazione

Per configurare una mappa personalizzata sul tuo server Rust, apri il **pannello di gestione del gameserver** e vai su **Impostazioni**.

Trova il campo di configurazione chiamato **Level URL**. Questa impostazione permette al server di scaricare e caricare una mappa Rust personalizzata all’avvio. Incolla il tuo URL mappa personalizzata nel campo **Level URL**. Per esempio:

```
https://example-map-host.com/maps/custommap.map
```

Una volta inserito l’URL, salva le impostazioni nel pannello. Quando il server si avvierà, Rust scaricherà automaticamente la mappa dall’URL fornito e la caricherà invece di generare una mappa procedurale.

Se la tua mappa personalizzata richiede parametri di configurazione aggiuntivi (per esempio seed specifici o dimensioni del mondo), questi di solito sono forniti dal creatore della mappa e potrebbero dover essere aggiunti anche alla configurazione del server.

Dopo aver salvato la configurazione, **riavvia il server** così la mappa personalizzata potrà essere scaricata e caricata.



## Note importanti

Le mappe personalizzate devono essere compatibili con la versione del server Rust che stai usando. Se il file mappa è obsoleto o corrotto, il server potrebbe non avviarsi o tornare a una mappa procedurale.

Mappe personalizzate molto grandi possono anche aumentare i tempi di avvio del server perché deve scaricare e preparare la mappa prima che sia disponibile per i giocatori.

Se i giocatori non riescono a connettersi dopo il cambio mappa, assicurati che l’URL della mappa sia corretto e accessibile da internet.



## Conclusione

Congratulazioni! Hai configurato con successo una mappa personalizzata per il tuo server Rust. Per domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />