---
id: vserver-windows-troubleshooting-restore-access
title: "VPS: Access wiederherstellen"
description: "Entdecke, wie du nach einer Passwort-Sperre wieder Zugriff auf deinen Windows VPS bekommst und Ausfallzeiten minimierst → Jetzt mehr erfahren"
sidebar_label: Zugriff wiederherstellen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das kann schnell passieren... Du versuchst, dich auf deinem Windows Server einzuloggen, aber dein Passwort wird nicht mehr akzeptiert oder du hast es einfach vergessen. Plötzlich bist du ausgesperrt und der Zugriff auf wichtige Daten und Anwendungen ist nicht mehr möglich. Diese Situation ist natürlich ärgerlich, aber noch lange nicht das Ende. Wenn du die folgenden Schritte befolgst, kannst du den Zugriff auf deinen Windows VPS wiederherstellen und mit minimalen Unterbrechungen weiterarbeiten.



## Vorbereitung
Der Zugriff wird über das Administrator-Konto zurückgesetzt, indem eine Windows ISO-Datei verwendet wird. Dabei kommt genau die ISO-Datei zum Einsatz, mit der das Windows Server Betriebssystem ursprünglich installiert wurde.

Dieser Schritt kann entweder über die [**Erstinstallation**](dedicated-setup.md) oder über **[ISO](dedicated-iso.md)** durchgeführt werden. Wähle oder gib die ISO-Datei an, die ursprünglich verwendet wurde, je nachdem, welche Methode du nutzt.

Binde die ISO ein und starte das System anschließend neu. Beim nächsten Start sollte die Windows-Installationsoberfläche wieder erscheinen. Das Ergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Zugriff wiederherstellen

Jetzt geht’s ans Zurücksetzen des Administrator-Zugangs. Folge dazu den ersten Schritten des Setups erneut. Du musst aber nur bis zum Start der Installation vorgehen und dann auf **Computer reparieren** klicken.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Damit öffnet sich das Menü für erweiterte Optionen. Klick auf **Problembehandlung** und dann auf **Eingabeaufforderung**. So öffnet sich die Kommandozeile (cmd.exe).

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

Das Tastaturlayout der iLO HTML-Konsole kann von deinem eigenen abweichen, sodass bestimmte Zeichen auf anderen Tasten liegen. Beachte das unbedingt, damit die Befehle korrekt ausgeführt werden.

:::

Nach dem Server-Neustart drückst du auf dem Anmeldebildschirm die Tastenkombination **Win+U**. Im sich öffnenden Eingabeaufforderungsfenster gibst du Folgendes ein:

```
net user Administrator DeinNeuesPasswort
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Dein Passwort wurde jetzt geändert. Du musst aber die Änderungen an den **Utilman-Dateien** wieder rückgängig machen. Starte dazu einfach deinen Server neu und wiederhole die Schritte. In der Eingabeaufforderung führst du dann diese Befehle aus:

```
d:
cd Windows
cd System32
del utilman.exe
ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Fazit

Wenn du den Prozess abgeschlossen hast, solltest du erfolgreich ein neues Passwort für den Administrator-User gesetzt haben. Damit kannst du dich jetzt wieder per Remote Desktop Verbindung einloggen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂