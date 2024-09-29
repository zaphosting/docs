---
id: vserver-vnc
title: "vServer: VNC (Virtual Network Computing) Konsole"
description: Informationen zur VNC Konsole für Vserver/Rootserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: VNC-Konsole
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

VNC (Virtual Network Computing) ist eine Software, die den Bildschirminhalt eines entfernten Rechners auf einem lokalen Rechner anzeigt und im Gegenzug Tastatur- und Mausbewegungen des lokalen Rechners an den entfernten Rechner sendet. Dies ermöglicht dir auch extern Zugriff zu deinem Server, falls dieser mal nicht ordnungsgemäß zu erreichen ist. 

Im Falle von Start- oder Netzwerkwerkproblemen hast du so weiterhin die Möglichkeit auf das System zuzugreifen und dem entgegenzuwirken. 

<InlineVoucher />

## Nutzung von VNC
Den VNC Webclient findest du im vServer / Rootserver Dashboard. Klicke dazu in der Verwaltung bei Werkzeuge auf die VNC-Konsole Option und öffne im Anschluss die VNC Verbindung über den **Starte VNC-Tunnel** Button. 

![](https://screensaver01.zap-hosting.com/index.php/s/s2gYLt8iC5pzE7L/preview)

Anschließend öffnet sich der Webclient der VNC Konsole. Hier hast du nun die Möglichkeit, die Informationen einzusehen, die der Server zum aktuellen Zeitpunkt liefert. Das kann beispielsweise der Startvorgang, Login-Screen oder die Oberfläche des Betriebssystems sein.

Im folgenden Beispiel ist jetzt ein Windows vServer / Rootserver zu sehen. Dieser ist erfolgreich hochgefahren, wodurch die VNC-Konsole zum aktuellen Zeitpunkt den Login-Screen anzeigt. Hier kannst du dich jetzt ebenfalls anmelden, auch wenn der Server keine aktive Internetverbindung hat. Klicke dazu auf den "Send CtrlAltDel" Button und melde dich mit dem Benutzernamen und Passwort an.

![](https://screensaver01.zap-hosting.com/index.php/s/kiseMCWbpPxTWLM/preview)