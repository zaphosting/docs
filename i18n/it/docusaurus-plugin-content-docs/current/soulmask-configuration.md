---
id: soulmask-configuration
title: "Soulmask: Configurazione del Server"
description: "Scopri come personalizzare le impostazioni del server Soulmask e ottimizzare la configurazione di gioco per un'esperienza su misura → Scopri di più ora"
sidebar_label: Configurazione del Server
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Soulmask offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Accesso al File di Configurazione

Prima di tutto, dovrai accedere ai file di configurazione per modificare qualsiasi parametro. Puoi regolare le impostazioni del server tramite il webinterface e le impostazioni di gioco tramite FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo principale per accedere alle opzioni di configurazione del server è andare nella sezione **Settings** del webinterface del tuo game server e cercare lì le impostazioni appropriate, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Il server deve essere spento prima di poter modificare la configurazione; modificare il file di config e riavviare il server senza spegnerlo prima farà sì che le modifiche vengano annullate.
:::

Il metodo principale per accedere al file di configurazione di gioco è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server
Nelle sezioni seguenti vedremo come accedere alle opzioni di configurazione e esploreremo alcune delle opzioni disponibili sia per le impostazioni del server che per quelle di gioco.

### Impostazioni Importanti del Server

Al momento, l’unico modo per modificare le impostazioni del server è tramite la sezione **Settings** del webinterface del tuo game server. In questa sezione potrai modificare quanto segue:

| Nome Parametro       | Esempio               | Descrizione                                             |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Servername           | ZAP-Hosting Docs Test | Imposta il nome del tuo server                           |
| Password server      | iLoveZAP!2024         | Imposta una password per il server, oppure lascia vuoto per nessuna |
| Password admin       | iLoveZAP!2024         | Imposta una password per l’accesso admin                |
| Gamemode             | PVE/PVP               | Seleziona se vuoi che il gioco sia PVE o PVP            |

Quando hai finito, assicurati di usare il pulsante salva in fondo alla sezione e riavvia il server.

### Impostazioni di Configurazione di Gioco

Al momento, l’unico modo per accedere al file di configurazione è tramite FTP. Assicurati di spegnere il server prima di modificare il file, altrimenti le modifiche potrebbero essere annullate.

Vai al seguente percorso e apri il file **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Questo file contiene un sacco di opzioni di configurazione di gioco che puoi personalizzare a tuo piacimento.

Dopo aver completato le modifiche, ricordati di salvare il file e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />