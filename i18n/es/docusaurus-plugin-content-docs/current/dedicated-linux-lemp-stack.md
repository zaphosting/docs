---
id: dedicated-linux-lemp-stack
title: "Configura un Stack LEMP en un Servidor Linux - Despliega Aplicaciones Web de Alto Rendimiento"
description: "Descubre cómo configurar un stack LEMP para alojar sitios web dinámicos en PHP en servidores Linux con ejemplos prácticos → Aprende más ahora"
sidebar_label: Stack Web LEMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El **stack LEMP** es una selección popular de software open-source que se configura junto para permitir un alojamiento sencillo de sitios web dinámicos, con un enfoque particular en sitios y aplicaciones PHP. El acrónimo significa: **L**inux como sistema operativo, "**E**ngine x" (nginx) como servidor web, **M**ySQL como base de datos y finalmente **P**HP para el procesamiento. En esta guía, cubriremos el proceso de configurar un stack LEMP en un servidor dedicado Linux, con un desglose detallado y un ejemplo de cómo montar un sitio web de lista de tareas.

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

En esta guía usaremos Ubuntu como distribución Linux. Las instrucciones son iguales para Debian y deberían ser similares para otras distribuciones, aunque la sintaxis de algunos comandos puede variar un poco. Asegúrate de tener un sistema operativo instalado y estar conectado al servidor vía SSH.

Como siempre, antes de proceder con la instalación, asegúrate de que todos los paquetes estén actualizados con el siguiente comando:
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

Nginx es el servidor web que se usará para procesar las peticiones entrantes y servir las respuestas. Instálalo con el siguiente comando.
```
sudo apt install nginx
```

Una vez instalado, debes asegurarte de que las reglas apropiadas del firewall estén creadas para que el servidor web sea accesible desde internet. En este ejemplo, usaremos el **firewall UFW** ya que Nginx tiene una aplicación registrada para este.

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

Ahora crea la regla para permitir Nginx y luego verifica que las reglas estén presentes.
```
# Crear regla para permitir Nginx
sudo ufw allow in "Nginx Full"

# Verificar reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles ejecutando el comando `ufw app list`. En el ejemplo anterior, usar `Nginx Full` significa que se crean reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas `Nginx` y `Nginx (v6)` con acción `ALLOW`, lo que confirma que el firewall está listo. También verás otras reglas que hayas configurado antes, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Con el firewall abierto para Nginx, ahora debes asegurarte de que Nginx funcione. Puedes hacerlo intentando acceder a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, deberías ver una página de bienvenida por defecto. Si no, revisa el estado del servicio con el comando: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configurando MySQL

Ahora instalarás y configurarás un servidor MySQL que actuará como base de datos para almacenar datos de forma persistente y relacional. Instálalo con el siguiente comando.
```
sudo apt install mysql-server
```

Cuando termine, se recomienda ejecutar un script de instalación segura para mantener tu instancia de MySQL protegida. Es opcional pero muy recomendable. Puedes hacerlo con el comando `sudo mysql_secure_installation`.

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará sobre eliminar el usuario `anonymous` y deshabilitar el acceso root remoto. Recomendamos aceptar con `Y` por seguridad. Esto elimina el usuario de prueba y asegura que el usuario root solo pueda usarse localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará sobre eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente recomendamos aceptar con `Y` ya que la base de datos de prueba no es necesaria y debes recargar los privilegios para que los cambios tengan efecto.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica si MySQL está corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Puedes salir con el comando `quit` cuando quieras.

### Configurando PHP

La última dependencia del stack LEMP es PHP y para Nginx, esto requiere usar un programa externo llamado `php-fpm` (PHP FastCGI Process Manager). Nginx se configura para pasar las peticiones a `php-fpm` antes de responderlas cuando se usan bloques de servidor.

El siguiente comando instala la última versión de php-fpm junto con un plugin PHP para MySQL, para que Nginx funcione con PHP y PHP pueda usar MySQL.
```
sudo apt install php-fpm php-mysql
```

Confirma que la instalación fue exitosa verificando la versión. Si ves una versión, significa que PHP funciona correctamente.
```
php -v
```

:::tip Extensiones PHP
Para casos avanzados, puede que necesites extensiones PHP adicionales para funcionalidades extra. Puedes ver una lista ejecutando `apt search php- | less`.

Usa las flechas para navegar y presiona `Q` para salir. Para instalar una extensión, usa el comando apt install así. Puedes instalar varias extensiones separadas por espacio para acelerar la instalación.

```
sudo apt install [php_extension] [...]
```
:::

### Creando el Sitio Web de Prueba

Con la instalación de cada dependencia LEMP completa, ahora crearemos un sitio web de prueba para mostrar cómo el stack LEMP funciona junto para formar una solución web dinámica genial. Esto es completamente opcional, pero útil para entender cómo usar estas herramientas para montar tus propios sitios.

En este ejemplo, crearemos un pequeño sitio web de lista de tareas en PHP que obtendrá y mostrará las tareas. Esto se almacenará en una tabla MySQL y se servirá a través de Nginx.

También usaremos un dominio de prueba `zapdocs.example.com` durante todo el proceso, ya que en un escenario real probablemente usarías un dominio. **Debes** configurar un registro DNS tipo `A` para el dominio que apunte a la dirección IP de tu servidor. Si necesitas ayuda, consulta nuestra guía [Registros de Dominio](domain-records.md).

:::note
Puedes optar por no usar un dominio y reemplazar las menciones de `[your_domain]` por un nombre normal. Entonces accederías al sitio vía IP. Pero ten en cuenta que al crear el archivo del bloque de servidor más adelante, deberás eliminar el parámetro `server_name`.
:::

#### Configurando Nginx

Normalmente, en servidores web, todos los archivos y datos del sitio se almacenan bajo el directorio `/var/www`. Por defecto, Nginx suele venir con un directorio `html` que contiene una página por defecto. Para mantener todo organizado, especialmente si alojas varios sitios en una sola instancia Nginx, recomendamos crear un directorio individual para cada sitio.

Para esto, simplemente crea una nueva carpeta en `/var/www/[your_domain]` para cada dominio. En este ejemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ahora crea un nuevo archivo de configuración de bloque de servidor Nginx en el directorio `sites-available` para este dominio y carpeta.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Usa la plantilla abajo y cópiala en el editor nano, reemplazando `[your_domain]` por el dominio que uses.
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
Es importante cambiar `[your_phpversion]` por la versión actual de PHP instalada. Para verificar, ejecuta `php -v` que debería devolver una versión, por ejemplo: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

En este ejemplo, pondrías `8.3` como subversión mayor, así la línea queda: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Este nuevo archivo de bloque de servidor maneja peticiones en el puerto 80 (HTTP) y verifica si la petición coincide con el `server_name` especificado, en este caso tu dominio. También indica que la carpeta `/var/www/[your_domain]` que creaste antes se usará para servir archivos.

Guarda el archivo y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

El último paso para la configuración de Nginx es activar la configuración creando un enlace simbólico en el directorio `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Sin Dominio Usado
Si **no** usas un dominio, elimina la línea `server_name` o coméntala poniendo un `#` al inicio. También deberás deshabilitar el bloque de servidor por defecto con el comando `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Recomendamos usar el comando `sudo nginx -t` para asegurarte de que el archivo no tenga errores de sintaxis.

Finalmente, reinicia Nginx para que el nuevo host virtual tenga efecto con: `sudo systemctl reload nginx`.

#### Creando el Sitio Web

Ahora que configuraste Nginx con el nuevo bloque de servidor y carpeta de documentos, es hora de crear el sitio web que se servirá. Por ahora la carpeta está vacía, así que no se mostrará nada. Crearemos un pequeño sitio de lista de tareas como mencionamos antes para este dominio.

##### Preparando la Base de Datos

Para empezar, vamos a crear una nueva base de datos y tabla para almacenar cada tarea. Entra a tu servidor MySQL.
```
sudo mysql -u root
```

Ahora crea una base de datos `todowebsite` y una tabla `todoitems` dentro de ella.
```
# Crear base de datos
CREATE DATABASE todowebsite;

# Usar la nueva base de datos
USE todowebsite;

# Crear tabla de items en la base de datos
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Con la tabla lista, crea algunas entradas de ejemplo.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Crear Guía ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Comprar un Servidor ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Unirse al Discord de ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('¡Que tengas un gran día!', 0);
```

Por último, crea un usuario dedicado `todo` que se usará solo para este sitio.
```
# Crear usuario dedicado
# Reemplaza [your_password] con tu propia contraseña
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Asignar privilegios al usuario (copiar como un solo bloque)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recargar privilegios
FLUSH PRIVILEGES;
```

Con la base de datos preparada y el usuario listo, puedes salir del terminal MySQL con el comando `quit`.

##### Archivos PHP del Sitio Web

La última parte de este ejemplo es crear el archivo PHP para la página de tareas. Esto se hará con un nuevo archivo `index.php` en el directorio `/var/www/[your_domain]` que creaste antes. Abre el editor nano para crear el archivo.
```
sudo nano /var/www/[your_domain]/index.php
```

Abajo tienes un snippet de código simple que puedes pegar en nano para una página básica de tareas que devuelve los ítems almacenados en la base de datos. La primera sección PHP establece la conexión MySQL.

:::important
Debes cambiar `[your_password]` por la contraseña que configuraste para el usuario `todo` antes.
:::

La sección HTML contiene la página principal que crea una lista desordenada, recorriendo cada resultado.

```
<?php
// Preparar conexión MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa, si no mostrar error
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Ejecutar consulta SQL para obtener entradas de la tabla y guardarlas en $result
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
      <p>Para nuestra increíble guía de ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Verificar si hay resultados
          if ($result->num_rows > 0) {
              // Recorrer cada ítem del resultado
              foreach ($result as $entry) {
                  echo "<li>";
                  // Mostrar el nombre usando htmlspecialchars para evitar XSS
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

Una vez pegado en nano, guarda el archivo y sal con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

#### Probando el Sitio Web

¡Has seguido todos los pasos y configurado un sitio web de tareas que usa todos los componentes del stack LEMP!

Ahora deberías poder acceder al sitio vía el dominio (usando `http`/puerto 80) que definiste antes en el archivo del bloque de servidor, que en este ejemplo es `zapdocs.example.com`. El resultado final debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusión

¡Felicidades, has instalado y configurado exitosamente el stack LEMP! Como siguiente paso, **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura a tus sitios. Consulta nuestra [guía Certbot](dedicated-linux-certbot.md) enfocada en el **plugin Nginx** y sigue la configuración interactiva para instalar un certificado rápido y fácil para tu dominio.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂