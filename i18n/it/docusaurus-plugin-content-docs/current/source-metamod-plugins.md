---
id: source-metamod-plugins
title: Installazione dei plugin
description: "Scopri come gestire e risolvere i problemi dei plugin Sourcemod per migliorare le prestazioni del tuo server → Scopri di più ora"
sidebar_label: Plugin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installazione dei plugin

Qui ti spieghiamo come installare i plugin. Per poter usare i plugin, hai bisogno di Sourcemod / Metamod. Le istruzioni su come installarli le trovi qui: [Installazione](source-metamod-installation.md)



Per installare i plugin, devi caricarli via FTP. I file del plugin vanno caricati nella cartella **Plugins** sotto **../addons/sourcemod/**. A seconda della complessità del plugin, potrebbe esserci già qualche file di configurazione o traduzione. In questo caso, questi vanno caricati nelle cartelle **configs** e **translations**.



## Disabilitare / rimuovere plugin

Nella cartella **Plugins** trovi una sottocartella chiamata **disabled**. Qui puoi mettere i plugin che vuoi disattivare temporaneamente. Basta spostare il file **.smx** corrispondente.



Se vuoi disabilitare un plugin in modo permanente, devi eliminare i file del plugin corrispondenti. Il plugin verrà disattivato dopo un cambio mappa o un riavvio del server.



## Problemi comuni


**Perché il mio plugin installato non funziona?**

Soluzioni:

- Assicurati che tutti i prerequisiti siano soddisfatti durante l’installazione del plugin. Alcuni plugin richiedono un database per funzionare correttamente. In questo caso devi fare ulteriori modifiche al file **database.cfg** che si trova nella cartella config.
- Il motore Source viene aggiornato regolarmente. Quindi, un plugin rilasciato tanto tempo fa e non più mantenuto potrebbe non essere più compatibile. In questo caso, l’unica opzione è visitare il forum Alliedmodders per trovare una versione fixata non ufficiale o usare un plugin alternativo.
- Se nessuna delle soluzioni sopra funziona, ti consigliamo di dare un’occhiata alla Live Console o ai file di log. Di solito lì trovi la causa del problema.

<InlineVoucher />