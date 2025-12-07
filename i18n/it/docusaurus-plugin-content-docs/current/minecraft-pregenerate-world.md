---
id: minecraft-pregenerate-world
title: "Minecraft: Pregenera il Mondo (Chunk)"
description: "Scopri come pregenerare i mondi Minecraft in modo efficiente con plugin o mod per un gameplay più fluido e prestazioni server ottimizzate → Scopri di più ora"
sidebar_label: Pregenera il Mondo (Chunk)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Vuoi generare il tuo mondo in anticipo, in modo rapido, efficiente e sicuro, invece che durante il gameplay? Minecraft non offre questa funzione integrata di default. Però, puoi farlo con plugin o mod appositamente progettati. Come usarli e cosa considerare lo spieghiamo qui sotto.

## Preparazione

Prima di tutto, assicurati che il tuo server supporti plugin o mod. Per usarli, devi avere una di queste varianti Minecraft:

- Minecraft: Forge, Minecraft Fabric (mod)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugin)

Se non stai usando nessuna di queste varianti, puoi cambiare gioco con l'[opzione game switch(gameserver-gameswitch.md)].

## Installazione
Il metodo più comune per pregenerare chunk è usare [Chunky](https://github.com/pop4959/Chunky), disponibile per tante implementazioni server sia come plugin che come mod. Qui ti spieghiamo come generare chunk usando Chunky.

| Variante | Download |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Scarica **Chunky** come plugin o mod e installalo sul tuo server. Se non sai come installare [Plugin](minecraft-pluginuploader.md) o [Mod](minecraft-forge-fabric-add-mods-modpacks), le nostre guide ti aiutano.

## Uso 

Una volta installato **Chunky**, puoi iniziare a generare i chunk con il comando `chunky start`.

Se vuoi mettere in pausa la generazione e riprenderla dopo, usa `chunky pause` e `chunky continue`. Per fermare tutto, usa `chunky cancel`. Puoi eseguire i comandi dalla console live o come operatore direttamente in gioco sul server.

:::warning Carico eccessivo
Superare costantemente i limiti di risorse per troppo tempo può causare una sospensione temporanea. Per evitarlo, genera chunk a un ritmo e quantità bilanciati, così il carico resta accettabile.

Altre info su limiti risorse e soluzioni le trovi nella nostra guida [limiti risorse](gameserver-resourcelimit.md).
:::

## Comandi

Qui trovi tutti i comandi Chunky per generare e gestire i chunk.

#### Gestione Task

| Comando         | Descrizione                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Avvia un nuovo task di generazione chunk dalla selezione attuale |
| chunky pause    | Mette in pausa i task di generazione chunk e salva i progressi |
| chunky continue | Continua i task di generazione chunk attivi o salvati         |
| chunky cancel   | Ferma i task di generazione chunk e annulla i progressi      |

#### Selezione

| Comando                                    | Descrizione                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Imposta il mondo selezionato                                 |
| chunky shape `<shape>`                     | Imposta la forma da generare                                 |
| chunky center [`<x>` `<z>`]                | Imposta il blocco centrale                                   |
| chunky radius `<radius>`                   | Imposta il raggio                                           |
| chunky worldborder                         | Imposta centro e raggio per corrispondere al world border del mondo selezionato |
| chunky spawn                               | Imposta il centro al punto di spawn                          |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Imposta la selezione tramite coordinate degli angoli         |
| chunky pattern `<pattern>`                 | Imposta il pattern di generazione preferito                  |
| chunky slection                            | Mostra la selezione attuale                                  |

#### Varie

| Comando                   | Descrizione                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Attiva/disattiva i messaggi di aggiornamento          |
| chunky quiet `<interval>` | Imposta l’intervallo silenzioso in secondi per i messaggi |
| chunky progress           | Mostra in-game il progresso della pregenerazione per tutti i task |
| chunky reload             | Ricarica la configurazione                             |
| chunky trim               | Cancella i chunk fuori dalla selezione                |

## Conclusione

Seguendo questi passaggi hai installato Chunky e ora puoi pregenerare il tuo mondo (chunk) in anticipo. Complimenti! Se hai seguito tutto correttamente, sei connesso al server. Per domande o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />