---
id: dedicated-linux-openclaw
title: "Configura OpenClaw su un Server Linux - Crea il Tuo Assistente AI Personale!"
description: "Scopri come installare e configurare OpenClaw in self-hosting per costruire un assistente AI open-source personale e potente → Scopri di più ora"
sidebar_label: Installa OpenClaw
services:
  - vserver-service-openclaw
  - dedicated-service-openclaw
---

import Button from '@site/src/components/Button';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

[OpenClaw](https://openclaw.ai/) è una piattaforma di automazione e controllo basata su AI che ti permette di interagire con software tramite un’interfaccia browser. Invece di cliccare manualmente tra i menu, navigare interfacce utente o ripetere gli stessi workflow all’infinito, OpenClaw può eseguire task in modo programmato e offrire controllo remoto tramite il suo cruscotto web.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Ciò che rende OpenClaw davvero rivoluzionario è che crea un moderno “strato di controllo” per app e sistemi. Invece di essere legato a una sessione desktop locale, OpenClaw può girare su una macchina remota come un VPS o un Server Dedicato ed essere gestito completamente da ovunque. Questo lo rende uno strumento potente per chi vuole automazione affidabile, controllo remoto e gestione centralizzata senza dover tenere acceso un PC locale.

Stai pensando di ospitare questo servizio da solo? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

<Button label="Ordina subito il tuo Server con OpenClaw!" link="https://zap-hosting.com/en/vps-for-openclaw/" block style={{backgroundColor: '#ECFCCB', color: '#27272A', border: '1px solid lightgrey' }} />

<InlineVoucher />

## Casi d’uso di OpenClaw

OpenClaw può essere usato in tantissimi scenari quotidiani ed è perfetto per chiunque voglia automatizzare task, centralizzare l’uso dell’AI o far girare un assistente sempre attivo e disponibile.

Un uso comune è unificare le interazioni AI su più piattaforme. Invece di usare strumenti diversi per ogni app di messaggistica, OpenClaw può fare da assistente unico con contesto e configurazione coerenti, indipendentemente da dove lo usi.

OpenClaw è anche ottimo per l’automazione. Può ridurre il lavoro manuale ripetitivo gestendo task ricorrenti, organizzando info, riassumendo contenuti e fornendo risposte strutturate.

Un altro caso importante è l’automazione web. Controllando sessioni browser tramite istanze dedicate di Chrome o Chromium, OpenClaw può interagire con interfacce web anche quando non esiste un’integrazione API diretta.

Per supportare tutto questo, OpenClaw offre tante funzionalità: supporto multi-canale (WhatsApp, Telegram, Slack, Discord), architettura gateway per gestire sessioni e canali, funzioni vocali opzionali, interfaccia canvas interattiva, piattaforma skills estendibile, supporto per più provider AI (OpenAI, Anthropic), nodi device per azioni mobile, autenticazione con API key, e gestione persistente di workspace e configurazioni.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Prerequisiti

A seconda di come userai **OpenClaw**, il consumo di risorse può salire velocemente. Setup base (ad esempio solo Web UI con automazioni minime) girano bene anche su VPS piccoli, ma usi più avanzati come più canali, tante skills o automazione browser diventano molto più esigenti e per questi casi consigliamo fortemente un Server Dedicato.

| Hardware   | Minimo       | Consiglio ZAP-Hosting      |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core  | 8 vCPU Core                |
| RAM        | 4 GB         | 16 GB                      |
| Spazio disco | 25 GB      | 50 GB                      |

<Button label="Ordina subito il tuo Server con OpenClaw!" link="https://zap-hosting.com/en/vps-for-openclaw/" block style={{backgroundColor: '#ECFCCB', color: '#27272A', border: '1px solid lightgrey' }} />


## Installazione
L’installazione parte eseguendo lo script ufficiale di OpenClaw sul tuo Server Linux Dedicato. Connettiti via SSH e lancia questo comando:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Dopo il comando partirà automaticamente uno script interattivo che ti guiderà nell’installazione. Lo script controlla l’ambiente, installa dipendenze mancanti e poi avvia il processo di onboarding di OpenClaw.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)


### Rilevamento piattaforma e controllo dipendenze

L’installer rileva automaticamente il sistema operativo e installa le dipendenze necessarie se mancano.
Ad esempio, se Node.js non è presente, verrà installato senza bisogno di intervento manuale.



### Installazione pacchetti richiesti

OpenClaw installa i pacchetti necessari tramite il package manager di sistema. Nessuna azione manuale richiesta. Quando tutto è pronto, l’installer procede da solo.

### Installazione di OpenClaw

Quando le dipendenze sono pronte, l’installer scarica e installa la release di OpenClaw. Al termine vedrai una conferma tipo:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### Onboarding di OpenClaw

Dopo l’installazione parte automaticamente la procedura guidata di onboarding. Serve per completare la configurazione iniziale e rendere OpenClaw utilizzabile.



Per prima cosa leggi l’avviso di sicurezza mostrato e conferma per continuare. Poi scegli la modalità di onboarding. Per la maggior parte degli utenti, **QuickStart** è la scelta consigliata.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Dopodiché scegli il modello/provider di autenticazione. In questo esempio è selezionato **OpenAI**. Inserisci la tua API key OpenAI. OpenClaw la salverà localmente nella configurazione per usarla nelle sessioni future. Dopo aver salvato la key, scegli il modello di default da usare.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

Negli ultimi passaggi puoi opzionalmente configurare canali (Telegram, Discord, Slack), skills e hooks. Se non vuoi farlo subito, puoi saltare e continuare.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Se vuoi usare OpenClaw via Telegram, devi prima creare un bot Telegram e ottenere il suo token API. Si fa direttamente su Telegram con l’account ufficiale **BotFather**.

Apri la chat con **BotFather**, avvia la creazione con `/newbot` e segui le istruzioni.  
BotFather chiederà prima un nome da mostrare, poi uno username che deve finire con `bot`.

La conversazione tipo è:

```
User: /newbot 

BotFather: Ok, un nuovo bot. Come lo chiamiamo? Scegli un nome per il tuo bot.  

User: ZAP DOCS EXAMPLE

BotFather: Bene. Ora scegli uno username per il bot. Deve finire con `bot`. Tipo: TetrisBot o tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather: Fatto! Congratulazioni per il tuo nuovo bot. Lo trovi su t.me/ZAP_DOCS_EXAMPLE_BOT. Puoi aggiungere descrizione, info e immagine profilo, vedi /help per comandi. Quando hai finito, contatta il nostro Bot Support se vuoi uno username migliore. Assicurati che il bot funzioni prima.

Usa questo token per accedere all’API HTTP:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Tieni il token al sicuro, chiunque lo abbia può controllare il bot.

Per la descrizione dell’API Bot, vedi: https://core.telegram.org/bots/api
```

Dopo la conferma di BotFather, copia il **token** mostrato e conservalo bene. Ti servirà più avanti per collegare Telegram come canale nell’onboarding o configurazione di OpenClaw. Chiunque abbia questo token può controllare il bot, quindi non condividerlo mai pubblicamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Dopo aver creato il bot Telegram e salvato il token, continua l’onboarding di OpenClaw. Nei passaggi successivi puoi installare **skills** e abilitare **hooks**. Sono consigliati, ma puoi anche saltarli e configurarli dopo.

Quando l’onboarding finisce, OpenClaw installa automaticamente il **Gateway service**. Infine scegli l’opzione **Web UI** così OpenClaw stampa il link al cruscotto. Da lì puoi accedere all’interfaccia di controllo e gestire tutto via browser.

Alla fine l’onboarding sarà segnato come completato. OpenClaw offre anche di installare lo **script di completamento shell**. È opzionale ma consigliato, migliora l’esperienza da terminale con l’autocompletamento dei comandi OpenClaw. Segui i passaggi.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)


<InlineVoucher />


## Configurazione

I nostri VPS e Server Dedicati arrivano senza interfaccia grafica di default. Per questo OpenClaw gira in modalità headless e espone la Control UI solo localmente sulla porta `18789`.

Dopo installazione e onboarding, OpenClaw stampa le info del cruscotto nella console:

```
Link dashboard (con token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copia/incolla questo URL in un browser su questa macchina per controllare OpenClaw.
Nessuna GUI rilevata. Apri dal tuo PC:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Poi apri:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Poiché l’interfaccia web è legata a `127.0.0.1`, non è accessibile direttamente da internet. Per accedervi in sicurezza dal tuo PC, crea un tunnel SSH che inoltra la porta OpenClaw dal VPS/Server Dedicato alla tua macchina locale.

Sul tuo PC apri un terminale e lancia:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Finché questa sessione SSH resta aperta, puoi aprire l’interfaccia di controllo OpenClaw nel browser con:

```
http://localhost:18789/
```

Se OpenClaw richiede autenticazione, usa il link con token mostrato nell’output:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Usa una GUI (Desktop Environment)

Se preferisci usare OpenClaw con interfaccia grafica, puoi installare un desktop environment sul tuo VPS/Server Dedicato, ad esempio **XFCE**. Dopo aver installato la GUI (e una soluzione di desktop remoto tipo RDP o VNC), puoi accedere e controllare OpenClaw direttamente dal desktop del server invece di usare il port forwarding SSH.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Installare skills

Le skills estendono OpenClaw con funzionalità e integrazioni extra.
OpenClaw ha più di 50 skills disponibili. Puoi installarle direttamente dal cruscotto aprendo la sezione **Skills** e selezionando quelle che vuoi attivare.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Abilitare hooks

Gli hooks permettono a OpenClaw di eseguire azioni automaticamente quando succedono eventi o si usano comandi specifici.
È utile per automatizzare task ricorrenti, salvare contesto o attivare workflow senza intervento manuale.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Configurare canali

I canali ti permettono di usare OpenClaw tramite piattaforme di messaggistica.
Nel cruscotto puoi configurare e collegare canali supportati come Telegram, Discord, Slack e altri.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

A seconda della piattaforma scelta, devi fornire token o credenziali aggiuntive (come spiegato nell’installazione per il token bot Telegram creato con BotFather).



Dopo che un canale è collegato con successo, OpenClaw può ricevere e rispondere ai messaggi su quella piattaforma. Una conversazione con l’assistente AI via Telegram potrebbe essere così:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Questioni di sicurezza

OpenClaw è uno strumento potente e va sempre usato con le giuste precauzioni di sicurezza. Il Gateway Dashboard è protetto da un token, che funziona come una password e dà accesso alla tua istanza OpenClaw. Non condividere mai questo token pubblicamente (es. screenshot, ticket, chat), perché chiunque lo abbia può accedere e controllare il dashboard.

Si consiglia di tenere OpenClaw protetto dietro un firewall e di evitare di esporre l’interfaccia gateway direttamente su internet. Di default OpenClaw lega il servizio gateway a `127.0.0.1`, che blocca accessi esterni ed è l’opzione più sicura per la maggior parte degli usi. Per accedere da remoto usa il port forwarding SSH e limita l’accesso solo a utenti fidati.



## Conclusione e risorse utili

Congratulazioni! Hai installato e configurato con successo OpenClaw sul tuo VPS o Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti durante la configurazione del server:

- [openclaw.ai](https://https://openclaw.ai/) - Sito Ufficiale
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - Documentazione OpenClaw
- [clawhub.com](https://clawhub.com/) - ClawHub - Skills create dalla community

Hai domande specifiche non trattate qui? Per ulteriori info o supporto, contatta pure il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />