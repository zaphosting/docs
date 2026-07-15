---
id: palworld-max-players
title: "Palworld: Máximo de Jogadores"
description: "Aprenda como alterar a configuração de máximo de jogadores no Palworld no seu servidor de jogos Palworld editando o arquivo de configuração correto na interface ZAP. -> Saiba mais agora"
sidebar_label: Palworld: Máximo de Jogadores
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle quantos jogadores podem entrar no seu servidor ao mesmo tempo. Neste guia, você vai aprender como alterar manualmente o limite máximo de jogadores editando o arquivo de configuração correto na administração do seu servidor de jogos ZAP-Hosting.



## Preparação

Antes de começar, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld na interface web da ZAP-Hosting.

:::info Acesso ao Arquivo de Configuração
Você precisa editar a configuração do servidor manualmente através da área **Configs** na administração do seu servidor de jogos. Se ainda não sabe como acessar seu servidor, abra-o primeiro pela interface web da ZAP-Hosting.
:::

## Localize o Arquivo de Configuração do Palworld

Para alterar o número máximo de jogadores, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do seu servidor de jogos ZAP-Hosting:

1. Abra seu servidor **Palworld**
2. Vá para **Configs**
3. Abra o arquivo chamado `PalWorldSettings.ini`

Este arquivo contém as principais configurações do jogo e do servidor, incluindo o número máximo de jogadores permitidos.

:::note Arquivo Correto
Para essa alteração, você deve editar somente o arquivo `PalWorldSettings.ini`. Se seu servidor tiver arquivos adicionais, não altere valores não relacionados a menos que saiba exatamente o que está fazendo.
:::

## Altere o Número Máximo de Jogadores

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings` e encontre a entrada `ServerPlayerMaxNum`.

A configuração relevante é:

| Chave da Configuração | Descrição | Valor Padrão |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Define o número máximo de jogadores que podem entrar no servidor | `32` |

Uma entrada típica se parece com isto:

```ini
ServerPlayerMaxNum=32
```

Altere o valor para o limite de jogadores que preferir. Por exemplo, para permitir 16 jogadores:

```ini
ServerPlayerMaxNum=16
```

Ou para manter o padrão de 32 jogadores:

```ini
ServerPlayerMaxNum=32
```

:::caution Use Valores Suportados
Servidores dedicados Palworld geralmente usam `32` como máximo padrão. Se você definir um valor muito alto, isso pode afetar a estabilidade ou desempenho do servidor dependendo do seu plano e da versão atual do jogo. Se estiver inseguro, comece com um valor menor e teste seu servidor primeiro.
:::

## Exemplo de Configuração

Dependendo do formato do seu arquivo, a configuração pode aparecer dentro de uma linha maior `OptionSettings`. Nesse caso, você só precisa alterar o valor de `ServerPlayerMaxNum`.

Exemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Se seu arquivo usar esse formato, não remova vírgulas, colchetes ou aspas de outras entradas. Apenas substitua o número após `ServerPlayerMaxNum=`.

## Salve e Aplique as Alterações

Após alterar o valor:

1. Salve o arquivo `PalWorldSettings.ini`
2. Reinicie seu servidor Palworld

É necessário reiniciar para que o novo limite máximo de jogadores seja aplicado.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Executar comandos adicionais no console | Nenhum comando adicional verificado como necessário |
| Reiniciar o servidor | Sim |

:::tip Reinício Necessário
As alterações na configuração `ServerPlayerMaxNum` não são aplicadas imediatamente enquanto o servidor está rodando. Você precisa reiniciar o servidor para que o Palworld carregue as configurações atualizadas.
:::

## Verifique o Novo Limite de Jogadores

Após o reinício, seu servidor deve usar o novo limite máximo de jogadores.

Você pode verificar isso:

- conferindo os detalhes do servidor na administração do seu servidor de jogos, se exibido lá
- entrando no servidor com múltiplos jogadores
- revisando a configuração atual novamente no `PalWorldSettings.ini`

Se a configuração não for aplicada, abra o arquivo novamente e confirme que:

- `ServerPlayerMaxNum=[seu_valor]` está presente
- a formatação do arquivo não foi quebrada
- o servidor foi totalmente reiniciado após salvar

:::caution Sintaxe da Configuração
Se você remover acidentalmente uma vírgula, colchete ou outro valor da linha `OptionSettings`, o servidor pode ignorar a configuração ou falhar ao carregar o arquivo corretamente. Edite o arquivo com cuidado e altere somente o valor necessário.
:::

## Conclusão

Parabéns, você alterou com sucesso o número máximo de jogadores no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂