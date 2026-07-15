---
id: palworld-reset-world
title: "Palworld: Resetta il Mondo"
description: "Scopri come resettare il mondo del tuo server di gioco Palworld eliminando i dati di salvataggio attuali e avviando una nuova mappa del mondo Palworld sullo stesso server. -> Scopri di più ora"
sidebar_label: Palworld: Resetta il Mondo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld salva il tuo mondo attivo nei dati di salvataggio del server anziché in un'impostazione configurabile del mondo. In questa guida, imparerai come resettare il mondo del tuo server di gioco Palworld su ZAP-Hosting eliminando la cartella di salvataggio esistente, così il server genererà un nuovo mondo al prossimo avvio.

:::danger Eliminazione Permanente dei Dati
Resettare il mondo di Palworld elimina definitivamente il mondo attuale, inclusi i progressi dei giocatori, le strutture, i Pals e altri dati salvati in quel mondo.
:::



## Preparazione

Prima di iniziare, assicurati di avere accesso all’amministrazione del tuo server di gioco Palworld e che il server sia offline prima di eliminare qualsiasi file di salvataggio.

:::tip Crea Prima un Backup
Se potresti aver bisogno del mondo attuale in futuro, crea un backup prima di procedere. Se disponibile per il tuo prodotto, puoi usare le funzionalità di backup del server o scaricare manualmente la cartella di salvataggio prima di eliminarla.
:::

## Come Funziona il Reset del Mondo in Palworld

Un reset del mondo in Palworld normalmente non richiede di modificare un valore di gioco in un file di configurazione. Il mondo attivo è infatti memorizzato nella directory di salvataggio del server.

Secondo la struttura attuale pubblica del server dedicato Palworld, il salvataggio del mondo si trova tipicamente nel percorso:

```text
Pal/Saved/SaveGames/0/
```

All’interno di questa directory, di solito trovi una cartella con un nome esadecimale casuale molto lungo, ad esempio:

```text
84B5E2264EC387DEDB43179D666031A1
```

Quella cartella contiene il salvataggio del mondo attuale. Quando la elimini e riavvii il server, Palworld crea automaticamente un nuovo mondo.

:::note Nessun Valore di Configurazione Necessario
Per un reset standard del mondo, normalmente non serve alcuna voce di configurazione aggiuntiva, comando console o parametro di avvio. Il reset si esegue eliminando i dati di salvataggio esistenti.
:::

## Ferma il Server

Prima di eliminare i file del mondo, ferma il tuo server Palworld dall’amministrazione del server di gioco ZAP-Hosting.

Eliminare i dati di salvataggio mentre il server è in esecuzione può causare corruzione dei file o rimozione incompleta dei dati del mondo.

:::caution Il Server Deve Essere Offline
Assicurati che il server sia completamente fermo prima di procedere. Se il server è ancora in esecuzione, potrebbe ricreare o bloccare i file mentre li stai modificando.
:::

## Apri la Directory di Salvataggio

Nell’amministrazione del tuo server Palworld su ZAP-Hosting, apri l’area di gestione file e naviga nel percorso:

```text
Pal/Saved/SaveGames/0/
```

A seconda della configurazione del tuo prodotto, potresti accedere a questa cartella tramite il file manager o una sezione simile di accesso ai file nell’interfaccia web.



### Riferimento Percorso

| Voce | Valore |
| --- | --- |
| Percorso base salvataggio | `Pal/Saved/SaveGames/0/` |
| Nome cartella mondo | Cartella esadecimale casuale |
| Cartella esempio | `84B5E2264EC387DEDB43179D666031A1` |
| Azione richiesta | Elimina la cartella del mondo |

## Elimina il Salvataggio del Mondo Attuale

All’interno di `Pal/Saved/SaveGames/0/`, individua la cartella con il nome esadecimale casuale. Elimina completamente quella cartella.

### Cosa Devi Rimuovere

| Tipo di cartella | Azione richiesta |
| --- | --- |
| Cartella salvataggio mondo attuale dentro `Pal/Saved/SaveGames/0/` | Eliminala |
| `PalworldSettings.ini` o altri file di configurazione | Non modificarli per questo reset a meno che tu non voglia anche cambiare le impostazioni del server |

Se c’è una sola cartella esadecimale in `Pal/Saved/SaveGames/0/`, quella è tipicamente il salvataggio del mondo attivo. Se ci sono più cartelle e non sei sicuro di quale sia in uso, non indovinare. In questo caso, controlla attentamente i file attuali del server o contatta il supporto prima di eliminare qualsiasi cosa.

:::info Chiarimento sulla Sezione Configurazioni
Anche se molte impostazioni di Palworld possono essere gestite tramite l’area **Configs**, il reset del mondo di per sé di solito non si completa modificando un file di configurazione. L’azione richiesta è eliminare la cartella di salvataggio del mondo dai file del server.
:::

## Riavvia il Server

Dopo aver eliminato la cartella di salvataggio, riavvia il tuo server Palworld.

All’avvio, il server dovrebbe generare automaticamente un nuovo mondo perché non è disponibile alcun salvataggio precedente nella posizione di salvataggio prevista.

### Comandi o Modifiche Aggiuntive

| Attività | Necessaria |
| --- | --- |
| Modificare un file di configurazione | No |
| Eseguire un comando in-game | No |
| Eseguire un comando console | No |
| Riavviare o avviare il server dopo l’eliminazione | Sì |

:::tip Il Primo Avvio Potrebbe Richiedere Più Tempo
Il primo avvio dopo aver eliminato il salvataggio del mondo potrebbe richiedere un po’ più tempo del solito perché Palworld deve generare un nuovo mondo.
:::

## Verifica il Reset

Una volta che il server è di nuovo online, connettiti e verifica che sia stato creato un mondo nuovo.

Puoi solitamente confermare questo controllando:

- uno stato di spawn nuovo
- nessuna struttura costruita in precedenza dai giocatori
- nessun progresso precedente
- una nuova cartella di salvataggio generata in `Pal/Saved/SaveGames/0/`

Se il vecchio mondo è ancora presente, ferma di nuovo il server e verifica che la cartella esadecimale corretta sia stata eliminata.

## Conclusione

Congratulazioni, hai resettato con successo il tuo mondo Palworld e avviato un nuovo salvataggio sul tuo server esistente. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂