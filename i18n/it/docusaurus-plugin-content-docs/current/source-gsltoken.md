---
id: source-gsltoken
title: Uso dei token di login per server di gioco
description: "Scopri come i token GSL proteggono i server di gioco Steam collegando i ban agli account, garantendo un hosting server più sicuro e conforme → Scopri di più ora"
sidebar_label: Token GSL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ Cos’è un token GSL?

I Gameserver Login Tokens (GSLT) sono una procedura implementata da Steam come misura di sicurezza. Per far girare server di gioco di certi titoli Steam (principalmente giochi Source) è necessario generare un token.

<InlineVoucher />

## ❓ A cosa serve un token GSL?

In passato Valve ha cambiato alcune regole per l’hosting di server di gioco. Non tutti gli operatori di server hanno rispettato queste regole. Di conseguenza, gli indirizzi IP dei server venivano bannati.

Questo metodo però non era efficace, perché bastava cambiare IP per aggirare il ban, e creava grossi problemi ai provider di server. Infatti, bannando un IP, spesso venivano colpiti anche altri clienti.

Per questo è stato introdotto questo sistema, che invece banna il token e blocca l’account Steam collegato, impedendo ulteriori operazioni di server di gioco con quell’account.

## ➕ Crea il token

Per creare un token di login per server di gioco devi essere loggato sul sito Steam. Il token si crea qui: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

Quando arrivi lì, ti verrà chiesto l’App ID e una nota (memo), cioè un nome a tua scelta da usare come promemoria. L’App ID dipende dal gioco. Qui sotto trovi gli App ID più importanti:

|              Gioco               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |

Il token GSL si può inserire nell’interfaccia sotto le impostazioni.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

Una volta fatto questo e riavviato il server, il server apparirà anche nella lista pubblica.

## ⁉ Domande frequenti

**Quali sono i requisiti per un token GSL?**

L’account Steam non deve avere restrizioni come ban dalla community. Inoltre, deve avere un numero di telefono valido registrato.

**Posso usare un token GSL per più server?**

Serve un token diverso per ogni server di gioco.

**C’è qualcosa che può far bannare il mio token GSL?**

Soprattutto per i server CS:GO, ci sono plugin vietati. Non è stata pubblicata una lista ufficiale, ma sono vietati plugin che modificano inventari giocatori (skin armi), rank o simili.

**Cosa succede se il mio token GSL viene bannato?**

Se un token viene bannato, anche l’account e tutti i token associati vengono bannati. Questo significa che il server non sarà più accessibile pubblicamente e l’account non potrà più essere usato per gestire altri server. Però l’account Steam può ancora essere usato per giocare normalmente. Non ci sono altre penalità previste.

<InlineVoucher />