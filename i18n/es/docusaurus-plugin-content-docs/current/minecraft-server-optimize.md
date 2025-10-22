---
id: minecraft-server-optimize
title: "Minecraft: optimización del rendimiento del servidor"
description: "Descubre cómo optimizar servidores de juegos de Minecraft para un mejor rendimiento y una experiencia de juego más fluida con ajustes efectivos → Aprende más ahora"
sidebar_label: Optimización de Servidor Minecraft
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### ¿Qué pasa exactamente durante la optimización?

La optimización es un punto clave para los servidores de juegos de Minecraft para que puedan funcionar sin problemas y definitivamente deberías dedicarle suficiente tiempo en un servidor público. Solo con mucho tiempo y pruebas es posible lograr el mejor resultado. Por eso esta documentación no debe seguirse al pie de la letra, sino que sirve como ayuda para ir en la dirección correcta.

En la mayoría de los casos, la optimización cambia una gran cantidad de configuraciones en los servidores, lo que en algunos casos modifica significativamente el comportamiento del servidor. Entre otras cosas, se ajustan algunos parámetros para aliviar la carga del servidor y así ofrecer más rendimiento. Sin embargo, para que la experiencia de juego general no se vea demasiado afectada, siempre debes encontrar un punto medio.

## Vanilla

Las opciones para optimizar un servidor vanilla son lamentablemente muy limitadas, ya que solo hay pocas configuraciones disponibles. Intentamos darle un poco más de potencia al servidor vanilla con las siguientes medidas:

### Visibilidad

Una medida muy común es reducir el rango de visión. El rango estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores se pasan con los chunks y a veces lo ponen a 32 chunks, por ejemplo, lo que significa que el servidor tiene que cargar y procesar todos esos chunks, lo que consume mucha potencia.

En un servidor vanilla, el rango de visión se puede ajustar en la configuración "server.properties", modificando el valor "view-distance". Para no limitar demasiado la experiencia de juego, se recomienda poner este valor entre 5 y 6, lo que alivia al servidor hasta en un 50%. Ya tenemos una entrada en nuestra documentación sobre esto, que puedes encontrar [aquí](minecraft-default-config.md).

### Compresión de datos

En un servidor hay un intercambio constante entre el servidor y los jugadores conectados. Los movimientos de los jugadores se transmiten al servidor y este los envía a todos los demás jugadores. También las acciones de los jugadores o eventos en el mundo, como explosiones, forman parte de los datos que se transmiten repetidamente.

Para hacer este intercambio más eficiente, se puede duplicar el tamaño de los datos comprimidos, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar la misma cantidad de datos con los jugadores. Para ello, hay que ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor recomendado es 512. También tenemos una entrada en nuestra documentación sobre esto, que puedes ver [aquí](minecraft-default-config.md).

## Forge

Al igual que en Vanilla, las opciones que se pueden modificar en el servidor son algo limitadas, ya que solo hay pequeños archivos de configuración disponibles. Sin embargo, es posible instalar mods adicionales, lo que permite descargar un poco la carga del servidor.

### Precarga de chunks

Una forma de aliviar el servidor es precargar los chunks. El servidor solo tiene que cargar los datos guardados de los chunks durante la operación con jugadores y no crear y generar todos los chunks desde cero. Este proceso es mejor dejarlo correr durante la noche, iniciándolo por la tarde.

Para esto se debe instalar un mod adicional. Un mod muy adecuado se puede descargar [aquí](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator). Luego se instala normalmente en el servidor siguiendo nuestras instrucciones.

Antes de reiniciar el servidor, asegúrate de que "max-tick-time" en "server.properties" esté configurado en "-1". De lo contrario, el servidor podría colapsar. También es recomendable tener al menos 8-10 GB de RAM disponibles, ya que este proceso consume mucha RAM. Puedes aumentar temporalmente la RAM durante la noche y luego reducirla después de completar el proceso.

:::info
Ten en cuenta que el mod mencionado puede no ser compatible con la versión de Forge que usas y el proceso puede variar si usas otro mod.
:::

Cuando el servidor arranque con el mod, abre la consola. Recomendamos crear un borde para el mundo con un radio de 16,000 bloques. Para ello, ejecuta estos comandos en orden:

- worldborder center 0 0
- worldborder set 16000

:::info
Si es necesario, reemplaza las coordenadas con el centro de tu mundo para no "cortar" tu mundo (que ya puede estar construido).
:::

Una vez establecido el borde, puedes iniciar la precarga con este comando:

- pregen gen startWorldBorder

Ahora todos los chunks dentro del borde se precargan uno tras otro. Este proceso puede durar hasta 8 horas dependiendo de la cantidad de mods instalados. El progreso se muestra en la consola con mensajes informativos periódicos. Cuando termine, también se mostrará en la consola.

:::info
El mod puede quedarse instalado en el servidor después de este proceso. Seguirá optimizando chunks durante la operación, incluso sin jugadores conectados.
:::

### Visibilidad

Una medida muy común es reducir el rango de visión. El rango estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores se pasan con los chunks y a veces lo ponen a 32 chunks, por ejemplo, lo que significa que el servidor tiene que cargar y procesar todos esos chunks, lo que consume mucha potencia.

La visibilidad en un servidor Forge se ajusta en "server.properties" modificando el valor "view-distance". Para no limitar demasiado la experiencia de juego, se recomienda poner este valor entre 5 y 6, lo que alivia al servidor hasta en un 50%. Ya tenemos una entrada en nuestra documentación sobre esto, que puedes encontrar [aquí](minecraft-default-config.md).

### Compresión de datos

En un servidor hay un intercambio constante entre el servidor y los jugadores conectados. Los movimientos de los jugadores se transmiten al servidor y este los envía a todos los demás jugadores. También las acciones de los jugadores o eventos en el mundo, como explosiones, forman parte de los datos que se transmiten repetidamente.

Para hacer este intercambio más eficiente, se puede duplicar el tamaño de los datos comprimidos, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar la misma cantidad de datos con los jugadores. Para ello, hay que ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor recomendado es 512. También tenemos una entrada en nuestra documentación sobre esto, que puedes ver [aquí](minecraft-default-config.md).

## Bukkit

### Visibilidad

Una medida muy común es reducir el rango de visión. El rango estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores se pasan con los chunks y a veces lo ponen a 32 chunks, por ejemplo, lo que significa que el servidor tiene que cargar y procesar todos esos chunks, lo que consume mucha potencia.

La visibilidad en un servidor Forge se ajusta en "server.properties" modificando el valor "view-distance". Para no limitar demasiado la experiencia de juego, se recomienda poner este valor entre 5 y 6, lo que alivia al servidor hasta en un 50%. Ya tenemos una entrada en nuestra documentación sobre esto, que puedes encontrar [aquí](minecraft-default-config.md).

### Compresión de datos

En un servidor hay un intercambio constante entre el servidor y los jugadores conectados. Los movimientos de los jugadores se transmiten al servidor y este los envía a todos los demás jugadores. También las acciones de los jugadores o eventos en el mundo, como explosiones, forman parte de los datos que se transmiten repetidamente.

Para hacer este intercambio más eficiente, se puede duplicar el tamaño de los datos comprimidos, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar la misma cantidad de datos con los jugadores. Para ello, hay que ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor recomendado es 512. También tenemos una entrada en nuestra documentación sobre esto, que puedes ver [aquí](minecraft-default-config.md).

### Límites de spawn

En este paso, se reducen un poco las tasas generales de spawn de mobs en el servidor. No hay casi diferencia perceptible respecto a los valores normales. Sin embargo, en algunos lugares, como granjas de mobs, puede que la granja no funcione como se espera.

Para ajustar esto, edita la configuración "bukkit.yml". Modifica los valores en "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, puedes ajustar estos valores a tu gusto, pero los valores anteriores son un buen promedio.
:::

Para mejorar aún más el spawn, cambia el valor "monster-spawns" en "ticks-per" dentro de "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay problemas generales con los mobs (por ejemplo, detectados en el informe de timing), el valor puede subirse hasta 5. Debes observar el comportamiento del servidor con cada valor para encontrar el mejor para tu servidor.

### Procesamiento de chunks

Minecraft trabaja con chunks, que son bloques de 16x16 que forman el mundo visual para el cliente. El servidor solo trabaja con chunks y carga los necesarios en la RAM. Cuantos más chunks estén cargados y procesados, más potencia necesita el servidor, lo que puede saturarlo.

Los servidores con configuración estándar nunca descargan chunks cargados, lo que hace que la RAM se use mucho y se requiera una cantidad enorme. Esto reduce mucho el rendimiento porque hay que procesar cada vez más.

Para que el servidor solo cargue los chunks necesarios, ajusta estas opciones en "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

"period-in-ticks" determina cada cuántos segundos se descargan chunks. Puedes reducir este valor, pero cuidado con un efecto no deseado: un bucle.

En un bucle, un chunk se descarga y poco después se necesita de nuevo, por lo que el servidor tiene que cargarlo otra vez, repitiendo el proceso y sobrecargando el servidor más que si el chunk permaneciera cargado un poco más.

## Spigot

### Visibilidad

Una medida muy común es reducir el rango de visión. El rango estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores se pasan con los chunks y a veces lo ponen a 32 chunks, por ejemplo, lo que significa que el servidor tiene que cargar y procesar todos esos chunks, lo que consume mucha potencia.

En un servidor spigot, la visibilidad se ajusta en "spigot.yml" modificando el valor "view-distance". Para no limitar demasiado la experiencia de juego, se recomienda poner este valor entre 5 y 6, lo que alivia al servidor hasta en un 50%.

:::info
Según tu preferencia, también puedes ponerlo a 4, lo que ayuda mucho contra el lag en servidores de mundos de granja en versiones 1.13+.
:::

### Compresión de datos

En un servidor hay un intercambio constante entre el servidor y los jugadores conectados. Los movimientos de los jugadores se transmiten al servidor y este los envía a todos los demás jugadores. También las acciones de los jugadores o eventos en el mundo, como explosiones, forman parte de los datos que se transmiten repetidamente.

Para hacer este intercambio más eficiente, se puede duplicar el tamaño de los datos comprimidos, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar la misma cantidad de datos con los jugadores. Para ello, hay que ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor recomendado es 512. También tenemos una entrada en nuestra documentación sobre esto, que puedes ver [aquí](minecraft-default-config.md).

### Límites de spawn

En este paso, se reducen un poco las tasas generales de spawn de mobs en el servidor. No hay casi diferencia perceptible respecto a los valores normales. Sin embargo, en algunos lugares, como granjas de mobs, puede que la granja no funcione como se espera.

Para ajustar esto, edita la configuración "bukkit.yml". Modifica los valores en "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, puedes ajustar estos valores a tu gusto, pero los valores anteriores son un buen promedio.
:::

Para mejorar aún más el spawn, cambia el valor "monster-spawns" en "ticks-per" dentro de "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay problemas generales con los mobs (por ejemplo, detectados en el informe de timing), el valor puede subirse hasta 5. Debes observar el comportamiento del servidor con cada valor para encontrar el mejor para tu servidor.

### Procesamiento de chunks

Minecraft trabaja con chunks, que son bloques de 16x16 que forman el mundo visual para el cliente. El servidor solo trabaja con chunks y carga los necesarios en la RAM. Cuantos más chunks estén cargados y procesados, más potencia necesita el servidor, lo que puede saturarlo.

Los servidores con configuración estándar nunca descargan chunks cargados, lo que hace que la RAM se use mucho y se requiera una cantidad enorme. Esto reduce mucho el rendimiento porque hay que procesar cada vez más.

Para que el servidor solo cargue los chunks necesarios, ajusta estas opciones en "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

"period-in-ticks" determina cada cuántos segundos se descargan chunks. Puedes reducir este valor, pero cuidado con un efecto no deseado: un bucle.

En un bucle, un chunk se descarga y poco después se necesita de nuevo, por lo que el servidor tiene que cargarlo otra vez, repitiendo el proceso y sobrecargando el servidor más que si el chunk permaneciera cargado un poco más.

### Rango de spawn

Los mobs pueden aparecer a cierta distancia de los jugadores. Aquí reducimos un poco esa distancia para evitar problemas con el spawn. Esta configuración es importante porque ya se ajustaron otros parámetros de spawn antes.

Cambia esta configuración en "spigot.yml" bajo "world-settings":
- mob-spawn-range: 3 #Por defecto: 4

### Rango de entidades

Aquí definimos cuándo se activan las entidades (animales y mobs). Esto significa que pueden moverse o detectar jugadores. Básicamente están activas para todos, pero en modo standby, donde se mueven lentamente y consumen menos recursos.

Modifica estos valores en "spigot.yml" bajo "entity-activation-range":
- animals: 6 #Por defecto: 32
- monsters: 16 #Por defecto: 32
- misc: 2 #Por defecto: 16
- water: 6 #Por defecto: 6
- tick-inactive-villagers: true #Por defecto: true

### Optimización de embudos (funnels)

Los embudos son clave en Minecraft, pero para servidores son un problema. Cada embudo se revisa 20 veces por segundo para ver si hay ítems para recoger, y mover ítems entre embudos o cajas consume recursos.

Para mejorar esto, aumentamos el intervalo de revisión a cada 3 segundos. Las tasas de transferencia no cambian, pero puede que relojes de redstone con embudos no funcionen bien.

Ajusta estos valores en "spigot.yml":
- hopper-transfer: 24 #Por defecto: 8
- hopper-check: 24 #Por defecto: 8
- hopper-amount: 3 #Por defecto: 1

### Colisiones

Desde la versión 1.9 hay colisiones que impiden que un jugador esté dentro de otro. Aquí definimos cuántas colisiones pueden ocurrir entre entidades, especialmente en granjas con muchos mobs en poco espacio, que pueden saturar el servidor.

Modifica este valor en "spigot.yml":
- max-entity-collisions: 1 #Por defecto: 8

Como las colisiones no afectan a mobs, este valor se puede bajar. No afecta a jugadores, solo a mobs.

### Radio de fusión

El radio de fusión determina qué ítems y XP se combinan, reduciendo la cantidad de entidades que el servidor procesa. En servidores con muchos ítems en el suelo, aumentar este radio puede mejorar el rendimiento, pero hay que encontrar un punto medio para evitar lag por revisar un área demasiado grande.

Ajusta estos valores en "spigot.yml" bajo "merge-radius":
- item: 4.0 #Por defecto: 2.5
- exp: 6.0 #Por defecto: 3.0

:::info
No pongas estos valores por encima de 8 para evitar lag.
:::

## Paper Spigot

### Visibilidad

Una medida muy común es reducir el rango de visión. El rango estándar es de 10 chunks, pero muchos jugadores juegan con mucho menos, como 6-8. Algunos jugadores se pasan con los chunks y a veces lo ponen a 32 chunks, por ejemplo, lo que significa que el servidor tiene que cargar y procesar todos esos chunks, lo que consume mucha potencia.

En un servidor (paper) spigot, el rango de visión se ajusta en "spigot.yml" modificando el valor "view-distance". Para no limitar demasiado la experiencia de juego, se recomienda poner este valor entre 5 y 6, lo que alivia al servidor hasta en un 50%.

:::info
Según tu preferencia, también puedes ponerlo a 4, lo que ayuda mucho contra el lag en servidores de mundos de granja en versiones 1.13+.
:::

### Compresión de datos

En un servidor hay un intercambio constante entre el servidor y los jugadores conectados. Los movimientos de los jugadores se transmiten al servidor y este los envía a todos los demás jugadores. También las acciones de los jugadores o eventos en el mundo, como explosiones, forman parte de los datos que se transmiten repetidamente.

Para hacer este intercambio más eficiente, se puede duplicar el tamaño de los datos comprimidos, lo que significa que el servidor solo tiene que hacer el 50% del esfuerzo para intercambiar la misma cantidad de datos con los jugadores. Para ello, hay que ajustar el valor "network-compression-threshold" en la configuración "server.properties". El valor recomendado es 512. También tenemos una entrada en nuestra documentación sobre esto, que puedes ver [aquí](minecraft-default-config.md).

### Límites de spawn

En este paso, se reducen un poco las tasas generales de spawn de mobs en el servidor. No hay casi diferencia perceptible respecto a los valores normales. Sin embargo, en algunos lugares, como granjas de mobs, puede que la granja no funcione como se espera.

Para ajustar esto, edita la configuración "bukkit.yml". Modifica los valores en "spawn-limits":
- monsters: 50 #Por defecto: 70
- animals: 10 #Por defecto: 15
- water-animals: 3 #Por defecto: 5
- ambient: 4 #Por defecto: 15

:::info
Por supuesto, puedes ajustar estos valores a tu gusto, pero los valores anteriores son un buen promedio.
:::

Para mejorar aún más el spawn, cambia el valor "monster-spawns" en "ticks-per" dentro de "bukkit.yml":
- monster-spawns: 2 #Por defecto: 1

Si hay problemas generales con los mobs (por ejemplo, detectados en el informe de timing), el valor puede subirse hasta 5. Debes observar el comportamiento del servidor con cada valor para encontrar el mejor para tu servidor.

### Procesamiento de chunks

Minecraft trabaja con chunks, que son bloques de 16x16 que forman el mundo visual para el cliente. El servidor solo trabaja con chunks y carga los necesarios en la RAM. Cuantos más chunks estén cargados y procesados, más potencia necesita el servidor, lo que puede saturarlo.

Los servidores con configuración estándar nunca descargan chunks cargados, lo que hace que la RAM se use mucho y se requiera una cantidad enorme. Esto reduce mucho el rendimiento porque hay que procesar cada vez más.

Para que el servidor solo cargue los chunks necesarios, ajusta estas opciones en "bukkit.yml" bajo "chunk-gc":
- period-in-ticks: 300 #Por defecto: 600
- load-threshold: 300 #Por defecto: 0

"period-in-ticks" determina cada cuántos segundos se descargan chunks. Puedes reducir este valor, pero cuidado con un efecto no deseado: un bucle.

En un bucle, un chunk se descarga y poco después se necesita de nuevo, por lo que el servidor tiene que cargarlo otra vez, repitiendo el proceso y sobrecargando el servidor más que si el chunk permaneciera cargado un poco más.

### Rango de spawn

Los mobs pueden aparecer a cierta distancia de los jugadores. Aquí reducimos un poco esa distancia para evitar problemas con el spawn. Esta configuración es importante porque ya se ajustaron otros parámetros de spawn antes.

Cambia esta configuración en "spigot.yml" bajo "world-settings":
- mob-spawn-range: 3 #Por defecto: 4

### Spawner de mobs

En servidores de tipo city build, los spawners se usan mucho y a veces en grandes cantidades. Los spawners generan muchos mobs, lo que puede causar problemas.

Esta opción ajusta el comportamiento del spawner para que se active en intervalos más cortos. Modifica este valor en "paper.yml":
- mob-spawner-tick-rate: 3 #Por defecto: 1

:::info
El valor usado no cambia mucho el comportamiento y no afecta la experiencia de juego.
:::

### Rango de entidades

Aquí definimos cuándo se activan las entidades (animales y mobs). Esto significa que pueden moverse o detectar jugadores. Básicamente están activas para todos, pero en modo standby, donde se mueven lentamente y consumen menos recursos.

Modifica estos valores en "spigot.yml" bajo "entity-activation-range":
- animals: 6 #Por defecto: 32
- monsters: 16 #Por defecto: 32
- misc: 2 #Por defecto: 16
- water: 6 #Por defecto: 6
- tick-inactive-villagers: true #Por defecto: true

### Optimización de embudos (funnels)

Los embudos son clave en Minecraft, pero para servidores son un problema. Cada embudo se revisa 20 veces por segundo para ver si hay ítems para recoger, y mover ítems entre embudos o cajas consume recursos.

Para mejorar esto, aumentamos el intervalo de revisión a cada 3 segundos. Las tasas de transferencia no cambian, pero puede que relojes de redstone con embudos no funcionen bien.

Ajusta estos valores en "spigot.yml":
- hopper-transfer: 24 #Por defecto: 8
- hopper-check: 24 #Por defecto: 8
- hopper-amount: 3 #Por defecto: 1

:::info
Asegúrate de que "use-hopper-check" esté en "true" en "paper.yml".
:::

### Colisiones

Desde la versión 1.9 hay colisiones que impiden que un jugador esté dentro de otro. Aquí definimos cuántas colisiones pueden ocurrir entre entidades, especialmente en granjas con muchos mobs en poco espacio, que pueden saturar el servidor.

Modifica este valor en "spigot.yml":
- max-entity-collisions: 1 #Por defecto: 8

Como las colisiones no afectan a mobs, este valor se puede bajar. No afecta a jugadores, solo a mobs.

### Radio de fusión

El radio de fusión determina qué ítems y XP se combinan, reduciendo la cantidad de entidades que el servidor procesa. En servidores con muchos ítems en el suelo, aumentar este radio puede mejorar el rendimiento, pero hay que encontrar un punto medio para evitar lag por revisar un área demasiado grande.

Ajusta estos valores en "spigot.yml" bajo "merge-radius":
- item: 4.0 #Por defecto: 2.5
- exp: 6.0 #Por defecto: 3.0

:::info
No pongas estos valores por encima de 8 para evitar lag.
:::

### Explosiones

En Paper Spigot, muchas partes del servidor Minecraft han sido reprogramadas para mejorar el rendimiento, incluyendo las explosiones, que ahora se manejan mejor para evitar lag.

Modifica este valor en "paper.yml":
- optimize-explosions: true #Por defecto: false

### Cofres

Hay una pequeña optimización para los cofres: si un gato está sentado sobre un cofre, este no se puede abrir. Para comprobarlo, el servidor revisa todos los mobs en un radio, lo que consume tiempo cada vez que se abre un cofre.

Puedes desactivar esta comprobación con:
- disable-chest-cat-detection: true #Por defecto: false

### Inventarios

El inventario se usa mucho, pero no todos son iguales (cofres, mesas de trabajo, etc.). Aquí ajustamos cada cuántos ticks el servidor actualiza cada inventario para mejorar el rendimiento sin que se note.

Modifica este valor en "paper.yml":
- container-update-tick-rate: 3 #Por defecto: 1

:::info
No pongas este valor por encima de 5 para evitar bugs en inventarios. En modos como SurvivalGames, donde muchos jugadores acceden a cofres, déjalo en 1.
:::

### Actualizaciones de luz

Paper Spigot ofrece una opción para que las actualizaciones de luz se hagan fuera del tick principal (async threads), evitando que el servidor se quede congelado por actualizaciones grandes.

Modifica este valor en "paper.yml":
- queue-light-updates: true #Por defecto: false

### Guardado de datos de chunks

Los cambios en chunks no se escriben directamente en disco, sino que primero se cargan en RAM y se guardan frecuentemente, lo que puede causar lag si hay muchos cambios.

Reducimos la cantidad máxima de chunks guardados por tick para mejorar esto, aunque aumenta el uso de RAM.

Modifica este valor en "paper.yml":
- max-auto-save-chunks-per-tick: 10 #Por defecto: 24

### Redstone

Redstone se usa mucho y puede causar lag en servidores públicos. Paper Spigot ofrece un procesamiento alternativo que hace que Redstone sea casi inofensivo y funcione igual que en Vanilla.

Modifica este valor en "paper.yml":
- use-faster-eigencraft-redstone: true #Por defecto: false

:::info
**¡Cuidado! En algunas situaciones esto puede cambiar mucho el comportamiento de Redstone.**
:::

<InlineVoucher />