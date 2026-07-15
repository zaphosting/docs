---
id: palworld-item-weight
title: "Palworld: Peso dos Itens"
description: "Aprenda como alterar o multiplicador de peso dos itens no Palworld editando a configuração de peso dos itens no seu servidor para um melhor equilíbrio da capacidade de carga. -> Saiba mais agora"
sidebar_label: "Peso dos Itens"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você ajuste o peso dos itens no seu servidor alterando um valor de configuração no arquivo principal de configurações do servidor. Neste guia, você vai aprender onde encontrar o arquivo correto na interface web da ZAP-Hosting, qual configuração `item weight` editar e como aplicar a alteração corretamente.



## Preparação

Antes de começar, certifique-se de que seu servidor de jogos Palworld está online e que você tem acesso à administração web dele.

:::info Acesso Necessário
Você precisa ter acesso ao painel de administração do seu servidor Palworld na interface web da ZAP-Hosting para editar arquivos de configuração em **Configs**.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar o multiplicador de peso dos itens, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.

Esse arquivo contém os principais valores de configuração de gameplay usados pelo seu servidor Palworld.

:::note Função do Arquivo de Configuração
O `PalWorldSettings.ini` armazena vários modificadores de gameplay, incluindo taxas de dano, stamina, drops e o `item weight`.
:::

## Editar a Configuração de Peso dos Itens

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings` e localize a entrada `ItemWeightRate`.

Se a entrada já existir, altere seu valor. Se estiver ausente, adicione-a dentro da lista de parâmetros `OptionSettings`.

### Chave de Configuração

Use a seguinte configuração:

```ini
ItemWeightRate=1.000000
```

### O Que o Valor Significa

`ItemWeightRate` controla o multiplicador de peso dos itens no seu servidor.

| Chave de config | Valor padrão | Efeito |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Peso padrão dos itens |
| `ItemWeightRate` menor que `1.0` | Exemplo: `0.500000` | Itens pesam menos, permitindo que os jogadores carreguem mais |
| `ItemWeightRate` maior que `1.0` | Exemplo: `2.000000` | Itens pesam mais, limitando a carga dos jogadores |

### Exemplos de Valores

Você pode usar um dos exemplos abaixo dependendo do equilíbrio de gameplay desejado:

| Resultado desejado | Valor |
|---|---:|
| Peso padrão dos itens | `1.000000` |
| Metade do peso dos itens | `0.500000` |
| Itens muito leves | `0.250000` |
| Peso dos itens dobrado | `2.000000` |

:::tip Escolhendo um Multiplicador Ideal
Se você quer uma experiência de sobrevivência mais tranquila, um valor menor para o `item weight`, como `0.5`, é um bom ponto de partida. Isso reduz a pressão no inventário sem eliminar completamente a gestão de peso.
:::

## Exemplo de Configuração

No Palworld, esses valores de gameplay geralmente ficam dentro da linha `OptionSettings=(...)` do arquivo `PalWorldSettings.ini`. Seu arquivo pode já conter várias outras configurações.

Um exemplo simplificado fica assim:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Em muitos servidores, `OptionSettings` já inclui múltiplos valores separados por vírgulas. Nesse caso, apenas adicione ou edite a parte `ItemWeightRate` sem remover as outras entradas.

Exemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Mantenha as Configurações Existentes
Não apague outros valores da linha `OptionSettings` a menos que queira resetá-los intencionalmente. Remover vírgulas, colchetes ou entradas existentes pode causar erros na configuração.
:::

## Salvar e Aplicar as Alterações

Após editar o arquivo:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld.

O reinício é necessário porque o servidor lê essa configuração de gameplay durante a inicialização. O novo valor de `item weight` só será aplicado completamente após o reinício.

## Verificar o Novo Peso dos Itens

Depois do reinício, entre no servidor e teste o comportamento do peso dos itens no jogo.

Você deve perceber que:

- valores menores reduzem o peso efetivo dos itens
- valores maiores aumentam o peso efetivo dos itens
- a capacidade do inventário muda conforme o multiplicador escolhido

Se a alteração não parecer aplicada, reabra o `PalWorldSettings.ini` e confirme:

| Verificação | O que checar |
|---|---|
| Arquivo correto | Você editou o `PalWorldSettings.ini` |
| Local correto | O arquivo foi aberto via **Configs** na administração do servidor |
| Chave correta | `ItemWeightRate` está presente |
| Sintaxe correta | O valor está dentro da linha `OptionSettings=(...)` se seu arquivo usar esse formato |
| Reinício feito | O servidor foi reiniciado após salvar |

## Conclusão

Parabéns, você alterou com sucesso a configuração de peso dos itens no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂