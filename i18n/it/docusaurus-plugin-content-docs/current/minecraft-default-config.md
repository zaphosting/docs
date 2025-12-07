---
id: minecraft-default-config
title: "Minecraft: Impostazioni di Configurazione Server"
description: "Scopri come ottimizzare le impostazioni del server Minecraft per prestazioni e stabilità, personalizzando l’esperienza di gioco → Scopri di più ora"
sidebar_label: Config Server
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cosa posso configurare in questo file?

Minecraft include già una piccola configurazione chiamata *server.properties*.  
Qui si può configurare il server a livello base. Descriviamo cosa fanno i singoli parametri e cosa considerare quando si apportano modifiche. Alcune impostazioni vanno maneggiate **con cautela**, perché possono influenzare drasticamente le prestazioni del server, causando anche instabilità.

<InlineVoucher />

### view-distance

Con questa impostazione si definisce la *visibilità massima* che il server invia. Indipendentemente da cosa è impostato nel client, il server non invierà mai dati chunk oltre questo valore. Puoi abbassare il valore per proteggere le prestazioni del server. L’esperienza di gioco non ne risente nemmeno con un valore di 5. Valori inferiori a 5 non sono consigliati e in rari casi possono causare problemi.  
**IMPORTANTE:** Il valore non dovrebbe mai essere aumentato oltre il necessario, perché può causare gravi problemi di performance.

:::info
Questa impostazione si applica solo a server Vanilla o Forge.

Per Bukkit, Spigot e Paper Spigot, il valore va impostato nelle rispettive configurazioni.
:::

### max-build-height

Determina fino a quale altezza (coordinata Y) si può costruire o demolire. Valori superiori a 256 **non sono permessi** e vengono ignorati dal server. Utile se vuoi limitare l’altezza massima.

### server-ip

Se hai prenotato più IP per il tuo root o VPS, qui puoi specificare quale IP usare. Se hai un solo IP, lascia il campo vuoto – vale lo stesso per un game server.

### level-seed

Di default, il generatore del mondo crea sempre un [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) casuale, generando un mondo random.  
Puoi però definire un seed personalizzato fatto di **lettere o numeri**, e il server creerà il mondo corrispondente. La lunghezza massima è di **32 caratteri**.

:::info
Esistono generatori di seed dove puoi configurare il mondo secondo le tue idee.

[Questo](https://minecraft.tools/en/custom.php) è uno dei migliori, praticamente fa tutto.
:::

### gamemode

Qui imposti la modalità di gioco predefinita sul server. Viene assegnata a ogni giocatore al primo accesso e può essere cambiata in qualsiasi momento con il comando [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Se non conosci gli ID delle modalità, eccoli:

| valore | Modalità di gioco |
|--|--|
| 0 | Sopravvivenza (Survival) |
| 1 | Creativa (Creative) |
| 2 | Avventura (Adventure) |
| 3 | Spettatore (Spectator) |

### server-port

Puoi assegnare una porta fissa al server per l’accesso tramite IP. Se vuoi far girare più server sullo stesso host, ogni server deve avere una porta diversa. Di solito questa opzione resta invariata, serve soprattutto per reti BungeeCord.

### enable-command-block

Abilita i [command block](https://minecraft.fandom.com/wiki/Command_Block) sul server. Se non ti servono, metti *false* perché ci sono modi in cui i command block possono danneggiare o crashare il server.

### allow-nether

Attiva o disattiva il Nether. Se disattivato, non si può più accedere al Nether tramite portale. L’accesso però resta possibile tramite plugin come [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Permette di eseguire comandi da remoto via console usando RCON. Serve una password e una porta dedicata. Ti consigliamo di disattivare RCON per evitare intrusioni non autorizzate.

### op-permission-level

Imposta il livello OP standard assegnato a un nuovo operatore. I livelli e la gestione per singolo giocatore sono spiegati [qui](minecraft-addop.md).

### enable-query

Il query permette a servizi esterni (es. siti web) di ottenere dati come numero di giocatori online o lista precisa dei giocatori. Utile per mostrare dati su un sito o per server list che usano questa funzione per elencare correttamente il server.

### prevent-proxy-connections

Decidi se i giocatori possono connettersi tramite VPN o proxy. Utile per bloccare chi vuole bypassare ban IP. A volte però può bloccare anche connessioni normali per errore.

:::info
Per un controllo più avanzato su VPN/proxy, conviene installare un plugin.

Ce ne sono molti free, ma questo [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) (a pagamento) ci ha convinto di più e protegge il server da attacchi bot.
:::

### generator-settings

Come in single player, il server può creare un mondo con specifiche personalizzate. Simile a un seed, ma il mondo resta comunque random e unico.

Un codice di generazione per una mappa piatta potrebbe essere:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Se vuoi usare un pacchetto texture speciale sul server, inserisci il **link diretto al download**.  
Il pacchetto verrà scaricato e attivato automaticamente dopo la conferma del giocatore.

### player-idle-timeout

I giocatori inattivi possono essere espulsi automaticamente dopo il numero di secondi specificato. Utile se il server è pieno e vuoi liberare slot per giocatori attivi.

### level-name

Il mondo si chiama "world" di default. Qui puoi cambiare il nome. Se cambi nome e il mondo esiste già, ne verrà creato uno nuovo con quel nome. Il vecchio mondo resta nella cartella precedente.

### motd

Messaggio che appare nella lista server, se impostato. Non si vede nella connessione diretta a meno che non ci siano mod speciali nel client. Puoi usare tutti i colori e formattazioni che Minecraft offre.

:::info
Puoi creare facilmente un MOTD con questo [tool](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Se attivo, ogni volta che un giocatore entra nel server viene forzato alla modalità di gioco standard, indipendentemente da quella precedente.

### hardcore

La modalità hardcore fa sì che i giocatori vengano bannati o messi in modalità spettatore alla morte. Se vuoi usarla, **devi creare un mondo nuovo** perché influisce sulla generazione.

### white-list

Attiva la [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), così solo i giocatori in lista possono entrare. I comandi per gestirla sono descritti in quella pagina.

### broadcast-console-to-ops

Decide se gli operatori ricevono notifiche in chat quando vengono eseguiti comandi in gioco.

### pvp

Attiva o disattiva il PVP sul server. Se disattivato, i giocatori non possono farsi danno a vicenda. Non impedisce però azioni indirette come piazzare lava per attaccare.

### spawn-npcs

Se attivo, nei villaggi ci saranno i villager. Se disattivato, nessun villager apparirà sul server. Utile se vuoi limitare il commercio solo ai giocatori e rafforzare l’economia di un server economico.

### generate-structures

Influisce sul generatore del mondo. Decide se strutture come villaggi o templi devono essere generate.

### spawn-animals

Specifica se gli animali devono spawnare sul server. Lista completa degli animali  
[qui](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Se attivo, il server invia dati anonimi a Mojang per miglioramenti e ottimizzazioni. Non influisce sulle prestazioni.

### difficulty

Imposta la difficoltà generale del server. I mob fanno più o meno danno a seconda della difficoltà. Info dettagliate e opzioni [qui](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Definisce la dimensione da cui i dati tra client e server vengono compressi. Un valore basso come il default 256 fa scambiare dati circa 20 volte al secondo. 512 è consigliato per alleggerire il server senza effetti negativi. Non superare mai 1024.

**Usa questa impostazione con cautela, valori sbagliati possono causare problemi gravi ai giocatori e danni irreparabili al mondo.**

### level-type

Determina il tipo di mondo generato. Dopo aver cambiato questa opzione, crea un **mondo nuovo** per evitare tagli indesiderati dove si generano nuovi chunk.

| Valore | Significato |
|--|--|
| DEFAULT | Mondo normale con montagne, valli, villaggi ecc. |
| FLAT | Mondo completamente piatto con solo villaggi |
| LARGEBIOMES | Come il mondo normale, ma con biomi più grandi |
| AMPLIFIED | Simile al mondo normale, ma molto frastagliato e con grandi dislivelli |
| BUFFET | Mondo buffet, dove le impostazioni sono definite da *generator-settings* |

### spawn-monsters

Decide se i mostri devono spawnare sul server. Lista completa dei mob  
[qui](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Regola la durata massima di un tick. Il server assegna vari compiti a ogni tick. Se un tick dura più di 60 secondi (default), il server si ferma automaticamente.

Nei server Forge può essere fastidioso perché i mod richiedono più tempo. In quel caso puoi mettere *-1* per disattivare lo stop automatico.

### max-players

Imposta il numero massimo di slot e quindi di giocatori contemporanei sul server.

### enforce-whitelist

Fa sì che la whitelist applichi subito ogni modifica. Normalmente la whitelist va ricaricata prima di attivarla.

### online-mode

Decidi se i giocatori possono entrare senza account premium. Se il server è pubblico, un giocatore potrebbe prendere il nome di un operatore e ottenere diritti non autorizzati.  
Per evitarlo, installa assolutamente un plugin password su server con supporto plugin come Spigot.

### allow-flight

Disattiva o attiva l’AntiCheat interno di Minecraft relativo al volo. Spesso i cheat client permettono di volare senza permesso.

:::info
Comunque ti consigliamo sempre di installare un AntiCheat tramite plugin!
:::

### function-permission-level

Specifica il livello OP necessario per eseguire comandi. Al livello 4 si possono fare cose come fermare il server o kickare/banare giocatori.

<InlineVoucher />