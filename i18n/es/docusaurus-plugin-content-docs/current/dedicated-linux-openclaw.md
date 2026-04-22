---
id: dedicated-linux-openclaw
title: "Configura OpenClaw en un Servidor Linux - ¡Crea tu Asistente AI Personal!"
description: "Descubre cómo instalar y configurar OpenClaw para autoalojamiento y construir un asistente AI personal y potente de código abierto → Aprende más ahora"
sidebar_label: Instalar OpenClaw
services:
  - vserver-service-openclaw
  - dedicated-service-openclaw
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[OpenClaw](https://openclaw.ai/) es una plataforma de automatización y control impulsada por IA que te permite interactuar con software a través de una interfaz basada en navegador. En lugar de hacer clic manualmente en menús, navegar por interfaces de usuario o repetir los mismos flujos de trabajo una y otra vez, OpenClaw puede ejecutar tareas programáticamente y ofrecer capacidades de control remoto mediante su panel web.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Lo que hace a OpenClaw especialmente revolucionario es que habilita una “capa de control” moderna para aplicaciones y sistemas. En lugar de estar atado a una sesión local de escritorio, OpenClaw puede ejecutarse en una máquina remota como un VPS o servidor dedicado y seguir siendo totalmente gestionable desde cualquier lugar. Esto lo convierte en una herramienta poderosa para usuarios que quieren automatización confiable, control remoto y gestión centralizada sin necesidad de mantener un equipo encendido localmente.

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y todo lo que necesitas tener en cuenta.



## Instala OpenClaw con el Instalador de Apps One Click

Puedes instalar **OpenClaw** directamente a través de nuestro **Instalador de Apps One Click** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de apps, busca **OpenClaw** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y amigable de desplegar y gestionar **OpenClaw** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada basada en web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

<InlineVoucher />

## Casos de uso de OpenClaw

OpenClaw puede usarse en muchos escenarios cotidianos y es ideal para cualquiera que quiera automatizar tareas, centralizar el uso de IA o ejecutar un asistente persistente siempre disponible.

Un caso común es consolidar interacciones con IA a través de múltiples plataformas. En lugar de usar herramientas separadas para diferentes apps de mensajería, OpenClaw puede actuar como un asistente único con contexto y configuración consistentes, independiente de dónde se acceda.

OpenClaw también es útil para automatización. Puede ayudar a reducir trabajo manual repetitivo manejando tareas recurrentes, organizando información, resumiendo contenido y proporcionando respuestas estructuradas.

Otro caso importante es la automatización web. Controlando sesiones de navegador mediante instancias dedicadas de Chrome o Chromium, OpenClaw puede interactuar con interfaces web incluso cuando no existe integración directa vía API.

Para soportar estos escenarios, OpenClaw ofrece una amplia gama de capacidades, incluyendo soporte multi-canal para mensajería (como WhatsApp, Telegram, Slack y Discord), arquitectura basada en gateway para gestionar sesiones y canales, funciones opcionales de voz, interfaz de lienzo interactivo, plataforma extensible de skills, soporte para múltiples proveedores de IA (incluyendo OpenAI y Anthropic), nodos de dispositivo para acciones móviles, autenticación por clave API y gestión persistente de espacio de trabajo y configuración.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Requisitos previos

Dependiendo de cómo planees usar **OpenClaw**, el consumo de recursos puede aumentar rápido. Mientras que configuraciones básicas (por ejemplo, solo usar la UI web con automatización mínima) funcionan bien en planes VPS pequeños, casos de uso más avanzados como ejecutar múltiples canales, activar muchas skills o usar automatización de navegador pueden ser mucho más exigentes en recursos y para estos casos recomendamos encarecidamente usar un servidor dedicado.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 8 núcleos vCPU             |
| RAM        | 4 GB         | 16 GB                      |
| Espacio en disco | 25 GB        | 50 GB                      |

<InlineServiceLink />


## Instalación
La instalación comienza ejecutando el script oficial de instalación de OpenClaw en tu servidor Linux dedicado. Conéctate a tu servidor vía SSH y ejecuta el siguiente comando:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Después de ejecutar el comando, se lanzará automáticamente un script de instalación interactivo que te guiará durante la configuración. El instalador verifica tu entorno, instala dependencias faltantes y luego inicia el proceso de onboarding de OpenClaw.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)


### Detección de plataforma y verificación de dependencias

El instalador detecta automáticamente tu sistema operativo e instala las dependencias necesarias si hacen falta.
 Por ejemplo, si falta Node.js, se instalará automáticamente. No se requiere ninguna acción manual.



### Instalación de paquetes requeridos

OpenClaw instala los paquetes necesarios usando el gestor de paquetes del sistema. No se requiere ninguna acción manual. Una vez instalados todos los paquetes requeridos, el instalador continúa automáticamente.

### Instalación de OpenClaw

Una vez preparadas las dependencias, el instalador descarga e instala la versión de OpenClaw. Cuando el proceso finalice, deberías ver una confirmación como esta:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### Onboarding de OpenClaw

Después de instalar OpenClaw, el asistente de onboarding se inicia automáticamente. Este onboarding es necesario para completar la configuración inicial y hacer que OpenClaw sea usable.



Primero, lee el aviso de seguridad mostrado y confírmalo para continuar. Luego, selecciona el modo de onboarding. Para la mayoría de usuarios, **QuickStart** es la opción recomendada.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Después, elige tu modelo/proveedor de autenticación. En este ejemplo, se selecciona **OpenAI**. Ahora ingresa tu clave API de OpenAI. OpenClaw almacenará la clave localmente en su configuración para usarla en futuras sesiones. Una vez guardada la clave API, selecciona el modelo por defecto que OpenClaw debe usar.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

En los pasos finales, puedes configurar opcionalmente canales (como Telegram, Discord o Slack), skills y hooks. Si no quieres configurar estas opciones ahora, puedes saltarlas y continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Si quieres usar OpenClaw vía Telegram, primero necesitas crear un bot de Telegram y obtener su token API. Esto se hace directamente en Telegram usando la cuenta oficial **BotFather**.

Abre el chat con **BotFather**, inicia el proceso enviando `/newbot` y sigue las indicaciones.  
BotFather primero pedirá un nombre para mostrar, luego un nombre de usuario. El nombre de usuario debe terminar con `bot`.

La conversación suele ser así:

```
Usuario: /newbot 

BotFather: Muy bien, un nuevo bot. ¿Cómo lo vamos a llamar? Por favor elige un nombre para tu bot.  

Usuario: ZAP DOCS EXAMPLE

BotFather: Bien. Ahora elige un nombre de usuario para tu bot. Debe terminar en `bot`. Por ejemplo: TetrisBot o tetris_bot. 

Usuario: ZAP_DOCS_EXAMPLE_BOT 

BotFather: ¡Listo! Felicidades por tu nuevo bot. Lo encontrarás en t.me/ZAP_DOCS_EXAMPLE_BOT. Ahora puedes añadir una descripción, sección "acerca de" y foto de perfil para tu bot, consulta /help para una lista de comandos. Por cierto, cuando termines de crear tu bot genial, contacta a nuestro Soporte de Bots si quieres un nombre de usuario mejor. Solo asegúrate de que el bot esté completamente operativo antes de hacerlo.

Usa este token para acceder a la API HTTP:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Mantén tu token seguro y guárdalo bien, cualquiera que lo tenga puede controlar tu bot.

Para una descripción de la API de Bots, consulta esta página: https://core.telegram.org/bots/api
```

Después de que BotFather confirme la creación del bot, copia el **token** mostrado y guárdalo de forma segura. Lo necesitarás más adelante para conectar Telegram como canal en el onboarding o configuración de OpenClaw. Cualquiera con este token puede controlar tu bot, así que nunca debe compartirse públicamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Tras crear el bot de Telegram y guardar el token, puedes continuar con el onboarding de OpenClaw. En los siguientes pasos, OpenClaw te permite instalar **skills** y activar **hooks**. Estas opciones son recomendadas, pero también pueden saltarse y configurarse más tarde en la sección de configuración si prefieres terminar primero la instalación.

Una vez completado el onboarding, OpenClaw instala automáticamente el **servicio Gateway**. Finalmente, selecciona la opción **Web UI** para que OpenClaw imprima el enlace al panel. Esto te permite acceder a la UI de control de OpenClaw y seguir gestionando tu configuración desde el navegador.

Después, el onboarding se marcará como completado. Al final de la configuración, OpenClaw también ofrece instalar el **script de autocompletado para shell**. Esto es opcional, pero recomendado, ya que mejora la usabilidad en línea de comandos habilitando autocompletado para comandos de OpenClaw. Sigue estos pasos.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)


<InlineVoucher />


## Configuración

Nuestros servidores VPS y servidores dedicados se entregan sin interfaz gráfica por defecto. Por eso, OpenClaw funciona en modo headless y expone su UI de control solo localmente en el servidor en el puerto `18789`.

Una vez completada la instalación y onboarding, OpenClaw imprime la información del panel en la salida de consola:

```
Enlace al panel (con token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copia/pega esta URL en un navegador en esta máquina para controlar OpenClaw.
No se detectó GUI. Ábrelo desde tu computadora:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Luego abre:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Como la interfaz web está ligada a `127.0.0.1`, no puede accederse directamente desde internet. Para accederla de forma segura desde tu PC, crea un túnel SSH que reenvíe el puerto de OpenClaw desde el VPS/servidor dedicado a tu máquina local.

En tu PC, abre una terminal y ejecuta:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Mientras esta sesión SSH esté abierta, podrás acceder a la UI de control de OpenClaw en tu navegador usando esta URL:

```
http://localhost:18789/
```

Si OpenClaw requiere autenticación, abre el enlace con token mostrado en la salida de OpenClaw:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Usa una GUI (Entorno de Escritorio)

Si prefieres usar OpenClaw con interfaz gráfica, puedes instalar un entorno de escritorio en tu VPS/servidor dedicado, por ejemplo **XFCE**. Tras instalar una GUI (y una solución de escritorio remoto como RDP o VNC), podrás acceder y controlar OpenClaw directamente desde el escritorio del servidor dedicado en lugar de usar reenvío de puertos SSH.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Instalación de skills

Las skills amplían OpenClaw con funcionalidades e integraciones adicionales.
 OpenClaw incluye más de 50 skills. Puedes instalarlas directamente en el panel abriendo la sección **Skills** y seleccionando las que quieras activar.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Activación de hooks

Los hooks permiten que OpenClaw ejecute acciones automáticamente cuando ocurren ciertos eventos o se usan comandos específicos.
 Esto es útil para automatizar tareas recurrentes, guardar contexto o disparar flujos de trabajo sin interacción manual.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Configuración de canales

Los canales te permiten usar OpenClaw a través de plataformas de mensajería.
 En el panel puedes configurar y conectar canales soportados como Telegram, Discord, Slack y otros.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Dependiendo de la plataforma seleccionada, deberás proporcionar tokens o credenciales adicionales (por ejemplo, como se explicó en el proceso de instalación para el token del bot de Telegram creado vía BotFather). 



Una vez que un canal está conectado con éxito, OpenClaw puede recibir y responder mensajes a través de esa plataforma. Una conversación con el asistente AI vía Telegram podría verse así:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Consideraciones de seguridad

OpenClaw es una herramienta poderosa y siempre debe usarse con las precauciones de seguridad adecuadas. El panel Gateway está protegido por un token, que funciona como una contraseña y otorga acceso a tu instancia de OpenClaw. Nunca compartas este token públicamente (por ejemplo, en capturas de pantalla, tickets o chats), ya que cualquiera con el token puede acceder y controlar el panel.

Se recomienda mantener OpenClaw protegido detrás de un firewall y evitar exponer la interfaz del gateway directamente a internet público. Por defecto, OpenClaw liga el servicio gateway a `127.0.0.1`, lo que previene acceso externo y es la opción más segura para la mayoría de casos. Para acceder al panel remotamente, usa reenvío de puertos SSH y restringe el acceso solo a usuarios de confianza.

<InlineServiceLink />



## Conclusión y más recursos

¡Felicidades! Ahora has instalado y configurado OpenClaw exitosamente en tu VPS o servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante la configuración de tu servidor:

- [openclaw.ai](https://https://openclaw.ai/) - Sitio Oficial
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - Documentación de OpenClaw
- [clawhub.com](https://clawhub.com/) - ClawHub - Skills creadas por la comunidad

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂