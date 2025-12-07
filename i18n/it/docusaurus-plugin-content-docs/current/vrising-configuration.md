---
id: vrising-configuration
title: "V Rising: Configurazione Server"
description: "Scopri come personalizzare le impostazioni del server V Rising per un gameplay ottimale e controlla il tuo ambiente server → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server di V Rising offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Accesso al File di Configurazione

Prima di tutto, dovrai accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per modificare questo file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly è andare nella sezione **Settings** del webinterface del tuo game server e cercare le impostazioni appropriate, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via file Config WI">

#### Via file Config WI

:::note
Il server deve essere spento prima di poter modificare la configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

In alternativa, per chi vuole modificare direttamente il file raw, puoi accedere alla sezione **Configs** nel webinterface del tuo game server e cliccare sul pulsante blu per modificare il file, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Si aprirà un editor di testo direttamente sul sito per permetterti di modificare il file.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Il server deve essere spento prima di poter modificare la configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Tuttavia, questo metodo richiede più tempo e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** nel webinterface del tuo game server come descritto sopra.

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server

Nelle sezioni qui sotto trovi tabelle con informazioni sulle opzioni di configurazione disponibili, sia per il server vero e proprio che per le impostazioni di gameplay.

:::tip
Non consigliamo di modificare le impostazioni di Porta, poiché sono configurate automaticamente dal game server. Cambiare i valori delle Porte potrebbe causare malfunzionamenti del server!
:::

### Impostazioni Server Importanti

Questa sezione riassume le impostazioni server più importanti, che si trovano nel file di configurazione **ServerHostSettings.json**. Per la lista completa delle opzioni di configurazione, consulta la [guida ufficiale su GitHub](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Nome Parametro      | Esempio                  | Descrizione                                                                |
| ------------------- | ------------------------ | -------------------------------------------------------------------------- | 
| Name                | ZAP-Hosting Docs Test    | Imposta il nome del tuo server                                             |
| Description         | ZAP is the best!         | Imposta la descrizione del tuo server                                      |
| Port                | 9876 (default)           | Imposta la porta di rete usata dal gioco                                   |
| QueryPort           | 9877 (default)           | Imposta la porta query usata per restituire info sul server nella lista    |
| MaxConnectedUsers   | 10                       | Imposta il numero massimo di giocatori connessi contemporaneamente         |
| MaxConnectedAdmins  | 4                        | Imposta il numero di admin che possono entrare su un server pieno          |
| ServerFps           | 30 (default consigliato) | Imposta il frame rate del server, consigliamo di lasciarlo di default      |
| SaveName            | ZAPDocsTest              | Imposta il nome del salvataggio del mondo                                  |
| Password            | iLoveZAP!2024            | Imposta una password per il server, oppure lascia vuoto per nessuna        |
| ListOnMasterServer  | true/false               | Attiva o disattiva la visibilità del server nella lista server             |
| AutoSaveCount       | 15                       | Decidi quanti salvataggi vecchi mantenere                                  |
| AutoSaveInterval    | 600                      | Imposta l’intervallo tra ogni salvataggio automatico                       |
| RCON Enabled        | true/false               | Attiva o disattiva RCON                                                    |
| RCON Port           | 25575                    | Imposta la porta RCON                                                      |
| RCON Password       | iLoveZAP!2024            | Imposta la password per la connessione RCON                                |

Dopo aver completato le modifiche, ricordati di salvare il file e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

### Impostazioni Chiave di Configurazione Gameplay

V Rising offre tantissimi parametri e opzioni di configurazione per adattare il gameplay. In questa sezione riassumiamo le più importanti, che si trovano nel file **ServerGameSettings.json**.

| Nome Parametro           | Esempio                       | Descrizione                                                                                          |
| ------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------- | 
| GameDifficulty           | Normal                        | Imposta la difficoltà del gioco per il tuo mondo                                                  |
| GameModeType             | PvP, PvE                      | Imposta il tipo di modalità di gioco per il tuo mondo                                             |
| CastleDamageMode         | Always, Never, TimeRestricted | Imposta quando i castelli possono essere danneggiati, usa il parametro VSCastle per il tempo in "TimeRestricted" |
| PlayerDamageMode         | Always, TimeRestricted        | Imposta se i giocatori possono danneggiarsi tra loro, usa il parametro VSPlayer per il tempo in "TimeRestricted" |
| PvPProtectionMode        | Short, Medium, Long           | Imposta per quanto tempo i nuovi giocatori sono invincibili                                       |
| DeathContainerPermission | Anyone, ClanMembers           | Imposta chi può saccheggiare gli oggetti lasciati cadere alla morte di un giocatore               |
| CanLootEnemyContainers   | true/false                    | Imposta se un giocatore può saccheggiare i forzieri di un altro giocatore non nel clan            |
| BloodBoundEquipment      | true/false                    | Imposta se mantieni l’equipaggiamento dopo la morte                                               |
| TeleportBoundItems       | true/false                    | Imposta se gli oggetti possono bloccare il teletrasporto tramite i Vampire Waygates               |
| AllowGlobalChat          | true/false                    | Attiva o disattiva la chat globale                                                                |

Dopo aver completato le modifiche, ricordati di salvare il file e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />