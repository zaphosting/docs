---
id: dedicated-linux-troubleshooting-restore-access
title: "Dedicated Server: Access wiederherstellen"
description: "Erfahre, wie du nach einem Passwort-Lockout wieder Zugriff auf deinen Linux Dedicated Server bekommst und Ausfallzeiten minimierst → Jetzt mehr erfahren"
sidebar_label: Zugriff wiederherstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das kann schnell passieren. Du versuchst, dich auf deinem Linux-Server einzuloggen, aber das Passwort wird nicht mehr akzeptiert oder ist vergessen. Dadurch ist der Zugriff auf das System und wichtige Daten oder Services nicht mehr möglich. Das kann mega nervig sein, vor allem wenn der Server gerade gebraucht wird. Bei den meisten Linux-Distributionen kannst du den Zugriff über den Recovery-Modus wiederherstellen, ohne das Betriebssystem neu installieren zu müssen. Mit den folgenden Schritten bekommst du deinen Server wieder am Start und kannst mit minimalen Ausfällen weiterarbeiten.



## Zugriff wiederherstellen

Um das Passwort im Recovery-Modus zurückzusetzen, muss das System mit Zugriff auf das GRUB-Bootmenü gestartet werden. Öffne beim Systemstart das GRUB-Menü und wähle **Advanced options for Ubuntu** aus.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Im nächsten Bildschirm wählst du den Eintrag, der das System im **Recovery-Modus** startet. So wird die Recovery-Umgebung statt des normalen Betriebssystems geladen.

Sobald das Recovery-Menü erscheint, wähle **root – Drop to root shell prompt** und bestätige die Auswahl. Drücke nochmal Enter, um die Root-Shell zu öffnen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

Im Recovery-Modus ist das Root-Dateisystem standardmäßig nur lesbar gemountet. Um das Passwort zu ändern, musst du es mit Schreibrechten neu mounten. Führe dazu folgenden Befehl aus:

```bash
mount -o remount,rw /
```

Falls du den Benutzernamen nicht kennst, kannst du alle verfügbaren User-Accounts anzeigen, indem du die Home-Verzeichnisse checkst:

```
ls /home
```

Um das Passwort zurückzusetzen, nutze den Befehl `passwd` gefolgt vom Benutzernamen:

```
passwd username
```

Ersetze `username` durch den tatsächlichen Accountnamen. Gib das neue Passwort ein und bestätige es, wenn du dazu aufgefordert wirst. Die Eingabe wird nicht auf dem Bildschirm angezeigt. Sobald das Passwort erfolgreich geändert wurde, starte das System mit dem Befehl `reboot` neu.



## Fazit

Wenn du die Schritte abgeschlossen hast, solltest du das Passwort für den gewünschten User erfolgreich geändert haben. Du kannst dich jetzt wieder über die Remote-Desktop-Verbindung einloggen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂