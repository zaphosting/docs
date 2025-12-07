---
id: factorio-becomeadmin
title: "Factorio: Diventa Admin"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e gestire efficacemente le opzioni di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Configurazione

I diritti di amministratore ti consentono di fare modifiche direttamente nel gioco sul tuo server senza doverle cambiare nel Config. Aggiungere un admin si fa tramite il file **server-settings.json** che trovi nell’interfaccia sotto Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Alla fine del file di configurazione c’è la parte importante. Qui si definiscono gli admin:

```
  "_comment_admins": "Lista di username case insensitive che verranno promossi immediatamente",
  "admins": []
}
```

Devi inserire i nomi dei giocatori a cui vuoi dare i permessi di amministratore. Se vuoi aggiungere più admin, potrebbe essere così ad esempio:

```
  "_comment_admins": "Lista di username case insensitive che verranno promossi immediatamente",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

I giocatori con i nomi **PlayerName1, PlayerName2, PlayerName3** hanno ora i permessi admin. I comandi admin si possono eseguire in gioco tramite la console. Qui sotto trovi una panoramica dei comandi più usati.



### Comandi più usati

|                Comando                 |                         Descrizione                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Apre la GUI di gestione giocatori.             |
|           /ban player reason           |                          Bannare un giocatore                |
|                 /bans                  |               Mostra la lista dei giocatori bannati.         |
|             /unban player              |                         Sbloccare un giocatore               |
|  /banlist add/remove/get/clear player  | Aggiunge o rimuove un giocatore dalla lista ban. Come /ban o /unban. |
|          /kick player reason           |                         Espellere un giocatore               |
|              /mute player              |                         Silenziare un giocatore              |
|             /unmute player             |                        Riattivare il microfono               |
| /whitelist add/remove/get/clear player |         Aggiunge o rimuove un giocatore dalla whitelist       |

Altri comandi disponibili li trovi nella [Factorio Wiki ufficiale](https://wiki.factorio.com/Console).


## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />