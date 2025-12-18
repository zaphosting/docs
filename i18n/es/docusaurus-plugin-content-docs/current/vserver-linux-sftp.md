---
id: vserver-linux-sftp
title: "VPS: Establece conexión vía SFTP"
description: "Descubre cómo transferir archivos de forma segura usando SFTP y protege tus datos con conexiones cifradas → Aprende más ahora"
sidebar_label: Conexión SFTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introducción

SFTP es un protocolo seguro para transferir archivos entre computadoras a través de Internet o una red. Significa **“SSH File Transfer Protocol”** o **“Secure File Transfer Protocol”** y se basa en el **protocolo SSH (Secure Shell)**.

A diferencia de FTP (File Transfer Protocol), donde los datos se transfieren sin cifrar, SFTP garantiza que todos los datos estén cifrados y por lo tanto protegidos contra accesos no autorizados.

<InlineVoucher />



## Establecer conexión

Para la conexión vía **SFTP**, se usan los datos de acceso del usuario root. Este ejemplo muestra cómo configurar la conexión con la aplicación WinSCP. Crea una **Nueva sesión** en WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Elige `SFTP` como **protocolo de transferencia** en la ventana de configuración de la nueva sesión. Luego, introduce la **dirección IP** de tu servidor y el puerto **22**. Para el usuario y la contraseña, usa los datos de acceso de tu usuario `root`.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Uso de claves SSH
Si usas una clave SSH en lugar de la opción simple de contraseña, haz clic en **Avanzado** y navega a **SSH -> Autenticación**. Ahí puedes guardar tu clave SSH.
:::

La primera vez que te conectes vía SFTP, aparecerá este mensaje porque tu equipo aún no conoce el servidor. Confirma con **“Sí”** si confías en el servidor. Esto guardará su clave de seguridad y no te volverá a preguntar en futuras conexiones. Es un paso normal al conectar con un servidor nuevo por primera vez.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusión

Si seguiste todos los pasos, ya estableciste con éxito una conexión SFTP a tu servidor. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />