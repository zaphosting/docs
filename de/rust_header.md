---
ID: rust_header
title: Rust: So fügst du ein benutzerdefiniertes Header-Bild für deinen Server hinzu
Beschreibung: Passe die Browserseite deines Servers mit einem neuen Header-Bild an
sidebar_label: Header-Bild
---
# So fügst du deinem Rust Server ein eigenes Header-Bild hinzu

## Inhaltsverzeichnis
1. [Einleitung](#introduction)
2. [Bild vorbereiten](#preparing-your-image)
3. [Wie man das Bild hinzufügt](#where-to-host-the-image)
4. [Bild-URL zu deinem Server hinzufügen](#add-the-image-url-to-your-server)
5. [server.cfg Konfigurationsdatei](#server-cfg-config-file)
6. [Fehlerbehebung](#troubleshooting)

<a name="introduction"></a>
## 1. Einleitung
Ein "Header-Bild" ist das Bild, das in der Beschreibung deines Servers angezeigt wird, wenn ein potenzieller Spieler deinen Server in der Rust Server Liste anklickt. Mit dem Bild kannst du neue Spieler anlocken und deinen Server von anderen abheben, indem du ihn "brandmarkst".

Wenn du kein eigenes Bild angibst, wird das Spiel Standardbilder anzeigen, wenn dein Server in der Liste angezeigt wird.

<a name="preparing-your-image"></a>
## 2. Dein Bild vorbereiten
Zuerst brauchst du das Bild, das du für deinen Server verwenden möchtest. Das Bild muss entweder eine Größe von 512x256 oder 1024x512 haben. Außerdem muss es entweder im .png- oder im .jpg-Format sein.

Hinweis: Wenn du ein benutzerdefiniertes Bild verwendest, wird die Qualität leider beeinträchtigt.

Hier ist ein Beispiel für ein Bild im Format 1024 x 512 
(1024 x 512 image)

und im 512 x 256 Format
(512 x 256 image)

<a name="where-to-host-the-image"></a>
## 3. Wie füge ich das Bild hinzu?
Das Bild, das du verwenden möchtest, muss auf einem Cloud-Speicher hochgeladen werden, wo es über eine URL abgerufen werden kann. Du kannst z.b. Dropbox oder Imgur, die kostenlos eingerichtet werden können, verwenden.

<a name="add-the-image-url-to-your-server"></a>
## 4. Füge die Bild-URL zu deinem Server hinzu
Bei ZAP-Hosting kannst du das Header-Bild des Servers direkt im Kontrollpanel einstellen. Klicke auf den Abschnitt „Einstellungen“ des Bedienfelds, und Sie sehen ein Feld namens „Kopfzeilenbild“, in das Sie die URL eingeben können.

Wenn du dropbox verwenden möchtest, musst du im URL das "dl=0" zu "dl=1" ändern, damit dein Server darauf Zugriff bekommt.

Speichere die Änderungen und starte den Server neu. Dein Rust-Server zeigt jetzt dein Bild an, wenn Spieler deinen Server in der Liste sehen!

<a name="server-cfg-config-file"></a>
## 5. server.cfg Konfigurationsdatei
Die Einstellung wird in der Konfigurationsdatei server.cfg gespeichert, die sich normalerweise in server/(Servername)/cfg befindet. Bei ZAP-Hosting ist dieser Pfad auf server/default/cfg festgelegt, sofern er nicht umbenannt wurde. Es ist normal, dass diese Konfigurationsdatei nach einer neuen Serverinstallation leer ist.

Wenn diese Einstellung automatisch vom ZAP-Hosting Steuerungspanel hinzugefügt wird, erscheint sie als Zeile:
`server.headerimage "URL zum Bild"`

<a name="troubleshooting"></a>
## 6. Fehlerbehebung
Wenn du nach dem Einstellen des Bildes einen weißen Kasten mit einem großen, verschwommenen roten Fragezeichen siehst, bedeutet das, dass etwas mit der Einstellung, der URL oder dem Bild nicht stimmt. Das rote Fragezeichen ist ein Standardbild, das das Spiel stattdessen verwenden wird.

Einige Gründe, warum die Bild-URL möglicherweise nicht verwendet werden kann, sind:

- Das Bild hat die falsche Größe
- Die Dropbox-Bild-URL endet auf dl=0 und muss auf dl=1 geändert werden
- Der von dir genutzte Cloud-Backup Dienst erfordert eine Anmeldung, die ein Rust-Server nicht durchführen kann.

Mit dieser Anleitung kannst du jetzt das Header-Bild deines Rust-Servers mit ZAP-Hosting anpassen. So kannst du deinem Server in der Liste ein einzigartiges Aussehen verleihen, neue Spieler anlocken und deinen Server von den anderen abheben.
