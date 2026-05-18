---
id: ohd-automated-messages
title: "Operation: Harsh Doorstop: Messaggi Server Automatici - Tieni i tuoi giocatori aggiornati su news, social e altro!"
description: "Configura messaggi server automatici usando attività programmate per mostrare annunci ricorrenti"
sidebar_label: Messaggi Server Automatici
services:
- gameserver-ohd
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I messaggi server automatici sono un modo semplice ma super efficace per comunicare info importanti ai giocatori direttamente in-game. Puoi usarli per mostrare regole del server, annunciare eventi, condividere consigli utili o inviare promemoria a intervalli regolari senza dover intervenire manualmente.

Con le **Attività Programmate**, i messaggi possono essere inviati automaticamente nella chat in-game di **Operation: Harsh Doorstop** eseguendo comandi predefiniti a cadenza regolare.

<InlineVoucher />



## Come funzionano i messaggi automatici

I messaggi automatici si creano programmando un’attività che esegue un comando server a un orario o intervallo stabilito. Il comando può inviare un messaggio in chat, una broadcast o una notifica server.

Una volta configurata, l’attività gira in background e mostra il messaggio a tutti i giocatori connessi. Così la comunicazione resta costante senza bisogno che lo staff sia sempre online.



## Creare un messaggio automatico

Per creare messaggi automatici, apri il pannello del tuo game server e vai nella sezione **Attività Programmate**. Crea una nuova attività e scegli di eseguire un **comando**. Nel campo comando, inserisci il comando messaggio supportato dal tuo server.

```
<comando messaggio> <testo del tuo messaggio>
```

Sostituisci il comando con quello del gioco o di un’estensione che vuoi usare per inviare messaggi e `<testo del tuo messaggio>` con il testo che vuoi far vedere ai giocatori.

Poi puoi definire ogni quanto inviare il messaggio, tipo ogni pochi minuti, ogni ora o a orari specifici. Per istruzioni dettagliate sulle attività programmate, dai un’occhiata alla guida [Attività Programmate](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Personalizzare gli intervalli dei messaggi

Le attività programmate ti danno pieno controllo su quando e quanto spesso i messaggi appaiono. Esempi comuni:

- Mostrare le regole del server ogni pochi minuti
- Annunciare eventi imminenti a orari fissi
- Inviare consigli di gioco a nuovi o vecchi giocatori
- Ricordare link a Discord o sito web

L’intervallo si può modificare in qualsiasi momento senza riavviare il server, così puoi adattarti facilmente mentre il server cresce.



## Note importanti

La funzionalità dei messaggi automatici dipende da cosa supporta il gioco e i suoi comandi disponibili. Con i comandi base puoi fare messaggi programmati semplici, ma potresti avere limiti su formattazione, condizioni o personalizzazioni avanzate.

Se il gioco supporta plugin, mod o estensioni che offrono più flessibilità e opzioni di personalizzazione, vale la pena usarli. In questi casi, sistemi di messaggistica specializzati possono offrire funzioni più ricche rispetto ai comandi base e sono più adatti a server complessi o molto custom.



## Conclusione

I messaggi server automatici sono un modo affidabile per tenere i giocatori aggiornati e coinvolti senza fatica manuale. Usando attività programmate per eseguire comandi messaggio, gli admin garantiscono comunicazioni costanti sul server.

Una volta impostati, i messaggi automatici girano da soli e si possono riutilizzare facilmente cambiando solo il comando e il testo specifico del gioco.

Per domande o supporto, non esitare a contattare il nostro team assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />