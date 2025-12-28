---
id: vserver-windows-eval-to-full
title: "VPS: Windows Server Evaluation in Vollversion umwandeln"
description: "Entdecke, wie du Windows Server Evaluation in die Vollversion umwandelst → Jetzt mehr erfahren"
sidebar_label: Eval in Vollversion umwandeln
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows Server Evaluation-Editionen sind für Testzwecke gedacht und zeitlich begrenzt. Um dieselbe Installation produktiv weiter zu nutzen, kann die Evaluation-Edition ohne Neuinstallation des Betriebssystems in eine voll lizenzierte Version umgewandelt werden.

Microsoft unterstützt diese In-Place-Konvertierung mit dem DISM-Tool, vorausgesetzt, du hast einen gültigen Produktschlüssel für die Ziel-Edition.

<InlineVoucher />



## Voraussetzungen

Bevor du mit der Umwandlung startest, stelle sicher, dass du einen gültigen Produktschlüssel für die Windows Server Edition hast, zu der du wechseln möchtest, z.B. Standard oder Datacenter. Der Produktschlüssel muss exakt zur Ziel-Edition passen.



## Aktuelle Edition ermitteln

Um zu prüfen, welche Edition aktuell installiert ist, öffne eine Eingabeaufforderung oder PowerShell mit Administratorrechten und führe folgenden Befehl aus:

```powershell
DISM /Online /Get-CurrentEdition
```

Die Ausgabe zeigt den aktiven Editions-Identifier. Evaluation-Installationen werden typischerweise als `ServerStandardEval` oder `ServerDatacenterEval` angezeigt.



## Unterstützte Ziel-Editionen prüfen

Nicht jede Edition kann in jede andere Edition umgewandelt werden. Um zu sehen, welche lizenzierten Editionen für deine aktuelle Installation unterstützt werden, führe folgenden Befehl aus:

```
DISM /Online /Get-TargetEditions
```

Die aufgelisteten Editionen sind die gültigen Ziele, die für die Umwandlung verwendet werden können.



## Evaluation auf Vollversion upgraden

Sobald die Ziel-Edition bekannt ist und ein gültiger Produktschlüssel vorliegt, kannst du das Upgrade starten. Der Wert `<TargetEdition>` muss einer der unterstützten Editionen entsprechen, die der DISM-Befehl zurückgegeben hat.

Gängige Ziel-Editionen sind:
- `ServerStandard`
- `ServerDatacenter`

Starte die Umwandlung mit folgendem Befehl. Ersetze `<TargetEdition>` durch die gewünschte Edition und `<ProductKey>` durch deinen 25-stelligen Windows Server Produktschlüssel:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Betriebssystem-Edition        | Generischer Volumenlizenz-Schlüssel |
| ---------------------------- | ----------------------------------- |
| Windows Server 2025 Standard  | TVRH6-WHNXV-R9WG3-9XRFY-MY832      |
| Windows Server 2025 Datacenter| D764K-2NDRG-47T6Q-P8T8W-YP6DF      |
| Windows Server 2022 Standard  | VDYBN-27WPP-V4HQT-9VMD4-VMK7H      |
| Windows Server 2022 Datacenter| WX4NM-KYWYW-QJJR4-XV3QB-6VM33      |

Während des Vorgangs kann es kurz so wirken, als würde der Fortschritt pausieren. Das ist normal. Nach Abschluss der Umwandlung ist ein Neustart erforderlich, um die Edition endgültig zu ändern.



## Windows Server Version überprüfen

Nach dem Neustart öffne erneut eine Eingabeaufforderung oder PowerShell mit Admin-Rechten und führe aus:

```powershell
DISM /Online /Get-CurrentEdition
```

Die Ausgabe sollte jetzt die lizenzierte Edition anzeigen, z.B. `ServerStandard` oder `ServerDatacenter`, was bestätigt, dass die Evaluation erfolgreich umgewandelt wurde.

An dieser Stelle siehst du das **Windows aktivieren** Wasserzeichen unten rechts auf dem Bildschirm. Du kannst nun deine gekaufte Windows Server Lizenz nutzen, um die Windows Server Standard- oder Datacenter-Edition zu aktivieren.



## Fazit

Glückwunsch! Du hast deine Windows Server Version erfolgreich von EVAL auf Vollversion umgestellt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – wir helfen dir gerne! 🙂



<InlineVoucher />