---
id: dedicated-network-analysis-winmtr
title: "Servidor Dedicado: Identificando problemas de rede com WinMTR/MTR"
description: "Descubra como diagnosticar problemas de rede analisando rotas de saída e retorno para identificar latência e perda de pacotes de forma eficaz → Saiba mais agora"
sidebar_label: Problemas de rede
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Problemas de rede podem ser bem chatos e, claro, não deveriam fazer parte do dia a dia. Mas quando acontecem, é importante identificar a causa rápido e de forma eficiente para resolver o problema. Informações detalhadas sobre problemas de rede podem ser analisadas de forma eficaz usando o aplicativo **WinMTR (Windows)** ou **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR é uma ferramenta de diagnóstico de rede que combina as funções de Ping e Traceroute. Ela permite uma análise detalhada tanto da **rota de saída (Cliente → Servidor)** quanto da **rota de retorno (Servidor → Cliente)**, rastreando o caminho dos pacotes de dados em ambas as direções. Durante esse processo, captura informações importantes como latência e perda de pacotes, que são cruciais para diagnosticar e resolver problemas de rede com precisão.

**Rota de saída (Cliente → Servidor)**: Um relatório para a **rota de saída** é útil quando surgem problemas como quedas de conexão, conexões lentas ou dificuldades para estabelecer conexão. Essa análise ajuda a identificar possíveis problemas no caminho do cliente até o servidor, como congestionamento de rede, perda de pacotes ou roteamento incorreto.

**Rota de retorno (Servidor → Cliente)**: Um relatório para a **rota de retorno** só faz sentido depois que uma conexão estável e funcional na rota de saída foi confirmada. Ou seja, o relatório da rota de retorno é especialmente relevante quando a rota de saída não apresenta problemas, mas ainda assim há lentidão nas respostas do servidor, atrasos no carregamento ou transmissões de dados incompletas.

Resumindo, se ocorrerem problemas de rede perceptíveis, a **rota de saída (Cliente → Servidor)** deve ser analisada primeiro. Se o relatório da rota de saída não mostrar anomalias e os problemas persistirem, é necessário verificar a **rota de retorno (Servidor → Cliente)** para identificar possíveis problemas assimétricos. Problemas assimétricos de rede podem acontecer quando os pacotes são transmitidos sem problemas em uma direção, mas há atrasos ou perda de pacotes na direção oposta.

## Instalação

Agora que ficou claro quando os relatórios para as rotas de entrada e saída são úteis, vamos para a instalação tanto no cliente quanto no servidor.

### Cliente

Para a rota de saída, o aplicativo deve ser instalado no cliente (**seu computador**). Os passos a seguir explicam como instalar o aplicativo para o seu sistema operacional.

<Tabs>
<TabItem value="windows" label="Windows" default>

Se você usa um computador com sistema operacional Windows, a análise de rede é feita pelo aplicativo WinMTR. Para instalar o WinMTR no seu computador, primeiro baixe o aplicativo no site da ZAP-Hosting. Depois de baixar, extraia o arquivo. Você terá o executável `WinMTR.exe`.

| Aplicativo | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Se você usa um computador com sistema operacional Linux, a análise de rede é feita pelo aplicativo MTR. Para instalar o MTR no seu sistema, abra o terminal e execute o comando de instalação adequado para sua distribuição:

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

Se você usa um computador com sistema operacional Mac OS, a análise de rede é feita pelo aplicativo MTR. Porém, o MTR não vem pré-instalado no Mac OS e também não está disponível na Apple Store. Para instalar o MTR, você precisa instalar o Homebrew como gerenciador de pacotes no seu computador.

**Instalando o Homebrew**

Abra o terminal no seu computador e execute o seguinte comando para instalar o Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Instalando o MTR**

Siga os passos exibidos para concluir a instalação. Depois que o Homebrew estiver instalado com sucesso, você pode usá-lo para instalar o MTR com o comando:

```
brew install mtr
```

</TabItem>
</Tabs>


### Servidor
Para a rota de retorno, o aplicativo deve ser instalado no servidor. Os passos a seguir explicam como instalar o aplicativo para o sistema operacional do seu servidor.

<Tabs>

<TabItem value="linux" label="Servidor rodando Linux" default>

Conecte-se ao seu servidor via **[SSH](vserver-linux-ssh.md)**. Para instalar o MTR no seu sistema, execute o comando de instalação adequado para o sistema operacional do seu servidor:

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

<TabItem value="windows" label="Servidor rodando Windows">

Conecte-se ao seu servidor via **[Conexão de Área de Trabalho Remota](vserver-windows-userdp.md)**. Para instalar o WinMTR no seu servidor, primeiro baixe o aplicativo no site da ZAP-Hosting. Depois de baixar, extraia o arquivo. Você terá o executável `WinMTR.exe`.

| Aplicativo | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Criar Relatório

A seguir, será criado um relatório usando o aplicativo WinMTR/MTR. Isso será feito tanto para a **rota de saída (Cliente → Servidor)** quanto para a **rota de retorno (Servidor → Cliente)**.

:::warning Crie o relatório durante o problema ativo 
O relatório deve ser gerado enquanto o problema estiver ativo e perceptível. Só assim ele fornecerá informações úteis que ajudarão no diagnóstico e na resolução do problema.
:::

### Rota de saída (Cliente → Servidor)

Para analisar a rota do seu computador até o servidor, abra o aplicativo WinMTR/MTR no seu computador e siga os passos abaixo.

<Tabs>
<TabItem value="windows" label="Windows" default>

O WinMTR pode ser iniciado dando um duplo clique no arquivo `WinMTR.exe`. No campo `Host`, digite o endereço IP ou nome do host do servidor. Depois, inicie o relatório. Deixe o aplicativo rodando por pelo menos **um minuto** para coletar dados suficientes. Quando tiver dados suficientes, pare a análise e salve o resultado clicando em `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

No Linux, abra o terminal e execute o comando:

```
mtr <endereço-ip-do-seu-servidor>
```

Deixe o aplicativo rodando por pelo menos **um minuto** para coletar dados suficientes. Quando tiver dados suficientes, pare a análise e salve o resultado.

</TabItem>

<TabItem value="macos" label="MacOS">

No MacOS, abra o terminal e execute o comando:

```
mtr <endereço-ip-do-seu-servidor>
```

Deixe o aplicativo rodando por pelo menos **um minuto** para coletar dados suficientes. Quando tiver dados suficientes, pare a análise e salve o resultado.

</TabItem>
</Tabs>

### Rota de retorno (Servidor → Cliente)

Para analisar a rota do servidor até o seu computador, conecte-se ao seu servidor e siga os passos abaixo.

<Tabs>
<TabItem value="linux" label="Servidor rodando Linux" default>

No servidor Linux, execute o comando no terminal SSH:

```
mtr <endereço-ip-do-seu-cliente>
```

Deixe o aplicativo rodando por pelo menos **um minuto** para coletar dados suficientes. Quando tiver dados suficientes, pare a análise e salve o resultado.

:::info
Não sabe seu endereço IP ou não tem certeza de como encontrá-lo? Existem várias formas de descobrir seu IP. A maneira mais rápida é usar um serviço online como WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Servidor rodando Windows">

No campo `Host`, digite o endereço IP da sua conexão. Depois, inicie o relatório. Deixe o aplicativo rodando por pelo menos **um minuto** para coletar dados suficientes. Quando tiver dados suficientes, pare a análise e salve o resultado clicando em `Export TEXT`.

:::info
Não sabe seu endereço IP ou não tem certeza de como encontrá-lo? Existem várias formas de descobrir seu IP. A maneira mais rápida é usar um serviço online como **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Avaliar relatório

Ao avaliar os resultados, há alguns pontos-chave que você deve ficar de olho. A seção a seguir explica esses pontos com mais detalhes e esclarece sua importância para a análise. Prestar atenção a esses aspectos é essencial para um diagnóstico preciso e para identificar as causas potenciais de forma eficaz.

### Perda de pacotes

Se você notar perda de pacotes nos resultados, isso indica possíveis problemas de rede. Uma perda temporária pequena de 1-2% pode não ser problemática, mas valores maiores indicam problemas mais sérios. A perda de pacotes pode causar atrasos ou interrupções nas conexões dos serviços. Se a perda estiver distribuída uniformemente por todos os saltos, o problema pode estar na sua própria rede ou no servidor. Porém, se a perda ocorrer apenas em um salto ou área específica, o problema provavelmente está naquele nó ou na conexão para o próximo. Também é importante saber que pequenas perdas nos primeiros saltos, que pertencem à sua rede local, não são necessariamente críticas, pois esses dispositivos costumam priorizar menos as requisições ICMP (como ping) e podem descartá-las.

### Latência (tempos de ping)

Os valores de latência (`Avg`, `Best`, `Worst`) dão uma ideia da velocidade e estabilidade da conexão. Se você perceber que a latência permanece consistentemente alta em um salto específico, isso pode indicar congestionamento de rede ou um roteador lento. Um aumento repentino na latência entre dois saltos aponta para um possível gargalo. Normalmente, a latência aumenta gradualmente ao longo da rota até o destino. Mas fique atento a picos repentinos e significativos, que geralmente indicam um problema. Comparar as rotas de saída e retorno também pode ajudar a identificar problemas assimétricos, que indicam que o tráfego em uma direção está enfrentando dificuldades.

Com uma análise cuidadosa desses fatores, você pode determinar com precisão onde está o problema de rede — se na sua própria rede, no provedor de internet ou em algum ponto do caminho até o servidor.

### Exemplos de diagnóstico

Para facilitar o entendimento, vamos esclarecer as informações anteriores com alguns exemplos de diagnóstico. Reunimos alguns cenários que ilustram situações diferentes e possíveis causas. Esses exemplos ajudam a mostrar como interpretar os dados e diagnosticar problemas de rede de forma mais eficaz.

:::info
Os exemplos de diagnóstico a seguir ilustram vários cenários baseados em relatórios fictícios do WinMTR/MTR. Os endereços IP, nomes de host e rotas contidos são totalmente fictícios e não têm conexão com redes ou hosts reais.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Exemplo 1" default>

**Exemplo:** Perda de pacotes no Cliente

**Descrição**

Neste exemplo, a situação descreve perda de pacotes ocorrendo no lado do cliente, visível tanto na rota de saída quanto na de retorno.

**Rota de saída (Cliente → Servidor)**

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação revela que a perda de pacotes está ocorrendo no lado do cliente. Ambas as rotas mostram perdas nos primeiros saltos (Salto 1 e 2), indicando um problema no lado do cliente, seja na rede local ou no roteador.

</TabItem>

<TabItem value="mtrResultsExample2" label="Exemplo 2">

**Exemplo:** Perda de pacotes no servidor

**Descrição**

Neste exemplo, a situação descreve perda de pacotes ocorrendo no lado do servidor, visível tanto na rota de saída quanto na de retorno.

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação indica que a perda de pacotes está ocorrendo no lado do servidor. Ambas as rotas mostram perdas nos saltos finais (Salto 7 e 8), apontando para um problema no servidor.

</TabItem>

<TabItem value="mtrResultsExample3" label="Exemplo 3">

**Exemplo:** Problemas de latência no cliente

**Descrição**

Neste exemplo, a situação descreve tempos de latência altos no lado do cliente, perceptíveis tanto na rota de saída quanto na de retorno.

**Rota de saída (Cliente → Servidor)**

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação mostra que há alta latência no lado do cliente. Ambas as rotas apresentam latência aumentada nos primeiros saltos (Salto 1 e 2), indicando um problema no cliente.

</TabItem>

<TabItem value="mtrResultsExample4" label="Exemplo 4">

**Exemplo:** Problemas de latência no servidor

**Descrição**

Neste exemplo, a situação descreve tempos de latência altos ocorrendo no lado do servidor, perceptíveis tanto na rota de saída quanto na de retorno.

**Rota de saída (Cliente → Servidor)**

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação mostra que há alta latência no lado do servidor. Ambas as rotas apresentam latência aumentada nos saltos finais (Salto 7 e 8), indicando um problema no servidor.

</TabItem>

<TabItem value="mtrResultsExample5" label="Exemplo 5">

**Exemplo:** Problema de roteamento (Roteamento do ISP)

**Descrição**

Neste exemplo, a situação descreve como a rota do Cliente X até o servidor funciona sem problemas, enquanto há problemas de roteamento do Cliente Y até o servidor, causando perda de pacotes. Isso indica um problema no roteamento do provedor de internet (ISP).

**Rota de saída (Cliente X → Servidor)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Servidor)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Rota de saída (Cliente Y → Servidor)**

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

**Rota de retorno (Servidor → Cliente X)**

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

**Rota de retorno (Servidor → Cliente Y)**

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

**Avaliação**

A avaliação mostra que há um problema de roteamento com o ISP. Enquanto a rota do Cliente X até o servidor está estável, a rota do Cliente Y apresenta problemas significativos, resultando em perda de pacotes e alta latência.

</TabItem>

<TabItem value="mtrResultsExample6" label="Exemplo 6">

**Exemplo:** Perda de pacotes apenas na rota de saída (Cliente → Servidor)

**Descrição**

Neste exemplo, a perda de pacotes ocorre apenas na rota de saída (do cliente para o servidor), enquanto a rota de retorno (do servidor para o cliente) não apresenta perdas. Isso pode indicar um problema em um segmento da rede em direção ao servidor, possivelmente causado por roteadores defeituosos, congestionamento ou conexão ruim no caminho.

**Rota de saída (Cliente → Servidor)**

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação mostra que a perda de pacotes ocorre exclusivamente na rota de saída. As perdas aparecem nos saltos 4, 5 e 6, indicando um problema no caminho do cliente até o servidor, como congestionamento ou dispositivos de rede defeituosos em um segmento da rota. Na rota de retorno, não há perdas, o que significa que a conexão na direção oposta está estável.

</TabItem>

<TabItem value="mtrResultsExample7" label="Exemplo 7">

**Exemplo:** Perda de pacotes apenas na rota de retorno (Servidor → Cliente)

**Descrição**

Neste exemplo, a perda de pacotes ocorre apenas na rota de retorno (do servidor para o cliente), enquanto a rota de saída (do cliente para o servidor) não apresenta perdas. Isso pode indicar um problema em um segmento da rede no caminho de retorno.

**Rota de saída (Cliente → Servidor)**

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

**Rota de retorno (Servidor → Cliente)**

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

**Avaliação**

A avaliação mostra que a perda de pacotes ocorre apenas na rota de retorno. As perdas aparecem nos saltos 4, 5 e 6 da rota de retorno, indicando um problema no caminho do servidor até o cliente.

</TabItem>

</Tabs>

## Reportando problemas

Embora a ZAP-Hosting monitore a rede continuamente, é importante entrar em contato com nosso suporte rapidamente em caso de problemas de rede. Para garantir um diagnóstico preciso e uma resolução rápida, pedimos que você nos envie os resultados dos seus relatórios WinMTR/MTR tanto da rota de saída quanto da rota de retorno. Essas informações nos ajudam a identificar exatamente as áreas problemáticas e resolver o problema o quanto antes.