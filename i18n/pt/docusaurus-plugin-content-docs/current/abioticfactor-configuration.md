---
id: abioticfactor-configuration
title: "Abiotic Factor: Configuração do Servidor"
description: "Descubra como personalizar as configurações do servidor Abiotic Factor para otimizar sua experiência de jogo e o desempenho do servidor → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os servidores de Abiotic Factor vêm com uma ampla variedade de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método mais fácil é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as configurações apropriadas lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Alternativamente, para quem quer editar o arquivo bruto diretamente, você pode acessar isso indo até a seção **Configs** no webinterface do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Isso abrirá um editor de texto direto no site para você editar.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

O último método para acessar o arquivo bruto é via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no guia [Acesso via FTP](gameserver-ftpaccess.md). Porém, esse método é mais demorado e, se quiser editar o conteúdo do arquivo diretamente, recomendamos usar a seção **Configs** no webinterface do seu servidor de jogos, como mencionado.

</TabItem>
</Tabs>

## Opções de Configuração do Servidor

Nas seções abaixo, apresentamos tabelas com informações sobre uma ampla variedade de opções de configuração disponíveis para servidores dedicados de Abiotic Factor.

### Configurações Importantes do Servidor

Essas configurações só podem ser definidas diretamente pelo painel webinterface do seu servidor de jogos, na seção **Configurações**.

| Nome do Parâmetro | Exemplo                 | Descrição                                  |
| ----------------- | ----------------------- | ------------------------------------------ | 
| Nome do Servidor  | ZAP-Hosting Docs Test   | Define o nome do seu servidor              |
| Senha             | iLoveZAP!2024           | Define uma senha para seu servidor, ou deixe vazio para nenhum |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que o servidor iniciar, ele usará as configurações que você definiu.

### Configurações de Gameplay

Abiotic Factor tem várias opções de configuração de gameplay chamadas **Sandbox Settings**. Um arquivo chamado **SandboxSettings.ini** deve estar presente na pasta principal `world` quando você acessar seu servidor via FTP.

Se você não encontrar esse arquivo, crie-o localmente no seu sistema e copie o conteúdo a seguir: [Arquivo padrão SandboxSettings.ini do Abiotic Factor no GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Agora você pode ajustar os valores como quiser. Quando estiver pronto, envie esse arquivo para a pasta principal `world` via FTP, no caminho:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

Na tabela abaixo, resumimos algumas configurações chave de gameplay encontradas no arquivo **SandboxSettings.ini**. Para ver todas as opções disponíveis, confira a [Página Oficial no GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Nome do Parâmetro           | Exemplo    | Descrição                                                        |
| --------------------------- | ---------- | ---------------------------------------------------------------- |
| LootRespawnEnabled          | true/false | Ativa ou desativa o spawn de loot pelo mapa                      |
| PowerSocketsOffAtNight      | true/false | Ativa ou desativa a energia durante a noite                      |
| DayNightCycleSpeedMultiplier| 1.0        | Define o multiplicador da velocidade do ciclo dia/noite         |
| EnemySpawnRate              | 1.0        | Define a frequência de spawn dos inimigos                        |
| EnemyHealthMultiplier       | 1.0        | Define um multiplicador para a vida dos inimigos                 |
| EnemyPlayerDamageMultiplier | 1.0        | Define um multiplicador para o dano que inimigos causam aos players |
| DetectionSpeedMultiplier    | 1.0        | Define um multiplicador para a velocidade com que inimigos detectam players |
| PlayerXPGainMultiplier      | 1.0        | Define um multiplicador para XP ganho pelos players              |
| ItemStackSizeMultiplier     | 1.0        | Define um multiplicador para o tamanho máximo de pilha de itens no inventário |
| ItemDurabilityMultiplier    | 1.0        | Define um multiplicador para a durabilidade dos itens            |
| ShowDeathMessages           | true/false | Ativa ou desativa notificações de mortes de entidades para players |
| AllowRecipeSharing          | true/false | Ativa ou desativa o compartilhamento de receitas entre players  |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que o servidor iniciar, ele usará as configurações que você definiu.

<InlineVoucher />