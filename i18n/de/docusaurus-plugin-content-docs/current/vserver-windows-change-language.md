---
id: vserver-windows-change-language
title: "vServer: Sprachen auf Windows Server verwalten"
description: "Entdecke, wie du die Spracheinstellungen deines Windows Servers anpasst für ein lokales Erlebnis und bessere Bedienbarkeit → Jetzt mehr erfahren"
sidebar_label: Sprachen hinzufügen & verwalten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS ist in vielen verschiedenen Sprachen lokalisiert, sodass du ganz einfach deine Muttersprache nutzen kannst. In dieser Anleitung zeigen wir dir, wie du die Sprache deines Windows Servers ändern kannst.

:::info
Während der ersten Serverkonfiguration kannst du zwischen einer englischen oder deutschen Serverversion wählen, die bei der OS-Auswahl mit den Tags **(EN)** und **(DE)** gekennzeichnet sind.
:::

<InlineVoucher />

## Sprachpakete hinzufügen

Sprachpakete sind eine praktische Funktion von Windows, mit der du lokalisierten Sprachpakete auf deinem Server einfach verwalten kannst.

Verbinde dich zunächst per RDP mit deinem Windows Server. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugriff (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du verbunden bist, suche über die Windows-Suchleiste oder durch Drücken der Windows-Taste und Eingabe im Startmenü nach **Sprache**.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Auf dieser Seite findest du den Sprachbereich und klickst auf den Button **Sprache hinzufügen**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Suche im Menü nach der Sprache, die du installieren möchtest, und wähle sie mit **Weiter** aus. Auf der nächsten Seite stelle sicher, dass alle Optionen angehakt sind, inklusive der Option **Als Windows-Anzeigesprache festlegen**, falls du die Sprache direkt aktivieren möchtest.

:::important
Um die Sprache systemweit in Windows zu ändern, stelle sicher, dass die ausgewählte Sprache die Funktion **Anzeigesprache** unterstützt.
:::

:::tip
Falls du keine Sprachen mit dem Feld **Anzeigesprache** siehst, installiere alle ausstehenden Windows-Updates über **Update & Sicherheit** in den Einstellungen. Das behebt diesen [Bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows beginnt nun mit dem Download des ausgewählten Sprachpakets. Bitte hab Geduld, das kann eine Weile dauern.

Nach dem Download, falls du die Option **Als Windows-Anzeigesprache festlegen** nicht ausgewählt hast, gehe zurück zur Sprachseite und wähle sie im Dropdown-Menü aus.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Starte abschließend deinen Server neu und die neue Sprache wird verwendet. Du hast erfolgreich Sprachpakete auf deinem Windows Server verwaltet.

## Neuinstallation des Server-Betriebssystems

Wenn du Probleme hast, die Sprachpakete zu ändern oder dein Server noch ganz frisch ist, kannst du deinen Windows Server auch einfach in Englisch oder Deutsch über die verfügbaren OS-Versionen neu installieren.

:::warning
Die Neuinstallation des OS ist ein destruktiver Prozess und **löscht** alle Daten auf dem Server. Sichere unbedingt wichtige Daten, bevor du diesen Schritt durchführst.
:::

Das machst du über das Webinterface deines Servers im Bereich **Einstellungen**.

Hier kannst du zwischen **Windows (EN)** und **Windows (DE)** für die jeweilige Sprache wählen und die Neuinstallation starten.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Nachdem du die Neuinstallation gestartet hast, hab bitte Geduld, da der Vorgang bis zu 30 Minuten dauern kann.

<InlineVoucher />