---
id: fivem-esx-changejobgarages
title: "FiveM: Job-Garagen - Autos hinzufügen"
description: Informationen, wie du Autos zu Job-Garagen auf deinem FiveM Server mit ESX von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Job-Garagen Autos hinzufügen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
ESX muss installiert sein
:::

<InlineVoucher />

## Vorbereitungen

Wir müssen zuerst sichergehen, dass "Überschreiben erzwingen" deaktiviert ist. Dafür gehen wir auf den Tab "Ressourcen".

![image](https://screensaver01.zap-hosting.com/index.php/s/S4yZkRDjkBjWrHN/preview)

Dort entfernen wir dir dann den Haken.

![image](https://screensaver01.zap-hosting.com/index.php/s/PwAEFiyArJrsLif/preview)


## Configs einstellen

Nun öffnen wir das "Configs" Tab.

Dort warten wir nun, bis alle Configs erschienen sind, nachdem alle Configs geladen wurden, öffnen wir entweder die `esx_policejob/config.lua` oder `esx_ambulancejob/config.lua` Datei, je nachdem welche Job-Garage wir ändern können.

Hier suchen wir nach der `Config.AuthorizedVehicles` Zeile, hier sind alle Autos gelistet, welche für die verschiedenen Job-Ranks zur Verfügung stehen.

:::info
Gehe sicher, dass du am Ende der vorherigen Zeile ein Komma hast, wenn du neue Fahrzeuge einfügst, ansonsten kann es zu Problemen kommen.
:::

Fertig! Nun können wir den Server neu starten, und die Änderung wird im Spiel erscheinen.
