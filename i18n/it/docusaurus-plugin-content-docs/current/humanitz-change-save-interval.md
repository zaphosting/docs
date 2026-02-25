---
id: humanitz-change-save-interval
title: "HumanitZ: Cambia l'intervallo di salvataggio"
description: "Scopri come regolare l'intervallo di salvataggio automatico del mondo sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Cambia intervallo di salvataggio"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

L'intervallo di salvataggio determina ogni quanto il tuo server HumanitZ salva automaticamente lo stato del mondo. Salvare regolarmente aiuta a prevenire la perdita di dati in caso di crash o spegnimenti improvvisi, mentre intervalli più lunghi possono ridurre leggermente l’attività del disco.

<InlineVoucher />

## Configurazione

L'intervallo di salvataggio del mondo è gestito nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di gestione del server sotto **Config**. All’interno del file di configurazione, trova il parametro seguente:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – Il server salva il mondo ogni 300 secondi (5 minuti).  
- `SaveIntervalSec=0` – Disabilita il salvataggio automatico del mondo.  

Il valore è espresso in **secondi**. Per esempio:

- `600` = 10 minuti
- `900` = 15 minuti

Se vuoi aumentare l’intervallo a 10 minuti:

```
SaveIntervalSec=600
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare la nuova impostazione.

## Conclusione

Complimenti! Modificando il valore `SaveIntervalSec` nel file `GameServerSettings.ini`, hai regolato con successo l’intervallo di salvataggio automatico del mondo sul tuo server HumanitZ.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />