---
id: palworld-player-damage-and-defense
title: "Palworld: Dano e Defesa do Jogador"
description: "Aprenda como alterar as configurações de dano e defesa do jogador no Palworld editando o arquivo de configuração do servidor e ajustando corretamente os multiplicadores de dano. -> Saiba mais agora"
sidebar_label: Palworld: Dano e Defesa do Jogador
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você ajuste quanto dano um jogador causa e quanto dano ele recebe por meio dos valores de configuração do servidor. Neste guia, você vai aprender como editar o arquivo de configuração correto no seu servidor de jogos ZAP-Hosting, alterar os multiplicadores de dano e defesa do jogador e aplicar as mudanças corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu servidor Palworld já está instalado e que você tem acesso à sua administração web.

Você precisa de:
- um servidor de jogos Palworld ativo na ZAP-Hosting
- acesso à interface web do servidor de jogos
- permissão para editar arquivos na seção `Configs`

:::info Configuração Manual Necessária
Esta configuração é feita manualmente editando o arquivo de configuração do Palworld. Não há comando adicional dentro do jogo necessário para essas configurações específicas.
:::

## Abra o arquivo de configuração correto

Para alterar o dano e a defesa do jogador, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos ZAP-Hosting:
1. Abra seu servidor Palworld
2. Vá para `Configs`
3. Abra o arquivo `PalWorldSettings.ini`

Este arquivo contém os principais multiplicadores de gameplay usados pelo servidor dedicado, incluindo os valores para dano de ataque do jogador e dano recebido na defesa.

:::note Localização da Configuração
O contexto da tarefa confirma que o arquivo relevante está disponível na administração do servidor de jogos em `Configs`. Se o layout da sua interface for um pouco diferente, procure a lista de arquivos de configuração do seu servidor e abra `PalWorldSettings.ini`.
:::

## Edite os valores de dano e defesa do jogador

Dentro do `PalWorldSettings.ini`, localize as seguintes entradas de configuração.

| Chave de Configuração | Função | Valor Padrão |
| --- | --- | --- |
| `PlayerDamageRateAttack` | Controla quanto dano um jogador causa | `1.000000` |
| `PlayerDamageRateDefense` | Controla quanto dano um jogador recebe | `1.000000` |

Esses valores geralmente estão dentro do bloco principal de opções no arquivo.

### Exemplo de configuração

Use o exemplo abaixo como referência:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

Se esses valores já existirem, altere apenas os números. Se seu arquivo usar uma linha única longa de opções, certifique-se de editar as entradas existentes com cuidado, sem remover vírgulas, colchetes ou valores vizinhos.

### Como os valores funcionam

| Valor | Efeito |
| --- | --- |
| `PlayerDamageRateAttack` maior | Jogadores causam mais dano |
| `PlayerDamageRateAttack` menor | Jogadores causam menos dano |
| `PlayerDamageRateDefense` maior | Jogadores recebem menos dano efetivo, dependendo da lógica do jogo, mas geralmente este valor é usado como multiplicador do dano recebido |
| `PlayerDamageRateDefense` menor | Jogadores recebem mais dano |

:::caution Entenda o Multiplicador de Defesa
`PlayerDamageRateDefense` afeta o multiplicador de dano recebido pelo jogador. Um valor menor significa que o jogador recebe mais dano, enquanto um valor maior reduz o perigo relativo de forma menos agressiva, dependendo do balanceamento do servidor. Sempre teste suas configurações após alterá-las.
:::

## Escolha valores de multiplicadores adequados

Você pode personalizar as configurações dependendo da dificuldade que deseja para seu servidor.

### Exemplo balanceado

Se quiser uma experiência próxima do padrão, mantenha ambos os valores em `1.000000`:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### Exemplo de combate mais fácil

Se quiser que os jogadores causem mais dano e sobrevivam com mais facilidade, aumente o ataque e teste cuidadosamente o equilíbrio da defesa:

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### Exemplo de combate mais difícil

Se quiser que os jogadores causem menos dano e recebam mais punição, reduza os valores:

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip Ajuste Gradualmente
Altere os multiplicadores em pequenos passos, como `0.1` ou `0.25` por vez. Isso facilita encontrar um bom equilíbrio sem deixar o combate muito fácil ou muito punitivo.
:::

## Salve o arquivo e reinicie o servidor

Após editar o `PalWorldSettings.ini`, salve o arquivo na seção `Configs` do painel ZAP-Hosting.

Depois de salvar, reinicie seu servidor Palworld para que as novas configurações de dano sejam aplicadas.

### Ação necessária após a edição

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comando dentro do jogo | Não |
| Executar comando manual no console | Não |

:::info Reinício Necessário
As alterações em `PlayerDamageRateAttack` e `PlayerDamageRateDefense` só são aplicadas de forma confiável após o servidor ser reiniciado.
:::

## Verifique as novas configurações

Após o reinício, entre no seu servidor e teste o combate diretamente.

Você deve verificar:
- se o jogador causa a quantidade esperada de dano
- se os ataques inimigos parecem mais fortes ou mais fracos
- se o equilíbrio geral ainda corresponde ao gameplay desejado

Se o resultado não for o esperado, volte ao `PalWorldSettings.ini`, ajuste os multiplicadores novamente, salve o arquivo e reinicie o servidor mais uma vez.

## Conclusão

Parabéns, você alterou com sucesso as configurações de dano e defesa do jogador no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂