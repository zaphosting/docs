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

Cloudflare es un proveedor de CDN (Red de Entrega de Contenido) muy popular que mejora tus sitios web con mayor protección de seguridad, mitigación de DDoS y ofrece una gestión sencilla a través de su panel. Esta guía te mostrará cómo configurar tu dominio de ZAP-Hosting para usarlo con Cloudflare mediante ExpertDNS y ajustando los servidores de nombres.

## Preparación
Para seguir esta guía, necesitarás:
- Un dominio en tu cuenta de ZAP-Hosting
- Una cuenta de Cloudflare

## Paso 1: Activar la opción ExpertDNS

Comienza navegando al panel web de tu dominio seleccionado en tu cuenta de ZAP-Hosting. Localiza la opción **ExpertDNS** y actívala marcando la casilla y presionando el botón de guardar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Paso 2: Configurar tu dominio en Cloudflare

Los siguientes pasos implican usar Cloudflare, así que inicia sesión en tu cuenta de Cloudflare. Ya dentro, añade tu sitio web al panel siguiendo los pasos de configuración que Cloudflare te indica.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Cuando llegues al paso 4 del proceso, te proporcionarán los servidores de nombres que deberás configurar.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Ve al panel web de tu dominio y accede a la sección **ExpertDNS**. Ahí, elimina los servidores de nombres predeterminados de ZAP-Hosting y reemplázalos por los que te dio Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

No olvides guardar los cambios una vez terminado.

## Paso 3: Completar la configuración en Cloudflare

Regresa a tu panel de Cloudflare. En la página de configuración previa para tu dominio, deberías ver un botón para forzar a Cloudflare a verificar nuevamente tus servidores de nombres.

:::info
Puede tardar hasta 24 horas en reconocerse los cambios en los servidores de nombres, aunque normalmente ocurre en mucho menos tiempo.
:::

Cuando Cloudflare reconozca los cambios, recibirás un correo confirmando que la configuración está lista. También puedes verificarlo en tu panel de Cloudflare. Una configuración exitosa mostrará **Activo** bajo el dominio que configuraste.

¡Has integrado exitosamente tu dominio con Cloudflare, desbloqueando mejor rendimiento, seguridad y facilidad de gestión para tu sitio web!

<InlineVoucher />