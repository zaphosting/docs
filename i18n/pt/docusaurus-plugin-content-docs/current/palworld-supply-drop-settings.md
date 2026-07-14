---
id: palworld-supply-drop-settings
title: "Palworld: Configurações de Supply Drop"
description: "Aprenda a alterar a frequência dos supply drops no seu servidor de jogos Palworld editando manualmente a configuração SupplyDropSpan. -> Saiba mais agora"
sidebar_label: Palworld: Configurações de Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld inclui supply drops que aparecem em intervalos programados e podem fornecer recursos úteis durante o jogo. Neste guia, você vai aprender como alterar manualmente a frequência dos supply drops no seu servidor de jogos Palworld da ZAP-Hosting editando o arquivo de configuração correto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar arquivos de configuração do servidor.

:::info Configuração Manual Necessária
Esta configuração é feita manualmente através da administração do seu servidor em **Configs**. Após alterar a configuração, você precisa reiniciar o servidor para que o Palworld carregue a configuração atualizada.
:::

## Localize o arquivo de configuração correto

Para alterar o intervalo dos supply drops, você precisa editar o arquivo `PalWorldSettings.ini`.

Na interface web da ZAP-Hosting:

1. Abra a administração do seu servidor de jogos Palworld.
2. Navegue até **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay para o seu servidor Palworld, incluindo a configuração do timer dos supply drops.

## Edite a configuração do supply drop

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings` e localize a entrada `SupplyDropSpan`.

A chave de configuração relevante está descrita abaixo:

| Configuração | Descrição | Exemplo |
| --- | --- | --- |
| `SupplyDropSpan` | Define o intervalo entre supply drops em minutos | `180` |

Se a entrada já existir, altere seu valor para o intervalo desejado.

### Valores de exemplo

Você pode usar os seguintes valores como referência:

| Valor | Resultado |
| --- | --- |
| `30` | Supply drops muito frequentes |
| `60` | Supply drops a cada 1 hora |
| `180` | Configuração padrão, a cada 3 horas |
| `360` | Supply drops a cada 6 horas |

### Exemplo de configuração

Dependendo do conteúdo atual do seu arquivo, a configuração aparecerá como parte da linha maior `OptionSettings`. Por exemplo:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Se seu arquivo já contiver várias configurações no mesmo bloco `OptionSettings=(...)`, altere apenas o valor de `SupplyDropSpan` e mantenha as outras entradas existentes inalteradas.

Por exemplo:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Preserve Configurações Existentes
Não remova outros valores do bloco `OptionSettings` ao editar o `SupplyDropSpan`. Se você apagar acidentalmente vírgulas, colchetes ou outras entradas, a configuração do seu Palworld pode não carregar corretamente.
:::

## Salve e aplique as alterações

Depois de atualizar o valor de `SupplyDropSpan`:

1. Salve as alterações no arquivo `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração do servidor na ZAP-Hosting.

É necessário reiniciar porque o Palworld não aplica essa configuração ao vivo enquanto o servidor está rodando.

:::note Nenhum Comando Adicional Necessário
Normalmente, não é necessário nenhum comando extra no jogo ou console para essa alteração. Reiniciar o servidor é o passo necessário para aplicar o novo intervalo dos supply drops.
:::

## Verifique o novo intervalo dos supply drops

Após o reinício, seu servidor usará o novo valor de `SupplyDropSpan`. Você pode verificar a alteração monitorando o tempo entre os eventos de supply drop durante o jogo.

Se a alteração não parecer aplicada, verifique o seguinte:

| Verificação | O que conferir |
| --- | --- |
| Arquivo correto | Você editou o `PalWorldSettings.ini` |
| Local correto | O arquivo foi aberto através de **Configs** na administração do servidor |
| Sintaxe correta | `SupplyDropSpan` está escrito corretamente e permanece dentro do bloco `OptionSettings` |
| Reinício do servidor | O servidor foi reiniciado completamente após salvar |

:::tip Escolha um Valor Equilibrado
Valores muito baixos podem fazer os supply drops aparecerem muito mais frequentemente do que o esperado no gameplay normal do Palworld. Se quiser eventos mais frequentes sem exageros, `60` geralmente é um bom ponto de partida.
:::

## Conclusão

Parabéns, você alterou com sucesso a frequência dos supply drops no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂