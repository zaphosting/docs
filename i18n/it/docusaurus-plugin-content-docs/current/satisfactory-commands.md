---
id: satisfactory-commands
title: "Satisfactory: Comandi Console"
description: "Scopri come ottimizzare il tuo gameplay in Satisfactory con i comandi console essenziali e consigli sui tasti rapidi → Scopri di più ora"
sidebar_label: Comandi Console
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Satisfactory offre una vasta gamma di comandi utili per i giocatori per regolare le impostazioni del client. In questa pagina riassumiamo i comandi più popolari e utili comunemente usati dai giocatori di Satisfactory.

<InlineVoucher />

## Come accedere alla console
Usare la console in Satisfactory è super semplice, basta premere il tasto `` ` `` (backtick, si trova sopra il tasto TAB) per alternare la visibilità della console. Ogni volta che lo premi, la console si chiuderà, si aprirà con una piccola finestra dei comandi in basso oppure si espanderà completamente.

:::info
Se il tasto backtick non funziona, segui i passaggi nella sottosezione qui sotto per impostare e abilitare un nuovo tasto rapido.
:::

### Impossibile accedere alla console
A volte, a causa di tastiere regionali, il tasto predefinito per attivare la console (backtick) potrebbe non funzionare, quindi devi configurarne uno nuovo. Prima di farlo, chiudi Satisfactory se è in esecuzione.

Premi `Tasto Windows + R` oppure cerca nel menu Start `Esegui`. Poi incolla questo percorso:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Apri il file `Input.ini` con un editor di testo (tipo Notepad).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Ora copia e incolla esattamente questa riga in fondo al file:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Salva e riavvia il gioco: ora potrai aprire la console premendo `F6`.

## Comandi Console

La tabella mostra il comando, i valori accettati (se applicabili) e una descrizione per capire meglio.

Per vedere la lista completa dei comandi, digita `?` nella console: apparirà una lista flottante con tutti i comandi disponibili. Puoi navigarla usando le frecce `SU` e `GIÙ`.

Ecco un esempio di come usare `?` per vedere tutti i comandi.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Qualsiasi comando menzionato in questa pagina è valido per la versione vanilla di Satisfactory.
:::

| Sintassi Comando             | Valori Accettati       | Descrizione                                                                 |
| ----------------------------| ----------------------| --------------------------------------------------------------------------- |
| ?                           | -                     | Mostra la lista completa di tutti i comandi                                |
| Stat FPS                    | -                     | Attiva/disattiva il contatore FPS integrato nel gioco                      |
| Stat UNIT                   | -                     | Attiva una visualizzazione con frame time, dati di gioco, draw time e altro|
| t.MaxFPS "maxfps"           | Intero (es. 120)      | Imposta il massimo FPS del gioco                                           |
| r.ScreenPercentage "valore" | Intero (default 100)  | Cambia la scala della risoluzione dello schermo (solo per il rendering del mondo, non UI) |
| r.ViewDistanceScale "valore"| Intero (default 1)    | Cambia la distanza di rendering degli oggetti come rocce o alberi          |
| Suicide                     | -                     | Uccide il tuo personaggio                                                  |
| FOV "valore"                | Intero (es. 90)       | Imposta il campo visivo (FOV) del gioco                                    |
| r.Atmosphere "1 o 0"        | true (1)/false (0)    | Attiva/disattiva l’atmosfera nel gioco                                     |
| r.Fog "1 o 0"               | true (1)/false (0)    | Attiva/disattiva la nebbia nel gioco                                       |
| Gamma "valore"              | Intero (default 50)   | Imposta il livello di luminosità del gioco                                 |

Per una lista più completa di comandi, visita [la wiki di Satisfactory](https://satisfactory.fandom.com/wiki/Console) che copre anche comandi più tecnici e approfonditi.

<InlineVoucher />