---
id: palworld-change-day-night-speed
title: "Palworld: Alterar Velocidade do Ciclo Dia e Noite"
description: "Aprenda como alterar a velocidade do ciclo dia e noite no Palworld editando as configurações do ciclo diurno no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Alterar Velocidade do Ciclo Dia e Noite
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você ajuste a velocidade com que o ciclo de dia e noite passa no seu servidor. Neste guia, você vai aprender como alterar a velocidade do dia e da noite editando o arquivo de configuração correto no painel do seu servidor de jogos ZAP-Hosting e aplicando as mudanças corretamente.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld através da interface web da ZAP-Hosting e permissão para editar arquivos de configuração do servidor.

:::info Configuração Manual Necessária
Esta configuração é feita manualmente através dos arquivos de configuração do servidor. Você precisa editar as configurações do Palworld diretamente, em vez de usar comandos automáticos dentro do jogo.
:::

## Localize o Arquivo de Configuração

Para alterar a velocidade do ciclo dia e noite, você precisa editar o arquivo `PalWorldSettings.ini`.

No painel de administração do servidor de jogos ZAP-Hosting, você pode acessar este arquivo pela seção **Configs**. Abra seu servidor Palworld na interface web e navegue até a área de gerenciamento dos arquivos de configuração.

O arquivo relevante é:

```ini
PalWorldSettings.ini
```

:::note Localização do Arquivo de Configuração
Dependendo do template do servidor de jogos e do layout do painel, o arquivo é disponibilizado através da área **Configs** na administração da ZAP-Hosting. Se o caminho interno completo for exibido na sua interface, normalmente é o arquivo de configurações do servidor Palworld usado para configurar o gameplay.
:::

## Edite as Configurações de Velocidade do Dia e da Noite

Dentro do `PalWorldSettings.ini`, procure pelas entradas de configuração do gameplay relacionadas à velocidade do dia e da noite.

Você precisa ajustar os seguintes valores:

| Chave de Configuração | Valor Padrão | Descrição |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Controla a velocidade com que o dia passa |
| `NightTimeSpeedRate` | `1.000000` | Controla a velocidade com que a noite passa |

Valores maiores fazem o tempo passar mais rápido, enquanto valores menores fazem o tempo passar mais devagar.

### Exemplo de Configuração

Se quiser que tanto o dia quanto a noite passem mais rápido, você pode definir valores maiores assim:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Se quiser um dia mais longo, mas uma noite mais rápida, pode usar valores diferentes, por exemplo:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Onde Colocar os Valores

O Palworld armazena muitas configurações de gameplay dentro da seção `OptionSettings` do arquivo `PalWorldSettings.ini`. Você deve editar as entradas existentes `DayTimeSpeedRate` e `NightTimeSpeedRate` lá, em vez de adicionar chaves duplicadas em outro lugar.

Uma seção típica pode ser parecida com esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Depois de editar, pode ficar assim:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Edite as Entradas Existentes com Cuidado
Certifique-se de alterar apenas o valor após `DayTimeSpeedRate=` e `NightTimeSpeedRate=`. Não remova vírgulas, colchetes ou outras configurações existentes na linha `OptionSettings`, pois uma formatação incorreta pode impedir que o servidor carregue a configuração corretamente.
:::

## Salve e Aplique as Alterações

Depois de atualizar os valores no `PalWorldSettings.ini`, salve o arquivo no editor de configuração da ZAP-Hosting.

Após salvar, reinicie seu servidor Palworld para que as novas configurações do ciclo diurno sejam carregadas.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |

:::tip Reinicialização Necessária
As mudanças nas configurações do mundo do Palworld não são aplicadas de forma confiável até que o servidor seja reiniciado. Sempre reinicie o servidor após alterar a velocidade do dia ou da noite.
:::

## Verifique o Novo Ciclo Diurno

Após a reinicialização, entre no seu servidor e observe a progressão do tempo dentro do jogo.

Você deverá notar que:

- o **dia** passa mais rápido ou mais devagar conforme o valor de `DayTimeSpeedRate`
- a **noite** passa mais rápido ou mais devagar conforme o valor de `NightTimeSpeedRate`

Se a velocidade não parecer ter mudado, reabra o `PalWorldSettings.ini` e verifique se:

- os valores foram salvos corretamente
- a formatação da linha `OptionSettings` continua válida
- o servidor foi reiniciado após a alteração

## Referência de Configuração

Use a tabela abaixo como referência rápida para quando quiser alterar as configurações do dia novamente no futuro.

| Configuração | Exemplo | Resultado |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Dia mais lento | O dia dura mais tempo |
| `DayTimeSpeedRate=2.000000` | Dia mais rápido | O dia passa mais rápido |
| `NightTimeSpeedRate=0.500000` | Noite mais lenta | A noite dura mais tempo |
| `NightTimeSpeedRate=2.000000` | Noite mais rápida | A noite passa mais rápido |

:::note Configurações Balanceadas
Se quiser uma experiência de gameplay mais natural, evite valores extremamente altos. Mudanças muito rápidas no ciclo dia e noite podem dificultar o planejamento de agricultura, exploração e gerenciamento da base.
:::

## Conclusão

Parabéns, você alterou com sucesso a velocidade do ciclo dia e noite no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂