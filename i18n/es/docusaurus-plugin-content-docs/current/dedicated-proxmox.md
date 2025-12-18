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

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Luego, selecciona un ISO de **Proxmox VE** en el menú desplegable. Recomendamos usar la versión más reciente para estar al día con los últimos cambios. Ahora usa el botón verde **Insertar**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

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

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Deberías estar en el proceso de instalación de Proxmox. Usa las `teclas de flecha`, `enter` y `esc` para navegar. Recomendamos seleccionar la versión **Gráfica** de Proxmox, que es la que sigue esta guía.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Espera unos segundos hasta que continúe el proceso. Debes aceptar el EULA de Proxmox con el botón **Acepto** abajo a la derecha. En la siguiente página selecciona el disco destino para tu entorno. Si usas un solo disco, la configuración por defecto está preparada para ti, así que simplemente continúa con el botón **Siguiente**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Si quieres configurar RAID, ya que algunos de nuestros servidores dedicados ofrecen dos discos, debes usar el botón **Opciones** para elegir el modo `RAID`. Recomendamos `RAID1` que hace espejo entre ambos discos.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

La siguiente sección es para cosas generales como idioma y teclado, que deberían detectarse automáticamente. Completa estos datos y continúa.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Ahora debes configurar una contraseña fuerte y una dirección de correo electrónico. El correo será usado por tu panel para enviar alertas y notificaciones importantes.

:::important
Recuerda la contraseña, ¡es la que usarás para iniciar sesión en el panel por primera vez tras la instalación!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

El último paso es configurar la red. Selecciona la interfaz de gestión disponible y un nombre de host para tu servidor.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Ahora ve a la sección **Direcciones IP** en el panel web de tu servidor dedicado para encontrar una IP disponible.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Elige una dirección IP que quieras usar para tu panel Proxmox. Rellena la IP, máscara de red y puerta de enlace en el instalador usando los datos del panel web. Para el servidor DNS puedes poner `8.8.8.8`, que es el DNS público de Google.

Cuando hayas completado todo, pulsa **Siguiente** y revisa todas las opciones en la página resumen. Si todo está correcto, pulsa **Instalar** para continuar.

## Accede al panel
Tras completar la instalación y reiniciar el sistema, selecciona la opción **Proxmox Environment GNU/Linux** en el menú y pulsa **Enter**. Cuando cargue, verás un mensaje de bienvenida de Proxmox en la consola con la dirección IP y el enlace para acceder al panel vía navegador (el que especificaste antes). Navega a ese enlace.

:::note
Tu navegador puede mostrar otra vez una advertencia de riesgo de seguridad, ignórala y acepta para continuar.
:::

Si el enlace no es accesible, probablemente hiciste alguna configuración incorrecta durante la instalación, probablemente en los ajustes de red.

Ya en el panel, inicia sesión con el usuario `root` y la contraseña que configuraste durante la instalación. Asegúrate de que el **Realm** esté configurado en `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Una vez dentro, puedes ignorar el mensaje de suscripción pulsando el botón **OK** para aceptarlo. ¡Y listo! Has instalado Proxmox VE en tu servidor dedicado y accedido a tu panel con éxito.



## Crea tu primera VM
Esta sección te muestra los pasos básicos para crear tu primera Máquina Virtual (VM) desde el panel de Proxmox. Ve a `local (panel)` y selecciona la sección **Imágenes ISO**. Aquí puedes subir el archivo `.iso` manualmente o hacer que Proxmox lo descargue proporcionando la URL directa del archivo ISO.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Una vez hecho esto, procede a crear tu VM. Mira arriba a la derecha y pulsa el botón **Crear VM**. Se abrirá un menú con muchas opciones.

Primero configura la sección de ajustes generales. Por defecto el `Nodo` estará en el predeterminado (en este caso `panel`). Debes proporcionar un ID único para la VM, que por defecto será `100` o se incrementará si ya tienes VMs existentes. Ahora pon un nombre para tu VM, puede ser cualquiera.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Sigue a la sección de ajustes del SO. Aquí selecciona la imagen ISO que subiste antes. Asegúrate también de definir el tipo y versión del sistema operativo que usarás.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Recomendamos dejar la sección de ajustes del sistema por defecto, ya que debería estar configurada correctamente. Continúa a la sección de ajustes del disco donde puedes especificar el tamaño del disco para tu VM. También puedes elegir el pool de almacenamiento, aunque por defecto será `local-lvm`. El resto de ajustes funcionan bien por defecto.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Luego llegas a la sección de ajustes de CPU donde puedes definir opciones como el socket y la cantidad de núcleos que se usarán. Puedes configurarlo a tu gusto para la VM.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Igualmente, en la sección de memoria puedes definir cuánta RAM quieres asignar a la VM y elegir el estado del ballooning.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

También recomendamos dejar la sección de ajustes de red por defecto, ya que debería estar configurada correctamente por ahora. Finalmente, revisa todos los ajustes que configuraste durante la creación de la VM. Recomendamos activar la opción `Iniciar después de crear` para que la VM arranque automáticamente. Si estás satisfecho, crea la VM pulsando el botón **Finalizar**.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

¡Y así de fácil has creado tu primera VM en tu panel Proxmox! Deberías poder verla en la sección de vista de servidores a la izquierda del panel.





## Conclusión

¡Felicidades, has instalado Proxmox con éxito en tu servidor dedicado! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂


