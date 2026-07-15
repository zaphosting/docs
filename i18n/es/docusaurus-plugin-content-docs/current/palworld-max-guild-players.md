---
id: palworld-max-guild-players
title: "Palworld: Máximo de Jugadores por Guild"
description: "Aprende cómo cambiar el límite de jugadores por guild en Palworld editando la configuración de máximo de jugadores por guild en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Máximo de Jugadores por Guild
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cuántos jugadores pueden unirse a una sola guild en tu servidor. En esta guía, aprenderás cómo cambiar manualmente el límite máximo de jugadores por guild editando el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting.



## Preparación

Antes de comenzar, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting.

:::info Requisito de acceso a configuración
Necesitas acceso a la administración de tu servidor Palworld y a la sección `Configs`, porque esta configuración debe cambiarse manualmente en el archivo de configuración del servidor.
:::

## Localiza el archivo de configuración correcto

Para cambiar el límite de jugadores por guild, debes editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor **Palworld**
2. Ve a **Configs**
3. Abre el archivo llamado `PalWorldSettings.ini`

Este archivo contiene los valores principales de configuración del gameplay para tu servidor Palworld, incluyendo las configuraciones relacionadas con las guilds.

## Edita la configuración de máximo de jugadores por guild

Dentro de `PalWorldSettings.ini`, busca la línea de configuración `OptionSettings`. El límite de jugadores por guild está controlado por la clave `GuildPlayerMaxNum`.

### Valor de configuración

Usa la siguiente configuración para definir el número máximo de jugadores permitidos en una guild:

```ini
GuildPlayerMaxNum=[tu_valor]
```

Reemplaza `[tu_valor]` con el número de jugadores que quieres permitir por guild.

### Valores por defecto y ejemplos

| Clave de configuración | Descripción | Valor por defecto |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Número máximo de jugadores permitidos en una guild | `20` |

Por ejemplo, si quieres permitir hasta `30` jugadores por guild, configura:

```ini
GuildPlayerMaxNum=30
```

:::note Edita la línea existente OptionSettings
En Palworld, las configuraciones del servidor suelen almacenarse dentro de una sola entrada `OptionSettings=(...)`. Normalmente debes cambiar el valor existente de `GuildPlayerMaxNum` dentro de esa línea en lugar de agregar una segunda entrada duplicada.
:::

### Fragmento de ejemplo

Tu configuración podría verse similar a esto:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Si tu archivo ya contiene muchas configuraciones dentro de `OptionSettings=(...)`, solo cambia la parte de `GuildPlayerMaxNum` y deja los demás valores sin modificar.

:::caution Evita claves duplicadas
No agregues `GuildPlayerMaxNum` varias veces en el mismo bloque de configuración. Las claves duplicadas pueden causar comportamientos inesperados o hacer que no quede claro qué valor usará el servidor.
:::

## Guarda y aplica los cambios

Después de editar el valor:

1. Guarda los cambios en `PalWorldSettings.ini`
2. Reinicia tu servidor Palworld

Es necesario reiniciar para que el nuevo límite de jugadores por guild sea cargado por el servidor.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar servidor | Sí |
| Comando adicional en consola | No se requiere comando verificado |

:::tip Reinicio necesario
El valor actualizado de máximo de jugadores por guild no se aplica inmediatamente mientras el servidor está en ejecución. Debes reiniciar completamente el servidor después de guardar la configuración.
:::

## Verifica el nuevo límite de guild

Una vez que el servidor se haya reiniciado, el nuevo límite de tamaño de guild debería estar activo para los jugadores que se unan o gestionen guilds en tu servidor Palworld.

Si el cambio no parece aplicarse, verifica lo siguiente:

- confirma que editaste el archivo correcto: `PalWorldSettings.ini`
- confirma que `GuildPlayerMaxNum` está escrito correctamente
- confirma que el valor está dentro de la configuración activa `OptionSettings=(...)`
- confirma que el reinicio del servidor se completó con éxito

:::caution Formato de configuración
Los archivos de configuración de Palworld son sensibles al formato. Si accidentalmente eliminas comas, corchetes u otros valores existentes dentro de `OptionSettings=(...)`, el servidor puede ignorar la configuración o no cargarla correctamente.
:::

## Conclusión

Felicidades, has cambiado con éxito el límite máximo de jugadores por guild en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂