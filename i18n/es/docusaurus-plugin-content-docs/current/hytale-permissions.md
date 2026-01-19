---
id: hytale-permissions
title: "Hytale: Gestión de Permisos para Usuarios y Grupos"
description: "Gestiona los permisos de usuarios y grupos en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Permisos
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Gestionar los permisos en un servidor de Hytale te permite controlar qué pueden y qué no pueden hacer los jugadores. Esto incluye asignar diferentes niveles de acceso a jugadores de confianza, moderadores y administradores. Configurar los permisos correctamente es esencial para mantener un entorno de servidor equilibrado y seguro donde los jugadores puedan disfrutar del juego sin exploits o abusos no deseados.

El software del servidor de Hytale soporta niveles jerárquicos de permisos que determinan qué comandos y acciones puede ejecutar cada jugador. Estos pueden gestionarse a través de la consola en vivo o mediante configuraciones, dependiendo de cómo tengas montado tu servidor.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />



## Resumen de niveles de permiso

Los permisos definen qué acciones puede realizar un jugador en el servidor. En el nivel más básico, los jugadores normales solo tienen permisos estándar de juego, como moverse, interactuar con el mundo y chatear. Los niveles de permiso más altos, como operador o administrador, otorgan acceso a comandos del servidor que afectan la jugabilidad, a otros jugadores, a la configuración del servidor y a herramientas de moderación.

El sistema de permisos consta de dos componentes principales:

- **Permisos de usuario**, que se aplican directamente a un jugador específico
- **Permisos de grupo**, que permiten agrupar permisos y asignarlos a varios jugadores a la vez

Cada jugador se identifica internamente por un UUID, que es necesario para gestionar permisos mediante comandos.



## Gestión de permisos de usuario

Los permisos de usuario te permiten otorgar o revocar permisos específicos para un solo jugador.

### Ver permisos de usuario

Para mostrar todos los permisos asignados directamente a un usuario. Este comando muestra cada permiso aplicado actualmente al usuario especificado.

```
/perm user list <uuid>
```



### Añadir permisos a un usuario

Para otorgar uno o más permisos directamente a un usuario. Los permisos especificados se añadirán inmediatamente y tendrán efecto sin necesidad de reiniciar el servidor.

```
/perm user add <uuid> <permissions>
```



### Quitar permisos a un usuario

Para revocar permisos a un usuario. Esto elimina solo los permisos especificados, dejando los demás sin cambios.

```
/perm user remove <uuid> <permissions>
```



## Gestión de asignaciones de grupos de usuario

Además de los permisos directos, los usuarios pueden heredar permisos a través de grupos.

### Ver permisos de grupos de usuario

Este comando muestra a qué grupos de permisos pertenece actualmente el usuario.

```
/perm user group list <uuid>
```



### Añadir un usuario a un grupo

Para asignar un usuario a un grupo de permisos. Una vez añadido, el usuario hereda todos los permisos definidos para ese grupo.

```
/perm user group add <uuid> <group>
```



### Quitar un usuario de un grupo

Para eliminar un usuario de un grupo de permisos. Tras la eliminación, el usuario ya no recibirá permisos de ese grupo.

```
/perm user group remove <uuid> <group>
```



## Gestión de permisos de grupo

Los grupos permiten gestionar permisos de forma centralizada y reutilizarlos en varios usuarios.

### Ver permisos de grupo

Para mostrar todos los permisos asignados a un grupo. Este comando ofrece una visión general de cada permiso asociado al grupo especificado.

```
/perm group list <group>
```



### Añadir permisos a un grupo

Para añadir uno o más permisos a un grupo. Todos los usuarios asignados a este grupo heredarán inmediatamente los nuevos permisos.

```
/perm group add <group> <permissions>
```



### Quitar permisos de un grupo

Esto elimina solo los permisos especificados del grupo sin afectar a los demás permisos.

```
/perm group remove <group> <permissions>
```



<InlineVoucher />

