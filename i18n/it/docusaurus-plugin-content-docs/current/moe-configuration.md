---
id: moe-configuration
title: "Myth of Empires: Configurazione Server"
description: "Scopri come personalizzare il tuo server Myth of Empires per un gameplay ottimale e il massimo controllo → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Myth of Empires offre una vasta gamma di opzioni di configurazione che ti permettono di personalizzare il tuo server come preferisci. In questa guida esploreremo alcuni dei parametri di configurazione attualmente disponibili e spiegheremo ciascuno in dettaglio.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Configura il server Myth Of Empires in solo UN MINUTO!" description="Ti sembra più facile capire quando vedi le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Come accedere al file di configurazione

Prima di tutto, devi accedere al file di configurazione per modificare qualsiasi parametro. Ci sono diversi modi per farlo.

:::tip
Ti consigliamo caldamente di usare il metodo **Webinterface** perché MOE ha un sacco di opzioni e file di configurazione, quindi sarà molto più veloce settare tutto direttamente dal webinterface rispetto a modificare i valori manualmente.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

Il metodo più user-friendly è andare nella sezione **Settings** del webinterface del tuo game server e cercare lì le impostazioni giuste, come vedi qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Potrai vedere tante sezioni e impostazioni dove modificare direttamente i valori.

</TabItem>

<TabItem value="configs" label="Via file di configurazione WI">

#### Via file di configurazione WI

:::note
Il server deve essere spento prima di modificare il file di configurazione, altrimenti le modifiche andranno perse al riavvio.
:::

In alternativa, se vuoi modificare direttamente i file di configurazione raw, puoi farlo dalla sezione **Configs** nel webinterface del tuo game server. Per modificare un file, clicca sul pulsante blu di modifica, come vedi qui:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Si aprirà un editor di testo direttamente sul sito per permetterti di modificare il file.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
Il server deve essere spento prima di modificare il file di configurazione, altrimenti le modifiche andranno perse al riavvio.
:::

L’ultimo metodo per accedere al file raw è tramite FTP. Se non hai mai usato FTP, ti consigliamo di dare un’occhiata alla guida [Accesso via FTP](gameserver-ftpaccess.md). Però questo metodo è più lento e se vuoi modificare direttamente i contenuti del file, ti consigliamo di usare semplicemente la sezione **Settings** del webinterface come detto sopra.

</TabItem>
</Tabs>

## Opzioni di configurazione del server

Qui abbiamo selezionato alcune delle opzioni di configurazione più importanti e core che probabilmente vorrai cambiare, incluse alcune impostazioni interne.

:::tip
Non consigliamo di modificare Porta, IP o Directory, perché sono configurati automaticamente dal game server. Cambiare questi valori potrebbe causare problemi al tuo server!
:::

| Nome parametro | Esempio                               | Descrizione                                               |
| -------------- | ----------------------------------- | --------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                | Il nome del tuo server                                    |
| password       | iLoveZAP!2024                       | Proteggi il server con una password (privato)             |
| description    | Questo è un server fighissimo!       | Aggiungi una descrizione per il tuo server               |
| gamemode       | PVE / PVP                          | Imposta la modalità di gioco del server                   |
| mapname        | Central Island                     | Imposta la mappa del server                               |
| difficulty     | 1                                   | Difficoltà del tuo mondo                                  |

Dopo aver completato le modifiche, ricordati di salvare il file dove serve e di riavviare il server. Al prossimo avvio, il server userà le impostazioni che hai fornito.

<InlineVoucher />