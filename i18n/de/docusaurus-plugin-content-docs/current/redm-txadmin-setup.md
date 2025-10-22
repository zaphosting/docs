---
id: redm-txadmin-setup
title: "RedM: txAdmin Setup"
description: "Entdecke, wie du deinen RedM Gameserver mit dem voll ausgestatteten Webpanel von txAdmin effizient verwaltest und überwachst → Jetzt mehr erfahren"
sidebar_label: txAdmin Setup
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

txAdmin ist ein komplett kostenlos nutzbares, voll ausgestattetes Webpanel zur Verwaltung & Überwachung deines RedM Gameservers. Es bietet eine breite Palette an Features, die das Management eines RedM Gameservers super easy machen. Die Einrichtung von txAdmin ist komplett kostenlos – starte jetzt deine Reise mit dem simpelsten, aber funktionalen RedM Gameserver Webpanel.

<InlineVoucher />

## Zugriff

Den Link und die Zugangsdaten für txAdmin findest du im txAdmin-Bereich im Dashboard deines Gameservers. Dort bekommst du alle Infos, die du brauchst, um einfach auf die txAdmin-Oberfläche zuzugreifen und mit der Einrichtung zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Kopiere die Angaben für Benutzername und Passwort und klicke auf den Link (IP-Adresse:Port), um die txAdmin-Oberfläche zu öffnen und dich einzuloggen. Die txAdmin-Oberfläche öffnet sich dann in einem neuen Fenster, wo du dich mit den angegebenen Zugangsdaten anmelden musst.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Einrichtung

Nachdem du dich erfolgreich eingeloggt hast, kannst du mit der Einrichtung von txAdmin und deinem Server starten. Du solltest jetzt die txAdmin-Startseite (Dashboard) sehen. Oben links erscheint eine Meldung, dass dein Server noch konfiguriert werden muss. Klick auf **Zur Setup-Seite gehen**, um den Einrichtungsprozess zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Willkommen und Servername

Definiere als Nächstes einen Servernamen, den du für dein Projekt verwenden möchtest. Dieser Name ist nicht für die Serverliste gedacht, sondern nur für die Nutzung innerhalb der txAdmin-Oberfläche und für Chat-/Discord-Nachrichten.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment-Typ

Unter Deployment-Typ musst du jetzt auswählen, wie du deinen Server einrichten möchtest. Du hast folgende Optionen: **Beliebte Rezepte**, Bestehende Serverdaten, **Remote URL Template** und **Custom Template**. Jede dieser Optionen wird weiter unten genauer erklärt, damit du entscheiden kannst, was am besten zu dir passt.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Beliebtes Template

Beliebte Templates sind vorgefertigte Pakete, die sofort einsatzbereit sind – das ist der einfachste Weg, deinen RedM Gameserver schnell zum Laufen zu bringen. Wenn das dein erster Server ist, empfehlen wir dir diese Option. Diese Templates enthalten alle nötigen Konfigurationen und Ressourcen, um schnell einen funktionierenden Server aufzusetzen, sodass du dich direkt auf Customizing und Gameplay konzentrieren kannst statt auf die Grundinstallation. Wähle einfach ein Template, das zu deinen Bedürfnissen passt.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Bestehende Serverdaten

Diese Option solltest du wählen, wenn du bereits einen Server mit txAdmin betrieben hast und diesen jetzt bei uns hosten möchtest. Du kannst dann einfach die Serverdaten per FTP hochladen und den Pfad während der Einrichtung angeben. Falls du noch nicht mit FTP vertraut bist, lohnt sich ein Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung. Dort zeigen wir dir Schritt für Schritt, wie du deine Serverdateien problemlos übertragen kannst, damit dein Server schnell bei uns läuft.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Remote URL Template

Wenn du ein Template nutzen möchtest, das nicht direkt in txAdmin verlinkt ist, kannst du hier eine eigene Rezept-URL angeben. Dieses Rezept wird dann auf deinem Server heruntergeladen und ausgeführt. Diese Option ist super praktisch, wenn du spezielle Serverkonfigurationen oder Setups deployen willst, die nicht in den Standard-Optionen von txAdmin enthalten sind. Einfach die URL angeben, txAdmin lädt das Template automatisch runter und richtet deinen Server genau nach deinen Vorgaben ein.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

Diese Option ist für Nutzer gedacht, die bereits ein eigenes Rezept erstellt haben und dieses erneut laden möchten. So kannst du deine individuellen Konfigurationen schnell und einfach anwenden, ohne alles von Grund auf neu einzurichten. Wähle einfach dein bestehendes Rezept aus, und txAdmin erledigt den Rest, damit dein Server genau so konfiguriert wird, wie du es willst.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

Nachdem du dich für einen Deployment-Typ entschieden und die angegebenen Schritte befolgt hast, kannst du mit **Zum Recipe Deployer gehen** abschließen. Dort musst du die letzten Schritte erledigen: **Rezept überprüfen**, **Parameter eingeben**, **Rezept ausführen** und **server.cfg konfigurieren**.

Im ersten Schritt kannst du das ausgewählte oder hinzugefügte Rezept noch weiter anpassen. Wenn keine Änderungen nötig sind, geht’s weiter zu Schritt 2. Dort kannst du deinen eigenen [Lizenzschlüssel](redm-licensekey.md) eingeben und die Datenbankinfos checken. Wenn alles passt, klick auf **Rezept ausführen**. Das kann einen Moment dauern. Zum Schluss kannst du die Server-Konfigurationsdatei (`server.cfg`) nach Bedarf anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Zum Schluss klickst du auf **Speichern & Server starten**. Damit ist die txAdmin-Einrichtung abgeschlossen und du kannst dich mit deinem Server verbinden.


## Zusätzliche Unterstützung

Für txAdmin-spezifischen Support wende dich bitte direkt an das txAdmin-Team über deren [offizielle Webseite](https://txadm.in/) oder tritt der Community auf [Discord](https://discord.gg/txAdmin/) bei. Die Community und das Support-Team helfen dir bei allen Fragen oder Problemen rund um txAdmin, damit du das Beste aus deinem Server rausholen kannst.

<InlineVoucher />