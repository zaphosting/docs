---
id: fivem-sql-file-import
title: "FiveM: Importação de arquivo SQL"
description: "Entenda como importar arquivos SQL corretamente para garantir que os recursos do FiveM funcionem direito com seu banco de dados → Saiba mais agora"
sidebar_label: Importação de Arquivo SQL
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Muitos recursos para FiveM vão precisar de um banco de dados para funcionar direitinho. Por isso, é importante que você importe os arquivos SQL fornecidos com seus recursos corretamente no seu banco de dados, garantindo que os recursos possam criar entradas e funcionar como esperado.

:::info
Nem todos os recursos precisam de banco de dados para funcionar! Quando baixar um recurso, confira a descrição ou documentação para saber se é necessário importar um arquivo SQL.
:::

Na maioria dos casos, um ou mais arquivos com a extensão **.sql** estarão dentro dos arquivos baixados do recurso. Esses arquivos precisam ser importados para o banco de dados.

<InlineVoucher />

## Preparando o arquivo SQL

Neste exemplo, vamos importar o arquivo SQL para o **ESX**. Você deve preparar o arquivo SQL do recurso que quer importar. Para isso, abra a pasta do seu recurso que precisa de banco de dados e encontre um arquivo com a extensão **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/3YMrCZ29pc87aW8/preview)

:::info
Antes de importar, abra o arquivo .sql em qualquer editor de texto e veja se as seguintes linhas estão presentes:

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

Se estiverem, remova as linhas `CREATE` e `USE` do banco de dados e salve o arquivo, senão o arquivo SQL não poderá ser importado.

Isso porque a primeira linha declara que um novo banco de dados deve ser criado, mas você não precisa disso, já que seu servidor de jogos RedM já tem um banco com outro nome. A segunda linha declara que o banco chamado `essentialmode` deve ser usado para importar, mas novamente você não precisa disso, pois já existe um banco que você vai usar para importar.
:::

## Importando o arquivo SQL no seu banco de dados

Agora, acesse a seção **Database** no painel web do seu servidor de jogos.

![](https://screensaver01.zap-hosting.com/index.php/s/jk6BBm4d5dDtNcd/preview)

Na página do banco de dados, você vai encontrar várias funções para gerenciar seu banco, incluindo opções para backup, criação, gerenciamento e mais. Vamos focar em acessar seu banco, mas dê uma olhada nos nossos outros guias de banco de dados se quiser mais detalhes: [Acesso externo ao banco de dados](gameserver-database-external-access.md).

Clique no ícone azul de redirecionamento que vai te levar para a ferramenta **phpmyadmin**, onde você pode acessar seu banco facilmente. Faça login com as credenciais fornecidas na página do banco, se for solicitado.

Quando estiver na página, selecione seu banco de dados na lista à esquerda. O nome do seu banco **sempre** começa com `zap` como prefixo.

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

Se for a primeira vez que usa, seu banco estará vazio. Agora é hora de importar o arquivo .sql.

Clique no botão **Importar** na barra de navegação superior do phpmyadmin para abrir o menu de importação.

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

Depois, clique no botão **Procurar...** que vai abrir o explorador de arquivos. Selecione o arquivo **.sql** que você quer importar.

![](https://screensaver01.zap-hosting.com/index.php/s/cfTYGYfFGMEyQbA/preview)

:::note
O tamanho máximo do arquivo é 2MB. Se seu arquivo SQL for maior, use um divisor de SQL para quebrar o arquivo em partes menores. Recomendamos a ferramenta [Pinetools SQL-Splitter](https://pinetools.com/split-files) que faz isso pra você. Depois, importe os arquivos SQL normalmente.
:::

Por fim, clique no botão **Importar** no final da página para iniciar o processo. Se tudo der certo, você verá uma mensagem de sucesso e uma nova tabela será criada no seu banco, que você pode ver no lado esquerdo.

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

## Conclusão

Importar um arquivo SQL para seu servidor FiveM é essencial para usar muitos recursos sem problemas. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />