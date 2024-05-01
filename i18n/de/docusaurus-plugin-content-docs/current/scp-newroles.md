---
id: scp-newroles
title: "SCP Secret Laboratory: Neue Rollen hinzufügen"
description: Informationen, wie du neue Rollen auf deinen SCP-Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Neue Rollen hinzufügen
---

## Die Config aufrufen
Neue Rollen werden in der "config_remoteadmin.txt" Datei eingetragen. Diese Config Datei findest du, indem du im Interface von deinem Server auf "Configs" klickst.

![image](https://user-images.githubusercontent.com/13604413/159182711-19402a7e-8383-4cd0-b37b-f6c68f97c997.png)

Hier dann nach der obigen Config suchen und dann rechts daneben auf den "Stift" klicken, um diese zu öffnen.

## Bestehende Rolle kopieren
Soweit du die Config offen hast, kannst du nach diesen Einträgen darin suchen:

![image](https://user-images.githubusercontent.com/13604413/159182751-0185aab8-bd2e-4927-b3dd-ea47692f1d67.png)

Das sind Beispiel Rollen, welche bereits eingetragen worden sind.
Wir fügen darunter einen neuen Eintrag ein.
Dafür kopieren wir den Block von einem der obigen Rollen und fügen diesen Teil unter der letzten Rolle wieder ein.
In unserem Beispiel haben wir die Rolle "Moderator" kopiert und darunter eingefügt:

![image](https://user-images.githubusercontent.com/13604413/159182791-570da30e-7155-4550-b9c6-acf1b21311ab.png)

## Eigene Rolle eintragen
Den gerade eingefügten Block von der bereits existenten Rolle, können wir nun nach Belieben bearbeiten und unsere eigenen gewünschten Werte dort eintragen. In unserem Beispiel haben wir den Namen "ZAP" genutzt:

![image](https://user-images.githubusercontent.com/13604413/159182832-9bee2593-bc9d-403c-88da-ea72ba41cecf.png)

Soweit das erfolgt ist, müssen wir die Rolle noch in die Liste der verfügbaren Rollen eintragen.
Das geht ebenfalls in der identischen Config nur minimal weiter darunter.

![image](https://user-images.githubusercontent.com/13604413/159182860-38595abf-ca1b-460e-a19d-57b338f1af6d.png)

Unsere Rolle tragen wir also unter der "Moderator" Rolle ein.
:::info
ACHTUNG: Bitte die Leerzeichen vor und nach dem "-" beachten!
:::

## Berechtigungen
Ganz unten in der "config_remoteadmin.txt" Config Datei können wir die Berechtigungen für die jeweiligen Rollen anpassen.
Wenn wir unserer Rolle also einer Berechtigung zuweisen wollen, können wir den Namen der Rolle in die Klammern eintragen.
So wie es in diesem Beispiel zu sehen ist:

![image](https://user-images.githubusercontent.com/13604413/159182890-baab3f9e-1e3d-4238-bc89-a531217e8d02.png)
