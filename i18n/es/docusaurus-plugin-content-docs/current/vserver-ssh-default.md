---
id: vserver-ssh-default
title: "VPS: Gestiona las claves SSH predeterminadas en tu perfil"
description: "Descubre cómo automatizar la configuración de claves SSH para un acceso más rápido al servidor y una instalación de productos más fluida con ZAP-Hosting → Aprende más ahora"
sidebar_label: Claves SSH predeterminadas
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Una de las últimas novedades en nuestra interfaz web de ZAP-Hosting es la posibilidad de añadir claves SSH predeterminadas a tu cuenta de ZAP-Hosting directamente desde nuestra web. Lo genial de esto es que las claves SSH configuradas en tu página de perfil se configurarán automáticamente por defecto y se usarán durante la primera configuración del producto o la reinstalación del sistema operativo. Esto te ahorra tiempo porque no tendrás que configurar manualmente tus claves SSH.

<InlineVoucher />

## Requisitos
Para usar esta función, debes tener una clave SSH generada. Si ya tienes una clave SSH lista, puedes pasar a la siguiente sección.

Para generar una clave SSH, te recomendamos ir a la sección **Información->Acceso y Seguridad** en la interfaz web de tu vServer.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Aquí verás un botón verde **Generar clave SSH**. Al pulsar este botón, tu clave privada SSH se descargará automáticamente en tu PC. Esta es la clave que usarás para conectarte a tu servidor una vez que SSH esté configurado.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Ahora deberías guardar la clave pública que aparece en el aviso, ya que es la que necesitarás enviar al crear la clave SSH en tu perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Pasa a la siguiente sección cuando estés listo.

## Gestionar la clave SSH en el perfil
Gestionar tus claves SSH predeterminadas en tu cuenta es muy sencillo. Ve a tu **[página de perfil de ZAP-Hosting](https://zap-hosting.com/en/customer/home/profile/)** y baja hasta llegar a la sección **Claves SSH estándar**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Añadir una nueva clave
Para añadir una clave, primero pulsa el icono verde de más para abrir el cuadro de creación. En este cuadro, primero selecciona un nombre apropiado para tu clave SSH.

Luego, pega tu clave pública SSH en el segundo campo. Tu clave SSH debe estar en formato OpenSSH, empezando con `ssh-rsa` y terminando con un sufijo. Cuando esté listo, pulsa el botón verde **Guardar** para añadir la clave.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Asegúrate de enviar tu **clave pública SSH** y no la clave privada SSH. La clave privada SSH se usa durante el inicio de sesión para autenticarte con tu clave pública.
:::

Has añadido con éxito una clave SSH predeterminada a tu cuenta de ZAP-Hosting.

### Editar o eliminar una clave
Para editar una clave, simplemente pulsa el icono azul de ojo que abrirá un cuadro. En este cuadro puedes ver los detalles actuales y editar y guardar directamente lo que quieras.

De forma similar, para eliminar una clave puedes pulsar el icono rojo de la papelera que borrará esa clave específica.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />