---
id: vserver-windows-git
title: "VPS: Git auf Windows einrichten"
description: "Entdecke, wie du Git für effiziente Versionskontrolle und nahtlose Zusammenarbeit in der Softwareentwicklung einrichtest und konfigurierst → Jetzt mehr erfahren"
sidebar_label: Git installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Git ist ein verteiltes Versionskontrollsystem, das für effizientes Quellcode-Management entwickelt wurde. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, gleichzeitig an verschiedenen Branches zu arbeiten und Projekte reibungslos gemeinsam zu bearbeiten. Dank seiner Flexibilität und Performance ist Git zum Standard-Tool für Versionskontrolle in der modernen Softwareentwicklung geworden.

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Git einrichtest und konfigurierst – inklusive allem, was du beachten solltest.

<InlineVoucher />



## Vorbereitung

Bevor du **Git** installierst, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du immer zuerst ein System-Update durchführen. So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor du weitermachst.



## Installation

Nachdem du die nötigen Vorbereitungen getroffen hast, kannst du mit der Installation von Git starten. Lade dir dazu Git für Windows (x64) hier herunter: https://git-scm.com/downloads/win 

Starte anschließend das Setup der heruntergeladenen Datei und folge den Anweisungen.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Nach der Installation solltest du prüfen, ob Git korrekt funktioniert. Öffne dazu ein Terminal oder die Eingabeaufforderung und gib den Befehl `git --version` ein, dann Enter.

Wenn die Installation erfolgreich war, zeigt Git die aktuell installierte Versionsnummer an. Erhältst du eine Fehlermeldung oder keine Ausgabe, wurde Git wahrscheinlich nicht richtig installiert oder der Befehl ist nicht im Systempfad enthalten.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Konfiguration

Richte deinen Git-Benutzernamen und deine E-Mail mit den folgenden Befehlen ein. Ersetze die Beispielwerte durch deine eigenen Daten. Diese Infos werden mit jedem Commit verknüpft.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Fazit & weitere Ressourcen

Glückwunsch! Du hast Git jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf diese Ressourcen zu werfen – sie können dir bei der Server-Konfiguration noch weiterhelfen:

- [git-scm.com](https://git-scm.com/) – Offizielle Website
- [git-scm.com/doc](https://git-scm.com/doc) – Git Dokumentation

Hast du spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Seite! 🙂



<InlineVoucher />