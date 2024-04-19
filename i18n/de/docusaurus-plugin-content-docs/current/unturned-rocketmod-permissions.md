---
id: unturned-rocketmod-permissions
title: "Unturned: Server-Berechtigungen anpassen"
description: Informationen, wie du die Berechtigungen für deinen Unturned Rocketmod Server von ZAP-Hosting anpassen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Berechtigungen anpassen
---

## Vorbereitungen
Damit die notwendigen Config Dateien vom Server generiert werden, muss dieser erst einmal gestartet werden. Soweit der Server dann online ist, kannst du diesen wieder stoppen. Denn alle notwendigen Dateien, welche wir bzw. der Server benötigt, wurden dann erstellt.

## Config aufrufen
Die Berechtigungen werden in der "Permissions.config.xml" Datei gespeichert. Diese kannst du ganz bequem über unser Interface einsehen und bearbeiten. Klicke dafür im Interface von deinem Server auf den Reiter "Configs":

![image](https://user-images.githubusercontent.com/26007280/189910011-6a448142-8108-418c-9d2a-bfede69fa92c.png)

Die Config heißt "Rocket Permissions" und kann mit einem Klick auf den blauen Stift zum Bearbeiten geöffnet werden:

![image](https://user-images.githubusercontent.com/26007280/189910042-bb63f6a3-dd1a-423d-8fbf-6cca37d43de0.png)

## Die Config verstehen
Die Config sieht auf den ersten Blick umständlich und komplex aus. Wir helfen dir bei dem Verständnis! Unterteilt ist die Datei in den verschiedenen Gruppen. Die Gruppen werden in der <groups> </groups> Kategorie alle angezeigt und aufgelistet.
Sprich bei "<groups>" fängt es an und bei "</groups>" hört es auf:

Anfang:

![image](https://user-images.githubusercontent.com/26007280/189910065-de793d66-65cc-4b23-a9f7-e760d9e29b32.png)

Ende:

![image](https://user-images.githubusercontent.com/26007280/189910098-962f2242-ad13-4d26-80c0-3dbff0522592.png)

Dazwischen werden dann die Gruppen jeweils dargestellt.
Der ganze Block stellt zum Beispiel eine Gruppe dar:

![image](https://user-images.githubusercontent.com/26007280/189910133-6798b345-dac5-4aba-819c-52f5d914a2b2.png)

In welchem dann alle notwendigen Parameter der Gruppe zugewiesen werden.

## Berechtigungen anpassen
Innerhalb der Gruppe findest du dann auch die "Permissions" Kategorie. Wie in diesem Screenshot zu sehen ist:

![image](https://user-images.githubusercontent.com/26007280/189910171-d5b9e4f7-a477-4685-9b4b-952a669c750c.png)

Darin können wir nun die Berechtigungen der Gruppe anpassen. Sowie die Wartezeit angeben, wann der Befehl erneut genutzt werden kann. Angenommen, wir wollen der Gruppe das Recht geben, User zu bannen. Dann können wir dort folgendes eintragen:

![image](https://user-images.githubusercontent.com/26007280/189910233-96dd5565-6ecb-47f4-808f-3814ecb9bc0c.png)

Das würde bedeutet, dass die Gruppe jetzt im Spiel Leute bannen kann und da der "Cooldown" auf 0 Sekunden gesetzt wurde, kann dies durchgängig gemacht werden.

Wollen wir der Gruppe noch das Recht geben, sich zu heilen, dann kann es wie folgt eingetragen werden:

![image](https://user-images.githubusercontent.com/26007280/189917800-ed999eec-8d02-4de2-beca-f9f504440e23.png)

Hierbei ist es dem User aber nur alle 3600 Sekunden möglich den Befehl zu nutzen.
Die Prozedur ist bei weiteren Rechten identisch.
Allerdings sind für einige Berechtigungen auch entsprechende Plugins notwendig.

## User der Gruppe zuweisen
Die Gruppen wurden jetzt mit den gewünschten Berechtigungen erstellt. Nun müssen aber noch User der Gruppe zugewiesen werden. Dafür wird die Steam64ID der User benötigt. Diese kann man herausfinden, indem man auf den folgenden Link geht:
https://steamid.io/

Soweit man die Steam64ID ermittelt hat, kann man diese in die Config eintragen.
Das geht hier bei dem Member Parameter:

![image](https://user-images.githubusercontent.com/26007280/189917841-cfd09751-4d05-4a12-94a9-6b104a187685.png)

Aussehen würde dies in einem Beispiel wie folgt:

![image](https://user-images.githubusercontent.com/26007280/189917875-d17129e4-b0ba-42d4-a6bf-8fb31bd4c424.png)

Es ist also immer notwendig eine neue Zeile für neue User anzulegen, welche der Gruppe zugewiesen werden sollen. Soweit du alle gewünschten User eingetragen hast, kannst du die Config speichern, indem du auf den "Speichern" Button klickst. Danach den Server starten und schon bist du im Spiel der besagten Gruppe zugewiesen!
