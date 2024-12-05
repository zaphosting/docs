---
id: vserver-windows-fs-25
title: "vServer: Landwirtschafts-Simulator 2025 Dedicated Server Einrichtung"
description: Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2025 auf deinen Windows vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Landwirtschafts-Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Windows VPS oder Root-Server und möchtest den Farming Simulator Dedicated Server 2025-Dienst darauf installieren? Dann bist du hier richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Um einen dedizierten Server für den Landwirtschafts-Simulator 2025 zu hosten, benötigst du einen Windows-Server sowie eine gültige Spielelizenz, um den dedizierten Server auszuführen.

Bevor du mit der Installation fortfährst, verbinde dich über Remote Desktop (RDP) mit deinem Windows-Server. Verwende unsere Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du Hilfe benötigst.

### Spielelizenz

Um den dedizierten Server auf deinem Windows-Server zu hosten, musst du eine digitale Kopie von Farming Simulator 2025 direkt von der [Farming Simulator](https://www.farming-simulator.com/buy-now.php)-Website besitzen.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Du kannst nicht denselben Lizenzschlüssel verwenden, mit dem du das Spiel spielst, daher musst du eine **zweite** Kopie des Spiels nur für deinen dedizierten Server kaufen.

:::info Steam-Spielelizenz
Es ist möglich, eine Steam-Spielelizenz zu verwenden, um deinen dedizierten Server zu hosten. Dies kann jedoch sehr unpraktisch sein, da du gezwungen wärst, den Steam-Client ständig im Hintergrund laufen zu lassen. Dies bedeutet auch, dass du aufgrund der Einschränkungen von Steam kein anderes Spiel auf einem anderen System mit demselben Steam-Konto spielen kannst. Daher empfehlen wir dir dringend, stattdessen einen eigenständigen Schlüssel direkt auf der Website zu erwerben, um diesen Aufwand zu vermeiden.

Wenn du jedoch vorhast, eine **Steam**-Lizenz zu verwenden, solltest du die Dateien stattdessen wie gewohnt über Steam installieren und mit dem Abschnitt [**Einrichtung eines dedizierten Servers**](#einrichtung-des-dedizierten-servers) des Anleitungs fortfahren.
:::

Sobald du eine digitale Version auf der Website gekauft hast, erhältst du einen Produktcode an die E-Mail-Adresse, die du beim Bezahlvorgang angegeben hast. Du benötigst diesen Lizenzschlüssel im folgenden Abschnitt, um auf den Spiel-Download zuzugreifen und deinen dedizierten Server während der Einrichtung zu validieren.

## Installation

### Dateien installieren

Nachdem dein Lizenzschlüssel und dein Windows-Server bereit sind, gehe auf deinem Windows-Server zur Seite [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) und gib den Lizenzschlüssel ein, den du zuvor per E-Mail erhalten hast.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Nach erfolgreicher Eingabe erhaltet ihr Zugriff auf eine Seite, die verschiedene Download-Methoden für das Spiel enthält. Sucht die Hauptoption für Windows **Farming Simulator 25 (Windows 10/11)** und wählt Download aus.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Der Download sollte jetzt beginnen und kann einige Zeit dauern, da das gesamte Spiel heruntergeladen wird. Bitte habt Geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Wenn der Vorgang abgeschlossen ist, geht zu euren Downloads und sucht die **.img**, die ihr heruntergeladen habt. Öffnet sie durch einen Doppelklick, wodurch das Laufwerk im Datei-Explorer eingebunden werden sollte.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Führe nun die **Setup.exe**-Datei aus und akzeptiere die UAC-Eingabeaufforderung. Folge dem Setup-Menü, um dein Spiel einzurichten, was auch die Annahme der Nutzungsbedingungen und die Anpassung des Installationspfads umfasst, wenn du dies wünschst.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Bitte habt noch einmal Geduld und wartet, bis der gesamte Installationsvorgang abgeschlossen ist. Sobald dies der Fall ist, könnt ihr das Setup-Menü einfach verlassen. Wir empfehlen, mit der rechten Maustaste auf das verbundene **DVD-Laufwerk** im Datei-Explorer zu klicken und **Auswerfen** auszuwählen, um es zu entfernen, da es nicht mehr benötigt wird. Zu diesem Zeitpunkt ist die Basisinstallation des Spiels abgeschlossen.

### Spiel aktivieren

Nachdem das Spiel installiert wurde, musst du es mindestens einmal ausführen, um es zu aktivieren. Starte das Spiel einfach über die Desktop-Verknüpfung oder über die Windows-Suchleiste.

Beim Start sollte eine Aufforderung zur erstmaligen Einrichtung des Lizenzschlüssels angezeigt werden. Gib den Lizenzschlüssel ein, den du zuvor per E-Mail erhalten hast, und bestätige ihn. Wenn dies erfolgreich war, wird dein Spiel aktiviert und das Spiel wird geladen.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Du kannst das Spiel jetzt schließen, da es nicht mehr benötigt wird, und mit dem folgenden Abschnitt fortfahren, um den dedizierten Server und die dazugehörige Weboberfläche einzurichten. Wenn du eine Fehlermeldung **Video Driver** erhältst, wähle einfach **Nein** aus, um den Startvorgang sofort abzubrechen.

## Einrichtung des dedizierten Servers

Da das Spiel nun bereit ist, musst du einige Konfigurationsoptionen für deinen dedizierten Server anpassen. Beginne mit dem Zugriff auf deinen Spielinstallationsordner. Standardmäßig sollte sich dieser unter `C:\Program Files (x86)\Farming Simulator 2025` befinden, aber es kann auch anders sein, wenn du den Pfad während der Installation geändert hast.

Sobald du hier bist, suche und öffne die **dedicatedServer.xml**-Datei mit einem Texteditor.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Wir empfehlen, die Felder `username` und `passphrase` ganz oben in der Datei an deine eigenen anzupassen. Dies sind die Anmeldedaten, die du verwendest, um dich bei der Webschnittstelle deines Servers anzumelden. Achte darauf, die Datei zu speichern und zu schließen, sobald du fertig bist.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Zugriff auf die Weboberfläche

Nachdem die Anmeldedaten konfiguriert wurden, kannst du den Server starten, indem du die Datei **dedicatedServer.exe** ausführst, die sich im selben Stammordner des Spiels befindet.

:::info Administratorrechte
Stelle sicher, dass du die ausführbare Datei des dedizierten Servers mit Administratorrechten startest, da es sonst sehr wahrscheinlich zu Problemen beim Versuch kommt, den eigentlichen Spielserver zu starten. Du kannst dies tun, indem du mit der rechten Maustaste auf die Datei klickst und **Als Administrator ausführen** auswählst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Dies öffnet ein neues CMD-Fenster, das automatisch alle erforderlichen Zertifikate generiert und Updates und alle erforderlichen Tools installiert. Beim ersten Start kann dies einige Zeit in Anspruch nehmen, bitte habe also Geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Sobald es fertig ist, könnt ihr auf eure Weboberfläche zugreifen, indem ihr `http://[your_serverip]:8080` in einen Webbrowser eingebt. Verwendet die zuvor gespeicherten Anmeldedaten, um euch anzumelden.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Auf dieser Web-Oberfläche kannst du eine Vielzahl von Anpassungen an deinem Server vornehmen, darunter Änderungen an Einstellungen, das Verwalten von Spielständen, das Verwalten von Mods und vieles mehr.

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über Powershell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **Powershell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die Powershell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als nächstes kopierst du die folgenden Befehle und fügst sie in deine Powershell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Farming Simulator 2025-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen FS2025 Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP incoming and outgoing: 8080, 10823
- UDP incoming and outgoing: 8080, 10823

Bitte benutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung, wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>

Sobald ihr diese Regeln hinzugefügt habt, ist euer Server erreichbar, was bedeutet, dass ihr über das Internet auf das Webinterface-Panel zugreifen und euch im Spiel mit dem Server verbinden könnt.

### Server starten

Nachdem du deine Einstellungen angepasst und Firewall-Regeln eingerichtet hast, rufe die Startseite der Weboberfläche auf und klicke auf die Schaltfläche **Start**, um den Startvorgang zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Bei Erfolg sollte der Server hochfahren und du kannst dies über die aktualisierte Benutzeroberfläche und eine neue CMD-Eingabeaufforderung bestätigen, die den Spielserver selbst ausführt. Wenn beim Starten des Servers Fehler auftreten, stelle sicher, dass du die Benutzeroberfläche als Administrator ausführst.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Abschluss

Glückwunsch, du hast den Farming Simulator 2025 Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!