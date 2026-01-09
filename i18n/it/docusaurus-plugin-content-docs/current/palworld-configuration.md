---
id: palworld-configuration
title: "Palworld: Configurazione del Server Palworld"
description: "Scopri come personalizzare le impostazioni del server Palworld per un'esperienza di gioco su misura e ottimizza il tuo gameplay → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
I server Palworld offrono una vasta gamma di parametri di configurazione che puoi personalizzare a tuo piacimento. In questa guida esploreremo tutti i parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Configura il server Palworld in solo UN MINUTO!" description="Ti piace capire meglio quando vedi le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

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

<TabItem value="configs" label="Via file di Configurazione WI">

#### Via file di Configurazione WI

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

In alternativa, per chi vuole modificare direttamente il file raw, puoi accedere andando nella sezione **Configs** del webinterface del tuo game server e cliccando sul pulsante blu per modificare il file, come mostrato qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Si aprirà un editor di testo direttamente sul sito per permetterti di modificarlo.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Il server deve essere spento prima di poter modificare il file di configurazione; modificare il file e riavviare il server annullerà tutte le modifiche.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai familiarità con l’uso di FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Tuttavia, questo metodo richiede più tempo e se vuoi modificare direttamente il contenuto del file, ti consigliamo di usare semplicemente la sezione **Configs** del webinterface del tuo game server come spiegato sopra.

</TabItem>
</Tabs>

## Opzioni di Configurazione del Server

### Abilita il supporto Crossplay

I server dedicati Palworld supportano l’uso di più piattaforme, quindi puoi usare il crossplay. La piattaforma Steam è impostata di default. Se vuoi attivare il supporto per Xbox, PS5 e Mac, puoi farlo nell’amministrazione del game server sotto le impostazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Il crossplay tra le versioni Steam e Microsoft Store/Xbox non è ancora possibile. Il tuo server può essere configurato per funzionare o con Steam o con Microsoft Store/Xbox.
:::

:::info
Sulle console Xbox non puoi connetterti direttamente tramite indirizzo IP, quindi se vuoi giocare su Xbox devi rendere il tuo server dedicato pubblico.

Dovresti anche impostare un nome server facilmente trovabile, dai un’occhiata alla nostra guida [Configurazione Server](palworld-configuration.md) per sapere come fare.
:::

### Impostazioni Importanti del Server

Queste sono opzioni di configurazione essenziali per personalizzare la lista del tuo server, proteggerlo con password e altre impostazioni interne.

:::tip
Non consigliamo di modificare le impostazioni di Porta o IP, poiché sono configurate automaticamente dal game server. Cambiare i valori di IP/Porta potrebbe causare malfunzionamenti del server!
:::

| Nome Parametro                 | Esempio                                 | Descrizione                                                 |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                       | Numero massimo di giocatori che possono entrare nel server (max 32) |
| ServerName                     | ZAP-Hosting Docs Test                   | Nome del tuo server                                          |
| ServerDescription              | Questo è un server di test              | Descrizione del tuo server                                   |
| AdminPassword                  | ctRQvhPAWVHq                            | Password Admin usata per i comandi admin                     |
| ServerPassword                 | iLoveZAP!2024                           | Blocca il server con una password (privato)                 |
| PublicPort                     | 8211 (default)                          | Porta pubblica su cui gira il server                         |
| PublicIP                       | 123.123.123.123                         | IP pubblico su cui gira il server                             |
| RCONEnabled                    | true                                    | Attiva o disattiva l’uso di RCON                             |
| RCONPort                       | 8222                                    | Numero di porta usata per RCON                               |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

### Impostazioni di Configurazione del Gameplay

Queste sono opzioni meno cruciali, principalmente per modificare il gameplay, la progressione, la mappa e il mondo in cui stai giocando.

| Nome Parametro                     | Descrizione                                      | 
| ---------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate                   | Imposta la velocità del tempo durante il giorno  |
| NightTimeSpeedRate                 | Imposta la velocità del tempo durante la notte  |
| ExpRate                            | Imposta la velocità con cui guadagni esperienza (XP) |
| PalCaptureRate                     | Velocità con cui catturi i Pal                    |
| PalSpawnNumRate                    | Frequenza di apparizione dei Pal                   |
| PalDamageRateAttack                | Moltiplicatore danni inflitti dai Pal             |
| PalDamageRateDefense               | Moltiplicatore danni subiti dai Pal                |
| PlayerDamageRateAttack             | Moltiplicatore danni inflitti dal giocatore       |
| PlayerDamageRateDefense            | Moltiplicatore danni subiti dal giocatore          |
| PlayerStomachDecreaceRate          | Velocità di diminuzione della fame del giocatore  |
| PlayerStaminaDecreaceRate          | Velocità di diminuzione della stamina del giocatore |
| PlayerAutoHPRegeneRate             | Velocità di rigenerazione automatica HP del giocatore |
| PlayerAutoHpRegeneRateInSleep      | Rigenerazione HP del giocatore durante il sonno   |
| PalStomachDecreaceRate             | Velocità di diminuzione della fame dei Pal         |
| PalStaminaDecreaceRate             | Velocità di diminuzione della stamina dei Pal      |
| PalAutoHPRegeneRate                | Velocità di rigenerazione automatica HP dei Pal   |
| PalAutoHpRegeneRateInSleep         | Rigenerazione HP dei Pal durante il sonno (in Palbox) |
| BuildObjectDamageRate              | Moltiplicatore danni alle strutture                 |
| BuildObjectDeteriorationDamageRate | Velocità di deterioramento delle strutture         |
| CollectionDropRate                 | Moltiplicatore degli oggetti raccolti               |
| CollectionObjectHpRate             | Moltiplicatore HP degli oggetti raccolti            |
| CollectionObjectRespawnSpeedRate   | Intervallo di respawn degli oggetti raccolti       |
| EnemyDropItemRate                  | Moltiplicatore degli oggetti lasciati dai nemici   |
| DeathPenalty                       | Penalità alla morte (Nessuna/Oggetto)               |
| GuildPlayerMaxNum                  | Numero massimo di giocatori in una Gilda            |
| PalEggDefaultHatchingTime          | Tempo (h) per incubare un uovo massivo              |

Dopo aver completato le modifiche, assicurati di salvare il file dove necessario e riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />