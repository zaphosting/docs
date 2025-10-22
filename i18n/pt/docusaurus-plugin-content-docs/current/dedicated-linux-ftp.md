---
id: dedicated-linux-ftp
title: "Servidor Dedicado: Serviço FTP não funciona - Solução de problemas"
description: "Entenda como solucionar problemas de acesso FTP no seu VPS para restaurar a conectividade do servidor e gerenciar seu servidor de jogos ou Teamspeak de forma eficaz → Saiba mais"
sidebar_label: Serviço FTP não está funcionando
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que fazer se o servidor de jogos ou servidor Teamspeak não estiver acessível via FTP?

:::info
Atenção: Os passos a seguir funcionam apenas no seu próprio VPS se a interface web da ZAP estiver instalada!
:::

Se o servidor criado não puder ser acessado via FTP, na maioria dos casos o serviço FTP (ProFTPD) não está ativo. Em casos raros, isso pode ser causado por uma configuração incorreta ou uma porta ocupada, ou seja, a porta FTP 21 está sendo usada/ocupada por outro programa.

<InlineVoucher />

## Verifique o problema do FTP mais de perto:

### Verificar Disponibilidade
Você pode fazer isso facilmente usando o navegador FTP na interface web. Clique em "FTP browser" no menu em Ferramentas do respectivo servidor

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Depois, pressione o botão "Direct Connection" uma vez.

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Agora você provavelmente verá a seguinte tela:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Como agora está claro que uma conexão via WebFTP ou ferramenta FTP não é possível, você precisa analisar o serviço FTP no VPS com mais detalhes.

### Verificar Status do ProFTPD

Para isso, conecte-se ao seu servidor via SSH / Console e digite o comando "service proftpd status". O status será exibido conforme abaixo:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

Você pode ver que o status indica "dead", ou seja, o serviço está offline e, portanto, inacessível.

### Reiniciar Serviço FTP
O serviço FTP pode ser reiniciado com o seguinte comando:

```
service proftpd start
```

Se não houver resposta após executar o comando, geralmente o serviço está online/disponível novamente.

Isso pode ser verificado novamente com o comando "service proftpd status". Deve aparecer assim:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Como o status agora está "active" e não mais "dead", a conexão FTP pode ser testada novamente usando a ferramenta FTP e o WebFTP.

### Testar a conexão novamente
Agora você deve conseguir estabelecer a conexão e visualizar seus dados.

### Problema Resolvido
✅ O serviço FTP (ProFTPD) está iniciado/ativo novamente e nada impede a troca de dados!

<InlineVoucher />