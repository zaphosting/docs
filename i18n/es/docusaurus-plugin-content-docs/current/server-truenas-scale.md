---
id: server-truenas-scale
title: "Configura TrueNAS SCALE en un Servidor - Crea tu NAS Personal"
description: "Descubre cómo instalar TrueNAS SCALE en tu servidor dedicado para almacenamiento en red y compartir archivos → Aprende más ahora"
sidebar_label: Instalación de TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

TrueNAS SCALE es una plataforma de almacenamiento open-source que te permite crear un sistema de almacenamiento conectado en red (NAS) en un servidor. En esta guía, instalarás TrueNAS SCALE en un servidor dedicado y configurarás la instalación inicial, incluyendo pools de almacenamiento, cuentas de usuario y compartición de archivos SMB.

:::danger VPS No Adecuado
Nuestros productos VPS no son adecuados porque solo contienen un disco virtual. Puedes instalar TrueNAS SCALE en un VPS, pero no podrás crear pools de almacenamiento ya que todo el disco se usa para el sistema operativo.

Para configurar TrueNAS SCALE, se requiere una [configuración de servidor dedicado](https://zap-hosting.com/en/dedicated-server-hosting/) con al menos dos discos duros.
 :::

<InlineVoucher />

## Preparación

Antes de comenzar la instalación, asegúrate de cumplir con los siguientes requisitos mínimos del sistema:

| Hardware   | Mínimo     | Recomendación ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 2 núcleos de CPU | 8 núcleos vCPU           |
| RAM        | 8 GB        | 16 GB                      |
| Espacio en disco | 16 GB para SO | Depende del caso de uso  |

<InlineServiceLink />

Ve al sitio oficial de [TrueNAS](https://www.truenas.com/download-truenas-scale/) y descarga la última versión estable. Puedes subir el ISO a una ubicación pública (tu propio servidor web o almacenamiento en la nube) o mantenerlo localmente en tu PC para montarlo directamente.

:::tip[Hospedaje del ISO]
Si planeas montar el ISO vía URL en la consola remota, asegúrate que la URL del archivo ISO termine en `.iso` y sea accesible públicamente sin autenticación.
:::

**Montando el ISO**

Inicia sesión en tu [Panel de ZAP-Hosting](https://zap-hosting.com/en/customer/) y navega hasta tu servidor dedicado en la lista de servicios. Una vez ahí, abre la página de gestión del servidor y haz clic en **Activar iLO** para acceder a la interfaz de gestión del servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

En la interfaz iLO, busca la opción **Consola Remota Integrada**. Elige tu tipo de consola preferido y lánzala. Se abrirá una ventana nueva con acceso directo a la pantalla de tu servidor.

En la consola remota, haz clic en el **icono de CD** en la parte superior y selecciona **CD/DVD**. Elige **URL de medios scriptados** si subiste el ISO online e ingresa su URL directa. Si no, selecciona **Archivo .iso local** para buscarlo en tu PC. De cualquier forma, el ISO se montará en la unidad virtual de CD/DVD.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Métodos Alternativos
Para otros métodos de montaje de ISO, incluyendo vía la interfaz de Medios Virtuales, consulta la [guía de ISO propio](dedicated-iso.md).
:::

Con el ISO montado, usa el menú **Power** en la consola para reiniciar. Selecciona **Reset** y el servidor arrancará desde el ISO de TrueNAS SCALE.

## Instalación

Observa la consola mientras el sistema arranca. Aparecerá la pantalla de configuración de TrueNAS SCALE y el instalador se cargará automáticamente. La carga del entorno de instalación tarda unos minutos.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

El instalador muestra **Elegir medio de destino** junto con tus discos disponibles. Navega con las **teclas de flecha** y selecciona el disco para el SO. Elige el disco más pequeño para la instalación del SO (este disco quedará dedicado completamente a TrueNAS SCALE). Presiona **Espacio** para seleccionarlo y luego **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Aparece una advertencia indicando que la instalación **borrará** todo en el disco seleccionado. Navega a **Sí** con las flechas y presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Luego, el instalador pregunta sobre la configuración de autenticación. **Opción 1** establece la contraseña ahora, mientras que **Opción 2** permite configurarla después vía la interfaz web. Usaremos **Opción 2: Configurar usando la UI web** para mayor flexibilidad. Selecciónala y presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

El instalador pregunta **"¿Permitir arranque EFI?"**. Selecciona **Sí** (recomendado) y presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

La instalación comienza y suele tardar entre 15 y 20 minutos. Observa el progreso en pantalla mientras se copian archivos y el sistema se configura.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Al finalizar, verás **"La instalación de TrueNAS fue exitosa"**. Presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Antes de reiniciar, **desmonta el ISO** o arrancarás de nuevo en el instalador. Haz clic en el **icono de DVD**, selecciona **CD/DVD** y haz clic en **Expulsar medio**. Reinicia usando el menú Power o deja que se reinicie automáticamente.

<InlineServiceLink />

## Configuración

Después de la instalación, debes configurar desde qué disco arranca el servidor. TrueNAS SCALE está instalado, pero el servidor necesita que le indiques arrancar desde el disco correcto mediante la configuración ROM del controlador RAID.

:::info[Paso Crítico]
Después de la instalación, debes configurar el volumen de arranque en la ROM del controlador RAID para asegurar que el servidor arranque desde el disco correcto.
:::

**Configurando el Disco de Arranque en la ROM**

Observa la consola durante el arranque. Cuando aparezca **"Presiona F8 para la utilidad de configuración ROM para arreglos"**, presiona **F8** inmediatamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

Se abre la utilidad de configuración ROM. Navega a **Seleccionar volumen de arranque** con las flechas y presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Aquí aparecen tus discos disponibles. Navega al disco donde instalaste TrueNAS SCALE y presiona **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Con el disco seleccionado, presiona **F8** para guardar. Confirma si te lo pide y luego sal de la utilidad. Tu servidor arrancará en TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Accediendo a la Interfaz Web**

Después del primer arranque, la consola de TrueNAS SCALE muestra la URL de acceso a la UI web: `http://[tu_ip_servidor]`. Apunta esta dirección IP porque la necesitarás para acceder a la interfaz web.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Auto-configuración de red
TrueNAS SCALE normalmente configura la red automáticamente vía DHCP. Omite esto a menos que tengas múltiples IPs o necesites una IP estática específica.
:::

Para configurar la red manualmente, selecciona **1) Configurar interfaces de red** en el menú de consola. Elige tu interfaz principal (como `enp0s3` o `eth0`), selecciona **Configurar IPv4**, luego **Estática**. Ingresa tu IP, máscara de subred y gateway (encuéntralos en tu Panel de ZAP-Hosting).

Abre un navegador y navega a `http://[tu_ip_servidor]` usando la IP que viste en la consola.

Como elegimos **Configurar usando UI web** antes, aquí es donde pones la contraseña. La página de login muestra `truenas_admin` como usuario. Ingresa una contraseña fuerte, confírmala y haz clic en **Enviar**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Seguridad Importante
Elige una contraseña fuerte y única para tu cuenta admin de TrueNAS. Esta cuenta tiene acceso total al sistema.
:::

Después de iniciar sesión, aparece el panel mostrando información del sistema, estado de red, pools de almacenamiento, servicios y alertas. Has configurado TrueNAS SCALE con éxito y ahora estás listo para configurar el almacenamiento.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Creando Pools de Almacenamiento**

Haz clic en **Storage** en la barra lateral izquierda, luego en el botón **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Primero, pon un nombre para tu pool, algo como `Disk`, `tank` o lo que tenga sentido para ti. Haz clic en **Next** cuando estés listo.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

En la sección **Data**, abre el desplegable **Layout** y selecciona la configuración que se ajuste a tus necesidades:

- **Stripe**: Máxima capacidad usable pero sin redundancia
- **Mirror**: Guarda datos idénticos en dos discos, ofreciendo redundancia y reduciendo capacidad usable
- **RAIDZ1**: Proporciona redundancia de un disco
- **RAIDZ2**: Proporciona redundancia de dos discos
- **RAIDZ3**: Proporciona redundancia de tres discos

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

En **Selección de disco**, aparecen todos tus discos de almacenamiento. Haz clic en los que quieres incluir en el pool y se moverán al área de configuración mostrando la capacidad estimada.

:::info Disco de arranque no disponible
El disco de instalación no aparecerá aquí porque está dedicado exclusivamente al sistema operativo.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Deja las opciones opcionales por defecto y haz clic en **Next**. La página de revisión muestra tu configuración incluyendo nombre, layout, discos y capacidad. Verifica y haz clic en **Create Pool** para confirmar.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organizando con Datasets**

Con tu pool creado, ahora puedes organizar tus datos usando datasets. Los datasets son subdivisiones lógicas del pool que ayudan a separar diferentes tipos de datos. Haz clic en **Datasets** en la barra lateral. Ahí aparece tu nuevo pool (ejemplo: "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Haz clic en **Add Dataset**. El pool se establece automáticamente como padre. Ponle un nombre como `documents`, `media` o `backups`. Deja las opciones avanzadas por defecto a menos que tengas requisitos específicos. Haz clic en **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Creando Cuentas de Usuario**

Haz clic en **Credentials** en la barra lateral, luego en **Add**. Elige un nombre de usuario (como `john` o `fileuser`), añade el nombre completo y establece una contraseña. Deja grupo principal, directorio home y shell por defecto. Al final, activa la opción **SMB** para acceso desde Windows.

Personaliza permisos según tus necesidades de seguridad. Para compartir archivos básico, las opciones por defecto con SMB activado son suficientes. Cuando termines, haz clic en **Submit** para completar este paso.

:::danger Importante para acceso SMB
No uses `root` ni `truenas_admin` para compartir archivos. Estas cuentas del sistema no funcionan con SMB. Crea usuarios dedicados.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Configurando Comparticiones SMB**

Haz clic en **Shares** en la barra lateral. Aparecen tres opciones: Windows (SMB) para Windows/macOS/Linux, Unix (NFS) para Linux/Unix, y Block (iSCSI) para almacenamiento en bloque. Configuraremos SMB. Haz clic en **Add** en la sección Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Se abre el diálogo **Add SMB**. En **Path**, navega a tu dataset (ejemplo: `/mnt/Disk/documents`). En **Name**, pon algo como `documents` (los usuarios verán este nombre en la red). **Purpose** puede quedar por defecto en la mayoría de casos. Añade una descripción si quieres. Hay opciones avanzadas (configuración ACL y otras), pero deja el acceso de invitados deshabilitado por seguridad. Haz clic en **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Después de crear la compartición, aparece un popup diciendo que el **servicio SMB no está activo**. Haz clic en **Start Service**. También marca **Start Automatically** para que se inicie al arrancar. La compartición SMB ya está disponible en la red.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Para comparticiones NFS con sistemas Linux/Unix, navega a **Shares** → **Unix (NFS) Shares** y haz clic en **Add**. Selecciona tu dataset, configura redes y permisos, habilita NFS cuando te lo pida y guarda.

<InlineServiceLink />

## Accediendo a tu Compartición

Para acceder a tu compartición, por ejemplo desde tu PC Windows, abre el **Explorador de Archivos**. Haz clic derecho en **Este equipo** (o **Mi PC**) y selecciona **Agregar una ubicación de red**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

Se abrirá el **Asistente para agregar ubicación de red**. Continúa con **Siguiente** para avanzar.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Cuando te pida la ubicación, usa este formato: `\\[tu_ip_servidor]\[nombre_compartición]`. Por ejemplo: `\\192.168.1.100\documents`. Sustituye `[tu_ip_servidor]` por la IP de tu servidor TrueNAS y `[nombre_compartición]` por el nombre que diste a la compartición SMB. Luego continúa con **Siguiente**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Introduce el **usuario** y **contraseña** del usuario que creaste en TrueNAS. No uses `root` ni `truenas_admin` porque no funcionan con SMB. Marca **Recordar mis credenciales** para guardarlas. Haz clic en **Aceptar**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

La compartición TrueNAS ya es accesible. Navega archivos, crea carpetas y copia datos como en cualquier unidad de red. Has conectado con éxito tu PC Windows a la compartición TrueNAS.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Acceso rápido
Para un acceso más fácil, usa **Mapear unidad de red** en lugar de **Agregar ubicación de red**. La compartición aparece como una letra de unidad (ejemplo: `Z:`) en el Explorador de Archivos.
:::

:::info Acceso desde macOS o Linux
**macOS**: En Finder, presiona `Cmd+K` y escribe `smb://[tu_ip_servidor]/[nombre_compartición]`

**Linux**: Usa la opción "Conectar al servidor" de tu gestor de archivos con `smb://[tu_ip_servidor]/[nombre_compartición]`, o monta vía línea de comandos con `mount.cifs`
:::

## Conclusión

¡Felicidades! Has instalado y configurado TrueNAS SCALE en tu servidor con éxito. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂