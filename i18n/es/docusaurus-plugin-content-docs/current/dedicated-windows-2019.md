---
id: dedicated-windows-2019
title: "Servidor Dedicado: Instalación de Windows Server 2019"
description: "Descubre cómo instalar y configurar Windows Server en tu servidor dedicado para un rendimiento y seguridad óptimos → Aprende más ahora"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo Windows Server en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de configurar el sistema operativo correctamente y aprovecharlo al máximo.

:::info Windows Server 2019
Los pasos de instalación y la demostración en esta guía están basados en el sistema operativo Windows Server 2019. Las versiones anteriores del SO pueden diferir en estructura y apariencia. Sin embargo, el procedimiento es similar.
:::

:::warning Versión más reciente disponible / Detalles EOL

La última versión de Windows Server de Microsoft es la versión [2025](dedicated-windows.md). Recomendamos usar la versión más reciente para proyectos a largo plazo.

El soporte para versiones antiguas de Windows Server se descontinuará tarde o temprano. Las fechas límite para la versión 2019 son:

- Soporte activo: 09.01.2024
- Soporte de seguridad: 09.01.2029

:::

## Preparación
Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con montar un archivo ISO, lo mejor es consultar nuestra [Configuración inicial](dedicated-setup.md) o la [Guía de ISO propio](dedicated-iso.md).

## Instalación
Para instalar un Windows Server, necesitarás un archivo ISO de tu elección; puedes seleccionar la versión deseada de Windows en nuestro panel web. Alternativamente, puedes usar un archivo ISO propio, para lo cual tenemos una [Guía de ISO propio](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Si esta pantalla aparece en la consola remota que estás usando, significa que el ISO se cargó correctamente, ahora podemos comenzar con la instalación.
Elige tu idioma preferido y presiona "Siguiente" para continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Presiona "Instalar ahora" para iniciar el proceso de instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows ahora requiere una clave de producto. Introdúcela si tienes una.

:::note
No vendemos licencias de Windows, es necesario comprar una clave por tu cuenta.
:::

Puedes comprar claves de producto de Windows en varias tiendas online, verifica que la clave sea válida para tu versión de Windows, ya que existen diferentes versiones.
Por ejemplo, en Windows Server 2019 hay dos ediciones: la normal y la edición Datacenter.
Si no estás seguro de qué necesitas exactamente, simplemente presiona "No tengo clave de producto", siempre podrás agregar una clave después.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Ahora selecciona la versión que deseas instalar.
Asegúrate de elegir la versión correcta, no es posible cambiarla después.
También recuerda elegir una versión con "(Experiencia de Escritorio)", de lo contrario tu Windows será basado en consola.
Cuando hayas decidido, marca la versión y continúa con "Siguiente".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Aceptamos los términos y continuamos presionando "Siguiente".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Selecciona 'Personalizada' si quieres hacer una instalación limpia de Windows. Puedes elegir "Actualizar" si quieres actualizar, por ejemplo, de 2016 a 2019.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

En el siguiente paso, deberás crear particiones en tu servidor dedicado; normalmente no debería haber particiones creadas aún. Si hay entradas, márcalas y presiona eliminar.

Puedes crear varias particiones pequeñas o una grande. Si creas particiones pequeñas, recomendamos que la principal de Windows tenga al menos 50GB.
Haz clic en "Nuevo" para crear una partición.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Puedes simplemente presionar Aplicar si quieres una partición grande. La instalación tomará automáticamente el tamaño máximo posible.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows requiere una pequeña partición del sistema, aceptamos eso presionando "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Si estás conforme con tus particiones, elige la partición donde quieres instalar Windows y continúa con "Siguiente".
La instalación de Windows ahora hará todo automáticamente, esto puede tardar varios minutos.
No hay nada más que hacer hasta que la instalación termine.

## Configuración

Una vez que el proceso de instalación termine, Windows te pedirá que configures una contraseña.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Pon la contraseña que desees.

:::info
Recomendamos elegir una contraseña fuerte con caracteres especiales.

Si olvidas la contraseña, no hay forma de recuperarla, así que asegúrate de anotarla.
:::

Después de configurar la contraseña, estarás en la pantalla de bloqueo de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Para iniciar sesión en Windows, presiona la combinación de teclas `CTRL + ALT + DELETE`. Puedes hacerlo fácilmente a través de tu consola remota.
(Lo encontrarás en la consola Java en "Teclado")
Ahora inicia sesión con tu contraseña.

En el siguiente paso es necesario habilitar Escritorio Remoto, así podrás conectarte fácilmente a tu servidor.
Abre el Explorador de Windows y haz clic derecho en "Este equipo".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Selecciona Propiedades.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Abre "Configuración remota".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Acepta la información del firewall que aparece con "OK" y presiona "Aplicar".

Ahora abre Escritorio Remoto en tu computadora y escribe la dirección IP de tu interfaz ZAP.
El usuario siempre es Administrator y la contraseña es la que definiste antes.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Puedes ignorar la advertencia del certificado, marca la opción "No volver a preguntarme para conexiones a este equipo".
Confirma todo presionando "Sí".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

La Conexión a Escritorio Remoto ahora establecerá conexión con tu servidor dedicado y podrás usarlo.
La configuración de red se aplica automáticamente vía DHCP, así que no necesitas hacer más cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Si tienes más preguntas o problemas, ¡nuestro soporte te ayudará sin problema!
:::

## Conclusión
¡Felicidades, has instalado con éxito el sistema operativo Windows Server 2019 en tu servidor dedicado! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂