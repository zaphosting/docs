---
id: vserver-windows-git
title: "vServer: Setup Git on Windows"
description: Informationen zur Einrichtung von Git auf deinem Windows vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Git installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Git ist ein verteiltes Versionskontrollsystem für effizientes Quellcode-Management. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, gleichzeitig in verschiedenen Branches zu arbeiten und nahtlos in Projekten zusammenzuarbeiten. Dank seiner Flexibilität und Leistung ist Git zum Standardwerkzeug für Versionskontrolle in der modernen Softwareentwicklung geworden.

Denkst du darüber nach, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Vorbereitung

Bevor du **Git** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Git‑Anwendung fortfahren. Lade dazu Git for Windows (x64) hier herunter: https://git-scm.com/downloads/win 

Führe anschließend das Setup der heruntergeladenen Datei aus und folge den gezeigten Schritten.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Nachdem die Installation abgeschlossen ist, solltest du prüfen, ob Git korrekt funktioniert, indem du ein Terminal oder die Eingabeaufforderung öffnest. Gib den Befehl `git --version` ein und bestätige mit Enter.

Wenn die Installation erfolgreich war, gibt Git die aktuell installierte Versionsnummer zurück. Wenn eine Fehlermeldung erscheint oder keine Ausgabe erfolgt, deutet das in der Regel darauf hin, dass Git nicht richtig installiert wurde oder der Befehl nicht im Systempfad liegt.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Konfiguration

Richte deinen Git‑Benutzernamen und deine E‑Mail mit den folgenden Befehlen ein und ersetze die Beispielwerte durch deine eigenen Daten. Diese Angaben werden jedem Commit zugeordnet.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Abschluss und weitere Ressourcen

Glückwunsch. Du hast Git jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [git-scm.com](https://git-scm.com/) - Offizielle Website
- [git-scm.com/doc](https://git-scm.com/doc) Git Dokumentation

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂



<InlineVoucher />