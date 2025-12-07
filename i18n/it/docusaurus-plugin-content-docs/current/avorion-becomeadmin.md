---
id: avorion-becomeadmin
title: "Avorion: Diventa admin sul tuo server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e gestire efficacemente le funzioni di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Configurazione

Aggiungere un admin si fa tramite la pagina delle impostazioni nell’interfaccia web. Clicca su **Gameserver Administration** su **Settings** e scorri fino a **Server Settings**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Qui troverai un campo chiamato **Admin SteamIDs**. Devi inserire il tuo SteamID64. Per trovarlo, apri prima il tuo profilo Steam e fai clic destro in un punto qualsiasi. Poi clicca su **Copy Steam URL**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Dopodiché apri uno di questi siti e incolla lì l’URL del tuo profilo: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Ti forniranno informazioni generali e lo Steam ID del tuo account. A noi serve solo lo SteamID64, che dovrai inserire nel campo corrispondente. Dovrebbe apparire così:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Clicca su **Save**. Dopo aver riavviato il server potrai eseguire i comandi admin in gioco. Premi Invio per aprire la chat e digita i comandi preceduti da /.



## Comandi admin

Ecco una panoramica dei comandi più comuni che puoi usare come admin.



**Comandi generali**

| Comando                 | Descrizione                                                  |
| :---------------------- | :----------------------------------------------------------- |
| /help                   | mostra il messaggio di aiuto                                 |
| /w [nome giocatore]     | invia un messaggio privato a un giocatore                    |
| /save                   | salva lo stato attuale                                       |
| /stop                   | ferma il server                                             |
| /seed                   | mostra il seed del server                                   |
| /version                | mostra la versione attuale del server                        |
| /suicide                | distrugge la tua nave attuale                               |
| /player                 | mostra il numero di giocatori                               |
| /status                 | mostra alcune info sullo stato attuale del server           |
| /admin -a [nome giocatore] | aggiunge un giocatore come admin                            |
| /admin -r [nome giocatore] | rimuove un giocatore dagli admin                            |
| /kick [nome giocatore]  | espelle un giocatore dal server                              |
| /ban [nome giocatore]   | aggiunge il giocatore alla blacklist                         |
| /unban [nome giocatore] | rimuove il giocatore dalla blacklist                        |
| /banip [IP giocatore]   | aggiunge l’IP del giocatore alla blacklist                   |
| /unbanip [IP giocatore] | rimuove l’IP del giocatore dalla blacklist                   |
| /blacklist              | mostra le opzioni della blacklist                           |
| /whitelist              | mostra le opzioni della whitelist                           |



**Comandi cheat (in game):**

| Comando                                | Descrizione                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [nome giocatore] [quantità] credits    | dà al giocatore la quantità di crediti desiderata     |
| /give [nome giocatore] [quantità] [nome minerale] | dà al giocatore la quantità desiderata del minerale selezionato |



**Comandi server (console):**

| Comando                       | Descrizione                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [valore]            | numero di file di log da conservare                          |
| /difficulty [valore]          | difficoltà del server, valori ammessi: -3, -2, -1, 0, 1, 2, 3 Default: 0 |
| /collision-damage [valore]    | danno da collisione a un oggetto, da 0 a 1. 0: nessun danno, 1: danno completo. Default: 1 |
| /exit-on-last-admin-logout    | spegne il server quando l’ultimo admin esce                  |
| /public [valore]              | indica se il server permette ad altri giocatori di entrare  |
| /infinite-resources [valore]  | abilita risorse infinite per tutti i giocatori              |
| /listed [valore]              | indica se il server deve comparire nelle liste pubbliche    |
| /max-players [valore]         | numero massimo di giocatori online Default: 10              |
| /save-interval [valore]       | intervallo tra i salvataggi Default: 300                     |
| /same-start-sector arg        | indica se tutti i giocatori devono partire nello stesso settore |
| /server-name [valore]         | nome del server, mostrato nelle query                        |
| /use-steam-networking [valore] | usa Steam networking e autenticazione per gli utenti         |
| /galaxy-name [valore]         | nome della galassia, aggiunto al datapath, percorso finale: [datapath]/[galaxyname] |
| /datapath [valore]            | cartella dove saranno salvate le galassie, precede il nome della galassia |
| /admin [valore]               | steam id degli amministratori del server                     |


## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />