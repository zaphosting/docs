---
id: redm-txadmin-setup
title: "RedM: txAdmin Einrichtung"
description: Informationen zur Einrichtung des TxAdmin Interfaces für RedM Gameserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: txAdmin Einrichtung
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
txAdmin ist ein komplett kostenloses, voll ausgestattetes Web-Panel, um deinen RedM-Server zu verwalten und zu überwachen. Es bietet eine Vielzahl von Funktionen, die darauf ausgelegt sind, die Verwaltung eines RedM-Servers so einfach wie möglich zu machen. Die Einrichtung von txAdmin ist völlig kostenlos, beginne deine Reise mit dem einfachsten und doch funktionalsten Web-Panel für RedM-Server.

<InlineVoucher />



## Zugriff

Über das Dashboard deines Game-Servers findest du im txAdmin-Bereich einen Link sowie die Zugangsdaten zum Zugriff auf txAdmin. Dies gibt dir die notwendigen Informationen, um einfach auf die txAdmin-Oberfläche zuzugreifen und mit der Einrichtung zu beginnen.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Kopiere die Informationen zum Benutzer und Passwort und klicke auf den Link (IP-Adresse:Port), um das txAdmin Interface aufzurufen und dich einzuloggen. Im Anschluss öffnet sich das txAdmin Interface in einem neuen Fenster, wo du dich mit den vorgegebenen Zugangsdaten einloggen musst. 

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Einrichtung

Nun, da du dich erfolgreich eingeloggt hast, kannst du mit der Einrichtung von txAdmin und deinem Server beginnen. Du solltest nun die Startseite (Dashboard) von txAdmin sehen. Oben links findest du einen Hinweis, dass dein Server noch konfiguriert werden muss. Klicke dort auf **Go to the setup page**, um das Setup zu beginnen.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Willkommen und Server Name

Definiere im Anschluss einen Servernamen, welchen du für dein Projekt verwenden möchtest. Dieser Name ist nicht für die Serverliste gedacht sondern dient lediglich für das txAdmin Interface und Chat/Discord Nachrichten. 

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Deployment Type

Beim Deployment Type musst du nun auswählen, wie du deinen Server einrichten möchtest. Dir stehen die folgenden Auswahloptionen zur Verfügung: **Popular Recipes**, **Existing Server Data**, Remote URL Template und **Custom Template**. Diese Optionen werden im Folgenden genauer erläutert, sodass du selbst entscheiden kannst, welche die beste Wahl für deinen Anwendungsfall ist. 

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popular Template

Popular Templates sind vorgefertigte Pakete, die direkt verwendet werden können. Dies ist der einfachste Weg, um deinen RedM-Server schnell einsatzbereit zu machen. Wenn dies dein erster Server ist, wird diese Option besonders empfohlen. Diese Templates enthalten alle notwendigen Konfigurationen und Ressourcen, um einen funktionalen Server schnell einzurichten, sodass du dich auf die Anpassung und das Gameplay konzentrieren kannst, anstatt dich mit der Ersteinrichtung zu beschäftigen. Wähle einfach ein Template aus, das deinen Anforderungen entspricht.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Existing Server Data

Diese Einstellung solltest du verwenden, falls du bereits einen Server mit txAdmin betrieben hast und diesen nun bei uns hosten möchtest. In diesem Fall kannst du die Serverdaten einfach per FTP hochladen und den Pfad während des Setups angeben. Solltest du noch nicht wissen, wie du FTP allgemein benutzt, lohnt es sich, einen Blick in unsere Anleitung [FTP-Zugriff](gameserver-ftpaccess.md) zu werfen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Remote URL Template

Falls ein Template aufgespielt werden soll, das in txAdmin selbst nicht verlinkt ist, kannst du mit dieser Funktion ein eigenes Recipe über eine Remote-URL angeben. Dieses Recipe wird dann heruntergeladen und auf deinem Server ausgeführt. Diese Option ist besonders nützlich, um benutzerdefinierte Serverkonfigurationen oder spezielle Setups bereitzustellen, die nicht in den Standardoptionen von txAdmin enthalten sind. Durch die Angabe der URL lädt txAdmin das Template automatisch herunter und wendet es an, sodass dein Server genau nach deinen Vorgaben eingerichtet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Custom Template

Diese Option ist für Benutzer gedacht, die bereits ein eigenes Recipe erstellt haben und dieses erneut laden möchten. Dies ermöglicht es dir, deine benutzerdefinierten Konfigurationen schnell und einfach anzuwenden, ohne alles von Grund auf neu einrichten zu müssen. Wähle einfach dein vorhandenes Recipe aus, und txAdmin kümmert sich um den Rest, damit dein Server genau so konfiguriert ist, wie du es beabsichtigt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Recipe Deployer

Nachdem du dich für einen Deployment Type entschieden und die dort vorgegebenen Schritte befolgt hast, kannst du zum Abschluss auf **Go to Recipe Deployer** klicken. Dort müssen nun noch die finalen Schritte **Review Recipe**, **Input Parameters**, **Run Recipe** und **Configure server.cfg** abgeschlossen werden.

Im ersten Schritt kannst du das ausgewählte oder hinzugefügte Recipe noch weiter anpassen. Sind keine weiteren Anpassungen mehr notwendig, gehe zu Schritt 2. Dort kannst du nun deinen eigenen [Eigener Lizenzschlüssel](redm-licensekey.md) angeben und die Datenbankinformationen prüfen. Wenn alles korrekt ist, klicke auf **Run Recipe**. Dieser Vorgang kann einen Moment dauern. Zum Abschluss kannst du dann noch die Server-Konfigurationsdatei `server.cfg` anpassen. 

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Klicke abschließend auf **Save & Run Server**. Damit ist das txAdmin-Setup abgeschlossen, und du kannst dich mit deinem Server verbinden.



## Zusätzliche Unterstützung

Für txAdmin-spezifischen Support kontaktiere bitte das txAdmin-Team über deren [offizielle Webseite](https://txadm.in/) oder trete der Community auf [Discord](https://discord.gg/txAdmin/) bei.
