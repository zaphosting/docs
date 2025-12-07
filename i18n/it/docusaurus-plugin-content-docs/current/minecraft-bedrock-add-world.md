---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Importa il tuo Mondo"
description: "Scopri come importare e condividere i tuoi mondi personalizzati di Minecraft Bedrock sul tuo server per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: Importa il tuo Mondo
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Minecraft Bedrock Edition ti permette di creare i tuoi mondi e usarli sul tuo server. In questa guida ti mostriamo come importare un mondo personalizzato nel tuo Minecraft: Bedrock Server per condividerlo con i tuoi amici.

<InlineVoucher />

## Preparazione

Per importare un mondo nel tuo Minecraft Bedrock Server, devi connetterti via FTP. Se non hai mai fatto, ti consigliamo di dare un’occhiata alla guida su [Accesso FTP](gameserver-ftpaccess.md).

Assicurati di aver già salvato il mondo che vuoi importare sul tuo PC. Il mondo deve essere in una cartella con i file corrispondenti.
Se vuoi caricare un mondo da Minecraft: Bedrock in single-player, lo trovi al seguente percorso:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installazione

### Ferma il Server

Prima di iniziare l’importazione, devi fermare il tuo Minecraft Bedrock Server. Così eviti di perdere dati e l’importazione va liscia.

### Carica il Mondo

Vai via FTP nella cartella dove sono salvati i mondi del server. Di solito il percorso è:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Qui vedi tutte le cartelle dei mondi attualmente sul server. Ogni mondo ha un nome unico.

Carica la cartella del mondo che vuoi importare in questa directory. Attenzione a non cambiare il nome della cartella, altrimenti Minecraft non riconoscerà il mondo.

Poi apri il file `server.properties` che si trova nella cartella principale del server e modifica il valore di `level-name` impostandolo sul nome della cartella del tuo mondo:

```
level-name=NomeCartellaDelMondo
```
:::tip
Se vuoi tornare al mondo di default, basta cambiare di nuovo il valore in `Bedrock level` e riavviare il server!
:::

### Avvia il Server

Dopo aver caricato il mondo, riavvia il server. Il mondo importato dovrebbe caricarsi automaticamente.

### Verifica le Modifiche

Connettiti al server e controlla che il mondo importato sia caricato correttamente. Ora puoi giocare nel nuovo mondo. Se qualcosa non funziona, ricontrolla i passaggi e assicurati che le cartelle siano nominate e posizionate correttamente.

## Conclusione

Importare un mondo nel tuo Minecraft Bedrock Server è facile e ti permette di condividere le tue creazioni con gli altri. Per domande o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />