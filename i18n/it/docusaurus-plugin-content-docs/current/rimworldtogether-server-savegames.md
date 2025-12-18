---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Gestione dei salvataggi di Rimworld Together"
description: "Scopri come gestire e fare il backup dei tuoi salvataggi di Rimworld Together per un gameplay multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Gestione Salvataggi
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi salvataggi di Rimworld Together sul tuo game server, inclusi il backup dei salvataggi locali e server e come caricarli sul server.

:::info
Tieni presente che spostare una partita vanilla esistente su un server Rimworld Together con mod probabilmente causerà problemi di gameplay. Questo vale soprattutto quando si spostano mondi tra server con mod diverse.
:::

<InlineVoucher />

## Preparazione

Per accedere ai file del tuo server ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite un client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per un aiuto extra su come connetterti al server.


## Backup del Salvataggio

### Salvataggio Locale

I salvataggi locali sono quelli creati mentre ospitavi una partita multiplayer sul tuo dispositivo. Li trovi nella cartella AppData LocalLow di Windows, precisamente in questo percorso:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Puoi accedere facilmente a questo percorso premendo contemporaneamente `CTRL` + `R` e inserendo nel dialog di esecuzione il seguente percorso: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

Qui potrai vedere tutti i tuoi salvataggi locali.

### Accesso ai Salvataggi via FTP

Fare il backup dei salvataggi dal server è semplice. Una volta connesso al tuo game server tramite un client FTP, vai al seguente percorso:
```
../rimworld-together/Saves
```

Qui vedrai delle cartelle, ognuna corrisponde a un salvataggio. Basta cliccare col tasto destro sulla cartella e usare il pulsante **Download** per salvarla localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici del salvataggio (e del file di configurazione) direttamente dall’interfaccia web. Vai nella sezione **Tools->Backups** del pannello del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare un Salvataggio

Come per il backup, caricare un salvataggio è facile. Prima assicurati di essere connesso al tuo game server tramite un client FTP. Poi vai al percorso:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Trascina semplicemente uno dei tuoi salvataggi in questa cartella tramite il client FTP e verrà caricato sul server.

:::info
Come detto all’inizio della guida, spostare mondi tra server con mod diverse probabilmente causerà problemi di gameplay.
:::

<InlineVoucher />