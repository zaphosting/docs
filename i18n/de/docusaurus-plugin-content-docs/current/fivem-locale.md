---
id: fivem-locale
title: "FiveM: Sprache / Standort (Flagge) ändern"
description: "Entdecke, wie du die Sprache und Flagge deines FiveM Servers für ein persönliches Spielerlebnis anpasst → Jetzt mehr erfahren"
sidebar_label: Sprache / Standort (Flagge)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

FiveM Gameserver können in verschiedenen Sprachen angezeigt werden. Das gilt sowohl für die Anzeige der Server-Flagge im Serverbrowser als auch für die Sprache, die aktiv auf dem Server verwendet wird. Die Sprache kann bei Bedarf individuell angepasst werden. So hast du die Möglichkeit, deine Sprache und Länderflagge für deinen Server auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)

<InlineVoucher />

## Konfiguration

Die Konfiguration der Flagge und Sprache des Servers erfolgt über die Locales-Option. Die Locales-Konfiguration wird über die Server-Konfig gemacht. Diese wird durch den Wert des **sets locale** Befehls definiert. Standardmäßig wird die englische Sprache und die Antarktis als Standort (Flagge) angezeigt.

### Server-Konfigurationsdatei öffnen

Die Server-Konfigurationsdatei `server.cfg` kannst du im txAdmin Interface unter `CFG Editor` öffnen.

![img](https://screensaver01.zap-hosting.com/index.php/s/qDsN5ggCjaaJLS5/preview)

### Locale-/Sprachcode für deine Sprache finden

Die Definition der Sprache/Anzeige erfolgt über die Locales (Sprachcodes/Ländercodes) basierend auf den ISO 639-1/ISO 3166-1 Standards. Wir haben dir eine kleine Liste der relevantesten Länder/Sprachen zusammengestellt. Die tatsächliche Liste ist natürlich deutlich größer:

| Land           | Sprache    | Locale |
| -------------- | ---------- | ------ |
| Deutschland    | Deutsch    | de-DE  |
| USA            | Englisch   | en-US  |
| Kanada         | Englisch   | en-CA  |
| Australien     | Englisch   | en-AU  |
| Vereinigtes Königreich | Englisch | en-GB  |
| Finnland       | Finnisch   | fi-FI  |
| Frankreich     | Französisch| fr-FR  |
| Niederlande    | Niederländisch | nl-NL  |
| Portugal       | Portugiesisch | pt-PT  |
| Brasilien      | Portugiesisch | pt-BR  |
| Spanien        | Spanisch   | es-ES  |
| Singapur       | Englisch   | en-SG  |

:::caution 
Die Anzeige der Server-Flagge wird grundsätzlich von allen verfügbaren Ländern unterstützt. Allerdings enthalten nicht alle Ressourcen alle Sprachen. Stelle daher sicher, dass dein Land/deine Sprache im Vorfeld unterstützt wird!
:::

### Inhalt der Server-Konfigurationsdatei anpassen

Nachdem du die Konfigurationsdatei geöffnet und den Locale-/Sprachcode herausgesucht hast, kannst du die Konfiguration vornehmen. Zuerst solltest du prüfen, ob der **sets locale** Befehl bereits existiert. Falls nicht, sieht die Eingabe dafür so aus:

```
# Ein gültiger Locale-Identifier für die Hauptsprache deines Servers.
# Zum Beispiel "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# bitte ERSETZE root-AQ in der ZEILE OBEN mit einer echten Sprache! :)
```

Der Wert des **sets locale** Befehls ist standardmäßig auf **root-AQ** gesetzt. Dies muss jetzt angepasst werden. Wenn du zum Beispiel die USA als Flagge und Englisch als Sprache verwenden möchtest, würdest du hier **en-US** als Wert eintragen. Speichere die Änderung anschließend ab.

## Abschluss

Der letzte Schritt ist, den Server neu zu starten, damit die Änderung übernommen wird. Danach kannst du die Serverliste in deinem FiveM Client neu laden und solltest die gerade gemachte Änderung sehen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />