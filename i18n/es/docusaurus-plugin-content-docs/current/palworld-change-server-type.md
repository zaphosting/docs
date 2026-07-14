---
id: palworld-change-server-type
title: "Palworld: Cambiar Tipo de Servidor"
description: "Aprende cómo cambiar el tipo de servidor Palworld entre Linux y Windows, actualizar la ruta correcta de configuración y aplicar el cambio correctamente para la compatibilidad con mods. -> Aprende más ahora"
sidebar_label: Palworld: Cambiar Tipo de Servidor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores Palworld pueden funcionar con diferentes tipos de servidor, típicamente Linux o Windows, según tu configuración de alquiler de servidores y requisitos de mods. En esta guía, aprenderás cómo cambiar el tipo de servidor en la interfaz de ZAP-Hosting, identificar la ruta correcta del archivo de configuración y aplicar el cambio correctamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para detener y reiniciar el servidor.

:::info Información Importante Sobre Cambios de Tipo de Servidor
Cambiar el tipo de servidor de Linux a Windows, o de Windows a Linux, puede afectar las rutas de archivos, la compatibilidad con mods y las ubicaciones existentes de configuración. El tipo de servidor Windows es comúnmente requerido para ciertas configuraciones de mods basados en UE4SS.
:::

:::caution Verifica si se Requiere Reinstalación
Dependiendo de cómo esté desplegado el producto Palworld en tu servicio, cambiar el tipo de servidor puede requerir una reinstalación o un redepliegue del software. Si la opción exacta no está disponible directamente en tu interfaz actual, contacta al soporte antes de continuar.
:::

## Entiende Qué Cambia al Cambiar el Tipo de Servidor

Cambiar el tipo de servidor normalmente no significa cambiar un valor dentro de la configuración del juego Palworld en sí. En cambio, el cambio principal es el entorno de software del servidor subyacente, que también cambia la ubicación de los archivos de configuración activos.

Para Palworld, el archivo principal de configuración es típicamente:

- `PalWorldSettings.ini`

La carpeta que contiene este archivo depende del tipo de servidor seleccionado.

| Tipo de servidor | Ruta de carpeta de configuración | Archivo principal de configuración |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Por Qué Esto Importa
Si editas el archivo de configuración de Linux pero tu servidor está corriendo actualmente como tipo Windows, tus cambios pueden no aplicarse porque el servidor leerá desde la ruta específica de Windows.
:::

## Detén el Servidor

Antes de cambiar el tipo de servidor, debes detener el servidor para evitar conflictos de archivos y cambios incompletos.

1. Inicia sesión en la interfaz web del servidor de juegos de ZAP-Hosting.
2. Abre la administración de tu servidor Palworld.
3. Detén el servidor usando las opciones de control del servidor.

:::tip Recomendado Antes de Editar
Es buena idea crear una copia de seguridad antes de cambiar el tipo de servidor, especialmente si ya usas mods o has editado archivos de configuración manualmente.
:::

## Cambia el Tipo de Servidor en la Interfaz de ZAP-Hosting

El cambio de tipo de servidor generalmente se maneja a través de la configuración del producto o software en la interfaz de ZAP-Hosting, no editando una línea dentro de `PalWorldSettings.ini`.

1. En la administración de tu servidor Palworld, busca el área de software del servidor o configuración del juego.
2. Encuentra la opción que controla el tipo de servidor o variante de software instalada.
3. Cambia la configuración de `Linux` a `Windows`, o de `Windows` a `Linux`, según tu configuración objetivo.
4. Guarda el cambio.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Si No Puedes Encontrar la Opción de Tipo de Servidor
La etiqueta exacta y ubicación de esta configuración puede variar según la interfaz actual de ZAP-Hosting o la generación del producto. Si no ves un selector de tipo de servidor, el cambio puede requerir una acción de reinstalación o asistencia del soporte.
:::

## Edita el Archivo de Configuración Correcto

Después de cambiar el tipo de servidor, necesitas verificar que estás editando el archivo de configuración activo en la carpeta correcta.

### Abre la Sección de Configuraciones

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a `Configs`.
3. Navega a la carpeta que coincide con tu tipo de servidor seleccionado.

Usa una de las siguientes rutas:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Luego abre:

- `PalWorldSettings.ini`

### Verifica o Reaplica Tus Configuraciones

Si editaste configuraciones previamente usando el otro tipo de servidor, esos cambios pueden existir solo en la carpeta antigua. Debes comparar ambas versiones de `PalWorldSettings.ini` y reaplicar los valores necesarios en el archivo activo ahora.

| Qué verificar | Por qué importa |
| --- | --- |
| Configuraciones personalizadas existentes | Pueden existir solo en la carpeta del tipo de servidor anterior |
| Configuraciones relacionadas con mods | El tipo Windows se usa a menudo para soporte de mods UE4SS |
| Valores de jugabilidad | El servidor solo lee el archivo desde la ruta activa específica del SO |

:::caution No Asumas que Ambos Archivos Están Sincronizados
Las carpetas de configuración de Linux y Windows son separadas. Cambiar el tipo de servidor no garantiza automáticamente que tus configuraciones personalizadas se copien entre ambas ubicaciones.
:::

## Revisa las Entradas de Configuración

El tipo de servidor en sí normalmente no se controla con una línea dentro de `PalWorldSettings.ini`. Sin embargo, después de cambiar el tipo, deberías confirmar que tu archivo de configuración activo contiene las configuraciones que esperas.

Una estructura típica de `PalWorldSettings.ini` se ve similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Reemplaza los marcadores de posición como:

- `[your_server_name]` con el nombre real de tu servidor
- `[your_admin_password]` con tu contraseña de administrador
- `[your_server_password]` con tu contraseña de acceso si la usas
- `[your_server_ip]` con la dirección IP pública de tu servidor si tu configuración lo requiere

:::note No Se Requiere Comando Especial en el Archivo
No existe ninguna entrada conocida en `PalWorldSettings.ini` que cambie el tipo de servidor subyacente de Linux a Windows o viceversa. Este cambio lo maneja el entorno del servidor instalado en la interfaz de alquiler de servidores.
:::

## Aplica el Cambio

Una vez que hayas cambiado el tipo de servidor y confirmado el archivo de configuración correcto, necesitas aplicar la nueva configuración.

### Reinicia el Servidor

Inicia el servidor nuevamente desde la interfaz web de ZAP-Hosting después de guardar tus cambios.

En muchos casos, un reinicio normal es suficiente si el tipo de software del servidor ya se cambió con éxito.

### Reinstala si la Interfaz lo Requiere

Algunos despliegues pueden requerir una reinstalación o paso de reinstalación después de cambiar el tipo de software. Si tu interfaz presenta esta opción, síguela cuidadosamente y verifica después que:

- el tipo de servidor correcto está activo
- se está usando la ruta de configuración correcta
- tus valores en `PalWorldSettings.ini` siguen presentes

:::danger La Reinstalación Puede Sobrescribir Archivos
Si se requiere reinstalación, los archivos personalizados o mods pueden eliminarse a menos que se hagan copias de seguridad primero. Siempre verifica tus datos guardados, mods y archivos de configuración antes de confirmar una reinstalación.
:::

## Verifica Que el Nuevo Tipo de Servidor Está Activo

Después de que el servidor inicie de nuevo, confirma que el cambio fue exitoso.

### Confirma a Través de la Ruta de Configuración

Abre `Configs` otra vez y verifica si la ruta del archivo activo ahora coincide con tu tipo de servidor seleccionado:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Confirma la Compatibilidad con Mods

Si cambiaste a Windows específicamente para mods UE4SS, verifica que tus archivos de mods y la configuración relacionada ahora coincidan con el entorno del servidor Windows.

### Revisa el Comportamiento del Servidor

Comprueba si el servidor inicia normalmente y si tus configuraciones esperadas se cargan correctamente.

| Punto de verificación | Resultado esperado |
| --- | --- |
| El servidor inicia correctamente | No hay fallos de inicio tras el cambio de tipo |
| Ruta de configuración correcta | Coincide con el tipo de servidor Linux o Windows |
| Configuraciones personalizadas cargadas | El servidor usa tu `PalWorldSettings.ini` editado |
| Soporte para mods | Se pueden usar requisitos de mods basados en Windows si aplica |

## Solución de Problemas

### La Opción de Tipo de Servidor No Es Visible

Si no encuentras una configuración para cambiar el tipo de servidor, puede significar que la opción no está expuesta directamente en tu interfaz actual del producto. En ese caso, contacta al soporte de ZAP-Hosting y pregunta si tu servicio Palworld puede cambiarse entre tipo de servidor Linux y Windows.

### Mis Configuraciones No Se Aplicaron Después del Cambio

Esto suele ocurrir cuando se editó la ruta de configuración incorrecta. Verifica si actualizaste:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

o

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

según el tipo de servidor activo actualmente.

### Los Mods Aún No Funcionan

Cambiar solo al tipo de servidor Windows puede no completar toda la configuración de mods. Algunos mods requieren archivos adicionales, loaders o pasos de instalación manual más allá del cambio de tipo de servidor.

## Conclusión

Felicitaciones, has cambiado con éxito el tipo de servidor de tu Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂