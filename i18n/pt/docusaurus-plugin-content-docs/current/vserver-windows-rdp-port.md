---
id: vserver-windows-rdp-port
title: "VPS: Alterar a porta RDP do Windows"
description: "Descubra como alterar a porta RDP do Windows → Saiba mais agora"
sidebar_label: Alterar porta RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

O Remote Desktop Protocol usa a porta 3389 por padrão. Essa porta é amplamente conhecida e frequentemente alvo de varreduras automáticas. Alterar a porta RDP pode reduzir tentativas indesejadas de conexão e melhorar a segurança básica.

<InlineVoucher />



## Alterar a porta RDP no registro

Faça login no servidor localmente ou via uma conexão de Área de Trabalho Remota já existente. Abra o diálogo Executar com **Win + R**, digite `regedit` e confirme para abrir o Editor do Registro. Navegue até o seguinte caminho no registro:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Localize a entrada do registro chamada **PortNumber**. Altere o formato do valor para **Decimal** e insira o novo número da porta desejada. Recomenda-se uma porta acima de 1024 que não esteja sendo usada por outro serviço. Após aplicar a alteração, feche o Editor do Registro.

## Ajustar regras do Firewall do Windows

A nova porta RDP deve ser liberada no Firewall do Windows. Abra o **Windows Defender Firewall com Segurança Avançada** e vá para a seção de regras de entrada.

Modifique a regra existente do Remote Desktop ou crie uma nova regra de entrada que permita tráfego TCP na porta recém-configurada. Certifique-se de que a regra permita a conexão e esteja aplicada aos perfis de rede necessários.

## Reiniciar o serviço para aplicar as mudanças

A alteração da porta só entra em vigor após reiniciar os Serviços de Área de Trabalho Remota ou reiniciar o sistema. Recomendamos reiniciar o servidor completamente para garantir que a configuração seja aplicada de forma consistente.

## Conectar usando a nova porta

Ao estabelecer uma nova conexão de Área de Trabalho Remota, a porta deve ser especificada explicitamente, adicionando-a ao endereço IP ou nome do host. Exemplo:

```
203.0.113.10:3390
```

## Conclusão

Alterar a porta RDP do Windows reduz a exposição a varreduras automáticas e tentativas não autorizadas de conexão. O processo envolve atualizar o Registro do Windows, liberar a nova porta no firewall e reiniciar o sistema ou serviços.

Após concluir, verifique o acesso imediatamente e documente a porta configurada para evitar problemas futuros de conexão. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />