---
id: domain-cloudflare-setup
title: "Dominio: Configurar dominio con Cloudflare"
description: "Descubre cómo mejorar la seguridad y el rendimiento de tu sitio web usando Cloudflare con dominios de ZAP-Hosting → Aprende más ahora"
sidebar_label: Configuración de Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Cloudflare es un proveedor de CDN (Red de Entrega de Contenido) muy popular que mejora tus sitios web con mayor protección de seguridad, mitigación de DDoS y ofrece una gestión sencilla a través de su panel. Esta guía te dará información sobre cómo configurar tu dominio de ZAP-Hosting para usarlo con Cloudflare mediante ExpertDNS y ajustando los servidores de nombres.

<InlineVoucher />

## Preparación
Para seguir esta guía, necesitarás:
- Un dominio en tu cuenta de ZAP-Hosting
- Una cuenta de Cloudflare
  
## Paso 1: Activar la opción ExpertDNS

Comienza navegando al panel web de tu dominio seleccionado en tu cuenta de ZAP-Hosting. Localiza la opción **ExpertDNS** y actívala marcando la casilla y presionando el botón de guardar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Paso 2: Configurar tu dominio en Cloudflare

Los siguientes pasos implican usar Cloudflare, así que comienza iniciando sesión en tu cuenta de Cloudflare. Ya que hayas iniciado sesión, añade tu sitio web al panel siguiendo los pasos de configuración que Cloudflare te proporciona.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Cuando llegues al paso 4 del proceso, te proporcionarán los servidores de nombres que tendrás que configurar.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Ve al panel web de tu dominio y accede a la sección **ExpertDNS**. En esta sección, elimina los servidores de nombres predeterminados de ZAP-Hosting y reemplázalos con los que te proporcionó Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Asegúrate de guardar los cambios una vez que hayas terminado.

## Paso 3: Completar la configuración en Cloudflare

Regresa a tu panel de Cloudflare. En la página de configuración previa para tu dominio, deberías ver un botón para forzar a Cloudflare a verificar nuevamente tus servidores de nombres.

:::info
Puede tardar hasta 24 horas en reconocerse los cambios en los servidores de nombres, aunque normalmente ocurre en mucho menos tiempo.
:::

Una vez que Cloudflare reconozca los cambios en tus servidores de nombres, recibirás un correo electrónico informándote que la configuración está lista. También puedes verificarlo en tu panel de Cloudflare. Una configuración exitosa mostrará **Activo** bajo el dominio que configuraste.

Has integrado exitosamente tu dominio con Cloudflare, desbloqueando un mejor rendimiento, seguridad y facilidad de gestión para tu sitio web.

<InlineVoucher />