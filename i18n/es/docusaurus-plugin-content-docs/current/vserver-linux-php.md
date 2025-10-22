---
id: vserver-linux-php
title: 'VPS: Instalación de PHP'
description: "Aprende cómo instalar PHP en tu servidor Linux para desarrollo web y optimiza tu configuración para Apache o uso independiente → Aprende más ahora"
sidebar_label: Instalar PHP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

PHP es un lenguaje de programación de propósito general muy popular, con un uso importante en el desarrollo web. En esta guía, cubrimos el proceso para instalar PHP en tu servidor.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

Una vez conectado, se recomienda ejecutar el comando de actualización correspondiente a tu sistema operativo para mantener tu servidor seguro y actualizado con las últimas funciones.

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

## Instalación

Hay dos formas principales de instalar PHP en tu servidor Linux: como independiente o como paquete adicional para Apache. Si usas tu propio servidor web que no sea Apache o para tareas generales, recomendamos usar el método independiente. Para uso con el servidor web Apache, usa el método Apache para instalar PHP como paquete extra.

## Independiente

Usa el siguiente comando para instalar la última versión de PHP. Si quieres instalar versiones específicas, puedes usar la opción `-y` seguida de la versión.
```
# Última versión
sudo apt install php

# Versión específica (ej. php7.4)
sudo apt -y install php[version]
```

Verifica que la instalación fue exitosa con el comando `php -v`. Ya instalaste PHP en tu servidor. Te recomendamos leer la sección **Extensiones PHP** para asegurarte de instalar las extensiones que puedas necesitar.

## Usando Apache

Para empezar, deberías instalar Apache en tu servidor si aún no lo has hecho. Esto se puede hacer con el siguiente comando.
```
sudo apt install apache2
```

Una vez instalado, asegúrate de crear las reglas adecuadas en el firewall para que el servidor web sea accesible desde internet. En este ejemplo, usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para esto. Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall.
```
sudo ufw allow in "Apache"
```

Tu servidor ahora debería ser accesible. Puedes probarlo entrando `http://[tu_ip_servidor]` en un navegador.

Con Apache listo, puedes instalar el paquete PHP para Apache con el siguiente comando.
```
sudo apt install php libapache2-mod-php
```

Verifica que la instalación fue exitosa con el comando `php -v`. Ya instalaste PHP junto a tu servidor web Apache. Te recomendamos leer la sección **Extensiones PHP** para asegurarte de instalar las extensiones que puedas necesitar.

## Extensiones PHP

PHP viene con una amplia selección de extensiones opcionales que puedes instalar para ampliar su funcionalidad. Para ver una lista de extensiones disponibles, ejecuta el siguiente comando, que mostrará los resultados de la búsqueda en la consola usando `less`.

```
apt search php- | less
```

Usa las flechas para desplazarte y presiona `Q` para salir. Para instalar un paquete de extensión, simplemente usa el comando apt install como sigue. Puedes ingresar varias extensiones separadas por espacio para acelerar la instalación.

```
sudo apt install [php_extension] [...]
```

## Conclusión

Has instalado PHP exitosamente en tu servidor Linux. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />