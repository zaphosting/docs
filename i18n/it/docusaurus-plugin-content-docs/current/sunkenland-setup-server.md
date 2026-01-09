---
id: sunkenland-setup-server
title: "Sunkenland: Configurazione del Server Sunkenland"
description: "Scopri come configurare il tuo server di gioco Sunkenland per un gameplay fluido e una funzionalità ottimale → Scopri di più ora"
sidebar_label: Configurazione Server
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I server Sunkenland richiedono una configurazione rapida iniziale affinché il server funzioni correttamente. In questa guida, esploreremo i passaggi necessari per configurare il tuo server di gioco Sunkenland.

<InlineVoucher />

## Preparazione
Prima di procedere, devi prima avviare Sunkenland e creare un file di salvataggio del mondo. Assicurati di salvare il mondo prima di andare avanti.

Per poter accedere ai file del server più avanti nella guida, ti servirà anche un client FTP come [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), entrambi open-source e gratuiti da scaricare.

## Accesso ai dati locali
Il primo passo consiste nell’accedere ai dati di salvataggio di Sunkenland.

Premi semplicemente `CTRL+R` sulla tastiera e inserisci quanto segue nel prompt Esegui di Windows:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

In questa posizione vedrai una cartella `Worlds` che contiene tutti i tuoi file di salvataggio locali. Seleziona quello che vuoi ospitare sul server, oppure, se è nuovo, seleziona quello che hai generato prima di iniziare questa guida.

:::tip
Non vedi nulla qui? Assicurati di aver avviato Sunkenland e creato un salvataggio del mondo, che dovrebbe generare una nuova cartella.
:::

## Caricamento del salvataggio
Il passo successivo è connettersi al tuo server di gioco via FTP e caricare il salvataggio che hai selezionato nel passaggio precedente.

Inizia collegandoti al server tramite un client FTP usando le credenziali che trovi sotto **Tools->FTP-Browser** nell’interfaccia web del tuo server di gioco. Usa la nostra guida [Accesso via FTP](gameserver-ftpaccess.md) per un aiuto extra nella connessione.

Una volta connesso, vai nella cartella Sunkenland, apri la cartella "AppData" e poi la cartella "Worlds", seleziona il salvataggio del passaggio precedente e caricalo qui.

La struttura delle cartelle dovrebbe ora apparire così, dove `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` è il tuo salvataggio personale.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
A questo punto, copia il GUID che trovi alla fine del nome del mondo salvato. Ti servirà nel passaggio successivo per far funzionare il server.

Il GUID ha questo aspetto:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Nome completo del mondo
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Il GUID che ti serve
```
:::

## Attivazione del Server
Infine, vai nella sezione **Settings** nell’interfaccia web del tuo server di gioco.

Qui cerca l’opzione **World GUID**. In questo campo incolla il GUID che hai copiato alla fine del passaggio precedente.

Ricordati di cliccare il pulsante verde **Save** in fondo alla pagina. Ora prova ad avviare il server, dovrebbe partire senza problemi.

Hai configurato con successo il tuo server di gioco Sunkenland.

<InlineVoucher />