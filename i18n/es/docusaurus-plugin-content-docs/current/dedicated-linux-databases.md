---
id: dedicated-linux-databases
title: "Configura Bases de Datos en un Servidor Linux - Despliega y Gestiona Servicios de Bases de Datos"
description: "Descubre cómo instalar y configurar varias bases de datos en Ubuntu y otras distros Linux para mejorar rendimiento y seguridad → Aprende más ahora"
sidebar_label: Instalar Bases de Datos
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Esta guía ofrece los pasos para la instalación de varios tipos de bases de datos. Para este ejemplo, se usa Ubuntu 20.04 como sistema operativo, sin embargo, también se especifican comandos equivalentes para otras distros Linux que ofrecemos en nuestra web. Estos comandos deben ejecutarse vía SSH, si no sabes cómo conectarte a tu servidor por SSH, échale un vistazo aquí: [Acceso inicial (SSH)](vserver-linux-ssh.md).



## Preparación

Antes de comenzar con la instalación de una base de datos, primero es necesario asegurarse de que el sistema esté actualizado. Para ello, debes actualizar los paquetes desde el gestor de paquetes de tu sistema con el siguiente comando, según tu sistema operativo:

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Tipos de bases de datos

Dependiendo del servicio de base de datos que quieras instalar, sigue la guía correspondiente:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## ¿Qué es MariaDB?

MariaDB es un sistema de gestión de bases de datos relacional open-source, originalmente bifurcado de MySQL. Asegura mejor rendimiento, seguridad y desarrollo continuo. Destaca por ofrecer motores de almacenamiento mejorados y su arquitectura es totalmente compatible con MySQL. Recomendamos MariaDB sobre MySQL.

## Instalación de MariaDB

Primero, debes asegurarte de que se instale la versión más reciente de MariaDB. Algunos sistemas operativos antiguos como Debian 9 o Ubuntu 18.04 no incluyen por defecto la última versión de MariaDB en su gestor de paquetes, por lo que ejecutando el siguiente comando te aseguras de obtener la versión más actual.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Después de instalar el repositorio, actualiza la caché de tu gestor de paquetes siguiendo los pasos indicados en la sección de preparación.

:::info
La instalación del repositorio de MariaDB (paso anterior) puede omitirse sin problema en sistemas modernos como Ubuntu 22.04 o Debian 11.
:::

Una vez configurado el repositorio, ya puedes comenzar la instalación de MariaDB instalando el paquete `mariadb-server`. Según el sistema operativo, ejecuta uno de estos comandos:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## Configuración de MariaDB

Cuando termine la instalación, escribe el siguiente comando para iniciar la configuración del servidor:

```
mysql_secure_installation
```

Ahora puedes configurar tu servidor MariaDB (MySQL) siguiendo las indicaciones y estableciendo una contraseña para tu servidor. En el siguiente prompt, puedes saltar la entrada por ahora presionando **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
¡El usuario root es el usuario principal de tu servidor MariaDB (MySQL)!
:::

Luego te preguntarán si quieres establecer una contraseña para el usuario root, confirma con **y** para sí. Después, debes escribir la nueva contraseña para el usuario root.

:::note
Mientras escribes la contraseña, no podrás verla. Esto es normal y tu contraseña se guardará igual. Asegúrate de usar una contraseña segura para el usuario root y guárdala en un lugar seguro.
:::

Ahora te preguntarán si quieres eliminar usuarios anónimos de tu servidor, deberías hacerlo siempre por razones de seguridad. Confirma con **y** para sí:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

En el siguiente prompt defines si el usuario root puede conectarse al servidor desde fuera. Por seguridad, también deberías desactivar esta opción y confirmar con **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

En el siguiente paso, también puedes confirmar eliminar la base de datos de prueba que ofrece MariaDB (MySQL) con **y**, porque no es necesaria y se puede borrar fácilmente:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Al final del proceso de configuración, te preguntarán si quieres actualizar los permisos de la base de datos. Confirma con **y** para activar la contraseña establecida para el usuario root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

¡Tu servidor MariaDB (MySQL) ya está listo para usarse!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## ¿Qué es Redis?

Redis es un almacén de estructuras de datos en memoria, usado principalmente para guardar datos con estructura clave-valor, aunque soporta otros formatos como listas, JSON y más. Se caracteriza por su velocidad, respondiendo consultas en milisegundos.

## Instalación de Redis

Primero, debes añadir un repositorio que nos permita instalar Redis. Este paso no es necesario para todas las distribuciones Linux, solo para las listadas abajo. Ejecuta el comando que corresponda a tu sistema operativo y versión:

```
// Ubuntu (cualquier versión) y Debian (solo Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (solo CentOS 7)
sudo yum install epel-release

// CentOS (solo CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Después de instalar el repositorio, actualiza la caché de tu gestor de paquetes siguiendo los pasos en la sección de preparación.

:::info
Si tu sistema operativo no está listado arriba, puedes saltarte este paso.
:::

Tras instalar el repositorio correspondiente, procede a instalar el paquete Redis Server. Ejecuta el comando que corresponda a tu sistema operativo.

```
// Ubuntu y Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

¡Después de la instalación, tu servidor Redis está listo para usarse! Por defecto, corre en 127.0.0.1:6379 sin contraseña.

:::caution 
Para usuarios Debian/Ubuntu:
Recuerda habilitar el servicio `redis-server` tras la instalación para que se inicie automáticamente al arrancar el servidor. Puedes hacerlo con este comando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## ¿Qué es MongoDB?
MongoDB es una base de datos NoSQL orientada a documentos, diseñada para escalabilidad y agilidad para desarrolladores. Almacena datos en formato BSON similar a JSON, permitiendo guardar tipos de datos diversos. Permite usar índices para reducir tiempos de respuesta y se caracteriza por no tener un esquema predefinido como MySQL o SQLite, brindando agilidad y flexibilidad.

## Instalación de MongoDB

Selecciona tu sistema operativo en las pestañas de abajo para mostrar la guía correspondiente.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Instalación en Ubuntu & Debian

Primero, debes ejecutar el siguiente comando para importar la clave pública GPG de MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Luego, necesitas añadir la fuente de MongoDB a la lista de fuentes de tu sistema operativo. Para ello, ejecuta este comando:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Ahora el gestor de paquetes puede instalar MongoDB Community Edition, pero antes debes actualizar los repositorios con el comando: `sudo apt update`. Finalmente, instala MongoDB con:

```
sudo apt install mongodb-org
```

¡Tu instalación de MongoDB debería estar funcionando ahora!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Instalación en CentOS & Fedora

Primero, debes configurar el repositorio de MongoDB para sistemas Red Hat.

Crea un archivo llamado `/etc/yum.repos.d/mongodb-org-6.0.repo` y pega el siguiente contenido dentro:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Ahora puedes instalar MongoDB. Hay una pequeña diferencia en el comando de instalación entre CentOS y Fedora, así que usa el que corresponda:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

¡Tu instalación de MongoDB debería estar funcionando ahora, es mucho más simple comparado con otras distros Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Instalación en OpenSUSE

Primero, debes importar la clave pública de MongoDB para el repositorio con el comando:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Después, para añadir el repositorio de MongoDB ejecuta:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Y finalmente, instala la última versión de MongoDB con:

```
sudo zypper -n install mongodb-org
```

¡Tu instalación de MongoDB debería estar funcionando ahora!

</TabItem>
</Tabs>

</TabItem>
</Tabs>