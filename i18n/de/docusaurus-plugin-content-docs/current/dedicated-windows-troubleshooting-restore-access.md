---
id: dedicated-windows-troubleshooting-restore-access
title: "Dedicated Server: Zugriff wiederherstellen"
description: "Entdecke, wie du nach einer Passwort-Sperre wieder Zugriff auf deinen Windows Dedicated Server bekommst und Ausfallzeiten minimierst → Jetzt mehr erfahren"
sidebar_label: Zugriff wiederherstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Es kann schnell passieren... Du versuchst, dich auf deinem Windows Server einzuloggen, aber dein Passwort wird nicht mehr akzeptiert oder du hast es einfach vergessen. Plötzlich bist du ausgesperrt und der Zugriff auf wichtige Daten und Anwendungen ist nicht mehr möglich. Diese Situation ist natürlich frustrierend, aber noch lange nicht das Ende. Wenn du die unten beschriebenen Schritte befolgst, kannst du den Zugriff auf deinen Windows Dedicated Server wiederherstellen und deine Arbeit mit minimalen Unterbrechungen fortsetzen.



## Vorbereitung
Der Zugriff wird über das Administrator-Konto zurückgesetzt, indem eine Windows ISO-Datei verwendet wird. Dabei kommt genau die ISO-Datei zum Einsatz, mit der ursprünglich das Windows Server Betriebssystem installiert wurde.

Dieser Schritt kann entweder über die [**Erstinstallation**](dedicated-setup.md) oder über **[ISO](dedicated-iso.md)** durchgeführt werden. Wähle oder gib die ISO-Datei an, die ursprünglich verwendet wurde, je nachdem, welche Methode du nutzt.

Binde die ISO ein und starte das System anschließend neu. Die Windows-Installationsoberfläche sollte beim nächsten Start wieder erscheinen. Das Ergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Zugriff wiederherstellen

Jetzt geht’s ans Zurücksetzen des Zugriffs für das Administrator-Konto. Folge dazu den ersten Schritten der Installation erneut. Du musst aber nur bis zum Start der Installation vorgehen und dann auf **Computer reparieren** klicken.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Es öffnen sich die erweiterten Optionen. Klicke auf **Problembehandlung** und dann auf **Eingabeaufforderung**. Dadurch öffnet sich die Kommandozeile (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Jetzt müssen die folgenden Befehle nacheinander in der Eingabeaufforderung ausgeführt werden:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

Das Tastaturlayout in der iLO HTML-Konsole kann von deinem eigenen abweichen, sodass bestimmte Zeichen auf anderen Tasten liegen. Beachte das unbedingt, damit die Befehle korrekt ausgeführt werden.

:::

Nach dem Neustart des Servers drücke auf dem Anmeldebildschirm die Tastenkombination **Win+U**. Im sich öffnenden Eingabeaufforderungsfenster gib bitte Folgendes ein:

```
net user Administrator DeinNeuesPasswort
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Dein Passwort wurde jetzt geändert. Du musst aber die Änderungen an den **Utilman-Dateien** wieder rückgängig machen. Starte dazu einfach deinen Server neu und wiederhole die Schritte. In der Eingabeaufforderung führe bitte erneut folgende Befehle aus:

```
d:
cd Windows
cd System32
del utilman.exe
ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Fazit

Wenn du den Prozess abgeschlossen hast, solltest du erfolgreich ein neues Passwort für den Administrator-User gesetzt haben. Damit kannst du dich jetzt wieder über die Remote-Desktop-Verbindung einloggen.