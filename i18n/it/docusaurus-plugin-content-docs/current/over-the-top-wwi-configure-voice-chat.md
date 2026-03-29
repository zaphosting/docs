---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Configura la Chat Vocale"
description: "Scopri come abilitare e configurare la chat vocale sul tuo server Over the Top WWI → Scopri di più ora"
sidebar_label: Chat Vocale
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

La chat vocale permette ai giocatori sul tuo server **Over the Top WWI** di comunicare direttamente durante il gioco. Questo migliora il coordinamento, il lavoro di squadra e l’immersione generale, soprattutto in scenari tattici.

Configurando le impostazioni della chat vocale, puoi decidere se permettere la comunicazione, regolare la qualità e definire come si comporta la chat vocale durante le partite.

<InlineVoucher />

## Configurazione

Le impostazioni della chat vocale si configurano nel file di configurazione del server. Puoi accedere e modificare questo file nel tuo **pannello di gestione del gameserver** sotto **Config**. Trova e apri il file di configurazione `ServerConfiguration.ini`. All’interno di questo file, cerca i seguenti parametri:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` abilita o disabilita la chat vocale sul server  
- `VoipQuality` controlla il livello di qualità della voce  
- `VoipDelay` aggiunge un ritardo in secondi prima che i giocatori possano usare la chat vocale dopo lo spawn  

Modifica questi valori in base alle tue preferenze e alle esigenze di performance del server. Impostazioni di qualità più basse possono essere utili per server con molti giocatori o banda limitata.

Dopo aver modificato il file `ServerConfiguration.ini`, salva e riavvia il server. Le impostazioni della chat vocale saranno applicate automaticamente.

## Conclusione

Complimenti! Hai configurato con successo la chat vocale sul tuo **server Over the Top WWI**. Ora i giocatori possono comunicare efficacemente e migliorare il lavoro di squadra durante le partite.

Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />