---
id: vserver-windows-port
title: "VPS: Gestire le Regole del Firewall di Windows Defender"
description: "Scopri come gestire le regole del firewall di Windows Defender e ottimizzare il port forwarding per una comunicazione sicura del server → Scopri di più ora"
sidebar_label: Port Forwarding (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il sistema operativo Windows include il proprio Windows Defender Firewall che gestisce il traffico in entrata e in uscita tra il server e internet. In questa guida vedremo come gestire le regole del firewall e alcuni consigli generali per il port forwarding.

<InlineVoucher />

## Accesso a Windows Defender Firewall

Windows include l'applicazione **Windows Defender Firewall con sicurezza avanzata** come app di sistema principale, che ti permette di gestire facilmente tutte le regole del firewall in un unico posto.

Puoi accedervi semplicemente cercandola nella barra di ricerca di Windows oppure premendo il tasto Windows/icona e usando la barra di ricerca del menu Start.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gestione delle Regole

La maggior parte delle applicazioni e processi, specialmente quelli che devono essere accessibili da internet come server di gioco o web server, richiedono il port forwarding per garantire che i client possano comunicare con il tuo server (host).

:::info
Di default, Windows apre il firewall solo per le applicazioni che ne hanno bisogno, mantenendo tutte le altre porte chiuse. Questo serve a non esporre porte inutilmente, riducendo i rischi. Per questo motivo potresti vedere comparire prompt UAC quando lanci un gioco per la prima volta, per confermare una nuova regola del firewall.
:::

In Windows, la gestione delle regole è semplice e si può fare in due modi: creando regole per programmi specifici oppure creando regole che coprono intere porte (e quindi qualsiasi programma o processo che le usa).

Ci sono due tipi di regole:
- Regola in Entrata (Inbound Rule): controlla la comunicazione in entrata (da internet verso il tuo server).
- Regola in Uscita (Outbound Rule): controlla la comunicazione in uscita (dal tuo server verso internet).

Di solito, per il port forwarding, devi creare entrambi i tipi di regole per permettere la comunicazione con i client. Però dipende dal tuo caso specifico e dalla configurazione.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Regole per Programmi

Creare una regola per un Programma è generalmente la scelta consigliata perché limita la comunicazione a un programma o processo specifico, invece di aprire una porta intera che permetterebbe a qualsiasi programma o servizio di comunicare su quella porta.

Ora creerai due regole per Programma, una in uscita e una in entrata, entrambe che accettano la connessione.

Nell’esempio qui sotto configurerai solo la regola **in entrata**. I passaggi sono identici, quindi dovresti ripeterli per creare anche la regola in uscita.

Inizia cliccando col tasto destro su **Regole in Entrata** nella barra laterale e seleziona l’opzione **Nuova Regola...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Nella prima sezione, seleziona l’opzione **Programma** come tipo di regola.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Ora devi selezionare il programma per cui vuoi creare la regola di forwarding, usando il pulsante sfoglia. In questo esempio è stato scelto il browser Mozilla Firefox come app di esempio.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Nella sezione azione, seleziona l’opzione **Consenti la connessione**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Nella sezione profilo, lascia tutte le opzioni selezionate e vai all’ultima sezione. Qui devi inserire un nome utile per ricordarti la regola e puoi aggiungere una descrizione opzionale se vuoi.

Quando sei pronto, premi il pulsante **Fine** per creare la regola.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Hai creato con successo la tua regola per Programma sul server Windows. Ora ripeti la procedura per creare una **Regola in Uscita** seguendo gli stessi passaggi, ma creandola nella sezione Regole in Uscita.

### Regole per Porte

Creare una regola generale per una Porta può essere utile in molti casi e segue passaggi simili a quelli visti prima.

Ora creerai due regole per Porta, una in uscita e una in entrata, entrambe che accettano la connessione.

Nell’esempio qui sotto configurerai solo la regola **in entrata**. I passaggi sono identici, quindi dovresti ripeterli per creare anche la regola in uscita.

Inizia cliccando col tasto destro su **Regole in Entrata** nella barra laterale e seleziona l’opzione **Nuova Regola...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Nella prima sezione, seleziona l’opzione **Porta** come tipo di regola.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Ora devi definire il tipo di porta (TCP o UDP) e la/le porta/e che vuoi aprire per il port forwarding. Se devi aprire sia TCP che UDP, devi creare due regole separate, una per ogni tipo di porta.

In questo esempio è stata usata la porta 25565 (TCP) come esempio, che è la porta di default per Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Nella sezione azione, seleziona l’opzione **Consenti la connessione**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Nella sezione profilo, lascia tutte le opzioni selezionate e vai all’ultima sezione. Qui devi inserire un nome utile per ricordarti la regola e puoi aggiungere una descrizione opzionale se vuoi.

Quando sei pronto, premi il pulsante **Fine** per creare la regola.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Hai creato con successo la tua regola per Porta sul server Windows. Ora ripeti la procedura per creare una **Regola in Uscita** seguendo gli stessi passaggi, ma creandola nella sezione Regole in Uscita.

<InlineVoucher />