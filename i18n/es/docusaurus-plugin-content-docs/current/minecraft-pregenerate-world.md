---
id: minecraft-pregenerate-world
title: "Minecraft: Pregenerar Mundo (Chunks)"
description: "Descubre cómo pre-generar mundos de Minecraft de forma eficiente con plugins o mods para un juego más fluido y un rendimiento optimizado del servidor → Aprende más ahora"
sidebar_label: Pregenerar Mundo (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Quieres generar tu mundo rápida, eficiente y seguramente por adelantado, en lugar de hacerlo durante el juego? Minecraft no ofrece una función integrada para esto por defecto. Sin embargo, se puede lograr con plugins o mods especialmente diseñados. Cómo usarlos y qué aspectos debes tener en cuenta se explica con más detalle a continuación.



## Preparación

Primero que nada, debes asegurarte de que tu servidor esté preparado para el uso de plugins o mods. Se requiere usar una de las siguientes variantes de Minecraft para poder utilizarlos: 

- Minecraft: Forge, Minecraft Fabric (mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugins) 

Si actualmente no usas ninguna de estas variantes de Minecraft, puedes usar la opción de [cambio de juego](gameserver-gameswitch.md) para seleccionar el juego deseado.


## Instalación
El método más común para generar chunks por adelantado es usar [Chunky](https://github.com/pop4959/Chunky), que está disponible para numerosas implementaciones de servidor tanto como plugin como en versión mod. En este ejemplo, se explica y demuestra la generación de chunks usando Chunky.

| Variante | Descarga |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Descarga **Chunky** ya sea como plugin o mod e instálalo en tu servidor. Si no sabes exactamente cómo instalar [Plugins](minecraft-pluginuploader.md) o [Mods](minecraft-forge-fabric-add-mods-modpacks), las guías correspondientes te ayudarán.




## Uso 

Una vez que **Chunky** esté instalado correctamente, puedes comenzar a generar los chunks. El proceso se inicia con el comando `chunky start`.

Si quieres pausar la generación temporalmente y continuar después, puedes hacerlo con los comandos `chunky pause` y `chunky continue`. Para terminar el proceso completamente, usa `chunky cancel`. Puedes ejecutar los comandos tanto desde la consola en vivo como siendo operador directamente en el juego en tu servidor.

:::warning Carga excesiva
Superar permanentemente los límites de recursos durante un período prolongado puede llevar a una suspensión temporal. Para evitar esto, la generación de chunks debe realizarse a un ritmo y alcance equilibrados para que la carga del sistema se mantenga dentro de un rango aceptable.

Más información sobre límites de recursos y posibles medidas la encuentras en nuestra guía de [límite de recursos](gameserver-resourcelimit.md). 
:::



## Comandos

Esta sección contiene todos los comandos que Chunky usa para generar y gestionar chunks. 

#### Gestión de tareas

| Comando         | Descripción                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Inicia una nueva tarea de generación de chunks desde la selección actual |
| chunky pause    | Pausa las tareas actuales de generación de chunks y guarda el progreso |
| chunky continue | Continúa las tareas actuales o guardadas de generación de chunks |
| chunky cancel   | Detiene las tareas actuales de generación de chunks y cancela el progreso |



#### Selección

| Comando                                    | Descripción                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Establece el mundo seleccionado actualmente                  |
| chunky shape `<shape>`                     | Establece la forma a generar                                 |
| chunky center [`<x>` `<z>`]                | Establece la ubicación del bloque central actual             |
| chunky radius `<radius>`                   | Establece el radio actual                                    |
| chunky worldborder                         | Establece el centro y radio para que coincidan con el borde del mundo en el mundo seleccionado |
| chunky spawn                               | Establece el centro en el punto de spawn                      |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Establece la selección por coordenadas de esquinas           |
| chunky pattern `<pattern>`                 | Establece el patrón de generación preferido                   |
| chunky slection                            | Muestra la selección actual                                   |





#### Varios

| Comando                   | Descripción                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Alterna la visualización de mensajes de actualización |
| chunky quiet `<interval>` | Establece el intervalo silencioso en segundos para mensajes de actualización |
| chunky progress           | Muestra el progreso de la pre-generación en el juego para todas las tareas |
| chunky reload             | Recarga la configuración                              |
| chunky trim               | Elimina chunks fuera de la selección                  |



## Conclusión

Siguiendo estos pasos, has instalado exitosamente Chunky y ahora puedes generar tu mundo (chunks) por adelantado. ¡Felicidades! Si seguiste todo correctamente, deberías haber establecido conexión con el servidor sin problemas. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte! 🙂

<InlineVoucher />