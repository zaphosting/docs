---
id: vserver_linux_openvpn
title: OpenVPN
sidebar_label: OpenVPN
---

Erfahre, wie Du einen OpenVPN Server auf deinem Linux Server installierst.

# TUN-Device auf vServern aktivieren
Auf vServern muss zuerst der Netzwerk Treiber **TUN** aktiviert werden. 
Auf Root-Servern ist dieser Schritt nicht erforderlich.
Dafür musst du im ersten Schritt eine neue Datei mit dem Namen **tunscript.sh** im **/usr/sbin** Ordner erstellen. 
```
nano /usr/sbin/tunscript.sh 
```

Füge danach folgende Zeilen ein:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Speichere die Datei dann mit `STRG+O`, dann `Y` und drücke dann `Enter`. 
Um die Datei zu verlassen drücke `STRG+X`.

Nachdem führe folgenden Befehl aus: 
```
chmod +x /usr/sbin/tunscript.sh
```

Solltest du dies getan haben, führe ```crontab -e``` aus und wähle den **Nano-Editor** [1] aus. 
Füge am Ende der Datei diese Zeile ein: 
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Speichere die Datei dann mit `STRG+X`, dann `Y` und drücke dann `Enter`. 
Um die Datei zu verlassen drücke `STRG+X`.

Nach einem Neustart solltest du dann fortfahren können.

# Installation von OpenVPN
Um OpenVPN zu installieren, führe folgenden Befehl in der Konsole aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Dann solltest du einen Dialog erhalten, ob du UDP oder TCP verwenden willst.
Wir empfehlen UDP, daher solltest du `1` eingeben und `Enter` drücken.

Danach wirst du nach einem Port für OpenVPN gefragt.
Wähle hier einen Port. Am einfachsten ist es, den Standartport zu verwenden. 
Dazu drücke einfach `Enter`.

Nachdem wirst du nach einem DNS-Server gefragt. Wir empfehlen hierfür **1.1.1.1**.
Dazu drücke `2` und danach `Enter`.

Nach diesem Schritt wirst du aufgefordert, einen Client-Namen einzugeben. 
Wähle hierfür beispielsweise einen Namen wie dein Gerät heißt, auf welchem diese Verbindung zu verwenden. 
Drücke nachdem 2 mal `Enter`. 

# Weitere Clients hinzufügen.
Solltest du mehrere Verbindungen herstellen wollen, ist es Sinnvoll mehrere Konten anzulegen. 
Um ein weiteres Konto anzulegen führe folgenden Befehl aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Danach drücke `1` und dann `Enter`. 
Du musst nun wieder einen Client-Namen eingeben. 
Verwende hier beispielsweise den Namen des Geräts, mit dem du dich Verbinden möchtest.
Drücke `Enter` um den Client anzulegen. 

# Mit der VPN verbinden. 
Wenn du dich mit deiner VPN verbinden willst, lade dir den OpenVPN Client herunter.
Diese Downloads findest du hier: https://openvpn.net/community-downloads/

Verbinde dich nun mit SFTP auf deinen Server und lade dir die erstellte .ovpn Datei herunter. 
Speichere dir diese dort, wo du sie schnell wieder findest.

Sobald du den Client installiert hast, starte das Programm. Nun erscheint ein Fenster, welches dir mitteilt, dass keine Konfigurationsdateien vorhanden sind. Klicke dieses Fenster einfach weg.
Mache nun einen Rechtsklick auf das Icon, dass einen Monitor mit einem Schloss davor zeigt.
Klicke dort dann auf `Datei importieren` und wähle die Datei, die du vorher heruntergeladen hast und klicke "Öffnen".
Nun erhälst du die Meldung "Konfigurationsdatei erfolgreich Importiert."

Um dich zu verbinden mache wieder einen Rechtsklick auf den Monitor mit dem Schloss davor und wähle "Verbinden".
> Solltest du mehrere Dateien Importiert haben, musst du noch den Client auswählen, welchen du verwenden möchtest und klicke dann auf Verbinden.
Jetzt solltest du verbunden werden.

Wenn du die Verbindung wieder Trennen möchtest, wähle nicht "Verbinden" aus sondern "Trennen". 

# Clients entfernen
Um einen Client zu entfernen, führe zuerst folgenden Befehl aus:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Danach drücke `1` und dann `Enter`.
Gebe nun die Zahl des Clients in der Liste an, welchen du entfernen möchtest. Drücke danach `Enter`.
Du wirst nun aufgefordert, das löschen zu Bestätigen. Wenn du dir sicher bist, drücke `y` und dann `Enter`.
Nun sollte dieser Client entfernt sein. 

# OpenVPN deinstallieren. 
Wenn du OpenVPN nicht mehr benötigst, aber deinen Server nicht neuinstallieren willst, führe folgenden Befehl aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Drücke dann `4` und danach `Enter`.

Du wirst nun aufgefordert, die Deinstallation zu bestätigen. Wenn du dir wirklich Sicher bist, drücke `y` und dann `Enter`.
Nun wird OpenVPN deinstalliert.
