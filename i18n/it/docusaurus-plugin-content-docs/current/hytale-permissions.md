---
id: hytale-permissions
title: "Hytale: Gestione dei Permessi per Utenti e Gruppi"
description: "Gestisci i permessi di utenti e gruppi sul tuo server Hytale → Scopri di più ora"
sidebar_label: Permessi
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Gestire i permessi su un server Hytale ti permette di controllare cosa i giocatori possono o non possono fare. Questo include assegnare diversi livelli di accesso a giocatori fidati, moderatori e amministratori. Configurare correttamente i permessi è fondamentale per mantenere un ambiente di gioco equilibrato e sicuro, dove i giocatori possono divertirsi senza exploit o abusi indesiderati.

Il software del server di Hytale supporta livelli gerarchici di permessi che determinano quali comandi e azioni ogni giocatore può eseguire. Questi possono essere gestiti tramite la console live o attraverso le impostazioni di configurazione, a seconda della configurazione del tuo server.

:::info Avviso Early Access

Hytale è stato rilasciato il 13 gennaio 2026 ed è attualmente disponibile in Early Access. Poiché il gioco è ancora in fase di sviluppo attivo, il software del server, i file di configurazione, il supporto per modding e i flussi di installazione potrebbero continuare a evolversi nel tempo.

:::

<InlineVoucher />



## Panoramica dei livelli di permesso

I permessi definiscono quali azioni un giocatore può compiere sul server. Al livello più base, i giocatori normali hanno solo i permessi standard di gioco, come muoversi, interagire con il mondo e chattare. Livelli di permesso più alti, come operatore o admin, concedono accesso a comandi server che influenzano il gameplay, altri giocatori, la configurazione del server e gli strumenti di moderazione.

Il sistema di permessi è composto da due componenti principali:

- **Permessi utente**, che si applicano direttamente a un singolo giocatore
- **Permessi di gruppo**, che permettono di raggruppare permessi e assegnarli a più giocatori contemporaneamente

Ogni giocatore è identificato internamente da un UUID, necessario per gestire i permessi tramite comandi.



## Gestione dei permessi utente

I permessi utente ti permettono di concedere o revocare permessi specifici a un singolo giocatore.

### Visualizzare i permessi di un utente

Per mostrare tutti i permessi assegnati direttamente a un utente. Questo comando mostra ogni permesso attualmente applicato all’utente specificato.

```
/perm user list <uuid>
```



### Aggiungere permessi a un utente

Per concedere uno o più permessi direttamente a un utente. I permessi specificati saranno aggiunti immediatamente e avranno effetto senza bisogno di riavviare il server.

```
/perm user add <uuid> <permissions>
```



### Rimuovere permessi da un utente

Per revocare permessi da un utente. Questo rimuove solo i permessi specificati lasciando invariati tutti gli altri.

```
/perm user remove <uuid> <permissions>
```



## Gestione delle assegnazioni ai gruppi utente

Oltre ai permessi diretti, gli utenti possono ereditare permessi tramite i gruppi.

### Visualizzare i gruppi di un utente

Questo comando mostra a quali gruppi di permessi l’utente appartiene attualmente.

```
/perm user group list <uuid>
```



### Aggiungere un utente a un gruppo

Per assegnare un utente a un gruppo di permessi. Una volta aggiunto, l’utente eredita tutti i permessi definiti per quel gruppo.

```
/perm user group add <uuid> <group>
```



### Rimuovere un utente da un gruppo

Per rimuovere un utente da un gruppo di permessi. Dopo la rimozione, l’utente non riceverà più i permessi di quel gruppo.

```
/perm user group remove <uuid> <group>
```



## Gestione dei permessi di gruppo

I gruppi permettono di gestire i permessi in modo centralizzato e riutilizzarli su più utenti.

### Visualizzare i permessi di un gruppo

Per mostrare tutti i permessi assegnati a un gruppo. Questo comando fornisce una panoramica di ogni permesso associato al gruppo specificato.

```
/perm group list <group>
```



### Aggiungere permessi a un gruppo

Per aggiungere uno o più permessi a un gruppo. Tutti gli utenti assegnati a questo gruppo erediteranno immediatamente i nuovi permessi.

```
/perm group add <group> <permissions>
```



### Rimuovere permessi da un gruppo

Questo rimuove solo i permessi specificati dal gruppo senza influenzare gli altri permessi.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />