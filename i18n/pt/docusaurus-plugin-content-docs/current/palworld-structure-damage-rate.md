---
id: palworld-structure-damage-rate
title: "Palworld: Taxa de Dano em Estruturas"
description: "Aprenda como alterar as taxas de dano e deterioração das estruturas no Palworld editando a configuração do servidor de forma segura e correta. -> Saiba mais agora"
sidebar_label: Palworld: Taxa de Dano em Estruturas
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle quanto dano as estruturas recebem e com que rapidez elas se deterioram ao longo do tempo. Neste guia, você vai aprender a editar manualmente o arquivo de configuração correto na administração do seu servidor de jogos ZAP-Hosting e aplicar as novas configurações de dano em estruturas.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu servidor Palworld já está instalado e que você tem acesso à sua administração web.

:::info Acesso Necessário
Você precisa ter acesso ao painel de controle do seu servidor de jogos ZAP-Hosting e à área de `Configs` do seu servidor Palworld.
:::

:::note Configuração Manual
Esta configuração é feita editando manualmente o arquivo de configuração do Palworld. As configurações exatas não são alteradas por um botão de ativação/desativação neste guia.
:::

## Abra o arquivo de configuração correto

Para alterar o dano e a deterioração das estruturas, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do seu servidor de jogos ZAP-Hosting:

1. Abra seu servidor **Palworld**.
2. Navegue até **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay do seu servidor, incluindo os multiplicadores relacionados às estruturas.

## Edite as configurações de dano em estruturas

Os valores relevantes estão armazenados nas entradas de configuração do servidor dentro do `PalWorldSettings.ini`.

### Chaves de configuração relevantes

Use as seguintes configurações para controlar o comportamento do dano em estruturas:

| Chave de Configuração | Descrição | Valor Padrão |
| --- | --- | --- |
| `BuildObjectDamageRate` | Controla quanto dano as estruturas recebem | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Controla a velocidade com que as estruturas se deterioram ao longo do tempo | `1.0` |

O valor `1.0` é a taxa padrão normal. Valores menores reduzem o efeito, enquanto valores maiores aumentam.

### Exemplo de configuração

Dependendo do conteúdo atual do seu arquivo, esses valores geralmente fazem parte da lista de opções do servidor em `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Se sua configuração usar uma string de opção combinada, certifique-se de alterar apenas os valores e manter a sintaxe ao redor intacta.

Por exemplo:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Mantenha a Sintaxe Existente
O arquivo `PalWorldSettings.ini` pode conter muitas configurações em uma única linha `OptionSettings=(...)`. Se for o caso no seu servidor, não remova vírgulas, colchetes ou outras entradas existentes ao editar o arquivo.
:::

## Escolha valores adequados

Você pode ajustar os multiplicadores com base em quão duráveis deseja que as estruturas construídas pelos jogadores sejam.

### Multiplicador de dano em estruturas

`BuildObjectDamageRate` altera quanto dano direto uma estrutura recebe.

| Valor | Efeito |
| --- | --- |
| `0.5` | Estruturas recebem metade do dano |
| `1.0` | Dano padrão em estruturas |
| `2.0` | Estruturas recebem dano em dobro |

### Multiplicador de deterioração das estruturas

`BuildObjectDeteriorationDamageRate` altera a velocidade com que as estruturas se deterioram ao longo do tempo.

| Valor | Efeito |
| --- | --- |
| `0.1` | Deterioração muito lenta |
| `1.0` | Velocidade padrão de deterioração |
| `2.0` | Deterioração mais rápida |

:::tip Mínimo Recomendado para Deterioração
Recomenda-se manter `BuildObjectDeteriorationDamageRate` em `0.1` ou mais. Deterioração muito baixa ou desativada pode deixar estruturas abandonadas por mais tempo, o que pode afetar negativamente a limpeza e o desempenho do servidor ao longo do tempo.
:::

## Salve o arquivo e reinicie o servidor

Após editar os valores em `PalWorldSettings.ini`, salve o arquivo na seção `Configs`.

Você precisará reiniciar o servidor Palworld para que as novas configurações de dano em estruturas sejam aplicadas.

### Ação necessária após a edição

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Nenhum comando verificado necessário |

:::info Reinício Necessário
As alterações em `BuildObjectDamageRate` e `BuildObjectDeteriorationDamageRate` não são aplicadas de forma confiável até que o servidor seja reiniciado.
:::

## Verifique as alterações

Quando o servidor estiver online novamente, entre no seu servidor Palworld e teste o novo comportamento.

Você pode verificar as alterações observando se:

- as estruturas recebem mais ou menos dano direto do que antes
- estruturas abandonadas ou expostas se deterioram na velocidade esperada

Se as alterações não parecerem aplicadas, reabra o `PalWorldSettings.ini` e confirme que:

- os nomes das configurações estão escritos exatamente como `BuildObjectDamageRate` e `BuildObjectDeteriorationDamageRate`
- os valores estão na seção correta ou na linha `OptionSettings`
- o servidor foi reiniciado após salvar

## Conclusão

Parabéns, você alterou com sucesso as taxas de dano e deterioração das estruturas no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂