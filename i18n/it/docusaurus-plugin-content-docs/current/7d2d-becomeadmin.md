---
id: 7d2d-becomeadmin
title: "7 Days to Die: Come diventare admin su 7 Days to Die"
description: "Scopri come assegnare e gestire i permessi di amministratore per il pieno controllo del server e ruoli admin personalizzati → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Configurazione
Aggiungere un admin si fa tramite il file di configurazione **serveradmin.xml**, che trovi nell’interfaccia web sotto Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Per trovare il tuo SteamID64, vai sul tuo profilo Steam e clicca con il tasto destro in un punto qualsiasi. Poi clicca su **Copia URL Steam**.

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Dopodiché apri una di queste pagine e incolla lì l’URL del tuo profilo:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Ti verranno fornite info generali e lo Steam ID del tuo account. A noi serve solo lo SteamID64, che va inserito sotto ``<admins>...</admins>``. Avrà questo aspetto:

```
 <users>
    <user steamID="76561198021925107" name="Suggerimento su chi è questo utente" permission_level="0" />
  </users>
```

:::danger  Il record admin non viene riconosciuto? 
Assicurati di rimuovere i caratteri di commento `<!--` e `-->` per rendere valida la riga. Altrimenti rimane solo un commento e non verrà applicata. Basta togliere i caratteri all’inizio e alla fine della riga per attivarla.
:::

Il gioco permette di definire diversi livelli di permessi per gli amministratori. Questo significa che puoi creare gruppi admin con permessi diversi. Il livello si imposta tramite l’opzione ``permission_level``, che può andare da 0 a 1000. A seconda di come lo configuri, gli admin avranno accesso ai permessi assegnati. Una volta fatto, i permessi admin sono stati assegnati con successo.

## Permessi

I permessi per tutti i comandi admin si definiscono sotto ``permissions``. Anche qui devi regolare il ``permission_level``, proprio come quando aggiungi gli admin. Ecco un esempio:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Il livello di permesso è un valore tra 0 e 1000 e determina quali permessi ha un giocatore. 1000 è il più basso (nessun permesso) e 0 il più alto (permessi admin completi). Devi regolarlo in base a come vuoi che siano i permessi.

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o aiuto, non esitare a contattare il nostro supporto, disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />