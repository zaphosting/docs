---
id: ets2-automated-messages
title: "Euro Truck Simulator 2: Messaggi automatici del server - Tieni i tuoi giocatori aggiornati su news, link social e altro!"
description: "Configura messaggi automatici del server usando attività programmate per mostrare annunci ricorrenti"
sidebar_label: Messaggi automatici del server
services:
- gameserver-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I messaggi automatici del server sono un modo semplice ma efficace per comunicare informazioni importanti ai giocatori direttamente in-game. Possono essere usati per mostrare le regole del server, annunciare eventi, condividere consigli utili o fornire promemoria a intervalli regolari senza bisogno di intervento manuale da parte degli admin.

Usando le **Attività Programmate**, i messaggi del server possono essere inviati automaticamente nella chat in-game di **Euro Truck Simulator 2** eseguendo comandi predefiniti a intervalli ricorrenti.

<InlineVoucher />



## Come funzionano i messaggi automatici

I messaggi automatici si creano programmando un’attività che esegue un comando server a un orario o intervallo definito. Il comando può inviare un messaggio in chat, una broadcast o una notifica server.

Una volta configurata, l’attività gira automaticamente in background e mostra il messaggio a tutti i giocatori connessi. Così la comunicazione resta costante senza che lo staff debba essere sempre online.



## Creare un messaggio automatico

Per creare messaggi automatici, apri il pannello del tuo game server e vai nella sezione **Attività Programmate**. Crea una nuova attività e scegli di eseguire un **comando**. Nel campo comando, inserisci il comando messaggio supportato dal tuo server di gioco.

```
<comando messaggio> <testo del tuo messaggio>
```

Sostituisci il comando con quello del gioco o di un’estensione che vuoi usare per inviare messaggi e `<testo del tuo messaggio>` con il testo che vuoi far vedere ai giocatori.

Poi puoi definire ogni quanto inviare il messaggio, per esempio ogni pochi minuti, ogni ora o a orari specifici della giornata. Per istruzioni dettagliate sulla creazione di attività programmate, dai un’occhiata alla guida [Attività programmate](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Personalizzare gli intervalli dei messaggi

Le attività programmate ti danno pieno controllo su quando e quanto spesso i messaggi appaiono. Esempi comuni:

- Mostrare le regole del server ogni pochi minuti
- Annunciare eventi imminenti a orari fissi
- Inviare consigli di gioco a nuovi o vecchi giocatori
- Ricordare link a Discord o sito web

L’intervallo si può modificare in qualsiasi momento senza riavviare il server, così puoi adattarti facilmente mentre il tuo server cresce.



## Note importanti

La funzionalità dei messaggi automatici dipende dalle capacità del gioco e dai comandi disponibili. Mentre i messaggi base programmati si possono fare con i comandi standard del server, questa soluzione può essere limitata in termini di formattazione, condizioni o personalizzazioni avanzate.

Se il gioco supporta plugin, mod o estensioni che offrono più flessibilità e opzioni di personalizzazione, vale la pena usarli. In questi casi, sistemi di messaggistica specializzati possono offrire funzionalità più ricche rispetto ai comandi base e sono più adatti a server complessi o molto personalizzati.



## Conclusione

I messaggi automatici del server sono un modo affidabile per tenere i giocatori informati e coinvolti senza sforzo manuale. Usando le attività programmate per eseguire comandi messaggio, gli admin possono garantire comunicazioni costanti su tutto il server.

Una volta configurati, i messaggi automatici girano da soli e si possono riutilizzare facilmente cambiando solo il comando e il testo specifico del gioco.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />