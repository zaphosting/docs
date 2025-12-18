---
id: rust-plugins
title: "Rust: Installazione dei plugin"
description: "Scopri come potenziare il tuo server Rust con plugin popolari per personalizzazione e gameplay migliorato → Scopri di più ora"
sidebar_label: Installa Plugin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introduzione

I plugin ti permettono di espandere e personalizzare ancora di più il tuo server. Qui sotto ti spieghiamo dove trovare i plugin più usati e come configurarli.

<InlineVoucher />


## Preparazione

Prima di tutto, devi scaricare i plugin che vuoi installare sul server. Una vasta selezione di plugin la trovi su [umod.org (ex OXIDE)](https://umod.org/plugins). Durante il download otterrai un file `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installazione

Una volta scaricati i plugin desiderati, puoi procedere con l’installazione. Questa avviene tramite **FTP**, quindi ti serve un client FTP per caricare i file sul server. Se non hai mai usato FTP o non sai come funziona, dai un’occhiata alla nostra guida su [Accesso FTP](gameserver-ftpaccess.md).

La cartella giusta per i plugin è: `/gXXXXXX/rust-oxide/oxide/plugins`. Carica semplicemente i file `.cs` dei plugin scaricati in questa cartella. Dopo l’upload dovrebbe apparire così:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Non serve altro, l’installazione è già completata. Dopo puoi controllare nella console live se il plugin è stato compilato e caricato correttamente. L’output dovrebbe essere simile a questo:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Plugin Popolari

Cerchi ancora i plugin perfetti per il tuo server?

Dai un’occhiata alla nostra lista selezionata dei plugin più popolari e consigliati per migliorare il gameplay e dare al tuo server quel tocco finale che merita. Lasciati ispirare e trova proprio le aggiunte giuste per il tuo progetto.

<SearchableItemList items={items} />


## Conclusione

Se hai seguito tutti i passaggi, il plugin dovrebbe essere installato con successo. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />