---
id: dedicated-dashboard
title: "Servidor Dedicado: Vista General del Panel"
description: "Descubre cómo gestionar y optimizar tu Servidor Dedicado de forma eficiente con una vista clara de las funciones clave y herramientas de administración → Aprende más ahora"
sidebar_label: Panel
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Estás interesado en un **Servidor Dedicado** o ya tienes uno, pero aún te falta una visión completa de la administración y la localización de todas las opciones necesarias? Especialmente al principio, esto puede ser un reto. Pero no te preocupes, aquí te ofrecemos una introducción detallada a la administración de tu servicio para que tengas la mejor vista posible.

Después de seguir esta guía, podrás gestionar tu Servidor Dedicado de manera eficiente y encontrar todas las opciones y funciones necesarias rápida y fácilmente. Aquí obtendrás una visión estructurada que te ayudará paso a paso a familiarizarte con la administración del Servidor Dedicado y ampliar tus conocimientos de forma dirigida. Así, podrás asegurarte de que tu **Servidor Dedicado** esté configurado óptimamente según tus necesidades y sacar el máximo provecho de las opciones disponibles.



## Administración del Producto

En la sección de **Administración del Producto** encontrarás todas las páginas necesarias para gestionar tu Servidor Dedicado. Las opciones para administrar tu Servidor Dedicado se detallan a continuación.



### Panel

El panel ofrece una vista central de toda la información importante relacionada con el Servidor Dedicado. Muestra el estado actual, dirección del servidor, nombre de host, sistema operativo instalado, carga del sistema incluyendo uso de CPU y RAM, y tráfico de red. Esta vista apoya una monitorización y gestión efectiva del entorno del servidor virtual.

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)



### Registro de eventos

Mantén un ojo en todas las tareas administrativas y eventos del sistema en un solo lugar. El registro de eventos recopila todas las actividades relevantes, para que siempre sepas quién hizo cambios, cuándo ocurrieron y qué se vio afectado.

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)



### Estadísticas
Las cifras detalladas de tráfico te muestran exactamente cuántos datos maneja tu servidor, tanto entrantes como salientes. Las lecturas actuales de temperatura y valores de velocidad del ventilador te ayudan a mantener tu hardware dentro de un rango seguro de operación en todo momento.

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)



### Estado del hardware

Controla todos los detalles esenciales del hardware en un solo lugar. Revisa qué versiones de firmware están instaladas actualmente, incluyendo System ROM, iLO y el Controlador de Almacenamiento, y monitorea el estado de tu CPU, RAM, interfaces de red y discos conectados en tiempo real.

Los datos detallados del hardware te ayudan a detectar posibles problemas temprano y aseguran que tu servidor funcione de forma fiable. También tienes acceso a un registro claro de todos los trabajos de mantenimiento realizados, para que siempre sepas qué actualizaciones o reparaciones se hicieron y cuándo.

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## Configuración

En la sección de **Configuración** encontrarás todas las páginas necesarias para configurar tu Servidor Dedicado. Las opciones disponibles para configurar tu Servidor Dedicado se detallan a continuación.

### Instalación inicial
Antes de poder usar tu servidor dedicado de forma productiva, se requiere una configuración inicial. Esto incluye activar la interfaz de gestión iLO, seleccionar y montar una imagen ISO, e instalar el sistema operativo que desees. El asistente de configuración te guía paso a paso en este proceso, asegurando un inicio sin complicaciones incluso sin experiencia previa. Instrucciones detalladas las encontrarás en nuestra [Guía de Configuración Inicial](dedicated-setup.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### Configuración

Ajusta las opciones de configuración para tu servidor dedicado. Aquí tienes control total para cambiar ajustes como el modo de energía, ayudándote a optimizar tu servidor para que se adapte a tus necesidades específicas.

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)



### Gestor DDoS

Consulta ataques DDoS pasados para evaluar mejor posibles amenazas y patrones. Activa notificaciones para ataques DDoS en curso en tu servidor y reacciona rápido cuando ocurra un incidente.

Dependiendo de la ubicación del servidor y la protección DDoS disponible allí, también puedes monitorear ataques activos en tiempo real. Esto incluye detalles del tráfico, mostrando tanto el tráfico legítimo como la cantidad bloqueada por los sistemas de mitigación. Este nivel de transparencia te ayuda a entender cómo funciona la protección y te permite identificar riesgos potenciales temprano.

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)



### Gameserver / TS3

Con esta función, puedes configurar y gestionar servicios de servidor de juegos y servidor de voz en solo unos clics. La interfaz web se encarga de todo el proceso de instalación, por lo que no necesitas conocimientos técnicos profundos.

Puedes crear nuevos servidores de juegos o servidores de voz cuando los necesites, ajustar configuraciones como slots o recursos, y controlarlos cómodamente desde tu panel web de ZAP. Esto hace que gestionar múltiples servidores sea rápido, flexible y sencillo. Todo en un solo lugar.

:::warning Compatibilidad del Sistema Operativo 
Esta función solo es compatible con sistemas operativos Linux seleccionados. Para más información sobre cómo configurar y usar la interfaz GS/TS3, consulta nuestra [Guía de la Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)



### Editar rDNS

Ajusta la entrada de DNS inverso (registro PTR) para la dirección IP de tu servidor para que apunte al nombre de host correcto. Un rDNS configurado correctamente ayuda a asegurar que el nombre de tu Servidor Dedicado se resuelva bien y es especialmente importante para operar un servidor de correo. Sin un rDNS válido, los correos salientes pueden ser marcados como spam o no entregarse de forma fiable.

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)



### Direcciones IP

Consulta todas las direcciones IP asignadas a tu servidor de un vistazo. Esta vista muestra detalles importantes de configuración como dirección IP, máscara de subred y gateway. También puedes verificar si una IP es accesible o no, ayudándote a confirmar que la configuración de red está correcta en el sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)



## Herramientas

La sección de **Herramientas** contiene todas las herramientas esenciales para gestionar el Servidor Dedicado. Las opciones disponibles para configurar el servidor se describen en detalle a continuación y permiten una personalización precisa según los requisitos específicos.



### Reiniciar tráfico

Controla el uso mensual de tu tráfico. Esta sección muestra cuánto del tráfico incluido ya has consumido. Si alcanzas tu límite antes de que termine el mes, también tienes la opción de reiniciar tu tráfico anticipadamente por un coste adicional.

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)



### Gestión remota iLO / ISO

Obtén acceso remoto seguro a tu hardware del servidor en cualquier momento. Aquí puedes ver tus datos de acceso iLO, activar funciones de gestión remota y usar la interfaz iLO para realizar tareas importantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## Enlaces adicionales
La sección de enlaces adicionales ofrece referencias relevantes para el uso y gestión del producto. Pueden incluir documentación, herramientas o recursos externos relacionados con el servicio específico.

### Preguntas Frecuentes
La sección de **Preguntas Frecuentes** ofrece un resumen de las dudas más comunes de nuestros clientes. Aquí encontrarás respuestas útiles e información detallada sobre varios temas para ayudarte rápida y eficientemente.

### Documentación de ZAP-Hosting
Ofrecemos documentación extensa para nuestros productos, que sirve como base de conocimiento para las preguntas y dudas más frecuentes. Allí encontrarás diversas guías y ayudas sobre diferentes temas que te asistirán en el uso y gestión de tu producto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)