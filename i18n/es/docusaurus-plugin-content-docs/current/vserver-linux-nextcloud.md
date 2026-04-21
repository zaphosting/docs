---
id: vserver-linux-nextcloud
title: "Configura Nextcloud en un servidor Linux - Crea tu almacenamiento en la nube privado"
description: "Descubre cómo configurar un servidor Nextcloud de alto rendimiento en Linux para un hosting en la nube óptimo → Aprende más ahora"
sidebar_label: Instalar Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Nextcloud es una solución de nube open source y un fork de Owncloud, fundada en 2016 por Frank Kalitschek, el ex fundador de Owncloud.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Para lograr un rendimiento, estabilidad y funcionalidad óptimos, se recomienda la siguiente configuración para alojar un servidor Nextcloud. El servidor Nextcloud no es compatible con Windows ni MacOS. Al menos no sin virtualización adicional o soluciones similares.

## Instala Nextcloud con el instalador One Click Apps

Puedes instalar **Nextcloud** directamente a través de nuestro **instalador One Click Apps** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de apps, busca **Nextcloud** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y amigable de desplegar y gestionar **Nextcloud** sin configurar manualmente por línea de comandos, mientras aprovechas la gestión web integrada, soporte para dominios personalizados y provisión de SSL donde esté disponible.

<InlineVoucher />

## Preparación

Los siguientes requisitos son recomendados por los desarrolladores y basados en nuestra propia experiencia. Podrías tener problemas si no cumples con estos prerrequisitos.

#### Hardware

| Componentes   | Mínimo                 | Recomendado                 |
| ------------- | ---------------------- | --------------------------- |
| CPU           | 2x 1 GHz               | 4x 2+ GHz                   |
| RAM           | 512 MB                 | 4+ GB                       |
| Almacenamiento| 10 GB                  | 50+ GB                      |
| Ancho de banda| 100 mbit/s (subida y bajada) | 500mbit/s (subida y bajada) Recomendado si varios usuarios usarán la nube |

#### Software

| Plataforma        | Opciones                                                      |
| ----------------- | ------------------------------------------------------------- |
| Sistema operativo | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| Base de datos     | MySQL o MariaDB 5.5+ (recomendado), SQLite (solo para pruebas y instancias mínimas) |
| Servidor web      | Apache 2.4 con `mod_php` o `php-fpm` (recomendado)            |
| PHP               | 5.6, 7.0 (recomendado), 7.1 (recomendado), 7.2                |

Para instalar la nube en un servidor Linux, debes establecer conexión vía cliente SSH. Si no sabes usar SSH, aquí tienes una guía: [Acceso inicial (SSH)](vserver-linux-ssh.md)

Una vez establecida la conexión, puedes comenzar a instalar los paquetes necesarios para la instalación de Nextcloud. Esto incluye instalar un servidor web y PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (Servidor web)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Preprocesador de hipertexto)**

🗄️ Debian 8:
```
# Paso 1: Añadir el repositorio PPA de PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Paso 2: Instalar PHP 7.3
sudo apt -y install php7.3

# Paso 3: Instalar extensiones PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Paso 1: Añadir el repositorio PPA de PHP 7.3
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Paso 2: Instalar PHP 7.3
sudo apt -y install php7.3

# Paso 3: Instalar extensiones PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Paso 1: Instalar PHP 7.3
sudo apt -y install php php-common

# Paso 2: Instalar extensiones PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Verifica la versión de PHP para comprobar funcionalidad
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (Servidor web)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Preprocesador de hipertexto)**

🗄️ Ubuntu 16.X:
```
# Paso 1: Añadir PPA de PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Paso 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Paso 3: Instalar extensiones PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Paso 1: Añadir PPA de PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Paso 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Paso 3: Instalar extensiones PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Paso 1: Añadir PPA de PHP 7.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Paso 2: Instalar PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Paso 3: Instalar extensiones PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Verifica la versión de PHP para comprobar funcionalidad
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (Servidor web)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Preprocesador de hipertexto)**

🗄️ CentOS 6:
```
# Paso 1: Configurar repositorio Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Paso 2: Instalar PHP 7.3
yum --enablerepo=remi-php73 install php

# Paso 3: Instalar extensiones PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Paso 1: Configurar repositorio Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Paso 2: Instalar PHP 7.3
yum --enablerepo=remi-php73 install php

# Paso 3: Instalar extensiones PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Paso 1: Configurar repositorio Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Paso 2: Instalar PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Verifica la versión de PHP para comprobar funcionalidad
```
php -v
```

</TabItem>
</Tabs>

El siguiente paso es definir un tipo de base de datos para almacenar la información relevante. Hay varias opciones:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Si has decidido usar este tipo de base de datos, sigue estos pasos:

Instalación de paquetes:
```
sudo apt-get install mariadb-server php-mysql
```

Durante la instalación se te pedirá establecer una contraseña root. Si no se solicita, la contraseña por defecto está en blanco. Esto no es seguro y debe cambiarse inmediatamente después.

El siguiente paso es conectarse al servidor de base de datos y crear la base de datos requerida:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Luego, crea un usuario que tenga acceso a la base de datos Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'TU_CONTRASEÑA_AQUÍ';
```

:::info
No omitas este paso usando el usuario root. No es seguro y puede poner tus datos en riesgo.
:::

El último paso es asignar permisos al nuevo usuario:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Cuando termines, presiona Ctrl-D para salir de la base de datos y continuar con los siguientes pasos.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Si has decidido usar este tipo de base de datos, sigue estos pasos:

Instalación de paquetes:
```
sudo apt-get install mysql-server php-mysql
```

Durante la instalación se te pedirá establecer una contraseña root. Si no se solicita, la contraseña por defecto está en blanco. Esto no es seguro y debe cambiarse inmediatamente después.

El siguiente paso es conectarse al servidor de base de datos y crear la base de datos requerida:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Luego, crea un usuario que tenga acceso a la base de datos Nextcloud.

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'TU_CONTRASEÑA_AQUÍ';
```

:::info
No omitas este paso usando el usuario root. No es seguro y puede poner tus datos en riesgo.
:::


El último paso es asignar permisos al nuevo usuario:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Cuando termines, presiona Ctrl-D para salir de la base de datos y continuar con los siguientes pasos.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Si has decidido usar este tipo de base de datos, sigue estos pasos:

Instalación de paquetes:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Durante la instalación se te pedirá establecer una contraseña root. Si no se solicita, la contraseña por defecto está en blanco. Esto no es seguro y debe cambiarse inmediatamente después.

El siguiente paso es conectarse al servidor de base de datos y crear la base de datos requerida:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Luego, crea un usuario que tenga acceso a la base de datos Nextcloud.

```sql
CREATE USER nextcloud with encrypted password 'TU_CONTRASEÑA_AQUÍ';
```

:::info
No omitas este paso usando el usuario root. No es seguro y puede poner tus datos en riesgo.
:::

El último paso es asignar permisos al nuevo usuario:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Cuando termines, presiona Ctrl-D para salir de la base de datos. Luego puedes modificar la base de datos PostgreSQL vía el instalador web o mediante el archivo **config.php**.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
Si has decidido usar este tipo de base de datos, sigue estos pasos:

Instalación de paquetes:
```
apt-get install sqlite3 php-sqlite3
```

Crear nueva base de datos SQLite 3
```
sqlite3 DatabaseName.db
```

Después, la base de datos SQLite 3 puede modificarse vía el instalador web o mediante el archivo **config.php**.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## Instalación

Ahora puede comenzar la instalación real de Nextcloud. Se debe descargar y descomprimir el software:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Una vez terminado este paso, es hora de ejecutar el script de instalación. El acceso es posible vía navegador con la siguiente URL:

:::info
**http://dominio.tld/nextcloud/** 
:::

Aparece la configuración del script de instalación, donde se crea un usuario root y se definen los datos de la base de datos:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Seguridad y protección

**Advertencias de configuración**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Directorio de datos**

Se recomienda encarecidamente colocar el directorio de datos fuera del directorio raíz web (es decir, fuera de /var/www). La forma más sencilla es hacerlo en una instalación nueva. El directorio puede definirse durante la configuración. Sin embargo, primero debe crearse y asignarse los permisos correspondientes. Por ejemplo, los datos podrían almacenarse en un directorio llamado Cloud en el directorio home.

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS mediante certificado SSL (Let's Encrypt)** 

Una buena solución en la nube debería ser accesible solo mediante conexión SSL. Sin cifrado SSL, los datos e información se transmiten en texto plano. Esta información puede ser interceptada y leída fácilmente sin cifrado.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName dominio.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/dominio.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/dominio.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Además, todo el tráfico HTTP debería redirigirse a HTTPS usando una redirección permanente con código de estado 301. Esto se puede lograr con Apache usando una configuración como la siguiente para VirtualHosts:

```
<VirtualHost *:80>
   ServerName dominio.tld
   Redirect permanent / https://dominio.tld/
</VirtualHost>
```


## Gestionar Nextcloud

El acceso a Nextcloud es posible vía navegador, así como desde smartphone y ordenador usando la app. Las fuentes de descarga están aquí: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

En ajustes puedes modificar más opciones incluso después de la configuración y ver información importante como logs y actividades. Esto incluye configuraciones de seguridad adicionales (autenticación de dos factores, cifrado, ...), ajustes de diseño (logo, color, eslogan, cabecera), configuraciones de acceso y mucho más.

**Apps**

Además, existe la posibilidad de instalar apps adicionales aparte de las predeterminadas. Puedes acceder a ellas desde el menú **Apps**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Con estas **Apps** puedes personalizar aún más Nextcloud según tus deseos.


## Conclusión

¡Felicidades, has instalado Nextcloud con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, disponible para ayudarte todos los días.

<InlineVoucher />