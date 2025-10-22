---
id: dedicated-windows-addip
title: "Servidor dedicado: Configura direcciones IP adicionales en Windows"
description: "Descubre cómo optimizar el rendimiento y la seguridad de tu servidor usando múltiples direcciones IP de forma efectiva → Aprende más ahora"
sidebar_label: Direcciones IP adicionales
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Tener múltiples direcciones IP en un servidor puede ser muy útil por varias razones, especialmente en entornos de red complejos o para cumplir con requisitos específicos de rendimiento, seguridad y gestión de red. Asignar diferentes direcciones IP a distintos servicios o aplicaciones en el mismo servidor permite una mejor separación.

<InlineVoucher />


## Preparación

El uso de múltiples direcciones IP asume que tu paquete de servidor dedicado las incluye. Si no has reservado direcciones IP adicionales por defecto, primero tendrás que añadirlas mediante una mejora. Luego, conéctate a tu servidor vía [RDP](dedicated-windows-userdp).




## Configuración



### Recolección de información

Primero, necesitas la información sobre las direcciones IP disponibles. Las direcciones IP adicionales se pueden ver en la gestión del servidor bajo Direcciones IP.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Accediendo a la configuración de red

Hay varias formas de acceder a la configuración de red en un servidor Windows. Por ejemplo, puedes acceder a la configuración de red a través del Panel de Control en **Centro de redes y recursos compartidos**.

Abre el **Panel de Control**, haz clic en **Red e Internet** y luego en **Centro de redes y recursos compartidos**. Después, ve a "Cambiar configuración del adaptador" y haz doble clic en el adaptador de red (Ethernet 2). Esto abre el adaptador de red, donde debes acceder a las propiedades.

Ahora, en las **Propiedades** del adaptador de red, selecciona la opción **Protocolo de Internet versión 4 (TCP/IPv4)**. Ahí verás información sobre la dirección IP principal, máscara de subred, puerta de enlace predeterminada y los servidores DNS. Haz clic en el botón **Avanzadas** para añadir la(s) dirección(es) IP adicional(es).

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Añadiendo dirección(es) IP

Ahora, la dirección IP adicional se añade a través de la **Configuración avanzada de TCP/IP**. Para ello, haz clic en el botón **Agregar** bajo direcciones IP y completa los campos de **Dirección IP** y **Máscara de subred**. En el campo de dirección IP, introduce la dirección IP adicional. La máscara de subred usada es 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Conclusión

La dirección IP ha sido configurada y añadida con éxito. Para cualquier pregunta o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />