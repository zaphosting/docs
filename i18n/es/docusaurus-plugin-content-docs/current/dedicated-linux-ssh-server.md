---
id: dedicated-linux-ssh-server
title: "Configura SSH en un Servidor Linux - Activa el Acceso Remoto Seguro"
description: "Descubre cómo instalar y gestionar de forma segura servidores SSH en Linux para garantizar un acceso remoto seguro y una mayor protección del servidor → Aprende más ahora"
sidebar_label: Instalar SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Secure Shell (SSH) es un protocolo seguro que permite un acceso cifrado y seguro a sistemas remotos. Garantiza la confidencialidad e integridad de los datos transmitidos a través de redes.

En esta guía, aprenderás cómo instalar o reinstalar el servidor SSH para varias distribuciones de Linux que ofrecemos actualmente en nuestros servidores VPS/servidores dedicados. La mayoría de las distros Linux que ofrecemos en nuestros servidores VPS/servidores dedicados ya vienen con un servidor SSH por defecto, lo que significa que puedes gestionarlo fácilmente a través de la interfaz web del producto. Puedes ver cómo hacerlo en nuestra guía: [Acceso inicial (SSH)](vserver-linux-ssh.md)

Si quieres mejorar la seguridad de tu servidor, te recomendamos echar un vistazo a nuestra guía de [Consejos de Seguridad](vserver-linux-security-tips.md), que presenta varias herramientas y servicios para proteger aún más tu servidor.



## Instalación

Para comenzar el proceso de instalación, accede a tu servidor vía VNC. Puedes seguir estos pasos usando la [consola VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Si quieres reinstalar el servidor SSH, asegúrate de desinstalarlo primero. Puedes hacerlo con el comando: `yum remove openssh`.
:::

Antes de instalar el servidor SSH, asegúrate de que tu sistema esté actualizado. Ejecuta el siguiente comando:
```
yum update
```

Ahora procede a instalar el servidor SSH con el siguiente comando:
```
yum install openssh-server
```

Una vez finalizada la instalación, puedes iniciar el servicio del servidor SSH con el siguiente comando:
```
systemctl start sshd
```

Asegúrate de habilitar el servicio para que se inicie automáticamente al arrancar el sistema. Puedes hacerlo con el siguiente comando:
```
systemctl enable sshd
```

## Habilitar login root

Para habilitar el login root, necesitas editar el archivo de configuración de openssh. En esta guía usaremos "nano" como editor.

:::info
Si "nano" no está instalado, primero debes instalarlo. Para ello, usa el comando: `yum install nano`
:::

Abre el archivo de configuración ejecutando:
```
nano /etc/ssh/sshd_config 
```

Usa las flechas para navegar y busca la siguiente línea:
```
#PermitRootLogin prohibit-password
```

Cámbiala por esta línea para habilitar el login root remoto:
```
PermitRootLogin yes
```

Finalmente, reinicia el servidor SSH para aplicar la nueva configuración con el siguiente comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Si quieres reinstalar el servidor SSH, asegúrate de desinstalarlo primero. Puedes hacerlo con el comando: `apt remove openssh`.
:::

Antes de instalar el servidor SSH, asegúrate de que tu sistema esté actualizado. Ejecuta el siguiente comando:
```
apt update
```

Ahora procede a instalar el servidor SSH con el siguiente comando:
```
apt install openssh-server
```

Una vez finalizada la instalación, puedes iniciar el servicio del servidor SSH con el siguiente comando:
```
systemctl start sshd
```

Asegúrate de habilitar el servicio para que se inicie automáticamente al arrancar el sistema. Puedes hacerlo con el siguiente comando:
```
systemctl enable sshd
```

## Habilitar login root

Para habilitar el login root, necesitas editar el archivo de configuración de openssh. En esta guía usaremos "nano" como editor.

:::info
Si no tienes "nano" instalado, deberás instalarlo. Para ello, usa el comando: `apt install nano`
:::

Abre el archivo de configuración ejecutando:
```
nano /etc/ssh/sshd_config 
```

Usa las flechas para navegar y busca la siguiente línea:
```
#PermitRootLogin prohibit-password
```

Cámbiala por esta línea para habilitar el login root remoto:
```
PermitRootLogin yes
```

Finalmente, reinicia el servidor SSH para aplicar la nueva configuración con el siguiente comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Si quieres reinstalar el servidor SSH, asegúrate de desinstalarlo primero. Puedes hacerlo con el comando: `apt remove openssh`.
:::

Antes de instalar el servidor SSH, asegúrate de que tu sistema esté actualizado. Ejecuta el siguiente comando:
```
apt update
```

Ahora procede a instalar el servidor SSH con el siguiente comando:
```
apt install openssh-server
```

Una vez finalizada la instalación, puedes iniciar el servicio del servidor SSH con el siguiente comando:
```
systemctl start sshd
```

Asegúrate de habilitar el servicio para que se inicie automáticamente al arrancar el sistema. Puedes hacerlo con el siguiente comando:
```
systemctl enable sshd
```

## Habilitar login root

Para habilitar el login root, necesitas editar el archivo de configuración de openssh. En esta guía usaremos "nano" como editor.

:::info
Si no tienes "nano" instalado, deberás instalarlo. Para ello, usa el comando: `apt install nano`
:::

Abre el archivo de configuración ejecutando:
```
nano /etc/ssh/sshd_config 
```

Usa las flechas para navegar y busca la siguiente línea:
```
#PermitRootLogin prohibit-password
```

Cámbiala por esta línea para habilitar el login root remoto:
```
PermitRootLogin yes
```

Finalmente, reinicia el servidor SSH para aplicar la nueva configuración con el siguiente comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Si quieres reinstalar el servidor SSH, asegúrate de desinstalarlo primero. Puedes hacerlo con el comando: `dnf remove openssh`.
:::

Antes de instalar el servidor SSH, asegúrate de que tu sistema esté actualizado. Ejecuta el siguiente comando:
```
dnf update
```

Ahora procede a instalar el servidor SSH con el siguiente comando:
```
dnf install openssh-server
```

Una vez finalizada la instalación, puedes iniciar el servicio del servidor SSH con el siguiente comando:
```
systemctl start sshd
```

Asegúrate de habilitar el servicio para que se inicie automáticamente al arrancar el sistema. Puedes hacerlo con el siguiente comando:
```
systemctl enable sshd
```

## Habilitar login root

Para habilitar el login root, necesitas editar el archivo de configuración de openssh. En esta guía usaremos "nano" como editor.

:::info
Si no tienes "nano" instalado, deberás instalarlo. Para ello, usa el comando: `dnf install nano`
:::

Abre el archivo de configuración ejecutando:
```
sudo nano /etc/ssh/sshd_config 
```

Usa las flechas para navegar y busca la siguiente línea:
```
#PermitRootLogin prohibit-password
```

Cámbiala por esta línea para habilitar el login root remoto:
```
PermitRootLogin yes
```

Finalmente, reinicia el servidor SSH para aplicar la nueva configuración con el siguiente comando:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Ya has instalado con éxito el servicio SSH en tu servidor y ahora puedes acceder a tu servidor vía SSH.