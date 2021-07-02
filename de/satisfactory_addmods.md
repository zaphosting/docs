---
id: satisfactory_addmods
title: Mods installieren
sidebar_label: Mods installieren
---

> **ACHTUNG**
> Mods sind von den Entwicklern bisher **nicht offiziell** unterstützt, sie werden jedoch geduldet!
> Die Installation von Mods kann im schlimmsten Fall den Spielstand zerstören, durch ein Update temporär nicht mehr spielbar sein oder ebenfalls zerstört werden!
> Es sollte **in jedem Fall vor** der Installation von Mods ein Backup angelegt werden und auch sonst regelmäßig Backups angelegt werden für den Fall der Fälle!

## Modded Satisfactory auf dem Server installieren

Um Mods auf deinem Server überhaupt installieren zu können, muss  zunächst ein Modded Satisfactory Server bestellt werden: https://zap-hosting.com/de/modded-satisfactory-server-mieten/
Solltest du bereits einen Satisfactory Server gemietet haben, kann das Spiel jederzeit dank des Cloud-Systems wie in [dieser Anleitung](https://zap-hosting.com/guides/docs/de/gameserver_gameswitch/) beschrieben wird, geändert werden.

## Mod-Manager installieren

Das Tool "SatisfactoryModManager" gestaltet die Verwaltung und Installation von Mods sehr einfach und kann mit wenigen Klicks abgewickelt werden.
Das Tool ist verfügbar für Windows und Linux und kann hier herruntergeladen werden: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Auf der verlinkten Seite werden alle Versionen aufgelistet, in der Regel sollte immer die neuste Version verwendet werden, also der erste Eintrag von oben.
Unter "Assets" kann das Tool nun heruntergeladen werden. Je nachdem welches Betriebssystem (Windows oder Linux) du verwendest, klickst du die passende Datei an, wodurch der Download automatisch startet bzw. abhängig von deinem Browser oder gewählten Einstellungen bestätigt werden muss.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Wenn der Download abgeschlossen ist, führe die Datei aus und installiere den Mod-Manager auf deinem PC und wähle bei der Installation die für dich passenden Optionen aus.

## Mods installieren

Es müssen 1:1 die gleichen Mods auf dem Client (von allen Spielern!) und dem Server installiert werden, damit die Verbindung möglich ist bzw. es zu keinem Crasht kommt.
Im ersten Schritt werden die Mods auf dem Client zusammengestellt und installiert, sodass diese im Anschluss auf den Server übertragen werden können.

> **ACHTUNG**
> Nicht alle Mods sind mit dem Multiplayer kompatibel!
> Sofern die Mod mit dem Multiplayer kompatibel ist, wird dies in der Regel immer in der Beschreibung der Mod erwähnt.
> Hinweis: Auch wenn die Mod als kompatibel für den Multiplayer ausgewiesen wird, ist dies keine Gewährleistung dessen!

### Client

Die Mods werden in Profilen gespeichern, sodass als Beispiel in einer Test-Welt andere Mods getestet werden können und mit einem Klick zu den regulären Mods zurück gewechselt werden kann.
Wähle also zuerst ein Profil aus bzw. erstelle wie im Screenshot dargestellt ein neues.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Stelle den Filter zunächst auf "Compatible", damit nur Mods angezeigt werden, welche derzeit mit der Version kompatibel sind.

![](https://screensaver01.zap-hosting.com/index.php/s/EM9q87scfbR3cq9/preview)

Mods können nun einfach mit einem Klick auf das Download-Symbol installiert werden, wenn sichergestellt ist, dass die Mod mit dem Multiplayer kompatibel ist, wie oben beschrieben.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

Nachdem alle gewünschten Mods auf dem Client installiert und sichergestellt worden ist, dass die Mod mit dem Multiplayer kompatibel ist, können die Mods nun auf dem Server installiert werden. 
Damit es hierbei keine Probleme bei der Übernahe der Änderungen gibt, stelle bitte sicher, dass dein Server hierbei zuvor gestoppt wird!

Verbinde dich nun via FTP zu deinem Server, um die Mods im nächsten Schritt hochladen zu können.
Wir haben in [dieser Anleitung](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/) alles zur FTP-Verbindung beschrieben.
Nachdem die Verbindung hergestellt wurde, öffne den folgenden Ordner-Pfad: `/gXXXXXX/modded-satisfactory/FactoryGame/Mods`

Nun muss der lokale Ordner von Satisfactory bei dir auf dem PC geöffnet werden.
Die Schritte unterscheiden sich zwischen Steam und Epic Games etwas:

<!--DOCUSAURUS_CODE_TABS-->

<!--Steam-->
Sofern du Satisfactory via Steam installiert hast, dann kannst du den Ordner direkt über den Steam-Client öffnen lassen:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

<!--Epic Games-->
Bei Epic Games gibt es leider keinen Button, um den Installations-Ordner zu öffnen, der Ordner muss also manuell geöffnet werden.
Öffne dazu den Windows Explorer und navigiere in den Ordner, wo Epic Games installiert wurde von dir.
In der Regel ist dies der korrekte Pfad: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

<!--END_DOCUSAURUS_CODE_TABS-->

Die Mods, welche durch den Mod-Manager im Client installiert worden sind, müssen nun via FTP hochgeladen werden.
Um an die Mods selbst zu können, müssen die folgenden Ordner nach einander geöffnet werden: `FactoryGame -> Mods`

Nun markieren wir alle Ordner **außer den SML Ordner** mit gedrückter STRG-Taste und einem Mausklick auf den Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Die ausgewählten Ordner werden nun mittels Drag&Drop in den zuvor geöffnet Mod-Ordner in FTP reingezogen.

## Server starten

Nachdem die Mods hochgeladen worden sind, kann der Server einfach via Webinterface gestartet werden.
Danach kann dem Server wie in dieser Anleitung beschrieben gejoint werden: https://zap-hosting.com/guides/docs/de/satisfactory_connect/
