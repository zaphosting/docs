---
id: vserver-iso
title: "VPS: Montar un archivo ISO"
description: "Descubre cómo personalizar tu VPS con tu ISO preferida para tener control total sobre tu entorno de servidor → Aprende más ahora"
sidebar_label: Montar archivo ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introducción
¿Quieres aún más libertad al elegir tu sistema? Además de nuestras plantillas de SO, por supuesto puedes montar tus propias ISOs. Es súper fácil con nuestros productos VPS. ¡Así obtienes exactamente el sistema operativo en tu servidor que realmente quieres!

<InlineVoucher />



## Archivos ISO disponibles

Además de nuestras plantillas estándar de SO preconfiguradas, también ofrecemos la opción de montar archivos ISO adicionales. Esto te brinda aún más flexibilidad al configurar y gestionar tu entorno de servidor. Nuestros productos VPS actualmente soportan los siguientes archivos ISO: 

<SearchableItemList items={items} />





## Subir un ISO personalizado

Si la imagen ISO que necesitas no está disponible en la lista predeterminada, puedes proporcionar un ISO personalizado usando una URL pública. La URL debe ser accesible vía HTTP o HTTPS y no debe requerir autenticación ni enlaces de descarga con tiempo limitado.

Después de ingresar la URL en el campo **Agregar ISO personalizado** y hacer clic en **Subir ISO**, el ISO se importa automáticamente y estará disponible para la instalación en el servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Se pueden almacenar un máximo de tres imágenes ISO personalizadas al mismo tiempo. Cada ISO subido se mantiene solo por 72 horas y luego se elimina automáticamente. Si el ISO sigue siendo necesario después de este período, debe subirse nuevamente. El cliente es responsable del contenido, licencias y seguridad del ISO proporcionado.









## Montar archivo ISO
Para montar un ISO, ve a tu panel de gestión VPS y abre **Configuración → ISOs**. Selecciona el archivo ISO que quieres, ajusta el orden de arranque y luego reinicia tu servidor. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Después del reinicio, puedes conectarte a tu servidor usando el cliente VNC y comenzar a instalar y configurar el sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Estado en línea o conexiones remotas después de montar el ISO

Después de montar un ISO, tu servidor aún no está configurado. Por lo tanto, no se mostrará ningún **estado en línea** en el panel, y las conexiones **RDP** o **SSH** no estarán disponibles. Estas solo estarán accesibles una vez que el sistema operativo haya sido instalado y configurado correctamente.

:::




## Conclusión
¡Felicidades, has seleccionado y montado tu archivo ISO con éxito! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂



<InlineVoucher />