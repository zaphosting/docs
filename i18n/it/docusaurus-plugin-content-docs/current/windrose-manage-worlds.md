---
id: windrose-manage-worlds
title: "Windrose: Gestisci i Mondi"
description: "Scopri come gestire più mondi di Windrose, cambiare i salvataggi dei mondi e configurare le impostazioni del mondo su un server dedicato con la struttura corretta. -> Scopri di più ora"
sidebar_label: Gestisci i Mondi
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Windrose supporta più mondi su un singolo server dedicato, con ogni mondo che utilizza i propri dati di salvataggio e la configurazione `WorldDescription.json`. In questa guida imparerai come creare nuovi mondi, passare da un mondo all'altro, eseguire backup e cancellarli in sicurezza.

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo gameserver Windrose tramite l’interfaccia web di ZAP-Hosting e che il server sia offline prima di apportare modifiche ai salvataggi o alle configurazioni.

:::info Accesso Richiesto
Devi avere accesso alla gestione del gameserver ZAP-Hosting, incluse le sezioni **File Manager**, **Configs** e **Backups**, per gestire in sicurezza i tuoi mondi Windrose.
:::

:::caution Ferma Prima il Server
Devi sempre fermare il server prima di modificare `ServerDescription.json`, cambiare `WorldDescription.json`, creare cartelle mondo o cancellare dati di salvataggio. Questo previene corruzioni e scritture incomplete del mondo.
:::

## Comprendere la Struttura dei Mondi di Windrose

Windrose memorizza tutti i dati dei mondi all’interno della directory del profilo di salvataggio. Il primo mondo viene creato automaticamente al primo avvio del server.

La struttura rilevante è la seguente:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

In pratica, le cartelle dei mondi si trovano in:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Ogni cartella mondo prende il nome dal suo unico `IslandId`. Il server usa questo ID internamente per identificare quale mondo caricare.

| File o Cartella | Scopo |
| --- | --- |
| `ServerDescription.json` | Definisce la configurazione attiva del server, incluso il mondo caricato |
| `RocksDB/[your_game_version]/Worlds/` | Contiene tutte le cartelle di salvataggio dei mondi disponibili |
| `[your_world_id]/WorldDescription.json` | Contiene la configurazione di un mondo specifico |
| `WorldIslandId` | Valore in `ServerDescription.json` che indica al server quale mondo caricare |

:::danger Non Rinominare le Cartelle dei Mondi
Non devi mai rinominare manualmente una cartella mondo. Windrose usa il nome della cartella come `IslandId` interno nel database RocksDB. Rinominare una cartella può corrompere il mondo o renderlo inutilizzabile.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Individuare il Mondo Attivo

Prima di cambiare o creare mondi, è utile identificare quale mondo è attualmente attivo.

### Controlla la Configurazione del Server

Apri la sezione **Configs** nella gestione del gameserver e trova `ServerDescription.json`. Se il file non è presente lì, usa il **File Manager** e apri `ServerDescription.json` dalla radice dei file.

Cerca questo campo:

```json
"WorldIslandId": "[your_world_id]"
```

Questo valore definisce il mondo che il server caricherà all’avvio.

### Controlla un ID Mondo

Per identificare un mondo salvato specifico, apri il file `WorldDescription.json` dentro la cartella del mondo e cerca il valore `IslandId`.

Esempio:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "My World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

L’`IslandId` in questo file deve corrispondere esattamente al nome della cartella.

## Passare da un Mondo all’Altro

Se hai già più mondi salvati sul server, puoi passare da uno all’altro cambiando il `WorldIslandId` attivo.

### Aggiorna il Mondo di Destinazione

Prima, ferma il server dall’interfaccia web di ZAP-Hosting.

Poi apri `ServerDescription.json` nella sezione **Configs** o tramite il **File Manager** alla radice dei file del server.

Trova questo campo:

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

Sostituisci il valore con l’`IslandId` del mondo che vuoi caricare. Puoi trovare questo ID aprendo il `WorldDescription.json` del mondo di destinazione.

### Salva e Riavvia il Server

Salva il file e riavvia il server. Windrose caricherà ora il mondo selezionato.

:::tip Verifica con Cura l’ID del Mondo
Se il `WorldIslandId` non corrisponde esattamente a una cartella mondo esistente e al suo `IslandId`, il server potrebbe non caricare il mondo previsto o crearne uno nuovo.
:::

## Creare un Nuovo Mondo

Se vuoi ospitare più sessioni di gioco su un server, puoi creare manualmente un mondo nuovo.

### Crea la Cartella del Mondo

Ferma prima il server.

Apri il **File Manager** e vai a:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Crea una nuova cartella con un nome unico. Questo nome diventerà il nuovo `IslandId` del mondo.

Per esempio:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### Crea il File di Descrizione del Mondo

Dentro la nuova cartella, crea un file chiamato `WorldDescription.json` e incolla questo modello:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Sostituisci `YOUR_NEW_WORLD_ID` con l’ID mondo che hai scelto.

:::caution Gli ID Devono Corrispondere
L’`IslandId` dentro `WorldDescription.json` deve essere identico al nome della cartella. Anche piccole differenze, come maiuscole/minuscole o spazi extra, possono impedire il corretto caricamento del mondo.
:::

### Imposta il Nuovo Mondo come Attivo

Ora apri `ServerDescription.json` e aggiorna il valore `WorldIslandId` per puntare al nuovo ID mondo.

Esempio:

```json
"WorldIslandId": "MySecondWorld"
```

Salva il file e avvia il server. Windrose genererà il nuovo mondo fresco all’avvio.

## Eseguire il Backup di un Mondo

Prima di cambiare mondo, cancellare dati o testare nuove impostazioni, è consigliato fare un backup del salvataggio del mondo.

### Usa la Funzione Backup di ZAP-Hosting

Ferma prima il server.

Nel pannello laterale, apri **Backups** e crea un nuovo backup. Questa è l’opzione più sicura se vuoi ripristinare lo stato completo del server in seguito.

### Scarica Manualmente i File del Mondo

Se vuoi solo una copia diretta dei dati di salvataggio, apri il **File Manager** e scarica l’intera cartella `RocksDB/` usando l’opzione zip o download.

Percorso rilevante:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Metodo di Backup | Uso Consigliato |
| --- | --- |
| Backup dal pannello | Migliore per il recupero completo del server |
| Download manuale di `RocksDB/` | Migliore per archiviazione diretta del salvataggio mondo |
| Entrambi i metodi | Consigliato per mondi importanti o prima di una cancellazione |

:::note Consiglio per il Backup
Se gestisci più mondi, mantenere sia un backup dal pannello che una copia manuale di `RocksDB/` ti dà la massima flessibilità per ripristinare un mondo specifico in seguito.
:::

## Cancellare un Mondo

Se vuoi resettare completamente un mondo, puoi eliminare la sua cartella di salvataggio e lasciare che il server ne generi una nuova.

### Elimina il Salvataggio del Mondo

Ferma il server.

Apri il **File Manager** e vai a:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Elimina la cartella del mondo che vuoi cancellare.

### Rigenera il Mondo

Assicurati che `ServerDescription.json` punti ancora a quell’ID mondo cancellato tramite il campo `WorldIslandId`.

Quando riavvii il server, Windrose rileverà che la cartella del mondo di destinazione non esiste più e genererà un mondo nuovo per quell’ID.

:::danger Controlla la Cartella Prima di Eliminare
Eliminare la cartella sbagliata rimuove definitivamente i dati di salvataggio di quel mondo, a meno che tu non abbia un backup. Verifica bene il nome della cartella e l’`IslandId` prima di procedere.
:::

## Gestire le Impostazioni del Mondo

Ogni mondo ha il proprio `WorldDescription.json`, quindi puoi mantenere impostazioni separate per mondi diversi sullo stesso server.

### Esempio di Configurazione del Mondo

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Valori Importanti

| Chiave | Descrizione |
| --- | --- |
| `Version` | Versione della configurazione usata dal file |
| `IslandId` | ID interno del mondo, deve corrispondere al nome della cartella |
| `WorldName` | Nome visualizzato del mondo |
| `WorldPresetType` | Tipo di preset per la generazione del mondo |
| `WorldSettings` | Impostazioni aggiuntive specifiche del mondo, se supportate |

:::info Gestione Configurazioni nel Pannello
I file di configurazione di Windrose possono essere gestiti nella tua gestione gameserver sotto **Configs**. Se un file non è disponibile lì, usa il **File Manager** per modificarlo direttamente.
:::

## Best Practice per Gestire Più Mondi

Gestire più mondi su un server è utile per test, eventi o gruppi di giocatori separati. Per mantenere tutto organizzato, segui questi consigli:

- Usa ID mondo chiari e unici come `[your_pvp_world]` o `[your_build_world]`
- Mantieni il nome della cartella e l’`IslandId` esattamente identici
- Fai un backup prima di cambiare o cancellare un mondo
- Evita di modificare file mentre il server è in esecuzione
- Documenta quale `WorldIslandId` corrisponde a ogni nome mondo

Questo ti aiuta a evitare confusione, soprattutto se gestisci molti mondi nel tempo.

## Conclusione

Congratulazioni, hai gestito con successo i mondi di Windrose sul tuo server. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂