---
id: fivem-prohibited-resources
title: "FiveM: 'Resource contains prohibited logic?'"
description: "Scopri come proteggere il tuo server FiveM da risorse dannose e garantire un gameplay sicuro e performante → Scopri di più ora"
sidebar_label: Risorsa contiene logica proibita
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Gli sviluppatori delle risorse FiveM hanno fatto grandi sforzi negli ultimi anni per proteggere il loro codice sorgente usando tecniche come offuscamento, blocco IP, caricamento remoto del codice e altri metodi. Purtroppo, queste misure spesso causano problemi, di cui molti sono già a conoscenza. Alcuni di questi strumenti non solo rallentano notevolmente le prestazioni del codice, ma introducono anche numerose problematiche di sicurezza.

Per questo motivo, Cfx.re ha iniziato a bloccare risorse dannose che contengono codice malevolo progettato per infettare server e altre risorse. Queste risorse a volte cercano di "diffondere" il loro codice ad altre risorse per dare a terzi accesso a script e database. È importante sottolineare che queste risorse possono essere paragonate a virus e rappresentano quindi una minaccia seria.

<InlineVoucher />



## Cosa significa

Il nostro sistema controlla tutte le risorse prima dell’avvio per i motivi di sicurezza sopra citati e disabilita tutte quelle riconosciute come pericolose. Questo passaggio è assolutamente necessario, quindi purtroppo non ci sono eccezioni. La sicurezza viene prima di tutto!

Se una delle tue risorse caricate è coinvolta, la console del server fornirà informazioni aggiuntive a riguardo. Il contenuto di queste informazioni può ad esempio apparire così:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Come procedere

Come primo e più importante passo, ti consigliamo di rimuovere immediatamente tutte le risorse dannose. Inoltre, dovresti installare solo risorse ottenute da fonti affidabili. Un buon punto di partenza è, ad esempio, il sito ufficiale o il [Forum](https://forum.cfx.re/c/development/releases/7) di FiveM, dove è disponibile un’ampia selezione di risorse.

Se sei uno sviluppatore o sei in contatto con uno, ti consigliamo di fare riferimento al **FiveM Asset Escrow system**, sviluppato da Cfx.re in collaborazione con **Tebex**. Ulteriori dettagli sono disponibili nel post ufficiale sul [Forum Cfx.re](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).



## Risorse proibite

Purtroppo non esiste una lista ufficiale di risorse che possono causare questo messaggio. In linea di massima, non dovresti usare risorse che utilizzano metodi di offuscamento diversi o che non si basano sul sistema FiveM Asset Escrow.



## Conclusione
Per mantenere un ambiente server sicuro e stabile, è fondamentale usare solo risorse affidabili e rimuovere immediatamente quelle segnalate. Seguendo queste linee guida e utilizzando il sistema FiveM Asset Escrow, puoi contribuire a garantire sicurezza e conformità nell’ecosistema FiveM. Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />