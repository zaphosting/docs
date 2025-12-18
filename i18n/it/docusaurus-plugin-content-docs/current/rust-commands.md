---
id: rust-commands
title: "Rust: Comandi Admin"
description: "Scopri i comandi essenziali di Rust per la gestione del server e il controllo dei giocatori per ottimizzare il gameplay e l’amministrazione → Scopri di più ora"
sidebar_label: Comandi Admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Rust offre una vasta gamma di comandi utili sia per i proprietari dei server che per i giocatori. In questa pagina riassumiamo i più utili e popolari, usati per configurare il server, amministrare i giocatori e gestire il loro comportamento.

:::info
Alcuni comandi richiedono l’uso dello Steam64 ID di un giocatore. Usa il piccolo tutorial qui sotto per capire come ottenere lo Steam ID di un giocatore.
:::

<InlineVoucher />

## Come ottenere il tuo Steam ID
Per prima cosa, usa uno strumento come il [Steam ID Finder](https://steamidfinder.com/) per recuperare il tuo Steam64 ID.

Qui inserisci il tuo URL Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Poi clicca su `Find Steam ID`. Ora dovresti vedere il tuo profilo Steam, da cui puoi copiare il tuo "Steam64ID (Dec)".

Ecco fatto, ora hai lo Steam64 ID e puoi usarlo per i comandi che lo richiedono qui sotto.

## Categorie di Comandi

Usa le tab qui sotto per passare da una categoria all’altra. Le tabelle mostrano il comando, i valori accettati (se applicabili) e una descrizione per facilitarne la comprensione.

:::info
Qualsiasi comando menzionato in questa pagina è per Rust vanilla.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Impostazioni Server" default>

| Sintassi Comando                  | Valori Accettati | Descrizione | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Se attivo, ogni messaggio in chat sarà visibile a tutti i giocatori         | 
| server.stop      | -          | Ferma il server         | 
| server.save      | -          | Salva il server         | 
| server.saveinterval "valore"      | Intero (default 60)          | Imposta l’intervallo di autosalvataggio del server (in secondi)         | 
| server.secure      | true/false          | Se attivo, Easy Anti Cheat (EAC) bloccherà connessioni da giocatori non registrati o bannati prima che si connettano         | 
| server.seed "valore"     | Intero (es. 123456)          | Imposta il seed del mondo del server         | 
| server.stability      | true/false          | Se attivo, abilita la stabilità delle strutture degli edifici         | 
| server.tickrate "rate"      | Intero (default 30)          | Imposta il tick rate del server         | 
| server.writecfg      | -          | Salva le modifiche di configurazione fatte tramite altri comandi server         | 
| chat.serverlog      | true/false          | Se attivo, la chat sarà sempre registrata nella console del server         | 
| commands.echo "testo"      | Stringa (es. "Hello World!")          | Stampa il messaggio specificato nella console del server         | 
| global.say "messaggio"      | Stringa (es. "Benvenuti!")          | Invia un messaggio a tutti i giocatori nel server         | 
| env.time      | Intero (es. 16)          | Imposta l’orario del mondo di gioco (in ore)         | 
| server.events      | -          | Se attivo, abilita eventi server come gli airdrop         | 
| commands.find "comando"      | Stringa (es. "quit")          | Cerca un comando o usa "." per elencare tutti i comandi disponibili         | 
| global.quit      | -          | Salva il server e lo ferma         | 
| global.init      | -          | Carica i file di configurazione         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Admin Giocatori">

| Sintassi Comando                  | Valori Accettati | Descrizione | 
| ----------------------- | ---------- | --------- | 
| global.ban "nomegiocatore" "motivo"      | Stringa (es. "Jacob"), Stringa (es. "Si è comportato male!")          | Banna un utente dal server (motivo opzionale)         | 
| global.banid "steam64"      | Intero          | Banna un utente tramite il suo Steam64 ID         | 
| global.banlistex      | -          | Restituisce la lista degli utenti bannati con nome e motivo         | 
| global.banlist      | -          | Mostra la lista dei giocatori bannati in chat         | 
| global.unban "steam64"      | Intero          | Sblocca un utente tramite il suo Steam64 ID         | 
| global.kickall      | -          | Espelle tutti i giocatori dal server         | 
| global.kick "steam64 / nomegiocatore" "motivo"      | Intero/Stringa (es. "Jacob"), Stringa (es. "Si è comportato male!")         | Espelle un utente tramite Steam64 ID o nome (motivo opzionale)         | 
| global.ownerid "steam64 / nomegiocatore"      | Intero/Stringa (es. "Jacob")          | Imposta il giocatore specificato come admin del server tramite Steam64 ID o nome (Auth level 2)         | 
| global.removeowner "steam64"      | Intero         | Rimuove i privilegi di admin dall’utente tramite Steam64 ID         | 
| global.moderatorid "steam64 / nomegiocatore"      | Intero/Stringa (es. "Jacob")          | Imposta il giocatore specificato come moderatore del server tramite Steam64 ID o nome (Auth level 1)         | 
| global.removemoderator "steam64"      | Intero          | Rimuove i privilegi di moderatore dall’utente tramite Steam64 ID         | 
| global.listid      | -          | Mostra la lista degli utenti bannati tramite Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Controlli Giocatore">

| Sintassi Comando                  | Valori Accettati | Descrizione | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Uccidi il tuo personaggio         | 
| global.quit      | -          | Salva e esci dal gioco         | 
| global.god      | true/false          | Attiva/disattiva la modalità God per non subire danni (solo admin)          | 
| global.noclip      | true/false          | Attiva/disattiva la modalità Noclip per volare liberamente (solo admin)          | 
| global.debugcamera      | true/false          | Attiva/disattiva la modalità telecamera libera (solo admin)          | 
| player.sleep      | -          | Forza il tuo personaggio ad andare a dormire         | 
| commands.find "comando"      | Stringa (es. "quit")          | Cerca un comando disponibile per il giocatore
| chat.say "testo"     | Stringa (es. "Hello World!")          | Invia un messaggio a tutti i giocatori nel server         | 
| inventory.give "itemID" "quantità"     | Intero (itemID), Intero (es. 5)          | Aggiunge un oggetto al tuo inventario         | 
| inventory.giveto "nomegiocatore" "itemID" "quantità"      | Stringa (es. "Jacob"), Intero (itemID), Intero (es. 5)          | Aggiunge un oggetto all’inventario di un altro giocatore         | 

</TabItem>
</Tabs>

<InlineVoucher />