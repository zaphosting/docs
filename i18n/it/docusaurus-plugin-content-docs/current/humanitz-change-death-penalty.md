---
id: humanitz-change-death-penalty
title: "HumanitZ: Cambia la Penalità di Morte"
description: "Scopri come modificare le impostazioni della penalità di morte sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: Cambia la Penalità di Morte
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introduzione

La penalità di morte in HumanitZ determina cosa perde un giocatore dopo la morte. A seconda dello stile di gioco del tuo server, potresti preferire un’esperienza di sopravvivenza più indulgente o un sistema più severo che aumenta tensione e rischio.

<InlineVoucher />



## Configurazione

La penalità di morte si gestisce nel file `GameServerSettings.ini`. Puoi accedere a questo file nel pannello di gestione del server sotto **Configs**. All’interno del file di configurazione, trova il parametro seguente:

```
;0=Non perdi nulla, 1=Perdi zaino e arma in mano, 2=Precedente + tasche e contenuto zaino, 3=Tutto quanto sopra + equipaggiamento
OnDeath=2
```

Il valore dopo `OnDeath=` determina quanto dell’inventario del giocatore viene perso alla morte:

- `0` – Il giocatore non perde nulla  
- `1` – Il giocatore perde zaino e arma in mano  
- `2` – Perdite precedenti + tasche e contenuto dello zaino  
- `3` – Tutto quanto sopra + equipaggiamento indossato  

Per modificare la penalità, cambia semplicemente il numero con quello che preferisci. Dopo aver salvato il file, riavvia il server per applicare la nuova impostazione.



## Conclusione

Complimenti! Modificando il valore `OnDeath` nel file `GameServerSettings.ini`, hai configurato con successo la penalità di morte sul tuo server HumanitZ. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



<InlineVoucher />