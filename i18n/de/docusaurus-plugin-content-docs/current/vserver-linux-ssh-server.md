---
id: vserver-linux-ssh-server
title: "vServer: Installation von SSH"
description: Informationen zur Installation von SSH auf deinem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: SSH installieren
---

## Einführung

Secure Shell (SSH) ist ein sicheres Protokoll, das einen sicheren und verschlüsselten Zugang zu entfernten Systemen ermöglicht. Es bietet eine vertrauliche und sichere Übertragung von Daten über Netzwerke.

In dieser Anleitung erfährst du, wie du den SSH-Server für eine Reihe von Linux-Distributionen, die wir derzeit auf unseren VPS-Servern anbieten, installieren oder neu installieren kannst. Die meisten Linux-Distributionen, die wir auf unseren VPS-Servern anbieten, sind standardmäßig mit einem SSH-Server ausgestattet, den du einfach über das Webinterface des Produkts verwalten kannst. Wie das geht, kannst du in unserem Anleitung nachlesen: [Erstzugang mit SSH](vserver-linux-ssh.md)

Wenn du mehr darüber erfahren möchtest, wie du die Sicherheit deines Servers verbessern kannst, empfehlen wir dir unsere Anleitung [Linux Security Tips](vserver-linux-security-tips.md), die eine Reihe von Tools und Diensten vorstellt, mit denen du deinen Server noch besser schützen kannst.

## Installation

Um die Installation zu beginnen, musst du erst über VNC auf deinem Server verbinden. Du kannst dazu unserer Anleitung folgen [VNC Konsole](vserver-vnc.md)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren. Das kannst du mit dem Befehl: `yum remove openssh`.
:::

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
yum update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:
```
yum install openssh-server
```

Sobald die Installation abgeschlossen ist, kannst du den SSH-Serverdienst mit dem folgenden Befehl starten:
```
systemctl start sshd
```

Vergewissere dich, dass du den Dienst so konfigurierst, dass er beim Systemstart automatisch gestartet wird. Das kannst du mit dem folgenden Befehl tun:
```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl: `yum install nano`
:::

Öffne die Konfigurationsdatei, indem du sie ausführst:
```
nano /etc/ssh/sshd_config 
```

Verwende die Pfeiltasten zum Navigieren und suche nach der folgenden Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere dies in den folgenden Text, der den Remote-Root-Login ermöglicht:
```
PermitRootLogin yes
```

Starte schließlich den SSH-Server neu, um die neue Konfiguration mit dem folgenden Befehl zu übernehmen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren. Das kannst du mit dem Befehl: `apt remove openssh`.
:::

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
apt update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:
```
apt install openssh-server
```

Sobald die Installation abgeschlossen ist, kannst du den SSH-Serverdienst mit dem folgenden Befehl starten:
```
systemctl start sshd
```

Vergewissere dich, dass du den Dienst so konfigurierst, dass er beim Systemstart automatisch gestartet wird. Das kannst du mit dem folgenden Befehl tun:
```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl: `apt install nano`
:::

Öffne die Konfigurationsdatei, indem du sie ausführst:
```
nano /etc/ssh/sshd_config 
```

Verwende die Pfeiltasten zum Navigieren und suche nach der folgenden Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere dies in den folgenden Text, der den Remote-Root-Login ermöglicht:
```
PermitRootLogin yes
```

Starte schließlich den SSH-Server neu, um die neue Konfiguration mit dem folgenden Befehl zu übernehmen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren. Das kannst du mit dem Befehl: `apt remove openssh`.
:::

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
apt update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:
```
apt install openssh-server
```

Sobald die Installation abgeschlossen ist, kannst du den SSH-Serverdienst mit dem folgenden Befehl starten:
```
systemctl start sshd
```

Vergewissere dich, dass du den Dienst so konfigurierst, dass er beim Systemstart automatisch gestartet wird. Das kannst du mit dem folgenden Befehl tun:
```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl: `apt install nano`
:::

Öffne die Konfigurationsdatei, indem du sie ausführst:
```
nano /etc/ssh/sshd_config 
```

Verwende die Pfeiltasten zum Navigieren und suche nach der folgenden Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere dies in den folgenden Text, der den Remote-Root-Login ermöglicht:
```
PermitRootLogin yes
```

Starte schließlich den SSH-Server neu, um die neue Konfiguration mit dem folgenden Befehl zu übernehmen:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren. Das kannst du mit dem Befehl: `dnf remove openssh`.
:::

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:
```
dnf update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:
```
dnf install openssh-server
```

Sobald die Installation abgeschlossen ist, kannst du den SSH-Serverdienst mit dem folgenden Befehl starten:
```
systemctl start sshd
```

Vergewissere dich, dass du den Dienst so konfigurierst, dass er beim Systemstart automatisch gestartet wird. Das kannst du mit dem folgenden Befehl tun:
```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl: `dnf install nano`
:::

Öffne die Konfigurationsdatei, indem du sie ausführst:
```
nano /etc/ssh/sshd_config 
```

Verwende die Pfeiltasten zum Navigieren und suche nach der folgenden Zeile:
```
#PermitRootLogin prohibit-password
```

Ändere dies in den folgenden Text, der den Remote-Root-Login ermöglicht:
```
PermitRootLogin yes
```

Starte schließlich den SSH-Server neu, um die neue Konfiguration mit dem folgenden Befehl zu übernehmen:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Du hast nun erfolgreich den SSH-Dienst auf deinem Server installiert und kannst nun über SSH auf deinen Server zugreifen.