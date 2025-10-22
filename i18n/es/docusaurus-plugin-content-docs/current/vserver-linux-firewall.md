---
id: vserver-linux-firewall
title: "VPS: Gestionando el Firewall en Linux"
description: "Aprende a configurar un firewall para asegurar tu servidor y permitir las conexiones externas necesarias → Aprende más ahora"
sidebar_label: Reenvío de Puertos (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Para muchos servicios y programas, tienes que permitir conexiones externas. Esto es posible configurando un firewall.  
En esta guía, aprenderás cómo configurar un firewall y permitir esas conexiones.

<InlineVoucher />

## Preparación

Para instalar el firewall, necesitas conectarte a tu servidor vía SSH. Si no sabes cómo, puedes consultar nuestra [guía de acceso inicial](vserver-linux-ssh.md).  
Después de conectarte, deberías actualizar el servidor usando `apt update` y `apt upgrade`.

## Usando UFW (Fácil)

Existen varios programas de firewall para Linux, esta guía se centrará en los 2 más populares: UFW e IPTables.  
Empezaremos con UFW, ya que es más fácil de configurar y gestionar.

### Instalando UFW

Puedes instalar UFW fácilmente vía APT con `sudo apt install ufw`.  
Para no perder la conexión SSH, no deberías activarlo aún, primero tienes que configurarlo.

### Configurando UFW

Recomendamos usar las siguientes políticas por defecto:

`sudo ufw default deny incoming`  
y  
`sudo ufw default allow outgoing`

Ahora deberías permitir la conexión SSH y cualquier otro puerto que quieras abrir ahora:

`sudo ufw allow 22` para SSH

`sudo ufw allow 80` ejemplo para HTTP

`sudo ufw allow 25565` ejemplo para un servidor de Minecraft

Para activar UFW, tienes que ejecutar `sudo ufw enable`. Siempre puedes abrir más puertos si es necesario usando `sudo ufw allow PUERTO`.

### Añadir Reenvíos de Puertos

Para reenviar un puerto, puedes usar este comando:

Para puertos TCP:

`sudo ufw allow PUERTO/tcp` reemplazando PUERTO por el puerto que quieres reenviar.

Ejemplo: `sudo ufw allow 25565/tcp` para un servidor de Minecraft

Para puertos UDP:

`sudo ufw allow PUERTO/udp` reemplazando PUERTO por el puerto que quieres reenviar.

Ejemplo: `sudo ufw allow 9987/udp` para un servidor de TeamSpeak 3

### Listar y eliminar Reenvíos de Puertos

Para mostrar todas las reglas de puertos, puedes ejecutar `sudo ufw status numbered`. Si quieres eliminar una regla, puedes usar `sudo ufw delete NÚMERO`, usando el número de la regla en la lista.

## Instalando IPTables (Avanzado)

La mayoría de los sistemas ya incluyen IPTables por defecto, pero para asegurarte puedes ejecutar `sudo apt install iptables`.

### Configurando IPTables

Primero, establece las políticas y configuraciones por defecto:

`sudo iptables -P INPUT DROP` para denegar todas las conexiones entrantes

`sudo iptables -P FORWARD DROP` para denegar todos los reenviados

`sudo iptables -P OUTPUT ACCEPT` para aceptar todas las conexiones salientes

`sudo iptables -A INPUT -i lo -j ACCEPT` para permitir el loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` para permitir todas las conexiones existentes

Ahora deberías permitir la conexión SSH y cualquier otro puerto que quieras abrir ahora:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` para SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` ejemplo para HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` ejemplo para un servidor de Minecraft

Luego tienes que hacer que las reglas sean persistentes, para que sigan activas después de reiniciar el servidor. Instala el paquete iptables-persistent con `sudo apt install iptables-persistent`. Luego aplícalo con `sudo netfilter-persistent save`. Y añádelo al autostart con `sudo systemctl enable netfilter-persistent`.

### Añadir Reenvíos de Puertos

Para reenviar un puerto, puedes usar este comando:

Para puertos TCP:

`sudo iptables -A INPUT -p tcp --dport PUERTO -j ACCEPT` reemplazando PUERTO por el puerto que quieres reenviar.

Ejemplo: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` para un servidor de Minecraft

Para puertos UDP:

`sudo iptables -A INPUT -p udp --dport PUERTO -j ACCEPT` reemplazando PUERTO por el puerto que quieres reenviar.

Ejemplo: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` para un servidor de TeamSpeak 3

### Listar y eliminar Reenvíos de Puertos

Puedes mostrar todas las reglas usando este comando: `sudo iptables -L --line-numbers`. Si quieres eliminar una regla, usa `sudo iptables -D INPUT NÚMERO` reemplazando `NÚMERO` por el que aparece en la lista que quieres eliminar.

## Conclusión

Has instalado con éxito un firewall en tu servidor Linux y creado tus propias reglas de puertos. También puedes usar esta guía para reenviar más puertos.  
Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />