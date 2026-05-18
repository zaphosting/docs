---
id: hytale-commands
title: "Hytale: Lista Comandi"
description: "Panoramica dei comandi disponibili per console e in-game per server Hytale → Scopri di più ora"
sidebar_label: Lista Comandi
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Hytale offrono una vasta gamma di comandi che permettono agli admin di gestire il gameplay, i giocatori, i mondi e la configurazione del server. Questi comandi possono essere eseguiti sia tramite la console live del server sia direttamente in-game, a patto di avere i permessi necessari.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Questa pagina fornisce una panoramica dei comandi per server Hytale più usati e ufficialmente documentati.

<InlineVoucher />



## Autenticazione

I comandi di autenticazione sono necessari per autorizzare il server, così da poter accettare connessioni dei giocatori e interagire con i servizi online di Hytale.

| Comando               | Descrizione                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Avvia il flusso di autenticazione basato su dispositivo. Il server mostra un URL e un codice dispositivo da confermare con un account Hytale. |
| `/auth login browser` | Avvia il flusso di autenticazione tramite browser. Richiede un ambiente grafico sul server. |
| `/auth status`        | Mostra lo stato attuale di autenticazione del server.        |
| `/auth logout`        | Disconnette il server e rimuove la sessione di autenticazione attiva. |



## Giocatori & Permessi

Questi comandi gestiscono l’accesso amministrativo e l’assegnazione dettagliata dei permessi per utenti e gruppi.

| Comando                                   | Descrizione                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Concede i privilegi di operatore al giocatore specificato.     |
| `/op remove <PlayerName>`                 | Revoca i privilegi di operatore al giocatore specificato.  |
| `/perm user list <uuid>`                  | Mostra tutti i permessi assegnati direttamente all’utente. |
| `/perm user add <uuid> <permission>`      | Assegna uno o più permessi direttamente all’utente.   |
| `/perm user remove <uuid> <permission>`   | Rimuove permessi specifici dall’utente.             |
| `/perm user group list <uuid>`            | Mostra tutti i gruppi di permessi a cui l’utente appartiene.    |
| `/perm user group add <uuid> <group>`     | Aggiunge l’utente al gruppo di permessi specificato.        |
| `/perm user group remove <uuid> <group>`  | Rimuove l’utente dal gruppo di permessi specificato.   |
| `/perm group list <group>`                | Elenca tutti i permessi assegnati a un gruppo.              |
| `/perm group add <group> <permission>`    | Aggiunge permessi a un gruppo.                            |
| `/perm group remove <group> <permission>` | Rimuove permessi da un gruppo.                       |



## Whitelist

I comandi whitelist limitano l’accesso al server solo ai giocatori approvati.

| Comando                          | Descrizione                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Aggiunge il giocatore specificato alla whitelist.      |
| `/whitelist remove <playername>` | Rimuove il giocatore specificato dalla whitelist. |
| `/whitelist list`                | Mostra tutti i giocatori attualmente in whitelist.      |
| `/whitelist enable`              | Attiva l’applicazione della whitelist.                   |
| `/whitelist disable`             | Disattiva la whitelist.                          |
| `/whitelist status`              | Mostra lo stato attuale della whitelist.           |



## Gestione del mondo

I comandi per i mondi gestiscono creazione, caricamento, scaricamento e cancellazione dei mondi.

| Comando                    | Descrizione                                        |
| -- | -- |
| `/world create <name>`     | Crea un nuovo mondo con il nome specificato.       |
| `/world load <name>`       | Carica un mondo esistente e lo rende attivo.       |
| `/world unload <name>`     | Scarica un mondo senza cancellarne i dati.         |
| `/world remove <name>`     | Cancella un mondo e tutti i dati associati.           |
| `/world setdefault <name>` | Imposta il mondo di default che si carica all’avvio del server. |



## Gameplay e ambiente

Questi comandi influenzano direttamente le regole di gioco e il comportamento del mondo.

| Comando                    | Descrizione                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Mostra tutti i giocatori attualmente connessi.   |
| `/tp <player> <target>`    | Teletrasporta un giocatore verso un altro giocatore.     |
| `/tp <player> <x> <y> <z>` | Teletrasporta un giocatore a coordinate specifiche. |



## Teletrasporto & Posizionamento

Comandi per gestire posizioni e visibilità dei giocatori.

| Comando                    | Descrizione                                 |
| -- | - |
| `/list`                    | Mostra tutti i giocatori attualmente connessi.   |
| `/tp <player> <target>`    | Teletrasporta un giocatore verso un altro giocatore.     |
| `/tp <player> <x> <y> <z>` | Teletrasporta un giocatore a coordinate specifiche. |



## Utility e aiuto

I comandi utility offrono aiuto e informazioni sul server.

| Comando           | Descrizione                                          |
| ----- | ---- |
| `/help`           | Mostra la lista dei comandi disponibili.               |
| `/help <command>` | Mostra l’aiuto dettagliato per un comando specifico.       |
| `/status`         | Mostra lo stato attuale del server e info sul runtime. |



## Conclusione

Il sistema di comandi di Hytale offre strumenti potenti per gestire server, giocatori e il comportamento del gameplay. Capendo e usando i comandi disponibili, gli admin possono gestire e personalizzare al meglio il loro ambiente server Hytale.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



<InlineVoucher />