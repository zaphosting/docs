---
id: hytale-death-penalty
title: "Hytale: Cambia la Penalización por Muerte"
description: "Descubre cómo funcionan las penalizaciones por muerte en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Cambia la Penalización por Muerte
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

En un servidor de Hytale, la **penalización por muerte** determina cómo afectan las muertes a los jugadores. Esta configuración controla hasta qué punto se aplican las consecuencias en el progreso del jugador, objetos, durabilidad u otros efectos de juego tras morir.

:::info Aviso de Early Access

Hytale se lanzó el 13 de enero de 2026 y actualmente está en Early Access. Como el juego sigue en desarrollo activo, el software del servidor, archivos de configuración, soporte para mods y procesos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />


## Ajustes Disponibles para la Penalización por Muerte
Los ajustes de penalización por muerte controlan cómo las muertes afectan el inventario y la durabilidad de los objetos. Estas opciones te permiten definir si los objetos se conservan, se pierden parcialmente o se sueltan completamente, así como cuánto desgaste reciben al morir.

Las siguientes opciones de configuración están disponibles:

**ItemsLossMode**  
Este ajuste define el comportamiento general de la pérdida de objetos cuando un jugador muere.  
Soporta los siguientes valores:

- `None` – Los jugadores conservan todo su inventario tras morir  
- `All` – Todos los objetos se sueltan al morir  
- `Configured` – La pérdida de objetos se determina según ajustes basados en porcentaje

**ItemsAmountLossPercentage**  
Este valor solo se aplica cuando `ItemsLossMode` está en `Configured`.  
Define qué porcentaje de cada pila de objetos se elimina al morir.  
Por ejemplo, un valor de `50.0` significa que se pierde la mitad de cada pila.

**ItemsDurabilityLossPercentage**  
Este ajuste controla cuánto pierde de durabilidad un objeto cuando un jugador muere.  
El valor se define como un porcentaje de la durabilidad actual del objeto y permite que la muerte tenga consecuencias sin eliminar completamente los objetos.

En conjunto, estos ajustes te dan un control súper detallado sobre qué tan dura o suave quieres que sea la muerte en tu servidor. Ajustarlos bien asegura una experiencia equilibrada que encaje con la dificultad y estilo de juego que buscas.



## Configuración de la Penalización por Muerte

Los ajustes de penalización por muerte están dentro del archivo principal `config.json` de tu servidor. Estos valores se leen al iniciar el servidor y se aplican globalmente a todos los jugadores.

Dentro del archivo de configuración, los ajustes relacionados con la muerte forman parte de la configuración de gameplay. Para añadir o modificar la penalización por muerte, localiza esta línea dentro de `config.json`:

```
"GameplayConfig": "Default",
```

Esta entrada define el perfil activo de configuración de gameplay. La configuración de penalización por muerte se coloca justo debajo de esta línea como un nuevo bloque. Una vez localizada, añade el bloque de configuración de muerte para definir cómo se maneja el respawn y la pérdida de objetos:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

El siguiente ejemplo muestra una configuración típica donde la pérdida de objetos y durabilidad se aplica parcialmente al morir:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

En esta configuración, el servidor usa el modo de pérdida `Configured`, lo que significa que la pérdida de objetos se controla por porcentajes.  
Cuando un jugador muere, se elimina la mitad de cada pila de objetos y los objetos pierden un 25% de su durabilidad actual.

Si no quieres que haya pérdida de objetos, el modo de pérdida puede ponerse en `None`, en cuyo caso se ignoran los valores porcentuales:

```
{
  "ItemsLossMode": "None"
}
```

Para una experiencia más hardcore donde todos los objetos se sueltan al morir, la configuración puede ser:

```
{
  "ItemsLossMode": "All"
}
```

Después de modificar el `config.json`, debes reiniciar el servidor para que los cambios tengan efecto.  
Recomendamos verificar el comportamiento en el juego tras el reinicio para asegurarte de que la penalización por muerte está como quieres.



## Conclusión

Con la penalización por muerte configurada, ahora tienes una visión clara de cómo se manejan las muertes en tu servidor de Hytale. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para echarte una mano! 🙂



<InlineVoucher />