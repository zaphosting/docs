---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Restaurar acceso"
description: "Descubre cómo recuperar el acceso a tu VPS Linux tras un bloqueo por contraseña y minimizar el tiempo de inactividad → Aprende más ahora"
sidebar_label: Restaurar acceso
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Puede pasar rápido. Intentas iniciar sesión en tu servidor Linux, pero la contraseña ya no es aceptada o la has olvidado. Como resultado, el acceso al sistema y a datos o servicios críticos ya no es posible. Esta situación puede ser frustrante, especialmente cuando el servidor es necesario para operaciones en curso. En la mayoría de las distribuciones Linux, el acceso se puede restaurar usando el modo de recuperación sin necesidad de reinstalar el sistema operativo. Siguiendo los pasos a continuación, podrás recuperar el acceso a tu servidor y continuar trabajando con la mínima interrupción.



## Restaurar acceso

Para restablecer la contraseña usando el modo de recuperación, el sistema debe arrancar con acceso al menú de arranque GRUB. Durante el inicio del sistema, abre el menú GRUB y selecciona **Opciones avanzadas para Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

En la siguiente pantalla, elige la entrada que inicia el sistema en **modo de recuperación**. Esto cargará el entorno de recuperación en lugar del sistema operativo normal.

Una vez que se muestre el menú de recuperación, selecciona **root – Drop to root shell prompt** y confirma la selección. Presiona Enter nuevamente para acceder al shell root.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

En modo de recuperación, el sistema de archivos root se monta como solo lectura por defecto. Para permitir cambios de contraseña, debe remontarse con permisos de escritura. Ejecuta el siguiente comando:

```bash
mount -o remount,rw /
```

Si no sabes el nombre de usuario, puedes listar todas las cuentas disponibles revisando los directorios home:

```
ls /home
```

Para restablecer la contraseña, usa el comando `passwd` seguido del nombre de usuario:

```
passwd username
```

Reemplaza `username` con el nombre real de la cuenta. Ingresa la nueva contraseña y confírmala cuando se te pida. La contraseña no se mostrará en pantalla mientras la escribes. Una vez que la contraseña se haya actualizado correctamente, reinicia el sistema usando el comando `reboot`.



## Conclusión

Una vez completado el proceso, deberías haber establecido con éxito una nueva contraseña para el usuario deseado. Ahora puedes usarla para iniciar sesión nuevamente vía conexión remota. Para cualquier duda o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂