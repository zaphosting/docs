---
id: palworld-spectate-mode
title: "Palworld: Modo Espectador"
description: "Aprende a usar el modo espectador en Palworld, configura la contraseña de administrador requerida y accede al modo espectador en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Modo Espectador
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El modo espectador en Palworld te permite observar a los jugadores en tu servidor sin participar activamente. En esta guía, aprenderás cómo preparar el acceso de administrador, dónde verificar la configuración necesaria en la interfaz de ZAP-Hosting y cómo entrar y salir del modo espectador dentro del juego.

## Preparación

Antes de poder usar el modo espectador, necesitas acceso de administrador en tu servidor de juegos Palworld. Esto requiere que se establezca una contraseña válida `AdminPassword` en la configuración de tu servidor.

Si aún no has configurado esto, asegúrate primero de revisar los ajustes de tu servidor Palworld y la configuración de administrador.

:::info Acceso de Administrador Requerido
El modo espectador solo está disponible para administradores. Si no inicias sesión primero como admin, el comando de espectador no funcionará.
:::

## Verifica la configuración requerida del servidor

Aunque el modo espectador en sí no requiere una configuración dedicada para activarse, tu servidor debe tener configurada una contraseña de administrador para que puedas autenticarte como tal.

### Abre el archivo de configuración en la interfaz de ZAP

En la interfaz web de tu servidor de juegos ZAP-Hosting, abre la sección **Configs**. La configuración relevante de Palworld se encuentra en el archivo:

`PalWorldSettings.ini`

Dependiendo de la plantilla del servidor y la versión del juego, este archivo contiene las opciones principales del servidor, incluyendo la entrada de la contraseña de administrador.



### Verifica la entrada de la contraseña de administrador

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings` y verifica que el valor `AdminPassword` esté configurado.

Un ejemplo típico se ve así:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[tu_contraseña_admin]")
```

Si tu archivo ya contiene muchas opciones en una sola línea `OptionSettings=(...)`, solo necesitas asegurarte de que la entrada `AdminPassword` exista y contenga la contraseña que elegiste.

:::caution Conserva la Sintaxis Existente
No elimines otros valores existentes en la línea `OptionSettings`. Palworld comúnmente almacena múltiples configuraciones en la misma entrada, por lo que solo debes agregar o editar cuidadosamente el valor `AdminPassword`.
:::

### Referencia de configuración

| Archivo | Ubicación en la interfaz ZAP | Clave requerida | Propósito |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Permite autenticarte como admin y usar el modo espectador |

## Guarda los cambios y reinicia el servidor

Si cambiaste la contraseña `AdminPassword` en `PalWorldSettings.ini`, guarda el archivo y reinicia tu servidor Palworld desde la interfaz web de ZAP-Hosting.

Es necesario reiniciar para que el servidor cargue la configuración actualizada.

:::note Requisito de Reinicio
Si no realizaste cambios en el archivo de configuración y la contraseña de administrador ya estaba configurada correctamente, no es necesario reiniciar para usar el modo espectador.
:::

## Inicia sesión como administrador

Una vez que el servidor esté en línea, conéctate a tu servidor Palworld en el juego como de costumbre. Para usar el modo espectador, debes autenticarte con la contraseña de administrador configurada anteriormente.

El comando exacto para iniciar sesión como admin puede variar según la implementación actual de Palworld y el comportamiento de la interfaz. Si tu servidor requiere autenticación manual de admin después de unirte, usa la contraseña configurada en el comando de admin correspondiente o en el prompt de inicio de sesión admin que soporte tu versión actual del servidor.

:::info Sobre la Autenticación de Admin
Las referencias actuales de terceros confirman consistentemente que el modo espectador requiere privilegios de administrador y que debe configurarse `AdminPassword`. Sin embargo, si tu versión actual del servidor usa un comando específico para login de admin, debes seguir el formato de comando soportado por tu versión instalada de Palworld.
:::

## Entra en modo espectador

Después de conectarte como administrador, puedes activar el modo espectador de una de las siguientes maneras.

### Usa el atajo de teclado

Presiona la tecla `\` para entrar en modo espectador.

### Usa el comando

Alternativamente, usa el siguiente comando dentro del juego:

```text
/togglespectate
```

Este comando activa o desactiva el modo espectador para tu sesión actual, siempre que estés autenticado como admin.

### Referencia de comandos del modo espectador

| Acción | Método | Requisito |
| --- | --- | --- |
| Entrar en modo espectador | Presiona `\` | Privilegios de admin |
| Alternar modo espectador | `/togglespectate` | Privilegios de admin |
| Salir del modo espectador | Presiona `Esc` | Modo espectador activo |

:::tip Cuándo usar el modo espectador
El modo espectador es útil si quieres monitorear jugadores, investigar reportes o observar la actividad en tu servidor sin interferir en la jugabilidad.
:::

## Salir del modo espectador

Para salir del modo espectador y volver al juego normal, presiona `Esc`.

Si es necesario, también puedes usar `/togglespectate` nuevamente para desactivar el modo, dependiendo del comportamiento actual de tu servidor.

## Solución de problemas

Si el modo espectador no funciona, revisa los siguientes puntos.

### Confirma que la contraseña de administrador está configurada

Abre `PalWorldSettings.ini` nuevamente desde **Configs** y asegúrate de que `AdminPassword` esté presente y no esté vacía.

### Reinicia después de cambiar la configuración

Si editaste recientemente el archivo de configuración, reinicia el servidor antes de probar de nuevo.

### Asegúrate de estar autenticado como admin

Tener configurada una `AdminPassword` no siempre es suficiente por sí sola. También necesitas que el servidor te reconozca como administrador activo durante tu sesión.

### Verifica la tecla que usas

En algunos teclados, la tecla `\` puede estar en una posición diferente. Si el atajo no responde, usa `/togglespectate` en su lugar.

:::caution Diferencias de versión
Palworld sigue sujeto a cambios en jugabilidad y servidor. Si el modo espectador o el comportamiento de admin difiere en tu servidor, verifica que esté actualizado y revisa si la versión actual del juego ha cambiado los comandos o permisos relacionados.
:::

## Conclusión

Felicitaciones, has usado con éxito el modo espectador en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂