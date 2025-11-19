---
id: dedicated-dashboard
title: "Servidor Dedicado: Visão Geral do Dashboard"
description: "Descubra como gerenciar e otimizar seu Servidor Dedicado de forma eficiente com uma visão clara dos principais recursos e ferramentas de administração → Saiba mais agora"
sidebar_label: Dashboard
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você está interessado em um **Servidor Dedicado** ou já possui um, mas ainda sente falta de uma visão geral completa da administração e da localização de todas as opções necessárias? Especialmente no começo, isso pode ser um desafio. Mas relaxa, vamos te dar uma introdução detalhada à administração do seu serviço aqui embaixo, para que você tenha a melhor visão possível.

Depois de passar por este guia, você vai conseguir gerenciar seu Servidor Dedicado de forma eficiente e encontrar todas as opções e recursos necessários de forma rápida e fácil. Aqui, você terá uma visão estruturada que vai te ajudar passo a passo a se familiarizar com a administração do Servidor Dedicado e expandir seu conhecimento de forma direcionada. Assim, você garante que seu **Servidor Dedicado** esteja configurado da melhor forma para suas necessidades e que você aproveite ao máximo as opções disponíveis.



## Administração do Produto

Na seção **Administração do Produto**, você encontra todas as páginas necessárias para gerenciar seu Servidor Dedicado. As opções para gerenciar seu Servidor Dedicado estão listadas em detalhes abaixo. 



### Dashboard

O dashboard oferece uma visão central de todas as informações importantes relacionadas ao Servidor Dedicado. Ele mostra o status atual, endereço do servidor, nome do host, sistema operacional instalado, carga do sistema incluindo uso de CPU e RAM, e tráfego de rede. Essa visão ajuda no monitoramento e gerenciamento eficaz do ambiente do servidor virtual.

![img](https://screensaver01.zap-hosting.com/index.php/s/QEnaS6N7MqHejtk/preview)



### Registro de eventos

Fique de olho em todas as tarefas administrativas e eventos do sistema em um só lugar. O registro de eventos coleta todas as atividades relevantes, para que você sempre saiba quem fez alterações, quando aconteceram e o que foi afetado.

![img](https://screensaver01.zap-hosting.com/index.php/s/akKpTx2XzDKy7qc/preview)



### Estatísticas
Números detalhados de tráfego mostram exatamente quanto dado seu servidor está processando, tanto de entrada quanto de saída. Leituras atuais de temperatura e velocidade dos ventiladores ajudam a manter seu hardware sempre dentro de uma faixa segura de operação.

![img](https://screensaver01.zap-hosting.com/index.php/s/B7yLamtJrdALpPb/preview)



### Status do hardware

Acompanhe todos os detalhes essenciais do hardware em um só lugar. Verifique quais versões de firmware estão instaladas, incluindo System ROM, iLO e o Controlador de Armazenamento, e monitore o status da sua CPU, RAM, interfaces de rede e discos conectados em tempo real.

Dados detalhados do hardware ajudam a identificar possíveis problemas cedo e garantem que seu servidor funcione de forma confiável. Você também tem acesso a um registro claro de todas as manutenções realizadas, para sempre saber quais atualizações ou reparos foram feitos e quando.

![img](https://screensaver01.zap-hosting.com/index.php/s/9CsZGarzsdMP5Ea/preview)

## Configurações

Na seção **Configurações**, você encontra todas as páginas necessárias para configurar seu Servidor Dedicado. As opções disponíveis para configurar seu Servidor Dedicado estão listadas em detalhes abaixo.

### Instalação inicial
Antes de usar seu servidor dedicado de forma produtiva, é necessário um setup inicial. Isso inclui ativar a interface de gerenciamento iLO, selecionar e montar uma imagem ISO, e instalar o sistema operacional desejado. O assistente de configuração te guia passo a passo nesse processo, garantindo um começo tranquilo mesmo sem experiência prévia. Instruções detalhadas estão no nosso [Guia de Configuração Inicial](dedicated-setup.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/MnZKXAGGTqs9Xdp/download)

### Configurações

Ajuste as opções de configuração do seu servidor dedicado. Aqui, você tem controle total para alterar configurações como o modo de energia, ajudando a otimizar seu servidor para suas necessidades específicas.

![img](https://screensaver01.zap-hosting.com/index.php/s/WiHSELJNc5icsyQ/preview)



### Gerenciador de DDoS

Veja ataques DDoS passados para avaliar melhor ameaças e padrões. Ative notificações para ataques DDoS em andamento no seu servidor e reaja rápido quando um incidente acontecer.

Dependendo da localização do servidor e da proteção DDoS disponível, você também pode monitorar ataques ativos em tempo real. Isso inclui insights detalhados de tráfego, mostrando tanto o tráfego legítimo quanto a quantidade bloqueada pelos sistemas de mitigação. Esse nível de transparência ajuda a entender como a proteção está funcionando e permite identificar riscos potenciais cedo.

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)



### Gameserver / TS3

Com esse recurso, você pode configurar e gerenciar serviços de servidor de jogos e servidor de voz com poucos cliques. A interface web cuida de todo o processo de instalação para você, sem precisar de conhecimento técnico avançado.

Você pode criar novos servidores de jogos ou servidores de voz sempre que precisar, ajustar configurações como slots ou recursos, e controlar tudo confortavelmente pelo seu dashboard ZAP. Isso torna o gerenciamento de múltiplos servidores rápido, flexível e simples. Tudo em um só lugar.

:::warning Compatibilidade do Sistema Operacional 
Esse recurso é compatível apenas com sistemas Linux selecionados. Para mais informações sobre como configurar e usar a interface GS/TS3, confira nosso [Guia da Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/nd6YF93omGcApC8/preview)



### Editar rDNS

Ajuste a entrada de DNS reverso (registro PTR) para o endereço IP do seu servidor para apontar para o nome do host correto. Um rDNS configurado corretamente ajuda a garantir que o nome do seu Servidor Dedicado seja resolvido corretamente e é especialmente importante para rodar um servidor de e-mail. Sem um rDNS válido, e-mails enviados podem ser marcados como spam ou falhar na entrega.

![img](https://screensaver01.zap-hosting.com/index.php/s/LpdMgD6T39tXiNK/preview)



### Endereços IP

Veja todos os endereços IP atribuídos ao seu servidor de relance. Essa visão mostra detalhes importantes de configuração como endereço IP, máscara de sub-rede e gateway. Você também pode verificar se um IP está acessível ou não, ajudando a confirmar que suas configurações de rede estão corretas no sistema operacional.

![img](https://screensaver01.zap-hosting.com/index.php/s/a64XRkWn2EA4Nef/preview)



## Ferramentas

A seção **Ferramentas** contém todas as ferramentas essenciais para gerenciar o Servidor Dedicado. As opções disponíveis para configurar o servidor são descritas em detalhes abaixo e permitem uma personalização precisa conforme as necessidades específicas.



### Resetar tráfego

Fique de olho no uso mensal do seu tráfego. Essa seção mostra quanto do seu tráfego incluído você já usou. Se atingir o limite antes do fim do mês, você também tem a opção de resetar seu tráfego antecipadamente mediante uma taxa adicional.

![img](https://screensaver01.zap-hosting.com/index.php/s/5Z38eyRdntF6ict/preview)



### Gerenciamento remoto iLO / ISO

Tenha acesso remoto seguro ao hardware do seu servidor a qualquer momento. Aqui você pode ver seus dados de login do iLO, ativar recursos de gerenciamento remoto e usar a interface iLO para realizar tarefas importantes.

![img](https://screensaver01.zap-hosting.com/index.php/s/9SZMtCPDJgNZSZ6/preview)

## Links adicionais
A seção de links adicionais oferece referências extras que são relevantes para o uso e gerenciamento do produto. Isso pode incluir documentação, ferramentas ou recursos externos relacionados ao serviço específico.

### Perguntas Frequentes
A seção **Perguntas Frequentes** oferece uma visão geral das dúvidas mais comuns dos nossos clientes. Aqui você encontra respostas úteis e informações detalhadas sobre vários temas para te ajudar de forma rápida e eficiente.

### Documentação ZAP-Hosting
Oferecemos uma documentação extensa para nossos produtos, que serve como base de conhecimento para as dúvidas e questões mais frequentes. Lá você encontra vários guias e ajuda sobre diferentes tópicos que vão te auxiliar no uso e gerenciamento do seu produto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)