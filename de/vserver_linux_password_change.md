---
id: vserver_linux_password_change
title: Passwort ändern
sidebar_label: Passwort ändern
---

## 📄 Webinterface

Das Passwort kann über unser Webinterface bei dem jeweiligen Server geändert werden. 
Öffne dazu die Seite „Zugang und Sicherheit“, diese findet man Links im Menü

![](https://screensaver01.zap-hosting.com/index.php/s/bd6rtQKN6mWbM7k/preview)

Dort findet man das Eingabe Feld „Root Password“. 
Dort kann man ein neues Wunsch Passwort eintragen.

![](https://screensaver01.zap-hosting.com/index.php/s/2aNzCHa8roGBZMG/preview)

>Bitte beachte das dies mindestens 8 Zeichen lang sein muss sowie aus Klein und Groß Buchstaben (a-z/A-Z), Zahlen (1-9) und Sonderzeichen (!@=#$%&-?_;:.,) bestehen muss. 
Sollte dies nicht der Fall sein, wird es bei dem Server nicht gesetzt. 

![](https://screensaver01.zap-hosting.com/index.php/s/rNMxmKkdtKFEW2a/preview)

Nun bestätigt das System das das Passwort geändert wurde. 

![](https://screensaver01.zap-hosting.com/index.php/s/5SbD3Nrp6PXcFtL/preview)

Jetzt muss der Server neugestartet werden damit das Passwort auch richtig gesetzt wird. 

Dazu klickt man einfach auf das rote Stop Symbol ⏸️ und wartet bis der Server ausgeschaltet ist. 

![](https://screensaver01.zap-hosting.com/index.php/s/SqZro6RfSoYpaad/preview)

Anschließend kann der Server wieder auf dem grünen Start Symol ▶️ gestartet werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/BotGSG2cCZZPSQB/preview)


✅ Das Passwort wurde nun geändert. 


Das Passwort kann ab jetzt noch 3 Stunden in unserem Webinterface eingesehen werden, danach löschen wir dieses aus Sicherheitsgründen zur Einsicht raus. 
Um das Passwort einzusehen genügt ein Klick auf das Auge bei "Passwort" auf der Seite "Login und Sicherheit". 

![](https://screensaver01.zap-hosting.com/index.php/s/T8ixwjss6GymwP4/preview)

Anschließend öffnet sich ein Popup wo das Passwort angezeigt wird.

![](https://screensaver01.zap-hosting.com/index.php/s/jCFzDGizyFjmWef/preview)


## 💻 Server Konsole

Das Passwort kann auch über die Server Console geändert werden, dabei ist es egal ob man diese via Putty erreicht oder z.b via VNC/Serial.
> Wichtig: Diese Option funktioniert nur wenn noch Zugriff zum Server besteht, sprich man noch auf die Console verbinden sowie anmelden kann. 

Ist man in der Console angemeldet, kann über den Befehl "passwd" das Passwort geändert werden. 
Nachdem man diesen Befehl "abgesendet" hat mit der Taste "Enter" wird man aufgefordert sein neues Passwort einzugeben. 
Dies geschieht "Unsichtbar"

Anschließnd muss man das Passwort erneut zur Bestätigung eigegeben werden. 
Ist dies gemacht und das Passwort stimmte mit der ersten Eingabe überein, so bestätigt die Console die Änderung. 

![](https://screensaver01.zap-hosting.com/index.php/s/MacSseNQEdiygW3/preview)

Stimmen die beiden Eingaben nicht überein, so wird die Console den Vorgang beenden und man muss erneut den Befehl "passwd" eingeben. 

> ⚠️Wichtig: Ändert man das Password via Console, kann es nicht für 3 Stunden in unserem Webinterface unter Zugang und Sicherheit angezeigt werden. 
