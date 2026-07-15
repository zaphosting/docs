---
id: palworld-set-a-password
title: "Palworld: Definir uma Senha"
description: "Aprenda como definir uma senha para o servidor Palworld editando manualmente a configuração do jogo e aplicando a alteração corretamente. -> Saiba mais agora"
sidebar_label: Palworld: Definir uma Senha
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite proteger seu servidor com uma senha para que apenas jogadores autorizados possam entrar. Neste guia, você vai aprender como definir ou alterar manualmente a senha do servidor na configuração do seu servidor de jogos ZAP-Hosting e aplicar a senha corretamente.



## Preparação

Antes de começar, certifique-se de que:

- seu servidor de jogos Palworld está online na interface web da ZAP-Hosting
- você tem acesso à administração do servidor de jogos
- você sabe qual senha deseja usar para o acesso ao servidor

:::info Configuração Manual Necessária
Para Palworld, a senha pode ser configurada manualmente através dos arquivos de configuração do servidor. Na interface da ZAP-Hosting, você pode acessar esses arquivos pela administração do seu servidor de jogos em `Configs`.
:::

## Abrir o Arquivo de Configuração do Palworld

Para definir uma senha para seu servidor Palworld, você precisa editar o arquivo `PalWorldSettings.ini`.

### Encontrar o arquivo na interface da ZAP-Hosting

1. Faça login na interface web da ZAP-Hosting.
2. Abra a administração do seu servidor de jogos **Palworld**.
3. Navegue até **Configs**.
4. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém as principais configurações do servidor Palworld, incluindo a entrada que controla se uma senha é necessária para entrar.

:::note Finalidade do Arquivo de Configuração
O arquivo `PalWorldSettings.ini` armazena as opções do servidor em uma única linha de configuração, geralmente dentro da seção `OptionSettings=(...)`. Você precisa editar o valor `ServerPassword` ali.
:::

## Editar a Senha do Servidor

Depois de abrir o `PalWorldSettings.ini`, procure pela entrada `ServerPassword`.

### Entrada de configuração necessária

Use o seguinte valor:

```ini
ServerPassword="[sua_senha]"
```

Substitua `[sua_senha]` pela senha que você quer que os jogadores digitem ao entrar no seu servidor.

Se a senha estiver desativada no momento, o valor pode estar assim:

```ini
ServerPassword=""
```

Um valor vazio significa que nenhuma senha para entrar está definida.

### Exemplo de configuração

No Palworld, a configuração geralmente faz parte do bloco `OptionSettings=(...)`. Pode ser parecido com isto:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[sua_senha]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Mantenha o Formato Existente Intacto
Altere apenas o valor dentro de `ServerPassword="..."`. Não remova vírgulas, aspas, colchetes ou outras entradas na linha `OptionSettings=(...)`, pois isso pode impedir que o servidor carregue a configuração corretamente.
:::

## Referência de Configuração

A tabela a seguir mostra a configuração relevante para essa alteração de senha:

| Configuração | Valor de exemplo | Finalidade |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[sua_senha]"` | Exige que os jogadores digitem uma senha antes de entrar no servidor |

### Recomendações para a senha

Ao escolher uma senha, considere estes pontos:

| Recomendação | Explicação |
| --- | --- |
| Use uma senha única | Evite reutilizar a senha de contas de outros serviços |
| Evite palavras muito simples | Senhas fáceis são mais fáceis de serem descobertas |
| Compartilhe apenas com jogadores confiáveis | Quem tiver a senha pode tentar entrar |
| Armazene-a com segurança | Um gerenciador de senhas pode ajudar a manter o controle seguro |

:::tip Escolha uma Senha Forte
Se você pretende rodar um servidor Palworld privado para amigos ou uma comunidade restrita, use uma senha forte em vez de uma palavra simples ou o nome do servidor. Isso ajuda a reduzir tentativas indesejadas de entrada.
:::

## Salvar as Alterações e Reiniciar o Servidor

Depois de editar a senha, salve o arquivo na seção `Configs`.

### Aplicar a nova senha

Para que a alteração da senha entre em vigor:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor de jogos Palworld.

É necessário reiniciar porque o Palworld lê as configurações do servidor no arquivo durante a inicialização. Sem reiniciar, a nova senha pode não ser aplicada.

:::info Reinício Necessário
Após alterar o `ServerPassword`, você precisa reiniciar o servidor manualmente pela administração do servidor de jogos ZAP-Hosting para que a nova configuração seja carregada.
:::

## Verificar a Senha

Depois que o reinício for concluído, teste a configuração entrando no servidor pelo jogo Palworld.

### O que verificar

Ao conectar, confirme que:

- o servidor agora solicita uma senha antes de entrar
- a senha configurada funciona corretamente
- jogadores sem a senha não conseguem acessar o servidor

Se o servidor não pedir senha, reabra o `PalWorldSettings.ini` e verifique se:

- `ServerPassword` está presente na seção `OptionSettings=(...)`
- o valor não está vazio
- o arquivo foi salvo com sucesso
- o servidor foi reiniciado após a alteração

:::note Visibilidade da Senha
A senha fica armazenada em texto simples no arquivo de configuração. Certifique-se de compartilhar o acesso à administração do seu servidor apenas com usuários confiáveis.
:::

## Conclusão

Parabéns, você definiu com sucesso uma senha para seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂