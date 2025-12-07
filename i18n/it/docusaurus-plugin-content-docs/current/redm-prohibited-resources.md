---
id: redm-prohibited-resources
title: "RedM: 'Resource contains prohibited logic?'"
description: "Capisci come proteggere il tuo server da risorse RedM dannose e garantire un gameplay sicuro e performante → Scopri di più ora"
sidebar_label: Risorsa contiene logica proibita
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Negli ultimi anni, gli sviluppatori di risorse RedM hanno fatto grandi sforzi per proteggere il loro codice sorgente usando tecniche come l’offuscamento, il blocco IP, il caricamento remoto del codice e altri metodi. Purtroppo, queste misure spesso causano problemi, come molti già sanno. Alcuni di questi strumenti non solo rallentano notevolmente le prestazioni del codice, ma introducono anche numerose vulnerabilità di sicurezza.

Per questo motivo, Cfx.re ha iniziato a bloccare risorse dannose che contengono codice malevolo progettato per infettare server e altre risorse. Queste risorse a volte cercano di “diffondere” il loro codice ad altre risorse per dare a terzi accesso a script e database. È importante sottolineare che queste risorse possono essere paragonate a virus e rappresentano quindi una minaccia seria.

<InlineVoucher />



## Cosa significa

Il nostro sistema controlla tutte le risorse prima dell’avvio per motivi di sicurezza e disabilita tutte quelle riconosciute come pericolose. Questo passaggio è assolutamente necessario, quindi purtroppo non ci sono eccezioni. La sicurezza viene prima di tutto!

Se una delle tue risorse caricate è coinvolta, la console del server fornirà informazioni aggiuntive a riguardo. Il contenuto di queste informazioni può ad esempio essere simile a questo:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Come procedere

Il primo e più importante passo è rimuovere immediatamente tutte le risorse dannose. Inoltre, dovresti installare solo risorse provenienti da fonti affidabili. Un buon punto di partenza è, ad esempio, il sito ufficiale o il [Forum](https://forum.cfx.re/c/development/releases/7) di RedM, dove è disponibile una vasta selezione di risorse.

Se sei uno sviluppatore o sei in contatto con uno, ti consigliamo di fare riferimento al **RedM Asset Escrow system**, sviluppato da Cfx.re in collaborazione con **Tebex**. Ulteriori dettagli sono disponibili nel post ufficiale del [Forum Cfx.re](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Risorse proibite

Purtroppo non esiste una lista ufficiale di risorse che possono causare questo messaggio. In linea di massima, evita risorse che utilizzano metodi di offuscamento diversi o che non si basano sul sistema RedM Asset Escrow.



## Conclusione
Per mantenere un ambiente server sicuro e stabile, è fondamentale usare solo risorse affidabili e rimuovere immediatamente quelle segnalate. Seguendo queste linee guida e utilizzando il sistema RedM Asset Escrow, puoi garantire sicurezza e conformità nell’ecosistema RedM. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />