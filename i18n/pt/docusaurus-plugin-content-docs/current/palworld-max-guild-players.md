---
id: palworld-max-guild-players
title: "Palworld: Máximo de Jogadores por Guilda"
description: "Aprenda como alterar o limite de jogadores por guilda no Palworld editando a configuração de máximo de jogadores por guilda no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Máximo de Jogadores por Guilda
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle quantos jogadores podem entrar em uma única guilda no seu servidor. Neste guia, você vai aprender como alterar manualmente o limite máximo de jogadores por guilda editando o arquivo de configuração correto na administração do seu servidor de jogos ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld na interface web da ZAP-Hosting.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso à administração do seu servidor Palworld e à seção `Configs`, pois essa configuração deve ser alterada manualmente no arquivo de configuração do servidor.
:::

## Localize o arquivo de configuração correto

Para alterar o limite de jogadores por guilda, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do seu servidor de jogos ZAP-Hosting:

1. Abra seu servidor **Palworld**
2. Vá para **Configs**
3. Abra o arquivo chamado `PalWorldSettings.ini`

Esse arquivo contém os principais valores de configuração do gameplay do seu servidor Palworld, incluindo as configurações relacionadas a guildas.

## Edite a configuração do máximo de jogadores por guilda

Dentro do arquivo `PalWorldSettings.ini`, procure pela linha de configuração `OptionSettings`. O limite de jogadores por guilda é controlado pela chave `GuildPlayerMaxNum`.

### Valor da configuração

Use a seguinte configuração para definir o número máximo de jogadores permitidos em uma guilda:

```ini
GuildPlayerMaxNum=[seu_valor]
```

Substitua `[seu_valor]` pelo número de jogadores que você deseja permitir por guilda.

### Valores padrão e exemplos

| Chave da config | Descrição | Valor padrão |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Número máximo de jogadores permitidos em uma guilda | `20` |

Por exemplo, se quiser permitir até `30` jogadores por guilda, defina:

```ini
GuildPlayerMaxNum=30
```

:::note Edite a Linha Existente OptionSettings
No Palworld, as configurações do servidor geralmente ficam dentro de uma única entrada `OptionSettings=(...)`. Normalmente, você deve alterar o valor existente `GuildPlayerMaxNum` dentro dessa linha, em vez de adicionar uma segunda entrada duplicada.
:::

### Exemplo de trecho

Sua configuração pode ficar parecida com esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Se seu arquivo já contiver várias configurações dentro de `OptionSettings=(...)`, altere apenas a parte `GuildPlayerMaxNum` e deixe os outros valores inalterados.

:::caution Evite Chaves Duplicadas
Não adicione `GuildPlayerMaxNum` múltiplas vezes no mesmo bloco de configuração. Chaves duplicadas podem causar comportamento inesperado ou deixar incerto qual valor o servidor vai usar.
:::

## Salve e aplique as alterações

Após editar o valor:

1. Salve as alterações no arquivo `PalWorldSettings.ini`
2. Reinicie seu servidor Palworld

É necessário reiniciar para que o novo limite de jogadores por guilda seja carregado pelo servidor.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar servidor | Sim |
| Comando adicional no console | Nenhum comando verificado necessário |

:::tip Reinicialização Necessária
O valor atualizado do máximo de jogadores por guilda não é aplicado imediatamente enquanto o servidor está rodando. Você precisa reiniciar completamente o servidor após salvar a configuração.
:::

## Verifique o novo limite da guilda

Depois que o servidor reiniciar, o novo limite de tamanho da guilda deve estar ativo para jogadores que entrarem ou gerenciarem guildas no seu servidor Palworld.

Se a alteração não parecer aplicada, verifique o seguinte:

- confirme que você editou o arquivo correto: `PalWorldSettings.ini`
- confirme que `GuildPlayerMaxNum` está escrito corretamente
- confirme que o valor está dentro da configuração ativa `OptionSettings=(...)`
- confirme que a reinicialização do servidor foi concluída com sucesso

:::caution Formatação da Configuração
Os arquivos de configuração do Palworld são sensíveis à formatação. Se você remover acidentalmente vírgulas, colchetes ou outros valores existentes dentro de `OptionSettings=(...)`, o servidor pode ignorar a configuração ou falhar ao carregá-la corretamente.
:::

## Conclusão

Parabéns, você alterou com sucesso o limite máximo de jogadores por guilda no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂