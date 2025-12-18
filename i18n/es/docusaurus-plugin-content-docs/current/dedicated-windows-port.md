---
id: dedicated-windows-port
title: "Servidor Dedicado: Gestión de Reglas del Firewall de Windows Defender"
description: "Descubre cómo gestionar eficazmente las reglas del Firewall de Windows Defender y optimizar el reenvío de puertos para una comunicación segura del servidor → Aprende más ahora"
sidebar_label: Reenvío de Puertos (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema operativo Windows incluye su propio Firewall de Windows Defender que gestiona el tráfico entrante y saliente entre el servidor y la internet. En esta guía, repasaremos el proceso para gestionar las reglas del firewall y algunos consejos generales para el reenvío de puertos.

## Accediendo al Firewall de Windows Defender

Windows incluye la aplicación **Firewall de Windows Defender con Seguridad Avanzada** como una aplicación central del sistema que te permite gestionar fácilmente las reglas del firewall en un solo lugar.

Puedes acceder a ella simplemente buscándola en la barra de búsqueda de Windows o presionando la tecla/icono de Windows y usando la barra de búsqueda del menú inicio.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Gestión de Reglas

La mayoría de las aplicaciones y procesos, especialmente aquellos que deben ser accesibles a través de internet como servidores de juegos o servidores web, requieren reenvío de puertos para asegurar que los clientes puedan comunicarse con tu servidor (el host).

:::info
Por defecto, Windows solo abre el firewall para las aplicaciones que lo requieren, manteniendo todos los demás puertos cerrados. Esto se hace para evitar exponer puertos innecesariamente, reduciendo riesgos. Por eso también puedes ver aparecer avisos de UAC al lanzar juegos por primera vez, por ejemplo, para confirmar una nueva regla del firewall.
:::

En Windows, la gestión de reglas se hace fácilmente de dos maneras: creando reglas para programas o creando reglas que cubran puertos completos (y por lo tanto cualquier programa o proceso que los use).

Hay dos tipos de reglas:
- Regla de Entrada: Controla la comunicación entrante (desde internet hacia tu servidor).
- Regla de Salida: Controla la comunicación saliente (desde tu servidor hacia internet).

Normalmente, para el reenvío de puertos, necesitarás crear ambos tipos de reglas para permitir la comunicación con los clientes. Sin embargo, esto depende de tu caso de uso y configuración específicos.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Reglas para Programas

Crear una regla para un Programa suele ser la opción recomendada porque restringe la comunicación a un programa o proceso específico, en lugar de abrir un puerto completo que permitiría que cualquier programa o servicio se comunique por ese puerto.

Ahora crearás dos reglas para programas, una de salida y otra de entrada, ambas que acepten conexiones.

En el ejemplo a continuación, configurarás solo la regla de **Entrada**. Los pasos son exactamente los mismos, así que deberías repetirlos para crear también la regla de salida.

Comienza haciendo clic derecho en **Reglas de Entrada** en la barra lateral y selecciona la opción **Nueva regla...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

En la primera sección, selecciona la opción **Programa** como tipo de regla.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Ahora deberás seleccionar el programa para el que quieres crear la regla de reenvío, usando el botón de examinar. En este ejemplo, se eligió el navegador Mozilla Firefox como aplicación de ejemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

En la sección de acción, selecciona la opción **Permitir la conexión**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

En la sección de perfil, deja todas las opciones marcadas y continúa a la sección final. Aquí deberías poner un nombre útil para recordar la regla y puedes añadir una descripción opcional si lo deseas.

Cuando estés listo, finalmente presiona el botón **Finalizar** para crear la regla.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Has creado con éxito tu propia regla para programa en tu servidor Windows. Ahora deberías repetir esto para crear una **Regla de Salida** siguiendo los mismos pasos, pero creándola en la sección de Reglas de Salida.

### Reglas para Puertos

Crear una regla general para un Puerto también puede ser útil para muchos casos y sigue pasos similares a los anteriores.

Ahora crearás dos reglas para puertos, una de salida y otra de entrada, ambas que acepten conexiones.

En el ejemplo a continuación, configurarás solo la regla de **Entrada**. Los pasos son exactamente los mismos, así que deberías repetirlos para crear también la regla de salida.

Comienza haciendo clic derecho en **Reglas de Entrada** en la barra lateral y selecciona la opción **Nueva regla...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

En la primera sección, selecciona la opción **Puerto** como tipo de regla.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Ahora deberás definir el tipo de puerto (TCP o UDP) y el/los puerto(s) que quieres reenviar. Si necesitas reenviar tanto TCP como UDP, tendrás que crear dos reglas separadas, una para cada tipo de puerto.

En este ejemplo, se usó el puerto 25565 (TCP) como puerto de ejemplo, que es el puerto por defecto para Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

En la sección de acción, selecciona la opción **Permitir la conexión**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

En la sección de perfil, deja todas las opciones marcadas y continúa a la sección final. Aquí deberías poner un nombre útil para recordar la regla y puedes añadir una descripción opcional si lo deseas.

Cuando estés listo, finalmente presiona el botón **Finalizar** para crear la regla.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Has creado con éxito tu propia regla para puerto en tu servidor Windows. Ahora deberías repetir esto para crear una **Regla de Salida** siguiendo los mismos pasos, pero creándola en la sección de Reglas de Salida.