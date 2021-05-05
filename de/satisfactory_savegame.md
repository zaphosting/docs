---
id: satisfactory_savegame
title: Savegame-Manager
sidebar_label: Savegame-Manager
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/EC4FXT5Mwb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Unser Interface bietet dir einen bequemen Weg deine Savegames zu verwalten. Mit wenigen Klicks kannst du ein eigenes Savegame hochladen.
Den "Savegame-Manager" findest du unter Einstellungen in deinem Server Dashboard.

> Dein Server speichert alle 5 Minuten automatisch, es werden immer die letzten 6 Autosaves deines Servers behalten. 

## Neues Savegame
Satisfactory bietet dir die Wahl zwischen 4 verschiedenen Welten

![](https://screensaver01.zap-hosting.com/index.php/s/TG5yRDNFrGXQLGW/preview)

Du findest in deinem Savegame-Manager 4 verschiedene Saves mit unterschiedlichen Namen

![](https://screensaver01.zap-hosting.com/index.php/s/8TodT3dCHaGtznB/preview)

grass-fields.sav ist Grasfelder
rocky-desert.sav ist Felswüste
northern-forest ist Nördlicher Wald
dune-desert ist Dünenlandschaft

Suche dir eine der Karten aus, diese zeichnen sich durch unterschiedliche Aspekte, aus und folgen auch unterschiedlichen Schwierigkeitsgraden.
Für Satisfactory Neulinge bietet sich Grasfelder an, da es viele gerade Flächen und sehr viel Platz bietet.

Trage nun dein gewünschtes Savegame bei "Aktives Savegame" ein, achte darauf nur den Namen ohne das .sav einzutragen

![](https://screensaver01.zap-hosting.com/index.php/s/HkXtdFGqqRzbdNC/preview)

Bei jedem Server Stopp wird automatisiert das älteste erstellte Savegame geladen.
Es könnte also bei einem Server Stopp immer zu einem kleinen Rollback kommen, da der Fortschritt lediglich alle 5 Minuten gespeichert wird.
Im Zweifel warte also noch bis zu 5 Minuten bis du deinen Server stoppst, somit sollte kein Datenverlust auftreten.

Starte danach einfach deinen Server und das gewünschte Savegame wird geladen

## Dein eigenes Savegame
Eigene Savegames können ebenfalls bequem über den Savegame-Manager eingebunden werden.
Hierzu lokalisiere dein Savegame auf deinem Computer

Drücke `Windows-Taste + R` 
und kopiere dort diesen Pfad hinein: `%LOCALAPPDATA%\FactoryGame\Saved\SaveGames\`

![](https://screensaver01.zap-hosting.com/index.php/s/JSJoocLZyiipZzp/preview)

Es öffnet sich nun dein Savegame-Verzeichnis von Satisfactory, dort findest du alle welche sich in deinem Spiel befinden.
Anhand des Änderungsdatums solltest du diese identifizieren können.

![](https://screensaver01.zap-hosting.com/index.php/s/kHqYB2bDt5RiMNT/preview)

Als nächstes solltest du das Savegame umbennenen, ich würde empfehlen alles bis auf den Hauptnamen zu entfernen.
In diesem Beispiel würde das Savegame also am Ende "TolleSpiel" heißen.

Kopiere nun dein Savegame einfach per Drag&Drop in unseren Savegame-Manager

![](https://screensaver01.zap-hosting.com/index.php/s/Wy2bteaWAT4r7FD/preview)

und trage bei "Aktives Savegame" den Namen deines Savegames ein.

![](https://screensaver01.zap-hosting.com/index.php/s/8XG5BEGw3BzWzJ3/preview)

Wenn du den Server nun startest, wird das Savegame geladen.

> Es wäre möglich das du nicht dein eigenes Inventar behältst, alle Objekte darin könnten also verloren gehen

## Savegames editieren
Wenn du etwas an deinem Savegame verändern möchtest, beispielweise Cheaten, ist der einzige Weg einen Savegame Editor zu nutzen.
Beispielsweise könnte [dieser](https://github.com/Goz3rr/SatisfactorySaveEditor) Savegame Editor benutzt werden. 
Download Version [0.9.17](https://github.com/Goz3rr/SatisfactorySaveEditor/releases/tag/v0.9.17)

Lade das Savegame in deinem Savegame-Manager herunter und öffne es im Savegame Editor (File > Open Recent)

Wenn du das Inventar eines Spielers verändern möchtest, suche nach:
`FactoryGame.FGInventoryComponent` darin suchst du nach `Persistent_Level:PersistentLevel.Char_Player_C *************.Inventory`
Bei mehreren Spielern gibt es natürlich hierbei mehrere Einträge, du musst am Inhalt des Inventars identifizeiren welches Profil das richtige ist.
Angenommen du möchtest nun die Anzahl der Power Shards in deinem Inventar verändern, suche dir diesen Eintrag heraus und verändere "NumItems" zur gewünschten Anzahl

![](https://screensaver01.zap-hosting.com/index.php/s/LsGsCAAEW49wQzw/preview)

Wenn du die Änderungen durchgeführt hast, klicke auf File und Save.

Du kannst nun das editierte Savegame wieder hochladen und den Server starten.

Der Savegame Editor bietet dir u.a. noch einige weitere Cheats öffne hierzu einfach "Cheats"

> Für die Funktionalität dieser Cheats können wir nicht garantieren
