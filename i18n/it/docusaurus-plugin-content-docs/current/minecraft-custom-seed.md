---
id: minecraft-custom-seed
title: "Minecraft: Seed personalizzato per il mondo"
description: "Scopri come creare mondi Minecraft unici impostando seed personalizzati per nuove avventure e generazione del mondo → Scopri di più ora"
sidebar_label: Seed personalizzato per il mondo
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Un seed in Minecraft è un codice specifico composto da numeri o lettere che determina come viene generato il tuo mondo di gioco. Definisce il terreno, i biomi, le strutture e le risorse che troverai nel tuo mondo. Usare lo stesso seed con la stessa versione del gioco e le stesse impostazioni genera sempre la stessa mappa, rendendo facile condividere mondi unici con gli altri.

Ricorda che non puoi cambiare il seed di un mondo già esistente. Il seed influisce solo sulla generazione di un nuovo mondo. Per usare un seed diverso, devi sempre creare un nuovo mondo dopo averlo impostato.

<InlineVoucher />

## Configurazione

Per configurare un seed personalizzato, prima ferma il tuo server per evitare conflitti di dati. Poi apri il file `server.properties`. Puoi trovare questo file di configurazione nel pannello di amministrazione del server sotto **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Cerca la riga che inizia con `level-seed=`. Qui puoi inserire il seed che vuoi. Per esempio:

```
level-seed=12345
```

Sostituisci `12345` con il tuo codice seed personale. Può essere qualsiasi numero o stringa di testo tu voglia. Dopo aver impostato il seed personalizzato, devi generare un nuovo mondo perché abbia effetto.

Il modo più semplice per farlo è cambiare il `level-name` nelle **Impostazioni** con un nome nuovo e non usato, per esempio `world1`. Così Minecraft crea una nuova cartella mondo con il tuo seed.

Se vuoi sapere di più su come ricreare un mondo esistente, puoi dare un’occhiata alla nostra guida [Ricreare il Mondo](minecraft-worlds.md) con istruzioni dettagliate. Infine, riavvia il server. Minecraft genererà un nuovo mondo usando il tuo seed personalizzato.

## Conclusione

Con questi passaggi hai impostato con successo un nuovo seed per il tuo nuovo mondo. Riavvia il server, esplora il tuo mondo appena generato e goditi la tua avventura Minecraft unica. Per altre domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />