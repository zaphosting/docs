---
id: vserver-vnc
title: "VPS: Console VNC (Virtual Network Computing)"
description: "Descubra como acessar e controlar seu servidor remotamente, mesmo durante a inicialização ou problemas de rede, para uma gestão sem interrupções → Saiba mais agora"
sidebar_label: Console VNC
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

VNC (Virtual Network Computing) é um software que exibe o conteúdo da tela de um computador remoto em um computador local e, em troca, envia os movimentos do teclado e mouse do computador local para o computador remoto. Isso permite que você acesse seu servidor remotamente, mesmo que ele não esteja funcionando corretamente.

Em caso de problemas na inicialização ou na rede, você ainda tem a possibilidade de acessar o sistema e tomar as medidas necessárias.

<InlineVoucher />


## Uso do VNC
O cliente web VNC pode ser encontrado no dashboard da VPS. Para isso, clique na opção console serial na seção de ferramentas da administração e depois abra a conexão VNC pelo botão **Iniciar túnel VNC**.

![](https://screensaver01.zap-hosting.com/index.php/s/AgSL8QcynHSfXFA/preview)



Em seguida, o cliente web do console VNC será aberto. Aqui você pode visualizar as informações que o servidor fornece no momento atual. Isso pode ser, por exemplo, o processo de inicialização, a tela de login ou a interface gráfica do sistema operacional.

O exemplo a seguir mostra uma VPS Windows. Esse servidor foi inicializado com sucesso, então o console VNC exibe a tela de login nesse estado. Você pode fazer login aqui também, mesmo que o servidor não tenha conexão ativa com a internet. Clique no botão "Enviar CtrlAltDel" e faça login com seu nome de usuário e senha.



![](https://screensaver01.zap-hosting.com/index.php/s/XTFS35AJBJaS86r/preview)

<InlineVoucher />