---
id: palworld-increase-xp
title: "Palworld: Aumentar XP"
description: "Aprenda como aumentar o XP no jogo Palworld editando a configuração do servidor Palworld e ajustando corretamente o multiplicador da taxa de XP. -> Saiba mais agora"
sidebar_label: Palworld: Aumentar XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite ajustar multiplicadores de jogabilidade através da configuração do servidor, incluindo a quantidade de XP que os jogadores ganham. Neste guia, você vai aprender como aumentar a taxa de XP no seu servidor Palworld da ZAP-Hosting editando o arquivo de configuração correto e aplicando as mudanças da forma certa.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld pelo painel da ZAP-Hosting e permissão para editar os arquivos de configuração.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso à administração web do seu servidor para editar arquivos de configuração na seção `Configs`. Se não conseguir acessar a administração do servidor, verifique primeiro o acesso ao produto no painel da ZAP-Hosting.
:::

## Localize o arquivo de configuração

Para aumentar o XP no seu servidor Palworld, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Navegue até a seção `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.

Este arquivo contém as principais configurações de jogabilidade usadas pelo servidor dedicado Palworld, incluindo o multiplicador de XP.

## Edite o multiplicador de XP

A configuração responsável pelo ganho de XP é `ExpRate`.

### Encontre a configuração correta

Abra o `PalWorldSettings.ini` e procure pela linha `OptionSettings` ou pela seção onde os multiplicadores de jogabilidade são definidos.

A entrada relevante na configuração é:

```ini
ExpRate=1.000000
```

### Altere o valor

Ajuste o valor de `ExpRate` para o multiplicador que deseja usar.

| Chave da Configuração | Valor Padrão | Valor Exemplo | Efeito |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | XP em dobro |
| `ExpRate` | `1.000000` | `3.000000` | XP em triplo |

Por exemplo, para ativar XP em dobro, defina:

```ini
ExpRate=2.000000
```

Para ativar XP em triplo, defina:

```ini
ExpRate=3.000000
```

:::tip Formato Recomendado para o Valor
As configurações do servidor Palworld geralmente usam valores decimais como `1.000000` ou `2.000000`. Usar esse formato mantém a configuração consistente e mais fácil de ler.
:::

## Exemplo de configuração

Dependendo do conteúdo atual do seu arquivo, a configuração geralmente aparece dentro do bloco `OptionSettings`. Por exemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Se `ExpRate` já estiver presente, apenas altere seu valor. Se estiver ausente, adicione `ExpRate=[seu_valor]` dentro do bloco existente `OptionSettings=(...)`.

:::caution Edite o Bloco OptionSettings Existente com Cuidado
Não crie múltiplas entradas `OptionSettings` a menos que sua configuração atual exija isso especificamente. Na maioria dos casos, você deve apenas editar a linha existente `OptionSettings=(...)` e alterar o valor de `ExpRate` ali.
:::

## Salve e reinicie o servidor

Após alterar o multiplicador de XP:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração da ZAP-Hosting.

É necessário reiniciar porque o Palworld não aplica essa alteração de configuração de jogabilidade imediatamente enquanto o servidor está rodando.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |

:::note Nenhum Comando Adicional Necessário
Para essa configuração, normalmente não é preciso nenhum comando extra no jogo ou no console. A nova taxa de XP é aplicada após o reinício do servidor.
:::

## Verifique a nova taxa de XP

Quando o servidor estiver online novamente, entre no servidor e realize uma ação que conceda XP, como derrotar inimigos, capturar Pals ou completar atividades normais do jogo.

Se o ganho de XP não parecer ter mudado:

- reabra o `PalWorldSettings.ini`
- confirme que `ExpRate` está presente no bloco `OptionSettings`
- verifique se o valor está escrito corretamente, por exemplo, `2.000000`
- certifique-se de que o servidor foi totalmente reiniciado após salvar

:::danger Evite Sintaxe Inválida na Configuração
Se você remover acidentalmente vírgulas, colchetes ou outros valores da linha `OptionSettings=(...)`, o servidor pode ignorar a configuração ou falhar ao carregar corretamente. Sempre revise a linha completa antes de salvar.
:::

## Conclusão

Parabéns, você aumentou com sucesso a taxa de ganho de XP no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂