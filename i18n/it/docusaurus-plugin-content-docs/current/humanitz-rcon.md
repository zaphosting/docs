---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Scopri come gestire da remoto il tuo server HumanitZ usando RCON e rcon-cli → Scopri di più ora"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

RCON (Remote Console) è un protocollo di rete usato per controllare da remoto i gameserver. Permette agli admin di eseguire comandi sul server senza dover entrare direttamente nel gioco. Così puoi gestire i giocatori, modificare le impostazioni o monitorare l’attività del server dall’esterno.

In **HumanitZ**, RCON può essere usato per eseguire comandi amministrativi come kickare giocatori, inviare messaggi o controllare il comportamento del server. L’accesso è protetto da una password e da una porta dedicata.

Un vantaggio chiave di RCON è che ti permette di amministrare il server **senza essere connesso come player in-game**, garantendo una gestione remota flessibile ed efficiente.

<InlineVoucher />

## Configurazione

Prima di usare RCON, devi abilitarlo nella configurazione del server. Apri la pagina delle impostazioni del tuo server e attiva l’opzione rcon. Puoi anche modificarlo tramite i file di configurazione. Apri il pannello di gestione del gameserver, vai su Configs e trova il file `GameServerSettings.ini`.

Aggiungi o modifica queste voci:

```
RCONEnabled=true
RCONPassword=la_tua_password_sicura
RCONPort=XXXXX
```

La porta RCON assegnata la trovi nella **Panoramica porte** dentro l’amministrazione del server. Assicurati che password e porta corrispondano alla tua configurazione.

Dopo aver salvato, **riavvia il server** per applicare le modifiche.

## Connessione via RCON

Per connetterti al tuo server HumanitZ via RCON, puoi usare lo strumento da linea di comando **rcon-cli**. È disponibile nel repository ufficiale GitHub:
https://github.com/gorcon/rcon-cli

Una volta installato, connettiti al server con questo comando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Sostituisci i placeholder con l’IP del server, la porta RCON e la password.

Questo comando ti permette di eseguire comandi RCON direttamente dal tuo PC senza una sessione interattiva.

## Comandi RCON

Una volta connesso via RCON, puoi eseguire vari comandi amministrativi sul tuo server HumanitZ. I comandi disponibili dipendono dall’implementazione del gioco, ma di solito includono gestione giocatori e controllo server.

| Comando | Descrizione |
|----------------------------------|------------------------------------------|
| `broadcast <messaggio>`| Invia un messaggio a tutti i giocatori |
| `kick <nomegiocatore>`| Kicka un giocatore dal server |
| `ban <nomegiocatore>` | Banna un giocatore |
| `unban <nomegiocatore>` | Sblocca un giocatore bannato |
| `save` | Salva lo stato attuale del gioco |
| `restart`| Riavvia il server |
| `shutdown` | Spegne il server |
| `whitelist add <steamid>`| Aggiunge un giocatore alla whitelist |
| `whitelist remove <steamid>` | Rimuove un giocatore dalla whitelist |

## Conclusione

Complimenti! Hai configurato e usato con successo **RCON per il tuo server HumanitZ**. Ora puoi gestire il server da remoto, eseguire comandi amministrativi e mantenere il controllo senza dover entrare nel gioco.

Per domande o supporto, il nostro team è sempre disponibile per aiutarti ogni giorno! 🙂

<InlineVoucher />