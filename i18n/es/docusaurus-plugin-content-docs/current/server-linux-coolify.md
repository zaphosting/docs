---
id: server-linux-coolify
title: Configura Coolify en un Servidor Linux - Aplicaciones Cloud Autoalojadas
description: "Descubre cómo instalar y configurar Coolify para autoalojar tus propias aplicaciones, bases de datos y servicios fácilmente → Aprende más ahora"
sidebar_label: Instalar Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[Coolify](https://coolify.io/) es una alternativa open-source y autoalojada a Heroku y Vercel que te permite gestionar tus servidores, aplicaciones y bases de datos con facilidad.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

El intuitivo panel de Coolify hace que el autoalojamiento sea sencillo. Te da control total sobre tu infraestructura, despliegues automáticos desde GitHub y mantiene bajos tus costos en la nube.

En esta guía, te llevaremos paso a paso para configurarlo, preconfigurar tu cuenta de administrador y ajustar todo lo que necesitas saber.

<InlineVoucher />

## Casos de uso de Coolify

Coolify se puede usar en muchos escenarios cotidianos y es ideal para cualquiera que quiera automatizar despliegues de aplicaciones, alojar bases de datos o ejecutar workers en segundo plano. Coolify es perfecto tanto para principiantes como para expertos.

Coolify ofrece soporte integrado para desplegar sitios estáticos, Node.js, Python, PHP, Rust y contenedores Docker. Incluye plantillas populares de un clic como WordPress, Ghost, Grafana, Appwrite, Nextcloud y bases de datos PostgreSQL. Gestiona automáticamente certificados SSL de Let's Encrypt y el enrutamiento reverse proxy vía Traefik.

## Preparación

Aunque Coolify es ligero en su núcleo, el uso de recursos puede aumentar mucho según la cantidad de aplicaciones desplegadas, builds de Docker y bases de datos corriendo simultáneamente. Recomendamos los siguientes requisitos de hardware para alojar Coolify en tu VPS/servidor dedicado.

| Hardware   | Mínimo      | Recomendado               |
| ---------- | ----------- | ------------------------- |
| CPU        | 2 núcleos vCPU | 4 núcleos vCPU          |
| RAM        | 2 GB        | 4 GB+                     |
| Espacio en disco | 30 GB   | 50 GB+                    |

<InlineServiceLink />

Antes de instalar Coolify, conecta a tu servidor y asegúrate de que el sistema operativo esté actualizado. Debes conectarte usando SSH con privilegios root. Ya tenemos una guía sobre [Acceso inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con este paso.

:::tip[Autenticación con clave SSH]
**Recomendamos mucho** configurar una clave SSH en lugar de usar contraseña para la autenticación. Puedes aprender cómo hacerlo siguiendo nuestro tutorial de [Configuración de clave SSH](vserver-linux-sshkey.md).
:::

## Instalación

Una vez conectado a tu servidor, actualiza los paquetes del sistema e instala `curl`, que es necesario para descargar el script de instalación de Coolify:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### Prepara las credenciales de tu usuario administrador

Coolify aplica políticas de seguridad estrictas para la cuenta de administrador. Antes de ejecutar el comando de instalación, prepara las credenciales del usuario root de Coolify según los siguientes requisitos:

* **Nombre de usuario**
  * Longitud mínima: 3 caracteres
  * Longitud máxima: 255 caracteres
  * Solo puede contener letras, números, espacios, guiones bajos y guiones
* **Email**
  * Debe ser una dirección de correo válida
  * Debe tener un registro DNS válido
  * Longitud máxima: 255 caracteres
* **Contraseña**
  * Longitud mínima: 8 caracteres
  * Debe contener letras mayúsculas y minúsculas
  * Debe contener al menos un número
  * Debe contener al menos un símbolo especial
  * No debe ser una contraseña común o comprometida

### Ejecuta el script de instalación

Coolify ofrece un script de instalación rápido y automatizado. Para asegurar la instalación, usaremos variables de entorno para predefinir la cuenta de administrador root. Esto evita accesos no autorizados mientras se completa la configuración.

Ejecuta el siguiente comando, asegurándote de reemplazar el nombre de usuario, email y contraseña por tus propias credenciales seguras:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Puedes encontrar el código fuente del script de instalación en el [Repositorio Oficial de Coolify](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

El script instalará Docker automáticamente, configurará las redes necesarias y preparará los contenedores de Coolify. Este proceso puede tardar unos minutos según el hardware de tu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Accediendo a Coolify

Cuando la instalación termine, el siguiente paso es acceder al panel con un navegador web. Introduce la dirección IP de tu servidor seguida del puerto 8000: `http://[tu_ip_servidor]:8000`

Como ya proporcionaste tus credenciales en el comando de instalación, verás directamente la pantalla de login en lugar del asistente inicial.

Introduce el email y la contraseña que usaste en la línea de comandos para entrar a tu panel.

### Configuración de registros DNS

Después de iniciar sesión en el panel de Coolify, lo primero que debes hacer es configurar un dominio personalizado. Acceder a Coolify vía la IP (`http://[tu_ip_servidor]:8000`) no es seguro.

Conectar un dominio permite que Coolify genere automáticamente certificados SSL gratuitos para tu panel y todas tus futuras aplicaciones.

Ve a la página de gestión DNS de tu proveedor de dominios y añade dos registros `A` apuntando a tu servidor. Si tu dominio está registrado con ZAP-Hosting, puedes seguir nuestra guía de [Registros de Dominio](domain-records.md) para aprender a añadir estas entradas fácilmente:

| Nombre / Host | Tipo | Valor              | TTL           |
| ------------- | ---- | ------------------ | ------------- |
| `@`           | A    | `[tu_ip_servidor]` | Auto / Más bajo |
| `*`           | A    | `[tu_ip_servidor]` | Auto / Más bajo |

:::info[Enrutamiento DNS]
* El registro `@` permite que Coolify use la raíz de tu dominio
* El registro `*` (comodín) permite que Coolify enrute automáticamente cualquier subdominio nuevo (ej. `api.[tu_dominio]`) sin añadir registros DNS para cada proyecto.
:::

### Configurar el dominio de la instancia

Para asegurar tu instancia de Coolify con un certificado SSL, debes asignarle un dominio. Ve a **Configuración** en la barra lateral izquierda y localiza el campo **Dominio de la instancia**. Introduce tu dominio, incluyendo el prefijo `https://` (ej. `https://coolify.[tu_dominio]`). Haz clic en **Guardar** para completar este paso.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## Desplegando tu primera app

Después de esto, podrás visitar la pestaña **Proyectos** y comenzar a desplegar tu primera aplicación.

Puedes hacer clic en **+ Añadir recurso** para agregar un repositorio público o un archivo Docker Compose, o seleccionar uno de los muchos servicios preconfigurados de la biblioteca de plantillas de un clic. ¡Tu instalación de Coolify está lista para usar!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## Conclusión y más recursos

¡Genial! Has instalado Coolify con éxito en tu servidor y puedes empezar a desplegar tus proyectos ya mismo. También te recomendamos echar un vistazo a estos recursos, que pueden darte ayuda y guía adicional durante la configuración de tu servidor.

- [coolify.io](https://coolify.io/) - Sitio Oficial
- [coolify.io/docs](https://coolify.io/docs/) - Documentación de Coolify

¿Tienes preguntas específicas que no se cubren aquí? Para dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />