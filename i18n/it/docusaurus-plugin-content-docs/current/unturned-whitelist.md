---
id: unturned-whitelist
title: "Unturned: Attiva e modifica la whitelist sul server"
description: "Scopri come proteggere il tuo server Unturned attivando e gestendo la whitelist per un accesso controllato dei giocatori → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Attiva la whitelist

La whitelist in Unturned ti permette di proteggere il tuo server consentendo solo ai giocatori selezionati presenti nella lista di connettersi. L’attivazione della whitelist avviene in gioco tramite comando. Serve avere i **permessi da owner**. Se non sai cosa sono e come assegnarli, dai un’occhiata a questa guida: [Diventa admin](unturned-becomeadmin.md)

Se hai seguito la guida e sei diventato admin con successo, ora puoi attivare la whitelist sul tuo server. Per farlo, apri la chat/console in gioco sul tuo server e digita questo comando:

```
/Whitelisted
```

La whitelist dovrebbe essere attiva ora e permetterà solo ai giocatori presenti nella lista di entrare nel server. Puoi aggiungere o rimuovere giocatori usando i comandi qui sotto.

## Gestisci la whitelist

**Aggiungi un giocatore alla whitelist:**

```
Permit [SteamID]/[Tag]
```

**Rimuovi un giocatore dalla whitelist:**

```
Unpermit [SteamID]
```

**Mostra tutti i giocatori autorizzati:**

```
Permits
```

<InlineVoucher />