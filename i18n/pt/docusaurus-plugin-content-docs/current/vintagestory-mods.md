---
id: vintagestory-mods
title: "Vintage Story: Instalar Mods"
description: "Aprenda como instalar mods no seu servidor de jogos Vintage Story para adicionar novas funcionalidades e mecânicas de jogo → Saiba mais agora"
sidebar_label: Instalar Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mods são uma parte central da experiência em Vintage Story e permitem que donos de servidores expandam o jogo com novas mecânicas, itens, recursos de geração de mundo ou melhorias na qualidade de vida. Instalar mods no seu servidor garante que todos os jogadores conectados possam aproveitar as mesmas melhorias no gameplay.

Vintage Story oferece uma grande biblioteca comunitária de mods, que vão desde pequenos ajustes até reformulações completas do jogo. Muitos desses mods podem ser encontrados na base oficial de mods do Vintage Story ou nos fóruns da comunidade.

<InlineVoucher />

## Preparação

Antes de instalar mods no seu servidor de jogos Vintage Story, certifique-se de ter completado os seguintes passos:

- Baixe o mod desejado de uma fonte confiável, como a base de mods do Vintage Story  
- Garanta que a versão do mod seja compatível com a versão do jogo do seu servidor  
- Pare seu servidor antes de enviar novos arquivos  

A maioria dos mods de Vintage Story são distribuídos em arquivos `.zip` que não devem ser extraídos antes da instalação.

## Instalação

Os mods para servidor de jogos Vintage Story devem ser enviados diretamente para o sistema de arquivos do servidor. Isso é feito conectando-se ao servidor via [FTP](gameserver-ftpaccess.md). Primeiro, conecte-se ao seu servidor usando um cliente FTP e faça login com as credenciais FTP do seu servidor.

Uma vez conectado, navegue até o seguinte diretório:

```
/gxxxxxx/VintagestoryData/
```

Dentro deste diretório, você precisa criar duas pastas caso elas ainda não existam:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – contém todos os mods instalados no servidor  
- **ModConfigs** – armazena arquivos de configuração criados pelos mods instalados  

Após criar essas pastas, envie os arquivos dos mods baixados para a pasta **Mods**. Estrutura de exemplo:

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

O Vintage Story carrega automaticamente qualquer arquivo de mod colocado nessa pasta quando o servidor inicia.

## Verificando a instalação

Depois que todos os arquivos dos mods forem enviados, volte ao painel de controle do seu servidor e inicie o servidor novamente. Durante a inicialização, o servidor detectará os mods localizados na pasta `Mods` e os carregará automaticamente. Se o mod precisar de configuração, ele pode gerar um novo arquivo de configuração dentro da pasta `ModConfigs` após o primeiro lançamento.

Após o servidor iniciar com sucesso, conecte-se e verifique se o mod está ativo. Os mods devem aparecer nos logs do servidor durante a inicialização. Se algum mod não carregar, verifique o seguinte:

- A versão do mod corresponde à versão do servidor  
- Todas as dependências necessárias estão instaladas  
- O arquivo `.zip` está dentro da pasta correta `Mods`  

## Conclusão

Parabéns! Você instalou mods com sucesso no seu servidor de jogos Vintage Story. Os mods permitem expandir o gameplay, introduzir novas mecânicas e personalizar a experiência para sua comunidade.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />