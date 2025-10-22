---
id: soulmask-configuration
title: "Soulmask: Configuração do Servidor"
description: "Descubra como personalizar as configurações do servidor Soulmask e otimizar as configurações de gameplay para uma experiência de jogo sob medida → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os servidores Soulmask vêm com uma ampla variedade de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seus arquivos de configuração para editar qualquer parâmetro. Você pode ajustar as configurações do seu servidor via webinterface e as configurações de gameplay via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método principal para acessar as opções de configuração do seu servidor é indo até a seção **Configurações** no webinterface do seu servidor de jogos e procurando as configurações apropriadas lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar a configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O método principal para acessar o arquivo de configuração de gameplay é via FTP. Se você não está familiarizado com o uso de FTP, recomendamos dar uma olhada no guia [Acesso via FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Opções de Configuração do Servidor
Nas seções a seguir, vamos mostrar como acessar as opções de configuração e explorar algumas das opções disponíveis tanto para configurações do servidor quanto de gameplay.

### Configurações Importantes do Servidor

Atualmente, a única forma de ajustar as configurações do servidor é através da seção **Configurações** no webinterface do seu servidor de jogos. Nessa seção, você poderá ajustar o seguinte:

| Nome do Parâmetro    | Exemplo               | Descrição                                              |
| -------------------- | --------------------- | ------------------------------------------------------ | 
| Nome do Servidor     | ZAP-Hosting Docs Test | Defina o nome do seu servidor                          |
| Senha do servidor    | iLoveZAP!2024         | Defina uma senha para seu servidor, ou deixe vazio para nenhuma |
| Senha de Admin       | iLoveZAP!2024         | Defina uma senha para acesso de Admin                  |
| Modo de Jogo         | PVE/PVP               | Selecione se quer que seu jogo seja PVE ou PVP         |

Quando terminar, não esqueça de usar o botão de salvar no final da seção e reiniciar seu servidor.

### Configurações de Gameplay

No momento, a única forma de acessar o arquivo de configuração é via FTP. Certifique-se de parar seu servidor antes de editar o arquivo, caso contrário as alterações provavelmente serão desfeitas.

Vá até o seguinte caminho e abra o arquivo **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Esse arquivo contém uma quantidade significativa de opções de configuração de gameplay que você pode ajustar do seu jeito.

Depois de fazer suas alterações, salve o arquivo e reinicie seu servidor. Na próxima vez que seu servidor iniciar, ele usará as configurações que você definiu.

<InlineVoucher />