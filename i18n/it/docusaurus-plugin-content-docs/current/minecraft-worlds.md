---
id: minecraft-worlds
title: "Minecraft: Gestisci i salvataggi dei mondi"
description: "Scopri come gestire, convertire e fare il backup dei mondi Minecraft tra piattaforme per mantenere i tuoi progressi di gioco al sicuro e senza intoppi → Scopri di più ora"
sidebar_label: Gestisci Mondi
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Minecraft salva i progressi di gioco come **mondi**, ognuno dei quali è un salvataggio indipendente. In questa guida vedremo come gestire i mondi sul tuo server Minecraft, inclusa la conversione tra piattaforme, la rigenerazione, il backup dei mondi locali e del server, e l’upload dei mondi sul server.

<InlineVoucher />

## Preparazione

Per gestire i tuoi mondi, devi prima accedere al tuo server Minecraft tramite FTP. Se non sai come usare FTP, dai un’occhiata alla nostra guida [Accesso via FTP](gameserver-ftpaccess.md).

## Differenze tra Piattaforme

Una differenza chiave tra server vanilla e piattaforme server è che i server vanilla combinano il mondo normale, il Nether e l’End in un unico salvataggio.

Al contrario, piattaforme come Spigot, PaperMC e Bukkit separano ogni dimensione in un salvataggio mondo distinto. Dai un’occhiata alla tabella qui sotto che confronta come un mondo di esempio chiamato **zapdocs** viene gestito da entrambi i tipi di server.

| Dimensione Mondo | Server Vanilla (Combinato) | Piattaforme Server (Individuale) |
| ---------------- | -------------------------- | -------------------------------- |
| Normale/Overworld| zapdocs                    | zapdocs                          |
| Nether           | zapdocs                    | zapdocs_nether                   |
| The End          | zapdocs                    | zapdocs_the_end                  |

## Conversione dei Mondi

Quando passi da un server vanilla a una piattaforma server (o viceversa), potresti voler mantenere il tuo salvataggio mondo. A causa delle differenze sopra, dovrai modificare la struttura delle cartelle per estrarre o unire i mondi individuali del Nether e dell’End a seconda dell’operazione.

:::info
Questa operazione è necessaria solo se stai passando da vanilla a piattaforme server o viceversa e vuoi mantenere un mondo esistente. Se ti sposti solo tra vanilla o tra piattaforme server, non serve convertire nulla.
:::

:::note
Assicurati di spegnere il server prima di procedere per evitare conflitti o rollback.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Converti da Vanilla" default>

Per convertire un mondo da vanilla a formato piattaforma server, devi estrarre alcune cartelle per creare nuovi mondi individuali per ogni dimensione. Ovviamente, si presume che tu stia spostando tutti i mondi su un nuovo server che usa una piattaforma come Spigot, PaperMC o Bukkit.

Accedi al server via FTP e vai nel percorso `../vanilla/[tuo_mondo]` per accedere al salvataggio che vuoi convertire. Trova le cartelle **DIM1** e **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

La cartella **DIM1** contiene i dati dell’End, mentre **DIM-1** quelli del Nether.

Devi spostare ogni cartella in una nuova cartella mondo separata, così:
- Per il Nether, crea una nuova cartella `[tuo_mondo]_nether` nella root. Sposta la cartella **DIM-1** dentro questa nuova cartella.
- Per l’End, crea una nuova cartella `[tuo_mondo]_the_end` nella root. Sposta la cartella **DIM1** dentro questa nuova cartella.

:::info
Potrebbe essere necessario sovrascrivere le cartelle `DIM`, ma è normale perché le piattaforme server generano subito tutte le dimensioni.
:::

In questo esempio, il mondo si chiama `world`, quindi sono state create le cartelle `world_nether` e `world_the_end` nella root, con le rispettive cartelle `DIM` spostate dentro.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Ora i tre mondi individuali sono pronti per essere usati su piattaforme server.

</TabItem>

<TabItem value="converting-to-vanilla" label="Converti a Vanilla">

Per convertire un mondo da piattaforma server a vanilla, il processo è praticamente lo stesso ma al contrario. Devi estrarre i dati dai mondi individuali del Nether e dell’End per unirli in un unico mondo. Ovviamente, si presume che tu stia spostando il mondo combinato su un server vanilla.

Accedi al server via FTP e vai nella root. Trova le tre cartelle individuali: `[tuo_mondo]`, `[tuo_mondo]_nether` e `[tuo_mondo]_the_end`, sostituendo `[tuo_mondo]` col nome del mondo.

Apri la cartella `[tuo_mondo]_nether` e sposta la cartella `DIM-1` dentro la cartella principale `[tuo_mondo]`. Nell’esempio, il mondo si chiama `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Ripeti la stessa cosa per la cartella `[tuo_mondo]_the_end` spostando `DIM1` dentro la cartella principale `[tuo_mondo]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Ora il mondo combinato è pronto per essere usato su un server vanilla.

</TabItem>
</Tabs>

## Generazione dei Mondi

Generare mondi è semplice: puoi creare un mondo nuovo di zecca o rigenerare quello attuale da zero. Minecraft usa un sistema di **seed**: ogni mondo ha un seed unico, quindi con il seed puoi rigenerare esattamente lo stesso mondo.

<Tabs>
<TabItem value="generating-new" label="Genera nuovo mondo" default>

Per generare un mondo nuovo, spegni il server e connettiti via FTP. Apri il file di configurazione `server.properties`, tramite la sezione **Configs** nel pannello web del server o via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Ora per generare un mondo nuovo puoi:
- Tramite FTP, trova la cartella del mondo con lo stesso nome del parametro `level-name` nel file di config e cancellala.
- Oppure modifica il parametro `level-name` nel file di config con un nome diverso e salva.

Se vuoi tenere il vecchio salvataggio, ti consigliamo la seconda opzione così il mondo rimane sul server ma “inattivo”.

Riavvia il server: noterà che il mondo con il nome `level-name` manca e genererà un mondo nuovo con un seed nuovo.

</TabItem>

<TabItem value="regenerating-current" label="Rigenera mondo attuale">

Per rigenerare il mondo attuale devi prima prendere nota del seed. Puoi farlo dalla sezione **Console** nel pannello web o direttamente in-game (serve essere OP).

Esegui il comando `/seed` in console o in-game: ti restituirà il valore del **seed** del mondo attuale. Annotalo.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Ora modifica il parametro `level-seed` nel file `server.properties` con il seed annotato, tramite la sezione **Configs** o via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Assicurati di spegnere il server prima per salvare correttamente il file.
:::

Salva il file e connettiti via FTP.

Per rigenerare il mondo puoi:
- Tramite FTP, cancella la cartella del mondo con lo stesso nome del parametro `level-name`.
- Oppure modifica il parametro `level-name` con un nome diverso e salva.

Se vuoi tenere il vecchio salvataggio, ti consigliamo la seconda opzione così il mondo rimane ma “inattivo”.

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Riavvia il server: noterà che il mondo con il nome `level-name` manca e rigenererà il mondo attuale usando il seed impostato in `level-seed`.

</TabItem>
</Tabs>

## Backup dei Salvataggi

### Salvataggi Locali

I salvataggi locali sono quelli creati giocando in single player. Li trovi nella cartella AppData di Windows, precisamente in:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Puoi accedere facilmente a questa cartella premendo `CTRL` + `R` e inserendo `%appdata%/.minecraft/saves/` nella finestra di esecuzione. Premi **OK** e sei dentro.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

Qui vedrai tutti i salvataggi locali in un unico posto.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Accesso ai Salvataggi via FTP

Fare il backup del salvataggio dal server è facile. Dopo esserti connesso via FTP, vai nella cartella root della piattaforma server che usi. I salvataggi sono lì, con il mondo di default chiamato `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Backup Automatico

Offriamo anche un’opzione per fare backup automatici del mondo (e dei file di configurazione) direttamente dal nostro pannello web. Vai nella sezione **Tools->Backups** del pannello del tuo server. Qui puoi programmare backup automatici con varie opzioni. Ti diamo 10GB di spazio gratuito per i backup. Per maggiori info, dai un’occhiata alla nostra guida dedicata [Backups](gameserver-backups.md).

## Upload del Salvataggio

Come per il backup, caricare un salvataggio è semplice. Connettiti via FTP e vai nella root della piattaforma server che usi.

:::info Mondi Vanilla & Piattaforme Server
Ricorda che vanilla e piattaforme server salvano i mondi in formati leggermente diversi.

Se stai spostando un salvataggio da vanilla a piattaforme come PaperMC o viceversa, consulta la sezione conversione mondi di questa guida.
:::

Trascina e rilascia il tuo salvataggio nella cartella root tramite FTP e verrà caricato sul server.

:::tip
Ti conviene copiare il nome della cartella del salvataggio caricato, ti servirà per attivarlo nella sezione successiva.
:::

## Attivare il Salvataggio

Per usare un salvataggio specifico devi modificare il file `server.properties`, in particolare il parametro `level-name`.

Puoi farlo tramite la sezione **Configs** nel pannello web o via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Trova il parametro `level-name` e impostalo col nome della cartella del tuo salvataggio. Se usi una piattaforma server, usa il nome della cartella principale, non quelle `_nether` o `_the_end`.





## Conclusione

Ora sai come gestire i tuoi mondi Minecraft con sicurezza. Dalla conversione tra vanilla e piattaforme server, alla generazione di nuovi mondi, rigenerazione usando i seed, backup affidabili, upload di mondi personalizzati e attivazione sul server. Con queste conoscenze, gestirai i tuoi mondi senza stress e terrai le tue avventure sempre al sicuro e organizzate.

Per qualsiasi domanda o aiuto, il nostro supporto è sempre disponibile ogni giorno per darti una mano! 🙂

<InlineVoucher />