---
id: vserver-windows-port
title: "vServer: Verwaltung von Windows Defender Firewall-Regeln"
description: Informationen zur Verwaltung von Windows Defender Firewall-Regeln, einschließlich Portweiterleitung, auf deinem Windows VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Portweiterleitung (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Windows-Betriebssystem verfügt über eine eigene Windows Defender Firewall, die den ein- und ausgehenden Datenverkehr zwischen dem Server und dem Internet verwaltet. In diesem Anleitung gehen wir auf die Verwaltung der Firewall-Regeln und allgemeine Tipps zur Portweiterleitung ein.

<InlineVoucher />

## Zugriff auf die Windows Defender Firewall

Das Windows-Betriebssystem enthält die Anwendung **Windows Defender Firewall mit erweiterter Sicherheit** als zentrale Systemanwendung, mit der du Firewall-Regeln ganz einfach an einem Ort verwalten kannst.

Du kannst darauf zugreifen, indem du in der Windows-Suchleiste danach suchst oder indem du die Windows-Taste/das Windows-Symbol drückst und die Suchleiste im Startmenü verwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/Ppr6fwGmCArZHwk/preview)

## Regeln verwalten

Die meisten Anwendungen und Prozesse, vor allem solche, die über das Internet erreichbar sein müssen, wie z. B. Gameserver oder Webserver, benötigen eine Portweiterleitung, um sicherzustellen, dass die Clients mit deinem Server (dem Host) kommunizieren können.

:::info
In der Standardeinstellung öffnet Windows die Firewall nur für Anwendungen, die sie benötigen, und hält alle anderen Ports geschlossen. So wird verhindert, dass Ports unnötigerweise geöffnet werden, um das Risiko zu verringern. Das ist auch der Grund, warum du beim ersten Start von Spielen UAC-Eingabeaufforderungen siehst, um eine neue Firewall-Regel zu bestätigen.
:::

In Windows können Regeln auf zwei Arten verwaltet werden: indem du Regeln für Programme erstellst oder indem du Regeln erstellst, die alle Ports abdecken (und damit alle Programme oder Prozesse, die sie benutzen).

Es gibt zwei Arten von Regeln:
- Eingehende Regel: Eine Regel, die die eingehende Kommunikation (vom Internet zu deinem Server) kontrolliert.
- Ausgehende Regel: Eine Regel, die die ausgehende Kommunikation kontrolliert (von deinem Server ins Internet).

Normalerweise musst du bei der Portweiterleitung beide Arten von Regeln erstellen, um die Kommunikation mit den Clients zu ermöglichen. Dies hängt jedoch von deinem speziellen Anwendungsfall und deiner Einrichtung ab.

![](https://screensaver01.zap-hosting.com/index.php/s/CXnoaSERDzWcCqA/preview)

### Programmregeln

Die Erstellung einer Programmregel ist in der Regel die beste Wahl, da sie die Kommunikation auf ein bestimmtes Programm oder einen Prozess beschränkt und nicht auf einen ganzen Port, so dass jedes Programm/jeder Dienst über diesen Port kommunizieren kann.

Du wirst nun zwei Programmregeln erstellen, eine ausgehende und eine eingehende Regel, die beide eine Verbindung akzeptieren.

Im folgenden Beispiel richtest du nur die **Eingangsregel** ein. Die Schritte sind genau dieselben, daher solltest du die Schritte wiederholen, um auch die Ausgangsregel selbst zu erstellen.

Klicke zunächst mit der rechten Maustaste auf **Eingangsregeln** in der Seitenleiste und wähle die Option **Neue Regel...**.

![](https://screensaver01.zap-hosting.com/index.php/s/3C3cgLjSSriygfG/preview)

Im ersten Abschnitt wählst du die Option **Programm** als Regeltyp aus.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Jetzt musst du das Programm, für das du die Weiterleitungsregel erstellen möchtest, mit des Buttons Durchsuchen auswählen. In diesem Beispiel wurde der Mozilla Firefox Browser als Beispielanwendung ausgewählt.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Im Abschnitt Aktion wählst du die Option **Verbindung zulassen**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Lasse im Abschnitt Profil alle Optionen angekreuzt und fahre mit dem letzten Abschnitt fort. Hier solltest du einen aussagekräftigen Namen festlegen, mit dem du dich an die Regel erinnern kannst, und du kannst bei Bedarf eine optionale Beschreibung hinzufügen.

Wenn du fertig bist, klicke auf den Button **Finish**, um die Regel zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Du hast erfolgreich deine eigene Programmregel für deinen Windows-Server erstellt. Wiederhole nun den Vorgang, um eine **Ausgangsregel** zu erstellen, indem du dieselben Schritte befolgst, sie aber unter dem Abschnitt Ausgangsregeln erstellst.

### Port-Regeln

Das Erstellen einer allgemeinen Portregel kann ebenfalls für viele Anwendungsfälle nützlich sein und folgt ähnlichen Schritten wie zuvor.

Du erstellst nun zwei Programmregeln, eine ausgehende und eine eingehende Regel, die beide eine Verbindung akzeptieren.

Im folgenden Beispiel wirst du nur die Regel **Eingang** einrichten. Die Schritte sind genau dieselben, daher solltest du die Schritte wiederholen, um auch die Ausgangsregel selbst zu erstellen.

Klicke zunächst mit der rechten Maustaste auf **Eingangsregeln** in der Seitenleiste und wähle die Option **Neue Regel...**.

![](https://screensaver01.zap-hosting.com/index.php/s/3C3cgLjSSriygfG/preview)

Im ersten Abschnitt wählst du die Option **Port** als Regeltyp aus.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Jetzt musst du den Port-Typ (TCP oder UDP) und den/die zugewiesenen Port(s) festlegen, die du weiterleiten möchtest. Wenn du sowohl TCP- als auch UDP-Ports weiterleiten willst, musst du zwei separate Regeln erstellen, eine für jeden Porttyp.

In diesem Beispiel wurde Port 25565 (TCP) als Beispielport verwendet, der als Standardport für Minecraft verwendet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Wähle im Abschnitt Aktion die Option **Verbindung zulassen**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Lasse im Abschnitt Profil alle Optionen angekreuzt und fahre mit dem letzten Abschnitt fort. Hier solltest du einen aussagekräftigen Namen festlegen, mit dem du dich an die Regel erinnern kannst, und du kannst bei Bedarf eine optionale Beschreibung hinzufügen.

Wenn du fertig bist, klicke auf den Button **Finish**, um die Regel zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Du hast erfolgreich deine eigene Portregel für deinen Windows-Server erstellt. Wiederhole nun den Vorgang, um eine **Ausgangsregel** zu erstellen, indem du dieselben Schritte ausführst, sie aber im Abschnitt für ausgehende Regeln erstellst.