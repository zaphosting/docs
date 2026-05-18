---
id: rust-server-wipe
title: "Rust: Wipe del Servidor - Mantén tu Servidor Equilibrado y Limpio"
description: "Descubre qué son los wipes en servidores de Rust, por qué son necesarios y cómo realizar un wipe en tu servidor de Rust → Aprende más ahora"
sidebar_label: Wipe del Servidor
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

En **Rust**, un wipe del servidor reinicia partes del mundo del juego para crear un nuevo comienzo para todos los jugadores. Con el tiempo, los mapas de Rust se llenan de grandes bases, recursos acumulados y grupos de jugadores establecidos. Esto puede afectar el equilibrio y el rendimiento del servidor.

Un wipe del servidor elimina el progreso existente y restaura un entorno limpio para que los jugadores puedan empezar de cero. Muchas comunidades de Rust realizan wipes regularmente para mantener el juego justo y emocionante, especialmente cuando se lanzan nuevas actualizaciones o mapas.

Dependiendo del tipo de wipe, se puede reiniciar el **mapa**, los **planos de los jugadores** o **ambos**.



<InlineVoucher />



## Qué Hace un Wipe del Servidor

Un wipe en un servidor de Rust elimina los datos almacenados del mundo o del progreso de los jugadores. Esto puede incluir:

- Estructuras y bases construidas por jugadores  
- Inventarios y objetos almacenados de los jugadores  
- Datos de exploración del mapa  
- Planos aprendidos (dependiendo del tipo de wipe)

Después de un wipe, el servidor se comporta como un mundo nuevo donde los jugadores deben recolectar recursos, reconstruir bases y reaprender el progreso.



## Tipos de Wipes en Rust

Rust soporta varios tipos de wipes, dependiendo de lo que quieras reiniciar. A continuación te explicamos los tipos de wipes disponibles.

### Wipe de mapa

Un **wipe de mapa** elimina todo el archivo de guardado del mundo. Todas las bases, estructuras y el progreso del mapa se borran. Cuando el servidor se reinicia, se genera o descarga un mapa nuevo. El progreso de los planos permanece intacto a menos que también se realice un wipe de planos.

### Wipe de planos

Un **wipe de planos** reinicia todos los planos de fabricación aprendidos. Los jugadores deben investigar los objetos nuevamente antes de poder fabricarlos. Este tipo de wipe solo afecta el progreso y no reinicia el mapa en sí.

### Wipe completo

Un **wipe completo** reinicia tanto el mapa como todos los planos de los jugadores. Esto crea un entorno completamente nuevo en el servidor y se usa comúnmente para resets de temporada o actualizaciones importantes.



## Por Qué Son Importantes los Wipes del Servidor

Los wipes ayudan a mantener un entorno saludable en el servidor de Rust. Con el tiempo, los servidores acumulan muchas estructuras, contenedores de almacenamiento y entidades del mundo. Esto puede afectar negativamente el rendimiento del servidor y el equilibrio del juego. Los wipes regulares ofrecen varios beneficios:

- Restauran el rendimiento del servidor  
- Crean un nuevo comienzo para todos los jugadores  
- Evitan que clanes dominantes controlen el mapa indefinidamente  
- Permiten que los servidores usen nuevos mapas o semillas de mapa

Muchas comunidades de Rust realizan wipes programados semanalmente, quincenalmente o mensualmente, dependiendo del estilo del servidor.



## Cómo Realizar un Wipe del Servidor

Para realizar un wipe en tu servidor de Rust, accede a los archivos del servidor mediante el [acceso FTP](gameserver-ftpaccess.md). Luego, localiza los archivos de guardado dentro del directorio del servidor de Rust. Estos archivos suelen incluir:

```
proceduralmap.*
player.blueprints.*
player.deaths.*
player.identities.*
player.states.*
```
Eliminar archivos específicos determina el tipo de wipe que se realiza. Borrar los archivos `proceduralmap.*` realiza un **wipe de mapa**, eliminando el mundo existente. Borrar los archivos `player.blueprints.*` realiza un **wipe de planos**.

![img](https://screensaver01.zap-hosting.com/index.php/s/QdeoFWbaaQz7Yaf/preview)

Eliminar ambos resultará en un **wipe completo**. Después de borrar los archivos deseados, reinicia el servidor. El servidor generará automáticamente un mundo nuevo y permitirá que los jugadores comiencen desde cero.



## Conclusión

¡Felicidades! Ahora sabes cómo funcionan los wipes en servidores de Rust y cómo realizarlos. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />