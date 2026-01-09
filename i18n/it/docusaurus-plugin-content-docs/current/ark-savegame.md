---
id: ark-savegame
title: ARK Survival Evolved Importa il tuo salvataggio
description: "Scopri come ripristinare il tuo server Ark: Survival Evolved usando salvataggi ufficiali o personali per una continuità di gioco senza intoppi → Scopri di più ora"
sidebar_label: Importa salvataggio
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Vuoi importare il tuo salvataggio personale o un backup ufficiale sul tuo server Ark: Survival Evolved? Sei nel posto giusto! Questa guida ti spiega passo passo come importare il tuo salvataggio personale o ufficiale sul tuo nuovo server.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Come ottenere un server ARK:SE con backup ufficiali" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Prepara il tuo salvataggio

### Backup ufficiale

Prima di tutto devi scaricare il salvataggio ufficiale del tuo server. Puoi farlo direttamente dal [sito ufficiale di ARK](https://survivetheark.com/index.php?/server-backups/) oppure usare [uno strumento creato dalla community](https://arkutils.netlify.app/tools/officialdownload) che ti aiuta a trovare il tuo server più facilmente grazie alla funzione di ricerca.

:::note
Se giochi su Xbox o Playstation, purtroppo non potrai scaricare i file ufficiali del server. Gli sviluppatori hanno permesso il download libero solo dei salvataggi mondiali da Steam ed Epic.
:::

Ci sono due snapshot disponibili, una del 25 agosto 2023 e una del 30 settembre 2023. Devi trovare il tuo server e scaricare il salvataggio da uno di questi.

:::note
L’uso del backup ufficiale è possibile solo con la variante di server **ARK - SE (Official backupsave compatible)**. Se usi una versione diversa, puoi cambiarla nella sezione **games** del pannello web del tuo server o seguendo la nostra guida [Game Change](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Salvataggio personale

Per importare un salvataggio personale (non ufficiale), ti servono tutti i file del salvataggio. Di solito si trovano nella cartella **SavedArks**, dentro la directory **Shootergame/Saved**. Cerca questi file e salvali per il prossimo passaggio.

:::note
Per questo tipo di salvataggio usa la variante standard **Ark: SE** (senza supporto backup ufficiali), perché stai importando un salvataggio normale, non ufficiale.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Caricare il salvataggio sul server

Dopo aver scaricato il file `.zip` del salvataggio, devi estrarlo con un programma tipo 7zip o Winrar. Il processo di upload è lo stesso per ogni tipo di server e salvataggio.

Ora accedi al tuo server via FTP per caricare i file del salvataggio. Se ti serve aiuto per connetterti con il tuo client FTP preferito e trasferire i file, dai un’occhiata alla nostra guida [Accesso via FTP](gameserver-ftpaccess.md).

Con il client FTP aperto, vai nella sottocartella del tuo server:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Cancella tutti i file del salvataggio attuale (o fai un backup se vuoi continuare a giocare su quel salvataggio in futuro). Poi trascina e carica tutti i file estratti in questa cartella (inclusi i file .ark, .arktribe e .arkprofile). Abbi pazienza, il caricamento può richiedere un po’ di tempo a seconda della dimensione del salvataggio.

Quando l’upload è finito, riavvia il server e i nuovi file caricati saranno attivi. Hai appena caricato con successo un backup ufficiale sul tuo server Ark: Survival Evolved.

<InlineVoucher />