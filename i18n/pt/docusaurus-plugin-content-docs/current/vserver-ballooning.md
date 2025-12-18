---
id: vserver-ballooning
title: "VPS: Ballooning - Gerenciamento Dinâmico de Memória em Ambientes de Servidores Virtuais"
description: "Descubra como o ballooning otimiza a alocação de memória entre máquinas virtuais para melhorar a estabilidade e performance do servidor → Saiba mais agora"
sidebar_label: Ballooning
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

**Ballooning** é uma tecnologia usada para o **gerenciamento dinâmico de memória** em ambientes virtualizados. Ela permite que o hypervisor aloque de forma flexível a RAM física entre as diferentes máquinas virtuais (VMs) com base nas necessidades atuais de memória de cada uma.

Esse processo é controlado por um **driver balloon** dentro da máquina virtual, que se comunica diretamente com o hypervisor. Quando o sistema detecta que algumas máquinas virtuais estão usando menos memória do que a alocada, o hypervisor pode temporariamente recuperar essa memória não utilizada inflando o balloon nessas VMs. Essa memória liberada fica então disponível para outras máquinas que estejam precisando de mais.



## Vantagens do ballooning

Ballooning não é só sobre otimizar o uso de memória para um único servidor. Ele tem um papel crucial em manter um ambiente equilibrado e estável para todos os clientes no sistema host. Ao gerenciar a memória dinamicamente entre todas as máquinas virtuais, o host consegue reagir de forma ainda mais eficiente às cargas de trabalho que mudam. Isso ajuda a evitar gargalos e garante uma operação suave mesmo nos horários de pico.

Como cliente, você se beneficia diretamente dessa otimização em todo o sistema. O ballooning ajuda a manter uma estabilidade consistente mesmo quando vários serviços estão ativos ao mesmo tempo. Ele garante que a memória esteja sempre disponível onde realmente é necessária, melhorando a responsividade geral do seu servidor. Memória não usada em uma instância não fica parada, mas é disponibilizada para outros processos caso seja preciso.

Essa abordagem resulta numa infraestrutura mais confiável, onde todos os clientes aproveitam uma performance mais fluida. Ballooning é um padrão recomendado e comprovado para a grande maioria das cargas de trabalho em servidores. A desativação só é indicada se você rodar aplicações altamente especializadas e críticas de memória. Isso inclui workloads que exigem alocação física exclusiva de memória sem qualquer forma de gerenciamento dinâmico, como certos bancos de dados em tempo real ou aplicações específicas de baixa latência.



## Configurar ballooning

Se sua aplicação precisa de memória fixa e garantida, sem ajustes dinâmicos, você pode desativar o ballooning diretamente no seu **Dashboard do Servidor** em **Configurações → Desativar ballooning**. Depois, reinicie o servidor pela interface web para aplicar a mudança.

![img](https://screensaver01.zap-hosting.com/index.php/s/zK92KzbQ7LQe79d/download)

Para o uso típico de servidores, no entanto, recomendamos fortemente manter o ballooning ativado. Isso garante que seu servidor continue estável e responsivo, além de contribuir para uma distribuição eficiente e justa dos recursos em todo o sistema host.

:::warning Opção de ballooning sumiu?

Se você não vê a opção para desativar o ballooning nas configurações do seu servidor, isso significa que seu servidor ainda está rodando em **virtualização LXC**. Recentemente, migramos para oferecer todos os novos produtos de servidor virtual baseados em **virtualização KVM**, que traz recursos mais avançados.

Se quiser mudar seu servidor para **KVM**, basta fazer uma **reinstalação** pelo painel de gerenciamento do servidor. Durante o processo, seu servidor será recriado automaticamente usando **virtualização KVM**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Mcq4SyD92XKSZ3E/download)

:::

## Conclusão

Agora você sabe como o **Ballooning** ajuda a gerenciar a memória de forma eficiente e mantém seu ambiente de servidor estável. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />