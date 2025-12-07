---
id: minecraft-commands
title: "Minecraft: Comandi Generali per il Server"
description: "Scopri come usare i comandi di Minecraft per migliorare il gameplay e gestire le funzioni in modo efficace → Scopri di più ora"
sidebar_label: Comandi generali
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### Cosa sono i comandi?

I comandi in Minecraft possono essere usati per eseguire funzioni extra o speciali. Minecraft include già oltre **100 comandi** senza alcuna modifica, che possono essere usati per attivare, gestire o eseguire una vasta gamma di funzioni.

In questo articolo della nostra documentazione approfondiremo i comandi più importanti, quelli usati e necessari molto spesso.
Se un comando non è elencato qui, la [Minecraft-Wiki ufficiale](https://minecraft-de.gamepedia.com/) è molto utile, perché ogni parte (inclusi tutti i comandi) è spiegata nel dettaglio.

<InlineVoucher />

### Uso

Ogni comando inizia sempre con una "/". Quindi, se vuoi usare un comando, devi aprire la chat in gioco e digitare prima la "/", poi puoi scrivere il comando vero e proprio. Premendo il tasto TAB viene mostrata un’anteprima di tutti i comandi disponibili. Così, i comandi possono essere completati rapidamente e facilmente in automatico, come succede nelle ricerche su internet.

:::info
Se esegui i comandi tramite console, la "/" non serve ed è da togliere!

Questo carattere serve solo per distinguere tra un messaggio normale in chat e un comando in gioco.
:::

### Permessi / Diritti

Per poter usare i comandi servono i permessi necessari. In Minecraft Vanilla o Forge non esiste un vero sistema di permessi come nei plugin Spigot. Qui si usa solo il sistema di livelli dei diritti OP. Qui trovi un tutorial sul sistema OP: [Permessi OP](minecraft-addop.md)

Se è stato installato un sistema di permessi e vuoi assegnare diritti a certi comandi Minecraft, i permessi corrispondenti possono essere assegnati come descritto qui sotto.

:::info
La sintassi dei permessi per ogni comando è sempre la stessa e può essere adattata di conseguenza.

Per esempio, per assegnare i permessi al comando Locate, devi impostare: ``minecraft.command.locate``
:::



## Comandi

### /tp

Con il comando **/tp** gli admin possono teletrasportarsi ad altri giocatori o teletrasportare un giocatore verso un altro giocatore desiderato.
Il comando può anche essere usato per teletrasportare mob o per teletrasportarsi inserendo coordinate. Ulteriori dettagli qui sotto.

**Esempi:**

``/tp PlayerA``

Teletrasporta chi esegue il comando verso un altro giocatore.

``/tp PlayerA PlayerB``

Teletrasporta *PlayerA* verso *PlayerB*. Non importa chi esegue il comando, i giocatori specificati vengono teletrasportati.
Se chi esegue il comando è *PlayerB*, *PlayerA* verrebbe teletrasportato da lui stesso.

``/tp -100 75 985``

Chi esegue il comando viene teletrasportato alle coordinate specificate.
Se davanti alle coordinate viene specificato un giocatore (``/tp PlayerA -100 75 985``), il comando teletrasporterà quel giocatore invece di chi esegue il comando.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Ti teletrasporta alla mucca più vicina entro un raggio di 10 blocchi.
``@s`` può essere sostituito anche da un giocatore come *PlayerA*, che verrebbe teletrasportato.

### /locate

Con il comando **/locate** puoi ottenere le coordinate della struttura che cerchi, come un villaggio di NPC.

**Esempi:**

``/locate fortress``

Trova e mostra la posizione della fortezza del Nether più vicina quando sei nel Nether.

``/locate village``

Trova e mostra la posizione come per le fortezze del Nether, ma in questo caso per un villaggio di NPC.

### /worldborder

Con questo comando puoi creare un confine del mondo nella mappa attuale. Questo impedisce ai giocatori di esplorare oltre il limite specificato.

**Esempi:**

``/worldborder center 0 0``

Imposta il centro del mondo alle coordinate 0;0, da cui viene calcolato e impostato il raggio.

``/worldborder set 16000``

Imposta il limite a 16.000x16.000 blocchi. Quindi un raggio di 8.000 blocchi in ogni direzione.

### /effect

Permette di dare effetti pozione normali ai giocatori (o anche entità).
Alcuni effetti si ottengono solo tramite comandi, come l’effetto fortuna, che non ha ancora una funzione normale.

:::info
Il comando è cambiato nel corso delle versioni ed è stato ampliato e modificato.

Gli esempi mostrati qui sotto sono della versione più recente e potrebbero apparire diversi nelle versioni più vecchie!
:::

**Esempi:**

``/effect give PlayerA minecraft:speed``

Dà al giocatore *PlayerA* l’effetto velocità di livello **1**.

### /gamerule

Questo comando serve per cambiare impostazioni speciali nel mondo o per attivare/disattivare funzioni particolari.
Per esempio, come nell’esempio sotto, si può attivare che i giocatori mantengano l’inventario alla morte.

**Esempi:**

``/gamerule keepInventory true``

Impostazione del mondo che permette ai giocatori di mantenere l’inventario (inclusa l’esperienza) alla morte.

``/gamerule mobGriefing false``

Definisce se i mob come i Creeper possono danneggiare il mondo o no.

### /save-all

Il server salva il mondo ogni 5 minuti scrivendo i dati su disco.
Con questo comando il mondo viene salvato immediatamente e il conto alla rovescia per il salvataggio automatico si resetta a 5 minuti.

### /tps

Questo comando mostra i TPS (tick per secondo) per Spigot e Paper Spigot.
I TPS indicano le prestazioni del server. Il massimo e migliore valore è 20.
I TPS mostrano gli ultimi 60 secondi, i due valori seguenti sono la media degli ultimi 5 e 15 minuti.

### /ban

Con questo comando puoi escludere un giocatore dal server, così non potrà più entrare in nessun caso. Il ban è basato sull’UUID del giocatore.

:::info
Su server con modalità online disattivata, i giocatori possono cambiare nome e rientrare. In questo caso, un ban IP tramite plugin è la soluzione migliore.
:::

**Esempi:**

``/ban PlayerA``

Il giocatore *PlayerA* viene bannato dal server.

``/ban @a``

Con questo comando tutti i giocatori attualmente connessi vengono bannati. Gli admin con permessi OP non sono interessati e restano sul server.

### /pardon

Con questo comando puoi togliere un ban (come descritto sopra) e permettere al giocatore di rientrare nel server.

**Esempi:**

``/pardon PlayerA``

Il giocatore *PlayerA* viene rimosso dalla lista dei bannati e può rientrare.

### /kick

Questo comando chiude la connessione tra server e giocatore specificato. Il giocatore viene forzato a uscire ma può riconnettersi.

**Esempi:**

``/kick PlayerA``

Espelle il giocatore *PlayerA* dal server con il messaggio "Kicked by an operator".

``/kick PlayerA Reason``

Espelle il giocatore *PlayerA* dal server con il messaggio "Reason".

<InlineVoucher />