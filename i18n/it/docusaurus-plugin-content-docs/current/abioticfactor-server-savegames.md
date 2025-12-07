---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Gestione dei Savegame di Abiotic Factor"
description: "Scopri come gestire e fare il backup dei tuoi salvataggi di Abiotic Factor localmente e sul tuo server per un gameplay sicuro → Scopri di più ora"
sidebar_label: Gestione Savegame
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi salvataggi di Abiotic Factor sul tuo game server, inclusi il backup dei savegame locali e server e come caricarli sul server.

<InlineVoucher />

## Preparazione

Per accedere ai file del tuo server, ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite un client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Per una guida più dettagliata, dai un’occhiata al nostro [Accesso via FTP](gameserver-ftpaccess.md).

## Backup Savegame

### Savegame Locale

I savegame locali sono quelli creati mentre ospiti una partita multiplayer direttamente sul tuo dispositivo. Li trovi nella cartella AppData di Windows, precisamente in questo percorso:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[tuo_steamid]/Worlds
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Assicurati di entrare nella cartella con il tuo Steam ID e poi nella cartella `Worlds`. Qui troverai tutti i tuoi savegame locali.

### Accesso al Savegame via FTP

Fare il backup del savegame dal server è semplice. Dopo esserti connesso al server tramite FTP, vai in questo percorso:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Qui troverai i tuoi savegame. Basta cliccare col tasto destro sulla cartella e usare il pulsante **Download** per salvarli localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici del savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricamento Savegame

Come per il backup, caricare il savegame è facile. Prima assicurati di essere connesso al server via FTP. Poi vai in questo percorso:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Al momento i server dedicati di Abiotic Factor non supportano il cambio tra savegame, quindi devi caricare il contenuto della tua cartella savegame direttamente nella cartella principale `world`.
:::

Apri la cartella del savegame che vuoi caricare. Trascina e rilascia tutti i file interni della cartella savegame dentro la cartella `world` sul server. Così caricherai il savegame sul server.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Se la cartella principale `world` manca, prova a spegnere e riavviare il server. Se non funziona, usa il pulsante **Revalidate Steam Files** nella dashboard principale del game server per ripristinare i file di default.
:::

## Attivare il Savegame

A differenza di altri giochi dove devi modificare un file di configurazione per attivare un savegame, qui non serve perché i server dedicati di Abiotic Factor non supportano ancora il cambio savegame.

Basta riavviare il server e al prossimo avvio caricherà automaticamente il savegame che hai caricato nella cartella principale `world`.

<InlineVoucher />