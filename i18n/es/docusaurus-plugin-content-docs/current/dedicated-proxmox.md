---
id: dedicated-proxmox
title: "Servidor Dedicado: Instalación de Proxmox VE"
description: "Descubre cómo configurar y gestionar Proxmox VE para virtualización empresarial con herramientas integradas y alta disponibilidad → Aprende más ahora"
sidebar_label: Instalar Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Proxmox Virtual Environment es una plataforma completa y de código abierto para la gestión de servidores en virtualización empresarial. Integra de forma estrecha el hipervisor KVM y los Contenedores Linux (LXC), almacenamiento y funcionalidades de red definidas por software, todo en una sola plataforma. Con la interfaz web integrada puedes gestionar máquinas virtuales y contenedores, alta disponibilidad para clústeres o las herramientas integradas de recuperación ante desastres con facilidad.



## Preparación

Para comenzar, debes montar y arrancar desde el instalador ISO de Proxmox VE (Virtual Environment) en tu servidor dedicado. Hay dos formas de hacerlo: el método más sencillo es a través del panel web de tu servidor dedicado o el método más largo que es manualmente mediante el panel iLO de tu servidor.



### Montar ISO vía la interfaz web
Ve a la sección **Instalación Inicial** en el panel web de tu servidor dedicado. Aquí primero debes pulsar el botón verde **activar iLO**. Espera un momento hasta que las secciones se muestren. Puede que tengas que refrescar la página para que cargue completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Luego, selecciona un ISO de **Proxmox VE** en el menú desplegable. Recomendamos usar la versión más reciente para estar al día con los últimos cambios. Ahora usa el botón verde **Insertar**.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Finalmente, debes reiniciar tu servidor dedicado para poder arrancar desde el ISO. Puedes hacerlo con el botón de reinicio en el paso 3.



### Montar ISO vía iLO
Prepara tu ISO de Proxmox VE visitando el [sitio de descargas de Proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Luego debes subirlo y montarlo en tu servidor dedicado siguiendo la guía de [iLO](dedicated-ilo.md) y [ISO propia](dedicated-iso.md) que explican cómo iniciar sesión y subir tu ISO personalizada.



## Configuración e instalación

:::important
Asegúrate de haber reiniciado tu servidor después de importar y montar el nuevo ISO antes de continuar.
:::

Ahora que tienes el ISO montado, debes arrancar desde él. Puedes hacerlo a través de la **consola remota HTML5** en tu panel iLO. Desde la interfaz web, pulsa el enlace **Abrir aquí** bajo `acceso web iLO` que te llevará a tu panel y usa las credenciales que se te mostraron para iniciar sesión.

:::note
Tu navegador puede mostrar una advertencia de riesgo de seguridad, debes ignorarla y aceptar para continuar.
:::

Una vez dentro, en la sección **Resumen** localiza y usa el enlace **HTML5** que aparece bajo `Consola remota integrada`. Esto abrirá una superposición de panel.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Deberías estar en el proceso de instalación de Proxmox. Usa las `teclas de flecha`, `enter` y `esc` para navegar. Recomendamos seleccionar la versión **Gráfica** de Proxmox, que es la que sigue esta guía.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Espera unos segundos hasta que continúe el proceso. Debes aceptar el EULA de Proxmox con el botón **Acepto** abajo a la derecha. En la siguiente página selecciona el disco destino para tu entorno. Si usas un solo disco, la configuración por defecto está preparada para ti, así que simplemente continúa con el botón **Siguiente**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Si quieres configurar RAID, ya que algunos de nuestros servidores dedicados ofrecen dos discos, debes usar el botón **Opciones** para elegir el modo `RAID`. Recomendamos `RAID1` que hace espejo entre ambos discos.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

La siguiente sección es para cosas generales como idioma y teclado, que deberían detectarse automáticamente. Completa estos datos y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Ahora debes configurar una contraseña fuerte y una dirección de correo electrónico. El correo será usado por tu panel para enviar alertas y notificaciones importantes.

:::important
Recuerda la contraseña, ¡es la que usarás para iniciar sesión en el panel por primera vez tras la instalación!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

El último paso es configurar la red. Selecciona la interfaz de gestión disponible y un nombre de host para tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Ahora ve a la sección **Direcciones IP** en el panel web de tu servidor dedicado para encontrar una IP disponible.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Elige una dirección IP que quieras usar para tu panel Proxmox. Rellena la IP, máscara de red y puerta de enlace en el instalador usando los datos del panel web. Para el servidor DNS puedes poner `8.8.8.8`, que es el DNS público de Google.

Cuando hayas completado todo, pulsa **Siguiente** y revisa todas las opciones en la página resumen. Si todo está correcto, pulsa **Instalar** para continuar.

## Accede al panel
Tras completar la instalación y reiniciar el sistema, selecciona la opción **Proxmox Environment GNU/Linux** en el menú y pulsa **Enter**. Cuando cargue, verás un mensaje de bienvenida de Proxmox en la consola con la dirección IP y el enlace para acceder al panel vía navegador (el que especificaste antes). Navega a ese enlace.

:::note
Tu navegador puede mostrar otra vez una advertencia de riesgo de seguridad, ignórala y acepta para continuar.
:::

Si el enlace no es accesible, probablemente hiciste alguna configuración incorrecta durante la instalación, probablemente en los ajustes de red.

Ya en el panel, inicia sesión con el usuario `root` y la contraseña que configuraste durante la instalación. Asegúrate de que el **Realm** esté configurado en `Linux PAM standard authentication`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Una vez dentro, puedes ignorar el mensaje de suscripción pulsando el botón **OK** para aceptarlo. ¡Y listo! Has instalado Proxmox VE en tu servidor dedicado y accedido a tu panel con éxito.



## Crea tu primera VM
Esta sección te muestra los pasos básicos para crear tu primera Máquina Virtual (VM) desde el panel de Proxmox. Ve a `local (panel)` y selecciona la sección **Imágenes ISO**. Aquí puedes subir el archivo `.iso` manualmente o hacer que Proxmox lo descargue proporcionando la URL directa del archivo ISO.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Una vez hecho esto, procede a crear tu VM. Mira arriba a la derecha y pulsa el botón **Crear VM**. Se abrirá un menú con muchas opciones.

Primero configura la sección de ajustes generales. Por defecto el `Nodo` estará en el predeterminado (en este caso `panel`). Debes proporcionar un ID único para la VM, que por defecto será `100` o se incrementará si ya tienes VMs existentes. Ahora pon un nombre para tu VM, puede ser cualquiera.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Sigue a la sección de ajustes del SO. Aquí selecciona la imagen ISO que subiste antes. Asegúrate también de definir el tipo y versión del sistema operativo que usarás.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

Recomendamos dejar la sección de ajustes del sistema por defecto, ya que debería estar configurada correctamente. Continúa a la sección de ajustes del disco donde puedes especificar el tamaño del disco para tu VM. También puedes elegir el pool de almacenamiento, aunque por defecto será `local-lvm`. El resto de ajustes funcionan bien por defecto.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Luego llegas a la sección de ajustes de CPU donde puedes definir opciones como el socket y la cantidad de núcleos que se usarán. Puedes configurarlo a tu gusto para la VM.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Igualmente, en la sección de memoria puedes definir cuánta RAM quieres asignar a la VM y elegir el estado del ballooning.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

También recomendamos dejar la sección de ajustes de red por defecto, ya que debería estar configurada correctamente por ahora. Finalmente, revisa todos los ajustes que configuraste durante la creación de la VM. Recomendamos activar la opción `Iniciar después de crear` para que la VM arranque automáticamente. Si estás satisfecho, crea la VM pulsando el botón **Finalizar**.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

¡Y así de fácil has creado tu primera VM en tu panel Proxmox! Deberías poder verla en la sección de vista de servidores a la izquierda del panel.





## Conclusión

¡Felicidades, has instalado Proxmox con éxito en tu servidor dedicado! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂


