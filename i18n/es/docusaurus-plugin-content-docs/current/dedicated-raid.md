---
id: dedicated-raid
title: "Servidor Dedicado: Configuración RAID"
description: "Descubre cómo las configuraciones RAID mejoran el rendimiento y la redundancia de datos en servidores dedicados con SSDs → Aprende más ahora"
sidebar_label: Configurar RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RAID (Conjunto Redundante de Discos Independientes) es una tecnología que combina varios discos duros en una única unidad lógica para lograr redundancia de datos y/o mayor rendimiento. Existen diferentes niveles de RAID que ofrecen distintas combinaciones de distribución de datos y tolerancia a fallos.

<InlineVoucher />

## Tipos de RAID disponibles
Nuestros servidores dedicados actualmente ofrecen 2 bahías para SSD, lo que significa que hay dos configuraciones posibles para RAID. La primera es RAID0, que se usa para combinar volúmenes en uno solo grande, y RAID1, que se usa para espejar volúmenes y mantener los datos redundantes. Vamos a profundizar en ambos en las siguientes secciones.

:::info
RAID0 ofrece velocidades de lectura y escritura un poco más rápidas, gracias a que hay dos discos presentes.
:::

### RAID0
En esta configuración RAID, todos los volúmenes existentes se combinan en uno solo grande, por ejemplo, de 2 SSDs, cada uno con 1 TB. Se crearía una partición de 2TB que podría usarse completamente.

No hay redundancia de datos, por lo que en caso de un fallo técnico, la pérdida de datos suele ser inevitable porque los datos se escriben en sectores diferentes.

Si almacenas datos sensibles en tu sistema, no deberías usar RAID0 o al menos deberías hacer copias de seguridad regulares del sistema.

:::info
Si tu servidor dedicado tiene solo 1 SSD, esto es automáticamente un RAID0.
:::

### RAID1
Esta configuración es muy diferente a RAID0, aquí hay redundancia de tus datos, lo que significa que todo lo que guardas en tu servidor se duplica.
Por lo tanto, se espeja en ambos SSDs y estaría disponible incluso si falla uno de ellos, así que tus datos están seguros con 1 SSD.

En caso de un fallo técnico, solo habría que reemplazar el SSD afectado y tu servidor reconstruiría el RAID, es decir, volvería a espejar los datos.
Especialmente para datos más sensibles, esta configuración es muy recomendada, pero no es una alternativa para evitar hacer copias de seguridad.

:::info
¡Las copias de seguridad regulares de todos los datos importantes son esenciales!
:::

## El asistente de configuración

Cuando tu servidor está arrancando, es necesario iniciar la herramienta de configuración RAID. Esto se puede hacer presionando `F8` en el paso de arranque correspondiente.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Presiona F8 en este punto para abrir la herramienta de configuración RAID

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Después de unos segundos, aparecerá esta vista general de configuración.

***

Ahora hay varias opciones de menú:

* Crear unidad lógica  
Crea un nuevo volumen.

* Ver unidad lógica  
Muestra la configuración RAID actual.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Eliminar unidad lógica  
Puedes eliminar la configuración RAID actual, para crear una nueva por ejemplo.

* Seleccionar volumen de arranque  
Podrías arrancar desde otro medio de almacenamiento, lo cual no es necesario en nuestro caso.

* Gestionar claves de licencia  
No es necesario ajustar o cambiar nada aquí, la licencia ya está preconfigurada.

* Configuración de caché  
La opción de caché se puede ajustar para aumentar un poco las velocidades de lectura/escritura del SSD.  
Básicamente, los últimos bloques de datos se almacenan en caché durante cada proceso de escritura por razones de seguridad, por ejemplo, en caso de una pérdida de energía.  
Esto causa una desventaja mínima en el rendimiento.

### Crear un nuevo RAID

Primero verificamos que no haya ningún volumen, abrimos `Eliminar unidad lógica`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Presionamos `F8` para eliminar el RAID existente.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Presionando `F3` confirmamos la eliminación.

***

Después de que el RAID se haya eliminado con éxito, necesitamos abrir `Crear unidad lógica`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Aquí puedes ver todos tus SSDs y elegir entre configuraciones RAID.  
Por supuesto, no todos estos RAIDs pueden implementarse en la configuración actual.

En nuestro ejemplo, elegimos RAID0 o RAID1.

:::info
Puedes cambiar entre los menús presionando `TAB`
:::

Cuando termines de elegir tu configuración RAID, puedes confirmarla presionando `Enter`.

:::info
Puedes cerrar el asistente de configuración presionando `ESC`
:::

### Seleccionar volumen de arranque

Si has modificado tu RAID, es necesario seleccionar el volumen de arranque.  
Esto se puede hacer fácilmente en **Seleccionar volumen de arranque**, elige ahí la unidad lógica que creaste, de lo contrario tu servidor quedará atrapado en un bucle de arranque.

**Seleccionar volumen de arranque**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Almacenamiento conectado directamente**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Unidad lógica 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Presiona `F8` para guardar como volumen de arranque**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Al final tienes la opción de presionar `F8` para reiniciar tu sistema directamente o volver al menú principal presionando `Enter`.  
Recuerda que el volumen de arranque debe configurarse **siempre** que modifiques tu configuración RAID.



## Conclusión

¡Felicidades, has configurado exitosamente el RAID en tu servidor dedicado! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂


<InlineVoucher />