---
title: "Over the Top WWI: Configura i Messaggi del Server"
description: "Scopri come impostare messaggi automatici sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Messaggi del Server
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I messaggi automatici del server sono un modo super utile per comunicare info importanti ai giocatori durante la partita. Puoi usarli per condividere le regole, promuovere il tuo server Discord o dare consigli utili.

Su un server **Over the Top WWI**, i messaggi vengono mostrati a intervalli regolari, così tutti i giocatori ricevono le info importanti senza che tu debba intervenire manualmente.

<InlineVoucher />

## Configurazione

I messaggi del server si configurano nel file di configurazione del server. Puoi accedere e modificare questo file dal tuo **pannello di gestione del gameserver** sotto **Configs**. Trova e apri il file `ServerConfiguration.ini`. All’interno, cerca questi parametri:

```
ShowServerTimedMessages = 1
AddServerMessage = Join the official Discord! discord.gg/example
AddServerMessage = Please report any bugs on our Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` attiva o disattiva i messaggi automatici. Metti `1` per attivare o `0` per disattivare.
- `AddServerMessage` definisce i messaggi che verranno mostrati. Puoi aggiungere più righe per far ruotare messaggi diversi durante la partita.
- `ServerMessagesTimer` imposta l’intervallo tra i messaggi in secondi. Per esempio, `120` mostra un messaggio ogni 2 minuti.

Puoi personalizzare e ampliare i tuoi messaggi aggiungendo altre righe:

```
AddServerMessage = Benvenuto sul server!
AddServerMessage = Rispetta le regole e gli altri giocatori.
AddServerMessage = Unisciti al nostro Discord per aggiornamenti.
```

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. I messaggi appariranno automaticamente in-game all’intervallo impostato.

## Conclusione

Complimenti! Hai configurato con successo i messaggi automatici sul tuo **server Over the Top WWI**. Così tieni i giocatori sempre aggiornati e migliori la comunicazione sul server.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />