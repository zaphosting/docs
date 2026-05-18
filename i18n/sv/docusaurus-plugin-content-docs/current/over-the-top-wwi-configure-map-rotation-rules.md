---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Konfigurera Regler för Map Rotation"
description: "Lär dig hur du konfigurerar map rotation på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Map Rotation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Regler för map rotation i **Over the Top WWI** bestämmer hur kartor väljs och spelas baserat på antalet spelare. Det hjälper till att säkerställa att kartorna förblir balanserade och anpassade efter antalet aktiva spelare.

Genom att konfigurera dessa inställningar kan du undvika att stora kartor spelas med för få spelare eller att små kartor blir överfulla.

<InlineVoucher />

## Konfiguration

Regler för map rotation konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i din **gameserver management panel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parameter:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` aktiverar eller inaktiverar automatisk kartval baserat på spelarantal

  - `False` → Inaktiverad
  - `True` → Aktiverad


När den är aktiverad kommer servern att kontrollera det aktuella spelarantalet och justera kartvalet därefter. Detta säkerställer att kartor väljs inom ett lämpligt spann, vilket hjälper till att bibehålla balanserat gameplay.

Systemet använder interna tröskelvärden för att avgöra om en karta är lämplig, vilket förhindrar situationer där stora kartor är underbefolkade eller små kartor blir överfulla.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. Den uppdaterade map rotation-beteendet tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat regler för map rotation på din **Over the Top WWI-server**. Det hjälper till att säkerställa balanserat gameplay genom att matcha kartstorlek med spelarantal.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />