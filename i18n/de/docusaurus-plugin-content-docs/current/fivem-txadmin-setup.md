---
id: fivem-txadmin-setup
title: "FiveM: txAdmin Setup"
description: "Entdecke, wie du deinen FiveM Gameserver mit dem kostenlosen, voll ausgestatteten txAdmin Webpanel einfach verwaltest und überwachst → Jetzt mehr erfahren"
sidebar_label: txAdmin Setup
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

txAdmin ist ein komplett kostenlos nutzbares, voll ausgestattetes Webpanel, um deinen FiveM Gameserver zu verwalten und zu überwachen. Es bietet eine Vielzahl an Features, die das Management eines FiveM Gameservers super einfach machen. Die Einrichtung von txAdmin ist komplett kostenlos – starte jetzt deine Reise mit dem simpelsten, aber funktionalen FiveM Server Webpanel.

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="Setup a txAdmin Server" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder lieber auf die unterhaltsamste Art lernst!"/>

<InlineVoucher />

## Zugriff

Den Link und die Zugangsdaten für txAdmin findest du im txAdmin-Bereich im Dashboard deines Gameservers. Dort bekommst du alle Infos, die du brauchst, um einfach auf die txAdmin-Oberfläche zuzugreifen und mit der Einrichtung zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

Kopiere die Angaben für Benutzername und Passwort und klicke auf den Link (IP-Adresse:Port), um auf die txAdmin-Oberfläche zuzugreifen und dich einzuloggen. Die txAdmin-Oberfläche öffnet sich dann in einem neuen Fenster, wo du dich mit den angegebenen Zugangsdaten anmelden musst.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Einrichtung

Nachdem du dich erfolgreich eingeloggt hast, kannst du mit der Einrichtung von txAdmin und deinem Server starten. Du solltest jetzt die txAdmin-Startseite (Dashboard) sehen. Oben links siehst du eine Meldung, dass dein Server noch konfiguriert werden muss. Klicke auf **Zur Setup-Seite gehen**, um den Einrichtungsprozess zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Willkommen und Servername

Als nächstes legst du einen Servernamen fest, den du für dein Projekt verwenden möchtest. Dieser Name ist nicht für die Serverliste gedacht, sondern nur für die Nutzung innerhalb der txAdmin-Oberfläche und für Chat-/Discord-Nachrichten.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment-Typ

Unter Deployment-Typ musst du jetzt auswählen, wie du deinen Server einrichten möchtest. Du hast folgende Optionen: **Beliebte Rezepte**, Bestehende Serverdaten, **Remote URL Template** und **Custom Template**. Jede dieser Optionen wird weiter unten genauer erklärt, damit du entscheiden kannst, welche am besten zu dir passt.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Beliebte Templates

Beliebte Templates sind vorgefertigte Pakete, die sofort genutzt werden können – das ist der einfachste Weg, deinen FiveM Gameserver schnell zum Laufen zu bringen. Wenn das dein erster Server ist, empfehlen wir dir diese Option. Diese Templates enthalten alle nötigen Konfigurationen und Ressourcen, um schnell einen funktionierenden Server aufzusetzen. So kannst du dich direkt auf die Anpassung und das Gameplay konzentrieren, statt auf die Grundinstallation. Wähle einfach ein Template, das zu dir passt.

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### Bestehende Serverdaten

Diese Option solltest du wählen, wenn du bereits einen Server mit txAdmin betrieben hast und ihn jetzt bei uns hosten möchtest. Du kannst dann einfach die Serverdaten per FTP hochladen und den Pfad während der Einrichtung angeben. Falls du noch nicht weißt, wie FTP generell funktioniert, lohnt sich ein Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung. Dort zeigen wir dir Schritt für Schritt, wie du deine Serverdateien problemlos übertragen kannst, damit dein Server schnell bei uns läuft.

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### Remote URL Template

Wenn du ein Template nutzen möchtest, das nicht direkt in txAdmin verlinkt ist, kannst du hier eine eigene Rezept-URL angeben. Dieses Rezept wird dann auf deinem Server heruntergeladen und ausgeführt. Diese Option ist super praktisch, wenn du individuelle Serverkonfigurationen oder spezielle Setups nutzen willst, die nicht in den Standard-Optionen von txAdmin enthalten sind. Einfach die URL angeben, und txAdmin lädt das Template automatisch runter und richtet deinen Server genau so ein, wie du es brauchst.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

Diese Option ist für Nutzer gedacht, die bereits ein eigenes Rezept erstellt haben und es erneut laden möchten. So kannst du deine individuellen Konfigurationen schnell und einfach anwenden, ohne alles von Grund auf neu einzurichten. Wähle einfach dein bestehendes Rezept aus, und txAdmin erledigt den Rest, damit dein Server genau so läuft, wie du es willst.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

Nachdem du dich für einen Deployment-Typ entschieden und die angegebenen Schritte befolgt hast, kannst du mit **Zum Recipe Deployer gehen** abschließen. Dort musst du die letzten Schritte erledigen: **Rezept überprüfen**, **Parameter eingeben**, **Rezept ausführen** und **server.cfg konfigurieren**.

Im ersten Schritt kannst du das ausgewählte oder hinzugefügte Rezept noch weiter anpassen. Wenn keine Änderungen nötig sind, geht es weiter zu Schritt 2. Hier kannst du deinen eigenen [Own License Key](fivem-licensekey.md) eingeben und die Datenbankinfos prüfen. Wenn alles passt, klickst du auf **Rezept ausführen**. Das kann einen Moment dauern. Zum Schluss kannst du die Server-Konfigurationsdatei (`server.cfg`) nach Bedarf anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Abschließend klickst du auf **Speichern & Server starten**. Damit ist die txAdmin Einrichtung abgeschlossen und du kannst dich jetzt mit deinem Server verbinden.


## Zusätzliche Unterstützung

Für txAdmin-spezifischen Support wende dich bitte direkt an das txAdmin-Team über deren [offizielle Webseite](https://txadm.in/) oder tritt der Community auf [Discord](https://discord.gg/txAdmin/) bei. Die Community und das Support-Team helfen dir bei allen Fragen oder Problemen rund um txAdmin, damit du das beste Erlebnis bei der Verwaltung deines Servers hast.

<InlineVoucher />