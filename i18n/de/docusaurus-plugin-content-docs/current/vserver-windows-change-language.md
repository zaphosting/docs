---
id: vserver-windows-change-language
title: "VPS: Sprache auf Windows Server hinzufügen/ändern"
description: Informationen darüber, wie du die Sprache deines Windows VPS von ZAP-Hosting ändern kannst und wie du Sprachen hinzufügst - ZAP-Hosting.com Dokumentation
sidebar_label: Sprache hinzufügen/ändern
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem ist in einer Vielzahl von Sprachen lokalisiert, so dass du problemlos deine Muttersprache verwenden kannst. In diesem Anleitung stellen wir dir die Methoden vor, mit denen du die Sprache deines Windows-Servers ändern kannst.

:::info
Bei der anfänglichen Serverkonfiguration kannst du zwischen der englischen und der deutschen Serverversion wählen, die bei der Auswahl der Betriebssystemversion durch die Tags **(EN)** und **(DE)** hervorgehoben werden.
:::

<InlineVoucher />

## Hinzufügen von Sprachpaketen

Sprachpakete sind eine nützliche Funktion, die in Windows eingebaut ist und mit der du ganz einfach lokalisierte Sprachpakete auf deinem Server verwalten kannst.

Verbinde dich zunächst über RDP mit deinem Windows-Server. Wenn du dabei Hilfe brauchst, sieh dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) an.

Sobald du verbunden bist, suche über die Windows-Suchleiste oder durch Drücken der Windows-Taste/des Windows-Symbols und die Suchleiste im Startmenü nach **Sprachen**.

![](https://screensaver01.zap-hosting.com/index.php/s/Rf4inxAES3tBH8E/preview)

Finde auf dieser Seite den Abschnitt Sprache und drücke auf den Button **Sprache hinzufügen**. 

![](https://screensaver01.zap-hosting.com/index.php/s/mbKyb4FiNZnYtDj/preview)

Suche im Menü nach der Sprache, die du installieren möchtest, und wähle sie aus, indem du auf **Next** drückst. Vergewissere dich auf der folgenden Seite, dass alle Optionen angekreuzt sind, einschließlich der Option **Als Windows-Anzeigesprache festlegen**, wenn du sie sofort aktivieren möchtest.

:::important
Um die Sprache im Windows-Betriebssystem selbst zu ändern, musst du sicherstellen, dass die ausgewählte Sprache die Funktion **Anzeigesprache** unterstützt.
:::

:::tip
Wenn du im Feld **Anzeigesprache** keine Sprachen siehst, installiere bitte alle ausstehenden Windows-Updates über **Update & Sicherheit** in den Einstellungen, um diesen Fehler zu [beheben](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gdAjwb3Q4ofmsAr/preview)

Windows beginnt nun mit dem Herunterladen des ausgewählten Sprachpakets. Bitte habe etwas Geduld, da dieser Vorgang einige Zeit in Anspruch nehmen kann.

Wenn du nach Abschluss des Downloads die Option **Als Windows-Anzeigesprache festlegen** nicht ausgewählt hast, gehe noch einmal auf die Seite mit den Sprachen und wähle sie im Dropdown-Menü aus.

![](https://screensaver01.zap-hosting.com/index.php/s/5ggZyjBmENEzCgS/preview)

Starte schließlich deinen Server neu und die neue Sprache wird verwendet. Du hast erfolgreich Sprachpakete auf deinem Windows-Server verwaltet.

## Server OS neu installieren

Wenn du Probleme mit dem Ändern der Sprachpakete hast oder dein Server noch ganz neu ist, kannst du deinen Windows-Server einfach über die verfügbaren Betriebssystemversionen auf Englisch oder Deutsch neu installieren.

:::warning
Die Neuinstallation des Betriebssystems ist ein zerstörerischer Prozess und **wird** alle Daten auf dem Server löschen. Stelle sicher, dass du alle wichtigen Daten sicherst, bevor du mit diesem Schritt fortfährst.
:::

Dazu gehst du in das Webinterface deines Servers und rufst den Bereich **Einstellungen** auf.

Auf dieser Seite kannst du zwischen **Windows (EN)** und **Windows (DE)** für die jeweilige Sprache wählen und dich für die Neuinstallation des Servers entscheiden.

![](https://screensaver01.zap-hosting.com/index.php/s/9b6njXx3PMdCG6s/preview)

Sobald du die Neuinstallation gestartet hast, sei bitte geduldig, da es einige Zeit (bis zu 30 Minuten) dauern kann, bis der Server den gesamten Prozess abgeschlossen hat.