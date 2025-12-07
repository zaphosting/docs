---
id: vrising-becomeadmin
title: "V Rising: Diventa admin"
description: "Scopri come gestire e assegnare i permessi di amministratore completi per il tuo server di gioco in modo semplice ed efficiente → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
L’assegnazione dei permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

### Aggiungi permessi

La gestione dei permessi admin avviene tramite il file di configurazione **adminlist.txt**. Puoi accedere a questo file dall’interfaccia web sotto la sezione Configs. Per aggiungere un admin ti serve lo SteamID64 del giocatore. Puoi ottenerlo aprendo il profilo Steam e facendo clic destro in qualsiasi punto, poi copia l’URL della pagina. Inserisci l’URL su uno di questi siti: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Inserisci l’URL del profilo Steam nel campo indicato e otterrai lo SteamID64. Aggiungi lo SteamID64 nel file di configurazione **adminlist.txt**. Per farlo, vai nell’interfaccia web del tuo server di gioco, nella categoria Configs, e apri il file adminlist.txt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Se vuoi assegnare i permessi admin a più giocatori, ogni SteamID deve essere inserito su una riga separata. 
:::

### Attiva i permessi

Prima di poter assegnare i permessi admin in gioco, devi attivare la console. Connettiti al server e vai nelle impostazioni. Qui attiva l’opzione **Console Enabled**. La console si apre di default con il tasto Gravis (`~`) sulla tastiera. I permessi admin si attivano in console con il comando `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Lista comandi admin

Ecco una panoramica rapida dei comandi admin più usati che puoi eseguire sul tuo server. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Assegna i permessi admin                                |
| admindeauth              | Rimuove i permessi admin                                |
| banuser [nome/IP/userID] | Bannare un giocatore specifico per nome, IP o user ID  |
| banned                   | Mostra la lista di tutti gli utenti bannati             |
| bancharacter             | Bannare un personaggio specifico                        |
| give [nome]              | Ti dà un oggetto specifico nel gioco                    |
| giveset                  | Ti permette di esplorare set di armature e armi         |
| kick [nome/IP/userID]    | Espelle un giocatore specifico per nome, IP o user ID  |
| unban [nome/IP/userID]   | Sblocca un giocatore specifico per nome, IP o user ID  |


## Conclusione

Complimenti, hai configurato con successo i permessi di amministratore. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />