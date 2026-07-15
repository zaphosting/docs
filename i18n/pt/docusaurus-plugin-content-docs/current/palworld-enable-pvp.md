---
id: palworld-enable-pvp
title: "Palworld: Ativar PvP"
description: "Aprenda como ativar PvP no Palworld, configurar o comportamento de combate da base e aplicar as configurações recomendadas de PvP no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Ativar PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld inclui um modo PvP que permite que os jogadores lutem entre si e altera como o combate de base e a interação de guildas funcionam no seu servidor. Neste guia, você vai aprender como ativar manualmente o PvP editando o arquivo de configuração correto na administração do servidor de jogos ZAP-Hosting e aplicando as configurações necessárias.

:::caution Aviso de Recurso em Teste
O PvP no Palworld é considerado um recurso em teste pelo desenvolvedor do jogo. As opções de configuração e o comportamento do gameplay podem mudar em futuras atualizações do jogo.
:::

## Preparação

Antes de começar, certifique-se de que:

- Você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting
- Seu servidor está parado no momento ou pode ser reiniciado após as alterações
- Você entende que o PvP altera significativamente o gameplay, especialmente em combate entre jogadores, defesa de base e perda de itens na morte

:::info Acesso à Configuração
Para servidores Palworld da ZAP-Hosting, o arquivo de configuração relevante pode ser acessado pela administração do servidor de jogos em `Configs`.
:::

## Abra o Arquivo de Configuração do Palworld

Para ativar o PvP, você precisa editar o arquivo `PalWorldSettings.ini`.

### Encontre o arquivo na interface da ZAP-Hosting

1. Faça login na interface web da ZAP-Hosting.
2. Abra seu servidor de jogos Palworld.
3. Navegue até `Configs` na administração do servidor de jogos.
4. Abra o arquivo `PalWorldSettings.ini`.



:::note Formato da Configuração
As configurações do servidor Palworld geralmente ficam dentro da seção `OptionSettings=(...)` no arquivo `PalWorldSettings.ini`. Você precisa adicionar ou ajustar as chaves necessárias dentro desse bloco de configurações.
:::

## Ative as Configurações Necessárias para PvP

Para ativar o PvP, você deve garantir que as três configurações abaixo estejam definidas como `True` no `PalWorldSettings.ini`.

### Chaves obrigatórias para PvP

| Configuração | Valor necessário | Descrição |
|---|---|---|
| `bIsPvP` | `True` | Ativa o modo PvP no servidor |
| `bEnablePlayerToPlayerDamage` | `True` | Permite dano direto entre jogadores |
| `bEnableDefenseOtherGuildPlayer` | `True` | Permite interação defensiva envolvendo jogadores de outras guildas |

### Exemplo de configuração

Adicione esses valores na linha `OptionSettings=(...)` ou altere os valores existentes caso já estejam presentes:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Evite Chaves Duplicadas
Se uma configuração já existir no `PalWorldSettings.ini`, edite o valor existente em vez de adicionar a mesma chave novamente. Entradas duplicadas podem causar comportamentos inesperados ou dificultar a solução de problemas.
:::

## Configurações Recomendadas para PvP

Depois de ativar o PvP, você também pode ajustar configurações adicionais para uma experiência de jogo PvP mais equilibrada. Os valores abaixo são comumente recomendados para servidores focados em PvP.

### Valores sugeridos

| Configuração | Valor recomendado | Descrição |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Impede alocação de pontos em HP |
| `bAllowEnhanceStat_Attack` | `False` | Impede alocação de pontos em Ataque |
| `bEnableFastTravel` | `True` | Mantém a viagem rápida ativada |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Limita a viagem rápida a acampamentos base |
| `bExistPlayerAfterLogout` | `True` | Mantém jogadores no mundo após logout |
| `bEnableAimAssistPad` | `False` | Desativa assistência de mira para controle |
| `DeathPenalty` | `All` | Solta todos os itens e Pals na morte |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Permite saquear itens dropados de outros jogadores |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Mostra áreas de base de outras guildas |
| `bBuildAreaLimit` | `True` | Ajuda a prevenir construção em áreas restritas |
| `GuildPlayerMaxNum` | `4` | Limita o tamanho da guilda |
| `BaseCampMaxNumInGuild` | `2` | Limita o número de bases por guilda |
| `MaxBuildingLimitNum` | `1000` | Limita estruturas por jogador |
| `GuildRejoinCooldownMinutes` | `60` | Define cooldown para reentrada em guilda |
| `BlockRespawnTime` | `5.0` | Define atraso para respawn na base |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Tempo antes da penalidade de respawn resetar |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplica penalidade de respawn após mortes repetidas |

### Exemplo do bloco de configurações PvP

Se quiser usar os valores recomendados, inclua as seguintes entradas na seção `OptionSettings=(...)`:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Restrições e Recompensas PvP Opcionais

Dependendo do quão competitivo você quer que seu servidor PvP seja, você também pode configurar restrições tecnológicas e recompensas PvP.

### Restringir tecnologias de movimento rápido

Você pode restringir certas tecnologias relacionadas a movimento definindo `DenyTechnologyList`.

| Configuração | Valor de exemplo |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Exemplo de entrada:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Verifique a Sintaxe Existente
A formatação da configuração do Palworld pode variar dependendo da versão atual do servidor e de como a linha `OptionSettings=(...)` está estruturada. Antes de salvar, certifique-se de que sua entrada combine com o estilo de sintaxe já usado no seu arquivo.
:::

### Configurar drops de recompensas PvP

Palworld também inclui opções de recompensas relacionadas a PvP para mortes de jogadores.

| Configuração | Descrição |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Ativa drops adicionais de itens em mortes PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Define o ID do item a ser dropado |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Define a quantidade do drop |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Mostra contagem de itens PvP no mapa mundial para bases |
| `bDisplayPvPItemNumOnWorldMap_Player` | Mostra contagem de itens PvP no mapa mundial para jogadores |

Exemplo de configuração:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Compatibilidade do ID do Item
Se você usar um valor personalizado para `AdditionalDropItemWhenPlayerKillingInPvPMode`, certifique-se de que o ID do item seja válido para sua versão atual do Palworld. Identificadores inválidos podem fazer com que a configuração falhe ou seja ignorada.
:::

## O Que Muda Quando o PvP Está Ativado

Após ativar o PvP, o gameplay no seu servidor muda de várias formas importantes. Com base nas orientações públicas atuais do PvP no Palworld, você pode esperar geralmente o seguinte comportamento:

- Jogadores podem causar dano uns aos outros
- Entrar na base de outro jogador pode fazer com que os Pals da base fiquem hostis
- Jogadores voadores e Pals montados podem receber dano aumentado
- Pals invocados e Pals da base podem receber dano reduzido
- Jogadores podem acessar baús pertencentes a outras guildas
- Dano de armas corpo a corpo contra estruturas de outros jogadores pode ser reduzido
- Pals da base podem defender uma área maior
- A distância permitida entre bases vizinhas pode aumentar
- Jogadores podem receber notificações quando sua base estiver sob ataque
- Construção e reparo podem ser restritos durante um ataque à base
- Algumas armas podem ter alcance ou dano modificados no modo PvP

:::danger Aviso de Impacto no Gameplay
Ativar o PvP pode mudar significativamente a progressão, segurança da base e retenção de jogadores no seu servidor. Se você administra um servidor público, é recomendado informar seus jogadores antes de aplicar essas mudanças.
:::

## Salve o Arquivo e Reinicie o Servidor

Depois de terminar de editar o `PalWorldSettings.ini`, salve o arquivo na área `Configs` da ZAP-Hosting.

### Aplique as alterações

Para ativar as novas configurações de PvP:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração do servidor de jogos ZAP-Hosting.

É necessário reiniciar para que as alterações de configuração tenham efeito.

:::info Nenhum Comando Adicional Necessário
Normalmente não é necessário nenhum comando extra no jogo ou console após editar o `PalWorldSettings.ini`. O passo obrigatório para aplicar a nova configuração PvP é o reinício completo do servidor.
:::

## Verifique se o PvP Está Ativo

Após o reinício do servidor, entre no servidor e teste o comportamento no jogo.

### Verificações básicas

Você pode confirmar a configuração verificando se:

- Jogadores conseguem causar dano uns aos outros
- O comportamento de base relacionado ao PvP está ativo
- Penalidades de morte e regras de saque correspondem aos valores configurados
- Restrições opcionais como `DenyTechnologyList` estão funcionando como esperado

Se as alterações não forem aplicadas, reabra o `PalWorldSettings.ini` e verifique:

- Nomes de configurações digitados incorretamente
- Chaves duplicadas
- Vírgulas ou formatação incorretas dentro de `OptionSettings=(...)`
- Valores que não foram salvos corretamente antes do reinício

## Conclusão

Parabéns, você ativou com sucesso o PvP no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!