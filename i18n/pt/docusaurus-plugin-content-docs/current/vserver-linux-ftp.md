---
id: vserver-linux-ftp
title: "VPS: Serviço FTP indisponível (Interface GS/TS3)"
description: "Entenda como solucionar problemas e restaurar o acesso FTP no seu VPS quando servidores de jogos ou Teamspeak estiverem inacessíveis → Saiba mais agora"
sidebar_label: Serviço FTP indisponível
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Serviços de servidor de jogos e Teamspeak 3 criados via interface GS/TS3 são serviços totalmente gerenciados. O acesso FTP é fornecido através da interface e da infraestrutura subjacente. Se o acesso FTP não for possível, a causa geralmente está relacionada ao estado do serviço, configuração interna ou problemas do lado da infraestrutura, e não às configurações locais do cliente FTP.



:::warning Serviço FTP fornecido pela interface GS/TS3
Este guia se aplica apenas ao serviço FTP que é instalado e gerenciado automaticamente quando o recurso da interface GS/TS3 é usado. Se a interface GS/TS3 não estiver instalada, nenhum servidor FTP é configurado por padrão no sistema. Nesse caso, o acesso FTP não estará disponível a menos que um serviço FTP seja instalado manualmente.
:::

<InlineVoucher />



## Verifique o status do ProFTPD via SSH

Conecte-se ao servidor via SSH ou console e verifique o status atual do serviço FTP usando o seguinte comando:

```
service proftpd status
```

A saída mostra se o serviço ProFTPD está atualmente em execução. Se o serviço for reportado como ativo ou em execução, o serviço FTP em si está disponível e deve aceitar conexões. Nesse caso, a causa do problema geralmente não é o daemon FTP, mas pode estar relacionada aos dados de acesso, regras de firewall ou configuração do cliente.

Se o status for mostrado como inativo, morto ou parado, o serviço FTP não está em execução. Enquanto o serviço estiver parado, nenhuma conexão FTP pode ser estabelecida.

## Reinicie o serviço FTP

Se o serviço ProFTPD não estiver em execução, ele pode ser iniciado manualmente. Para isso, execute o seguinte comando:

```
service proftpd restart
```

Após iniciar ou reiniciar o serviço, o status deve sempre ser verificado novamente para confirmar que o ProFTPD está funcionando corretamente. Se o serviço for mostrado como ativo após o reinício, o acesso FTP deve estar disponível novamente.



## Causas comuns de problemas com FTP

Problemas de acesso FTP são frequentemente causados pelo serviço FTP não estar em execução ou ter sido parado durante uma reinicialização do sistema ou atualização. Erros de configuração também podem impedir que o ProFTPD inicie com sucesso. Em alguns casos, outro serviço pode já estar usando a porta 21, o que impede o serviço FTP de se vincular à porta necessária. Problemas temporários no sistema ou no nível do serviço também podem fazer com que o serviço FTP pare inesperadamente.

Se o ProFTPD não puder ser iniciado ou parar imediatamente após ser iniciado, uma investigação mais aprofundada é necessária. Nesses casos, é recomendado revisar os logs do sistema ou entrar em contato com o suporte.



## Conclusão



O acesso FTP para serviços de servidor de jogos GS/TS3 é gerenciado exclusivamente pela interface GS/TS3. Se as verificações padrão não resolverem o problema, é necessário escalar para o suporte. Fornecer informações completas e precisas ajuda a garantir uma resolução mais rápida. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />