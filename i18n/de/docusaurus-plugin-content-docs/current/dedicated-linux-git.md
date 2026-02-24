---
id: dedicated-linux-git
title: "Git auf einem Linux-Server einrichten – Versionskontrolle für deine Projekte aktivieren"
description: "Entdecke, wie du Git einrichtest und konfigurierst, um effiziente Versionskontrolle und nahtlose Zusammenarbeit in deinen Projekten zu ermöglichen → Jetzt mehr erfahren"
sidebar_label: Git installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Git ist ein verteiltes Versionskontrollsystem, das für effizientes Quellcode-Management entwickelt wurde. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, gleichzeitig an verschiedenen Branches zu arbeiten und Projekte reibungslos gemeinsam zu bearbeiten. Dank seiner Flexibilität und Performance hat sich Git zum Standard-Tool für Versionskontrolle in der modernen Softwareentwicklung etabliert.

Du willst diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.



## Vorbereitung

Bevor du **Git** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein System-Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Git starten. Führe dazu folgenden Befehl aus:

```console
sudo apt install git-all -y
```

Nach der Installation solltest du überprüfen, ob Git korrekt funktioniert. Öffne dazu ein Terminal oder die Kommandozeile und gib `git --version` ein, dann drücke Enter.

Wenn die Installation erfolgreich war, zeigt Git die aktuell installierte Versionsnummer an. Erhältst du eine Fehlermeldung oder keine Ausgabe, wurde Git wahrscheinlich nicht richtig installiert oder der Befehl ist nicht im Systempfad enthalten.

```
git --version
git version 2.51.2
```



## Konfiguration

Richte deinen Git-Benutzernamen und deine E-Mail-Adresse mit den folgenden Befehlen ein. Ersetze die Beispielwerte durch deine eigenen Daten. Diese Angaben werden mit jedem Commit verknüpft.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Git jetzt erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [git-scm.com](https://git-scm.com/) – Offizielle Website
- [git-scm.com/doc](https://git-scm.com/doc) – Git Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂