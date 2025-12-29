---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Zugriff wiederherstellen"
description: "Erfahre, wie du nach einer Passwort-Sperre wieder Zugriff auf deinen Linux VPS bekommst und Ausfallzeiten minimierst → Jetzt mehr erfahren"
sidebar_label: Zugriff wiederherstellen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das kann schnell passieren. Du versuchst, dich auf deinem Linux-Server einzuloggen, aber das Passwort wird nicht mehr akzeptiert oder ist vergessen. Dadurch ist der Zugriff auf das System und wichtige Daten oder Services nicht mehr möglich. Das kann echt nervig sein, vor allem wenn der Server für den laufenden Betrieb gebraucht wird. Bei den meisten Linux-Distributionen lässt sich der Zugriff über den Recovery-Modus wiederherstellen, ohne das Betriebssystem neu installieren zu müssen. Folge einfach den untenstehenden Schritten, um wieder Zugriff auf deinen Server zu bekommen und mit minimalen Unterbrechungen weiterzuarbeiten.



## Zugriff wiederherstellen

Um das Passwort im Recovery-Modus zurückzusetzen, muss das System mit Zugriff auf das GRUB-Bootmenü gestartet werden. Öffne während des Systemstarts das GRUB-Menü und wähle **Advanced options for Ubuntu** aus.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Im nächsten Bildschirm wählst du den Eintrag, der das System im **Recovery-Modus** startet. Dadurch wird die Recovery-Umgebung geladen statt des normalen Betriebssystems.

Sobald das Recovery-Menü angezeigt wird, wähle **root – Drop to root shell prompt** und bestätige die Auswahl. Drücke erneut Enter, um die Root-Shell zu öffnen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

Im Recovery-Modus ist das Root-Dateisystem standardmäßig nur lesbar gemountet. Um das Passwort ändern zu können, muss es mit Schreibrechten neu gemountet werden. Führe folgenden Befehl aus:

```bash
mount -o remount,rw /
```

Falls der Benutzername nicht bekannt ist, kannst du alle verfügbaren Benutzerkonten anzeigen, indem du die Home-Verzeichnisse überprüfst:

```
ls /home
```

Um das Passwort zurückzusetzen, nutze den Befehl `passwd` gefolgt vom Benutzernamen:

```
passwd username
```

Ersetze `username` durch den tatsächlichen Kontonamen. Gib das neue Passwort ein und bestätige es, wenn du dazu aufgefordert wirst. Die Passworteingabe wird nicht auf dem Bildschirm angezeigt. Sobald das Passwort erfolgreich geändert wurde, starte das System mit dem Befehl `reboot` neu.



## Fazit

Nachdem du die Schritte abgeschlossen hast, solltest du erfolgreich ein neues Passwort für den gewünschten Benutzer gesetzt haben. Du kannst dich jetzt wieder über die Remote-Desktop-Verbindung einloggen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂