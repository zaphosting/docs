---
id: dedicated-reset
title: "Servidor dedicado: Reinicio del servidor (Estado de fábrica)"
description: "Descubre cómo reiniciar tu servidor de forma efectiva para restaurar el rendimiento o empezar desde cero con eliminación segura de datos → Aprende más ahora"
sidebar_label: Reinicio del servidor
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tu servidor ya no funciona como debería o quieres empezar de nuevo desde cero pero no sabes cómo? No te preocupes, puedes reiniciar tu servidor reinstalándolo. Esta guía te explicará cómo hacerlo y qué debes tener en cuenta.





## Preparativos

Antes de reiniciar los datos en tu servidor, debes saber que los datos existentes se perderán. Si tienes datos importantes, este es el momento adecuado para hacer una copia de seguridad antes de comenzar la reinstalación. Después, debes decidir cómo exactamente quieres reiniciar tu sistema. 



## Reiniciando los datos

Hay dos formas diferentes de reiniciar los datos, dependiendo de tus necesidades y situación. A continuación, explicamos ambas opciones en detalle:

- Reiniciar los datos usando la configuración RAID (Método rápido)
- Reiniciar los datos usando Wipe ISO (Método completo)

Al reiniciar los datos usando la configuración RAID, los datos existentes se borran lógicamente y se reemplazan con datos nuevos, siendo una solución rápida y eficiente para la reinstalación del sistema.

En comparación, reiniciar con Wipe ISO implica múltiples ciclos de borrado, asegurando que todos los datos se eliminen de forma permanente e irreversible. Este método es ideal para un borrado completo del sistema cuando se necesita una eliminación exhaustiva de datos.



### Método rápido

Al igual que con la configuración del RAID, la configuración RAID debe abrirse con la tecla `F8` durante el proceso de arranque. Abre la opción de menú **Delete Logical Drive** en la configuración RAID. Esto debería mostrar la configuración RAID actual y los discos duros. Presiona la tecla `F8` para eliminar el RAID existente. Esto debe confirmarse presionando la tecla `F3`. 

Luego, navega de nuevo a la configuración RAID y abre la opción de menú **Create Logical Drive**. Ahora selecciona los discos duros y la configuración RAID deseada (Raid 0/1) y crea el RAID confirmándolo con la tecla `Enter`.

Si no estás familiarizado con cómo configurar el RAID en tu sistema, te recomendamos que también eches un vistazo a nuestra guía general de [Configurar RAID](dedicated-raid.md). 



### Método completo

El Wipe ISO necesario debe montarse y ejecutarse para realizar el proceso real de reinicio de datos. Los archivos ISO pueden montarse ya sea vía iLO o mediante la consola remota. Si no sabes exactamente cómo hacerlo, por favor revisa la guía de [ISO propia](http://localhost:3000/guides/docs/dedicated-iso).

Monta el siguiente archivo Wipe ISO en tu servidor y reinícialo:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Una vez que el servidor se haya reiniciado, el Wipe ISO debería detectarse y cargarse automáticamente. Conéctate a tu servidor dedicado usando una consola remota (HTML5, .NET, Java Web Start) de tu elección.

Ahí verás cómo el servidor ejecuta automáticamente el proceso y el progreso del formateo. Tu servidor sobrescribirá todos los volúmenes existentes, eliminando efectivamente todos los datos. Dependiendo del tamaño del SSD, este proceso puede tardar entre 45 minutos y 2 horas.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Este proceso no se puede deshacer y por lo tanto es definitivo. No hay copias de seguridad adicionales que puedan importarse en caso de necesidad.
Te recomendamos encarecidamente no realizar este proceso a menos que estés absolutamente seguro de que quieres eliminar todos tus datos.
:::



## Conclusión

¡Felicidades, has eliminado con éxito los datos en tu servidor dedicado! Para cualquier pregunta o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte 🙂


