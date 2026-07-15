---
id: palworld-equipment-durability-rate
title: "Palworld: Taxa de Durabilidade do Equipamento"
description: "Aprenda como alterar a durabilidade do equipamento e ajustar a taxa de durabilidade no seu servidor Palworld editando o valor correto na configuração. -> Saiba mais agora"
sidebar_label: Palworld: Taxa de Durabilidade do Equipamento
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No Palworld, a taxa de durabilidade do equipamento controla a rapidez com que suas ferramentas, armas e armaduras perdem durabilidade durante o uso. Neste guia, você vai aprender como alterar manualmente a configuração `EquipmentDurabilityDamageRate` no seu servidor Palworld da ZAP-Hosting e aplicar a mudança corretamente.



## Preparação

Antes de começar, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld na interface web da ZAP-Hosting. Você também precisa da permissão para editar os arquivos de configuração do servidor em **Configs**.

:::info Configuração Manual Necessária
Essa configuração deve ser alterada manualmente no arquivo de configuração do Palworld. Não existe um comando separado que precise ser executado dentro do jogo para essa alteração específica.
:::

## Entendendo a configuração de durabilidade

O Palworld armazena várias configurações de jogabilidade no arquivo de configuração `PalWorldSettings.ini`. A configuração relevante para a durabilidade do equipamento é:

- `EquipmentDurabilityDamageRate`

Esse valor funciona como um multiplicador para a perda de durabilidade:

| Chave da config | Descrição | Valor padrão |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Controla a rapidez com que o equipamento perde durabilidade | `1.000000` |

Valores menores reduzem a perda de durabilidade, o que significa que seu equipamento dura mais. Um valor de `0.000000` desativa completamente a perda de durabilidade para o equipamento.

:::note O que essa configuração afeta
Essa configuração altera a taxa de perda de durabilidade para equipamentos como ferramentas, armas e armaduras. Ela não aumenta o dano dos itens, a velocidade de reparo ou a qualidade dos itens.
:::

## Abrir o arquivo de configuração do Palworld

Para alterar a configuração, você precisa editar o arquivo principal de configuração do servidor Palworld pela administração do seu servidor de jogos na ZAP-Hosting.

### Encontrar o arquivo na interface da ZAP-Hosting

1. Faça login no site da ZAP-Hosting.
2. Abra a administração do seu servidor de jogos **Palworld**.
3. Vá para **Configs**.
4. Abra o arquivo `PalWorldSettings.ini`.

Esse é o arquivo onde valores de jogabilidade do Palworld, como durabilidade, stamina, dano e outras configurações do mundo, são armazenados.

## Editar a taxa de durabilidade do equipamento

Depois de abrir o `PalWorldSettings.ini`, procure a linha `OptionSettings`. O Palworld normalmente armazena as configurações de jogabilidade como entradas separadas por vírgulas dentro dessa seção.

### Adicionar ou alterar a entrada da config

Você precisa garantir que a seguinte entrada exista dentro de `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Se a chave já estiver presente, substitua o valor atual pelo seu valor preferido. Se estiver ausente, adicione-a dentro do bloco existente `OptionSettings=(...)`.

### Valores de exemplo

Você pode usar os seguintes valores dependendo do resultado desejado:

| Valor | Efeito |
| --- | --- |
| `1.000000` | Perda de durabilidade padrão |
| `0.500000` | Equipamento dura cerca do dobro |
| `0.250000` | Equipamento dura cerca de quatro vezes mais |
| `0.000000` | Equipamento se torna indestrutível |

### Exemplo de trecho de configuração

O conteúdo exato da sua linha `OptionSettings` pode variar dependendo da configuração do seu servidor, mas a configuração de durabilidade deve aparecer na mesma lista separada por vírgulas, por exemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Preserve a formatação existente
Não remova outros valores da linha `OptionSettings` ao editar o arquivo. O Palworld espera que essas configurações permaneçam no formato correto separado por vírgulas.
:::

## Salvar e aplicar as alterações

Após editar o arquivo de configuração, salve suas alterações na interface da ZAP-Hosting.

### Reiniciar o servidor

Para aplicar a nova configuração de durabilidade, reinicie seu servidor Palworld pela administração do servidor de jogos.

Sem reiniciar, a configuração atualizada geralmente não será carregada pelo servidor.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comando dentro do jogo | Não |
| Reinstalar o servidor | Não |

:::tip Teste as mudanças com um ajuste pequeno primeiro
Se você não tem certeza de qual valor de durabilidade combina com seu estilo de jogo, comece com `0.500000`. Isso oferece uma melhora perceptível na durabilidade sem desativar totalmente a mecânica.
:::

## Solução de problemas

Se o novo comportamento da durabilidade do equipamento não for aplicado após o reinício, verifique os seguintes pontos.

### Verifique a chave da config

Certifique-se de que a chave está escrita exatamente como:

```ini
EquipmentDurabilityDamageRate
```

As chaves de configuração do Palworld são sensíveis a maiúsculas e minúsculas na prática para uma administração confiável, então copie o nome exatamente como mostrado.

### Confira a posição dentro de `OptionSettings`

O valor deve estar dentro da seção `OptionSettings=(...)` do `PalWorldSettings.ini`. Se você colocá-lo fora desse bloco, o servidor pode ignorá-lo.

### Confirme se o arquivo foi salvo

Após editar em **Configs**, verifique se suas alterações ainda estão presentes ao reabrir o `PalWorldSettings.ini`. Caso contrário, o arquivo pode não ter sido salvo com sucesso.

### Reinicie novamente se necessário

Se jogadores estavam online durante a alteração ou o servidor não reiniciou corretamente, faça outro reinício completo pelo painel de administração do servidor.

## Conclusão

Parabéns, você alterou com sucesso a taxa de durabilidade do equipamento no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂