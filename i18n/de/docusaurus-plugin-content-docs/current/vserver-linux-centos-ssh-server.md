---
id: vserver-linux-centos-ssh
title: CentOS SSH Server installation
description: Informationen zur Installation von SSH Server auf deinem Linx VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: CentOS SSH Server installation
---

##

## Was ist SSH?

Secure Shell (SSH) ist ein sicheres Protokoll, das einen sicheren und verschlüsselten Zugang zu entfernten Systemen ermöglicht. Es bietet eine vertrauliche und sichere Übertragung von Daten über Netzwerke.



## Installation

Um die Installation zu beginnen, musst du erst über VNC auf deinem Server verbinden. Du kannst dazu unserer Anleitung folgen [VNC Konsole](https://zap-hosting.com/guides/de/docs/vserver-vnc/)

Bevor du mit der Installation beginnst, stelle sicher, dass das System auf dem neuesten Stand ist. Führe dazu folgenden Befehl aus:

```
sudo yum update
```

Nun kannst du mit der Installation des SSH-Servers fortfahren. Verwende dafür den folgenden Befehl:

```
sudo yum –y install openssh-server openssh-clients
```

Jetzt kannst du den SSH-Server mit dem folgenden Befehl starten:

```
sudo systemctl start sshd
```

Um den SSH-Server beim Systemstart automatisch zu starten, führe folgenden Befehl aus:

```
sudo systemctl enable sshd
```

Das war's! Jetzt kannst du dich mit SSH auf deinem Server verbinden.