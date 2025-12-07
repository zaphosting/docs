---
id: vserver-windows-change-language
title: "VPS: Gestalte die Sprache auf deinem Windows Server"
description: "Finde heraus, wie du die Spracheinstellungen deines Windows Servers anpasst für ein lokales Feeling und bessere Bedienbarkeit → Jetzt mehr erfahren"
sidebar_label: Sprachen hinzufügen & verwalten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS gibt’s in vielen verschiedenen Sprachen, damit du easy in deiner Muttersprache arbeiten kannst. In diesem Guide zeigen wir dir, wie du die Sprache deines Windows Servers ändern kannst.

:::info
Bei der ersten Server-Konfiguration kannst du zwischen der englischen oder deutschen Server-Version wählen, die mit den Tags **(EN)** und **(DE)** bei der OS-Auswahl gekennzeichnet sind.
:::

<InlineVoucher />

## Sprachpakete hinzufügen

Sprachpakete sind eine coole Windows-Funktion, mit der du lokal angepasste Sprachen auf deinem Server verwalten kannst.

Verbinde dich zuerst per RDP mit deinem Windows Server. Falls du Hilfe brauchst, check unseren Guide zum [Erstzugang (RDP)](vserver-windows-userdp.md).

Sobald du drin bist, such über die Windows-Suche oder drück die Windows-Taste und gib **Sprache** ein.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Auf der Seite findest du den Bereich für Sprachen und klickst auf den Button **Sprache hinzufügen**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Such dir die Sprache raus, die du installieren willst, und klick auf **Weiter**. Auf der nächsten Seite solltest du alle Optionen anhaken, inklusive **Als Windows-Anzeigesprache festlegen**, wenn du die Sprache direkt aktivieren willst.

:::important
Damit die Sprache im gesamten Windows OS geändert wird, muss die ausgewählte Sprache die **Anzeigesprache** unterstützen.
:::

:::tip
Falls du keine Sprachen mit dem Feld **Anzeigesprache** siehst, installier alle ausstehenden Windows-Updates unter **Update & Sicherheit** in den Einstellungen. Das behebt diesen [Bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows lädt jetzt das Sprachpaket runter. Das kann eine Weile dauern, also bleib geduldig.

Wenn der Download fertig ist und du nicht schon bei der Installation **Als Windows-Anzeigesprache festlegen** ausgewählt hast, geh nochmal auf die Sprachseite und stell die Sprache im Dropdown-Menü ein.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Starte deinen Server neu und die neue Sprache wird aktiv. Du hast erfolgreich die Sprachpakete auf deinem Windows Server verwaltet.

## Server-OS neu installieren

Wenn du Probleme hast, die Sprachpakete zu ändern oder dein Server noch ganz frisch ist, kannst du auch einfach dein Windows Server OS neu installieren – entweder auf Englisch oder Deutsch, je nachdem, was du brauchst.

:::warning
Das Neuinstallieren des OS löscht **alle** Daten auf dem Server. Mach unbedingt vorher ein Backup von wichtigen Daten!
:::

Das geht über das Webinterface deines Servers unter dem Bereich **Einstellungen**.

Hier kannst du zwischen **Windows (EN)** und **Windows (DE)** wählen und die Neuinstallation starten.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Nach dem Start der Neuinstallation heißt es abwarten – der Prozess kann bis zu 30 Minuten dauern.

<InlineVoucher />