---
id: vserver-windows-bitwarden
title: "Configura Bitwarden en un Servidor Windows - Protege tu Gestión de Contraseñas"
description: "Descubre cómo alojar Bitwarden de forma segura para gestionar contraseñas con cifrado de extremo a extremo y funciones avanzadas de credenciales → Aprende más ahora"
sidebar_label: Instalar Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Bitwarden es un gestor de contraseñas y claves de acceso open source que utiliza cifrado de conocimiento cero y de extremo a extremo para proteger tus datos. Puedes usarlo como servicio en la nube o alojarlo tú mismo, con funciones para generar, almacenar y autocompletar credenciales seguras.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

¿Estás pensando en alojar este servicio por tu cuenta? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

<InlineVoucher />



## Requisitos previos

Antes de instalar **Bitwarden**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 2 GB         | 4 GB                       |
| Espacio en disco | 12 GB        | 25 GB                      |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo compatible. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Docker (Engine 26+ y Compose)`

**Sistema operativo:** Última versión de Windows Server compatible con Docker 26+

Verifica que todas las dependencias estén instaladas y que la versión del sistema operativo sea la correcta para evitar problemas de compatibilidad durante la instalación de Bitwarden.



## Preparación

Antes de configurar **Bitwarden**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema funciona con las mejoras de software y seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema. Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias. Bitwarden se desplegará y ejecutará en tu máquina usando varios contenedores Docker. Por eso, primero debes instalar Docker. Para ello, instala [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) en tu servidor.

Un tutorial completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](vserver-windows-docker.md).



### Crear usuario y directorio

Se recomienda configurar tu servidor Windows con una cuenta de servicio dedicada llamada `bitwarden`, desde la cual instalar y ejecutar Bitwarden. Esto asegura que tu instancia de Bitwarden esté aislada de otras aplicaciones que corran en tu servidor.

Abre PowerShell como administrador. Crea el usuario local Bitwarden ejecutando los siguientes comandos. Después del primer comando, aparecerá un cuadro para ingresar texto. Introduce la contraseña deseada y confirma. Luego ejecuta el segundo comando para finalizar la configuración.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Después crea una carpeta Bitwarden bajo `C:\` para el usuario recién creado:

```
PS C:\> mkdir Bitwarden
```

En Docker Desktop, ve a **Settings → Resources → File Sharing**. Añade el directorio `C:\Bitwarden` a las rutas compartidas. Selecciona Aplicar y Reiniciar para aplicar los cambios.



### Configura tu dominio

Por defecto, Bitwarden corre en el host a través de los puertos 80 (HTTP) y 443 (HTTPS). Configura un dominio con registros DNS apuntando al host, por ejemplo server.ejemplo.com, especialmente si lo vas a servir en internet. Evita incluir Bitwarden en el nombre de host para reducir la exposición del rol o software del servidor.




## Instalación
Ahora que se han cumplido todos los requisitos y completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Bitwarden.

Descarga el script de instalación de Bitwarden a tu máquina y luego ejecuta el script instalador:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

En el instalador primero introduces el nombre de dominio de tu instancia Bitwarden, normalmente el registro DNS configurado. Luego eliges si Let’s Encrypt debe generar un certificado SSL gratuito y confiable. Si sí, proporcionas un correo para avisos de expiración. Si no, siguen las preguntas sobre el certificado.

Introduce tu ID de instalación y clave de instalación, ambos obtenidos en [Bitwarden](https://bitwarden.com/host). Luego selecciona la región US o EU, que solo importa si conectas una instancia autoalojada a una suscripción de pago.

Si no usas Let’s Encrypt, puedes usar un certificado existente colocando los archivos en `C:\Bitwarden\bwdata\ssl\<tu_dominio>` y declarando si es confiable. Alternativamente, puedes generar un certificado autofirmado, recomendado solo para pruebas. Si eliges no usar certificado, debes colocar un proxy HTTPS delante de la instalación o las aplicaciones Bitwarden no funcionarán.



## Configuración

Después de la instalación, completa la configuración básica usando dos archivos. Primero edita el archivo de entorno en `\bwdata\env\global.override.env`. Configura ahí los detalles de tu servidor SMTP, incluyendo host, puerto, SSL, usuario y contraseña, para que Bitwarden pueda enviar correos de verificación e invitaciones a organizaciones. Si necesitas acceso al Portal de Administrador del Sistema, añade un correo administrador en `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Valida la configuración SMTP. Una configuración correcta reporta éxito; de lo contrario verás mensajes sobre falta de OpenSSL o valores incorrectos. Aplica los cambios con `.\bitwarden.ps1 -start`.

Una configuración correcta reporta éxito; de lo contrario verás mensajes sobre falta de OpenSSL o valores incorrectos. Aplica los cambios con `.\bitwarden.ps1 -restart`.

Luego revisa los parámetros de instalación en `.\bwdata\config.yml`. Este archivo controla los recursos generados y debe ajustarse para entornos especiales, por ejemplo si usas un proxy o puertos alternativos. Aplica esos cambios con `.\bitwarden.ps1 -rebuild`.

Finalmente inicia la instancia con `.\bitwarden.ps1 -start`. La primera ejecución puede tardar mientras Docker descarga las imágenes. Usa `docker ps` para confirmar que todos los contenedores están saludables. Luego abre la bóveda web en tu dominio configurado y registra una cuenta si es necesario. La verificación por correo requiere variables SMTP configuradas correctamente.

## Conclusión y más recursos

¡Felicidades! Ahora has instalado y configurado con éxito Bitwarden en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante la configuración de tu servidor:

- [bitwarden.com](https://bitwarden.com/) - Sitio oficial
- https://bitwarden.com/help/ - Centro de ayuda Bitwarden (Documentación)

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂