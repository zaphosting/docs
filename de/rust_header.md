---
ID: rust_header
title: Rust: So fügen Sie Ihrem Server ein benutzerdefiniertes Header-Bild hinzu
Beschreibung: Passen Sie die Browserseite Ihres Servers mit einem neuen Header-Bild an
sidebar_label: Header-Bild
---
# So fügen Sie Ihrem Rust-Server ein benutzerdefiniertes Header-Bild hinzu

## Inhaltsverzeichnis
1. [Einleitung](#introduction)
2. [Bild vorbereiten](#preparing-your-image)
3. [Wo das Bild gehostet werden soll](#where-to-host-the-image)
4. [Bild-URL zu Ihrem Server hinzufügen](#add-the-image-url-to-your-server)
5. [server.cfg Konfigurationsdatei](#server-cfg-config-file)
6. [Fehlerbehebung](#troubleshooting)

<a name="introduction"></a>
## 1. Einleitung
Ein „Header-Bild“ ist die Grafik, die in Ihrer Serverbeschreibung angezeigt wird, wenn ein potenzieller Spieler in den Rust-Spiellisten auf Ihren Server klickt. Sie können das Bild verwenden, um neue Spieler anzuziehen und Ihren Server zu „branden“, um ihn von anderen abzuheben.

Wenn Sie kein eigenes Bild angeben, liefert das Spiel generische Standardbilder, wenn Ihr Server in den Listen angezeigt wird.

<a name="preparing-your-image"></a>
## 2. Vorbereiten Ihres Bildes
Zuerst benötigen Sie das Bild, das Sie verwenden möchten, um Ihren Server darzustellen. Das Bild muss entweder 512 x 256 oder 1024 x 512 groß sein. Es muss außerdem entweder im .png- oder .jpg-Format vorliegen.

Hinweis: Die Verwendung eines benutzerdefinierten Bildes führt leider zu einer Qualitätsminderung.

Hier ist ein Beispiel für ein Bild im Format 1024 x 512 und sein Gegenstück im Format 512 x 256:

Das Rust-Header-Bild bei 1024x512 gehostet mit ZAP-Hosting
Das Rust-Server-Header-Bild 512x256 mit ZAP-Hosting

<a name="where-to-host-the-image"></a>
## 3. Wo das Image gehostet werden soll
Das Bild, das Sie verwenden möchten, muss auf einer Filesharing-Site gehostet werden, wo es über eine URL aufgerufen werden kann. Einige gute und einfach zu bedienende Seiten sind Dropbox oder Imgur, die kostenlos eingerichtet werden können.

Websites, die keine URL bereitstellen oder Anmeldungen erfordern, funktionieren wahrscheinlich nicht richtig.

<a name="add-the-image-url-to-your-server"></a>
## 4. Fügen Sie die Bild-URL zu Ihrem Server hinzu
Beim ZAP-Hosting können Sie das Server-Header-Bild direkt im Control Panel einstellen. Klicken Sie auf den Abschnitt „Spieleinstellungen“ des Bedienfelds, und auf der Registerkarte „Grundeinstellungen“ befindet sich ein Feld zur Eingabe der URL.

Wenn die von Dropbox bereitgestellte URL auf dl=0 endet, ändern Sie sie in dl=1. Dadurch kann das Bild automatisch heruntergeladen werden.

Speichern Sie die Änderungen und starten Sie den Server neu. Ihr Rust-Server zeigt jetzt Ihr Kunstwerk an, wenn Spieler Ihren Server in den Listen ansehen!

<a name="server-cfg-config-file"></a>
## 5. server.cfg Konfigurationsdatei
Die Einstellung wird in der Konfigurationsdatei server.cfg gespeichert, die sich normalerweise in server/(Servername)/cfg befindet. Bei ZAP-Hosting wird dieser Pfad auf server/default/cfg gesetzt, sofern er nicht umbenannt wird. Es ist normal, dass diese Konfigurationsdatei nach einer Neuinstallation des Servers leer ist.

Wenn diese Einstellung automatisch vom ZAP-Hosting-Kontrollfeld hinzugefügt wird, erscheint sie als folgende Zeile:
`server.headerimage "(URL zum Bild)"`

<a name="troubleshooting"></a>
## 6. Fehlerbehebung
Wenn Sie nach dem Einstellen des Bildes ein weißes Kästchen mit einem großen verschwommenen roten Fragezeichen sehen, bedeutet dies, dass etwas mit der Einstellung, der URL oder dem Bild nicht stimmt. Das rote Fragezeichen ist ein Standardbild, das das Spiel stattdessen verwendet.

Einige Gründe, warum die Bild-URL möglicherweise nicht verwendet werden kann, sind:

- Das Bild hat die falsche Größe
- Die Dropbox-Bild-URL endet auf dl=0 und muss auf dl=1 geändert werden, um einen automatischen Download zu ermöglichen
- Die verwendete Filesharing-Site stellt keine korrekte URL bereit oder erfordert eine Art Anmeldung, die das Spiel nicht automatisch ausführen kann

Mit dieser Anleitung können Sie jetzt Ihr Rust-Server-Header-Image mit ZAP-Hosting anpassen. Dies wird Ihnen helfen, ein einzigartiges Erscheinungsbild für Ihren Server in den Listen im Spiel zu schaffen, neue Spieler anzuziehen und Ihren Server von den anderen abzuheben.
