---
id: fivem_esx_changejobgarages
title: FiveM ESX Server: Job-Garagen - Autos hinzufügen
description: Informationen, wie du Autos zu Job-Garagen auf deinem FiveM-Server mit ESX von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Job-Garagen Autos Hinzufügen
---

> **Wichtig**: ESX muss installiert sein


## 📔 Vorbereitungen

Wir müssen zuerst sichergehen dass "Überschreiben erzwingen" deaktiviert ist.
Dafür gehen wir auf den Tab "Ressourcen".

![](https://screensaver01.zap-hosting.com/index.php/s/6ZXxWHN4wCE6WcE/preview)

Dort entfernen wir dir dann den Haken.

![](https://screensaver01.zap-hosting.com/index.php/s/gQ885gn4qkCyxbi/preview)


## Configs Einstellen

Nun öffnen wir das "Configs" Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/4PbLXXsMFX4xq34/preview)

Dort warten wir nun, bis alle Configs erschienen sind, nachdem alle Configs geladen wurden, öffnen wir entweder die `esx_policejob/config.lua` oder `esx_ambulancejob/config.lua` Datei, je nachdem welche Job-Garage wir ändern können.

Hier suchen wir nach der `Config.AuthorizedVehicles` Zeile, hier sind alle Autos gelistet, welche für die verschiedenen Job-Ranks zur Verfügung stehen.

Wenn wir nun beim "doctor" Rank ein neues Fahrzeug einfügen will, können wir das wie folgt machen:

![](https://screensaver01.zap-hosting.com/index.php/s/CR46LHJ5tScm9f9/preview)

> Gehe sicher, dass du am Ende der vorherigen Zeile ein Komma hast, wenn du neue Fahrzeuge einfügst, ansonsten kann es zu Problemen kommen.

Fertig! Nun können wir den Server neustarten, und die Änderung wird ingame erscheinen.
