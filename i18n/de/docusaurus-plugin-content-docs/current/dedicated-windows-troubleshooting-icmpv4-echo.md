---
id: dedicated-windows-troubleshooting-icmpv4-echo
title: "Dedicated: Netzwerk-Problemlösung – ICMPv4 Echo fehlt – Server erscheint offline"
description: "Erfahre, wie du ICMPv4 Echo-Anfragen in der Windows-Firewall erlaubst, damit dein Server von Monitoring-Systemen korrekt erkannt wird → Jetzt mehr erfahren"
sidebar_label: ICMPv4 Echo fehlt
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In manchen Fällen kann ein Windows-Server im Control Panel als **offline angezeigt werden**, obwohl das System selbst normal läuft. Dieses Verhalten hängt meistens mit Firewall-Einstellungen zusammen, die **ICMPv4 Echo-Anfragen** blockieren. Diese Anfragen werden vom bekannten `ping`-Befehl genutzt und sind Standard bei Monitoring-Systemen, um zu prüfen, ob ein Server oder eine IP-Adresse erreichbar ist.

Wenn die Windows-Firewall ICMP Echo-Anfragen blockiert, kann das Monitoring-System keine Antwort vom Server erhalten. Dadurch zeigt das Control Panel den Server oder die zugewiesenen IP-Adressen als offline an, obwohl der Server selbst ohne Probleme läuft.

![img](https://screensaver01.zap-hosting.com/index.php/s/EBAybY5LRfk89kN/preview)



## Ursache

Der häufigste Grund für dieses Problem ist eine fehlende Regel in der **Windows Defender Firewall**, die eingehende ICMPv4 Echo-Anfragen erlaubt. Ohne diese Regel blockiert die Firewall standardmäßig Ping-Anfragen.

Monitoring-Systeme sind auf diese Antworten angewiesen, um die Verfügbarkeit des Servers zu prüfen. Deshalb kann der Server als offline erscheinen, obwohl die Dienste auf dem Server normal weiterlaufen.



## Lösung

Um das Problem zu beheben, muss eine Firewall-Regel erstellt werden, die ICMPv4 Echo-Anfragen erlaubt. Verbinde dich dazu zuerst über die HTML5-Konsole im iLO Dashboard. Klicke im Dashboard auf **HTML5** und melde dich mit deinen üblichen Zugangsdaten an.

![img](https://screensaver01.zap-hosting.com/index.php/s/PE87d8gZSB7c9gk/download)

Nach dem Login öffnest du die **Windows Defender Firewall mit erweiterter Sicherheit**. Drücke `Windows + R`, gib folgenden Befehl ein und bestätige mit Enter:

```
wf.msc
```
Das Fenster für die erweiterte Firewall-Konfiguration öffnet sich. Wähle im linken Menü **Eingehende Regeln** aus, da der Server eingehende ICMP-Anfragen akzeptieren muss. Rechts klickst du auf **Neue Regel**, um eine neue Firewall-Regel zu erstellen.

Wähle im Regel-Assistenten als Regeltyp **Benutzerdefiniert** aus. Im nächsten Schritt wählst du als Protokolltyp **ICMPv4** aus. Danach öffnest du die **Anpassen**-Einstellungen und aktivierst die Option für **Echoanforderung**, damit der Server auf Ping-Anfragen antworten kann.

Gehe weiter im Assistenten und wähle als Aktion **Verbindung zulassen**. Im Profil-Schritt kannst du die Regel normalerweise für alle Profile aktivieren, damit sie unabhängig davon funktioniert, ob der Server in einem öffentlichen, privaten oder Domänennetzwerk ist.

Zum Schluss gib der Regel einen aussagekräftigen Namen, z. B. `ICMPv4 Echo-Anfragen erlauben`. Nach Abschluss des Assistenten erlaubt die neue Regel sofort eingehende ICMP Echo-Anfragen.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Überprüfung

Nachdem die Regel erstellt wurde, kannst du testen, ob der Server auf Ping-Anfragen antwortet. Führe von einem anderen System folgenden Befehl aus:
```
ping <DEINE_SERVER_IP>
```
Wenn der Server erfolgreich antwortet, kann das Monitoring-System ihn wieder erkennen. Nach kurzer Zeit sollte der Serverstatus im Panel von offline auf online wechseln.



## Fazit

Glückwunsch! Mit der Erstellung der ICMPv4 Echo-Regel in der Windows-Firewall hast du erfolgreich sichergestellt, dass dein Windows Dedicated Server wieder auf Ping-Anfragen reagiert.

So können Monitoring-Systeme die Verfügbarkeit deines Servers korrekt erkennen und verhindern, dass er im Control Panel als offline angezeigt wird.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂