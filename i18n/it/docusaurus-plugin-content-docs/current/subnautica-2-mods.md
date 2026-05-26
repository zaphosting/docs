---
id: subnautica-2-mods
title: "Subnautica 2: Installare Mod"
description: "Scopri come installare mod di Subnautica 2 sul tuo gameserver aggiungendo mod Lua o C++ nella cartella corretta, così il tuo server Subnautica le caricherà automaticamente all'avvio. -> Scopri di più ora"
sidebar_label: Subnautica 2: Installare Mod
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le mod ti permettono di personalizzare e migliorare l’esperienza sul tuo server Subnautica 2 aggiungendo nuove funzionalità di gioco, migliorando le meccaniche o introducendo contenuti freschi. Con le mod puoi creare un ambiente più vario e coinvolgente per te e i tuoi giocatori. Questa guida ti mostra come installare mod di Subnautica 2 sul tuo gameserver ZAP-Hosting caricando mod Lua o C++ supportate nella cartella corretta, così vengono caricate automaticamente all’avvio del server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, devi avere accesso ai file del tuo gameserver Subnautica 2 tramite l’interfaccia web ZAP-Hosting o un metodo di gestione file disponibile.

:::info Tipo di Mod Richiesto
Usa solo mod Lua o C++ progettate specificamente per Subnautica 2. Se una mod è fatta per un altro gioco, come Subnautica 1 o Subnautica Below Zero, la compatibilità non è garantita.
:::

:::note Fonti per Scaricare Mod
Le mod di Subnautica 2 si possono trovare, per esempio, su piattaforme community come [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Poiché le pagine di mod di terze parti possono cambiare in qualsiasi momento, controlla sempre la descrizione e le note di installazione prima di caricare i file.
:::

## Scarica Mod Compatibili

Per prima cosa, scarica le mod che vuoi usare sul server. Assicurati che la mod sia specificamente per **Subnautica 2** e verifica se l’autore fornisce requisiti aggiuntivi.

### Controlla il Contenuto della Mod

Dopo aver scaricato un archivio mod, estrailo sul tuo computer e verifica i file inclusi.

Elementi comuni da cercare:

- file script Lua
- file mod C++
- una struttura di cartelle fornita dall’autore della mod
- un file `README`, note di installazione o lista di dipendenze

:::caution Verifica la Compatibilità
Non tutte le mod per giochi sono compatibili con server. Alcune mod sono fatte solo per il client e potrebbero non funzionare su un gameserver dedicato Subnautica 2. Se l’autore non menziona il supporto server, testa con attenzione prima di usarla in produzione.
:::

## Accedi ai File del Gameserver

Apri il file system del tuo gameserver Subnautica 2 e individua la directory principale del server.

Se usi l’interfaccia web ZAP-Hosting, apri il file manager del tuo gameserver e naviga nella directory root dell’installazione del server.

### Trova la Cartella Mods

All’interno della directory principale del gameserver, trova la cartella `mods`.

La destinazione di installazione è:

```text
[main_gameserver_directory]/mods
```

Sostituisci `[main_gameserver_directory]` con la directory base dei file del tuo server Subnautica 2.

:::info Caricamento Automatico delle Mod
Il server controlla la cartella `mods` all’avvio. Se una mod Lua o C++ supportata è posizionata correttamente, verrà caricata automaticamente al prossimo avvio del server.
:::

## Carica e Installa le Mod

Una volta che hai i file mod corretti e hai aperto la cartella `mods`, puoi caricare il contenuto della mod.

### Copia i File della Mod

Carica o sposta i file mod Lua o C++ estratti nella cartella `mods` nella directory principale del gameserver.

A seconda della mod, questo può significare:

- caricare un singolo file direttamente in `mods`
- caricare una cartella mod completa in `mods`
- mantenere esattamente la struttura di cartelle fornita dall’autore della mod

### Mantieni la Struttura Originale

Se l’archivio scaricato contiene già una cartella mod, non riorganizzare i file interni a meno che l’autore non lo richieda esplicitamente.

| Elemento | Cosa fare |
| --- | --- |
| Singolo file mod Lua | Caricalo nella cartella `mods` |
| Singolo file mod C++ | Caricalo nella cartella `mods` |
| Mod basata su cartella | Carica l’intera cartella nella cartella `mods` |
| Archivio come `.zip` | Estrailo prima, poi carica i contenuti se necessario |

:::caution Non Caricare Archivi Compressi a Meno che Non Sia Esplicitamente Supportato
Se carichi solo un file `.zip` o altro archivio senza estrarlo, il server potrebbe non rilevare la mod. A meno che l’autore non dica il contrario, carica i file o cartelle estratti.
:::

## Riavvia il Server

Dopo aver caricato le mod, riavvia il tuo gameserver Subnautica 2.

Questo è necessario perché il server carica le mod all’avvio. Se il server è già in esecuzione, i file appena caricati di solito non vengono applicati fino al prossimo avvio.

### Conferma il Caricamento della Mod

Dopo il riavvio, verifica se la mod è attiva in gioco o tramite eventuali log o output disponibili per il tuo server.

Poiché il comportamento delle mod può variare, la conferma può includere:

- cambiamenti nel gameplay
- nuovi comandi o funzionalità
- voci di log visibili dalla mod
- avvio del server senza errori

:::tip Installa le Mod Una alla Volta
Se vuoi usare più mod, installale e testale una per volta. Così è molto più facile capire quale mod causa problemi se il server non parte più correttamente.
:::

## Risoluzione Problemi

Se le mod di Subnautica 2 non funzionano, ci sono diverse cause comuni da controllare.

### Problemi Comuni

| Problema | Possibile causa | Soluzione |
| --- | --- | --- |
| La mod non si carica | File caricati nella cartella sbagliata | Assicurati che i file siano dentro la cartella `mods` nella directory principale del gameserver |
| Il server parte ma la mod non ha effetto | Mod solo client o incompatibile | Controlla la pagina della mod e conferma il supporto per server dedicati |
| Il server non si avvia | File mod corrotti o versione non compatibile | Rimuovi l’ultima mod installata e riavvia il server |
| File mod presenti ma ignorati | Archivio caricato invece dei file estratti | Estrai il download e carica i file mod veri |
| Conflitto tra mod multiple | Due mod modificano lo stesso comportamento | Testa ogni mod separatamente e tieni solo combinazioni compatibili |

### Rimuovi una Mod Problematiche

Se una mod appena installata causa problemi, elimina il file o la cartella mod corrispondente dalla directory `mods` e riavvia il server.

```text
[main_gameserver_directory]/mods
```

:::danger Usa Solo Fonti Mod Affidabili
Scarica mod solo da fonti di cui ti fidi. File di terze parti possono contenere contenuti corrotti, obsoleti o dannosi. Controlla attentamente la pagina della mod ed evita download sconosciuti senza informazioni chiare su installazione o compatibilità.
:::

## Best Practices

Per mantenere il server stabile, gestisci le mod con attenzione invece di installarne tante tutte insieme.

### Flusso di Lavoro Consigliato

1. Scarica una mod compatibile per Subnautica 2.
2. Estrai i file localmente.
3. Carica i file o la cartella nella directory `mods` del server.
4. Riavvia il server.
5. Testa la funzionalità.
6. Ripeti per la mod successiva.

### Mantieni un Backup Locale

Prima di modificare la configurazione mod attiva, conserva un backup di:

- file mod attuali
- eventuali file di configurazione correlati
- una lista delle mod installate con le rispettive versioni

Questo ti aiuta a ripristinare rapidamente una configurazione funzionante se una nuova mod crea problemi.

## Conclusione

Congratulazioni, hai installato con successo le mod sul tuo gameserver Subnautica 2. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂