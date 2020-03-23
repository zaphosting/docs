---
id: arma3_serverconfig
title: Server.cfg
sidebar_label: Server.cfg
---


## Server.cfg Parameter und Konfiguration

Die Server.cfg von ArmA 3 wird für den Betrieb eines jeden ArmA 3 Servers benötigt und bietet eine Vielzahl von 
Möglichkeit einen ArmA 3 Server individuell zu konfigurieren.

Editiert wird die Server.cfg entweder direkt über FTP auf einem vorinstallierten Gameserver, Rootserver oder vServer. 
Bei einem Gameserver steht zudem der Menüpunkt Configs auf der linken Seite im Gameserverinterface zur Verfügung, von dort kann die
Server.cfg mit wenigen Klicks bearbeitet werden.


## Bearbeiten der Server.cfg über den ZAP-Editor

Um die Server.cfg deines ArmA 3 Servers im ZAP-Editor zu bearbeiten klickst du zuerst auf deinen Server im Interface und wählst dort anschließend im Menü auf der linken Seite unter "Einstellungen" den Unterpunkt "Configs" aus. 

![](https://puu.sh/Fk7Ck/9b2d95185f.png)


Dort siehst du nun eine Liste der für ArmA 3 verfügbaren Configurationsdateien, wir bearbeiten nun ausschließlich die Server.cfg. 
Durch einen Klick auf den blauen Button "Datei öffnen" gelangst du in den ZAP-Editor. 

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)


Dort hast du nun die Möglichkeit deinen ArmA 3 Server individuell zu konfigurieren, unter anderem auch den Servernamen und die Anzahl der Slots. Du kannst die Einstellungen beliebig anpassen und klickst im Anschluss auf "Speichern".

![](https://puu.sh/Fk7I1/407a039e38.png)


Bei Angaben wie dem Servernamen muss darauf geachtet werden den namen in Anführungszeichen zu schreiben, da dieser sonst nicht vom Server gelesen werden kann. Zudem ist es wichtig jede Zeile mit einem Semikolon (;) zu beenden, da der Server sonst nicht in der Lage ist die danach folgenden Einstellungen zu lesen. Eine Ausnahme stellt die Option "motd[]" dar, dort muss jede Zeile mit einem Komma beendet werden, bis auf die letzte in welcher dieses ausgelassen werden muss. 

## Richtig:

Hier sind Anführungszeichen so wie Semikolon und Komma richtig gesetzt.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)


## Falsch: 

Die Setzung von Anführungszeichen so wie Semikolon und Komma fehlen hier, der Server würde so nicht starten.

![](https://puu.sh/Fk7NK/f96a31199d.png)


## Bearbeiten der Server.cfg über FTP

Anstelle des ZAP-Editors kann die Server.cfg auch direkt via FTP bearbeitet werden. In diesem Beispiel verwenden wir "FileZilla"
um eine Verbindung via FTP zum FTP-Server und den Verzeichnissen deines Gameservers herzustellen.

Wie du dich via FTP zu deinem Gameserver verbindest, lernst du hier: [FTP-Dateizugriff - Mit FTP verbinden](https://docs.zap-hosting.com/docs/de/gameserver_ftpaccess/).


## Herstellen der Verbindung und Navigation zum Pfad der Server.cfg

> Stelle sicher dass dein Gameserver gestoppt ist während du auf diesem via FTP arbeitest.

Nachdem du dich wir oben erklärt via FTP auf deinen Gameserver verbunden hast, navigierst du dich via FileZilla im unteren rechsten Fenster zum Verzeichnis deiner Server.cfg, diese findest du unter: **/g198376/arma3/config**

![](https://puu.sh/Fo4Om/5df742a376.png)

> Der Name des ersten Ordners (g198376) entspricht der ID deines Servers, so kannst du die Ordner außeinander halten sofern du mehr als
einen Gameserver besitzt.

![](https://puu.sh/Fo4Tw/06f7a53914.png)

Im Verzeichnis angekommen findest du die Server.cfg deines ArmA 3 Servers so wie weitere vorhandene Konfigurationsdateien.
Nun kannst du einen **Rechtsklick** auf die Server.cfg ausführen und auf **Ansehen/Bearbeiten** klicken.

![](https://puu.sh/Fo4Yd/f12db2fbe6.png)

Nun öffnet sich ein Standart-Editor in welchem du deine Server.cfg wie weiter oben beschrieben bearbeiten kannst. 
Nachdem du deine Server.cfg bearbeitet hast kannst du diese durch das drücken von **STRG+S** speichern und dann wieder schließen,
dein Server ist nun wieder startbereit.

