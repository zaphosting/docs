---
id: vserver-windows-ts6
title: "Configura il Server TeamSpeak 6 su Windows - Lancia la tua piattaforma vocale"
description: "Scopri come installare e ottimizzare il TeamSpeak 6 Server beta per un hosting fluido e prestazioni top → Scopri di più ora"
sidebar_label: Installa TeamSpeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Nell’estate 2025, TeamSpeak ha rilasciato la **Beta** del **TeamSpeak 6 Server**. Ora puoi provare in anteprima la nuova generazione di TeamSpeak!

Vuoi ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisiti

Prima di installare il **TeamSpeak 6 Server**, assicurati che il tuo ambiente di hosting rispetti questi requisiti per un’installazione senza intoppi e prestazioni ottimali.

| Hardware   | Minimo      | Consiglio ZAP-Hosting      |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Core  | 4 vCPU Core                |
| RAM        | 1 GB         | 4 GB                       |
| Spazio disco | 1 GB       | 25 GB                      |



## Preparazione

Prima di installare il **TeamSpeak 6 Server**, prepara il sistema. Per essere sicuro che il tuo sistema abbia gli ultimi aggiornamenti software e patch di sicurezza, esegui sempre un update completo.

Così il sistema sarà aggiornato e protetto prima di procedere.



## Installazione
Ora che hai tutto pronto e i requisiti rispettati, puoi installare il TeamSpeak 6 Server. Scarica prima l’ultima versione dal link GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Estrai il file in una cartella a tua scelta. Apri **PowerShell** e vai nella cartella dove hai estratto i file. Avvia il server con:

```
.\tsserver.exe
```

Al primo avvio comparirà la finestra con il contratto di licenza, che devi accettare. Dopo vedrai le credenziali dell’account Server Query Admin e la chiave di privilegio. Questi dati vengono mostrati solo una volta, quindi salvali bene.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Dopo la conferma, il TeamSpeak 6 Server sarà già attivo in background e pronto all’uso.

##### 

## Configurazione

Puoi anche personalizzare il **TeamSpeak 6 Server** con **argomenti da linea di comando**. Le opzioni si passano direttamente all’avvio del server. La lista completa la trovi nella doc ufficiale [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Esempio:

```
./tsserver --default-voice-port 9987
```



## Connessione

Quando il TeamSpeak 6 Server è attivo, puoi connetterti con il client TeamSpeak 6. Usa l’IP del server e la porta corretta. Inserisci questi dati nel client per collegarti e iniziare a testare.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusione e risorse utili

Complimenti! Hai installato e configurato con successo il TeamSpeak 6 Server sul tuo VPS o Dedicated Server. Ti consigliamo anche di dare un’occhiata a queste risorse per supporto extra e approfondimenti durante la configurazione:

- [Sito Ufficiale](https://teamspeak.com/en/) - Info e download TeamSpeak 6
- [Forum Community](https://community.teamspeak.com/) - Supporto utenti e discussioni
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Segnala bug e tieni traccia dei problemi aperti

Hai domande specifiche che non trovi qui? Per qualsiasi dubbio o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂