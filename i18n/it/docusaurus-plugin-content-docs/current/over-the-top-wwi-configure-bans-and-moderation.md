---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Configura ban e moderazione"
description: "Scopri come configurare le liste di ban e le impostazioni di moderazione sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Ban & Moderazione
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Gli strumenti di moderazione in **Over the Top WWI** ti permettono di controllare il comportamento dei giocatori e mantenere un ambiente giusto e divertente sul tuo server. Configurando le liste di ban e le impostazioni di moderazione, puoi limitare l’accesso, gestire le penalità e fornire istruzioni chiare ai giocatori.

Queste impostazioni sono particolarmente utili per server community dove serve una moderazione attiva.

<InlineVoucher />

## Configurazione

Le impostazioni di ban e moderazione si configurano all’interno del file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` definisce il file che contiene i giocatori bannati permanentemente  
- `TempBanPathstring` definisce il file che contiene i giocatori bannati temporaneamente  

- `CustomUnBanString` ti permette di definire un messaggio personalizzato che spiega ai giocatori come richiedere lo sban. Esempio: link Discord o sito web

### Uso del file ban

I file di ban si trovano nella directory del tuo server e contengono gli identificativi dei giocatori.

Ogni giocatore bannato deve essere elencato su una nuova riga all’interno del file:

```
SteamID1
SteamID2
SteamID3
```

Questi file vengono letti automaticamente dal server per bloccare l’accesso ai giocatori elencati. Modificando queste impostazioni puoi definire come gestire i ban e come i giocatori possono fare appello.

Dopo aver modificato il `ServerConfiguration.ini`, salva il file e riavvia il server. Le nuove impostazioni di moderazione saranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo le impostazioni di ban e moderazione sul tuo **server Over the Top WWI**. Ora puoi gestire efficacemente il comportamento dei giocatori e mantenere un ambiente server sotto controllo.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />