---
id: gameserver-database-manage-sqlfiles
title: "Servidor de jogos: Importar ou Exportar um arquivo SQL"
description: "Descubra como gerenciar o banco de dados do seu servidor de jogos importando e exportando arquivos SQL de forma eficiente usando o phpMyAdmin → Saiba mais agora"
sidebar_label: Importar/Exportar Arquivos SQL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma grande variedade de jogos para o seu servidor de jogos utiliza bancos de dados para armazenar dados a longo prazo e funcionar corretamente. Alguns jogos, recursos ou mods podem fornecer um arquivo `.sql` que é usado para importar as tabelas e dados apropriados para o seu próprio banco de dados. Exportar seu banco de dados também pode ser útil para transferir seus dados entre sistemas ou simplesmente para fazer backup dos seus arquivos manualmente. Neste guia, vamos explorar o processo de importar e exportar arquivos SQL para dentro ou fora do banco de dados do seu servidor de jogos através da interface do phpMyAdmin.

<InlineVoucher />

## Preparação

Para começar, você deve acessar o banco de dados MySQL do seu servidor de jogos, o que pode ser feito diretamente pela interface web. Você também deve ter os arquivos `.sql` prontos para importar para o seu banco de dados.

:::tip
Alguns arquivos SQL podem exigir que você use um nome de banco de dados específico, o que pode entrar em conflito com o nome do banco de dados do seu ID ZAP fornecido automaticamente e causar erros.

Você pode identificar esse tipo de arquivo procurando por uma instrução `USE xxx` ou `CREATE DATABASE` ao abrir o arquivo em um editor de texto. Se for o caso, você deve remover ambas as instruções e salvar o arquivo antes de importar.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Vá para a seção **Ferramentas->Bancos de Dados** e use o botão azul de link para abrir a interface do phpMyAdmin. Use as credenciais na página da sua interface web para fazer login.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Para saber mais sobre o phpMyAdmin, recomendamos a leitura do nosso [guia de Acesso ao Banco de Dados](gameserver-databases-pma.md), que aborda a interface com mais detalhes.

## Importando Arquivo SQL

Agora que você está logado na interface do phpMyAdmin, selecione o banco de dados principal, que deve ser o seu ID ZAP. Na barra de navegação superior, encontre a seção **Importar**.

Nesta página, use o botão **Procurar...** para abrir uma janela do explorador de arquivos. Através dela, encontre o arquivo SQL que deseja importar para o seu banco de dados e abra-o.

:::note
O tamanho máximo do arquivo SQL é 2MB. Se seu arquivo for maior, recomendamos usar um divisor de SQL como o [Pinetools SQL-Splitter](https://pinetools.com/split-files), que divide o arquivo em partes menores. Você pode importar essas partes separadamente.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Você também pode ajustar algumas configurações adicionais, se quiser. Para a maioria dos usuários, os valores padrão são suficientes, então basta rolar para baixo e usar o botão **Importar**.

O arquivo SQL deve ser importado com sucesso e você verá isso refletido no banco de dados através de mudanças como novas tabelas, dados e mais.

## Exportando Arquivo SQL

Exportar seu banco de dados é outra função essencial que pode ser útil para transferir bancos de dados facilmente ou fazer backup. Novamente, selecione o banco de dados principal, que deve ser o seu ID ZAP, e encontre a seção **Exportar** na barra de navegação superior.

Por padrão, o método de exportação **Rápido** está selecionado, o que exporta automaticamente todas as suas tabelas e dados. Se quiser personalizar quais tabelas e dados serão exportados, selecione a opção **Personalizado** e ajuste os parâmetros conforme desejar. Quando estiver pronto, basta usar o botão **Exportar** para baixar um arquivo SQL localmente no seu sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Conclusão

Você exportou com sucesso seu banco de dados em um arquivo SQL, permitindo importar facilmente no futuro. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />