---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: "Informazioni su come mettere in whitelist il tuo server 7 Days To Die su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può entrare nel tuo server. In 7 Days To Die questo viene gestito comunemente nel file serveradmin.xml, che contiene gli account Steam in whitelist. Una volta attivata, solo i giocatori elencati lì possono connettersi.

<InlineVoucher />


## Attivare la Whitelist

Connettiti al tuo server via FTP e trova il file `serveradmin.xml`. Nella maggior parte delle installazioni hosting si trova nella cartella save, di solito in un percorso simile a `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` o direttamente in `7-days-to-die/Saves/serveradmin.xml` a seconda della struttura del provider. Apri il file e cerca la sezione `<whitelist>` dentro `<adminTools>`.

Aggiungi almeno uno SteamID64 alla whitelist. Il formato qui sotto segue la struttura di default usata dal gioco.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Salva il file e riavvia il server così la nuova whitelist viene caricata. Se il tuo file contiene solo esempi commentati, assicurati che la tua riga `<user ... />` non sia dentro un commento XML.

## Gestire i Giocatori in Whitelist

Per aggiungere un altro giocatore, ripeti la stessa modifica in `serveradmin.xml` aggiungendo un’altra voce `<user ... />` dentro `<whitelist>`. Usa lo SteamID64 del giocatore per `steamID`.

Per rimuovere un giocatore, cancella la riga corrispondente `<user ... />` dalla sezione `<whitelist>`, salva e riavvia il server.

Se preferisci usare i comandi, apri la Live Console nella gestione del gameserver ZAP-Hosting e usa i comandi whitelist integrati per aggiungere o rimuovere giocatori. Le modifiche fatte tramite comandi saranno comunque riflesse negli stessi dati whitelist usati dal server al riavvio.

## Verificare il Funzionamento della Whitelist

Dopo il riavvio, prova a connetterti con un account non presente nella whitelist. Il tentativo di accesso dovrebbe essere rifiutato. Poi prova con un account in whitelist per confermare che l’accesso funziona.

Se il server lascia ancora entrare giocatori non in whitelist, ricontrolla che le voci whitelist non siano commentate e che tu abbia modificato il file `serveradmin.xml` corretto per il salvataggio attivo.

## Conclusione

Se hai seguito correttamente tutte le sezioni sopra, la tua whitelist è ora attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server una volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />