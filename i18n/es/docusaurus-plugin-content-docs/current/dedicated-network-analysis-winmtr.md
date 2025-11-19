---
id: dedicated-network-analysis-winmtr
title: "Servidor dedicado: Identificando problemas de red con WinMTR/MTR"
description: "Descubre cómo diagnosticar problemas de red analizando las rutas de salida y retorno para identificar latencia y pérdida de paquetes de forma efectiva → Aprende más ahora"
sidebar_label: Problemas de red
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los problemas de red pueden ser molestos y, por supuesto, no deberían formar parte de la vida diaria. Sin embargo, cuando ocurren, es importante identificar rápida y eficazmente la causa para resolver el problema. La información detallada sobre problemas de red puede analizarse de forma efectiva usando la aplicación **WinMTR (Windows)** o **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR es una herramienta de diagnóstico de red que combina las funciones de Ping y Traceroute. Permite un análisis detallado tanto de la **ruta de salida (Cliente → Servidor)** como de la **ruta de retorno (Servidor → Cliente)** rastreando el camino de los paquetes de datos en ambas direcciones. Al hacerlo, captura información importante como la latencia y la pérdida de paquetes, que son cruciales para diagnosticar y solucionar problemas de red con precisión.

**Ruta de salida (Cliente → Servidor)**: Un informe para la **ruta de salida** es útil cuando surgen problemas como desconexiones, conexiones lentas o dificultades para establecer conexión. Este análisis ayuda a identificar posibles problemas en el camino desde el cliente hasta el servidor, como congestión de red, pérdida de paquetes o enrutamiento defectuoso.

**Ruta de retorno (Servidor → Cliente)**: Un informe para la **ruta de retorno** solo tiene sentido una vez que se ha confirmado una conexión estable y funcional en la ruta de salida. Esto significa que el informe de la ruta de retorno es especialmente relevante cuando la ruta de salida no muestra problemas, pero persisten problemas como respuestas lentas del servidor, tiempos de carga retrasados o transmisiones de datos incompletas.

En resumen, si ocurren problemas de red evidentes, primero se debe analizar la **ruta de salida (Cliente → Servidor)**. Si el informe de salida no muestra anomalías y los problemas persisten, es necesario revisar la **ruta de retorno (Servidor → Cliente)** para identificar posibles problemas asimétricos. Los problemas de red asimétricos pueden surgir cuando los paquetes de datos se transmiten sin problemas en una dirección, mientras que en la dirección opuesta ocurren retrasos o pérdida de paquetes.

## Instalación

Ahora que está claro cuándo son útiles los informes para las rutas de entrada y salida, podemos pasar a la instalación tanto a nivel cliente como servidor.

### Cliente

Para la ruta de salida, la aplicación debe instalarse en el cliente (**tu ordenador**). Los siguientes pasos explican cómo instalar la aplicación para tu sistema operativo.

<Tabs>
<TabItem value="windows" label="Windows" default>

Cuando usas un ordenador con sistema operativo Windows, el análisis de red se realiza mediante la aplicación WinMTR. Para instalar WinMTR en tu ordenador, primero descarga la aplicación desde la web de ZAP-Hosting. Tras la descarga, extrae el archivo. Como resultado, obtendrás el archivo ejecutable `WinMTR.exe`.

| Aplicación | Descarga                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Cuando usas un ordenador con sistema operativo Linux, el análisis de red se realiza mediante la aplicación MTR. Para instalar MTR en tu sistema, abre la terminal y ejecuta el comando de instalación correspondiente a tu sistema operativo:

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="macos" label="MacOS">

Cuando usas un ordenador con sistema operativo Mac OS, el análisis de red se realiza mediante la aplicación MTR. Sin embargo, MTR no viene preinstalado en dispositivos Mac OS ni está disponible en la Apple Store. Para instalar MTR, necesitas instalar Homebrew como sistema de gestión de paquetes en tu ordenador.

**Instalando Homebrew**

Abre la terminal en tu ordenador y ejecuta el siguiente comando para instalar Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Instalando MTR**

Sigue los pasos que se muestran para completar la instalación. Una vez que Homebrew esté instalado correctamente, puedes usarlo para instalar MTR ejecutando el siguiente comando en la terminal:

```
brew install mtr
```

</TabItem>
</Tabs>


### Servidor
Para la ruta de retorno, la aplicación debe instalarse en el servidor. Los siguientes pasos explican cómo instalar la aplicación para el sistema operativo de tu servidor.

<Tabs>

<TabItem value="linux" label="Servidor con Linux" default>

Conéctate a tu servidor vía **[SSH](vserver-linux-ssh.md)**. Para instalar MTR en tu sistema, ejecuta el comando de instalación correspondiente al sistema operativo de tu servidor:

**Debian**
```
apt install mtr -y
```

**Ubuntu**
```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="windows" label="Servidor con Windows">

Conéctate a tu servidor vía **[Conexión a Escritorio Remoto](vserver-windows-userdp.md)**. Para instalar WinMTR en tu servidor, primero descarga la aplicación desde la web de ZAP-Hosting. Tras la descarga, extrae el archivo. Como resultado, obtendrás el archivo ejecutable `WinMTR.exe`.

| Aplicación | Descarga                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Crear informe

A continuación, se creará un informe usando la aplicación WinMTR/MTR. Esto se hará tanto para la **ruta de salida (Cliente → Servidor)** como para la **ruta de retorno (Servidor → Cliente)**.

:::warning Crear informe durante problemas activos 
El informe debe generarse cuando el problema esté ocurriendo activamente y sea perceptible. Solo en ese caso el informe proporcionará información útil que puede ayudar a diagnosticar y resolver el problema.
:::

### Ruta de salida (Cliente → Servidor)

Para analizar la ruta desde tu ordenador hasta el servidor, abre la aplicación WinMTR/MTR en tu ordenador y sigue los pasos que se indican a continuación.

<Tabs>
<TabItem value="windows" label="Windows" default>

La aplicación WinMTR se puede iniciar haciendo doble clic en el archivo `WinMTR.exe`. En el campo `Host`, introduce la dirección IP o el nombre de host del servidor. Luego, inicia el informe. Deja que la aplicación funcione durante al menos **un minuto** para recopilar suficientes datos. Una vez tengas datos suficientes, detén el análisis y guarda el resultado haciendo clic en `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

La aplicación MTR puede usarse en tu ordenador abriendo la terminal y ejecutando el siguiente comando:

```
mtr <dirección-ip-de-tu-servidor>
```

Deja que la aplicación funcione durante al menos **un minuto** para recopilar suficientes datos. Una vez tengas datos suficientes, detén el análisis y guarda el resultado.

</TabItem>

<TabItem value="macos" label="MacOS">

La aplicación MTR puede usarse en tu ordenador abriendo la terminal y ejecutando el siguiente comando:

```
mtr <dirección-ip-de-tu-cliente>
```

Deja que la aplicación funcione durante al menos **un minuto** para recopilar suficientes datos. Una vez tengas datos suficientes, detén el análisis y guarda el resultado.

</TabItem>
</Tabs>

### Ruta de retorno (Servidor → Cliente)

Para analizar la ruta desde el servidor hasta tu ordenador, conéctate a tu servidor y sigue los pasos que se indican a continuación.

<Tabs>
<TabItem value="linux" label="Servidor con Linux" default>

La aplicación MTR puede usarse en tu servidor ejecutando el siguiente comando en la terminal SSH:
```
mtr <dirección-ip-de-tu-cliente>
```

Deja que la aplicación funcione durante al menos **un minuto** para recopilar suficientes datos. Una vez tengas datos suficientes, detén el análisis y guarda el resultado.

:::info
¿No sabes tu dirección IP o no sabes cómo encontrarla? Hay varios métodos para determinar tu dirección IP. La forma más rápida es a través de un servicio online como WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Servidor con Windows">

En el campo `Host`, introduce la dirección IP de tu conexión. Luego, inicia el informe. Deja que la aplicación funcione durante al menos **un minuto** para recopilar suficientes datos. Una vez tengas datos suficientes, detén el análisis y guarda el resultado haciendo clic en `Export TEXT`.

:::info
¿No sabes tu dirección IP o no sabes cómo encontrarla? Hay varios métodos para determinar tu dirección IP. La forma más rápida es a través de un servicio online como **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Evaluar informe

Al evaluar los resultados, hay varios puntos clave que debes tener en cuenta. La siguiente sección explicará estos puntos con más detalle y aclarará su importancia para el análisis. Prestar atención a estos aspectos es crucial para hacer un diagnóstico preciso e identificar posibles causas de forma efectiva.

### Pérdida de paquetes

Si ves pérdida de paquetes en los resultados, esto indica posibles problemas de red. Una pérdida temporal menor del 1-2% puede no ser problemática, pero valores más altos sugieren problemas más serios. La pérdida de paquetes puede causar retrasos o interrupciones en las conexiones de los servicios. Si la pérdida está distribuida uniformemente en todos los saltos, el problema podría estar en tu propia red o en el lado del servidor. Sin embargo, si la pérdida ocurre solo en un salto o área específica, el problema probablemente esté en ese nodo o en la conexión hacia el siguiente. También es importante saber que pequeñas pérdidas en los primeros saltos, que pertenecen a tu red local, no son necesariamente críticas, ya que estos dispositivos suelen priorizar menos las solicitudes ICMP (como ping) y pueden descartarlas.

### Latencia (tiempos de ping)

Los valores de latencia (`Avg`, `Best`, `Worst`) te dan una idea de la velocidad y estabilidad de la conexión. Si notas que la latencia se mantiene consistentemente alta en un salto en particular, esto podría indicar congestión de red o un router lento. Un aumento repentino de latencia entre dos saltos apunta a un posible cuello de botella. Normalmente, la latencia aumenta gradualmente a lo largo de la ruta hacia el destino. Sin embargo, debes estar atento a picos repentinos y significativos, que suelen ser señal de un problema. Comparar las rutas de salida y retorno también puede ayudar a identificar problemas asimétricos, que indican que el tráfico en una dirección está teniendo dificultades.

Con un análisis cuidadoso de estos factores, puedes determinar con precisión dónde está el problema de red—ya sea en tu propia red, con el proveedor de internet o en algún punto del camino hacia el servidor.

### Ejemplos de diagnóstico

Para mejorar tu comprensión, aclaremos la información anterior con algunos ejemplos de diagnóstico. Hemos recopilado varios escenarios que ilustran diferentes situaciones y posibles causas. Estos ejemplos te ayudarán a entender cómo interpretar los datos y diagnosticar problemas de red de forma más efectiva.

:::info
Los siguientes ejemplos de diagnóstico ilustran varios escenarios basados en informes ficticios de WinMTR/MTR. Las direcciones IP, nombres de host y rutas contenidas son completamente ficticios y no tienen conexión con redes o hosts reales.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Ejemplo 1" default>

**Ejemplo:** Pérdida de paquetes en el cliente

**Descripción**

En este ejemplo, la situación describe pérdida de paquetes que ocurre en el lado del cliente, visible tanto en la ruta de salida como en la de retorno.

**Ruta de salida (Cliente → Servidor)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Ruta de retorno (Servidor → Cliente)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Evaluación**

La evaluación revela que la pérdida de paquetes ocurre en el lado del cliente. Ambas rutas muestran pérdidas en los primeros saltos (Salto 1 y 2), indicando un problema en el lado del cliente, ya sea en la red local o con el router.

</TabItem>

<TabItem value="mtrResultsExample2" label="Ejemplo 2">

**Ejemplo:** Pérdida de paquetes en el servidor

**Descripción**

En este ejemplo, la situación describe pérdida de paquetes que ocurre en el lado del servidor, visible tanto en la ruta de salida como en la de retorno.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Destination-IP (Servidor)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```

**Ruta de retorno (Servidor → Cliente)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```

**Evaluación**

La evaluación indica que la pérdida de paquetes ocurre en el lado del servidor. Ambas rutas muestran pérdidas en los últimos saltos (Salto 7 y 8), señalando un problema en el servidor.

</TabItem>

<TabItem value="mtrResultsExample3" label="Ejemplo 3">

**Ejemplo:** Problemas de latencia en el cliente

**Descripción**

En este ejemplo, la situación describe tiempos de latencia altos en el lado del cliente, visibles tanto en la ruta de salida como en la de retorno.

**Ruta de salida (Cliente → Servidor)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Ruta de retorno (Servidor → Cliente)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Evaluación**

La evaluación muestra que hay alta latencia en el lado del cliente. Ambas rutas presentan latencia elevada en los primeros saltos (Salto 1 y 2), indicando un problema en el cliente.

</TabItem>

<TabItem value="mtrResultsExample4" label="Ejemplo 4">

**Ejemplo:** Problemas de latencia en el servidor

**Descripción**

En este ejemplo, la situación describe tiempos de latencia altos que ocurren en el lado del servidor, visibles tanto en la ruta de salida como en la de retorno.

**Ruta de salida (Cliente → Servidor)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Destination-IP (Servidor)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Ruta de retorno (Servidor → Cliente)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Evaluación**

La evaluación muestra que hay alta latencia en el lado del servidor. Ambas rutas presentan latencia elevada en los últimos saltos (Salto 7 y 8), indicando un problema en el servidor.

</TabItem>

<TabItem value="mtrResultsExample5" label="Ejemplo 5">

**Ejemplo:** Problema de enrutamiento (Enrutamiento ISP)

**Descripción**

En este ejemplo, la situación describe cómo la ruta desde el Cliente X al servidor funciona sin problemas, mientras que hay problemas de enrutamiento desde el Cliente Y al servidor, lo que provoca pérdida de paquetes. Esto indica un problema con el enrutamiento del proveedor de internet (ISP).

**Ruta de salida (Cliente X → Servidor)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Ruta de salida (Cliente Y → Servidor)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Ruta de retorno (Servidor → Cliente X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Ruta de retorno (Servidor → Cliente Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Evaluación**

La evaluación muestra que hay un problema de enrutamiento con el ISP. Mientras que la ruta desde el Cliente X al servidor es estable, la ruta desde el Cliente Y presenta problemas significativos, resultando en pérdida de paquetes y alta latencia.

</TabItem>

<TabItem value="mtrResultsExample6" label="Ejemplo 6">

**Ejemplo:** Pérdida de paquetes solo en la ruta de salida (Cliente → Servidor)

**Descripción**

En este ejemplo, la pérdida de paquetes ocurre solo en la ruta de salida (del cliente al servidor), mientras que la ruta de retorno (del servidor al cliente) no muestra pérdidas. Esto podría indicar un problema en un segmento de red hacia el servidor, posiblemente causado por routers defectuosos, congestión o una mala conexión en el camino.

**Ruta de salida (Cliente → Servidor)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Servidor)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Ruta de retorno (Servidor → Cliente)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluación**

La evaluación muestra que la pérdida de paquetes ocurre exclusivamente en la ruta de salida. Las pérdidas son visibles en los saltos 4, 5 y 6, indicando un problema en el camino desde el cliente al servidor, como congestión o dispositivos de red defectuosos en un segmento de la ruta. En la ruta de retorno, sin embargo, no hay pérdidas, lo que significa que la conexión en la dirección opuesta es estable.

</TabItem>

<TabItem value="mtrResultsExample7" label="Ejemplo 7">

**Ejemplo:** Pérdida de paquetes solo en la ruta de retorno (Servidor → Cliente)

**Descripción**

En este ejemplo, la pérdida de paquetes ocurre solo en la ruta de retorno (del servidor al cliente), mientras que la ruta de salida (del cliente al servidor) no muestra pérdidas. Esto podría indicar un problema en un segmento de red en el camino de retorno.

**Ruta de salida (Cliente → Servidor)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Servidor)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Ruta de retorno (Servidor → Cliente)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Servidor)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluación**

La evaluación muestra que la pérdida de paquetes ocurre solo en la ruta de retorno. Las pérdidas son visibles en los saltos 4, 5 y 6 de la ruta de retorno, indicando un problema en el camino desde el servidor al cliente.

</TabItem>

</Tabs>

## Reportar problemas

Aunque ZAP-Hosting monitoriza continuamente la red, es importante contactar con nuestro equipo de soporte rápidamente en caso de problemas de red. Para asegurar un diagnóstico preciso y una resolución rápida, te pedimos que nos proporciones los resultados de tus informes WinMTR/MTR tanto para la ruta de salida como para la de retorno. Esta información nos ayuda a identificar con exactitud las posibles áreas problemáticas y resolver el problema rápido.