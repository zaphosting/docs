---
id: dedicated-iso
title: "Servidor Dedicado: ISO Propia"
description: "Descubre cómo montar archivos ISO fácilmente usando iLO o consola remota para arrancar tu servidor de forma eficiente → Aprende más ahora"
sidebar_label: ISO Propia
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Quieres montar un ISO? ¿Quizás uno nuestro o prefieres usar el tuyo propio? No hay problema. Ofrecemos una gran selección de archivos ISO y también brindamos opciones adicionales.

:::danger Selección y uso de archivos ISO
Cuando usas tu propio ISO (SO), que no ofrecemos activamente, no podemos garantizar su funcionamiento en caso de cualquier problema.
:::



## Opciones disponibles para montar
Hay dos formas de montar tu propio archivo ISO. Siempre es necesario reiniciar el servidor para cargar el archivo. En general, no hay restricciones para montar un archivo, lo importante es que el archivo ISO sea booteable.

## Montaje a través de iLO
Abre tu Interfaz de Gestión iLO y abre "Medios Virtuales"
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Introduce la URL que apunta al archivo ISO que quieres usar. Asegúrate de que el enlace termine en .iso
* Ahora presiona "Insertar Medio"
* Haz clic en "Reiniciar Servidor" para que el sistema realice un reboot.

Tu archivo ISO se cargará ahora.

## Montaje a través de consola remota

**Consola HTML5**
Puedes montar fácilmente el archivo directamente en la consola remota:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Presiona el símbolo del disco
* Elige "CD/DVD"
* Escoge entre "URL de medios con script" o "Archivo .iso local"

La diferencia entre "URL de medios con script" y "Archivo .iso local" es que puedes montar un archivo ISO que esté subido a un servidor/hosting web o elegir directamente con "Archivo *.iso local" un archivo desde tu PC, sin necesidad de subirlo a ningún lado.

Cuando elijas tu archivo ISO, será necesario reiniciar el servidor.


**Consola Java**
Al igual que en la consola HTML5, el archivo ISO también se monta directamente en la aplicación.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Abre "Unidades Virtuales"

La diferencia entre "Archivo de imagen CD/DVD-ROM" y "URL CD/DVD-ROM" es que puedes montar un archivo ISO que esté subido a un servidor/hosting web o elegir directamente con "Archivo de imagen CD/DVD-ROM" un archivo desde tu PC, sin necesidad de subirlo a ningún lado.

Después de inyectar tu archivo ISO deseado, es necesario reiniciar el servidor.


## Conclusión
¡Felicidades, has seleccionado y montado tu archivo ISO con éxito! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂