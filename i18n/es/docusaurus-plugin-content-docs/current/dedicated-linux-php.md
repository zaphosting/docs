---
id: dedicated-linux-php
title: 'Servidor Dedicado: Instalación de PHP'
description: "Descubre cómo instalar PHP en tu servidor Linux para desarrollo web y optimiza tu configuración con extensiones esenciales → Aprende más ahora"
sidebar_label: Instalar PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

PHP es un lenguaje de programación de propósito general muy popular, con un uso importante en el desarrollo web. En esta guía, cubrimos el proceso para instalar PHP en tu servidor.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

Una vez dentro, es recomendable ejecutar el comando de actualización correspondiente a tu sistema operativo para mantener tu servidor seguro y al día con las últimas novedades.

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

Hay dos formas principales de instalar PHP en tu servidor Linux: como paquete independiente o como paquete adicional para Apache. Si usas tu propio servidor web que no sea Apache o para tareas generales, recomendamos el método independiente. En cambio, para usarlo con el servidor web Apache, utiliza el método de Apache para instalar PHP como paquete extra.

## Independiente

Usa el siguiente comando para instalar la versión más reciente de PHP. Si quieres instalar una versión específica, puedes usar el flag `-y` seguido de la versión.
```
# Última versión
sudo apt install php

# Versión específica (ej. php7.4)
sudo apt -y install php[version]
```

Verifica que la instalación fue exitosa con el comando `php -v`. Ya tienes PHP instalado en tu servidor. Te recomendamos leer la sección **Extensiones PHP** para asegurarte de instalar las extensiones que puedas necesitar.

## Usando Apache

Para empezar, instala Apache en tu servidor si aún no lo tienes. Esto se hace con el siguiente comando:
```
sudo apt install apache2
```

Una vez instalado, asegúrate de crear las reglas adecuadas en el firewall para que el servidor web sea accesible desde internet. En este ejemplo, usamos el **firewall UFW** porque Apache tiene una aplicación registrada para él. Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Tu servidor ya debería ser accesible. Puedes probarlo entrando a `http://[tu_ip_servidor]` en un navegador.

Con Apache listo, instala el paquete PHP para Apache con este comando:
```
sudo apt install php libapache2-mod-php
```

Verifica que la instalación fue exitosa con el comando `php -v`. Ya tienes PHP instalado junto a tu servidor web Apache. Te recomendamos leer la sección **Extensiones PHP** para asegurarte de instalar las extensiones que puedas necesitar.

## Extensiones PHP

PHP viene con una gran variedad de extensiones opcionales que puedes instalar para ampliar su funcionalidad. Para ver una lista de extensiones disponibles, ejecuta el siguiente comando, que mostrará los resultados en consola usando `less`.

```
apt search php- | less
```

Usa las flechas para desplazarte y presiona `Q` para salir. Para instalar una extensión, usa el comando apt install así. Puedes instalar varias extensiones a la vez separándolas con espacios para agilizar el proceso.

```
sudo apt install [php_extension] [...]
```

## Conclusión

Has instalado PHP exitosamente en tu servidor Linux. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />