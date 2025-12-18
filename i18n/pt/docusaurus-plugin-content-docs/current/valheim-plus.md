---
id: valheim-plus
title: "Valheim: Servidor Valheim Plus"
description: "Descubra como melhorar a jogabilidade de Valheim com Valheim Plus para recursos aprimorados e upgrades no servidor → Saiba mais agora"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

:::info
Valheim Plus é uma modificação do lado do cliente. Ela permite que você faça alterações no jogo básico.
:::

<InlineVoucher />

## Instalação do Cliente Valheim Plus

Primeiro, você precisa abrir a pasta do Valheim no seu PC.  
Para isso, clique com o botão direito no Valheim na biblioteca do Steam, selecione "***Gerenciar***" nas opções e depois "***Procurar arquivos locais***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Depois que essa pasta estiver aberta, o arquivo "***WindowsClient.zip***" precisa ser baixado.  
O "***WindowsClient.zip***" pode ser baixado [aqui](https://github.com/valheimPlus/ValheimPlus/releases) (vá até "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Em seguida, o conteúdo do "***WindowsClient.zip***" deve ser descompactado na pasta do servidor Valheim que você abriu anteriormente.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Depois disso, o Valheim pode ser iniciado e a configuração no cliente estará concluída.

## Instalação do Servidor Valheim Plus

Para alterar o jogo, primeiro abra a aba de jogos no seu servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Aqui, procure por Valheim Plus em "Jogos disponíveis" e clique no botão de download:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Depois disso, o servidor será reinstalado. Após a reinstalação, você poderá remover a senha em "**Configs**" e agora pode fazer upgrade para mais slots.

## Upgrade de Slots

Para realizar um upgrade de slots, a função "**UP and Downgrade**" no dashboard do servidor de jogos precisa ser aberta.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Agora selecione o número desejado de slots na página de UP and Downgrade.

:::info
Aqui você só precisa pagar o "**acréscimo**", que é calculado pelo tempo restante de contrato.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Para completar o upgrade, selecione o método de pagamento no final da página.  
Depois de selecionar, pressione o botão "***Realizar upgrade***" e o upgrade será efetuado.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Configuração do Valheim Plus

Para abrir o arquivo de configuração, você deve acessar a página "**Configs**" na interface do servidor de jogos, onde verá o "*ValheimPlus: valheim_plus.cfg*".  
Ele pode ser aberto clicando no ícone azul ao lado do arquivo de configuração.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Aqui está uma lista de todos os comandos que podem ser usados no arquivo de configuração:

### [Player]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa as mudanças no jogador |
| baseMegingjordBuff | 150 (float) | aumenta o peso carregável em 150 |
| baseMaximumWeight | 300 (float) | define o peso máximo para 300 |
| baseAutoPickUpRange | 2 (float) | define o alcance para pegar itens como 2 |
| disableCameraShake | true / false | ativa ou desativa o tremor da câmera |
| experienceGainedNotifications | true / false | ativa ou desativa a exibição dos pontos de experiência ganhos no canto superior esquerdo |

### [Food]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças na comida |
| foodDuration | 0-100% | altera a duração da comida pelo valor percentual definido |

### [Fermenter]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no fermentador |
| fermenterDuration | 2400 (float) equivale a 48 horas no jogo | define o tempo de produção no fermentador, quanto menor o valor, mais rápida a produção |
| fermenterItemsProduced | 6 (inteiro) | define os itens que podem ser produzidos no fermentador |

### [Furnace]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças na fornalha |
| maximumOre | 10 (inteiro) | define o número máximo de minérios na fornalha |
| maximumCoal | 20 (inteiro) | define o número máximo de carvões na fornalha |
| productionSpeed | 30 (float) | define o tempo de produção na fornalha, quanto menor o valor, mais rápida a produção |
| coalUsedPerProduct | 2 (inteiro) | define a quantidade de carvão usada por produto |

### [Kiln]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no forno de cal |
| productionSpeed | 15 (float) | define o tempo de produção no forno de cal, quanto menor o valor, mais rápida a produção |
| maximumWood | 25 (inteiro) | define a quantidade máxima de madeira no forno de cal |

### [Items]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças nos itens |
| noTeleportPrevention | true / false | previne o uso de teleporte |
| baseItemWeight | 0 (float) | define o peso dos itens, -50% = menos peso, +50% = mais peso |
| itemStackMultiplier | 0 (float) | define o número máximo de itens que podem ser empilhados, só valores positivos. 50 = 50% mais itens empilháveis. *cuidado* se reduzir, tudo que passar do limite será deletado |

### [Building]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças na construção |
| noInvalidPlacementRestriction | true / false | remove a restrição de *colocação inválida* |
| noWeatherDamage | true / false | remove danos às construções causados pelo clima (ex: chuva) |
| maximumPlacementDistance | 5 (float) | define a distância máxima para colocar objetos |

### [Beehive]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças na colmeia |
| maximumHoneyPerBeehive | 4 (inteiro) | define a quantidade máxima de mel por colmeia |
| honeyProductionSpeed | 1200 (float) equivale a 24 horas no jogo | define o tempo de produção do mel, quanto menor o valor, mais rápida a produção |

### [Server]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no servidor |
| maxPlayers | 10 (int) | define os slots, será ajustado pelo valor pedido em UP- e Downgrades |
| disableServerPassword | true / false | remove a senha do servidor |
| enforceConfiguration | true / false | se ativado, só jogadores com a mesma configuração podem entrar no servidor |
| enforceMod | true / false | se ativado, só jogadores com o mesmo mod podem entrar no servidor |

### [Map]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no mapa |
| exploreRadius | 100 (float) | define o raio ao redor de cada jogador onde o mapa é revelado |
| shareMapProgression | true / false | se ativado, o progresso do mapa é compartilhado entre os jogadores, só jogadores visíveis contribuem |

### [Hotkeys]

Uma lista dos controles possíveis está [aqui](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rolar para frente |
| rollBackwards | F10 | rolar para trás |
| enterAdvancedBuildingMode | F1 | congela objetos e permite uso do controle avançado |
| exitAdvancedBuildingMode | F3 | para o modo de controle avançado e descongela objetos |
| enterAdvancedEditingMode | Keypad0 | seleciona o objeto visualizado para modificação com AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | confirma a alteração de todos os objetos selecionados e modificados |
| resetAdvancedEditingMode | F7 | reseta posição e rotação dos objetos selecionados com AEM |
| abortAndExitAdvancedEditingMode | F8 | reseta posição e rotação dos objetos selecionados com AEM e sai do modo AEM |

### [AdvancedBuildingMode]

| Comando | Valores | Função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no modo avançado de construção |

### [AdvancedEditingMode]

| comando | valores | função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças no modo avançado de edição |

### [Stamina]

| comando | valores | função |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | ativa ou desativa mudanças na stamina |
| dodgeStaminaUsage | 10 (float) | define a quantidade de stamina usada para esquivar |
| encumberedStaminaDrain | 10 (float) | define a quantidade de stamina drenada quando carregado |
| sneakStaminaDrain | 5 (float) | define a quantidade de stamina drenada ao andar agachado |
| runStaminaDrain | 10 (float) | define a quantidade de stamina drenada ao correr |
| staminaRainDelay | 1 (float) | define o atraso para regeneração da stamina |
| staminaRain | 5 (float) | define a quantidade de stamina regenerada |
| swimStaminaDrain | 5 (float) | define a quantidade de stamina drenada ao nadar |
| jumpStaminaUsage | 10 (float) | define a quantidade de stamina usada ao pular |


<InlineVoucher />