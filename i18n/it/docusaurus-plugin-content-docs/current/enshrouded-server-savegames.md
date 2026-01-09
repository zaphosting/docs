---
id: enshrouded-server-savegames
title: "Enshrouded: Gestione dei Savegame di Enshrouded"
description: "Scopri come gestire e fare il backup dei tuoi Savegame di Enshrouded per un multiplayer sicuro → Scopri di più ora"
sidebar_label: Gestione Savegame
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi Savegame di Enshrouded sul tuo game server, inclusi il backup dei savegame locali e server e come caricarli sul server.

<InlineVoucher />

## Preparazione

Per accedere ai file del server, ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per una mano a connetterti al server.


## Backup Savegame

### Savegame Locale

I Savegame locali sono quelli creati mentre ospiti una partita multiplayer direttamente sul tuo dispositivo. Di default, Enshrouded usa Steam Cloud per fare il backup automatico dei savegame. Per accedervi, devi entrare nella cartella userdata di Steam per trovare i dati di gioco. Vai al percorso:
```
../Steam/userdata/[tuo_steamid]/1203620/remote
```

:::tip
Nelle installazioni standard, la cartella Steam si trova sul disco di sistema, al percorso: `C://Program Files x86/Steam`. Tieni presente che potrebbe essere diverso se hai installato Steam altrove.
:::

Una volta dentro questa cartella, vedrai un file dei personaggi insieme a tutti i tuoi savegame locali in un unico posto.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Se **non** usi Steam Cloud per salvare, troverai la cartella dei salvataggi in: `C://Users/[tuo_utente]/Saved Games/Enshrouded`.
:::

### Accesso al Savegame via FTP

Fare il backup del savegame dal server è semplice. Dopo esserti connesso al server tramite client FTP, vai al percorso:
```
../enshrouded/savegame/
```

Qui troverai un file con caratteri casuali che è il tuo savegame. Basta cliccare col tasto destro sul file e usare il pulsante **Download** per salvarlo localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici del savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai su **Tools->Backups** nel pannello del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare il Savegame

Come per il backup, caricare il savegame è facile. Prima assicurati di essere connesso al server via FTP. Poi vai al percorso:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Trascina semplicemente i tuoi savegame in questa cartella tramite il client FTP e verranno caricati sul server.

## Attivare il Savegame

Usare il savegame è super semplice. Connettiti al server e durante la schermata di setup del gioco potrai scegliere quale savegame usare. Nome, livello e data dell’ultimo salvataggio saranno mostrati sotto ogni save per aiutarti a scegliere quello giusto.

Hai aggiunto con successo un savegame al tuo game server.

<InlineVoucher />