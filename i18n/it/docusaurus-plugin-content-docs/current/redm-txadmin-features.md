---
id: redm-txadmin-features
title: "RedM: Interfaccia txAdmin"
description: "Scopri come gestire e monitorare efficacemente il tuo server RedM con il pannello web completo di txAdmin → Scopri di più ora"
sidebar_label: Interfaccia txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

txAdmin è un pannello web completamente gratuito e ricco di funzionalità per Gestire & Monitorare il tuo server RedM. Offre una vasta gamma di feature pensate per rendere la gestione di un server RedM facilissima. In questa guida ti presenteremo l’interfaccia di txAdmin, mettendo in evidenza le sue funzionalità e spiegandoti esattamente cosa puoi fare con essa.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigazione

Il menu di navigazione include le seguenti voci: **Players**, **History**, **Whitelist**, **Admins**, **Settings** e **System**. Ognuna di queste verrà spiegata più nel dettaglio qui sotto.

### Players

La sezione Players offre una panoramica generale delle statistiche dei giocatori, inclusi il numero totale di giocatori connessi, quelli connessi nelle ultime 24 ore e i nuovi giocatori connessi nelle ultime 24 ore e negli ultimi 7 giorni. Sotto troverai la lista dei giocatori attualmente connessi, con il loro tempo totale di gioco, la prima connessione e l’ultima connessione.

Clicca su un giocatore per accedere a opzioni di gestione aggiuntive. Qui puoi vedere ulteriori informazioni, note, cronologia (ban/avvertimenti), ID (Identificatori giocatore, Hardware ID) e le opzioni di ban.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

La sezione History elenca tutti gli avvertimenti e i ban emessi ai giocatori, con dettagli sul giocatore, il motivo, chi ha emesso o eseguito l’avvertimento/ban, inclusi data e ora. Da qui puoi anche revocare avvertimenti e ban.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

Nella sezione Whitelist puoi gestire la funzione whitelist. La whitelist ti permette di limitare chi può accedere al server. Se questa opzione è attivata nelle impostazioni di txAdmin, una richiesta di whitelist viene creata automaticamente quando un nuovo giocatore si connette per la prima volta. Potrai poi gestire queste richieste in questa sezione.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Nella sezione Admins puoi specificare e gestire gli amministratori. Puoi aggiungere nuovi admin cliccando sul pulsante **Add**. Si aprirà una finestra pop-up dove potrai creare l’account e impostare i permessi appropriati.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

Nella sezione Settings puoi configurare un sacco di opzioni sia per txAdmin che per il server stesso. Vista la mole di impostazioni disponibili, sono suddivise nelle seguenti categorie: **General**, **FXServer**, **Restarter**, **Player Manager**, **Discord** e **Game**. Ognuna verrà spiegata più nel dettaglio qui sotto.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

In General puoi configurare il nome del server, la lingua dei messaggi in chat/Discord e i template per i ban.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

In FXServer puoi impostare la cartella dati del server e il percorso del file CFG, oltre ad argomenti aggiuntivi come attivare gamemode/DLC, abilitare/disabilitare OneSync, Autostart e Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

In Bans puoi gestire la funzione ban. Definisci se gli account devono essere controllati attivamente per lo stato di ban e quale messaggio mostrare se la connessione viene rifiutata a causa di un ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

In Whitelist puoi gestire la funzione whitelist. Decidi se attivare o disattivare la whitelist e quale messaggio mostrare se la connessione viene rifiutata per mancanza di whitelist.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

In Discord puoi attivare l’integrazione con Discord, così le info vengono trasmesse automaticamente al server Discord collegato. Per attivarla devi configurare i dati necessari per il bot Discord.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

In Game puoi abilitare il menu txAdmin in-game, così gli admin possono accedere e gestire il menu usando il comando /tx. Puoi anche personalizzare layout, configurazione dei pulsanti per attivare/disattivare switch e notifiche/avvertimenti.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

Nella sezione Settings trovi alcune opzioni generali e info importanti, suddivise in: **Master Actions**, **Diagnostics**, **Console Log** e **Action Log**. Ognuna verrà spiegata più nel dettaglio qui sotto.



#### Master Actions

In Master Actions trovi l’opzione per resettare il tuo FXServer, fare un backup del database, pulire il database e definire dopo quanto tempo i giocatori inattivi devono essere rimossi dalla whitelist.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

In Diagnostics trovi tutte le info rilevanti sull’ambiente, runtime di txAdmin, report diagnostico, FXServer /info.json e processi.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

Console Log mostra l’output di txAdmin sul terminale principale, inclusi i messaggi di debug normalmente nascosti.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

Action Log registra tutte le azioni eseguite da txAdmin o da qualsiasi Admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Sidebar 

Il menu sidebar include le seguenti voci: **Dashboard**, **Live Console**, **Resources**, **Server Log** e **CFG Editor**. Ognuna verrà spiegata più nel dettaglio qui sotto.



### Dashboard

La dashboard mostra tutte le info generali essenziali sul server. Puoi monitorare dati live su utilizzo e performance tramite le statistiche. Lo stato del server, se avviato, online o fermo, è visibile nella sidebar. Da lì puoi anche avviare, fermare o riavviare il server, kickare tutti i giocatori con un click e inviare annunci. Puoi anche programmare riavvii automatici. A destra nella sidebar vedi info sui giocatori attualmente connessi.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

La Live Console ti dà info in tempo reale sulle attività del server. Qui puoi vedere dettagli su attività, avvertimenti e messaggi di errore. È un tool prezioso per il debug analizzando eventuali errori.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
In Resources trovi una panoramica di tutte le risorse, sia quelle preinstallate tramite template (recipe) che quelle aggiunte da te dopo. Puoi anche riavviarle o fermarle quando vuoi.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

Il Server Log ti permette di monitorare tutte le attività sul server. Per esempio, puoi vedere quando i giocatori si connettono o disconnettono, messaggi in chat, morti in game, azioni nel menu, comandi eseguiti ed eventi di sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

Con il CFG Editor puoi gestire e aggiornare il file di configurazione `server.cfg` del tuo server. Qui trovi tutti i comandi di configurazione essenziali che controllano le impostazioni del server.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />