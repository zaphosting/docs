---
id: openmp-rcon
title: "Open.mp: Server con RCON"
description: "Scopri come gestire i server di gioco da remoto usando RCON per un controllo server efficiente e sicuro → Scopri di più ora"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cos’è RCON?

RCON è un’interfaccia presente in vari programmi, come i server di gioco, che permette la manutenzione e l’amministrazione remota. Questa interfaccia consente di gestire server già attivi e raggiungibili. Puoi accedervi tramite un programma specifico per la manutenzione remota e così controllare il server.

<InlineVoucher />

## Come accedere al file di configurazione

Per usare RCON, devi prima accedere alla configurazione del tuo server e attivare questa funzione. Puoi modificare il file di configurazione tramite il webinterface del server o direttamente via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via file di config WI">

#### Tramite file di configurazione nel Webinterface

Ti consigliamo questo metodo perché è il più semplice.

:::note
Il server deve essere spento prima di modificare la config, altrimenti le modifiche andranno perse al riavvio.
:::

Vai nella sezione **Configs** del webinterface del tuo game server e clicca sul pulsante blu per modificare il file, come in figura:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Si aprirà un editor di testo per modificare direttamente il file. Cerca la sezione `rcon`. Qui imposta il parametro `enable` su `true`, ad esempio: `"enable":true`. Ti consigliamo di usare `CTRL+F` per aprire la ricerca del browser e trovare più facilmente la sezione.

Nella stessa sezione, imposta anche una password per l’accesso RCON modificando il parametro `password`. Questo evita accessi non autorizzati e va tenuto segreto.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Tramite FTP

:::note
Il server deve essere spento prima di modificare la config, altrimenti le modifiche andranno perse al riavvio.
:::

Un altro modo per modificare il file di configurazione è via FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Però questo metodo è più lento e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare la sezione **Configs** nel webinterface del server, come spiegato sopra.

Dopo esserti connesso via FTP, vai nella cartella:
```
..g[zap_id]/gta-openmp/
```

Qui trova il file `config.json` e aprilo. È il file di configurazione del server da modificare.

Nel file cerca la sezione `rcon`. Imposta `enable` su `true` e scegli una password per l’accesso RCON modificando il parametro `password`.

</TabItem>
</Tabs>

:::info
Ricordati di riavviare il server dopo aver modificato la configurazione.
:::

## Come usare RCON

Ora che hai abilitato RCON nella configurazione del server, puoi accedere all’interfaccia RCON di Open.mp tramite la porta definita nel file.

Ti serve un programma RCON per connetterti. Ti consigliamo [RCON Console](https://sourceforge.net/projects/rconconsole/) perché è open-source.

Nel programma RCON che scegli, inserisci l’indirizzo IP e la porta del tuo server. Assicurati che il server di gioco sia online e attivo.

Se la connessione va a buon fine, potrai inviare comandi al tuo server Palworld tramite il programma RCON Console scelto.

:::tip
Dai un’occhiata ai nostri [Comandi Server](openmp-server-commands.md) per vedere tutti i comandi disponibili da eseguire via RCON.
:::

Hai abilitato con successo RCON sul tuo server Palworld.

<InlineVoucher />