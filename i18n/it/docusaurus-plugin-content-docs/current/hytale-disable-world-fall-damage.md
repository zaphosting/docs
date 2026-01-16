---
id: hytale-disable-world-fall-damage
title: "Hytale: Disattiva Danni da Caduta nel Mondo"
description: "Scopri come disattivare i danni da caduta sul tuo server Hytale → Scopri di più ora"
sidebar_label: Disattiva Danni da Caduta nel Mondo
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Su un server Hytale, la gravità e i danni da caduta fanno parte delle meccaniche di gioco del mondo. Quando i danni da caduta sono attivi, i giocatori subiscono danni da cadute alte; quando sono disattivati, i giocatori possono cadere liberamente senza subire danni. Disattivare i danni da caduta può essere utile per server creativi, progetti di costruzione, ambienti di test o qualsiasi scenario in cui i danni da caduta non devono influenzare l’esperienza di gioco.

<InlineVoucher />



## Configurazione

I danni da caduta si gestiscono per ogni mondo tramite il file di configurazione del mondo. Ogni mondo nell’universo del server ha il suo `config.json`, e all’interno di questo file c’è un’impostazione che determina se i danni da caduta sono applicati.

Per disattivare i danni da caduta, apri il file `config.json` del mondo, che si trova nella cartella corrispondente sotto `universe/worlds/<nome_mondo>/config.json`. Trova l’impostazione che controlla i danni da caduta, solitamente rappresentata da un flag Booleano come `IsFallDamageEnabled`, e impostala su `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Quando questo valore è impostato su `false`, i giocatori non subiranno più danni da caduta. Se invece vuoi mantenere i danni da caduta attivi, il valore deve essere `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Dopo aver aggiornato il file, salva le modifiche e **riavvia il server**.  
Le modifiche alla configurazione si applicano solo quando il server ricarica il mondo, quindi è necessario un riavvio per attivare la nuova impostazione.



## Conclusione

Configurando il flag dei danni da caduta nel file di configurazione del mondo, hai il pieno controllo su se i giocatori subiscono danni da cadute o meno. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />