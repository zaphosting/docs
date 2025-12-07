---
id: rust-plugins
title: "Rust: Installation av plugins"
description: "Upptäck hur du kan förbättra din Rust-server med populära plugins för anpassning och bättre gameplay → Lär dig mer nu"
sidebar_label: Installera Plugins 
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introduktion

Plugins låter dig utöka och anpassa din server ännu mer. Här nedan förklarar vi var du hittar de mest använda pluginsen och hur du installerar dem.

<InlineVoucher />


## Förberedelser

Först och främst behöver du ladda ner de plugins du vill installera på servern. Ett stort utbud av plugins hittar du på [umod.org (tidigare OXIDE)](https://umod.org/plugins). När du laddar ner får du en `.cs`-fil.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installation

När du har laddat ner de plugins du vill ha kan du börja installera dem. Det gör du via **FTP**, så du behöver en FTP-klient för att ladda upp filerna till din server. Om du inte är bekant med FTP och hur det funkar, kolla in vår guide för [FTP-access](gameserver-ftpaccess.md).

Du hittar rätt plugin-mapp här: `/gXXXXXX/rust-oxide/oxide/plugins`. Ladda bara upp dina nedladdade `.cs`-pluginfiler till den här mappen. Det borde se ut ungefär så här efter uppladdning:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Sen är det klart! Installationen är färdig. Du kan sen kolla i live-konsolen om pluginet kompilerades och laddades utan problem. Utdata ska se ut ungefär så här:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Populära Plugins

Letar du fortfarande efter de perfekta pluginsen till din server?

Bläddra igenom vår noga utvalda lista med de mest populära och rekommenderade pluginsen för att förbättra ditt gameplay och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tilläggen som passar ditt projekt.

<SearchableItemList items={items} />


## Avslutning

Om du följt alla stegen borde du nu ha installerat ditt plugin utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />