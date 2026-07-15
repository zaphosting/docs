---
id: palworld-item-weight
title: "Palworld: Peso de los objetos"
description: "Aprende a cambiar el multiplicador del peso de los objetos en Palworld editando la configuración del peso en tu servidor para un mejor balance de carga. -> Aprende más ahora"
sidebar_label: "Peso de los objetos"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar el peso de los objetos en tu servidor cambiando un valor de configuración en el archivo principal de ajustes del servidor. En esta guía, aprenderás dónde encontrar el archivo correcto en la interfaz web de ZAP-Hosting, qué configuración de `peso de objeto` editar y cómo aplicar el cambio correctamente.



## Preparación

Antes de comenzar, asegúrate de que tu servidor de juegos Palworld esté en línea y que puedas acceder a su administración web.

:::info Acceso requerido
Necesitas acceso al panel de administración de tu servidor Palworld en la interfaz web de ZAP-Hosting para editar archivos de configuración bajo **Configs**.
:::

## Abre el archivo de configuración de Palworld

Para cambiar el multiplicador del peso de los objetos, debes editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración de jugabilidad usados por tu servidor Palworld.

:::note Propósito del archivo de configuración
`PalWorldSettings.ini` almacena múltiples modificadores de jugabilidad, incluyendo tasas para daño, resistencia, drops y `peso de objeto`.
:::

## Edita la configuración del peso de los objetos

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings` y encuentra la entrada `ItemWeightRate`.

Si la entrada ya existe, cambia su valor. Si falta, agrégala dentro de la lista de parámetros de `OptionSettings`.

### Clave de configuración

Usa la siguiente configuración:

```ini
ItemWeightRate=1.000000
```

### Qué significa el valor

`ItemWeightRate` controla el multiplicador del peso de los objetos en tu servidor.

| Clave de configuración | Valor por defecto | Efecto |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Peso estándar de los objetos |
| `ItemWeightRate` menor que `1.0` | Ejemplo: `0.500000` | Los objetos pesan menos, permitiendo que los jugadores carguen más |
| `ItemWeightRate` mayor que `1.0` | Ejemplo: `2.000000` | Los objetos pesan más, por lo que los jugadores cargan menos |

### Valores de ejemplo

Puedes usar uno de los siguientes ejemplos según el balance de jugabilidad que quieras:

| Resultado deseado | Valor |
|---|---:|
| Peso estándar de objetos | `1.000000` |
| Peso de objetos a la mitad | `0.500000` |
| Objetos muy ligeros | `0.250000` |
| Peso de objetos al doble | `2.000000` |

:::tip Elegir un buen multiplicador
Si quieres una experiencia de supervivencia más relajada, un valor más bajo de `peso de objeto` como `0.5` suele ser un buen punto de partida. Esto reduce la presión del inventario sin eliminar completamente la gestión del peso.
:::

## Ejemplo de configuración

En Palworld, estos valores de jugabilidad suelen almacenarse dentro de la línea `OptionSettings=(...)` del archivo `PalWorldSettings.ini`. Tu archivo puede contener ya muchas otras configuraciones.

Un ejemplo simplificado se ve así:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

En muchos servidores, `OptionSettings` ya incluye múltiples valores separados por comas. En ese caso, solo agrega o edita la parte de `ItemWeightRate` sin eliminar las otras entradas.

Ejemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Mantén intactas las configuraciones existentes
No elimines otros valores de la línea `OptionSettings` a menos que quieras restablecerlos intencionadamente. Quitar comas, paréntesis o entradas existentes puede causar errores de configuración.
:::

## Guarda y aplica los cambios

Después de editar el archivo:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld.

Es necesario reiniciar porque el servidor lee esta configuración de jugabilidad durante el inicio. El nuevo valor de `peso de objeto` no se aplicará completamente hasta que el servidor se reinicie.

## Verifica el nuevo peso de los objetos

Después del reinicio, únete a tu servidor y prueba el comportamiento del peso de los objetos en el juego.

Deberías notar que:

- valores más bajos reducen el peso efectivo de los objetos
- valores más altos aumentan el peso efectivo de los objetos
- la capacidad del inventario se siente diferente según el multiplicador que seleccionaste

Si el cambio no parece aplicarse, vuelve a abrir `PalWorldSettings.ini` y confirma que:

| Verificación | Qué comprobar |
|---|---|
| Archivo correcto | Editaste `PalWorldSettings.ini` |
| Ubicación correcta | El archivo se abrió a través de **Configs** en la administración del servidor |
| Clave correcta | `ItemWeightRate` está presente |
| Sintaxis correcta | El valor está dentro de la línea `OptionSettings=(...)` si tu archivo usa ese formato |
| Reinicio completado | El servidor fue reiniciado después de guardar |

## Conclusión

Felicidades, has cambiado con éxito la configuración del peso de los objetos en tu servidor Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂