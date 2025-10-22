---
id: fivem-useprofiler
title: "FiveM: Usando el Profiler para identificar problemas en el servidor"
description: "Descubre cómo analizar el rendimiento del servidor e identificar problemas de recursos con el Profiler de FiveM para una experiencia de juego más fluida → Aprende más ahora"
sidebar_label: Usar Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

El Profiler es una herramienta de juego bastante útil y fácil de usar para medir el rendimiento del servidor. Esto se puede usar para revisar códigos y procesos que puedan estar causando problemas de rendimiento. Por ejemplo, esto puede ser causado por recursos mal desarrollados o similares. El profiler está integrado directamente en el software del servidor.

<InlineVoucher />

## Uso del Profiler
El procedimiento para usar el Profiler de FiveM es relativamente simple. Para ello, ejecuta los comandos `profiler record 100` y `profiler view` en la consola en vivo. Se creará un perfil con 100 frames, al que luego podrás acceder mediante el enlace que aparece en la consola. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Identificando problemas
El profiler contiene información sobre las actividades individuales (ticks) que necesitan ser revisadas más a fondo. Selecciona un área de tick y haz zoom en ella. Basándote en el tick, ahora puedes ver qué procesos se ejecutaron y cuánto tiempo tomaron.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

De esta forma, también puedes reconocer qué recursos consumen mucho tiempo. Recursos que consumen más de 6 ms en total pueden causar posibles problemas.
:::



## Conclusión

¡Felicidades, has creado exitosamente un perfil de FiveM que te permite identificar posibles problemas! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂 

<InlineVoucher />