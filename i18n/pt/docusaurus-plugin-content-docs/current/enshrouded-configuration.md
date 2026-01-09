---
id: enshrouded-configuration
title: "Enshrouded: Configuração do Servidor Enshrouded"
description: "Descubra como personalizar as configurações do servidor Enshrouded para uma jogabilidade e gerenciamento de servidor ideais → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No lançamento, Enshrouded já traz alguns parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Configure seu Servidor Enshrouded em apenas 60 segundos!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais maneira possível!"/>

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você vai precisar acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O jeito mais fácil é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as opções certas por lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor precisa estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor vai desfazer qualquer alteração.
:::

Alternativamente, para quem quer editar o arquivo cru diretamente, você pode acessar isso indo na seção **Configs** no webinterface do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Isso vai abrir um editor de texto direto no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
O servidor precisa estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor vai desfazer qualquer alteração.
:::

O último método para acessar o arquivo cru é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o conteúdo do arquivo diretamente, recomendamos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

Essas são as opções de configuração do servidor atualmente disponíveis fornecidas pelo jogo para personalizar seu servidor, principalmente o nome do servidor, senha e algumas configurações internas.

:::tip
Não recomendamos alterar as configurações de Porta, IP ou Diretório, pois elas são configuradas automaticamente pelo servidor de jogos. Mudar esses valores pode quebrar seu servidor!
:::

| Nome do Parâmetro | Exemplo                                 | Descrição                                                  |
| ----------------- | --------------------------------------- | ---------------------------------------------------------- | 
| name              | ZAP-Hosting Docs Test                   | O nome do seu servidor                                     |
| password          | iLoveZAP!2024                           | Proteja o servidor com uma senha (privado)                |
| saveDirectory     | ./savegame (padrão)                     | Define o diretório onde seus saves serão armazenados      |
| logDirectory      | ./logs (padrão)                         | Define o diretório onde seus logs serão armazenados       |
| ip                | 123.123.123.123                        | IP público onde o servidor roda                            |
| gamePort          | 15636 (padrão)                         | Porta pública onde o servidor roda                         |
| queryPort         | 15637 (padrão)                         | Porta pública para acessar o servidor                      |
| slotCount         | 4                                      | Número máximo de jogadores que podem entrar no servidor (máx 16) |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que o servidor iniciar, ele vai usar as configurações que você definiu.

<InlineVoucher />