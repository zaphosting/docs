---
id: vserver-linux-sftp
title: "VPS: Estabeleça conexão via SFTP"
description: "Descubra como transferir arquivos com segurança usando SFTP e proteja seus dados com conexões criptografadas → Saiba mais agora"
sidebar_label: Conexão SFTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introdução

SFTP é um protocolo seguro para transferir arquivos entre computadores via Internet ou rede. Significa **“SSH File Transfer Protocol”** ou **“Secure File Transfer Protocol”** e é baseado no **protocolo SSH (Secure Shell)**.

Ao contrário do FTP (File Transfer Protocol), onde os dados são transferidos sem criptografia, o SFTP garante que todos os dados sejam criptografados e, portanto, protegidos contra acessos não autorizados.

<InlineVoucher />



## Estabelecendo conexão

Para a conexão via **SFTP**, são usados os dados de login do usuário root. Este exemplo mostra como configurar a conexão com o aplicativo WinSCP. Crie uma **Nova sessão** no WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

Escolha `SFTP` como **protocolo de transferência** na janela de configuração da nova sessão. Em seguida, insira o **endereço IP** do seu servidor e a porta **22**. Para o nome de usuário e senha, use os dados de login do seu usuário `root`.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Uso de chaves SSH
Se você estiver usando uma chave SSH em vez da opção simples de senha, clique em **Avançado** e navegue até **SSH -> Autenticação**. Lá você pode salvar sua chave SSH.
:::

Na primeira vez que você se conectar via SFTP, essa mensagem aparecerá porque seu computador ainda não conhece o servidor. Confirme com **“Sim”** se você confia no servidor. Isso salvará a chave de segurança dele e você não será mais perguntado nas próximas conexões. Esse é um passo normal ao conectar-se a um servidor novo pela primeira vez.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Conclusão

Se você seguiu todos os passos, estabeleceu com sucesso uma conexão SFTP com seu servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />