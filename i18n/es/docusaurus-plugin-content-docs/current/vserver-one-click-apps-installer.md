---
id: vserver-one-click-apps-installer
title: "VPS: Instalador de Apps con Un Clic"
description: "Despliega apps con el Instalador de Apps con Un Clic para VPS, gestiona proyectos desde la interfaz web y usa Coolify para una gestión avanzada -> Aprende más ahora"
sidebar_label: Instalador de Apps con Un Clic
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El Instalador de Apps con Un Clic te permite explorar un extenso catálogo de apps y desplegarlas directamente desde la interfaz web de tu VPS. En esta guía aprenderás cómo preparar tu servidor, elegir el tipo de instalación correcto, instalar y gestionar apps, y usar las configuraciones avanzadas y herramientas de solución de problemas cuando sea necesario.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Preparación

Antes de usar el Instalador de Apps con Un Clic, tu VPS debe cumplir con los requisitos mínimos y usar un sistema operativo soportado.

:::info Requisitos Mínimos
La función de apps requiere que tu VPS esté en línea y configurado con suficientes recursos para ejecutar tanto los servicios de la plataforma como las apps instaladas de forma fiable.
:::

| Requisito | Mínimo | Recomendado |
| --- | --- | --- |
| Estado del servidor | En línea | En línea |
| Almacenamiento | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 núcleos | 4 núcleos |
| Sistema operativo | Debian o Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Se Recomienda Sistema Operativo Nuevo
Se recomienda encarecidamente configurar la función de apps en una instalación fresca del sistema operativo. Esto ayuda a evitar conflictos con servicios existentes, puertos ocupados, configuraciones Docker o personalizaciones ya presentes en el servidor.
:::

Si necesitas reinstalar tu VPS antes de continuar, usa una imagen fresca soportada de Debian o Ubuntu LTS desde la interfaz de gestión de tu VPS.

## Accediendo al Instalador de Apps con Un Clic

Abre tu VPS en la interfaz web de ZAP-Hosting y localiza la sección de Apps con Un Clic. Desde ahí puedes iniciar la configuración inicial y luego volver para gestionar todas las apps instaladas en el servidor.

La primera vez que abras esta función, deberás elegir cómo se instalará la plataforma en tu VPS.

## Elegir un Tipo de Instalación

Puedes seleccionar entre una instalación completa o solo nodo. La opción correcta depende de si este VPS debe alojar tanto el panel de gestión como las apps, o solo actuar como un nodo vinculado para otro panel.

### Instalación Completa

Elige **Instalación Completa** si quieres configurar el servidor con el panel y el servidor como nodo. Esta es la opción recomendada para usuarios primerizos y para la mayoría de despliegues estándar.

Con este método puedes:

- desplegar apps desde el catálogo de apps
- gestionar proyectos y entornos
- organizar todas las apps en un solo lugar
- usar las herramientas integradas de gestión en la interfaz web
- acceder al panel avanzado más adelante si es necesario

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Recomendado para la Mayoría de Usuarios
Si es la primera vez que usas la función de apps, selecciona la opción de instalación completa. Proporciona la configuración más sencilla y te da gestión completa directamente desde la interfaz web de ZAP-Hosting.
:::

### Instalación Solo Nodo

Elige **Instalación Solo Nodo** si quieres que este VPS actúe solo como nodo. Luego puedes vincularlo a otro servidor VPS o a una instancia de panel externa.

Esta opción es útil si quieres:

- escalar entre varios sistemas VPS
- centralizar la gestión en un solo panel
- vincular este servidor a un despliegue existente
- ampliar una configuración multi-nodo ya en uso

:::note Opción Avanzada de Despliegue
La instalación solo nodo está pensada para usuarios que ya tienen otra instancia de panel disponible o que quieren conectar este servidor a un entorno externo.
:::

## Instalando la Función de Apps

Después de seleccionar el tipo de instalación, inicia la configuración desde la interfaz web. La instalación inicial suele tardar solo unos minutos.

Durante este proceso, los servicios de plataforma necesarios para la función de Apps con Un Clic se despliegan en tu VPS. Una vez completado, el catálogo de apps y las secciones de gestión estarán disponibles en la interfaz web.

:::info Comportamiento de la Instalación
Los detalles exactos del progreso de instalación pueden variar según el rendimiento de tu VPS, el estado del sistema operativo y las condiciones de red. Si la configuración no se completa con éxito, revisa la sección de solución de problemas más adelante en esta guía.
:::

## Navegando el Catálogo de Apps

Una vez finalizada la instalación, puedes abrir el catálogo de apps y explorar las apps disponibles. El catálogo contiene más de 300 apps listas para desplegar y soporta filtros para ayudarte a encontrar la app correcta rápidamente.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Buscar y Filtrar Apps

En el catálogo puedes buscar apps por nombre y filtrar por categoría. Esto te ayuda a reducir todas las apps disponibles en la interfaz estilo tienda y encontrar el destino de despliegue correcto para tu proyecto.

Acciones típicas incluyen:

- buscar por nombre de app
- filtrar por categoría
- revisar las entradas disponibles de apps
- seleccionar una app para desplegar

Este flujo de trabajo es especialmente útil si gestionas muchos destinos de descarga de apps o comparas varios servicios antes de la instalación.

### Iniciar la Instalación de una App

Después de seleccionar una app del catálogo, comienza la instalación desde la interfaz web. Dependiendo de la app, puede que necesites definir valores como:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Estos marcadores representan valores específicos para tu despliegue. Por ejemplo, `[your_domain]` debe ser reemplazado por el dominio que quieres usar para la app.

:::tip Proyectos y Entornos
Usa proyectos y entornos para mantener tu despliegue organizado. Esto es especialmente útil cuando alojas múltiples apps, pruebas versiones o separas servicios de producción y staging.
:::

## Gestionando Apps Instaladas

Después del despliegue, tus apps instaladas aparecen listadas en la sección de gestión de la interfaz web. Desde aquí puedes monitorear y controlar tus servicios sin trabajar manualmente con los contenedores subyacentes.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Acciones de Gestión Disponibles

La sección de apps instaladas te permite realizar acciones comunes del ciclo de vida directamente desde la interfaz web.

| Acción | Propósito |
| --- | --- |
| Iniciar | Inicia una app detenida |
| Detener | Detiene una app en ejecución |
| Ver logs | Abre los logs de la app para solución de problemas |
| Reinstalar | Vuelve a desplegar la app |

Estas herramientas facilitan gestionar todas las apps desde un solo lugar, especialmente si prefieres control web simple en lugar de administración manual por línea de comandos.

### Organizando Proyectos y Entornos

Proyectos y entornos te ayudan a estructurar tus despliegues claramente. Puedes usarlos para separar:

- apps personales y de producción
- entornos de prueba y en vivo
- múltiples despliegues para clientes o equipos
- diferentes stacks en el mismo VPS

Esta organización se vuelve cada vez más importante a medida que crece tu colección de apps y gestionas más servicios en uno o varios nodos.

## Dominios, Acceso Cloud y SSL

La función de Apps con Un Clic soporta dominios personalizados e integración con ZAP Cloud. Esto te permite exponer apps de forma segura y provisionar certificados SSL para tus despliegues.

:::info Soporte para Dominios y SSL
Puedes usar dominios personalizados para tus apps y beneficiarte del aprovisionamiento de certificados SSL donde la plataforma lo soporte.
:::

Al asignar un dominio, asegúrate de que tus registros DNS apunten a `[your_server_ip]`. Si tu dominio no está configurado correctamente, la app puede no ser accesible desde internet.

| Valor | Descripción |
| --- | --- |
| `[your_domain]` | El dominio o subdominio asignado a tu app |
| `[your_server_ip]` | La dirección IP pública de tu VPS |

:::caution El DNS Debe Apuntar a Tu VPS
Si el DNS para `[your_domain]` no apunta a `[your_server_ip]`, la validación del dominio y el acceso a la app pueden fallar.
:::

## Usando Configuraciones Avanzadas

Los usuarios avanzados pueden acceder a funcionalidades adicionales a través del panel externo disponible en la sección de configuraciones avanzadas.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Esto puede ser útil si necesitas personalización más profunda, control ampliado del despliegue o acceso directo a funciones más allá de la interfaz web estándar.

### Importante Limitación de Soporte

:::caution Alcance del Soporte para Uso del Panel Avanzado
Los usuarios avanzados pueden usar el panel externo Coolify para personalización y funcionalidades adicionales. Sin embargo, el soporte está limitado a la interfaz web de ZAP-Hosting. Si haces cambios fuera de la interfaz web, puede que no haya asistencia para esas modificaciones personalizadas.
:::

### Cuándo Usar el Panel Avanzado

Puede que quieras usar el panel avanzado si necesitas:

- personalización detallada del despliegue
- flujos de trabajo de vinculación directa de nodos
- configuración avanzada de apps
- gestión a nivel de panel más allá de la interfaz simplificada

Si pierdes acceso o la integración deja de responder, usa las herramientas de solución de problemas descritas abajo antes de hacer cambios manuales.

## Vinculando Nodos

Si seleccionaste la instalación solo nodo, puedes vincular este VPS a otro servidor VPS o a una instancia de panel externa. Esto te permite escalar tu infraestructura y gestionar múltiples nodos desde un solo lugar.

La vinculación de nodos es útil cuando quieres:

- distribuir apps entre varios sistemas VPS
- centralizar la gestión
- ampliar capacidad sin crear despliegues aislados
- conectar a un entorno de panel externo

:::note Vinculación a Panel Externo
Puedes vincular tu nodo a otro VPS o a una instancia de panel externa. Los detalles exactos de vinculación dependen del entorno destino ya en uso.
:::

## Solución de Problemas con Estado Degradado

Si la interfaz web muestra un estado degradado, significa que la plataforma no puede contactar o recuperar datos de la instancia que impulsa la función de Apps con Un Clic. Sigue los pasos de solución de problemas en orden cronológico.

### Indicadores de Estado

El popup de solución de problemas puede mostrar indicadores como los siguientes:

| Estado | Significado |
| --- | --- |
| Estado Coolify: Activo | El servicio del panel parece estar funcionando |
| Estado API: Accesible | La API puede ser alcanzada actualmente |
| Estado Servicio: En línea | Tu VPS está en línea |

Si una o más partes no funcionan correctamente, continúa con los pasos siguientes.

### Paso 1: Confirma que el VPS Está En Línea

Primero, asegúrate de que tu servicio VPS esté en línea en la interfaz web de ZAP-Hosting. Si el servidor está offline, la plataforma de apps no puede funcionar.

### Paso 2: Refrescar el Estado

Usa la acción **Refrescar Estado** para ejecutar la comprobación de salud nuevamente con los datos más recientes. Esto puede resolver problemas temporales e intermitentes.

:::tip Problemas Temporales de Conectividad
Un estado degradado a veces puede ser causado por un problema de comunicación breve. Refrescar el estado es la primera comprobación más rápida.
:::

### Paso 3: Reiniciar Docker

Si el estado sigue degradado, usa la acción **Reiniciar Docker**. Esto fuerza a la instancia de la plataforma a reiniciarse. Tras una respuesta exitosa, espera `1-2 minutos` y refresca el estado otra vez.

:::caution Reinicio del Servicio
Reiniciar Docker puede interrumpir temporalmente las apps en ejecución mientras los servicios se reinician.
:::

### Paso 4: Refrescar Credenciales

Como último paso, usa **Refrescar Credenciales**. Esto es especialmente importante si el estado aparece en línea pero funciones de la interfaz web como la instalación de apps no funcionan.

Esta acción:

- **no** borra tus datos
- refresca las credenciales del usuario root
- refresca el token API usado por la interfaz web
- actualiza automáticamente las credenciales del panel al tener éxito

:::info Refresco Seguro de Credenciales
Refrescar credenciales no elimina tus apps instaladas ni datos de despliegue. Solo renueva las credenciales necesarias para acceso y comunicación.
:::

### Cuándo Contactar Soporte

Si el problema persiste después de completar todos los pasos de solución de problemas, crea un ticket de soporte a través del sitio web de ZAP-Hosting.

## Buenas Prácticas

Para mantener el Instalador de Apps con Un Clic estable y fácil de gestionar, sigue estas recomendaciones:

| Buena práctica | Razón |
| --- | --- |
| Usa una instalación fresca del SO | Reduce conflictos con servicios y puertos existentes |
| Cumple con los recursos recomendados | Mejora rendimiento y fiabilidad |
| Organiza apps en proyectos y entornos | Mantiene los despliegues manejables |
| Configura DNS antes de asignar dominios | Evita problemas de acceso y SSL |
| Usa configuraciones avanzadas con cuidado | Evita cambios personalizados no soportados |

:::tip Mantén tus Despliegues Organizados
Si planeas alojar muchas apps, crea un esquema claro de nombres para `[your_project_name]`, `[your_environment_name]` y `[your_app_name]` antes de desplegar tus primeros servicios.
:::

## Conclusión

¡Felicidades! Has configurado y usado con éxito el Instalador de Apps con Un Clic para VPS para desplegar y gestionar apps en tu servidor. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible a diario para asistirte.

<InlineVoucher />