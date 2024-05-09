---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Installation von Mods / Modpacks"
description: Informationen über die Installation von Mods / Modpacks auf deinem Minecraft Forge Server von ZAP-Hosting.com - ZAP-Hosting.com Dokumentation
sidebar_label: Installation von Mods / Modpacks
---

Hier erfährst du, wie du einen Mod / Modpack auf deinen Minecraft-Server herunterladen und installieren kannst.
Klicken hier, um zu unseren Minecraft-Servern zu gelangen:  [Minecraft Server Hosting](https://zap-hosting.com/de/minecraft-server-hosting/)


## Voraussetzungen

- Ein [Gameserver](https://zap-hosting.com/de/gameserver-hosting/)
- Ein FTP-Client ( wie zum Beispiel WinSCP, FileZilla)
- Verbindung zu deinem Server via FTP ([Anleitung](gameserver-ftpaccess.md))



## Schritt 1 - Suchen und Herunterladen von Mods oder Modpacks

Es gibt im Internet viele Möglichkeiten, Mods / Modpacks zu finden. Die größte Plattform für Mods und Modpacks ist CurseForge. Fast 99% aller Mods / Modpacks für Minecraft lassen sich dort finden und mit wenigen Klicks herunterladen. Diese Anleitung konzentriert sich auf die Nutzung von CurseForge. Du kannst nach Mods [hier](https://www.curseforge.com/minecraft/mc-mods) und nach Modpacks [hier](https://curseforge.com/minecraft/modpacks) suchen.

:::note Mods funktionieren nur mit einer bestimmten Version des Modloaders. Du musst auf der Mod Seite nachsehen, welche Version du benötigst. Wenn du mehrere Mods installierst, stelle sicher, dass sie alle dieselbe Version verwenden. Darüber hinaus sind Forge-Mods nicht mit Fabric-Mods kompatibel und umgekehrt.
:::

Gehe auf die Seite des Mods/Modpacks deiner Wahl und klicke auf den Reiter "Dateien".

![image](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Suchen nach der gewünschten Version und klicken darauf, um den Abschnitt "Dateidetails" aufzurufen.

:::tip
Über das Dropdown-Menü am oberen Rand der ausgewählten Registerkarte "Dateien" kannst du nach Version und Modloader filtern.

![image](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="For Mods" default>
Klicken im Abschnitt "Dateidetails" auf die Schaltfläche "Herunterladen". Speichere diese Datei an einem beliebigen Ort, du wirst sie später noch brauchen.

![image](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="For Modpacks">
Scrollen im Abschnitt "Dateidetails" nach unten, bis der Punkt "Zusätzliche Dateien" erscheint, klicken dort auf die drei Punkte und wählen "Datei herunterladen". Speichere diese Datei an einem beliebigen Ort, du wirst sie später noch brauchen.

![image](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Schritt 2 - Extrahieren von Dateien aus Downloads (nur für Modpacks)

Suche die heruntergeladene Datei auf deinem PC und klicke mit der rechten Maustaste darauf, wähle "Alle extrahieren...". Lege den Ordner fest, in dem du die extrahierten Dateien haben möchtest. Nicht vergessen!
![extract the file german version](https://i.imgur.com/R3BZDg4.png)

Dein entpackter Ordner sollte einen Mods, Config und Defaultconfig Ordner enthalten. Es können auch mehr als die hier gezeigten Ordner vorhanden sein.

:::note
Einige Modpacks erfordern zusätzliche Schritte, wie zum Beispiel AllOfFabric6. Bei AllOfFabric6 musst du die "startserver.bat" (Windows) oder "startserver.sh" (Linux / MacOS) ausführen, um die oben genannten Ordner zu erhalten. Das Skript wird die Ordner für dich herunterladen. In den meisten Fällen werden die Ordner jedoch ohne weitere Schritte verfügbar sein. Sollte sich in dem entpackten Ordner kein Skript befinden, solltest du einen kurzen Blick ins Internet werfen, um herauszufinden, wie du die Serverdateien für dein Modpack bekommst.
:::


## Schritt 3 - Installation der richtigen Serverversion

Wähle im Zap-Hosting Webinterface den Gameserver aus und gehe im Bereich Einstellungen auf "Spiele".
![select "Games" german version](https://i.imgur.com/fU9CavE.png)

Klappe den Abschnitt "Verfügbare Spiele" auf und suche nach deinem Modloader (Forge für Forge Mods / Modpacks, Fabric für Fabric Mods / Modpacks). Klicke auf den grünen Download Button.

![download modloader german version](https://i.imgur.com/3WFXozc.png)

Klicke auf das Dropdown-Menü unter "Spielversion" und wähle deine Minecraft-Version aus, die der korrekten Version für deinen Mod/Modpack entspricht. Bei Forge hast du die Möglichkeit, die neueste Version oder die empfohlene Version zu verwenden. Versuche zuerst die neueste Version und wenn dein Server nicht wie erwartet funktioniert, gehe zurück und versuche die empfohlene Version. Klicke auf den Button "Akzeptieren und installieren".


![select the right version german version](https://i.imgur.com/VBVMiIy.png)

:::tip
Wenn du nicht weißt, welche Minecraft-Version du brauchst, gehe zurück auf die Seite "File Details" auf CurseForge. Neben dem Gamecontroller-Symbol kannst du die Version sehen.

![image](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

Wenn die Installation des Spiels abgeschlossen ist, erscheint ein blauer Button neben dem Namen des Spiels (z. B. Forge, Fabric). Klicke auf diesen Button, um das Spiel zu aktivieren.

![activate the game german version](https://i.imgur.com/gGqQpJG.png)



## Schritt 4 - Verbinden & hochladen von Mods/Modpacks per FTP

Verbinde dich mit dem FTP-Client deiner Wahl mit deinem Server. Stelle dabei sicher, dass dein Server gestoppt ist.


### Hochladen eines Mods

Sobald du verbunden bist, navigiere zu deinem Spielordner (z.B. minecraft-forge, minecraft-fabric). Öffne den Mods-Ordner und ziehe die heruntergeladenen Mod-Dateien einfach per Drag & Drop in den Ordner.
![image](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

Wenn der Upload abgeschlossen ist, kannst du deinen Server starten.


### Hochladen eines Modpacks

Sobald du verbunden bist, navigiere zu deinem Spielordner (z.B. minecraft-forge, minecraft-fabric). Lösche die Ordner world, mods, config und defaultconfig auf deinem Server. Lade nun alle Ordner aus dem entpackten Ordner, den du zuvor heruntergeladen hast, hoch, außer den Ordnern jre und libraries. Wählen dazu einfach alle Ordner aus und ziehen sie in dein Serververzeichnis.

![image](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Wenn der Upload abgeschlossen ist, kannst du deinen Server starten.
