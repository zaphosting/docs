---
id: palworld-technology-ids
title: "Palworld: IDs de Tecnologia"
description: "Aprenda a gerenciar os IDs de tecnologia do Palworld, desativar entradas específicas de tecnologia e editar a configuração correta do servidor com segurança. -> Saiba mais agora"
sidebar_label: "IDs de Tecnologia"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld usa *IDs de tecnologia* para identificar tecnologias desbloqueáveis e certas configurações relacionadas a itens na configuração do servidor. Neste guia, você vai aprender como desativar tecnologias específicas editando a configuração `DenyTechnologyList` no seu servidor Palworld da ZAP-Hosting.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para editar seus arquivos de configuração.

:::info Requisito de Acesso à Configuração
Você precisa ter acesso à administração do seu servidor de jogos e à seção `Configs` para editar o arquivo `PalWorldSettings.ini`.
:::

:::note Fonte dos IDs de Tecnologia
Os IDs de tecnologia do Palworld são valores baseados em strings, como `GrapplingGun`, `GrapplingGun2` ou `SkillUnlock_JetDragon`. Uma lista de referência atualizada por terceiros está disponível aqui: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Como as atualizações do Palworld podem alterar as tecnologias disponíveis, sempre verifique se os IDs que você pretende usar ainda existem na versão atual do jogo.
:::

## Entendendo os IDs de tecnologia

IDs de tecnologia são identificadores internos usados pelo Palworld para entradas de tecnologias desbloqueáveis. Em servidores dedicados, esses IDs podem ser usados em opções específicas de configuração para controlar o comportamento do jogo.

A configuração mais relevante para este tema é `DenyTechnologyList`, que permite bloquear tecnologias selecionadas para que não sejam desbloqueadas ou usadas no seu servidor.

### Uso suportado na configuração

A tabela a seguir mostra a chave de configuração relevante abordada neste guia:

| Chave da Configuração | Propósito | Formato do valor |
| --- | --- | --- |
| `DenyTechnologyList` | Desativa tecnologias específicas no servidor | Lista separada por vírgulas de strings de IDs de tecnologia |

### Exemplos de IDs de tecnologia

Os seguintes IDs são exemplos comumente referenciados:

| ID de Tecnologia | Significado Exemplo |
| --- | --- |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Grappling Gun de nível superior |
| `SkillUnlock_JetDragon` | Desbloqueio relacionado ao Jetragon |
| `SkillUnlock_IceHorse` | Desbloqueio relacionado ao Frostallion |
| `PALBOX` | Tecnologia relacionada ao Palbox |
| `RepairBench` | Repair Bench |
| `AIcore` | Núcleo de IA |

:::caution Use os Valores Exatos dos IDs
IDs de tecnologia são valores sensíveis a maiúsculas e minúsculas. Se você digitar um ID incorreto, o Palworld pode ignorá-lo, e a tecnologia não será desativada como esperado.
:::

## Abra o arquivo de configuração do Palworld

Para configurar os IDs de tecnologia no seu servidor ZAP-Hosting, você precisa editar manualmente o arquivo correto de configurações do Palworld.

### Encontre o arquivo na interface da ZAP-Hosting

1. Faça login na interface web da ZAP-Hosting.
2. Abra seu servidor de jogos **Palworld**.
3. Vá para **Configs** na administração do servidor de jogos.
4. Abra o arquivo `PalWorldSettings.ini`.

Este é o arquivo de configuração onde a configuração `DenyTechnologyList` é armazenada e editada.



### Localize a configuração relevante

Dentro do `PalWorldSettings.ini`, procure o bloco de opções do servidor que contém suas configurações do Palworld.

Você precisa encontrar ou adicionar a entrada `DenyTechnologyList`.

:::tip Procure Rápido no Arquivo
Use a função de busca do seu navegador com `CTRL` + `F` e pesquise por `DenyTechnologyList` para encontrar a configuração mais rápido.
:::

## Configure o `DenyTechnologyList`

Agora você pode definir quais tecnologias devem ser bloqueadas no seu servidor.

### Formato do valor

`DenyTechnologyList` usa uma lista separada por vírgulas de IDs de tecnologia.

Formato de exemplo:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Cada entrada deve ser um ID de tecnologia válido do Palworld. Não adicione descrições, espaços extras no próprio ID ou caracteres não suportados.

### Adicione ou edite a configuração

Se a configuração já existir, substitua seu valor atual pela lista desejada.

Se a configuração ainda não existir, adicione-a na seção apropriada das configurações do servidor em `PalWorldSettings.ini`.

Exemplo:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Este exemplo desativa várias tecnologias pelos seus IDs.

### Referência de exemplo de configuração

| Entrada de exemplo | Resultado |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Desativa apenas a tecnologia básica Grappling Gun |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Desativa múltiplos níveis da tecnologia Grappling Gun |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Desativa tecnologias especiais selecionadas |

:::note Uso Relacionado de IDs de Itens
Algumas configurações relacionadas a itens do Palworld também usam valores baseados em IDs. Por exemplo, referências de terceiros indicam que `AdditionalDropItemWhenPlayerKillingInPvPMode` pode usar IDs do Palworld para drops de itens em PvP. Contudo, este guia foca especificamente no `DenyTechnologyList`.
:::

## Salve e aplique as alterações

Após editar a configuração, você precisa salvar o arquivo e reiniciar o servidor para que o Palworld carregue as configurações atualizadas.

### Salve o arquivo

Depois de terminar de editar o `PalWorldSettings.ini`:

1. Salve as alterações no editor de `Configs`.
2. Revise a entrada mais uma vez para confirmar que os IDs estão escritos corretamente.

### Reinicie o servidor

Depois que o arquivo for salvo, reinicie seu servidor Palworld pela administração do servidor de jogos da ZAP-Hosting.

Essa reinicialização é necessária porque as mudanças na configuração do `PalWorldSettings.ini` não são aplicadas de forma confiável até que o servidor seja iniciado novamente com o arquivo atualizado.

:::info Reinicialização Necessária
É necessário reiniciar o servidor após alterar o `DenyTechnologyList`. Geralmente, nenhum comando adicional dentro do jogo é necessário para essa configuração quando usada via arquivo de configuração.
:::

## Verifique se as tecnologias foram desativadas

Após a reinicialização, você deve confirmar que a configuração funciona como esperado.

### O que verificar

Você pode confirmar o resultado verificando se as tecnologias selecionadas ainda estão disponíveis no jogo.

Use a seguinte lista de verificação:

| Verificação | Resultado esperado |
| --- | --- |
| Servidor reiniciado com sucesso | O servidor volta a ficar online normalmente |
| `PalWorldSettings.ini` salvo corretamente | Sua entrada `DenyTechnologyList` ainda está presente |
| Tecnologia desativada testada no jogo | A tecnologia selecionada não está mais disponível como esperado |

### Se a configuração não funcionar

Se as tecnologias ainda estiverem disponíveis, verifique o seguinte:

| Possível problema | O que verificar |
| --- | --- |
| ID inválido | Confirme se o ID da tecnologia corresponde exatamente à versão atual do jogo |
| Problema de formatação | Certifique-se de que a lista está separada por vírgulas e escrita como strings simples de IDs |
| Arquivo não salvo | Reabra o `PalWorldSettings.ini` e confirme se o valor ainda está presente |
| Servidor não reiniciado | Reinicie o servidor novamente após salvar as alterações |

:::caution Atualizações do Jogo Podem Mudar IDs
O Palworld recebe atualizações contínuas, e as informações de tecnologia podem mudar com o tempo. Se um ID que antes era válido não funcionar mais, verifique-o contra uma referência atual e confiável antes de continuar a solucionar problemas.
:::

## Conclusão

Parabéns, você desativou com sucesso tecnologias específicas no seu servidor Palworld usando IDs de tecnologia. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂