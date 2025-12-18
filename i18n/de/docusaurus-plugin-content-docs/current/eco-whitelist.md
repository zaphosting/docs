---
id: eco-whitelist
title: "ECO: Whitelist aktivieren"
description: "Entdecke, wie du deinen Gameserver mit der Whitelist-Funktion von ECO absicherst und den Spielerzugang kontrollierst → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Die Whitelist von ECO ermöglicht es dir, deinen Gameserver zu schützen, indem nur ausgewählte Spieler auf der Liste eine Verbindung zum Server herstellen dürfen.

<InlineVoucher />

### Aktivierung (Config)

Die Whitelist wird automatisch aktiviert. Sie wird aktiv, sobald mindestens ein Spieler zur Liste hinzugefügt wurde. Die Spieler müssen in der **Users.eco** Konfigurationsdatei eingetragen werden. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Das Feld **$values** enthält die SteamIDs der Spieler, die auf die Whitelist gesetzt werden sollen. Du findest diese, indem du zuerst dein Steam-Profil öffnest und dann irgendwo mit der rechten Maustaste klickst. Dort kannst du die Steam-URL deines Profils kopieren. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Anschließend öffnest du eine der folgenden Seiten und fügst die URL deines Profils dort ein: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Dort erhältst du allgemeine Infos sowie die Steam ID deines Accounts. Für die Whitelist brauchst du nur die SteamID64. Diese wird dann im Feld **$values** eingetragen. Das sieht dann so aus:

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

Alternativ kannst du auch weitere Spieler mit Administratorrechten im Spiel zur Whitelist hinzufügen. Das Hinzufügen erfolgt über den Chat bzw. die Konsole mit folgendem Befehl:

```
/whitelist [Spieler]
```



## Whitelist verwalten

Die Verwaltung der Whitelist ist nur über die **Users.eco** Konfigurationsdatei möglich, da es keinen Serverbefehl gibt, um einen Spieler von der Whitelist zu entfernen. Möchtest du einen Spieler entfernen, lösche ihn einfach aus der Config-Datei. Ein Neustart des Servers ist erforderlich, damit die Änderung wirksam wird. 

<InlineVoucher />