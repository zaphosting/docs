---
id: vserver-linux-ssh
title: "VPS: Acceso inicial con SSH"
description: "Explora los clientes SSH más populares para gestionar servidores Linux vía consola y aprende cómo conectarte de forma segura usando Putty → Aprende más ahora"
sidebar_label: Acceso inicial (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Los productos de servidores Linux no incluyen una interfaz gráfica de gestión por defecto, por eso la conexión y administración se realiza mediante un cliente SSH (consola). Hay una gran variedad de clientes SSH disponibles. A continuación, un resumen de los clientes SSH conocidos / más usados. 



| Cliente SSH | Sistemas operativos soportados | Código abierto |                           Descarga                           |
| :---------: | :----------------------------: | :------------: | :----------------------------------------------------------: |
|   Putty     |        Windows, Linux           |      Sí        |               [Click](https://www.putty.org/)                |
|   Kitty     |        Windows, Linux           |      Sí        |        [Click](http://www.9bis.net/kitty/)                   |
| MobaXterm   |        Windows, Linux           |      Sí        |           [Click](https://mobaxterm.mobatek.net/)            |
| SecureCRT   |     Windows, Linux, Mac         |      No        | [Click](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG   |           Windows               |      Sí        |           [Click](https://mremoteng.org/download)            |


<InlineVoucher />

## Dirección IP y acceso

A continuación se explica la conexión usando el cliente SSH Putty. En la ventana de configuración, se introduce la dirección IP del servidor y el puerto SSH 22 en el campo **nombre de host**. Después, se puede iniciar la conexión con el botón **Open**.



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
El login SSH mediante contraseña está desactivado por defecto. Si quieres iniciar sesión con contraseña, primero debes activar esta opción en **Acceso y Seguridad**.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
Al conectar al servidor por primera vez, Putty muestra un mensaje de seguridad informando que no hay una clave de host guardada en el registro. Puedes confirmar con **Yes** para no volver a recibir este mensaje cada vez.
:::

 

Esto abre la consola SSH y solicita un **nombre de usuario** y **contraseña**. El nombre de usuario es "**root**". La contraseña la encuentras en el panel web bajo "**Acceso y Seguridad**" o puedes configurarla ahí.



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Administración vía SSH

Para usar el cliente SSH de forma óptima, es esencial conocer los comandos básicos. Aquí tienes un resumen con los comandos más relevantes y su significado:


### Gestión de cuentas

| Comando  |                Descripción                |            Sintaxis            |
| :------: | :--------------------------------------: | :----------------------------: |
| useradd  |          Crear un nuevo usuario           | useradd [opciones] [usuario]   |
| usermod  |      Modificar un usuario existente       | usermod [opciones] [usuario]   |
| userdel  |        Eliminar un usuario existente       | userdel [opciones] [usuario]   |
| passwd   | Cambiar la contraseña de un usuario       |      passwd [opciones]          |



### Gestión del sistema

| Comando |                         Descripción                         | Sintaxis                                       |
| :-----: | :---------------------------------------------------------: | ---------------------------------------------- |
|   top   | Vista general de carga, procesos y otra info (como el Administrador de tareas de Windows) | top                                            |
|   df    |            Mostrar uso de discos (particiones)             | df -h                                          |
|   du    |          Mostrar consumo de disco (directorios)             | du -sh *                                       |
|  free   | Uso de memoria del sistema. Separado en RAM y espacio SWAP. | free                                           |
|  kill   |  Termina el proceso con el ID de proceso (PID) indicado     | kill [ID]                                      |
| killall |        Termina todos los procesos con el nombre dado        | killall [nombre]                               |
|   mv    |       Mover archivos o directorios a otra ubicación         | mv ruta_origen ruta_destino                     |
|  mkdir  |                    Crear un nuevo directorio                | mkdir nombre_directorio                         |
| service |    Iniciar, detener, reiniciar servicio y comprobar estado  | service nombreServicio start/stop/restart/status |
| reboot  |                      Reiniciar el sistema                    | reboot                                         |



### Gestión de archivos

| Comando | Descripción | Sintaxis
| ------- | ------------------------------------------ | ---------------------------------------- |
| ls      | Mostrar archivos y carpetas en el directorio | ls |
| cd      | Cambiar directorio | cd [OPCIÓN] DIRECTORIO |
| cp      | Copiar archivos o directorios | cp [OPCIONES] ORIGEN DESTINO |
| mv      | Mover archivo o directorio | mv [OPCIÓN] ORIGEN DESTINO |
| mkdir   | Crear nuevo directorio | mkdir [OPCIÓN] NOMBRE_DIRECTORIO |
| rmdir   | Eliminar directorio existente | rmdir [OPCIÓN] DIRECTORIO |
| find    | Buscar en el sistema de archivos | find [OPCIONES] [DIRECTORIO] [ACCIONES] |
| grep    | Buscar texto en archivos | grep [OPCIONES] PATRÓN_BUSQUEDA [ARCHIVO(S)] |



### Administración de red

| Comando | Descripción | Sintaxis
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip       | Consultar y configurar interfaces de red         | ip [OPCIONES] OBJETO [COMANDO [ARGUMENTOS]] |
| netstat  | Consultar estado de interfaces de red             | netstat [OPCIONES] |
| nslookup | Consultar información DNS                          | nslookup |
| ping     | Comprobar conexión de red                          | ping [OPCIONES] DESTINO |


<InlineVoucher />