---
id: palworld-enable-hardcore-mode
title: "Palworld: Activar el modo Hardcore"
description: "Aprende a activar el modo hardcore en Palworld editando la configuración correcta del servidor, estableciendo valores True o False y aplicando opciones de muerte permanente de forma segura. -> Aprende más ahora"
sidebar_label: "Activar el modo Hardcore"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El *modo hardcore* en Palworld activa reglas de muerte permanente para los jugadores y, opcionalmente, para los Pals. En esta guía, aprenderás cómo activar manualmente el modo hardcore en tu servidor de juegos Palworld de ZAP-Hosting editando el archivo de configuración correcto y reiniciando el servidor después.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting. También necesitas permiso para editar archivos de configuración del servidor a través de la sección **Configs** en la administración de tu servidor de juegos.

:::danger Advertencia de Pérdida Permanente de Datos
Cuando se activan las configuraciones hardcore, los personajes pueden perderse permanentemente al morir. Si también activas la pérdida de Pals, tus Pals pueden perderse permanentemente también.
:::

:::tip Crea una Copia de Seguridad Primero
Antes de cambiar configuraciones de juego como el modo hardcore, se recomienda crear una copia de seguridad de tu servidor o datos guardados si tu servicio ofrece esta opción.
:::

## Abre el Archivo de Configuración de Palworld

Para activar el modo hardcore, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.

:::info Archivo de Configuración Correcto
Las configuraciones hardcore se almacenan en `PalWorldSettings.ini`. Si editas otro archivo, los cambios no se aplicarán a tu servidor Palworld.
:::

## Edita las Configuraciones Hardcore

Palworld guarda muchas configuraciones de juego dentro de la entrada `OptionSettings` en `PalWorldSettings.ini`. Debes establecer manualmente los valores hardcore relevantes allí.

### Claves de Configuración Requeridas

Las siguientes claves controlan el comportamiento hardcore:

| Clave de configuración | Valor | Efecto |
| --- | --- | --- |
| `bHardcore` | `True` o `False` | Activa o desactiva la muerte permanente del jugador |
| `bPalLost` | `True` o `False` | Activa o desactiva la pérdida permanente de Pals al morir |
| `bCharacterRecreateInHardcore` | `True` o `False` | Permite crear un nuevo personaje tras una muerte hardcore |

### Resumen de Valores Recomendados

| Escenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Solo muerte permanente del jugador | `True` | `False` | `False` o `True` |
| Hardcore completo con pérdida de Pals | `True` | `True` | `False` o `True` |
| Desactivar modo hardcore | `False` | `False` | `False` |

:::note Valores True y False
Estas configuraciones usan valores booleanos, lo que significa que debes ingresar exactamente `True` o `False` según lo soportado por el formato de configuración.
:::

### Ejemplo de Configuración

Si las claves ya están presentes en tu `OptionSettings`, cambia sus valores según sea necesario. Si faltan, agrégalas dentro de la misma línea `OptionSettings`.

Ejemplo:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Si tu línea `OptionSettings` ya contiene muchas otras configuraciones, no las elimines. En su lugar, añade o ajusta solo las entradas relacionadas con hardcore dentro de los paréntesis existentes.

:::caution Conserva las Configuraciones Existentes
`PalWorldSettings.ini` suele contener muchas configuraciones activas del servidor en una sola entrada `OptionSettings`. Eliminar otros valores por error puede restablecer opciones de juego no relacionadas en tu servidor.
:::

## Guarda y Aplica los Cambios

Después de editar el archivo:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración del servidor de juegos de ZAP-Hosting.

Es necesario reiniciar para que el servidor cargue la configuración hardcore actualizada.

## Verifica que el Modo Hardcore Está Activo

Después del reinicio, únete a tu servidor y confirma que las reglas hardcore están activas.

### Qué Verificar

| Configuración | Comportamiento esperado |
| --- | --- |
| `bHardcore=True` | Los jugadores no pueden continuar normalmente tras morir |
| `bPalLost=True` | Los Pals se pierden permanentemente al morir |
| `bCharacterRecreateInHardcore=True` | Se puede crear un nuevo personaje tras una muerte hardcore |

:::info Nota Importante sobre el Comportamiento
El resultado exacto en el juego depende de cuáles de las tres configuraciones hardcore activaste. Si quieres muerte permanente del jugador pero que los usuarios puedan empezar con un nuevo personaje, activa `bCharacterRecreateInHardcore=True`.
:::

## Solución de Problemas

Si el modo hardcore no funciona como esperas, revisa los siguientes puntos.

### Confirma que el Archivo Fue Editado Correctamente

Asegúrate de haber editado `PalWorldSettings.ini` en la sección **Configs** de tu servidor Palworld en ZAP-Hosting y no otro archivo.

### Revisa la Sintaxis

Las claves hardcore deben estar dentro de la entrada `OptionSettings=(...)`. Puntuación incorrecta, comas faltantes o colocar los valores fuera de la sección correcta puede impedir que el servidor los lea.

Ejemplo de sintaxis válida:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Reinicia el Servidor Nuevamente

Si no reiniciaste el servidor después de guardar el archivo, los nuevos ajustes no se cargarán. Realiza un reinicio completo y prueba otra vez.

## Conclusión

Felicidades, has activado con éxito el modo hardcore en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂