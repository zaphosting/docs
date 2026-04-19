---
id: verver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Distribuisci app con il VPS One Click Apps Installer, gestisci i progetti tramite l'interfaccia web e usa Coolify per una gestione avanzata delle app -> Scopri di più ora"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il One Click Apps Installer ti permette di sfogliare un ampio catalogo di app e distribuirle direttamente dall'interfaccia web del tuo VPS. In questa guida imparerai come preparare il server, scegliere il tipo di installazione corretto, installare e gestire le app, e utilizzare le impostazioni avanzate e gli strumenti di risoluzione problemi quando necessario.

<InlineVoucher />

## Preparazione

Prima di usare il One Click Apps Installer, il tuo VPS deve soddisfare i requisiti minimi e utilizzare un sistema operativo supportato.

:::info Requisiti Minimi
La funzionalità app richiede che il tuo VPS sia online e configurato con risorse sufficienti per eseguire in modo affidabile sia i servizi della piattaforma che le app installate.
:::

| Requisito | Minimo | Consigliato |
| --- | --- | --- |
| Stato server | Online | Online |
| Spazio di archiviazione | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 core | 4 core |
| Sistema operativo | Debian o Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Consigliata Installazione Pulita del Sistema Operativo
Si consiglia vivamente di configurare la funzionalità app su un’installazione pulita del sistema operativo. Questo aiuta a evitare conflitti con servizi esistenti, porte occupate, configurazioni Docker o personalizzazioni già presenti sul server.
:::

Se devi reinstallare il VPS prima di procedere, usa un’immagine fresca e supportata di Debian o Ubuntu LTS dal pannello di gestione del VPS.

## Accesso al One Click Apps Installer

Apri il tuo VPS nell’interfaccia web di ZAP-Hosting e trova la sezione One Click Apps. Da qui puoi avviare la configurazione iniziale e successivamente gestire tutte le app installate sul server.

La prima volta che apri questa funzionalità, devi scegliere come installare la piattaforma sul tuo VPS.

## Scelta del Tipo di Installazione

Puoi scegliere tra un’installazione completa o solo nodo. L’opzione corretta dipende dal fatto che il VPS debba ospitare sia il pannello di gestione che le app, oppure agire solo come nodo collegato a un altro pannello.

### Installazione Completa

Scegli **Installazione Completa** se vuoi configurare il server con il pannello e il server stesso come nodo. Questa è l’opzione consigliata per chi usa la funzionalità app per la prima volta e per la maggior parte delle installazioni standard.

Con questo metodo puoi:

- distribuire app dal catalogo
- gestire progetti e ambienti
- organizzare tutte le app in un unico posto
- usare gli strumenti di gestione integrati nell’interfaccia web
- accedere al pannello avanzato in seguito, se necessario

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Consigliato per la Maggior Parte degli Utenti
Se è la prima volta che usi la funzionalità app, seleziona l’installazione completa. Offre la configurazione più semplice e ti dà il controllo completo direttamente dall’interfaccia web di ZAP-Hosting.
:::

### Installazione Solo Nodo

Scegli **Installazione Solo Nodo** se vuoi che questo VPS agisca solo come nodo. Potrai poi collegarlo a un altro server VPS o a un’istanza di pannello esterna.

Questa opzione è utile se vuoi:

- scalare su più VPS
- centralizzare la gestione su un unico pannello
- collegare questo server a un’installazione esistente
- espandere una configurazione multi-nodo già in uso

:::note Opzione Avanzata di Distribuzione
L’installazione solo nodo è pensata per utenti che hanno già un’altra istanza di pannello disponibile o che vogliono collegare questo server a un ambiente esterno.
:::

## Installazione della Funzionalità App

Dopo aver scelto il tipo di installazione, avvia la configurazione dall’interfaccia web. L’installazione iniziale di solito richiede solo pochi minuti.

Durante questo processo, i servizi della piattaforma necessari per il One Click Apps vengono distribuiti sul tuo VPS. Al termine, il catalogo app e le sezioni di gestione diventano disponibili nell’interfaccia web.

:::info Comportamento dell’Installazione
I dettagli precisi del progresso dell’installazione possono variare in base alle prestazioni del VPS, allo stato del sistema operativo e alle condizioni di rete. Se la configurazione non si completa con successo, consulta la sezione risoluzione problemi più avanti in questa guida.
:::

## Navigazione nel Catalogo App

Una volta completata l’installazione, puoi aprire il catalogo app e sfogliare le app disponibili. Il catalogo contiene più di 300 app pronte per la distribuzione e supporta filtri per aiutarti a trovare rapidamente l’app giusta.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Ricerca e Filtri App

Nel catalogo puoi cercare app per nome e filtrare per categoria. Questo ti aiuta a restringere la selezione in un’interfaccia in stile app store e a trovare il target di distribuzione più adatto al tuo progetto.

Le azioni tipiche includono:

- ricerca per nome app
- filtro per categoria
- revisione delle voci app disponibili
- selezione di un’app per la distribuzione

Questo flusso di lavoro è particolarmente utile se gestisci molti target di app o confronti più servizi prima di installarli.

### Avvio dell’Installazione di un’App

Dopo aver selezionato un’app dal catalogo, avvia l’installazione tramite l’interfaccia web. A seconda dell’app, potresti dover definire valori come:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Questi segnaposto rappresentano valori specifici per la tua distribuzione. Per esempio, `[your_domain]` deve essere sostituito con il dominio che vuoi usare per l’app.

:::tip Progetti e Ambienti
Usa progetti e ambienti per mantenere organizzata la tua distribuzione. È particolarmente utile se ospiti più app, versioni di test o separi servizi di produzione e staging.
:::

## Gestione delle App Installate

Dopo la distribuzione, le app installate sono elencate nella sezione di gestione dell’interfaccia web. Da qui puoi monitorare e controllare i tuoi servizi senza dover lavorare manualmente con i container sottostanti.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Azioni di Gestione Disponibili

La sezione app installate ti permette di eseguire azioni comuni di ciclo di vita direttamente dall’interfaccia web.

| Azione | Scopo |
| --- | --- |
| Avvia | Avvia un’app ferma |
| Ferma | Ferma un’app in esecuzione |
| Controlla log | Apre i log dell’app per la risoluzione problemi |
| Reinstalla | Ridistribuisce l’app |

Questi strumenti facilitano la gestione di tutte le app da un unico posto, specialmente se preferisci un controllo semplice via web invece di amministrare manualmente da linea di comando.

### Organizzazione di Progetti e Ambienti

Progetti e ambienti ti aiutano a strutturare chiaramente le tue distribuzioni. Puoi usarli per separare:

- app personali e di produzione
- ambienti di test e live
- distribuzioni per clienti o team diversi
- stack differenti sullo stesso VPS

Questa organizzazione diventa sempre più importante man mano che la tua collezione di app cresce e gestisci più servizi su uno o più nodi.

## Domini, Accesso Cloud e SSL

La funzionalità One Click Apps supporta domini personalizzati e l’integrazione con ZAP Cloud. Questo ti permette di esporre le app in modo sicuro e ottenere certificati SSL per le tue distribuzioni.

:::info Supporto per Domini e SSL
Puoi usare domini personalizzati per le tue app e beneficiare del provisioning di certificati SSL dove supportato dalla configurazione della piattaforma.
:::

Quando assegni un dominio, assicurati che i record DNS puntino a `[your_server_ip]`. Se il dominio non è configurato correttamente, l’app potrebbe non essere raggiungibile da internet.

| Valore | Descrizione |
| --- | --- |
| `[your_domain]` | Il dominio o sottodominio assegnato alla tua app |
| `[your_server_ip]` | L’indirizzo IP pubblico del tuo VPS |

:::caution Il DNS Deve Puntare al Tuo VPS
Se il DNS per `[your_domain]` non punta a `[your_server_ip]`, la validazione del dominio e l’accesso all’app potrebbero fallire.
:::

## Uso delle Impostazioni Avanzate

Gli utenti avanzati possono accedere a funzionalità aggiuntive tramite il pannello esterno disponibile nella sezione impostazioni avanzate.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Questo può essere utile se hai bisogno di personalizzazioni più profonde, controllo esteso della distribuzione o accesso diretto a funzionalità oltre l’interfaccia web standard.

### Importante Limitazione del Supporto

:::caution Ambito del Supporto per l’Uso del Pannello Avanzato
Gli utenti avanzati sono liberi di utilizzare il pannello esterno Coolify per personalizzazioni e funzionalità aggiuntive. Tuttavia, il supporto è limitato all’interfaccia web di ZAP-Hosting. Se apporti modifiche fuori dall’interfaccia web, l’assistenza potrebbe non essere disponibile per quelle modifiche personalizzate.
:::

### Quando Usare il Pannello Avanzato

Potresti voler usare il pannello avanzato se ti servono:

- personalizzazioni di distribuzione più dettagliate
- flussi di lavoro diretti per il collegamento dei nodi
- configurazioni avanzate delle app
- gestione a livello di pannello oltre l’interfaccia semplificata

Se perdi l’accesso o l’integrazione smette di rispondere, usa prima gli strumenti di risoluzione problemi descritti qui sotto prima di fare modifiche manuali.

## Collegamento dei Nodi

Se hai scelto l’installazione solo nodo, puoi collegare questo VPS a un altro server VPS o a un’istanza di pannello esterna. Questo ti permette di scalare l’infrastruttura e gestire più nodi da un unico punto.

Il collegamento dei nodi è utile quando vuoi:

- distribuire app su più VPS
- centralizzare la gestione
- espandere la capacità senza creare distribuzioni isolate
- connetterti a un ambiente di pannello esterno

:::note Collegamento a Pannello Esterno
Puoi collegare il tuo nodo a un altro VPS o a un’istanza di pannello esterna. I dettagli esatti del collegamento dipendono dall’ambiente di destinazione già in uso.
:::

## Risoluzione Problemi di Stato Degradato

Se l’interfaccia web mostra uno stato degradato, significa che la piattaforma non riesce a contattare o recuperare dati dall’istanza che alimenta la funzionalità One Click Apps. Segui i passaggi di risoluzione problemi in ordine cronologico.

### Indicatori di Stato

Il popup di risoluzione problemi può mostrare indicatori come i seguenti:

| Stato | Significato |
| --- | --- |
| Stato Coolify: Attivo | Il servizio del pannello sembra essere in esecuzione |
| Stato API: Accessibile | L’API è attualmente raggiungibile |
| Stato Servizio: Online | Il VPS stesso è online |

Se una o più parti non funzionano correttamente, continua con i passaggi seguenti.

### Passo 1: Conferma che il VPS sia Online

Per prima cosa, assicurati che il servizio VPS sia online nell’interfaccia web di ZAP-Hosting. Se il server è offline, la piattaforma app non può funzionare.

### Passo 2: Aggiorna lo Stato

Usa l’azione **Aggiorna Stato** per eseguire nuovamente il controllo di integrità con i dati più recenti. Questo può risolvere problemi temporanei e intermittenti.

:::tip Problemi Temporanei di Connessione
Uno stato degradato può a volte essere causato da un problema di comunicazione di breve durata. Aggiornare lo stato è il primo controllo più veloce.
:::

### Passo 3: Riavvia Docker

Se lo stato rimane degradato, usa l’azione **Riavvia Docker**. Questo forza il riavvio dell’istanza della piattaforma. Dopo una risposta positiva, attendi `1-2 minuti` e aggiorna di nuovo lo stato.

:::caution Riavvio del Servizio
Riavviare Docker può interrompere temporaneamente le app in esecuzione mentre i servizi si riavviano.
:::

### Passo 4: Aggiorna le Credenziali

Come ultimo passo, usa **Aggiorna Credenziali**. Questo è particolarmente importante se lo stato appare online ma funzioni dell’interfaccia web come l’installazione delle app non funzionano.

Questa azione:

- **non** cancella i tuoi dati
- aggiorna le credenziali dell’utente root
- aggiorna il token API usato dall’interfaccia web
- aggiorna automaticamente le credenziali del pannello in caso di successo

:::info Aggiornamento Sicuro delle Credenziali
Aggiornare le credenziali non rimuove le app installate o i dati di distribuzione. Rinnova solo le credenziali necessarie per l’accesso e la comunicazione.
:::

### Quando Contattare il Supporto

Se il problema persiste dopo aver completato tutti i passaggi di risoluzione problemi, apri un ticket di supporto tramite il sito ZAP-Hosting.

## Best Practices

Per mantenere stabile e facile da gestire il One Click Apps Installer, segui queste raccomandazioni:

| Best practice | Motivo |
| --- | --- |
| Usa un’installazione pulita del sistema operativo | Riduce conflitti con servizi e porte esistenti |
| Soddisfa le risorse consigliate | Migliora prestazioni e affidabilità |
| Organizza le app in progetti e ambienti | Mantiene gestibili le distribuzioni |
| Configura il DNS prima di assegnare domini | Previene problemi di accesso e SSL |
| Usa con cautela le impostazioni avanzate | Evita modifiche personalizzate non supportate |

:::tip Mantieni le Distribuzioni Organizzate
Se prevedi di ospitare molte app, crea uno schema di denominazione chiaro per `[your_project_name]`, `[your_environment_name]` e `[your_app_name]` prima di distribuire i primi servizi.
:::

## Conclusione

Congratulazioni, hai configurato e utilizzato con successo il VPS One Click Apps Installer per distribuire e gestire app sul tuo server. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti!

<InlineVoucher />