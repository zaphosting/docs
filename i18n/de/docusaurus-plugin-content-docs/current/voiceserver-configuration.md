---
id: voiceserver-configuration
title: Konfiguration
description: Informationen, wie du deinen Teamspeak-Server von ZAP-Hosting konfigurieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Konfiguration

---



## Einführung

Du kannst deinen Teamspeak Server individuell konfigurieren. Im Folgenden wird erklärt, wie du deinen Server konfigurieren kannst. Dabei erklären wir dir, wie du allgemeine Einstellungen wie zum Beispiel den Servername, Icon, Banner bis hin zu den Berechtigungen von Benutzer, Channel und Server-Gruppen anpassen kannst. 



## Allgemeines

**Webinterface**

Wenn du die allgemeine Konfiguration deines Servers über das Webinterface vornehmen möchtest, dann findest du die Optionen in der Teamspeak Server Verwaltung unter Einstellungen. Die Einstellungsseite sieht dann wie folgt aus: 

![img](https://user-images.githubusercontent.com/61839701/170319600-b95395ba-0bf1-4b7a-b58b-f4feb63fbf1d.png)


**Teamspeak Client**

Wenn du die allgemeine Konfiguration deines Servers über den Teamspeak Client direkt vornehmen möchtest, dann findest du die Optionen, in dem du auf den obersten Channel **TeamSpeak ]I[ Server** einen Rechtsklick machst und dann auf **Virtuellen Server editieren** klickst.

![img](https://user-images.githubusercontent.com/61839701/170319758-09745a1c-457d-45f6-8f17-402aa52b3134.png)


Da die Einstellungsmöglichkeiten im Webinterface soweit so verständlich wie möglich sein sollten und dort nicht ebenfalls nicht alles angepasst werden kann, fokussiert sich diese Anleitung auf die Konfiguration des Teamspeak Servers über den Teamspeak Client. 



### Name

Im Feld **Server Name** kannst du den Namen deines Teamspeak Servername definieren. Dieser wird dann in der Serverliste, auf der Webseite und anderweitig angezeigt werden. 



### Banner

Sofern du die Option eigenen Banner gebucht hast, kannst du im Feld **Banner Gfx URL** einen eigenen Banner hinzufügen. Dabei ist es wichtig, dass du den Direktlink zum Bild angibst, da das Bild ansonsten nicht erkannt wird. Im Feld **URL** kannst du dann noch einstellen, worauf der Banner weiterleiten soll, wenn jemand auf den Banner klickt. 

:::info
Wenn kein eigener Banner gebucht wurde, dann wird der Banner automatisch durch den standardmäßigen ZAP-Banner ersetzt. 
:::



### Slots (Reservierte Slots)

Die Slots werden von uns gesetzt und können nicht verändert werden. Allerdings gibt es hier die Möglichkeit, reservierte Slots einzustellen. Das bedeutet, dass diese reserviert sind, falls der Teamspeak Server mal voll sein sollte. Dann können Benutzer mit den entsprechenden Berechtigungen sich trotzdem noch mit dem Teamspeak Server verbinden.



### Willkommensnachricht

Hierbei kannst du eine beliebige Willkommensnachricht hinzufügen. Diese wird dann beim Verbinden angezeigt. Das kann dann zum Beispiel so aussehen:

![img](https://user-images.githubusercontent.com/61839701/170319971-d89d3240-9bc9-4a99-bef4-c6e37d4d1c92.png)


### Sicherheitsstufe

Die benötigte Sicherheitsstufe legt fest, wie lange Benutzer benötigen, um die Sicherheitsstufe ihrer Identität zu erhöhen, bis diese Identität als ausreichend sicher eingestuft wurde. Grundsätzlich reduziert dies das Potenzial für Spam und Missbrauch. Je höher die Sicherheitsstufe eingestellt wird, desto länger dauert es. Hier eine Übersicht über die Dauer:

- Level 0-23 -  Wird generiert innerhalb von Sekunden
- Level 23-29 - Wird generiert innerhalb von Minuten
- Level 29-34 - Wird generiert innerhalb von Stunden
- Level 35-39 - Wird generiert innerhalb von Tagen
- Level 40-43 - Wird generiert innerhalb von Monaten
- Level 44+ - Wird generiert innerhalb von Jahren



### Benutzer verwalten (Kicken, Bannen, Banliste, Beschwerdeliste)

Mit einem Rechtsklick auf den Benutzer kann ein Kick oder Ban ausgeführt werden. Im Falle eines Bans wird die Identität und IP-Adresse in der Bannliste hinterlegt. Diese findest du unter **Navigationszeile -> Extras**. Dort kannst du dann bestehende Bans auch wieder entfernen.

Ebenfalls findest du dort die Beschwerdeliste. Das ist ein Feature seitens Teamspeak, womit Benutzer eine Beschwerde über andere Benutzer, den Server selbst, etc. einreichen können, falls mal kein Admin auf dem Teamspeak Server sein sollte. 



## Personalisieren

Du kannst bei deinem Teamspeak Server noch weitere Channel und Server-Gruppen anlegen, um deinen Teamspeak Server noch weiter zu personalisieren. Im Folgenden zeigen wir, wie du dies genau machen kannst.



### Channel

Um weitere Channel anzulegen, musst du unter den vorhandenen Channels einen **Rechtsklick** machen und dann auf **Channel erstellen** klicken. Im Anschluss öffnet sich ein Popup-Fenster. Dort kannst du den Channel dann nach den folgenden Optionen konfigurieren: Channel-Name, Passwort, Icon, Beschreibung, Channel Typ und noch mehr. 

![img](https://user-images.githubusercontent.com/61839701/170320598-34fb3683-9f0e-4f4a-ba32-ff4219e99358.png)


### Server-Gruppen

Um weitere Server-Gruppen anzulegen, musst du in der **Navigationszeile** auf **Rechte** klicken und dann auf **Server-Gruppen gehen**. Dort findest du dann eine Übersicht der vorhandenen Server-Gruppen, deren Berechtigungen und den zugewiesenen Benutzer. In der Liste der Server-Gruppen kannst du unten auf das **Plus Symbol** klicken und dann eine neue Gruppe anlegen. 

![img](https://user-images.githubusercontent.com/61839701/170320643-7d37277e-9162-493f-907c-7e52836acbd3.png)



## Berechtigungen

Bis hierhin sollte klar sein, wie du allgemeine Einstellungen vom Teamspeak Server anpasst und wie du deinen Teamspeak Server personalisierst, in dem du weitere Channels und Server-Gruppen anlegst. Im Folgenden geht es nun darum, wie die Berechtigungen diesbezüglich noch angepasst werden können. 



### Berechtigungen: Benutzer

Die Berechtigungen der Benutzer hängen von den zugewiesenen Server-Gruppen ab. Standardmäßig erhält ein Benutzer die **Normal** Gruppe. Wenn dem Benutzer weitere Berechtigungen hinzugefügt werden sollen, dann kann das gemacht werden, in dem ein Rechtsklick auf den Benutzer macht, dann auf Server-Gruppen klickt und im Anschluss die gewünschte Gruppe zugewiesen wird. 

![img](https://user-images.githubusercontent.com/61839701/170320690-72fbd954-fe6e-45d8-a657-9ed3851cb427.png)


### Berechtigungen: Channel 

Für die einzelnen Channels können jeweils Berechtigungen definiert werden. So kann zum Beispiel definiert werden, welche Benutzer den Channel **Betreten, Abonnieren, Beschreibung, sehen, Ändern, Löschen kann** und **Zugriff auf den Channel Datei-Browser haben dürfen**. 

![img](https://user-images.githubusercontent.com/61839701/170320718-2bd14e50-861c-42f4-8224-3f792610dc63.png)


Der Wert der einzelnen Felder wird von den Server-Gruppen abhängig gemacht. Wenn du zum Beispiel eine zusätzliche Server-Gruppe mit dem Namen **Mitglied** erstellst und nur die Zugriff auf den Channel haben sollen, dann muss der Wert mit der von der Server Gruppe übereinstimmen. Nehmen wir an, die Server-Gruppe hat den Berechtigungswert von 50, dann muss in den einzelnen Feldern die **50** eingetragen werden.



### Berechtigungen: Server-Gruppen

Bei den Berechtigungen der Server-Gruppen gibt es verschiedene Kategorien, die angepasst werden können. Diese beinhalten folgende:

- Allgemeine Optionen
- Gruppen verwalten
- Benutzer hinzufügen, entfernen, Berechtigungsschlüssel verwalten
- Benutzer verwalten (verschieben, kicken, bannen)
- Channel verwalten
- Grundlagen


![img](https://user-images.githubusercontent.com/61839701/170320740-6f928032-79f6-426a-b4ba-78ca0a7e8064.png)

Diese können nach deinen Wünschen beliebig angepasst werden. Falls du noch mehr umfassende Änderungen an den Berechtigungen vornehmen möchtest, dann kannst du das machen, in dem du die Optionen deines Teamspeak Clients aufrufst, dort dann auf Anwendung gehst und dann das **Fortgeschrittene Rechtesystem** aktivierst.

