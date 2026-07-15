---
id: palworld-collection-drop-rate
title: "Palworld: Tasa de Recolección"
description: "Aprende a ajustar la configuración de recolección en Palworld, aumentar los recursos obtenidos y acelerar los respawns en tu servidor de juegos Palworld. -> Aprende más ahora"
sidebar_label: Palworld: Tasa de Recolección
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cuántos recursos recolectan los jugadores y qué tan rápido vuelven a aparecer los objetos recolectables. En esta guía, aprenderás a editar manualmente el archivo de configuración correcto en tu servidor de juegos Palworld de ZAP-Hosting para cambiar la tasa de recolección y otros ajustes relacionados.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y que el servidor esté apagado o pueda reiniciarse después de realizar los cambios.

:::info Acceso al Archivo de Configuración
Para Palworld, los ajustes relevantes del juego se almacenan en el archivo `PalWorldSettings.ini`. En la administración del servidor de juegos de ZAP-Hosting, puedes acceder a este archivo a través de la sección `Configs`.
:::

## Abrir el Archivo de Configuración de Palworld

Para cambiar los ajustes de recolección, necesitas editar el archivo principal de configuración del servidor Palworld.

### Localiza el archivo en la interfaz de ZAP-Hosting

1. Inicia sesión en la [interfaz web de ZAP-Hosting](https://zap-hosting.com).
2. Abre tu servidor de juegos Palworld.
3. Navega a la sección `Configs` en la administración del servidor.
4. Abre el archivo llamado `PalWorldSettings.ini`.

:::note Archivo Correcto
Los ajustes relacionados con la recolección descritos en esta guía están almacenados en `PalWorldSettings.ini`. Si no ves las entradas esperadas de inmediato, normalmente están dentro de la línea de configuración `OptionSettings`.
:::

## Editar los Ajustes de Recolección

Palworld guarda muchas opciones de juego como pares clave-valor dentro de la sección `OptionSettings` de `PalWorldSettings.ini`. Para aumentar los recursos recolectados o cambiar la velocidad de respawn de los nodos de recursos, debes ajustar los valores correspondientes allí.

### Claves de configuración relevantes

Usa los siguientes ajustes para el comportamiento relacionado con la recolección:

| Clave de configuración | Valor por defecto | Descripción |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Controla cuántos ítems reciben los jugadores de los recursos recolectables. Valores más altos aumentan la cantidad recolectada. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Controla qué tan rápido reaparecen los objetos recolectables. Valores más altos hacen que los recursos vuelvan más rápido. |
| `CollectionObjectHpRate` | `1.000000` | Controla la vida (HP) de los objetos recolectables como rocas o árboles. Valores más altos generalmente hacen que tarden más en romperse. |

### Valores de configuración de ejemplo

Si quieres duplicar los recursos recolectados y hacer que los nodos de recursos reaparezcan el doble de rápido, configura ambos valores a `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Si también quieres que los objetos recolectables sean más fáciles de romper, puedes bajar su multiplicador de HP:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Valores Iniciales Recomendados
Un valor de `2.000000` es un punto de partida común para `CollectionDropRate` y `CollectionObjectRespawnSpeedRate`. Esto ofrece una progresión notablemente más rápida sin cambiar demasiado agresivamente el juego Palworld.
:::

## Aplicar los Cambios en `PalWorldSettings.ini`

Después de abrir `PalWorldSettings.ini`, busca la entrada existente `OptionSettings` y ajusta las claves relevantes directamente dentro de ella.

### Ejemplo de fragmento `OptionSettings`

Dependiendo de la configuración actual de tu servidor, la línea puede contener ya muchos ajustes. Solo necesitas cambiar los valores para las claves relacionadas con la recolección si ya existen, o agregarlos si faltan.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Preserva la Sintaxis Existente
Asegúrate de mantener intacto el formato existente de la línea `OptionSettings`. No elimines comas, paréntesis u otros ajustes accidentalmente, o el servidor podría fallar al cargar la configuración correctamente.
:::

## Guardar y Reiniciar el Servidor

Una vez que hayas terminado de editar el archivo, guarda los cambios en la sección `Configs`.

### Requisito de reinicio

Palworld no aplica estos cambios de configuración de juego instantáneamente mientras el servidor está en ejecución. Necesitas reiniciar el servidor después de guardar el archivo para que se carguen los nuevos valores.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No se requiere comando verificado |

:::info Reinicio Requerido
Se requiere un reinicio completo del servidor después de cambiar `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` o `CollectionObjectHpRate`. No se necesita ningún comando adicional en el juego o consola para estos ajustes específicos.
:::

## Verificar el Nuevo Comportamiento de Recolección

Después de que el reinicio esté completo, únete a tu servidor y prueba algunos objetos recolectables como árboles, piedras o nodos de mineral.

### Qué verificar

- Si los jugadores reciben más materiales por acción de recolección
- Si los nodos de recursos destruidos vuelven más rápido que antes
- Si los objetos recolectables se sienten más fáciles o difíciles de romper si cambiaste `CollectionObjectHpRate`

Si el resultado es demasiado fuerte o débil, vuelve a `PalWorldSettings.ini` y ajusta los multiplicadores nuevamente.

:::tip Ajuste Fino de tu Servidor
Si quieres una configuración de recolección en Palworld más equilibrada, aumenta los valores gradualmente, por ejemplo de `1.000000` a `1.500000`, antes de pasar a multiplicadores más altos.
:::

## Referencia de Configuración

La siguiente tabla resume los valores más importantes para esta configuración de recolección en Palworld.

| Ajuste | Ejemplo | Efecto |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Por defecto | Cantidad estándar de recursos recolectados |
| `CollectionDropRate=2.000000` | Incrementado | Recursos recolectados al doble |
| `CollectionObjectRespawnSpeedRate=1.000000` | Por defecto | Velocidad estándar de respawn |
| `CollectionObjectRespawnSpeedRate=2.000000` | Incrementado | Respawn de recursos más rápido |
| `CollectionObjectHpRate=1.000000` | Por defecto | HP estándar de objetos recolectables |
| `CollectionObjectHpRate=0.500000` | Reducido | Objetos recolectables se rompen más rápido |

## Conclusión

Felicidades, has cambiado con éxito la tasa de recolección en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂