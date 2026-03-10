---
id: vserver-linux-ip-configuration
title: "VPS: Configuración de IP (Ubuntu/Debian)"
description: "Aprende a configurar una dirección IP estática en un servidor Linux con Ubuntu o Debian → Aprende más ahora"
sidebar_label: Configurar Direcciones IP
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción

Configurar las direcciones IP en tu VPS Linux te permite controlar cómo tu servidor se comunica dentro de la red. Esto incluye asignar direcciones IP, definir la puerta de enlace predeterminada y configurar los servidores DNS necesarios para la conectividad de red.

:::warning ¿Servidor inaccesible por falta de conexión a internet?
Si tu servidor se vuelve inaccesible debido a una configuración de red incorrecta o falta de conexión a internet, el acceso remoto vía SSH puede dejar de funcionar. Usa la [consola VNC](vserver-vnc.md) en la interfaz web para conectarte a tu servidor y corregir la configuración de red.
:::

<InlineVoucher />

## Preparación

Antes de configurar una dirección IP estática, asegúrate de tener la siguiente información disponible:

- Dirección IP que quieres asignar  
- Máscara de subred  
- Puerta de enlace predeterminada  
- Servidores DNS  

Esta información la puedes encontrar en la interfaz web. Para ello, abre la **gestión de VPS** y navega a **Direcciones IP**.

## Configuración

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Las instalaciones de Ubuntu usan **Netplan** para la configuración de red. Conéctate a tu VPS vía SSH y localiza el archivo de configuración de Netplan en el directorio `/etc/netplan/`. Abre el archivo de configuración:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Modifica la configuración para definir una dirección IP estática:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Ajusta los siguientes valores para que coincidan con tu configuración de red:

- 109.230.238.45 → Tu dirección IP estática  
- 109.230.238.1 → Tu puerta de enlace  
- Direcciones DNS → Tus servidores DNS preferidos  

Guarda el archivo y aplica la configuración:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian suele usar el archivo de configuración de interfaces de red en lugar de Netplan. Conéctate a tu VPS vía SSH y abre el archivo de configuración de interfaces de red:

```
nano /etc/network/interfaces
```

Agrega o modifica la configuración para tu interfaz de red. Ejemplo de configuración:

```bash
auto lo
iface lo inet loopback

# La interfaz de red principal
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # las opciones dns-* son implementadas por el paquete resolvconf, si está instalado
        dns-nameservers 1.1.1.1
```

Ajusta los valores según tu configuración de red:
- address → Tu dirección IP estática  
- netmask → Tu máscara de subred  
- gateway → Tu puerta de enlace predeterminada  
- dns-nameservers → Tus servidores DNS preferidos  

Después de guardar el archivo de configuración, reinicia el servicio de red:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verificación

Después de aplicar la configuración, se recomienda verificar que la nueva dirección IP se haya aplicado correctamente. Para ello, ejecuta el siguiente comando en tu terminal:

```
ip a
```

Este comando muestra todas las **interfaces de red** disponibles en el sistema junto con sus detalles de configuración actuales. En la salida, localiza la interfaz que configuraste anteriormente, usualmente llamada `eth0`, `ens18` o un identificador similar según el sistema.

Dentro de la sección de la interfaz, busca la **entrada `inet`**, que representa la dirección IPv4 asignada a la interfaz. La salida debería contener la dirección IP estática que configuraste. Por ejemplo:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Si la dirección correcta aparece en la salida, la configuración de IP estática se aplicó con éxito. Si la nueva dirección IP no aparece, verifica nuevamente el archivo de configuración y asegúrate de que los cambios se guardaron correctamente antes de volver a aplicar la configuración con:

```
sudo netplan apply
```



## Conclusión

¡Felicidades! Has configurado exitosamente tu dirección IP en tu servidor Linux. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />