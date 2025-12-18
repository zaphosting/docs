---
id: abioticfactor-configuration
title: "Abiotic Factor: Configurazione del Server"
description: "Scopri come personalizzare le impostazioni del server di Abiotic Factor per ottimizzare la tua esperienza di gioco e le prestazioni del server → Scopri di più ora"
sidebar_label: Configurazione del Server
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server di Abiotic Factor offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<InlineVoucher />

## Accesso al File di Configurazione

Prima di tutto, devi accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per modificare questo file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly è andare nella sezione **Settings** del webinterface del tuo game server e cercare lì le impostazioni appropriate, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via file di Config WI">

#### Via file di Config WI

:::note
Il server deve essere spento prima di poter modificare la configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

In alternativa, per chi vuole modificare direttamente il file raw, puoi accedere andando nella sezione **Configs** del webinterface del tuo game server e cliccando sul pulsante blu per modificare il file, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Questo aprirà un editor di testo direttamente sul sito per permetterti di modificarlo.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Il server deve essere spento prima di poter modificare la configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Tuttavia, questo metodo richiede più tempo e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** del webinterface del tuo game server come spiegato sopra.

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server

Nelle sezioni qui sotto, presentiamo delle tabelle con informazioni su un’ampia gamma di opzioni di configurazione disponibili per i server dedicati di Abiotic Factor.

### Impostazioni Importanti del Server

Queste impostazioni possono essere configurate solo direttamente tramite il pannello webinterface del tuo game server nella sezione **Settings**.

| Nome Parametro     | Esempio                  | Descrizione                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Server Name        | ZAP-Hosting Docs Test    | Imposta il nome del tuo server                                             |
| Password           | iLoveZAP!2024            | Imposta una password per il tuo server, oppure lascia vuoto per nessuna    |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

### Impostazioni di Configurazione del Gameplay

Abiotic Factor include una vasta gamma di opzioni di configurazione del gameplay chiamate **Sandbox Settings**. Un file chiamato **SandboxSettings.ini** dovrebbe essere presente nella cartella principale `world` quando accedi al server via FTP.

Se non vedi questo file, crealo localmente sul tuo sistema e copia il seguente contenuto: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Ora puoi modificare i valori come preferisci. Quando sei pronto, carica questo file nella cartella principale `world` via FTP, al seguente percorso:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

Nella tabella qui sotto riassumiamo alcune impostazioni chiave del gameplay che si trovano nel file **SandboxSettings.ini**. Se vuoi vedere tutte le opzioni disponibili, dai un’occhiata alla [Pagina Ufficiale GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Nome Parametro               | Esempio    | Descrizione                                                             |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Attiva o disattiva la comparsa del loot sulla mappa                     |
| PowerSocketsOffAtNight       | true/false | Attiva o disattiva lo spegnimento dell’energia durante la notte        |
| DayNightCycleSpeedMultiplier | 1.0        | Imposta il moltiplicatore della velocità del ciclo giorno/notte         |
| EnemySpawnRate               | 1.0        | Imposta la frequenza di spawn dei nemici                                |
| EnemyHealthMultiplier        | 1.0        | Imposta un moltiplicatore per la salute dei nemici                      |
| EnemyPlayerDamageMultiplier  | 1.0        | Imposta un moltiplicatore per il danno che i nemici infliggono ai giocatori |
| DetectionSpeedMultiplier     | 1.0        | Imposta un moltiplicatore per la velocità con cui i nemici individuano i giocatori |
| PlayerXPGainMultiplier       | 1.0        | Imposta un moltiplicatore per l’XP guadagnata dai giocatori             |
| ItemStackSizeMultiplier      | 1.0        | Imposta un moltiplicatore per la quantità di oggetti impilabili in uno slot dell’inventario |
| ItemDurabilityMultiplier     | 1.0        | Imposta un moltiplicatore per la durabilità degli oggetti               |
| ShowDeathMessages            | true/false | Attiva o disattiva la notifica ai giocatori delle morti di entità       |
| AllowRecipeSharing           | true/false | Attiva o disattiva la possibilità per i giocatori di condividere le ricette degli oggetti |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />