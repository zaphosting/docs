---
id: dedicated-ipmi
title: "Servidor Dedicado: Gerenciamento do Servidor via IPMI"
description: "Descubra como gerenciar totalmente seu Servidor Dedicado Enterprise com IPMI para controle e monitoramento sem complicações → Saiba mais agora"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Nossos Servidores Dedicados AMD Ryzen são gerenciados através do **Supermicro IPMI**, uma solução poderosa e comprovada de gerenciamento out of band, feita para ambientes profissionais de servidores. Diferente das nossas configurações baseadas em Intel, que usam HPE iLO, a plataforma AMD Ryzen utiliza hardware Supermicro e, por isso, oferece o IPMI como interface nativa de gerenciamento.

O Supermicro IPMI oferece controle remoto total sobre seu servidor, independente do estado do sistema operacional. Você pode ligar ou desligar o sistema, reiniciá-lo, monitorar a saúde do hardware, acessar sensores e usar o console remoto para trabalhar diretamente no servidor como se estivesse fisicamente no local. Isso garante controle máximo, respostas rápidas e administração confiável mesmo em situações críticas.


## Acesso ao IPMI
Abra o dashboard do seu Servidor Dedicado ZAP com o navegador que preferir. Lá você já vai encontrar as informações mais importantes sobre seu IPMI.
Para ativar o IPMI, basta clicar em **Ativar IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Lembre que pode levar alguns segundos até o IPMI estar totalmente disponível. 
Quando o sistema iniciar a interface de gerenciamento e ela estiver acessível, você verá as informações de login.
Para abrir o IPMI, clique no endereço IP exibido e use as credenciais para fazer login.



## Visão Geral

Quer saber como a interface de gerenciamento IPMI é organizada e para que serve cada área? Essa visão geral apresenta as diferentes páginas da interface e destaca como o monitoramento, insights de hardware e gerenciamento remoto estão organizados.

Ela oferece um ponto de partida guiado para explorar o ambiente IPMI e entender como as diferentes telas trabalham juntas para dar controle total e visibilidade sobre o servidor.

### Dashboard

Oferece uma visão consolidada do estado atual do servidor e das principais funções de gerenciamento. Informações do sistema como modelo do hardware, versão do BIOS, firmware do BMC e status operacional são exibidas para referência rápida.

A seção de energia mostra o estado atual de energia e leituras de consumo, permitindo controle direto para ligar, desligar e reiniciar, além de oferecer insights sobre o uso de energia.

O acesso direto ao console remoto está disponível nesta página, permitindo controle total remoto de teclado, vídeo e mouse para tarefas como instalação do sistema operacional, solução de problemas e manutenção, independente do estado do servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### Sistema

#### Informações dos Componentes

Exibe uma visão detalhada dos componentes de hardware instalados e seu status atual. Informações são fornecidas para CPU, módulos de memória, fontes de alimentação, entrega de energia, AOC de rede, sensores e componentes de refrigeração.

Cada seção apresenta detalhes específicos do hardware, como informações do modelo, configuração e estado operacional. Indicadores de status permitem identificar rapidamente componentes saudáveis, além de alertas ou falhas.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Registro de Eventos de Saúde

Lista eventos relacionados ao sistema registrados pelo controlador de gerenciamento, fornecendo um histórico cronológico das atividades de hardware e saúde. Entradas incluem eventos de energia, processos de boot, violações de limites de sensores, avisos de temperatura, irregularidades de voltagem e erros de hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Monitoramento de Armazenamento

Oferece uma visão geral dos dispositivos de armazenamento conectados e seu status operacional atual. Informações incluem drives detectados, tipo de interface, capacidade e indicadores de saúde reportados pelo controlador e sensores disponíveis.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configuração

#### Serviços de Conta

Exibe uma lista das contas de usuário existentes com seus papéis e níveis de permissão atribuídos. A página é para fins informativos, permitindo ver quais contas têm acesso à interface de gerenciamento. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notificações

Mostra a configuração atual para notificações do sistema e tratamento de alertas. Essa seção exibe quais tipos de eventos podem disparar notificações, como falhas de hardware, limites de temperatura, problemas de energia ou avisos de sensores.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Rede

Exibe a configuração de rede da interface de gerenciamento. Isso inclui o endereço IP atribuído, máscara de sub-rede, gateway, endereço MAC e o status atual da conexão da porta de rede do IPMI.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Mídia Virtual

Permite o uso de imagens de mídia remota através da interface de gerenciamento. Mostra o status da mídia virtual montada, como imagens ISO ou dispositivos de armazenamento remoto conectados ao servidor.

A mídia virtual pode ser usada para inicializar o sistema, instalar um sistema operacional ou realizar tarefas de recuperação e manutenção sem acesso físico ao hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### Configurações do BMC

Exibe detalhes de configuração do Controlador de Gerenciamento da Placa-Mãe (BMC). Essa seção fornece informações sobre a versão do firmware, dados de identificação do sistema e comportamento geral do controlador.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Controle Remoto

Oferece acesso a funções usadas para interação remota direta com o servidor. Essa seção inclui opções de controle de energia como ligar, desligar, resetar e desligamento gracioso.

Também serve como ponto de entrada para recursos de gerenciamento remoto que permitem interação com o sistema independentemente do estado do sistema operacional.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Manutenção

#### Gerenciamento de Firmware

Oferece visão sobre o nível do firmware do ambiente de gerenciamento, incluindo o firmware ativo do BMC e componentes relacionados. Versões de firmware e seu estado atual podem ser revisados para confirmar a consistência da pilha de gerenciamento. Atualizações ou modificações não estão disponíveis para clientes.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Registro de Eventos de Manutenção

Registra atividades relacionadas à manutenção e ações em nível de sistema realizadas pela interface de gerenciamento. Entradas registradas incluem mudanças de configuração, operações relacionadas a firmware, resets e ações administrativas.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Problemas Comuns, Dicas & Truques

- **O servidor não inicia ou fica travado durante o POST:**
   Se o servidor não completar o processo de boot ou parecer travado durante o POST, abra o console remoto para identificar exatamente em que etapa o processo para. Mensagens de inicialização do hardware ou erros podem aparecer ali.
   Faça um ciclo de energia usando as opções de controle de energia, forçando o desligamento por alguns segundos e depois ligando o servidor novamente. Se o sistema ainda não iniciar, contate o suporte.

- **Console Remoto não abre ou fica preto:**
   Verifique se a sessão do console remoto não está sendo usada por outra conexão. Feche sessões existentes e tente novamente.
   Em alguns casos, atualizar o navegador ou reabrir o console resolve problemas de carregamento. Se o problema persistir, confirme que o servidor está ligado e acessível.

- **ISO da Mídia Virtual não é detectada:**
   Verifique se a fonte do ISO está acessível e se o arquivo pode ser aberto diretamente, por exemplo, no navegador.
   Confirme que a mídia virtual está montada corretamente e reinicie o servidor após anexar o ISO. Também confira a ordem de boot para garantir que a mídia virtual CD/DVD tenha prioridade.

- **O servidor demora muito para iniciar:**
   Tempos longos de boot são normais para hardware de nível enterprise. Inicialização do hardware, checagens do controlador e treinamento da memória podem levar vários minutos, especialmente após um ciclo completo de energia.

- **Interface IPMI fica temporariamente inacessível:**
   Após mudanças de configuração ou inatividade prolongada, a interface de gerenciamento pode ficar temporariamente indisponível. Espere alguns minutos e tente novamente.
   Se o acesso não voltar, contate o suporte para verificar o status da interface de gerenciamento.



## Conclusão

Isso vai facilitar muito sua administração depois que você ler tudo com calma. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂