---
id: dedicated-linux-php
title: 'Dedicated Server: Installation von PHP'
description: "Entdecke, wie du PHP auf deinem Linux-Server für Webentwicklung installierst und optimiere dein Setup mit wichtigen Erweiterungen → Jetzt mehr erfahren"
sidebar_label: PHP installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

PHP ist eine beliebte Programmiersprache für allgemeine Zwecke und wird vor allem in der Webentwicklung häufig eingesetzt. In dieser Anleitung zeigen wir dir, wie du PHP auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir gerne unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

Nachdem du eingeloggt bist, empfehlen wir, den Update-Befehl für dein Betriebssystem auszuführen, um deinen Server sicher und auf dem neuesten Stand zu halten.

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

Es gibt zwei Hauptwege, PHP auf deinem Linux-Server zu installieren: entweder als Standalone-Version oder als zusätzliches Paket für Apache. Wenn du deinen eigenen Webserver nutzt, der nicht Apache ist, oder PHP für allgemeine Zwecke brauchst, empfehlen wir die Standalone-Methode. Für die Nutzung mit dem Apache-Webserver solltest du PHP als Apache-Paket installieren.

## Standalone

Nutze den folgenden Befehl, um die neueste PHP-Version zu installieren. Wenn du eine bestimmte Version installieren möchtest, kannst du das mit dem `-y` Flag und der Versionsnummer machen.
```
# Neueste Version
sudo apt install php

# Spezifische Version (z.B. php7.4)
sudo apt -y install php[version]
```

Überprüfe die erfolgreiche Installation mit dem Befehl `php -v`. Du hast PHP erfolgreich auf deinem Server installiert. Wir empfehlen dir, den Abschnitt **PHP-Erweiterungen** zu lesen, um sicherzugehen, dass du alle benötigten Erweiterungen installierst.

## Nutzung mit Apache

Falls noch nicht geschehen, solltest du Apache auf deinem Server installieren. Das geht mit folgendem Befehl:
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

Überprüfe die erfolgreiche Installation mit `php -v`. Du hast PHP erfolgreich zusammen mit deinem Apache-Webserver installiert. Schau dir unbedingt den Abschnitt **PHP-Erweiterungen** an, um alle nötigen Erweiterungen zu installieren.

## PHP-Erweiterungen

PHP bietet eine große Auswahl an optionalen Erweiterungen, mit denen du die Funktionalität erweitern kannst. Um eine Liste verfügbarer Erweiterungen zu sehen, nutze folgenden Befehl, der die Suchergebnisse über `less` ausgibt:

```
apt search php- | less
```

Mit den Pfeiltasten kannst du scrollen, mit `Q` verlässt du die Ansicht. Um eine Erweiterung zu installieren, nutze einfach den apt install Befehl. Du kannst auch mehrere Erweiterungen gleichzeitig installieren, indem du sie mit Leerzeichen trennst.

```
sudo apt install [php_erweiterung] [...]
```

## Fazit

Du hast PHP erfolgreich auf deinem Linux-Server installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />