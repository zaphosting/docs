---
id: vserver-linux-ssh-server
title: "VPS: Installation von SSH"
description: "Lerne, wie du sicher und verschlüsselt auf entfernte Linux-Server mit SSH zugreifst und sie verwaltest, um den Datenschutz und die Serverkontrolle zu verbessern → Jetzt mehr erfahren"
sidebar_label: SSH installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Secure Shell (SSH) ist ein sicheres Protokoll, das einen geschützten und verschlüsselten Zugriff auf entfernte Systeme ermöglicht. Es gewährleistet die Vertraulichkeit und Integrität der über Netzwerke übertragenen Daten.

In dieser Anleitung erfährst du, wie du den SSH-Server für verschiedene Linux-Distributionen installierst oder neu installierst, die wir aktuell auf unseren VPS-Servern anbieten. Die meisten Linux-Distros, die über unsere VPS-Server bereitgestellt werden, sind standardmäßig mit einem SSH-Server ausgestattet, sodass du ihn einfach über das Webinterface des Produkts verwalten kannst. Wie das geht, zeigen wir dir in unserer Anleitung: [Erstzugang (SSH)](vserver-linux-ssh.md)

Wenn du mehr darüber erfahren möchtest, wie du die Sicherheit deines Servers verbessern kannst, empfehlen wir dir unsere [Sicherheitstipps](vserver-linux-security-tips.md). Dort findest du viele Tools und Services, die deinen Server noch sicherer machen.

<InlineVoucher />

## Installation

Um mit der Installation zu starten, greif über VNC auf deinen Server zu. Folge dazu den Schritten in der [VNC-Konsole](vserver-vnc.md).


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `yum remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System aktuell ist. Führe dazu folgenden Befehl aus:
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

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `apt remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System aktuell ist. Führe dazu folgenden Befehl aus:
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
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `apt remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System aktuell ist. Führe dazu folgenden Befehl aus:
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
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Wenn du den SSH-Server neu installieren möchtest, deinstalliere ihn vorher. Das geht mit dem Befehl: `dnf remove openssh`.
:::

Bevor du den SSH-Server installierst, stelle sicher, dass dein System aktuell ist. Führe dazu folgenden Befehl aus:
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
</TabItem>
</Tabs>

## Root-Login aktivieren

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
Um den Root-Login zu aktivieren, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Nutze dazu den Befehl: `yum install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten und suche folgende Zeile:
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

<TabItem value="Debian" label="Debian" default>
Um den Root-Login zu aktivieren, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Nutze dazu den Befehl: `yum install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten und suche folgende Zeile:
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

<TabItem value="Ubuntu" label="Ubuntu" default>
Um den Root-Login zu aktivieren, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Nutze dazu den Befehl: `yum install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten und suche folgende Zeile:
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

<TabItem value="Fedora" label="Fedora" default>
Um den Root-Login zu aktivieren, musst du die OpenSSH-Konfigurationsdatei bearbeiten. In dieser Anleitung verwenden wir den Editor "nano".

:::info
Falls "nano" noch nicht installiert ist, musst du es zuerst installieren. Nutze dazu den Befehl: `yum install nano`
:::

Öffne die Konfigurationsdatei mit:
```
nano /etc/ssh/sshd_config 
```

Navigiere mit den Pfeiltasten und suche folgende Zeile:
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


## Fazit

Glückwunsch, du hast den SSH-Dienst erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 


<InlineVoucher />