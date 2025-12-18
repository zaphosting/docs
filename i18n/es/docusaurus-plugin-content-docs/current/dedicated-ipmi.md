---
id: dedicated-ipmi
title: "Servidor Dedicado: Gestión del Servidor vía IPMI"
description: "Descubre cómo gestionar completamente tu Servidor Dedicado Enterprise con IPMI para un control y monitoreo sin complicaciones → Aprende más ahora"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Nuestros Servidores Dedicados AMD Ryzen se gestionan a través de **Supermicro IPMI**, una solución potente y probada de gestión fuera de banda diseñada para entornos profesionales de servidores. A diferencia de nuestras configuraciones basadas en Intel, que usan HPE iLO, la plataforma AMD Ryzen utiliza hardware Supermicro y por lo tanto ofrece IPMI como su interfaz nativa de gestión.

Supermicro IPMI ofrece control remoto total sobre tu servidor, independiente del estado del sistema operativo. Puedes encender o apagar el sistema, reiniciarlo, monitorear la salud del hardware, acceder a sensores y usar la consola remota para trabajar directamente en el servidor como si estuvieras físicamente en el lugar. Esto garantiza máximo control, tiempos de reacción rápidos y administración confiable incluso en situaciones críticas.


## Acceso a IPMI
Abre el panel de tu Servidor Dedicado ZAP con el navegador que prefieras. Allí ya encontrarás la información más importante sobre tu IPMI.
Para activar el IPMI simplemente haz clic en **Activar IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Ten en cuenta que puede tardar unos segundos hasta que tu IPMI esté completamente disponible. 
Cuando el sistema haya iniciado la interfaz de gestión y sea accesible, verás la información de inicio de sesión.
Para abrir el IPMI haz clic en la dirección IP mostrada y usa las credenciales para iniciar sesión.



## Resumen

¿Quieres saber cómo está estructurada la interfaz de gestión IPMI y para qué sirve cada área? Este resumen presenta las diferentes páginas de la interfaz y destaca cómo se organizan el monitoreo, la información del hardware y la gestión remota.

Te ofrece un punto de partida guiado para explorar el entorno IPMI y entender cómo las vistas individuales trabajan juntas para darte control total y visibilidad sobre el servidor.

### Panel

Ofrece una vista consolidada del estado actual del servidor y las funciones clave de gestión. Se muestra información del sistema como modelo de hardware, versión del BIOS, firmware del BMC y estado operativo para referencia rápida.

La sección de energía muestra el estado actual de encendido y las lecturas de consumo, permitiendo control directo sobre encendido, apagado y reinicio, además de ofrecer información sobre el uso energético.

Desde esta página tienes acceso directo a la consola remota, que permite control total remoto de teclado, video y ratón para tareas como instalación del sistema operativo, solución de problemas y mantenimiento, independiente del estado del servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### Sistema

#### Información de Componentes

Muestra un resumen detallado de los componentes de hardware instalados y su estado actual. Se proporciona información para CPU, módulos de memoria, fuentes de alimentación, entrega de energía, AOC de red, sensores y componentes de refrigeración.

Cada sección presenta detalles específicos del hardware como información del modelo, configuración y estado operativo. Los indicadores de estado permiten identificar rápidamente componentes saludables, así como advertencias o fallos.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Registro de Eventos de Salud

Lista eventos relacionados con el sistema registrados por el controlador de gestión, proporcionando un historial cronológico de actividades de hardware y salud. Las entradas incluyen eventos de energía, procesos de arranque, violaciones de umbrales de sensores, advertencias de temperatura, irregularidades de voltaje y errores de hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Monitoreo de Almacenamiento

Ofrece una visión general de los dispositivos de almacenamiento conectados y su estado operativo actual. La información incluye discos detectados, tipo de interfaz, capacidad e indicadores de salud reportados por el controlador y sensores disponibles.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configuración

#### Servicios de Cuenta

Muestra una lista de las cuentas de usuario existentes con sus roles asignados y niveles de permiso. La página es para fines informativos, permitiendo ver qué cuentas tienen acceso a la interfaz de gestión. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notificaciones

Muestra la configuración actual para notificaciones del sistema y manejo de alertas. Esta sección indica qué tipos de eventos pueden activar notificaciones, como fallos de hardware, umbrales de temperatura, problemas de energía o advertencias de sensores.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Red

Muestra la configuración de red de la interfaz de gestión. Esto incluye la dirección IP asignada, máscara de subred, gateway, dirección MAC y el estado actual del enlace del puerto de red IPMI.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Medios Virtuales

Permite el uso de imágenes de medios remotos a través de la interfaz de gestión. Muestra el estado de medios virtuales montados como imágenes ISO o dispositivos de almacenamiento remoto conectados al servidor.

Los medios virtuales pueden usarse para arrancar el sistema, instalar un sistema operativo o realizar tareas de recuperación y mantenimiento sin acceso físico al hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### Configuración BMC

Muestra detalles de configuración del Controlador de Gestión Baseboard (BMC). Esta sección proporciona información sobre la versión del firmware, datos de identificación del sistema y comportamiento general del controlador.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Control Remoto

Ofrece acceso a funciones usadas para la interacción remota directa con el servidor. Esta sección incluye opciones de control de energía como encendido, apagado, reinicio y apagado ordenado.

También sirve como punto de entrada a funciones de gestión remota que permiten interactuar con el sistema independientemente del estado del sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Mantenimiento

#### Gestión de Firmware

Ofrece información sobre el nivel de firmware del entorno de gestión, incluyendo el firmware activo del BMC y componentes relacionados. Se pueden revisar versiones de firmware y su estado actual para confirmar la consistencia de la pila de gestión. Las acciones de actualización o modificación no están disponibles para clientes.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Registro de Eventos de Mantenimiento

Registra actividades relacionadas con mantenimiento y acciones a nivel de sistema realizadas a través de la interfaz de gestión. Las entradas registradas incluyen cambios de configuración, operaciones relacionadas con firmware, reinicios y acciones administrativas.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Problemas Comunes, Tips & Trucos

- **El servidor no arranca o se queda atascado durante el POST:**
   Si el servidor no completa el proceso de arranque o parece quedarse atascado durante el POST, abre la consola remota para identificar la etapa exacta donde se detiene. Allí pueden verse mensajes de inicialización de hardware o errores.
   Realiza un ciclo de energía usando las opciones de control de energía forzando un apagado por unos segundos y luego encendiendo el servidor de nuevo. Si el sistema sigue sin arrancar, contacta con soporte.

- **La consola remota no se abre o queda en negro:**
   Asegúrate de que la sesión de consola remota no esté ya en uso por otra conexión. Cierra cualquier sesión existente y prueba de nuevo.
   En algunos casos, refrescar el navegador o volver a abrir la consola resuelve problemas de carga. Si el problema persiste, verifica que el servidor esté encendido y accesible.

- **El ISO de medios virtuales no se detecta:**
   Verifica que la fuente ISO sea accesible y que el archivo pueda abrirse directamente, por ejemplo abriendo el enlace en un navegador.
   Confirma que el medio virtual esté correctamente montado y reinicia el servidor después de adjuntar el ISO. También revisa el orden de arranque para asegurar que los medios virtuales CD/DVD tengan prioridad.

- **El servidor tarda mucho en arrancar:**
   Los tiempos largos de arranque son normales en hardware de nivel enterprise. La inicialización del hardware, chequeos del controlador y entrenamiento de memoria pueden tomar varios minutos, especialmente tras un ciclo completo de energía.

- **La interfaz IPMI está temporalmente inaccesible:**
   Tras cambios de configuración o inactividad prolongada, la interfaz de gestión puede estar temporalmente no disponible. Espera unos minutos y vuelve a intentarlo.
   Si el acceso no vuelve, contacta con soporte para verificar el estado de la interfaz de gestión.



## Conclusión

Esto debería facilitar mucho tu administración una vez que hayas leído todo en detalle. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂