---
id: palworld-faster-egg-hatching
title: "Palworld: Eclosão de Ovos Mais Rápida"
description: "Aprenda como reduzir o tempo de eclosão dos ovos no Palworld editando a configuração do servidor Palworld para resultados de eclosão mais rápidos. -> Saiba mais agora"
sidebar_label: "Eclosão de Ovos Mais Rápida"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No Palworld, o tempo de eclosão dos ovos é controlado por um valor de configuração do servidor. Neste guia, você vai aprender como reduzir o tempo de eclosão dos ovos no seu servidor de jogos Palworld da ZAP-Hosting, editando o arquivo de configuração correto e aplicando a alteração corretamente.



## Preparação

Antes de começar, certifique-se de que:

- você tem acesso à interface web do seu servidor de jogos ZAP-Hosting
- seu servidor Palworld está disponível na administração do servidor de jogos
- você consegue editar arquivos na seção **Configs**

:::info Acesso ao Arquivo de Configuração
Para Palworld na ZAP-Hosting, as configurações relevantes do servidor podem ser editadas pela administração do servidor de jogos na seção **Configs**. Para esta tarefa, você precisa modificar o arquivo `PalWorldSettings.ini`.
:::

## Entendendo a Configuração de Eclosão de Ovos

Palworld usa a configuração `PalEggDefaultHatchingTime` para definir o tempo base de eclosão dos ovos em horas. Um valor menor significa que os ovos vão eclodir mais rápido.

De acordo com as referências atuais da configuração do servidor Palworld, o valor padrão é `72`, que representa `72` horas para um Ovo Gigante. Outros tipos de ovos também escalam a partir desse valor base.

| Chave da Configuração | Valor Padrão | Descrição |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Tempo base de eclosão dos ovos em horas |

:::note Como a Configuração Funciona
Esse valor afeta o processo geral de eclosão dos ovos no seu servidor. Se você reduzir, a eclosão será mais rápida para todos os jogadores usando incubadoras.
:::

## Abra o Arquivo de Configuração do Palworld

Primeiro, você precisa acessar o arquivo de configuração correto na interface da ZAP-Hosting.

### Navegue até a Seção Configs

Abra a administração do seu servidor de jogos Palworld e vá para a seção **Configs**. Lá, localize e abra o arquivo chamado:

```ini
PalWorldSettings.ini
```

Esse é o arquivo que contém as entradas de configuração do gameplay para seu servidor Palworld, incluindo a configuração do tempo de eclosão dos ovos.



## Edite o Tempo de Eclosão dos Ovos

Depois de abrir o `PalWorldSettings.ini`, procure pela linha `OptionSettings`. O Palworld armazena muitas configurações de gameplay dentro dessa seção.

### Altere a Chave de Configuração Necessária

Encontre a seguinte entrada:

```ini
PalEggDefaultHatchingTime=72.000000
```

Altere o valor para um número menor para acelerar a eclosão dos ovos.

Por exemplo:

```ini
PalEggDefaultHatchingTime=24.000000
```

Isso reduziria o tempo base de eclosão dos ovos de `72` horas para `24` horas.

### Valores de Exemplo

Você pode usar valores diferentes dependendo da velocidade que deseja para a eclosão no seu servidor.

| Valor | Resultado |
| --- | --- |
| `72.000000` | Tempo padrão de eclosão dos ovos |
| `48.000000` | Redução mais lenta, gameplay mais equilibrado |
| `24.000000` | Eclosão dos ovos muito mais rápida |
| `12.000000` | Eclosão dos ovos muito rápida |
| `1.000000` | Eclosão extremamente rápida |

:::caution Use Valores Realistas
Valores muito baixos podem alterar significativamente o equilíbrio do gameplay. Se quiser uma progressão mais natural, comece com um valor moderado como `24.000000` ou `48.000000`.
:::

### Trecho de Configuração Exemplo

Dependendo da sua configuração atual, a configuração aparecerá dentro do bloco `OptionSettings`. Um exemplo típico é parecido com este:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Editando a Entrada Correta
Se a chave `PalEggDefaultHatchingTime` já existir, edite o valor existente em vez de adicionar uma entrada duplicada. Valores duplicados no mesmo bloco `OptionSettings` podem fazer com que as configurações sejam ignoradas ou sobrescritas.
:::

## Salve e Aplique as Alterações

Depois de editar o valor, salve o arquivo `PalWorldSettings.ini` na interface da ZAP-Hosting.

### Reinicie o Servidor

Assim que o arquivo for salvo, reinicie seu servidor Palworld para que o novo tempo de eclosão dos ovos seja carregado.

:::info Reinício Necessário
A configuração atualizada só será aplicada após o servidor ser reiniciado.
:::

## Comportamento Importante para Ovos Existentes

Se ovos já estiverem incubando, o novo valor de eclosão não atualiza de forma confiável para esses timers de incubação ativos. Na prática, você deve remover e reiniciar o processo de incubação dos ovos afetados para que a nova taxa seja aplicada.

| Situação | Ação Necessária |
| --- | --- |
| Ovos novos colocados após a alteração | Nenhuma ação extra necessária após o reinício |
| Ovos já incubando antes da alteração | Reinicie a incubação desses ovos |

:::note Timers de Incubação Existentes
Se você alterar o tempo de eclosão dos ovos e não vir o resultado esperado, verifique se o ovo já estava incubando antes da mudança na configuração.
:::

## Conclusão

Parabéns, você reduziu com sucesso o tempo de eclosão dos ovos no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂