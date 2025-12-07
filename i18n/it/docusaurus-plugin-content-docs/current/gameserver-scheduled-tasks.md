---
id: gameserver-scheduled-tasks
title: "Game server: Attività Pianificate (Cron)"
description: "Scopri come automatizzare i processi del server con attività pianificate per backup, gestione servizi e comandi → Scopri di più ora"
sidebar_label: Attività pianificate
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Crea attività pianificate che vengono eseguite automaticamente in orari definiti. Questo ti permette di automatizzare vari processi sul tuo server. Puoi specificare se l’attività deve essere eseguita una sola volta o ripetutamente. 



## Tipi di attività

Le attività pianificate ti permettono di eseguire diversi tipi di task. Attualmente sono supportati i seguenti tipi:

- Avvia servizio
- Ferma servizio
- Riavvia servizio
- Riavvia server (solo se è online)
- Crea backup
- Esegui comando

I tipi predefiniti ti consentono di gestire il tuo server in modo altamente automatizzato. In particolare, il tipo **Esegui comando** ti permette di creare attività molto più specifiche e personalizzate. 

:::warning Limiti di frequenza
Alcune attività pianificate hanno limiti di frequenza, il che significa che non possono essere eseguite un numero infinito di volte e hanno un cooldown/limite.
 :::

## Creare attività

Vai su Attività pianificate nella tua amministrazione del game server sotto Impostazioni. Per creare una nuova attività pianificata, clicca sul pulsante verde con il simbolo più a destra nella lista delle attività pianificate. Si aprirà una nuova finestra pop-up dove potrai configurare la tua attività. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Gestire attività

Nella configurazione di un’attività puoi definire che tipo di task vuoi creare. Dai un nome (opzionale) e seleziona uno dei tipi di attività disponibili. Questo esempio mostra come creare un’attività pianificata per riavviare il servizio regolarmente. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Seleziona l’opzione `ripetuta` per il tipo di ripetizione. Nel campo espressione Cron, devi ora specificare gli intervalli in cui l’attività deve essere eseguita. In questo caso, il servizio viene riavviato ogni tre ore. 

:::tip Generatore Cron

Non conosci la struttura o la sintassi di Cron? Usa semplicemente il [**Crontab Guru**](https://crontab.guru/). È un’app semplice che ti permette di costruire e copiare espressioni cron con pochi click. 

:::

Per completare la creazione, seleziona da quando a quando l’attività pianificata deve essere eseguita e poi clicca su salva.

## Rimuovere attività

Vuoi eliminare attività esistenti? Cancella le attività dalla lista cliccando sul pulsante rosso del cestino a destra. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusione

Ora sai come creare, gestire e rimuovere attività pianificate. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />