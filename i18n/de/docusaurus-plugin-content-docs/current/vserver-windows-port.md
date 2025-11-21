---
id: vserver-windows-port
title: "vServer: Windows Defender Firewall-Regeln verwalten"
description: "Entdecke, wie du Windows Defender Firewall-Regeln verwaltest und Portweiterleitungen für sichere Server-Kommunikation optimierst → Jetzt mehr erfahren"
sidebar_label: Portweiterleitung (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windows OS verfügt über die eigene Windows Defender Firewall, die den eingehenden und ausgehenden Traffic zwischen deinem Server und dem Internet verwaltet. In dieser Anleitung zeigen wir dir, wie du Firewall-Regeln verwaltest und geben dir allgemeine Tipps zur Portweiterleitung.

<InlineVoucher />

## Zugriff auf die Windows Defender Firewall

Windows OS beinhaltet die **Windows Defender Firewall mit erweiterter Sicherheit** als Kernsystemanwendung, mit der du Firewall-Regeln einfach an einem Ort verwalten kannst.

Du kannst darauf zugreifen, indem du einfach in der Windows-Suchleiste danach suchst oder die Windows-Taste/Icon drückst und die Suche im Startmenü nutzt.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Regeln verwalten

Die meisten Anwendungen und Prozesse, vor allem solche, die über das Internet erreichbar sein müssen, wie Gameserver oder Webserver, benötigen Portweiterleitungen, damit Clients mit deinem Server (dem Host) kommunizieren können.

:::info
Standardmäßig öffnet Windows die Firewall nur für Anwendungen, die es benötigen, und hält alle anderen Ports geschlossen. Das verhindert unnötige Portfreigaben und reduziert das Risiko. Deshalb siehst du zum Beispiel beim ersten Start eines Spiels oft UAC-Abfragen, um eine neue Firewall-Regel zu bestätigen.
:::

In Windows kannst du Regeln auf zwei einfache Arten verwalten: Entweder erstellst du Regeln für Programme oder du erstellst Regeln, die Ports als Ganzes abdecken (und somit alle Programme oder Prozesse, die diesen Port nutzen).

Es gibt zwei Regeltypen:
- Eingehende Regel: Kontrolliert eingehende Kommunikation (vom Internet zu deinem Server).
- Ausgehende Regel: Kontrolliert ausgehende Kommunikation (von deinem Server ins Internet).

Normalerweise musst du beim Portweiterleiten beide Regeltypen erstellen, um die Kommunikation mit Clients zu erlauben. Das hängt aber von deinem konkreten Anwendungsfall und Setup ab.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Programm-Regeln

Das Erstellen einer Programm-Regel ist meist die empfohlene Wahl, weil sie die Kommunikation auf ein bestimmtes Programm oder einen Prozess beschränkt, statt einen ganzen Port freizugeben, über den dann jede Anwendung kommunizieren könnte.

Du wirst jetzt zwei Programm-Regeln erstellen, eine ausgehende und eine eingehende Regel, die beide Verbindungen erlauben.

Im Beispiel unten richtest du nur die **eingehende** Regel ein. Die Schritte sind identisch, also solltest du sie auch für die ausgehende Regel wiederholen.

Starte, indem du in der Seitenleiste mit Rechtsklick auf **Eingehende Regeln** klickst und die Option **Neue Regel...** auswählst.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Im ersten Schritt wählst du als Regeltyp die Option **Programm** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Jetzt musst du das Programm auswählen, für das du die Weiterleitungsregel erstellen möchtest, indem du auf den Durchsuchen-Button klickst. Im Beispiel wurde der Mozilla Firefox Browser als Beispielanwendung gewählt.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Im Aktionsabschnitt wählst du die Option **Verbindung zulassen**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Im Profilabschnitt lässt du alle Optionen angehakt und gehst zum letzten Schritt weiter. Hier solltest du einen aussagekräftigen Namen vergeben, unter dem du die Regel später wiedererkennst. Optional kannst du auch eine Beschreibung hinzufügen.

Wenn alles passt, klickst du abschließend auf **Fertig stellen**, um die Regel zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Du hast erfolgreich deine eigene Programm-Regel für deinen Windows-Server erstellt. Wiederhole den Vorgang jetzt, um eine **ausgehende Regel** anzulegen, indem du die gleichen Schritte unter **Ausgehende Regeln** durchführst.

### Port-Regeln

Das Erstellen einer allgemeinen Port-Regel kann für viele Anwendungsfälle ebenfalls sinnvoll sein und folgt ähnlichen Schritten wie zuvor.

Du wirst jetzt zwei Port-Regeln erstellen, eine ausgehende und eine eingehende Regel, die beide Verbindungen erlauben.

Im Beispiel unten richtest du nur die **eingehende** Regel ein. Die Schritte sind identisch, also solltest du sie auch für die ausgehende Regel wiederholen.

Starte, indem du in der Seitenleiste mit Rechtsklick auf **Eingehende Regeln** klickst und die Option **Neue Regel...** auswählst.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Im ersten Schritt wählst du als Regeltyp die Option **Port** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Jetzt musst du den Porttyp (TCP oder UDP) und die Portnummer(n) angeben, die du weiterleiten möchtest. Wenn du sowohl TCP als auch UDP weiterleiten willst, musst du zwei separate Regeln erstellen, eine für jeden Porttyp.

Im Beispiel wurde Port 25565 (TCP) als Beispielport verwendet, der standardmäßig für Minecraft genutzt wird.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Im Aktionsabschnitt wählst du die Option **Verbindung zulassen**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Im Profilabschnitt lässt du alle Optionen angehakt und gehst zum letzten Schritt weiter. Hier solltest du einen aussagekräftigen Namen vergeben, unter dem du die Regel später wiedererkennst. Optional kannst du auch eine Beschreibung hinzufügen.

Wenn alles passt, klickst du abschließend auf **Fertig stellen**, um die Regel zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Du hast erfolgreich deine eigene Port-Regel für deinen Windows-Server erstellt. Wiederhole den Vorgang jetzt, um eine **ausgehende Regel** anzulegen, indem du die gleichen Schritte unter **Ausgehende Regeln** durchführst.

<InlineVoucher />