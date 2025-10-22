---
id: dedicated-linux-lamp-stack
title: "Servidor Dedicado: Configurar stack LAMP - Linux, Apache, MySQL, PHP"
description: "Descubre cómo configurar un stack LAMP para alojar sitios web dinámicos en PHP en servidores Linux de forma eficiente → Aprende más ahora"
sidebar_label: Stack Web LAMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El stack **LAMP** es una selección popular de software open-source que se configura junto para permitir un alojamiento sencillo de sitios web dinámicos, con un enfoque especial en sitios y apps PHP. El acrónimo significa: **L**inux como sistema operativo, **A**pache como servidor web, **M**ySQL como base de datos y finalmente **P**HP para el procesamiento. En esta guía, cubriremos el proceso de configurar un stack LAMP en un Servidor Dedicado Linux, con un desglose detallado y un ejemplo de cómo montar un sitio web de lista de tareas.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

En esta guía usaremos Ubuntu como distribución Linux. Las instrucciones son iguales para Debian y deberían ser similares para otras distribuciones, aunque la sintaxis de algunos comandos puede variar un poco. Asegúrate de tener un sistema operativo instalado y estar conectado al servidor vía SSH.

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

La instalación se puede dividir fácilmente en cada dependencia principal del stack LAMP, comenzando con el servidor web Apache, seguido por la base de datos MySQL y finalmente PHP. Durante la instalación, configuraremos un sitio web de prueba escrito en PHP que accederá a la base de datos MySQL. Por último, cada petición web será procesada y servida a través del servidor web Apache.

### Configurando Apache

Apache es el servidor web que procesará las peticiones entrantes y servirá las respuestas. Instálalo con el siguiente comando.
```
sudo apt install apache2
```

Una vez instalado, debes asegurarte de que las reglas del firewall adecuadas estén creadas para que el servidor web sea accesible desde internet. En este ejemplo, usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para esto.

Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall. Puedes aprender más sobre firewalls en Linux en nuestra [guía de gestión de firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté activado y que también exista una regla para SSH.
```
# Crear una regla para permitir SSH
sudo ufw allow OpenSSH

# Activar firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas el firewall UFW! Si no la tienes, **no** podrás conectarte vía SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén presentes.
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

Con el firewall abierto para Apache, ahora asegúrate de que Apache funcione. Puedes hacerlo intentando acceder a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, deberías ver una página de bienvenida por defecto. Si no, revisa el estado del servicio con el comando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando MySQL

Ahora instalarás y configurarás un servidor MySQL que actuará como tu base de datos para almacenar datos de forma persistente y relacional. Instálalo con el siguiente comando.
```
sudo apt install mysql-server
```

Cuando termine, se recomienda ejecutar un script de instalación segura para mantener tu instancia MySQL protegida. Es opcional pero muy recomendable. Puedes hacerlo con el comando `sudo mysql_secure_installation`.

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará sobre eliminar el usuario `anonymous` y deshabilitar el login remoto para root. Recomendamos aceptar ambas con `Y` por seguridad. Esto elimina el usuario de prueba y asegura que el usuario root solo pueda usarse localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará sobre eliminar la base de datos `test` y recargar las tablas de privilegios. También recomendamos aceptar con `Y` ya que la tabla de prueba no es necesaria y debes recargar los privilegios para que los cambios apliquen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica si la base de datos MySQL está corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Puedes salir con el comando `quit` cuando quieras.

### Configurando PHP

La última dependencia del stack LAMP es PHP y es bastante simple de instalar. El siguiente comando instala PHP junto con un plugin para Apache y MySQL, para que Apache funcione con PHP y PHP pueda usar MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirma que la instalación fue exitosa comprobando la versión. Si ves una versión, PHP funciona correctamente.
```
php -v
```

:::tip Extensiones PHP
Para casos avanzados, puede que necesites extensiones PHP adicionales para funcionalidades extra. Puedes ver una lista ejecutando `apt search php- | less`.

Usa las flechas para navegar y presiona `Q` para salir. Para instalar una extensión, usa el comando apt install así. Puedes instalar varias a la vez separándolas con espacio para acelerar el proceso.

```
sudo apt install [php_extension] [...]
```
:::

Recomendamos ajustar el índice de directorio para que los archivos `index.php` tengan prioridad sobre los `.html` por defecto. Abre el archivo con:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

En el editor nano, elimina `index.php` y muévelo al inicio de la lista, así:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Guarda y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`. Ahora reinicia Apache para aplicar los cambios con `sudo systemctl restart apache2`.

### Creando sitio web de prueba

Con la instalación de cada dependencia LAMP completa, ahora crearemos un sitio web de prueba para mostrar cómo el stack LAMP funciona junto para formar una solución web dinámica genial. Esto es totalmente opcional, pero útil para entender cómo usar estas herramientas para montar tus propios sitios.

En este ejemplo, crearemos un pequeño sitio de lista de tareas en PHP que recuperará y mostrará las entradas de tareas. Esto se almacenará en una tabla MySQL y se servirá a través de Apache.

También usaremos un dominio de prueba `zapdocs.example.com` durante todo el proceso, ya que en un escenario real usarías un dominio. **Debes** configurar un registro DNS tipo `A` para el dominio que apunte a la dirección IP de tu servidor. Si necesitas ayuda, consulta nuestra guía de [Registros de dominio](domain-records.md#a-records).

:::note
Puedes optar por no usar un dominio y reemplazar las menciones de `[your_domain]` por un nombre normal. Entonces accederías al sitio vía IP. Pero ten en cuenta que al crear el archivo de host virtual más adelante, deberás eliminar el parámetro `ServerName`.
:::

#### Configurando Apache

Normalmente, en servidores web, todos los archivos y datos de los sitios se almacenan bajo el directorio `/var/www`. Por defecto, Apache suele venir con un directorio `html` que contiene una página por defecto. Para mantener todo organizado, especialmente si alojas varios sitios en una sola instancia Apache, recomendamos crear un directorio individual para cada sitio.

Para esto, simplemente crea una carpeta nueva en `/var/www/[your_domain]` para cada dominio. En este ejemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ahora crea un nuevo archivo de configuración de host virtual Apache en el directorio `sites-available` para este dominio y carpeta.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Usa la plantilla abajo y cópiala en el editor nano, reemplazando `[your_domain]` por el dominio que uses.
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

Este nuevo archivo de host virtual maneja peticiones por el puerto 80 (HTTP) y verifica si la petición coincide con el `ServerName` especificado, en este caso tu dominio. También indica que la carpeta `/var/www/[your_domain]` que creaste antes se usará para servir archivos.

Guarda y sal de nano con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`. Recomendamos usar el comando `sudo apache2ctl configtest` para asegurarte de que el archivo no tenga errores de sintaxis.

El paso final para la configuración de Apache es habilitar el nuevo host virtual con `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Sin dominio usado
Si **no** usas un dominio, elimina la línea `ServerName` o coméntala poniendo un `#` al inicio. También tendrás que deshabilitar el host virtual por defecto con `sudo a2dissite 000-default`.
:::

Finalmente reinicia Apache para que el nuevo host virtual tome efecto con: `sudo systemctl restart apache2`.

#### Creando el sitio web

Ahora que configuraste Apache con el nuevo host virtual y carpeta de documentos, es hora de crear el sitio web que se servirá. Por ahora la carpeta está vacía, así que no se mostrará nada. Crearemos un pequeño sitio de lista de tareas como mencionamos antes para este dominio.

##### Preparando la base de datos

Para empezar, crea una base de datos y tabla para almacenar cada tarea. Entra a tu servidor MySQL.
```
sudo mysql -u root
```

Ahora crea una base de datos `todowebsite` y una tabla `todoitems` dentro.
```
# Crear base de datos
CREATE DATABASE todowebsite;

# Usar la base de datos nueva
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
INSERT INTO todoitems (name, is_completed) VALUES ('Crear guía ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Comprar un servidor ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Unirme al Discord de ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('¡Que tengas un gran día!', 0);
```

Por último, crea un usuario dedicado `todo` que se usará solo para este sitio.
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

Con la base de datos preparada y el usuario listo, puedes salir del terminal MySQL con el comando `quit`.

##### Archivos PHP del sitio web

La parte final de este ejemplo es crear el archivo PHP para la página de tareas. Esto se hará con un nuevo archivo `index.php` en el directorio `/var/www/[your_domain]` que creaste antes. Abre nano para crear el archivo.
```
sudo nano /var/www/[your_domain]/index.php
```

Abajo tienes un snippet simple que puedes pegar en nano para una página básica de tareas que muestra los items almacenados en la base de datos. La primera sección PHP establece la conexión MySQL.

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

// Ejecutar consulta SQL para obtener entradas y guardarlas en $result
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
                  // Mostrar el nombre y usar htmlspecialchars para evitar XSS
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

Una vez copiado en nano, guarda y sal con `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

#### Probando el sitio web

¡Has seguido todos los pasos y configurado un sitio web de prueba que usa todos los aspectos del stack LAMP!

Ahora deberías poder acceder al sitio vía el dominio (usando `http`/puerto 80) que definiste en el archivo de host virtual, que en este ejemplo es `zapdocs.example.com`. El resultado final debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusión

¡Felicidades, has instalado y configurado con éxito el stack LAMP! Como siguiente paso, **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura a tus sitios web. Consulta nuestra [guía Certbot](vserver-linux-certbot.md#webroot-plugin) enfocada en el **plugin Apache** y sigue la configuración interactiva para montar un certificado rápido y fácil para tu dominio.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte! 🙂

<InlineVoucher />