---
id: ark-becomeadmin
title: "ARK: Diventa admin"
description: "Scopri come gestire il tuo game server con il pieno controllo admin e migliorare l’esperienza di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi da amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente in-game. Qui sotto trovi tutti i passaggi per assegnare i permessi admin al tuo server.  
<InlineVoucher />

## Configurazione

I diritti da amministratore ti consentono di fare modifiche direttamente in gioco sul tuo server senza dover toccare la Config. Per assegnare i diritti admin a te stesso o ad altri giocatori, devi prima impostare una password admin per il server. Questa password si definisce nelle impostazioni del nostro webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Una volta impostata la password, il server va riavviato. Dopo puoi connetterti al server e fare il login come admin tramite la console in-game con questo comando e la tua password admin:

```
enableCheats password
```

Dopodiché puoi eseguire tutti i comandi da admin. Qui sotto trovi una panoramica dei comandi più usati.

## Comandi più usati

| Comando                                        | Descrizione                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Attiva / disattiva il menu cheat                             |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Aggiunge un giocatore alla whitelist                         |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Rimuove un giocatore dalla whitelist                         |
| admincheat SetMessageOfTheDay Messaggio        | Imposta il messaggio del giorno (MOTD). Compare quando un giocatore si connette al server |
| admincheat broadcast Messaggio                 | Invia un messaggio a tutti i giocatori sul server           |
| admincheat god                                 | Attiva immortalità per il tuo personaggio                    |
| admincheat fly                                 | Attiva il volo per il tuo personaggio                        |
| admincheat walk                                | Disattiva il volo per il tuo personaggio                     |
| admincheat teleport                            | Teletrasporta il tuo personaggio nella direzione in cui stai guardando |
| admincheat slomo                               | Cambia la velocità del server e il movimento di tutti i giocatori |
| admincheat playersonly                         | Blocca tutti i movimenti delle creature e ferma/previene il crafting |
| admincheat ghost                               | Attiva il noclip per il tuo personaggio                      |
| admincheat forcetame                           | Permette di domare subito i dinosauri e cavalcarli senza sella |
| admincheat listplayers                         | Elenca tutti i giocatori con il loro SteamId64              |
| admincheat banplayer SteamId64                 | Bannare giocatori usando lo SteamID64                        |
| admincheat unbanplayer SteamId64               | Sbloccare giocatori usando lo SteamID64                      |
| admincheat setplayerpos x y z                  | Teletrasporta il tuo personaggio alla posizione desiderata  |
| admincheat saveworld                           | Salva lo stato attuale del mondo                             |
| admincheat addexperience Quantità              | Aggiunge esperienza al giocatore                             |
| admincheat settimeofday Ora                     | Cambia l’ora del server di gioco. Esempio: "admincheat settimeofday 12:00" |

## Conclusione

Congratulazioni, hai configurato con successo i permessi da amministratore. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />