---
id: windrose-firststeps-connect
title: "Windrose: Connettersi al server"
description: "Scopri come connetterti al tuo server Windrose usando il codice invito corretto e stabilire una connessione affidabile senza problemi comuni -> Scopri di più ora"
sidebar_label: Connettersi al server
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Non sai come connetterti al tuo server **Hytale** o cosa ti serve per iniziare? Nessun problema, ci pensiamo noi! Ti guideremo passo passo su tutto ciò che ti serve. Dai tool e informazioni necessarie fino al processo di connessione vero e proprio, con consigli chiave per assicurarti un’esperienza fluida e senza intoppi. Segui la nostra guida e sarai connesso in un attimo!

## Ottieni i dettagli del server
Prima di connetterti, devi recuperare le informazioni rilevanti del server dalla tua interfaccia web del game server ZAP-Hosting. Per Windrose, il dettaglio più importante è il **codice invito**.

Puoi trovare il codice invito nella gestione del game server sotto i file di configurazione del server in `InviteCode.txt`.

:::info Requisito Codice Invito
Per Windrose, il codice invito è il valore chiave usato per connettersi al server. Se usi un codice sbagliato o obsoleto, la connessione potrebbe fallire.
:::

Le seguenti informazioni sono utili prima di iniziare:

| Informazione | Scopo |
| --- | --- |
| Contenuto di `InviteCode.txt` | Necessario per connettersi al server Windrose |
| Nome del server | Ti aiuta a identificare il server corretto |
| Password server opzionale | Potrebbe essere richiesta a seconda della configurazione |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Stabilisci la connessione al server
Una volta ottenuto il codice invito, puoi connetterti direttamente al server Windrose tramite il gioco.

### Trova il codice invito nella gestione del server
Apri l’interfaccia web del tuo game server ZAP-Hosting e vai nell’area di configurazione del server. Trova il file chiamato `InviteCode.txt` e aprilo.

All’interno di questo file troverai il codice invito attuale per il tuo server. Copia questo valore esattamente come mostrato.

:::note Valori Segnaposto
Se vedi un valore come `[your_invite_code]` in questa guida, sostituiscilo con il codice reale presente nel tuo file `InviteCode.txt`.
:::

### Entra nel server in Windrose
Avvia Windrose e apri il menu di connessione al server o multiplayer del gioco. Cerca l’opzione che ti permette di unirti a un server usando un codice invito.

Inserisci il codice invito preso da `InviteCode.txt` nel campo richiesto e conferma la connessione. Se il server è protetto, potrebbe anche esserti chiesto di inserire una password in questa fase.

| Campo | Cosa inserire |
| --- | --- |
| Codice invito | `[your_invite_code]` |
| Password | `[your_server_password]` se configurata |

Dopo aver inviato il codice invito, il gioco dovrebbe stabilire la connessione con il tuo server Windrose.

:::tip Copia il Codice Esattamente
Per evitare problemi di connessione, copia e incolla il codice invito direttamente da `InviteCode.txt` se possibile. Anche un piccolo errore può impedire la connessione.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Problemi comuni e soluzioni
Se la connessione al server non funziona subito, puoi controllare le cause più comuni qui sotto.

### Il codice invito non funziona
Se il codice invito viene rifiutato, verifica prima di tutto di aver copiato correttamente tutto il contenuto di `InviteCode.txt`. Assicurati che non ci siano spazi extra prima o dopo il codice.

È anche possibile che il codice invito sia cambiato dopo un riavvio del server, un aggiornamento o una modifica alla configurazione. In tal caso, riapri `InviteCode.txt` e usa il valore aggiornato.

### Il server non è ancora pronto
Se il server è ancora in fase di avvio o non ha completato l’inizializzazione, i giocatori potrebbero non riuscire a connettersi anche con il codice invito corretto.

Controlla la console del server e i log nella gestione del game server per confermare che il server sia partito correttamente e sia completamente online.

:::caution Attendi il Completo Avvio
Non tentare di connetterti mentre il server sta ancora caricando o riavviando. Questo può causare tentativi di connessione falliti anche se il codice invito è corretto.
:::

### Problemi di configurazione o file
Se il server rimane irraggiungibile, potrebbe esserci un problema di configurazione o file corrotti che impediscono l’avvio corretto. In questo caso, rivedi le modifiche recenti fatte al server e controlla i log per eventuali errori.

Se necessario, ripristina un backup funzionante o annulla le modifiche recenti alla configurazione.

### Nessuna soluzione o aiuto utile
Se non riesci ancora a connetterti dopo aver controllato il codice invito, lo stato del server e la configurazione, contatta il supporto ZAP-Hosting tramite la pagina ufficiale [supporto](https://zap-hosting.com/en/customer/support/).

Quando crei una richiesta, includi quanti più dettagli possibile, come:

- Il problema esatto che stai riscontrando
- Se il server si avvia correttamente
- Se il codice invito in `InviteCode.txt` è visibile
- Eventuali messaggi di errore rilevanti dalla console o dai log

## Conclusione
Congratulazioni, ti sei connesso con successo al tuo server Windrose usando il codice invito. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂