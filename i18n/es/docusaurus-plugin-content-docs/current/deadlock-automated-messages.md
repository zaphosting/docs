---
id: deadlock-automated-messages
title: "Deadlock: Mensajes Automáticos en el Servidor - ¡Mantén a tus jugadores informados sobre noticias, enlaces sociales y más!"
description: "Configura mensajes automáticos en el servidor usando tareas programadas para mostrar anuncios recurrentes"
sidebar_label: Mensajes Automáticos en el Servidor
services:
- gameserver-deadlock
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mensajes automáticos en el servidor son una forma sencilla pero efectiva de comunicar información importante a los jugadores directamente dentro del juego. Se pueden usar para mostrar las reglas del servidor, anunciar eventos, compartir consejos útiles o enviar recordatorios a intervalos regulares sin necesidad de intervención manual por parte de los administradores.

Usando **Tareas Programadas**, los mensajes del servidor pueden enviarse automáticamente al chat dentro del juego de **Deadlock** ejecutando comandos predefinidos en un horario recurrente.

<InlineVoucher />



## Cómo funcionan los mensajes automáticos

Los mensajes automáticos se crean programando una tarea que ejecuta un comando del servidor en un momento o intervalo definido. El comando puede usarse para enviar un mensaje de chat, un broadcast o una notificación del servidor.

Una vez configurada, la tarea se ejecuta automáticamente en segundo plano y muestra el mensaje a todos los jugadores conectados. Esto asegura una comunicación constante sin que el staff tenga que estar online.



## Creando un mensaje automático

Para crear mensajes automáticos en el servidor, abre el panel de control de tu servidor de juegos y navega a la sección de **Tareas Programadas**. Crea una nueva tarea programada y elige la opción para ejecutar un **comando**. En el campo del comando, ingresa el comando de mensaje soportado por tu servidor de juegos.

```
<comando de mensaje> <tu texto de mensaje>
```

Reemplaza el comando con el comando del juego o de alguna extensión que quieras usar para disparar los mensajes y `<tu texto de mensaje>` con el mensaje que quieres que vean los jugadores.

Luego puedes definir con qué frecuencia se debe enviar el mensaje, por ejemplo cada pocos minutos, cada hora o en horarios específicos del día. Para instrucciones detalladas sobre cómo crear tareas programadas, consulta la [guía de Tareas programadas](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Personalizando los intervalos de mensajes

Las tareas programadas permiten controlar completamente cuándo y con qué frecuencia aparecen los mensajes. Algunos casos comunes incluyen:

- Mostrar las reglas del servidor cada pocos minutos
- Anunciar eventos próximos en horarios fijos
- Enviar consejos de juego a jugadores nuevos o que regresan
- Recordar a los jugadores sobre enlaces de Discord o la web

El intervalo puede ajustarse en cualquier momento sin necesidad de reiniciar el servidor, permitiendo cambios flexibles a medida que tu servidor crece.



## Notas importantes

La funcionalidad de los mensajes automáticos depende de las capacidades del juego y sus comandos disponibles. Aunque los mensajes programados básicos pueden implementarse usando comandos estándar del servidor, este método puede ser limitado en cuanto a formato, condiciones o personalización avanzada.

Si el juego soporta plugins, mods o extensiones adicionales que ofrecen más flexibilidad y opciones de personalización, puede valer la pena usar esas soluciones. En esos casos, los sistemas de mensajería especializados pueden ofrecer funciones más completas que los comandos por defecto del juego y ser más adecuados para configuraciones de servidor complejas o altamente personalizadas.



## Conclusión

Los mensajes automáticos en el servidor son una forma confiable de mantener a los jugadores informados y activos sin esfuerzo manual. Usando tareas programadas para ejecutar comandos de mensaje, los administradores pueden asegurar una comunicación constante en todo el servidor.

Una vez configurados, los mensajes automáticos funcionan de forma independiente y pueden reutilizarse fácilmente ajustando simplemente el comando y texto específico del juego.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />