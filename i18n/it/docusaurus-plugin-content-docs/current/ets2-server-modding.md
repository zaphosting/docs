---
id: ets2-server-modding
title: "ETS2: Installare Mod/DLC sul tuo server ETS2"
description: "Scopri come migliorare la tua esperienza in Euro Truck Simulator 2 aggiungendo mod e DLC per un gameplay super immersivo → Scopri di più ora"
sidebar_label: Installa Mod/DLC
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Euro Truck Simulator 2 supporta nativamente le mod tramite lo Steam Workshop integrato nel gioco, permettendoti di aggiungere una vasta gamma di mod sia al gioco che al tuo server, oltre ai DLC acquistati. In questa guida vedremo come installare le mod sul client e successivamente sul tuo server ETS2.

<InlineVoucher />

## Aggiungere Mod & DLC

Per cominciare, devi trovare e selezionare le mod e i DLC che vuoi usare. Puoi farlo direttamente in-game accedendo alle opzioni **Mod Manager** e **DLC Browser** nel menu principale.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mod

Puoi accedere alle mod tramite l’opzione **Mod Manager** nel menu principale, che ti permette di cercare facilmente mod tramite lo Steam Workshop.

Una volta installate alcune mod, assicurati di spostarle nella lista **Active Mods** usando le frecce accanto a ogni mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Infine, conferma le modifiche ed entra nel gioco in modalità single player.

### DLC

Puoi accedere ai DLC acquistati sul tuo account tramite l’opzione **DLC Browser** nel menu principale.

Qui puoi vedere tutti i DLC che possiedi e hai installato sul client.

## Esportare i Pacchetti Server

Ora che hai attivato le mod e sei pronto in-game, devi esportare le mod come pacchetti server. Per farlo, devi aprire la console in-game, che di default è disabilitata.

Per abilitarla, vai nella seguente cartella e apri il file `config.cfg`:
```
C:/Users/[tuo_utente]/Documents/Euro Truck Simulator 2
```

In questo file, trova la riga `uset g_developer "0"` e sostituiscila con `uset g_developer "1"` per abilitare la modalità sviluppatore. Allo stesso modo, trova la riga `uset g_console "0"` e sostituiscila con `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Riavvia il gioco, ora potrai aprire la console premendo uno di questi tasti a seconda della tastiera:
```
` OR ~ OR \
```

Ora che sei pronto, digita nella console questo comando per esportare i pacchetti server:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Due file verranno esportati nella cartella `Documents/Euro Truck Simulator 2`, i file `server_packages.dat` e `server_packages.sii`, che contengono le info su DLC/mod e saranno usati nella prossima fase.

## Caricare i Pacchetti Server

Ora che hai esportato i pacchetti server per le mod, devi caricarli sul tuo server ETS2 via FTP. Usa la nostra guida [Accesso FTP](gameserver-ftpaccess.md) per collegarti al server.

Una volta connesso, vai nella cartella principale **Euro Truck Simulator 2**. Carica entrambi i file dei pacchetti server in questa cartella. Se i file esistono già, sovrascrivili.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Quando usi mod, devono essere sincronizzate tra client e server. Quindi, se ti connetti a un server con mod che non hai, ti verrà chiesto di scaricare quelle mancanti.
:::

Infine, riavvia il server per attivare e installare automaticamente le mod. Hai installato con successo le mod sul tuo server ETS2.

<InlineVoucher />