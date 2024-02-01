---
id: palworld-server-modding
Title: Installation von Mods für Palworld Gameserver
description: Wie Sie Ihren Palworld Gameserver auf ZAP-Hosting modden - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren
---


## Einleitung
Sie haben bereits einen Palworld Gameserver bei uns, möchten aber den Spielspaß für Ihre Freunde erhöhen? Kein Problem, das Modden Ihres Palworld-Spielservers ist bereits möglich. In wenigen Schritten können Sie Modifikationen vornehmen, wie z.B. das Hinzufügen von Minecraft, Pokemon Capture Ball oder das Ändern der Spielgrenzen selbst.

## Informationen/Bestätigung

Zum Zeitpunkt dieser Anleitung ist es nicht möglich, Mods über Steam Workshop herunterzuladen, verfügbare Mod-Sites sind **[Nexus Mods](https://www.nexusmods.com/palworld/)** oder **[Curseforge](https://www.curseforge.com/palworld/)** - andere Mod-Sites sind verfügbar

**ZAP-Hosting ist nicht verantwortlich für Änderungen/Schäden an Ihren Serverdateien/Welt durch die Verwendung von Modifikationen. Es ist immer ratsam, Backups zu machen, bevor man dies tut,** **[Backups können mit dem Savegame Manager Guide gemacht werden, den wir zur Verfügung stellen](https://zap-hosting.com/guides/de/docs/palworld-server-savegames)**

:::info ZAP-Hosting unterstützt derzeit nur PAK-Mods (in Form von .PAK-Dateien), alle Mods, die eine ausführbare Datei verwenden, funktionieren aus Sicherheitsgründen nicht :::

Sie müssen sich vergewissern, ob es sich um eine serverseitige oder clientseitige Mod handelt, indem Sie den Mod-Autor kontaktieren oder die Mod-Ressourcen-Seite selbst überprüfen.
Sie müssen sich vergewissern, dass die Mod auf Ihrer Serverversion funktioniert, derzeit funktionieren die meisten 1.2.0-Mods mit der aktuellen Version von Palworld (1.4.0)

:::info Jeder Benutzer, der sich mit Ihrem Server verbindet, muss die clientseitigen Mods selbst herunterladen und installieren. :::

### Schritt Eins: Beschaffung der PAK-Dateien.

Auf den obigen Mod-Download-Seiten können Sie eine Vielzahl verschiedener Mods herunterladen, natürlich werden zu diesem Zeitpunkt nur PAK-Mods akzeptiert.

Laden Sie die Mods herunter und entpacken Sie die Dateien, falls es welche gibt.

![img](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)


Stellen Sie sicher, dass sich die PAK-Dateien nicht in einem gezippten Ordner befinden, da der Server sie sonst beim Start nicht erkennt.


### Zweiter Schritt: Hochladen per FTP

Sobald Sie die PAK-Dateien zum Hochladen bereit haben, müssen Sie die FTP-Seite Ihres Gameservers öffnen, die sich auf Ihrem Server-Dashboard befindet.

![img](https://screensaver01.zap-hosting.com/index.php/s/KtFPc8xRFAywHiK/preview)


Und wählen Sie Direktverbindung.

![img](https://screensaver01.zap-hosting.com/index.php/s/A6CzpG8ZFAZJcWd/preview)


*Ihr FTP-Programm wird sich öffnen und direkt mit dem Server verbinden. Falls nicht, geben Sie bitte die Daten manuell in Ihr FTP-Programm ein. Wir haben hier eine Anleitung, [wie man das macht, oder falls Sie noch kein FTP-Programm haben.](https://zap-hosting.com/guides/de/docs/gameserver-ftpaccess)

Wähle nun alle PAK-Dateien der Mods, die du heruntergeladen hast, und lade sie auf deinen Server in das Verzeichnis:

`/g(Nummer)/palworld-linux/Pal/Content/Paks/`

![img](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)


Und das war's mit der Serverseite! Nun ist es an der Zeit, an der Client-Seite zu arbeiten.

### Schritt 3: Mods über die Client-Seite installieren

Jetzt, wo alle Mods auf dem Server installiert sind, müssen wir sicherstellen, dass wir dasselbe für jeden Client tun, der dem Server beitreten möchte. Sie müssen diesen Vorgang wiederholen. Es gibt derzeit keine Möglichkeit für einen Client, Mods automatisch abzurufen und herunterzuladen, wenn er dem Server beitritt.

Öffnen Sie Steam und klicken Sie mit der rechten Maustaste auf Palworld, wählen Sie Verwalten und durchsuchen Sie lokale Dateien
![img](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)


Es erscheint ein Ordner mit deiner Palworld-Installation auf deinem PC.
![img](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)


Wechseln Sie nun in das Verzeichnis "Palworld" und wiederholen Sie den Vorgang des Verschiebens von Mods in den Ordner

![img](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)


### Schritt 4: Palworld starten & mit dem Server verbinden

Das war's, verbinden Sie sich mit Ihrem Palworld-Server und genießen Sie Ihren modifizierten Server.
Sie werden die Unterschiede bemerken, wenn die Mods so aussehen, dass sie funktionieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)


### Fehlersuche

Funktioniert etwas nicht, nachdem Sie diese Anleitung befolgt haben?

Stellen Sie sicher, dass Sie den Server neu starten, nachdem Sie Änderungen vorgenommen haben, oder wenn Sie keine Mods sehen.
Wenden Sie sich immer an den Mod-Autor, wenn Sie Probleme haben.

Tritt ein technisches Problem auf und Sie sind sich über die Ursache unsicher? Eine erste mögliche Lösungsstrategie besteht darin, die **Log-Dateien** zu überprüfen. Diese Dateien enthalten viele Informationen über den Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Insbesondere Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft können Schwierigkeiten durch einen gezielten Blick in die Log-Dateien aufgedeckt und behoben werden.

:::info
Die dort gefundenen Informationen helfen Ihnen nicht weiter oder Sie verstehen sie nicht? Machen Sie sich keine Sorgen!Auch in diesem Fall sind wir täglich im Support erreichbar. Erstellen Sie einfach ein **[Ticket](https://zap-hosting.com/de/customer/support/)** und erklären Sie uns Ihr Problem.Wir werden uns so schnell wie möglich darum kümmern und Ihnen bei der Lösung des Problems entsprechend helfen :):::
