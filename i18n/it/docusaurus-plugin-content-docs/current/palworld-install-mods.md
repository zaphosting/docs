---
id: palworld-install-mods
title: "Palworld: Installare Mod"
description: "Scopri come installare mod per Palworld, inclusi UE4SS Palworld, mod Lua e mod .pak, sul tuo server dedicato. -> Scopri di più ora"
sidebar_label: Palworld: Installare Mod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld supporta diversi tipi di mod per server, i più comuni sono `UE4SS`, `.lua` e `.pak`. In questa guida imparerai come preparare il tuo server, identificare il tipo corretto di mod, caricare i file necessari e riavviare il server affinché le mod vengano caricate correttamente.



## Preparazione

Prima di installare qualsiasi mod, assicurati che il tuo server e la mod scelta siano compatibili.

:::danger Effettua un Backup del Tuo Mondo Prima di Procedere
È sempre consigliato creare un backup dei dati di salvataggio di Palworld prima di installare mod. Se una mod è incompatibile o causa problemi all’avvio, potresti dover ripristinare lo stato precedente del mondo.
:::

Verifica innanzitutto quanto segue:

| Requisito | Dettagli |
| --- | --- |
| Edizione del server | I server dedicati Palworld utilizzano la versione **Steam**. Non usare mod destinate esclusivamente alla versione **Game Pass**. |
| Compatibilità mod | Assicurati che l’autore della mod dichiari esplicitamente che la mod funziona su server dedicati. |
| Tipo di mod | Verifica se la mod è `UE4SS`, `.lua` o `.pak`. |
| Requisito client | Alcune mod devono essere installate sia sul **server** che su tutti i **client dei giocatori**. |
| Versione server | Controlla la versione attuale del server prima di installare una mod. |

### Controlla la versione del tuo server

Per confermare la versione attuale del server Palworld, apri la console del server nella tua amministrazione ZAP-Hosting e digita:

```text
info
```

Questo comando mostra le informazioni sulla versione che puoi confrontare con i requisiti della mod.

:::tip Installa Una Mod alla Volta
Installa sempre una mod per volta e testala prima di aggiungerne un’altra. Questo rende molto più semplice risolvere problemi se il server non si avvia o una mod non funziona correttamente.
:::

## Capire quale tipo di mod stai installando

Le mod di Palworld non si installano tutte allo stesso modo. Devi identificare il tipo di mod prima di caricare i file.

| Tipo di mod | Contenuto tipico | Percorso di installazione comune | Note |
| --- | --- | --- | --- |
| Mod `UE4SS` / `.lua` | Cartella con script come `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Di solito richiede il framework `UE4SS` |
| Mod `.pak` | Uno o più file `.pak`, a volte con file aggiuntivi | `Pal/Content/Paks/~mods/` | Alcune mod usano invece `Pal/Content/Paks/LogicMods/` |
| Mod lato client | Varia | Non sempre installabile sul server | Deve essere usata solo se l’autore conferma il supporto server |

:::caution Segui il Percorso Indicato dall’Autore della Mod
I percorsi indicati in questa guida sono quelli più comuni per le mod di Palworld. Tuttavia, alcune mod richiedono una struttura di cartelle diversa. Segui sempre le istruzioni fornite dall’autore della mod se sono diverse.
:::

## Accedi ai file del server nell’interfaccia ZAP

Dovrai usare le aree di gestione file nell’amministrazione del server di gioco ZAP-Hosting.

### Apri la sezione Configs

I file di configurazione rilevanti si trovano nella tua amministrazione server sotto **Configs**. Questa sezione è utile per controllare e modificare i file di configurazione disponibili per il tuo server Palworld.

:::note Configs vs. File Mod
L’installazione delle mod di Palworld di solito non si limita a modificare un’impostazione di gioco in un singolo file di configurazione. Nella maggior parte dei casi devi caricare i file della mod nelle directory corrette del server e alcune mod potrebbero richiedere modifiche aggiuntive ai file disponibili sotto **Configs**.
:::

### Apri il file manager

Per caricare file mod come archivi `.pak` o cartelle di script `UE4SS`, devi accedere ai file del server tramite il file manager nell’interfaccia ZAP.

Se una mod include un file di configurazione proprio, caricalo esattamente come fornito dall’autore e modificalo solo se l’autore documenta i valori supportati.

## Installa il framework UE4SS se necessario

`UE4SS` è un framework per modding usato da molte mod Lua e basate su script di Palworld. Ti serve solo se la mod scelta ne dipende.

### Conferma che il tuo server usa Windows

`UE4SS` per Palworld è generalmente usato con la versione server Windows. Se il tuo server non usa un ambiente server Windows per Palworld, le mod basate su `UE4SS` potrebbero non funzionare come previsto.

:::info Requisito UE4SS
Se la mod scelta è una mod `UE4SS` o `.lua`, verifica che il framework sia già presente prima di caricare la mod stessa.
:::

### Controlla il percorso di installazione di UE4SS

Se `UE4SS` è installato, la directory rilevante è solitamente:

```text
Pal/Binaries/Win64/ue4ss/
```

La cartella mod usata dalla maggior parte delle mod `UE4SS` e Lua è:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Se il tuo prodotto ZAP-Hosting offre un’opzione integrata per modding o `UE4SS` nell’amministrazione server, puoi usarla se disponibile. Se non vedi questa opzione nell’interfaccia, non presumere che esista per il tuo prodotto o tipo di server.

## Carica e installa mod Lua o UE4SS

Le mod Lua e altre mod basate su `UE4SS` per Palworld sono di solito distribuite come cartelle e non come singoli file `.pak`.

### Estrai la mod sul tuo dispositivo locale

Scarica l’archivio della mod dalla pagina ufficiale dell’autore e estrailo sul tuo computer. Non caricare il file `.zip` o `.rar` a meno che l’autore non ti dica esplicitamente di farlo.

### Carica la cartella mod nel percorso corretto

Per la maggior parte delle mod Lua o `UE4SS`, carica la cartella mod estratta in:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Una struttura tipica di una mod Lua è:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Sostituisci `UploadedMod` con il nome reale della cartella fornito dall’autore della mod.

### Struttura esempio

| Elemento | Percorso esempio |
| --- | --- |
| Cartella mod | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| File script | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Non Rinominare i File Arbitrariamente
Non rinominare la cartella mod, i file script o la struttura interna delle cartelle a meno che l’autore della mod non lo richieda esplicitamente. Molte mod `UE4SS` dipendono dalla struttura originale per caricarsi correttamente.
:::

## Carica e installa mod .pak

Le mod `.pak` si installano in modo diverso rispetto alle mod Lua o basate su script `UE4SS`.

### Carica il file `.pak`

Per la maggior parte delle mod `.pak` di Palworld, carica il file in:

```text
Pal/Content/Paks/~mods/
```

Esempio:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Alcune mod potrebbero invece richiedere di usare:

```text
Pal/Content/Paks/LogicMods/
```

### Verifica eventuali file aggiuntivi inclusi

Alcune mod `.pak` possono includere più file, come metadati o file di supporto. Se l’archivio della mod contiene più file necessari, caricali tutti esattamente come descritto dall’autore.

| Posizione comune `.pak` | Caso d’uso |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Posizione più comune per mod `.pak` generiche |
| `Pal/Content/Paks/LogicMods/` | Usata da alcune mod secondo le istruzioni dell’autore |

## Modifica i file di configurazione della mod se richiesto

Alcune mod di Palworld includono file di configurazione propri che devono essere modificati dopo il caricamento. Queste impostazioni non sono universali, quindi il nome esatto del file e i valori dipendono dalla mod scelta.

### Dove trovare il file di configurazione

Se la mod fornisce un file di config, potrebbe trovarsi in uno di questi percorsi dopo il caricamento:

| Tipo di mod | Posizione possibile del config |
| --- | --- |
| Mod `UE4SS` / `.lua` | All’interno della cartella mod sotto `Pal/Binaries/Win64/ue4ss/Mods/[nome_mod]/` |
| Mod `.pak` | A volte non include config modificabili; controlla la documentazione della mod |
| Integrazione config server | In alcuni casi, impostazioni aggiuntive possono essere modificate tramite **Configs** nell’amministrazione ZAP |

### Cosa modificare

Modifica solo i valori esplicitamente documentati dall’autore della mod. Esempi tipici includono:

- abilitare o disabilitare funzionalità della mod
- impostare moltiplicatori o limiti
- definire comportamenti riservati agli admin
- cambiare nomi di tasti o opzioni interne usate dalla mod

Poiché le mod di Palworld non usano un formato di configurazione standard unico, non esiste una voce universale che valga per tutte le mod.

:::info Nessuna Config Universale per Mod Palworld
Attualmente non esiste un singolo file di configurazione server Palworld o una sezione config integrata che abiliti tutte le mod globalmente. In pratica, l’installazione delle mod si fa posizionando i file corretti nelle directory giuste e modificando eventuali file di configurazione specifici solo se la mod li include.
:::

## Riavvia il server e testa la mod

Dopo aver caricato i file della mod e apportato eventuali modifiche di configurazione, devi riavviare il server Palworld.

### Riavvia il server

Usa la funzione di riavvio nell’amministrazione del server di gioco ZAP-Hosting per riavviare completamente il servizio.

Questo passaggio è necessario perché Palworld normalmente non carica le mod server appena caricate fino al riavvio.

### Testa la funzionalità

Dopo il riavvio:

1. Entra nel server.
2. Prova la funzionalità della mod in gioco.
3. Controlla la console del server per errori se la mod non funziona.
4. Rimuovi i file della mod appena aggiunta se il server non si avvia o si comporta in modo anomalo.

:::tip Risoluzione Problemi Mod Fallite
Se una mod causa problemi, rimuovi prima solo i file dell’ultima mod installata e riavvia il server. Questo è il modo più veloce per capire se quella mod è la causa.
:::

## Riferimento rapido

| Attività | Azione |
| --- | --- |
| Controlla versione server | Esegui `info` nella console del server |
| Percorso base UE4SS | `Pal/Binaries/Win64/ue4ss/` |
| Percorso mod UE4SS/Lua | `Pal/Binaries/Win64/ue4ss/Mods/` |
| File script Lua comune | `scripts/main.lua` |
| Percorso mod `.pak` comune | `Pal/Content/Paks/~mods/` |
| Percorso alternativo `.pak` | `Pal/Content/Paks/LogicMods/` |
| Accesso file config | Apri **Configs** nell’amministrazione server ZAP |
| Passaggio finale | Riavvia il server |

## Conclusione

Congratulazioni, hai installato con successo le mod sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂