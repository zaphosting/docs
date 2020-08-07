---
id: fivem_mods_installaddon
title: Addon Carmods Installieren
sidebar_label: Addon Carmods Installieren
---

## Mit FTP Verbinden
Zuerst solltest du dich über FTP auf deinen Server Verbinden, dazu kannst du unser [FTP-Tutorial](gameserver_ftpaccess.md) nutzen.

## Vorbereitung

Wenn dein carmod eine "rpf" datei ist, müssen wir [OpenIV](https://openiv.com/) runterladen und installieren, damit diese datei geöffnet werden kann

Wenn alle meta und ytd/yft dateien schon verhanden sind, ist OpenIV nicht nötig.

Nun erstellen wir einen Ordner unter "Resources" (zb: carmod, alle Arbeit wird in diesem Ordner gemacht), in unserem carmod ordner erstellen wir ebenfalls einen "stream" ordner und eine "__resource.lua" Datei

Die Lua Datei wird später noch mit Informationen Befüllt.


## Carmod Installieren
Nun öffnen wir die Carmod Files, wenn es eine RPF ist benutzen wir dafür OpenIV, wir brauchen folgende ordner daraus:

```
data/
common/data
```

Dateien in diesen Ordner und Unterordner sollten in deinen "carmod" ordner kopiert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/QB9DHkm9BHmixHs/preview)

Kopiere ebenfalls die content.xml im hauptordner des carmods in deinen carmod Ordner.

Öffne nun den x64 ordner.


### Sprachvariablen Anlegen

Wenn in x64 ein Ordner mit dem Namen data/ ist, Öffne diesen und öffne darin den lang/ Ordner

Öffne eine Sprache, z.b. americandlc.rpf

Nun rechtsklicken wir auf die global.gx2 und Klicken auf "Export to openFormat Text File"

![](https://screensaver01.zap-hosting.com/index.php/s/zn8D9rciFoPSyj7/preview)

Als ziel wählen wir ebenfalls unseren Carmod-Ordner aus.

Nun erstellen wir eine "vehicle_names.lua" Datei im Carmod-Ordner und öffnen diese

Dort fügen wir dann folgendes ein:

```
Citizen.CreateThread(function()
AddTextEntry('0xC593CAF5', 'Nissan GT-R 35 Nismo 2015')
AddTextEntry('0xC990C46A', 'Nissan GT-R 35 Nismo 2015')
end)
```

Nun öffnen wir die "global.oxt" datei in dem Carmod Ordner mit einem Texteditor, dort sehen wir nun die Addresse & Namen, welchen wir in die Einträge oben einfügen müssen, in unserem fall so:

![](https://screensaver01.zap-hosting.com/index.php/s/qycjwbmiZpd6i5P/preview)

Diese Fügen wir dann auch so in der Datei ein:

![](https://screensaver01.zap-hosting.com/index.php/s/mCGxMbx4yr77aMH/preview)


Die Datei kann nun abgespeichert werden, nun öffnen wir die __resource.lua und fügen folgendes am ende ein:

```
client_script 'vehicle_names.lua'
```

Die global.oxt Datei kann nun gelöscht werden, diese brauchen wir nicht mehr.

### Meta-Daten Einstellen


Öffne nun den x64/levels/gta5/vehicles/vehicles.rpf Ordner und Kopiere alle daten darin in den "stream" ordner unseres carmods.

Wenn in x64 andere einzelne Ordner mit RPF Dateien sind, öffnen wir diese ebenfalls und kopieren sie in den "stream" ordner.

OpenIV kann nun geschlossen werden.

Nun öffnen wir die __resource.lua und content.xml Datei, die content.xml datei nutzen wir nun als Referenz zum Hinzufügen der Metadaten

Zuerst fügen wir in die __resource.lua ganz oben folgendes ein:

```
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
```

In der __resource.lua fügen wir nun data_file einträge ein:

```
data_file "TYP" "DATEINAME"
```


Nun erstellen wir eine neue zeile mit den jeweiligen Einträgen in der content.xml, es sollte einen Dateinamen und darunter einen Typ stehen, diese kopieren wir und fügen sie in der __resource.lua ein. 

Folgende Einträge sollten ignoriert werden:

```
RPF/.rpf 
TEXTFILE_METAFILE/dlctext.meta
```

Ganz unten in der content.xml befindet sich eine weitere Liste mit nur den Dateinamen. Die Einträge in der Datei __resource.lua müssen in der gleichen Reihenfolge sein.

in der __resource.lua musst du auch ein Array dieser Meta Dateien Hinzufügen. Fügen Sie für jede data_file den Dateinamen/Pfad in die files {} Tabelle ein.
Die Dateipfade müssen geändert werden, sodass sie mit der Struktur im Ordner übereinstimmen!

Die "files" Tabelle sollte so aussehen:

```
files {
    "vehicles.meta",
    "handling.meta",
    "vehicles.meta",
    "carvariations.meta"
}
```

Nachdem die Mods alle hochgeladen sind, muss nun nur noch deine resource in der server.cfg eingetragen werden, diese findest du im "server-data" Ordner deines FiveM Servers.

![](https://screensaver01.zap-hosting.com/index.php/s/eM8MtkZJCLg3gdz/preview)

Diese kannst du mit einem beliebigen Texteditor öffnen, unter den "start" Einträgen kannst du nun deine Resource wie folgt eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/H6Y5SHHKqeMPoLo/preview)


Fertig! Nach einem Serverneustart sollte der Carmod nun auf dem Server zu finden sein!
