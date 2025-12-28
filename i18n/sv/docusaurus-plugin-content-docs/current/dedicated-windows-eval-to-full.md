---
id: dedicated-windows-eval-to-full
title: "Dedicated: Konvertera Windows Server Evaluation till Full Version"
description: "Upptäck hur du konverterar Windows Server Evaluation till Full Version → Läs mer nu"
sidebar_label: Konvertera Eval till Full
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows Server Evaluation-versioner är designade för testning och är tidsbegränsade. För att fortsätta använda samma installation i produktion kan du konvertera evaluation-versionen till en fullt licensierad version utan att installera om operativsystemet.

Microsoft stödjer denna konvertering på plats med hjälp av DISM-verktyget, förutsatt att du har en giltig produktnyckel för målversionen.

<InlineVoucher />



## Förutsättningar

Innan du börjar konverteringen, se till att du har en giltig produktnyckel för den Windows Server-version du vill byta till, som Standard eller Datacenter. Produktnyckeln måste exakt matcha målversionen.



## Ta reda på nuvarande version

För att kontrollera vilken version som är installerad, öppna ett förhöjt Kommandotolks- eller PowerShell-fönster och kör följande kommando:

```powershell
DISM /Online /Get-CurrentEdition
```

Resultatet visar den aktiva versionsidentifieraren. Evaluation-installationer visas vanligtvis som `ServerStandardEval` eller `ServerDatacenterEval`.



## Kontrollera stöd för målversioner

Inte alla versioner kan konverteras till alla andra versioner. För att se vilka licensierade versioner som stöds för din nuvarande installation, kör följande kommando:

```
DISM /Online /Get-TargetEditions
```

De listade versionerna är giltiga mål som kan användas för konverteringen.



## Uppgradera Evaluation till Full Version

När målversionen är känd och en giltig produktnyckel finns tillgänglig kan uppgraderingen startas. Värdet `<TargetEdition>` måste matcha en av de stödda versionerna som DISM-kommandot returnerade.

Vanliga målversioner inkluderar:
- `ServerStandard`
- `ServerDatacenter`

Använd följande kommando för att starta konverteringen. Byt ut `<TargetEdition>` mot önskad version och `<ProductKey>` mot din 25-teckens Windows Server-produktnyckel:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Operativsystemversion         | Generisk Volymlicensnyckel     |
| ---------------------------- | ------------------------------ |
| Windows Server 2025 Standard  | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter| D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2022 Standard  | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Datacenter| WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

Under processen kan det se ut som att det står still en stund. Det är helt normalt. När konverteringen är klar krävs en omstart för att slutföra versionsbytet.



## Verifiera Windows Server-version

När servern har startat om, öppna ett förhöjt Kommandotolks- eller PowerShell-fönster och kör:

```powershell
DISM /Online /Get-CurrentEdition
```

Resultatet ska nu visa den licensierade versionen, som `ServerStandard` eller `ServerDatacenter`, vilket bekräftar att evaluation-versionen konverterades framgångsrikt.

Vid det här laget ser du **Aktivera Windows**-vattenstämpeln nere i högra hörnet. Nu kan du använda din köpta Windows Server-licens för att aktivera Windows Server Standard eller Datacenter.



## Avslutning

Grattis! Du har nu lyckats byta din Windows Server-version från EVAL till Full. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂



<InlineVoucher />