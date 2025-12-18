---
id: domain-records
title: "Dominio: Configuración de registros de dominio"
description: "Descubre cómo configurar y entender los diferentes tipos de registros DNS para optimizar la gestión de tu dominio → Aprende más ahora"
sidebar_label: Registros de Dominio
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los dominios se pueden configurar fácilmente utilizando una gran variedad de tipos de registros DNS que realizan diferentes funciones. En esta guía, cubriremos todos los tipos de registros y explicaremos cómo funcionan.

<InlineVoucher />

## Configuración

Puedes configurar los registros del dominio en la administración de tu dominio bajo la administración DNS. Para hacerlo, haz clic en el botón verde **Nueva entrada**. Esto abrirá una ventana emergente. Desde ahí podrás configurar y crear nuevos registros como desees.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Usamos el dominio **zap-hosting.com** para ilustrar los diferentes tipos de registros DNS. Por favor, usa tu propio dominio en tu caso.
:::

:::warning
Asegúrate al configurar un registro DNS de colocar un punto al final del registro para definir que el nombre de dominio está completo y evitar malentendidos durante la asignación en el sistema DNS.
:::

## Tipos de registros DNS

Existen varios tipos de registros DNS que tienen diferentes significados y propósitos. A continuación te explicamos su significado y diferencias.

### Registros A

Un registro A se usa para crear un reenvío de un "**subdominio**" o "**dominio principal**" a una "**dirección IPv4**".

| Nombre (Ejemplo)   | Tipo | Valor (Ejemplo) | TTL  | Prioridad |
| ------------------ | ---- | --------------- | ---- | --------- |
| zap-hosting.com.   | A    | Dirección IPv4  | 1440 | 0         |


### Registros AAAA

Un registro AAAA se usa para crear un reenvío de un "**subdominio**" o "**dominio principal**" a una "**dirección IPv6**".

| Nombre (Ejemplo)   | Tipo | Valor (Ejemplo) | TTL  | Prioridad |
| ------------------ | ---- | --------------- | ---- | --------- |
| zap-hosting.com.   | AAAA | Dirección IPv6  | 1440 | 0         |


### Registros CNAME

Un registro CNAME se usa para crear un reenvío de un "**subdominio**" a un "**subdominio**" o "**dominio principal**".

| Nombre (Ejemplo) | Tipo  | Valor (Ejemplo)   | TTL  | Prioridad |
| ---------------- | ----- | ----------------- | ---- | --------- |
| zap-test.        | CNAME | zap-hosting.com   | 1440 | 0         |


### Registros MX

Un registro MX se usa para redirigir un "**subdominio**" o "**dominio principal**" a un "**dominio**" o "**registro A**". Este registro MX se usa para especificar uno o más servidores de correo. La prioridad indica qué servidor de correo debe usarse preferentemente si hay múltiples registros MX. La prioridad debe ser un número entero entre 0 y 65535, siendo menor valor mayor prioridad.

| Nombre (Ejemplo)   | Tipo  | Valor (Ejemplo)    | TTL  | Prioridad |
| ------------------ | ----- | ------------------ | ---- | --------- |
| zap-hosting.com.   | CNAME | mailserverxy.com   | 1440 | 0         |


### Registros PTR

Un registro PTR se usa para crear un reenvío de una "**dirección IPv4**" o "**dirección IPv6**" a un "**subdominio**" o "**dominio principal**". Este registro PTR representa el opuesto del registro A o AAAA.

| Nombre (Ejemplo)            | Tipo  | Valor (Ejemplo)     | TTL  | Prioridad |
| -------------------------- | ----- | ------------------- | ---- | --------- |
| 1.0.0.127.in-addr.arpa.    | PTR   | zap-hosting.com.    | 1440 | 0         |


### Registros RP

Un registro RP se usa para proporcionar información sobre el propietario del dominio. Normalmente se introduce una dirección de correo electrónico donde el símbolo "**@**" se reemplaza por un "**punto**".

| Nombre (Ejemplo) | Tipo | Valor (Ejemplo)         | TTL  | Prioridad |
| ---------------- | ---- | ----------------------- | ---- | --------- |
| rp.              | RP   | info.zap-hosting.com.   | 1440 | 0         |

### Registros SRV

Un registro SRV se usa para crear un reenvío de un "**subdominio**" o "**dominio principal**" a un "**registro A**".  
Los registros SRV se usan para aplicaciones donde no se usa un puerto estándar y por eso es necesario el reenvío de puerto.  
La prioridad define cuál de los servicios debe usarse preferentemente si hay múltiples registros SRV para los mismos servicios.  
La prioridad debe ser un número entero, siendo menor valor mayor prioridad.

| Nombre (Ejemplo)   | Tipo | Valor (Ejemplo)             | TTL  | Prioridad |
| ------------------ | ---- | --------------------------- | ---- | --------- |
| zap-hosting.com.   | SRV  | 0 2006 zap-hosting.com.     | 1440 | 0         |

### Registros TXT

Un registro TXT se usa para añadir texto a tu elección. En algunos sistemas, el contenido se usa para codificar datos administrativos. Este registro TXT se usa para crear entradas SPF, DMARC y DKIM.

| Nombre (Ejemplo)   | Tipo | Valor (Ejemplo) | TTL  | Prioridad |
| ------------------ | ---- | --------------- | ---- | --------- |
| zap-hosting.com.   | TXT  | v=spf1 -all     | 1440 | 0         |


## Conclusión

¡Felicidades, has creado y configurado con éxito tus registros DNS! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂.

<InlineVoucher />