---
id: ats-server-modding
title: "ATS: Installare Mod/DLC sul tuo server ATS"
description: "Scopri come potenziare la tua esperienza in American Truck Simulator con mod e DLC sia per il client che per il server → Scopri di più ora"
sidebar_label: Installa Mod/DLC
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

American Truck Simulator supporta nativamente le mod tramite lo Steam Workshop integrato nel gioco, permettendoti di aggiungere una vasta gamma di mod sia al tuo gioco che al tuo server, oltre ai DLC acquistati. In questa guida vedremo come installare le mod sul client e successivamente sul tuo server ATS.

<InlineVoucher />

## Aggiungere Mod & DLC

Per cominciare, devi trovare e selezionare le mod e i DLC che vuoi usare. Puoi farlo direttamente in gioco accedendo alle opzioni **Mod Manager** e **DLC Browser** nel menu principale.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mod

Puoi accedere alle mod tramite l’opzione **Mod Manager** nel menu principale, che ti permette di cercare facilmente mod tramite lo Steam Workshop.

Una volta installate le mod, assicurati di spostarle nella lista **Active Mods** usando le frecce accanto a ogni mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Infine, conferma le modifiche ed entra nel gioco in modalità single player.

### DLC

Puoi accedere ai DLC che hai acquistato sul tuo account tramite l’opzione **DLC Browser** nel menu principale.

Qui puoi vedere tutti i DLC che possiedi e che hai installato sul client.

## Esportare i Pacchetti Server

Ora che hai attivato le mod e sei pronto in gioco, devi esportare le mod come pacchetti server. Per farlo, devi aprire la console in gioco, che di default è disabilitata.

Per abilitarla, vai nella seguente cartella e apri il file `config.cfg`:
```
C:/Users/[tuo_utente]/Documents/American Truck Simulator
```

In questo file, trova la riga `uset g_developer "0"` e sostituiscila con `uset g_developer "1"` per abilitare la modalità sviluppatore. Allo stesso modo, trova la riga `uset g_console "0"` e sostituiscila con `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Riavvia il gioco, ora potrai aprire la console premendo uno di questi tasti a seconda della tastiera:
```
` OR ~ OR \
```

Ora che sei pronto, digita nella console il comando per esportare i pacchetti server:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Due file verranno esportati nella cartella `Documents/American Truck Simulator`: `server_packages.dat` e `server_packages.sii`, che contengono le info su DLC/mod e saranno usati nella prossima fase.

## Caricare i Pacchetti Server

Ora che hai esportato i pacchetti server per le tue mod, devi caricarli sul tuo server ATS via FTP. Usa la nostra guida [Accesso FTP](gameserver-ftpaccess.md) per collegarti al server.

Una volta connesso, vai nella cartella principale **American Truck Simulator**. Carica entrambi i file dei pacchetti server in questa cartella. Se i file esistono già, sovrascrivili.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Quando usi mod, devono essere sincronizzate tra client e server. Se ti connetti a un server con mod che non hai, ti verrà chiesto di scaricare quelle mancanti.
:::

Infine, riavvia il server per attivare e installare automaticamente le mod. Hai installato con successo le mod sul tuo server ATS.

<InlineVoucher />