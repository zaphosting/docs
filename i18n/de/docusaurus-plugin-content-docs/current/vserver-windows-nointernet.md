---
id: vserver-windows-nointernet
title: "vServer: Fehlersuche bei fehlendem Internet"
description: Informationen zur Fehlersuche und Behebung von Netzwerk- und Internetproblemen auf Windows vRootserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Fehlersuche bei fehlendem Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine unterbrochene oder fehlerhafte Internetverbindung kann verschiedene Ursachen haben, z. B. eine falsche IP-Adresse, Subnetzmaske, Gateway, DNS-Server oder Firewall-Einstellungen. In diesem Anleitung erklären wir dir, wie du mögliche Netzwerkprobleme beheben kannst.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GLDdSYoaE6jeW9K/preview" title="How to Fix Internet Connection Issues on Windows VPS" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## VNC-Zugang ohne Internet

Falls du dich aufgrund einer nicht funktionierenden Internetverbindung nicht über RDP (Remote Desktop) mit deinem Server verbinden kannst, gibt es eine Alternative: die VNC-Konsole (Virtual Network Computing), die auf unserer Website zur Verfügung steht.

Mit dieser Option kannst du auf deinen Server zugreifen und Probleme beheben, auch wenn die Internetverbindung nicht funktioniert. Du kannst darauf zugreifen, indem du in der Weboberfläche deines Servers den Bereich **Werkzeuge->VNC-Konsole** aufrufst.

Auf dieser Seite kannst du die Konsole aktivieren, indem du auf die Schaltfläche **Webclient öffnen** klickst und dich mit deinen üblichen Anmeldedaten anmeldest.

![](https://screensaver01.zap-hosting.com/index.php/s/ZJSbjmTYtmi5Lie/preview)

## Methoden zur Fehlerbehebung

### IP-Adresse, Subnetzmaske und Gateway-Einstellungen überprüfen

Der erste Schritt zur Fehlerbehebung besteht darin, sicherzustellen, dass die technische Konfiguration des Netzwerkadapters auf deinem Server korrekt ist, d.h. die IP-Adresse, die Subnetzmaske und das Gateway.

Beginne mit dem Abschnitt **Einstellungen->IP-Adressen** auf der Weboberfläche deines Servers, wo du alle IP-Adressen sehen kannst, die du derzeit für deinen Dienst mietest.

![](https://screensaver01.zap-hosting.com/index.php/s/D8gDpL24wkqR4rF/preview)

Greife nun über RDP oder die VNC-Konsole auf deinen Server zu, wenn du Probleme hast. Gehe in die Einstellungen deines Windows-Netzwerkadapters, indem du in: 
```
Einstellungen -> Netzwerk und Internet -> Adapteroptionen ändern -> Netzwerkadapter
```

Suche die Option **Internetprotokoll, Version 4 (TCP/IPv4)** in der Liste und wähle **Eigenschaften**.

![](https://screensaver01.zap-hosting.com/index.php/s/QmcworojD6pMQby/preview)

#### Adapter konfigurieren

Vergleiche die im Adapter gefundenen Informationen und stelle sicher, dass sie wie folgt eingestellt sind
- IP-Adresse: Dies sollte die IP-Adresse sein, die du auf der Seite **IP-Adressen** im Webinterface findest.
- Subnetzmaske: Diese sollte normalerweise `255.255.255.0` lauten, da unser Netzwerk die Netzwerkklasse C verwendet.
- Standard-Gateway: Dies sollte deine IP-Adresse sein, die dem ersten Wert entspricht, wobei das letzte Oktett (`.xxx`) entfernt und durch eine `.1` ersetzt wird.

#### Beispiel-Setup

:::info
Bitte beachte, dass dies ein **Beispiel** ist, das wir zum besseren Verständnis zur Verfügung stellen. Du solltest die IP-Adresse durch die IP-Adresse deines **eigenen** Servers ersetzen.
:::

Mit einer IP-Adresse von `185.223.28.163` sollte deine Konfiguration wie folgt aussehen:

| Einstellung      | Wert           |
| ---------------- | -------------- |
| IP-Adresse       | 185.223.28.163 |
| Subnetzmaske     | 255.255.255.0  |
| Standard-Gateway | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/9B7ms2J8nxYzCep/preview)

Wenn du fertig bist, drücke **Ok**, um die Änderungen zu übernehmen. Wir empfehlen, den Server neu zu starten, um die Fehlerbehebung abzuschließen.

### DNS Server Einstellungen

Ein weiterer Schritt zur Fehlerbehebung, wenn du weiterhin Probleme mit der Internetnutzung hast, ist sicherzustellen, dass der DNS-Server richtig konfiguriert ist. Du solltest die fehlenden oder vorhandenen DNS-Serverwerte durch einen bekannten Host ersetzen.

Wir empfehlen, entweder die DNS-Server von Google oder Cloudflare zu verwenden, da sie weit verbreitet und zuverlässig sind.

| DNS-Anbieter | DNS-Server-Werte                        |
| ------------ | --------------------------------------- |
| Google       | Bevorzugt: 8.8.8.8 / Alternate: 8.8.4.4 |
| Cloudflare   | Bevorzugt: 1.1.1.1 / Alternate: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/frYTimNEFzBjANy/preview)

Wenn du fertig bist, drücke erneut **Ok**, um die Änderungen zu übernehmen. Auch hier empfehlen wir einen Neustart des Servers, um die Fehlersuche abzuschließen.

### Firewall-Einstellungen

Der letzte Schritt zur Fehlerbehebung besteht darin, sicherzustellen, dass die Windows Firewall richtig konfiguriert ist. 

Wir empfehlen, die Windows Firewall vorübergehend komplett zu deaktivieren, um zu sehen, ob die Probleme weiterhin bestehen. Verwende die Suchfunktion von Windows, um **Windows Defender Firewall-Einstellungen** zu öffnen und wähle im linken Bereich die Option **Windows Defender Firewall ein- oder ausschalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/kSbpgpkNotFgiXL/preview)

Wenn die Probleme behoben sind, wenn die Firewall deaktiviert ist, ist die Ursache deines Problems wahrscheinlich eine Fehlkonfiguration der Firewall.

Die Lösung für die Firewall hängt stark von dem Problem ab, das du hast. Wenn du weitere Hilfe bei der Verwaltung von Firewall-Regeln benötigst, verwende bitte unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.