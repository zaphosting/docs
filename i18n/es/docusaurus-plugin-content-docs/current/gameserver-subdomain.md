---
id: gameserver-subdomain
title: 'Servidor de juegos: Subdominio ZAP'
description: "Descubre cómo configurar y gestionar subdominios para tu servidor de juegos para mejorar la accesibilidad y personalización → Aprende más ahora"
sidebar_label: Subdominio Servidor de Juegos
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Nuestros servidores de juegos ahora incluyen la posibilidad de configurar subdominios para tu servidor de forma rápida y sencilla. En esta guía, descubrirás cómo usar la funcionalidad de subdominios DNS para tu servidor, ya sea para generar un subdominio ZAP Cloud o para configurar tu propio dominio.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="Dominio ZAP Cloud para Servidores de Juegos" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Disponibilidad

La función de subdominios está disponible tanto para clientes nuevos como existentes. Los clientes nuevos tendrán un subdominio `xxx`**.zap.cloud** configurado automáticamente durante el proceso de instalación. Los clientes existentes deberán activarlo manualmente en la sección **Configuración->Ajustes DNS** del panel web del servidor de juegos. El uso de esta sección se explica en la siguiente parte.

No todos los juegos están soportados actualmente, pero ya está activo en varios juegos populares como FiveM, Minecraft y más. A largo plazo, nuestro objetivo es expandir esta función a la mayor cantidad de juegos posible. Desafortunadamente, algunos juegos hacen técnicamente inviable esta función, y para esos casos simplemente verás la dirección IP como de costumbre en el panel web.

:::tip
Si el juego que tienes instalado no está soportado actualmente, no dudes en ponerte en [contacto con nuestro equipo de soporte](https://zap-hosting.com/en/customer/support/) y veremos si podemos añadirlo :)
:::

## Gestión de Subdominios (DNS)

Gestionar la función de subdominios en tu servidor de juegos es muy sencillo. Dirígete a la sección **Configuración->Ajustes DNS** para comenzar.

En esta página podrás realizar varias tareas relacionadas con la gestión del subdominio gratuito ZAP Cloud, así como el uso de tus propios dominios configurados en tu cuenta de ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Actualmente, puedes tener un máximo de 3 subdominios activos por producto (sin contar el subdominio aleatorio de ZAP Cloud).
:::

### Subdominio aleatorio ZAP Cloud

Para generar un subdominio aleatorio ZAP Cloud, debes usar el botón **Resolver subdominios** que encontrarás en esta página de configuración.

:::info
Los clientes existentes también deben usar este botón para generar un subdominio aleatorio ZAP Cloud por primera vez.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Subdominio personalizado ZAP Cloud

Puedes crear tu propio subdominio ZAP Cloud para ajustarlo a tus necesidades, simplemente introduciendo el subdominio que quieras usar y seleccionando **.zap.cloud** en el menú desplegable (opción por defecto).

:::note
Si recibes un error, puede que el subdominio ya esté en uso y/o hayas introducido una palabra o carácter prohibido para proteger a nuestros clientes.
:::

Ahora usa el botón **Crear entrada** y deberías ver el subdominio aparecer en la lista. Puede que tengas que esperar unos minutos antes de que funcione completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Dominio propio

:::info
Para poder usar tu propio dominio para crear un subdominio, asegúrate de que esté asociado a tu cuenta de ZAP-Hosting, ya sea [comprándolo en nuestra web](https://zap-hosting.com/en/shop/product/domain/) o transfiriéndolo desde otro proveedor.
:::

Crear un subdominio con tu propio dominio sigue los mismos pasos que el subdominio personalizado ZAP Cloud. Introduce el subdominio que quieras usar y selecciona tu dominio en el menú desplegable.

:::note
Si recibes un error, puede que el subdominio ya esté en uso y/o hayas introducido una palabra o carácter prohibido para proteger a nuestros clientes.
:::

Ahora usa el botón **Crear entrada** y deberías ver el subdominio aparecer en la lista. Puede que tengas que esperar unos minutos antes de que funcione completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Solución de problemas

### Subdominio ZAP Cloud

Si tienes problemas con los subdominios ZAP Cloud, puedes intentar solucionarlo tú mismo yendo a la sección **Configuración->Ajustes DNS** como se explicó antes, y usando el botón **Resolver subdominios** que está al final.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Espera unos minutos antes de comprobar si ya funcionan correctamente.

### Dominio propio

Si no ves tu propio dominio en el menú desplegable al intentar crear un subdominio, probablemente no esté asociado a tu cuenta de ZAP-Hosting.

Asegúrate de que el dominio esté activo en tu cuenta de ZAP-Hosting, lo que puede implicar transferirlo desde otros proveedores.

Si sigues teniendo problemas con cualquier parte de la función de subdominios, contacta con nuestro equipo de soporte [creando un ticket en nuestra web](https://zap-hosting.com/en/customer/support/) y estaremos encantados de ayudarte.

<InlineVoucher />