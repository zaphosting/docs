---
id: vserver-linux-lamp-stack
title: "Configura un Stack LAMP en un Servidor Linux - Potencia Aplicaciones PHP Clásicas"
description: "Descubre cómo configurar un stack LAMP para alojar sitios web dinámicos PHP en un VPS Linux de forma eficiente → Aprende más ahora"
sidebar_label: Stack Web LAMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El stack **LAMP** es una selección popular de software open-source que se configura junto para permitir un alojamiento sencillo de sitios web dinámicos, con un enfoque particular en sitios y aplicaciones PHP. El acrónimo significa: **L**inux como sistema operativo, **A**pache como servidor web, **M**ySQL como base de datos y finalmente **P**HP para el procesamiento. En esta guía, cubriremos el proceso de configurar un stack LAMP en un VPS Linux, con un desglose detallado y un ejemplo de cómo montar un sitio web de lista de tareas.

<InlineVoucher />

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

La instalación se puede dividir fácilmente en cada dependencia principal del stack LAMP, comenzando con el servidor web Apache, seguido por la base de datos MySQL y finalmente PHP. Durante la instalación, configuraremos un sitio web de prueba escrito en PHP que accederá a la base de datos MySQL. Cada solicitud web será procesada y servida a través del servidor web Apache.

### Configurando Apache

Apache es el servidor web que se usará para procesar las solicitudes entrantes y servir las respuestas. Instálalo con el siguiente comando.
```
sudo apt install apache2
```

Una vez instalado, debes asegurarte de que las reglas adecuadas del firewall estén creadas para que el servidor web sea accesible desde internet. En este ejemplo, usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para esto.

Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall. Puedes aprender más sobre firewalls en Linux en nuestra [guía de gestión de firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté activado y que también exista una regla para SSH.
```
# Crea una regla para permitir SSH
sudo ufw allow OpenSSH

# Activa el firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla configurada para SSH si usas el firewall UFW! Si no la tienes, **no** podrás conectarte por SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén presentes.
```
# Crea una regla para permitir Apache
sudo ufw allow in "Apache Full"

# Verifica las reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles ejecutando el comando `ufw app list`. En el ejemplo anterior, usar `Apache Full` significa que se crean reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas `Apache` y `Apache (v6)` con acciones `ALLOW`, lo que confirma que el firewall está listo. También verás otras reglas que hayas configurado previamente, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con el firewall abierto para Apache, ahora debes asegurarte de que Apache funcione correctamente. Puedes hacerlo intentando acceder a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, deberías ver una página de bienvenida por defecto. Si no, revisa el estado del servicio con el siguiente comando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando MySQL

Ahora instalarás y configurarás un servidor MySQL que actuará como tu base de datos para almacenar datos de forma persistente y relacional. Instálalo con el siguiente comando.
```
sudo apt install mysql-server
```

Cuando termine, se recomienda ejecutar un script de instalación segura que garantiza que tu instancia de MySQL permanezca segura. Es opcional pero muy recomendado. Puedes ejecutarlo con el comando `sudo mysql_secure_installation`.

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras en el futuro y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará sobre eliminar el usuario `anonymous` y deshabilitar el login remoto para root. Para ambos recomendamos aceptar con `Y` por razones de seguridad. Esto asegura que el usuario de prueba sea eliminado y que el usuario principal `root` solo pueda usarse localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará sobre eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente recomendamos aceptar con `Y` ya que la tabla de prueba no es necesaria y debes recargar las tablas para que los cambios tengan efecto.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica si la base de datos MySQL está corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Puedes salir con el comando `quit` cuando quieras.

### Configurando PHP

La última dependencia del stack LAMP es PHP y su instalación es bastante sencilla. El siguiente comando instala PHP junto con un plugin para Apache y MySQL, para que Apache pueda trabajar con PHP y PHP pueda usar MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirma que la instalación fue exitosa comprobando la versión. Si ves una versión, significa que PHP funciona correctamente.
```
php -v
```

:::tip Extensiones PHP
Para casos avanzados, puede que necesites extensiones PHP adicionales para funcionalidades extra. Puedes ver una lista ejecutando `apt search php- | less`.

Usa las flechas para desplazarte y presiona `Q` para salir. Para instalar una extensión, usa el comando apt install así. Puedes instalar varias extensiones a la vez separándolas con espacios para acelerar la instalación.

```
sudo apt install [php_extension] [...]
```
:::

Recomendamos ajustar el índice de directorio para que los archivos `index.php` tengan prioridad sobre los `.html` por defecto. Abre el archivo con el siguiente comando.
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

En el editor nano, elimina `index.php` y muévelo al inicio de la lista, así:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Guarda el archivo y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`. Ahora reinicia Apache para que los cambios tengan efecto con `sudo systemctl restart apache2`.

### Creando el Sitio Web de Prueba

Con la instalación de cada dependencia LAMP completa, ahora crearemos un sitio web de prueba para mostrar cómo el stack LAMP funciona junto para formar una solución web dinámica genial. Esto es completamente opcional, pero útil para entender cómo usar estas herramientas para montar tus propios sitios.

En este ejemplo, crearemos un pequeño sitio de lista de tareas con PHP que obtendrá y mostrará las entradas de tareas. Esto se almacenará en una tabla MySQL y será servido a través de Apache.

También usaremos un dominio de prueba `zapdocs.example.com` durante todo el proceso, ya que en un escenario real probablemente usarías un dominio. **Debes** configurar un registro DNS tipo `A` para el dominio que apunte a la dirección IP de tu servidor. Si necesitas ayuda con esto, consulta nuestra guía de [Registros de Dominio](domain-records.md).

:::note
Puedes optar por no usar un dominio y reemplazar las menciones de `[your_domain]` con un nombre normal. Entonces accederías al sitio vía IP. Pero ten en cuenta que al crear el archivo de host virtual más adelante, deberías eliminar el parámetro `ServerName`.
:::

#### Configurando Apache

Normalmente, en servidores web, todos los archivos y datos de los sitios se almacenan bajo el directorio `/var/www`. Por defecto, Apache suele venir con un directorio `html` que contiene una página por defecto. Para mantener todo organizado, especialmente si alojas muchos sitios en una sola instancia Apache, recomendamos configurar cada sitio en un directorio o carpeta individual.

Para esto, simplemente crea una nueva carpeta en `/var/www/[your_domain]` para cada dominio de sitio. En este ejemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ahora crearás un nuevo archivo de configuración de host virtual Apache en el directorio `sites-available` para este dominio y carpeta.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Usa la plantilla abajo y cópiala en el editor nano, reemplazando `[your_domain]` con el dominio que uses.
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

Este nuevo archivo de host virtual maneja las solicitudes por el puerto 80 (HTTP) y verifica si la solicitud coincide con el `ServerName` especificado, en este caso tu dominio. También apunta que la carpeta `/var/www/[your_domain]` que creaste antes debe usarse para servir archivos.

Guarda el archivo y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`. Recomendamos usar el comando `sudo apache2ctl configtest` para asegurarte de que el archivo no tenga errores de sintaxis.

El paso final para la configuración de Apache es habilitar el nuevo host virtual con `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Sin Dominio Usado
Si **no** usas un dominio, elimina la línea `ServerName` o coméntala poniendo un `#` al inicio. También tendrás que deshabilitar el host virtual por defecto con `sudo a2dissite 000-default`.
:::

Finalmente reinicia Apache para que el nuevo host virtual tenga efecto con: `sudo systemctl restart apache2`.

#### Creando el Sitio Web

Ahora que configuraste Apache con el nuevo host virtual y carpeta de documentos, es hora de crear el sitio web que se servirá. Por ahora la carpeta está vacía, así que no se servirá nada. Crearemos un pequeño sitio de lista de tareas como mencionamos antes para este dominio.

##### Preparando la Base de Datos

Para empezar, vamos a crear una nueva base de datos y tabla para almacenar cada ítem de la lista. Inicia sesión en tu servidor MySQL.
```
sudo mysql -u root
```

Ahora crea una base de datos `todowebsite` y una tabla `todoitems` dentro de ella.
```
# Crear base de datos
CREATE DATABASE todowebsite;

# Usar la nueva base de datos
USE todowebsite;

# Crear una tabla de ítems en la base de datos
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Con la tabla lista, crea algunas entradas de ejemplo por ahora.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Crear Guía ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Comprar un servidor ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Unirme al Discord de ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('¡Que tengas un gran día!', 0);
```

Por último, crea un usuario dedicado `todo` que se usará específicamente para este sitio.
```
# Crear usuario dedicado
# Reemplaza [your_password] con tu propia contraseña
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Asignar privilegios al usuario (copiar todo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recargar privilegios
FLUSH PRIVILEGES;
```

Con la base de datos preparada y el usuario listo, puedes salir del terminal MySQL con el comando `quit` cuando quieras.

##### Archivos PHP del Sitio Web

La parte final de este ejemplo es configurar el archivo PHP real para la página de tareas. Esto se hará creando un nuevo archivo `index.php` en el directorio `/var/www/[your_domain]` que creaste antes. Abre el editor nano para crear el archivo.
```
sudo nano /var/www/[your_domain]/index.php
```

Abajo tienes un snippet de código simple que puedes pegar en el editor nano para una página básica de tareas que devuelve los ítems almacenados en la base de datos. La primera sección PHP establece la conexión MySQL.

:::important
Debes cambiar el campo `[your_password]` por la contraseña que configuraste para el usuario `todo` antes.
:::

La sección HTML siguiente contiene la página principal que crea una lista desordenada, recorriendo cada resultado.

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
      <p>Para nuestra increíble guía de ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Verificar si hay resultados
          if ($result->num_rows > 0) {
              // Recorrer cada ítem del array devuelto por la consulta
              foreach ($result as $entry) {
                  echo "<li>";
                  // Mostrar el nombre y usar htmlspecialchars para prevenir XSS (cross-site scripting)
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

Una vez copiado en nano, guarda el archivo y sal con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

#### Probando el Sitio Web

¡Has seguido todos los pasos y configurado un sitio web de prueba que utiliza todos los aspectos del stack LAMP!

Ahora deberías poder acceder al sitio vía el dominio (usando `http`/puerto 80) que definiste antes en el archivo de host virtual, que en este ejemplo es `zapdocs.example.com`. El resultado final debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusión

¡Felicidades, has instalado y configurado exitosamente el stack LAMP! Como siguiente paso, **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura a tus sitios web. Consulta nuestra [guía Certbot](dedicated-linux-certbot.md) enfocada en el **plugin de Apache** y sigue la configuración interactiva para instalar un certificado rápido y fácil para tu dominio.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte! 🙂

<InlineVoucher />