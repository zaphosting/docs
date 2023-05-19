---
id: assettocorsa_mods
title: Mods auf einen Server installieren
description: Informationen, wie du Mods auf deinen Assetto Corsa-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Mods Installieren
---

## Mit FTP verbinden

Bevor mods installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![image](https://user-images.githubusercontent.com/13604413/159135972-112ad9ef-5f6b-4bc6-ba9f-7471b4f8c22b.png)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://user-images.githubusercontent.com/13604413/159135981-9119c0c9-1b37-4fcc-ad76-1c88bc4b116b.png)


## Vorbereitung

Zunächst Öffnen wir den Assetto Corsa Ordner, diesen können wir öffnen, indem wir Steam Öffnen und "Assetto Corsa" in der Spieleliste Rechtsklicken,

Nun öffnen wir "Lokale Dateien" und Öffnen die Lokalen Spieldateien:

![image](https://user-images.githubusercontent.com/13604413/159136021-cd23c04f-0db5-4051-8993-7fddfd0edfaa.png)

Dort öffnen wir den "server" Ordner und öffnen den ACServerManager.exe.

## Autos Einstellen

Nun wechseln wir in das Tab "Cars / Entry List", hier können wir nun neue Autos hinzufügen:

Um Autos zu aktivieren, muss links das Häkchen gesetzt werden

![image](https://user-images.githubusercontent.com/13604413/159136202-40a079e2-8558-4c13-825a-f4a73c90b833.png)


In der Mitte erscheinen nun Autos, welche auf dem Grid platziert werden können, hier können wir nun Autos in den Farben wählen, welche im Grid sein sollten:

![image](https://user-images.githubusercontent.com/13604413/159136214-b58c2720-6a04-4882-a661-12cbde86cf31.png)


:::info
Um mehrere Autos zu wählen, können mehrere haken gesetzt werden, um die verschiedenen Autos in der Mitte hinzugefügt werden.


Beachte das alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird

![image](https://user-images.githubusercontent.com/13604413/159136228-57a877cd-e75b-4df0-ad57-30c6b05af255.png)
:::



## Config Hochladen

Nun können wir die Config über den "Save" Button Abspeichern und über den "Export" Button exportieren:

![image](https://user-images.githubusercontent.com/13604413/159136248-2aa62490-c2a7-49ae-b97e-0c731cebd7a1.png)

Hier wählen wir nun einen freien Ordner, dort werden die Config-Daten gespeichert.

Nun kann der AC Server Manager geschlossen werden, wir öffnen nun den Ordner, in welche die Configs exportiert wurden.

![image](https://user-images.githubusercontent.com/13604413/159136258-33c0896a-2ec7-4c80-9fa1-1bf65ebdd083.png)


Diese Configs können nun über Drag&Drop in den "cfg" Ordner des Servers hochgeladen werden.

![image](https://user-images.githubusercontent.com/13604413/159136263-cb78e326-bdf5-40c5-9581-804b4f786ce9.png)



## Server Content Hochladen

Wir müssen nun den Content für den Server generieren, damit Car&Map Mods auf dem Server geladen werden, dazu klicken wir zunächst unten auf "Update Server Content"

![image](https://user-images.githubusercontent.com/13604413/159136780-321115f5-0141-410e-975f-71e33f500da1.png)


Dieser Prozess kann einige Minuten in Anspruch nehmen, es werden nun alle Maps & Cars zu Serverdateien umgewandelt.

:::info
Nachdem dieser Prozess vollendet ist, kann es ggf. zu einer "Could not update" Meldung kommen, diese ist unproblematisch.
:::

Nun Öffnen wir den "Server" Ordner, indem auch der AcServerManager ist, dort befindet sich ein "Content" Ordner, welchen wir nun über Drag&Drop auf unseren Assetto Corsa Server hochladen, und damit unseren alten "Content" Ordner überschreiben:

![image](https://user-images.githubusercontent.com/13604413/159136806-a7f18a68-1dc6-43e6-bf57-6c153c439706.png)


Nachdem der Content hochgeladen wurde, sind die Carmods nach einem Serverneustart installiert und Aktiv.
