---
id: foundry-firststeps-connect
title: "Foundry: Zum Server verbinden"
description: Informationen zur Verbindung mit einem Foundry-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Zum Server verbinden
---



## Einführung

In dieser Anleitung erfahren wir, wie du eine Verbindung zu deinem Foundry-Server herstellst. Es gibt zwei Möglichkeiten, eine Verbindung herzustellen: entweder direkt über die IP-Adresse deines Servers oder über die Serverliste. Wir empfehlen, den Server vorher nach deinen Wünschen zu konfigurieren. Mehr darüber erfährst du in unserer [Foundry-Konfigurationsanleitung](foundry-configuration.md).

## Direktverbindung über IP

### Server-IP ermitteln

Zunächst musst du die IP und den Port deines Foundry-Servers kennen, um eine direkte Verbindung herstellen zu können. Gehe einfach zu deinem [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) auf der Website und halte die vollständige IP und den Port bereit.

![image](https://screensaver01.zap-hosting.com/index.php/s/49mqSzCamYnA3dx/preview)

Wenn du deinen Foundry-Server als externen dedizierten Server betreibst, ist deine IP die des Host-Rechners und der Port derjenige, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig ist das 3724). Weitere Informationen über den Port findest du in unserer [Foundry-Konfigurationsanleitung](foundry-configuration.md).

### Verbindung im Spiel herstellen

Starte Foundry zunächst über deinen Game Launcher. Wähle im Hauptmenü **Multiplayer** und dann die Option **IP Direct Connect**.

![image](https://screensaver01.zap-hosting.com/index.php/s/KS9jQiZtgzfkfaW/preview)

Es erscheint eine Eingabeaufforderung, in die du die Details deines Servers eingeben musst, einschließlich der IP-Adresse und des Ports, die du zuvor von deinem Webinterface erhalten hast, oder die IP-Adresse und den Port deiner eigenen externen dedizierten Serverinstanz.

Es gibt auch ein optionales Passwort-Feld, das du benutzen solltest, wenn dein Server ein Passwort hat, ansonsten kannst du es leer lassen.

![image](https://screensaver01.zap-hosting.com/index.php/s/5kNMZyrkDwt9ZAy/preview)

Wenn du dich nicht erfolgreich mit dem Server verbinden kannst und eine Timeout-Fehlermeldung erhältst, vergewissere dich bitte, dass die eingegebene IP und der Port korrekt sind und dass dein Server online ist. Du kannst den Konsolenbereich deines Webinterfaces für deinen Foundry-Server verwenden, um die Fehlersuche zu erleichtern.

## Verbindung über Serverliste

Die einfachste Möglichkeit, sich mit deinem Server zu verbinden, ist über die Serverliste. Dazu muss dein Server jedoch in den Serverkonfigurationsparametern auf öffentlich eingestellt sein. 

Sieh dir bitte unsere [Foundry Server Konfigurationsanleitung](foundry-configuration.md) an, um die entsprechenden Parameter "server_name" und "server_is_public" in deiner Konfigurationsdatei oder über das Webinterface hinzuzufügen.

Wenn das erledigt ist, wähle im Hauptmenü **Multiplayer** und dann die Option **Join Steam Server**. Suche hier nach dem Servernamen, den du in der Konfiguration festgelegt hast, und du solltest deinen Server finden und dich verbinden können.

![image](https://screensaver01.zap-hosting.com/index.php/s/FfTPgx7Q6wbwn4g/preview)