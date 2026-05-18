---
id: vserver-windows-ip-configuration
title: "VPS: Configuración de IP (Windows)"
description: "Aprende a configurar los ajustes de IP en un VPS Windows → Aprende más ahora"
sidebar_label: Configurar Direcciones IP
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Configurar las direcciones IP en tu VPS Windows te permite controlar cómo tu servidor se comunica dentro de la red. Esto incluye asignar direcciones IP, definir la puerta de enlace predeterminada y configurar los servidores DNS necesarios para la conectividad de red.

Una configuración correcta de IP es importante para servidores que ejecutan servicios como servidores de juegos, servidores web, bases de datos o sistemas de acceso remoto, ya que garantiza una comunicación estable en la red y una accesibilidad confiable.

:::warning ¿Servidor inaccesible por falta de conexión a internet?
Si tu servidor se vuelve inaccesible debido a una configuración de red incorrecta o falta de conexión a internet, el acceso remoto vía RDP puede dejar de funcionar. Usa la [consola VNC](vserver-vnc.md) en la interfaz web para conectarte a tu servidor y corregir la configuración de red.
:::

<InlineVoucher />

## Preparación

Antes de configurar las direcciones IP, asegúrate de tener la siguiente información a mano:

- Dirección IP que quieres asignar
- Máscara de subred
- Puerta de enlace predeterminada
- Servidores DNS

Esta información la puedes encontrar en la interfaz web. Para ello, abre la **gestión de VPS** y navega a **Direcciones IP**.

## Configuración

Conéctate a tu VPS usando **Escritorio Remoto (RDP)**. Una vez conectado, abre el **Panel de Control**. Navega a **Panel de Control → Red e Internet → Centro de redes y recursos compartidos**.

Haz clic en **Cambiar configuración del adaptador** en el lado izquierdo. Verás las interfaces de red disponibles. Haz clic derecho en tu adaptador de red activo (normalmente **Ethernet**) y selecciona **Propiedades**. En la lista, selecciona **Protocolo de Internet versión 4 (TCP/IPv4)** y haz clic en **Propiedades**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Elige **Usar la siguiente dirección IP** e ingresa los valores requeridos:

- **Dirección IP** → Tu dirección IP asignada
- **Máscara de subred** → Tu máscara de subred
- **Puerta de enlace predeterminada** → Tu puerta de enlace
- **Servidores DNS →** 1.1.1.1, 8.8.8.8

Luego configura los servidores DNS seleccionando **Usar las siguientes direcciones de servidor DNS** e ingresa tus servidores DNS preferidos. Después de ingresar todos los valores, confirma la configuración con **Aceptar** y cierra las ventanas restantes.

## Verificación

Para verificar la configuración, abre **Símbolo del sistema** y ejecuta:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Este comando muestra todas las interfaces de red y su configuración IP actual. Busca tu adaptador de red activo y verifica que la **Dirección IPv4** coincida con la dirección IP que configuraste anteriormente. Si aparece la dirección IP correcta, la configuración se aplicó con éxito.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de IP en tu VPS Windows. Si tienes más preguntas o necesitas ayuda, nuestro equipo de soporte está disponible todos los días para asistirte.

<InlineVoucher />