---
id: vserver-linux-lamp-stack
title: "VPS: Configurar stack LAMP - Linux, Apache, MySQL, PHP"
description: "Descubre cómo configurar un stack LAMP para alojar sitios web dinámicos en PHP en un VPS Linux de forma eficiente → Aprende más ahora"
sidebar_label: Stack Web LAMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El stack **LAMP** es una selección popular de software open-source que se configura junto para permitir un alojamiento sencillo de sitios web dinámicos, con un enfoque especial en sitios y apps PHP. El acrónimo significa: **L**inux como sistema operativo, **A**pache como servidor web, **M**ySQL como base de datos y finalmente **P**HP para el procesamiento. En esta guía, cubriremos el proceso de configurar un stack LAMP en un VPS Linux, con un desglose detallado y un ejemplo de cómo montar un sitio web de lista de tareas.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

En esta guía usaremos Ubuntu como distribución Linux. Las instrucciones son iguales para Debian y similares para otras distribuciones, aunque la sintaxis de algunos comandos puede variar un poco. Asegúrate de tener un sistema operativo instalado y estar conectado al servidor vía SSH.

Como siempre, antes de continuar con la instalación, asegúrate de que todos los paquetes estén actualizados con el siguiente comando:
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

## Instalación

La instalación se puede dividir fácilmente en cada dependencia principal del stack LAMP, comenzando con el servidor web Apache, seguido por la base de datos MySQL y finalmente PHP. Durante la instalación, configuraremos un sitio web de prueba escrito en PHP que accederá a la base de datos MySQL. Cada petición web será procesada y servida a través del servidor Apache.

### Configurando Apache

Apache es el servidor web que procesará las peticiones entrantes y servirá las respuestas. Instálalo con el siguiente comando.
```
sudo apt install apache2
```

Una vez instalado, debes asegurarte de que las reglas del firewall apropiadas estén creadas para que el servidor web sea accesible desde internet. En este ejemplo, usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para este.

Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall. Puedes aprender más sobre firewalls en Linux en nuestra guía [Gestionar Firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté habilitado y que exista una regla para SSH.
```
# Crear regla para permitir SSH
sudo ufw allow OpenSSH

# Habilitar firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas el firewall UFW! Si no la tienes, **no** podrás conectarte por SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén activas.
```
# Crear regla para permitir Apache
sudo ufw allow in "Apache Full"

# Verificar reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles ejecutando el comando `ufw app list`. En el ejemplo anterior, usar `Apache Full` significa que se crean reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas `Apache` y `Apache (v6)` con acción `ALLOW`, lo que confirma que el firewall está listo. También verás otras reglas que hayas configurado antes, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con el firewall abierto para Apache, ahora asegúrate de que Apache funcione. Puedes probar accediendo a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, verás una página de bienvenida por defecto. Si no, revisa el estado del servicio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando MySQL

Ahora instala y configura un servidor MySQL que actuará como base de datos para almacenar datos de forma persistente y relacional. Instálalo con:
```
sudo apt install mysql-server
```

Cuando termine, se recomienda ejecutar un script de instalación segura para mantener tu instancia MySQL protegida. Es opcional pero muy recomendado. Ejecuta:
```
sudo mysql_secure_installation
```

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará si quieres eliminar el usuario `anonymous` y deshabilitar el login remoto de root. Recomendamos aceptar con `Y` por seguridad. Esto elimina usuarios de prueba y limita el acceso root solo localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente te preguntará si quieres eliminar la base de datos `test` y recargar las tablas de privilegios. También recomendamos aceptar con `Y` para limpiar y aplicar cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica que MySQL esté corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si funciona, verás un mensaje de bienvenida. Sal con el comando `quit` cuando quieras.

### Configurando PHP

La última dependencia del stack LAMP es PHP y es muy fácil de instalar. El siguiente comando instala PHP junto con un plugin para Apache y MySQL, para que Apache pueda trabajar con PHP y PHP pueda usar MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirma que la instalación fue exitosa comprobando la versión. Si ves una versión, PHP funciona correctamente.
```
php -v
```

:::tip Extensiones PHP
Para casos avanzados, puede que necesites extensiones PHP adicionales para funcionalidades extra. Puedes ver una lista ejecutando `apt search php- | less`.

Usa las flechas para navegar y presiona `Q` para salir. Para instalar una extensión, usa:
```
sudo apt install [php_extension] [...]
```
Puedes instalar varias extensiones separándolas con espacios para acelerar el proceso.
:::

Recomendamos ajustar el índice de directorios para que los archivos `index.php` tengan prioridad sobre los `.html` por defecto. Abre el archivo con:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

En el editor nano, mueve `index.php` al inicio de la lista, así:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Guarda y cierra nano con `CTRL + X`, luego `Y` para confirmar y `ENTER`. Reinicia Apache para aplicar cambios:
```
sudo systemctl restart apache2
```

### Creando sitio web de prueba

Con todas las dependencias LAMP instaladas, ahora crearemos un sitio web de prueba para mostrar cómo el stack LAMP funciona junto para formar una solución web dinámica. Esto es opcional, pero útil para entender cómo usar estas herramientas para montar tus propios sitios.

En este ejemplo, crearemos un pequeño sitio de lista de tareas en PHP que recupera y muestra entradas. Los datos se almacenarán en una tabla MySQL y se servirán a través de Apache.

Usaremos un dominio de prueba `zapdocs.example.com` durante todo el ejemplo, ya que en un caso real usarías un dominio. **Debes** configurar un registro DNS tipo `A` para el dominio que apunte a la dirección IP de tu servidor. Si necesitas ayuda, consulta nuestra guía [Registros de Dominio](domain-records.md).

:::note
Puedes no usar un dominio y reemplazar `[your_domain]` por un nombre cualquiera. Accederías al sitio vía IP. Pero al crear el archivo de host virtual, elimina el parámetro `ServerName`.
:::

#### Configurando Apache

Normalmente, todos los archivos y datos web se almacenan en `/var/www`. Por defecto, Apache trae una carpeta `html` con una página por defecto. Para mantener todo organizado, especialmente si alojas varios sitios en un solo Apache, recomendamos crear una carpeta individual para cada dominio.

Para esto, crea una carpeta nueva en `/var/www/[your_domain]` para cada dominio. En este ejemplo será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ahora crea un archivo de configuración de host virtual en `sites-available` para este dominio y carpeta.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copia esta plantilla en nano, reemplazando `[your_domain]` por tu dominio:
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Este archivo maneja peticiones en el puerto 80 (HTTP) y verifica que la petición coincida con el `ServerName` (tu dominio). También indica que la carpeta `/var/www/[your_domain]` será usada para servir archivos.

Guarda y cierra nano con `CTRL + X`, luego `Y` y `ENTER`. Recomendamos usar:
```
sudo apache2ctl configtest
```
para asegurarte de que no haya errores de sintaxis.

El último paso es habilitar el nuevo host virtual con:
```
sudo a2ensite [your_domain]
```

:::note Sin dominio
Si **no** usas dominio, elimina o comenta la línea `ServerName` con un `#`. También debes deshabilitar el host virtual por defecto con:
```
sudo a2dissite 000-default
```
:::

Finalmente, reinicia Apache para aplicar el nuevo host virtual:
```
sudo systemctl restart apache2
```

#### Creando el sitio web

Con Apache configurado para el nuevo host virtual y carpeta, es hora de crear el sitio web que se servirá. La carpeta está vacía, así que nada se mostrará aún. Crearemos un sitio de lista de tareas para este dominio.

##### Preparando la base de datos

Primero, crea una base de datos y tabla para almacenar cada tarea. Entra a MySQL:
```
sudo mysql -u root
```

Crea la base de datos `todowebsite` y la tabla `todoitems`:
```
# Crear base de datos
CREATE DATABASE todowebsite;

# Usar la base de datos
USE todowebsite;

# Crear tabla de items
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ahora inserta algunas tareas de ejemplo:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Crear guía ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Comprar un servidor ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Unirme al Discord de ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('¡Que tengas un gran día!', 0);
```

Por último, crea un usuario dedicado `todo` para este sitio:
```
# Crear usuario dedicado
# Reemplaza [your_password] por tu contraseña
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Asignar privilegios (copiar todo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recargar privilegios
FLUSH PRIVILEGES;
```

Cuando termines, sal del terminal MySQL con `quit`.

##### Archivos PHP del sitio

La última parte es crear el archivo PHP para la página de tareas. Será un `index.php` en `/var/www/[your_domain]`. Ábrelo con nano:
```
sudo nano /var/www/[your_domain]/index.php
```

Aquí tienes un código simple para una página de tareas que muestra los items de la base de datos. La primera parte PHP conecta con MySQL.

:::important
Debes cambiar `[your_password]` por la contraseña que asignaste al usuario `todo`.
:::

La sección HTML crea una lista no ordenada que recorre los resultados.

```
<?php
// Preparar conexión MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión, si falla mostrar error
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Ejecutar consulta SQL para obtener entradas y guardar resultado
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lista de Tareas</title>
  </head>
  <body>
      <h1>¡Lista de Tareas Genial :D!</h1>
      <p>Para nuestra increíble guía de ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Verificar si hay resultados
          if ($result->num_rows > 0) {
              // Recorrer cada item del resultado
              foreach ($result as $entry) {
                  echo "<li>";
                  // Mostrar nombre y usar htmlspecialchars para evitar XSS
                  echo htmlspecialchars($entry["name"]);

                  // Mostrar estado de completado
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completado)</strong>";
                  } else {
                      echo " <strong>(Incompleto)</strong>";
                  }

                  // Mostrar fecha de creación
                  echo " - Fecha de creación: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si no hay resultados, mostrar mensaje por defecto
              echo "<li>No se encontraron tareas.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Cerrar conexión a la base de datos
$conn->close();
?>
```

Guarda y cierra nano con `CTRL + X`, luego `Y` y `ENTER`.

#### Probando el sitio web

¡Has seguido todos los pasos y configurado un sitio web de prueba que usa todo el stack LAMP!

Ahora deberías poder acceder al sitio vía el dominio (usando `http`/puerto 80) que definiste en el archivo de host virtual, en este ejemplo `zapdocs.example.com`. El resultado final debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusión

¡Felicidades, has instalado y configurado exitosamente el stack LAMP! Como siguiente paso, te **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura a tus sitios. Consulta nuestra [guía Certbot](vserver-linux-certbot.md) enfocada en el **Plugin Apache** y sigue la configuración interactiva para instalar rápido y fácil un certificado para tu dominio.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte! 🙂

<InlineVoucher />