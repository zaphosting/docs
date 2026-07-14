---
id: palworld-increase-work-speed
title: "Palworld: Aumentar Velocidade de Trabalho"
description: "Aprenda como aumentar a velocidade de trabalho no Palworld editando a configuração WorkSpeedRate para acelerar o trabalho dos jogadores e Pals no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Aumentar Velocidade de Trabalho
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite ajustar a rapidez com que jogadores e Pals realizam tarefas na base alterando um valor de configuração do servidor. Neste guia, você vai aprender como aumentar a velocidade de trabalho no seu servidor Palworld da ZAP-Hosting editando o arquivo de configuração correto e aplicando as mudanças corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld na interface web da ZAP-Hosting.

:::info Configuração Manual Necessária
Esta configuração é feita manualmente através do editor de configurações. Você precisa editar o arquivo de configuração do servidor Palworld você mesmo na seção `Configs` da administração do seu servidor de jogos.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar a velocidade de trabalho, você precisa editar o arquivo `PalWorldSettings.ini`.

### Onde encontrar o arquivo

1. Faça login no site da ZAP-Hosting.
2. Abra a administração do seu servidor de jogos **Palworld**.
3. Navegue até **Configs**.
4. Abra o arquivo chamado `PalWorldSettings.ini`.

Este arquivo contém as configurações de gameplay que controlam taxas e multiplicadores para o seu servidor Palworld.

:::note Localização do Arquivo de Configuração
Na ZAP-Hosting, o arquivo relevante para essa alteração está disponível diretamente na administração do seu servidor de jogos, na seção `Configs`. Se seu servidor mostrar vários arquivos de configuração, certifique-se de editar o `PalWorldSettings.ini`.
:::

## Alterar a Configuração de Velocidade de Trabalho

A configuração usada para aumentar a velocidade de trabalho é `WorkSpeedRate`.

### O que a configuração faz

`WorkSpeedRate` controla a rapidez com que jogadores e Pals realizam tarefas relacionadas à base. O valor padrão normalmente é `1.0`, que significa velocidade normal.

Valores maiores aumentam o multiplicador de velocidade:

| Chave da config | Valor padrão | Valor exemplo | Efeito |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Velocidade de trabalho dobrada |
| `WorkSpeedRate` | `1.0` | `10.0` | Velocidade de trabalho muito rápida |

### Editar o valor

Procure pela linha `OptionSettings` dentro do `PalWorldSettings.ini`. A entrada `WorkSpeedRate` está dentro desse bloco de configurações.

Se a entrada já existir, altere o valor. Por exemplo:

```ini
WorkSpeedRate=1.000000
```

Altere para um valor maior, como:

```ini
WorkSpeedRate=2.000000
```

Para um resultado muito mais rápido, você pode usar um multiplicador maior, como:

```ini
WorkSpeedRate=10.000000
```

### Exemplo de trecho de configuração

Dependendo do conteúdo atual do seu arquivo, a configuração pode aparecer como parte de uma linha `OptionSettings` mais longa, semelhante a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Edite a Sintaxe Existente com Cuidado
O `PalWorldSettings.ini` usa um formato rígido. Certifique-se de alterar apenas o valor de `WorkSpeedRate` e não remover vírgulas, colchetes ou aspas da linha `OptionSettings` ao redor.
:::

## Salvar e Reiniciar o Servidor

Depois de editar o arquivo, você precisa salvar as alterações e reiniciar seu servidor Palworld.

### Aplicar as mudanças

1. Salve o arquivo `PalWorldSettings.ini` atualizado.
2. Reinicie seu servidor de jogos Palworld pela administração da ZAP-Hosting.

É necessário reiniciar porque o Palworld lê essas configurações de gameplay ao iniciar o servidor. O novo valor de velocidade de trabalho só será aplicado corretamente após o reinício.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Não |

:::tip Teste Recomendado
Comece com um valor moderado, como `2.0`, e teste o resultado no jogo. Valores muito altos podem acelerar a progressão demais, afetando o equilíbrio geral do gameplay.
:::

## Verificar a Nova Velocidade de Trabalho

Quando o servidor estiver online novamente, entre no seu servidor Palworld e teste as atividades relacionadas ao trabalho na base.

Você deve perceber que jogadores e Pals completam as tarefas mais rápido do que antes. Se não notar nenhuma mudança, reabra o `PalWorldSettings.ini` e confirme que:

- `WorkSpeedRate` está presente
- o valor está configurado corretamente
- o arquivo foi salvo com sucesso
- o servidor foi totalmente reiniciado após a edição

:::note Equilíbrio do Gameplay
Aumentar a velocidade de trabalho pode mudar significativamente a rapidez com que sua base se desenvolve. Para uma experiência equilibrada, aumente o valor gradualmente em vez de definir uma velocidade muito alta imediatamente.
:::

## Conclusão

Parabéns, você aumentou com sucesso a velocidade de trabalho no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂