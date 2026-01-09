---
id: enshrouded-configuration
title: "Enshrouded: Configurazione del Server Enshrouded"
description: "Scopri come personalizzare le impostazioni del server Enshrouded per un gameplay ottimale e una gestione server top → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Al lancio, Enshrouded offre alcuni parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Configura il Server Enshrouded in soli 60 secondi!" description="Ti è più facile capire quando vedi le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Come accedere al file di configurazione

Prima di tutto, devi accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per farlo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly è andare nella sezione **Impostazioni** del webinterface del tuo game server e cercare lì le impostazioni giuste, come vedi qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Via file di configurazione WI">

#### Via file di configurazione WI

:::note
Il server deve essere spento prima di modificare il file di configurazione, altrimenti le modifiche andranno perse al riavvio.
:::

In alternativa, se vuoi modificare direttamente il file raw, puoi farlo andando nella sezione **Configs** del webinterface del tuo game server e cliccando sul pulsante blu per modificare il file, come mostrato qui:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Si aprirà un editor di testo direttamente sul sito per permetterti di modificare il file.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Il server deve essere spento prima di modificare il file di configurazione, altrimenti le modifiche andranno perse al riavvio.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Però questo metodo è più lento e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** del webinterface del tuo game server come detto sopra.

</TabItem>
</Tabs>

## Opzioni di configurazione del server

Queste sono le opzioni di configurazione server attualmente disponibili fornite dal gioco per personalizzare il tuo server, in particolare nome server, password e alcune impostazioni interne.

:::tip
Non consigliamo di cambiare Porta, IP o Directory, perché sono configurati automaticamente dal game server. Cambiare questi valori potrebbe far crashare il tuo server!
:::

| Nome Parametro | Esempio                               | Descrizione                                               |
| -------------- | ------------------------------------- | --------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                 | Il nome del tuo server                                    |
| password       | iLoveZAP!2024                        | Blocca il server con una password (privato)               |
| saveDirectory  | ./savegame (default)                  | Imposta la cartella dove vuoi salvare i tuoi salvataggi   |
| logDirectory   | ./logs (default)                      | Imposta la cartella dove vuoi salvare i log                |
| ip             | 123.123.123.123                       | IP pubblico su cui gira il server                          |
| gamePort       | 15636 (default)                       | Porta pubblica su cui gira il server                       |
| queryPort      | 15637 (default)                       | Porta pubblica per accedere al server                      |
| slotCount      | 4                                    | Numero massimo di giocatori che possono entrare (max 16)  |

Dopo aver completato le modifiche, ricordati di salvare il file dove serve e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />