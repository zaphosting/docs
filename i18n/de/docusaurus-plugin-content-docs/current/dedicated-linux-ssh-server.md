---
id: dedicated-linux-ssh-server
title: "Dedicated Server: Installation von SSH"
description: "Entdecke, wie du SSH-Server auf Linux VPS sicher installierst und verwaltest, um sicheren Remote-Zugriff und verbesserten Schutz deines Servers zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: SSH installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Secure Shell (SSH) ist ein sicheres Protokoll, das verschlüsselten und sicheren Zugriff auf entfernte Systeme ermöglicht. Es gewährleistet die Vertraulichkeit und Integrität der über Netzwerke übertragenen Daten.

In dieser Anleitung erfährst du, wie du den SSH-Server für verschiedene Linux-Distributionen installierst oder neu installierst, die wir aktuell auf unseren VPS-Servern anbieten. Die meisten Linux-Distros, die wir über unsere VPS-Server bereitstellen, sind standardmäßig mit einem SSH-Server ausgestattet, sodass du diesen einfach über das Webinterface des Produkts verwalten kannst. Wie das genau funktioniert, zeigen wir dir in unserer Anleitung: [Erstzugang (SSH)](vserver-linux-ssh.md)

Wenn du deine Sicherheit auf dem Server weiter verbessern möchtest, empfehlen wir dir unbedingt unsere [Sicherheitstipps](vserver-linux-security-tips.md) anzuschauen. Dort findest du eine Reihe von Tools und Services, die deinen Server noch sicherer machen.



## Installation

Um mit der Installation zu starten, greif über VNC auf deinen Server zu. Folge dazu einfach den Schritten in der [VNC-Konsole](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `yum remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
yum update
```

Installiere nun den SSH-Server mit folgendem Befehl:
```
yum install openssh-server
```

Nach der Installation kannst du den SSH-Server mit diesem Befehl starten:
```
systemctl start sshd
```

Damit der Dienst beim Systemstart automatisch startet, aktiviere ihn mit:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Das geht mit: `yum install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten zu folgender Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte abschließend den SSH-Server neu, damit die Änderungen wirksam werden:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `apt remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
apt update
```

Installiere nun den SSH-Server mit folgendem Befehl:
```
apt install openssh-server
```

Nach der Installation kannst du den SSH-Server mit diesem Befehl starten:
```
systemctl start sshd
```

Damit der Dienst beim Systemstart automatisch startet, aktiviere ihn mit:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Das geht mit: `apt install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten zu folgender Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte abschließend den SSH-Server neu, damit die Änderungen wirksam werden:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `apt remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
apt update
```

Installiere nun den SSH-Server mit folgendem Befehl:
```
apt install openssh-server
```

Nach der Installation kannst du den SSH-Server mit diesem Befehl starten:
```
systemctl start sshd
```

Damit der Dienst beim Systemstart automatisch startet, aktiviere ihn mit:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Das geht mit: `apt install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten zu folgender Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte abschließend den SSH-Server neu, damit die Änderungen wirksam werden:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `dnf remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
dnf update
```

Installiere nun den SSH-Server mit folgendem Befehl:
```
dnf install openssh-server
```

Nach der Installation kannst du den SSH-Server mit diesem Befehl starten:
```
systemctl start sshd
```

Damit der Dienst beim Systemstart automatisch startet, aktiviere ihn mit:
```
systemctl enable sshd
```

## Root-Login aktivieren

Um den Root-Login zu erlauben, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Das geht mit: `dnf install nano`
:::

Öffne die Konfigurationsdatei mit:
```
sudo nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten zu folgender Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere sie zu:
```
PermitRootLogin yes
```

Starte abschließend den SSH-Server neu, damit die Änderungen wirksam werden:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Du hast jetzt erfolgreich den SSH-Dienst auf deinem Server installiert und kannst dich nun per SSH mit deinem Server verbinden.