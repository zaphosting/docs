---
id: vserver_linux_password_change
title: vServer: Root Passwort für Linux-Server ändern
description: Informationen, wie du das Root-Passwort für deinen Linux vServer von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Passwort ändern
---

## 📄 Webinterface

Das Passwort kann über unser Webinterface bei dem jeweiligen Server geändert werden. 
Öffne dazu die Seite „Zugang und Sicherheit“, diese findet man Links im Menü

![](https://user-images.githubusercontent.com/61839701/165681691-ef8c20f4-f1bb-42bb-8231-8c7e97a2bfa2.png)

Dort findet man das Eingabe Feld „Root Password“. 
Dort kann man ein neues Wunsch Passwort eintragen.

>Bitte beachte das dies mindestens 8 Zeichen lang sein muss sowie aus Klein und Groß Buchstaben (a-z/A-Z), Zahlen (1-9) und Sonderzeichen (!@=#$%&-?_;:.,) bestehen muss. 
Sollte dies nicht der Fall sein, wird es bei dem Server nicht gesetzt. 

![](https://user-images.githubusercontent.com/61839701/165681891-f81a47d2-bd3c-480a-88a8-dd1576933c0c.png)

Nun bestätigt das System das das Passwort geändert wurde. 


✅ Das Passwort wurde nun geändert. 


Das Passwort kann ab jetzt noch 3 Stunden in unserem Webinterface eingesehen werden, danach löschen wir dieses aus Sicherheitsgründen zur Einsicht raus. 
Um das Passwort einzusehen genügt ein Klick auf das Auge bei "Passwort" auf der Seite "Login und Sicherheit". 

![](https://user-images.githubusercontent.com/61839701/165681935-1e1a0b9d-4e0b-43b4-859a-8201117925f2.png)

Anschließend öffnet sich ein Popup wo das Passwort angezeigt wird.



## 💻 Server Konsole

Das Passwort kann auch über die Server Console geändert werden, dabei ist es egal ob man diese via Putty erreicht oder z.b via VNC/Serial.
> Wichtig: Diese Option funktioniert nur wenn noch Zugriff zum Server besteht, sprich man noch auf die Console verbinden sowie anmelden kann. 

Ist man in der Console angemeldet, kann über den Befehl "passwd" das Passwort geändert werden. 
Nachdem man diesen Befehl "abgesendet" hat mit der Taste "Enter" wird man aufgefordert sein neues Passwort einzugeben. 
Dies geschieht "Unsichtbar"

Anschließnd muss man das Passwort erneut zur Bestätigung eigegeben werden. 
Ist dies gemacht und das Passwort stimmte mit der ersten Eingabe überein, so bestätigt die Console die Änderung. 

Stimmen die beiden Eingaben nicht überein, so wird die Console den Vorgang beenden und man muss erneut den Befehl "passwd" eingeben. 

> ⚠️Wichtig: Ändert man das Password via Console, kann es nicht für 3 Stunden in unserem Webinterface unter Zugang und Sicherheit angezeigt werden. 
