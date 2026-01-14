---
id: hytale-whitelist
title: "Hytale: Configurazione e Gestione della Whitelist"
description: "Scopri come proteggere il tuo server Hytale gestendo l’accesso dei giocatori con le funzionalità di whitelist e proteggi il tuo gameplay → Scopri di più ora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
La whitelist è una funzione di sicurezza e controllo accessi che ti permette di limitare chi può entrare nel tuo server Hytale. Quando attivata, solo i giocatori esplicitamente inseriti nella whitelist possono connettersi. È particolarmente utile per server privati, server di community, ambienti di sviluppo o fasi di test dove l’accesso deve essere riservato solo a giocatori fidati.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente disponibile in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto alle mod e i processi di installazione potrebbero continuare a evolversi nel tempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Attivare la whitelist

La whitelist può essere attivata tramite la console del server o direttamente in gioco. Assicurati di avere i permessi necessari, come i diritti da operatore, prima di eseguire questi comandi.

Per attivare la whitelist, esegui il comando:

```
/whitelist enable
```



Una volta attivata, qualsiasi giocatore non presente nella whitelist verrà bloccato all’accesso quando proverà a entrare nel server. Per verificare se la whitelist è attiva, usa:

```
/whitelist status
```

Questo comando mostra lo stato attuale della whitelist e ti aiuta a confermare che la configurazione sia stata applicata correttamente.



## Disattivare la whitelist

Se vuoi permettere a tutti i giocatori di entrare di nuovo nel server, puoi disattivare la whitelist in qualsiasi momento. Usa il comando:

```
/whitelist disable
```

Dopo aver disattivato la whitelist, il server non limiterà più l’accesso basandosi sulla whitelist e tutti potranno connettersi.



## Gestire la whitelist

La whitelist può essere gestita dinamicamente mentre il server è attivo. Puoi aggiungere o rimuovere giocatori in qualsiasi momento senza dover riavviare il server usando i comandi.



### Aggiungere un giocatore alla whitelist

Per dare accesso a un giocatore specifico, aggiungilo alla whitelist con:

```
/whitelist add <playername>
```

Il giocatore specificato potrà subito entrare nel server, a patto che la whitelist sia attiva.



### Rimuovere un giocatore dalla whitelist

Per revocare l’accesso a un giocatore, rimuovilo dalla whitelist:

```
/whitelist remove <playername>
```

Una volta rimosso, il giocatore non potrà più entrare finché la whitelist rimane attiva.



### Elencare i giocatori in whitelist

Per vedere tutti i giocatori attualmente autorizzati ad entrare nel server, esegui:

```
/whitelist list
```

Questo comando mostra la lista completa dei nomi dei giocatori in whitelist.



### Svuotare la whitelist

Se vuoi rimuovere tutti i giocatori dalla whitelist in un colpo solo, puoi svuotarla completamente:

```
/whitelist clear
```

Questo cancellerà tutte le voci esistenti nella whitelist ma non disattiverà la whitelist stessa.



## Gestire la whitelist tramite file

Oltre ai comandi, la whitelist può essere gestita direttamente tramite un file di configurazione. Questo metodo è utile per modifiche di massa o per preparare la whitelist prima di avviare il server. Il file responsabile si chiama `whitelist.json` ed è nella cartella del server.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusione

Complimenti, hai configurato con successo la whitelist per il tuo server Hytale. Ora il tuo server è riservato solo ai giocatori approvati, aiutandoti a mantenere controllo, privacy e un ambiente multiplayer più sicuro.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂