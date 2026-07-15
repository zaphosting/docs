---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld permite que você altere o número máximo de Pals trabalhadores atribuídos a cada base no seu servidor. Neste guia, você vai aprender como editar o arquivo de configuração correto na interface web da ZAP-Hosting, ajustar o valor `BaseCampWorkerMaxNum` e aplicar a mudança corretamente.



## Preparation

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld através do painel de administração da ZAP-Hosting.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso à administração web do seu servidor para abrir a seção **Configs** e editar manualmente os arquivos de configuração do Palworld.
:::

## Understanding the Max Workers Setting

A configuração do Palworld responsável pelo número máximo de trabalhadores é `BaseCampWorkerMaxNum`. Essa opção controla quantos Pals podem trabalhar em cada base individual.

| Configuração | Arquivo de configuração | Propósito | Valor padrão | Máximo vanilla |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Define o número máximo de Pals trabalhadores por base | `15` | `50` |

:::note Informação sobre o Limite Vanilla
A documentação pública atual indica que o máximo normal dentro do jogo é `50`. Valores acima de `50` geralmente requerem mods e não fazem parte da configuração padrão de servidores vanilla.
:::

:::caution Impacto na Performance
Aumentar o número de trabalhadores pode elevar o uso de CPU e memória, pois mais Pals estarão ativos nas suas bases. Se usar um valor alto, monitore o desempenho do seu servidor após a alteração.
:::

## Open the Palworld Configuration File

Para alterar o limite de trabalhadores, você precisa editar o arquivo `PalWorldSettings.ini`.

### Encontre o arquivo na interface da ZAP-Hosting

Abra a administração do seu servidor de jogos Palworld e navegue até:

- `Configs`
- `PalWorldSettings.ini`

Este é o arquivo de configuração onde ficam as definições de gameplay do seu servidor Palworld.



## Edit the BaseCampWorkerMaxNum Value

Depois de abrir o `PalWorldSettings.ini`, procure pela linha `OptionSettings`. As configurações do servidor Palworld geralmente ficam armazenadas como pares chave-valor separados por vírgulas dentro dessa seção.

### Altere a entrada de configuração

Encontre a chave a seguir:

```ini
BaseCampWorkerMaxNum=15
```

Altere o valor para a quantidade que preferir. Por exemplo, para permitir `20` Pals trabalhadores por base, use:

```ini
BaseCampWorkerMaxNum=20
```

### Exemplo de configuração

Dependendo do seu arquivo atual, a configuração geralmente aparece dentro de uma entrada maior `OptionSettings` parecida com esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Edite Apenas o Valor Necessário
Altere somente o `BaseCampWorkerMaxNum`, a menos que queira ajustar intencionalmente outras configurações de gameplay. Isso ajuda a evitar erros acidentais na configuração.
:::

## Recommended Values

Você pode escolher qualquer valor que combine com seu estilo de jogo, desde que esteja dentro dos limites suportados pelo vanilla.

| Valor | Resultado | Recomendação |
| --- | --- | --- |
| `15` | Limite padrão de trabalhadores no Palworld | Melhor para gameplay padrão |
| `20` a `30` | Automação aumentada da base | Bom equilíbrio para a maioria dos servidores privados |
| `40` a `50` | Contagem muito alta de trabalhadores | Use somente se seu servidor tiver recursos suficientes |
| Acima de `50` | Comportamento não padrão vanilla | Geralmente requer mods e não é recomendado sem testes |

## Save and Apply the Changes

Depois de editar o valor, salve o arquivo `PalWorldSettings.ini` no editor de configuração da ZAP-Hosting.

### Reinicie o servidor

Após salvar o arquivo, reinicie seu servidor Palworld para que a nova configuração de max workers seja carregada.

:::info Reinício Necessário
As alterações no `PalWorldSettings.ini` não são aplicadas imediatamente enquanto o servidor está rodando. Você precisa reiniciar o servidor após salvar o arquivo.
:::

## Verify the New Worker Limit

Depois que o servidor reiniciar, entre no seu servidor Palworld e verifique uma das suas bases. Agora você deve conseguir atribuir Pals trabalhadores até o novo limite configurado.

Se a mudança não funcionar, verifique o seguinte:

| Verificação | O que conferir |
| --- | --- |
| Arquivo correto | Você editou o `PalWorldSettings.ini` |
| Chave correta | `BaseCampWorkerMaxNum` está presente e escrita corretamente |
| Sintaxe válida | A linha `OptionSettings` ao redor não foi quebrada |
| Reinício concluído | O servidor foi reiniciado completamente após salvar |
| Faixa de valor | O valor está dentro do limite vanilla normal de `50` |

:::caution Sintaxe da Configuração
As entradas de configuração do Palworld são sensíveis à formatação. Se você remover acidentalmente vírgulas, colchetes ou outras partes da linha `OptionSettings`, o servidor pode ignorar a configuração ou falhar ao carregá-la corretamente.
:::

## Conclusion

Parabéns, você alterou com sucesso o número máximo de trabalhadores por base no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂