---
id: windrose-world-modifiers
title: "Windrose: Modificadores do Mundo"
description: "Configure os modificadores do mundo Windrose com uma referência completa de parâmetros para valores float, configurações de combate e exemplo de parâmetros de escala cooperativa -> Saiba mais agora"
sidebar_label: Modificadores do mundo
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os modificadores personalizados do mundo Windrose permitem ajustar combate, combate naval, exploração, missões e escala cooperativa em detalhes. Neste guia, você vai aprender a editar o arquivo `WorldDescription.json`, entender cada parâmetro e aplicar configurações personalizadas no seu servidor de jogos Windrose.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de ter o seguinte:

- Um servidor de jogos Windrose ativo na ZAP-Hosting
- Acesso ao gerenciamento do servidor de jogos
- Seu servidor parado antes de editar os arquivos
- Acesso à área **Configs** ou **Gerenciador de Arquivos** no gerenciamento do servidor de jogos

:::info Localização do Arquivo de Configuração
Os modificadores personalizados do mundo ficam armazenados no arquivo `WorldDescription.json` dentro do bloco `WorldSettings`.
:::

:::caution Pare o Servidor Primeiro
Você deve sempre parar seu servidor antes de editar o `WorldDescription.json`. Isso ajuda a evitar corrupção de arquivos ou sobrescrita das alterações durante a inicialização ou operações de autosave.
:::

## Entendendo os Modificadores do Mundo

Cada configuração personalizada é definida individualmente dentro do `WorldDescription.json` no bloco `WorldSettings`. O jogo separa os valores por tipo:

- `float` para multiplicadores numéricos como vida ou dano
- `bool` para opções verdadeiro ou falso
- `tag` para valores nomeados de dificuldade, como dificuldade de combate

Essa estrutura é importante porque cada parâmetro deve estar na seção correta. Se você colocar um valor `float` em `bool`, ou usar uma tag inválida, a configuração pode não funcionar como esperado.

:::note Tipos de Parâmetros
Se você não está familiarizado com o termo *parâmetro*, ele significa simplesmente um valor configurável usado pelo jogo. Neste guia, cada parâmetro controla uma parte da dificuldade do mundo ou do comportamento do gameplay.
:::

## Abrindo o Arquivo de Configuração do Mundo

Para aplicar modificadores personalizados do mundo, você precisa editar o arquivo correto do mundo.

1. Pare seu servidor Windrose no gerenciamento do servidor de jogos.
2. Abra o **Gerenciador de Arquivos**.
3. Navegue até o seguinte caminho:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Substitua os placeholders conforme:

| Placeholder | Significado |
| --- | --- |
| `[your_game_version]` | A pasta da versão atual do seu jogo Windrose |
| `[your_world_id]` | O ID do mundo que você quer modificar |

:::tip Encontrando o Mundo Correto
Se você tem múltiplos mundos, certifique-se de editar o arquivo `WorldDescription.json` dentro da pasta correta `[your_world_id]`. Caso contrário, suas alterações afetarão outro save.
:::

## Editando o Bloco WorldSettings

Dentro do `WorldDescription.json`, localize o bloco `WorldSettings`. Adicione ou ajuste seus valores personalizados ali.

Use a seguinte estrutura:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Depois de salvar o arquivo, inicie seu servidor novamente.

:::info Comportamento do Preset
Se você definir qualquer valor personalizado manualmente, o `WorldPresetType` muda automaticamente para `Custom` na próxima inicialização do servidor. Se quiser usar um preset limpo em vez de valores customizados, deve usar a configuração de preset apropriada ao invés de misturar os dois métodos.
:::

## Referência Completa de Parâmetros

As tabelas a seguir fornecem uma referência completa para cada modificador personalizado do mundo disponível.

### Parâmetros de Combate

| Parâmetro | Seção | Padrão | Intervalo | Efeito |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicador de vida dos inimigos |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicador de dano dos inimigos |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Agressividade dos chefes e dificuldade dos encontros |

`CombatDifficulty` deve ser escrito como um valor tag, por exemplo:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Valores disponíveis:

| Dificuldade | Valor TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Parâmetros de Combate Naval

| Parâmetro | Seção | Padrão | Intervalo | Efeito |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Multiplicador de vida dos navios inimigos |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Multiplicador de dano dos navios inimigos |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Número de marinheiros inimigos para derrotar em um abordo |

Essas configurações são úteis se você quiser tornar batalhas navais mais fáceis para tripulações pequenas ou muito mais desafiadoras para grupos experientes.

### Parâmetros de Escala Cooperativa

| Parâmetro | Seção | Padrão | Intervalo | Efeito |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Ajusta vida e perda de postura dos inimigos baseado no número de jogadores |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Ajusta vida dos navios inimigos baseado no número de jogadores |

Esses valores são especialmente úteis para tripulações maiores. Eles permitem manter o combate equilibrado conforme mais jogadores entram no mundo.

### Parâmetros de Exploração

| Parâmetro | Seção | Padrão | Efeito |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Desativa marcadores no mapa para pontos de interesse |

:::note Nome EasyExplore
Apesar do nome, definir `EasyExplore` como `true` torna a exploração mais difícil porque desativa os marcadores no mapa para pontos de interesse. Isso é efetivamente um modo de exploração imersiva.
:::

### Parâmetros de Missões

| Parâmetro | Seção | Padrão | Efeito |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Quando um jogador completa uma missão cooperativa, ela é automaticamente completada para todos os outros jogadores que a tenham ativa |

Essa configuração é útil se você quiser simplificar a progressão em grupo ou exigir que cada jogador complete os objetivos individualmente.

## Referência de Escala de Multiplicadores

Se você não tem certeza de como um valor `float` altera o gameplay, use esta referência rápida de escala.

| Valor | Efeito |
| --- | --- |
| `0.5` | `50%` - notavelmente mais fácil |
| `1.0` | `100%` - padrão ou normal |
| `2.0` | `200%` - notavelmente mais difícil |
| `5.0` | `500%` - extremamente difícil |

Esta tabela é um exemplo prático de parâmetros para balancear seu mundo. Valores menores reduzem a dificuldade, enquanto valores maiores aumentam significativamente.

:::tip Comece com Pequenos Ajustes
Se estiver testando mudanças de balanceamento, aumente ou diminua um parâmetro por vez. Isso facilita entender qual configuração causou a diferença no gameplay.
:::

## Configurações de Exemplo

Os exemplos a seguir podem ajudar você a montar sua própria configuração personalizada.

### Tripulação Casual

Essa configuração reduz a pressão do combate, mantém o compartilhamento de missões ativado e facilita o abordo.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Mares Hardcore

Essa configuração aumenta a dificuldade tanto em terra quanto naval, desativa a conclusão compartilhada de missões e ativa a exploração imersiva.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Escala para Grupo Grande

Essa configuração é útil para grupos maiores, como 8 jogadores, onde a escala padrão pode parecer fácil demais.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Melhores Práticas para Editar Valores

### Use Intervalos Válidos

Cada parâmetro `float` suporta apenas um intervalo definido. Manter-se dentro do intervalo documentado ajuda a evitar comportamentos inesperados.

| Parâmetro | Mínimo | Máximo |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Valores Inválidos
Se você usar valores não suportados, formatação incorreta ou colocar um parâmetro na seção errada, o jogo pode ignorar a configuração ou falhar ao aplicá-la corretamente.
:::

### Mantenha a Formatação JSON Correta

Ao editar o `WorldDescription.json`, certifique-se de que:

- Todas as chaves estejam entre aspas duplas
- As vírgulas estejam no lugar correto
- Chaves `{}` e colchetes estejam fechados corretamente
- `true` e `false` estejam em letras minúsculas
- Valores decimais usem ponto, por exemplo `1.5`

Um arquivo JSON quebrado pode impedir que a configuração do mundo carregue corretamente.

### Reinicie Após Salvar

Depois de terminar a edição:

1. Salve o `WorldDescription.json`
2. Inicie seu servidor novamente
3. Entre no servidor e teste as mudanças no gameplay

Alguns valores são mais fáceis de verificar em combates, abordos ou sessões cooperativas do que imediatamente ao entrar.

## Gerenciando Configurações no Gerenciamento do Servidor de Jogos

Você pode gerenciar os arquivos de configuração do Windrose diretamente no gerenciamento do servidor de jogos ZAP-Hosting, nas opções disponíveis de configs e arquivos. Essa é a forma recomendada de editar o `WorldDescription.json` se não quiser usar ferramentas externas.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Se a entrada exata da config não estiver listada diretamente, use o **Gerenciador de Arquivos** e navegue manualmente até o caminho do arquivo do mundo mostrado anteriormente neste guia.

:::info Gerenciamento de Configurações
Dependendo da interface atual do servidor de jogos e da configuração do seu mundo, a listagem exata dos arquivos pode variar. Se uma entrada específica não estiver visível, use o caminho do arquivo diretamente ao invés de assumir que a funcionalidade está faltando.
:::

## Solução de Problemas

### Alterações Não São Aplicadas

Se seus modificadores não estiverem ativos após reiniciar, verifique o seguinte:

- Você editou o `WorldDescription.json` correto
- O servidor estava parado antes da edição
- A sintaxe JSON está válida
- Cada parâmetro está na seção correta: `float`, `bool` ou `tag`
- O servidor foi reiniciado completamente após salvar

### Dificuldade Parece Inalterada

Alguns modificadores são mais perceptíveis que outros. Por exemplo:

- `MobHealthMultiplier` é mais fácil de notar em combates normais
- `ShipHealthMultiplier` só é perceptível durante combates navais
- `Coop_StatsCorrectionModifier` é mais visível com múltiplos jogadores
- `EasyExplore` afeta apenas o comportamento da exploração e os marcadores do mapa

### Preset Mudou para Custom

Esse é um comportamento esperado assim que você definir valores personalizados manualmente. O jogo troca automaticamente o tipo de preset do mundo para `Custom` na próxima inicialização.

## Conclusão

Parabéns, você configurou com sucesso os modificadores do mundo Windrose. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂