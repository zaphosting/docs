---
id: dedicated-windows-eval-to-full
title: "Servidor dedicado: Convierte Windows Server Evaluation a Versión Completa"
description: "Descubre cómo convertir Windows Server Evaluation a Versión Completa → Aprende más ahora"
sidebar_label: Convertir Eval a Completo
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las ediciones Windows Server Evaluation están diseñadas para pruebas y tienen un límite de tiempo. Para seguir usando la misma instalación en producción, la edición de evaluación puede convertirse en una versión completamente licenciada sin necesidad de reinstalar el sistema operativo.

Microsoft soporta esta conversión in situ usando la herramienta DISM, siempre que tengas una clave de producto válida para la edición destino.

<InlineVoucher />



## Requisitos previos

Antes de empezar la conversión, asegúrate de tener una clave de producto válida para la edición de Windows Server a la que quieres cambiar, como Standard o Datacenter. La clave debe coincidir exactamente con la edición destino.



## Obtener la edición actual

Para verificar qué edición está instalada, abre un Símbolo del sistema o PowerShell con permisos de administrador y ejecuta el siguiente comando:

```powershell
DISM /Online /Get-CurrentEdition
```

El resultado mostrará el identificador de la edición activa. Las instalaciones de evaluación suelen aparecer como `ServerStandardEval` o `ServerDatacenterEval`.



## Comprobar ediciones destino soportadas

No todas las ediciones pueden convertirse en cualquier otra edición. Para ver qué ediciones licenciadas son compatibles con tu instalación actual, ejecuta este comando:

```
DISM /Online /Get-TargetEditions
```

Las ediciones listadas representan los destinos válidos para la conversión.



## Actualizar de Evaluation a Versión Completa

Una vez que conozcas la edición destino y tengas una clave de producto válida, puedes iniciar la actualización. El valor `<TargetEdition>` debe coincidir con una de las ediciones soportadas que devuelve el comando anterior.

Las ediciones destino comunes incluyen:
- `ServerStandard`
- `ServerDatacenter`

Usa el siguiente comando para iniciar la conversión. Sustituye `<TargetEdition>` por la edición deseada y `<ProductKey>` por tu clave de producto de 25 caracteres de Windows Server:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Edición del sistema operativo       | Clave genérica de licencia por volumen    |
| ---------------------------------- | ----------------------------------------- |
| Windows Server 2025 Standard       | TVRH6-WHNXV-R9WG3-9XRFY-MY832             |
| Windows Server 2025 Datacenter     | D764K-2NDRG-47T6Q-P8T8W-YP6DF             |
| Windows Server 2022 Standard       | VDYBN-27WPP-V4HQT-9VMD4-VMK7H             |
| Windows Server 2022 Datacenter     | WX4NM-KYWYW-QJJR4-XV3QB-6VM33             |

Durante el proceso, puede parecer que el progreso se detiene por un momento. Esto es normal. Cuando la conversión termine, será necesario reiniciar para finalizar el cambio de edición.



## Verificar la versión de Windows Server

Después de reiniciar el servidor, abre un Símbolo del sistema o PowerShell con permisos de administrador y ejecuta:

```powershell
DISM /Online /Get-CurrentEdition
```

El resultado debería mostrar ahora la edición licenciada, como `ServerStandard` o `ServerDatacenter`, confirmando que la edición de evaluación se convirtió correctamente.

En esta etapa, verás la marca de agua **Activar Windows** en la esquina inferior derecha. Ahora puedes usar la licencia de Windows Server que compraste para activar la edición Standard o Datacenter.



## Conclusión

¡Felicidades! Has cambiado con éxito tu versión de Windows Server de EVAL a Completa. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂



<InlineVoucher />