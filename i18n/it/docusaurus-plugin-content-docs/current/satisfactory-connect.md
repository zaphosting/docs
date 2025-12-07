---
id: satisfactory-connect
title: "Satisfactory: Connettersi al Server"
description: "Scopri come connetterti e gestire il tuo Server Satisfactory in modo efficace per un’esperienza di gioco senza intoppi → Scopri di più ora"
sidebar_label: Connettersi al Server
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Come creare un Server Satisfactory su ZAP e caricare il tuo save-game" description="Ti piace capire meglio vedendo le cose in azione? Ci pensiamo noi! Tuffati nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca assorbire le info nel modo più coinvolgente possibile!"/>

:::info
Se stai già usando una tastiera con layout QWERTY, non devi fare questi passaggi, premi semplicemente CTRL + SHIFT + L e apri la Console con ~
:::

Per connetterti al tuo Server Satisfactory, devi aprire la console del gioco, ci sono due modi per farlo.

<InlineVoucher />

## Aprire la Console

### Cambiare il layout della tastiera
Puoi cambiare facilmente il layout della tastiera in pochi passaggi.
Avvia il gioco Satisfactory fino ad arrivare al menu principale.
Ora premi `CTRL + Shift` e il layout della tastiera dovrebbe cambiare in `EN`.
Puoi verificare facilmente se ha funzionato: passa al desktop e controlla se nella barra delle applicazioni in basso a destra c’è scritto `EN`.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Se il cambio è andato a buon fine, torna nel gioco, premi ora `CTRL + SHIFT + L`
Premi ora `^` sulla tastiera, dovrebbe aprirsi la console.

### Cambiare il tasto per aprire la console
Premi `Tasto Windows + R` oppure cerca nel menu Start `Esegui`
Incolla questo percorso:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

e premi invio.

Ora apri il file Input.ini con un editor a tua scelta (ad esempio Notepad)

:::info
Se il file non esiste ancora, crealo tu.
:::

Aggiungi questo testo nel file:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Salva e riavvia il gioco - ora puoi aprire la console con `F6`

## Connettersi al tuo Gameserver Satisfactory
Copia l’indirizzo IP dal pannello di controllo del tuo server:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Apri la console nel gioco, come spiegato nei passaggi precedenti

Scrivi ora `open IP-Address-del-Tuo-Server` dentro la console.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

e premi invio.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Ora stai entrando nel tuo server Satisfactory!

## L’HUB
L’HUB è già piazzato nel mondo, puoi distruggerlo se vuoi premendo `F` e riposizionarlo dove preferisci.
Lo trovi facilmente seguendo il marker.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Il server salva i tuoi progressi ogni 5 minuti, puoi vederli nel gestore dei salvataggi nel pannello del tuo server.
Terrà sempre gli ultimi 6 salvataggi (30 minuti) di progresso.

<InlineVoucher />