---
id: vserver-ballooning
title: "VPS: Ballooning - Gerenciamento Dinâmico de Memória em Ambientes de Servidores Virtuais"
description: "Descubra como o ballooning otimiza a alocação de memória entre máquinas virtuais para melhorar a estabilidade e o desempenho do servidor → Saiba mais agora"
sidebar_label: Ballooning
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

**Ballooning** é uma tecnologia usada para o **gerenciamento dinâmico de memória** em ambientes virtualizados. Ela permite que o hypervisor aloque de forma flexível a RAM física entre as diferentes máquinas virtuais (VMs) com base nas necessidades atuais de memória.

Esse processo é gerenciado por um **driver balloon** dentro da máquina virtual, que se comunica diretamente com o hypervisor. Quando o sistema detecta que algumas máquinas virtuais estão usando menos memória do que a alocada, o hypervisor pode temporariamente recuperar essa memória não utilizada inflando o balloon nessas VMs. Essa memória liberada fica então disponível para outras máquinas que estejam precisando de mais.



## Vantagens do ballooning

Ballooning não é apenas sobre otimizar o uso de memória para um único servidor. Ele desempenha um papel crucial em manter um ambiente equilibrado e estável para todos os clientes no sistema host. Ao gerenciar dinamicamente a memória entre todas as máquinas virtuais, o host pode reagir ainda mais efetivamente às cargas de trabalho variáveis. Isso ajuda a evitar gargalos e garante uma operação suave mesmo nos horários de pico.

Como cliente, você se beneficia diretamente dessa otimização em todo o sistema. O ballooning ajuda a manter uma estabilidade consistente mesmo quando múltiplos serviços estão ativos ao mesmo tempo. Ele garante que a memória esteja sempre disponível onde realmente é necessária, melhorando a responsividade geral do seu servidor. Memória não utilizada em uma instância não fica ociosa, mas é disponibilizada para outros processos caso necessário.

Essa abordagem resulta em uma infraestrutura mais confiável, onde todos os clientes desfrutam de um desempenho mais fluido. Ballooning é uma configuração padrão recomendada e comprovada para a grande maioria das cargas de trabalho de servidores. A desativação só é recomendada se você rodar aplicações altamente especializadas e críticas para memória. Isso inclui cargas que exigem alocação física exclusiva de memória sem qualquer forma de gerenciamento dinâmico, como certos bancos de dados em tempo real ou aplicações específicas de baixa latência.



## Configurar ballooning

Se sua aplicação precisa de memória fixa e garantida, sem ajustes dinâmicos, você pode desativar o ballooning diretamente no seu **Dashboard do Servidor** em **Configurações → Desativar ballooning**. Reinicie o servidor pela interface web depois para aplicar a mudança.

![img](https://screensaver01.zap-hosting.com/index.php/s/zK92KzbQ7LQe79d/download)

Para o uso típico de servidor, no entanto, recomendamos fortemente manter o ballooning ativado. Isso garante que seu servidor permaneça estável e responsivo, além de contribuir para uma distribuição eficiente e justa dos recursos em todo o sistema host.

:::warning Opção de ballooning não aparece?

Se você não vê a opção para desativar o ballooning nas configurações do seu servidor, isso significa que seu servidor ainda está rodando em **virtualização LXC**. Recentemente, mudamos para oferecer todos os novos produtos de servidor virtual baseados em **virtualização KVM**, que oferece recursos mais avançados.

Se quiser mudar seu servidor para **KVM**, basta fazer uma **reinstalação** pelo painel de gerenciamento do servidor. Durante o processo de reinstalação, seu servidor será recriado automaticamente na **virtualização KVM**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Mcq4SyD92XKSZ3E/download)

:::

## Conclusão

Agora você sabe como o **Ballooning** ajuda a gerenciar a memória de forma eficiente e mantém seu ambiente de servidor estável. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />


<InlineVoucher />
