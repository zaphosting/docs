---
id: ark-configuration
title: "ARK: Configuração do servidor"
description: "Descubra como otimizar as configurações do seu servidor de jogos ARK para uma jogabilidade melhor e personalização → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuração do Servidor

A configuração de um **servidor de jogos ARK** pode causar confusão e frustração para algumas pessoas. Mas tem um motivo para isso. ARK oferece muitas opções de configuração para o jogo. Além disso, a configuração acontece em diferentes arquivos de configuração, onde você também precisa prestar atenção em quais comandos pertencem a qual arquivo. Neste guia, queremos te dar uma visão melhor de como funciona a configuração de um servidor de jogos ARK.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Diferenças entre arquivos de configuração

A configuração do **servidor de jogos ARK** acontece via os arquivos de configuração **GameUserSettings.ini** e **Game.ini**. Você pode modificá-los tanto pelo nosso **Webinterface** em **Configs** quanto via **FTP**.

| Arquivo de configuração | Webinterface                                                  | FTP                                     |
| ----------------------- | ------------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini    | `Gameserver Administration -> Configs ->GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini                | `Gameserver Administration -> Configs ->Game.ini`             | `ShooterGame/Saved/Config/LinuxServer/` |

O arquivo de configuração **GameUserSettings.ini** contém opções tanto para o cliente do jogo quanto para o servidor. Opções para o cliente do jogo não são usadas pelo servidor. As opções do servidor são especificadas na seção **[ServerSettings]**, que geralmente fica no final do arquivo. Para modificações avançadas, como mudar pontos de engram ou XP recompensado por nível, desabilitar certos conteúdos ou personalizar gostos dos jogadores, usa-se o arquivo de configuração **Game.ini**.

## Configuração

A seguir explicamos os dois arquivos de configuração. Vamos mostrar os comandos mais comuns e como eles funcionam.

## Configuração: Mapa

ARK oferece diferentes mapas que podem ser jogados no servidor. Você pode escolher qual mapa quer jogar no webinterface em configurações.

| Mapas          | Data de lançamento | Nome do comando    |
| -------------- | ------------------ | ------------------ |
| The Island     | 02.06.2015         | `TheIsland`        |
| The Center     | 17.05.2016         | `TheCenter`        |
| Scorched Earth | 01.09.2016         | `ScorchedEarth_P`  |
| Ragnarok       | 12.06.2017         | `Ragnarok`         |
| Aberration     | 12.12.2017         | `Aberration_P`     |
| Extinction     | 06.11.2018         | `Extinction`       |
| Valguero       | 18.06.2019         | `Valguero_P`       |
| Genesis        | 25.02.2020         | `Genesis`          |
| Crystal Isles  | 11.06.2020         | `CrystalIsles`     |

Basta inserir o nome do comando do mapa no campo **Map** e ele será carregado na próxima vez que você iniciar seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Configuração: Gameusersettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Define se a perspectiva em terceira pessoa deve estar ativada ou não.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**AllowCaveBuildingPvE**

Define se é permitido construir estruturas em cavernas (quando o modo PVE está ativo) ou não.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**alwaysNotifyPlayerJoined**

Define se os jogadores receberão uma notificação quando um jogador entrar no servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**alwaysNotifyPlayerLeft**

Define se os jogadores receberão uma notificação quando um jogador sair do servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**bAllowFlyerCarryPvE**

Define se os jogadores podem carregar dinossauros com um dinossauro voador ou não.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**bDisableStructureDecayPvE**

Desativa a degradação progressiva das construções dos jogadores.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**DayCycleSpeedScale**

Define o fator de escala para o ciclo de dia e noite em ARK, controlando com que frequência o dia vira noite e vice-versa. O valor padrão 1 oferece a mesma velocidade do ciclo do modo single player (e nos servidores oficiais). Valores menores que 1 desaceleram o ciclo, valores maiores aceleram. 1 minuto no tempo real equivale a cerca de 28 minutos no jogo. Para um ciclo aproximado de 24 horas no jogo, use o valor 0.035.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DayTimeSpeedScale**

Define o fator de escala para a passagem do tempo durante o dia em ARK. Determina o comprimento do dia relativo à noite (definida por NightTimeSpeedScale). Diminuir esse valor aumenta a duração do dia.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**NightTimeSpeedScale**

Define o fator de escala para a passagem do tempo durante a noite em ARK. Determina o comprimento da noite relativo ao dia (definido por DayTimeSpeedScale). Diminuir esse valor aumenta a duração da noite.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoCharacterFoodDrainMultiplier**

Define o consumo de comida de um dinossauro. Valor maior aumenta o consumo (dinossauros ficam mais famintos). Também afeta o tempo de domesticação.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoCharacterHealthRecoveryMultiplier**

Define a regeneração de vida de um dinossauro. Valor maior aumenta a velocidade de regeneração, valor menor diminui.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoCharacterStaminaDrainMultiplier**

Define a velocidade com que um dinossauro se cansa. Valor maior aumenta a velocidade de cansaço, valor menor diminui.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoCountMultiplier**

Define quantos dinossauros devem spawnar. Valor maior aumenta a chance de spawn, valor menor diminui.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoDamageMultiplier**

Define quanto dano um dinossauro causa. Valor maior aumenta o dano, valor menor diminui.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**DinoResistanceMultiplier**

Define a resistência de um dinossauro. Valor maior aumenta a resistência.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**globalVoiceChat**

Define se o chat de voz global deve estar ativado no servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**HarvestAmountMultiplier**

Define a quantidade de recursos coletados durante a colheita. Valor maior significa mais recursos, valor menor menos.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**HarvestHealthMultiplier**

Define a saúde dos recursos que podem ser colhidos. Valores maiores aumentam a quantidade de materiais coletados por golpe.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**noTributeDownloads**

Permite proibir o download de personagens do jogo do servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PreventDownloadSurvivors**

Impede o download de personagens sobreviventes do servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PreventDownloadItems**

Impede o download de itens do servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PreventDownloadDinos**

Impede o download de dinossauros do servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerCharacterFoodDrainMultiplier**

Define a velocidade com que o jogador fica com fome. Valor maior faz o jogador ficar com fome mais rápido, valor menor mais devagar. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerCharacterHealthRecoveryMultiplier**

Define a velocidade de cura do jogador. Valor maior acelera a cura, valor menor desacelera. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerCharacterStaminaDrainMultiplier**

Define a velocidade com que o jogador se cansa. Valor maior acelera o cansaço, valor menor desacelera. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerCharacterWaterDrainMultiplier**

Define a velocidade com que o jogador fica com sede. Valor maior acelera a sede, valor menor desacelera. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerDamageMultiplier**

Define quanto dano o jogador causa. Valor maior aumenta o dano, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PlayerResistanceMultiplier**

Define a resistência do jogador. Valor maior aumenta a resistência, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**proximityChat**

Define se o chat local deve estar ativado no servidor.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Desativado)   |       0/1        |

**ResourceNoReplenishRadiusPlayers**

Define a distância entre jogadores e recursos na qual os recursos não devem mais se regenerar. Valor maior aumenta o raio, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**ResourceNoReplenishRadiusStructures**

Define a distância entre estruturas e recursos na qual os recursos não devem mais se regenerar. Valor maior aumenta o raio, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**ResourcesRespawnPeriodMultiplier**

Define o multiplicador para o tempo de respawn dos recursos. Valor maior aumenta o tempo, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**ServerAdminPassword**

Define a senha para login como admin. Mais informações no nosso guia: [Torne-se admin](ark-becomeadmin.md)

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    String    |      N/A     |     Livre       |

**ServerCrosshair**

Define se uma mira deve ser exibida para o jogador.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**serverForceNoHud**

Define se os controles do jogo devem ser exibidos para o jogador.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**serverHardcore**

Define se o modo hardcore (se o jogador morrer, tem que recomeçar do zero) deve estar ativado.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**ServerPassword**

Define a senha para entrar no servidor. Se só certas pessoas devem ter acesso, você pode definir uma senha. Por padrão está desativado e ativa ao definir uma senha.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    String    |      N/A     |     Livre       |

**serverPVE**

Define se o PVP deve estar ativado no servidor. Se PVP estiver desativado, só PVE é possível.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**ShowMapPlayerLocation**

Define se os jogadores devem ser exibidos no mapa com marcadores. - [Exemplo](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**StructureDamageMultiplier**

Define a resistência das estruturas. Valor maior aumenta a resistência, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**StructureResistanceMultiplier**

Define quanto dano uma estrutura recebe quando atacada. Valor maior aumenta o dano, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**TamedDinoDamageMultiplier**

Define o dano de um dinossauro domesticado ao atacar. Valor maior aumenta o dano, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**TamedDinoResistanceMultiplier**

Define a resistência de um dinossauro domesticado. Valor maior aumenta a resistência, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**TamingSpeedMultiplier**

Define a velocidade de domesticação. Valor maior acelera, valor menor desacelera. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**XPMultiplier**

Define os pontos de experiência que o jogador recebe. Valor maior aumenta XP, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**EnablePVPGamma**

Define se o uso de gamma é permitido em servidores PVP.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**EnablePVEGamma**

Define se o uso de gamma é permitido em servidores PVE.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**SpectatorPassword**

Define a senha que um não-admin deve digitar para entrar no modo espectador.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    String    |      N/A     |     Livre       |

**DifficultyOffset**

Define o nível de dificuldade do servidor. Para calcular o nível máximo de criatura para um dado valor de dificuldade, multiplique por 30 (funciona porque o nível máximo escala linearmente com o valor de dificuldade, e 1.0 dá nível máximo 30). Para calcular o offset de dificuldade para um nível máximo, use:

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    String    |    0.50000   |     Livre       |

**PvEStructureDecayPeriodMultiplier**

Define o período de tempo para o início da degradação das construções. Valor maior aumenta o tempo, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PvEStructureDecayDestructionPeriod**

Define quando estruturas podem ser destruídas por outros jogadores em servidor PVE. Valor maior aumenta o tempo de espera, valor menor diminui. Valor 2.0 dobra o padrão, 0.5 reduz pela metade.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**PvPStructureDecay**

Define se a degradação automática das construções em servidores PVP está ativada ou não.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**DisableDinoDecayPvE**

Desativa (true) ou ativa (false) o descarte automático de dinossauros.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**PvEDinoDecayPeriodMultiplier**

Define o multiplicador para a velocidade até que um dino seja descartado (maior = mais rápido, menor = mais lento).

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**AdminLogging**

Ativa a exibição de comandos de cheat de admin no chat quando usados por um admin no jogo.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (desativado)   |       0/1        |

**MaxTamedDinos**

Define o número máximo de dinossauros domesticáveis na ilha.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |     8300      |       ∞          |

**MaxNumbersofPlayersInTribe**

Define o número máximo de jogadores por tribo.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |       2       |       ∞          |

**KickIdlePlayersPeriod**

Define o tempo até que um jogador inativo seja expulso do servidor.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Inteiro   | 1800 (segundos)  |       ∞          |

**PerPlatformMaxStructuresMultiplier**

Define o multiplicador para estruturas em plataformas de sela. Use com cuidado - valores muito altos podem causar queda massiva de performance.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |    1.00000   |       ∞          |

**StructureDamageRepairCooldown**

Define o tempo antes que uma estrutura danificada possa ser reparada novamente. (0 permite reparo sem espera)

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      180      |       ∞          |

**bForceAllStructureLocking**

Define se todos os tipos de contêineres podem ser trancados.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      1       |       0/1        |

**bUseVSync**

Define se o VSync deve estar ativado (pode minimizar problemas com algumas placas de vídeo).

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      0       |       0/1        |

**MaxPlatformSaddleStructureLimit**

Define o número máximo de estruturas no topo da plataforma de sela.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      100      |       ∞          |

**RCONPort**

Define a porta RCON usada para login via console RCON.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      100      |       ∞          |

**AutoSavePeriodMinutes**

Define o intervalo (em minutos) para o servidor salvar automaticamente.

:::info
Esse valor está fixado em 30 minutos e não pode ser alterado.
:::

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      30       |       ∞          |

**RCONServerGameLogBuffer**

Define quantas linhas de chat devem ser listadas nas ferramentas RCON.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      600      |       ∞          |

**PreventOfflinePvPInterval**

Define quantos segundos um jogador precisa estar desconectado para ser marcado como realmente offline.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Inteiro   | 60 (segundos)    |       ∞          |

**bPvPDinoDecay**

Define se os dinossauros da tribo/jogador também são protegidos na proteção contra raids offline ativada.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      1       |       0/1        |

**bPvPStructureDecay**

Define se as estruturas da tribo/jogador são protegidas quando a proteção contra raids offline está ativada.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      1       |       0/1        |

**DisableImprintDinoBuff**

Define se o bônus adicional que o jogador recebe ao criar um dinossauro bebê deve ser desativado.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      1       |       0/1        |

**AllowAnyoneBabyImprintCuddle**

Define se qualquer jogador pode fazer carinho em dinossauros bebês.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Booleano   |      1       |       0/1        |

**OverrideOfficialDifficulty**

Sobrescreve o nível de dificuldade oficial.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |      1       |       0/1        |

**TheMaxStructuresInRange**

Define o número máximo permitido de estruturas em área próxima.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |    10500     |       ∞          |

**PvEAllowStructuresAtSupplyDrops**

Define se é permitido construir estruturas perto de caixas de suprimentos.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Desativado)   |       0/1        |

**AutoDestroyDecayedDinos**

Define se dinossauros devem ser destruídos diretamente ao invés de ficarem reclamáveis.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Desativado)   |       0/1        |

**ClampItemSpoilingTimes**

Define que todos os tempos de expiração dos itens serão ajustados para o máximo permitido.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Desativado)   |       0/1        |

**AllowCrateSpawnsOnTopOfStructures**

Define se caixas de suprimentos podem cair sobre estruturas.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Desativado)   |       0/1        |

**PreventOfflinePvP**

Define se a "Proteção contra Raid Offline" deve estar ativada em servidores PVE/PVP.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 1 (Ativado)      |       0/1        |

**AllowMultipleAttachedC4**

Permite anexar explosivos C4 múltiplas vezes em dinossauros.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 1 (Ativado)      |       0/1        |

**bPvEDisableFriendlyFire**

Define se o fogo amigo deve ser desativado em PVE.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 1 (Ativado)      |       0/1        |

**ServerAutoForceRespawnWildDinosInterval**

Define o tempo em segundos até que o respawn de todos os dinossauros selvagens seja forçado. Por exemplo, 86400 significa respawn forçado após um dia.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |    86400     |       ∞          |

**DisableWeatherFog**

Define se o nevoeiro no mapa deve estar ativado ou desativado.

| Tipo de dado | Valor padrão     | Faixa de valores |
| :----------: | :--------------: | :--------------: |
|   Booleano   | 0 (Ativado)      |       0/1        |

### **[/script/engine.gamesession]**

**MaxPlayers**

Define quantos jogadores podem jogar no servidor ao mesmo tempo.

| Tipo de dado |                      Valor padrão                      | Faixa de valores |
| :----------: | :---------------------------------------------------: | :--------------: |
|    Float     | Depende da seleção de slots na hora da compra (Slots fixos) |     10-130      |

### **[SessionSettings]**

**SessionName**

Define o nome do servidor que será exibido no navegador de servidores, jogo, etc.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |  ARK #XXXXXX |       ∞          |

### **[MessageOfTheDay]**

**Duration**

Define por quanto tempo a mensagem de boas-vindas deve ser exibida após a conexão.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|   Inteiro   |    1.00000   |       X-X        |

**Message**

Define a mensagem de boas-vindas exibida quando um jogador conecta ao servidor.

| Tipo de dado | Valor padrão | Faixa de valores |
| :----------: | :----------: | :--------------: |
|    Float     |     "..."    |        /         |

## Configuração: Game.ini

Como mencionado antes, modificações mais extensas podem ser feitas via Game.ini. Isso inclui, por exemplo, mudar pontos de engram ou XP recompensado por nível.

### Limite de nível

Existe uma forma de aumentar o nível máximo que jogadores e dinossauros podem alcançar. Para isso, usa-se a função `LevelExperienceRampOverrides`. Foi implementada na versão v194. Mais informações e exemplos estão no fórum Steam: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

O comando é aplicado duas vezes: a primeira para o nível do jogador e a segunda para o nível do dinossauro. A sintaxe é:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Os colchetes definem os níveis (**LEVELVALUE**) e após o sinal de igual a quantidade de XP (**Points**) necessária para alcançar o nível.

Por exemplo, para ter 500 níveis como limite, ficaria assim:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Abreviado para fins ilustrativos
ExperiencePointsForLevel[499]=50000)
```

### Pontos de Engram

A cada **level-up** você ganha **pontos de Engram**. A quantidade de pontos de Engram por nível pode ser alterada desde a versão v193. A sintaxe é:

```
OverridePlayerLevelEngramPoints=
```

Para cada nível, deve-se adicionar uma linha de comando. Por exemplo, se definir 10 níveis e quiser 5 pontos de engram a mais por nível, ficaria assim:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

O número de linhas depende do limite de nível definido anteriormente.

:::info
ARK é um jogo que evolui rápido e por isso sofre muitas mudanças regulares. Isso também afeta a configuração do servidor. Recomendamos dar uma olhada na documentação oficial para informações mais detalhadas: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />