---
id: palworld-server-savegames
title: "Palworld: Gestione dei Savegame di Palworld"
description: "Scopri come gestire e fare il backup in sicurezza dei tuoi salvataggi di Palworld per un gameplay senza interruzioni → Scopri di più ora"
sidebar_label: Gestione Savegame
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

In questa guida vedremo come gestire i tuoi savegame di Palworld sul tuo game server, inclusi il backup dei salvataggi locali e server e come caricarli sul server.

## Preparazione

Per accedere ai file del server ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per una mano a connetterti al server.


## Backup Savegame

### Savegame Locale

I savegame locali sono quelli creati mentre ospiti una partita multiplayer in locale sul tuo dispositivo. Li trovi nella cartella AppData di Windows, precisamente in questo percorso:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione il seguente percorso: `%localappdata%/Pal/Saved/SaveGames/`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

Qui troverai una cartella con il tuo SteamID. Aprila per vedere tutti i tuoi savegame locali in un unico posto.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Accesso al Savegame via FTP

Fare il backup del savegame dal server è semplice. Dopo esserti connesso al game server tramite client FTP, vai al seguente percorso:
```
../palworld/Pal/Saved/SaveGames/0
```

Qui vedrai una cartella con una serie di caratteri casuali, che è il tuo savegame. Clicca con il tasto destro sulla cartella e usa il pulsante **Download** per salvarla localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Backup Automatico

Offriamo anche la possibilità di fare il backup automatico del savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici del server. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare un Savegame

Come per il backup, caricare un savegame è facile. Prima assicurati di essere connesso al server tramite client FTP. Poi vai al percorso:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Trascina semplicemente il savegame che vuoi caricare in questa cartella tramite il client FTP e verrà caricato sul server.

:::tip
Ti consigliamo di copiare il nome della cartella del savegame che hai caricato, ti servirà per attivarlo nella sezione successiva.
:::

## Attivare un Savegame

Per usare un savegame specifico devi modificare un file di configurazione. Vai al percorso e trova il file **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Per Windows
../Pal/Saved/Config/LinuxServer/ # Per Linux
```

Apri il file **GameUserSettings.ini** e cerca il parametro `DedicatedServerName`.

Modifica questa riga sostituendo il valore con il nome della cartella del savegame che vuoi attivare sul server.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Salva il file e riavvia il server per applicare le modifiche. Hai attivato con successo un savegame sul tuo game server.

## Savegame Scomparso

In rari casi, il server potrebbe creare un nuovo savegame all’avvio invece di caricare quello esistente.

Controlla prima i tuoi savefile tramite FTP andando al percorso:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Dovresti vedere sia il vecchio savegame che uno nuovo generato. Per risolvere, modifica il file di configurazione come spiegato nella sezione Attivare un Savegame, inserendo il nome corretto della cartella del savegame.

Il savegame sarà di nuovo attivo dopo aver salvato e riavviato il server.

:::info
Ti consigliamo caldamente di attivare i Backup Automatici come spiegato nella sezione Backup Automatico, dato che Palworld è ancora in Early Access e c’è il rischio di perdere o corrompere i savegame durante gli aggiornamenti.
:::

<InlineVoucher />