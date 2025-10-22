---
id: webspace-plesk-ftp
title: "Hospedagem de sites: Configurando acesso FTP para hospedagem de sites"
description: "Descubra como gerenciar múltiplos acessos FTP para projetos web colaborativos e controlar permissões de pastas de forma eficaz → Saiba mais agora"
sidebar_label: Acesso FTP
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

FTP significa *protocolo de transferência de arquivos* e é necessário para enviar arquivos do PC para a hospedagem de sites.  
Todo cliente recebe automaticamente acesso FTP para a hospedagem de sites contratada.

Aqui explicamos como configurar acessos FTP adicionais. Isso é útil se você estiver trabalhando com várias pessoas em um projeto e cada uma deve ter seu próprio acesso FTP.

Essas pessoas poderão usar o acesso FTP criado apenas para as pastas que foram especificadas pelo dono da hospedagem de sites.

<InlineVoucher />

## Configurar acesso FTP

No Dashboard do Plesk, abra a função "**Acesso FTP**"

:::info
Nessa página principal você também verá o endereço IP, que será necessário para o teste mais tarde.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Agora você verá o acesso FTP único, que é criado automaticamente pelo sistema após a finalização do pedido da hospedagem de sites.  
Para criar outra conta, clique no botão "**Adicionar conta FTP**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Depois, insira os dados desejados. Assim que os campos estiverem preenchidos, confirme com "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
Em "**Diretório base**" você pode selecionar a pasta à qual o acesso FTP terá permissão. Se o acesso FTP deve visualizar e editar tudo, não é necessário alterar nada aqui.  
:::

## Testar acesso FTP

Para testar o acesso FTP, é preciso um programa que permita isso. No nosso exemplo, usamos o *Filezilla Client*.  
Em "**Servidor**" insira o IP do servidor que aparece na página principal.  
Em "**nome de usuário**" e "**senha**" coloque os dados que você criou para o acesso FTP.  
A porta padrão é "**21**".

## Conta de usuário já existe

Essa mensagem aparece quando o nome da conta FTP já está sendo usado por outra pessoa no sistema.  
A hospedagem de sites contratada foi criada em um sistema com vários clientes; se um desses clientes já usa o nome, nenhum outro cliente pode usá-lo.  
Nesse caso, será preciso escolher outro nome para a conta.

<InlineVoucher />