---
id: palworld-configuration
title: "Palworld: Configuração do Servidor Palworld"
description: "Descubra como personalizar as configurações do servidor Palworld para uma experiência de jogo sob medida e otimize seu gameplay → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Os servidores Palworld vêm com uma variedade de parâmetros de configuração que você pode personalizar do seu jeito. Neste guia, vamos explorar todos os parâmetros de configuração disponíveis atualmente e explicar cada um com mais detalhes.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Configure seu servidor Palworld em apenas UM MINUTO!" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja se estiver com pressa ou só quiser absorver a informação da forma mais divertida possível!"/>

<InlineVoucher />

## Acessando seu Arquivo de Configuração

Primeiro, você precisa acessar seu arquivo de configuração para editar qualquer parâmetro. Existem várias formas de editar esse arquivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

O método mais fácil é ir até a seção **Configurações** no webinterface do seu servidor de jogos e procurar as configurações certas por lá, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via arquivo de Configuração no WI">

#### Via arquivo de Configuração no WI

:::note
O servidor deve estar parado antes de editar o arquivo de configuração; editar o arquivo e reiniciar o servidor fará com que as alterações sejam desfeitas.
:::

Alternativamente, para quem quer editar o arquivo bruto diretamente, você pode acessar isso indo até a seção **Configs** no webinterface do seu servidor de jogos e clicando no botão azul de editar arquivo, como mostrado abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

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

### Ativar suporte a Crossplay

Os servidores dedicados Palworld suportam múltiplas plataformas, então você pode usar crossplay. A plataforma Steam vem configurada por padrão. Se quiser ativar suporte para Xbox, PS5 e Mac, você pode fazer isso na administração do servidor de jogos, na seção de configurações.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay entre as versões Steam e Microsoft Store/Xbox ainda não é possível. Seu servidor pode ser configurado para funcionar com Steam ou com Microsoft Store/Xbox.
:::

:::info
No Xbox, você não pode conectar diretamente pelo endereço IP, então se planeja jogar em consoles Xbox, terá que deixar seu servidor dedicado público.

Também é importante definir um nome de servidor fácil de encontrar, confira nosso guia [Configuração do Servidor](palworld-configuration.md) para saber como fazer isso.
:::

### Configurações Importantes do Servidor

Essas são opções essenciais para personalizar a listagem do seu servidor, protegê-lo com senhas e outras configurações internas.

:::tip
Não recomendamos alterar as configurações de Porta ou IP, pois são configuradas automaticamente pelo servidor de jogos. Mudar os valores de IP/Porta pode quebrar seu servidor!
:::

| Nome do Parâmetro             | Exemplo                                | Descrição                                                  |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                     | Número máximo de jogadores que podem entrar no servidor (máx 32) |
| ServerName                    | ZAP-Hosting Docs Test                  | Nome do seu servidor                                       |
| ServerDescription             | Este é um servidor que estamos testando | Descrição do seu servidor                                  |
| AdminPassword                 | ctRQvhPAWVHq                          | Senha de Admin usada para comandos administrativos         |
| ServerPassword                | iLoveZAP!2024                        | Trava o servidor com senha (privado)                       |
| PublicPort                   | 8211 (padrão)                        | Porta pública que o servidor usa                           |
| PublicIP                     | 123.123.123.123                     | IP público que o servidor usa                              |
| RCONEnabled                  | true                                | Ativa o uso do RCON                                        |
| RCONPort                     | 8222                                | Número da porta usada para RCON                            |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que ele iniciar, usará as configurações que você definiu.

### Configurações de Gameplay

Essas são opções menos críticas, focadas em alterar o gameplay, progressão, além do mapa e mundo onde você está jogando.

| Nome do Parâmetro               | Descrição                                         | 
| ------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate               | Define a velocidade do tempo durante o dia       |
| NightTimeSpeedRate             | Define a velocidade do tempo durante a noite     |
| ExpRate                      | Define a taxa de ganho de experiência (XP)        |
| PalCaptureRate               | Taxa de captura de Pals                            |
| PalSpawnNumRate              | Taxa de aparição dos Pals                          |
| PalDamageRateAttack          | Multiplicador de dano causado pelos pals          |
| PalDamageRateDefense         | Multiplicador de dano recebido pelos pals         |
| PlayerDamageRateAttack       | Multiplicador de dano causado pelo jogador         |
| PlayerDamageRateDefense      | Multiplicador de dano recebido pelo jogador        |
| PlayerStomachDecreaceRate    | Taxa de diminuição da fome do jogador              |
| PlayerStaminaDecreaceRate    | Taxa de redução da stamina do jogador               |
| PlayerAutoHPRegeneRate       | Taxa de regeneração automática de HP do jogador    |
| PlayerAutoHpRegeneRateInSleep | Taxa de regeneração de HP do jogador durante o sono |
| PalStomachDecreaceRate       | Taxa de diminuição da fome dos pals                 |
| PalStaminaDecreaceRate       | Taxa de redução da stamina dos pals                  |
| PalAutoHPRegeneRate          | Taxa de regeneração automática de HP dos pals       |
| PalAutoHpRegeneRateInSleep   | Taxa de regeneração de HP dos pals durante o sono (na Palbox) |
| BuildObjectDamageRate        | Multiplicador de dano a estruturas                   |
| BuildObjectDeteriorationDamageRate | Taxa de deterioração das estruturas               |
| CollectionDropRate           | Multiplicador de itens coletáveis                     |
| CollectionObjectHpRate       | Multiplicador de HP dos objetos coletáveis           |
| CollectionObjectRespawnSpeedRate | Intervalo de respawn dos objetos coletáveis       |
| EnemyDropItemRate            | Multiplicador de itens dropados pelos inimigos       |
| DeathPenalty                 | Penalidade de morte (Nenhuma/Item)                    |
| GuildPlayerMaxNum            | Número máximo de jogadores na guilda                  |
| PalEggDefaultHatchingTime    | Tempo (h) para incubar ovos grandes                    |

Depois de fazer suas alterações, não esqueça de salvar o arquivo onde for necessário e reiniciar seu servidor. Na próxima vez que ele iniciar, usará as configurações que você definiu.

<InlineVoucher />