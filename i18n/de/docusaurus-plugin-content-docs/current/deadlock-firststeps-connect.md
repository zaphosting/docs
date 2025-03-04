---
id: deadlock-firststeps-connect
title: "Deadlock: Zum Server verbinden"
description: Informationen darüber, wie man sich mit einem Deadlock Server von ZAP-Hosting verbindet - ZAP-Hosting.com Dokumentation
sidebar_label: Zum Server verbinden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du möchtest dich mit deinem GameXY-Server verbinden, bist dir aber unsicher, wie das genau geht und was es zu beachten gibt? Kein Grund zur Sorge! Wir zeigen dir hier, wie du ganz entspannt den Weg auf deinen Server findest und was du dabei im Hinterkopf behalten solltest.

<InlineVoucher />



## Server Informationen

Um die Verbindung zu deinem Server herzustellen, benötigst du die IP-Adresse und den Port. Diese Informationen kannst du im Dashboard deiner Gameserver Verwaltung einsehen und kopieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/LEieX839x8TJ8Cd/download)



## Verbindung herstellen

Deadlock unterstützt derzeit noch keine Form von Serverlisten, weshalb eine Verbindung zu deinem Server nur über die Entwicklerkonsole möglich ist. Die Tastenbelegung hierfür ist standardmäßig die Taste **F7**. Öffnen diese und führe den folgenden Befehl mit deinen eigenen Serverinformationen aus: 

```
connect <ip-addresse:port>
```

Nach Ausführung des Befehls wird die Verbindung zum Server hergestellt und die Konsole kann wieder geschlossen werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Mdm4w6eGQg7ng8c/download)



## Mögliche Probleme und Lösungsansätze

Die Verbindung zum Server kann nicht wie erwartet hergestellt werden? Dies kann in bestimmten Situationen vorkommen, z. B. wenn die Verbindung aufgrund von technischen Problemen fehlschlägt. Im Folgenden haben wir die häufigsten Probleme und ihre Lösungen aufgeführt: 

### Nicht sichtbar

Eine fehlende Sichtbarkeit des Servers kann auftreten, wenn die Initialisierung nicht erfolgreich abgeschlossen wurde. Dies kann beispielsweise auf eine fehlerhafte Konfiguration oder beschädigte Dateien zurückzuführen sein. Weitere Informationen können in der Regel in der Serverkonsole oder in den Logdateien nachvollzogen werden.



Hast du nach der Fehlersuche weiterhin Probleme? In diesem Fall steht unser Support-Team täglich zur Verfügung, um dir zu helfen. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** auf unserer Website und erkläre uns dein Problem mit so vielen Einzelheiten wie möglich. Wir werden uns so schnell wie möglich darum kümmern und dir bei der Lösung des Problems helfen!
 🙂