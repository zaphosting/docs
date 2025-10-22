---
id: gameserver-scheduled-tasks
title: "Servidor de juegos: Tareas programadas (Cron)"
description: "Descubre cómo automatizar procesos en tu servidor con tareas programadas para copias de seguridad, gestión de servicios y comandos → Aprende más ahora"
sidebar_label: Tareas programadas
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Crea tareas programadas que se ejecutan automáticamente en horarios definidos. Esto te permite automatizar varios procesos en tu servidor. Puedes especificar si la tarea debe ejecutarse solo una vez o de forma repetida. 



## Tipos de tareas

Las tareas programadas te permiten ejecutar diferentes tipos de tareas. Actualmente se soportan los siguientes tipos: 

- Iniciar servicio
- Detener servicio
- Reiniciar servicio
- Reiniciar servidor (solo si está en línea)
- Crear copia de seguridad
- Ejecutar comando

Los tipos predefinidos te permiten gestionar tu servidor de forma altamente automatizada. Especialmente el tipo **Ejecutar comando** te permite crear tareas mucho más específicas y personalizadas. 

:::warning Límites de frecuencia
Algunas tareas programadas tienen límites de frecuencia, lo que significa que no pueden ejecutarse un número infinito de veces y tienen un tiempo de espera/límite.
 :::

## Crear tareas

Ve a Tareas programadas en la administración de tu servidor de juegos bajo Configuración. Para crear una nueva tarea programada, haz clic en el botón verde con el símbolo de más a la derecha de la lista de tareas programadas. Se abrirá una ventana emergente donde podrás configurar tu tarea. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Gestionar tareas

En la configuración de una tarea, puedes definir qué tipo de tarea quieres crear. Define un nombre (opcional) y selecciona uno de los tipos de tarea disponibles. Este ejemplo muestra cómo crear una tarea programada para reiniciar el servicio regularmente. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Selecciona la opción `repetir` para el tipo de repetición. En el campo de expresión Cron, debes especificar los intervalos en los que la tarea debe ejecutarse. En este caso, el servicio se reinicia cada tres horas. 

:::tip Generador de Cron

¿No estás familiarizado con la estructura o sintaxis de Cron? Simplemente usa el [**Crontab Guru**](https://crontab.guru/). Es una aplicación sencilla que te permite crear y copiar expresiones cron con unos pocos clics. 

:::

Para completar la creación, selecciona desde cuándo hasta cuándo debe ejecutarse la tarea programada y luego haz clic en guardar.

## Eliminar tareas

¿Quieres eliminar tareas existentes? Borra las tareas en la lista haciendo clic en el botón rojo de la papelera a la derecha. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusión

Ahora sabes cómo crear, gestionar y eliminar tareas programadas. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />
