---
id: palworld-server-commands
title: "Palworld: Comandi Server Palworld"
description: "Scopri come gestire efficacemente i server Palworld usando i comandi integrati per il controllo admin e il gameplay → Scopri di più ora"
sidebar_label: Comandi Server
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
I server Palworld includono una serie di comandi server utili integrati, utilizzabili sia in-game che tramite la console del server. In questa guida esploreremo molti di questi comandi, fornendo descrizioni ed esempi d’uso per ciascuno.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Configura il tuo server PALWORLD in solo UN MINUTO!" description="Ti è più facile capire vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

<InlineVoucher />

## Configurare l’Admin

Prima di poter usare i comandi admin del server nella sezione successiva, devi impostare una password admin per il tuo server Palworld e aggiungerti come admin in-game.

Puoi impostare la password admin del server tramite la scheda **Impostazioni** nell’interfaccia web del server o modificando il file di configurazione **PalWorldSettings.ini**. Una volta impostata, puoi usare il comando `/AdminPassword [password]` in-game per aggiungerti come admin.

:::tip
Ti consigliamo caldamente di dare un’occhiata alla nostra guida [Setup Admin](palworld-admin.md), dedicata proprio a questo argomento, che spiega in dettaglio come impostare la password admin e aggiungere utenti come admin.
:::

## Comandi Disponibili

La tabella qui sotto mostra una serie di comandi server per Palworld, con esempi d’uso e descrizioni, utilizzabili sia in-game che tramite la console del server.

Quando serve il parametro `steamid`, puoi copiare facilmente lo SteamID di un giocatore facendo doppio clic destro sulla lista giocatori.

:::info
Devi prima impostare una Password Admin e concederti i permessi usando il comando `/AdminPassword` prima di poter usare questi comandi. Altrimenti riceverai un errore di permessi. Leggi la sezione successiva di questa guida per capire come fare.
:::

| Sintassi Comando             | Valori Accettati | Descrizione                                                            | 
| ---------------------------- | ---------------- | --------------------------------------------------------------------- | 
| /Shutdown [secs] [message]   | Intero, Stringa  | Spegne il server dopo i secondi specificati, mostrando il messaggio  | 
| /DoExit                      | -                | Ferma forzatamente il server                                          | 
| /Broadcast                   | Stringa          | Invia un messaggio a tutti i giocatori attualmente connessi           | 
| /KickPlayer [steamid]        | Stringa          | Espelle il giocatore target dal server                                | 
| /BanPlayer [steamid]         | Stringa          | Bannare il giocatore target dal server                                | 
| /TeleportToPlayer [steamid]  | Stringa          | Teletrasportati dal giocatore target                                  | 
| /TeleportToMe [steamid]      | Stringa          | Teletrasporta il giocatore target da te                              | 
| /ShowPlayers                 | -                | Mostra informazioni su tutti i giocatori attualmente connessi        | 
| /Info                        | -                | Mostra informazioni sul server                                        | 
| /Save                        | -                | Salva i dati del mondo corrente                                      |

:::note
Al momento non è possibile sbannare un giocatore in-game perché non esiste un comando per farlo. Dovrai modificare manualmente il file `banlist.txt` nella directory del server se vuoi sbannare qualcuno.
:::

<InlineVoucher />