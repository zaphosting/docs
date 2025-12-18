---
id: satisfactory-commands
title: "Satisfactory: Konsolkommandon"
description: "Upptäck hur du maxar din Satisfactory-upplevelse med viktiga konsolkommandon och keybind-tips → Lär dig mer nu"
sidebar_label: Konsolkommandon
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Satisfactory har en hel drös användbara kommandon för att justera klientinställningar. På den här sidan sammanfattar vi de populäraste och mest användbara kommandona som spelare ofta kör i Satisfactory.

<InlineVoucher />

## Så öppnar du konsolen
Att använda konsolen i Satisfactory är superenkelt, tryck bara på `-tangenten (backtick, som sitter ovanför TAB) för att växla konsolens synlighet. Konsolen kan vara stängd, öppen som ett litet fönster längst ner eller helt utvidgad varje gång du trycker.

:::info
Funkar inte backtick-tangenten för dig? Följ stegen i nästa avsnitt för att ställa in en ny keybind.
:::

### Kommer du inte åt konsolen?
Ibland funkar inte backtick-tangenten som standard på vissa tangentbordslayouter, då behöver du ställa in en ny. Stäng Satisfactory innan du börjar.

Tryck `Windows-tangenten + R` eller sök efter `Kör` i startmenyn. Klistra sedan in den här sökvägen:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Öppna filen `Input.ini` med en textredigerare (t.ex. Notepad).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Klistra in exakt den här raden längst ner i filen:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Spara och starta om spelet. Nu kan du öppna konsolen med `F6` istället.

## Konsolkommandon

Tabellen visar själva kommandot, vilka värden som accepteras (om det finns) och en kort beskrivning för att göra det lättare att förstå.

Vill du se hela listan med kommandon, skriv `?` i konsolen så får du upp en flytande lista med alla kommandon. Navigera i listan med piltangenterna UPP och NER.

Här är ett exempel på hur det ser ut när du använder `?` för att visa alla kommandon.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Alla kommandon på den här sidan gäller vanilla Satisfactory.
:::

| Kommando Syntax                  | Accepterade värden | Beskrivning | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | Visar hela listan med kommandon         | 
| Stat FPS      | -          | Slår på/av den inbyggda FPS-räknaren i spelet         | 
| Stat UNIT      | -          | Visar en display med frametid, speldata, ritningstid och några andra stats         | 
| t.MaxFPS "maxfps"      | Heltal (t.ex. 120)          | Sätter max FPS för spelet         | 
| r.ScreenPercentage "value"      | Heltal (standard 100)          | Ändrar skärmupplösningens skalning (gäller bara världsrendering, inte UI)         | 
| r.ViewDistanceScale "value"      | Heltal (standard 1)          | Ändrar renderingsavståndet för objekt som stenar och träd         | 
| Suicide      | -          | Dödar din egen spelare         | 
| FOV "value"      | Heltal (t.ex. 90)          | Sätter spelets synfält (FOV)         | 
| r.Atmosphere "1 or 0"      | true (1)/false (0)          | Slår på/av atmosfären i spelet        | 
| r.Fog "1 or 0"      | true (1)/false (0)          | Slår på/av dimman i spelet         | 
| Gamma "value"      | Heltal (standard 50)          | Sätter spelets ljusstyrka         | 

För en mer komplett lista med kommandon, kolla in [Satisfactory-wikin](https://satisfactory.fandom.com/wiki/Console) som går på djupet med fler tekniska kommandon.

<InlineVoucher />