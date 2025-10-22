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
Im Folgenden erklären wir dir Schritt für Schritt, wie du das Betriebssystem Windows Server auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info Windows Server 2022
Die Setup-Schritte und die Demonstration in dieser Anleitung basieren auf dem Betriebssystem Windows Server 2022 (Optik von 2019 – gleiches Design). Ältere OS-Versionen können sich in Struktur und Aussehen unterscheiden. Das Vorgehen ist jedoch ähnlich.
:::

:::warning Neuere Version verfügbar / EOL-Details

Die aktuellste Windows Server Version von Microsoft ist die [2025](dedicated-windows.md) Version. Für langfristige Projekte empfehlen wir die Nutzung der neuesten Version.

Der Support für ältere Windows Server Versionen wird früher oder später eingestellt. Für die Version 2022 sind folgende Termine geplant:

- Aktiver Support: 13.06.2026
- Sicherheitssupport: 14.10.2031

:::

<InlineVoucher />

## Vorbereitung
Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO des Betriebssystems einzubinden. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder die [Eigene ISO](dedicated-iso.md) Anleitung.

## Installation
Um Windows Server zu installieren, benötigst du eine ISO-Datei deiner Wahl. Im Webinterface kannst du die gewünschte Windows-Version auswählen. Alternativ kannst du auch eine eigene ISO-Datei verwenden, dafür haben wir eine [Eigene ISO](dedicated-iso.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Wenn dieser Bildschirm in der Remote-Konsole erscheint, wurde das ISO erfolgreich geladen und wir können mit der Installation starten.
Wähle deine gewünschte Sprache und klicke auf „Weiter“, um fortzufahren.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Klicke auf „Jetzt installieren“, um den Setup-Prozess zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows fordert nun einen Produktschlüssel an. Gib ihn ein, falls du einen hast.

:::note
Wir verkaufen keine Windows-Lizenzen, der Schlüssel muss selbst erworben werden.
:::

Windows-Produktschlüssel kannst du in verschiedenen Online-Shops kaufen. Achte darauf, dass der Schlüssel für deine Windows-Version gültig ist, da es unterschiedliche Versionen gibt.
Windows Server 2022 hat zum Beispiel zwei Editionen: die Standard- und die Datacenter-Edition.
Wenn du dir unsicher bist, was du genau brauchst, klicke einfach auf „Ich habe keinen Produktschlüssel“, du kannst den Schlüssel später jederzeit hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Wähle jetzt die Version aus, die du installieren möchtest.
Achte darauf, die richtige Version zu wählen, da ein späterer Wechsel nicht möglich ist.
Wichtig: Wähle eine Version mit „(Desktop Experience)“, sonst läuft dein Windows nur als Shell-basiertes System.
Wenn du dich entschieden hast, markiere die Version und klicke auf „Weiter“.

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Akzeptiere die Lizenzbedingungen und klicke auf „Weiter“.

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Wähle „Benutzerdefiniert“, wenn du eine Neuinstallation von Windows durchführen möchtest. „Upgrade“ kannst du wählen, wenn du z.B. von 2016 auf 2022 upgraden willst.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

Im nächsten Schritt musst du Partitionen auf deinem Dedicated Server anlegen. Normalerweise sollten noch keine Partitionen vorhanden sein. Falls doch, markiere sie und klicke auf „Löschen“.

Du kannst mehrere kleinere Partitionen oder eine große anlegen. Wenn du kleinere Partitionen erstellst, empfehlen wir mindestens 50 GB für die Hauptpartition von Windows.
Klicke auf „Neu“, um eine Partition zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Wenn du eine große Partition möchtest, kannst du einfach auf „Übernehmen“ klicken. Das Setup nimmt automatisch die größtmögliche Größe.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows benötigt eine kleine Systempartition, diese bestätigst du mit „OK“.

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Wenn du mit deinen Partitionen zufrieden bist, wähle die Partition aus, auf der Windows installiert werden soll, und klicke auf „Weiter“.
Das Windows-Setup erledigt jetzt alles automatisch, das kann einige Minuten dauern.
Bis das Setup abgeschlossen ist, musst du nichts weiter tun.

## Konfiguration

Nach Abschluss des Setups fordert Windows dich auf, ein Passwort zu setzen.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Lege hier dein gewünschtes Passwort fest.

:::info
Wir empfehlen ein starkes Passwort mit Sonderzeichen.

Wenn du das Passwort vergisst, gibt es keine Möglichkeit zur Wiederherstellung, also notiere es dir sicher.
:::

Nach dem Setzen des Passworts landest du im Windows-Lockscreen.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Um dich bei Windows anzumelden, drücke die Tastenkombination `STRG + ALT + ENTF`. Das kannst du einfach über deine Remote-Konsole machen.
(Du findest das in der Java-Konsole unter „Tastatur“)
Melde dich jetzt mit deinem Passwort an.

Im nächsten Schritt musst du den Remotedesktop aktivieren, damit du dich später einfach mit deinem Server verbinden kannst.
Öffne den Windows Explorer und mache einen Rechtsklick auf „Dieser PC“.

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Wähle „Eigenschaften“.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Öffne „Remoteeinstellungen“.

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Bestätige die Firewall-Meldung mit „OK“ und klicke auf „Übernehmen“.

Öffne jetzt auf deinem Rechner den Remotedesktop und gib die IP-Adresse deines ZAP-Interfaces ein.
Der Benutzername ist immer Administrator und das Passwort das, welches du zuvor festgelegt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Die Zertifikatswarnung kannst du ignorieren, setze den Haken bei „Nicht mehr nach Verbindungen zu diesem Computer fragen“.
Bestätige alles mit „Ja“.

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Die Remotedesktop-Verbindung stellt nun eine Verbindung zu deinem Dedicated Server her und du kannst ihn nutzen.
Die Netzwerkkonfiguration wird automatisch per DHCP übernommen, weitere Änderungen sind nicht nötig.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Wenn du weitere Fragen oder Probleme hast, hilft dir unser Support gerne weiter!
:::

## Fazit
Glückwunsch, du hast erfolgreich das Betriebssystem Windows Server 2022 auf deinem Dedicated Server installiert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />