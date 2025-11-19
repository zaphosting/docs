---
id: dedicated-linux-plesk
title: "Servidor Dedicado: Instalación de Plesk"
description: "Descubre cómo gestionar sitios web y servidores de forma eficiente con la plataforma versátil de Plesk para todos los niveles → Aprende más ahora"
sidebar_label: Instalar Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Plesk es una plataforma completa para el alquiler de servidores y gestión de hosting web que permite a los usuarios administrar sitios web, servidores, cuentas de correo y más a través de una interfaz fácil de usar. Es una solución versátil, adecuada tanto para principiantes como para desarrolladores web y administradores de sistemas con experiencia. 



## Instalar Plesk

:::info
Antes de instalar, ejecuta apt update y apt upgrade para que los paquetes más recientes estén instalados en el servidor.
:::
Actualmente, Plesk solo puede instalarse en Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x y Virtuozzo Linux 7. La arquitectura debe ser de 64 bits.

La conexión al servidor puede hacerse, por ejemplo, vía Putty.


## Inicio de la instalación 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Instalación con un clic" default>

Para que Plesk se instale de forma totalmente automática con los componentes y funciones estándar usados por la mayoría de usuarios de Plesk, solo se necesita un comando:

>El instalador de Plesk siempre instala la versión más reciente de Plesk. Puede que las imágenes/capturas mostradas aquí no reflejen la versión más actual.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Si aparece este error: "-bash: curl: command not found" debes instalar el paquete con `apt install curl`.
:::

Una vez ejecutado este comando, normalmente tarda entre 15 y 60 minutos en instalar Plesk completamente.

:::info
La sesión SSH no debe cerrarse mientras el instalador esté activo. De lo contrario, se interrumpirá la instalación.
:::
Además, el servidor tendría que reinstalarse para reiniciar el instalador. 
Si el instalador se reinicia sin reinstalar primero el servidor, habrá problemas con funciones que no funcionen durante la instalación o en el panel de Plesk.

:::info
Puede parecer que el instalador está "congelado", pero en el 99% de los casos continuará después de unos minutos, ya que aún debe configurar paquetes/configuraciones, etc.
:::


La instalación termina cuando aparece esto

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Instalación Web">

Solo se necesitan unos pocos comandos para instalar Plesk vía Web. 

:::info
El instalador de Plesk siempre instala la versión más reciente de Plesk. Puede que las imágenes/capturas mostradas aquí no reflejen la versión más actual.
:::

Descarga el instalador de Plesk:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Asigna permisos correctos:

```
chmod +x plesk-installer
```

Inicia el instalador:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Instalación por Consola">

Solo se necesitan unos pocos comandos para instalar Plesk vía consola. 

:::info
El instalador de Plesk siempre instala la versión más reciente de Plesk. Puede que las imágenes/capturas mostradas aquí no reflejen la versión más actual.
:::

Descarga el instalador:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Asigna permisos correctos:

```
chmod +x plesk-installer
```

Inicia el instalador:

```
./plesk-installer
```

Una vez ejecutados los tres comandos iniciales, se debe aprobar la licencia con "F": 

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Después de aprobar, el sistema preguntará qué versión de Plesk instalar, por ejemplo Plesk Obsidian o Plesk Onyx. También indicará cuál es la más estable. Normalmente se usa una versión "estable" para producción. Como las opciones seleccionadas ya apuntan a la versión estable, confirma con "F".

La pregunta sobre si Plesk puede recopilar datos para mejorar el producto se responde con "Y" (Sí) o "n" (No).

Luego el sistema preguntará qué tipo de la versión seleccionada quieres instalar. Normalmente el tipo "Recommended" ya seleccionado es suficiente. Módulos que no se instalen ahora pero sean necesarios pueden añadirse luego en el panel de Plesk.

La siguiente pregunta sobre si se pueden instalar/actualizar paquetes se confirma con "F".

Ahora el instalador comienza la instalación.

:::info
La sesión SSH no debe cerrarse mientras el instalador esté activo. Esto causaría una interrupción y el servidor tendría que reinstalarse para reiniciar el instalador.
:::
Puede parecer que el instalador está "congelado", pero en el 99% de los casos continuará después de unos minutos, porque debe configurar paquetes/configuraciones, etc.

La instalación termina cuando aparece lo siguiente:

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Abrir el instalador web

Después de iniciar el instalador, la instalación se realiza en el navegador. La página de instalación se puede acceder vía https://IP:8447 o https://Dominio.xx:8447.

## El panel web de Plesk

:::info
Al acceder al panel web aparece: "Esta no es una conexión segura". Esto debe confirmarse la primera vez para que la página se abra.
:::

La interfaz web se puede acceder vía https://IP:8443 o https://Dominio.xx:8443 del servidor. Los datos de acceso son root/admin y la contraseña root actual. Alternativamente, puedes usar una de las URLs mostradas. Si ya no son válidas, puedes crear nuevas URLs con el comando ``plesk login``.

### Configuración

Una vez registrado con éxito, se debe configurar la cuenta de Admin. Hay que ingresar un nombre de contacto, un correo electrónico y una contraseña. Si ya tienes una licencia de Plesk, puedes introducirla directamente. Alternativamente, se puede solicitar una licencia de prueba de 15 días desde Plesk. Finalmente, se debe aceptar el contrato de usuario. 
Ahora Plesk está listo para usarse.

### Cambiar idioma


Después de la instalación, el panel de Plesk está en inglés. El idioma español se puede configurar o seleccionar en Herramientas y Configuración ➡️ Apariencia de Plesk ➡️ Idiomas. Ahí se debe seleccionar "es-ES". Luego se puede establecer como idioma predeterminado para todos haciendo clic en "Establecer como predeterminado". 
Después de cerrar sesión y volver a entrar, el panel de Plesk estará en español.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Añadir dominio

Para añadir el primer dominio haz clic en el botón azul "Añadir dominio".

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Ahora puedes ingresar tu propio dominio. También debes definir una IP, así como un usuario y contraseña para el hosting web del dominio. Si el subdominio "www" ya está configurado en el DNS del dominio, se puede crear directamente un certificado SSL de Let's Encrypt. Esta opción se puede seleccionar, tras ingresar un correo electrónico, y confirmarla con el botón azul "OK".

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)


:::info
El dominio debe apuntar a la IP del hosting web. Si el dominio es de ZAP-Hosting, se puede redirigir fácilmente al hosting web vía EasyDNS. Si es externo, se debe crear un registro A apuntando a la IP y los subdominios "www" y "webmail" también deben apuntar a la IP. Además, se debe configurar un registro MX apuntando a la IP del hosting web.

Puede tardar hasta 24 horas en propagarse un nuevo o modificado registro DNS hasta llegar al destino correcto.
:::

## Cifrado SSL

Durante el registro del dominio/creación del hosting web, ya se generó un certificado SSL de Let's Encrypt, que ahora se puede seleccionar en "Configuración de hosting" del dominio. Luego hay que confirmar con un clic en "Aplicar".

:::info
Para redirigir permanentemente a HTTPS (SSL) al acceder a la web, se debe marcar la casilla "Redirección permanente 301 apta para SEO de HTTP a HTTPS".
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Si ahora abres el dominio en el navegador, mostrará su cifrado.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
La instalación y configuración del primer dominio con cifrado SSL ya está completamente terminada.
:::


