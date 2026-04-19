---
id: windrose-password-protection
title: "Windrose: Protección con Contraseña"
description: "Configura una contraseña en tu servidor de juegos Windrose para proteger el acceso y gestiona la configuración de cambio de contraseña de forma segura en la configuración del servidor -> Aprende más ahora"
sidebar_label: Protección con Contraseña
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Windrose soporta protección con contraseña, lo que te permite restringir el acceso a tu servidor dedicado con una contraseña de ingreso. En esta guía, aprenderás cómo activar, cambiar o eliminar la contraseña en tu servidor Windrose usando la gestión de servidores de juegos de ZAP-Hosting.

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor Windrose en la interfaz web de ZAP-Hosting y permiso para editar archivos del servidor.

:::info Acceso Requerido
Necesitas acceso a tu panel de servidor y al área de gestión de archivos para poder editar el archivo `ServerDescription.json`.
:::

## Entendiendo la Protección con Contraseña en Windrose

Configurar una contraseña ayuda a evitar que jugadores no autorizados se unan a tu servidor de juegos Windrose. Los jugadores aún pueden acceder al servidor mediante el código de invitación, pero deben ingresar la contraseña correcta antes de conectarse.

Esto es útil si quieres:
- limitar el acceso a amigos, staff o un grupo privado
- proteger un servidor de pruebas del acceso público
- controlar quién puede unirse sin depender de un gestor de contraseñas externo o sistema de contraseñas de cuenta

:::note Comportamiento de la Contraseña
Windrose usa la contraseña configurada en el archivo del servidor. Esto es independiente de la contraseña de tu cuenta ZAP-Hosting y no está relacionado con herramientas como gestores de contraseñas, integración con Google Password Manager o listas de contraseñas.
:::

## Activar la Protección con Contraseña

Para aplicar una contraseña, primero debes detener el servidor, editar el archivo de configuración y luego iniciar el servidor nuevamente.

### Detener el Servidor

Abre el panel de tu servidor en la interfaz web de ZAP-Hosting y detén el servidor completamente antes de hacer cambios.

:::caution Detén el Servidor Antes de Editar
Debes detener el servidor antes de editar `ServerDescription.json` para evitar conflictos de configuración o que el archivo sea sobrescrito mientras el servidor está en ejecución.
:::

### Abrir el Archivo de Configuración

En la barra lateral del panel, abre `Archivos`.

Luego localiza y abre el archivo `ServerDescription.json` en el directorio raíz de la lista de archivos de tu servidor.

### Editar la Configuración de la Contraseña

Dentro de `ServerDescription.json`, establece `IsPasswordProtected` en `true` y define tu contraseña deseada en el campo `Password`.

```json
"IsPasswordProtected": true,
"Password": "TuContraseñaAquí"
```

Reemplaza `TuContraseñaAquí` con tu propia contraseña segura.

:::tip Elige una Contraseña Fuerte
Usa una contraseña única que no reutilices de tu contraseña de cuenta ni de ningún otro servicio. Esto ayuda a proteger tu servidor Windrose de accesos no deseados.
:::

### Guardar y Reiniciar el Servidor

Después de editar el archivo, haz clic en `Guardar Contenido`.

Una vez guardado el archivo, inicia tu servidor nuevamente desde el panel. Tu servidor Windrose ahora requerirá la contraseña configurada cuando los jugadores intenten unirse.

## Referencia de Configuración

La siguiente tabla explica las configuraciones relevantes en `ServerDescription.json`:

| Clave | Tipo | Ejemplo | Descripción |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Booleano | `true` | Activa o desactiva la protección con contraseña |
| `Password` | Cadena | `"TuContraseñaAquí"` | Define la contraseña de ingreso usada cuando la protección está activada |

## Cambiar la Contraseña Existente

Si quieres cambiar la contraseña más adelante, el proceso es el mismo que la configuración inicial.

### Actualizar el Valor de la Contraseña

Detén el servidor, abre `ServerDescription.json` y cambia el valor en el campo `Password` por tu nueva contraseña.

Ejemplo:

```json
"IsPasswordProtected": true,
"Password": "[tu_nueva_contraseña]"
```

El marcador `[tu_nueva_contraseña]` representa la nueva contraseña que quieres que los jugadores usen para unirse al servidor.

### Guardar y Reiniciar de Nuevo

Guarda el archivo y reinicia el servidor para que el cambio de contraseña tenga efecto.

:::note Verificación de Contraseña
Si los jugadores no pueden unirse después de un cambio de contraseña, pídeles que revisen cuidadosamente la entrada de la contraseña, incluyendo mayúsculas y minúsculas si aplica.
:::

## Eliminar la Protección con Contraseña

Si ya no quieres proteger tu servidor Windrose con contraseña, puedes desactivar esta función en el mismo archivo de configuración.

### Desactivar la Configuración

Detén el servidor y abre `ServerDescription.json` nuevamente.

Establece `IsPasswordProtected` en `false`. El valor de `Password` se ignora cuando esta opción está desactivada.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Guardar y Reiniciar el Servidor

Haz clic en `Guardar Contenido` y vuelve a iniciar el servidor. Los jugadores podrán unirse sin ingresar contraseña.

## Solución de Problemas

Si la protección con contraseña no funciona como esperas, revisa los siguientes puntos.

| Problema | Causa Posible | Solución |
| --- | --- | --- |
| El servidor no pide contraseña | `IsPasswordProtected` sigue en `false` | Cambiar a `true`, guardar el archivo y reiniciar el servidor |
| Los jugadores no pueden unirse con la contraseña correcta | Contraseña ingresada incorrectamente | Verificar el valor configurado y pedir a los jugadores que revisen la entrada de la contraseña |
| Los cambios no se aplican | No se reinició el servidor después de editar | Reiniciar el servidor tras guardar `ServerDescription.json` |
| Se pierden los cambios en el archivo | Se editó el archivo con el servidor en ejecución | Detener el servidor primero, aplicar los cambios, guardar y reiniciar |

:::danger No Guardes Contraseñas Sensibles Públicamente
No compartas la contraseña de tu servidor públicamente en posts de comunidad, capturas de pantalla o exportaciones de archivos. También evita usar contraseñas de listas antiguas o reutilizar credenciales de otros servicios.
:::

## Conclusión

Felicidades, has configurado con éxito la protección con contraseña en tu servidor Windrose. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂