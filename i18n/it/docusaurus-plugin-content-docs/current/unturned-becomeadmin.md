---
id: unturned-becomeadmin
title: "Unturned: Diventa admin del server"
description: "Scopri come assegnare i permessi di amministratore per il pieno controllo del server e una gestione in-game potenziata → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Assegnare i permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi necessari per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Preparativi

Per poter aggiungere admin su un server, bisogna modificare un file di configurazione. Per evitare problemi nell’applicazione delle modifiche, assicurati che il server sia spento prima di procedere!

Inoltre, serve lo Steam ID (64) del giocatore, così il server può identificarlo correttamente. Puoi usare questo [Tool](https://steamidfinder.com/) come esempio.  
Basta inserire il nome del giocatore per ottenere l’informazione necessaria.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Aprire i file di configurazione

Ci sono due modi per modificare i file sul server.  
Uno è tramite [Accesso via FTP](gameserver-ftpaccess.md).

L’altro è usare il Config Editor direttamente nell’interfaccia web.  
Qui useremo l’editor integrato nell’interfaccia web. Per farlo, apri la voce di menu "Configs" nella sidebar sinistra del server, sotto la scheda "Settings".  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

Il sistema caricherà tutti i file di configurazione disponibili e li elencherà. Serve un po’ di pazienza, di solito ci vogliono pochi secondi. Quando tutti i file sono caricati, devi modificare il file "commands.dat". Clicca sul pulsante blu "Open file" per aprirlo nell’editor web.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Aggiungere admin

Ora puoi nominare admin o owner nel file di configurazione. Ricorda che il rank owner può essere assegnato solo a un giocatore!

Per assegnare il rank owner, aggiungi una nuova riga così:

`owner Steam64IDReplacedHere //<-- Sostituisci con il tuo Steam64-ID`

Per aggiungere un amministratore, sostituisci semplicemente "owner" con "admin":

`admin Steam64IDReplacedHere //<-- Sostituisci con il tuo Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Dopo aver assegnato tutti i rank nel file di configurazione, salva cliccando su "Save". Ora puoi riavviare il server e tutti i giocatori inseriti nel file riceveranno automaticamente il loro rank.

## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore! Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂

<InlineVoucher />