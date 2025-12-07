---
id: dedicated-windows-port
title: "Server Dedicato: Gestire le Regole del Firewall di Windows Defender"
description: "Scopri come gestire efficacemente le regole del firewall di Windows Defender e ottimizzare il port forwarding per una comunicazione sicura del server → Scopri di più ora"
sidebar_label: Port Forwarding (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il sistema operativo Windows include il proprio Windows Defender Firewall che gestisce il traffico in entrata e in uscita tra il server e internet. In questa guida vedremo come gestire le regole del firewall e alcuni consigli generali per il port forwarding.

## Accesso a Windows Defender Firewall

Windows include l'applicazione **Windows Defender Firewall con sicurezza avanzata** come app di sistema principale, che ti permette di gestire facilmente tutte le regole del firewall in un unico posto.

Puoi accedervi semplicemente cercandola nella barra di ricerca di Windows o premendo il tasto Windows/icona e usando la barra di ricerca del menu Start.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gestione delle Regole

La maggior parte delle applicazioni e dei processi, specialmente quelli che devono essere accessibili da internet come server di gioco o web server, richiedono il port forwarding per garantire che i client possano comunicare con il tuo server (host).

:::info
Di default, Windows apre il firewall solo per le applicazioni che ne hanno bisogno, mantenendo tutte le altre porte chiuse. Questo serve a non esporre porte inutilmente, riducendo i rischi. Per questo motivo potresti vedere prompt UAC quando lanci un gioco per la prima volta, per confermare una nuova regola del firewall.
:::

In Windows, gestire le regole è semplice e si può fare in due modi: creando regole per programmi specifici oppure creando regole che coprono intere porte (e quindi qualsiasi programma o processo che le usa).

Ci sono due tipi di regole:
- Regola in ingresso (Inbound Rule): controlla la comunicazione in entrata (da internet verso il tuo server).
- Regola in uscita (Outbound Rule): controlla la comunicazione in uscita (dal tuo server verso internet).

Di solito, per il port forwarding, devi creare entrambi i tipi di regole per permettere la comunicazione con i client. Però dipende dal tuo caso specifico e dalla configurazione.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Regole per Programmi

Creare una regola per un Programma è di solito la scelta consigliata perché limita la comunicazione a un programma o processo specifico, invece di aprire un’intera porta che permetterebbe a qualsiasi programma o servizio di comunicare su quella porta.

Ora creerai due regole per Programmi, una in uscita e una in ingresso, entrambe che accettano la connessione.

Nell’esempio qui sotto configurerai solo la regola **Inbound**. I passaggi sono gli stessi, quindi dovresti ripeterli per creare anche la regola Outbound da solo.

Inizia cliccando col tasto destro su **Inbound Rules** nella sidebar e seleziona l’opzione **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Nella prima sezione, seleziona l’opzione **Program** come tipo di regola.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Ora devi selezionare il programma per cui vuoi creare la regola di forwarding, usando il pulsante browse. In questo esempio è stato scelto il browser Mozilla Firefox come app di esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Nella sezione azione, seleziona l’opzione **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Nella sezione profilo, lascia tutte le opzioni selezionate e vai avanti fino all’ultima sezione. Qui devi inserire un nome utile per ricordarti la regola e puoi aggiungere una descrizione opzionale se vuoi.

Quando sei pronto, premi il pulsante **Finish** per creare la regola.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Hai creato con successo la tua regola per Programma sul server Windows. Ora ripeti la procedura per creare una **Outbound Rule** seguendo gli stessi passaggi, ma creandola nella sezione Outbound Rules.

### Regole per Porte

Creare una regola generica per una Porta può essere utile in molti casi e segue passaggi simili a quelli visti prima.

Ora creerai due regole per Porte, una in uscita e una in ingresso, entrambe che accettano la connessione.

Nell’esempio qui sotto configurerai solo la regola **Inbound**. I passaggi sono gli stessi, quindi dovresti ripeterli per creare anche la regola Outbound da solo.

Inizia cliccando col tasto destro su **Inbound Rules** nella sidebar e seleziona l’opzione **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Nella prima sezione, seleziona l’opzione **Port** come tipo di regola.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Ora devi definire il tipo di porta (TCP o UDP) e la porta o le porte che vuoi aprire per il port forwarding. Se devi aprire sia TCP che UDP, devi creare due regole separate, una per ogni tipo di porta.

In questo esempio è stata usata la porta 25565 (TCP) come esempio, che è la porta di default per Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Nella sezione azione, seleziona l’opzione **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Nella sezione profilo, lascia tutte le opzioni selezionate e vai avanti fino all’ultima sezione. Qui devi inserire un nome utile per ricordarti la regola e puoi aggiungere una descrizione opzionale se vuoi.

Quando sei pronto, premi il pulsante **Finish** per creare la regola.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Hai creato con successo la tua regola per Porta sul server Windows. Ora ripeti la procedura per creare una **Outbound Rule** seguendo gli stessi passaggi, ma creandola nella sezione Outbound Rules.