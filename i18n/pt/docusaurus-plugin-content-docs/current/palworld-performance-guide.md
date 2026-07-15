---
id: palworld-performance-guide
title: "Palworld: Guia de Performance"
description: "Melhore a performance do servidor Palworld, reduza quedas de desempenho e diminua a carga do servidor com alterações manuais na configuração. -> Saiba mais agora"
sidebar_label: Palworld: Guia de Performance
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A performance do servidor Palworld pode diminuir com o tempo, especialmente em servidores ativos com muitas bases, trabalhadores, itens largados e Pals selvagens. Neste guia, você vai aprender a otimizar o arquivo `PalWorldSettings.ini` na interface web da ZAP-Hosting para reduzir a carga do servidor e melhorar o desempenho geral.

## Preparação

Antes de começar, você precisa ter acesso à administração do seu servidor de jogos Palworld e permissão para editar arquivos de configuração.

:::info Acesso Necessário
Você precisa ter acesso ao seu servidor Palworld no painel de administração de servidores de jogos da ZAP-Hosting. O arquivo de configuração necessário está disponível em `Configs`.
:::

:::caution Faça um Backup Primeiro
Ajustes de performance podem alterar significativamente o comportamento do jogo. Antes de editar sua configuração, é recomendado criar um backup para que você possa restaurar as configurações anteriores se necessário.
:::

## Abra o Arquivo de Configuração do Palworld

Para otimizar seu servidor, você precisa editar o arquivo principal de configuração do servidor Palworld.

1. Faça login na interface web da ZAP-Hosting.
2. Abra a administração do seu servidor de jogos **Palworld**.
3. Navegue até **Configs**.
4. Abra o arquivo `PalWorldSettings.ini`.



:::note Onde Fazer as Alterações
As configurações relacionadas à performance estão armazenadas em `PalWorldSettings.ini`. Você precisa editar manualmente os valores das opções existentes neste arquivo.
:::

## Entenda as Configurações Relevantes

Várias configurações do Palworld afetam diretamente a performance do servidor. Alguns valores reduzem a carga da CPU, memória e simulação do mundo, enquanto outros ajudam a limitar o acúmulo causado por jogadores inativos ou excesso de entidades no mundo.

### Configurações Principais de Performance

As seguintes configurações são as mais relevantes se você quer reduzir quedas de desempenho em um servidor movimentado.

| Configuração | Padrão | Alteração Recomendada | Efeito |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Mantenha em `0.1` ou mais | Maior deterioração ajuda a remover estruturas abandonadas mais rápido |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Defina como `True` se apropriado | Remove bases de guildas inativas após o período configurado |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Ajuste conforme necessário | Define o tempo de inatividade em horas antes do reset da guilda |
| `PalSpawnNumRate` | `1.0` | Diminua | Gera menos Pals selvagens e reduz a carga da simulação |
| `DropItemMaxNum` | `3000` | Diminua | Limita a quantidade de itens largados no mundo |
| `DropItemAliveMaxHours` | `1.0` | Diminua | Remove itens largados mais rápido |
| `BaseCampMaxNumInGuild` | `4` | Diminua | Reduz o número de bases por guilda |
| `ServerReplicatePawnCullDistance` | `15000.0` | Diminua | Reduz a distância de sincronização dos Pals e diminui a carga da rede/servidor |
| `BaseCampWorkerMaxNum` | `15` | Diminua | Limita o número de Pals trabalhadores por base |
| `MaxBuildingLimitNum` | `0` | Defina um valor | Limita o total de construções por jogador |
| `bEnableInvaderEnemy` | `True` | Defina como `False` | Desativa inimigos invasores tipo raid e reduz a carga |
| `bEnableFastTravel` | `True` | Defina como `False` se necessário | Pode reduzir travamentos causados por eventos de viagem rápida |
| `bIsPvP` | `False` | Mantenha `False` a menos que seja necessário | PvP pode aumentar a carga do servidor em ambientes ativos |

### Configurações Secundárias de Performance

Essas configurações também podem ajudar, especialmente em servidores públicos maiores.

| Configuração | Padrão | Alteração Recomendada | Efeito |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Diminua | Reduz o número total de bases permitidas no servidor |
| `AutoSaveSpan` | `240` | Aumente | Reduz a frequência com que o servidor faz salvamentos automáticos |

:::tip Comece com Alterações Conservadoras
É melhor alterar poucos valores por vez e depois testar o comportamento do servidor. Isso facilita identificar qual configuração melhorou a performance e qual afetou demais a jogabilidade.
:::

## Edite a Configuração

O Palworld armazena as opções do servidor na seção `OptionSettings` dentro do arquivo `PalWorldSettings.ini`. Você precisa ajustar as entradas relevantes manualmente.

### Exemplo de Configuração Otimizada

O exemplo a seguir mostra uma configuração conservadora focada em performance. Substitua apenas os valores que você realmente quer usar no seu servidor.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Verifique as Entradas Existentes
Os formatos de configuração do Palworld podem mudar entre atualizações. Antes de salvar, certifique-se de estar editando a linha `OptionSettings` já existente no seu arquivo, evitando criar entradas duplicadas ou conflitantes.
:::

### Ajustes Recomendados de Valores

Se você não quiser substituir a linha inteira, pode editar apenas os valores relevantes na sua configuração atual.

| Entrada | Valor Exemplo | Por que Alterar |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Reduz o spawn de Pals selvagens |
| `DropItemMaxNum` | `2000` | Diminui a bagunça de itens |
| `DropItemAliveMaxHours` | `0.5` | Remove itens largados mais rápido |
| `BaseCampMaxNum` | `64` | Reduz o total de bases |
| `BaseCampMaxNumInGuild` | `3` | Limita a expansão de bases da guilda |
| `BaseCampWorkerMaxNum` | `10` | Reduz a carga dos trabalhadores IA |
| `ServerReplicatePawnCullDistance` | `10000.0` | Diminui a distância de replicação |
| `bEnableInvaderEnemy` | `False` | Desativa a carga relacionada a invasores |
| `bEnableFastTravel` | `False` | Evita travamentos relacionados a viagem rápida |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Limpa bases de guildas inativas |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Define o período de carência de inatividade |
| `MaxBuildingLimitNum` | `[your_limit]` | Restringe construções excessivas |
| `bIsPvP` | `False` | Evita sobrecarga extra de PvP |
| `AutoSaveSpan` | `[your_value]` | Reduz frequência de salvamentos se suportado no seu formato atual |

:::danger Reset de Guilda Inativa Apaga Bases
Se você ativar `bAutoResetGuildNoOnlinePlayers=True`, guildas inativas podem ser desfeitas automaticamente após o tempo definido em `AutoResetGuildTimeNoOnlinePlayers`. Isso pode apagar permanentemente bases e estruturas de jogadores inativos.
:::

## Salve e Aplique as Alterações

Depois de editar o arquivo, você precisa salvar a configuração e reiniciar o servidor para que as novas configurações sejam carregadas.

1. Salve as alterações no `PalWorldSettings.ini`.
2. Volte para a administração do seu servidor de jogos.
3. Reinicie o servidor Palworld.



:::info Reinício Obrigatório
É necessário reiniciar após alterar o `PalWorldSettings.ini`. Sem reiniciar, o servidor continuará usando as configurações anteriores.
:::

## Melhores Práticas para Performance a Longo Prazo

Alterações manuais na configuração ajudam, mas são apenas parte da otimização geral do servidor.

### Use Reinícios Automáticos Diários

Um reinício diário é uma prática comum para servidores Palworld porque o uso de recursos pode acumular com o tempo.

- Crie uma agenda de reinício automático na administração do seu servidor ZAP-Hosting
- Escolha um horário com baixa atividade de jogadores
- Avise seus jogadores com antecedência se sua comunidade for ativa

### Limite o Crescimento do Mundo

A maior causa da queda de performance em servidores Palworld que rodam por muito tempo é geralmente a complexidade do mundo.

Para reduzir isso:

- diminua os limites de bases
- diminua a quantidade de trabalhadores
- reduza o acúmulo de itens largados
- diminua o spawn de Pals selvagens
- limpe guildas inativas com cuidado
- considere definir um limite de construções com `MaxBuildingLimitNum`

### Teste as Alterações Gradualmente

Não aplique reduções extremas imediatamente, a menos que seu servidor já esteja instável.

Um bom processo é:

1. Diminua primeiro os valores de spawn e itens
2. Depois reduza os limites de bases e trabalhadores
3. Desative recursos opcionais que geram alta carga, se necessário
4. Reinicie e monitore a performance após cada rodada de alterações

:::tip Equilibre Performance e Jogabilidade
As melhores configurações dependem do tipo do seu servidor. Um servidor privado pequeno geralmente pode manter valores mais altos, enquanto um servidor público grande costuma precisar de limites mais rígidos para evitar quedas de performance.
:::

## Conclusão

Parabéns, você otimizou com sucesso a performance do seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂