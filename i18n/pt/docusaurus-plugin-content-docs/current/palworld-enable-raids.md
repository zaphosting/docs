---
id: palworld-enable-raids
title: "Palworld: Ativar Raides"
description: "Aprenda como ativar ou desativar raides no seu servidor de jogos Palworld editando a configuração correta para ataques de inimigos invasores. -> Saiba mais agora"
sidebar_label: Palworld: Ativar Raides
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Raides em Palworld são ataques de inimigos invasores que podem atingir bases de jogadores no seu servidor. Neste guia, você vai aprender como ativar ou desativar raides editando manualmente o arquivo de configuração correto na administração do servidor de jogos ZAP-Hosting.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld através da interface web da ZAP-Hosting e permissão para editar arquivos de configuração do servidor.

:::info Configuração Manual Necessária
Esta configuração é feita editando manualmente o arquivo de configuração do servidor Palworld em **Configs** na administração do seu servidor de jogos. Após salvar as alterações, você precisa reiniciar o servidor para que a nova configuração tenha efeito.
:::

## Localize o Arquivo de Configuração Correto

Para ativar ou desativar raides, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos ZAP-Hosting:

1. Abra seu servidor de jogos **Palworld**.
2. Navegue até **Configs**.
3. Abra o arquivo chamado `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay para seu servidor Palworld, incluindo a configuração que controla se os raides estão ativados.

## Edite a Configuração de Raides

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings`. A chave de configuração relevante é:

```ini
bEnableInvaderEnemy=True
```

Esta configuração controla se os raides de inimigos invasores estão ativos no servidor.

### Ativar Raides

Se você quiser ativar os raides, defina o valor como `True`:

```ini
bEnableInvaderEnemy=True
```

Com este valor, ataques periódicos de inimigos às bases dos jogadores podem ocorrer durante o gameplay.

### Desativar Raides

Se quiser desativar os raides, defina o valor como `False`:

```ini
bEnableInvaderEnemy=False
```

Isso desativa completamente os ataques de inimigos invasores, o que pode criar uma experiência de construção mais tranquila e pode reduzir um pouco a carga no servidor.

## Referência de Configuração

Use a tabela abaixo como referência rápida para a configuração de raides:

| Arquivo de Configuração | Chave de Configuração | Valor | Efeito |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Ativa raides e ataques de inimigos invasores |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Desativa todos os raides e ataques de inimigos invasores |

:::note Comportamento Padrão
O comportamento padrão do servidor Palworld geralmente é `bEnableInvaderEnemy=True`, ou seja, os raides estão ativados a menos que você altere essa configuração manualmente.
:::

## Salve e Aplique as Alterações

Após editar o valor no `PalWorldSettings.ini`, salve o arquivo na seção **Configs** da ZAP-Hosting.

Você precisará reiniciar seu servidor Palworld para que a configuração atualizada seja carregada.

### Reinicie o Servidor

Use a função de reinício na administração do servidor de jogos ZAP-Hosting após salvar o arquivo.

:::caution Reinício Necessário
Se você não reiniciar o servidor, a configuração alterada dos raides pode não ser aplicada. Apenas editar o arquivo não é suficiente.
:::

## Verifique a Configuração

Após o reinício ser concluído, sua nova configuração de raides deve estar ativa.

- Se `bEnableInvaderEnemy=True`, os raides estão ativados.
- Se `bEnableInvaderEnemy=False`, os raides estão desativados.

Se a configuração não parecer aplicada, reabra o `PalWorldSettings.ini` e confirme que o valor foi salvo corretamente sem erros de formatação.

:::tip Construção de Base Pacífica
Desativar os raides pode ser útil se você quiser focar em exploração, construção de base ou gameplay cooperativo com menos pressão, sem ataques periódicos de inimigos.
:::

## Conclusão

Parabéns, você ativou ou desativou com sucesso os raides no seu servidor de jogos Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂