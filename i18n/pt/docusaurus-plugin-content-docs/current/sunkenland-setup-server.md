---
id: sunkenland-setup-server
title: "Sunkenland: Configuração do Servidor Sunkenland"
description: "Descubra como configurar seu servidor de jogos Sunkenland para uma jogabilidade suave e funcionamento correto → Saiba mais agora"
sidebar_label: Configuração do Servidor
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores Sunkenland precisam de uma configuração rápida na primeira vez para que o servidor funcione corretamente. Neste guia, vamos explorar os passos necessários para configurar seu servidor de jogos Sunkenland.

<InlineVoucher />

## Preparação
Antes de continuar, você precisa primeiro abrir o Sunkenland e criar um arquivo de salvamento do mundo. Certifique-se de salvar o mundo antes de prosseguir.

Para acessar seus arquivos do servidor mais tarde no guia, você também vai precisar de um Cliente FTP como o [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), ambos open-source e gratuitos para baixar.

## Acessando seus dados locais
O primeiro passo é acessar os dados do seu savegame do Sunkenland.

Aperte `CTRL+R` no seu teclado e digite o seguinte no prompt Executar do Windows:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

Neste local, você verá uma pasta `Worlds` que contém todos os seus arquivos de savegame locais. Selecione o que deseja hospedar no servidor ou, se for novo, selecione o novo que você gerou antes de começar este guia.

:::tip
Não vê nada aqui? Certifique-se de abrir o Sunkenland e criar um save do mundo, isso deve criar uma nova pasta.
:::

## Upload do Savegame
O próximo passo é conectar ao seu servidor de jogos via FTP e fazer upload do savegame que você selecionou no passo anterior.

Comece conectando ao seu servidor através de um Cliente FTP usando as credenciais que estão em **Ferramentas->FTP-Browser** na interface web do seu servidor de jogos. Use nosso [guia de Acesso via FTP](gameserver-ftpaccess.md) para ajuda extra na conexão.

Depois de conectado, vá até a pasta Sunkenland, abra a pasta "AppData" e depois a pasta "Worlds". Selecione o savegame do passo anterior e faça o upload para essa pasta.

A estrutura da pasta deve ficar assim, onde `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` é o seu savegame.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
Nesta etapa, copie o GUID listado no final do nome do mundo do savegame. Você vai precisar dele no próximo passo para fazer seu servidor funcionar.

O GUID tem este formato:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Nome completo do mundo
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # O GUID que você precisa
```
:::

## Ativando o Servidor
Por fim, vá até a seção **Configurações** na interface web do seu servidor de jogos.

Nesta seção, procure a opção **World GUID**. No campo, cole o GUID que você copiou no passo anterior.

Não esqueça de clicar no botão verde **Salvar** no final da página. Agora tente iniciar seu servidor, ele deve iniciar corretamente.

Você configurou seu servidor de jogos Sunkenland com sucesso.

<InlineVoucher />