---
id: palworld-change-server-name
title: "Palworld: Alterar Nome do Servidor"
description: "Aprenda como alterar o nome do seu servidor Palworld e atualizar o nome exibido no navegador de servidores para os jogadores, editando manualmente o arquivo de configuração correto. -> Saiba mais agora"
sidebar_label: Palworld: Alterar Nome do Servidor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld usa um arquivo de configuração para definir o nome do servidor exibido no navegador de servidores dentro do jogo. Neste guia, você vai aprender como alterar manualmente o nome exibido do servidor na interface web da ZAP-Hosting e aplicar a mudança corretamente.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar seus arquivos de configuração.

:::info Configuração Manual Necessária
Essa alteração é feita editando manualmente a configuração do servidor Palworld. O arquivo relevante pode ser acessado pela administração do seu servidor de jogos em `Configs`.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar o nome do servidor, você precisa editar o arquivo `PalWorldSettings.ini`.

Na interface web da ZAP-Hosting:

1. Abra seu servidor de jogos **Palworld**.
2. Vá para **Configs** na administração do servidor.
3. Abra o arquivo `PalWorldSettings.ini`.

:::note Localização do Arquivo de Configuração
Nos servidores dedicados Palworld, as configurações relevantes geralmente ficam no arquivo `PalWorldSettings.ini`. Na interface da ZAP-Hosting, você deve editar esse arquivo pela seção `Configs` em vez de alterar os caminhos dos arquivos manualmente.
:::

## Editar o Nome do Servidor

Dentro do arquivo `PalWorldSettings.ini`, procure a seção `OptionSettings`. O nome exibido no navegador de servidores é controlado pela entrada `ServerName`.

Você também pode opcionalmente definir uma descrição do servidor com `ServerDescription`.

### Exemplo de Configuração

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Descrição do seu servidor Palworld")
```

Se seu arquivo já contém uma linha `OptionSettings=(...)` mais longa, você só precisa alterar os valores existentes para `ServerName` e opcionalmente `ServerDescription`.

### Valores que Você Precisa Alterar

| Chave da Configuração | Descrição | Exemplo de Valor |
| --- | --- | --- |
| `ServerName` | O nome exibido no navegador de servidores Palworld | `"zaphosting"` |
| `ServerDescription` | Texto opcional de descrição exibido junto ao servidor | `"Servidor público de sobrevivência"` |

:::caution Mantenha as Configurações Existentes Intactas
`OptionSettings` frequentemente contém muitas outras configurações do servidor em uma única linha. Altere apenas os valores de `ServerName` e `ServerDescription`, a menos que queira modificar outras opções intencionalmente.
:::

## Salvar as Alterações

Após editar os valores:

1. Salve o arquivo `PalWorldSettings.ini` na seção **Configs**.
2. Verifique se as aspas e vírgulas continuam corretamente formatadas.

### Exemplo de Linha Existente

Se seu arquivo contém uma linha semelhante ao exemplo abaixo, atualize apenas os textos relevantes:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Servidor público de sobrevivência",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Reiniciar o Servidor

Depois de salvar a configuração, você precisa reiniciar seu servidor Palworld para que o novo nome seja carregado.

### Aplicar a Nova Configuração

Use a função de reiniciar no painel de administração do seu servidor de jogos na ZAP-Hosting.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |

:::tip Atraso na Atualização do Navegador de Servidores
Após o reinício, o nome atualizado do servidor pode não aparecer instantaneamente para todos os jogadores no navegador de servidores. Se necessário, aguarde alguns minutos e atualize a lista de servidores.
:::

## Verificar o Novo Nome do Servidor

Depois que o servidor reiniciar:

1. Abra o Palworld.
2. Verifique o navegador de servidores multiplayer.
3. Procure pelo nome que você configurou em `ServerName`.

Se o nome antigo ainda aparecer, reabra o arquivo `PalWorldSettings.ini` e confirme que:
- o valor de `ServerName` foi alterado corretamente
- o arquivo foi salvo com sucesso
- o servidor foi reiniciado completamente após a alteração

## Conclusão

Parabéns, você alterou com sucesso o nome do seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂