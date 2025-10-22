---
id: fivem-resolve-dbconnection
title: "FiveM: Resolva problemas de conexão com o banco de dados"
description: "Descubra como corrigir problemas de conexão do servidor FiveM com o banco de dados e restaurar a comunicação perfeita com seu banco → Saiba mais agora"
sidebar_label: Resolver Conexão DB
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Oxmysql é um recurso open-source super útil do FiveM que já vem pré-instalado no seu servidor FiveM, permitindo a comunicação entre o servidor e seu banco de dados. Durante o desenvolvimento, pode acontecer de você fazer alterações (como atualizar as credenciais do banco) que vão exigir mudanças na string de conexão do oxmysql. Exemplo de problema de conexão com o banco:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

Neste guia, vamos mostrar como resolver problemas de conexão com o banco de dados no seu servidor FiveM ajustando a string de conexão no arquivo de configuração do servidor.

<InlineVoucher />

## Método Automático

Comece abrindo o painel web do seu servidor no site e vá para a seção **Configurações**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Nessa página, desça até o final onde você vai encontrar os botões de **Ações**. Use o botão **Reconfigurar string de conexão MySQL** e, depois de clicar, reinicie seu servidor para garantir que as mudanças sejam aplicadas.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Isso vai atualizar automaticamente seu arquivo `server.cfg` com as credenciais corretas atuais, fazendo com que seu banco de dados volte a funcionar.

## Método Manual

Para resolver isso manualmente, você vai precisar acessar seu arquivo `server.cfg` e ajustar a string de conexão com as credenciais que estão no painel web. Faça login na interface do txAdmin e abra o editor CFG. Agora, em outra aba, vá para a seção **Ferramentas->Bancos de Dados** onde você poderá ver suas credenciais atuais.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

No seu arquivo `server.cfg`, adicione a seguinte linha (ou **substitua** se já existir), preenchendo com suas credenciais do banco encontradas no painel web.

```
set mysql_connection_string "mysql://USER:SENHA@SERVIDOR:3306/BANCO_DE_DADOS"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Depois de fazer isso, salve o arquivo e reinicie seu servidor.

## Conclusão

Na próxima vez que o servidor iniciar, seu banco de dados deve estar acessível novamente e tudo deve funcionar normalmente. Você conseguiu resolver os problemas de conexão com o banco de dados. Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />