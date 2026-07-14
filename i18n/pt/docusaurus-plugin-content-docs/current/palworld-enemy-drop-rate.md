---
id: palworld-enemy-drop-rate
title: "Palworld: Taxa de Drop dos Inimigos"
description: "Aprenda como alterar a taxa de drop dos inimigos no seu servidor de jogos Palworld editando o valor correto na configuração para um balanceamento melhor do loot. -> Saiba mais agora"
sidebar_label: Palworld: Taxa de Drop dos Inimigos
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

`EnemyDropItemRate` controla a quantidade de loot que os inimigos dropam em Palworld. Neste guia, você vai aprender como editar manualmente o arquivo de configuração correto na administração do seu servidor de jogos Palworld da ZAP-Hosting e aplicar a nova taxa de drop dos inimigos com sucesso.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao painel de administração do seu servidor de jogos Palworld e permissão para editar arquivos de configuração do servidor.

:::info Configuração Manual Necessária
Esta configuração é feita editando manualmente o arquivo de configuração do servidor. O arquivo relevante está disponível na administração do seu servidor de jogos ZAP-Hosting, na seção `Configs`.
:::

## Localize o Arquivo de Configuração

Para alterar a taxa de drop dos inimigos, você precisa editar o arquivo `PalWorldSettings.ini`.

### Abra a Seção Configs

Faça login na administração do seu servidor de jogos ZAP-Hosting e abra seu servidor Palworld. Depois, navegue até a seção `Configs`, onde os arquivos de configuração disponíveis estão listados.

### Selecione `PalWorldSettings.ini`

Abra o arquivo `PalWorldSettings.ini` na área `Configs`. Este arquivo contém os principais valores de configuração do gameplay do seu servidor de jogos Palworld, incluindo as configurações relacionadas a loot e drops.

:::note Visão Geral do Arquivo de Configuração
Nos servidores dedicados Palworld, as configurações de gameplay geralmente ficam armazenadas em `PalWorldSettings.ini`. O multiplicador de loot dos inimigos é configurado ali através da entrada `EnemyDropItemRate`.
:::

## Edite a Taxa de Drop dos Inimigos

Agora que você abriu o arquivo correto, pode ajustar o multiplicador de drop do loot.

### Encontre a Configuração Correta

Procure dentro do `PalWorldSettings.ini` pela linha `OptionSettings` e localize a seguinte chave:

```ini
EnemyDropItemRate=1.000000
```

Se a chave já estiver presente, altere o valor para o multiplicador que você deseja.

### Defina Seu Multiplicador Desejado

`EnemyDropItemRate` usa um multiplicador numérico:

| Chave de Configuração | Valor Padrão | Valor Exemplo | Efeito |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Inimigos dropam o dobro de itens |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Inimigos dropam menos itens |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Inimigos dropam três vezes mais itens |

Por exemplo, para dobrar o loot dropado por inimigos derrotados, Pals selvagens e chefes, defina:

```ini
EnemyDropItemRate=2.000000
```

Se você estiver editando a entrada completa `OptionSettings`, ela pode ficar parecida com este trecho:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Mantenha as Configurações Existentes
Em muitas configurações de servidor Palworld, `OptionSettings` contém vários valores em uma única linha. Altere apenas o valor de `EnemyDropItemRate` e evite remover vírgulas, colchetes ou outras configurações existentes, pois isso pode fazer a configuração falhar.
:::

## Revise os Limites Relacionados ao Drop

Multiplicadores de loot mais altos podem aumentar a quantidade de itens dropados no chão. Isso pode afetar a performance do servidor, especialmente durante combates intensos ou lutas contra chefes.

### Verifique `DropItemMaxNum`

Se seu servidor já possui um número alto de itens dropados simultaneamente, revise a configuração `DropItemMaxNum` no mesmo arquivo de configuração.

| Chave de Configuração | Propósito |
| --- | --- |
| `EnemyDropItemRate` | Multiplica o loot dropado por inimigos derrotados |
| `DropItemMaxNum` | Limita quantos itens dropados podem existir ao mesmo tempo |

:::tip Equilibre Loot e Performance
Se você aumentar muito o `EnemyDropItemRate`, considere manter o `DropItemMaxNum` em um valor razoável para reduzir o risco de acúmulo excessivo de itens e problemas de performance.
:::

## Salve e Aplique as Alterações

Depois de editar a configuração, salve o arquivo `PalWorldSettings.ini` na seção `Configs`.

### Reinicie o Servidor

Assim que o arquivo for salvo, reinicie seu servidor Palworld para que a nova configuração seja carregada.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Comando adicional no console | Nenhum comando verificado necessário |

:::info Reinício Necessário
Alterações no `PalWorldSettings.ini` não são aplicadas imediatamente durante o runtime. Você precisa reiniciar o servidor após salvar o arquivo.
:::

## Verifique a Nova Taxa de Drop

Após o reinício, entre no seu servidor Palworld e derrote inimigos para confirmar que o novo multiplicador de loot está funcionando como esperado.

Se a quantidade de drop não parecer ter mudado, reabra o `PalWorldSettings.ini` e verifique se:

- `EnemyDropItemRate` está escrito corretamente
- o valor está dentro da configuração correta `OptionSettings`
- o arquivo foi salvo com sucesso
- o servidor foi reiniciado após a alteração

## Conclusão

Parabéns, você alterou com sucesso a taxa de drop dos inimigos no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂