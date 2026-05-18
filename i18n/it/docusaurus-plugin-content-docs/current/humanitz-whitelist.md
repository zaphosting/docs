---
id: humanitz-whitelist
title: "HumanitZ: Gestione della Whitelist"
description: "Scopri come gestire la whitelist e controllare l'accesso al tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

La whitelist ti permette di controllare esattamente chi può entrare nel tuo server HumanitZ. Quando attivata, solo i giocatori con Steam ID presenti nel file dei giocatori autorizzati potranno connettersi.

<InlineVoucher />

## Configurazione

La funzionalità whitelist è gestita all’interno del file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Configs**. Per attivare la modalità whitelist, trova e imposta il seguente parametro:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Attiva la modalità whitelist. Solo i giocatori elencati possono entrare.
- `OnlyAllowedPlayers=0` – Disattiva la modalità whitelist. Tutti i giocatori possono entrare.

Dopo aver attivato la modalità whitelist, devi creare manualmente il file della whitelist.

Connettiti al tuo server via [FTP](gameserver-ftpaccess.md) usando il client FTP che preferisci. Una volta connesso, vai nella directory principale del server e crea un nuovo file chiamato `F_MVPAccess.txt`. All’interno di questo file, inserisci un **Steam ID unico per riga** per ogni giocatore che vuoi autorizzare.

```
76561198000000001
76561198000000002
```

Salva il file dopo aver aggiunto gli Steam ID.

## Monitoraggio dell’Attività dei Giocatori

HumanitZ fornisce file aggiuntivi per tracciare le connessioni dei giocatori. `F_ConnectedPlayers.txt` mostra i giocatori attualmente connessi, mentre `PlayerConnectedLog.txt` registra tutte le connessioni e disconnessioni, includendo il nome Steam, lo Steam ID unico e i timestamp.

Questi file sono utili per identificare gli Steam ID e monitorare l’attività del server. Dopo aver modificato i file di whitelist o ban, salva tutto e riavvia il server per applicare correttamente le modifiche.

## Conclusione

Complimenti! Attivando la modalità whitelist e gestendo i file `F_MVPAccess.txt` e `F_BannedPlayers.txt`, hai configurato con successo il controllo accessi sul tuo server HumanitZ.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />