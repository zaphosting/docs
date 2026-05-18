---
id: dedicated-linux-git
title: "Git auf einem Linux-Server einrichten – Versionierung für deine Projekte aktivieren"
description: "Entdecke, wie du Git für effiziente Versionskontrolle und nahtlose Zusammenarbeit in deinen Projekten einrichtest und konfigurierst → Jetzt mehr erfahren"
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

Du überlegst, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

## Git mit dem One Click Apps Installer installieren

Du kannst **Git** direkt über unseren **One Click Apps Installer** im VPS-Webinterface installieren. Nach der ersten Einrichtung der Apps öffnest du den App-Katalog, suchst nach **Git** und startest die Installation mit deinen bevorzugten Projekt-, Umgebung- und Domain-Einstellungen. So bekommst du eine schnelle und benutzerfreundliche Möglichkeit, **Git** zu deployen und zu verwalten – ganz ohne manuelle Kommandozeilen-Installation – und profitierst gleichzeitig von integriertem Web-Management, Support für eigene Domains und SSL-Bereitstellung, wo verfügbar.

## Vorbereitung

Bevor du **Git** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.

### System aktualisieren

Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du immer zuerst ein Update durchführen. Gib dazu folgenden Befehl ein:

```
sudo apt update && sudo apt upgrade -y
```

So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

## Installation

Nachdem die Vorbereitung abgeschlossen ist, kannst du mit der Installation von Git starten. Führe dazu folgenden Befehl aus:

```console
sudo apt install git-all -y
```

Wenn die Installation abgeschlossen ist, solltest du überprüfen, ob Git korrekt funktioniert. Öffne dazu ein Terminal oder die Kommandozeile und gib `git --version` ein.

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

- [git-scm.com](https://git-scm.com/) – Offizielle Webseite
- [git-scm.com/doc](https://git-scm.com/doc) – Git Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂