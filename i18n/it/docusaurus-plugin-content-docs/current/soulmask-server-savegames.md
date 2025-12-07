---
id: soulmask-server-savegames
title: "Soulmask: Gestione dei Savegames di Soulmask"
description: "Scopri come gestire e fare il backup dei tuoi salvataggi di Soulmask localmente e sul tuo server per un gameplay sicuro → Scopri di più ora"
sidebar_label: Gestione Savegames
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi Savegames di Soulmask sul tuo game server, inclusi il backup dei salvataggi locali e server e come caricarli sul server.

<InlineVoucher />

## Preparazione

Per accedere ai file del tuo server, ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite un client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per una mano a collegarti al server.


## Backup Savegame

### Savegame Locale

I Savegames locali sono quelli creati mentre ospiti una partita multiplayer direttamente sul tuo dispositivo. Li trovi nella cartella AppData locale di Windows, precisamente in questo percorso:
```
../AppData/Local/WS/[tuo_steamid]/AutoGames
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione: `%userprofile%/appdata/local/WS/`. Premi **OK** e apri la cartella con il tuo SteamID per raggiungere la cartella AutoGames.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

Qui vedrai tutti i tuoi Savegames locali. Ogni cartella è etichettata con il codice invito del server, così è facile riconoscere il mondo giusto.

### Accesso al Savegame via FTP

Fare il backup del Savegame dal server è semplice. Dopo esserti connesso al game server tramite FTP, vai in questo percorso:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Qui troverai la cartella principale `Level01_Main`, che contiene il salvataggio del server dedicato. Clicca con il tasto destro sulla cartella e usa il pulsante **Download** per salvarla localmente sul tuo dispositivo.

:::note
Al momento, i server dedicati di Soulmask supportano un solo salvataggio alla volta, che si trova nella cartella principale `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici del tuo Savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori info, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricamento Savegame

Come per il backup, caricare il Savegame è facile. Prima assicurati di connetterti al server via FTP e di spegnere il server.

:::note
Al momento, i server dedicati di Soulmask supportano un solo salvataggio alla volta, che si trova nella cartella principale `Level01_Main`.
:::

Quando sei pronto, vai in questo percorso:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Ora trascina il file **world.db** del salvataggio che vuoi caricare e sostituisci quello esistente. Ricordati di scaricare il file esistente dal server se vuoi conservarlo, altrimenti lo perderai sovrascrivendolo.

Puoi anche caricare il file delle impostazioni di gioco andando in questo percorso:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Trascina il file **GameXishu.json** del salvataggio che vuoi caricare e sostituisci quello esistente. Anche qui, scarica il file esistente se vuoi tenerlo prima di sovrascriverlo.

:::tip
Se il file **GameXishu.json** del salvataggio ha un nome leggermente diverso, tipo `GameXishu_2.json`, rinominalo in `GameXishu.json` così il server dedicato lo riconosce.
:::

Ora riavvia il server e il tuo salvataggio dovrebbe caricarsi correttamente.

<InlineVoucher />