---
id: vserver-linux-git
title: "vServer: Setup Git on Linux"
description: Informationen zur Einrichtung von Git auf deinem Linux vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Git installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Git ist ein verteiltes Versionskontrollsystem für effizientes Quellcode-Management. Es ermöglicht, Änderungen nachzuverfolgen, parallel in verschiedenen Branches zu arbeiten und nahtlos in Projekten zusammenzuarbeiten. Dank Flexibilität und Leistung ist Git heute das Standardwerkzeug für Versionskontrolle in der modernen Softwareentwicklung.

Überlegst du, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Vorbereitung

Bevor du **Git** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitungen stellen eine stabile Umgebung sicher und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit aktueller Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Git-Anwendung fortfahren. Führe dazu den folgenden Befehl aus:

```console
sudo apt install git-all -y
```



Nachdem die Installation abgeschlossen ist, solltest du prüfen, ob Git korrekt funktioniert. Öffne ein Terminal und gib den Befehl `git --version` ein und bestätige mit Enter.

Wenn die Installation erfolgreich war, gibt Git die aktuell installierte Versionsnummer zurück. Wenn eine Fehlermeldung erscheint oder keine Ausgabe erfolgt, deutet das in der Regel darauf hin, dass Git nicht richtig installiert wurde oder der Befehl nicht im Systempfad liegt.

```
git --version
git version 2.51.2
```



## Konfiguration

Richte deinen Git-Benutzernamen und deine E-Mail mit den folgenden Befehlen ein und ersetze die Beispielwerte durch deine eigenen Daten. Diese Angaben werden jedem Commit zugeordnet.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Abschluss und weitere Ressourcen

Glückwunsch. Du hast Git jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen. Sie können zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten.

- [git-scm.com](https://git-scm.com/) Offizielle Website
- [git-scm.com/doc](https://git-scm.com/doc) Git Dokumentation

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich gern an unser Support-Team, das täglich für dich da ist. 🙂



<InlineVoucher />