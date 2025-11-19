---
id: dedicated-windows
title: "Dedicated Server: Installation von Windows Server 2025"
description: "Entdecke, wie du Windows Server 2025 erfolgreich auf deinem Dedicated Server installierst und konfigurierst für optimale Performance → Jetzt mehr erfahren"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Windows Server Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzt.



:::info Windows Server 2025

Die Setup-Schritte und die Demonstration in dieser Anleitung basieren auf dem **Windows Server 2025** Betriebssystem. **Ältere OS-Versionen** können sich in **Aufbau** und **Optik** unterscheiden. Der Ablauf ist jedoch ähnlich.  
:::





## Vorbereitung
Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO des Betriebssystems einzubinden. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung.



## Installation

Sobald die ISO-Datei erfolgreich eingebunden wurde, startet die Windows Server Installation automatisch beim nächsten Neustart des Systems. Zuerst müssen Sprache und Tastaturlayout ausgewählt werden. Danach wählst du die Setup-Option, bei der **Windows Server installieren** ausgewählt werden muss.

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

Sobald die Installation gestartet wurde, bereitet das System die notwendigen Komponenten vor. Dieser Vorgang kann einige Zeit dauern. Nach Abschluss musst du die gewünschte Windows Server Edition auswählen. Folgende Versionen stehen zur Verfügung:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

Wenn du eine grafische Benutzeroberfläche und die Nutzung von RDP benötigst, solltest du eine der Desktop Experience Varianten wählen. Weitere Infos zu den Unterschieden zwischen Standard und Datacenter Edition findest du auf der offiziellen [Microsoft Webseite](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning Windows Server Editionen und Lizenzen
Achte darauf, dass du die Server-Edition auswählst, für die du einen gültigen Lizenzschlüssel besitzt. ZAP-Hosting stellt für dieses Produkt keine Windows Server Lizenz bereit. Nach Ablauf der Testphase muss die Lizenz separat erworben werden.
:::

Nach der Auswahl des gewünschten Images müssen die Hinweise und Lizenzbedingungen bestätigt und die Partition ausgewählt werden, auf der das Betriebssystem installiert werden soll. Erstelle dazu eine neue Partition über **Partition erstellen**, wähle dann die neu erstellte Festplatte/Partition aus und bestätige mit Weiter. Starte abschließend die Installation durch **Klick** auf Installieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

Die Installation des Windows Server Betriebssystems wird nun durchgeführt. Das System startet währenddessen mehrmals neu. Der Vorgang kann einige Zeit in Anspruch nehmen.

Lege die Login-Daten fest und du bist bereit, dich in dein installiertes Betriebssystem einzuloggen. Speichere die Zugangsdaten gut ab, da du sie zukünftig immer zum Einloggen benötigst.

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## Konfiguration

Nachdem das Betriebssystem eingerichtet ist, muss der RDP-Zugang aktiviert werden, damit externe Verbindungen erlaubt sind. Gehe dazu in die Remotedesktop-Einstellungen und aktiviere die entsprechende Option.

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## Fazit
Glückwunsch, du hast Windows Server 2025 erfolgreich auf deinem Dedicated Server installiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂


