---
id: dedicated-windows
title: "Dedicated Server: Installation von Windows Server 2025"
description: Informationen, wie du das Windows Server 2025 Betriebssystem auf deinem Dedicated Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Windows Server Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info Windows Server 2025
Die Einrichtungsschritte und Veranschaulichung in dieser Anleitung basieren auf dem Windows Server 2025 Betriebssystem. Ältere Versionen können vom Aufbau und Design abweichen. Die Vorgehensweise ähnelt sich allerdings. 
:::

<InlineVoucher />

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an.



## Installation
Nachdem die ISO-Datei erfolgreich gemountet wurde, startet die Windows Server-Installation beim nächsten Systemneustart automatisch. Zunächst müssen die Sprache und das Tastaturlayout festgelegt werden. Anschließend erfolgt die Auswahl der Setup-Option, bei der **Install Windows Server** ausgewählt werden muss.

![img](https://screensaver01.zap-hosting.com/index.php/s/FoMo9mDaCzBjSMB/download)

Sobald die Installation eingeleitet wurde, bereitet das System die notwendigen Komponenten vor. Dieser Vorgang kann einige Zeit in Anspruch nehmen. Nachdem dies abgeschlossen ist, muss die gewünschte Windows Server-Edition ausgewählt werden. Zur Verfügung stehen folgende Varianten:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

Falls du eine grafische Benutzeroberfläche sowie die Nutzung von RDP benötigst, solltest du eine der Desktop Experience Varianten wählen. Weitere Informationen zu den Unterschieden zwischen der Standard- und der Datacenter-Edition findest du auf der offiziellen [Microsoft Webseite](https://learn.microsoft.com/de-de/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning Windows Server-Editionen und Lizenzen

Stelle sicher, dass du die Server-Edition auswählst, für die du einen gültigen Lizenzschlüssel besitzt. ZAP-Hosting stellt keine Windows Server-Lizenz für dieses Produkt bereit. Nach Ablauf des Testzeitraums muss die Lizenz eigenständig erworben werden.

:::

Nach der Auswahl des gewünschten Images müssen die Hinweise und Lizenzbedingungen bestätigt sowie die Partition festgelegt werden, auf der das Betriebssystem installiert werden soll. Erstelle dazu eine neue Partition, indem du auf **Create Partition** klickst, wähle anschließend die neu erstellte Disk/Partition aus und bestätige mit Next. Zum Abschluss starte die Installation mit einem **Klick** auf Install.

![img](https://screensaver01.zap-hosting.com/index.php/s/BNHKJStwjJtabpf/download)

Die Installation des Windows Server Betriebssystem wird nun durchgeführt. Während des Vorgangs startet das System einige Male neu. Es kann eine Weile dauern bis der Vorgang vollständig abgeschlossen ist. 

Definiere nun abschließend noch die Zugangsdaten und schon kannst du dich bei deinem aufgesetzten Betriebssystem einloggen. Speichere die Zugangsdaten sorgfältig ab, da du diese zukünftig immer zum einloggen verwenden wirst. 

![img](https://screensaver01.zap-hosting.com/index.php/s/onGybP8Fd7iNJXK/download)



## Konfiguration

Nach der Einrichtung des Betriebssystems ist es erforderlich, den RDP-Zugang zu aktivieren, damit externe Verbindungen zugelassen werden. Gehe dazu in die Remote-Desktop-Einstellungen und aktiviere die entsprechende Option.

![img](https://screensaver01.zap-hosting.com/index.php/s/CYiAxJCi6nWipWS/download)


## Abschluss
Glückwunsch, du hast das Windows Server 2025 Betriebssystem erfolgreich  auf deinem Dedicated Server installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂