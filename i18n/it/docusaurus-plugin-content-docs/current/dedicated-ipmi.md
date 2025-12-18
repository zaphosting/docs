---
id: dedicated-ipmi
title: "Dedicated Server: Gestione Server tramite IPMI"
description: "Scopri come gestire completamente il tuo Enterprise Dedicated Server con IPMI per un controllo e monitoraggio senza intoppi → Scopri di più ora"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
I nostri Dedicated Server AMD Ryzen sono gestiti tramite **Supermicro IPMI**, una soluzione di gestione out of band potente e collaudata, pensata per ambienti server professionali. A differenza delle nostre configurazioni basate su Intel, che utilizzano HPE iLO, la piattaforma AMD Ryzen usa hardware Supermicro e quindi offre IPMI come interfaccia di gestione nativa.

Supermicro IPMI ti dà il pieno controllo remoto del server, indipendentemente dallo stato del sistema operativo. Puoi accendere o spegnere il sistema, riavviarlo, monitorare la salute hardware, accedere ai sensori e usare la console remota per lavorare direttamente sul server come se fossi fisicamente sul posto. Questo garantisce massimo controllo, tempi di reazione rapidi e amministrazione affidabile anche in situazioni critiche.


## Accesso IPMI
Apri il pannello di controllo del tuo ZAP Dedicated Server con il browser che preferisci. Qui troverai già le info più importanti sul tuo IPMI.
Per attivare l’IPMI clicca semplicemente su **Attiva IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Tieni presente che potrebbero volerci alcuni secondi prima che l’IPMI sia completamente disponibile. 
Quando il sistema avrà avviato l’interfaccia di gestione e sarà accessibile, vedrai le credenziali di login.
Per aprire l’IPMI clicca sull’indirizzo IP mostrato e usa le credenziali per accedere.



## Panoramica

Sei curioso di sapere come è strutturata l’interfaccia di gestione IPMI e a cosa serve ogni sezione? Questa panoramica ti presenta le diverse pagine dell’interfaccia e spiega come sono organizzati monitoraggio, informazioni hardware e gestione remota.

Ti offre un punto di partenza guidato per esplorare l’ambiente IPMI e capire come le varie viste lavorano insieme per darti pieno controllo e visibilità sul server.

### Dashboard

Fornisce una panoramica consolidata dello stato attuale del server e delle funzioni chiave di gestione. Vengono mostrati dati di sistema come modello hardware, versione BIOS, firmware BMC e stato operativo per un rapido riferimento.

La sezione power mostra lo stato attuale di alimentazione e i consumi, permettendo il controllo diretto di accensione, spegnimento e riavvio, offrendo anche una panoramica sull’uso energetico.

Da questa pagina puoi accedere direttamente alla console remota, con pieno controllo remoto di tastiera, video e mouse per operazioni come installazione OS, troubleshooting e manutenzione, indipendentemente dallo stato del server.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### Sistema

#### Info Componenti

Mostra una panoramica dettagliata dei componenti hardware installati e del loro stato attuale. Le info riguardano CPU, moduli di memoria, alimentatori, distribuzione energia, network AOC, sensori e sistemi di raffreddamento.

Ogni sezione presenta dettagli specifici come modello, configurazione e stato operativo. Indicatori di stato permettono di identificare rapidamente componenti sani, avvisi o guasti.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Registro Eventi Salute

Elenca gli eventi di sistema registrati dal controller di gestione, fornendo una cronologia di attività hardware e legate alla salute del server. Gli eventi includono accensioni, processi di boot, violazioni di soglie sensori, avvisi di temperatura, irregolarità di tensione ed errori hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Monitoraggio Storage

Offre una panoramica dei dispositivi di storage connessi e del loro stato operativo attuale. Le info includono dischi rilevati, tipo di interfaccia, capacità e indicatori di salute riportati dal controller e dai sensori disponibili.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configurazione

#### Account Utenti

Mostra la lista degli account utente esistenti con i ruoli e livelli di permesso assegnati. La pagina è a scopo informativo, per vedere quali account hanno accesso all’interfaccia di gestione.

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notifiche

Mostra la configurazione attuale per notifiche di sistema e gestione degli alert. Qui vedi quali tipi di eventi possono attivare notifiche, come guasti hardware, soglie di temperatura, problemi di alimentazione o avvisi sensori.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Rete

Mostra la configurazione di rete dell’interfaccia di gestione. Include indirizzo IP assegnato, subnet mask, gateway, indirizzo MAC e stato attuale della porta di rete IPMI.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Media Virtuale

Permette l’uso di immagini media remote tramite l’interfaccia di gestione. Qui vedi lo stato dei media virtuali montati come ISO o dispositivi di storage remoti collegati al server.

I media virtuali possono essere usati per avviare il sistema, installare un OS o eseguire operazioni di recovery e manutenzione senza accesso fisico all’hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### Impostazioni BMC

Mostra i dettagli di configurazione del Baseboard Management Controller. Qui trovi info su versione firmware, dati identificativi del sistema e comportamento generale del controller.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Controllo Remoto

Dà accesso alle funzioni per l’interazione remota diretta col server. Include opzioni di controllo alimentazione come accensione, spegnimento, reset e spegnimento controllato.

È anche il punto di partenza per le funzionalità di gestione remota che permettono di interagire col sistema indipendentemente dallo stato del sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Manutenzione

#### Gestione Firmware

Fornisce informazioni sul livello firmware dell’ambiente di gestione, inclusi firmware BMC attivi e componenti correlati. Puoi controllare versioni firmware e stato attuale per confermare la coerenza dello stack di gestione. Aggiornamenti o modifiche non sono disponibili per i clienti.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Registro Eventi Manutenzione

Registra attività di manutenzione e azioni di sistema eseguite tramite l’interfaccia di gestione. Gli eventi includono modifiche di configurazione, operazioni firmware, reset e azioni amministrative.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Problemi Comuni, Consigli & Trucchi

- **Il server non si avvia o si blocca durante il POST:**
   Se il server non completa il boot o sembra bloccarsi durante il POST, apri la console remota per identificare esattamente a che punto si ferma il processo. Potresti vedere messaggi di inizializzazione hardware o errori.
   Esegui un ciclo di alimentazione usando le opzioni di controllo power forzando lo spegnimento per qualche secondo e poi riaccendendo il server. Se il problema persiste, contatta il supporto.

- **La console remota non si apre o resta nera:**
   Assicurati che la sessione della console remota non sia già in uso da un’altra connessione. Chiudi eventuali sessioni aperte e riprova.
   A volte basta aggiornare il browser o riaprire la console per risolvere problemi di caricamento. Se il problema continua, verifica che il server sia acceso e raggiungibile.

- **ISO di Media Virtuale non rilevata:**
   Controlla che la sorgente ISO sia raggiungibile e che il file sia accessibile direttamente, ad esempio aprendo il link in un browser.
   Verifica che il media virtuale sia montato correttamente e riavvia il server dopo aver collegato l’ISO. Controlla anche l’ordine di boot per assicurarti che il CD/DVD virtuale abbia priorità.

- **Il server impiega molto tempo ad avviarsi:**
   Tempi di avvio lunghi sono normali per hardware enterprise. L’inizializzazione hardware, i controlli del controller e il training della memoria possono richiedere diversi minuti, soprattutto dopo un ciclo completo di alimentazione.

- **Interfaccia IPMI temporaneamente non raggiungibile:**
   Dopo modifiche di configurazione o periodi di inattività prolungata, l’interfaccia di gestione potrebbe non essere disponibile temporaneamente. Aspetta qualche minuto e riprova.
   Se l’accesso non torna, contatta il supporto per verificare lo stato dell’interfaccia di gestione.



## Conclusione

Ora la gestione sarà molto più semplice una volta che avrai letto tutto nei dettagli. Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂