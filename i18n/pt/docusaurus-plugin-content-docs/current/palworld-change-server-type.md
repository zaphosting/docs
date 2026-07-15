---
id: palworld-change-server-type
title: "Palworld: Alterar Tipo de Servidor"
description: "Aprenda como alterar o tipo do seu servidor Palworld entre Linux e Windows, atualizar o caminho correto da configuração e aplicar a mudança corretamente para compatibilidade com mods. -> Saiba mais agora"
sidebar_label: "Alterar Tipo de Servidor"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Palworld podem rodar com diferentes tipos de servidor, normalmente Linux ou Windows, dependendo da sua configuração de aluguel de servidores e requisitos de modding. Neste guia, você vai aprender como alterar o tipo de servidor na interface da ZAP-Hosting, identificar o caminho correto do arquivo de configuração depois da mudança e aplicar a alteração corretamente.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para parar e reiniciar o servidor.

:::info Informação Importante Sobre Mudanças de Tipo de Servidor
Alterar o tipo de servidor de Linux para Windows, ou de Windows para Linux, pode afetar os caminhos dos arquivos, a compatibilidade dos mods e os locais das configurações existentes. O tipo de servidor Windows é comumente necessário para certas configurações de mods baseados em UE4SS.
:::

:::caution Verifique a Necessidade de Reinstalação
Dependendo de como o produto Palworld está implantado no seu serviço, alterar o tipo de servidor pode exigir uma reinstalação ou reimplantação do software. Se a opção exata não estiver disponível diretamente na sua interface atual, entre em contato com o suporte antes de prosseguir.
:::

## Entenda o Que Muda ao Trocar o Tipo de Servidor

Alterar o tipo de servidor normalmente não significa mudar um valor dentro da configuração do gameplay do Palworld em si. Em vez disso, a principal mudança é o ambiente de software do servidor subjacente, que também altera a localização dos arquivos de configuração ativos.

Para Palworld, o arquivo principal de configuração é normalmente:

- `PalWorldSettings.ini`

A pasta que contém esse arquivo depende do tipo de servidor selecionado.

| Tipo de servidor | Caminho da pasta de configuração | Arquivo principal de configuração |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Por Que Isso Importa
Se você editar o arquivo de configuração Linux mas seu servidor estiver rodando atualmente como tipo Windows, suas alterações podem não ser aplicadas porque o servidor vai ler do caminho específico do Windows.
:::

## Pare o Servidor

Antes de alterar o tipo de servidor, você deve parar o servidor para evitar conflitos de arquivos e mudanças incompletas.

1. Faça login na interface web do servidor de jogos da ZAP-Hosting.
2. Abra a administração do seu servidor Palworld.
3. Pare o servidor usando as opções de controle do servidor.

:::tip Recomendado Antes de Editar
É uma boa prática criar um backup antes de alterar o tipo de servidor, especialmente se você já usa mods ou editou arquivos de configuração manualmente.
:::

## Altere o Tipo de Servidor na Interface da ZAP-Hosting

A mudança do tipo de servidor geralmente é feita através das configurações do produto ou do software na interface da ZAP-Hosting, não editando uma linha dentro do `PalWorldSettings.ini`.

1. Na administração do seu servidor Palworld, procure a área de software do servidor ou configurações do jogo.
2. Encontre a opção que controla o tipo de servidor instalado ou a variante do software.
3. Altere a configuração de `Linux` para `Windows`, ou de `Windows` para `Linux`, dependendo da sua configuração desejada.
4. Salve a alteração.



:::info Se Você Não Encontrar a Opção de Tipo de Servidor
O rótulo exato e a localização dessa configuração podem variar dependendo da interface atual da ZAP-Hosting ou da geração do produto. Se nenhum seletor de tipo de servidor estiver visível, a mudança pode exigir uma ação de reinstalação ou assistência do suporte.
:::

## Edite o Arquivo de Configuração Correto

Após alterar o tipo de servidor, você precisa verificar se está editando o arquivo de configuração ativo na pasta correta.

### Abra a Seção de Configurações

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para `Configs`.
3. Navegue até a pasta que corresponde ao tipo de servidor selecionado.

Use um dos seguintes caminhos:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Então abra:

- `PalWorldSettings.ini`

### Verifique ou Reaplique Suas Configurações

Se você editou configurações anteriormente usando o outro tipo de servidor, essas alterações podem existir apenas na pasta antiga. Você deve comparar ambas as versões do `PalWorldSettings.ini` e reaplicar quaisquer valores necessários no arquivo ativo agora.

| O que verificar | Por que é importante |
| --- | --- |
| Configurações personalizadas existentes | Podem existir apenas na pasta do tipo de servidor anterior |
| Configurações relacionadas a mods | O tipo Windows é frequentemente usado para suporte a mods UE4SS |
| Valores do gameplay | O servidor só lê o arquivo do caminho ativo específico do sistema operacional |

:::caution Não Presuma Que Ambos os Arquivos Estão Sincronizados
As pastas de configuração Linux e Windows são separadas. Alterar o tipo de servidor não garante automaticamente que suas configurações personalizadas sejam copiadas entre os dois locais.
:::

## Verifique as Entradas da Configuração

O próprio tipo de servidor normalmente não é controlado por uma linha dentro do `PalWorldSettings.ini`. Contudo, após a troca, você ainda deve confirmar que seu arquivo de configuração ativo contém as configurações que espera.

Uma estrutura típica do `PalWorldSettings.ini` se parece com isto:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Substitua os placeholders como:

- `[your_server_name]` pelo nome real do seu servidor
- `[your_admin_password]` pela sua senha de administrador
- `[your_server_password]` pela senha de entrada, se usada
- `[your_server_ip]` pelo endereço IP público do seu servidor, se exigido pela sua configuração

:::note Nenhum Comando Especial É Necessário no Arquivo
Não existe nenhuma entrada conhecida no `PalWorldSettings.ini` que altere o tipo de servidor subjacente de Linux para Windows ou vice-versa. Essa mudança é gerenciada pelo ambiente do servidor instalado na interface de aluguel de servidores.
:::

## Aplique a Mudança

Depois de alterar o tipo de servidor e confirmar o arquivo de configuração correto, você precisa aplicar a nova configuração.

### Reinicie o Servidor

Inicie o servidor novamente pela interface web da ZAP-Hosting após salvar suas alterações.

Na maioria dos casos, um reinício normal é suficiente se o tipo de software do servidor já foi alterado com sucesso.

### Reinstale se a Interface Exigir

Algumas implantações podem exigir uma reinstalação ou passo de reinstalação após a mudança do tipo de software. Se sua interface apresentar essa opção, siga-a cuidadosamente e verifique depois que:

- o tipo de servidor correto está ativo
- o caminho correto da configuração está sendo usado
- os valores do seu `PalWorldSettings.ini` ainda estão presentes

:::danger Reinstalação Pode Sobrescrever Arquivos
Se uma reinstalação for necessária, arquivos personalizados ou mods podem ser removidos a menos que estejam previamente salvos. Sempre verifique seus dados salvos, mods e arquivos de configuração antes de confirmar uma reinstalação.
:::

## Verifique se o Novo Tipo de Servidor Está Ativo

Depois que o servidor reiniciar, confirme que a mudança foi bem-sucedida.

### Confirme Pelo Caminho da Configuração

Abra `Configs` novamente e verifique se o caminho do arquivo ativo agora corresponde ao tipo de servidor selecionado:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Confirme a Compatibilidade dos Mods

Se você mudou para Windows especificamente para modding UE4SS, verifique se seus arquivos de mod e a configuração relacionada agora correspondem ao ambiente do servidor Windows.

### Revise o Comportamento do Servidor

Confira se o servidor inicia normalmente e se as configurações esperadas estão carregadas corretamente.

| Ponto de verificação | Resultado esperado |
| --- | --- |
| Servidor inicia com sucesso | Nenhuma falha de inicialização após a mudança de tipo |
| Caminho correto da configuração | Corresponde ao tipo de servidor Linux ou Windows |
| Configurações personalizadas carregadas | Servidor usa seu `PalWorldSettings.ini` editado |
| Suporte a mods | Requisitos de mods baseados em Windows podem ser usados se aplicável |

## Solução de Problemas

### A Opção de Tipo de Servidor Não Está Visível

Se você não encontrar uma configuração para alterar o tipo de servidor, isso pode significar que a opção não está exposta diretamente na interface do seu produto atual. Nesse caso, entre em contato com o suporte da ZAP-Hosting e pergunte se seu serviço Palworld pode ser alternado entre os tipos de servidor Linux e Windows.

### Minhas Configurações Não Foram Aplicadas Após a Mudança

Isso geralmente acontece quando o caminho de configuração errado foi editado. Verifique se você atualizou:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

ou

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

com base no tipo de servidor ativo atualmente.

### Mods Ainda Não Funcionam

Trocar para o tipo de servidor Windows sozinho pode não completar toda a configuração dos mods. Alguns mods exigem arquivos adicionais, loaders ou passos manuais de instalação além da mudança do tipo de servidor.

## Conclusão

Parabéns, você alterou com sucesso o tipo do seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂