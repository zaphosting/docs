---
id: palworld-pal-damage-multiplier
title: "Palworld: Multiplicador de Dano dos Pals"
description: "Aprenda como alterar o multiplicador de dano dos Pals no Palworld editando as configurações de dano para valores de ataque e defesa no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Multiplicador de Dano dos Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você ajuste quanto dano seus Pals causam e recebem alterando as configurações de multiplicador de dano do servidor. Neste guia, você vai aprender qual arquivo de configuração editar na interface da ZAP-Hosting, quais valores modificar e como aplicar corretamente as novas configurações.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld pelo painel de administração da ZAP-Hosting.

:::info Configuração Manual Necessária
Esta configuração é feita editando manualmente o arquivo de configuração do Palworld. Não é necessário nenhum comando separado dentro do jogo para essa alteração.
:::

## Abra o arquivo de configuração correto

Para alterar o multiplicador de dano dos Pals, você precisa editar o arquivo `PalWorldSettings.ini`.

No painel de administração do servidor de jogos da ZAP-Hosting, abra a seção `Configs` e localize o arquivo `PalWorldSettings.ini`. Este arquivo contém os principais valores de configuração do mundo e da jogabilidade do seu servidor Palworld.

:::note Localização da Configuração
O arquivo relevante para este guia é o `PalWorldSettings.ini`, disponível no painel do seu servidor de jogos em `Configs`.
:::

## Edite os valores do multiplicador de dano dos Pals

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings`. As configurações do multiplicador de dano dos Pals estão armazenadas como chaves de configuração dentro dessa seção.

Você precisa ajustar as seguintes entradas:

| Chave de Configuração | Valor Padrão | Propósito |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Controla quanto dano seus Pals causam |
| `PalDamageRateDefense` | `1.000000` | Controla quanto dano seus Pals recebem |

### Exemplo de configuração

Se as chaves já existirem, altere seus valores para o multiplicador desejado. Se estiverem ausentes, adicione-as dentro da entrada `OptionSettings`.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### O que os valores significam

Use o comportamento abaixo como referência ao escolher seus valores de multiplicador:

| Alteração do Valor | Efeito |
| --- | --- |
| Aumento de `PalDamageRateAttack` | Seus Pals causam mais dano |
| Redução de `PalDamageRateAttack` | Seus Pals causam menos dano |
| Aumento de `PalDamageRateDefense` | Seus Pals recebem um balanceamento de defesa menos favorável e efetivamente tomam dano conforme o multiplicador aumentado |
| Redução de `PalDamageRateDefense` | Seus Pals recebem mais dano |

:::caution Verifique Seus Valores de Multiplicador Cuidadosamente
As configurações do servidor Palworld usam valores numéricos decimais para multiplicadores. Insira apenas números decimais válidos como `0.500000`, `1.000000` ou `2.000000`. Formatação inválida pode impedir o carregamento correto da configuração pelo servidor.
:::

## Salve as alterações

Após editar os valores no `PalWorldSettings.ini`, salve o arquivo no editor de configuração da ZAP-Hosting.

Se estiver ajustando o balanceamento para PvE ou jogabilidade cooperativa, recomenda-se alterar um multiplicador por vez inicialmente. Isso facilita testar o quanto o dano causado ou recebido mudou.

:::tip Comece com Pequenos Ajustes
Um aumento pequeno, como `1.200000` para `PalDamageRateAttack`, geralmente é mais fácil de balancear do que um salto grande como `3.000000`.
:::

## Reinicie o servidor

Depois de salvar a configuração atualizada, reinicie seu servidor Palworld para que as novas configurações de multiplicador de dano sejam aplicadas.

Nenhum comando extra no console é necessário após editar o arquivo. Um reinício completo do servidor é suficiente para aplicar as mudanças.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Executar comandos extras | Não |
| Reiniciar servidor | Sim |

## Verifique as novas configurações de dano

Após o servidor reiniciar, entre no seu servidor Palworld e teste o combate com seus Pals. Verifique se:

- seus Pals causam a quantidade esperada de dano
- seus Pals recebem a quantidade esperada de dano
- o balanceamento da jogabilidade ainda se encaixa na configuração do seu servidor

Se o resultado estiver muito forte ou fraco, volte ao `PalWorldSettings.ini`, ajuste novamente os valores do multiplicador, salve o arquivo e reinicie o servidor mais uma vez.

## Conclusão

Parabéns, você alterou com sucesso o multiplicador de dano dos Pals no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂