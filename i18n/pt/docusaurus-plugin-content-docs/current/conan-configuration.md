---
id: conan-configuration
title: "Conan Exiles: Configure seu próprio servidor"
description: "Descubra como personalizar as configurações do seu servidor de jogos Conan Exiles para uma jogabilidade e segurança ideais → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuração do Servidor

Os servidores de jogos Conan Exiles podem ser configurados extensivamente. A configuração do servidor acontece através dos arquivos de config. Você pode encontrá-los na interface web na administração do servidor de jogos, em Configs. Para isso, abra o arquivo de configuração **ServerSettings.ini**.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



A seguir, você encontrará uma visão geral categorizada de todos os comandos relevantes, que você pode usar para configurar seu servidor livremente conforme desejar. Alguns comandos podem não estar presentes no Config por padrão. Esses comandos podem ser adicionados facilmente depois.

<InlineVoucher />

## Geral

Nas configurações gerais você encontrará todos os comandos relevantes para personalizar o nome do servidor, senhas, anti-cheat.

| Opção                             | Descrição                                                  | Comando de Configuração        |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Nome do Servidor                  | Nome do seu servidor.                                       | ServerName="..."                |
| Número de jogadores              | Número máximo de jogadores                                  | Depende do pacote              |
| Mensagem do Dia                  | Mensagem do dia                                            |                                 |
| Senha do Servidor                | A senha do servidor pode ser alterada aqui                  | ServerMessageOfTheDay="..."     |
| Senha de Admin                  | Acesso para se tornar admin. Saiba mais no guia Tornar-se admin | AdminPassword="..."             |
| BattlEye Ativado                | Ativa a proteção anti-cheat BattlEye                        | IsBattlEyeEnabled=              |
| PVP Ativado                    | Ativa ou desativa o PVP. 1 = ativado, 0 = desativado       | PVPEnabled=                     |
| Restrição de Horário para PvP   | Quando ativado, o combate entre jogadores só é possível nos períodos de tempo especificados | RestrictPVPTime=                |
| PvP Blitz Ativado              | Ativa ou desativa o PVP Blitz. 1 = ativado, 0 = desativado (padrão) | PVPBlitzServer=                 |
| Restrição de Horário para Dano em Construções PvP | Quando ativado, jogadores podem atacar e destruir estruturas de outros jogadores apenas nos períodos de tempo especificados | RestrictPVPBuildingDamageTime=  |
| Comunidade                      | Define o estilo da comunidade: 0=Nenhum 1=Purista 2=Relaxado 3=Hard Core 4=Role Playing 5=Experimental | ServerCommunity=                |
| Região do Servidor             | Selecionar uma região do servidor afeta o filtro do seu servidor na lista. Escolha sua região para que jogadores da mesma região encontrem seu servidor. 0 = Europa, 1 = América do Norte, 2 = Ásia, 3 = Austrália, 4 = América do Sul, 5 = Japão | serverRegion=                   |
| Sem Propriedade                | Se ativado, não há regras de propriedade no servidor. Todos os jogadores podem saquear todos os baús, usar máquinas, minerar construções, etc. 1 = ativado, 0 = desativado (padrão). | NoOwnership=                    |
| Contêineres Ignoram Propriedade | Se ativado, todos os contêineres ficam abertos para outros jogadores. 1 = ativado, 0 = desativado | ContainersIgnoreOwnership=      |
| Pode danificar estruturas de outros jogadores | Se ativado, jogadores podem atacar e destruir estruturas de outros. 1 = ativado, 0 = desativado | CanDamagePlayerOwnedStructures= |
| Pode causar dano a jogadores    | Se ativado, jogadores podem ser feridos por outros jogadores. 1 = ativado, 0 = desativado | bCanBeDamaged=                  |
| Ativar Tempestade de Areia     | Permite que tempestades de areia varram periodicamente as Terras Exiladas. | EnableSandStorm=                |
| Tamanho Máximo do Clã          | Define o tamanho máximo permitido para clãs no servidor. Quando o limite é atingido, não é possível adicionar novos membros. | clanMaxSize=                    |
| Nudez Máxima                  | Define o nível máximo de nudez no servidor. Isso sobrepõe a opção do cliente. Se o servidor estiver em "Sem Nudez", mesmo que o jogador configure o cliente para "Nudez Total", ele não verá nudez no servidor. Se o servidor permitir nudez total e o jogador configurar o cliente para nudez parcial, o cliente exibirá corretamente apenas nudez parcial. 0 = nenhuma, 1 = parcial, 2 = total | MaxNudity=                      |
| Chat de Voz do Servidor       | Define se o chat de voz deve estar ativado no jogo. 1 = ativado, 0 = desativado | serverVoiceChat=                |



## Progressão

Nas configurações de Progressão você encontrará todos os comandos relevantes para personalizar a experiência de XP que os jogadores podem receber.

| Opção                       | Descrição                                                  | Comando de Configuração     |
| ---------------------------- | ------------------------------------------------------------ | -------------------------- |
| Multiplicador de XP do Jogador | Multiplica todos os tipos de XP que os jogadores recebem. Permite ajustar o progresso para todas as atividades. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Multiplicador de XP por Tempo do Jogador | Conan Exiles dá XP passivamente ao jogador com o tempo, só por sobreviver. Multiplica a taxa de XP recebida passivamente. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Multiplicador de XP por Morte do Jogador | Multiplica o XP recebido por matar monstros e jogadores. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Multiplicador de XP por Colheita do Jogador | Multiplica o XP recebido por colher recursos. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Multiplicador de XP por Criação do Jogador | Multiplica o XP recebido por criar itens. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Tempo

Nas configurações de Tempo você encontrará todos os comandos relevantes para ajustar o tempo. Isso permite configurar dias e noites mais longos ou curtos conforme desejar.

| Opção               | Descrição                                                  | Comando de Configuração  |
| -------------------- | ------------------------------------------------------------ | ----------------------- |
| Velocidade do Ciclo Diário | Multiplica a velocidade do ciclo completo de 24 horas. Partes individuais do dia podem ser ajustadas nas opções abaixo. O multiplicador é aplicado além das mudanças listadas abaixo. | DayCycleSpeedScale=     |
| Velocidade do Dia    | As horas do dia em Conan Exiles são entre 7:00 e 16:59 no tempo do jogo. Alterar esse multiplicador aumenta o tempo entre as horas do dia. | DayTimeSpeedScale=      |
| Velocidade da Noite  | As horas da noite em Conan Exiles são entre 19:00 e 4:59 no tempo do jogo. Alterar esse multiplicador aumenta o tempo entre as horas da noite. | NightTimeSpeedScale=    |
| Velocidade do Amanhecer/Entardecer | Amanhecer é entre 5:00 e 6:59, entardecer entre 17:00 e 18:59. Alterar esse multiplicador multiplica o tempo gasto nesses períodos. | DawnDuskSpeedScale=     |
| Usar Tempo de Recuperação | Ativa ou desativa o uso da mecânica de tempo de recuperação no servidor. true = ativado, false = desativado. | UseClientCatchUpTime=   |
| Tempo de Recuperação | Para dar um início suave a novos jogadores, Conan Exiles pode forçar o cliente a começar em um horário específico, independente do tempo do servidor. Novos personagens começam nesse horário e jogam até o servidor "alcançá-los". Recomendamos não configurar para horas noturnas. | ClientCatchUpTime=      |



## Sobrevivência

Nas configurações de Sobrevivência você encontrará todos os comandos relevantes para personalizar as configurações de sobrevivência. Isso inclui, por exemplo, quanta vida o jogador pode ter, quão rápido ele regenera e muito mais.

| Opção                                | Descrição                                                  | Comando de Configuração           |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| Multiplicador de Vida do Jogador      | Multiplica diretamente o valor de vida do jogador. 0.5 = 50 HP, 1.0 = 100 HP (padrão), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Velocidade de Regeneração de Vida     | Multiplica a velocidade passiva de regeneração de vida. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (padrão), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=       |
| Multiplicador de Stamina do Jogador   | Multiplica a quantidade de stamina do jogador. 0.5 = 50 stamina, 1.0 = 100 stamina (padrão), 1.5 = 150 stamina | PlayerStaminaMultiplier=           |
| Velocidade de Corrida do Jogador      | Define a velocidade de sprint do jogador. 0.5 = 1 m/s, 1.0 = 2 m/s (padrão), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Multiplicador de Custo de Stamina     | Aumenta ou diminui a stamina usada por atividade | PlayerStaminaCostMultiplier=       |
| Multiplicador de Custo de Sprint      | Aumenta ou diminui a stamina usada por sprint | PlayerStaminaCostSprintMultiplier= |
| Velocidade de Regeneração de Stamina  | Multiplica a velocidade passiva de regeneração de stamina. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerStaminaRegenSpeedScale=      |
| Multiplicador de Sede Ativa do Jogador | Escala a taxa em que o jogador ganha ou perde água ativamente. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerActiveThirstMultiplier=      |
| Multiplicador de Sede Passiva do Jogador | Escala a taxa em que o jogador ganha ou perde água passivamente. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerIdleThirstMultiplier=        |
| Multiplicador de Sede Offline do Jogador | Escala a taxa em que o jogador ganha ou perde água enquanto está offline. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerOfflineThirstMultiplier=     |
| Multiplicador de Fome Ativa do Jogador | Escala a taxa em que o jogador ganha ou perde comida ativamente. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerActiveHungerMultiplier=      |
| Multiplicador de Fome Passiva do Jogador | Escala a taxa em que o jogador ganha ou perde comida passivamente. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerIdleHungerMultiplier=        |
| Multiplicador de Fome Offline do Jogador | Escala a taxa em que o jogador ganha ou perde comida enquanto está offline. 0 = sem perda, 0.5 = 1.0 perda/s, 1.0 = 2.0 perda/s (padrão), 1.5 = 3.0 perda/s | PlayerOfflineHungerMultiplier=     |
| Personagens desconectados permanecem no mundo | Se True, corpos dos jogadores permanecem no mundo em estado inconsciente; se False, corpos são removidos quando offline. (Padrão: True) | LogoutCharactersRemainInTheWorld=  |
| Soltar Equipamento na Morte          | Se True, jogadores mortos soltam seus itens equipados ao ressurgir. Se False, ressurgem com todo o equipamento. (Padrão: True) | DropEquipmentOnDeath=              |
| Soltar Itens da Barra de Atalho na Morte | Se True, jogadores mortos perdem os itens da barra rápida ao ressurgir. Se False, ressurgem com esses itens. (Padrão: True) | DropShortcutbarOnDeath=            |
| Soltar Mochila na Morte              | Se True, jogadores mortos perdem os itens da mochila ao ressurgir. Se False, ressurgem com o conteúdo da mochila. (Padrão: True) | DropBackpackOnDeath=               |
| Todos podem saquear cadáver          | Se True, qualquer um pode saquear o cadáver de um jogador morto. Se False, só o jogador pode saquear seu próprio cadáver. (Padrão: True) | EverybodyCanLootCorpse=            |
| Multiplicador de Remoção de Corrupção por Thrall | Aumentar isso acelera a remoção de corrupção pelo thrall. Diminuir reduz a velocidade. | ThrallCorruptionRemovalMultiplier= |
| Multiplicador de Ganho de Corrupção do Jogador | Multiplica a corrupção recebida pelos jogadores.          | PlayerCorruptionGainMultiplier=    |



## Combate

Nas configurações de Combate você encontrará todos os comandos relevantes para ajustar o dano. Isso inclui quanto dano um jogador pode causar, quanto pode absorver e muito mais.

| Opção                          | Descrição                                                  | Comando de Configuração       |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Multiplicador de Dano do Jogador | Multiplica o dano causado pelo jogador. 0 = sem dano, 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | PlayerDamageMultiplier=        |
| Multiplicador de Dano Recebido pelo Jogador | Multiplica o dano recebido pelo jogador. 0 = sem dano, 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | PlayerDamageTakenMultiplier=   |
| Multiplicador de Dano dos Minions | Multiplica o dano causado por thralls e pets. 0 = sem dano, 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | MinionDamageMultiplier=        |
| Multiplicador de Dano Recebido pelos Minions | Multiplica o dano recebido por thralls e pets. 0 = sem dano, 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | MinionDamageTakenMultiplier=   |
| Multiplicador de Dano dos NPCs  | Multiplica o dano causado por NPCs e monstros. 0 = sem dano, 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | NPCDamageMultiplier=           |
| Multiplicador de Dano Recebido pelos NPCs | Multiplica o dano recebido por NPCs e monstros.             | NPCDamageTakenMultiplier=      |
| Multiplicador de Vida dos NPCs  | Aumenta a vida de todos os NPCs.                            | NPCHealthMultiplier=           |
| Multiplicador de Respawn dos NPCs | Multiplica a velocidade de respawn dos NPCs após morrerem. Muitos NPCs atualmente *NÃO* respeitam esse valor. 0 = nunca respawn (não testado), 0.5 = 15 segundos, 1.0 = 30 segundos (padrão), 1.5 = 45 segundos | NPCRespawnMultiplier=          |
| Multiplicador de Durabilidade   | Modifica o dano de durabilidade que um item recebe ao ser usado ou danificado. Afeta diretamente a duração de armas, ferramentas e armaduras. 0 = invulnerável, 0.5 = 5 de perda por golpe, 1.0 = 10 de perda por golpe (padrão), 1.5 = 15 de perda por golpe | DurabilityMultiplier=          |
| Multiplicador de Durabilidade do Escudo | Modifica o dano de durabilidade que um escudo recebe ao bloquear. Afeta diretamente a durabilidade dos escudos. 0 = invulnerável, 0.5 = 5 perdas por golpe, 1.0 = 10 perdas por golpe (padrão), 1.5 = 15 perdas por golpe | ShieldDurabilityMultiplier=    |
| Tempo para Acordar Thrall      | Define o tempo que um thrall permanece inconsciente. 0 = acorda imediatamente (não testado), 300 = 5 minutos, 600 = 10 minutos (padrão), 900 = 15 minutos | UnconsciousTimeSeconds=        |
| Dano em Thrall Inconsciente   | Multiplica o dano recebido por um thrall enquanto inconsciente. | ConciousnessDamageMultiplier=  |
| Tempo de Vida do Avatar        | Define quanto tempo um Avatar pode permanecer vivo no mundo. | AvatarLifetime=                |
| Desativar Avatares            | True: Avatares não podem ser invocados neste servidor, False: Avatares podem ser invocados. | AvatarsDisabled=               |
| Tempo para Invocar Avatar     | Tempo necessário para invocar um Avatar.                    | AvatarSummonTime=              |
| Multiplicador de Duração da Cúpula do Avatar | Define quanto tempo as cúpulas dos avatares duram.          | AvatarDomeDurationMultiplier=  |
| Desativar Notificação de Reivindicação de Terras | Desativa notificações de reivindicação de terras. True: desativa notificações. False: ativa notificações. | DisableLandclaimNotifications= |



## Colheita

Nas configurações de Colheita você encontrará todos os comandos relevantes para personalizar a colheita. Isso inclui quão rápido algo pode ser coletado, com que frequência os recursos respawnam, etc.

| Opção                            | Descrição                                                  | Comando de Configuração        |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Escala da Taxa de Apodrecimento de Itens | Afeta o tempo que alimentos duram antes de apodrecer (valores menores significam tempo maior). 0 = nunca apodrece, 0.5 = 4 minutos, 1.0 = 2 minutos (padrão), 1.5 = 1 minuto | ItemSpoilRateScale=             |
| Multiplicador da Quantidade Colhida | Multiplica a quantidade de recursos obtidos na colheita. 1.0 = 1 recurso (padrão), 2.0 = 2 recursos | HarvestAmountMultiplier=        |
| Multiplicador da Velocidade de Respawn dos Recursos | Multiplica a velocidade com que recursos respawnam após serem colhidos. 0,5 = 7,5 minutos, 1,0 = 15 minutos (padrão), 1,5 = 30 minutos | ResourceRespawnSpeedMultiplier= |
| Multiplicador do Raio de Reivindicação de Terras | Aumenta ou diminui o raio da reivindicação de terras. Afeta respawn de recursos e NPCs, além da capacidade de outros jogadores reivindicarem terras próximas. 0.5 = 10 metros, 1.0 = 20 metros (padrão), 1.5 = 30 metros | LandClaimRadiusMultiplier=      |



## Criação

Nas configurações de Criação você encontrará todos os comandos relevantes para personalizar a criação de itens. Isso inclui quão rápido as coisas podem ser criadas.

| Opção                                | Descrição                                                  | Comando de Configuração          |
| ------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Multiplicador do Tempo de Criação     | Aumentar isso aumenta o tempo para criar itens. Diminuir reduz o tempo. | CraftingTimeMultiplier=           |
| Multiplicador do Tempo de Treinamento de Thrall | Aumentar isso aumenta o tempo para treinar um thrall. Diminuir reduz o tempo. | ThrallCraftingTimeMultiplier=     |
| Multiplicador do Tempo de Queima de Combustível | Aumentar isso aumenta o tempo que unidades de combustível queimam. Diminuir reduz o tempo. | FuelBurnTimeMultiplier=           |
| Multiplicador da Velocidade de Criação | Multiplica a velocidade com que itens podem ser criados. Usar a Roda da Dor para converter Thralls é considerado criação. 0 ou menos = imediato, 0.5 = 10 segundos, 1.0 = 20 segundos (padrão), 1.5 = 30 segundos | ItemConvertionMultiplier=         |
| Multiplicador de Dano em Estruturas  | Multiplica o dano que uma estrutura defensiva (ex: paliçada) pode causar. 0 = sem dano (não testado), 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | StructureDamageMultiplier=        |
| Multiplicador de Dano Recebido por Estruturas | Multiplica o dano que uma estrutura recebe quando atacada (paredes/estações de criação extras). 0 = sem dano (não testado), 0.5 = 10 de dano, 1.0 = 20 de dano (padrão), 1.5 = 30 de dano | StructureDamageTakenMultiplier=   |
| Multiplicador de Vida das Estruturas | Multiplica a vida das estruturas. 0,5 = 500 HP, 1,0 = 1000 HP (padrão), 1,5 = 1500 HP | StructureHealthMultiplier=        |
| Multiplicador de Encargo do Jogador  | Multiplica o peso que um item adiciona ao jogador. (Configurar para 0 não desativa) 0.5 = 2.5 peso, 1.0 = 5.0 peso (padrão), 1.5 = 7.5 peso | PlayerEncumbranceMultiplier=      |
| Multiplicador da Penalidade de Encargo | Multiplica as penalidades que o jogador sofre quando está sobrecarregado. (Configurar para 0 não desativa) 0.5 = 35 penalidade de movimento a 99%, 1.0 = 70 penalidade a 99% (padrão), 1.5 = 125 penalidade a 99% | PlayerEncumbrancePenaltyMultiplier= |



## Abandono

Nas configurações de Abandono você encontrará todos os comandos relevantes para ajustar o abandono de construções.

| Opção                         | Descrição                                                  | Comando de Configuração     |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------- |
| Desativar Abandono de Construções | Se ativado, desativa a degradação das construções ao longo do tempo. | DisableBuildingAbandonment=  |
| Multiplicador do Tempo de Degradação | Aumentar isso aumenta o tempo para que peças e estruturas degradem. Diminuir reduz o tempo. | BuildingDecayTimeMultiplier= |



## Chat

Nas configurações de Chat você encontrará todos os comandos relevantes para personalizar o chat. Isso inclui ativar o chat, o raio do chat e o comprimento máximo das mensagens.

| Opção             | Descrição                                                  | Comando de Configuração  |
| ------------------ | ------------------------------------------------------------ | ----------------------- |
| Raio do Chat Local | Define o raio em centímetros em que o chat local é transmitido ao redor do jogador | ChatLocalRadius=        |
| Comprimento Máximo da Mensagem | Define o número máximo de caracteres em uma mensagem de chat. | ChatMaxMessageLength=   |
| Chat Global Ativado | Permite ou não o chat global. O chat do jogo tem um canal global onde todos podem falar. | ChatHasGlobal=          |



## Purga

Nas configurações de Purga você encontrará todos os comandos relevantes para ajustar a purga, seus passos, etc.

| Opção                           | Descrição                                                  | Comando de Configuração                                               |
| -------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| Ativar Purga                    | Desativar esta opção desativa completamente os eventos de purga | EnablePurge=                                                         |
| Nível da Purga                 | Aumentar o valor aumenta a dificuldade da purga. Exemplo: 0 desativa purgas | PurgeLevel=                                                          |
| -                              | Aumentar o valor aumenta o número de eventos de purga por dia. O número real depende também das opções abaixo | PurgePeriodicity=                                                    |
| -                              | Se ativado, purgas são restritas a horários específicos      | RestrictPurgeTime=                                                   |
| -                              | Valor 0000 significa que 00:00 é o horário final em dias úteis | PurgeTimeWeekdayEnd=                                                 |
| -                              | Valor 0000 significa que 00:00 é o horário inicial em dias úteis | PurgeTimeWeekdayStart=                                               |
| -                              | Valor 0000 significa que 00:00 é o horário final no fim de semana | PurgeTimeWeekendEnd=                                                 |
| -                              | Valor 0000 significa que 00:00 é o horário inicial no fim de semana | PurgeTimeWeekendStart=                                               |
| -                              | Valor 0830 significa que 08:30 é o horário inicial em dias úteis | PurgeRestrictionWeekdayEnd=                                          |
| -                              | Valor 2200 significa que 22:00 é o horário final no fim de semana | PurgeRestrictionWeekdayStart=                                        |
| -                              | Valor 1800 significa que 18:00 é o horário inicial no fim de semana | PurgeRestrictionWeekendStart=                                        |
| Tempo de Preparação da Purga   | Aumentar isso aumenta o tempo em minutos entre o aviso da purga e o início da purga. | PurgePreparationTime=                                                |
| Duração da Purga              | Aumentar isso aumenta o tempo máximo que a purga dura. Se todas as ondas forem eliminadas, a purga pode terminar antes. | PurgeDuration=                                                      |
| Número Mínimo de Jogadores Online | Aumentar isso faz com que purgas só ocorram quando o número definido de jogadores estiver online. Se zero, a purga atacará qualquer clã acima do limite do medidor de purga (purgas offline). | MinPurgeOnlinePlayers=                                             |
| Permitir Construção          | Se ativado, construção é permitida durante purgas.           | AllowBuilding=                                                     |
| Valor de Gatilho do Medidor de Purga | Aumentar isso aumenta a quantidade de ações que clãs ou jogadores precisam fazer para serem elegíveis à purga. Quanto maior, mais tempo o clã precisa estar ativo para disparar a purga. | ClanPurgeTrigger=                                                  |
| Intervalo de Atualização do Medidor de Purga | Intervalo em que eventos de purga do clã são agregados e pontuações adicionadas ao medidor. Valores menores aumentam o medidor mais rápido. | ClanScoreUpateFrenquency=                                          |
| -                              | Aumentar isso aumenta o dano causado por NPCs durante a purga. Exemplos: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                                  |



## Pets e Fome

Nas configurações de Pets e Fome você encontrará todos os comandos relevantes sobre o consumo de fome dos pets. Isso inclui quanto e quão rápido eles consomem.

| Opção                              | Descrição                                                  | Comando de Configuração         |
| ----------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Ativar Sistema de Fome: Thralls     | Ativa ou desativa o sistema de fome para thralls.           | ToggleHungerSystemThralls=       |
| Ativar Sistema de Fome: Pets        | Ativa ou desativa o sistema de fome para pets.              | ToggleHungerSystemPets=          |
| Valor Nutricional da Comida         | Quantidade de nutrição que o companheiro ganha ao comer.    | FoodNutritionValue=              |
| Tempo de Fome em Minutos            | Quantidade de minutos para o medidor de fome do companheiro ir de 100 a 0. Padrão = 10080 | StarvationTimeInMinutes=         |
| Limite de Penalidade por Dano de Fome | Quando o medidor de fome do companheiro chega a 0, ele começa a perder vida. Esse valor determina quanto de vida pode ser removido no total, em porcentagem onde 1 significa 100% da vida. | StarvationDamagePenaltyCap=      |
| Multiplicador do Tempo de Criação em Canis | Multiplica a velocidade de criação em canis.                | AnimalPenCraftingTimeMultiplier= |
| Multiplicador do Alcance do Contêiner de Comida | Multiplica a distância que os contêineres de comida podem alimentar seus companheiros. | FeedBoxRangeMultiplier=          |
| Dieta Exclusiva                    | Define se os companheiros comem exclusivamente os itens listados na dieta. Desativado significa que eles comem qualquer comida, além da dieta. | ExclusiveDiet=                   |

<InlineVoucher />