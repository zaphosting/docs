---
id: vserver-iso
title: "VPS: Montera en ISO-fil"
description: "Upptäck hur du anpassar din VPS med din favorit-ISO för full kontroll över din servermiljö → Läs mer nu"
sidebar_label: Montera ISO-fil
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introduktion
Vill du ha ännu mer frihet när du väljer system? Utöver våra OS-mallar kan du såklart montera dina egna ISO-filer. Det är superenkelt med våra VPS-produkter. På så sätt får du exakt det operativsystem på din server som du verkligen vill ha!

<InlineVoucher />



## Tillgängliga ISO-filer

Utöver våra förkonfigurerade standard-OS-mallar erbjuder vi även möjligheten att montera extra ISO-filer. Det ger ännu mer flexibilitet när du sätter upp och hanterar din servermiljö. Våra VPS-produkter stödjer för närvarande följande ISO-filer: 

<SearchableItemList items={items} />

:::info Saknas en ISO-fil?
Finns det en specifik ISO du vill använda som inte finns tillgänglig? Kontakta bara vårt supportteam – vi kollar gärna om vi kan lägga till den åt dig.
:::





## Montera ISO-fil
För att montera en ISO, gå till din VPS-hanteringspanel och öppna **Inställningar → ISOs**. Välj den ISO-fil du vill ha, justera boot-ordningen och starta sedan om din server. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Efter omstarten kan du ansluta till din server med VNC-klienten och börja installera och konfigurera operativsystemet.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online-status eller fjärranslutningar efter ISO-montering

Efter att du monterat en ISO är din server ännu inte konfigurerad. Därför visas ingen **online-status** i panelen, och **RDP** eller **SSH-anslutningar** är inte tillgängliga. Dessa blir tillgängliga först när operativsystemet är installerat och konfigurerat.

:::




## Slutsats
Grattis, du har nu valt och monterat din ISO-fil! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />