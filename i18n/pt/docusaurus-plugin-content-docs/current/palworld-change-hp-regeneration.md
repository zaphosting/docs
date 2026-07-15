---
id: palworld-change-hp-regeneration
title: "Palworld: Alterar Regeneração de HP"
description: "Aprenda como alterar a regeneração de HP no Palworld editando as configurações de regeneração do jogador e dos Pals no seu servidor para cura mais rápida, mais lenta ou desativada -> Saiba mais agora"
sidebar_label: "Alterar Regeneração de HP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você altere as configurações de regeneração tanto para jogadores quanto para Pals através da configuração principal do servidor. Neste guia, você vai aprender como editar o arquivo de configuração correto na interface web da ZAP-Hosting, ajustar os valores de regeneração de HP e aplicar as mudanças corretamente.



## Preparação

Antes de começar, certifique-se de que seu servidor de jogos Palworld está online e que você pode acessar a administração web dele pelo painel da ZAP-Hosting.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso à administração do seu servidor de jogos e à área `Configs` para editar manualmente os arquivos de configuração do Palworld.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar a regeneração de HP, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Navegue até `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay do seu servidor, incluindo os multiplicadores de regeneração de vida para jogadores e Pals.

:::note Alterações Manuais na Configuração
Dependendo da sua configuração atual, as configurações podem aparecer em uma linha longa de parâmetros dentro da seção `OptionSettings`. Você deve editar os valores existentes com cuidado e manter a formatação intacta.
:::

## Alterar os Valores de Regeneração de HP

As configurações de regeneração de HP são armazenadas como multiplicadores numéricos. Um valor de `1.0` usa a velocidade padrão de regeneração.

### Configurações de Regeneração Suportadas

Use as seguintes chaves de configuração no `PalWorldSettings.ini`:

| Chave de Configuração | Descrição | Valor Padrão |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Taxa natural de regeneração de HP do jogador | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Regeneração de HP do jogador enquanto dorme | `1.0` |
| `PalAutoHPRegeneRate` | Taxa natural de regeneração de HP do Pal | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Regeneração de HP do Pal enquanto dorme na Palbox | `1.0` |

### Comportamento dos Valores

Você pode usar a seguinte lógica para os valores ao alterar a regeneração:

| Valor | Efeito |
| --- | --- |
| `1.0` | Velocidade padrão de regeneração |
| Maior que `1.0` | Cura mais rápida |
| Menor que `1.0` | Cura mais lenta |
| `0.0` | Desativa a regeneração |

:::tip Escolhendo Bons Valores de Regeneração
Se quiser uma experiência de sobrevivência um pouco mais fácil, experimente valores como `1.5` ou `2.0`. Para um desafio maior, use valores abaixo de `1.0` ou desative a regeneração completamente com `0.0`.
:::

## Editar as Entradas de Configuração

Na maioria das configurações de servidor Palworld, esses valores ficam dentro da linha `OptionSettings=(...)` do `PalWorldSettings.ini`.

### Exemplo de Configuração

Adicione as entradas se estiverem faltando, ou altere os valores existentes se já estiverem presentes:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Por exemplo, se quiser uma cura natural mais rápida para jogadores e Pals, você pode usar:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Se quiser alterar apenas valores específicos, ajuste somente essas entradas e deixe o restante dos seus valores `OptionSettings` existentes inalterados.

:::caution Preserve os Valores Existentes do OptionSettings
Não exclua entradas não relacionadas da linha `OptionSettings`. Essa seção geralmente contém muitas configurações do gameplay, e removê-las pode resetar outras partes da configuração do seu servidor sem querer.
:::

## Salvar e Aplicar as Alterações

Depois de editar o arquivo, salve suas alterações na área `Configs` da ZAP-Hosting.

Para aplicar as novas configurações de regeneração, reinicie seu servidor Palworld.

### Reiniciar o Servidor

1. Salve o arquivo `PalWorldSettings.ini` editado.
2. Volte para a administração do seu servidor.
3. Reinicie o servidor.

O reinício é necessário porque o Palworld lê essas configurações de gameplay durante a inicialização do servidor.

:::info Reinício Necessário
As alterações na regeneração de HP não terão efeito imediato enquanto o servidor estiver rodando. Você deve reiniciar o servidor após salvar a configuração.
:::

## Verificar as Novas Configurações de Regeneração

Após o servidor reiniciar, entre no seu servidor e teste o novo comportamento de cura no jogo.

Você pode verificar a mudança observando:

- recuperação natural de HP do jogador
- cura do jogador enquanto dorme
- recuperação natural de HP do Pal
- comportamento de cura do Pal na Palbox enquanto dorme

Se a regeneração não estiver funcionando como esperado, reabra o `PalWorldSettings.ini` e confirme que:

- as chaves de configuração estão escritas exatamente corretas
- os valores usam números decimais válidos como `1.0` ou `2.0`
- as entradas permanecem dentro da seção `OptionSettings`
- o servidor foi reiniciado após salvar

## Conclusão

Parabéns, você alterou com sucesso a regeneração de HP no Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂