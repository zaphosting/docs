---
id: palworld-upload-existing-save
title: "Palworld: Carica una Salvataggio Esistente"
description: "Scopri come caricare una salvataggio esistente di Palworld, migrare un mondo server e aggiornare correttamente il file di configurazione richiesto sul tuo server di gioco ZAP-Hosting. -> Scopri di più ora"
sidebar_label: Palworld: Carica una Salvataggio Esistente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld memorizza i dati del mondo del server dedicato in una cartella di salvataggio specifica e collega quella cartella tramite la configurazione del server. In questa guida, imparerai come caricare una salvataggio esistente sul tuo server Palworld di ZAP-Hosting e aggiornare l’impostazione necessaria affinché il server carichi il mondo corretto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere la cartella di salvataggio esistente di Palworld disponibile sul tuo dispositivo locale.

:::danger Salvataggi da Fonti Non Supportate
I salvataggi cloud da console Xbox e PS5 non possono essere trasferiti direttamente su un server dedicato Palworld. Puoi migrare solo salvataggi da un’installazione PC o da un altro server dedicato esistente.
:::

:::info Accesso Richiesto
Devi avere accesso all’interfaccia web del tuo server di gioco ZAP-Hosting, inclusi il file manager e la sezione `Configs`.
:::

Se hai bisogno di aiuto per accedere ai file del server, usa la guida di gestione file pertinente nella documentazione ZAP-Hosting, se disponibile per il tuo prodotto.

## Comprendere la Struttura Richiesta del Salvataggio

Prima di caricare qualsiasi cosa, verifica che il tuo salvataggio abbia la struttura corretta.

Su un server dedicato Palworld, il salvataggio del mondo attivo si trova in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

Il nome della cartella `[your_save_folder_id]` è solitamente una lunga stringa di lettere e numeri, per esempio:

```text
84B5E2264EC387DEDB43179D666031A1
```

Una cartella di salvataggio valida contiene normalmente file e cartelle simili ai seguenti:

| Elemento | Scopo |
| --- | --- |
| `Level.sav` | Dati principali del mondo salvato |
| `LevelMeta.sav` | Metadati del mondo |
| `Players/` | Dati di salvataggio dei giocatori |
| `WorldOption.sav` | File legacy delle opzioni mondo che potrebbe dover essere rimosso |

:::caution Rimuovi il File Obsoleto WorldOption.sav
Se la cartella di salvataggio caricata contiene `WorldOption.sav`, eliminalo prima di avviare il server. Questo file è noto per causare problemi nelle configurazioni attuali dei server dedicati e non dovrebbe essere usato per salvataggi migrati, a meno che non sia specificamente richiesto da una modifica ufficiale più recente di Palworld.
:::

## Trova il File di Configurazione nell’Interfaccia ZAP

Dopo aver caricato la cartella di salvataggio, devi indicare al server quella cartella modificando la configurazione di Palworld.

Nell’amministrazione del server di gioco ZAP-Hosting, apri la sezione `Configs` e individua:

```text
GameUserSettings.ini
```

A seconda dell’ambiente server attuale, questo file si trova tipicamente in uno dei seguenti percorsi:

| Percorso possibile | Note |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Percorso comune su server Palworld basati su Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Percorso più vecchio o alternativo su configurazioni Windows |

:::note Percorso LinuxServer vs WindowsServer
I server dedicati Palworld sono comunemente distribuiti con il percorso di configurazione `LinuxServer`. Se non vedi `WindowsServer`, controlla `LinuxServer`. Nell’interfaccia ZAP, il metodo più semplice è aprire `Configs` e selezionare direttamente `GameUserSettings.ini`.
:::

## Carica la Salvataggio Esistente

Il processo di caricamento dipende da dove proviene attualmente il tuo salvataggio, ma la destinazione sul server ZAP è la stessa.

### Ferma Prima il Server

Prima di sostituire il mondo di default, ferma il tuo server Palworld nell’interfaccia web di ZAP-Hosting.

:::caution Evita la Corruzione del Salvataggio
Non caricare o sostituire i file del mondo mentre il server è in esecuzione. Fermare il server prima aiuta a prevenire scritture incomplete e dati di salvataggio corrotti.
:::

### Rimuovi la Cartella di Salvataggio di Default

Apri il file manager e naviga in:

```text
Pal/Saved/SaveGames/0/
```

All’interno di questa directory troverai di solito una cartella di salvataggio generata di default. Elimina quella cartella di default prima di caricare la tua salvataggio.

### Carica la Tua Cartella di Salvataggio Esistente

Carica la tua cartella di salvataggio esistente in:

```text
Pal/Saved/SaveGames/0/
```

Dopo il caricamento, la struttura dovrebbe apparire così:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Se `WorldOption.sav` esiste, eliminalo dopo il caricamento.

:::tip Copia Esattamente il Nome della Cartella
Ti servirà il nome esatto della cartella caricata per il passaggio successivo. Copia `[your_save_folder_id]` esattamente come appare nel file manager, includendo tutte le lettere e i numeri.
:::

## Modifica GameUserSettings.ini

Dopo aver completato il caricamento del salvataggio, devi aggiornare la configurazione del server affinché Palworld carichi il mondo corretto.

Apri `GameUserSettings.ini` dalla sezione `Configs` e cerca la voce `DedicatedServerName`.

Impostala sul nome esatto della cartella di salvataggio caricata:

```ini
DedicatedServerName=[your_save_folder_id]
```

Esempio:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Voce di Configurazione Richiesta

Usa questo riferimento durante la modifica del file:

| File di configurazione | Chiave | Valore richiesto |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Nome esatto della cartella di salvataggio caricata |

### Cosa Fa Questa Impostazione

`DedicatedServerName` indica al server dedicato Palworld quale cartella dentro `Pal/Saved/SaveGames/0/` deve essere caricata come mondo attivo.

Se questo valore non corrisponde esattamente al nome della cartella caricata, il server potrebbe creare un nuovo mondo o caricare in modo errato.

:::danger Corrispondenza Esatta Obbligatoria
Se noti progressi della mappa mancanti, un mondo vuoto o un salvataggio appena generato dopo l’avvio, la causa più comune è che `DedicatedServerName` non corrisponde esattamente al nome della cartella caricata.
:::

## Percorsi di Salvataggio Specifici per la Fonte

Se non sei sicuro da dove prendere il tuo salvataggio originale, usa il percorso corretto qui sotto.

### Da un Altro Provider di Server Dedicati

Sul tuo provider precedente, esegui il backup della cartella di salvataggio da:

```text
Pal/Saved/SaveGames/0/
```

Copia l’intera cartella del mondo con il nome originale, quindi carica quella cartella sul tuo server ZAP-Hosting come descritto sopra.

### Da un Salvataggio Steam Co-op

Per i salvataggi Steam locali su Windows, apri il seguente percorso:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

La cartella `[your_steamid64]` è il tuo ID Steam a 64 bit, e `[your_save_folder_id]` è la cartella del mondo che vuoi migrare.

:::caution Limitazione del Personaggio Host
Quando migri un mondo Steam co-op locale su un server dedicato, il personaggio host originale non viene trasferito automaticamente come i dati dei giocatori connessi. Potrebbero essere necessari strumenti di conversione salvataggi di terze parti o trasferimento personaggi aggiuntivi se vuoi preservare il personaggio host.
:::

### Da PC Game Pass

Per le installazioni PC Game Pass, i dati di salvataggio locali sono tipicamente memorizzati in:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

I salvataggi Game Pass non sono memorizzati nello stesso formato dei salvataggi Steam o server dedicati. In pratica, di solito serve uno strumento di conversione di terze parti per convertire il salvataggio in un formato compatibile con Steam o server dedicati prima di caricarlo.

:::info Necessità di Conversione per Game Pass
Un caricamento diretto dei dati grezzi di salvataggio PC Game Pass generalmente non è sufficiente. Devi prima convertire il salvataggio, poi caricare la cartella del mondo convertita in `Pal/Saved/SaveGames/0/` e impostare `DedicatedServerName` di conseguenza.
:::

## Avvia il Server

Una volta caricata la cartella di salvataggio e aggiornato `GameUserSettings.ini`, riavvia il server dall’interfaccia web di ZAP-Hosting.

Normalmente non sono necessari comandi console aggiuntivi per questo processo di migrazione.

Dopo l’avvio, unisciti al server e verifica che:

- venga caricato il mondo corretto
- siano presenti edifici e progressi della mappa
- i dati dei giocatori siano disponibili come previsto

## Risoluzione dei Problemi

Se il salvataggio caricato non si avvia correttamente, controlla i seguenti punti.

### Il Server Ha Creato un Nuovo Mondo

Verifica che il valore seguente in `GameUserSettings.ini` corrisponda esattamente al nome della cartella caricata:

```ini
DedicatedServerName=[your_save_folder_id]
```

Conferma anche che il salvataggio caricato si trovi direttamente in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### Mancano Progressi della Mappa o del Mondo

Questo di solito significa una delle seguenti cose:

| Possibile causa | Soluzione |
| --- | --- |
| Valore `DedicatedServerName` errato | Reinserisci esattamente il nome della cartella caricata |
| Cartella di salvataggio caricata nella directory sbagliata | Spostala in `Pal/Saved/SaveGames/0/` |
| Caricamento incompleto | Ricarica l’intera cartella e verifica che tutti i file siano presenti |

### Problemi Causati da WorldOption.sav

Se il tuo salvataggio contiene `WorldOption.sav`, eliminalo e riavvia il server.

Questo file è associato a un comportamento di gestione salvataggi più vecchio e può interferire con i mondi migrati su server dedicati.

## Conclusione

Congratulazioni, hai caricato con successo una salvataggio esistente di Palworld sul tuo server ZAP-Hosting. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂