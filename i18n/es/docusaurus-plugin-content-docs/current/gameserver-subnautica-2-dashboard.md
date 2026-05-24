---
id: gameserver-subnautica-2-dashboard
title: "Servidor de juegos - Subnautica 2 - Panel"
description: "Descubre cómo gestionar tu servidor de Subnautica 2 con el panel de ZAP-Hosting, monitorear el rendimiento del hosting y acceder a funciones importantes de administración web de zap -> Aprende más ahora"
sidebar_label: Servidor de juegos - Subnautica 2 - Panel
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Estás interesado en un servidor de juegos **Subnautica 2** o ya tienes uno, pero aún te falta una visión completa de la administración y la localización de todas las opciones necesarias? Especialmente al principio, esto puede ser un desafío. Pero no te preocupes, esta guía te ofrece una introducción detallada a la administración de tu servicio para que obtengas la mejor visión posible.

Después de seguir esta guía, podrás gestionar tu servidor de manera eficiente y encontrar todas las opciones y funciones necesarias rápida y fácilmente. Aquí obtendrás una visión estructurada que te ayudará paso a paso a familiarizarte con la administración del servidor y ampliar tus conocimientos de forma dirigida. Así, podrás asegurarte de que tu servidor de juegos **Subnautica 2** esté adaptado óptimamente a tus necesidades y sacar el máximo provecho de las opciones disponibles en el panel de **ZAP-Hosting**.

<InlineVoucher />

## Administración del producto

En la sección **Administración del producto** encontrarás todas las páginas necesarias para gestionar tu servidor. A continuación, se detallan las opciones para administrar tu servidor.

### Panel

El **Panel** de tu servidor es el corazón de la administración. Aquí se presenta de forma clara toda la información básica y esencial sobre tu servicio. Esto incluye, por ejemplo, información sobre la ubicación, estado, IP: Puerto, memoria usada, juego en curso, nombre del servidor, mapa y el número de slots disponibles. Además, también se muestra la utilización de la CPU, memoria y RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

En el panel, también tienes la opción de iniciar, detener o reiniciar tu servicio para tener control total sobre su funcionamiento. Además, puedes acceder a la consola en vivo para obtener información en tiempo real sobre el estado del servidor y tomar acciones directas si es necesario.

### Estadísticas

En **Estadísticas** obtienes una visión completa de los valores de carga de tu servidor. Allí encontrarás información sobre varios aspectos como la carga de los slots disponibles, la CPU y la memoria. Puedes ver estos datos para diferentes períodos de tiempo, por ejemplo, para los últimos **60 minutos, 24 horas, 3 días, 7 días** o **30 días**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Gracias a esta información, obtienes una buena perspectiva del uso de tu servidor. Además, estas estadísticas suelen ser útiles para identificar posibles problemas de rendimiento y acotar sus causas. Por ejemplo, puedes rastrear cuándo aumentó la utilización y si esto está relacionado con ciertos eventos o cambios. Esto es especialmente importante cuando surgen problemas repentinos, ya que te permite tomar medidas específicas para solucionar y analizar sistemáticamente las posibles causas.

### Gestor de DDoS

Consulta ataques DDoS pasados para evaluar mejor las amenazas y patrones potenciales. Activa notificaciones para ataques DDoS en curso en tu servidor para que puedas reaccionar rápidamente cuando ocurra un incidente.

Dependiendo de la ubicación del servidor y la protección DDoS disponible allí, también puedes monitorear ataques activos en tiempo real. Esto incluye detalles del tráfico, mostrando tanto el tráfico legítimo como la cantidad bloqueada por los sistemas de mitigación. Este nivel de transparencia te ayuda a entender cómo funciona la protección y te permite identificar riesgos potenciales de forma temprana.

:::info Acceso al Gestor de DDoS no disponible
El uso del Gestor de DDoS requiere una dirección IP dedicada o la opción adicional `DDoS Manager Overview`. Si tu paquete actual no incluye estos componentes, puedes agregarlos en cualquier momento actualizando tu servicio.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution Requisito para el Gestor de DDoS
El uso del Gestor de DDoS solo es posible si tienes una IP propia o la opción `DDoS Manager Overview` contratada como opción adicional. Si estos componentes faltan en tu paquete actual, puedes agregarlos en cualquier momento mediante una actualización.
:::

### Archivos de registro

¿Tienes un problema técnico y no sabes cuál es la causa? Una primera estrategia posible es revisar los **Archivos de registro**. Estos archivos contienen mucha información sobre el servidor, como eventos actuales, pistas o mensajes de error.

Los mensajes de error en particular pueden ayudar a identificar y comprender mejor la causa de un problema. A menudo, las dificultades se pueden descubrir y resolver con una revisión dirigida de los archivos de registro.

:::caution ¿Necesitas ayuda con los archivos de registro?
¿La información encontrada no te ayuda o no la entiendes? En ese caso, puedes crear un **[Ticket](https://zap-hosting.com/en/customer/support/)** y explicar tu problema. El soporte está disponible a diario y puede ayudarte a analizar el problema más a fondo.
:::

### Registro de eventos

El **Registro de eventos** te ofrece una visión completa de todas las actividades relacionadas con la administración del servidor. Aquí puedes ver en cualquier momento cuándo un servidor se inició, detuvo o colapsó, así como cuándo se realizaron actualizaciones, copias de seguridad o nuevas instalaciones.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Consola en vivo

La **Consola en vivo** te ofrece una vista en tiempo real de todos los eventos actuales en tu servidor. Aquí puedes ver información sobre las actividades de los jugadores, así como posibles mensajes de error y mensajes del sistema. Esta visión te permite obtener una perspectiva completa de lo que está pasando en tu servidor y detectar posibles problemas de forma temprana.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Además de monitorear los eventos, también puedes enviar comandos directamente al servidor desde la **Consola en vivo**. Esto puede ser útil para ajustar configuraciones, realizar ciertas acciones o responder rápidamente a problemas que surjan.

### Interrupciones del servicio

¿Tu servidor estuvo temporalmente fuera de línea y no sabes por qué? ¿Revisar el registro de eventos y los archivos de registro no proporcionó información? Podría ser que la causa del problema no esté directamente en tu servidor, sino en el sistema anfitrión donde se ejecuta tu servidor.

Si el sistema de monitoreo detecta una interrupción general, los técnicos son notificados automáticamente y se encargan del problema lo antes posible.

En esta sección encontrarás un resumen del historial de interrupciones del sistema anfitrión donde se ejecuta tu servicio de servidor de juegos. Puedes encontrar más información y la versión más reciente del estado del servicio en la [página de estado](https://status.zap-hosting.com/).

## Configuración

En la sección **Configuración** encontrarás todas las páginas necesarias para configurar tu servidor. A continuación, se detallan las opciones disponibles para configurar tu servidor.

### Configuración

En **Configuración** encontrarás un resumen de las opciones de configuración más comunes para tu servidor. También incluyen una breve explicación. Se recomienda especialmente a los principiantes en administración de servidores usar esta página de configuración.

Si tienes más confianza y quieres hacer cambios más precisos, se recomienda usar el Editor de Configuración. Puedes encontrar más información sobre esto en la categoría **Configs**.

### Configs

El editor de archivos de configuración te permite editar los archivos de configuración directamente desde la web de forma clásica, sin la vista simplificada. Esta opción te permite personalizar los ajustes de tu servidor y configurarlos según tus preferencias personales.

Al usar el editor, tienes acceso directo a todas las opciones disponibles y puedes personalizarlas con precisión. Esto es especialmente útil para usuarios avanzados que quieren control total sobre la configuración de su servidor y saben exactamente qué cambios desean hacer.

:::caution Los valores de configuración pueden ser sobrescritos
¿Has notado que algunos de tus cambios se sobrescriben parcialmente? Ten en cuenta que ciertos valores de opciones se toman de la página de configuración. Si quieres hacer estos cambios directamente en el config, primero debes desactivar las opciones relevantes en la página de configuración.
:::

### Juegos

En **Juegos** siempre tienes la posibilidad de cambiar la variante del juego de tu juego existente o instalar otro juego en general. Los juegos con el mismo precio por slot se pueden seleccionar directamente en **Juegos disponibles**. Para todos los demás juegos, primero se requiere un ajuste del precio por slot. Más información sobre esto la encontrarás en la guía [Cambio de juego](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versiones

En **Versiones** tienes la posibilidad de ver y gestionar la versión actual de tu servidor de juegos. Aquí puedes actualizar a la última versión en cualquier momento o activar las actualizaciones automáticas para asegurarte de que tu servidor esté siempre actualizado.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Además, también puedes activar la función de notificación por correo electrónico para actualizaciones automáticas y así mantenerte informado sobre las actualizaciones y asegurarte de estar siempre al día.

### Tareas programadas

Crea tareas programadas que se ejecuten automáticamente en horarios definidos para automatizar varios procesos en tu servidor. Puedes configurar si una tarea debe ejecutarse una vez o repetirse según sea necesario. Los tipos de tareas soportados incluyen iniciar, detener o reiniciar servicios, reiniciar el servidor si está en línea, crear copias de seguridad o ejecutar comandos personalizados.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planificador de reinicios

¿Quieres programar reinicios del servidor en horarios específicos? El Planificador de reinicios te permite configurar reinicios automáticos programados de tu servidor de juegos. Con esta función, puedes establecer reinicios en horarios específicos o a intervalos regulares.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Configuración DNS

Con la configuración DNS de ZAP puedes crear direcciones fáciles de recordar para tu servicio. Puedes usar un subdominio de uno de los dominios disponibles o crear una entrada DNS en tu propio dominio y así tener una dirección que se asocie mejor con tu proyecto.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Herramientas

En la sección **Herramientas** de tu panel de navegación encontrarás varios subelementos que te ayudarán a gestionar tu servidor. Estos incluyen **Explorador FTP**, **Bases de datos** y **Copias de seguridad**. A continuación, recibirás una introducción detallada a estas áreas.

### Explorador FTP

Con el **Explorador FTP** obtendrás toda la información necesaria para establecer una conexión al acceso FTP. El acceso FTP te permite acceso directo a los archivos de tu servidor de juegos. Se recomienda usar un programa FTP externo como [FileZilla](https://filezilla-project.org/) o [WinSCP](https://winscp.net/eng/index.php) para un uso óptimo. Si no estás familiarizado con el uso de FTP, puede ayudarte echar un vistazo a la guía [Acceso vía FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla es uno de los clientes FTP más simples y conocidos. Tras la instalación, puedes iniciarlo e ingresar tus datos de acceso en la barra superior usando las credenciales mostradas en tu panel. Tras un clic rápido en conectar, accedes directamente al servidor y puedes gestionar los archivos.

**WinSCP:** WinSCP está pensado principalmente para SCP y SFTP, pero también puede manejar conexiones FTP estándar. El programa es algo más completo que FileZilla y por eso suele ser más adecuado para usuarios avanzados.

### Bases de datos

Además de los productos de servidor de juegos, también hay disponibles 10 bases de datos incluidas. Estas bases de datos son necesarias, por ejemplo, cuando se deben almacenar datos en una base de datos. En **Bases de datos** puedes crear una base de datos y ver las credenciales de acceso. También tienes la opción de activar la copia de seguridad y de importar copias de seguridad de bases de datos existentes.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Copias de seguridad

En **Copias de seguridad** tienes la opción de crear copias de seguridad manuales y automáticas para tu servidor y su base de datos asociada. Esto facilita la recuperación de tus datos en caso de problemas o pérdida de datos.

En la configuración puedes especificar si las copias de seguridad deben crearse automáticamente y si esto debe hacerse diariamente o semanalmente. Además, puedes decidir si se deben eliminar las copias de seguridad más antiguas si es necesario, por ejemplo, cuando el espacio de almacenamiento disponible se vuelve limitado.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Por defecto, se proporcionan 10 GB de espacio de almacenamiento en el servidor de almacenamiento para copias de seguridad de productos de servidor de juegos. Si necesitas más espacio, se puede ampliar por una tarifa. Así te aseguras de tener siempre suficiente espacio para tus copias y poder acceder a copias antiguas si es necesario.

## Enlaces adicionales

En la sección **Enlaces adicionales** encontrarás más enlaces relevantes para tu producto.

### Preguntas frecuentes

La sección de **Preguntas frecuentes** ofrece un resumen de las preguntas más comunes de los clientes. Aquí encontrarás respuestas útiles e información detallada sobre varios temas para ayudarte rápida y eficientemente.

### Documentación de ZAP-Hosting

Hay disponible una documentación extensa para los productos que sirve como base de conocimiento para las preguntas y dudas más frecuentes. Allí encontrarás diversas guías y ayudas sobre diferentes temas que te asisten en el uso y gestión de tu producto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Noticias

Las **Noticias** te ofrecen una visión completa de todos los anuncios y novedades relacionadas con tu servicio. Aquí encontrarás información importante sobre varios aspectos como:

- Cambios en el servicio, por ejemplo, mediante actualizaciones o nuevas funciones
- Anuncios sobre posibles mantenimientos o problemas técnicos
- Ofertas especiales y promociones que te brindan beneficios o descuentos exclusivos
- Otra información relevante que pueda ser importante para el uso de tu servicio

Al revisar las **Noticias** regularmente, te mantienes informado y puedes ajustar tu servicio para sacar el máximo provecho de tu servidor.

<InlineVoucher />

## Conclusión

Ahora tienes una visión completa de las áreas más importantes del panel de **Subnautica 2** y sabes dónde encontrar la administración central, configuración, herramientas y páginas de información en el panel de **ZAP-Hosting**.

Felicitaciones, has aprendido con éxito a usar el panel de Subnautica 2. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible a diario para ayudarte! 🙂