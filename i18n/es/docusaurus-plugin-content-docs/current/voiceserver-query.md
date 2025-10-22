---
id: voiceserver-query
title: "Servidor de Voz: Acceso a TeamSpeak Query"
description: "Descubre cómo gestionar tu servidor de TeamSpeak externamente usando Query Login para un control y administración eficiente → Aprende más ahora"
sidebar_label: Login Query
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El login query de TeamSpeak te permite acceder a la interfaz de consulta del servidor, donde puedes gestionar tu servidor de TeamSpeak externamente mediante comandos.

:::warning Acceso Query de Admin del Servidor
Nuestros productos de servidor de TeamSpeak no incluyen acceso de Query de Admin del Servidor. 
:::

<InlineVoucher />

## Detalles de acceso

<Tabs>
<TabItem value="Webinterface" label="Producto Servidor de TeamSpeak" default>

Por motivos de seguridad, el login **Server Admin Query** no está disponible con el **producto servidor de TeamSpeak**. Sin embargo, si tienes derechos de administrador en tu servidor de TeamSpeak, puedes crear tu propio Login Query siguiendo estos pasos.

:::info
Funciones como importar snapshot, cambiar slots/puertos y similares no están disponibles. Estas configuraciones están predefinidas por nosotros y no pueden ajustarse manualmente. 
:::

Para crear tu propio Login Query, tienes que hacer clic en "Server Query Login" en el cliente de TeamSpeak bajo Herramientas.
Después debes ingresar un nombre para el login, que también será el nombre de usuario, por ejemplo "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Tras confirmar con "OK", se mostrará una contraseña. Debes guardarla, ya que no podrá cambiarse después. 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


Con los datos de login creados, puedes establecer una conexión, por ejemplo, vía [YaTQA](https://yat.qa). Para ello, necesitas la IP del servidor, el puerto Query, el puerto del servidor y el nombre de usuario y contraseña del login Query. 

La IP del servidor, el puerto Query y el puerto del servidor se pueden ver en el panel en la interfaz web: 

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Servidor dedicado)">

Si el servidor de TeamSpeak ha sido instalado en tu propio VPS o servidor dedicado vía la interfaz web, se puede usar el normal "Server Admin Query". Los datos de acceso se encuentran en la interfaz web de la instancia de TeamSpeak. 

</TabItem>
</Tabs>

## Acceso a Query

Introduce los datos de login proporcionados o creados para tu Login Query en Conexión Rápida dentro de la aplicación **YatQA** y luego haz clic en el **botón Conectar**. 

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Error de Puerto Query Personalizado
Por defecto, tras una instalación inicial debería aparecer un error si especificas un puerto distinto al puerto query por defecto. Esto es normal y se puede solucionar así: 

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusión

Has establecido con éxito una conexión al query usando YatQA. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible a diario para ayudarte! 🙂

<InlineVoucher />