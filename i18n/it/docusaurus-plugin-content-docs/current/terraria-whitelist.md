---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Info su come mettere in whitelist il tuo server Terraria su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una lista di accesso che limita chi può entrare nel tuo server. Per l’hosting di Terraria, il metodo più comune è usare un server TShock e attivare la sua funzione whitelist, gestita tramite un file e comandi dedicati.

<InlineVoucher />

## Attivare la Whitelist

Connettiti al tuo server via FTP e verifica che stia girando TShock. Poi trova il file di configurazione `tshock/config.json` e abilita la whitelist modificando questa riga:

```
"EnableWhitelist": true
```

Salva il file e riavvia il server. Ora TShock richiederà l’approvazione tramite whitelist per ogni connessione in entrata.

## Gestire i Giocatori in Whitelist

Per aggiungere un IP, apri la Live Console nel pannello di gestione ZAP-Hosting e usa il comando whitelist con l’indirizzo IP del giocatore.

```text
whitelist 203.0.113.25
```

TShock salva la lista in `tshock/whitelist.txt`. Per rimuovere un IP, connettiti via FTP, apri quel file, cancella la riga con l’IP, salva e riavvia il server.

```txt
203.0.113.25
198.51.100.10
```

## Verificare che la Whitelist Funzioni

Dopo il riavvio, prova a connetterti da un IP non in lista: l’accesso dovrebbe essere bloccato. Poi prova da un IP che è in whitelist.

Se i giocatori riescono ancora a entrare senza essere in lista, ricontrolla che `EnableWhitelist` sia impostato su true in `config.json` e che il server sia effettivamente partito come TShock.

## Conclusione

Se hai seguito tutto alla lettera, la tua whitelist è attiva e puoi controllare chi può entrare nel server. Se l’accesso non funziona come previsto, riavvia il server un’altra volta e ricontrolla file e output comandi per assicurarti che la modifica sia stata applicata.

Per qualsiasi domanda o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂



<InlineVoucher />