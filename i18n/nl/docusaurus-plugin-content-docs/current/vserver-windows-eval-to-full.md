---
id: vserver-windows-eval-to-full
title: "VPS: Windows Server Evaluation omzetten naar Volledige Versie"
description: "Ontdek hoe je Windows Server Evaluation omzet naar de Volledige Versie → Leer het nu"
sidebar_label: Eval omzetten naar Volledig
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Windows Server Evaluation-edities zijn bedoeld om te testen en zijn tijdsgebonden. Wil je dezelfde installatie blijven gebruiken in productie? Dan kun je de evaluation editie omzetten naar een volledig gelicentieerde versie zonder het OS opnieuw te installeren.

Microsoft ondersteunt deze directe conversie via de DISM-tool, mits je een geldige productkey hebt voor de gewenste editie.

<InlineVoucher />



## Wat je nodig hebt

Voordat je begint, zorg dat je een geldige productkey hebt voor de Windows Server editie waar je naartoe wilt, zoals Standard of Datacenter. De productkey moet precies bij de doel-editie passen. 



## Huidige editie checken

Wil je weten welke editie er nu draait? Open dan een Command Prompt of PowerShell als administrator en voer dit commando uit:

```powershell
DISM /Online /Get-CurrentEdition
```

Je ziet dan de actieve editie. Evaluation versies staan meestal als `ServerStandardEval` of `ServerDatacenterEval` vermeld.



## Ondersteunde doel-edities checken

Niet elke editie kan naar elke andere editie worden omgezet. Check welke gelicentieerde edities voor jouw installatie beschikbaar zijn met:

```
DISM /Online /Get-TargetEditions
```

De lijst die je krijgt zijn de geldige opties waar je naar kunt upgraden.



## Evaluation upgraden naar Volledige Versie

Als je weet naar welke editie je wilt en je hebt een geldige productkey, kun je de upgrade starten. Vervang `<TargetEdition>` door een van de ondersteunde edities uit de vorige stap.

Veelgebruikte doel-edities zijn:
- `ServerStandard`
- `ServerDatacenter`

Gebruik dit commando om de conversie te starten. Vervang `<TargetEdition>` door de gewenste editie en `<ProductKey>` door jouw 25-cijferige Windows Server productkey:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| OS editie                     | Generieke Volume License Key    |
| ----------------------------- | ------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832  |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF  |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H  |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33  |

Tijdens het proces lijkt het soms even stil te staan, dat is normaal. Na de conversie moet je de server herstarten om de wijziging af te ronden.



## Windows Server versie checken

Na de herstart open je weer een Command Prompt of PowerShell als admin en voer je uit:

```powershell
DISM /Online /Get-CurrentEdition
```

Je zou nu de gelicentieerde editie moeten zien, zoals `ServerStandard` of `ServerDatacenter`. Dit bevestigt dat de evaluation succesvol is omgezet.

Je ziet nu de **Activeer Windows** watermark rechtsonder in beeld. Gebruik je aangekochte Windows Server licentie om de Standard of Datacenter editie te activeren.



## Klaar!

Gefeliciteerd! Je hebt je Windows Server nu succesvol van EVAL naar Volledig omgezet. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂



<InlineVoucher />