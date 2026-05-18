---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Configura le Impostazioni Chat"
description: "Scopri come configurare le impostazioni di chat e comunicazione sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Impostazioni Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le impostazioni della chat in **Over the Top WWI** controllano come i giocatori comunicano tramite testo durante il gioco. Regolare queste impostazioni ti permette di abilitare la comunicazione globale, limitare l’uso della chat o silenziare completamente i giocatori se necessario.

Una configurazione corretta della chat aiuta a mantenere l’ordine sul server e a migliorare l’esperienza complessiva dei giocatori.

<InlineVoucher />

## Configurazione

Le impostazioni della chat si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Configs**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` abilita o disabilita la comunicazione globale in chat

- `0` → Disabilitato  
- `1` → Abilitato

- `ServerMuteAll` disabilita tutta la chat dei giocatori quando abilitato

- `0` → Disabilitato  
- `1` → Abilitato

- `BannedWordsPathString` definisce il file usato per filtrare le parole vietate. Il file contiene una lista di termini bloccati che non saranno permessi in chat

Modifica queste impostazioni per controllare come i giocatori comunicano e per applicare le regole di moderazione della chat sul tuo server.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le nuove impostazioni della chat verranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo le impostazioni della chat sul tuo **server Over the Top WWI**. Ora puoi gestire la comunicazione tra i giocatori e mantenere un ambiente controllato e divertente.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />