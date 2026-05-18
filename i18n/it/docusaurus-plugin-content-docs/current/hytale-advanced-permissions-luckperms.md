---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Permessi Avanzati con LuckPerms"
description: "Scopri come installare e configurare LuckPerms per gestire permessi avanzati e ranghi su un server Hytale → Scopri di più ora"
sidebar_label: Permessi Avanzati
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Gestire i permessi su un server Hytale diventa sempre più importante quando inizi a lavorare con ruoli staff, ranghi personalizzati o vantaggi speciali per i giocatori. Mentre il sistema di permessi base in-game va bene per l’amministrazione semplice, arriva presto al limite quando vuoi un controllo dettagliato su comandi e funzionalità.

**LuckPerms** offre un sistema di permessi robusto e altamente personalizzabile per server Hytale. Ti permette di definire con precisione quali permessi e comandi possono usare i vari giocatori o gruppi.

<InlineVoucher />



## Installare LuckPerms

Per installare LuckPerms, scarica prima l’ultima versione del file `.jar` di LuckPerms.  
Dopo il download, apri il pannello di gestione del server e ferma il server per caricare il mod in sicurezza.

Vai nella sezione **File** del tuo server e apri la cartella `mods`. Carica il file `.jar` di LuckPerms in questa cartella. Per una guida dettagliata su come installare mod, ti consigliamo di dare un’occhiata alla guida [Install Mods](hytale-mods).

Quando il caricamento è completato, riavvia il server. All’avvio, apri la console del server e verifica che LuckPerms stia funzionando correttamente. Se l’installazione è andata a buon fine, LuckPerms mostrerà messaggi di avvio nella console.



## Concedere i permessi iniziali

Dopo l’installazione, LuckPerms deve essere configurato prima di poter essere usato al meglio. Per iniziare a gestire i permessi, devi darti il permesso di usare i comandi LuckPerms. In console o in chat digita:

```
lp user <playername> permission set luckperms.* true
```

Questo dà al giocatore selezionato accesso completo ai comandi LuckPerms.



## Usare l’editor web di LuckPerms

LuckPerms include un editor web che offre un’interfaccia comoda per creare gruppi e gestire i permessi. Per generare una sessione editor, digita:

```
lp editor
```

LuckPerms stamperà un link per l’editor nella console. Apri questo link nel browser per accedere all’editor web.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Dentro l’editor, copia il **link comando** che vedi. Torna nella console del server e incolla il comando per stabilire la connessione e autorizzare la sessione editor.

```
/lp trusteditor XXXX-XXXX
```

Una volta connesso l’editor, puoi configurare utenti, gruppi e permessi direttamente dall’interfaccia web. Dopo aver fatto le modifiche, clicca su **Apply** per salvare. Se LuckPerms fornisce un comando apply, copialo e incollalo in console per finalizzare le modifiche.



## Creare un gruppo admin

Apri il link dell’editor nel browser e vai nella sezione **Groups**. Crea un nuovo gruppo cliccando sull’icona più e dai un nome al gruppo. Puoi anche configurare dettagli extra come nome visualizzato, peso, gruppo genitore, prefisso/suffisso.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Dopo aver creato il gruppo, seleziona il gruppo `admin` nell’editor e aggiungi i permessi. Per dare permessi completi di Hytale al gruppo inserisci: 

```
hytale.*
```

Questo permesso dà accesso completo a tutte le funzionalità di Hytale. Dopo aver aggiunto i permessi, assegna un giocatore al gruppo.  
Nell’editor, vai nella sezione **Users**, seleziona l’utente desiderato e aggiungi il gruppo `admin` sotto **Parent groups**.

Infine, clicca su **Apply** per salvare le modifiche. Se richiesto, incolla il comando apply in console.



## Comandi comuni di LuckPerms

LuckPerms si può gestire sia tramite l’editor web che direttamente con i comandi. Ecco i comandi più usati per gestire i permessi:

| Comando                                                      | Descrizione                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Aggiunge il giocatore al gruppo di permessi.                 |
| `/lp user <playername> parent remove <group>`                | Rimuove il giocatore dal gruppo di permessi.                 |
| `/lp user <playername> permission set <permission>`          | Concede il permesso al giocatore.                            |
| `lp user <playername> permission settemp <permission> true <duration>` | Concede un permesso temporaneo al giocatore per una durata come `1h` per 1 ora o `1m` per 1 minuto. |
| `/lp user <playername> permission unset <permission>`        | Rimuove il permesso dal giocatore.                           |
| `/lp group <group> permission set <permission>`              | Concede il permesso al gruppo.                               |
| `/lp group <group> permission unset <permission>`            | Rimuove il permesso dal gruppo.                              |



## Conclusione

LuckPerms è la soluzione potente per gestire permessi avanzati su server Hytale. Usando gruppi, permessi e l’editor web, puoi creare un sistema di ruoli strutturato che cresce con la tua community.

Una volta configurato, LuckPerms rende facile mantenere ranghi staff, vantaggi giocatori e controllo accessi, mantenendo l’amministrazione del server pulita, coerente e performante.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />