---
id: openmp-configuration
title: "Open.mp: Configuração do Servidor Open.mp"
description: "Descubra como personalizar as configurações do servidor Open.mp para otimizar sua experiência de jogo e o desempenho do servidor → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Open.mp vêm com uma variedade enorme de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros disponíveis atualmente e explicar cada um com mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O jeito mais fácil e amigável de editar as configurações básicas é indo na seção **Settings** do painel web do seu servidor de jogos e procurando as configurações certas por lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Lembre-se que nem todas as opções de configuração estarão acessíveis aqui. Se quiser configurar tudo, use a aba **WI Config File** para editar o arquivo necessário diretamente no webinterface.

</TabItem>

<TabItem value="configs" label="Via Arquivo de Configuração WI">

#### Via Arquivo de Configuração WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração. Editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Para quem quer editar o arquivo diretamente e todas as opções de configuração, você pode acessar isso indo na seção **Configs** do painel web do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Isso vai abrir um editor de texto direto no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
O servidor deve estar parado antes de editar o arquivo de configuração. Editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O último método para acessar o arquivo bruto é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no [guia de Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e se quiser editar o conteúdo do arquivo diretamente, recomendamos usar a seção **Configs** no painel web do seu servidor de jogos, como mencionado.

Depois de logar no seu cliente FTP, vá até o seguinte diretório, substituindo `[zap_id]` pelo seu próprio ID ZAP:
```
..g[zap_id]/gta-openmp/
```

Nesse caminho, encontre o arquivo `config.json` e abra-o. Esse é o arquivo de configuração do servidor que você deve editar.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

### Detalhes do Servidor

Essas são opções de configuração que ajustam as informações do seu servidor no navegador público de servidores. Você vai precisar encontrar essas opções no seu arquivo de configuração, o que pode ser feito facilmente usando `CTRL+F` no seu navegador ou editor para buscar.

| Nome do Parâmetro             | Exemplo                                | Descrição                                                                          |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| name                          | ZAP-Hosting Docs Test                  | Define o nome do host do seu servidor                                             |
| language                      | English                              | Idioma que aparecerá no navegador do servidor para seu servidor                   |
| website                      | zap-hosting.com/                     | Adicione um site que as pessoas possam visitar para saber mais sobre seu servidor  |
| discord.invite                | discord.gg/zaphosting                | Link do servidor Discord que aparece no navegador do servidor                     |
| banners.light                | zap-hosting.com/lighticon.png        | Define uma URL para o banner do tema claro que aparece no navegador do servidor   |
| banners.dark                 | zap-hosting.com/darkicon.png         | Define uma URL para o banner do tema escuro que aparece no navegador do servidor  |
| game.map                     | ZAPtastic Stunt Map                   | Nome do mapa que deve aparecer no navegador do servidor                           |
| game.mode                    | Survival                            | Modo de jogo que deve aparecer no navegador do servidor                           |
| announce                     | true                                | Ativa ou desativa se seu servidor deve aparecer no navegador público de servidores|
| enable_query                 | true                                | Ativa ou desativa se as informações do seu servidor devem aparecer no navegador   |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que seu servidor iniciar, ele usará as configurações que você definiu.

### Configurações Principais do Servidor

Essas são opções mais importantes que ajustam a funcionalidade do seu servidor. Você vai precisar encontrar essas opções no seu arquivo de configuração, o que pode ser feito facilmente usando `CTRL+F` no seu navegador ou editor para buscar.

| Nome do Parâmetro             | Exemplo                                | Descrição                                                                                   |
| ----------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------- | 
| max_players                  | 50 (padrão)                          | Define o número máximo de jogadores que o servidor pode suportar ao mesmo tempo             |
| max_bots                     | 0 (padrão)                           | Define o número máximo de NPCs que o servidor pode suportar. Isso conta para o total de jogadores |
| password                     | iLoveZAP!2024                       | Define uma senha que os jogadores devem usar para conectar ao servidor                      |
| rcon.enable                  | true                                | Ativa ou desativa o recurso RCON                                                          |
| rcon.password                | ZAP-IS-AWESOME                     | Define uma senha que deve ser usada para acessar o RCON pelos clientes                     |
| logging.enable               | true                                | Ativa ou desativa o registro de logs                                                      |
| logging.file                 | log.txt                             | Caminho e nome do arquivo para ser usado no registro, se ativado                           |
| logging.log_chat             | true                                | Ativa ou desativa se o chat dos jogadores deve aparecer no console do servidor            |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que seu servidor iniciar, ele usará as configurações que você definiu.

## Configurações de Gameplay & Rede

Open.mp tem uma variedade enorme de opções de gameplay e rede que permitem ajustar seu servidor de forma bem detalhada. Aqui vamos resumir algumas das mais importantes. Você vai precisar encontrar essas opções no seu arquivo de configuração, o que pode ser feito facilmente usando `CTRL+F` no seu navegador ou editor para buscar.

Se quiser ajustar todas as configurações, recomendamos ler o [guia do config.json do open.mp](https://www.open.mp/docs/server/config.json) que apresenta todas as opções de configuração disponíveis atualmente.

:::tip
Não recomendamos mudar as configurações de Porta ou IP, pois elas são configuradas automaticamente pelo servidor de jogos. Alterar os valores de IP/Porta pode quebrar seu servidor de jogos!
:::

| Nome do Parâmetro             | Descrição                                                                                  | 
| ----------------------------- | ------------------------------------------------------------------------------------------ | 
| game.use_chat_radius         | Ativa ou desativa o raio do chat                                                          |
| game.chat_radius             | Define uma limitação de raio para o chat                                                  |
| game.time                    | Define o horário global que o servidor usa                                                |
| game.use_nametags            | Ativa ou desativa a exibição de tags de nome, barras de vida e de armadura acima dos jogadores |
| game.use_vehicle_friendly_fire | Ativa o fogo amigo para veículos de equipe                                               |
| game.vehicle_respawn_time    | Tempo de respawn dos veículos em milissegundos                                           |
| game.weather                 | Clima global que o servidor usa                                                          |
| network.bind                 | Endereço IP que o servidor deve usar (recomendamos não mudar para servidores de jogos)    |
| network.port                 | Porta que o servidor deve usar (novamente, recomendamos não mudar para servidores de jogos)|
| network.messages_limit       | Número máximo de mensagens que um usuário pode enviar por segundo                         |
| network.player_timeout       | Tempo em milissegundos após o qual um jogador será desconectado por timeout sem dados enviados ao servidor |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que seu servidor iniciar, ele usará as configurações que você definiu.

<InlineVoucher />