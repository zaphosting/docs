---
id: dedicated-windows-troubleshooting-restore-access
title: "Dedicated Server: Zugang wiederherstellen"
description: Erfahre, wie du den Zugang zu deinem verlorenen Windows Administrator Account bei einem dedizierten Server von ZAP-Hosting wiederherstellen kannst - ZAP-Hosting.com Documentation
sidebar_label: Zugang wiederherstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Es kann schnell passieren.. Du versuchst, dich bei deinem Windows Server anzumelden, doch dein Passwort wird nicht mehr akzeptiert oder du hast es einfach vergessen. Plötzlich bist du ausgesperrt und der Zugriff auf wichtige Daten und Anwendungen ist nicht mehr möglich. So etwas ist natürlich ärgerlich, aber noch lange nicht das Ende. Mit dem folgenden Weg kannst du den Zugriff zu deinem Windows Server wiederherstellen und deine Arbeit ohne größere Unterbrechungen fortsetzen.

<InlineVoucher />

## Vorbereitung
Das Zurücksetzen des Zugangs vom Administrator Account erfolgt durch die Nutzung einer Windows-ISO-Datei. Es wird dementsprechend die gleiche ISO Datei verwendet, die auch ursprünglich für die Installation des Windows Server Betriebssystems verwendet wurde. 

Dieser Schritt kann entweder über den Weg der [**Erstinstallation**](dedicated-setup.md) oder per **[ISO](dedicated-iso.md)** erfolgen. Wähle beziehungsweise gebe ja nach verwendeter Vorgehensweise die ISO Datei an, die ursprünglich verwendet wurde.

Mounte die ISO und starte das System im Anschluss neu. Es sollte sich nach dem nächsten Startvorgang erneut die Installationsoberfläche von Windows öffnen. Das Ergebnis sollte wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Zugang wiederherstellen

Nun geht es darum, den Zugang zum Administrator-Account zurückzusetzen. Befolge dazu die ersten Schritte des Setups erneut. Allerdings musst du nur bis zum Start der Installation gehen und an diesem Punkt dann zu **Repair your computer** navigieren.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Daraufhin öffnen sich die erweiterten Optionen. Klicke dort auf die Auswahloption **Troubleshoot** und dann auf **Command Prompt**. Es öffnet sich daraufhin die Eingabeaufforderung (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

In der Eingabeauffoderung angelagt müssen nun die unten aufgelisteten Befehle nacheinander einzeln ausgeführt werden:

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

Das Tastaturlayout kann sich in der iLO HTML Konsole zu deinem eigenen unterscheiden, sodass gewisse Symbole auf anderen Tasten liegen. Berücksichtige dies für eine korrekte Ausführung der Befehle.

:::



Nach dem Neustart deines Servers, drücke auf dem Anmeldebildschirm die Tastenkombination **Win+U**. In der Eingabeaufforderung gib anschließend bitte Folgendes ein:

```
net user Administrator DeinNeuesPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Dein Passwort wurde nun geändert. Allerdings musst du deine Änderungen bezüglich der **Utilman Dateien** wieder rückgängig machen. Starte dafür erneut einfach deinen Server neu und folge dieser Anleitung erneut. Führe in der Eingabeaufforderung dann bitte erneut folgende Befehle aus:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```



## Abschluss

Nachdem du den Vorgang vollständig durchgeführt hast, solltest du erfolgreich ein neues Passwort für den Administrator Benutzer gesetzt haben. Mit diesem kannst du dich nun wieder per Remotedesktopverbindung einloggen. 

<InlineVoucher />
