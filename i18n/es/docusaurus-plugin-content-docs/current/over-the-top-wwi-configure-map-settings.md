---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Configura los Ajustes de Mapas Aleatorios"
description: "Aprende a configurar los ajustes de generación aleatoria de mapas en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Mapas Aleatorios
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes de mapas aleatorios en **Over the Top WWI** te permiten generar mapas dinámicamente con diferentes terrenos, vegetación y características ambientales. Esto puede aumentar mucho la rejugabilidad y crear campos de batalla únicos para cada partida.

Al ajustar estos valores, puedes controlar el tamaño del mapa, la complejidad del terreno y la cantidad de objetos como bosques, rocas o edificios.

<InlineVoucher />

## Configuración

Los ajustes de mapas aleatorios se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de control del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` define el tamaño total del mapa generado  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` controlan cuántos elementos naturales aparecen en el mapa  
- `RandomCivBuildings` y `RandomMilBuildings` definen la cantidad de estructuras civiles y militares  
- `RandomSingleTrees` controla la colocación de árboles aislados  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` y `RandomPersistence` afectan la generación y variación del terreno  
- `RandomWaterHeight` define el nivel del agua  
- `RandomMaxTerrainHeight` controla la elevación y altura del terreno  
- `RandomDesert` determina si pueden aparecer entornos desérticos  

- `0` → Desactivado  
- `1` → Activado  
- `2` → Aleatorio  

Ajusta estos valores para crear diferentes tipos de mapas, desde bosques densos hasta campos de batalla abiertos o paisajes con terrenos variados.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de mapa se aplicarán cuando se genere un mapa aleatorio.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de mapas aleatorios en tu **servidor de Over the Top WWI**. Esto te permite crear campos de batalla únicos y dinámicos, mejorando la rejugabilidad y la experiencia de los jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />