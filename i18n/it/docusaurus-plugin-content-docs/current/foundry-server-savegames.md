---
id: foundry-server-savegames
title: "Foundry: Gestione dei Savegame di Foundry"
description: "Scopri come fare backup sicuri e gestire i tuoi salvataggi di Foundry localmente e sul server per un gameplay senza interruzioni → Scopri di più ora"
sidebar_label: Gestisci Savegame
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi savegame di Foundry sul server di gioco, inclusi il backup dei salvataggi locali e server e come caricarli sul tuo server.

<InlineVoucher />

## Preparazione

Per accedere ai file del server ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite un client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Per una guida dettagliata su come connetterti, dai un’occhiata al nostro tutorial [Accesso via FTP](gameserver-ftpaccess.md).

## Backup Savegame

### Savegame Locale

I savegame locali sono quelli creati mentre ospiti una partita multiplayer direttamente sul tuo dispositivo. Li trovi nella cartella Windows LocalLow AppData, precisamente in questo percorso:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel campo di esecuzione il seguente percorso: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

Qui potrai vedere tutti i tuoi savegame locali.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Accesso ai Savegame via FTP

Fare il backup del savegame dal server è semplice. Dopo esserti connesso al server tramite un client FTP, vai al seguente percorso:
```
../foundry/saves/save
```

Qui troverai le cartelle dei singoli savegame. Fai clic destro sulla cartella che vuoi salvare e usa il pulsante **Download** per scaricarla sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici del savegame (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del pannello del tuo server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare un Savegame

Come per il backup, caricare un savegame è facile. Prima assicurati di essere connesso al server tramite FTP. Poi vai al percorso:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Trascina semplicemente la cartella del savegame che vuoi caricare dentro questa cartella tramite il client FTP e verrà caricato sul server.

:::tip
Ti conviene copiare il nome della cartella del savegame che hai caricato, ti servirà per attivarlo nel passaggio successivo.
:::

## Attivare un Savegame

Per usare un savegame specifico devi modificare un file di configurazione. Ci sono diversi modi per farlo, qui ti spieghiamo come fare tramite l’interfaccia web, che è la più semplice. Se vuoi vedere altri metodi, dai un’occhiata alla nostra guida [Configurazione Server](foundry-configuration.md).

Vai nella sezione **Settings** dell’interfaccia web del tuo server e trova l’impostazione **Savename**.

Cambia questo valore con il nome della cartella del savegame che hai caricato prima. Quando hai finito, salva in basso con il pulsante verde **Save** e poi riavvia il server.

<InlineVoucher />