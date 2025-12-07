---
id: minecraft-pluginuploader
title: "Minecraft: Server con Plugin Uploader di ZAP-Hosting"
description: "Scopri come gestire facilmente i plugin del tuo server Minecraft per server Spigot o Bukkit e migliora la tua esperienza di gioco → Scopri di più ora"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Clicca sul tuo server Minecraft nella panoramica server. Poi seleziona la scheda Plugins, che si trova nel sotto-menu Impostazioni.

:::info
Assicurati che il gioco attuale sia Spigot o Bukkit. Il plugin uploader è disponibile solo lì.
:::

## Installa/Carica Plugin

Ci sono due modi diversi per installare un plugin sul tuo server Minecraft.

- Puoi installare un plugin da una delle nostre selezioni predefinite (se disponibile)
- Puoi caricare i tuoi plugin usando il drag'n drop

### Plugin dalla Lista

Seleziona il plugin desiderato dalla lista "Tutti i plugin" e clicca sul pulsante verde "Installa". L’installazione potrebbe richiedere un attimo a seconda della dimensione del plugin.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Carica il tuo Plugin

Trascina il file .jar del plugin desiderato nell’area evidenziata nell’immagine. È possibile anche trascinare e installare più plugin contemporaneamente in quest’area.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Dopo aver trascinato il plugin nell’area di upload, ci vuole un attimo prima che il plugin sia sul server.

Per poter usare il plugin devi ricaricare il server con il comando `/rl` o `/reload` tramite la console del tuo game server (o riavviare completamente il server).

:::info
In rari casi potrebbe essere necessario riavviare il server per far funzionare il plugin senza problemi.
:::


## Disinstalla Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Per disinstallare un plugin, clicca sul cestino rosso accanto alla voce.

## Disattiva Plugin

Per farlo, clicca sul pulsante verde con il lucchetto dietro un plugin installato. Se il pulsante cambia colore da verde a arancione, hai disattivato il plugin. Al contrario, cliccandolo di nuovo riattivi il plugin. Il file del plugin resta comunque sul server dopo la disattivazione, ma non viene più caricato dal game server.

:::info
Dopo aver disattivato il plugin, devi ricaricare il server una volta per applicare le modifiche. Usa uno di questi due comandi nella console del game server o in-game: `/rl` o `/reload`
:::

## Problemi Comuni

**Non riesco a caricare il plugin tramite l’area "Drag'n Drop".**

Soluzioni suggerite:

- Il plugin potrebbe essere più grande di 5 MB e quindi non caricabile tramite l’interfaccia web. In alternativa, usa un client FTP.
- I permessi FTP potrebbero causare problemi. Per risolvere, clicca sulla scheda FTP nel pannello web e premi il pulsante Reset permessi FTP. Dovresti poter caricare i plugin di nuovo.
- Il plugin potrebbe essere invalido e non contenere un plugin.yml valido. In questo caso, usa un client FTP come alternativa.
- A volte la lista potrebbe non aggiornarsi. Ricarica semplicemente la pagina con F5 o simili.

### Non riesco più a cancellare il mio plugin.

:::info
In questo caso, contatta il supporto.
:::

### Non riesco a disattivare/attivare il plugin.

Soluzioni suggerite:

- Il plugin è ancora sul server? Controlla cliccando il pulsante Aggiorna ai bordi della tabella. Questo risincronizza la lista mostrata con i plugin effettivamente presenti sul server. Ora vedrai solo i plugin che sono davvero sul server.

### Mancano plugin nella sezione Tutti i Plugin.

Soluzioni suggerite:

- Potrebbe non esserci una versione aggiornata di questo plugin per la versione attualmente installata del tuo game server. Per richiedere un plugin, usa il pulsante blu Plugin mancante?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### La disinstallazione/installazione dalla lista predefinita non funziona.

Soluzioni suggerite:

- Ricarica la pagina per risolvere il problema.

### Viene mostrato un plugin che in realtà non è sul server.

Soluzioni suggerite:

- In questo caso, puoi semplicemente rimuovere la voce del plugin cliccando sul pulsante disinstalla.
- In alternativa, prova a cliccare il pulsante Sincronizza.

<InlineVoucher />