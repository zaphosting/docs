---
id: dedicated-linux-rsync
title: "Servidor dedicado: Hacer copias de seguridad de servidores Linux con Rsync"
description: "Descubre cómo crear copias de seguridad locales y remotas eficientes con Rsync para una sincronización y protección de datos confiable → Aprende más ahora"
sidebar_label: Crear copias de seguridad con Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las copias de seguridad se pueden hacer con la herramienta Rsync. Se pueden copiar en el mismo sistema local a otro directorio/disco o a un sistema remoto.  

## Copiar datos a otro directorio o disco local:

:::info
Atención: La primera ejecución puede tardar mucho más que las siguientes, dependiendo de la cantidad de datos. Esto es porque la primera vez Rsync sincroniza todos los datos, a partir de la segunda vez solo se sincronizan los datos que han cambiado. 
:::
>Así se crea una copia de seguridad incremental.  

## Paso 1

Rsync se puede instalar con el siguiente comando:

```
apt install rsync
```

Después de instalarlo, se puede usar directamente. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Copia diaria a un directorio/disco local" label="Copia diaria a un directorio/disco local">
## Paso 2

En este ejemplo, la carpeta Client dentro de /home debe sincronizarse con la carpeta Backup dentro de /home. 

Esto se puede hacer con el siguiente comando: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archivado, se copian los atributos
<br/>
-r=Recursivo, también se sincronizan subcarpetas
<br/>
-z=Compresión, dependiendo de la cantidad/tamaño de datos se comprime


La carpeta se sincronizó correctamente.

Si ahora se elimina un archivo, etc. en la carpeta Client, este permanecerá en la carpeta Backup.  
Pero como los archivos deberían estar siempre sincronizados 1:1, el comando rsync se puede modificar fácilmente, este cambio asegurará que los datos que ya no estén en la carpeta Client también se eliminen de la carpeta Backup. 

El comando modificado es: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archivado, se copian los atributos
<br/>
-r=Recursivo, también se sincronizan subcarpetas
<br/>
-z=Compresión, dependiendo de la cantidad/tamaño de datos se comprime
<br/>
--delete= Elimina datos que ya no existen en la fuente pero sí en el destino

## Paso 3

Para no tener que ejecutar el comando manualmente siempre, se puede poner en un cronjob.  
Por ejemplo, se quiere crear una copia de seguridad diaria a las 3 a.m.: 

Abre crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Con el número 1 se puede usar "nano" como editor.
Con el número 2 se puede usar "vim" como editor.  

Después de abrir el archivo con, por ejemplo, Nano, se puede generar y añadir un crontab.  
Un crontab se puede crear con este [Generador](https://crontab-generator.org/). 

El crontab introducido queda así: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Cada día a las 3 a.m. se ejecuta el comando y se crea la copia de seguridad. 

</TabItem>
<TabItem value="Copia diaria a un sistema remoto" label="Copia diaria a un sistema remoto">

## Paso 4

En este ejemplo, la carpeta Client dentro de /home debe sincronizarse con la carpeta Backup en un sistema remoto. La conexión se hará mediante clave SSH, para que la copia de seguridad pueda automatizarse.  
>Importante: Rsync también debe estar instalado en el servidor remoto.  
>```
>apt install rsync
>```

Por ejemplo, se puede usar el siguiente comando para hacer la copia de seguridad en el host remoto (personalizar según sea necesario): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archivado, se copian los atributos
<br/>
-r=Recursivo, también se sincronizan subcarpetas
<br/>
-z=Compresión, dependiendo de la cantidad/tamaño de datos se comprime
<br/>
-e=Especifica el puerto SSH (por defecto 22)
<br/>
Clave SSH (ruta) ("ssh -i /home/sshkey/keybackup")= ssh -i /[ruta a la clave]
<br/>
Directorio a respaldar (/home/client/)= /[directorio]
<br/>
Host remoto (root@123.123.123.123:)= Nombre de usuario en el host remoto y dirección: usuario@IP/Dominio
<br/>
Directorio destino en el host remoto (:/home/Backup/Home-Server1/)= :/[ruta destino]

La carpeta/archivos se sincronizaron/guardaron correctamente en el directorio remoto tras ejecutar el comando.

Si se elimina un archivo, etc. en la carpeta Client, este permanecerá en la carpeta Backup en el host remoto.  
Pero como los archivos deberían estar siempre sincronizados 1:1, el comando rsync se puede modificar fácilmente para eliminar datos que ya no estén en la carpeta Client de la carpeta Backup en el host remoto. 

El comando modificado es:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archivado, se copian los atributos
<br/>
-r=Recursivo, también se sincronizan subcarpetas
<br/>
-z=Compresión, dependiendo de la cantidad/tamaño de datos se comprime
<br/>
--delete= Elimina datos que ya no existen en la fuente pero sí en el destino
<br/>
-e=Especifica el puerto SSH (por defecto 22)
<br/>
Clave SSH (ruta) ("ssh -i /home/sshkey/keybackup")= ssh -i /[ruta a la clave]
<br/>
Directorio a respaldar (/home/client/)= /[directorio]
<br/>
Host remoto (root@123.123.123.123:)= Nombre de usuario en el host remoto y dirección: usuario@IP/Dominio
<br/>
Directorio destino en el host remoto (:/home/Backup/Home-Server1/)= :/[ruta destino]

## Paso 5

Para no tener que ejecutar el comando manualmente siempre, se puede poner en un cronjob.  
Por ejemplo, se quiere crear una copia de seguridad diaria a las 3 a.m.: 

Abre crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Con el número 1 se puede usar "nano" como editor.
Con el número 2 se puede usar "vim" como editor.  

Después de abrir el archivo con, por ejemplo, Nano, se puede generar y añadir un crontab.  
Un crontab se puede crear con este [Generador](https://crontab-generator.org/). 

El crontab introducido queda así: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Cada día a las 3 a.m. se ejecuta el comando y se crea la copia de seguridad. 

</TabItem>
</Tabs>