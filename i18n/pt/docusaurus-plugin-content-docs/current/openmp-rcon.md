---
id: openmp-rcon
title: "Open.mp: Servidor Usando RCON"
description: "Descubra como gerenciar servidores de jogos remotamente usando RCON para um controle eficiente e seguro → Saiba mais agora"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que é RCON?

RCON é uma interface presente em vários programas, como servidores de jogos, que permite manutenção e administração remota. Essa interface pode ser usada para gerenciar servidores que já estão rodando e acessíveis. O acesso à interface é feito por meio de um programa específico de manutenção remota, permitindo o gerenciamento do servidor.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Para usar o RCON, você precisa começar acessando a configuração do seu servidor e ativar essa funcionalidade. Você pode editar o arquivo de configuração tanto pelo webinterface do seu servidor quanto diretamente via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via Arquivo de Configuração no Webinterface

Recomendamos usar esse método, pois é o mais fácil.

:::note
O servidor deve estar parado antes de editar a configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Basta ir até a seção **Configs** no webinterface do seu servidor de jogos e clicar no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Um editor de texto será aberto permitindo que você edite o arquivo diretamente. No arquivo, procure pela seção `rcon`. Nela, defina o parâmetro `enable` como `true`, por exemplo: `"enable":true`. Recomendamos usar `CTRL+F` para abrir a busca do navegador e facilitar essa tarefa.

Na mesma seção, você também deve configurar uma senha para o acesso à interface RCON ajustando o parâmetro `password`. Isso evita acessos não autorizados e deve ser mantido em sigilo.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar a configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Outra forma de editar seu arquivo de configuração é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o conteúdo do arquivo diretamente, sugerimos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado.

Após conectar ao seu servidor via FTP, navegue até o seguinte diretório:
```
..g[zap_id]/gta-openmp/
```

Nesse caminho, encontre o arquivo `config.json` e abra-o. Esse é o arquivo de configuração do servidor que você deve editar.

No arquivo, procure pela seção `rcon`. Defina o parâmetro `enable` como `true` e configure uma senha para a interface RCON no parâmetro `password`.

</TabItem>
</Tabs>

:::info
Não esqueça de reiniciar seu servidor depois de ajustar as configurações.
:::

## Usando RCON

Agora que você ativou o RCON na configuração do seu servidor, poderá acessar a interface RCON do Open.mp pela porta definida no arquivo.

Você precisará usar um programa RCON para se conectar. Recomendamos o [RCON Console](https://sourceforge.net/projects/rconconsole/) pois é open-source.

No programa RCON que escolher, insira o endereço IP e a porta do seu servidor. Certifique-se de que seu servidor de jogos está online e rodando.

Se a conexão for bem-sucedida, você poderá enviar comandos para seu servidor Palworld através do programa RCON Console escolhido.

:::tip
Confira nosso [Comandos do Servidor](openmp-server-commands.md) para ver todos os comandos disponíveis que você pode executar via RCON.
:::

Você ativou o RCON com sucesso no seu servidor Palworld.

<InlineVoucher />