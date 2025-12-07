---
id: pathoftitans-becomeadmin
title: Diventa admin
description: "Scopri come assegnare e gestire i permessi di amministratore per il pieno controllo del tuo server di gioco → Scopri di più ora"
sidebar_label: Diventa admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
L’assegnazione dei permessi di amministratore ti permette una gestione semplice e completa con il pieno controllo del tuo server. Come admin, puoi usare tutte le opzioni e funzioni disponibili direttamente nel gioco. Qui sotto trovi tutti i passaggi per assegnare i permessi di amministratore al tuo server.  
<InlineVoucher />

## Preparazione

La configurazione dei permessi admin avviene tramite i file di configurazione del tuo server. Per farlo, vai nel pannello del tuo game server su **Configs** e apri il file di configurazione Game.ini.



## Configurazione

Nella sezione [/Script/PathOfTitans.IGameSession], devi inserire l’Alderon Games ID (AGID) dell’admin. La riga da aggiungere è `ServerAdmins=` seguita dall’AGID. Se vuoi aggiungere più admin, crea una riga nuova per ognuno. Se vuoi assegnare i permessi admin a tre giocatori, la configurazione sarà così:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Admin Record
ServerAdmins=XXX-XXX-XXX # 2. Admin Record
ServerAdmins=XXX-XXX-XXX # 3. Admin Record
```

Clicca su Salva e poi riavvia il server. I permessi admin sono ora attivi. Una volta che hai i diritti da admin, puoi nominare altri giocatori admin tramite comandi chat o revocare i loro permessi. Queste funzioni sono disponibili finché il server è attivo. Puoi trovare più info sui comandi nella [Wiki ufficiale su GitHub](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusione

Congratulazioni, hai configurato con successo i permessi di amministratore. Per domande o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂 

<InlineVoucher />