---
id: vserver-windows-python
title: 'VPS: Installazione di Python'
description: "Scopri come installare il runtime Python su server Windows e iniziare a far girare i tuoi programmi Python in modo efficiente → Scopri di più ora"
sidebar_label: Installa Python
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra come installare il runtime Python su Windows. I passaggi qui sotto vanno eseguiti tramite RDP; se non sai come connetterti al tuo server via RDP, dai un’occhiata alla nostra guida [Accesso Iniziale (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## Installazione

### Passo 1: Scaricare i file
Apri il browser che preferisci (io uso Chrome per questa guida) e vai su [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Clicca sul pulsante `Download Python [versione]` e aspetta che il download finisca.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Passo 2: Installare Python
Avvia l’installer cliccandoci sopra. Ti verrà chiesto di configurare alcune opzioni per l’installazione. Assicurati che la casella `Add python.exe to PATH` in basso sia selezionata (così sarà più facile eseguire Python in seguito) e clicca su `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Passo 3: Completare l’installazione
Aspetta che tutti i file vengano installati. Sii paziente, potrebbe volerci un po’. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Quando finisce, clicca su `Close` e potrai iniziare a usare Python sul tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Eseguire codice

Ora che Python è installato sul tuo server, puoi iniziare a far girare i tuoi programmi Python.

### Modalità interprete

Digitando il comando `python` in un Prompt dei comandi o PowerShell si avvierà l’interprete Python. Puoi scrivere qualsiasi codice Python valido dopo il prompt `>>>` e verrà eseguito premendo `Invio`. Per uscire dall’interprete, digita `exit()` oppure chiudi semplicemente la finestra.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Eseguire file .py

Per far girare file Python `.py`, usa il comando `python3 [nomefile].py`, sostituendo `[nomefile]` con il percorso del file che vuoi eseguire. Anche questo va fatto tramite Prompt dei comandi o PowerShell.

:::tip
La maggior parte dei programmi online si avviano con `python3 main.py` perché `main.py` è il punto di partenza più comune per i programmi Python.
:::

Puoi anche eseguire file Python (.py) semplicemente aprendoli o cliccando col tasto destro e selezionando Python direttamente da Windows.

## Ambienti virtuali

Quando scrivi un programma Python potresti aver bisogno di installare pacchetti esterni tramite pip. Questi possono essere installati globalmente e quindi disponibili per tutti gli script `.py`, oppure puoi creare un ambiente virtuale (venv).

### Creare il venv

Prima di tutto, vai nella cartella dove vuoi creare il venv usando l’esplora file e, una volta lì, esegui `python -m venv .` per installare i file necessari nella posizione corrente.

### Attivare & disattivare

Per usare comandi come `pip install` dentro il venv devi attivarlo con `.\Scripts\activate`. Ora la console lavorerà solo dentro il venv e gli script avranno accesso solo ai pacchetti installati localmente.

Quando hai finito di lavorare nel venv, torna indietro con il comando `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Conclusione

Congratulazioni, hai installato e configurato Python sul tuo VPS con successo! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />