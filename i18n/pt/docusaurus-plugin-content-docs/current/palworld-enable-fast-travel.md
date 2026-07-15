---
id: palworld-enable-fast-travel
title: "Palworld: Ativar Viagem Rápida"
description: "Aprenda a configurar a viagem rápida no seu servidor Palworld, incluindo configurações de viagem rápida apenas na base e alterações manuais no arquivo de configuração. -> Saiba mais agora"
sidebar_label: Palworld: Ativar Viagem Rápida
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle como os jogadores usam a viagem rápida no seu servidor através da configuração principal do servidor. Neste guia, você vai aprender a editar o arquivo de configuração correto na interface da ZAP-Hosting, ajustar as configurações de viagem rápida e aplicar as mudanças corretamente.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar os arquivos de configuração.

:::info Configuração Manual Necessária
Esta configuração é feita editando manualmente o arquivo de configuração do servidor Palworld. Você pode acessar o arquivo necessário através da administração do seu servidor de jogos em `Configs`.
:::

## Localize o Arquivo de Configuração

Para alterar o comportamento da viagem rápida, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Navegue até `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém as configurações relacionadas à jogabilidade do servidor, incluindo as opções de viagem rápida.

:::note Localização da Configuração
Dependendo do layout atual do painel, o arquivo é gerenciado através da área `Configs` na administração do seu servidor. Se o caminho exato não for exibido na interface, você ainda pode editar com segurança os valores necessários diretamente no `PalWorldSettings.ini`.
:::

## Entenda as Configurações de Viagem Rápida

Palworld oferece duas chaves de configuração relevantes para o comportamento da viagem rápida.

| Chave de configuração | Tipo de valor | Valor padrão | Função |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Ativa ou desativa a viagem rápida completamente |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Restringe a viagem rápida para que os jogadores só possam viajar entre bases |

Esses valores fazem parte da string de opções do servidor dentro do `PalWorldSettings.ini`.

:::tip Escolha a Configuração Ideal
Se você quer uma experiência de jogo mais imersiva e com mais exploração, pode desativar a viagem rápida completamente. Se quiser manter a viagem disponível, mas limitar a movimentação dos jogadores pelo mapa, a viagem rápida apenas entre bases é geralmente a melhor opção.
:::

## Edite os Valores de Viagem Rápida

Abra o `PalWorldSettings.ini` e procure pela seção `OptionSettings=`. No Palworld, muitas configurações do servidor são armazenadas como valores separados por vírgula dentro dessa entrada.

### Ativar Viagem Rápida Normal

Para permitir a viagem rápida padrão, certifique-se de que o seguinte valor esteja presente:

```ini
bEnableFastTravel=True
```

Se quiser que os jogadores usem todas as opções normais de viagem rápida, também garanta que este valor esteja configurado assim:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Desativar Toda Viagem Rápida

Para desativar completamente a viagem rápida, defina:

```ini
bEnableFastTravel=False
```

Com isso desativado, os jogadores precisarão viajar manualmente pelo mundo.

### Restringir Viagem Rápida Apenas às Bases

Se quiser permitir viagem rápida somente entre acampamentos base, use esta combinação:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Essa configuração é comum em servidores focados em PvP, pois ainda permite viagens limitadas sem dar movimentação irrestrita aos jogadores.

:::caution Mantenha a Sintaxe Existente
Não remova outros valores existentes na linha `OptionSettings=` a menos que queira alterá-los intencionalmente. O Palworld armazena muitas configurações em uma única entrada separada por vírgulas, então formatação incorreta pode fazer com que as configurações não sejam carregadas.
:::

## Exemplo de Configuração

Abaixo está um exemplo mostrando como a parte relevante da configuração pode aparecer dentro do `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Substitua os valores de viagem rápida na sua configuração existente conforme a configuração que deseja usar.

:::note Configurações Existentes do Servidor
Sua linha `OptionSettings=` normalmente conterá muitos mais valores do que o exemplo acima. Você só precisa ajustar `bEnableFastTravel` e `bEnableFastTravelOnlyBaseCamp`, preservando o restante da linha.
:::

## Configurações Recomendadas

Você pode usar as seguintes combinações dependendo do tipo de servidor que deseja rodar:

| Estilo de servidor | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Resultado |
| --- | --- | --- | --- |
| Jogabilidade padrão | `True` | `False` | Viagem rápida completa ativada |
| Focado em exploração | `False` | `False` | Viagem rápida totalmente desativada |
| PvP ou viagem restrita | `True` | `True` | Viagem rápida apenas entre bases |

## Aplique as Mudanças

Depois de salvar suas alterações no `PalWorldSettings.ini`, você precisa reiniciar o servidor para que as novas configurações sejam carregadas.

### Reinicie o Servidor

Use a função de reinício na administração do seu servidor de jogos ZAP-Hosting após salvar o arquivo.

Normalmente, não são necessários comandos adicionais no jogo ou no console para essa mudança. A nova configuração de viagem rápida será aplicada quando o servidor iniciar novamente.

:::info Reinício Necessário
As alterações no `PalWorldSettings.ini` não serão aplicadas de forma confiável até que o servidor Palworld seja reiniciado.
:::

## Verifique o Resultado

Quando o servidor estiver online novamente, entre no servidor e teste o comportamento da viagem rápida no jogo.

Você deve verificar que:

- a viagem rápida completa funciona se estiver ativada
- nenhuma opção de viagem rápida está disponível se estiver desativada
- apenas a viagem entre bases funciona se você ativou a viagem rápida apenas entre bases

:::tip Solução de Problemas para Comportamento Incorreto
Se a configuração não for aplicada, reabra o `PalWorldSettings.ini` e verifique erros de formatação na linha `OptionSettings=`, especialmente vírgulas faltando, chaves duplicadas ou valores inválidos `True` / `False`.
:::

## Conclusão

Parabéns, você ativou ou configurou com sucesso a viagem rápida no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!