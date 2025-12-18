---
id: moe-configuration
title: "Myth of Empires: Configuração do Servidor"
description: "Descubra como personalizar seu servidor Myth of Empires para uma jogabilidade e controle ideais → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Myth of Empires oferece uma ampla variedade de opções de configuração que permitem personalizar seu servidor do jeito que você quiser. Neste guia, vamos explorar alguns dos parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Configure seu servidor Myth Of Empires em apenas UM MINUTO!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja porque está com pressa ou porque curte aprender da forma mais divertida possível!"/>

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

:::tip
Recomendamos muito usar o método **Webinterface**, porque o MOE tem uma quantidade significativa de opções e arquivos de configuração, o que significa que configurar direto pelo arquivo pode levar muito mais tempo do que editar os valores direto pelo webinterface.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método mais amigável é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as configurações apropriadas lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Você poderá ver várias seções e configurações onde pode editar os valores diretamente.

</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Alternativamente, para quem quer editar diretamente os arquivos de configuração brutos, você pode acessá-los indo até a seção **Configs** no webinterface do seu servidor de jogos. Para editar um arquivo de configuração, basta clicar no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Isso abrirá um editor de texto diretamente no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O último método para acessar o arquivo bruto é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no guia [Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o conteúdo do arquivo diretamente, recomendamos usar a seção **Configurações** no webinterface do seu servidor de jogos, como mencionado.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

Aqui selecionamos algumas das opções principais e importantes de configuração do servidor que você provavelmente vai querer mudar, incluindo algumas configurações internas.

:::tip
Não recomendamos alterar as configurações de Porta, IP ou Diretório, pois elas são configuradas automaticamente pelo servidor de jogos. Mudar esses valores pode quebrar seu servidor!
:::

| Nome do Parâmetro | Exemplo                               | Descrição                                                  |
| ----------------- | ------------------------------------- | ---------------------------------------------------------- | 
| name              | ZAP-Hosting Docs Test                 | O nome do seu servidor                                     |
| password          | iLoveZAP!2024                        | Proteja o servidor com uma senha (privado)                |
| description       | Este é um servidor irado!             | Adicione uma descrição para seu servidor                   |
| gamemode          | PVE / PVP                           | Defina o modo de jogo do seu servidor                      |
| mapname           | Central Island                      | Defina o mapa do seu servidor                              |
| difficulty        | 1                                   | Dificuldade do seu mundo                                   |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que ele iniciar, usará as configurações que você definiu.

<InlineVoucher />