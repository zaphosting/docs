---
id: vserver-linux-firewall
title: "VPS: Firewall unter Linux verwalten"
description: Informationen zur Verwaltung von UFW- oder IPTable-Regeln, inklusive Portweiterleitungen, auf deinem Linux-VPS von ZAP-Hosting – ZAP-Hosting.com Dokumentation
sidebar_label: Portweiterleitung (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Für viele Dienste und Programme musst du externe Verbindungen erlauben. Das ist durch das Einrichten einer Firewall möglich. In dieser Anleitung lernst du, wie du eine Firewall einrichtest und diese Verbindungen erlaubst.

<InlineVoucher />

## Vorbereitung

Um die Firewall zu installieren, musst du dich per SSH mit deinem Server verbinden. Falls du nicht weißt wie, schau dir unsere [Erstzugriff via SSH](vserver-linux-ssh.md) Anleitung an.
Nachdem du verbunden bist, solltest du den Server mit `apt update` und `apt upgrade` aktualisieren.

## Nutzung von UFW (Einfach)

Es gibt mehrere Firewall-Programme für Linux, aber in dieser Anleitung konzentrieren wir uns auf die zwei beliebtesten: UFW und IPTables. Wir starten mit UFW, da es einfacher einzurichten und zu verwalten ist.

### UFW installieren

Du kannst UFW ganz einfach mit APT installieren: `sudo apt install ufw`. Damit du die SSH-Verbindung nicht verlierst, solltest du UFW noch nicht aktivieren, zuerst musst du es einrichten.

### UFW einrichten

Wir empfehlen, die folgenden Standardrichtlinien zu setzen:

`sudo ufw default deny incoming`  und  `sudo ufw default allow outgoing`

Jetzt solltest du die SSH-Verbindung und alle anderen Ports, die du öffnen möchtest, erlauben:

`sudo ufw allow 22` für SSH

`sudo ufw allow 80` Beispiel für HTTP

`sudo ufw allow 25565` Beispiel für einen Minecraft-Server

Um UFW zu aktivieren, führe `sudo ufw enable` aus.

Du kannst jederzeit weitere Ports öffnen mit `sudo ufw allow PORT`

### Portweiterleitungen hinzufügen

Um einen Port weiterzuleiten, kannst du einfach diesen Befehl verwenden:

Für TCP-Ports:

`sudo ufw allow PORT/tcp` wobei PORT durch den gewünschten Port ersetzt wird.

Beispiel: `sudo ufw allow 25565/tcp` für einen Minecraft-Server

Für UDP-Ports:

`sudo ufw allow PORT/udp` wobei PORT durch den gewünschten Port ersetzt wird.

Beispiel: `sudo ufw allow 9987/udp` für einen TeamSpeak-3-Server

### Portweiterleitungen auflisten und entfernen

Um alle Port-Regeln anzuzeigen, kannst du `sudo ufw status numbered` ausführen. Wenn du eine Regel entfernen willst, nutze `sudo ufw delete NUMBER` – wobei NUMBER der Regelnummer in der Liste entspricht.

## IPTables installieren (Fortgeschritten)

Die meisten Systeme beinhalten IPTables bereits standardmäßig, aber zur Sicherheit kannst du `sudo apt install iptables` ausführen.

### IPTables einrichten

Zuerst setzt du die Standardrichtlinien:

`sudo iptables -P INPUT DROP` um alle eingehenden Verbindungen zu blockieren

`sudo iptables -P FORWARD DROP` um alle Weiterleitungen zu blockieren

`sudo iptables -P OUTPUT ACCEPT` um alle ausgehenden Verbindungen zu erlauben

`sudo iptables -A INPUT -i lo -j ACCEPT` um die Loopback-Schnittstelle zu erlauben

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` um bestehende Verbindungen zu erlauben

Jetzt solltest du die SSH-Verbindung und alle weiteren benötigten Ports erlauben:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` für SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` Beispiel für HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` Beispiel für einen Minecraft-Server

Dann musst du die Regeln persistent machen, damit sie auch nach einem Neustart aktiv bleiben. Installiere das IPTables-Persistent-Paket mit `sudo apt install iptables-persistent`.

Anschließend speichere die Regeln mit `sudo netfilter-persistent save`. Und aktiviere den Autostart mit `sudo systemctl enable netfilter-persistent`.

### Portweiterleitungen hinzufügen

Um einen Port weiterzuleiten, kannst du einfach diesen Befehl verwenden:

Für TCP-Ports:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` wobei PORT durch den gewünschten Port ersetzt wird.

Beispiel: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` für einen Minecraft-Server

Für UDP-Ports:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` wobei PORT durch den gewünschten Port ersetzt wird.

Beispiel: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` für einen TeamSpeak-3-Server

### Portweiterleitungen auflisten und entfernen

Du kannst alle Regeln mit folgendem Befehl anzeigen: `sudo iptables -L --line-numbers`. Wenn du eine Regel entfernen willst, nutze `sudo iptables -D INPUT NUMBER` wobei `NUMBER` der Nummer aus der Liste entspricht, die du entfernen willst.

## Abschluss

Du hast erfolgreich eine Firewall auf deinem Linux-Server installiert und deine eigenen Port-Regeln erstellt. Du kannst diese Anleitung auch nutzen, um weitere Ports weiterzuleiten. Für weitere Fragen oder Unterstützung steht dir unser Support-Team jederzeit zur Verfügung! 🙂