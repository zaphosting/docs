---
id: vserver-windows-nointernet
title: "VPS: Soluciona Problemas de Sin Internet"
description: "Descubre cómo solucionar y arreglar problemas de conexión a internet en tu VPS Windows de forma efectiva → Aprende más ahora"
sidebar_label: Soluciona Problemas de Sin Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una conexión a internet interrumpida o defectuosa puede deberse a varias razones, como una dirección IP, máscara de subred, gateway, servidor DNS o configuración de firewall incorrectos. En esta guía, te explicamos cómo puedes diagnosticar y resolver posibles problemas de red.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Cómo Arreglar Problemas de Conexión a Internet en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo para ti. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>



<InlineVoucher />

## Acceso VNC sin Internet

Si no puedes conectarte a tu servidor mediante RDP (Escritorio Remoto) debido a que la conexión a internet no funciona, una alternativa es usar la consola VNC (Virtual Network Computing) que está disponible en nuestra web.

Esta opción te permite acceder a tu servidor y solucionar problemas incluso si la conexión a internet no está activa. Puedes acceder a ella yendo a la sección **Herramientas->Consola VNC** en el panel web de tu servidor.

En esta página podrás activar la consola usando el botón **Abrir Cliente Web** e iniciar sesión con tus credenciales habituales.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Métodos para Solucionar Problemas

### Verificar Dirección IP, Máscara de Subred y Configuración de Gateway

El primer paso para solucionar problemas es asegurarte de que la configuración técnica del adaptador de red en tu servidor esté correcta, incluyendo la dirección IP, máscara de subred y gateway.

Empieza yendo a la sección **Configuración->Direcciones IP** en el panel web de tu servidor, donde podrás ver todas las direcciones IP que tienes contratadas con tu servicio.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Ahora accede a tu servidor vía RDP o la Consola VNC si tienes problemas. Ve a la configuración del adaptador de red de Windows entrando en: 
```
Configuración -> Red e Internet -> Cambiar opciones del adaptador -> Adaptador de red
```

Busca la opción **Protocolo de Internet versión 4 (TCP/IPv4)** en la lista y selecciona **Propiedades**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Configurando el Adaptador

Compara la información encontrada en el adaptador y asegúrate de que esté configurada así:
- Dirección IP: Debe ser la dirección IP que aparece en la página **Direcciones IP** del panel web.
- Máscara de subred: Normalmente debe ser `255.255.255.0` ya que nuestra red usa clase C.
- Gateway predeterminado: Debe ser tu dirección IP igual que el primer valor pero con el último octeto (`.xxx`) reemplazado por `.1`.

#### Ejemplo de Configuración

:::info
Ten en cuenta que este es un **ejemplo** para facilitar la comprensión. Debes reemplazar la dirección IP con la dirección IP **propia** de tu servidor.
:::

Con una dirección IP de `185.223.28.163`, tu configuración debería verse así:

| Configuración   | Valor          |
| --------------- | -------------- |
| Dirección IP    | 185.223.28.163 |
| Máscara de subred | 255.255.255.0  |
| Gateway predeterminado | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Cuando termines, presiona **Ok** para aplicar los cambios. Recomendamos reiniciar el servidor para completar el proceso de solución de problemas.



### Configuración del Servidor DNS

Otro paso si sigues teniendo problemas con internet es asegurarte de que el servidor DNS esté configurado correctamente. Debes reemplazar los valores DNS faltantes o existentes con un host conocido.

Recomendamos usar los servidores DNS de Google o Cloudflare, ya que son muy usados y confiables.

| Proveedor DNS | Valores del Servidor DNS               |
| ------------ | ------------------------------------- |
| Google       | Preferido: 8.8.8.8 / Alternativo: 8.8.4.4 |
| Cloudflare   | Preferido: 1.1.1.1 / Alternativo: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Cuando termines, presiona **Ok** para aplicar los cambios. También recomendamos reiniciar el servidor para completar el proceso.

:::tip
Puedes abrir la consola de comandos (cmd.exe) en tu servidor y ejecutar este comando para configurar los servidores DNS rápida y fácilmente: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Configuración del Firewall

El último paso para solucionar problemas es asegurarte de que el firewall de Windows esté configurado correctamente.

Recomendamos intentar desactivar temporalmente todo el firewall de Windows para ver si los problemas persisten. Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows Defender** y selecciona la opción **Activar o desactivar Firewall de Windows Defender** en la sección izquierda.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Si los problemas se solucionan al desactivar el firewall, probablemente la causa raíz sea una mala configuración del firewall.

La solución para el firewall depende mucho del problema que tengas. Usa nuestra [guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas ayuda para gestionar reglas del firewall.



## Restablecer configuración de red

Puedes restablecer la configuración de red desde la administración web de tu VPS haciendo clic en el botón **Restablecer configuración de red** en la página de configuración. Durante este proceso, las configuraciones de dirección IP, máscara de subred, gateway y servidor DNS se restauran a su estado original.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusión
Si seguiste todos los pasos, la conexión debería funcionar normalmente otra vez. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />