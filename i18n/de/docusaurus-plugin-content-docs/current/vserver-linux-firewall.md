---
id: vserver-linux-firewall
title: "vServer: Firewall-Verwaltung unter Linux"
description: "Lerne, wie du eine Firewall konfigurierst, um deinen Server abzusichern und notwendige externe Verbindungen zu erlauben → Jetzt mehr erfahren"
sidebar_label: Portweiterleitung (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Für viele Services und Programme musst du externe Verbindungen erlauben. Das geht am besten, indem du eine Firewall einrichtest.  
In dieser Anleitung lernst du, wie du eine Firewall konfigurierst und diese Verbindungen zulässt.

<InlineVoucher />

## Vorbereitung

Um die Firewall zu installieren, musst du dich per SSH mit deinem Server verbinden. Falls du nicht weißt, wie das geht, schau dir unsere [Erstanbindung](vserver-linux-ssh.md) Anleitung an.  
Nach der Verbindung solltest du den Server mit `apt update` und `apt upgrade` auf den neuesten Stand bringen.

## UFW verwenden (Einfach)

Es gibt mehrere Firewall-Programme für Linux, in dieser Anleitung konzentrieren wir uns auf die zwei beliebtesten: UFW und IPTables.  
Wir starten mit UFW, da es einfacher einzurichten und zu verwalten ist.

### UFW installieren

UFW kannst du ganz easy über APT installieren mit `sudo apt install ufw`.  
Damit du nicht die SSH-Verbindung verlierst, solltest du die Firewall noch nicht aktivieren, sondern sie erst richtig konfigurieren.

### UFW einrichten

Wir empfehlen folgende Standard-Policies:

`sudo ufw default deny incoming`  
und  
`sudo ufw default allow outgoing`

Jetzt solltest du die SSH-Verbindung und alle anderen Ports, die du öffnen willst, erlauben:

`sudo ufw allow 22` für SSH

`sudo ufw allow 80` als Beispiel für HTTP

`sudo ufw allow 25565` als Beispiel für einen Minecraft-Gameserver

Um UFW zu aktivieren, führst du `sudo ufw enable` aus. Weitere Ports kannst du jederzeit mit `sudo ufw allow PORT` freischalten.

### Portweiterleitungen hinzufügen

Um einen Port weiterzuleiten, kannst du einfach diesen Befehl nutzen:

Für TCP-Ports:

`sudo ufw allow PORT/tcp` – ersetze PORT durch den gewünschten Port.

Beispiel: `sudo ufw allow 25565/tcp` für einen Minecraft-Gameserver

Für UDP-Ports:

`sudo ufw allow PORT/udp` – ersetze PORT durch den gewünschten Port.

Beispiel: `sudo ufw allow 9987/udp` für einen TeamSpeak 3 Voiceserver

### Portweiterleitungen anzeigen und entfernen

Um alle Portregeln anzuzeigen, nutze `sudo ufw status numbered`.  
Wenn du eine Regel löschen willst, kannst du `sudo ufw delete NUMMER` ausführen, wobei NUMMER die Nummer der Regel in der Liste ist.

## IPTables installieren (Fortgeschritten)

Die meisten Systeme haben IPTables standardmäßig installiert, aber zur Sicherheit kannst du `sudo apt install iptables` ausführen.

### IPTables einrichten

Zuerst setzt du die Standard-Policies und Einstellungen:

`sudo iptables -P INPUT DROP` – alle eingehenden Verbindungen blockieren

`sudo iptables -P FORWARD DROP` – alle Weiterleitungen blockieren

`sudo iptables -P OUTPUT ACCEPT` – alle ausgehenden Verbindungen erlauben

`sudo iptables -A INPUT -i lo -j ACCEPT` – Loopback-Verkehr erlauben

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` – alle bestehenden Verbindungen erlauben

Jetzt solltest du SSH und alle anderen Ports, die du öffnen willst, erlauben:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` für SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` als Beispiel für HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` als Beispiel für einen Minecraft-Gameserver

Damit die Regeln nach einem Neustart erhalten bleiben, installiere das Paket `iptables-persistent` mit `sudo apt install iptables-persistent`.  
Speichere die Regeln mit `sudo netfilter-persistent save` und aktiviere den Autostart mit `sudo systemctl enable netfilter-persistent`.

### Portweiterleitungen hinzufügen

Um einen Port weiterzuleiten, kannst du diesen Befehl nutzen:

Für TCP-Ports:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` – ersetze PORT durch den gewünschten Port.

Beispiel: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` für einen Minecraft-Gameserver

Für UDP-Ports:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` – ersetze PORT durch den gewünschten Port.

Beispiel: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` für einen TeamSpeak 3 Voiceserver

### Portweiterleitungen anzeigen und entfernen

Alle Regeln kannst du mit `sudo iptables -L --line-numbers` anzeigen.  
Um eine Regel zu löschen, nutze `sudo iptables -D INPUT NUMMER`, wobei NUMMER die Nummer der Regel aus der Liste ist.

## Fazit

Du hast erfolgreich eine Firewall auf deinem Linux-Server installiert und deine eigenen Portregeln erstellt. Diese Anleitung kannst du auch nutzen, um weitere Ports weiterzuleiten.  
Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />