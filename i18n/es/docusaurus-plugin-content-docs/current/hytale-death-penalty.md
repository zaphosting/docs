---
id: hytale-death-penalty
title: "Hytale: Cambiar la Penalización por Muerte"
description: "Descubre cómo funcionan las penalizaciones por muerte en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Cambiar Penalización por Muerte
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

En un servidor de Hytale, la **penalización por muerte** determina cómo se ven afectados los jugadores cuando mueren. Esta configuración controla hasta qué punto se aplican las consecuencias en el progreso del jugador, objetos, durabilidad u otros efectos de juego tras un evento de muerte.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />


## Configuraciones Disponibles para la Penalización por Muerte
Las configuraciones de penalización por muerte controlan cómo las muertes de los jugadores afectan el contenido del inventario y la durabilidad de los objetos. Estas opciones te permiten definir si los objetos se conservan, se pierden parcialmente o se sueltan completamente, así como cuánto desgaste reciben los objetos al morir.

Las siguientes opciones de configuración están disponibles:

**ItemsLossMode**  
Esta configuración define el comportamiento general de la pérdida de objetos cuando un jugador muere.  
Soporta los siguientes valores:

- `None` – Los jugadores conservan todo su inventario tras morir  
- `All` – Todos los objetos se sueltan al morir  
- `Configured` – La pérdida de objetos se determina mediante configuraciones basadas en porcentajes

**ItemsAmountLossPercentage**  
Este valor solo se aplica cuando `ItemsLossMode` está configurado en `Configured`.  
Define qué porcentaje de cada pila de objetos se elimina al morir.  
Por ejemplo, un valor de `50.0` significa que se pierde la mitad de cada pila.

**ItemsDurabilityLossPercentage**  
Esta configuración controla cuánto pierde de durabilidad un objeto cuando un jugador muere.  
El valor se define como un porcentaje de la durabilidad actual del objeto y permite que la muerte tenga consecuencias sin eliminar completamente los objetos.

En conjunto, estas configuraciones ofrecen un control detallado sobre qué tan indulgente o punitiva debe ser la muerte en el servidor.  
Ajustes cuidadosos aseguran una experiencia equilibrada que se alinea con la dificultad y estilo de juego que busca el servidor.



## Configuración de la penalización por muerte

Las configuraciones de penalización por muerte se encuentran dentro del archivo principal `config.json` de tu servidor. Estos valores se leen al iniciar el servidor y se aplican globalmente a todos los jugadores.

Dentro del archivo de configuración, las opciones relacionadas con la muerte forman parte de la configuración de gameplay. Para agregar o modificar la penalización por muerte, localiza la siguiente línea dentro de `config.json`:

```
"GameplayConfig": "Default",
```

Esta entrada define el perfil activo de configuración de gameplay. La configuración de la penalización por muerte se coloca justo debajo de esta línea como un nuevo bloque. Una vez localizada, añade el bloque de configuración de muerte para definir cómo se manejan el respawn y la pérdida de objetos:

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

El siguiente ejemplo muestra una configuración típica donde la pérdida de objetos y la pérdida de durabilidad se aplican parcialmente al morir:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

En esta configuración, el servidor usa el modo de pérdida `Configured`, lo que significa que la pérdida de objetos se controla por porcentajes.  
Cuando un jugador muere, se elimina la mitad de cada pila de objetos y los objetos pierden el 25% de su durabilidad actual.

Si no se desea que ocurra ninguna pérdida de objetos, el modo de pérdida puede configurarse en `None`, en cuyo caso los valores porcentuales se ignoran:

```
{
  "ItemsLossMode": "None"
}
```

Para una experiencia más punitiva donde todos los objetos se sueltan al morir, la configuración puede ser:

```
{
  "ItemsLossMode": "All"
}
```

Después de modificar el `config.json`, es necesario reiniciar el servidor para que los cambios tengan efecto.  
Se recomienda verificar el comportamiento en el juego tras el reinicio para asegurarse de que la penalización por muerte coincida con la dificultad deseada.



## Conclusión

Con la penalización por muerte configurada, ahora tienes una visión clara de cómo se manejan las muertes de los jugadores en tu servidor de Hytale. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂



<InlineVoucher />