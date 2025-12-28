---
id: dedicated-windows-eval-to-full
title: "Dedicated: Windows Server Evaluation omzetten naar Volledige Versie"
description: "Ontdek hoe je Windows Server Evaluation omzet naar de Volledige Versie → Leer het nu"
sidebar_label: Eval omzetten naar Volledig
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows Server Evaluation-edities zijn bedoeld voor testdoeleinden en zijn tijdelijk beperkt. Om dezelfde installatie in productie te blijven gebruiken, kun je de evaluatieversie omzetten naar een volledig gelicentieerde versie zonder het besturingssysteem opnieuw te installeren.

Microsoft ondersteunt deze conversie ter plaatse via de DISM-tool, mits je een geldige productcode hebt voor de gewenste editie.

<InlineVoucher />



## Vereisten

Voordat je begint met de conversie, zorg dat je een geldige productcode hebt voor de Windows Server-editie waar je naartoe wilt, zoals Standard of Datacenter. De productcode moet exact overeenkomen met de doelversie.



## Huidige editie opvragen

Om te controleren welke editie momenteel geïnstalleerd is, open je een Command Prompt of PowerShell met administratorrechten en voer je het volgende commando uit:

```powershell
DISM /Online /Get-CurrentEdition
```

De output toont de actieve editie. Evaluatie-installaties worden meestal weergegeven als `ServerStandardEval` of `ServerDatacenterEval`.



## Ondersteunde doel-edities controleren

Niet elke editie kan naar elke andere editie worden geconverteerd. Om te zien welke gelicentieerde edities ondersteund worden voor jouw huidige installatie, voer je het volgende commando uit:

```
DISM /Online /Get-TargetEditions
```

De getoonde edities zijn de geldige opties die je kunt gebruiken voor de conversie.



## Upgrade van Evaluation naar Volledige Versie

Als je de doelversie weet en een geldige productcode hebt, kun je de upgrade starten. De waarde `<TargetEdition>` moet overeenkomen met een van de ondersteunde edities die DISM teruggeeft.

Veelvoorkomende doel-edities zijn:
- `ServerStandard`
- `ServerDatacenter`

Gebruik het volgende commando om de conversie te starten. Vervang `<TargetEdition>` door de gewenste editie en `<ProductKey>` door je 25-cijferige Windows Server productcode:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Besturingssysteem editie       | Generieke Volume License Key    |
| ------------------------------ | ------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832  |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF  |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H  |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33  |

Tijdens het proces lijkt de voortgang soms even stil te staan. Dit is normaal. Na afronding van de conversie is een herstart nodig om de wijziging definitief door te voeren.



## Windows Server versie verifiëren

Na het herstarten open je weer een Command Prompt of PowerShell met adminrechten en voer je uit:

```powershell
DISM /Online /Get-CurrentEdition
```

De output zou nu de gelicentieerde editie moeten tonen, zoals `ServerStandard` of `ServerDatacenter`, wat bevestigt dat de evaluatieversie succesvol is omgezet.

Op dit moment zie je de **Activeer Windows**-watermerk rechtsonder in beeld. Je kunt nu je aangekochte Windows Server-licentie gebruiken om de Windows Server Standard of Datacenter editie te activeren.



## Conclusie

Gefeliciteerd! Je hebt nu succesvol je Windows Server-versie omgezet van EVAL naar Volledig. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />