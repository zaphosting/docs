---
id: windrose-firststeps-dashboard
title: "Windrose: Vista General del Panel"
description: "Descubre el panel Windrose de ZAP-Hosting y aprende a gestionar tu servidor de juegos, monitorear el rendimiento y usar las funciones clave de control de forma eficiente -> Aprende más ahora"
sidebar_label: Panel
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El panel **Windrose** es el área central para gestionar tu servidor de juegos en la interfaz web de ZAP-Hosting. En esta guía, obtendrás una visión estructurada de las secciones disponibles del panel y aprenderás a usar las herramientas más importantes de administración, monitoreo y hosting de forma eficiente.

<InlineVoucher />

## Administración del Producto

En el área de **Administración del Producto** encontrarás las páginas más importantes para controlar y monitorear tu servidor **Windrose**. Estas páginas te ayudan a gestionar el estado actual del servidor, revisar eventos técnicos y acceder rápidamente a información esencial del servicio.

### Panel

El **Panel** es la página principal de resumen de tu servidor **Windrose**. Aquí normalmente puedes encontrar los detalles más importantes del servicio de un vistazo, como el estado actual del servidor, ubicación, dirección de conexión y uso de recursos.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Dependiendo de la configuración actual del servidor y la integración del juego, el panel también puede mostrar información adicional como el mapa activo, nombre del servidor, memoria usada o uso de slots para jugadores. También es el lugar donde puedes iniciar, detener o reiniciar tu servicio directamente.

El panel es especialmente útil porque combina el control y monitoreo del servidor en un solo lugar. Esto te permite verificar rápidamente si tu servicio está en línea y reaccionar de inmediato si es necesario hacer cambios.

### Estadísticas

En **Estadísticas** puedes revisar los datos históricos de uso de tu servidor. Esto te ayuda a entender mejor cómo funciona tu servicio de hosting **Windrose** a lo largo del tiempo.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Los gráficos disponibles suelen incluir valores como uso de CPU, uso de memoria y utilización de slots. A menudo puedes cambiar entre diferentes rangos de tiempo para analizar picos a corto plazo o tendencias a largo plazo.

| Métrica | Propósito |
| --- | --- |
| Uso de CPU | Te ayuda a identificar la carga de procesamiento y posibles cuellos de botella en el rendimiento |
| Uso de memoria | Muestra cuánta RAM está usando tu servidor |
| Utilización de slots | Indica cuántos slots de jugador disponibles están siendo usados activamente |

:::tip Análisis de Rendimiento
Si notas lag, caídas o tiempos de respuesta lentos, la página de estadísticas es uno de los mejores lugares para comenzar a solucionar problemas. Puede ayudarte a determinar si el problema está relacionado con el uso de recursos o si ocurrió solo en un momento específico.
:::

### Gestor de DDoS

El **Gestor de DDoS** te permite revisar información relacionada con ataques DDoS detectados y mitigados contra tu servicio. Esto puede ser útil si quieres entender patrones de tráfico inusuales o investigar interrupciones causadas por tráfico malicioso.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Dependiendo de las opciones contratadas y la protección disponible en la ubicación seleccionada, también puedes ver información de ataques activos y detalles de tráfico en tiempo real.

:::info Disponibilidad del Gestor de DDoS
El Gestor de DDoS solo está disponible si tu servicio incluye una dirección IP dedicada o la opción adicional **Resumen Gestor de DDoS**. Si esto no está incluido en tu paquete actual, primero debes actualizar tu servicio.
:::

### Archivos de Registro

Si tu servidor **Windrose** muestra errores o se comporta de forma inesperada, la sección de **Archivos de Registro** es uno de los lugares más importantes para revisar. Los archivos de registro contienen salida técnica del servidor e incluyen advertencias, mensajes de inicio y detalles de errores.

Estos archivos son especialmente útiles cuando necesitas identificar la causa de caídas, fallos en el inicio o problemas de configuración.

:::caution Limitaciones en la Revisión de Registros
Si la salida del registro no es clara o no te ayuda a identificar el problema, debes contactar al soporte a través de la [página oficial de soporte](https://zap-hosting.com/en/customer/support/). Incluye una descripción clara del problema y cualquier mensaje relevante del registro para acelerar la solución.
:::

### Registro de Eventos

El **Registro de Eventos** te ofrece una visión general de las acciones y eventos relacionados con tu servicio. Esto puede incluir inicios, paradas, caídas, instalaciones, actualizaciones y actividades de copia de seguridad.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Esta sección es especialmente útil si quieres verificar cuándo ocurrió un cambio o si una tarea automatizada se ejecutó correctamente.

### Consola en Vivo

La **Consola en Vivo** muestra la salida del servidor en tiempo real mientras tu servidor **Windrose** está en funcionamiento. Te permite monitorear lo que está pasando en el servidor y puede ayudarte a detectar problemas inmediatamente.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Si el software del servidor lo soporta, también puedes enviar comandos directamente a través de la consola en vivo. Esto es útil para acciones administrativas que deben realizarse sin reiniciar el servicio.

| Función | Descripción |
| --- | --- |
| Salida en tiempo real | Muestra eventos y mensajes actuales del servidor |
| Visibilidad de errores | Te ayuda a identificar problemas a medida que ocurren |
| Entrada de comandos | Permite enviar comandos soportados directamente |

### Interrupciones del Servicio

Si tu servidor estuvo temporalmente fuera de servicio y no hay una causa obvia en el registro de eventos o archivos de registro, el problema puede estar relacionado con el sistema host subyacente y no con tu servicio individual.

En la sección **Interrupciones del Servicio** puedes revisar el historial de interrupciones relacionadas con el entorno host de tu servidor de juegos. Para información más amplia sobre el estado de la plataforma, también puedes consultar la [página oficial de estado](https://status.zap-hosting.com/).

## Configuración

El área de **Configuración** contiene las páginas principales para configurar tu servidor **Windrose**. Aquí puedes ajustar el comportamiento del servicio, cambiar juegos instalados donde esté soportado, gestionar actualizaciones y configurar funciones de automatización.

### Configuración

La página de **Configuración** ofrece una vista simplificada de las opciones comunes del servidor. Esto es especialmente útil si eres nuevo en el alquiler de servidores de juegos y quieres hacer cambios sin editar archivos de configuración directamente.

Si está disponible para **Windrose**, estas opciones pueden incluir ajustes relacionados con la jugabilidad u otros parámetros comunes del servicio. Las opciones exactas pueden variar según la integración del juego actual.

### Configs

La sección **Configs** te permite editar archivos de configuración directamente a través de la interfaz web. Esto te da un control más preciso que la página simplificada de configuración y generalmente es mejor para usuarios avanzados.

:::caution Valores Sobrescritos
Algunos valores pueden ser gestionados por la página simplificada de **Configuración**. Si notas que ciertos cambios manuales en el editor de configs se sobrescriben, verifica si la misma opción sigue controlada allí.
:::

### Juegos

En **Juegos** puedes cambiar a otro juego o variante disponible si tu servicio lo soporta. Los juegos con el mismo precio por slot suelen poder seleccionarse directamente, mientras que otros juegos pueden requerir primero un ajuste de paquete.

Si quieres aprender más sobre cómo cambiar el juego instalado en tu servicio, consulta la guía [Cambio de Juego](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versiones

La página de **Versiones** te permite gestionar la versión del servidor instalada para tu servicio **Windrose**, si se soporta la gestión de versiones. Normalmente puedes actualizar a la última versión disponible y activar actualizaciones automáticas.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Las actualizaciones automáticas pueden ayudar a mantener tu entorno de hosting actualizado, pero aún así debes verificar la compatibilidad tras cambios importantes de versión.

### Tareas Programadas

Con **Tareas Programadas** puedes automatizar acciones recurrentes para tu servidor. Esto es útil si quieres reducir el trabajo manual de administración y mantener tu servicio funcionando de forma constante.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Las acciones automatizadas comunes pueden incluir:

| Tipo de Tarea | Uso Ejemplo |
| --- | --- |
| Iniciar servicio | Iniciar el servidor automáticamente a una hora específica |
| Detener servicio | Apagar el servidor durante ventanas de mantenimiento |
| Reiniciar servicio | Realizar reinicios rutinarios para estabilidad |
| Creación de copias de seguridad | Crear copias regulares sin acción manual |
| Comandos personalizados | Ejecutar comandos soportados automáticamente |

### Planificador de Reinicios

El **Planificador de Reinicios** está diseñado específicamente para programar reinicios automáticos del servidor. Esto puede ser útil si quieres reiniciar tu servidor **Windrose** regularmente, por ejemplo durante horas de baja actividad.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Configuración DNS

Con **Configuración DNS** puedes asignar una dirección más amigable para tu servicio. Esto puede hacer que tu servidor sea más fácil de recordar y compartir con otros jugadores.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Dependiendo de tu configuración y opciones contratadas, puedes usar un subdominio proporcionado por ZAP o tu propio dominio.

## Herramientas

La sección **Herramientas** contiene funciones adicionales de gestión del servicio que soportan acceso a archivos, gestión de bases de datos y manejo de copias de seguridad.

### Explorador FTP

En el **Explorador FTP** puedes encontrar los datos de conexión necesarios para acceder a los archivos de tu servidor. El acceso FTP es útil si necesitas subir, descargar o editar archivos directamente.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Para una gestión de archivos más sencilla, se recomienda usar un cliente FTP externo como [FileZilla](https://filezilla-project.org/) o [WinSCP](https://winscp.net/). Si necesitas ayuda para conectar, consulta la guía [Acceso vía FTP](gameserver-ftpaccess.md).

### Bases de Datos

En **Bases de Datos** puedes crear y gestionar las bases de datos incluidas con tu producto de servidor de juegos, si tu configuración lo requiere. Esto es útil para servicios, mods o herramientas que necesitan almacenamiento estructurado de datos.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Normalmente puedes ver las credenciales de acceso, crear nuevas bases de datos e importar copias de seguridad existentes desde esta sección.

### Copias de Seguridad

La sección de **Copias de Seguridad** te permite crear y gestionar backups para tu servidor y, donde esté soportado, los datos asociados de la base de datos.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Se recomienda encarecidamente hacer copias de seguridad regulares porque te permiten restaurar tu servicio tras errores de configuración, corrupción de archivos o problemas inesperados.

:::tip Buenas Prácticas de Backup
Crea una copia manual antes de hacer cambios importantes como editar archivos de configuración, cambiar versiones o cambiar el juego instalado. Esto te da un punto seguro de restauración si algo sale mal.
:::

## Enlaces Adicionales

La sección **Enlaces Adicionales** ofrece recursos extra relacionados con tu servicio y el uso general de la plataforma ZAP-Hosting.

### Preguntas Frecuentes

El área de **Preguntas Frecuentes** contiene respuestas a temas comunes relacionados con tu servicio. Esto puede ayudarte a resolver problemas típicos más rápido sin necesidad de contactar soporte.

### Documentación ZAP-Hosting

La **Documentación ZAP-Hosting** te da acceso a una amplia base de conocimientos que cubre administración de servidores, configuración de hosting, solución de problemas y temas relacionados. Si buscas guías más avanzadas más allá de este resumen del panel **Windrose**, este es el mejor lugar para continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Noticias

La sección de **Noticias** contiene anuncios relevantes para tu servicio. Esto puede incluir avisos técnicos, información de mantenimiento, cambios en funciones y otras actualizaciones importantes.

Revisar esta sección regularmente te ayuda a mantenerte informado sobre cambios que pueden afectar tu entorno de hosting **Windrose**.

<InlineVoucher />

## Conclusión

Ahora tienes una visión completa de las áreas más importantes del panel **Windrose** en el panel de ZAP-Hosting, desde monitoreo y registros hasta configuración, herramientas y funciones de automatización. Este conocimiento te ayuda a navegar tu servicio de hosting con más eficiencia y gestionar tu servidor con mayor confianza.

Felicitaciones, has aprendido con éxito a usar el panel Windrose. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible a diario para ayudarte! 🙂