---
id: palworld-building-limits
title: "Palworld: Limites de Construção"
description: "Aprenda como alterar os limites de construção, regras de base e restrições de área no Palworld editando manualmente a configuração do seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Limites de Construção
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle vários limites e restrições de construção através da configuração do servidor. Neste guia, você vai aprender como editar manualmente o arquivo de configuração correto na interface web da ZAP-Hosting, alterar os valores relevantes de construção e aplicar as mudanças corretamente.



## Preparação

Antes de começar, certifique-se de que:

- você tem acesso ao seu servidor de jogos Palworld na administração de servidores de jogos da ZAP-Hosting
- seu servidor está offline no momento ou você está preparado para reiniciá-lo após fazer as alterações
- você sabe que este guia cobre limites gerais de construção e restrições de área, não os limites específicos de bases de guilda

:::info Configuração Manual Necessária
Essas configurações devem ser alteradas manualmente no arquivo de configuração. O arquivo relevante pode ser acessado na administração do seu servidor de jogos ZAP-Hosting em `Configs`.
:::

:::note Limites de Base de Guilda
Se você deseja alterar o número de bases por guilda em vez dos limites gerais de construção abordados aqui, deve usar o guia separado de limite de base de guilda, se disponível na ZAP-Docs.
:::

## Abrir o arquivo de configuração

Para alterar os limites de construção, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Navegue até `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém as principais configurações do mundo e do gameplay para seu servidor Palworld, incluindo várias entradas relacionadas à construção.

## Editar as configurações de limite de construção

Os valores relevantes estão dentro da seção `OptionSettings` no arquivo `PalWorldSettings.ini`.

### Chaves de configuração relevantes

Use as seguintes configurações para controlar limites de construção e restrições de área:

| Chave de Configuração | Descrição | Valor de Exemplo |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Define o número máximo de construções por jogador. `0` desativa o limite. | `0` |
| `BaseCampMaxNum` | Define o número máximo de acampamentos base permitidos em todo o servidor. | `128` |
| `bBuildAreaLimit` | Controla se as restrições de construção próximas a certas estruturas estão ativadas. | `False` |

### Exemplo de configuração

Dependendo do conteúdo atual do seu arquivo, esses valores geralmente fazem parte da linha `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Se seu arquivo já contém uma linha `OptionSettings` mais longa, não remova os outros valores existentes. Você só precisa alterar ou adicionar as entradas relevantes dentro desse mesmo bloco de configurações.

### O que cada valor faz

| Configuração | Efeito |
| --- | --- |
| `MaxBuildingLimitNum=0` | Remove o limite de construções por jogador |
| `MaxBuildingLimitNum=[seu_numero]` | Limita cada jogador ao número especificado de construções |
| `BaseCampMaxNum=[seu_numero]` | Define o número total de acampamentos base permitidos no servidor |
| `bBuildAreaLimit=True` | Impede construções próximas a estruturas restritas, como pontos de viagem rápida |
| `bBuildAreaLimit=False` | Desativa essa restrição de área |

:::caution Mantenha a Sintaxe Existente Intacta
O arquivo `PalWorldSettings.ini` é sensível à formatação. Certifique-se de alterar apenas os valores necessários e manter as vírgulas, colchetes e a estrutura geral `OptionSettings=(...)` intactos.
:::

## Salvar suas alterações

Após editar os valores:

1. Salve o arquivo na seção `Configs`.
2. Revise a linha novamente para evitar erros de formatação.

Se a sintaxe estiver incorreta, o servidor pode ignorar as configurações alteradas ou falhar ao aplicá-las corretamente.

### Exemplos de valores personalizados

Aqui está um exemplo que limita cada jogador a `5000` construções, permite até `20` acampamentos base no servidor e mantém as zonas de construção restritas ativadas:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Aqui está outro exemplo que remove o limite de construções por jogador e desativa as restrições de área:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Reiniciar o servidor

Após salvar a configuração, você precisa reiniciar seu servidor Palworld para que as novas configurações sejam carregadas.

Na administração do servidor de jogos ZAP-Hosting:

1. pare o servidor se ele ainda estiver rodando
2. inicie o servidor novamente

É necessário um reinício completo para que as alterações no `PalWorldSettings.ini` tenham efeito.

:::tip Aplicar Alterações com Segurança
Se você estiver fazendo várias alterações na configuração ao mesmo tempo, é uma boa prática salvar todas as edições primeiro e depois realizar um único reinício. Isso ajuda a evitar downtime desnecessário.
:::

## Verificar os novos limites

Quando o servidor estiver online novamente, entre no servidor e teste o novo comportamento de construção.

Você deve verificar:

- se os jogadores podem colocar mais ou menos estruturas do que antes
- se o número total de acampamentos base corresponde ao valor configurado
- se construir próximo a estruturas restritas está permitido ou bloqueado conforme o valor de `bBuildAreaLimit`

Se as alterações não parecerem aplicadas, reabra o `PalWorldSettings.ini` e confirme que:

- os valores foram salvos corretamente
- as chaves estão dentro do bloco `OptionSettings`
- o servidor foi reiniciado completamente após a edição

## Referência de configuração

| Arquivo | Localização na ZAP-Hosting | Ação necessária após editar |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` na administração do seu servidor de jogos | Reiniciar o servidor |

| Configuração | Uso recomendado |
| --- | --- |
| `MaxBuildingLimitNum` | Use para controlar limites de construção por jogador |
| `BaseCampMaxNum` | Use para controlar o número total de acampamentos base no servidor |
| `bBuildAreaLimit` | Use para permitir ou restringir construções próximas a estruturas protegidas do mapa |

## Conclusão

Parabéns, você alterou com sucesso os limites de construção no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!