---
id: humanitz-change-pvp-mode
title: "HumanitZ: Cambia la modalità PvP"
description: "Scopri come attivare o disattivare il PvP sul tuo server HumanitZ → Scopri di più ora"
sidebar_label: "Cambia modalità PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduzione

Il combattimento Player versus Player (PvP) è una meccanica fondamentale nei giochi survival come HumanitZ. Attivare o disattivare il PvP cambia il modo in cui i giocatori possono interagire in combattimento, se possono danneggiarsi a vicenda e se possono interagire con oggetti di proprietà dei giocatori come veicoli o contenitori.

<InlineVoucher />

## Configurazione

La modalità PvP è gestita nel file `GameServerSettings.ini`. Puoi accedere a questo file dal pannello di controllo del tuo server sotto **Configs**. All’interno del file di configurazione, trova il seguente parametro:

```
;false/true=Off/On. Questo influenzerà anche la possibilità di interagire con oggetti dei giocatori come auto e contenitori
PVP=true
```

- `PVP=true` – Attiva il combattimento Player versus Player  
- `PVP=false` – Disattiva il combattimento Player versus Player

Per cambiare la modalità PvP, imposta semplicemente il valore su `true` (On) o `false` (Off), a seconda di come vuoi che funzioni il PvP sul tuo server.

Esempio – PvP disattivato:

```
PVP=false
```

Dopo aver modificato il file, salva le modifiche e riavvia il server per applicare la nuova impostazione.

## Conclusione

Complimenti! Modificando il valore `PVP` nel file `GameServerSettings.ini`, hai cambiato con successo la modalità PvP sul tuo server HumanitZ. Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />