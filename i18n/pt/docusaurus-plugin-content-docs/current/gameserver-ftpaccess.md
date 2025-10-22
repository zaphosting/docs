---
id: gameserver-ftpaccess
title: "Servidor de jogos: Acesso via FTP para gerenciar arquivos do servidor"
description: "Descubra como acessar e gerenciar seus arquivos do servidor com segurança usando FTP para transferências de arquivos sem complicação e controle total do servidor → Saiba mais agora"
sidebar_label: Acesso FTP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O FTP (File Transfer Protocol) é um protocolo de rede criado para transferir arquivos através de uma rede TCP/IP. O protocolo foi desenvolvido para facilitar a troca de arquivos entre sistemas. Com o protocolo FTP, você pode acessar e gerenciar os arquivos do seu servidor, seja para enviar, baixar ou editar os arquivos diretamente.

<InlineVoucher />

## Preparação

Para gerenciar seus arquivos usando o protocolo FTP, você precisa de um cliente FTP adequado. Existe uma grande variedade de clientes FTP disponíveis. Porém, dois dos clientes FTP mais conhecidos e consolidados são o **FileZilla** e o **WinSCP**.

| Cliente FTP | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Site Oficial](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Site Oficial](https://winscp.net/eng/downloads.php)         |



## Obter dados FTP

Para acessar seu servidor de jogos via FTP, você vai precisar das credenciais de login correspondentes. Você pode encontrar esses dados na seção **FTP Browser** da administração do seu servidor de jogos.

Basta inserir o **endereço IP (servidor FTP)**, **nome de usuário** e **senha** para estabelecer a conexão. Essas credenciais estão listadas na página **FTP Browser**. A porta é sempre **21** e geralmente é configurada automaticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Conectando

Você pode estabelecer a conexão usando o recurso Quickconnect ou indo em **Arquivo -> Gerenciador de Sites**. Insira as **credenciais FTP** do seu servidor e clique em **Conectar**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Certifique-se de parar o servidor e atualizar as permissões FTP antes de acessar os arquivos do servidor. Caso contrário, podem ocorrer mensagens de erro como "Permissão Negada" ou "Acesso Negado".
:::

### Gerenciando Arquivos

Como mencionado, você pode usar o cliente FTP para enviar, baixar e editar arquivos no seu servidor. O cliente FTP é dividido em duas partes. A metade esquerda representa seu cliente (computador) e a metade direita representa seu servidor. Você pode navegar pelos diretórios tanto localmente quanto no servidor.

A gestão é feita clicando com o botão direito no arquivo ou pasta desejada. Dependendo do que você quer fazer, pode enviar, baixar, editar, renomear ou mover arquivos ou pastas.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Se você tiver vários servidores de jogos, primeiro navegue até o diretório correto do servidor de jogos.
:::



### Problemas comuns e soluções

#### Erro "530 Login incorreto"
Se esse erro aparecer durante a conexão, significa que as credenciais fornecidas estão incorretas. Verifique todos os campos para garantir que estão completos e corretos.

#### Erro "Transfer connection interrupted"
Se esse erro ocorrer durante a conexão ou transferência, tente mudar o modo de transferência de *Passivo* para *Ativo*. Os passos a seguir mostram como alterar essa configuração no FileZilla.




## WinSCP

### Conectando
Você pode estabelecer a conexão pelo Quickconnect ou no topo via **Nova Sessão**. Insira as credenciais FTP do seu servidor e clique em **Conectar**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Certifique-se de parar o servidor e atualizar as permissões FTP antes de acessar os arquivos do servidor. Caso contrário, podem ocorrer mensagens de erro como "Permissão Negada" ou "Acesso Negado".
:::


### Gerenciando Arquivos

Como mencionado, você pode usar o cliente FTP para enviar, baixar e editar arquivos no seu servidor. O cliente FTP é dividido em duas partes. A metade esquerda representa seu cliente (computador) e a metade direita representa seu servidor. Você pode navegar pelos diretórios tanto localmente quanto no servidor.

A gestão é feita clicando com o botão direito no arquivo ou pasta desejada. Dependendo do que você quer fazer, pode enviar, baixar, editar, renomear ou mover arquivos ou pastas.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Problemas comuns e soluções

#### Erro "530 Login incorreto"
Se esse erro aparecer durante a conexão, significa que as credenciais fornecidas estão incorretas. Verifique todos os campos para garantir que estão completos e corretos.

<InlineVoucher />