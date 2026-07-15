---
id: palworld-collection-drop-rate
title: "Palworld: Taxa de Coleta"
description: "Aprenda a ajustar as configurações de coleta no Palworld, aumentar os recursos coletados e acelerar o respawn no seu servidor de jogos Palworld. -> Saiba mais agora"
sidebar_label: "Taxa de Coleta"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle quantos recursos os jogadores coletam e com que rapidez os objetos coletáveis reaparecem. Neste guia, você vai aprender a editar manualmente o arquivo de configuração correto no seu servidor de jogos ZAP-Hosting para alterar a taxa de coleta e as configurações relacionadas.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e que o servidor está offline ou pode ser reiniciado após as alterações.

:::info Acesso ao Arquivo de Configuração
Para Palworld, as configurações relevantes de gameplay estão armazenadas no arquivo `PalWorldSettings.ini`. Na administração do servidor de jogos ZAP-Hosting, você pode acessar esse arquivo através da seção `Configs`.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar as configurações de coleta, você precisa editar o arquivo principal de configuração do servidor Palworld.

### Localize o arquivo na interface ZAP-Hosting

1. Faça login na [interface web da ZAP-Hosting](https://zap-hosting.com).
2. Abra seu servidor de jogos Palworld.
3. Navegue até a seção `Configs` na administração do servidor.
4. Abra o arquivo chamado `PalWorldSettings.ini`.

:::note Arquivo Correto
As configurações relacionadas à coleta descritas neste guia estão armazenadas em `PalWorldSettings.ini`. Se você não encontrar as entradas esperadas imediatamente, elas geralmente estão dentro da linha de configuração `OptionSettings`.
:::

## Editar as Configurações de Coleta

Palworld armazena muitas opções de gameplay como pares chave-valor dentro da seção `OptionSettings` do arquivo `PalWorldSettings.ini`. Para aumentar os recursos coletados ou alterar a velocidade de reaparecimento dos nós de recursos, você precisa ajustar os valores relevantes ali.

### Chaves de configuração relevantes

Use as seguintes configurações para o comportamento relacionado à coleta:

| Chave de Configuração | Valor Padrão | Descrição |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Controla quantos itens os jogadores recebem dos recursos coletáveis. Valores maiores aumentam a quantidade coletada. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Controla a velocidade com que os objetos coletáveis reaparecem. Valores maiores fazem os recursos retornarem mais rápido. |
| `CollectionObjectHpRate` | `1.000000` | Controla o HP dos objetos coletáveis como pedras ou árvores. Valores maiores geralmente fazem com que demorem mais para serem quebrados. |

### Valores de configuração de exemplo

Se você quiser dobrar os recursos coletados e fazer os nós de recursos reaparecerem duas vezes mais rápido, defina ambos os valores para `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Se também quiser que os objetos coletáveis sejam mais fáceis de quebrar, você pode reduzir o multiplicador de HP:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Valores Iniciais Recomendados
Um valor de `2.000000` é um ponto de partida comum para `CollectionDropRate` e `CollectionObjectRespawnSpeedRate`. Isso proporciona uma progressão visivelmente mais rápida sem alterar o jogo Palworld de forma muito agressiva.
:::

## Aplicar as Alterações em `PalWorldSettings.ini`

Depois de abrir o `PalWorldSettings.ini`, encontre a entrada existente `OptionSettings` e ajuste as chaves relevantes diretamente dentro dela.

### Exemplo de trecho `OptionSettings`

Dependendo da configuração atual do seu servidor, a linha pode já conter muitas configurações. Você só precisa alterar os valores das chaves relacionadas à coleta se elas já existirem, ou adicioná-las se estiverem faltando.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Preserve a Sintaxe Existente
Certifique-se de manter o formato existente da linha `OptionSettings` intacto. Não remova vírgulas, colchetes ou outras configurações acidentalmente, ou o servidor pode falhar ao carregar a configuração corretamente.
:::

## Salvar e Reiniciar o Servidor

Depois de terminar de editar o arquivo, salve suas alterações na seção `Configs`.

### Necessidade de reinício

Palworld não aplica essas alterações de configuração de gameplay instantaneamente enquanto o servidor está rodando. Você precisa reiniciar o servidor após salvar o arquivo para que os novos valores sejam carregados.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Nenhum comando verificado necessário |

:::info Reinício Necessário
Um reinício completo do servidor é necessário após alterar `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` ou `CollectionObjectHpRate`. Nenhum comando adicional no jogo ou console é necessário para essas configurações específicas.
:::

## Verificar o Novo Comportamento de Coleta

Após o reinício, entre no seu servidor e teste alguns objetos coletáveis como árvores, pedras ou nós de minério.

### O que verificar

- Se os jogadores recebem mais materiais por ação de coleta
- Se os nós de recursos destruídos retornam mais rápido do que antes
- Se os objetos coletáveis parecem mais fáceis ou difíceis de quebrar caso você tenha alterado `CollectionObjectHpRate`

Se o resultado estiver muito forte ou fraco, volte ao `PalWorldSettings.ini` e ajuste os multiplicadores novamente.

:::tip Ajuste Fino do Seu Servidor
Se quiser uma configuração de coleta mais equilibrada no Palworld, aumente os valores gradualmente, por exemplo, de `1.000000` para `1.500000`, antes de partir para multiplicadores maiores.
:::

## Referência de Configuração

A tabela a seguir resume os valores mais importantes para essa configuração de coleta no Palworld.

| Configuração | Exemplo | Efeito |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Padrão | Quantidade padrão de recursos coletados |
| `CollectionDropRate=2.000000` | Aumentado | Recursos coletados dobrados |
| `CollectionObjectRespawnSpeedRate=1.000000` | Padrão | Velocidade padrão de respawn |
| `CollectionObjectRespawnSpeedRate=2.000000` | Aumentado | Respawn de recursos mais rápido |
| `CollectionObjectHpRate=1.000000` | Padrão | HP padrão dos objetos coletáveis |
| `CollectionObjectHpRate=0.500000` | Reduzido | Objetos coletáveis quebram mais rápido |

## Conclusão

Parabéns, você alterou com sucesso a taxa de coleta no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂