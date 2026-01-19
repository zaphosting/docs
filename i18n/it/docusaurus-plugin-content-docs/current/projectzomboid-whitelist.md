---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Info su come mettere in whitelist il tuo server Project Zomboid su ZAP-Hosting → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La whitelist è una modalità di controllo accessi che richiede di creare esplicitamente gli account utenti prima che possano entrare. In Project Zomboid questo si fa solitamente disabilitando la registrazione aperta nella configurazione del server e aggiungendo gli utenti tramite comandi console.

<InlineVoucher />


## Attivare la Whitelist

Connettiti al tuo server via FTP e apri il file di configurazione del server. Di solito si trova in `Zomboid/Server/` ed è chiamato come il tuo server, ad esempio `servertest.ini` o `<ServerName>.ini`. Trova la voce `Open` e impostala su false.

```ini
Open=false
```

Salva il file e riavvia il server. Con la registrazione aperta disabilitata, solo gli account che crei potranno entrare.

## Gestire i Giocatori in Whitelist

Apri la Live Console nel pannello di gestione del gameserver ZAP-Hosting e crea gli account per i giocatori autorizzati. Usa il comando adduser con username e password.

```text
/adduser "username" "password"
```

Per togliere l’accesso a un utente, rimuovilo dalla whitelist con il comando dedicato.

```text
/removeuserfromwhitelist "username"
```

Se prima avevi la registrazione aperta e vuoi convertire gli account già connessi in whitelist, usa il comando che aggiunge tutti gli utenti attualmente connessi alla whitelist.

```text
/addalltowhitelist
```

## Verificare che la Whitelist Funzioni

Dopo aver impostato `Open=false`, un nuovo utente non aggiunto con `/adduser` non dovrebbe riuscire a entrare. Prova con un account in whitelist per confermare l’accesso.

Se utenti non in lista riescono ancora a entrare, controlla di aver modificato il file `<ServerName>.ini` attivo e di aver riavviato il server.

## Conclusione

Se hai seguito tutto correttamente, la tua whitelist è attiva e puoi controllare esattamente chi può entrare nel server. Se l’accesso non funziona ancora come previsto, riavvia il server una volta e ricontrolla il file o l’output dei comandi per confermare che la modifica sia stata applicata.

Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />