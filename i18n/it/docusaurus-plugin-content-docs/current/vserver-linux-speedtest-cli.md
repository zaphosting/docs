---
id: vserver-linux-speedtest-cli
title: "Configura Speedtest CLI su un Server Linux - Monitora le Prestazioni della Rete del Tuo Server"
description: "Scopri come installare e usare Speedtest-Cli per test di rete affidabili e automazione → Scopri di più ora"
sidebar_label: Installa Speedtest-Cli
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Speedtest-Cli è sia uno strumento gratuito da riga di comando che una libreria software (libSpeedtest-Cli) per trasferire dati tramite URL. Supporta un’ampia gamma di protocolli—tra cui HTTP(S), FTP, SMTP, LDAP, MQTT e altri—ed è comunemente usato per scaricare file, testare API e automatizzare operazioni di rete.

Stai pensando di ospitare questo servizio in autonomia? Ti guideremo passo passo su come installarlo e configurarlo, con tutto quello che devi sapere.

<InlineVoucher />

## Preparazione

Prima di configurare **Speedtest-Cli**, devi preparare il tuo sistema. Questo include aggiornare il sistema operativo all’ultima versione disponibile. Questi passaggi garantiscono un ambiente stabile e aiutano a evitare problemi durante o dopo l’installazione.

### Aggiorna il Sistema
Per assicurarti che il sistema abbia le ultime patch di sicurezza e aggiornamenti software, esegui sempre prima un aggiornamento completo. Usa questo comando:

```
sudo apt update && sudo apt upgrade -y
```
Così il tuo sistema sarà aggiornato con le ultime versioni e patch di sicurezza prima di procedere.

## Installazione

Ora che hai completato le preparazioni, puoi procedere con l’installazione di Speedtest-Cli. Esegui questo comando:

```console
sudo apt install speedtest-cli
```

## Configurazione

speedtest-cli non usa un file di configurazione tradizionale, ma puoi personalizzarlo tramite opzioni da riga di comando e variabili d’ambiente. Questo ti permette di adattarlo per un uso coerente e automatizzato:

- `--server <ID>`: Seleziona un server specifico tramite ID per risultati più stabili e comparabili.  
- `--bytes`: Mostra le velocità in byte al secondo invece che in bit.  
- `--simple`: Output compatto con solo ping, download e upload.  
- `--json` o `--csv`: Perfetto per automazione e logging, i risultati sono in formato leggibile da macchina.  
- Supporto proxy: Configura variabili d’ambiente come `http_proxy` o `https_proxy` per usare speedtest-cli dietro un proxy.

Se usi sempre le stesse opzioni, ti conviene creare un alias shell o uno script wrapper. Così lanci speedtest-cli velocemente e con output uniforme.

## Conclusione e Risorse Utili

Complimenti! Hai installato e configurato Speedtest-Cli sul tuo VPS o Server Dedicato. Ti consigliamo anche di dare un’occhiata a queste risorse, che possono aiutarti ulteriormente nella configurazione del tuo server:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Sito Ufficiale

Hai domande specifiche non trattate qui? Per qualsiasi dubbio o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂

<InlineVoucher />