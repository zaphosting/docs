---
id: dedicated-windows-2022
title: "Dedicated Server: Installation von Windows Server 2022"
description: "Entdecke, wie du Windows Server auf deinem Dedicated Server installierst und konfigurierst für optimale Performance und Sicherheit → Jetzt mehr erfahren"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Im Folgenden erklären wir dir Schritt für Schritt, wie du das Windows Server Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzen kannst.

:::info Windows Server 2022
Die Setup-Schritte und die Demonstration in dieser Anleitung basieren auf dem Betriebssystem Windows Server 2022 (Optik von 2019 – gleiches Design). Ältere OS-Versionen können sich in Struktur und Aussehen unterscheiden. Das Vorgehen ist jedoch ähnlich.
:::

:::warning Neuere Version verfügbar / EOL-Details

Die aktuellste Windows Server Version von Microsoft ist die [2025](dedicated-windows.md) Version. Für langfristige Projekte empfehlen wir die Nutzung der neuesten Version.

Der Support für ältere Windows Server Versionen wird früher oder später eingestellt. Für die Version 2022 sind folgende Termine geplant:

- Aktiver Support: 13.06.2026
- Sicherheitssupport: 14.10.2031

:::

## Vorbereitung
Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO des Betriebssystems zu mounten. Es gibt mehrere Möglichkeiten, das zu machen:

1. Mounten über die Erstinstallation
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung.

## Installation
Um einen Windows Server zu installieren, brauchst du eine ISO-Datei deiner Wahl. Im Webinterface kannst du die gewünschte Windows-Version auswählen. Alternativ kannst du auch eine eigene ISO-Datei nutzen, dafür haben wir eine [Eigene ISO](dedicated-iso.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Wenn dieser Bildschirm in deiner Remote-Konsole erscheint, wurde die ISO erfolgreich geladen und wir können mit der Installation starten.
Wähle deine gewünschte Sprache und klicke auf „Weiter“.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Klicke auf „Jetzt installieren“, um den Setup-Prozess zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows fordert jetzt einen Produktschlüssel an. Gib ihn ein, falls du einen hast.

:::note
Wir verkaufen keine Windows-Lizenzen, der Key muss selbst gekauft werden.
:::

Windows-Produktschlüssel kannst du in verschiedenen Online-Shops kaufen. Achte darauf, dass der Key für deine Windows-Version gültig ist, da es unterschiedliche Versionen gibt.
Bei Windows Server 2022 gibt es z.B. die Standard- und die Datacenter-Edition.
Wenn du dir unsicher bist, was du genau brauchst, klicke einfach auf „Ich habe keinen Produktschlüssel“. Du kannst den Key später jederzeit hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Wähle nun die Version aus, die du installieren möchtest.
Achte darauf, die richtige Version zu wählen, ein späteres Ändern ist nicht möglich.
Wichtig: Wähle eine Version mit „(Desktop Experience)“, sonst läuft dein Windows nur als Shell-basiertes System.
Wenn du dich entschieden hast, markiere die Version und klicke auf „Weiter“.

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Akzeptiere die Lizenzbedingungen und klicke auf „Weiter“.

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Wähle „Benutzerdefiniert“ (Custom), wenn du eine Neuinstallation von Windows durchführen möchtest. „Upgrade“ kannst du wählen, wenn du z.B. von 2016 auf 2022 upgraden willst.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

Im nächsten Schritt musst du Partitionen auf deinem Dedicated Server anlegen. Normalerweise sollten noch keine Partitionen vorhanden sein. Falls doch, markiere sie und klicke auf „Löschen“.

Du kannst mehrere kleinere Partitionen oder eine große erstellen. Wenn du kleinere Partitionen anlegst, empfehlen wir mindestens 50 GB für die Hauptpartition von Windows.
Klicke auf „Neu“, um eine Partition zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Wenn du nur eine große Partition möchtest, kannst du einfach auf „Übernehmen“ klicken. Das Setup nimmt automatisch die größtmögliche Größe.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows benötigt eine kleine Systempartition, das akzeptieren wir mit „OK“.

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Wenn du mit deinen Partitionen zufrieden bist, wähle die Partition aus, auf der Windows installiert werden soll, und klicke auf „Weiter“.
Das Windows-Setup erledigt jetzt alles automatisch, das kann einige Minuten dauern.
Bis das Setup fertig ist, musst du nichts weiter machen.

## Konfiguration

Sobald der Setup-Prozess abgeschlossen ist, fordert Windows dich auf, ein Passwort zu setzen.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Lege hier dein gewünschtes Passwort fest.

:::info
Wir empfehlen ein starkes Passwort mit Sonderzeichen.

Wenn du das Passwort vergisst, gibt es keine Möglichkeit zur Wiederherstellung, also schreib es dir unbedingt auf.
:::

Nach dem Setzen des Passworts landest du im Windows-Lockscreen.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Um dich bei Windows anzumelden, drücke die Tastenkombination `STRG + ALT + ENTF`. Das kannst du einfach über deine Remote-Konsole machen.
(In der Java-Konsole findest du das unter „Tastatur“)
Melde dich jetzt mit deinem Passwort an.

Im nächsten Schritt musst du Remotedesktop aktivieren, damit du dich später bequem mit deinem Server verbinden kannst.
Öffne den Windows Explorer und mache einen Rechtsklick auf „Dieser PC“.

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Wähle „Eigenschaften“.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Öffne „Remoteeinstellungen“.

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Bestätige die Firewall-Meldung mit „OK“ und klicke auf „Übernehmen“.

Öffne jetzt auf deinem Rechner die Remotedesktop-Verbindung und gib die IP-Adresse deines ZAP-Interfaces ein.
Der Benutzername ist immer Administrator und das Passwort das, welches du vorher festgelegt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Die Zertifikatswarnung kannst du ignorieren, setze den Haken bei „Nicht mehr nach Verbindungen mit diesem Computer fragen“.
Bestätige alles mit „Ja“.

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Die Remotedesktop-Verbindung stellt jetzt eine Verbindung zu deinem Dedicated Server her und du kannst ihn nutzen.
Die Netzwerkkonfiguration wird automatisch per DHCP übernommen, weitere Änderungen sind nicht nötig.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Wenn du weitere Fragen oder Probleme hast, hilft dir unser Support gerne weiter!
:::

## Fazit
Glückwunsch, du hast Windows Server 2022 erfolgreich auf deinem Dedicated Server installiert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂