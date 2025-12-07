---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discord Bot"
description: "Configura e integra un bot Discord con il tuo server RedM txAdmin per migliorare la gestione e la comunicazione → Scopri di più ora"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione
Il pannello txAdmin offre tantissime funzionalità per il tuo server RedM, inclusa l’integrazione con un bot Discord.
In questa guida ti mostriamo come configurare il bot Discord e come usarlo.

<InlineVoucher />

## Preparazione

Per configurare il bot Discord per il tuo server txAdmin, devi prima effettuare il login al pannello txAdmin.
Le credenziali di accesso sono visibili nella pagina di overview del server, come mostrato qui:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Questa guida richiede che txAdmin sia già configurato. Se vuoi scoprire come fare, dai un’occhiata alla nostra guida [RedM: Configurazione txAdmin](redm-txadmin-setup.md).

:::

## Configurazione

### Creare un’Applicazione Discord

Per configurare il bot con txAdmin, devi creare un’applicazione Discord. Il bot verrà assegnato a questa app e agirà a suo nome. Per creare l’app, vai su [Discord Developer Portal](https://discord.com/developers/applications/).

Ora crea una nuova applicazione cliccando su **New Application** e assegna un nome, come nell’esempio:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Poi clicca su **Create** per creare l’applicazione. Prendi nota dell’ID dell’applicazione per i passaggi successivi:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurare il Bot e Ottenere il Token

Quando crei l’app, viene creato automaticamente anche un bot. Puoi ottenere il token cliccando su **Reset Token**. Ti verrà mostrato un token utente che devi annotare o salvare da qualche parte:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Non condividere mai il token del bot con nessuno per evitare problemi di sicurezza o malfunzionamenti. Il token è come una chiave segreta.
:::

Nella stessa pagina, scorri un po’ verso il basso e abilita la "Server Members Intent", poi salva le modifiche:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Invitare il Bot nel tuo Discord

Per invitare il bot, inserisci il client ID che hai salvato prima nel link qui sotto, sostituendo il valore nel posto giusto, poi apri il link nel browser e aggiungi il bot al tuo server Discord. Dovrebbe assomigliare a questo esempio:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Ottenere gli ID del Server e del Canale

Per usare il bot correttamente con txAdmin, devi recuperare l’ID del server Discord dove il bot opererà.
Lo ottieni cliccando col tasto destro sull’icona del server in Discord e selezionando **Copy Server ID**. Annota anche questo ID.

Ecco un esempio di come appare:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Puoi anche opzionalmente impostare un canale dove verranno postati aggiornamenti di stato come i restart programmati. Copia l’ID del canale allo stesso modo.
Ricordati che il bot deve avere i permessi per leggere e scrivere in quel canale.

:::info
Se non vedi l’opzione per copiare l’ID del server o del canale, devi prima abilitare la modalità sviluppatore nelle impostazioni utente di Discord:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personalizzare le Impostazioni in txAdmin

Ora puoi abilitare il bot Discord in txAdmin e inserire tutti gli ID e token che hai salvato prima:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opzionale: Inviare un Messaggio di Stato

Puoi opzionalmente inviare un messaggio di stato che si aggiornerà costantemente con lo stato attuale del server, i giocatori connessi, ecc.
Per farlo, vai nel canale Discord dove vuoi il messaggio e digita `/status add`. Assicurati che il bot abbia i permessi per inviare messaggi in quel canale.

Dovrebbe creare un messaggio così:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Tutto nel messaggio può essere personalizzato nella pagina delle impostazioni Discord dentro txAdmin.

## Conclusione

Configurare un bot Discord per txAdmin ti permette di mostrare facilmente lo stato del tuo server RedM e altre info direttamente nel tuo server Discord. Per qualsiasi domanda o aiuto, il nostro supporto è sempre a disposizione ogni giorno per darti una mano! 🙂

<InlineVoucher />