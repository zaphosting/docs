---
id: vserver-one-click-apps-installer
title: "VPS: Installer One Click Apps"
description: "Distribuisci app con il VPS One Click Apps Installer, gestisci i progetti tramite l'interfaccia web e usa Coolify per una gestione avanzata delle app -> Scopri di più ora"
sidebar_label: Installer One Click Apps
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il One Click Apps Installer ti permette di sfogliare un vasto catalogo di app e distribuirle direttamente dall'interfaccia web del tuo VPS. In questa guida imparerai come preparare il server, scegliere il tipo di installazione giusto, installare e gestire le app, e usare le impostazioni avanzate e gli strumenti di troubleshooting quando serve.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Preparazione

Prima di usare il One Click Apps Installer, il tuo VPS deve soddisfare i requisiti minimi e utilizzare un sistema operativo supportato.

:::info Requisiti Minimi
La funzione app richiede che il tuo VPS sia online e configurato con risorse sufficienti per far girare sia i servizi della piattaforma che le app installate in modo affidabile.
:::

| Requisito | Minimo | Consigliato |
| --- | --- | --- |
| Stato server | Online | Online |
| Storage | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 core | 4 core |
| Sistema operativo | Debian o Ubuntu LTS | Debian 13 - IT - 64bit |

:::caution Sistema Operativo Pulito Consigliato
È fortemente consigliato configurare la funzione app su un’installazione fresca del sistema operativo. Questo aiuta a evitare conflitti con servizi esistenti, porte occupate, configurazioni Docker o personalizzazioni già presenti sul server.
:::

Se devi reinstallare il VPS prima di continuare, usa un’immagine fresca supportata di Debian o Ubuntu LTS dal pannello di gestione VPS.

## Accesso al One Click Apps Installer

Apri il tuo VPS nell’interfaccia web di ZAP-Hosting e trova la sezione One Click Apps. Da lì puoi avviare la configurazione iniziale e poi tornare a gestire tutte le app installate sul server.

La prima volta che apri questa funzione, devi scegliere come installare la piattaforma sul tuo VPS.

## Scelta del Tipo di Installazione

Puoi scegliere tra un’installazione completa o solo nodo. L’opzione giusta dipende dal fatto che questo VPS debba ospitare sia il pannello di gestione che le app, oppure agire solo come nodo collegato a un altro pannello.

### Installazione Completa

Scegli **Installazione Completa** se vuoi configurare il server con il pannello e il server stesso come nodo. Questa è l’opzione consigliata per chi usa la funzione app per la prima volta e per la maggior parte delle installazioni standard.

Con questo metodo puoi:

- distribuire app dal catalogo app
- gestire progetti e ambienti
- organizzare tutte le app in un unico posto
- usare gli strumenti di gestione integrati nell’interfaccia web
- accedere al pannello avanzato in seguito se serve

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Consigliato per la Maggior Parte degli Utenti
Se è la prima volta che usi la funzione app, scegli l’installazione completa. Offre la configurazione più semplice e ti dà il controllo totale direttamente dall’interfaccia web di ZAP-Hosting.
:::

### Installazione Solo Nodo

Scegli **Installazione Solo Nodo** se vuoi che questo VPS agisca solo come nodo. Potrai poi collegarlo a un altro server VPS o a un’istanza di pannello esterna.

Questa opzione è utile se vuoi:

- scalare su più VPS
- centralizzare la gestione su un unico pannello
- collegare questo server a un’installazione esistente
- espandere una configurazione multi-nodo già attiva

:::note Opzione Avanzata di Deploy
L’installazione solo nodo è pensata per utenti che hanno già un’altra istanza di pannello o vogliono collegare questo server a un ambiente esterno.
:::

## Installazione della Funzione App

Dopo aver scelto il tipo di installazione, avvia la configurazione dall’interfaccia web. L’installazione iniziale di solito richiede solo pochi minuti.

Durante questo processo, i servizi della piattaforma necessari per la funzione One Click Apps vengono distribuiti sul tuo VPS. Una volta completato, il catalogo app e le sezioni di gestione diventano disponibili nell’interfaccia web.

:::info Comportamento dell’Installazione
I dettagli precisi del progresso dell’installazione possono variare in base alle prestazioni del VPS, allo stato del sistema operativo e alle condizioni di rete. Se la configurazione non va a buon fine, consulta la sezione troubleshooting più avanti in questa guida.
:::

## Navigare nel Catalogo App

Una volta completata l’installazione, puoi aprire il catalogo app e sfogliare le app disponibili. Il catalogo contiene più di 300 app pronte per il deploy e supporta filtri per aiutarti a trovare rapidamente l’app giusta.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Ricerca e Filtri App

Nel catalogo puoi cercare app per nome e filtrare per categoria. Questo ti aiuta a restringere le app disponibili nell’interfaccia in stile app store e trovare il target di deploy giusto per il tuo progetto.

Azioni tipiche includono:

- ricerca per nome app
- filtro per categoria
- revisione delle app disponibili
- selezione di un’app per il deploy

Questo flusso è particolarmente utile se gestisci molti target di app o confronti più servizi prima di installare.

### Avviare l’Installazione di un’App

Dopo aver selezionato un’app dal catalogo, avvia l’installazione tramite l’interfaccia web. A seconda dell’app, potresti dover definire valori come:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Questi placeholder rappresentano valori specifici per il tuo deploy. Per esempio, `[your_domain]` va sostituito con il dominio che vuoi usare per l’app.

:::tip Progetti e Ambienti
Usa progetti e ambienti per mantenere organizzato il deploy. È particolarmente utile se ospiti più app, versioni di test o separi servizi di produzione e staging.
:::

## Gestione delle App Installate

Dopo il deploy, le app installate sono elencate nella sezione di gestione dell’interfaccia web. Da qui puoi monitorare e controllare i tuoi servizi senza dover lavorare manualmente con i container sottostanti.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Azioni di Gestione Disponibili

La sezione app installate ti permette di eseguire azioni comuni direttamente dall’interfaccia web.

| Azione | Scopo |
| --- | --- |
| Avvia | Avvia un’app ferma |
| Ferma | Ferma un’app in esecuzione |
| Controlla log | Apre i log dell’app per il troubleshooting |
| Reinstalla | Ridistribuisce l’app |

Questi strumenti rendono più semplice gestire tutte le app da un unico posto, soprattutto se preferisci un controllo web semplice invece di usare la linea di comando.

### Organizzare Progetti e Ambienti

Progetti e ambienti ti aiutano a strutturare chiaramente i tuoi deploy. Puoi usarli per separare:

- app personali e di produzione
- ambienti di test e live
- deploy per clienti o team diversi
- stack differenti sullo stesso VPS

Questa organizzazione diventa sempre più importante man mano che la tua collezione di app cresce e gestisci più servizi su uno o più nodi.

## Domini, Accesso Cloud e SSL

La funzione One Click Apps supporta domini personalizzati e l’integrazione con ZAP Cloud. Questo ti permette di esporre le app in modo sicuro e ottenere certificati SSL per i tuoi deploy.

:::info Supporto Domini e SSL
Puoi usare domini personalizzati per le tue app e beneficiare del provisioning di certificati SSL dove supportato dalla configurazione della piattaforma.
:::

Quando assegni un dominio, assicurati che i record DNS puntino a `[your_server_ip]`. Se il dominio non è configurato correttamente, l’app potrebbe non essere raggiungibile da internet.

| Valore | Descrizione |
| --- | --- |
| `[your_domain]` | Il dominio o sottodominio assegnato all’app |
| `[your_server_ip]` | L’indirizzo IP pubblico del tuo VPS |

:::caution Il DNS Deve Puntare al Tuo VPS
Se il DNS per `[your_domain]` non punta a `[your_server_ip]`, la validazione del dominio e l’accesso all’app potrebbero fallire.
:::

## Uso delle Impostazioni Avanzate

Gli utenti avanzati possono accedere a funzionalità extra tramite il pannello esterno disponibile nella sezione impostazioni avanzate.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Questo è utile se ti serve una personalizzazione più profonda, un controllo di deploy ampliato o accesso diretto a funzionalità oltre l’interfaccia web standard.

### Limite Importante di Supporto

:::caution Ambito Supporto per Uso Pannello Avanzato
Gli utenti avanzati sono liberi di usare il pannello esterno Coolify per personalizzazioni e funzionalità extra. Tuttavia, il supporto è limitato all’interfaccia web di ZAP-Hosting. Se fai modifiche fuori dall’interfaccia web, l’assistenza potrebbe non coprire quelle personalizzazioni.
:::

### Quando Usare il Pannello Avanzato

Potresti voler usare il pannello avanzato se ti servono:

- personalizzazioni di deploy più dettagliate
- flussi di lavoro di collegamento nodo diretti
- configurazioni avanzate delle app
- gestione a livello di pannello oltre l’interfaccia semplificata

Se perdi accesso o l’integrazione smette di rispondere, usa prima gli strumenti di troubleshooting descritti qui sotto prima di fare modifiche manuali.

## Collegamento dei Nodi

Se hai scelto l’installazione solo nodo, puoi collegare questo VPS a un altro server VPS o a un’istanza di pannello esterna. Questo ti permette di scalare l’infrastruttura e gestire più nodi da un unico punto.

Il collegamento nodo è utile quando vuoi:

- distribuire app su più VPS
- centralizzare la gestione
- espandere la capacità senza creare deploy isolati
- connetterti a un ambiente pannello esterno

:::note Collegamento a Pannello Esterno
Puoi collegare il nodo a un altro VPS o a un’istanza di pannello esterna. I dettagli esatti del collegamento dipendono dall’ambiente di destinazione già in uso.
:::

## Risoluzione Problemi di Stato Degradato

Se l’interfaccia web mostra uno stato degradato, significa che la piattaforma non riesce a contattare o recuperare dati dall’istanza che gestisce la funzione One Click Apps. Segui i passaggi di troubleshooting in ordine cronologico.

### Indicatori di Stato

Il popup di troubleshooting può mostrare indicatori come i seguenti:

| Stato | Significato |
| --- | --- |
| Stato Coolify: Attivo | Il servizio pannello sembra in esecuzione |
| Stato API: Accessibile | L’API è raggiungibile al momento |
| Stato Servizio: Online | Il tuo VPS è online |

Se una o più parti non funzionano correttamente, continua con i passaggi seguenti.

### Passo 1: Conferma che il VPS sia Online

Prima di tutto, assicurati che il servizio VPS sia online nell’interfaccia web di ZAP-Hosting. Se il server è offline, la piattaforma app non può funzionare.

### Passo 2: Aggiorna lo Stato

Usa l’azione **Aggiorna Stato** per rifare il controllo di salute con i dati più recenti. Questo può risolvere problemi temporanei e intermittenti.

:::tip Problemi di Connessione Temporanei
Uno stato degradato può essere causato da un problema di comunicazione breve. Aggiornare lo stato è il primo controllo più veloce.
:::

### Passo 3: Riavvia Docker

Se lo stato resta degradato, usa l’azione **Riavvia Docker**. Questo forza il riavvio dell’istanza della piattaforma. Dopo una risposta positiva, aspetta `1-2 minuti` e aggiorna di nuovo lo stato.

:::caution Riavvio Servizio
Riavviare Docker può interrompere temporaneamente le app in esecuzione mentre i servizi si riavviano.
:::

### Passo 4: Aggiorna le Credenziali

Come ultimo passo, usa **Aggiorna Credenziali**. Questo è particolarmente importante se lo stato appare online ma funzioni dell’interfaccia web come l’installazione app non funzionano.

Questa azione:

- **non** cancella i tuoi dati
- aggiorna le credenziali utente root
- aggiorna il token API usato dall’interfaccia web
- aggiorna automaticamente le credenziali del pannello se ha successo

:::info Aggiornamento Credenziali Sicuro
Aggiornare le credenziali non rimuove le app installate o i dati di deploy. Rinnova solo le credenziali necessarie per accesso e comunicazione.
:::

### Quando Contattare il Supporto

Se il problema persiste dopo aver completato tutti i passaggi di troubleshooting, apri un ticket di supporto tramite il sito ZAP-Hosting.

## Best Practices

Per mantenere stabile e facile da gestire il One Click Apps Installer, segui queste raccomandazioni:

| Best practice | Motivo |
| --- | --- |
| Usa un’installazione OS fresca | Riduce conflitti con servizi e porte esistenti |
| Soddisfa le risorse consigliate | Migliora prestazioni e affidabilità |
| Organizza le app in progetti e ambienti | Mantiene i deploy gestibili |
| Configura il DNS prima di assegnare domini | Previene problemi di accesso e SSL |
| Usa le impostazioni avanzate con cautela | Evita modifiche personalizzate non supportate |

:::tip Mantieni i Deploy Organizzati
Se prevedi di ospitare molte app, crea uno schema di naming chiaro per `[your_project_name]`, `[your_environment_name]` e `[your_app_name]` prima di distribuire i primi servizi.
:::

## Conclusione

Congratulazioni, hai configurato con successo e usato il VPS One Click Apps Installer per distribuire e gestire app sul tuo server. Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti!

<InlineVoucher />