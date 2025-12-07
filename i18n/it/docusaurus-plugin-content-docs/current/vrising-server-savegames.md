---
id: vrising-server-savegames
title: "V Rising: Gestione dei Savegame di V Rising"
description: "Scopri come gestire e fare il backup dei tuoi salvataggi di V Rising per un'esperienza multiplayer sicura → Scopri di più ora"
sidebar_label: Gestione Savegame
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In questa guida vedremo come gestire i tuoi salvataggi di V Rising sul tuo game server, inclusi il backup dei salvataggi locali e server e come caricarli sul server.

<InlineVoucher />

## Preparazione

Per accedere ai file del server ti servirà un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti.

Dovrai connetterti al tuo server tramite client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo game server. Per una guida dettagliata su come connetterti, dai un’occhiata al nostro tutorial [Accesso via FTP](gameserver-ftpaccess.md).

## Backup Savegame

### Savegame Locale

I salvataggi locali sono quelli creati mentre ospiti una partita multiplayer direttamente sul tuo dispositivo. Li trovi nella cartella AppData LocalLow di Windows, precisamente in questo percorso:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Puoi accedere facilmente a questa cartella premendo `CTRL` + `R` insieme e inserendo questo percorso nella finestra di esecuzione: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Premi **OK** e verrai portato direttamente alla cartella.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

Qui troverai una cartella `Saves` e/o `CloudSaves` a seconda se hai usato la funzione Steam Cloud Saving e del tipo di server. Dentro troverai i tuoi salvataggi locali.

:::note
A seconda della versione del gioco, i salvataggi saranno dentro una cartella v1 o v3.
:::

### Accesso ai Savegame via FTP

Fare il backup dei salvataggi dal server è semplice. Dopo esserti connesso al server via FTP, vai in questo percorso:
```
../vrising/save-data/Saves
```

Qui vedrai le cartelle v1 e v3, a seconda della versione del gioco. Dentro troverai i tuoi salvataggi. Clicca col tasto destro sulla cartella e usa il pulsante **Download** per salvarla localmente sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Backup Automatico

Offriamo anche la possibilità di fare backup automatici dei tuoi salvataggi (e file di configurazione) direttamente dall’interfaccia web. Vai su **Tools->Backups** nel pannello del tuo game server. Qui puoi configurare varie opzioni per programmare backup automatici. Ti mettiamo a disposizione 10GB di spazio gratuito per i backup. Per maggiori dettagli, dai un’occhiata alla nostra guida dedicata ai [Backup](gameserver-backups.md).

## Caricare Savegame

Come per il backup, caricare un salvataggio è facile. Prima assicurati di essere connesso al server via FTP. Poi vai in questo percorso:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

A seconda della versione dei tuoi salvataggi, trascina e rilascia la cartella del salvataggio nella cartella corretta tramite il client FTP e verrà caricata sul server.

:::tip
Ti conviene copiare il nome della cartella del salvataggio che hai caricato, ti servirà per attivarlo nel passaggio successivo.
:::

## Attivare Savegame

Per usare un salvataggio specifico devi modificare un file di configurazione. Ci sono vari modi per farlo, qui ti spieghiamo come farlo tramite l’interfaccia web, che è la più semplice. Se vuoi vedere altri metodi, dai un’occhiata alla nostra guida [Configurazione Server](vrising-configuration.md).

Vai nella sezione **Settings** dell’interfaccia web del tuo game server e trova l’impostazione **Savename**.

Cambia questo valore con il nome della cartella del salvataggio che hai caricato nel passaggio precedente. Quando hai finito, salva in basso con il pulsante verde **Save** e poi riavvia il server.

<InlineVoucher />