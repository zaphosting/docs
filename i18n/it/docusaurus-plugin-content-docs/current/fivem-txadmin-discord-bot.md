---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"
description: "Scopri come integrare e usare il bot Discord con il tuo server txAdmin per una gestione avanzata del server FiveM → Scopri di più ora"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione
Il pannello txAdmin offre tantissime funzionalità per il tuo server FiveM, inclusa l’integrazione con un bot Discord.
In questa guida ti mostreremo come configurare il bot Discord e come usarlo.

<InlineVoucher />

## Preparazione

Per configurare il bot Discord per il tuo server txAdmin, devi prima effettuare il login al pannello txAdmin.
Le credenziali di accesso sono visibili nella pagina di panoramica del server, come mostrato qui:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Questa guida presuppone che txAdmin sia già configurato. Se vuoi scoprire come fare, dai un’occhiata alla nostra guida [FiveM: Configurazione txAdmin](fivem-txadmin-setup.md).

:::

## Configurazione

### Creare un’Applicazione Discord

Per configurare il bot con txAdmin, devi creare un’applicazione Discord. Il bot verrà assegnato a questa app e agirà a suo nome. Per creare l’app, vai su [Discord Developer Portal](https://discord.com/developers/applications/).

Ora crea una nuova applicazione cliccando su **New Application** e assegna un nome, come nell’esempio qui sotto:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Poi crea l’app cliccando su **Create**. Per i passaggi successivi, annota subito l’ID dell’applicazione:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurare il Bot e Ottenere il Token

Quando crei l’app, viene creato automaticamente anche un bot. Puoi ottenere facilmente il token cliccando su **Reset Token**. Ti verrà mostrato un token utente che devi assolutamente annotare o salvare da qualche parte:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Non condividere mai il token del bot con nessuno, così il bot potrà funzionare senza problemi e non creerà rischi di sicurezza. Il token è come una chiave segreta e va tenuto privato.
:::

Nella stessa pagina scorri un po’ in basso e abilita la voce "Server Members Intent", poi salva le modifiche:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Invitare il Bot nel tuo Discord

Per invitare il bot, devi inserire l’ID client che hai annotato prima nel link qui sotto, sostituendo la parte indicata, poi apri il link nel browser e aggiungi il bot al tuo server Discord. Dovrebbe assomigliare a questo esempio:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Ottenere gli ID Server e Canale

Per usare il bot correttamente con txAdmin, devi recuperare l’ID del server Discord dove il bot opererà.
Lo ottieni cliccando col tasto destro sull’icona del server in Discord e selezionando **Copia ID Server**. Annota anche questo ID.

Ecco un esempio di come appare:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Puoi anche opzionalmente impostare un canale dove verranno postati aggiornamenti di stato come i programmi di riavvio; per farlo copia l’ID del canale nello stesso modo.
Ricordati che il bot deve avere i permessi per leggere e scrivere in quel canale.

:::info
Se non vedi l’opzione per copiare l’ID del server o del canale, devi prima abilitare la modalità sviluppatore nelle impostazioni utente di Discord:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personalizzare le Impostazioni in txAdmin

Ora puoi abilitare il bot Discord in txAdmin e inserire tutti gli ID e i token che hai salvato prima:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opzionale: Inviare Messaggio di Stato

Puoi opzionalmente inviare un messaggio di stato una volta, che verrà aggiornato costantemente con lo stato attuale del server, i giocatori, ecc.
Per farlo, vai nel canale Discord dove vuoi il messaggio e digita `/status add`. Assicurati che il bot abbia il permesso di inviare messaggi in quel canale.

Questo creerà un messaggio simile a questo:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tutto nel messaggio può essere personalizzato nella pagina delle impostazioni Discord dentro txAdmin.

## Conclusione

Configurare un bot Discord per txAdmin ti permette di mostrare facilmente lo stato del tuo server FiveM e altre info direttamente nel tuo server Discord. Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />