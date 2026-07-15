---
id: palworld-host-character-transfer
title: "Palworld: Trasferimento del Personaggio Host"
description: "Scopri come trasferire il personaggio host di Palworld da una partita in solo o co-op a un server dedicato usando Palworld Save Tools e i file di salvataggio corretti. -> Scopri di più ora"
sidebar_label: "Trasferimento del Personaggio Host"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il trasferimento del personaggio host di Palworld ti permette di migrare il personaggio di un host in solo o co-op in un salvataggio su server dedicato. In questa guida preparerai i file di salvataggio necessari, utilizzerai lo strumento di migrazione supportato e caricherai i dati aggiornati del personaggio sul tuo server.

:::danger Avviso sul Trasferimento Sperimentale del Personaggio
Questa procedura è considerata sperimentale e modifica manualmente i dati di salvataggio. Gli aggiornamenti di Palworld possono cambiare la struttura dei salvataggi, causando malfunzionamenti degli strumenti o dei passaggi di migrazione.
:::

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld e a un sistema Windows locale dove poter eseguire lo strumento di migrazione dei salvataggi richiesto.

### Requisiti

Ti servono i seguenti elementi:

| Requisito | Scopo |
| --- | --- |
| Accesso al tuo server Palworld ZAP-Hosting | Per scaricare e caricare i file di salvataggio necessari |
| Una posizione di backup locale | Per conservare una copia sicura dei dati di salvataggio originali |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Per eseguire la migrazione del personaggio host |
| Un personaggio server dedicato appena creato | I dati del personaggio host verranno migrati su questo personaggio del server dedicato |

:::caution Crea Prima un Backup
Prima di modificare qualsiasi file di salvataggio, scarica e conserva un backup completo del salvataggio attuale del server. Se il trasferimento fallisce o corrompe i dati del personaggio, ti serviranno i file originali per ripristinare il server.
:::

### Note Importanti sui File di Configurazione

Questo trasferimento **non** si effettua modificando un file di configurazione Palworld nella cartella `Configs`. Secondo la documentazione attuale dello strumento e le indicazioni della community, il trasferimento del personaggio host si esegue sostituendo i file di salvataggio.

I file rilevanti si trovano nella directory di salvataggio del server, non nel normale file di configurazione di gioco come `PalWorldSettings.ini`.

## Capire Quali File Vengono Usati

Prima di iniziare il trasferimento, devi identificare i file coinvolti.

### File di Salvataggio Richiesti per il Trasferimento

La migrazione del personaggio host utilizza i seguenti dati di salvataggio:

| File o Cartella | Posizione | Scopo |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Contiene i dati di salvataggio del mondo usati dallo strumento di migrazione |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Contiene i file di salvataggio dei giocatori, incluso il nuovo personaggio del server dedicato |
| `00000001.sav` | Dentro `Players/` dal salvataggio solo o co-op caricato | Rappresenta di solito il personaggio host originale nei salvataggi co-op |

`[your_savefolder_id]` è il nome lungo della cartella usata dal tuo salvataggio mondo Palworld. Questo valore è diverso per ogni salvataggio.

### Dove Trovare i File nell’Interfaccia ZAP

Puoi accedere ai file di salvataggio richiesti tramite il file manager di amministrazione del tuo server di gioco.

Naviga in:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Dentro questa cartella dovresti trovare almeno:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Prepara il Personaggio del Server Dedicato

Prima di poter migrare il personaggio host, il server dedicato deve già contenere un salvataggio giocatore appena generato per il tuo account.

### Crea un Nuovo Personaggio sul Server

Entra normalmente nel tuo server dedicato Palworld e crea un nuovo personaggio. Gioca finché il personaggio non raggiunge almeno il livello `2`.

Questo passaggio è necessario perché lo strumento di trasferimento richiede un file di personaggio esistente sul server dedicato come destinazione della migrazione.

### Forza o Aspetta un Salvataggio

Dopo aver creato il nuovo personaggio, devi assicurarti che il server abbia scritto i nuovi dati giocatore su disco.

Puoi:

- aspettare l’intervallo di salvataggio automatico, solitamente intorno a `4` minuti, oppure
- eseguire il comando `save` nella console del server

| Comando | Dove eseguirlo | Scopo |
| --- | --- | --- |
| `save` | Console del server | Forza il server a scrivere su disco i dati attuali del mondo e del giocatore |

:::info Requisito Comando Save
Se usi il comando `save`, eseguilo prima di fermare il server. Questo aiuta a garantire che il nuovo file personaggio del server dedicato esista nella cartella `Players/`.
:::

### Ferma il Server

Una volta completato il salvataggio, ferma il server Palworld dalla tua amministrazione server.

Non continuare mentre il server è in esecuzione, perché scritture attive potrebbero sovrascrivere o entrare in conflitto con i file che stai per sostituire.

## Scarica i Dati di Salvataggio Richiesti

Ora che il nuovo personaggio esiste sul server dedicato, puoi scaricare i file necessari per la migrazione.

### Apri la Directory di Salvataggio

Nel file manager ZAP-Hosting, vai in:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Scarica i File

Scarica i seguenti elementi sul tuo computer locale:

| Elemento | Necessario |
| --- | --- |
| `Level.sav` | Sì |
| Cartella `Players/` | Sì |

Conserva entrambi nello stesso percorso locale di lavoro così lo strumento di migrazione può elaborarli correttamente.

:::tip Mantieni i File Insieme
Metti `Level.sav` e la cartella `Players/` uno accanto all’altro nella stessa cartella locale. Questo corrisponde al flusso di lavoro previsto da Palworld Save Tools.
:::

## Migra il Personaggio Host

Una volta scaricati i dati di salvataggio, puoi eseguire il trasferimento vero e proprio del personaggio host.

### Avvia Palworld Save Tools

Scarica ed estrai [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), poi apri `PalworldSaveTools.exe`.

Nell’applicazione, scegli:

```text
Fix Host Save
```



### Seleziona i File Correttamente

All’interno dello strumento di migrazione:

1. Seleziona il tuo `Level.sav` scaricato
2. Nel campo di selezione a sinistra, scegli `00000001.sav`
3. Nel campo di selezione a destra, scegli il nuovo personaggio creato sul server dedicato
4. Avvia la migrazione selezionando `Migrate`

| Campo Strumento | Valore da selezionare |
| --- | --- |
| `Path to Level.sav` | Il tuo `Level.sav` scaricato |
| Campo personaggio sinistro | `00000001.sav` |
| Campo personaggio destro | Il tuo nuovo personaggio server dedicato |
| Azione | `Migrate` |

### Cosa Fa la Migrazione

Il processo di migrazione riassegna i dati del personaggio host originale dal salvataggio solo o co-op all’entry del personaggio server dedicato che hai creato.

Per questo devi prima entrare nel server e generare un nuovo salvataggio giocatore prima di usare lo strumento.

:::caution Verifica il Personaggio di Destinazione
Assicurati di selezionare il personaggio server corretto a destra. Scegliere il target sbagliato potrebbe sovrascrivere i dati di salvataggio di un altro giocatore.
:::

## Carica i File di Salvataggio Aggiornati

Dopo che la migrazione è completata con successo, devi caricare i file modificati di nuovo sul tuo server.

### Sostituisci i Dati di Salvataggio Esistenti

Torna nella stessa directory server nel file manager ZAP-Hosting:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Carica e sostituisci:

- il `Level.sav` aggiornato
- la cartella `Players/` aggiornata

Se il file manager ti chiede di sovrascrivere i file esistenti, conferma la sostituzione.

### Modifiche ai File di Configurazione

Per questo specifico trasferimento del personaggio host, attualmente non è richiesta alcuna modifica verificata a un file di configurazione Palworld come `PalWorldSettings.ini`.

| Elemento | Necessario per il trasferimento host |
| --- | --- |
| Modifica di `PalWorldSettings.ini` | No |
| Modifica di file sotto `Configs` | Nessuna richiesta verificata |
| Sostituzione di `Level.sav` | Sì |
| Sostituzione di `Players/` | Sì |

:::note Nessuna Configurazione Aggiuntiva Necessaria
Secondo la documentazione attuale dello strumento e le istruzioni di migrazione, non sono richieste voci di configurazione extra o modifiche manuali a file `.ini` per il trasferimento stesso.
:::

## Avvia il Server e Testa il Personaggio

Una volta caricati i file aggiornati, riavvia il tuo server Palworld.

### Rientra nel Server

Connettiti al server usando lo stesso account che ha creato il nuovo personaggio server dedicato. Se la migrazione è andata a buon fine, dovresti caricare il personaggio host trasferito invece di quello temporaneo.

### Controlla i Dati Importanti del Personaggio

Dopo l’accesso, verifica che i seguenti dati siano corretti:

- livello del personaggio
- inventario
- pals
- proprietà della base
- dati di progressione

Se qualcosa manca o è errato, ferma subito il server e ripristina il backup prima di riprovare.

:::danger Ripristina il Backup se i Dati Sono Errati
Se il personaggio, l’inventario o i dati di proprietà del mondo risultano corrotti dopo la migrazione, non continuare a giocare. Ripristina prima il backup originale di `Level.sav` e `Players/` per evitare ulteriori modifiche indesiderate.
:::

## Riepilogo di Riferimento

### Percorsi, File e Azioni Richieste

| Tipo | Valore |
| --- | --- |
| Percorso salvataggio | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| File richiesto | `Level.sav` |
| Cartella richiesta | `Players/` |
| File salvataggio host tipicamente selezionato | `00000001.sav` |
| Comando server | `save` |
| Riavvio server richiesto | Sì |
| Modifica file di configurazione richiesta | Nessuna richiesta verificata |

## Conclusione

Congratulazioni, hai trasferito con successo il tuo personaggio host di Palworld su un server dedicato. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂