---
id: vserver-windows-manage-users
title: "VPS: Verwalten von Benutzern auf Windows Server"
description: Informationen zum Hinzufügen und Verwalten zusätzlicher Benutzer auf Ihrem Windows VPS von ZAP-Hosting - ZAP-Hosting.com-Dokumentation
sidebar_label: Benutzer hinzufügen und verwalten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem bietet eine integrierte Benutzerverwaltung, mit der sich zusätzliche Benutzer einfach verwalten lassen. Zu den Vorteilen der Verwendung einzelner Benutzer gehören der gleichzeitige (bis zu 2) Remote-Desktop-Zugriff über eigene Anmeldeinformationen, der individuelle Desktop- und Dateizugriff sowie ein einfaches Berechtigungssystem. In diesem Handbuch wird der Prozess der Benutzerverwaltung auf Ihrem Windows-Server behandelt.

<InlineVoucher />

## Voraussetzungen

Beginne damit, dich über RDP mit deinem Windows-Server zu verbinden. Wenn du dabei Hilfe brauchst, sieh dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) an.

:::important Administrative Privilegien
Stelle sicher, dass du dich mit dem **Administrator**-Benutzer oder einem Benutzer mit Administratorrechten bei deinem Windows-Server anmeldest, da du sonst keine Benutzer verwalten kannst.
:::

Jeder Benutzer, den du auf deinem Windows-Server erstellst, kann seine eigenen Anmeldedaten verwenden, um sich über Remote Desktop mit dem Server zu verbinden. Ebenso hat jeder Benutzer seinen eigenen Desktop, seine eigenen Dateien und Programme, die unabhängig von anderen sind und nur von Benutzern mit Administratorrechten eingesehen werden können. Programme, die speziell für alle Benutzer installiert wurden, sind global zugänglich.

Mit der regulären Windows Server-Lizenz können sich **2** Konten gleichzeitig anmelden und den Server nutzen. Wenn diese Anzahl überschritten wird und ein weiterer Benutzer eine Verbindung herstellt, wird die Verbindung des zuerst verbundenen Benutzers zugunsten des sich verbindenden Benutzers getrennt. Ansonsten gibt es keine Begrenzung für die Anzahl der Benutzerkonten, die erstellt werden können.

## Zugriff auf die Benutzerverwaltung

Die Verwaltung von Benutzerkonten erfolgt über die Einstellungen in der Systemsteuerung. Öffne zunächst das Windows-Startmenü auf deinem Windows-Server und wähle **Systemsteuerung** aus. Wähle die Option **Benutzerkonten** aus, um zu einem weiteren Untermenü zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/GmRNfPtKiznTMkz/preview)

Wähle erneut die Option **Benutzerkonten** im Menü aus, um zu einem Übersichtsfenster zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/miDS3ykNEd62o7F/preview)

Wähle auf der Übersichtsseite die Option **Anderes Konto verwalten** aus, um zum Abschnitt **Konten verwalten** zu gelangen, der hauptsächlich für die Verwaltung von Benutzern verwendet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/NSTr8NTELXQGErd/preview)

Jetzt kannst du die Benutzer auf deinem Windows-Server verwalten. Fahre mit einem der folgenden Abschnitte fort, je nachdem, welche Aktion du durchführen möchtest.

## Neuen Benutzer erstellen

Um mit der Erstellung eines Benutzers zu beginnen, wähle die Option **Benutzerkonto hinzufügen** im Abschnitt **Konten verwalten** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/L8By9aLxyGyZXfK/preview)

Daraufhin wird eine Eingabeaufforderung auf deinem Bildschirm geöffnet, in der du einige Details für das Konto eingeben musst, darunter den Benutzernamen, das Passwort und einen Passwort-Hinweis. Stelle sicher, dass dein Passwort sicher ist, da du sonst einen Validierungsfehler erhalten könntest.

![](https://screensaver01.zap-hosting.com/index.php/s/yMSxx2FmeEjpi3C/preview)

Wenn du fertig bist, klicke einfach auf den Button **Weiter**, um deinen neuen Benutzer zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/kbQRXN5fJasJHsj/preview)

Zuletzt musst du den neuen Benutzer zur Liste der Remote-Desktop-Verbindungen hinzufügen, um sicherzustellen, dass der Server RDP-Verbindungen von diesem akzeptiert. Gehe zur **Systemsteuerung** und rufe **System und Sicherheit** auf.

![](https://screensaver01.zap-hosting.com/index.php/s/C4NYJW2Z4eWkL8i/preview)

Von hier aus **Remotezugriff zulassen** suchen und auswählen, wodurch ein neues Menü geöffnet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/peqDMFkPnNCPAMn/preview)

Im Menü unten auf **Benutzer auswählen...** klicken, wodurch ein neues Menü mit den aktuellen Benutzern mit Remote-Desktop-Zugriff angezeigt wird.

![](https://screensaver01.zap-hosting.com/index.php/s/C5DyeACKKo6ZZTS/preview)

Wähle im Anzeigemenü **Hinzufügen...** aus, um eine neue Benutzerauswahl-Eingabeaufforderung zu öffnen, und wähle dort **Erweitert...** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/Dz8NPjMLmxX7KQE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qyzgkg6qCiamyWn/preview)

Dadurch wird das Fenster erweitert, damit der Benutzer leicht zu finden ist. Über den Button **Jetzt suchen** wird eine Liste der Benutzer angezeigt, in der der neue Benutzer gesucht werden kann. In diesem Beispiel ist dies `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2KiYYGSKYAcGxx/preview)

Wähle den Benutzer aus und verwende die Schaltflächen **OK**, um alle Menüs zu schließen und die Änderungen zu bestätigen.

Du hast erfolgreich einen neuen Benutzer auf deinem Windows-Server mit Zugriff auf den Remote-Desktop erstellt. Du solltest versuchen, über RDP mit den Anmeldedaten des neu erstellten Benutzers auf den Server zuzugreifen, um sicherzustellen, dass alles funktioniert.

## Verwalten von Benutzern

Du kannst alle Benutzer ganz einfach über den Abschnitt **Konten verwalten** verwalten. Wähle einfach einen Benutzer aus, den du verwalten möchtest.

:::important Administrative Privilegien
Um Benutzer verwalten zu können, musst du das Hauptkonto **Administrator** verwenden oder ein Benutzerkonto mit dem Kontotyp Administrator, das über alle erforderlichen Privilegien verfügt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/o63zy946CM4cCpJ/preview)

Auf der Seite kannst du nun eine Vielzahl von Funktionen zur Verwaltung des Benutzers nutzen, darunter die Anpassung von Benutzername, Passwort und Kontotyp sowie das Löschen des Benutzers.

![](https://screensaver01.zap-hosting.com/index.php/s/csCHYTH7RLkaPeT/preview)