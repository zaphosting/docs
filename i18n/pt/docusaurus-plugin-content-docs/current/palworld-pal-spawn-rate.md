---
id: palworld-pal-spawn-rate
title: "Palworld: Taxa de Spawn dos Pals"
description: "Aprenda como alterar a taxa de spawn dos Pals no Palworld editando a configuração de frequência de spawn no seu servidor -> Saiba mais agora"
sidebar_label: Palworld: Taxa de Spawn dos Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle com que frequência os Pals aparecem no seu mundo através de uma configuração no servidor. Neste guia, você vai aprender como editar o arquivo de configuração correto na administração do servidor de jogos ZAP-Hosting e aplicar uma nova taxa de spawn dos Pals com segurança.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que:

- você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting
- seu servidor está offline ou você está preparado para reiniciá-lo após fazer as alterações
- você entende que valores mais altos de spawn podem aumentar a carga no servidor e reduzir o desempenho

:::info Configuração Manual Necessária
Essa alteração é feita manualmente editando o arquivo de configuração do servidor na seção **Configs** da administração do servidor de jogos. Não existe um controle deslizante específico no painel da ZAP-Hosting para essa configuração.
:::

## Abra o Arquivo de Configuração do Palworld

Para alterar a taxa de spawn dos Pals, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do seu servidor de jogos ZAP-Hosting:

1. Abra seu servidor **Palworld**.
2. Navegue até **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.

Esse arquivo contém as principais configurações do servidor relacionadas ao gameplay, incluindo o multiplicador de spawn dos Pals.

:::note Localização do Arquivo de Configuração
Para servidores Palworld da ZAP-Hosting, o arquivo relevante está disponível diretamente na seção **Configs** da administração do servidor, conforme fornecido na configuração do servidor.
:::

## Altere a Taxa de Spawn dos Pals

A configuração que você precisa alterar é `PalSpawnNumRate`.

### O que `PalSpawnNumRate` Faz

`PalSpawnNumRate` controla o multiplicador da frequência de spawn dos Pals no seu servidor.

| Chave da config | Valor padrão | Descrição |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Controla quantos Pals aparecem no mundo. Valores maiores aumentam a frequência de spawn. |

No Palworld, esse valor geralmente faz parte da linha `OptionSettings` dentro do arquivo `PalWorldSettings.ini`.

### Edite a Configuração

Abra o `PalWorldSettings.ini` e procure pela seção `OptionSettings=`. Dentro dessa seção, encontre a entrada `PalSpawnNumRate`.

Se a entrada já existir, altere o valor. Por exemplo:

```ini
PalSpawnNumRate=1.000000
```

Você pode aumentar assim:

```ini
PalSpawnNumRate=2.000000
```

Esse exemplo dobra o multiplicador de spawn dos Pals em relação ao valor padrão.

:::tip Valores Iniciais Recomendados
Comece com aumentos pequenos, como `1.500000` ou `2.000000`, e teste o desempenho do servidor antes de usar valores mais agressivos.
:::

### Exemplo de Trecho de Configuração

Dependendo do conteúdo do seu arquivo, a configuração pode aparecer dentro de uma linha longa `OptionSettings` parecida com esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Preserve a Sintaxe Existente
Não remova vírgulas, colchetes ou outros valores existentes na linha `OptionSettings`. Uma formatação incorreta no `PalWorldSettings.ini` pode impedir que o servidor carregue a configuração corretamente.
:::

## Valores Recomendados e Impacto no Desempenho

Você pode usar valores diferentes dependendo da experiência de jogo que deseja.

| Valor | Efeito |
| --- | --- |
| `1.000000` | Taxa padrão de spawn dos Pals |
| `1.500000` | Frequência de spawn levemente aumentada |
| `2.000000` | Mais Pals visíveis no mundo |
| `3.000000` ou mais | Aumento pesado no spawn, pode afetar o desempenho |

Valores mais altos podem deixar o mundo mais ativo, mas também aumentam o número de entidades que o servidor precisa processar.

:::danger Valores Altos Podem Reduzir a Estabilidade
Configurações muito altas de spawn podem impactar negativamente o desempenho do servidor, especialmente em servidores com muita atividade ou combinadas com outras configurações pesadas do mundo. Se notar lag, diminua o valor e reinicie o servidor.
:::

## Salve e Reinicie o Servidor

Após editar o arquivo:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração do servidor de jogos ZAP-Hosting.

É necessário reiniciar para que a nova taxa de spawn dos Pals entre em vigor.

## Verifique a Alteração

Quando o servidor estiver online novamente, entre no seu servidor Palworld e observe a atividade do mundo nas áreas onde os Pals normalmente aparecem.

Se a taxa de spawn não parecer ter mudado:

- reabra o `PalWorldSettings.ini` e confirme que o `PalSpawnNumRate` está presente
- certifique-se de que o valor está dentro da seção correta `OptionSettings`
- verifique se o arquivo foi salvo com sucesso
- reinicie o servidor novamente após confirmar a alteração

## Referência da Configuração

| Item | Valor |
| --- | --- |
| Arquivo de configuração | `PalWorldSettings.ini` |
| Localização na ZAP-Hosting | Administração do servidor de jogos → `Configs` |
| Nome da configuração | `PalSpawnNumRate` |
| Valor padrão | `1.000000` |
| Reinício necessário | Sim |

## Conclusão

Parabéns, você alterou com sucesso a taxa de spawn dos Pals no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂