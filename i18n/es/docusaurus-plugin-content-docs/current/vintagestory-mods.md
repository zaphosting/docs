---
id: vintagestory-mods
title: "Vintage Story: Instalar Mods"
description: "Aprende cómo instalar mods en tu servidor de Vintage Story para añadir nuevas funciones y mecánicas de juego → Aprende más ahora"
sidebar_label: Instalar Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mods son una parte fundamental de la experiencia Vintage Story y permiten a los propietarios de servidores ampliar el juego con nuevas mecánicas, objetos, características de generación del mundo o mejoras de calidad de vida. Instalar mods en tu servidor garantiza que todos los jugadores conectados puedan beneficiarse de las mismas mejoras en la jugabilidad.

Vintage Story ofrece una gran biblioteca comunitaria de mods que van desde pequeños ajustes hasta revisiones completas del gameplay. Muchos de estos mods se pueden encontrar en la base de datos oficial de mods de Vintage Story o en los foros de la comunidad.

<InlineVoucher />

## Preparación

Antes de instalar mods en tu servidor de Vintage Story, asegúrate de haber completado los siguientes pasos:

- Descarga el mod deseado desde una fuente confiable como la base de datos de mods de Vintage Story
- Verifica que la versión del mod coincida con la versión del juego de tu servidor
- Detén tu servidor antes de subir nuevos archivos

La mayoría de los mods de Vintage Story se distribuyen como archivos `.zip` que no deben extraerse antes de la instalación.

## Instalación

Los mods para servidores de Vintage Story deben subirse directamente al sistema de archivos del servidor. Esto se hace conectándote al servidor vía [FTP](gameserver-ftpaccess.md). Primero, conecta con tu servidor usando un cliente FTP e inicia sesión con las credenciales FTP de tu servidor.

Una vez conectado, navega hasta el siguiente directorio:

```
/gxxxxxx/VintagestoryData/
```

Dentro de este directorio necesitas crear dos carpetas si aún no existen:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – contiene todos los mods instalados en el servidor  
- **ModConfigs** – almacena los archivos de configuración creados por los mods instalados

Después de crear estas carpetas, sube los archivos de los mods descargados a la carpeta **Mods**. Ejemplo de estructura:

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story carga automáticamente cualquier archivo mod colocado en esta carpeta al iniciar el servidor.

## Verificación de la instalación

Una vez que todos los archivos de los mods hayan sido subidos, vuelve a tu panel de gestión del servidor y arranca el servidor nuevamente. Durante el inicio, el servidor detectará los mods ubicados en la carpeta `Mods` y los cargará automáticamente. Si el mod requiere configuración, puede generar un nuevo archivo de configuración dentro de la carpeta `ModConfigs` después del primer arranque.

Después de que el servidor haya arrancado correctamente, conéctate y verifica que el mod esté activo. Los mods deberían aparecer en los logs del servidor durante el inicio. Si un mod no se carga, verifica lo siguiente:

- Que la versión del mod coincida con la versión del servidor
- Que todas las dependencias necesarias estén instaladas
- Que el archivo `.zip` esté ubicado dentro de la carpeta correcta `Mods`

## Conclusión

¡Felicidades! Has instalado con éxito mods en tu servidor de Vintage Story. Los mods te permiten ampliar la jugabilidad, introducir nuevas mecánicas y personalizar la experiencia para tu comunidad. Para cualquier duda o asistencia, no dudes en contactar a nuestro equipo de soporte, disponible a diario para ayudarte. 🙂

<InlineVoucher />