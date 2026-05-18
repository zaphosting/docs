---
id: dedicated-linux-ssh-server
title: "SSH auf einem Linux Server einrichten – Sicherer Remote-Zugriff"
description: "Entdecke, wie du SSH-Server auf Linux sicher installierst und verwaltest, um sicheren Remote-Zugriff und besseren Schutz deines Servers zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: SSH installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Secure Shell (SSH) ist ein sicheres Protokoll, das verschlüsselten und sicheren Zugriff auf entfernte Systeme ermöglicht. Es sorgt für Vertraulichkeit und Integrität der über Netzwerke übertragenen Daten.

In dieser Anleitung erfährst du, wie du den SSH-Server für verschiedene Linux-Distributionen installierst oder neu installierst, die wir aktuell auf unseren VPS/Dedicated Servern anbieten. Die meisten Linux-Distros, die wir über unsere VPS/Dedicated Server anbieten, sind standardmäßig mit einem SSH-Server ausgestattet, sodass du diesen bequem über das Webinterface des Produkts verwalten kannst. Wie das geht, zeigen wir dir in unserer Anleitung: [Erstzugang (SSH)](vserver-linux-ssh.md)

Wenn du deine Serversicherheit weiter verbessern möchtest, empfehlen wir dir unsere [Sicherheitstipps](vserver-linux-security-tips.md) – dort findest du viele Tools und Services, die deinen Server noch sicherer machen.



## Installation

Um mit der Installation zu starten, greif über VNC auf deinen Server zu. Folge dazu einfach den Schritten in der [VNC-Konsole](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher mit: `yum remove openssh`.
:::

Bevor du den SSH-Server installierst, solltest du dein System auf den neuesten Stand bringen. Führe dazu folgenden Befehl aus:
```
yum update
```

Installiere jetzt den SSH-Server mit folgendem Befehl:
```
yum install openssh-server
```

Nach der Installation startest du den SSH-Server mit:
```
systemctl start sshd
```

Damit der Dienst beim Systemstart automatisch startet, aktiviere ihn mit:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, musst du die OpenSSH-Konfigurationsdatei bearbeiten. Wir nutzen hier den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, kannst du es mit `yum install nano` nachinstallieren.
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten zur Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte den SSH-Server neu, damit die Änderung wirksam wird:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher mit: `apt remove openssh`.
:::

Bringe dein System vor der Installation auf den neuesten Stand:
```
apt update
```

Installiere den SSH-Server mit:
```
apt install openssh-server
```

Starte den SSH-Server:
```
systemctl start sshd
```

Aktiviere den automatischen Start beim Booten:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, bearbeite die OpenSSH-Konfigurationsdatei mit "nano".

:::info
Falls "nano" noch nicht installiert ist, installiere es mit: `apt install nano`
:::

Öffne die Datei:
```
nano /etc/ssh/sshd_config 
```

Suche die Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte den SSH-Server neu, damit die Änderung aktiv wird:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher mit: `apt remove openssh`.
:::

Bringe dein System vor der Installation auf den neuesten Stand:
```
apt update
```

Installiere den SSH-Server mit:
```
apt install openssh-server
```

Starte den SSH-Server:
```
systemctl start sshd
```

Aktiviere den automatischen Start beim Booten:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, bearbeite die OpenSSH-Konfigurationsdatei mit "nano".

:::info
Falls "nano" noch nicht installiert ist, installiere es mit: `apt install nano`
:::

Öffne die Datei:
```
nano /etc/ssh/sshd_config 
```

Suche die Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte den SSH-Server neu, damit die Änderung aktiv wird:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher mit: `dnf remove openssh`.
:::

Bringe dein System vor der Installation auf den neuesten Stand:
```
dnf update
```

Installiere den SSH-Server mit:
```
dnf install openssh-server
```

Starte den SSH-Server:
```
systemctl start sshd
```

Aktiviere den automatischen Start beim Booten:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, bearbeite die OpenSSH-Konfigurationsdatei mit "nano".

:::info
Falls "nano" noch nicht installiert ist, installiere es mit: `dnf install nano`
:::

Öffne die Datei:
```
sudo nano /etc/ssh/sshd_config 
```

Suche die Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte den SSH-Server neu, damit die Änderung aktiv wird:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Du hast jetzt erfolgreich den SSH-Dienst auf deinem Server installiert und kannst dich nun per SSH mit deinem Server verbinden.