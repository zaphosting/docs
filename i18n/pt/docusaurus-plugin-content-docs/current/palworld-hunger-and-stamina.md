---
id: palworld-hunger-and-stamina
title: "Palworld: Fome e Stamina"
description: "Aprenda a ajustar as taxas de consumo de fome e stamina para jogadores e Pals no Palworld editando a configuração do seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Fome e Stamina
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle a velocidade com que a fome e a stamina se esgotam tanto para jogadores quanto para Pals. Neste guia, você vai aprender como editar o arquivo de configuração correto do servidor na interface web da ZAP-Hosting e aplicar taxas personalizadas de forma segura.

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na administração de servidores da ZAP-Hosting.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso ao painel de administração do servidor e à seção `Configs` para editar manualmente os arquivos de configuração do Palworld.
:::

## Abra o Arquivo de Configuração do Palworld

Para alterar o comportamento da fome e da stamina, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para a seção `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Arquivo Usado para Multiplicadores de Jogabilidade
As configurações de fome e stamina estão armazenadas em `PalWorldSettings.ini`. Esses valores geralmente fazem parte da string principal de opções usada pelo servidor dedicado.
:::

## Altere os Valores de Fome e Stamina

Dentro do `PalWorldSettings.ini`, procure a seção de configurações de jogabilidade que contém os valores das opções do seu servidor. Você precisa adicionar ou ajustar as seguintes chaves de configuração.

:::caution Ortografia Importante no Palworld
Palworld usa a grafia `Decreace` nessas entradas de configuração. Isso é intencional no formato da configuração do servidor, então você deve usar as chaves exatamente como mostrado abaixo.
:::

### Chaves de Configuração Disponíveis

| Chave de Configuração | Descrição | Valor Padrão |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Controla a taxa de consumo de fome do jogador | `1.0` |
| `PlayerStaminaDecreaceRate` | Controla a taxa de consumo de stamina do jogador | `1.0` |
| `PalStomachDecreaceRate` | Controla a taxa de consumo de fome do Pal | `1.0` |
| `PalStaminaDecreaceRate` | Controla a taxa de consumo de stamina do Pal | `1.0` |

### Como os Valores Funcionam

Valores menores reduzem a velocidade com que a fome ou stamina são consumidas.

| Valor | Efeito |
| --- | --- |
| `1.0` | Taxa de consumo padrão |
| `0.5` | Metade da taxa de consumo |
| `0.0` | Desativa o consumo completamente |

:::tip Escolhendo Configurações Balanceadas
Se você quer uma experiência de sobrevivência mais tranquila sem remover completamente a mecânica, `0.5` é um ponto de partida prático tanto para fome quanto para stamina.
:::

## Exemplo de Configuração

Adicione ou edite os seguintes valores em `PalWorldSettings.ini` dependendo da experiência de jogabilidade que deseja:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Este exemplo reduz o consumo de fome e stamina para metade da taxa padrão tanto para jogadores quanto para Pals.

Se quiser desativar completamente a fome e a stamina, use:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Localização das Configurações
Dependendo de como seu `PalWorldSettings.ini` está estruturado, esses valores podem precisar ser incluídos dentro da lista de opções existente em vez de linhas separadas. Se seu arquivo já contém uma longa entrada `OptionSettings`, certifique-se de preservar a formatação existente e apenas alterar ou inserir as chaves relevantes.
:::

## Salve e Reinicie o Servidor

Após editar o arquivo:

1. Salve as alterações em `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração de servidores da ZAP-Hosting.

É necessário reiniciar para que as novas configurações de fome e stamina entrem em vigor.

:::caution Reinício Obrigatório
Se você não reiniciar o servidor, os valores atualizados da configuração não serão carregados pelo servidor de jogos.
:::

## Verifique as Alterações no Jogo

Quando o servidor estiver online novamente, entre no seu servidor e teste as novas configurações.

### O Que Verificar

- Se a fome do jogador diminui mais lentamente
- Se a stamina do jogador dura mais durante movimentos e ações
- Se a fome do Pal diminui na taxa esperada
- Se o uso de stamina do Pal corresponde aos valores configurados

Se os valores não parecerem aplicados, reabra o `PalWorldSettings.ini` e verifique se:

- as chaves de configuração estão escritas exatamente como mostrado
- os valores são números decimais válidos como `1.0`, `0.5` ou `0.0`
- as configurações foram salvas corretamente
- o servidor foi reiniciado completamente após a edição

## Conclusão

Parabéns, você alterou com sucesso as taxas de consumo de fome e stamina no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂