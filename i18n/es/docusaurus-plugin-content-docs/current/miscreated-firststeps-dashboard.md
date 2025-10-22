---
id: miscreated-firststeps-dashboard
title: "Miscreated: Vista general del panel"
description: "Descubre cómo gestionar eficientemente tu servidor de Miscreated y optimizar sus ajustes para el mejor rendimiento → Aprende más ahora"
sidebar_label: Panel
services:
  - gameserver-miscreated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Estás interesado en un **servidor de juegos Miscreated** o ya tienes uno, pero aún te falta una visión completa de la administración y la localización de todas las opciones necesarias? Especialmente al principio, esto puede ser un reto. Pero no te preocupes, aquí te damos una introducción detallada a la administración de tu servicio para que tengas la mejor visión posible.

Después de seguir esta guía, podrás gestionar tu servidor de forma eficiente y encontrar todas las opciones y funciones necesarias rápida y fácilmente. Aquí obtendrás una visión estructurada que te ayudará paso a paso a familiarizarte con la administración del servidor y ampliar tus conocimientos de forma dirigida. Así podrás asegurarte de que tu **servidor de juegos Miscreated** está adaptado óptimamente a tus necesidades y sacar el máximo provecho de las opciones disponibles.

<YouTube videoId="KnH6vIX9Zr4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/wcMxWLndA5N46MK/preview" title="¡Configura tu servidor de Miscreated en solo UN MINUTO!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Administración del producto

En la sección de **Administración del producto** encontrarás todas las páginas necesarias para gestionar tu servidor. Las opciones para administrar tu servidor se detallan a continuación.

### Panel

El **Panel** de tu servidor es el corazón de la administración. Aquí se presenta de forma clara toda la información básica y esencial sobre tu servicio. Esto incluye, por ejemplo, información sobre la ubicación, estado, IP: Puerto, memoria usada, juego en curso, nombre del servidor, mapa y número de slots disponibles. Además, también se muestra el uso de la CPU, memoria y RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/5dti55eDJtEYimm/preview)

En el panel también tienes la opción de iniciar, detener o reiniciar tu servicio para tener control total sobre su funcionamiento. Además, puedes acceder a la consola en vivo para obtener información en tiempo real sobre el estado del servidor y actuar directamente si es necesario.

### Gestor DDoS

Consulta ataques DDoS pasados para evaluar mejor posibles amenazas y patrones. Activa notificaciones para ataques DDoS en curso en tu servidor y así reaccionar rápido cuando ocurra un incidente.

Dependiendo de la ubicación del servidor y la protección DDoS disponible, también puedes monitorizar ataques activos en tiempo real. Esto incluye detalles del tráfico, mostrando tanto el tráfico legítimo como la cantidad bloqueada por los sistemas de mitigación. Este nivel de transparencia te ayuda a entender cómo funciona la protección y a identificar riesgos potenciales temprano.

:::info ¿No tienes acceso al Gestor DDoS?
El uso del Gestor DDoS requiere una dirección IP dedicada o la opción adicional "Vista general del Gestor DDoS". Si tu paquete actual no incluye estos componentes, puedes añadirlos en cualquier momento actualizando tu servicio.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
El uso del Gestor DDoS solo es posible si tienes una IP propia o la opción "Vista general del Gestor DDoS" contratada como extra. Si estos componentes faltan en tu paquete actual, puedes añadirlos en cualquier momento actualizando.
:::

### Archivos de registro

¿Tienes un problema técnico y no sabes cuál es la causa? Una primera estrategia para solucionarlo es revisar los **archivos de registro**. Estos archivos contienen mucha información sobre el servidor, como eventos actuales, pistas o mensajes de error.

Los mensajes de error en particular pueden ayudar a identificar y entender mejor la causa del problema. Muchas veces, los problemas se pueden descubrir y resolver con una mirada dirigida a los archivos de registro.

:::warning
¿La información que encuentras no te ayuda o no la entiendes? ¡No te preocupes! En ese caso, nuestro soporte está disponible a diario. Solo crea un **[Ticket](https://zap-hosting.com/en/customer/support/)** y explícanos tu problema. Lo revisaremos lo antes posible y te ayudaremos a solucionarlo. :)
:::

### Registro de eventos

El **Registro de eventos** te ofrece una visión completa de todas las actividades relacionadas con la administración del servidor. Aquí puedes ver en cualquier momento cuándo un servidor arrancó, se detuvo o se bloqueó, así como cuándo se realizaron actualizaciones, copias de seguridad o nuevas instalaciones.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interrupciones del servicio

¿Tu servidor estuvo offline temporalmente y no sabes por qué? ¿Miraste el registro de eventos y los archivos de registro y no encontraste nada? Puede que la causa no esté directamente en tu servidor, sino en el sistema host donde se ejecuta tu servidor.

Si nuestro sistema de monitorización detecta una interrupción general, nuestros técnicos son notificados automáticamente y se encargan del problema lo antes posible.

En esta sección encontrarás un historial de interrupciones del sistema host donde corre tu servidor de juegos. Más info y la versión más actualizada del estado de nuestros servicios la tienes en nuestra nueva [página de estado](https://status.zap-hosting.com/).

## Ajustes

En la sección de **Ajustes** encontrarás todas las páginas necesarias para configurar tu servidor. Las opciones disponibles para configurar tu servidor se detallan a continuación.

### Ajustes

En ajustes encontrarás un resumen de las opciones más comunes para configurar tu servidor. También incluyen una breve explicación. El uso de esta página es especialmente recomendado para quienes están empezando en la administración de servidores.

Si ya tienes más experiencia y quieres hacer cambios más precisos, te recomendamos usar el Editor de Configs. Más info sobre esto la tienes en la categoría **Configs**.

### Configs

El editor de archivos de configuración te permite editar los archivos directamente desde la web, en modo clásico, sin la vista simplificada. Esta opción te permite personalizar los ajustes de tu servidor según tus preferencias.

Con el editor tienes acceso directo a todas las opciones disponibles y puedes configurarlas con precisión. Esto es especialmente útil para usuarios avanzados que quieren control total sobre la configuración y saben exactamente qué cambios hacer.

:::warning
¿Has notado que algunos cambios se sobrescriben parcialmente? Ten en cuenta que ciertos valores se toman de la página de ajustes. Si quieres hacer estos cambios directamente en la config, primero debes desactivar las opciones correspondientes en la página de ajustes.
:::

### Juegos

En **Juegos** siempre puedes cambiar la variante del juego de tu servidor actual o instalar otro juego en general. Los juegos con el mismo precio por slot se pueden seleccionar directamente en **Juegos disponibles**. Para otros juegos, primero hay que ajustar el precio por slot. Más info sobre esto la tienes en la guía [Cambio de juego](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versiones

En **Versiones** puedes ver y gestionar la versión actual de tu servidor de juegos. Aquí puedes actualizar a la última versión en cualquier momento o activar las actualizaciones automáticas para que tu servidor esté siempre al día.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Además, puedes activar las notificaciones por email para actualizaciones automáticas y así estar siempre informado.

### Tareas programadas

Crea tareas programadas que se ejecutan automáticamente en horarios definidos para automatizar procesos en tu servidor. Puedes configurar si una tarea se ejecuta una vez o se repite según necesidad. Los tipos de tareas soportados incluyen iniciar, detener o reiniciar servicios, reiniciar el servidor si está online, crear copias de seguridad o ejecutar comandos personalizados.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificador de reinicios

¿Quieres programar reinicios del servidor en horarios específicos? El Planificador de reinicios te permite configurar reinicios automáticos programados de tu servidor de juegos. Con esta función puedes establecer reinicios en horarios concretos o a intervalos regulares.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Herramientas

En la sección **Herramientas** de tu panel de navegación encontrarás varios subapartados que te ayudarán a gestionar tu servidor. Estos incluyen **Explorador FTP**, **Bases de datos** y **Copias de seguridad**. A continuación te damos una introducción detallada a estas áreas.

### Explorador FTP

Con el **Explorador FTP** obtendrás toda la información necesaria para establecer conexión al acceso FTP. El acceso FTP te da acceso directo a los archivos de tu servidor de juegos. Recomendamos usar un programa FTP externo como **Filezilla** o **WinSCP** para un uso óptimo. Si no sabes cómo usar FTP, te recomendamos echar un vistazo a nuestra guía [Acceso FTP](gameserver-ftpaccess.md) que puede ayudarte.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla es probablemente el cliente FTP más sencillo y conocido. Solo instálalo, ábrelo y en la barra superior introduce tus datos de acceso que encontrarás un poco más arriba en esta página. Tras un clic rápido en "Conectar" estarás conectado al servidor y podrás gestionar los archivos.

**WinSCP:** WinSCP está pensado para SCP y SFTP (las versiones cifradas del protocolo FTP), pero también funciona perfectamente con FTP normal. El programa es un poco más completo que FileZilla y está más orientado a usuarios avanzados.

### Bases de datos

Además de nuestros productos de servidor de juegos, ofrecemos 10 bases de datos incluidas. Estas bases de datos son necesarias, por ejemplo, cuando se deben almacenar datos en una base. En **Bases de datos** puedes crear una base y ver las credenciales de acceso. También puedes activar la opción de copia de seguridad e importar backups existentes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Copias de seguridad

En **Copias de seguridad** puedes crear backups manuales y automáticos para tu servidor y su base de datos asociada. Esto facilita recuperar tus datos en caso de problemas o pérdida.

En los ajustes puedes definir si las copias se crean automáticamente y si debe ser diario o semanal. Además, puedes decidir si se eliminan las copias más antiguas cuando el espacio de almacenamiento se limite.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Por defecto ofrecemos 10 GB de espacio en el servidor de almacenamiento para backups en nuestros productos de servidor de juegos. Si necesitas más espacio, puedes ampliarlo pagando un extra. Así te aseguras de tener siempre espacio suficiente para tus backups y acceso a copias antiguas si hace falta.

## Enlaces adicionales

En la sección **Enlaces adicionales** encontrarás más enlaces relevantes para tu producto.

### Preguntas frecuentes

La sección de **Preguntas frecuentes** ofrece un resumen de las dudas más comunes de nuestros clientes. Aquí encontrarás respuestas útiles e información detallada sobre varios temas para ayudarte rápido y eficazmente.

### Documentación de ZAP-Hosting

Ofrecemos documentación extensa para nuestros productos, que sirve como base de conocimiento para las preguntas y dudas más frecuentes. Allí encontrarás varias guías y ayudas sobre diferentes temas que te asistirán en el uso y gestión de tu producto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Noticias

La sección de **Noticias** te ofrece una visión completa de todos los anuncios y novedades relacionadas con tu servicio. Aquí encontrarás información importante sobre aspectos como:

- Cambios en el servicio, por ejemplo, actualizaciones o nuevas funciones
- Avisos sobre mantenimientos o problemas técnicos
- Ofertas especiales y promociones con beneficios o descuentos exclusivos
- Otra información relevante para el uso de tu servicio

Revisando las **Noticias** regularmente estarás al día y podrás ajustar tu servicio para sacar el máximo partido a tu servidor.

<InlineVoucher />