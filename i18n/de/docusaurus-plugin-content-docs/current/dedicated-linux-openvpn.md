---
id: dedicated-linux-openvpn
title: "Dedicated Server: Installation von OpenVPN"
description: Informationen, wie du OpenVPN auf deinem Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: OpenVPN installieren
---



## Einführung

OpenVPN ist eine leistungsstarke und vielseitige VPN-Software, die eine sichere Verbindung über das Internet ermöglicht. Es handelt sich um eine Open-Source-Lösung, die eine robuste und konfigurierbare VPN-Technologie bietet, um eine verschlüsselte Verbindung zwischen Ihrem Gerät und einem VPN-Server herzustellen. Durch die Verwendung von OpenVPN können Nutzer ihre Internetverbindung sichern, ihre Online-Privatsphäre schützen und auf geografisch eingeschränkte Inhalte zugreifen, unabhängig davon, wo sie sich auf der Welt befinden. In dieser Anleitung werden wir uns mit der Installation und Konfiguration des **OpenVPN**-Dienstes auf einem Linux-Server beschäftigen.



## Vorbereitung

Auf vServern muss zuerst der Netzwerktreiber **TUN** aktiviert werden. 
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
Um die Datei zu verlassen, drücke `STRG+X`.

Nachdem führe folgenden Befehl aus: 
```
chmod +x /usr/sbin/tunscript.sh
```

Solltest du dies getan haben, führe ```crontab -e``` aus und wähle den **Nano-Editor** [1] aus. 
Füge am Ende der Datei diese Zeile ein: 
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Speichere die Datei dann mit `STRG+X`, dann `Y` und drücke dann `Enter`. 
Um die Datei zu verlassen, drücke `STRG+X`.

Nach einem Neustart solltest du dann fortfahren können.

## Installation
Um OpenVPN zu installieren, führe folgenden Befehl in der Konsole aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Dann solltest du einen Dialog erhalten, ob du UDP oder TCP verwenden willst.
Wir empfehlen UDP, daher solltest du `1` eingeben und `Enter` drücken.

Danach wirst du nach einem Port für OpenVPN gefragt.
Wähle hier einen Port. Am einfachsten ist es, den Standard Port zu verwenden. 
Dazu drücke einfach `Enter`.

Als nächstes musst du den DNS-Server konfigurieren. Wir empfehlen, entweder Google Public DNS oder Cloudflare DNS zu verwenden:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Nach diesem Schritt wirst du aufgefordert, einen Client-Namen einzugeben. 
Wähle hierfür beispielsweise einen Namen, wie dein Gerät heißt, auf welchem diese Verbindung zu verwenden. 
Drücke danach zweimal `Enter`. 



## Konfiguration

### Weitere Clients hinzufügen

Solltest du mehrere Verbindungen herstellen wollen, ist es sinnvoll, mehrere Konten anzulegen. Um ein weiteres Konto anzulegen, führe folgenden Befehl aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Danach drücke `1` und dann `Enter`. 
Du musst nun wieder einen Client-Namen eingeben. 
Verwende hier beispielsweise den Namen des Geräts, mit dem du dich verbinden möchtest.
Drücke `Enter`, um den Client anzulegen. 


### Clients entfernen
Um einen Client zu entfernen, führe zuerst folgenden Befehl aus:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Danach drücke `2` und dann `Enter`.
Gebe nun die Zahl des Clients in der Liste an, welchen du entfernen möchtest. Drücke danach `Enter`.
Du wirst jetzt aufgefordert, das Löschen zu bestätigen. Wenn du dir sicher bist, drücke `Y` und dann `Enter`.
Jetzt sollte dieser Client entfernt sein. 

## Deinstallation 
Wenn du OpenVPN nicht mehr benötigst, aber deinen Server nicht neu installieren willst, führe folgenden Befehl aus: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Drücke dann `3` und danach `Enter`.

Du wirst jetzt aufgefordert, die Deinstallation zu bestätigen. Wenn du dir wirklich sicher bist, drücke `Y` und dann `Enter`.
Nun wird OpenVPN deinstalliert.

## Mit VPN verbinden
Wenn du dich mit deiner VPN verbinden willst, lade dir den **[OpenVPN Client](https://openvpn.net/community-downloads/)** herunter. Lade sie einfach auf das Gerät herunter, von dem aus du dich verbinden möchtest.

Verbinde dich jetzt mit SFTP auf deinen Server und lade dir die erstellte .ovpn Datei herunter. 
Speichere dir diese dort, wo du sie schnell wieder findest.

Sobald du den Client installiert hast, starte das Programm. Jetzt erscheint ein Fenster, welches dir mitteilt, dass keine Konfigurationsdateien vorhanden sind. Klicke dieses Fenster einfach weg.
Mache jetzt einen Rechtsklick auf das Icon, dass einen Monitor mit einem Schloss davor zeigt.
Klicke dort dann auf `Datei importieren` und wähle die Datei, die du vorher heruntergeladen hast und klicke "Öffnen".
Nun erhältst du die Meldung "Konfigurationsdatei erfolgreich importiert."

Um dich zu verbinden, mache wieder einen Rechtsklick auf den Monitor mit dem Schloss davor und wähle "Verbinden".

:::info
Solltest du mehrere Dateien importiert haben, musst du noch den Client auswählen, welchen du verwenden möchtest und klicke dann auf Verbinden.
:::

Jetzt solltest du verbunden werden.

Wenn du die Verbindung wieder trennen möchtest, wähle nicht "Verbinden" aus, sondern "Trennen". 