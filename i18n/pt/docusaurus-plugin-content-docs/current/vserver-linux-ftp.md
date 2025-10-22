---
id: vserver-linux-ftp
title: "VPS: Serviço FTP não funciona - Solução de problemas"
description: "Entenda como solucionar problemas e restaurar o acesso FTP no seu VPS quando servidores de jogos ou Teamspeak estiverem inacessíveis → Saiba mais agora"
sidebar_label: Serviço FTP não está funcionando
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## O que fazer se o servidor de jogos ou servidor Teamspeak não estiver acessível via FTP?

:::info
Atenção: Os passos a seguir funcionam apenas no seu próprio VPS se a interface web ZAP estiver instalada!
:::

Se o servidor criado não puder ser acessado via FTP, na maioria dos casos o serviço FTP (ProFTPD) não está ativo. Em casos raros, isso pode ser causado por uma configuração incorreta ou uma porta ocupada, ou seja, a porta FTP 21 está sendo usada/ocupada por outro programa.

## Verifique o problema do FTP mais de perto:

### Verificar Disponibilidade
Você pode fazer isso facilmente usando o navegador FTP na interface web. Clique em "Navegador FTP" no menu em Ferramentas do respectivo servidor

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Depois, pressione o botão "Conexão Direta" uma vez.

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Agora você provavelmente verá a seguinte tela:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Como já está claro que a conexão via WebFTP ou ferramenta FTP não é possível, você precisa analisar o serviço FTP no VPS com mais detalhes.

### Verificar Status do ProFTPD

Para isso, conecte-se ao seu servidor via SSH / Console e digite o comando "service proftpd status". O status será exibido assim:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Aqui você pode ver que o status indica "dead", ou seja, o serviço está offline e, portanto, inacessível.

### Reiniciar Serviço FTP
O serviço FTP pode ser reiniciado com o seguinte comando:

```
service proftpd start
```

Se não houver resposta após executar o comando, geralmente o serviço já está online/disponível novamente.

Você pode verificar isso novamente com o comando "service proftpd status". Deve aparecer assim:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Como o status agora está "active" e não mais "dead", a conexão FTP pode ser testada novamente usando a ferramenta FTP e o WebFTP.

### Teste a conexão novamente
Agora você deve conseguir estabelecer a conexão e visualizar seus dados.

### Problema Resolvido
✅ O serviço FTP (ProFTPD) está iniciado/ativo novamente e nada impede a troca de dados!

<InlineVoucher />