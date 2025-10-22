---
id: dedicated-linux-lemp-stack
title: "Servidor Dedicado: Configurar stack LEMP - Linux, Nginx, MySQL, PHP"
description: "Descubre cómo configurar un stack LEMP para alojar sitios web dinámicos en PHP en servidores Linux con ejemplos prácticos → Aprende más ahora"
sidebar_label: Stack Web LEMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El stack **LEMP** es una selección popular de software open-source que se configura junto para permitir un alojamiento sencillo de sitios web dinámicos, con un enfoque especial en sitios y apps PHP. El acrónimo significa: **L**inux como sistema operativo, "**E**ngine x" (nginx) como servidor web, **M**ySQL como base de datos y finalmente **P**HP para el procesamiento. En esta guía, cubriremos el proceso de configurar un stack LEMP en un Servidor Dedicado Linux, con un desglose detallado y un ejemplo de cómo montar un sitio web de lista de tareas.

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

La instalación se puede dividir fácilmente en cada dependencia principal del stack LEMP, comenzando con el servidor web Nginx, seguido por la base de datos MySQL y finalmente PHP. Durante la instalación, configuraremos un sitio web de prueba escrito en PHP que accederá a la base de datos MySQL. Cada petición web será procesada y servida a través del servidor web Nginx.

### Configurando Nginx

Nginx es el servidor web que procesará las peticiones entrantes y servirá las respuestas. Instálalo con el siguiente comando.
```
sudo apt install nginx
```

Una vez instalado, debes asegurarte de que las reglas del firewall adecuadas estén creadas para que el servidor web sea accesible desde internet. En este ejemplo usaremos el **firewall UFW** ya que Nginx tiene una aplicación registrada para este.

Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall. Puedes aprender más sobre firewalls en Linux en nuestra guía [Gestionar Firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté activado y que exista una regla para SSH.
```
# Crear regla para permitir SSH
sudo ufw allow OpenSSH

# Activar firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas el firewall UFW! Si no la tienes, **no** podrás conectarte por SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Nginx y luego verifica que las reglas estén activas.
```
# Crear regla para permitir Nginx
sudo ufw allow in "Nginx Full"

# Verificar reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles ejecutando el comando `ufw app list`. En el ejemplo anterior, usar `Nginx Full` significa que se crean reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas `Nginx` y `Nginx (v6)` con acción `ALLOW`, lo que confirma que el firewall está listo. También verás otras reglas que hayas configurado antes, incluida la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Con el firewall abierto para Nginx, ahora asegúrate de que Nginx funcione. Puedes probar accediendo a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, verás una página de bienvenida por defecto. Si no, revisa el estado del servicio con: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configurando MySQL

Ahora instalarás y configurarás un servidor MySQL que actuará como base de datos para almacenar datos de forma persistente y relacional. Instálalo con:
```
sudo apt install mysql-server
```

Cuando termine, se recomienda ejecutar un script de instalación segura para mantener tu instancia MySQL protegida. Es opcional pero muy recomendado. Ejecuta: `sudo mysql_secure_installation`.

Este script te guiará paso a paso. Primero te preguntará sobre la validación de contraseñas. Recomendamos elegir `Y` para permitir solo contraseñas seguras y luego seleccionar `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará si quieres eliminar el usuario `anonymous` y deshabilitar el acceso remoto para root. Recomendamos aceptar con `Y` por seguridad. Esto elimina usuarios de prueba y limita el acceso root solo localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente te preguntará si quieres eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente, recomendamos aceptar con `Y` para limpiar y aplicar cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica que MySQL esté corriendo intentando iniciar sesión: `sudo mysql -u root`. Si ves un mensaje de bienvenida, todo está bien. Sal con el comando `quit` cuando quieras.

### Configurando PHP

La última dependencia del stack LEMP es PHP y para Nginx requiere usar un programa externo llamado `php-fpm` (PHP FastCGI Process Manager). Nginx se configura para pasar las peticiones a `php-fpm` antes de responder.

Instala la última versión de php-fpm junto con el plugin PHP para MySQL para que Nginx y PHP trabajen juntos y PHP pueda usar MySQL.
```
sudo apt install php-fpm php-mysql
```

Confirma que la instalación fue exitosa comprobando la versión. Si ves un número de versión, PHP funciona correctamente.
```
php -v
```

:::tip Extensiones PHP
Para casos avanzados, puede que necesites extensiones PHP adicionales para más funcionalidades. Puedes ver una lista ejecutando `apt search php- | less`.

Usa las flechas para navegar y presiona `Q` para salir. Para instalar una extensión, usa:
```
sudo apt install [php_extension] [...]
```
Puedes instalar varias a la vez separándolas con espacios.
:::

### Creando sitio web de prueba

Con todas las dependencias LEMP instaladas, ahora crearemos un sitio web de prueba para mostrar cómo el stack funciona junto para formar una solución web dinámica. Esto es opcional, pero útil para entender cómo usar estas herramientas para tus propios sitios.

En este ejemplo, crearemos un pequeño sitio de lista de tareas en PHP que recupera y muestra entradas. Los datos se almacenan en una tabla MySQL y se sirven a través de Nginx.

Usaremos un dominio de prueba `zapdocs.example.com` durante todo el ejemplo, ya que en un caso real usarías un dominio. **Debes** configurar un registro DNS tipo `A` para el dominio apuntando a la dirección IP de tu servidor. Si necesitas ayuda, consulta nuestra guía [Registros de Dominio](domain-records.md#a-records).

:::note
Puedes no usar un dominio y reemplazar `[your_domain]` por un nombre cualquiera. Accederías al sitio vía IP. Pero al crear el archivo del bloque de servidor, elimina el parámetro `server_name`.
:::

#### Configurando Nginx

Normalmente, todos los archivos y datos web se almacenan en `/var/www`. Por defecto, Nginx trae un directorio `html` con una página por defecto. Para mantener todo organizado, especialmente si alojas varios sitios en un solo Nginx, recomendamos crear un directorio individual para cada sitio.

Crea una carpeta nueva en `/var/www/[your_domain]` para cada dominio. En este ejemplo: `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ahora crea un archivo de configuración para el bloque de servidor en `sites-available` para este dominio y carpeta.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Copia esta plantilla en el editor nano, reemplazando `[your_domain]` por tu dominio.
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important Versión PHP
Es importante cambiar `[your_phpversion]` por la versión PHP instalada. Para saberla, ejecuta `php -v`, que mostrará algo como: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

En este ejemplo, usarías `8.3` como subversión mayor, así la línea queda: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Este archivo maneja peticiones al puerto 80 (HTTP) y verifica que la petición coincida con el `server_name` (tu dominio). También indica que la carpeta `/var/www/[your_domain]` será usada para servir archivos.

Guarda y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

El último paso para configurar Nginx es activar esta configuración creando un enlace simbólico en `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Sin dominio
Si **no** usas dominio, elimina o comenta la línea `server_name` con un `#`. También desactiva el bloque por defecto con: `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Recomendamos usar `sudo nginx -t` para verificar que no haya errores de sintaxis.

Finalmente, reinicia Nginx para aplicar los cambios con: `sudo systemctl reload nginx`.

#### Creando el sitio web

Con Nginx configurado y la carpeta lista, ahora crearemos el sitio web real que se servirá. La carpeta está vacía, así que nada se mostrará aún. Crearemos un sitio de lista de tareas como mencionamos antes.

##### Preparando la base de datos

Primero, crea una base de datos y tabla para almacenar cada tarea. Entra a MySQL:
```
sudo mysql -u root
```

Crea la base de datos `todowebsite` y la tabla `todoitems`.
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

Ahora inserta algunas tareas de ejemplo.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Finalmente, crea un usuario dedicado `todo` para este sitio.
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

Aquí tienes un código simple para mostrar la lista de tareas que están en la base de datos. La primera parte PHP conecta con MySQL.

:::important
Debes cambiar `[your_password]` por la contraseña que asignaste al usuario `todo`.
:::

La parte HTML crea una lista no ordenada que recorre los resultados.

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
    die("Connection failed: " . $conn->connect_error);
}

// Ejecutar consulta SQL para obtener entradas y guardar resultado
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
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
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Mostrar fecha de creación
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Si no hay resultados, mostrar mensaje por defecto
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Cerrar conexión a base de datos
$conn->close();
?>
```

Copia esto en nano, guarda con `CTRL + X`, confirma con `Y` y presiona `ENTER`.

#### Probando el sitio web

¡Has configurado con éxito un sitio de lista de tareas que usa todo el stack LEMP!

Ahora deberías poder acceder al sitio vía el dominio (usando `http`/puerto 80) que definiste en el bloque de servidor, en este ejemplo `zapdocs.example.com`. El resultado final debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusión

¡Felicidades, has instalado y configurado el stack LEMP con éxito! Como siguiente paso, **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura a tus sitios. Consulta nuestra [guía Certbot](vserver-linux-certbot.md#webroot-plugin) enfocada en el **plugin Nginx** y sigue la configuración interactiva para instalar un certificado rápido y fácil para tu dominio.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂.

<InlineVoucher />