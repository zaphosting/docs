---
id: palworld-max-guild-bases
title: "Palworld: Máximo de Bases por Guilda"
description: "Aprenda como alterar a configuração de máximo de bases por guilda no Palworld editando o valor BaseCampMaxNumInGuild no seu servidor. -> Saiba mais agora"
sidebar_label: "Máximo de Bases por Guilda"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você controle o número máximo de bases que cada guilda pode colocar no seu servidor. Neste guia, você vai aprender como editar manualmente o arquivo de configuração correto na interface web da ZAP-Hosting, alterar a configuração `BaseCampMaxNumInGuild` e aplicar a mudança reiniciando seu servidor.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting.

:::info Acesso Necessário
Você precisa ter acesso à administração do seu servidor Palworld e à seção `Configs` para editar os arquivos de configuração.
:::

## Localize o arquivo de configuração

Para alterar o limite máximo de bases por guilda, você precisa editar o arquivo `PalWorldSettings.ini`.

Na interface web da ZAP-Hosting, abra a administração do seu servidor de jogos Palworld e navegue até:

`Configs` → `PalWorldSettings.ini`

Este arquivo contém os principais valores de configuração do gameplay para o seu servidor Palworld, incluindo limites de guildas e bases.

## Edite o valor máximo de bases por guilda

Dentro do arquivo `PalWorldSettings.ini`, procure pela seção `OptionSettings`. A configuração que você precisa alterar é:

`BaseCampMaxNumInGuild=[seu_valor]`

Substitua `[seu_valor]` pelo número de bases que você quer permitir que cada guilda coloque.

### Exemplo de configuração

Se você quiser permitir até `6` bases por guilda, a entrada deve ficar assim:

```ini
BaseCampMaxNumInGuild=6
```

Se a configuração já existir, altere apenas o valor. Se estiver ausente, adicione-a dentro da lista de parâmetros `OptionSettings` existente no arquivo.

:::note Valor padrão e máximo vanilla
Informações atuais indicam que o valor padrão é `4` e o máximo normal no vanilla é `10`. Valores acima de `10` geralmente não são suportados em um servidor Palworld sem mods.
:::

### Referência de valores

| Chave da config | Descrição | Valor padrão | Máximo vanilla |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Número máximo de bases permitidas por guilda | `4` | `10` |

:::caution Use valores válidos
Defina `BaseCampMaxNumInGuild` apenas para um valor razoável e suportado. Valores acima de `10` normalmente exigem modificação no servidor e podem não funcionar corretamente em um servidor Palworld padrão.
:::

## Salve a configuração

Após alterar o valor, salve o arquivo `PalWorldSettings.ini` no editor de configuração da ZAP-Hosting.

Isso grava a nova configuração de máximo para guildas, mas ela só terá efeito após o servidor ser reiniciado.

## Reinicie o servidor

Depois de salvar o arquivo, reinicie seu servidor Palworld pela interface de administração do servidor.

A reinicialização é necessária porque o Palworld lê o arquivo `PalWorldSettings.ini` durante a inicialização do servidor. Sem reiniciar, o novo limite de bases por guilda geralmente não será aplicado.

### O que fazer depois

Normalmente, não são necessários comandos adicionais no console após editar `BaseCampMaxNumInGuild`. Após o reinício, o novo valor deve estar ativo automaticamente.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais | Não |

:::tip Teste o novo limite
Após o reinício, entre no servidor e teste o limite de colocação de bases com uma guilda para confirmar que a nova configuração foi aplicada como esperado.
:::

## Solução de problemas

Se a configuração do máximo de bases por guilda não parecer mudar, verifique os seguintes pontos.

### Verifique a entrada na config

Certifique-se de que `BaseCampMaxNumInGuild` está escrita corretamente e usa um valor numérico, por exemplo:

```ini
BaseCampMaxNumInGuild=8
```

Um erro de digitação no nome da chave ou um valor inválido pode impedir que a configuração funcione.

### Confirme que o arquivo foi salvo

Verifique se suas alterações foram salvas em `Configs` → `PalWorldSettings.ini` antes de reiniciar o servidor.

### Reinicie o servidor completamente

É necessário um reinício completo do servidor após alterar essa configuração. Se você apenas salvou o arquivo sem reiniciar, o valor antigo pode continuar em uso.

### Mantenha-se dentro do limite vanilla

Se você definir um valor acima de `10`, o servidor pode ignorá-lo ou apresentar comportamento inesperado, a menos que esteja usando mods compatíveis. Se estiver rodando um servidor padrão, mantenha o valor em `10` ou menos.

## Conclusão

Parabéns, você alterou com sucesso o número máximo de bases por guilda no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂