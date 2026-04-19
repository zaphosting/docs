---
id: windrose-manage-worlds
title: "Windrose: Gerenciar Mundos"
description: "Aprenda a gerenciar múltiplos mundos no Windrose, alternar saves de mundos e configurar as definições do seu mundo em um servidor dedicado com a estrutura correta de mundos. -> Saiba mais agora"
sidebar_label: Gerenciar Mundos
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Windrose suporta múltiplos mundos em um único servidor dedicado, com cada mundo usando seus próprios dados de save e configuração `WorldDescription.json`. Neste guia, você vai aprender a criar novos mundos, alternar entre mundos existentes, fazer backup e apagar mundos com segurança.

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Windrose pelo painel da ZAP-Hosting e que seu servidor está offline antes de fazer alterações nos saves ou configurações.

:::info Acesso Necessário
Você precisa ter acesso à gestão do servidor de jogos na ZAP-Hosting, incluindo as áreas de **Gerenciador de Arquivos**, **Configs** e **Backups**, para gerenciar seus mundos Windrose com segurança.
:::

:::caution Pare o Servidor Primeiro
Sempre pare seu servidor antes de editar o arquivo `ServerDescription.json`, modificar o `WorldDescription.json`, criar pastas de mundos ou deletar dados de save. Isso ajuda a evitar corrupção e gravações incompletas do mundo.
:::

## Entenda a Estrutura dos Mundos no Windrose

Windrose armazena todos os dados dos mundos dentro do diretório do perfil de save. O primeiro mundo é criado automaticamente quando você inicia o servidor pela primeira vez.

A estrutura relevante é assim:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

Na prática, as pastas dos mundos ficam em:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[sua_versao_do_jogo]/Worlds/
```

Cada pasta de mundo é nomeada pelo seu `IslandId` único. O servidor usa esse ID internamente para identificar qual mundo deve ser carregado.

| Arquivo ou Pasta | Propósito |
| --- | --- |
| `ServerDescription.json` | Define a configuração ativa do servidor, incluindo o mundo atualmente carregado |
| `RocksDB/[sua_versao_do_jogo]/Worlds/` | Armazena todas as pastas de saves dos mundos disponíveis |
| `[seu_id_do_mundo]/WorldDescription.json` | Armazena a configuração de um mundo específico |
| `WorldIslandId` | Valor em `ServerDescription.json` que indica ao servidor qual mundo carregar |

:::danger Não Renomeie as Pastas dos Mundos
Você nunca deve renomear manualmente uma pasta de mundo. O Windrose usa o nome da pasta como o `IslandId` interno no banco de dados RocksDB. Renomear uma pasta pode corromper o mundo ou deixá-lo órfão e inutilizável.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Encontre o Mundo Ativo

Antes de alternar ou criar mundos, é útil identificar qual mundo está ativo no momento.

### Verifique a Configuração do Servidor

Abra a seção **Configs** na gestão do seu servidor de jogos e localize o arquivo `ServerDescription.json`. Se o arquivo não estiver listado lá, use o **Gerenciador de Arquivos** e abra `ServerDescription.json` na raiz da lista de arquivos.

Procure pelo campo:

```json
"WorldIslandId": "[seu_id_do_mundo]"
```

Esse valor define qual mundo o servidor vai carregar ao iniciar.

### Verifique um ID de Mundo

Para identificar um mundo salvo específico, abra o arquivo `WorldDescription.json` dentro da pasta do mundo e procure o valor `IslandId`.

Exemplo:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "Meu Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

O `IslandId` nesse arquivo deve corresponder exatamente ao nome da pasta.

## Alternar Entre Mundos

Se você já tem múltiplos mundos salvos no seu servidor, pode alternar entre eles mudando o `WorldIslandId` ativo.

### Atualize o Mundo Alvo

Primeiro, pare seu servidor pelo painel da ZAP-Hosting.

Depois, abra o arquivo `ServerDescription.json` na área de **Configs** ou pelo **Gerenciador de Arquivos** na raiz dos arquivos do servidor.

Encontre este campo:

```json
"WorldIslandId": "COLE_AQUI_O_ID_DO_MUNDO_DESEJADO"
```

Substitua o valor pelo `IslandId` do mundo que você quer carregar. Você pode encontrar esse ID abrindo o `WorldDescription.json` do mundo alvo.

### Salve e Reinicie o Servidor

Salve o arquivo e inicie seu servidor novamente. O Windrose agora vai carregar o mundo selecionado.

:::tip Verifique o ID do Mundo com Atenção
Se o `WorldIslandId` não corresponder exatamente a uma pasta de mundo existente e ao seu `IslandId`, o servidor pode falhar ao carregar o mundo desejado ou gerar um novo mundo no lugar.
:::

## Criar um Novo Mundo

Se quiser hospedar várias sessões de mundos em um servidor, você pode criar um mundo novo manualmente.

### Crie a Pasta do Mundo

Pare seu servidor primeiro.

Abra o **Gerenciador de Arquivos** e navegue até:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[sua_versao_do_jogo]/Worlds/
```

Crie uma nova pasta com um nome único. Esse nome será o novo `IslandId` do mundo.

Por exemplo:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[sua_versao_do_jogo]/Worlds/MeuSegundoMundo
```

### Crie o Arquivo de Descrição do Mundo

Dentro da nova pasta, crie um arquivo chamado `WorldDescription.json` e cole o seguinte modelo:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "SEU_NOVO_ID_DO_MUNDO",
    "WorldName": "Meu Segundo Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Substitua `SEU_NOVO_ID_DO_MUNDO` pelo ID do mundo que você escolheu.

:::caution IDs Correspondentes São Obrigatórios
O `IslandId` dentro do `WorldDescription.json` deve ser idêntico ao nome da pasta. Até pequenas diferenças, como maiúsculas/minúsculas ou espaços extras, podem impedir o carregamento correto do mundo.
:::

### Defina o Novo Mundo como Ativo

Agora abra o `ServerDescription.json` e atualize o valor `WorldIslandId` para apontar para o ID do seu novo mundo.

Exemplo:

```json
"WorldIslandId": "MeuSegundoMundo"
```

Salve o arquivo e inicie o servidor. O Windrose vai gerar o novo mundo do zero na inicialização.

## Fazer Backup de um Mundo

Antes de alternar mundos, apagar dados ou testar novas configurações, você deve criar um backup do save do seu mundo.

### Use o Recurso de Backup da ZAP-Hosting

Pare seu servidor primeiro.

No menu lateral do painel, abra **Backups** e crie um novo backup. Essa é a opção mais segura se quiser restaurar o estado completo do servidor depois.

### Baixe os Arquivos do Mundo Manualmente

Se quiser apenas uma cópia direta dos dados de save, abra o **Gerenciador de Arquivos** e baixe a pasta inteira `RocksDB/` usando a opção de zip ou download.

Caminho relevante:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Método de Backup | Uso Recomendado |
| --- | --- |
| Backup pelo painel | Melhor para recuperação completa do servidor |
| Download manual da pasta `RocksDB/` | Melhor para arquivamento direto do save do mundo |
| Ambos os métodos | Melhor para mundos importantes ou antes de apagar |

:::note Recomendação de Backup
Se você gerencia vários mundos, manter tanto um backup pelo painel quanto uma cópia manual da pasta `RocksDB/` oferece mais flexibilidade para restaurar um mundo específico depois.
:::

## Apagar um Mundo

Se quiser resetar um mundo completamente, pode deletar a pasta de save e deixar o servidor gerar uma nova.

### Delete o Save do Mundo

Pare seu servidor.

Abra o **Gerenciador de Arquivos** e navegue até:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[sua_versao_do_jogo]/Worlds/
```

Delete a pasta do mundo que deseja apagar.

### Regenerar o Mundo

Certifique-se de que o `ServerDescription.json` ainda aponta para o ID do mundo deletado no campo `WorldIslandId`.

Quando iniciar o servidor novamente, o Windrose vai detectar que a pasta do mundo alvo não existe mais e vai gerar um mundo novo para aquele ID.

:::danger Confirme a Pasta Correta Antes de Deletar
Deletar a pasta errada remove permanentemente os dados de save daquele mundo, a menos que você tenha um backup. Verifique o nome da pasta e o `IslandId` antes de continuar.
:::

## Gerenciar Configurações do Mundo

Cada mundo tem seu próprio `WorldDescription.json`, o que significa que você pode manter configurações separadas para mundos diferentes no mesmo servidor.

### Exemplo de Configuração do Mundo

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MeuSegundoMundo",
    "WorldName": "Meu Segundo Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Valores Importantes

| Chave | Descrição |
| --- | --- |
| `Version` | Versão da configuração usada pelo arquivo |
| `IslandId` | ID interno do mundo, deve corresponder ao nome da pasta |
| `WorldName` | Nome exibido do mundo |
| `WorldPresetType` | Tipo de preset para geração do mundo |
| `WorldSettings` | Configurações adicionais específicas do mundo, se suportadas |

:::info Gerenciamento de Configuração no Painel
Os arquivos de configuração do Windrose podem ser gerenciados na gestão do seu servidor de jogos, na seção **Configs**. Se um arquivo não estiver disponível lá, use o **Gerenciador de Arquivos** para editá-lo diretamente.
:::

## Melhores Práticas para Gerenciar Múltiplos Mundos

Gerenciar vários mundos em um servidor é útil para testes, eventos ou grupos de jogadores separados. Para manter tudo organizado, siga estas recomendações:

- Use IDs de mundo claros e únicos, como `[seu_mundo_pvp]` ou `[seu_mundo_build]`
- Mantenha o nome da pasta e o `IslandId` exatamente iguais
- Faça backup antes de alternar ou apagar qualquer mundo
- Evite alterar arquivos enquanto o servidor estiver rodando
- Documente qual `WorldIslandId` pertence a cada nome de mundo

Essa abordagem ajuda a evitar confusão, especialmente se você mantiver muitos mundos ao longo do tempo.

## Conclusão

Parabéns, você gerenciou com sucesso os mundos Windrose no seu servidor. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂