---
id: vserver-iso-windows
title: "VPS: Instalación de Windows X/Windows Server 20XX"
description: "Descubre cómo personalizar instalaciones de Windows con ISOs a medida para tener control total sobre la configuración y los drivers → Aprende más ahora"
sidebar_label: "Instalar Windows X/WS 20XX"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introducción
Instalar una ISO personalizada te da control total sobre la configuración de entornos Windows como Windows 10 o Windows Server 2016/2019/2022/2025. A diferencia de nuestras imágenes estándar preconfiguradas, este método te permite usar un medio de instalación adaptado a tus necesidades específicas, por ejemplo, incluyendo drivers especiales, configuraciones predefinidas o paquetes de software adicionales.

<InlineVoucher />



## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar primero la ISO correspondiente. Si aún no sabes cómo montar un archivo ISO, lo mejor es que consultes nuestra [guía de ISO propia](vserver-iso.md).



## Instalación

Al iniciar la instalación del sistema operativo Windows, se te guiará por los primeros pasos de configuración. Primero, selecciona el **idioma** preferido, luego configura la **distribución del teclado** y después elige el **método de instalación**. Para este ejemplo, se usa la opción **Versión anterior del instalador**. En el siguiente paso, selecciona la edición, y en este caso se elige **Windows Server 2025 Datacenter Desktop Experience**, que ofrece la interfaz gráfica completa.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

En esta fase de la instalación, notarás que no aparecen particiones. Esto no es un error, sino que Windows no puede detectar los discos virtuales sin drivers adicionales. Se necesitan los drivers VirtIO esenciales para que el disco sea reconocido y manejado correctamente. Ahora debes montar e instalar estos drivers, tras lo cual aparecerán las unidades y podrás continuar con la partición y la instalación del sistema operativo.



### Driver(s) VirtIO

Antes de instalar el sistema operativo, hay que configurar los drivers VirtIO. Estos drivers para Windows están optimizados para hipervisores basados en KVM y garantizan que las máquinas virtuales Windows funcionen con máximo rendimiento y compatibilidad.

Para ello, debes cambiar temporalmente el medio de instalación a la ISO `virtio-win.iso`. Selecciona la ISO VirtIO de las disponibles y haz clic en **Montar**. Esto hace que los drivers estén accesibles durante la instalación, para que puedan instalarse antes de continuar con la instalación del sistema operativo.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NO REINICIES EL SERVIDOR
Al cambiar **temporalmente** la ISO a la de VirtIO, solo debes seleccionar la ISO. No **<u>reinicies</u>** el sistema, porque perderás el progreso anterior.

:::

Los drivers necesarios están organizados en tres carpetas dedicadas llamadas **Balloon**, **NetKVM** y **vioscsi**. Cada una contiene un tipo específico de driver esencial para ejecutar una máquina virtual Windows en un hipervisor KVM.

- **Balloon:** Este driver gestiona dinámicamente la asignación de memoria, permitiendo que la RAM asignada a la VM crezca o disminuya sin necesidad de reiniciar.  
- **NetKVM:** Este driver proporciona una interfaz de red optimizada y totalmente funcional, asegurando conectividad estable y de alto rendimiento para la VM.  
- **Vioscsi:** Este driver es un controlador SCSI especializado que garantiza la detección correcta y acceso rápido a los discos duros virtuales. Mejora el rendimiento de I/O y asegura que Windows reconozca bien los discos virtuales.  

Dentro de cada carpeta hay una subcarpeta según la arquitectura del sistema. Durante la instalación, debes seleccionar la subcarpeta que coincida con el sistema operativo que vas a instalar. Asegúrate de usar siempre la arquitectura amd64 para este proceso. <u>Repite el procedimiento para las tres carpetas de drivers como se muestra en la captura.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Una vez instalados los drivers VirtIO con éxito, puedes continuar con la instalación real del sistema operativo. Como antes, debes cambiar la ISO. Esta vez, selecciona la ISO original de instalación del sistema operativo y vuelve a abrir la consola VNC para seguir con la instalación.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Crear y seleccionar partición

El siguiente paso es configurar la partición. Primero, elimina cualquier partición desconocida que quede. Luego selecciona la partición no asignada que ahora aparece como destino para la instalación del sistema operativo.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Después, haz clic en **Siguiente** para continuar, y el resto de la instalación se ejecutará automáticamente. Al final, se te pedirá que configures las credenciales para la cuenta de Administrador.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Configuración

Una vez finalizada la instalación del sistema operativo, quedan algunos pasos finales para asegurar que el sistema se use de forma segura y fiable. Esto incluye habilitar y gestionar el acceso mediante **Escritorio Remoto (RDP)**, configurar las **reglas del firewall** para ofrecer protección y funcionalidad, y ajustar la **configuración de red** para integrar correctamente el servidor en la red.

Con estos ajustes, garantizas que el acceso remoto esté disponible, que las herramientas de monitorización y chequeos de estado funcionen sin problemas, y que el servidor opere con parámetros de red estables y predecibles dentro de tu infraestructura.



### Configuración de RDP

Para habilitar Escritorio Remoto (RDP) en Windows, el procedimiento es muy similar para Windows 10 (sistemas cliente) y Windows Server 2016/2019/2022/2025. Abre el **Panel de Control** o **Configuración**, navega a **Sistema → Escritorio Remoto** (en ediciones cliente) o **Propiedades del sistema → Remoto** (en ediciones servidor), y activa la opción **Permitir conexiones remotas a este equipo**. En versiones servidor aparece como **Habilitar Escritorio Remoto**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Configuración del Firewall

Para que un servidor esté completamente inicializado y que pruebas de estado como ping funcionen, el **protocolo ICMP** debe estar permitido en el Firewall de Windows. Sin esta regla, las herramientas de monitorización y pruebas de red no podrán alcanzar el servidor, y los chequeos de salud fallarán.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Para habilitar ICMP, abre **Firewall de Windows con seguridad avanzada** y ve a la sección de reglas entrantes. Crea una nueva regla personalizada y configura el protocolo como "Cualquiera" y selecciona **ICMPv4**. Configura la regla para que aplique a todos los puertos y elige los perfiles (Dominio, Privado, Público) donde debe estar activa. En la mayoría de casos, se recomienda activarla para todos los perfiles. Finalmente, asigna un nombre descriptivo como *Permitir ICMP entrante* y termina el asistente.

A partir de este momento, el servidor aceptará solicitudes ICMP, permitiendo que comandos como `ping` y sistemas de monitorización lo alcancen y verifiquen su estado con éxito.



### Configuración de red

Para configurar manualmente la red en Windows, primero abre el **Centro de redes y recursos compartidos** desde el Panel de Control o la barra de tareas. Selecciona el adaptador de red relevante (LAN o Wi-Fi), haz clic derecho y abre **Propiedades**. En la lista, selecciona **Protocolo de Internet versión 4 (TCP/IPv4)** y haz clic en **Propiedades**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

En la ventana, cambia la opción de Obtener una dirección IP automáticamente a Usar la siguiente dirección IP. Ahora puedes ingresar la **dirección IP**, **máscara de subred** y **puerta de enlace predeterminada** para tu servidor. Más abajo, cambia la configuración DNS a manual y especifica `1.1.1.1` y `8.8.8.8` como tus servidores **DNS** primario y secundario. Confirma con **Aceptar** para aplicar la configuración estática de red.









## Conclusión

¡Felicidades, has instalado y configurado con éxito tu sistema operativo Windows! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂



<InlineVoucher />