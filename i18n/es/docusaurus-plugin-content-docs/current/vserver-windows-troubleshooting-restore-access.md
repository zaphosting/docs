---
id: vserver-windows-troubleshooting-restore-access
title: "VPS: Restaurar acceso"
description: "Descubre cómo recuperar el acceso a tu VPS Windows tras un bloqueo por contraseña y minimizar el tiempo de inactividad → Aprende más ahora"
sidebar_label: Restaurar acceso
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Puede pasar rápido... Intentas iniciar sesión en tu servidor Windows, pero tu contraseña ya no es aceptada o simplemente la olvidaste. De repente, estás bloqueado y el acceso a datos y aplicaciones importantes ya no es posible. Esta situación es obviamente frustrante, pero está lejos de ser el fin. Siguiendo los pasos que te mostramos a continuación, podrás recuperar el acceso a tu VPS Windows y continuar tu trabajo con la mínima interrupción.



## Preparación
Restablecer el acceso desde la cuenta de administrador se hace usando un archivo ISO de Windows. Por lo tanto, se utiliza el mismo archivo ISO que se usó originalmente para la instalación del sistema operativo Windows Server.

Este paso se puede realizar ya sea a través de la [**Primera instalación**](dedicated-setup.md) o mediante **[ISO](dedicated-iso.md)**. Selecciona o especifica el archivo ISO que se usó originalmente, según el método que uses.

Monta el ISO y reinicia el sistema después. La interfaz de instalación de Windows debería abrirse nuevamente la próxima vez que se inicie el sistema. El resultado debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Restaurar acceso

Ahora es momento de restablecer el acceso de la cuenta de administrador. Para ello, sigue los primeros pasos de la instalación otra vez. Sin embargo, solo necesitas avanzar hasta el inicio de la instalación y luego navegar a **Reparar tu equipo**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Esto abre las opciones avanzadas. Haz clic en la opción **Solucionar problemas** y luego en **Símbolo del sistema**. Esto abrirá la consola de comandos (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Ahora debes ejecutar uno por uno los siguientes comandos en la consola:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

El layout del teclado para la consola iLO HTML puede ser diferente al tuyo, por lo que ciertos símbolos pueden estar en teclas distintas. Ten esto en cuenta para ejecutar correctamente los comandos.

:::

Después del reinicio del servidor, en la pantalla de inicio de sesión, presiona la combinación de teclas **Win+U**. En la ventana del Símbolo del sistema, escribe lo siguiente:

```
net user Administrator TuNuevaContraseña
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Tu contraseña ya ha sido cambiada. Sin embargo, debes deshacer los cambios en los archivos de **Utilman**. Para ello, simplemente reinicia tu servidor y repite estos pasos. En la consola, ejecuta nuevamente los siguientes comandos:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusión

Una vez completado el proceso, deberías haber establecido con éxito una nueva contraseña para el usuario administrador. Ahora puedes usarla para iniciar sesión nuevamente vía conexión de escritorio remoto. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para asistirte! 🙂