---
id: foundry-configuration
title: "Foundry: Configuração do Servidor"
description: "Descubra como personalizar as configurações do servidor Foundry para uma jogabilidade e gerenciamento de servidor ideais → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Foundry vêm com uma variedade de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um em mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisará acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método mais amigável é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as configurações apropriadas lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Alternativamente, para quem quiser editar diretamente o arquivo bruto, você pode acessar isso indo até a seção **Configs** no webinterface do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Isso abrirá um editor de texto diretamente no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O último método para acessar o arquivo bruto é via FTP. Se você não está familiarizado com o uso de FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar diretamente o conteúdo do arquivo, recomendamos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

Na tabela abaixo, apresentamos opções importantes de configuração do servidor que estão disponíveis atualmente em servidores Foundry.

:::tip
Não recomendamos alterar as configurações de Porta, pois elas são configuradas automaticamente pelo servidor de jogos. Alterar os valores da Porta pode quebrar seu servidor de jogos!
:::

### Configurações Importantes do Servidor

| Nome do Parâmetro   | Exemplo                   | Descrição                                                                          |
| ------------------- | ------------------------- | ---------------------------------------------------------------------------------- | 
| server_world_name   | ZAPDocsTest               | Define o nome do mundo, que também é a pasta onde os arquivos salvos serão guardados |
| server_name         | ZAP-Hosting Docs Test     | Nome que aparece na lista de servidores para o seu servidor                        |
| server_password     | iLoveZAP!2024             | Define uma senha necessária para entrar no servidor                               |
| server_is_public    | true/false                | Alterna se o servidor aparece no navegador de servidores                           |
| server_port         | 3724 (padrão)             | Define a porta de rede usada pelo jogo                                            |
| server_query_port   | 27015 (padrão)            | Define a porta de consulta usada para retornar informações sobre o servidor na lista |
| server_max_players  | 32                        | Define o número máximo de jogadores que podem estar no servidor ao mesmo tempo     |

### Configurações de Jogabilidade

| Nome do Parâmetro       | Exemplo     | Descrição                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Alterna se o servidor deve continuar funcionando sem nenhum jogador online       |
| map_seed                | 42938743982 | Define uma seed personalizada para a geração do mundo                           |
| autosave_interval       | 300         | Define com que frequência o servidor salva, em segundos                         |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que seu servidor iniciar, ele usará as configurações que você definiu.

<InlineVoucher />