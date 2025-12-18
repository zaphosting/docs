---
id: webspace-external-domain
title: "Hosting web: Vincular dominio alojado externamente"
description: "Aprende cómo conectar tu dominio externo al hosting web de ZAP-Hosting para que tu web y correo funcionen sin problemas → Aprende más ahora"
sidebar_label: Vincular dominio externo
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

¿Ya tienes un dominio registrado con otro proveedor y quieres conectarlo a tu producto de hosting web de ZAP-Hosting? ¡Sin problema! Para ello, necesitas ajustar la configuración DNS en tu proveedor de dominio. En esta guía, te mostramos exactamente qué registros DNS debes crear para que tu dominio apunte correctamente a tu hosting web.

:::info Transfiere tu dominio
Transfiere tu dominio a ZAP-Hosting y disfruta de una gestión más sencilla. Conecta tu dominio a tu hosting web con solo unos clics y aprovecha muchas funciones adicionales. Aprende cómo transferir tu dominio en nuestra guía de [Transferencia de Dominio](domain-transfer.md).
:::

<InlineVoucher />



## Vincular dominio en Plesk

Antes de poder vincular tu dominio externo a tu hosting web, primero debes añadir el dominio en **Plesk**. Para ello, agrega tu dominio en la sección **Configuración de Hosting**. Si no sabes cómo hacerlo aún, puedes encontrar instrucciones detalladas en nuestra guía [Añadir Dominio](https://zap-hosting.com/guides/docs/webspace-adddomain).

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Configurar los ajustes DNS

Para conectar tu dominio externo a tu hosting web de ZAP-Hosting, primero debes ajustar la configuración DNS en el proveedor donde tienes registrado el dominio. Para que tu web y correos funcionen correctamente, tu dominio debe saber a qué servidor dirigir a los visitantes y el tráfico de correo. Esto se hace creando los registros DNS necesarios.

Necesitarás la dirección IP de tu instancia de hosting web para configurar los registros A. Puedes encontrar esta información directamente en tu panel de hosting web de ZAP.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Una vez que tengas la dirección IP, puedes añadir los registros DNS necesarios en tu proveedor de dominio. Estos incluyen registros A para apuntar tu dominio a tu hosting web, así como registros MX y TXT para gestionar la entrega de correo y la verificación del dominio.

Para más información detallada sobre cómo funcionan los diferentes tipos de registros DNS y cuál es su propósito, te recomendamos echar un vistazo a nuestra guía de [Registros de Dominio](domain-records.md).

Aquí tienes una tabla con todos los registros DNS necesarios para tu configuración:

| Nombre                         | Tipo | Valor                           | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | Dirección IP de la instancia de hosting web | 3600 | 0    |
| mail                           | A    | Dirección IP de la instancia de hosting web | 3600 | 0    |
| www                            | A    | Dirección IP de la instancia de hosting web | 3600 | 0    |
| domain.tld.                    | A    | Dirección IP de la instancia de hosting web | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning Los cambios DNS pueden tardar

Los cambios en la configuración DNS pueden tardar hasta 24 horas en propagarse completamente a nivel mundial. Durante este tiempo, tu dominio podría no apuntar inmediatamente a tu nuevo hosting web o servicios de correo, así que ten paciencia mientras los cambios se aplican.
:::




## Conclusión
Siguiendo estos pasos configurarás y vincularás tu dominio a tu hosting web. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂


<InlineVoucher />