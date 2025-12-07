---
id: minecraft-timings-report
title: "Minecraft: Identifica problemi del server con il report timings"
description: "Scopri come analizzare i problemi di performance del server usando i report timings per individuare lag e ottimizzare il tuo server → Scopri di più ora"
sidebar_label: Timings-Report
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Spiegazione

### Cos’è un report timings?

I report timings sono molto simili al task manager del tuo computer e ti aiutano a trovare il problema, soprattutto in caso di lag. Un report timings registra tutte le attività del server e le mostra in modo visivo.

## Report timings

## Come creare un report timings

A seconda del software del server, il report timings si crea in modo diverso. In linea di massima devi prima avviare la registrazione con questo comando (eccetto per **Paper Spigot** se non hai modificato le impostazioni):

`/timings start`

Durante la registrazione, usa il server come fai di solito, così i problemi si registrano e possono essere analizzati meglio dopo. La registrazione dovrebbe durare **almeno 10 minuti**, o anche di più se puoi.

## Come esportare il report timings

Per creare ed esportare il report timings usa questo comando:

`/timings paste`

Dopo qualche secondo vedrai un messaggio che conferma l’export riuscito. Puoi aprire il report cliccando sul link.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analisi

### ↔️ Restringi i valori

Una volta esportato e aperto il report timings come descritto sopra, ti si aprirà una finestra simile a questa:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Prima di tutto dai un’occhiata al grafico per controllare i valori approssimativi dei singoli punti di registrazione passando il mouse sopra.

Per ottenere i valori più precisi possibili, che indicano un possibile problema sul server, restringi il periodo problematico usando gli slider in basso, come mostrato nel grafico:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Analizza i valori del server

Ci sono 3 colonne in totale. Come vedi nello screenshot qui sotto, la casella numero 1 mostra quanto % di un tick (20 tick = 1 secondo) serve al processo principale. Puoi anche vedere quante volte questo processo è stato eseguito durante la registrazione.

Nella casella numero 2 trovi valori più precisi in millisecondi, ma attenzione: il tempo non dovrebbe mai superare i 50ms. Se succede, si crea un effetto domino e tutti i processi successivi si accumulano, causando lag perché il server riesce a gestirli solo in ritardo.

:::info
Il **Full Server Tick** di solito può essere ignorato, perché i valori sono sempre in rosso, ma non è un problema grave.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

In ogni caso, dai sempre un’occhiata più approfondita ai valori evidenziati a colori.

In questo esempio guardiamo il processo per tutte le entità (animali, mostri, oggetti, ecc.), perché i valori sono già arancioni. Da questo puoi dedurre che ci sono troppe entità sul server.
Forse ci sono mob farm attive o vengono spawnati troppi mob. Se hai problemi con troppe entità, puoi rallentare lo spawn nelle impostazioni o installare plugin che limitano il numero di entità e le rimuovono automaticamente se serve.

Come detto sopra, la lista mostra sempre il processo principale. Cliccando su un processo puoi vedere i singoli processi per ogni tipo di entità e analizzarli. Controlla anche le colonne 2 e 3 come detto prima.

Vedrai che **Minecraft::tickEntity - nms.EntitySkeleton** ha eseguito molti processi. Anche qui, mob farm potrebbero essere la causa.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Un altro processo con valori già arancioni sono i blocchi in attesa (waiting blocks). Questi blocchi sono particolarmente inefficienti perché il server deve controllare lo stato di ogni blocco in attesa ad ogni tick. Un esempio sono sabbia, ghiaia o anche lava e acqua in caduta.

Se usi molta acqua in una grande farm, questo può causare problemi. Il problema può anche nascere quando si generano nuovi chunk e si creano sorgenti d’acqua in montagne. Il server deve calcolare lo stato ogni volta per far scorrere l’acqua bene. Inoltre deve creare e caricare i chunk, che è un processo molto intenso.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Tutte le altre analisi si fanno allo stesso modo, perché i passaggi sono identici per ogni processo. Se ti serve aiuto con l’analisi, siamo sempre qui per te!

### Controlla i plugin

A volte i problemi sono causati dai plugin. Per capire se un plugin è il colpevole, puoi rimuovere temporaneamente i plugin installati e controllare di nuovo lo stato del server.

Se il problema è causato da plugin, puoi indagare nella sezione "Plugins". Anche qui i valori sono in tre colonne, con la stessa struttura dei valori server sopra. La differenza è che non c’è un processo principale, ma viene mostrato il plugin stesso. Puoi comunque cliccare sui processi per analizzarli più nel dettaglio.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />