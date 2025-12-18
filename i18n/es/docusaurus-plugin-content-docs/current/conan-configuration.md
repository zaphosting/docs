---
id: conan-configuration
title: "Conan Exiles: Configura tu propio servidor"
description: "Descubre cómo personalizar la configuración de tu servidor de Conan Exiles para un juego óptimo y seguro → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuración del Servidor

Los servidores de Conan Exiles pueden configurarse de forma extensa. La configuración del servidor se realiza a través de los archivos de configuración. Puedes encontrarlos en la interfaz web en la administración del servidor de juegos bajo Configs. Para ello, abre el archivo de configuración **ServerSettings.ini**.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



A continuación encontrarás una visión general categorizada de todos los comandos relevantes, que puedes usar para configurar libremente tu servidor según tus deseos. Algunos comandos pueden no estar presentes en la Config por defecto. Estos comandos se pueden añadir fácilmente después.

<InlineVoucher />

## General

En los ajustes generales encontrarás todos los comandos relevantes para personalizar el nombre del servidor, contraseñas, anti-trampas.

| Opción                             | Descripción                                                  | Comando de configuración       |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Nombre del Servidor                | Nombre de tu servidor.                                       | ServerName="..."               |
| Número de jugadores               | Número máximo de jugadores                                   | Depende del paquete            |
| Mensaje del Día                   | Mensaje del día                                             |                                |
| Contraseña del servidor           | Aquí puedes cambiar la contraseña del servidor               | ServerMessageOfTheDay="..."    |
| Contraseña de administrador      | Acceso para convertirse en administrador. Más info en la guía Convertirse en administrador | AdminPassword="..."            |
| BattlEye Activado                | Activa la protección anti-trampas BattlEye                   | IsBattlEyeEnabled=             |
| PVP Activado                     | Activa o desactiva el PVP. 1 = activado, 0 = desactivado     | PVPEnabled=                    |
| Restricción horaria PvP          | Si está activado, el combate entre jugadores solo es posible en los periodos de tiempo especificados | RestrictPVPTime=               |
| PVP Blitz Activado               | Activa o desactiva PVP Blitz. 1 = activado, 0 = desactivado (por defecto) | PVPBlitzServer=                |
| Restricción horaria daño a construcciones PvP | Si está activado, los jugadores solo pueden atacar y destruir estructuras de otros jugadores en los periodos de tiempo especificados | RestrictPVPBuildingDamageTime= |
| Comunidad                       | Define el estilo de comunidad: 0=Ninguna 1=Purista 2=Relajada 3=Hard Core 4=Rol 5=Experimental | ServerCommunity=               |
| Región del Servidor             | Seleccionar una región afecta el filtrado de tu servidor en la lista. Elige tu región para que jugadores de la misma región puedan encontrarlo. 0 = Europa, 1 = Norteamérica, 2 = Asia, 3 = Australia, 4 = Sudamérica, 5 = Japón | serverRegion=                  |
| Sin Propiedad                   | Si está activado, no hay reglas de propiedad en el servidor. Todos los jugadores pueden saquear cofres, usar máquinas, minar edificios, etc. 1 = activado, 0 = desactivado (por defecto) | NoOwnership=                   |
| Contenedores Ignoran Propiedad | Si está activado, todos los contenedores están abiertos para otros jugadores. 1 = activado, 0 = desactivado | ContainersIgnoreOwnership=     |
| Puede dañar estructuras de otros jugadores | Si está activado, los jugadores pueden atacar y destruir estructuras de otros. 1 = activado, 0 = desactivado | CanDamagePlayerOwnedStructures= |
| Puede dañar jugadores           | Si está activado, los jugadores pueden ser heridos por otros jugadores. 1 = activado, 0 = desactivado | bCanBeDamaged=                 |
| Activar tormenta de arena      | Permite que tormentas de arena barran periódicamente las Tierras Exiliadas. | EnableSandStorm=               |
| Tamaño máximo de clan          | Establece el tamaño máximo permitido para los clanes en el servidor. Al alcanzar el límite, no pueden unirse nuevos miembros. | clanMaxSize=                   |
| Nudismo máximo                 | Establece el nivel máximo de desnudez en el servidor. Sobrescribe la opción del cliente. 0 = ninguno, 1 = parcial, 2 = completo | MaxNudity=                     |
| Chat de voz del servidor       | Determina si el chat de voz está habilitado en el juego. 1 = activado, 0 = desactivado | serverVoiceChat=               |



## Progresión

En los ajustes de progresión encontrarás todos los comandos relevantes para personalizar la experiencia de XP que los jugadores pueden recibir.

| Opción                       | Descripción                                                  | Comando de configuración    |
| ---------------------------- | ------------------------------------------------------------ | --------------------------- |
| Multiplicador de XP por jugador | Multiplica todos los tipos de XP que reciben los jugadores. Ajusta el progreso para todas las actividades. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=     |
| Multiplicador de XP por tiempo | Conan Exiles da XP pasivamente con el tiempo solo por sobrevivir. Multiplica la tasa de XP recibida. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=     |
| Multiplicador de XP por matar | Multiplica la XP que reciben los jugadores por matar monstruos y jugadores. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=     |
| Multiplicador de XP por cosecha | Multiplica la XP que reciben los jugadores por recolectar. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier=  |
| Multiplicador de XP por fabricación | Multiplica la XP que reciben los jugadores por fabricar. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=    |



## Tiempo

En los ajustes de tiempo encontrarás todos los comandos relevantes para ajustar el tiempo. Esto te permite configurar días y noches tan largos o cortos como quieras.

| Opción               | Descripción                                                  | Comando de configuración  |
| -------------------- | ------------------------------------------------------------ | ------------------------- |
| Velocidad del ciclo diurno | Multiplica la velocidad de todo el ciclo de 24 horas. Las partes individuales del día se pueden ajustar en las opciones siguientes. El multiplicador se aplica además de los cambios listados abajo. | DayCycleSpeedScale=       |
| Velocidad del día    | Las horas diurnas en Conan Exiles son entre 7:00am y 4:59pm hora del juego. Cambiar este multiplicador aumenta el tiempo entre las horas diurnas. | DayTimeSpeedScale=        |
| Velocidad de la noche | Las horas nocturnas en Conan Exiles son entre 7:00pm y 4:59am hora del juego. Cambiar este multiplicador aumenta el tiempo entre las horas nocturnas. | NightTimeSpeedScale=      |
| Velocidad del amanecer/atardecer | El amanecer es entre 5:00 am y 6:59 am. El atardecer es entre 5:00pm y 6:59pm. Cambiar este multiplicador multiplica el tiempo en el periodo de amanecer y atardecer. | DawnDuskSpeedScale=       |
| Usar tiempo de compensación | Activa o desactiva la mecánica de sincronización de tiempo en el servidor. true = activado, false = desactivado. | UseClientCatchUpTime=     |
| Tiempo de compensación | Para dar a nuevos jugadores un inicio suave, Conan Exiles puede forzar que el cliente empiece a una hora específica, independientemente del tiempo del servidor. Los personajes nuevos empiezan a esa hora y juegan hasta que el servidor los "alcance". Recomendamos no ponerlo en horas nocturnas. | ClientCatchUpTime=        |



## Supervivencia

En los ajustes de supervivencia encontrarás todos los comandos relevantes para personalizar la supervivencia. Esto incluye, por ejemplo, cuánta vida puede tener un jugador, qué tan rápido regenera y mucho más.

| Opción                                | Descripción                                                  | Comando de configuración          |
| ------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Multiplicador de salud del jugador    | Multiplica directamente el valor de salud del jugador. 0.5 = 50 HP, 1.0 = 100 HP (estándar), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Velocidad de regeneración de salud    | Multiplica la velocidad pasiva de regeneración de salud. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (por defecto), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=       |
| Multiplicador de resistencia          | Multiplica la cantidad de resistencia del jugador. 0.5 = 50 resistencia, 1.0 = 100 resistencia (por defecto), 1.5 = 150 resistencia | PlayerStaminaMultiplier=           |
| Velocidad de sprint                   | Define la velocidad de sprint del jugador. 0.5 = 1 m/s, 1.0 = 2 m/s (por defecto), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Multiplicador de coste de resistencia | Aumenta o disminuye la cantidad de resistencia que usa el jugador por actividad | PlayerStaminaCostMultiplier=       |
| Multiplicador de coste de sprint      | Aumenta o disminuye la cantidad de resistencia que usa el jugador al sprintar | PlayerStaminaCostSprintMultiplier= |
| Velocidad de regeneración de resistencia | Multiplica la velocidad pasiva de regeneración de resistencia. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerStaminaRegenSpeedScale=      |
| Multiplicador de sed activa           | Escala la tasa a la que un jugador gana o pierde agua activamente. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerActiveThirstMultiplier=      |
| Multiplicador de sed inactiva         | Escala la tasa a la que un jugador gana o pierde agua pasivamente. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerIdleThirstMultiplier=        |
| Multiplicador de sed offline          | Escala la tasa a la que un jugador gana o pierde agua estando offline. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerOfflineThirstMultiplier=     |
| Multiplicador de hambre activa        | Escala la tasa a la que un jugador gana o pierde comida activamente. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerActiveHungerMultiplier=      |
| Multiplicador de hambre inactiva      | Escala la tasa a la que un jugador gana o pierde comida pasivamente. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerIdleHungerMultiplier=        |
| Multiplicador de hambre offline       | Escala la tasa a la que un jugador gana o pierde comida estando offline. 0 = sin pérdida, 0.5 = 1.0 pérdida/s, 1.0 = 2.0 pérdida/s (por defecto), 1.5 = 3.0 pérdida/s | PlayerOfflineHungerMultiplier=     |
| Los personajes desconectados permanecen en el mundo | Si está en True, los cuerpos de los jugadores permanecen en el mundo en estado inconsciente; si es False, se eliminan al desconectarse. (Por defecto: True) | LogoutCharactersRemainInTheWorld=  |
| Soltar equipo al morir                | Si es True, los jugadores que mueren sueltan su equipo al reaparecer. Si es False, reaparecen con todo su equipo. (Por defecto: True) | DropEquipmentOnDeath=              |
| Soltar objetos de barra rápida al morir | Si es True, los jugadores que mueren pierden los objetos de la barra rápida al reaparecer. Si es False, reaparecen con esos objetos. (Por defecto: True) | DropShortcutbarOnDeath=            |
| Soltar mochila al morir               | Si es True, los jugadores que mueren pierden los objetos de la mochila al reaparecer. Si es False, reaparecen con el contenido de la mochila. (Por defecto: True) | DropBackpackOnDeath=               |
| Todos pueden saquear el cadáver      | Si es True, cualquiera puede saquear el cadáver de un jugador muerto. Si es False, solo el jugador puede saquear su propio cadáver. (Por defecto: True) | EverybodyCanLootCorpse=            |
| Multiplicador de eliminación de corrupción de esclavos | Aumentar esto incrementa la velocidad a la que los esclavos eliminan la corrupción del jugador. Reducirlo disminuye la velocidad. | ThrallCorruptionRemovalMultiplier= |
| Multiplicador de ganancia de corrupción | Multiplica la corrupción que reciben los jugadores.          | PlayerCorruptionGainMultiplier=    |



## Combate

En los ajustes de combate encontrarás todos los comandos relevantes para ajustar el daño. Esto incluye cuánto daño puede hacer un jugador, cuánto puede absorber y más.

| Opción                          | Descripción                                                  | Comando de configuración       |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Multiplicador de daño del jugador | Multiplica el daño que hace un jugador. 0 = sin daño, 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | PlayerDamageMultiplier=        |
| Multiplicador de daño recibido por jugador | Multiplica el daño que recibe un jugador. 0 = sin daño, 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | PlayerDamageTakenMultiplier=   |
| Multiplicador de daño de esclavos | Multiplica el daño que hacen esclavos y mascotas. 0 = sin daño, 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | MinionDamageMultiplier=        |
| Multiplicador de daño recibido por esclavos | Multiplica el daño que reciben esclavos y mascotas. 0 = sin daño, 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | MinionDamageTakenMultiplier=   |
| Multiplicador de daño de NPCs    | Multiplica el daño que hacen NPCs y monstruos. 0 = sin daño, 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | NPCDamageMultiplier=           |
| Multiplicador de daño recibido por NPCs | Multiplica el daño que reciben NPCs y monstruos.              | NPCDamageTakenMultiplier=      |
| Multiplicador de salud de NPCs   | Aumenta la salud de todos los NPCs.                           | NPCHealthMultiplier=           |
| Multiplicador de reaparición de NPCs | Multiplica la velocidad a la que los NPCs reaparecen tras morir. Nota: muchos NPCs *NO* respetan este valor actualmente. 0 = nunca reaparecen (sin probar), 0.5 = 15 segundos, 1.0 = 30 segundos (por defecto), 1.5 = 45 segundos | NPCRespawnMultiplier=          |
| Multiplicador de daño a durabilidad | Modifica el daño a la durabilidad que recibe un objeto al usarse o dañarse. Afecta cuánto duran armas, herramientas y armaduras. 0= invulnerable, 0.5 = 5 pérdida por golpe, 1.0 = 10 pérdida por golpe (por defecto), 1.5 = 15 pérdida por golpe | DurabilityMultiplier=          |
| Multiplicador de durabilidad del escudo | Cambia el daño a la durabilidad que recibe un escudo al bloquear. 0 = escudos invulnerables, 0.5 = 5 pérdidas por golpe, 1.0 = 10 pérdidas por golpe (por defecto), 1.5 = 15 pérdidas por golpe | ShieldDurabilityMultiplier=    |
| Tiempo de despertar de esclavos  | Determina cuánto tiempo un esclavo permanece inconsciente. 0 = despiertan inmediatamente (sin probar), 300 = 5 minutos, 600 = 10 minutos (por defecto), 900 = 15 minutos | UnconsciousTimeSeconds=        |
| Daño a esclavos inconscientes    | Multiplica el daño que recibe un esclavo mientras está inconsciente. | ConciousnessDamageMultiplier=  |
| Duración del avatar              | Determina cuánto tiempo puede permanecer vivo un Avatar en el mundo. | AvatarLifetime=                |
| Desactivar avatares             | True: no se pueden invocar avatares en este servidor, False: se pueden invocar avatares. | AvatarsDisabled=               |
| Tiempo de invocación de avatar  | Tiempo requerido para invocar un Avatar.                      | AvatarSummonTime=              |
| Multiplicador de duración del domo de avatar | Determina cuánto duran los domos de avatar.                    | AvatarDomeDurationMultiplier=  |
| Desactivar notificaciones de reclamo de tierra | Desactiva las notificaciones de reclamo de tierra. True: desactiva notificaciones. False: las activa. | DisableLandclaimNotifications= |



## Recolección

En los ajustes de recolección encontrarás todos los comandos relevantes para personalizar la cosecha. Esto incluye qué tan rápido se puede farmear, con qué frecuencia reaparecen los recursos, etc.

| Opción                            | Descripción                                                  | Comando de configuración       |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Escala de descomposición de objetos | Afecta cuánto duran los alimentos antes de pudrirse (valores menores significan mayor duración). 0 = nunca se pudren, 0.5 = 4 minutos, 1.0 = 2 minutos (por defecto), 1.5 = 1 minuto | ItemSpoilRateScale=            |
| Multiplicador de cantidad de cosecha | Multiplica la cantidad de recursos obtenidos al recolectar. 1.0 = 1 recurso (por defecto), 2.0 = 2 recursos | HarvestAmountMultiplier=       |
| Multiplicador de velocidad de reaparición de recursos | Multiplica la velocidad a la que reaparecen los recursos tras ser recolectados. 0.5 = 7.5 minutos, 1.0 = 15 minutos (por defecto), 1.5 = 30 minutos | ResourceRespawnSpeedMultiplier= |
| Multiplicador del radio de reclamo de tierra | Aumenta o disminuye el radio en el que se aplica el reclamo de tierra. Afecta la reaparición de recursos y NPCs, así como la capacidad de otros jugadores para reclamar tierras cercanas. 0.5 = 10 metros, 1.0 = 20 metros (estándar), 1.5 = 30 metros | LandClaimRadiusMultiplier=     |



## Fabricación

En los ajustes de fabricación encontrarás todos los comandos relevantes para personalizar la fabricación. Esto incluye qué tan rápido se pueden fabricar cosas.

| Opción                                | Descripción                                                  | Comando de configuración        |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Multiplicador de tiempo de fabricación | Aumentar esto incrementa el tiempo para fabricar objetos. Disminuirlo reduce el tiempo. | CraftingTimeMultiplier=          |
| Multiplicador de tiempo de entrenamiento de esclavos | Aumentar esto incrementa el tiempo para entrenar un esclavo. Disminuirlo reduce el tiempo. | ThrallCraftingTimeMultiplier=    |
| Multiplicador de tiempo de combustión de combustible | Aumentar esto incrementa el tiempo que dura el combustible. Disminuirlo reduce el tiempo. | FuelBurnTimeMultiplier=          |
| Multiplicador de velocidad de fabricación | Multiplica la velocidad a la que se fabrican objetos. Usar una Rueda de Dolor para convertir esclavos se considera fabricación. 0 o menos = inmediato, 0.5 = 10 segundos, 1.0 = 20 segundos (por defecto), 1.5 = 30 segundos | ItemConvertionMultiplier=        |
| Multiplicador de daño a estructuras  | Multiplica el daño que puede hacer una estructura defensiva (ej. empalizada). 0 = sin daño (sin probar), 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | StructureDamageMultiplier=       |
| Multiplicador de daño recibido por estructuras | Multiplica el daño que recibe una estructura al ser atacada (paredes/estaciones de fabricación extra). 0 = sin daño (sin probar), 0.5 = 10 daño, 1.0 = 20 daño (por defecto), 1.5 = 30 daño | StructureDamageTakenMultiplier=  |
| Multiplicador de salud de estructuras | Multiplica la salud que tiene una estructura. 0.5 = 500 HP, 1.0 = 1000 HP (por defecto), 1.5 = 1500 HP | StructureHealthMultiplier=       |
| Multiplicador de carga del jugador   | Multiplica la carga que un objeto añade al jugador. (Poner a 0 no desactiva) 0.5 = 2.5 peso añadido, 1.0 = 5.0 peso añadido (por defecto), 1.5 = 7.5 peso añadido | PlayerEncumbranceMultiplier=     |
| Multiplicador de penalización por carga | Multiplica las penalizaciones que sufre un jugador cuando está cargado. (Poner a 0 no desactiva) 0.5 = 35 penalización de movimiento al 99%, 1.0 = 70 penalización al 99% (por defecto), 1.5 = 125 penalización al 99% | PlayerEncumbrancePenaltyMultiplier= |



## Abandono

En los ajustes de abandono encontrarás todos los comandos relevantes para ajustar el abandono de construcciones.

| Opción                         | Descripción                                                  | Comando de configuración    |
| ------------------------------ | ------------------------------------------------------------ | --------------------------- |
| Desactivar abandono de construcciones | Si está activado, desactiva la decadencia de construcciones con el tiempo. | DisableBuildingAbandonment= |
| Multiplicador de tiempo de decadencia de construcciones | Aumentar esto incrementa el tiempo que tardan las piezas y estructuras en decaer. Disminuirlo reduce el tiempo. | BuildingDecayTimeMultiplier= |



## Chat

En los ajustes de chat encontrarás todos los comandos relevantes para personalizar el chat. Esto incluye activar el chat, el radio del chat y la longitud máxima de mensajes.

| Opción             | Descripción                                                  | Comando de configuración  |
| ------------------ | ------------------------------------------------------------ | ------------------------- |
| Radio local del chat | Establece el radio en centímetros en el que el chat local se transmite alrededor del jugador | ChatLocalRadius=          |
| Longitud máxima del mensaje | Establece el número máximo de caracteres en un mensaje de chat. | ChatMaxMessageLength=     |
| Chat global activado | Permite o no el chat global. El chat del juego tiene un canal global donde todos pueden hablar. | ChatHasGlobal=            |



## Purga

En los ajustes de purga encontrarás todos los comandos relevantes para ajustar la purga, sus fases, etc.

| Opción                           | Descripción                                                  | Comando de configuración                                               |
| -------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Activar Purga                   | Desactivar esta opción desactiva completamente los eventos de purga | EnablePurge=                                                         |
| Nivel de Purga                  | Aumentar este valor incrementa la dificultad de la purga. Ejemplo: 0 desactiva las purgas | PurgeLevel=                                                          |
| -                              | Aumentar este valor incrementa la cantidad de eventos de purga en un día. La cantidad real depende también de las opciones abajo | PurgePeriodicity=                                                    |
| -                              | Si está activado, las purgas se limitan a ciertos horarios       | RestrictPurgeTime=                                                   |
| -                              | El valor 0000 significa que las 00:00 es la hora de fin en días laborables | PurgeTimeWeekdayEnd=                                                 |
| -                              | El valor 0000 significa que las 00:00 es la hora de inicio en días laborables | PurgeTimeWeekdayStart=                                               |
| -                              | El valor 0000 significa que las 00:00 es la hora de fin en fines de semana | PurgeTimeWeekendEnd=                                                 |
| -                              | El valor 0000 significa que las 00:00 es la hora de inicio en fines de semana | PurgeTimeWeekendStart=                                               |
| -                              | El valor 0830 significa que las 08:30 es la hora de inicio en días laborables | PurgeRestrictionWeekdayEnd=                                          |
| -                              | El valor 2200 significa que las 22:00 es la hora de fin en días laborables | PurgeRestrictionWeekdayStart=                                        |
| -                              | El valor 1800 significa que las 18:00 es la hora de inicio en fines de semana | PurgeRestrictionWeekendStart=                                        |
| Tiempo de preparación de la purga | Aumentar esto incrementa el tiempo en minutos entre la advertencia de purga y el inicio de la purga. | PurgePreparationTime=                                                |
| Duración de la purga            | Aumentar esto incrementa el tiempo máximo que dura la purga. Si matas todas las oleadas, la purga puede terminar antes | PurgeDuration=                                                      |
| Número mínimo de jugadores en línea | Aumentar esto hace que las purgas solo ocurran cuando hay ese número de jugadores en línea. Si es cero, la purga atacará a cualquier clan que supere el umbral de purga (purgas offline). | MinPurgeOnlinePlayers=                                              |
| Permitir construcción          | Si está activado, se permite construir durante las purgas.     | AllowBuilding=                                                      |
| Valor de activación del medidor de purga | Aumentar esto incrementa la cantidad de acciones seleccionadas que clanes o jugadores deben hacer para ser elegibles para la purga. En general, a mayor número, más tiempo debe estar activo un clan para activar la purga. | ClanPurgeTrigger=                                                   |
| Intervalo de actualización del medidor de purga | Intervalo en que se agregan eventos de purga de clan y se suman puntos al medidor. Números bajos aumentan el medidor más rápido. | ClanScoreUpateFrenquency=                                           |
| -                              | Aumentar esto incrementa el daño infligido por NPCs durante una purga. Ejemplos: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                                  |



## Mascotas y Hambre

En los ajustes de mascotas y hambre encontrarás todos los comandos relevantes sobre el consumo de hambre de las mascotas. Esto incluye cuánto y qué tan rápido consumen.

| Opción                              | Descripción                                                  | Comando de configuración       |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Activar sistema de hambre: esclavos | Activa o desactiva el sistema de hambre para esclavos.       | ToggleHungerSystemThralls=     |
| Activar sistema de hambre: mascotas | Activa o desactiva el sistema de hambre para mascotas.       | ToggleHungerSystemPets=        |
| Valor nutricional de la comida      | Cantidad de nutrición que gana el compañero al comer comida. | FoodNutritionValue=            |
| Tiempo de inanición en minutos      | Minutos que tarda el medidor de hambre del compañero en bajar de 100 a 0. Por defecto = 10080 | StarvationTimeInMinutes=       |
| Límite de penalización por daño por inanición | Cuando el medidor de hambre llega a 0, el compañero empieza a recibir daño a su salud. Este valor determina cuánto puede perder en total, dado en porcentaje donde 1 significa 100% de la salud. | StarvationDamagePenaltyCap=    |
| Multiplicador de tiempo de fabricación en corrales | Multiplica la velocidad de fabricación en corrales de animales. | AnimalPenCraftingTimeMultiplier= |
| Multiplicador de rango de contenedor de comida | Multiplica la distancia a la que los contenedores de comida pueden alimentar a tus compañeros. | FeedBoxRangeMultiplier=        |
| Dieta exclusiva                    | Determina si los compañeros comen exclusivamente los ítems listados en su dieta. Desactivado significa que comerán cualquier comida además de su dieta. | ExclusiveDiet=                 |

<InlineVoucher />