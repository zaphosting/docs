---
id: beammp-addon-map
title: "BeamMP: Installa Addon Mappa"
description: "Scopri come migliorare il tuo server BeamMP con addon mappa personalizzati per un gameplay multiplayer potenziato → Scopri di più ora"
sidebar_label: Installa Addon Mappa
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

BeamNG.Drive supporta nativamente le mod ed ha una community enorme che ti permette di espandere e migliorare il gameplay con i tuoi amici. Dal momento che BeamMP è semplicemente una mod multiplayer, la maggior parte degli addon mappa dovrebbe essere compatibile con il tuo server BeamMP. In questa guida vedremo come installare e attivare un addon mappa personalizzato sul tuo server BeamMP.

<InlineVoucher />

## Preparazione

Per installare un addon mappa sul tuo server BeamMP, devi connetterti via FTP. Se non hai mai fatto, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md).

Prima di procedere con l’installazione, devi anche trovare gli addon mappa che vuoi aggiungere al tuo server. Ti consigliamo di esplorare il [forum ufficiale di BeamNG.Drive](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) che contiene una libreria enorme di mod e addon mappa creati dalla community.

:::tip
Dato che BeamMP è una mod multiplayer per BeamNG.Drive, la maggior parte degli addon mappa dovrebbe funzionare sul tuo server BeamMP. Però, alcune mappe specifiche potrebbero non funzionare come previsto, quindi ti consigliamo di testare ogni mappa.
:::

## Installazione

Per cominciare, assicurati di aver scaricato un addon mappa che vuoi aggiungere al tuo server. Dovrebbe essere in formato `.zip`.

### Selezionare il Nome della Mappa

Prima di andare avanti, è importante verificare che il nome della mappa sia corretto. Il file `.zip` che hai scaricato di solito ha il nome giusto, ma non sempre, quindi è meglio controllare.

Per farlo, apri il file `.zip` scaricato. All’interno, trova e apri la cartella `levels`, che contiene la mappa vera e propria.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Devi copiare il nome esatto della cartella dell’addon mappa che trovi lì. Puoi farlo cliccando col tasto destro, selezionando `Proprietà` e copiando il testo evidenziato con `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Configurare la Mappa

Ora che hai il nome della mappa, devi modificare il file di configurazione per impostare la mappa attiva.

#### Disattivare l’override della configurazione

Prima di tutto, devi disabilitare la selezione mappa di default nelle impostazioni, altrimenti sovrascriverà le tue modifiche.

Puoi farlo facilmente andando nella sezione **Impostazioni** nel pannello web del tuo server di gioco.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Qui disattivi l’opzione "Map".

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Poi salva le impostazioni in fondo alla pagina.

#### Cambiare la mappa nella configurazione

Per cambiare la mappa nel config, vai nella sezione **Config** nel Webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Trova e apri il file `ServerConfig.toml` e cerca la riga:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Sostituisci il valore con `Map = "/levels/[tuo_nome_mappa]/info.json"` usando il nome della mappa che hai copiato prima, poi salva il file.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
In rari casi, una mappa può avere un formato diverso. Se la mappa non funziona dopo aver seguito tutti i passaggi, potrebbe essere necessario usare questo percorso invece di `Map = "/levels/[tuo_nome_mappa]/info.json"`: `Map = "/levels/[tuo_nome_mappa]/[tuo_nome_mappa].mis"`
:::

:::tip
Puoi sempre tornare a usare le mappe di default del gioco semplicemente riattivando l’opzione nelle impostazioni e scegliendo una di quelle:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Caricare la Mappa

Ultimo step: carica il file `.zip` della mappa che hai scaricato sul tuo server BeamMP via FTP. Se ti serve aiuto, usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md).

Nel client FTP, vai in questo percorso:
```
../beammp/Resources/Client
```

Trascina e rilascia il file `.zip` dell’addon mappa qui per caricarlo sul server. Con il file di configurazione modificato e i file della mappa caricati, il tuo addon mappa è pronto all’uso.

## Conclusione

Dopo aver seguito tutti i passaggi, riavvia il tuo server BeamMP. Hai installato con successo un addon mappa sul tuo server BeamMP. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />