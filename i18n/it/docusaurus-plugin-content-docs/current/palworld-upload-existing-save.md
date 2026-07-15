---
id: palworld-upload-existing-save
title: "Palworld: Carica una Salvataggio Esistente"
description: "Scopri come caricare una salvataggio esistente di Palworld, caricare correttamente i dati del file e configurare il tuo server per caricare la cartella mondo corretta. -> Scopri di più ora"
sidebar_label: Palworld: Carica una Salvataggio Esistente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld memorizza i dati del mondo del server dedicato in una cartella di salvataggio specifica e richiede una voce di configurazione corrispondente per caricarla correttamente. In questa guida, imparerai come caricare una salvataggio esistente sul tuo server Palworld di ZAP-Hosting e configurare il server in modo che si avvii con i dati del mondo corretti.

:::danger Fonti di Salvataggio Non Supportate
Non puoi trasferire direttamente salvataggi cloud da console Xbox o PS5 a un server dedicato Palworld. Solo i salvataggi da un’installazione PC o da un altro server dedicato esistente possono essere migrati con questo metodo.
:::



## Preparazione

Prima di iniziare, assicurati di avere quanto segue:

| Requisito | Dettagli |
| --- | --- |
| Salvataggio Palworld esistente | Una cartella di salvataggio da un’installazione PC o da un altro server dedicato |
| Accesso al tuo server di gioco ZAP-Hosting | Devi avere accesso all’interfaccia web, inclusi il file manager e la sezione `Configs` |
| Server fermo | Il server Palworld deve essere fermo prima di sostituire i dati di salvataggio |
| Nome della cartella di salvataggio | Devi conoscere il nome esatto della cartella di salvataggio caricata, ad esempio `[your_savefolder_id]` |

:::info Accesso al File di Configurazione
Su ZAP-Hosting, i file di configurazione rilevanti di Palworld sono accessibili tramite l’amministrazione del server di gioco nella sezione `Configs`. Non è necessario modificare il file direttamente tramite il file manager a meno che tu non voglia verificare manualmente il percorso.
:::

## Comprendere la Struttura di Salvataggio Richiesta

Prima di caricare qualsiasi cosa, è importante capire quale cartella Palworld carica effettivamente.

La posizione del salvataggio del server è:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

All’interno di questa cartella, di solito dovresti vedere file e cartelle simili a questi:

```text
Level.sav
LevelMeta.sav
Players/
```

In alcuni salvataggi più vecchi o migrati, potresti anche trovare:

```text
WorldOption.sav
```

:::caution Rimuovi il File Obsoleto WorldOption.sav
Se `WorldOption.sav` è presente nella cartella di salvataggio caricata, eliminalo prima di avviare il server. Questo file è noto per causare problemi con le configurazioni più recenti del server Palworld e non dovrebbe essere usato per salvataggi migrati a meno che non sia specificamente richiesto da una configurazione attuale confermata.
:::

## Trova il File di Configurazione Corretto

Per far caricare al server il mondo che hai caricato, devi modificare `GameUserSettings.ini`.

Nell’amministrazione del server di gioco ZAP-Hosting:

1. Apri il tuo server Palworld.
2. Vai su `Configs`.
3. Apri `GameUserSettings.ini`.

A seconda dell’ambiente server attuale, il percorso del file sottostante è tipicamente uno dei seguenti:

| Percorso possibile | Note |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Comune nelle installazioni di server Palworld basate su Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Può apparire nelle installazioni basate su Windows |

:::note Differenze di Percorso
Le installazioni del server Palworld possono usare `LinuxServer` o `WindowsServer` nel percorso di configurazione a seconda della piattaforma attualmente usata dal provider. Se modifichi il file tramite `Configs`, il file corretto è già esposto lì, quindi devi solo assicurarti di modificare `GameUserSettings.ini`.
:::

## Carica un Salvataggio da un Altro Server Dedicato

Se il tuo salvataggio proviene già da un altro provider di hosting, puoi migrarlo direttamente.

### Fai il Backup del Salvataggio Esistente

Sul tuo provider precedente, individua e scarica la cartella di salvataggio esistente da:

```text
Pal/Saved/SaveGames/0/
```

Copia l’intera cartella con il nome alfanumerico casuale, ad esempio:

```text
[your_savefolder_id]
```

### Ferma il Server ZAP-Hosting

Prima di caricare il nuovo salvataggio, ferma il tuo server Palworld nell’interfaccia web di ZAP-Hosting.

:::caution Evita Conflitti di Salvataggio
Non sostituire i file di salvataggio mentre il server è in esecuzione. Questo può causare caricamenti incompleti, dati sovrascritti o un salvataggio corrotto.
:::

### Sostituisci la Cartella di Salvataggio Predefinita

Apri il file manager del tuo server di gioco e naviga in:

```text
Pal/Saved/SaveGames/0/
```

Elimina la cartella di salvataggio predefinita creata automaticamente dal server, quindi carica la tua cartella di salvataggio esistente nella stessa posizione.

Dopo il caricamento, la struttura dovrebbe apparire così:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Imposta la Cartella di Salvataggio Corretta in GameUserSettings.ini

Ora apri `GameUserSettings.ini` tramite `Configs` e cerca la voce `DedicatedServerName`.

Impostala esattamente con il nome della cartella di salvataggio caricata:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Voce di configurazione | Valore richiesto |
| --- | --- |
| `DedicatedServerName` | Il nome esatto della cartella dentro `Pal/Saved/SaveGames/0/` |

:::tip Corrispondenza Esatta Necessaria
`DedicatedServerName` deve corrispondere esattamente al nome della cartella caricata, inclusi tutti i caratteri e numeri. Se il valore non corrisponde, il server potrebbe avviare un mondo diverso o sembrare caricare senza progresso sulla mappa.
:::

### Avvia il Server

Dopo aver salvato la configurazione, riavvia il tuo server Palworld.

Normalmente non è necessario alcun comando console aggiuntivo dopo il caricamento. Un riavvio completo del server è sufficiente per caricare il nuovo salvataggio.

## Carica un Salvataggio da un Mondo Steam Co-op

Se in precedenza hai ospitato il tuo mondo localmente tramite Steam co-op, puoi anche caricare quel salvataggio sul tuo server dedicato.

### Trova il Salvataggio Locale di Steam

Sul tuo PC Windows, premi `Windows` + `R` e apri:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

All’interno di questa posizione, apri la cartella nominata con il tuo SteamID64. Poi individua la cartella del mondo che vuoi caricare:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Carica il Salvataggio sul Server

Una volta identificata la cartella di salvataggio corretta:

1. Ferma il tuo server Palworld.
2. Apri il file manager.
3. Naviga in `Pal/Saved/SaveGames/0/`.
4. Elimina la cartella di salvataggio predefinita.
5. Carica la tua cartella di salvataggio esistente.
6. Apri `GameUserSettings.ini` sotto `Configs`.
7. Imposta:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Salva il file e riavvia il server.

:::caution Limitazione del Personaggio Host
Quando migri un mondo locale Steam co-op, il personaggio host non viene trasferito automaticamente allo stesso modo dei dati dei giocatori connessi. In pratica, questo significa che l’host originale potrebbe aver bisogno di ulteriori passaggi di conversione del salvataggio o trasferimento del personaggio tramite strumenti di terze parti se è richiesta la continuità del personaggio.
:::

## Carica un Salvataggio da PC Game Pass

I salvataggi di PC Game Pass usano un formato diverso e non sono pronti direttamente per un server dedicato Palworld.

### Trova il Salvataggio Game Pass

I dati di salvataggio locali di Game Pass sono tipicamente memorizzati in:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Converti Prima il Salvataggio

Per usare un salvataggio PC Game Pass su un server dedicato, devi convertirlo in un formato compatibile con Steam usando uno strumento di conversione di terze parti.

Una delle opzioni più usate è [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Disclaimer Strumenti di Terze Parti
Gli strumenti di conversione salvataggi di terze parti non sono sviluppati né mantenuti da ZAP-Hosting. La loro funzionalità può cambiare nel tempo e la compatibilità non è garantita. Crea sempre un backup del tuo salvataggio originale prima di usare qualsiasi strumento di conversione.
:::

Dopo la conversione, il salvataggio esportato si trova comunemente in una cartella come:

```text
XGP_converted_saves
```

### Carica il Salvataggio Convertito

Dopo che il salvataggio è stato convertito:

1. Ferma il server.
2. Apri il file manager.
3. Vai in `Pal/Saved/SaveGames/0/`.
4. Elimina la cartella di salvataggio predefinita.
5. Carica la cartella di salvataggio convertita.
6. Apri `GameUserSettings.ini` in `Configs`.
7. Imposta il nome corretto della cartella:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Salva il file e avvia il server.

## Modifiche di Configurazione Richieste

Il passaggio manuale più importante in questo processo è modificare correttamente `GameUserSettings.ini`.

### Panoramica della Voce di Configurazione

| File | Posizione nell’interfaccia ZAP | Voce da modificare | Valore di esempio |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Esempio di Configurazione

Se la tua cartella di salvataggio caricata si chiama `84B5E2264EC387DEDB43179D666031A1`, la voce dovrebbe essere così:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Non aggiungere virgolette extra a meno che non siano già presenti nella sintassi del file usata dal tuo template di configurazione attuale.

## Verifica il Caricamento

Dopo l’avvio del server, connettiti e verifica che i dati del mondo siano stati caricati correttamente.

Dovresti controllare quanto segue:

| Controllo | Risultato atteso |
| --- | --- |
| Caricamento del mondo | La mappa esistente e le strutture sono presenti |
| Dati del giocatore | I dati dei giocatori precedentemente trasferiti sono disponibili dove applicabile |
| Corrispondenza cartella di salvataggio | `DedicatedServerName` corrisponde esattamente alla cartella caricata |
| File obsoleto rimosso | `WorldOption.sav` non è più presente se causava problemi |

## Risoluzione dei Problemi

Se il caricamento non funziona come previsto, verifica queste cause comuni.

### Il Server Avvia un Mondo Nuovo

Se il server crea un mondo nuovo invece di caricare il salvataggio caricato, la causa più comune è un valore `DedicatedServerName` errato.

Assicurati che:

- la cartella caricata sia dentro `Pal/Saved/SaveGames/0/`
- il nome della cartella sia copiato esattamente
- `DedicatedServerName=[your_savefolder_id]` corrisponda esattamente a quella cartella

### Mancano Dati della Mappa

Se il server si avvia ma il progresso del mondo o i dati della mappa sembrano mancanti, verifica di nuovo la corrispondenza del nome della cartella.

Questo problema è comunemente causato da una discrepanza tra:

- il nome della cartella di salvataggio caricata
- il valore `DedicatedServerName` in `GameUserSettings.ini`

### Il Caricamento del Salvataggio Sembra Corretto ma Fallisce

Se la struttura della cartella sembra corretta ma il salvataggio non si carica comunque:

- conferma che il salvataggio provenga da una fonte supportata
- rimuovi `WorldOption.sav` se esiste
- assicurati che il server fosse completamente fermo prima di sostituire i file
- riavvia il server dopo aver salvato le modifiche di configurazione

:::tip Best Practice per il Caricamento File
Se carichi un salvataggio grande, aspetta che il trasferimento sia completamente terminato prima di avviare il server. Avviare troppo presto può lasciare il salvataggio incompleto e impedire il corretto caricamento del mondo.
:::

## Conclusione

Congratulazioni, hai caricato con successo un salvataggio esistente di Palworld sul tuo server ZAP-Hosting. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂