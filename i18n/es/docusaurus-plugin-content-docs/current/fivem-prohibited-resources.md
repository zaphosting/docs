---
id: fivem-prohibited-resources
title: "FiveM: '¿El recurso contiene lógica prohibida?'"
description: "Descubre cómo proteger tu servidor de juegos FiveM de recursos maliciosos y garantizar una experiencia segura y de alto rendimiento → Aprende más ahora"
sidebar_label: Recurso contiene lógica prohibida
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los desarrolladores de recursos para FiveM han puesto mucho esfuerzo en los últimos años para proteger su código fuente usando técnicas como ofuscación, bloqueo por IP, carga remota de código y otros métodos. Desafortunadamente, estas medidas a menudo generan problemas que muchos ya conocen. Algunas de estas herramientas no solo ralentizan significativamente el rendimiento del código, sino que también introducen numerosas preocupaciones de seguridad.

Por eso, Cfx.re ha comenzado a bloquear recursos maliciosos que contienen código diseñado para infectar servidores y otros recursos. Estos recursos a veces intentan "propagar" su código a otros recursos para dar acceso a terceros a scripts y bases de datos. Es importante destacar que estos recursos generalmente se pueden comparar con virus y, por lo tanto, representan una amenaza seria.

<InlineVoucher />

## Significado

Nuestro sistema revisa todos los recursos antes del proceso de inicio por las razones de seguridad mencionadas y desactiva todos los recursos que se reconocen como peligrosos. Este paso es absolutamente necesario, por lo que lamentablemente no hay espacio para excepciones aquí. ¡La seguridad es lo primero!

En caso de que uno de tus recursos subidos esté afectado, la consola del servidor proporcionará información adicional al respecto. El contenido de esta información puede verse, por ejemplo, así:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)

## Cómo proceder

Como primer y más importante paso, recomendamos eliminar inmediatamente todos los recursos maliciosos. Además, deberías instalar solo recursos que provengan de fuentes confiables. Un buen punto de partida es, por ejemplo, la página oficial o el [foro](https://forum.cfx.re/c/development/releases/7) de FiveM. Allí encontrarás una amplia selección de recursos.

Como desarrollador o alguien en contacto con el desarrollador, recomendamos referirse al **sistema FiveM Asset Escrow**, desarrollado por Cfx.re en colaboración con **Tebex**. Más detalles están disponibles en el [post oficial del foro de Cfx.re](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).

## Recursos prohibidos

Lamentablemente no existe una lista oficial de recursos que puedan generar este mensaje. En principio, no deberías usar recursos que empleen otros métodos de ofuscación o que no estén basados en el sistema FiveM Asset Escrow.

## Conclusión

Para mantener un entorno de servidor seguro y estable, es esencial usar solo recursos confiables y eliminar inmediatamente aquellos que sean marcados. Siguiendo estas pautas y utilizando el sistema FiveM Asset Escrow, puedes ayudar a garantizar tanto la seguridad como el cumplimiento dentro del ecosistema FiveM. Para cualquier duda o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />