---
id: cs16-plugins
title: "CS 1.6: Installera plugins på din egen server"
description: "Upptäck hur du förbättrar din Counter-Strike 1.6-server med AMXmodX och Metamod för avancerad anpassning och administration → Lär dig mer nu"
sidebar_label: Installera Plugins
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## Introduktion

**AMXmodX** och **Metamod** behövs för att använda plugins på en Counter-Strike 1.6-server. Det är två Half Life-tillägg som låter dig anpassa servern ännu mer än vanligt. Det inkluderar till exempel användning av plugins och en utökad administration av din server.

<InlineVoucher />

## Installation av AMXmodX / Metamod

### Förberedelse

Först och främst behövs själva tilläggen. De kan laddas ner från [amxmodx.org](https://amxmodx.org/downloads-new.php). Använd alltid de senaste versionerna (**stable**) för att de ska vara fullt fungerande och kompatibla.

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

Du behöver Linux-paketen **AMX Mod X Base, Counter-Strike Addon och Metamod**. De kan laddas ner därifrån. Efter nedladdning ska du ha tre packade filer. Packa upp dem på din dator. Då får du en **addons**-mapp som innehåller en **amxmodx** och en **metamod**-mapp:

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)



### Installation

När ovanstående steg är klara är det dags för själva installationen. Filerna måste laddas upp till din server via FTP. Du behöver en FTP-klient för att kunna ladda upp filer till din server. Om du inte vet vad FTP är eller hur det funkar, kolla in vår guide: [Access via FTP](gameserver-ftpaccess.md)

Nu ska **addons**-mappen laddas upp till serverns root-katalog. Filstrukturen i mappen ska då se ut så här:



![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)



Setupen av **AMXmodX** och **Metamod** är nu klar. Du kan ansluta till din server i spelet och använda kommandot ``amxx version`` i konsolen för att kolla om AMX installerades korrekt. Svaret ska se ut ungefär så här:

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

Om meddelandet **Unknown command** visas så gick något fel under installationen.



## Installation av plugins

### Förberedelse

När setupen av **AMXmodX** och **Metamod** är klar och fungerar kan du börja installera plugins. Först måste du ladda ner de plugins du vill ha på servern. Ett stort utbud av plugins finns på [amxmodx.org](https://www.amxmodx.org/compiler.php). Där har massor av plugins publicerats genom åren och fler tillkommer regelbundet. Du behöver **.amxx**-filen för respektive plugin.

### Installation

När du laddat ner de plugins du vill ha kan själva installationen börja. Plugins installeras också via FTP. Plugin-filerna ska laddas upp till plugins-mappen under ``../addons/amx``.

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)


Nästa gång servern startar ska de uppladdade pluginsen laddas automatiskt.



## Populära Plugins

Letar du fortfarande efter de perfekta pluginsen till din server?
Bläddra igenom vår noggrant utvalda lista med de mest populära och rekommenderade pluginsen för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tilläggen som passar ditt projekt.

<SearchableItemList items={items} />

## Sammanfattning

Om du följt alla steg bör du nu ha installerat AMXmodX / Metamod och dina önskade plugins utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />