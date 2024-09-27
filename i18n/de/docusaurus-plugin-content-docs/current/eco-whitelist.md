---
id: eco-whitelist
title: "ECO: Whitelist aktivieren"
description: Informationen, wie du eine Whitelist für deinen ECO-Server bei ZAP-Hosting erstellst und verwaltest - ZAP-Hosting.com Dokumentation
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Whitelist in ECO ermöglicht es dir deinen Server zu schützen, indem nur ausgewählte Spieler, die auf der Liste stehen, die Erlaubnis haben, sich mit dem Server zu verbieten.

<InlineVoucher />

### Aktivierung Config

Die Aktivierung der Whitelist erfolgt automatisch. Diese wird aktiviert, sobald mindestens ein Spieler in die Liste eingetragen wurde. Eingetragen werden die Spieler in der **Users.eco** Config Datei. 



```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Bei dem Feld **$values** werden die SteamIDs von den Spielern eingetragen, die zur Whitelist hinzugefügt werden sollen. Diese findest du, indem du zunächst einmal dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle Rechtsklick drückst. Dort kann dann die Steam URL des Profils kopiert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/J2HgXL2ymizMLaK/preview)



Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/



![](https://screensaver01.zap-hosting.com/index.php/s/Nj2Z7ZYwLfwnWPZ/preview)

Dadurch erhältst du dort die sowohl die allgemeinen Accountinformationen als auch die Steam ID. Diese wird dann bei **$values** eingetragen. Das sieht dann folgendermaßen aus:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "weitereSteamID"      
      ]
    }
```





### Aktivierung (Chat)

Alternativ ist es ebenfalls möglich, mit Administrator-Berechtigungen im Spiel weitere Spieler zur Whitelist hinzuzufügen. Das hinzufügen erfolgt über den Chat/Konsole mit dem folgenden Befehl:

```
/whitelist [spieler]
```



## Whitelist verwalten

Die Verwaltung der Whitelist erfolgt ausschließlich über die **Users.eco** Konfigurationsdatei, da es keinen Server Befehl zum Entfernen eines Spielers gibt. Wenn du also einen Spieler entfernen möchtest, dann muss dieser wieder aus der Config ausgetragen werden. Ebenfalls ist dann ein Neustart des Servers notwendig, damit die Änderung wirksam wird. 