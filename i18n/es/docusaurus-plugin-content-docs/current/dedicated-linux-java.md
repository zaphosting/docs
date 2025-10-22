---
id: dedicated-linux-java
title: "Servidor Dedicado: Instalación de Java"
description: "Aprende cómo instalar Java en varios sistemas Linux para ejecutar aplicaciones Java sin problemas y asegurar que tu entorno esté correctamente configurado → Aprende más ahora"
sidebar_label: Instalar Java
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Java es un lenguaje de programación muy popular que se usa en todo el mundo para numerosos programas y servicios. Para ejecutar estos programas basados en Java es absolutamente necesario que Java esté instalado en el sistema. A continuación, aprenderás cómo instalar Java en tu sistema para los sistemas operativos Linux que ofrecemos.

<InlineVoucher />

## Preparación

Antes de comenzar con la instalación de Java, es importante asegurarse de que el sistema esté actualizado. Para esto, nos conectamos al servidor vía SSH. Si no sabes qué es SSH ni cómo usarlo, échale un vistazo a la siguiente guía: [Acceso inicial (SSH)](vserver-linux-ssh.md)

Una vez dentro, el sistema se puede actualizar con el siguiente comando, dependiendo del sistema operativo:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```



## Instalación

Después de terminar la preparación, ya puedes comenzar con la instalación de Java. Según el sistema operativo, debes ejecutar los siguientes comandos:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```



## Verificación de la versión

Puedes comprobar si la instalación fue exitosa con el comando **java --version**. La salida debería verse similar a la siguiente:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

En este caso, Java 11 se instaló correctamente en tu sistema. Ahora puedes ejecutar fácilmente tus aplicaciones Java en tu servidor.

<InlineVoucher />