---
id: unturned_whitelist
title: Unturned: Whitelist auf Server aktivieren und bearbeiten
description: Informationen, wie du eine Whitelist auf deinen Unturned-Server von ZAP-Hosting aktivieren und bearbeiten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Whitelist

---



## Whitelist aktivieren

Die Whitelist in Unturned ermöglicht es dir deinen Server zu schützen, indem nur ausgewählte Spieler, die auf der Liste stehen Erlaubnis haben, sich mit dem Server zu verbinden. Die Aktivierung der Whitelist erfolgt im Spiel per Befehl. Hierzu werden **Owner Berechtigungen** benötigt. Falls du nicht weißt, was das ist und wie du dir diese zuweist, dann schaue dir folgende Anleitung dazu an: [Unturned - Admin werden](https://zap-hosting.com/guides/docs/en/unturned_becomeadmin/)



Wenn du der Anleitung befolgt bist und dich erfolgreich zum Admin gemacht hast, dann kannst du nun die Whitelist bei deinem Server aktivieren. Öffne dazu im Spiel auf deinem Server den Chat/Konsole. Dort musst du nun den folgenden Befehl ausführen:

```
/Whitelisted
```



Die Whitelist sollte nun aktiv sein und dementsprechend nur noch Spieler auf den Server zulassen, die in der Liste eingetragen sind. Das Hinzufügen und entfernen von Spielern ist mittels folgender Befehle möglich:



## Whitelist verwalten

**Spieler zur Whitelist hinzufügen:**

```
Permit [SteamID]/[Tag]
```

**Spieler von der Whitelist  entfernen:**

```
Unpermit [SteamID]
```

**Anzeigen aller zugelassener Spieler:**

```
Permits
```

