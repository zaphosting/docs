---
id: dedicated-ilo
title: "Servidor Dedicado: iLO"
description: "Descubre cómo gestionar completamente tu Servidor Dedicado Enterprise con iLO para un control y monitoreo sin complicaciones → Aprende más ahora"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
En nuestros Servidores Dedicados Enterprise usamos la interfaz de gestión iLO, que permite una gestión completa e ilimitada de tu servidor.  
Sus funcionalidades incluyen encendido/apagado/reinicio del servidor, consola de gestión vía Java o HTML5, montaje de medios de arranque (ISOs).  
Debes modificar la configuración con cuidado, ya que cambios incorrectos pueden causar problemas graves.

## Acceso a iLO
Abre el panel de control de tu Servidor Dedicado ZAP con el navegador que prefieras. Allí ya encontrarás la información más importante sobre tu iLO.  
Para activar el iLO simplemente haz clic en "Activate iLO".  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Ten en cuenta que puede tardar unos segundos hasta que tu iLO esté completamente disponible.  
Cuando el sistema haya iniciado la interfaz de gestión y sea accesible, verás la información de acceso.  
Para abrir el iLO haz clic en la dirección IP mostrada y usa las credenciales para iniciar sesión.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Después de un momento estarás dentro de la interfaz de administración de tu servidor dedicado.  
Aquí encontrarás mucha información importante:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Resumen
* **Estado del Sistema**  
Normalmente debería estar en verde. En cada arranque, el hardware de tu servidor se auto-revisa y reporta cualquier problema inmediatamente.  
Las variantes posibles son: verde (OK), amarillo (Degradado) y rojo (Crítico). Puede pasar que el servidor muestre tu SSD como degradado, normalmente no es problema.  
Por supuesto, puedes informar al soporte y revisaremos si es necesario actuar. Si el estado es rojo ("Crítico"), contacta al soporte de inmediato.  
El primer paso para solucionar el problema siempre debe ser un reinicio completo del servidor.

* **Estado de iLO**  
Muestra más información sobre los parámetros de iLO, no debería haber cambios significativos.  
No es necesario modificar nada en esta pestaña.

* **Estado de Energía del Servidor**  
Muestra el estado de tu servidor, por ejemplo "ON" significa que está encendido.

* **Consola Remota Integrada**  
Aquí puedes ver visualmente tu servidor y ejecutar comandos.  
Las consolas remotas difieren en dos aspectos:  
HTML5 se inicia directamente en tu navegador y no requiere software adicional.  
Java Web Start, como su nombre indica, usa Java para abrir la consola de gestión.  
Cualquier advertencia de seguridad que aparezca puede ser ignorada con seguridad.  
Cómo conectarte paso a paso con una consola remota lo puedes leer en las instrucciones detalladas.

* **Sesiones Activas**  
Aquí ves todos los usuarios conectados actualmente a iLO.

### Registro de Eventos de iLO
Guarda todos los cambios realizados vía iLO, por ejemplo inicios de sesión, arranques/apagados del servidor y cambios en la configuración.

### Registro de Gestión Integrada
Almacena toda la información relevante del hardware, por ejemplo los resultados del POST (Power on Self Test) que se ejecuta en cada arranque.  
Si hay problemas con el hardware de tu servidor dedicado, se mostrarán aquí.

### Medios Virtuales
La integración de medios de arranque propios (ISOs) se hace en el submenú "Connect CD/DVD-ROM".  
El orden de arranque está configurado para que siempre arranque primero un ISO registrado por defecto.  
El orden también puede cambiarse en el menú "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

En "Scripted Media URL" debes ingresar el enlace completo del ISO que quieres montar, por ejemplo: http://midominio.com/bootimage.iso  
Tu enlace debe apuntar directamente al ISO, por eso debe terminar en .iso.  
Luego haz clic en "Insert Media" y reinicia tu servidor en "Power Management".  
El servidor cargará el ISO insertado.

### Gestión de Energía
En este menú puedes hacer todo lo relacionado con encender y apagar tu Servidor Dedicado ZAP.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Apagado Controlado**  
Apaga tu servidor de forma ordenada, igual que presionar el botón de encendido de tu portátil o PC una vez.  
Todas las aplicaciones se cierran correctamente y el servidor se apaga de forma programada.  
Esto puede tardar un poco dependiendo de las aplicaciones.

* **Apagado Forzado**  
Si necesitas apagar el servidor inmediatamente sin esperar, esta es la opción correcta. Es equivalente a desconectar la corriente.  
El sistema se apaga al instante sin demora.

* **Reinicio Forzado**  
Provoca un reinicio inmediato del sistema.

### Medidor de Energía
Muestra el consumo medio de energía de tu sistema, básicamente a mayor consumo, mayor carga en el sistema.

### Red
Muestra la configuración de red de tu iLO, ten en cuenta que esta configuración no está relacionada con la red de tu servidor en sí.

:::info
Para configurar tu servidor o si el acceso por red no funciona, siempre puedes mirar directamente tu servidor.
:::

## Consolas Remotas (Pantalla)
iLO te ofrece por defecto dos tipos de consolas remotas:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### Consola HTML5
Con un clic ya estás en tu servidor, no necesitas software adicional y se lanza directamente en tu navegador.  
Ofrece muchas herramientas útiles:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - Configuración de gestión de energía (arrancar, apagar, reiniciar) del servidor  
* 2 - Enviar atajos de teclado (por ejemplo CTRL + ALT + DEL)  
* 3 - Incluir ISOs > CD/DVD > URL de medios scriptados  
* 4 - Estado del sistema  
* 5 - Estado de energía del servidor (ON / OFF)

Si tu servidor tiene interfaz gráfica (GUI), puedes usar el ratón normalmente y el teclado también funcionará.

### Consola Java
Para usar la consola Java necesitas tener Java instalado. (Se puede descargar en java.com)  
:::info
Cualquier mensaje de seguridad que aparezca puede ser ignorado.
:::

Al abrir el archivo aparece el siguiente mensaje, confirma con "Continue".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Acepta el riesgo y confirma con "Run".

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Ahora se abre la consola Java.  
:::info
La aplicación suele cambiar el layout del teclado a "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Configuración de gestión de energía (arrancar, apagar, reiniciar) del servidor  
* 2 - Incluir ISOs > URL CD/DVD-ROM  
* 3 - Enviar combinaciones de teclas (ej. CTRL + ALT + DEL)  
* 4 - Estado del sistema  
* 5 - Estado de energía del servidor (ON / OFF)

Si tu servidor tiene interfaz gráfica (GUI), puedes usar el ratón normalmente y el teclado también funcionará.

## Problemas Comunes, Tips & Trucos

* El servidor se queda atascado en POST (Power on Self Test) y no arranca.  
Conéctate a una consola remota y verifica dónde exactamente se queda atascado. ¿Muestra errores?  
Apaga el servidor en Gestión de Energía por unos segundos (Apagado Forzado) y luego enciéndelo de nuevo (Presión Momentánea).  
Si sigue sin arrancar, contacta al soporte.

* El ISO no se carga.  
Verifica que el enlace a tu ISO sea correcto, la prueba más fácil es pegar el enlace en tu navegador, si comienza la descarga está bien.  
Asegúrate de que el enlace esté bien puesto en Medios Virtuales y que el servidor haya sido reiniciado. También revisa el orden de arranque y que la unidad CD/DVD esté arriba.

* Mi servidor tarda mucho en arrancar.  
El hardware Enterprise usado tarda en arrancar, es totalmente normal. Puede tardar hasta 10-15 minutos.

* No puedo abrir el iLO.  
Asegúrate de que el iLO esté activado en el panel de control de tu servidor, por seguridad la interfaz de gestión se apaga automáticamente tras un tiempo.  
Puedes desactivar y activar el iLO de nuevo. (Espera al menos 5 minutos tras activarlo)

## Conclusión

Esto debería facilitarte mucho la administración una vez que hayas leído todo con detalle. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂