---
id: palworld-enable-predator-pals
title: "Palworld: Ativar Predator Pals"
description: "Aprenda como ativar ou desativar predator pals no seu servidor Palworld, corrigir o problema de predator pals que não aparecem e configurar a opção correta manualmente. -> Saiba mais agora"
sidebar_label: "Ativar Predator Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

*Predator Pals* são Pals poderosos do tipo chefe que podem aparecer pelo mundo em Palworld. Neste guia, você vai aprender como ativar ou desativar predator pals no seu servidor Palworld da ZAP-Hosting editando manualmente o arquivo de configuração correto.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para gerenciar os arquivos de configuração.

:::info Acesso ao Arquivo de Configuração
Para essa configuração, você precisa editar manualmente o arquivo de configuração do servidor através da seção **Configs** na administração do seu servidor de jogos.
:::

## Abrir a Configuração do Palworld

Para alterar se os predator pals podem aparecer, você precisa editar o arquivo `PalWorldSettings.ini`.

### Encontre o arquivo correto na interface da ZAP

Primeiro, abra seu servidor de jogos Palworld na interface web da ZAP-Hosting. Depois, navegue até a área **Configs** na administração do servidor e abra o arquivo `PalWorldSettings.ini`.

Esse é o arquivo principal de configuração usado para as definições relacionadas ao gameplay do servidor, incluindo o comportamento dos predator boss pals.

:::note Edição Manual Necessária
Essa configuração deve ser alterada manualmente no arquivo de configuração. Se sua interface não mostrar uma opção dedicada para essa configuração, editar diretamente o `PalWorldSettings.ini` é o método correto.
:::

## Editar a Configuração dos Predator Pals

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings`. A chave de configuração relevante é `EnablePredatorBossPal`.

### Valor da configuração

Use um dos valores abaixo dependendo do resultado que você deseja:

| Configuração | Valor | Resultado |
| --- | --- | --- |
| Ativar predator pals | `True` | Predator boss Pals podem aparecer no mundo |
| Desativar predator pals | `False` | Predator boss Pals não irão aparecer no mundo |

### Exemplo de entrada

Se a configuração já existir, altere seu valor. Se estiver faltando, adicione dentro da lista de configurações `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

Para desativar os predator pals, use:

```ini
EnablePredatorBossPal=False
```

:::tip Verifique a Sintaxe Existente Primeiro
As configurações do servidor Palworld geralmente ficam armazenadas como parte de uma linha maior `OptionSettings` no `PalWorldSettings.ini`. Se seu arquivo já contiver essa estrutura, adicione ou modifique `EnablePredatorBossPal=True` ou `EnablePredatorBossPal=False` dentro dessa lista existente ao invés de criar uma seção separada.
:::

## Salvar e Aplicar as Alterações

Depois de editar o arquivo, salve suas alterações na seção **Configs**.

### Reinicie o servidor

Após salvar o arquivo, reinicie seu servidor Palworld para que a nova configuração seja carregada corretamente.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Não |

:::caution Reinício Necessário
A nova configuração de predator pals só será aplicada após o reinício do servidor. Se os predator pals não estiverem aparecendo depois da alteração, confirme que o arquivo foi salvo corretamente e que o reinício do servidor foi concluído com sucesso.
:::

## Verifique a Configuração

Após o reinício, entre no seu servidor e verifique se os predator pals estão funcionando conforme esperado.

Se você os ativou e os predator pals não estiverem aparecendo, revise a entrada no `PalWorldSettings.ini` novamente e certifique-se de que o valor está escrito exatamente como `True` ou `False`. Também confirme que a configuração está posicionada corretamente dentro da sintaxe existente do servidor.

:::note Comportamento de Spawn
Essa configuração controla se os predator boss Pals podem aparecer no mundo. Ela não fornece um mapa de localização dos predator pals, não altera pontos individuais de spawn nem garante encontros imediatos em uma área específica.
:::

## Referência da Configuração

| Arquivo | Localização na ZAP-Hosting | Chave | Valores possíveis | Comportamento padrão | Reinício necessário |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Administração do servidor de jogos → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Sim |

## Conclusão

Parabéns, você ativou ou desativou com sucesso os predator pals no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂