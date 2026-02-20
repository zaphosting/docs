---
id: vserver-linux-plausible
title: "Configura Plausible Analytics en un Servidor Linux - Ejecuta Analíticas Web Enfocadas en la Privacidad"
description: "Descubre cómo configurar una plataforma de analíticas web enfocada en la privacidad para obtener insights claros y rendimiento rápido → Aprende más ahora"
sidebar_label: Instalar Plausible
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Plausible es una plataforma de analíticas web ligera y de código abierto que funciona sin cookies y cumple completamente con las normativas de privacidad. Ofrece métricas clave, como conteo de visitantes, páginas vistas y duración de visitas, a través de un panel limpio e intuitivo. Gracias a su facilidad de uso, rendimiento rápido e infraestructura basada en la UE, Plausible es una alternativa moderna y consciente de la privacidad frente a Google Analytics.

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

<InlineVoucher />

## Requisitos Previos

Antes de instalar **Plausible**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación sin problemas y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 2 GB         | 4 GB                       |
| Espacio en disco | 10 GB        | 25 GB                      |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo soportado. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Docker`

**Sistema Operativo:** Última versión de Ubuntu/Debian compatible con Docker 26+

Verifica que todas las dependencias estén instaladas y que la versión del sistema operativo sea la correcta para evitar problemas de compatibilidad durante la instalación de Plausible.

## Preparación

Antes de configurar **Plausible**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias requeridas. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.

### Actualizar Sistema
Para asegurarte de que tu sistema está ejecutando el software y las mejoras de seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias.

#### Git
Los datos de Plausible se descargarán a través de GitHub. Esto requiere que Git esté instalado primero. Para ello, ejecuta el siguiente comando:
```
sudo apt install git-all
```

#### Docker

Plausible se desplegará y ejecutará en tu máquina usando un contenedor Docker. Esto requiere que Docker esté instalado primero. Para ello, ejecuta el siguiente comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un recorrido completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](dedicated-linux-docker.md).

## Instalación
Ahora que se han cumplido todos los requisitos y se han completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Plausible.

Comienza clonando el repositorio de la Community Edition y creando el archivo de configuración necesario:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Luego, crea un archivo de entorno (.env) y define las variables esenciales. La BASE_URL debe apuntar al dominio real que ya tenga un registro DNS resolviendo hacia tu servidor. También necesitarás generar una SECRET_KEY_BASE aleatoria con al menos 64 bytes:
```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Verifica el contenido del archivo con `cat .env` para confirmar que los valores son correctos. La salida debería ser así:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Estos puertos por defecto permiten que Let’s Encrypt emita automáticamente certificados TLS. Si planeas ejecutar Plausible detrás de un proxy inverso, puedes ajustar estos valores. Además, crea un archivo `compose.override.yml` para exponer los puertos correctos para el contenedor de Plausible:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Finalmente, inicia los servicios requeridos usando Docker Compose:

```
docker compose up -d
```

Una vez que los contenedores estén en ejecución, abre tu navegador en el dominio especificado en BASE_URL y crea la primera cuenta de usuario.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Configuración

Plausible puede integrarse con Google Search Console para enriquecer tus analíticas con datos de consultas de búsqueda. Esto te permite ver qué palabras clave están generando tráfico a tu sitio, proporcionando insights más profundos sobre el comportamiento de los visitantes.

Con una cuenta de Google Cloud existente y un cliente OAuth configurado, solo necesitas añadir tus credenciales (`GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`) al archivo `.env`. Una vez guardado, reinicia tus servicios Docker con `docker compose up -d`. En el panel de Plausible, ve a *Configuración del sitio > Integraciones* para completar la conexión y seguir las indicaciones de autenticación.

Para quienes aún no tienen un cliente OAuth o no están familiarizados con el proceso, la Wiki oficial de Plausible ofrece una guía detallada paso a paso. Explica cómo crear un proyecto en Google Cloud, habilitar las APIs necesarias, configurar un cliente OAuth y añadir las credenciales generadas a Plausible: [Plausible Wiki: Integración con Google](https://github.com/Plausible/community-edition/wiki/google-integration).

Si usas Google Search Console, puedes configurar la integración para importar datos de Search Console sobre términos de búsqueda, lo cual es realmente genial.

Si ya tienes una cuenta de Google Cloud con un cliente OAuth, simplemente pega tu `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` en el archivo `.env`, reinicia tu servicio Docker con `docker compose up -d` y sigue las indicaciones en la pantalla de Configuración del sitio > Integraciones de Plausible.

## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado Plausible con éxito en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que podrían brindarte ayuda y orientación adicional durante el proceso de configuración de tu servidor:

- [Plausible.io](https://Plausible.io/) - Sitio Oficial
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Anuncios, discusiones, reporte de incidencias

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />