---
id: vserver-windows-nointernet
title: "vServer: Kein Internet – Fehler beheben"
description: "Entdecke, wie du Internetverbindungsprobleme auf deinem Windows VPS effektiv beheben kannst → Jetzt mehr erfahren"
sidebar_label: Kein Internet beheben
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine unterbrochene oder fehlerhafte Internetverbindung kann verschiedene Ursachen haben, wie z.B. falsche IP-Adresse, Subnetzmaske, Gateway, DNS-Server oder Firewall-Einstellungen. In dieser Anleitung erklären wir dir, wie du mögliche Netzwerkprobleme selbstständig findest und behebst.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="So behebst du Internetverbindungsprobleme auf deinem Windows VPS" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder lieber auf die unterhaltsamste Art lernst!"/>



<InlineVoucher />

## VNC-Zugang ohne Internet

Falls du dich wegen einer nicht funktionierenden Internetverbindung nicht per RDP (Remote Desktop) mit deinem Server verbinden kannst, gibt es eine Alternative: die VNC (Virtual Network Computing) Konsole, die du auf unserer Webseite findest.

Diese Option ermöglicht dir den Zugriff auf deinen Server und die Behebung von Problemen, selbst wenn die Internetverbindung nicht funktioniert. Du findest sie im **Tools->VNC-Console** Bereich im Webinterface deines Servers.

Auf dieser Seite kannst du die Konsole mit dem Button **Open Web Client** aktivieren und dich mit deinen gewohnten Zugangsdaten einloggen.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Fehlerbehebung

### IP-Adresse, Subnetzmaske und Gateway prüfen

Der erste Schritt bei der Fehlersuche ist sicherzustellen, dass die technische Konfiguration des Netzwerkadapters auf deinem Server korrekt ist – also IP-Adresse, Subnetzmaske und Gateway.

Gehe dazu im Webinterface deines Servers in den Bereich **Settings->IP-Addresses**, wo du alle IP-Adressen sehen kannst, die du aktuell mit deinem Service gemietet hast.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Verbinde dich nun per RDP oder VNC-Konsole mit deinem Server, falls du Probleme hast. Öffne die Windows-Netzwerkadapter-Einstellungen über: 
```
Einstellungen -> Netzwerk und Internet -> Adapteroptionen ändern -> Netzwerkadapter
```

Suche die Option **Internetprotokoll, Version 4 (TCP/IPv4)** in der Liste und klicke auf **Eigenschaften**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Adapter konfigurieren

Vergleiche die Angaben im Adapter und stelle sicher, dass sie wie folgt eingestellt sind:
- IP-Adresse: Diese sollte mit der IP-Adresse übereinstimmen, die du auf der **IP-Addresses** Seite im Webinterface findest.
- Subnetzmaske: Normalerweise `255.255.255.0`, da unser Netzwerk Klasse C verwendet.
- Standardgateway: Das ist deine IP-Adresse, bei der das letzte Oktett (`.xxx`) durch `.1` ersetzt wird.

#### Beispiel-Konfiguration

:::info
Das ist ein **Beispiel**, um es dir leichter zu machen. Ersetze die IP-Adresse durch die **eigene** IP deines Servers.
:::

Bei einer IP-Adresse von `185.223.28.163` sollte die Konfiguration so aussehen:

| Einstellung     | Wert           |
| --------------- | -------------- |
| IP-Adresse      | 185.223.28.163 |
| Subnetzmaske    | 255.255.255.0  |
| Standardgateway | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Wenn alles passt, klicke auf **Ok**, um die Änderungen zu übernehmen. Wir empfehlen, den Server neu zu starten, um die Fehlerbehebung abzuschließen.



### DNS-Server Einstellungen

Ein weiterer Schritt, falls du weiterhin Probleme mit der Internetverbindung hast, ist die Überprüfung der DNS-Server-Konfiguration. Ersetze fehlende oder fehlerhafte DNS-Server-Einträge durch bekannte, zuverlässige Hosts.

Wir empfehlen die DNS-Server von Google oder Cloudflare, da sie weit verbreitet und stabil sind.

| DNS-Anbieter | DNS-Server Werte                     |
| ------------ | ----------------------------------- |
| Google       | Bevorzugt: 8.8.8.8 / Alternativ: 8.8.4.4 |
| Cloudflare   | Bevorzugt: 1.1.1.1 / Alternativ: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Klicke danach wieder auf **Ok**, um die Änderungen zu speichern. Auch hier empfehlen wir einen Neustart des Servers, um die Einstellungen zu übernehmen.

:::tip
Du kannst die Eingabeaufforderung (cmd.exe) auf deinem Server öffnen und folgenden Befehl ausführen, um die DNS-Server schnell und einfach zu setzen: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Firewall-Einstellungen

Der letzte Schritt bei der Fehlerbehebung ist sicherzustellen, dass die Windows-Firewall richtig konfiguriert ist.

Wir empfehlen, die Windows-Firewall testweise komplett zu deaktivieren, um zu prüfen, ob das Problem dadurch verschwindet. Öffne die Windows-Suche, gib **Windows Defender Firewall** ein und wähle die **Windows Defender Firewall ein- oder ausschalten** Option links aus.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Wenn das Problem mit deaktivierter Firewall behoben ist, liegt die Ursache wahrscheinlich an einer falschen Firewall-Konfiguration.

Die Lösung hängt stark vom konkreten Problem ab. Für weitere Hilfe bei der Verwaltung von Firewall-Regeln nutze bitte unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.



## Netzwerk-Konfiguration zurücksetzen

Du kannst die Netzwerkkonfiguration auch im Webinterface deines VPS zurücksetzen, indem du auf der Einstellungsseite den Button **Netzwerkkonfiguration zurücksetzen** klickst. Dabei werden IP-Adresse, Subnetzmaske, Gateway und DNS-Server auf die ursprünglichen Werte zurückgesetzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Abschluss
Wenn du alle Schritte befolgt hast, sollte die Verbindung wieder wie gewohnt funktionieren. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung – melde dich einfach! 🙂

<InlineVoucher />