---
id: palworld-change-death-penalty
title: "Palworld: Alterar Penalidade de Morte"
description: "Aprenda como alterar a penalidade de morte no Palworld editando a configuração do servidor, incluindo os valores de DeathPenalty e os passos para reiniciar. -> Saiba mais agora"
sidebar_label: Palworld: Alterar Penalidade de Morte
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle o que os jogadores perdem ao morrer alterando a configuração `DeathPenalty` do servidor. Neste guia, você vai aprender como editar o arquivo de configuração correto na interface web da ZAP-Hosting e aplicar a alteração corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que:

- você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting
- seu servidor está offline ou você está preparado para reiniciá-lo após fazer as alterações
- você entende qual comportamento de morte deseja aplicar para seus jogadores

:::info Acesso ao Arquivo de Configuração
Para servidores Palworld na ZAP-Hosting, as configurações relevantes podem ser editadas através da administração do seu servidor de jogos em **Configs**.
:::

## Abrir o Arquivo de Configuração do Palworld

Para alterar a penalidade de morte, você precisa editar o arquivo `PalWorldSettings.ini`.

### Localize o arquivo na interface da ZAP-Hosting

Primeiro, faça login na interface web da ZAP-Hosting e abra seu servidor de jogos Palworld. Depois, navegue até a seção **Configs** na administração do servidor de jogos e abra o arquivo chamado `PalWorldSettings.ini`.

Este arquivo contém os principais valores de configuração do gameplay para seu servidor Palworld, incluindo o comportamento da penalidade de morte.

:::note Alterações Manuais na Configuração
A configuração da penalidade de morte está armazenada no próprio arquivo de configuração. Você precisa editar o valor manualmente, em vez de depender de uma configuração rápida separada, a menos que sua interface atual ofereça explicitamente essa opção.
:::

## Alterar o Valor DeathPenalty

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings` onde as configurações do gameplay são definidas. Você precisa encontrar a entrada `DeathPenalty` e alterar seu valor para a opção desejada.

### Valores DeathPenalty suportados

Os seguintes valores são usados atualmente pelo Palworld para a configuração `DeathPenalty`:

| Valor | Efeito |
| --- | --- |
| `None` | Jogadores não perdem nada ao morrer |
| `Item` | Jogadores perdem itens, mas mantêm o equipamento |
| `ItemAndEquipment` | Jogadores perdem itens e equipamento |
| `All` | Jogadores perdem itens, equipamento e todos os Pals da equipe |

:::tip Escolhendo a Configuração Ideal
Se você quer uma experiência de servidor mais casual, `None` ou `Item` geralmente são as melhores escolhas. Se deseja a experiência padrão de sobrevivência, use `All`.
:::

### Exemplo de entrada na configuração

Na maioria das configurações de servidor Palworld, a configuração aparece como parte de uma linha maior `OptionSettings`. Por exemplo:

```ini
OptionSettings=(DeathPenalty=All)
```

Para desativar completamente a penalidade de morte, altere para:

```ini
OptionSettings=(DeathPenalty=None)
```

Se seu arquivo já contém várias configurações no mesmo bloco `OptionSettings=(...)`, altere apenas o valor `DeathPenalty` e deixe as outras entradas inalteradas. Por exemplo:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

Neste caso, você substituiria apenas `ItemAndEquipment` pelo valor que preferir.

:::caution Preserve a Sintaxe Existente
Não remova vírgulas, colchetes ou outras configurações existentes do bloco `OptionSettings=(...)`. Sintaxe incorreta pode impedir que o servidor carregue a configuração corretamente.
:::

## Salvar e Aplicar as Alterações

Após editar o valor `DeathPenalty`, salve as alterações no arquivo `PalWorldSettings.ini`.

### Reinicie o servidor

Depois que o arquivo for salvo, reinicie seu servidor Palworld pela interface web da ZAP-Hosting. O reinício é necessário para que o servidor carregue a configuração atualizada.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |

:::info Reinício Necessário
Palworld lê essa configuração a partir do arquivo do servidor. O novo comportamento de morte só terá efeito após um reinício completo do servidor.
:::

## Verifique a Nova Configuração de Morte

Após o servidor reiniciar, entre no servidor e teste o comportamento no jogo se quiser confirmar a alteração.

### O que verificar

Dependendo do valor que você escolheu, verifique se os jogadores:

- mantêm todos os itens após a morte
- perdem apenas os itens do inventário
- perdem itens do inventário e equipamento
- perdem itens do inventário, equipamento e os Pals da equipe

Se a configuração não parecer ter mudado, reabra o `PalWorldSettings.ini` e confirme que:

- o valor `DeathPenalty` está escrito exatamente correto
- a alteração foi salva com sucesso
- o servidor foi reiniciado após a edição

:::danger Use os Nomes Exatos dos Valores
A configuração `DeathPenalty` é sensível a maiúsculas e minúsculas na prática quando escrita como valor de configuração. Sempre use os nomes exatos `None`, `Item`, `ItemAndEquipment` ou `All`.
:::

## Conclusão

Parabéns, você alterou com sucesso a penalidade de morte no Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!