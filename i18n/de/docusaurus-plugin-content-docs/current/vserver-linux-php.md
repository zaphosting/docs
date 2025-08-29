---
id: vserver-linux-php
title: 'vServer: Installation von PHP'
description: Informationen darüber, wie man PHP auf deinem Linux-Server von ZAP-Hosting.com installiert - ZAP-Hosting.com Dokumentation
sidebar_label: PHP installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
 
## Einführung

PHP ist eine beliebte Allzweck-Programmiersprache, die in der Webentwicklung häufig zum Einsatz kommt. In dieser Anleitung wird der Prozess der Installation von PHP auf deinem Server behandelt.

<InlineVoucher />

## Voraussetzungen

Beginne damit, dich über SSH mit deinem Server zu verbinden. Wenn du nicht weißt, wie das geht, schau dir bitte unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) an.

Nach dem Einloggen wird empfohlen, den Aktualisierungsbefehl für dein Betriebssystem auszuführen, um die Sicherheit deines Servers zu gewährleisten und ihn mit den neuesten Funktionen auf dem neuesten Stand zu halten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Es gibt zwei Möglichkeiten, PHP auf deinem Linux-Server zu installieren: entweder als eigenständiges Paket oder als zusätzliches Paket für Apache. Wenn du deinen eigenen Webserver verwendest, der nicht Apache ist, oder für allgemeine Aufgaben, empfehlen wir die eigenständige Methode. Andernfalls verwende für die Verwendung mit dem Apache-Webserver die Apache-Methode, um PHP als zusätzliches Paket zu installieren.

## Standalone

Verwende den folgenden Befehl, um die neueste Version von PHP zu installieren. Wenn du bestimmte Versionen installieren möchtest, kannst du die Option `-y` gefolgt von der Version verwenden.
```
# Latest
sudo apt install php

# Specific Version (e.g. php7.4)
sudo apt -y install php[version]
```

Überprüfe mit dem Befehl `php -v`, ob die Installation erfolgreich war. Du hast PHP erfolgreich auf deinem Server installiert. Wir empfehlen, den Abschnitt **PHP-Erweiterungen** zu lesen, um sicherzustellen, dass du alle erforderlichen Erweiterungen installierst.

## Verwendung von Apache

Zu Beginn solltest du Apache auf deinem Server installieren, falls du dies noch nicht getan hast. Dies kann mit dem folgenden Befehl erfolgen.
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die entsprechenden Firewall-Regeln erstellt werden, um sicherzustellen, dass der Webserver über das Internet zugänglich ist. In diesem Beispiel verwenden wir die **UFW-Firewall**, da Apache eine registrierte Anwendung dafür hat. Wenn du eine andere Firewall verwendest, stelle sicher, dass du Port 80 (HTTP) durch die Firewall zulässt.
```
sudo ufw allow in "Apache"
```

Jetzt sollte dein Server erreichbar sein. Du kannst dies testen, indem du `http://[your_serverip]` in einen Internetbrowser eingibst.

Da Apache nun bereit ist, kannst du das PHP-Paket für Apache mit dem folgenden Befehl installieren.
```
sudo apt install php libapache2-mod-php
```

Überprüfe mit dem Befehl `php -v`, ob die Installation erfolgreich war. Du hast PHP erfolgreich neben deinem Apache-Webserver installiert. Wir empfehlen, den Abschnitt **PHP-Erweiterungen** zu lesen, um sicherzustellen, dass du alle erforderlichen Erweiterungen installierst.

## PHP-Erweiterungen

PHP wird mit einer großen Auswahl an Erweiterungen geliefert, die optional sind und zur Erweiterung der Funktionalität installiert werden können. Um eine Liste der verfügbaren Erweiterungen anzuzeigen, führe den folgenden Befehl aus, der die Ergebnisse des Suchbefehls in der Konsole anzeigt, indem die Ergebnisse über eine Pipeline an den Befehl `less` weitergeleitet werden.
```
apt search php- | less
```

Verwende die Pfeiltasten zum Scrollen und drücke `Q`, sobald du bereit bist, den Vorgang zu beenden. Um nun ein Erweiterungspaket zu installieren, verwende einfach den Befehl apt install wie folgt. Du kannst mehrere Erweiterungen auf einmal eingeben, die durch ein Leerzeichen getrennt sind, um die Installation zu beschleunigen.
```
sudo apt install [php_extension] [...]
```

## Abschluss

Du hast PHP erfolgreich auf deinem Linux-Server installiert. Bei weiteren Fragen oder für Unterstützung wende dich bitte an unser Support-Team, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
