---
id: gameserver-restartplaner
title: 'Game server: Pianificatore riavvii - Esegui riavvii automatici del server'
description: "Scopri come automatizzare i riavvii giornalieri del tuo game server per migliorare prestazioni e uptime → Scopri di più ora"
sidebar_label: Pianificatore riavvii
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Il pianificatore di riavvii è una funzione disponibile per i game server che ti permette di impostare un riavvio automatico del server sempre alla stessa ora ogni giorno.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Come configurare un PIANIFICATORE DI RIAVVIO per il tuo Server!" description="Ti è più facile capire quando vedi le cose in azione? Ci pensiamo noi! Immergiti nel nostro video che ti spiega tutto passo passo. Che tu sia di fretta o preferisca imparare nel modo più coinvolgente possibile!"/>

:::info
Questa funzione è disponibile solo per game server.
:::

Questa funzione la trovi direttamente nell’interfaccia del game server.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Crea nuove voci

:::info
***Nota:*** Le modifiche al pianificatore di riavvii vengono applicate solo dopo il riavvio del server.
:::

Se vuoi aggiungere un riavvio automatico, clicca sul pulsante grigio "**+**".

Nella finestra successiva puoi scegliere tra riavvii settimanali o giornalieri. Nel nostro esempio vogliamo quattro riavvii al giorno con intervallo di 6 ore. Quindi selezioniamo "**Giornaliero**" e impostiamo "**06:00**". Conferma con "**Salva**".

Ripeti questa procedura per ogni riavvio automatico che vuoi impostare. Se imposti "**24:00**" il sistema mostra un messaggio di errore. Per evitarlo, usa "**00:00**" al suo posto.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Avvia server offline

Se attivi questa opzione, un server fermo verrà avviato automaticamente all’orario impostato. Se rimane disattivata, il sistema riavvierà il game server solo se era "**Online**" prima.

## Opzione comando

L’opzione comando tra i riavvii automatici serve per eseguire comandi automaticamente subito prima del riavvio. Il numero di comandi disponibili dipende dal gioco. Non tutti i giochi offrono questa possibilità.

Se vuoi avvisare i giocatori in anticipo, puoi usare il comando *say* in Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Ritardo

Il campo Ritardo definisce l’intervallo tra l’esecuzione del comando e il riavvio del server. Questo ritardo è espresso in **secondi**. Per esempio, se vuoi impostare un ritardo di 5 minuti, devi inserire il valore 300. 

<InlineVoucher />