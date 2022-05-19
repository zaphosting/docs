---
id: terraria_tshock_add_admin
title: Terraria: Server-Admin werden (tShock)
description: Informationen, wie du dich zum Admin auf deinem Terraria-Server mit tShock von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden (tShock)
---


## Abrufen des Token's

Um dich als Admin auf deinem Terraria Server eintragen zu können, benötigtst du deinen einzigartigen Token.
Dieser wird generiert wenn du den Server das erste Mal startest, im Anschluss öffnest du die Live Konsole in welcher du den Token findest:

![image](https://user-images.githubusercontent.com/13604413/159178412-e6fbff3e-8935-4fd3-bb2e-7de32a2e1891.png)

![image](https://user-images.githubusercontent.com/13604413/159178415-c8237723-734f-42e3-94ef-a352d13d1b82.png)

In diesem Fall lautet der Token **4914096**.

## Eingabe des Token's im Spiel

Um dich nun als Admin eintragen zu können, trittst du deinem Server in Terraria bei und gibst im Spiel den Befehl **/setup 4914096** ein.
Dabei ersetzt du natürlich den Token **4914096** mit deinem eigenen.

![image](https://user-images.githubusercontent.com/13604413/159178429-655c1645-c26f-4702-ac9d-1ae6ebf7ccb7.png)

### Im Anschluss erscheint folgende Meldung im Chat:

![image](https://user-images.githubusercontent.com/13604413/159178430-9545044b-a89d-493e-b610-207070370625.png)


## Hinzufügen eines Admins

Nun kannst du mit dem Befehl **/user add USERNAME PASSWORT owner** einen neuen Admin zu deinem Server hinzufügen. 
Dabei ersetzt du **USERNAME** durch deinen Namen und als **PASSWORT** kannst du ein beliebiges Passwort frei wählen
welches du künftig für den Login als Admin auf deinem Server verwenden kannst. 

![image](https://user-images.githubusercontent.com/13604413/159178432-d6f9e2ab-bc7f-448c-9f12-d8908b022acc.png)
![image](https://user-images.githubusercontent.com/13604413/159178433-e49d98cd-bbcc-400a-abd2-d1e2f83c9052.png)

> Beachte dass dein Passwort mindestens 4 Zeichen lang sein muss!

## Login als Admin

Nachdem du dich im Spiel Als Admin eingetragen hast, kannst du dich mit folgendem Befehl einloggen:
**/login USERNAME PASSWORD**

Dabei ersetzt du natürlich wieder **USERNAME** durch deinen namen und **PASSWORT** durch das von dir zuvor gesetzte Passwort.

![image](https://user-images.githubusercontent.com/13604413/159178437-649a13f9-8ac3-45e1-91a5-e59311b00795.png)

Nun bist du als Admin auf deinem Server angemeldet und kannst diesen mit verschiedenen Befehlen verwalten.
