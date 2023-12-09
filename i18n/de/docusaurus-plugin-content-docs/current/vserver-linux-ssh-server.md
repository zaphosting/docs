---
id: vserver-linux-ssh-server
title: Linux SSH Server installation
description: Informationen zur Installation von SSH Server auf deinem Linx VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Linux SSH Server installation
---

##

## Was ist SSH?

Secure Shell (SSH) ist ein sicheres Protokoll, das einen sicheren und verschlüsselten Zugang zu entfernten Systemen ermöglicht. Es bietet eine vertrauliche und sichere Übertragung von Daten über Netzwerke.

## Installation

Um die Installation zu beginnen, musst du erst über VNC auf deinem Server verbinden. Du kannst dazu unserer Anleitung folgen [VNC Konsole](https://zap-hosting.com/guides/de/docs/vserver-vnc/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!---  Anleitung für CentOS  -->

<Tabs>
<TabItem value="CentOS" label="CentOS">
<br/>
:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren.
:::

```
yum remove openssh
```

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:

```
yum update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:

```
yum install openssh-server
```

Jetzt kannst du den SSH-Server mit dem folgenden Befehl starten:

```
systemctl start sshd
```

Um den SSH-Server beim Systemstart automatisch zu starten, führe folgenden Befehl aus:

```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl:
:::

```
yum install nano
```

Jetzt öffnen wir die Konfigurationsdatei mit dem folgenden Befehl

```
nano /etc/ssh/sshd_config 
```

Wir suchen nach folgender Zeile

```
#PermitRootLogin prohibit-password
```

Jetzt ändern wir es zu

```
PermitRootLogin yes
```

Anschließend muss der SSH-Server neu gestartet werden:

```
systemctl restart sshd
```


<!---  Anleitung für Debian  -->

<Tabs>
<TabItem value="Debian" label="Debian">
<br/>

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren.
:::

```
apt remove openssh
```

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:

```
apt update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:

```
apt install openssh-server
```

Jetzt kannst du den SSH-Server mit dem folgenden Befehl starten:

```
systemctl start sshd
```

Um den SSH-Server beim Systemstart automatisch zu starten, führe folgenden Befehl aus:

```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl:
:::

```
apt install nano
```

Jetzt öffnen wir die Konfigurationsdatei mit dem folgenden Befehl

```
nano /etc/ssh/sshd_config 
```

Wir suchen nach folgender Zeile

```
#PermitRootLogin prohibit-password
```

Jetzt ändern wir es zu

```
PermitRootLogin yes
```

Anschließend muss der SSH-Server neu gestartet werden:

```
systemctl restart sshd
```


<!---  Anleitung für Ubuntu  -->

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu">
<br/>


:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren.
:::

```
apt remove openssh
```

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:

```
apt update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:

```
apt install openssh-server
```

Jetzt kannst du den SSH-Server mit dem folgenden Befehl starten:

```
systemctl start sshd
```

Um den SSH-Server beim Systemstart automatisch zu starten, führe folgenden Befehl aus:

```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl:
:::

```
apt install nano
```

Jetzt öffnen wir die Konfigurationsdatei mit dem folgenden Befehl

```
nano /etc/ssh/sshd_config 
```

Wir suchen nach folgender Zeile

```
#PermitRootLogin prohibit-password
```

Jetzt ändern wir es zu

```
PermitRootLogin yes
```

Anschließend muss der SSH-Server neu gestartet werden:

```
systemctl restart sshd
```


<!---  Anleitung für Fedora  -->

<Tabs>
<TabItem value="Fedora" label="Fedora">
<br/>

:::info
Wenn du den SSH-Server neu installieren willst, musst du ihn zuerst deinstallieren.
:::

```
dnf remove openssh
```

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:

```
dnf update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:

```
dnf install openssh-server
```

Jetzt kannst du den SSH-Server mit dem folgenden Befehl starten:

```
systemctl start sshd
```

Um den SSH-Server beim Systemstart automatisch zu starten, führe folgenden Befehl aus:

```
systemctl enable sshd
```

## Root Anmeldung aktivieren

Um den Root Anmeldung zu aktivieren, musst du die openssh-Konfigurationsdatei bearbeiten. In dieser Anleitung werden wir "nano" als Editor verwenden.

:::info
Falls "nano" noch nicht installiert ist, muss es zuerst installiert werden. Verwende dazu den folgenden Befehl:
:::

```
dnf install nano
```

Jetzt öffnen wir die Konfigurationsdatei mit dem folgenden Befehl

```
nano /etc/ssh/sshd_config 
```

Wir suchen nach folgender Zeile

```
#PermitRootLogin prohibit-password
```

Jetzt ändern wir es zu

```
PermitRootLogin yes
```

Anschließend muss der SSH-Server neu gestartet werden:

```
systemctl restart sshd
```

<br>

Das war's! Jetzt kannst du dich mit SSH auf deinem Server verbinden.