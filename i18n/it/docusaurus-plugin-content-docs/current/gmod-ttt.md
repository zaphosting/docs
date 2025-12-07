---
id: gmod-ttt
title: "Garry's Mod: Configurazione"
description: "Scopri come ottimizzare le impostazioni del tuo server TTT per un gameplay migliore e una gestione più fluida delle partite → Scopri di più ora"
sidebar_label: Configurazione Garry's Mod TTT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## La configurazione del tuo server TTT

**Importante: Spegni il server per tutte le modifiche.**

La configurazione base può essere fatta facilmente dal nostro Webinterface, ad esempio nome server, password Rcon e password server.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Quando hai configurato il server come vuoi, possiamo procedere con la configurazione delle impostazioni specifiche della modalità TTT. Puoi farlo tramite il nostro Webinterface oppure modificando il file via FTP.

Trovi l’Editor di Configurazione nel nostro Webinterface nella scheda "Configs", apri lì il file server.cfg.
Nel nostro Webinterface trovi questa funzione sotto "Configs", dove apri il file server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Qui trovi i valori per modificare il gameplay sul tuo server TTT, le variabili più importanti spiegate velocemente:

<InlineVoucher />

## Round e cambio mappa

ttt_round_limit  
:::info  
Numero massimo di round prima che la mappa venga cambiata. (Default: 6)  
:::

ttt_time_limit_minutes  
:::info  
Numero massimo di minuti prima che la mappa venga cambiata o venga avviata una votazione. (Default: 75)  
:::

ttt_postround_dm  
:::info  
Abilita i danni dopo la fine del round. Le uccisioni non vengono conteggiate per il punteggio, quindi è un free-for-all. (Default: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Permette anche ai giocatori non traditori di bloccare i cadaveri. (Default: 1)  
:::

## Gameplay

ttt_traitor_pct  
:::info  
Percentuale dei giocatori totali che saranno traditori. Il numero di giocatori viene moltiplicato per questo valore e poi arrotondato per difetto. Se il risultato è meno di 1 o più del numero di giocatori, viene limitato a quei valori. (Default: 0.25)  
:::

ttt_traitor_max  
:::info  
Numero massimo di traditori. (Default: 32)  
:::

ttt_detective_pct  
:::info  
Percentuale dei giocatori totali che saranno detective. (Default: 0.13)  
:::

ttt_detective_max  
:::info  
Numero massimo di detective. Può essere usato per limitare o disabilitare i detective. (Default: 32)  
:::

ttt_detective_min_players  
:::info  
Numero minimo di giocatori prima che entrino in gioco i detective. (Default: 5)  
:::

ttt_detective_karma_min  
:::info  
Se il Karma di un giocatore scende sotto questo valore, le sue possibilità di essere scelto come detective diminuiscono. (Default: 600)  
:::

ttt_minimum_players  
:::info  
Numero di giocatori necessari prima che inizi il round. Viene controllato prima della fase di preparazione e prima dell’inizio del round vero e proprio. (Default: 2)  
:::

## DNA

ttt_killer_dna_range  
:::info  
Distanza massima entro cui un campione di DNA del killer viene piantato sul cadavere della vittima. (Default: 300)  
:::

## Karma

ttt_karma  
:::info  
Abilita il sistema karma. I giocatori iniziano con un certo karma e lo perdono quando danneggiano/uccidono "compagni" (cioè innocenti se sono innocenti, traditori se sono traditori). La quantità persa dipende dal karma della persona che hai ferito o ucciso. (Default: 1)  
:::

ttt_karma_strict  
:::info  
Se attivo, la penalità ai danni aumenta più rapidamente man mano che il karma scende. Se disattivato, la penalità è molto bassa finché il karma resta sopra 800. (Default: 1)  
:::

ttt_karma_starting  
:::info  
Karma con cui i giocatori iniziano. Se vuoi che i giocatori possano "guadagnare" un bonus ai danni, puoi impostarlo a circa 850. Giocare round puliti li farà salire fino a 1000, facendo un po’ più danni rispetto a un nuovo giocatore. (Default: 1000)  
:::

ttt_karma_max  
:::info  
Karma massimo che un giocatore può avere. Aumentarlo sopra 1000 non significa che chi ha 1100 karma avrà un bonus ai danni, ma solo che avrà un "buffer" prima di ricevere una penalità. (Default: 1000)  
:::

ttt_karma_ratio  
:::info  
Rapporto del danno usato per calcolare quanto karma della vittima viene sottratto all’attaccante. (Default: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Tutte le penalità karma si basano sul danno inflitto. La penalità per uccisione è una quantità extra di "danno" inflitto quando uccidi qualcuno. Se fosse 100, e spari in testa a qualcuno con un fucile, ti penalizzerebbe come se avessi inflitto 200 danni. (Default: 15)  
:::

ttt_karma_round_increment  
:::info  
Quantità base con cui il karma di tutti viene "curato" alla fine di ogni round. (Default: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Se un giocatore non ha ferito o ucciso un compagno in quel round, riceve un bonus extra di 30 karma. (Default: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Come ttt_karma_ratio, ma per il premio karma per aver danneggiato un traditore. Di default danneggiare un traditore viene premiato con circa 1/4 della penalità che avresti se fosse un innocente con karma pieno. (Default: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonus karma per aver ucciso un traditore. (Default: 40)  
:::

ttt_karma_low_autokick  
:::info  
Espelle automaticamente i giocatori con karma basso alla fine del round. (Default: 1)  
:::

ttt_karma_low_amount  
:::info  
Livello di karma sotto il quale i giocatori vengono espulsi a fine round. (Default: 300)  
:::

ttt_karma_low_ban  
:::info  
Se low_autokick è attivo, banna anche i giocatori se questa opzione è attiva. Nessun effetto se autokick è disattivato. (Default: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Minuti di ban per i giocatori. (Default: 60)  
:::

ttt_karma_persist  
:::info  
Salva il karma di un giocatore in modo persistente alla fine del round o se si disconnette. Al ritorno verrà caricato. Questo significa che il karma persiste anche al cambio mappa. (Default: 1)  
:::

ttt_karma_clean_half  
:::info  
Quando il karma di un giocatore è sopra il livello iniziale (cioè se il karma max è stato configurato più alto), tutti gli incrementi di karma vengono ridotti in base a quanto il karma è sopra quel livello. Quindi sale più lentamente quanto più è alto. (Default: 0.25)  
:::

Quando hai modificato tutte le variabili come vuoi, il prossimo passo è salvare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Dopodiché puoi avviare il tuo server!

<InlineVoucher />