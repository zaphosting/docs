---
id: webspace-wordpress-migration
title: "Hosting web: Migrando tu sitio WordPress a ZAP-Hosting"
description: "Descubre cómo migrar sin problemas tu sitio WordPress al hosting web de ZAP-Hosting y mejora tu presencia online → Aprende más ahora"
sidebar_label: Migración
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Te interesa nuestro potente producto de hosting web y quieres pasarte con nosotros? ¡No busques más! En esta guía, exploraremos el proceso para migrar tu sitio WordPress a tu producto de hosting web de ZAP-Hosting usando un plugin de WordPress.

<InlineVoucher />

## Preparación

Antes de continuar con la guía, asegúrate de tener lo siguiente listo:
- Un dominio, con acceso admin para gestionar la configuración DNS.
- Acceso admin a tu antigua instancia de WordPress.
- Tener un producto de [Hosting web](https://zap-hosting.com/en/shop/product/webspace/) con nosotros.

## Paso 1: Preparar el Hosting Web

Empieza visitando nuestra página de producto de [Hosting web](https://zap-hosting.com/en/shop/product/webspace/) y compra el plan de hosting web que mejor se adapte a las necesidades de tu sitio. Una vez configurado el producto, tendrás que instalar WordPress en él. Por favor, lee nuestra guía dedicada de [Instalación](webspace-wordpress.md) para instrucciones detalladas.

Con WordPress instalado en el hosting web, tendrás que vincular tu dominio a él. De nuevo, lee nuestra guía dedicada de [Añadir Dominio](webspace-adddomain.md) para instrucciones detalladas.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Paso 2: Configurar el Plugin Migrate Guru

Para automatizar el proceso de migración, usarás el plugin de WordPress **Migrate Guru**, que es gratuito y muy popular. Necesitarás instalarlo tanto en tu instancia antigua como en la nueva de WordPress.

:::tip Cómo entrar al Panel Admin
Para entrar como admin en un sitio WordPress, abre tu navegador y ve a tu web. Añade `/wp-admin` al final de la URL de tu web (ej. `[tu_web].com/wp-admin`) y búscalo en tu navegador. Esto te llevará a la página de login admin de WordPress, donde debes entrar con las credenciales del panel admin de tu antiguo hosting WordPress.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

En tu panel de WordPress, accede a la categoría **Plugins**, que está en el lado izquierdo de la página. Ahora selecciona **Añadir nuevo plugin** y en la barra de búsqueda escribe **Migrate Guru**.

Cuando aparezca el resultado, pulsa **Instalar** y luego **Activar**. Asegúrate de hacer esto tanto en la instancia antigua como en la nueva antes de continuar.

Al activarlo, verás una pantalla que te pedirá tu correo electrónico y aceptar los términos y condiciones, completa esto.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Paso 3: Acceder a la Clave de Migración

Con el plugin Migrate Guru instalado en ambas instancias, tendrás que acceder a la **Clave de Migración** que está en tu instancia **nueva** de WordPress en ZAP-Hosting.

La encontrarás entrando en la sección **Migrate Guru** en el lado izquierdo de tu panel de WordPress. Copia esta clave porque la necesitarás en el siguiente paso.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Prepara una copia de seguridad
Como precaución extra, recomendamos crear una copia de seguridad de tu antigua instancia de WordPress antes de seguir con la migración vía plugin. Este proceso no causa pérdida de datos, pero siempre es mejor estar seguro y tener un backup por si acaso.
:::

## Paso 4: Proceso de Migración

Vuelve al panel admin de tu instancia **antigua** de WordPress. En la sección **Migrate Guru**, pulsa el botón **Migrate** y selecciona **Other Hosts** de la lista.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Pega la clave de migración de Migrate Guru que copiaste de tu nueva instancia WordPress de ZAP-Hosting y pulsa el botón **Migrate** para iniciar el proceso.

:::warning
Asegúrate de copiar la Clave de Migración desde el panel admin de tu WordPress **nuevo** en ZAP-Hosting y pegarla en el panel admin de tu WordPress **antiguo**. Si lo haces al revés, borrarás datos.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Tras pulsar **Migrate**, el proceso de migración empezará al instante tras algunas comprobaciones.

La migración se ejecutará en segundo plano sin tiempo de inactividad y debería completarse en pocos minutos. Ten paciencia, ya que depende mucho del tamaño de tu sitio. Cuando termine, verás una pantalla de éxito.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Te recomendamos probar el sitio a fondo en tu nueva instancia WordPress para asegurarte de que la migración fue un éxito total.
:::

## Paso 5: Actualizar la Configuración DNS del Dominio

Con la migración lista, el último paso es actualizar la configuración DNS de tu dominio para configurarlo con la nueva instancia de hosting web. Debes modificar la configuración DNS de tu dominio y apuntarla a la dirección IP del hosting web de ZAP-Hosting para que tu sitio WordPress se sirva desde el servidor de ZAP-Hosting.

Para obtener la IP del hosting web, entra en el panel web de tu servidor en la web de ZAP-Hosting y ve a la sección **DNS**. Ahí encontrarás la dirección IP del hosting web.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Con la IP lista, si tu dominio no está en tu cuenta de ZAP-Hosting, entra en la web de tu proveedor de dominio.

Busca la sección **Configuración DNS** o similar en proveedores externos. Tendrás que reemplazar el **registro A** que apunta a tu antiguo hosting por la dirección IP de tu hosting web ZAP.

Haz esto con todos los **registros A** que sigan apuntando a tu antigua instancia. Cuando termines, tu dominio estará listo para funcionar con tu sitio WordPress desde ZAP-Hosting.

:::info
Ten en cuenta que los cambios en registros DNS pueden tardar hasta 24 horas en propagarse. Normalmente es rápido, pero a veces puede tardar más.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Paso 6: Configurar Certificado SSL

Como último paso, te recomendamos configurar un nuevo certificado SSL para tu nueva instancia web en tu hosting web de ZAP-Hosting. Por defecto, cuando añades un dominio vía hosting web, queda sin cifrar.

Te recomendamos leer nuestra guía dedicada de [Crear Certificado SSL](webspace-plesk-ssl.md) para instrucciones detalladas.

## Conclusión

Siguiendo esta guía, deberías haber migrado con éxito tu antigua instancia WordPress a tu nuevo hosting web de ZAP-Hosting. Te recomendamos probar todo a fondo para asegurarte de que la migración fue completa.

<InlineVoucher />