---
id: 7d2d-crossplay
title: "7 Days to Die: Attiva il Crossplay per Giocatori Console e PC"
description: "Scopri come configurare il tuo server 7 Days to Die per supportare il crossplay tra giocatori PC e console → Scopri di più ora"
sidebar_label: Attiva il Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Con le versioni più recenti di **7 Days to Die**, il crossplay permette ai giocatori da **PC e piattaforme console supportate** di unirsi allo stesso server. Questo consente alle community di giocare insieme indipendentemente dalla piattaforma che usano.

Per rendere possibile il crossplay, alcune impostazioni devono essere configurate sul server. Queste impostazioni assicurano che il server sia compatibile con le connessioni console e correttamente registrato tramite Epic Online Services.

<InlineVoucher />



## Configurazione

La configurazione del crossplay si trova nel file `serverconfig-zap.xml`. Per modificare questo file, apri la tua **amministrazione del gameserver** e vai su **Configs**. Trova e apri il file di configurazione `serverconfig-zap.xml`.

All’interno del file, assicurati che i seguenti valori di configurazione siano impostati correttamente:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Questi parametri sono necessari per la compatibilità crossplay. Il `ServerMaxPlayerCount` non deve superare **8 giocatori**, dato che il crossplay console supporta attualmente un massimo di otto partecipanti. L’opzione `ServerAllowCrossplay` deve essere attivata per permettere ai giocatori console di entrare nel server.

Inoltre, `EACEnabled` deve rimanere attivo perché il crossplay si basa su **Epic Online Services e Easy Anti-Cheat** per autenticazione e matchmaking. Il valore `IgnoreEOSSanctions` deve restare impostato su `false` affinché le restrizioni EOS vengano applicate correttamente nelle sessioni cross-platform.

Dopo aver modificato i valori di configurazione, salva il file e **riavvia il server** per applicare le nuove impostazioni.



## Note importanti

Il supporto al crossplay richiede che tutti i giocatori usino una versione del gioco compatibile. Server con mod non supportate o configurazioni pesantemente personalizzate potrebbero impedire ai giocatori console di connettersi. Se i giocatori console non riescono a trovare o entrare nel server, verifica che le impostazioni crossplay siano corrette e che il server stia girando sull’ultima versione supportata.



## Conclusione

Congratulazioni! Hai configurato con successo il tuo **server 7 Days to Die per il crossplay**, permettendo a giocatori PC e console di unirsi allo stesso mondo. Con le impostazioni server corrette, la tua community può giocare insieme su piattaforme diverse.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />