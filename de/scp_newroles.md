---
id: scp_newroles
title: Neue Rollen hinzufügen
sidebar_label: Neue Rollen hinzufügen
---

## Die Config aufrufen
Neue Rollen werden in der "config_remoteadmin.txt" Datei eingetragen.
Diese Config Datei findest du, indem du im Interface von deinem Server auf "Configs" klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/gZRaAWSmb2Z2Zaj/preview)

Hier dann nach der obigen Config suchen und dann rechts daneben auf das "Auge" klicken, um diese zu öffnen.

## Bestehende Rolle kopieren
Soweit du die Config offen hast, kannst du nach diesen Einträgen darin suchen:

![](https://screensaver01.zap-hosting.com/index.php/s/5DZ3BWqbPHRQMqy/preview)

Das sind Beispiel Rollen , welche bereits eingetragen worden sind.
Wir fügen darunter einen neuen Eintrag ein.
Dafür kopieren wir den Block von einem der obigen Rollen  und fügen diesen Teil unter der letzten Rolle wieder ein.
In unserem Beispiel haben wir die Rolle "Moderator" kopiert und darunter eingefügt:

![](https://screensaver01.zap-hosting.com/index.php/s/eKawc5nSSEZL7Mi/preview)

## Eigene Rolle eintragen
Den gerade eingefügten Block von der bereits existenten Rolle, können wir nun nach belieben bearbeiten und unsere eigenen gewünschten Werte dort eintragen.
In unserem Beispiel haben wir den Namen "ZAP" genutzt:

![](https://screensaver01.zap-hosting.com/index.php/s/5xZpyNaecJfCP9X/preview)

Soweit das erfolgt ist, müssen wir die Rolle noch in die Liste der verfügbaren Rollen eintragen.
Das geht ebenfalls in der identischen Config nur minimal weiter darunter.

![](https://screensaver01.zap-hosting.com/index.php/s/HtTePKdCCGn7osC/preview)

Unsere Rolle tragen wir also unter der "moderator" Rolle ein.
> ACHTUNG: Bitte die Leerzeichen vor und nach dem "-" beachten!

## Berechtigungen
Ganz unten in der "config_remoteadmin.txt" Config Datei können wir die Berechtigungen für die jeweiligen Rollen anpassen.
Wenn wir unserer Rolle also einer Berechtigung zuweisen wollen, können wir den Namen der Rolle in die Klammern eintragen.
So wie es in diesem Beispiel zu sehen ist:

![](https://screensaver01.zap-hosting.com/index.php/s/EJnNQmeM9PMJ4pf/preview)
