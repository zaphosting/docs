---
id: dedicated_linux_ubuntu
title: Ubuntu installieren
sidebar_label: Ubuntu installieren
---

> In diesem Beispiel wird die Installation von Ubuntu 21.04 durchgeführt

> Das laden der ISO-Datei kann einige Zeit in Anspruch nehmen!

## 📋 Vorbereitungen
Wähle in deinem ZAP-Interface die gewünschte ISO von Ubuntu aus und lasse den Server mit der ISO booten, bis dieser im Setup ist.

> Die Navigation im Setup Prozess erfolgt mit TAB, Leertaste und Enter.
> TAB = Zwischen Menüpunkten wechseln, Leertaste = markieren, Enter = Bestätigen

***

## 💻 Installation des Systems
Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/wFTjStFBWibzyge/preview)

Wähle deine gewünschte Sprache des Systems aus und bestätige mit Enter.

> Du kannst mit Tab zwischen den Menüpunkten wechseln und die Auswahl der verschiedenen Sprachen mit "Enter" öffnen

***

![](https://screensaver01.zap-hosting.com/index.php/s/8MznTGzZCQLNfGd/preview)

Wähle dein gewünschtes Tastaturlayout und bestätige deine Eingabe mit "Done"

> Du kannst mit Tab zwischen den Menüpunkten wechseln und die Auswahl der verschiedenen Layouts mit "Enter" öffnen

***

![](https://screensaver01.zap-hosting.com/index.php/s/iYMTXZEjwFejYWi/preview)

Dein Server konfiguiert seine Netzwerkschnittstelle automatisiert durch DHCP.
Der Adapter `eno1`  ist der Netzwerkadapter deines ZAP Dedicated Servers.

Wir bestätigen alles mit "Done"

***

![](https://screensaver01.zap-hosting.com/index.php/s/BHSzfB6bFDpc4Ye/preview)

Wenn du einen Proxy nutzen möchtest, könntest du dies hier einstellen.
Ein Proxy ist nicht notwendig.

***

![](https://screensaver01.zap-hosting.com/index.php/s/frjBG2icDtkrPE2/preview)

Unser dedizierter Server steht in Deutschland, somit wählen wir auch den Deutschen Mirror-Standort um die bestmögliche Download-Rate zu erreichen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/fcX33wZ2zTdNmy6/preview)

In diesem Schritt kannst du die Partitionen deines Systems anpassen, sofern du nur eine große Partition möchtest, wähle einfach "Use an entires disk"

![](https://screensaver01.zap-hosting.com/index.php/s/KrwiSaTYcnamywH/preview)

Das Setup erstellt automatisch die Partitionen, wir bestätigen das indem wir "Done" auswählen.

![](https://screensaver01.zap-hosting.com/index.php/s/epYzcGANmoYcRGf/preview)

Das Setup vernichtet natürlich alle bestehenden Daten, das akzeptieren wir mit "Continue" und drücken Enter.

***

![](https://screensaver01.zap-hosting.com/index.php/s/RPRxBoZdXZpWTmY/preview)

Hier können die Zugangsdaten für deinen Account erstellt werden, du kannst durch die verschiedenen Menüpunkte mit TAB oder den Pfeiltasten navigieren.

Wenn du alles eingestellt hast, bitte mit "Done" bestätigen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/KTdtkNeW9mTrjAF/preview)

Um deinen Server auch beispielsweise per PuTTY erreichen zu können, muss ein OpenSSH-Server installiert werden.

***

![](https://screensaver01.zap-hosting.com/index.php/s/996KHanMda7Q9q8/preivew)

Ubuntu bietet dir ein paar Paketsammlungen aus, sofern du etwas davon nutzen möchtest, wähle diese einfach aus.

> 🎉 Der Server installiert nun das Betriebssystem, nach diesem Schritt ist das Setup beendet.

![](Eject: https://screensaver01.zap-hosting.com/index.php/s/NpcN6jb4nNZQbLQ/preview)

Bitte entferne nun die ISO-Datei in deiner iLO, damit dein Server bei einem Neustart nicht wieder das Setup läd.

***

![](https://screensaver01.zap-hosting.com/index.php/s/9ZDaJNsA3H6GBCF/preview)

wähle "Reboot now" und bestätige das du die ISO-Datei entfernt hast.

## 🔑 Passwortänderung des Root-Nutzers
Das Passwort des Root-Nutzers kann einfach geändert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/Te3sZxM6WH65nH2/preview)

schreib`sudo su -` und gib dein vorhin gesetztes Passwort ein, danach `sudo passwd root` um das Passwort zu ändern.
Gib nun das neue Passwort für deinen Root-Nutzer ein.

Fertig! Du kannst dich jetzt mit dem gesetzten Passwort als `root` anmelden.

> Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verfügung
