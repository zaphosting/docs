---
id: dedicated-proxmox
title: "Dedicated Server: Installation von Proxmox VE"
description: "Entdecke, wie du Proxmox VE für Enterprise-Virtualisierung mit integrierten Tools und hoher Verfügbarkeit einrichtest und verwaltest → Jetzt mehr erfahren"
sidebar_label: Proxmox installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Proxmox Virtual Environment ist eine komplette, Open-Source Server-Management-Plattform für Enterprise-Virtualisierung. Sie integriert nahtlos den KVM-Hypervisor und Linux-Container (LXC), softwaredefinierten Speicher und Netzwerkfunktionen auf einer einzigen Plattform. Mit der integrierten webbasierten Benutzeroberfläche kannst du VMs und Container, Hochverfügbarkeit für Cluster oder die integrierten Disaster-Recovery-Tools ganz easy verwalten.



## Vorbereitung

Um zu starten, musst du das Proxmox VE (Virtual Environment) ISO-Installationsmedium auf deinem Dedicated Server mounten und davon booten. Es gibt zwei Wege, das zu machen: Der einfachere Weg läuft über das Webinterface deines Dedicated Servers, der längere manuell über das iLO-Panel deines Servers.



### ISO über das Webinterface mounten
Gehe zum Bereich **Initial Installation** im Webinterface deines Dedicated Servers. Dort musst du zuerst den grünen Button **enable iLO** drücken. Warte kurz, bis die weiteren Bereiche sichtbar werden. Eventuell musst du die Seite neu laden, damit alles vollständig lädt.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Wähle als Nächstes ein **Proxmox VE** ISO aus dem Dropdown-Menü aus. Wir empfehlen die neueste Version, um immer up-to-date zu bleiben. Dann klicke auf den grünen **Insert** Button.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Zum Schluss musst du deinen Dedicated Server neu starten, damit er vom ISO booten kann. Das geht über den Neustart-Button unter Schritt 3.



### ISO über das iLO mounten
Lade dir dein Proxmox VE ISO auf der [Proxmox Downloadseite](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso) herunter. Anschließend musst du es auf deinen Dedicated Server hochladen und mounten, indem du der [iLO](dedicated-ilo.md) & [Eigene ISO](dedicated-iso.md) Anleitung folgst, die zeigen, wie du dich einloggst und dein eigenes ISO hochlädst.



## Einrichtung & Konfiguration

:::important
Stelle sicher, dass du deinen Server nach dem Import und Mounten des neuen ISOs neu gestartet hast, bevor du weitermachst.
:::

Jetzt, wo dein ISO gemountet ist, musst du davon booten. Das machst du über die **HTML5 Remote Console** in deinem iLO-Panel. Im Webinterface klickst du auf den Link **Open here** unter `iLO web access`, der dich zu deinem Panel bringt. Melde dich mit den angegebenen Zugangsdaten an.

:::note
Dein Browser könnte eine Sicherheitswarnung anzeigen – ignorier die einfach und akzeptiere, um weiterzumachen.
:::

Nach dem Login findest du unter **Overview** den Link **HTML5** unter `Integrated Remote Console`. Klick den an, um das Konsolen-Overlay zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Dein Proxmox sollte jetzt im Setup-Prozess sein. Navigiere mit den `Pfeiltasten`, `Enter` und `Esc`. Wir empfehlen, die **Graphical** Version von Proxmox zu wählen, da diese Anleitung darauf basiert.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Warte ein paar Sekunden, bis der Setup-Prozess weitergeht. Du musst die Proxmox EULA über den Button **I agree** unten rechts akzeptieren. Auf der nächsten Seite wählst du das Ziel-Laufwerk für deine Umgebung aus. Wenn du nur eine Festplatte hast, sind die Standard-Einstellungen passend, also einfach auf **Next** klicken.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Wenn du RAID einrichten willst, da manche unserer Dedicated Server zwei Laufwerke haben, musst du über den **Options** Button deinen gewünschten `RAID`-Modus auswählen. Wir empfehlen `RAID1`, das beide Laufwerke spiegelt.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

Im nächsten Schritt geht’s um allgemeine Sachen wie Sprache und Tastatur, die normalerweise automatisch erkannt werden. Füll das aus und mach weiter.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Jetzt musst du ein starkes Passwort und eine E-Mail-Adresse einrichten. Die E-Mail wird vom Panel genutzt, um wichtige Benachrichtigungen und Alerts zu schicken.

:::important
Merke dir das Passwort gut, denn damit loggst du dich nach der Installation zum ersten Mal ins Panel ein!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

Der letzte Schritt ist die Netzwerkkonfiguration. Wähle die verfügbare Management-Schnittstelle und einen Hostnamen für deinen Server.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Wechsle jetzt im Webinterface deines Dedicated Servers zum Bereich **IP-Adressen**, um eine freie IP zu finden.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Such dir eine IP-Adresse aus, die du für dein Proxmox-Panel nutzen möchtest. Trage IP-Adresse, Netzmaske und Gateway im Installer ein, basierend auf den Daten aus dem Webinterface. Für den DNS-Server kannst du `8.8.8.8` eintragen – das ist Googles öffentlicher DNS.

Wenn alles ausgefüllt ist, klick auf **Next** und überprüfe alle Einstellungen in der Zusammenfassung. Wenn alles passt, drück auf **Install**, um loszulegen!

## Zugriff auf das Panel
Nach der Installation und dem Neustart wählst du im Menü die Option **Proxmox Environment GNU/Linux** und drückst **Enter**. Nach dem Start siehst du eine Willkommensnachricht von Proxmox in der Konsole mit der IP-Adresse und dem Link, über den du dein Panel im Browser erreichst (die IP, die du vorher angegeben hast). Öffne diesen Link.

:::note
Dein Browser zeigt vielleicht wieder eine Sicherheitswarnung an – einfach ignorieren und akzeptieren, um weiterzumachen.
:::

Wenn der Link nicht erreichbar ist, hast du wahrscheinlich bei der Netzwerkkonfiguration etwas falsch eingestellt.

Im Panel meldest du dich mit dem Benutzernamen `root` und dem Passwort an, das du während der Installation vergeben hast. Achte darauf, dass der **Realm** auf `Linux PAM standard authentication` steht.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Nach dem Login kannst du die Abonnement-Meldung mit **OK** wegklicken. Und zack, du hast Proxmox VE erfolgreich auf deinem Dedicated Server installiert und bist im Panel!



## Erstelle deine erste VM
Hier zeigen wir dir die Basics, um deine erste Virtual Machine (VM) über dein Proxmox-Panel zu erstellen. Gehe zu `local (panel)` und wähle den Bereich **ISO Images**. Hier kannst du entweder die `.iso` Datei manuell hochladen oder Proxmox die ISO direkt per Download-URL holen lassen.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Wenn das erledigt ist, kannst du deine VM erstellen. Klick oben rechts auf den Button **Create VM**. Es öffnet sich ein Menü mit vielen Optionen.

Zuerst konfigurierst du die allgemeinen Einstellungen. Standardmäßig ist der `Node` auf den Default-Knoten (hier `panel`) gesetzt. Du musst eine eindeutige VM-ID angeben, die standardmäßig bei `100` startet oder hochzählt, wenn du schon VMs hast. Gib deiner VM einen Namen – das kann alles sein.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Weiter geht’s zu den OS-Einstellungen. Wähle hier das ISO-Image aus, das du vorher hochgeladen hast. Definiere außerdem Typ und Version des Betriebssystems, das du installieren willst.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

Wir empfehlen, die Systemeinstellungen so zu belassen, wie sie sind – die sind schon passend konfiguriert. Im Bereich Festplatteneinstellungen kannst du die Größe der VM-Festplatte festlegen. Außerdem kannst du den Speicherpool auswählen, standardmäßig ist das `local-lvm`. Die restlichen Einstellungen kannst du so lassen.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Im CPU-Bereich kannst du Socket und Anzahl der CPU-Kerne festlegen. Stell das so ein, wie es für deine VM passt.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Im Speicherbereich kannst du festlegen, wie viel RAM die VM bekommen soll und den Ballooning-Status wählen.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

Auch die Netzwerkeinstellungen kannst du erstmal so lassen, wie sie sind – die sind passend vorkonfiguriert. Zum Schluss kannst du alle Einstellungen nochmal überprüfen. Wir empfehlen, die Option `Start after created` zu aktivieren, damit deine VM direkt nach der Erstellung startet. Wenn alles passt, klick auf **Finish**, um die VM zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

Und so hast du deine erste VM im Proxmox-Panel erstellt! Du kannst sie jetzt in der Serverübersicht links im Panel sehen.





## Fazit

Glückwunsch, du hast Proxmox erfolgreich auf deinem Dedicated Server installiert. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


