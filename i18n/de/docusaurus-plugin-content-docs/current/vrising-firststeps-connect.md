---
id: vrising-firststeps-connect
Titel: "V Rising: Mit dem V Rising Server verbinden"
description: Informationen zur Verbindung mit einem V Rising Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Mit dem Server verbinden
---



## Einleitung

In dieser Anleitung erfahren wir, wie du dich mit deinem V Rising Server verbinden kannst. Es gibt zwei Möglichkeiten, eine Verbindung herzustellen: entweder direkt über die IP-Adresse deines Servers oder über die Serverliste. Wir empfehlen, den Server vorher nach deinen Wünschen zu konfigurieren. Mehr darüber erfährst du in unserer [V Rising Konfigurationsanleitung](vrising-configuration.md).

## Direktverbindung über IP

### Server-IP abfragen

Zunächst musst du die IP und den Port deines V Rising-Servers kennen, um eine direkte Verbindung herstellen zu können. Gehe einfach zu deinem [ZAP-Hosting Webinterface](https://zap-hosting.com/en/customer/) auf der Website und halte die vollständige IP und den Port bereit.

![image](https://screensaver01.zap-hosting.com/index.php/s/tyDGMi7YmmNMLsd/preview)

Wenn du deinen V Rising Server als externen dedizierten Server betreibst, ist deine IP die des Hostrechners und der Port derjenige, den du in deiner Konfigurationsdatei eingestellt hast (standardmäßig ist das 9876). In unserer [V Rising Konfigurationsanleitung](vrising-configuration.md) findest du weitere Informationen zum Port.

### Verbindung im Spiel herstellen

Beginne damit, V Rising über deinen Game Launcher zu starten. Wähle im Hauptmenü **Spielen**, gefolgt von der Option **Online-Spiel**.

![image](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Wähle den Spielmodus aus, den du spielen willst, oder drücke alternativ unten rechts auf **Alle Server anzeigen**, um direkt zum Server-Browser zu gelangen. 

Drücke unten auf die Schaltfläche **Direktverbindung** und gib deine IP gefolgt von dem Port ein, zum Beispiel: "123.456.679.123:9876". Wenn es ein Passwort gibt, wird das Spiel dich nach der Verbindung auffordern, dieses einzugeben.

![image](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Wenn du dem Server nicht erfolgreich beitreten kannst und eine Timeout-Fehlermeldung erhältst, vergewissere dich bitte, dass die eingegebene IP und der Port korrekt sind und dass der Server online ist. Du kannst den Konsolenbereich deines Webinterfaces für deinen V Rising Server verwenden, um die Fehlersuche zu erleichtern.

## Verbindung über Serverliste

Die einfachste Möglichkeit, dich mit deinem Server zu verbinden, ist über die Serverliste. Dazu muss dein Server jedoch in den Serverkonfigurationsparametern auf öffentlich eingestellt sein. 

Bitte schau dir unsere [V Rising Server Configuration guide](vrising-configuration.md) an, um die entsprechenden Parameter `Name` und `ListOnMasterServer` in deiner Konfigurationsdatei oder über das Webinterface-Panel hinzuzufügen.

Sobald dies erledigt ist, wähle im Hauptmenü **Spielen**, gefolgt von der Option **Online spielen** und drücke noch einmal unten rechts auf **Alle Server anzeigen**. Jetzt kannst du den Server-Browser benutzen, um deinen Server mit Hilfe der bereitgestellten Filter wie Namenssuche, Spielmodus, Schwierigkeitsgrad und vielem mehr zu finden.

![image](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)