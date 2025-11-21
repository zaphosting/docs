---
id: vserver-windows-manage-users
title: "vServer: Benutzer auf Windows Server verwalten"
description: "Entdecke, wie du mehrere Benutzerkonten auf deinem Windows Server sicher verwaltest – für gleichzeitigen Remote-Zugriff und personalisierte Desktops → Jetzt mehr erfahren"
sidebar_label: Benutzer hinzufügen & verwalten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem bietet eine integrierte Benutzerverwaltung, mit der du ganz einfach zusätzliche Benutzer anlegen kannst. Einige Vorteile von individuellen Benutzern sind der gleichzeitige (bis zu 2) Remote-Desktop-Zugriff mit eigenen Zugangsdaten, individuelle Desktops und Dateizugriffe sowie ein einfaches Berechtigungssystem. In dieser Anleitung zeigen wir dir, wie du Benutzer auf deinem Windows Server verwaltest.

<InlineVoucher />

## Vorbereitung

Starte, indem du dich per RDP mit deinem Windows Server verbindest. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugriff (RDP)](vserver-windows-userdp.md) Anleitung an.

:::important Administrative Rechte
Stelle sicher, dass du dich mit dem **Administrator**-Benutzer oder einem Benutzer mit administrativen Rechten auf deinem Windows Server anmeldest, sonst kannst du keine Benutzer verwalten.
:::

Jeder Benutzer, den du auf deinem Windows Server anlegst, kann sich mit seinen eigenen Zugangsdaten per Remote Desktop verbinden. Jeder Benutzer hat seinen eigenen Desktop, Dateien und Programme, die unabhängig von anderen sind und nur von Benutzern mit administrativen Rechten eingesehen werden können. Programme, die für alle Benutzer installiert wurden, sind global zugänglich.

Mit der regulären Windows Server Lizenz können **2** Accounts gleichzeitig auf dem Server angemeldet sein. Wird diese Anzahl überschritten und ein weiterer Benutzer verbindet sich, wird der zuerst verbundene Benutzer zugunsten des neuen Benutzers getrennt. Ansonsten gibt es keine Begrenzung, wie viele Benutzerkonten erstellt werden können.

## Benutzerverwaltung öffnen

Die Verwaltung der Benutzerkonten erfolgt über die Einstellungen im Control Panel. Öffne dazu das Windows-Startmenü auf deinem Windows Server und wähle **Systemsteuerung** aus. Wähle dann die Option **Benutzerkonten**, die dich in ein weiteres Untermenü führt.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Wähle erneut die Option **Benutzerkonten** im Menü, um zur Übersichtsseite zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Auf der Übersichtsseite klickst du auf **Anderes Konto verwalten**, um zum Bereich **Konten verwalten** zu gelangen, der hauptsächlich für die Benutzerverwaltung genutzt wird.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Jetzt bist du bereit, die Benutzer auf deinem Windows Server zu verwalten. Fahre mit dem Abschnitt fort, der zu deiner gewünschten Aktion passt.

## Neuen Benutzer erstellen

Um einen neuen Benutzer anzulegen, wähle die Option **Neues Benutzerkonto hinzufügen** im Bereich **Konten verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Es öffnet sich ein Fenster, in dem du einige Details für das Konto eingeben musst, darunter Benutzername, Passwort und ein Passwort-Hinweis. Achte darauf, ein sicheres Passwort zu wählen, sonst bekommst du eine Fehlermeldung.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Wenn alles ausgefüllt ist, klicke auf Weiter und dein neuer Benutzer wird erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Zum Schluss musst du den neuen Benutzer noch zur Remote-Desktop-Verbindungsliste hinzufügen, damit der Server RDP-Verbindungen von diesem Benutzer akzeptiert. Gehe dazu ins **Control Panel** und öffne **System und Sicherheit**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Dort findest du **Remotezugriff zulassen** – klicke darauf, um ein neues Menü zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Im Menü klickst du unten auf **Benutzer auswählen...**, woraufhin ein Fenster mit den aktuellen Benutzern mit Remote-Desktop-Zugriff erscheint.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

Klicke hier auf **Hinzufügen...**, um einen neuen Benutzer auszuwählen, und wähle dann **Erweitert...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Das Fenster erweitert sich, sodass du deinen Benutzer leichter findest. Nutze den Button **Jetzt suchen**, um eine Liste der Benutzer zu erhalten, und suche deinen neuen Benutzer, in diesem Beispiel `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Wähle den Benutzer aus und bestätige mit **OK**, um alle Fenster zu schließen und die Änderungen zu speichern.

Du hast erfolgreich einen neuen Benutzer auf deinem Windows Server mit Remote-Desktop-Zugriff erstellt. Teste am besten direkt, ob du dich mit den Zugangsdaten des neuen Benutzers per RDP verbinden kannst.

## Benutzer verwalten

Alle Benutzer kannst du bequem im Bereich **Konten verwalten** steuern. Wähle einfach den Benutzer aus, den du bearbeiten möchtest.

:::important Administrative Rechte
Um Benutzer verwalten zu können, musst du mit dem Haupt-**Administrator**-Konto oder einem Benutzer mit Administratorrechten angemeldet sein, der alle nötigen Berechtigungen besitzt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Auf der Seite kannst du verschiedene Funktionen nutzen, um den Benutzer zu verwalten, z. B. Benutzername, Passwort, Kontotyp ändern oder den Benutzer löschen.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />