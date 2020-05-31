---
id: vserver_linux_openvpn_client
title: OpenVPN Client
sidebar_label: OpenVPN Client
---

## 💾 OpenVPN Installieren

OpenVPN auf deinem Server installieren ist ganz einfach! Führe dafür einfach diesen Befehl aus:

```apt-get install openvpn```

Bestätige diese Installation einfach mit "y" und drücke dann Enter.

OpenVPN ist nun installiert!

## 💻 OpenVPN Starten

Nachdem du deine .ovpn Datei auf deinen Server kopiert hast, kannst du sie nun so starten:

```nohup openvpn --config MeineDatei.ovpn```

Gebe nun Optional das Passwort ein, und du bist verbunden!

## ❌ OpenVPN beenden

Führe dafür einfach diese Zeile aus:

```killall openvpn```
