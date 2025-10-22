---
id: redm-sql-file-import
title: "RedM: Importação de arquivo SQL"
description: "Descubra como importar arquivos SQL corretamente no banco de dados do seu RedM para garantir a funcionalidade dos recursos e a integração com o banco de dados → Saiba mais agora"
sidebar_label: Importação de Arquivo SQL
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importando arquivos SQL no banco de dados do seu RedM

Muitos recursos para RedM vão precisar de um banco de dados para funcionar direito. Por isso, é importante que você importe os arquivos SQL fornecidos junto com seus recursos corretamente no banco de dados para garantir que os recursos possam criar entradas no banco e funcionem como esperado.

:::info
Nem todos os recursos precisam de banco de dados para funcionar! Quando baixar um recurso, confira a descrição ou documentação para saber se é necessário importar um arquivo SQL.
:::

Em muitos casos, um ou mais arquivos com a extensão **.sql** estarão dentro dos arquivos baixados do recurso. Esses arquivos precisam ser importados para o banco de dados.

## Preparando o arquivo SQL

Neste exemplo, vamos importar o arquivo SQL do framework RP **RedEM**. Você deve preparar o arquivo SQL do recurso que quer importar. Para isso, abra a pasta do recurso que precisa de banco de dados e encontre um arquivo com a extensão **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info
Antes de continuar com a importação, abra o arquivo .sql em qualquer editor de texto e confira se as seguintes linhas estão presentes:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Se elas existirem no seu arquivo .sql, remova as linhas `CREATE` e `USE` do banco de dados e salve o arquivo, caso contrário o arquivo SQL não poderá ser importado.

Isso porque a primeira linha declara que um novo banco de dados deve ser criado, mas você não precisa disso já que seu servidor de jogos RedM já tem um banco com outro nome. A segunda linha declara que o banco chamado `essentialmode` deve ser usado para importar, mas novamente você não precisa disso pois já existe um banco que você vai usar para importar.
:::

## Importando o arquivo SQL no banco de dados do seu RedM

Agora, acesse a seção **Database** no painel web do seu servidor de jogos.

![](https://github.com/zaphosting/docs/assets/42719082/5f0f81ec-832b-4b9e-a39a-8ec78fd10890)

Na página do banco de dados, você terá várias funções para gerenciar seu banco, incluindo opções para backup, criação, gerenciamento e mais. Vamos focar em acessar seu banco, mas dê uma olhada nos nossos outros guias de banco de dados se quiser mais informações: [Acesso externo ao banco de dados](gameserver-database-external-access.md).

Clique no ícone azul de redirecionamento que vai te levar para a ferramenta **phpmyadmin**, onde você pode acessar seu banco facilmente. Faça login com as credenciais fornecidas na página do banco se for solicitado.

Quando estiver na página, selecione seu banco de dados na lista à esquerda. O nome do seu banco **sempre** começa com `zap` como prefixo.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Se for a primeira vez que usa, seu banco estará vazio. Agora é hora de importar o arquivo .sql.

Clique no botão **Import** na barra de navegação superior do phpmyadmin para abrir o menu de importação.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Depois, clique no botão **Browse...** que vai abrir o explorador de arquivos. Selecione o arquivo **.sql** que você quer importar.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
O tamanho máximo do arquivo é 2MB. Se seu arquivo SQL for maior, use um divisor de SQL para separar o arquivo em partes menores. Recomendamos a ferramenta [Pinetools SQL-Splitter](https://pinetools.com/split-files) que faz isso pra você. Depois, importe os arquivos SQL normalmente.
:::

Por fim, clique no botão **Import** no final da página para iniciar o processo. Se tudo der certo, você verá uma mensagem de sucesso e uma nova tabela será criada no banco, que você pode ver no lado esquerdo.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

Você importou com sucesso um arquivo SQL no banco de dados do seu servidor de jogos!

## Conclusão

Importar um arquivo SQL para seu servidor RedM é essencial para usar muitos recursos sem problemas. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />