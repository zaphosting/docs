---
id: palworld-randomized-pals
title: "Palworld: Pals Aleatórios"
description: "Aprenda a ativar Pals aleatórios no Palworld editando a configuração do seu servidor, incluindo o tipo de randomizador e as configurações de seed para o mundo do jogo Palworld. -> Saiba mais agora"
sidebar_label: Palworld: Pals Aleatórios
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld inclui configurações de randomizador que podem alterar como os Pals aparecem pelo seu mundo do jogo. Neste guia, você vai aprender a ativar e configurar manualmente Pals aleatórios no seu servidor Palworld da ZAP-Hosting editando o arquivo de configuração correto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar arquivos de configuração do servidor.

:::info Requisito de Acesso à Configuração
Você precisa de acesso à administração web do seu servidor para abrir a seção `Configs` e editar os arquivos de configuração do Palworld.
:::

## Abra o arquivo de configuração correto

Para configurar Pals aleatórios, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor **Palworld**.
2. Navegue até **Configs**.
3. Abra o arquivo chamado `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay para seu servidor Palworld, incluindo opções do randomizador.

## Configure os Pals aleatórios

As configurações do randomizador estão armazenadas como chaves dentro do `PalWorldSettings.ini`. Você precisa localizar o bloco de configurações existente e ajustar os valores relevantes manualmente.

### Visão geral das configurações do randomizador

Use as seguintes chaves de configuração para os spawns aleatórios de Pals:

| Chave de Configuração | Valores Permitidos | Padrão | Propósito |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Controla se o spawn aleatório de Pals está desativado ou randomizado por região |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Ativa níveis totalmente aleatórios para Pals selvagens quando definido como `True` |
| `RandomizerSeed` | `[seu_valor_seed]` ou vazio | `""` | Define a seed usada quando o mundo é gerado |

:::caution Compatibilidade com Servidor Dedicado
O valor `All` foi reportado como incompatível com servidores dedicados Palworld. Você deve usar apenas valores suportados como `None` ou `Region`.
:::

### Exemplo de configuração

Adicione ou ajuste os seguintes valores no seu arquivo `PalWorldSettings.ini` conforme necessário:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Substitua `zaphosting` pelo seu próprio valor de seed se quiser uma configuração aleatória específica. A seed garante que o mesmo padrão de randomização seja usado quando o mundo for gerado.

### O que cada configuração faz

#### `RandomizerType`

Esta configuração controla se os spawns de Pals são randomizados.

- `None` desativa a randomização
- `Region` ativa a randomização regional para spawns de Pals

Se você quer Pals aleatórios no mapa do seu mundo Palworld, defina este valor como `Region`.

#### `bIsRandomizerPalLevelRandom`

Esta configuração controla os níveis dos Pals selvagens.

- `False` mantém o comportamento normal dos níveis
- `True` ativa níveis totalmente aleatórios para Pals selvagens

Isso pode tornar o jogo Palworld significativamente menos previsível, especialmente no início da progressão.

#### `RandomizerSeed`

Esta configuração opcional define a seed de randomização usada durante a geração do mundo.

Exemplo:

```ini
RandomizerSeed="[seu_valor_seed]"
```

Substitua `[seu_valor_seed]` por qualquer texto ou número personalizado que você queira usar como sua seed.

:::note Comportamento da Seed
A seed do randomizador é aplicada quando o mundo é gerado. Se você mudar `RandomizerSeed` depois em um mundo já existente, a mudança não será aplicada a menos que você reinicie o mundo ou crie um novo.
:::

## Salve e aplique as mudanças

Depois de editar o arquivo, salve suas alterações na seção `Configs` da ZAP-Hosting.

Assim que o arquivo for salvo, reinicie seu servidor Palworld para que a configuração atualizada seja carregada.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |
| Resetar o mundo para mudanças de seed em um save existente | Se mudar `RandomizerSeed` |

:::tip Quando começar um mundo novo
Se você estiver ativando a randomização pela primeira vez, especialmente com uma `RandomizerSeed` personalizada, é melhor usar um mundo novo para garantir que as configurações sejam aplicadas corretamente.
:::

## Verifique o resultado

Após o reinício, entre no seu servidor e verifique se os spawns de Pals estão se comportando conforme as configurações do randomizador selecionadas.

Você deve verificar:

- se os spawns regionais aleatórios estão ativos
- se os níveis dos Pals selvagens estão aleatórios, se ativado
- se o comportamento esperado do mundo corresponde à seed configurada em um mundo novo

Se as mudanças não parecerem funcionar, reabra o `PalWorldSettings.ini` e confirme que:

- as chaves foram inseridas corretamente
- os valores usam a capitalização válida, como `True` e `False`
- o servidor foi reiniciado após salvar
- um mundo novo foi criado se você mudou a seed

## Solução de problemas

### Pals aleatórios não estão aparecendo

Verifique se `RandomizerType=Region` está presente no `PalWorldSettings.ini`. Se ainda estiver definido como `None`, a randomização está desativada.

### Mudanças na seed não surtiram efeito

Isso geralmente significa que o mundo já foi gerado antes da nova seed ser adicionada. Nesse caso, você precisa resetar o mundo ou criar um novo para que a seed seja aplicada.

### Problemas no servidor após mudar as configurações do randomizador

Se você usou um valor não suportado, como `All`, reverta a configuração para um valor suportado como `None` ou `Region`, salve o arquivo e reinicie o servidor novamente.

:::danger Evite valores de randomizador não suportados
Não use `RandomizerType=All` em um servidor dedicado a menos que a documentação oficial do servidor Palworld confirme suporte para isso. Essa configuração é atualmente conhecida por ser incompatível em ambientes de servidor dedicado.
:::

## Conclusão

Parabéns, você configurou com sucesso Pals aleatórios no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!