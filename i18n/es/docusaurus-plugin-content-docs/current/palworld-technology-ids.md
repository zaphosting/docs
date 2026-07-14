---
id: palworld-technology-ids
title: "Palworld: IDs de Tecnología"
description: "Aprende a gestionar los IDs de tecnología de Palworld, desactivar entradas específicas de tecnología y editar de forma segura la configuración correcta del servidor. -> Aprende más ahora"
sidebar_label: Palworld: IDs de Tecnología
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld utiliza *IDs de tecnología* para identificar tecnologías desbloqueables y ciertos ajustes relacionados con objetos en la configuración del servidor. En esta guía, aprenderás a desactivar tecnologías específicas editando la configuración `DenyTechnologyList` en tu servidor de juegos Palworld de ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar sus archivos de configuración.

:::info Requisito de acceso a configuración
Necesitas acceso a la administración de tu servidor de juegos y a la sección `Configs` para poder editar `PalWorldSettings.ini`.
:::

:::note Fuente de IDs de tecnología
Los IDs de tecnología de Palworld son valores basados en cadenas, como `GrapplingGun`, `GrapplingGun2` o `SkillUnlock_JetDragon`. Una lista de referencia actualizada por terceros está disponible aquí: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Debido a que las actualizaciones de Palworld pueden cambiar las tecnologías disponibles, siempre debes verificar que los IDs que planeas usar sigan existiendo en la versión actual del juego.
:::

## Entendiendo los IDs de tecnología

Los IDs de tecnología son identificadores internos que Palworld usa para las entradas de tecnologías desbloqueables. En servidores dedicados, estos IDs pueden usarse en opciones específicas de configuración para controlar el comportamiento del juego.

La configuración más relevante para este tema es `DenyTechnologyList`, que te permite bloquear tecnologías seleccionadas para que no se desbloqueen ni usen en tu servidor.

### Uso soportado en configuración

La siguiente tabla muestra la clave de configuración relevante que cubre esta guía:

| Clave de configuración | Propósito | Formato del valor |
| --- | --- | --- |
| `DenyTechnologyList` | Desactiva tecnologías específicas en el servidor | Lista separada por comas de cadenas de IDs de tecnología |

### Ejemplos de IDs de tecnología

Los siguientes IDs son ejemplos comúnmente referenciados:

| ID de Tecnología | Significado de ejemplo |
| --- | --- |
| `GrapplingGun` | Garfio |
| `GrapplingGun2` | Garfio de nivel superior |
| `SkillUnlock_JetDragon` | Desbloqueo relacionado con Jetragon |
| `SkillUnlock_IceHorse` | Desbloqueo relacionado con Frostallion |
| `PALBOX` | Tecnología relacionada con Palbox |
| `RepairBench` | Banco de reparación |
| `AIcore` | Núcleo de IA |

:::caution Usa valores exactos de ID
Los IDs de tecnología son valores sensibles a mayúsculas y minúsculas. Si ingresas un ID incorrecto, Palworld puede ignorarlo y la tecnología no se desactivará como esperas.
:::

## Abre el archivo de configuración de Palworld

Para configurar los IDs de tecnología en tu servidor de ZAP-Hosting, necesitas editar manualmente el archivo correcto de configuración de Palworld.

### Encuentra el archivo en la interfaz de ZAP-Hosting

1. Inicia sesión en la interfaz web de ZAP-Hosting.
2. Abre tu servidor de juegos **Palworld**.
3. Ve a **Configs** en la administración del servidor de juegos.
4. Abre el archivo `PalWorldSettings.ini`.

Este es el archivo de configuración donde se almacena y edita la opción `DenyTechnologyList`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Localiza la configuración relevante

Dentro de `PalWorldSettings.ini`, busca el bloque de opciones del servidor que contiene tus ajustes de Palworld.

Necesitas encontrar o agregar la entrada `DenyTechnologyList`.

:::tip Busca rápido en el archivo
Usa la función de búsqueda de tu navegador con `CTRL` + `F` y busca `DenyTechnologyList` para encontrar la configuración más rápido.
:::

## Configura `DenyTechnologyList`

Ahora puedes definir qué tecnologías deben ser bloqueadas en tu servidor.

### Formato del valor

`DenyTechnologyList` usa una lista separada por comas de IDs de tecnología.

Formato de ejemplo:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Cada entrada debe ser un ID válido de tecnología de Palworld. No agregues descripciones, espacios extra dentro del ID ni caracteres no soportados.

### Añade o edita la configuración

Si la configuración ya existe, reemplaza su valor actual con la lista que desees.

Si la configuración no existe aún, agrégala en la sección apropiada de configuración del servidor en `PalWorldSettings.ini`.

Ejemplo:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Este ejemplo desactiva varias tecnologías por sus IDs.

### Referencia de ejemplos de configuración

| Entrada de ejemplo | Resultado |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Desactiva solo la tecnología básica de Garfio |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Desactiva varios niveles de tecnología de Garfio |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Desactiva tecnologías especiales seleccionadas |

:::note Uso relacionado de IDs de objetos
Algunos ajustes relacionados con objetos en Palworld también usan valores basados en IDs. Por ejemplo, referencias de terceros indican que `AdditionalDropItemWhenPlayerKillingInPvPMode` puede usar IDs de Palworld para objetos en PvP. Sin embargo, esta guía se enfoca específicamente en `DenyTechnologyList`.
:::

## Guarda y aplica los cambios

Después de editar la configuración, necesitas guardar el archivo y reiniciar el servidor para que Palworld cargue los ajustes actualizados.

### Guarda el archivo

Después de terminar de editar `PalWorldSettings.ini`:

1. Guarda los cambios en el editor de `Configs`.
2. Revisa la entrada una vez más para confirmar que los IDs están escritos correctamente.

### Reinicia el servidor

Una vez guardado el archivo, reinicia tu servidor Palworld desde la administración del servidor de juegos en ZAP-Hosting.

Este reinicio es necesario porque los cambios en la configuración de `PalWorldSettings.ini` no se aplican de forma confiable hasta que el servidor arranca nuevamente con el archivo actualizado.

:::info Reinicio obligatorio
Se requiere reiniciar el servidor después de cambiar `DenyTechnologyList`. Generalmente no se necesita ningún comando adicional dentro del juego para esta configuración cuando usas el método del archivo de configuración.
:::

## Verifica que las tecnologías estén desactivadas

Después del reinicio, debes confirmar que la configuración funciona como esperas.

### Qué verificar

Puedes comprobar el resultado revisando si las tecnologías seleccionadas siguen disponibles en el juego.

Usa la siguiente lista de verificación:

| Verificación | Resultado esperado |
| --- | --- |
| Servidor reiniciado con éxito | El servidor vuelve a estar en línea normalmente |
| `PalWorldSettings.ini` guardado correctamente | Tu entrada `DenyTechnologyList` sigue presente |
| Tecnología desactivada probada en el juego | La tecnología seleccionada ya no está disponible como se esperaba |

### Si la configuración no funciona

Si las tecnologías siguen disponibles, verifica lo siguiente:

| Posible problema | Qué verificar |
| --- | --- |
| ID inválido | Confirma que el ID de tecnología coincide exactamente con la versión actual del juego |
| Problema de formato | Asegúrate de que la lista esté separada por comas y escrita solo con cadenas de ID |
| Archivo no guardado | Vuelve a abrir `PalWorldSettings.ini` y confirma que el valor sigue presente |
| Servidor no reiniciado | Reinicia el servidor nuevamente después de guardar los cambios |

:::caution Las actualizaciones del juego pueden cambiar los IDs
Palworld recibe actualizaciones continuas y la información de tecnologías puede cambiar con el tiempo. Si un ID que antes era válido ya no funciona, verifica con una referencia actual y confiable antes de seguir con la solución de problemas.
:::

## Conclusión

Felicidades, has desactivado con éxito tecnologías específicas en tu servidor Palworld usando IDs de tecnología. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂