---
id: barotrauma-becomeadmin
title: "Barotrauma: Conviértete en admin en tu propio servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestión fluida dentro del juego → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración
Agregar un admin se hace a través del archivo de configuración **Clientpermissions.xml**, que puedes encontrar en la interfaz bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Se debe añadir una nueva entrada de cliente en el Config para agregar un nuevo jugador. La sintaxis es la siguiente:

```xml
<Client
    name="<nombre del jugador>"
    steamid="<steamid>"
    permissions="<permiso(s)>">
    <command
      name="<nombrecomando>" />
  </Client>
```



La entrada del cliente contiene las variables **Name, SteamID, Permissions y Command**. Estas deben ser modificadas. El nombre puede ser el que quieras, solo sirve como referencia para tener una vista general. Luego, debes definir el SteamID64 de tu cuenta de Steam.

Puedes encontrarlo accediendo a tu perfil de Steam y haciendo clic derecho en cualquier parte del perfil. Ahí puedes copiar la URL del perfil de Steam.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Después, la URL debe ser ingresada en uno de los siguientes sitios web:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Esto te mostrará la información general de la cuenta así como el Steam ID. En este caso, necesitas el **Steam ID 64**. Luego, el Steam ID debe ser añadido en la entrada del cliente bajo **SteamID**. El resultado se verá así: 

```xml
<Client
    name="Nombre"
    steamid="123456789"
    permissions="<permiso(s)>">
    <command
      name="<nombrecomando>" />
  </Client>
```



En este punto ya eres admin, pero aún no se han agregado derechos específicos a tu cuenta. Puedes añadirlos agregando los permisos y comandos que se pueden usar. Por ejemplo, así:

```xml
...
    permissions="<permiso(s)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Nombre"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



En este ejemplo, el admin tiene acceso a los logs del servidor, consola, y los comandos heal y spawn. A continuación encontrarás un resumen de los permisos que puedes configurar.



## Permisos

| Permisos         | Descripción                                                  |
| ---------------- | ------------------------------------------------------------ |
| ManageRound      | Puede iniciar/finalizar rondas.                              |
| Kick             | Puede expulsar a otros jugadores.                            |
| Ban              | Puede banear a otros jugadores.                              |
| Unban            | Puede quitar baneos a otros jugadores.                       |
| SelectSub        | Puede elegir el submarino.                                   |
| SelectMode       | Puede elegir el modo de juego.                               |
| ManageCampaign   | Puede seleccionar el destino, misión y comprar suministros en la tienda de la campaña. |
| ConsoleCommands  | Puede usar comandos de consola - ten en cuenta que también debes dar permisos para comandos específicos de consola. |
| ServerLog        | Puede leer los logs del servidor.                            |
| ManageSettings   | Puede cambiar la configuración del servidor.                |
| ManagePermissions| Puede cambiar los permisos de otros clientes.                |
| KarmaImmunity    | Es inmune a los efectos negativos del sistema de karma, no pierde karma. |
| All              | Otorga todos los permisos.                                   |



## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂 

<InlineVoucher />