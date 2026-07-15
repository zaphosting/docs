---
id: palworld-max-dropped-items
title: "Palworld: Máximo de Itens Caídos"
description: "Aprenda como alterar os limites de itens caídos e as configurações de desaparecimento de itens no seu servidor de Palworld editando os valores corretos no arquivo de configuração. -> Saiba mais agora"
sidebar_label: "Máximo de Itens Caídos"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle quantos itens caídos podem existir no seu mundo e por quanto tempo esses itens permanecem antes de desaparecerem. Neste guia, você vai aprender como editar o arquivo de configuração correto na interface da ZAP-Hosting, ajustar as configurações de itens caídos e aplicar as mudanças com segurança.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar seus arquivos de configuração.

:::info Configuração Manual Necessária
Esta configuração é feita manualmente editando o arquivo de configuração do servidor Palworld. O arquivo necessário pode ser acessado na administração do seu servidor de jogos em `Configs`.
:::

## Abra o Arquivo de Configuração do Palworld

Para alterar o limite de itens caídos, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld
2. Navegue até `Configs`
3. Abra o arquivo `PalWorldSettings.ini`

Este arquivo contém os principais valores de configuração do gameplay para seu servidor Palworld, incluindo o comportamento dos itens caídos.

## Altere as Configurações dos Itens Caídos

As configurações dos itens caídos são definidas por entradas dentro do `PalWorldSettings.ini`. Você precisa ajustar os valores relevantes na linha ou seção ativa do arquivo.

### Chaves de Configuração Relevantes

Use as seguintes chaves de configuração para controlar os itens caídos:

| Chave de Configuração | Valor Padrão | Descrição |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Número máximo de itens caídos que podem existir no mundo ao mesmo tempo |
| `DropItemAliveMaxHours` | `1.0` | Tempo em horas antes dos itens caídos desaparecerem automaticamente |

### Exemplo de Configuração

Dependendo do conteúdo atual do seu arquivo, esses valores geralmente fazem parte da entrada de configurações de opções do Palworld. Por exemplo:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Se essas chaves já existirem na sua entrada `OptionSettings`, altere apenas os valores. Por exemplo:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

Neste exemplo:

- `DropItemMaxNum=2000` limita o mundo a `2000` itens caídos
- `DropItemAliveMaxHours=0.500000` faz os itens caídos desaparecerem após `0,5` horas, ou seja, `30` minutos

:::note Formato do Valor
As configurações do servidor Palworld costumam usar valores decimais com vários zeros à direita, como `1.000000`. Você deve manter o estilo de formatação existente no seu arquivo sempre que possível.
:::

## Escolha Valores Adequados

Os valores corretos dependem da quantidade de jogadores, atividade do servidor e geração de loot.

### Casos de Uso Recomendados

| Cenário | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Servidor privado pequeno | `3000` | `1.000000` |
| Servidor multiplayer movimentado | `2000` | `0.500000` |
| Configuração focada em desempenho | `1000` a `1500` | `0.250000` a `0.500000` |

### Considerações de Desempenho

Limites menores de itens caídos podem melhorar o desempenho do servidor, especialmente se:

- muitos jogadores estiverem ativos ao mesmo tempo
- seu mundo gerar uma grande quantidade de itens
- jogadores frequentemente coletarem, construírem ou deixarem loot no chão

:::tip Melhore o Desempenho com Limites Menores
Se você notar lag ou redução na responsividade do servidor, diminuir tanto o valor máximo de itens caídos quanto o tempo para desaparecimento pode ajudar a reduzir a bagunça no mundo e melhorar a estabilidade.
:::

:::caution Evite Valores Extremamente Baixos
Se você definir esses valores muito baixos, os jogadores podem perceber que os itens desaparecem rápido demais ou que o limite de itens caídos é atingido antes do esperado. Teste as mudanças cuidadosamente após aplicá-las.
:::

## Salve e Aplique as Alterações

Após editar o `PalWorldSettings.ini`, salve o arquivo na interface da ZAP-Hosting.

Depois que o arquivo for salvo, reinicie seu servidor Palworld para que as novas configurações de itens caídos sejam carregadas.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Não |

:::info Reinício Necessário
As alterações no `PalWorldSettings.ini` só terão efeito após o reinício do servidor Palworld.
:::

## Verifique as Novas Configurações

Após o reinício, entre no seu servidor e monitore como os itens caídos se comportam durante o gameplay normal.

Você deve verificar se:

- o número de itens caídos está sendo controlado conforme esperado
- os itens permanecem no chão pelo tempo pretendido
- o desempenho do servidor melhora após reduzir a quantidade ou o tempo de vida dos itens

Se necessário, volte ao `PalWorldSettings.ini` e ajuste os valores novamente.

## Conclusão

Parabéns, você configurou com sucesso o máximo de itens caídos e o tempo para desaparecimento no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂