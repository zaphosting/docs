---
id: vserver-linux-php
title: 'PHP auf einem Linux-Server einrichten – Power für dynamische Web-Apps'
description: "Lerne, wie du PHP auf deinem Linux-Server für Webentwicklung installierst und dein Setup für Apache oder Standalone optimierst → Jetzt mehr erfahren"
sidebar_label: PHP installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

PHP ist eine beliebte Programmiersprache für viele Zwecke, die vor allem in der Webentwicklung stark genutzt wird. In dieser Anleitung zeigen wir dir, wie du PHP auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

Sobald du eingeloggt bist, empfehlen wir, den Update-Befehl für dein Betriebssystem auszuführen, um deinen Server sicher und auf dem neuesten Stand zu halten.

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

Es gibt zwei Hauptwege, PHP auf deinem Linux-Server zu installieren: als Standalone-Version oder als zusätzliches Paket für Apache. Wenn du deinen eigenen Webserver nutzt, der nicht Apache ist, oder PHP für allgemeine Zwecke brauchst, empfehlen wir die Standalone-Methode. Für den Einsatz mit dem Apache-Webserver solltest du PHP als Apache-Paket installieren.

## Standalone

Nutze den folgenden Befehl, um die neueste PHP-Version zu installieren. Wenn du eine bestimmte Version installieren möchtest, kannst du das mit dem `-y` Flag und der Versionsnummer machen.
```
# Neueste Version
sudo apt install php

# Spezifische Version (z.B. php7.4)
sudo apt -y install php[version]
```

Überprüfe die erfolgreiche Installation mit dem Befehl `php -v`. Du hast PHP erfolgreich auf deinem Server installiert. Wir empfehlen dir, den Abschnitt **PHP Extensions** zu lesen, um sicherzugehen, dass du alle benötigten Erweiterungen installierst.

## Mit Apache

Falls Apache noch nicht installiert ist, kannst du das mit folgendem Befehl nachholen:
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln gesetzt sind, damit dein Webserver aus dem Internet erreichbar ist. In diesem Beispiel nutzen wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat. Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist.
```
sudo ufw allow in "Apache"
```

Dein Server sollte jetzt erreichbar sein. Teste das, indem du `http://[deine_serverip]` in einem Browser eingibst.

Mit Apache bereit, kannst du nun das PHP-Paket für Apache installieren:
```
sudo apt install php libapache2-mod-php
```

Überprüfe die Installation mit `php -v`. Du hast PHP erfolgreich zusammen mit deinem Apache-Webserver installiert. Schau dir unbedingt den Abschnitt **PHP Extensions** an, um alle nötigen Erweiterungen zu installieren.

## PHP Extensions

PHP bringt viele optionale Erweiterungen mit, die du installieren kannst, um die Funktionalität zu erweitern. Um eine Liste verfügbarer Extensions zu sehen, nutze folgenden Befehl, der die Suchergebnisse bequem mit `less` anzeigt:

```
apt search php- | less
```

Mit den Pfeiltasten kannst du scrollen, mit `Q` verlässt du die Ansicht. Um eine Extension zu installieren, nutze einfach den apt install Befehl. Du kannst mehrere Extensions gleichzeitig mit Leerzeichen getrennt angeben, um Zeit zu sparen.

```
sudo apt install [php_extension] [...]
```

## Abschluss

Du hast PHP erfolgreich auf deinem Linux-Server installiert. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />