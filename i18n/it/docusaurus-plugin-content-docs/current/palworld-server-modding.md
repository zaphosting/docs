---
id: palworld-server-modding
title: "Palworld: Installare Mod per Palworld"
description: "Scopri come migliorare la tua esperienza di gioco in Palworld con mod per server e client in modo sicuro ed efficace → Scopri di più ora"
sidebar_label: Installa Mod
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Da quando è uscito Palworld, sono comparse online nuove mod entusiasmanti per migliorare l’esperienza di gioco e rendere il gioco ancora più divertente. In questa guida esploreremo come aggiungere modifiche al gioco (mod) al tuo server Palworld e/o al client di gioco.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Come Installare Mod sul Tuo Server Palworld!" description="Ti piace capire meglio quando vedi le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

<InlineVoucher />

### Info Chiave

Al momento, puoi visualizzare e scaricare le mod disponibili tramite siti di modding di terze parti. Ti consigliamo di usare siti come [Nexus Mods](https://www.nexusmods.com/palworld/) o [Curseforge](https://www.curseforge.com/palworld/) che sono affidabili nel mondo del modding. Al momento non è possibile scaricare mod tramite Steam Workshop.

:::note
ZAP-Hosting non si assume responsabilità per eventuali modifiche/danni ai file del server o al mondo di gioco causati dall’installazione di mod. Ti consigliamo caldamente di fare backup prima di procedere. Scopri di più sui backup nella nostra guida dedicata [Gestione Savegames](palworld-server-savegames.md) che approfondisce l’argomento.
:::

:::info
Supportiamo attualmente solo mod in formato PAK (.PAK files). Non potrai usare mod che richiedono file eseguibili per motivi di sicurezza.
:::



### Mod Server-Side & Client-Side

Quando scegli le mod, devi prima capire se sono server-side o client-side. Il modo più semplice è leggere la descrizione sul sito della mod o contattare direttamente l’autore.

Gli script server-side si installano direttamente sul server e non richiedono azioni da parte dei giocatori. Le mod client-side invece richiedono che ogni utente che vuole connettersi scarichi e installi la mod localmente nei propri file di gioco.

:::info
Devi verificare che la mod che vuoi usare sia compatibile con la versione attuale del gioco Palworld.
:::



## Passo 1: Preparare il File PAK

Andando sui siti di modding suggeriti nella sezione introduttiva, potrai sfogliare e scaricare una vasta selezione di mod diverse.

:::info
Promemoria: supportiamo solo mod in formato PAK (.PAK files) per motivi di sicurezza.
:::

Vai sulla mod che vuoi usare e scaricala localmente sul tuo dispositivo. Se serve, estrai i file usando un tool come [7zip](https://www.7-zip.org/) per ottenere il file **.pak**.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Passo 2: Upload via FTP

Una volta pronti i file PAK da caricare, vai nella sezione **Tools->FTP-Browser** del pannello web del tuo server di gioco.

Ti serve un client FTP per connetterti al server. Usa la nostra guida dedicata [Accesso via FTP](gameserver-ftpaccess.md) se non hai un client FTP o hai bisogno di aiuto con la connessione FTP.

Nel pannello puoi usare il pulsante **Direct Connection**. Questo aprirà automaticamente il client FTP che hai scelto e ti farà il login.

In alternativa, usa le credenziali fornite nella pagina FTP-Browser per inserirle manualmente nel client FTP e connetterti.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Ora devi caricare i file PAK della mod che hai preparato. Caricali nella seguente cartella:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Per versione Windows
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Per versione Linux
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Ecco fatto per il lato server! Ora passiamo al lato client.



## Passo 3: Installare le mod sul Client

Ora che tutte le mod sono installate sul server, dobbiamo assicurarci che anche chi vuole connettersi le abbia installate. Ogni client deve ripetere questo processo. Al momento non esiste un modo per scaricare automaticamente le mod al momento della connessione.

Apri Steam, fai click destro su Palworld, seleziona Gestisci e poi Sfoglia file locali.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Si aprirà la cartella con l’installazione di Palworld sul tuo dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Ora vai nella cartella:
```
../Palworld/Pal/Content/Paks/
```

Sposta i file **.pak** delle mod in questa cartella. Ripeti per ogni mod aggiuntiva.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Passo 4: Avvia Palworld & Connettiti al server

Ora puoi connetterti al tuo server Palworld e goderti l’esperienza con tutte le nuove mod. Usa la nostra guida dedicata [Connettersi al Server](palworld-connect.md) se hai bisogno di aiuto per la connessione.

Quando entri, dovresti vedere le differenze apportate dalle mod.

Per esempio, sul nostro server di test usiamo la mod dei blocchi di Minecraft:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Hai installato con successo le mod sul tuo server Palworld. Se hai problemi con il modding, dai un’occhiata alla sezione debug qui sotto.



## Debugging

In questa sezione ti diamo qualche motivo comune per problemi e passi per risolverli. Ricorda che il modding è ancora agli inizi e non ufficiale, quindi è normale trovare bug.

#### Verifica la versione della mod compatibile

Assicurati che le mod installate siano compatibili con la versione attuale di Palworld. Se non lo sono, potresti ricevere errori o alcune funzioni potrebbero non funzionare. Contatta l’autore della mod per chiedere un aggiornamento se è obsoleta.

#### Riavvia il Server

Ricordati di riavviare il server dopo ogni modifica o se non vedi le mod attive. Ti consigliamo di consultare l’autore della mod per eventuali errori o bug riscontrati con mod specifiche.

#### Controlla i Log per Errori

Un primo passo per risolvere è controllare la sezione **Information->Log Files** nel pannello web del server. Qui trovi i log con info sul server, eventi, suggerimenti o messaggi di errore.

I messaggi di errore aiutano a capire meglio la causa del problema. Spesso si risolvono guardando con attenzione i log.

:::info
Hai bisogno di aiuto extra? Nessun problema, unisciti alla nostra [Community Discord](https://discord.com/invite/zaphosting) o scrivi sul nostro [Subreddit r/zaphosting](https://www.reddit.com/r/zaphosting/) dove noi e la community ti possiamo dare una mano.

Vuoi supporto ufficiale? Apri un [ticket](https://zap-hosting.com/en/customer/support/) sul nostro sito con tutti i dettagli e ti risponderemo il prima possibile! :)
:::


<InlineVoucher />