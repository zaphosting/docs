---
id: satisfactory-savegame
title: "Satisfactory: Gestisci i Savegame"
description: "Scopri come gestire e fare il backup dei tuoi salvataggi di Satisfactory localmente e sul tuo server per un gameplay sicuro → Scopri di più ora"
sidebar_label: Gestione Savegame
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi salvataggi di Satisfactory sul tuo game server, inclusi il backup dei savegame locali e server e come caricarli sul tuo server.

<InlineVoucher />

## Preparazione

Per accedere ai file del tuo server ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per una mano a collegarti al server.

## Backup Savegame

### Savegame Locale

I savegame locali sono quelli creati mentre giochi in single player o ospiti una partita multiplayer localmente sul tuo dispositivo. Li trovi nella cartella AppData di Windows, precisamente in questo percorso:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione il seguente percorso: `%localappdata%/FactoryGame/Saved/SaveGames`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

Qui troverai tutte le cartelle che contengono i tuoi savegame locali in un unico posto.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Accesso al Savegame via FTP

Fare il backup del savegame dal server è semplice. Dopo esserti connesso al tuo game server tramite client FTP, vai al seguente percorso:
```
../satisfactory/save-backups
```

Qui vedrai una cartella con una serie di caratteri casuali, che è il tuo savegame. Fai clic destro sulla cartella e usa il pulsante **Download** per salvarla localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Backup Automatico

Offriamo anche un’opzione per fare il backup automatico del savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del pannello del tuo game server. Qui puoi configurare diverse opzioni per programmare backup automatici del server. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare un Savegame

Come per il backup, caricare un savegame è facile. Prima assicurati di essere connesso al server tramite client FTP. Poi vai al percorso:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Trascina semplicemente il savegame nella cartella tramite il client FTP e verrà caricato sul server.

:::tip
Ti conviene copiare il nome della cartella del savegame che hai caricato, ti servirà per attivarlo nella sezione successiva.
:::

## Attivare il Savegame

Usare il savegame è super semplice. Puoi gestirlo direttamente dal Satisfactory Server Manager in-game oppure dal pannello del server nella sezione **Savegame Manager**.



## Conclusione

Hai aggiunto con successo un savegame al tuo game server. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂


<InlineVoucher />