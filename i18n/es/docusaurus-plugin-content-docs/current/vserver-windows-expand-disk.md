---
id: vserver-windows-expand-disk
title: "VPS: Ampliar el disco (partición) en Windows Server"
description: "Descubre cómo ampliar de forma segura la partición de tu servidor Windows para aprovechar el nuevo espacio en disco → Aprende más ahora"
sidebar_label: Ampliar Disco (Partición)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema operativo Windows incluye herramientas integradas para la gestión de discos y particiones que te permiten realizar fácilmente una gran variedad de acciones, como ampliar particiones, dividir discos y más. Parte de esto es la capacidad de ampliar particiones, algo especialmente importante después de aumentar la capacidad de almacenamiento de tu servidor Windows. En esta guía, cubriremos el proceso para ampliar una partición en tu servidor Windows.

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor Windows vía RDP. Si necesitas ayuda para hacerlo, consulta nuestra [Guía de acceso inicial (RDP)](vserver-windows-userdp.md).

Hay dos métodos para gestionar discos y particiones: uno es a través de la utilidad **Administración de discos** y el otro mediante la línea de comandos **diskpart**. La herramienta **Administración de discos** ofrece una interfaz gráfica que puede realizar la mayoría de las acciones comunes, incluyendo ampliar particiones. Sin embargo, para usuarios avanzados, `diskpart` es más completo y potente que la herramienta gráfica.

## Ampliar Partición

En varios escenarios puede ser necesario ampliar tu partición existente para aprovechar el nuevo espacio en disco. Uno de estos casos es cuando actualizas el espacio de disco de tu servidor, que por defecto no se asignará hasta que amplíes la partición principal de tu unidad.

Recomendamos seguir el método con la utilidad **Administración de discos** porque es mucho más sencillo, especialmente para principiantes. Este proceso es seguro y no afecta en absoluto a tus datos.

<Tabs>
<TabItem value="disk-management" label="Vía Administración de discos (GUI)" default>

Comienza abriendo la herramienta **Administración de discos**. Simplemente búscala en el menú inicio o, alternativamente, ábrela con Ejecutar presionando `Tecla Windows + R` y escribiendo `diskmgmt.msc`, luego confirma.

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

Con la herramienta abierta, haz clic derecho en la partición principal y selecciona la acción **Extender volumen**, lo que abrirá un nuevo asistente.

:::tip
La unidad principal de arranque siempre será la unidad **C:**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

En el asistente, selecciona **Siguiente** para ir a la página de configuración donde podrás asignar cuánto espacio deseas añadir. Por defecto, Windows rellenará automáticamente con todo el espacio no asignado, lo cual es ideal.

Por lo tanto, puedes seleccionar **Siguiente** de nuevo y finalmente hacer clic en **Finalizar** para completar el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

Una vez completado, la configuración actualizada se mostrará de nuevo en Administración de discos con el tamaño de disco ampliado.

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="Vía Diskpart (CLI)">

Comienza abriendo un símbolo del sistema como administrador. Búscalo en el menú inicio de Windows, haz clic derecho y selecciona **Ejecutar como administrador**.

Simplemente ejecuta el comando `diskpart` para entrar en la utilidad CLI. Una vez cargada, ejecuta `list disk` para mostrar una lista de todos los discos conectados actualmente.

Luego ejecuta `select disk [número_de_disco]` reemplazando `[número_de_disco]` por el número del disco que quieres ampliar según la lista anterior.

:::tip
La unidad principal de arranque siempre será la unidad **C:**.
:::

Con el disco seleccionado, ejecuta `list volume` para mostrar una lista de todos los volúmenes del disco seleccionado. Encuentra el volumen que quieres ampliar y luego ejecuta `select volume [número_de_volumen]` reemplazando `[número_de_volumen]` por el número del volumen de la lista.

Con el disco y volumen seleccionados, puedes proceder a ampliar el volumen con el siguiente comando. Puedes ejecutarlo solo para usar todo el espacio no asignado o especificar un tamaño.
```
# Ampliar a todo el espacio no asignado
extend

# Ampliar a un tamaño específico (10240 = 10240MB = 10GB)
extend size=10240
```

Si tiene éxito, verás que el tamaño del volumen aumenta al listar los discos nuevamente y al verlo en el explorador de archivos. Para salir de la CLI, simplemente ejecuta el comando `quit`.

</TabItem>
</Tabs>

## Conclusión

Has ampliado con éxito la partición principal de tu disco para aprovechar todo el espacio disponible. Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />