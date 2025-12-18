---
id: vserver-windows-rdp-port
title: "VPS: Cambia la porta RDP di Windows"
description: "Scopri come cambiare la porta RDP di Windows → Scopri di più ora"
sidebar_label: Cambia porta RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduzione

Il Remote Desktop Protocol usa di default la porta 3389. Questa porta è molto conosciuta ed è spesso bersaglio di scansioni automatiche. Cambiare la porta RDP può ridurre i tentativi di connessione indesiderati e migliorare la sicurezza di base.

<InlineVoucher />



## Cambia la porta RDP nel registro

Accedi al server localmente o tramite una connessione Remote Desktop esistente. Apri la finestra Esegui con **Win + R**, digita `regedit` e conferma per aprire l’Editor del Registro. Naviga al seguente percorso nel registro:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Trova la voce di registro chiamata **PortNumber**. Cambia il formato del valore in **Decimale** e inserisci il nuovo numero di porta desiderato. Si consiglia una porta sopra 1024 che non sia già usata da un altro servizio. Dopo aver applicato la modifica, chiudi l’Editor del Registro.

## Regola le regole del firewall di Windows

La nuova porta RDP deve essere consentita dal firewall di Windows. Apri **Windows Defender Firewall con sicurezza avanzata** e vai alla sezione delle regole in ingresso.

Modifica la regola esistente per Remote Desktop o crea una nuova regola in ingresso che permetta il traffico TCP sulla porta appena configurata. Assicurati che la regola consenta la connessione e sia applicata ai profili di rete necessari.

## Riavvia il servizio per applicare le modifiche

La modifica della porta diventa attiva solo dopo il riavvio dei Remote Desktop Services o del sistema. Si consiglia un riavvio completo del server per garantire che la configurazione venga applicata correttamente.

## Connettiti usando la nuova porta

Quando stabilisci una nuova connessione Remote Desktop, devi specificare esplicitamente la porta aggiungendola all’indirizzo IP o al nome host. Esempio:

```
203.0.113.10:3390
```

## Conclusione

Cambiare la porta RDP di Windows riduce l’esposizione a scansioni automatiche e tentativi di accesso non autorizzati. Il processo prevede l’aggiornamento del registro di Windows, la configurazione del firewall per la nuova porta e il riavvio del sistema o dei servizi.

Dopo aver completato, verifica subito l’accesso e annota la porta configurata per evitare problemi futuri. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />