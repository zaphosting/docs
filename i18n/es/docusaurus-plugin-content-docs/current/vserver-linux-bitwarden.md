---
id: vserver-linux-bitwarden
title: "VPS: Configura Bitwarden en Linux"
description: "Descubre cómo alojar de forma segura Bitwarden para gestionar contraseñas con cifrado de extremo a extremo y funciones avanzadas de credenciales → Aprende más ahora"
sidebar_label: Instalar Bitwarden
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Bitwarden es un gestor de contraseñas y claves de acceso open source que utiliza cifrado de conocimiento cero y de extremo a extremo para proteger tus datos. Puedes usarlo como servicio en la nube o alojarlo tú mismo, con funciones para generar, almacenar y autocompletar credenciales fuertes.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

¿Estás pensando en alojar este servicio por tu cuenta? Te guiaremos paso a paso para configurarlo y ajustarlo, además de todo lo que debes tener en cuenta.

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

**Sistema operativo:** Última versión de Ubuntu/Debian compatible con Docker 26+

Verifica que todas las dependencias estén instaladas y que uses la versión correcta del sistema operativo para evitar problemas de compatibilidad durante la instalación de Bitwarden.



## Preparación

Antes de configurar **Bitwarden**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar sistema
Para asegurarte de que tu sistema corre con el software y parches de seguridad más recientes, siempre debes hacer una actualización del sistema primero. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completada la actualización, puedes proceder con la instalación de las dependencias. Bitwarden se desplegará y ejecutará en tu máquina usando varios contenedores Docker. Por eso, primero debes instalar Docker. Ejecuta el siguiente comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un tutorial completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](vserver-linux-docker.md).



### Crear usuario y directorio

Se recomienda configurar tu servidor Linux con una cuenta de servicio dedicada llamada `bitwarden`, desde la cual instalar y ejecutar Bitwarden. Esto asegura que tu instancia de Bitwarden esté aislada de otras aplicaciones que corran en tu servidor.

Crea el usuario bitwarden y asigna una contraseña fuerte y única para esta cuenta.

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Crea el grupo docker si no existe y añade el usuario bitwarden al grupo docker:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Crea el directorio de trabajo, asigna permisos y cambia la propiedad a bitwarden:
```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Configura tu dominio

Por defecto, Bitwarden corre en el host usando los puertos 80 (HTTP) y 443 (HTTPS). Configura un dominio con registros DNS apuntando al host, por ejemplo server.example.com, especialmente si lo vas a servir en internet. Evita incluir “Bitwarden” en el nombre de host para reducir la exposición del rol o software del servidor.




## Instalación
Ahora que cumples con todos los requisitos y has hecho las preparaciones necesarias, puedes proceder con la instalación de la aplicación Bitwarden.

Descarga el script de instalación de Bitwarden a tu máquina y luego ejecuta el instalador. Se creará un directorio `./bwdata` relativo a la ubicación de `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

En el instalador primero introduces el nombre de dominio de tu instancia Bitwarden, normalmente el registro DNS configurado. Luego eliges si Let’s Encrypt debe generar un certificado SSL gratuito y confiable. Si sí, proporcionas un correo para avisos de expiración. Si no, siguen las preguntas sobre certificados.

Introduce tu ID de instalación y clave de instalación, ambos obtenidos en [Bitwarden](https://bitwarden.com/host). Luego selecciona la región US o EU, que solo importa si conectas una instancia autoalojada a una suscripción de pago.

Si no usas Let’s Encrypt, puedes usar un certificado existente colocando los archivos en `./bwdata/ssl/tu.dominio` y declarando si es confiable. Alternativamente, puedes generar un certificado autofirmado, recomendado solo para pruebas. Si eliges no usar certificado, debes colocar un proxy HTTPS delante de la instalación o las aplicaciones Bitwarden no funcionarán.



## Configuración

Después de la instalación, completa la configuración básica usando dos archivos. Primero edita el archivo de entorno en `./bwdata/env/global.override.env`. Configura ahí los detalles de tu servidor SMTP, incluyendo host, puerto, SSL, usuario y contraseña, para que Bitwarden pueda enviar correos de verificación e invitaciones a organizaciones. Si necesitas acceso al Portal de Administrador del Sistema, añade un correo administrador en `adminSettings__admins`.

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

Valida la configuración SMTP con `./bitwarden.sh checksmtp`. Una configuración correcta mostrará éxito; si no, verás mensajes sobre OpenSSL faltante o valores incorrectos. Aplica cambios con `./bitwarden.sh restart`.

Luego revisa los parámetros de instalación en `./bwdata/config.yml`. Este archivo controla los recursos generados y debe ajustarse para entornos especiales, por ejemplo si usas proxy o puertos alternativos. Aplica cambios con `./bitwarden.sh rebuild`.

Finalmente, inicia la instancia con `./bitwarden.sh start`. La primera ejecución puede tardar mientras Docker descarga imágenes. Usa `docker ps` para confirmar que todos los contenedores estén saludables. Luego abre la bóveda web en tu dominio configurado y registra una cuenta si es necesario. La verificación por correo requiere variables SMTP configuradas correctamente.

## Conclusión y más recursos

¡Felicidades! Ya instalaste y configuraste Bitwarden en tu VPS con éxito. También te recomendamos echar un vistazo a estos recursos, que pueden ayudarte y guiarte durante la configuración de tu servidor:

- [bitwarden.com](https://bitwarden.com/) - Sitio oficial
- https://bitwarden.com/help/ - Centro de ayuda Bitwarden (Documentación)

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂