---
id: palworld-supply-drop-settings
title: "Palworld: Configurações de Supply Drop"
description: "Aprenda a alterar a frequência dos supply drops no seu servidor de jogos Palworld editando manualmente a configuração SupplyDropSpan. -> Saiba mais agora"
sidebar_label: Palworld: Configurações de Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld inclui supply drops que aparecem em intervalos regulares e podem conter recursos úteis. Neste guia, você vai aprender como alterar manualmente a frequência dos supply drops no seu servidor de jogos Palworld da ZAP-Hosting, editando o arquivo de configuração correto e aplicando as mudanças corretamente.

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld através da interface web da ZAP-Hosting e que o servidor está disponível na administração do seu servidor de jogos.

:::info Configuração Manual Necessária
Esta configuração é feita editando manualmente o arquivo de configuração do servidor Palworld. Você precisará abrir o arquivo de configuração na seção **Configs** da administração do seu servidor de jogos.
:::

## Localize o Arquivo de Configuração

Para alterar o intervalo dos supply drops, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do seu servidor de jogos ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.



:::note Localização do Arquivo de Configuração
Na ZAP-Hosting, as configurações relevantes do Palworld para o gameplay geralmente são gerenciadas pelo arquivo `PalWorldSettings.ini` na área **Configs** da administração do servidor. Se o layout da sua interface for um pouco diferente, use a lista disponível de arquivos de configuração e procure especificamente por `PalWorldSettings.ini`.
:::

## Edite a Configuração do Supply Drop

A configuração usada para a frequência dos supply drops é `SupplyDropSpan`.

Este valor define o intervalo entre os supply drops em **minutos**.

### Encontre a Seção Correta

No arquivo `PalWorldSettings.ini`, as configurações do servidor Palworld geralmente ficam dentro da linha `OptionSettings`. Você precisa localizar o bloco de configurações existente e verificar se `SupplyDropSpan` já está presente.

Se já existir, altere o valor.

Se não existir, adicione dentro da seção `OptionSettings=(...)` junto com as outras configurações separadas por vírgulas.

### Entrada de Configuração

Use o seguinte formato:

```ini
SupplyDropSpan=[seu_valor]
```

Substitua `[seu_valor]` pelo número de minutos que deseja usar.

### Valores de Exemplo

| Configuração | Significado |
| --- | --- |
| `SupplyDropSpan=180` | Intervalo padrão de 3 horas |
| `SupplyDropSpan=60` | Supply drops a cada 1 hora |
| `SupplyDropSpan=360` | Supply drops a cada 6 horas |
| `SupplyDropSpan=30` | Supply drops muito frequentes |

Aqui está um exemplo de como a configuração pode aparecer dentro do bloco completo `OptionSettings`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Mantenha a Sintaxe Existente Intacta
Não remova vírgulas, colchetes ou outros valores existentes na linha `OptionSettings`. Um erro de formatação nesta linha pode impedir o servidor de carregar a configuração corretamente.
:::

## Salve e Aplique as Alterações

Após editar o valor:

1. Salve as alterações no arquivo `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração do servidor de jogos ZAP-Hosting.

É necessário reiniciar porque o Palworld não aplica essa configuração de gameplay ao vivo enquanto o servidor está rodando.

### É Necessário Algum Comando Adicional?

Normalmente, não é necessário nenhum comando extra no jogo ou console para essa alteração específica. Reiniciar o servidor é o passo necessário para carregar o valor atualizado de `SupplyDropSpan`.

| Ação | Necessário |
| --- | --- |
| Editar `PalWorldSettings.ini` | Sim |
| Adicionar ou alterar `SupplyDropSpan` | Sim |
| Executar comando extra no console | Não |
| Reiniciar servidor após salvar | Sim |

## Verifique a Configuração

Depois que o servidor reiniciar, o novo intervalo dos supply drops deve estar ativo.

Como essa configuração controla eventos temporizados no mundo, pode ser necessário esperar o próximo ciclo de spawn para confirmar totalmente a mudança no jogo. Se você definir um intervalo menor, como `60` ou `30`, a verificação será mais rápida.

:::tip Teste as Alterações Mais Rápido
Se quiser confirmar que a configuração funciona sem esperar várias horas, defina temporariamente `SupplyDropSpan=30`. Após o teste, você pode alterar novamente para o valor preferido a longo prazo.
:::

## Solução de Problemas

### Configuração Não Aplica

Se a frequência dos supply drops não parecer mudar, verifique o seguinte:

- Certifique-se de que `SupplyDropSpan` está escrito exatamente como mostrado
- Confirme que o valor está dentro da seção `OptionSettings=(...)`
- Verifique se não há vírgulas quebradas ou colchetes faltando
- Reinicie o servidor após salvar o arquivo

### Servidor Apresenta Erros de Configuração

Se o servidor não iniciar após editar o arquivo, restaure a configuração anterior e revise a sintaxe cuidadosamente.

:::danger Formatação INI Incorreta
O Palworld armazena muitas configurações de gameplay em uma única linha `OptionSettings`. Mesmo um caractere fora do lugar pode quebrar a configuração. Sempre revise suas alterações cuidadosamente antes de salvar.
:::

## Conclusão

Parabéns, você alterou com sucesso as configurações de supply drop do Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!