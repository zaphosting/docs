---
id: fivem-esx-disablehud
title: "FiveM: Desactivar/activar HUD"
description: "Entiende cómo actualizar la configuración de tu servidor ESX para mejorar la gestión del HUD y el rendimiento del servidor → Aprende más ahora"
sidebar_label: Desactivar HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan cuando ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

**Razón**: El método de realización es para una versión antigua de ESX. Este enfoque no puede usarse para la versión actual de ESX, ya que la estructura ha cambiado. 
::::



<InlineVoucher />

## 📑 Encuentra y edita Config

Una vez hecho esto, abrimos la página de Config y buscamos es_extended.  
Solo presiona CTRL + F y busca es_extended.  
Así lo encontrarás rápido.  
Trabajaremos con estos.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Ahora echemos un vistazo: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Luego lo configuramos en false y guardamos el archivo.

Después vamos al Server.cfg.  
Esto también lo encuentras en la página de Config.  
Ahí buscamos de nuevo con STR + F es_  
Buscamos es_ui y borramos esa línea completamente.  
Ahora guardamos de nuevo.

Cuando hayas hecho eso, solo tienes que reiniciar el servidor y listo.

<InlineVoucher />