---
id: palworld-technology-ids
title: "Palworld: IDs de Tecnologia"
description: "Aprenda a gerenciar os IDs de tecnologia do Palworld, desativar entradas específicas de tecnologia e entender os valores de configuração necessários no seu servidor -> Saiba mais agora"
sidebar_label: Palworld: IDs de Tecnologia
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld usa *IDs de tecnologia* para identificar tecnologias desbloqueáveis e algumas configurações relacionadas a itens. Neste guia, você vai aprender como desativar tecnologias específicas no seu servidor de jogos Palworld da ZAP-Hosting editando manualmente a entrada correta de configuração.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar arquivos de configuração do servidor.

:::info Acesso Necessário
Você precisa ter acesso à administração do seu servidor Palworld e à seção `Configs` no painel da ZAP-Hosting para completar esta configuração.
:::

:::note Fontes dos IDs de Tecnologia
Os IDs de tecnologia do Palworld são strings internas definidas pelo jogo, como `GrapplingGun` ou `SkillUnlock_JetDragon`. Não existe uma lista oficial dentro do painel da ZAP-Hosting, então você deve usar uma referência externa confiável para obter IDs válidos.
:::

## Entendendo os IDs de tecnologia

IDs de tecnologia são identificadores internos usados pelo Palworld para tecnologias desbloqueáveis. Em vez de usar o nome visível no jogo, a configuração do servidor espera a string exata do ID.

Para desativar tecnologias, o Palworld usa a configuração `DenyTechnologyList`. Esse valor aceita uma lista de IDs de tecnologia separados por vírgula.

### O que o `DenyTechnologyList` faz

Quando você adiciona IDs de tecnologia válidos em `DenyTechnologyList`, essas tecnologias são bloqueadas no seu servidor. Isso é útil para restringir progressão, remover ferramentas específicas de mobilidade ou personalizar regras de jogo para sua comunidade.

### Formato suportado do valor

O valor deve ser inserido como uma lista separada por vírgulas, sem explicações adicionais.

| Chave de Configuração | Propósito | Formato | Exemplo |
|---|---|---|---|
| `DenyTechnologyList` | Desativa tecnologias selecionadas | Strings de IDs de tecnologia separadas por vírgula | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Correspondência Exata do ID
Os IDs de tecnologia devem corresponder exatamente ao valor interno do jogo. Se um ID estiver escrito incorretamente ou não for mais válido para a versão atual do Palworld, a configuração pode não funcionar como esperado.
:::

## Abra o arquivo de configuração correto

Na ZAP-Hosting, essa alteração é feita editando manualmente o arquivo de configuração do Palworld.

### Arquivo a editar

Você precisa editar o seguinte arquivo:

```ini
PalWorldSettings.ini
```

### Onde encontrar na interface da ZAP-Hosting

Abra a administração do seu servidor de jogos Palworld e vá para:

```text
Configs
```

A partir daí, abra o arquivo `PalWorldSettings.ini`.

:::tip Localização da Configuração na ZAP-Hosting
Se seu servidor oferece múltiplos arquivos editáveis, certifique-se de selecionar `PalWorldSettings.ini`, pois este é o arquivo usado para configurações do servidor relacionadas ao gameplay, como `DenyTechnologyList`.
:::

## Edite a configuração do ID de tecnologia

Depois de abrir o `PalWorldSettings.ini`, localize a lista de opções do servidor e adicione ou modifique a entrada `DenyTechnologyList`.

### Adicione IDs de tecnologia em `DenyTechnologyList`

Use uma lista separada por vírgulas das tecnologias que deseja desativar.

Exemplo:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Este exemplo desativa:

| ID de Tecnologia | Significado |
|---|---|
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variante de Grappling Gun de nível superior |
| `SkillUnlock_JetDragon` | Desbloqueio relacionado ao JetDragon |

:::note Formato com Aspas
Dependendo de como a entrada existente em `PalWorldSettings.ini` está estruturada, o valor pode aparecer dentro de um bloco maior de opções. Mantenha o estilo de sintaxe já usado no seu arquivo e apenas altere o valor de `DenyTechnologyList`.
:::

### Exemplo dentro de um bloco de opções

Em muitos servidores Palworld, as configurações ficam dentro de uma linha maior `OptionSettings`. Nesse caso, a entrada pode ser parecida com esta:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Se `DenyTechnologyList` não estiver presente, adicione-a dentro do mesmo bloco `OptionSettings=(...)` e separe-a das outras entradas com uma vírgula.

:::caution Preserve a Sintaxe Existente
Não remova outras configurações de `OptionSettings`. Uma vírgula, colchete ou aspas faltando pode fazer a configuração não carregar corretamente.
:::

## Escolha IDs de tecnologia válidos

Você deve usar IDs internos válidos, não os nomes exibidos no jogo.

### Exemplos de IDs de tecnologia

A seguir estão exemplos conhecidos de IDs de tecnologia usados pelo Palworld:

| ID de Tecnologia | Significado Exemplo |
|---|---|
| `AIcore` | Núcleo de IA |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Variante de Grappling Gun |
| `GrapplingGun3` | Variante de Grappling Gun |
| `GrapplingGun4` | Variante de Grappling Gun |
| `GrapplingGun5` | Variante de Grappling Gun |
| `SkillUnlock_JetDragon` | Desbloqueio JetDragon |
| `SkillUnlock_IceHorse` | Desbloqueio Ice Horse |
| `PALBOX` | Tecnologia relacionada ao Palbox |
| `RepairBench` | Bancada de Reparo |

Como o Palworld recebe atualizações, a lista completa de IDs pode mudar com o tempo. Se precisar de uma lista mais ampla, verifique os IDs em uma fonte atual e confiável antes de aplicá-los.

### Uso relacionado de IDs em outras configurações

IDs internos no estilo tecnologia também podem ser usados em outras opções de configuração do Palworld. Um exemplo conhecido é:

| Chave de Configuração | Propósito |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Define um item customizado para drop em kills PvP |

:::info Configuração PvP Relacionada
Se planeja usar IDs para customizar drops de itens em PvP, confirme que o tipo de ID exigido por `AdditionalDropItemWhenPlayerKillingInPvPMode` corresponde ao item que deseja usar. Este guia foca especificamente em `DenyTechnologyList`.
:::

## Salve e reinicie o servidor

Após editar o arquivo, salve suas alterações na interface da ZAP-Hosting.

Para aplicar a nova configuração, reinicie seu servidor Palworld.

### Ação necessária após a edição

| Ação | Necessário |
|---|---|
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Nenhum comando confirmado necessário |

É necessário reiniciar porque o Palworld lê essas configurações do servidor durante a inicialização. Sem reiniciar, as novas restrições de tecnologia podem não entrar em vigor.

:::tip Teste após reiniciar
Depois que o servidor reiniciar, entre no servidor e verifique se as tecnologias selecionadas não estão mais disponíveis conforme esperado. Isso ajuda a confirmar que os IDs e a sintaxe foram inseridos corretamente.
:::

## Solução de problemas

Se as tecnologias ainda estiverem disponíveis após o reinício, verifique os seguintes pontos.

### Verifique a grafia do ID

Certifique-se de que cada ID de tecnologia está escrito exatamente como requerido, incluindo maiúsculas e minúsculas.

### Confira a sintaxe da configuração

Se você editou o bloco `OptionSettings=(...)`, confirme que:

- cada configuração está separada por vírgula
- aspas estão corretamente abertas e fechadas
- colchetes estão completos
- `DenyTechnologyList` está dentro do bloco correto de configurações

### Confirme se o servidor reiniciou com sucesso

Se o servidor não reiniciou corretamente, a configuração atualizada pode não ter sido carregada.

:::danger Risco de Configuração Inválida
Um `PalWorldSettings.ini` mal formatado pode impedir que as configurações sejam carregadas corretamente. Se isso acontecer, restaure a versão anterior funcional do arquivo e aplique a alteração com cuidado.
:::

## Conclusão

Parabéns, você desativou com sucesso tecnologias específicas no seu servidor Palworld usando IDs de tecnologia. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂