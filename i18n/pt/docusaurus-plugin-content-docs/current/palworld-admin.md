---
id: palworld-admin
title: "Palworld: Configurar Admin"
description: "Descubra como proteger seu servidor Palworld com uma senha de admin e gerenciar jogadores confiáveis de forma eficaz → Saiba mais agora"
sidebar_label: Configurar Admin
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


##Introdução
Neste guia, vamos mostrar como configurar seu servidor com uma senha de admin e se adicionar como admin dentro do jogo. Essa senha pode ser compartilhada com jogadores confiáveis para liberar vários comandos de admin. Você pode aprender mais sobre esses comandos no nosso [Guia de Comandos do Servidor](palworld-server-commands.md).
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Configure seu servidor Palworld em apenas UM MINUTO!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja porque está com pressa ou só quer absorver a informação do jeito mais legal possível!"/>

<InlineVoucher />

## Configurando sua senha de Admin

Primeiro, você precisa acessar as configurações do seu servidor. Existem algumas formas de fazer isso, listamos todas abaixo com instruções para definir a senha. Recomendamos usar a opção **Webinterface**, pois é a mais fácil de usar. Depois de definir sua senha de admin, pode seguir para a próxima seção.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método mais fácil é acessar a seção **Settings** no webinterface do seu servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Na área de **Settings**, procure a opção **Game server password**. Nesse campo, crie a senha que deseja usar e digite ela.

![](https://github.com/zaphosting/docs/assets/42719082/dadbd22b-2fd9-42e1-be71-f6d28a3f2938)

:::info
Depois de escolher a senha, role a página para cima e clique no botão verde **Save** para confirmar a escolha.

![](https://github.com/zaphosting/docs/assets/42719082/5a4f5ab1-8079-4b20-96a6-36e4aca2e28e)
:::

</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração, editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Alternativamente, para quem prefere editar o arquivo diretamente, você pode acessar a seção **Configs** no webinterface do seu servidor de jogos e clicar no botão azul de editar arquivo, como mostrado abaixo:

![](https://github.com/zaphosting/docs/assets/42719082/53c8acad-7347-4c3e-85bf-5ae0ad423fc6)

Isso abrirá um editor de texto no site para você editar. Encontre a opção **AdminPassword** dentro do arquivo (use `CTRL+F` para facilitar a busca) e altere para a senha de admin que deseja definir. Por fim, salve o arquivo e então pode iniciar seu servidor.

![](https://github.com/zaphosting/docs/assets/42719082/d86376b8-1a41-4fb0-b8cd-8570ddcaa9ae)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar o arquivo de configuração, editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O último método para acessar o arquivo diretamente é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no nosso [Guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o arquivo diretamente, recomendamos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado antes.

</TabItem>
</Tabs>

## Se adicionando como admin

Depois de definir sua senha de admin, você precisa se adicionar como admin. Abra o Palworld e conecte-se ao seu servidor. Se precisar de ajuda para isso, confira nosso [Guia de Conexão ao Servidor](palworld-connect.md).

Dentro do jogo, abra o chat apertando `Enter`. Depois, digite o comando abaixo, substituindo `[password]` pela senha de admin que você definiu:

```
/AdminPassword [password]
```

![](https://github.com/zaphosting/docs/assets/42719082/2f6e3ee7-e83f-4b71-87dc-d36f9b8c7340)

Você deve receber uma mensagem de sucesso no chat se tudo estiver correto. Se aparecer um erro, confira se a senha de admin que você digitou está correta e é a mesma que definiu no passo anterior.

<InlineVoucher />