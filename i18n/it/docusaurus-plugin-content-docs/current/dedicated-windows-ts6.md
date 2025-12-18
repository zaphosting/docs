---
id: dedicated-windows-ts6
title: "Dedicated Server: Configura il server Teamspeak 6 sul tuo Dedicated Server Windows"
description: "Scopri come configurare e ottimizzare il tuo TeamSpeak 6 Server per le migliori prestazioni e sicurezza → Scopri di più ora"
sidebar_label: Installa Teamspeak 6 Server
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nell’estate 2025, TeamSpeak ha rilasciato la **versione Beta** del **TeamSpeak 6 Server**. Ora puoi provare in anteprima la prossima generazione di TeamSpeak!

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come configurarlo e impostarlo, con tutto quello che devi sapere.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Requisiti

Prima di installare il **Teamspeak 6 Server**, assicurati che il tuo ambiente di hosting rispetti i seguenti requisiti per garantire un’installazione fluida e prestazioni ottimali.

| Hardware   | Minimo      | Consigliato da ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Core               |
| RAM        | 1 GB         | 4 GB                       |
| Spazio disco | 1 GB         | 25 GB                      |



## Preparazione

Prima di configurare il **TeamSpeak 6 Server**, devi preparare il sistema. Per assicurarti che il sistema abbia gli aggiornamenti software e di sicurezza più recenti, esegui sempre prima un aggiornamento completo.

Così facendo, il sistema avrà tutte le patch di sicurezza e le versioni software aggiornate prima di procedere.




## Installazione
Ora che hai soddisfatto tutti i requisiti e completato le preparazioni necessarie, puoi procedere con l’installazione dell’applicazione Teamspeak 6 Server. Per installare il TeamSpeak 6 Server, scarica prima l’ultima release `http://teamspeak-server_win64-v6.0.0-beta6.zip/` da GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Estrai il file in una cartella a tua scelta. Apri **PowerShell** e naviga nella directory dove hai estratto i file del server. Avvia il server eseguendo:

```
.\tsserver.exe
```

Al primo avvio comparirà una finestra con il contratto di licenza, che dovrai accettare. Dopo di che, verranno mostrati le credenziali dell’account Server Query Admin e la chiave di privilegio. Questi dati vengono mostrati una sola volta, quindi salvali con cura.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Una volta confermato, il TeamSpeak 6 Server sarà già in esecuzione in background e pronto all’uso.

##### 

## Configurazione

Puoi anche modificare impostazioni aggiuntive per il **TeamSpeak 6 Server** usando **argomenti da linea di comando**. Le opzioni si passano direttamente all’avvio del server. La lista completa delle opzioni disponibili la trovi nella documentazione ufficiale [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Esempio:

```
./tsserver --default-voice-port 9987
```



## Connessione

Una volta che il TeamSpeak 6 Server è attivo e funzionante, puoi connetterti usando il client TeamSpeak 6. Usa semplicemente l’indirizzo IP del tuo server insieme alla porta corretta. Inserisci questi dati nel client per collegarti al server e iniziare a testare.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusione e risorse utili

Congratulazioni! Hai appena installato e configurato con successo il Teamspeak 6 Server sul tuo Dedicated Server. Ti consigliamo anche di dare un’occhiata alle seguenti risorse, che possono offrirti supporto e guide extra durante la configurazione del server:

- [Sito Ufficiale](https://teamspeak.com/en/) - Info e download per TeamSpeak 6
- [Forum della Community](https://community.teamspeak.com/) - Supporto utenti e discussioni
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Segnala bug e tieni traccia dei problemi aperti

Hai domande specifiche non trattate qui? Per ulteriori info o assistenza, non esitare a contattare il nostro supporto, sempre disponibile per darti una mano! 🙂