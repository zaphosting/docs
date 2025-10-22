---
id: arma3-serverconfig
title: "Arma 3: Editar arquivo de configuração do servidor"
description: "Descubra como personalizar as configurações do seu servidor de jogos Arma 3 para uma jogabilidade e performance ideais → Saiba mais agora"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Parâmetros e configuração do Server.cfg

O Server.cfg do Arma 3 é obrigatório para o funcionamento de qualquer servidor de jogos Arma 3 e oferece várias possibilidades para configurar seu servidor de jogos Arma 3 de forma personalizada.

O Server.cfg pode ser editado diretamente via FTP em um servidor de jogos ou VPS pré-instalado.  
Com um servidor de jogos, o item de menu Configs também está disponível no lado esquerdo da interface do servidor de jogos, de onde o Server.cfg pode ser editado com poucos cliques.

<InlineVoucher />

## Editar o Server.cfg via editor ZAP

Para editar o server.cfg do seu servidor de jogos Arma 3 no editor ZAP, primeiro clique no seu servidor na interface e depois selecione "Configs" no menu à esquerda em "Configurações".

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Lá você verá uma lista dos arquivos de configuração disponíveis para Arma 3, agora vamos editar apenas o Server.cfg.  
Com um clique no botão azul "Abrir arquivo" você acessa o editor ZAP.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Lá você pode configurar seu servidor de jogos Arma 3 individualmente, incluindo o nome do servidor e o número de slots. Ajuste as configurações como quiser e clique em "Salvar" depois.

![](https://puu.sh/Fk7I1/407a039e38.png)

Ao definir o nome do servidor, certifique-se de colocar o nome entre aspas, caso contrário o servidor não conseguirá ler. Também é importante terminar cada linha com ponto e vírgula (;), caso contrário o servidor não conseguirá ler as configurações seguintes. Uma exceção é a opção "motd[]", onde cada linha deve terminar com vírgula, exceto a última, que não deve ter vírgula.

## Correto:

Aqui, aspas, ponto e vírgula e vírgula estão configurados corretamente.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Errado:

Aqui faltam aspas, ponto e vírgula e vírgula, o servidor não iniciaria assim.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Editar o Server.cfg via FTP

Ao invés do editor ZAP, o Server.cfg também pode ser editado diretamente via FTP. Neste exemplo usamos o **FileZilla** para estabelecer uma conexão FTP com o servidor de jogos e navegar pelos diretórios do seu servidor de jogos.

Aqui você aprende como conectar ao seu servidor de jogos via FTP: [Acesso via FTP](gameserver-ftpaccess.md).

## Estabelecendo a conexão e navegando até o caminho do server.cfg

:::info
Certifique-se de que seu servidor de jogos esteja parado enquanto você trabalha via FTP.
:::

Depois de conectar ao seu servidor de jogos via FTP conforme explicado acima, navegue pelo FileZilla na janela inferior direita até o diretório do seu server.cfg, que fica em: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
O nome da primeira pasta (g198376) é o ID do seu servidor, assim você consegue diferenciar as pastas caso tenha mais de um servidor de jogos.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

No diretório você encontrará o Server.cfg do seu servidor de jogos Arma 3, além de outros arquivos de configuração existentes.  
Agora você pode **clicar com o botão direito** no server.cfg e escolher **Visualizar/Editar**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Agora um editor padrão será aberto, onde você pode editar seu Server.cfg conforme descrito acima.  
Depois de editar, salve pressionando **CTRL+S**. Depois feche o editor, seu servidor estará pronto para ser iniciado novamente.

<InlineVoucher />