---
id: foundry-configuration
title: "Foundry: Configurazione Server"
description: "Scopri come personalizzare le impostazioni del server Foundry per un gameplay ottimale e una gestione efficiente → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Foundry offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Accesso al File di Configurazione

Prima di tutto, devi accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per modificare questo file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly è andare nella sezione **Settings** sul webinterface del tuo game server e cercare le impostazioni appropriate, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via file di Configurazione WI">

#### Via file di Configurazione WI

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

In alternativa, per chi vuole modificare direttamente il file raw, puoi accedervi andando nella sezione **Configs** sul webinterface del tuo game server e cliccando sul pulsante blu per modificare il file, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Questo aprirà un editor di testo direttamente sul sito per permetterti di modificarlo.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Tuttavia, questo metodo richiede più tempo e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** sul webinterface del tuo game server come spiegato sopra.

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server

Nella tabella qui sotto, presentiamo le opzioni di configurazione server più importanti attualmente disponibili sui server Foundry.

:::tip
Non consigliamo di modificare le impostazioni della porta, poiché sono configurate automaticamente dal game server. Cambiare i valori delle porte potrebbe causare malfunzionamenti del server!
:::

### Impostazioni Server Importanti

| Nome Parametro      | Esempio                  | Descrizione                                                                          |
| ------------------- | ------------------------ | ------------------------------------------------------------------------------------ | 
| server_world_name   | ZAPDocsTest              | Imposta il nome del mondo, che sarà anche la cartella dove verranno salvati i file  |
| server_name         | ZAP-Hosting Docs Test    | Nome che appare nella lista server per il tuo server                               |
| server_password     | iLoveZAP!2024            | Imposta una password richiesta per entrare nel server                              |
| server_is_public    | true/false               | Attiva o disattiva la visualizzazione del server nel browser server                 |
| server_port         | 3724 (default)           | Imposta la porta di rete usata dal gioco                                           |
| server_query_port   | 27015 (default)          | Imposta la porta query usata per restituire info sul server nella lista server      |
| server_max_players  | 32                       | Imposta il numero massimo di giocatori che possono essere connessi contemporaneamente |

### Impostazioni di Configurazione Gameplay

| Nome Parametro          | Esempio     | Descrizione                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Attiva o disattiva la pausa del server quando non ci sono giocatori online       |
| map_seed                | 42938743982 | Imposta un seed personalizzato per la generazione del mondo                      |
| autosave_interval       | 300         | Imposta ogni quanto tempo il server salva automaticamente (in secondi)            |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e di riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />