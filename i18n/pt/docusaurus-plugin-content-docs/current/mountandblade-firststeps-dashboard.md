---
id: mountandblade-firststeps-dashboard
title: "Mount & Blade: Visão geral do dashboard"
description: "Descubra como gerenciar seu servidor de jogos Mount & Blade de forma eficiente e otimizar seus recursos para o melhor desempenho → Saiba mais agora"
sidebar_label: Dashboard
services:
  - gameserver-mountandblade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você está interessado em um **servidor de jogos Mount & Blade** ou já possui um, mas ainda não tem uma visão completa da administração e de onde encontrar todas as opções necessárias? Principalmente no começo, isso pode ser um desafio. Mas relaxa, vamos te dar uma introdução detalhada sobre a administração do seu serviço aqui embaixo, para que você tenha a melhor visão possível.

Depois de passar por este guia, você vai conseguir gerenciar seu servidor de forma eficiente e encontrar todas as opções e funcionalidades necessárias de forma rápida e fácil. Aqui, você terá uma visão estruturada que vai te ajudar passo a passo a se familiarizar com a administração do servidor e expandir seu conhecimento de forma direcionada. Assim, você garante que seu **servidor de jogos Mount & Blade** esteja otimizado para suas necessidades e que você aproveite ao máximo as opções disponíveis.

<InlineVoucher />

## Administração do Produto

Na seção **Administração do Produto**, você encontra todas as páginas necessárias para gerenciar seu servidor. As opções para administrar seu servidor estão listadas em detalhes abaixo.

### Dashboard

O **Dashboard** do seu servidor é o coração da administração. Todas as informações básicas e essenciais sobre seu serviço são apresentadas de forma clara aqui. Isso inclui, por exemplo, informações sobre a localização, status, IP: Porta, memória usada, jogo em andamento, nome do servidor, mapa e o número de slots disponíveis. Além disso, também é exibido o uso da CPU, memória e RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/4AHGadrCTPaeTCF/preview)

No dashboard, você também tem a opção de iniciar, parar ou reiniciar seu serviço, para ter controle total sobre seu funcionamento. Além disso, pode acessar o console ao vivo para obter informações em tempo real sobre o estado do servidor e agir diretamente se necessário.

### Gerenciador de DDoS

Veja ataques DDoS passados para avaliar melhor possíveis ameaças e padrões. Ative notificações para ataques DDoS em andamento no seu servidor e reaja rápido quando um incidente ocorrer.

Dependendo da localização do servidor e da proteção DDoS disponível, você também pode monitorar ataques ativos em tempo real. Isso inclui insights detalhados do tráfego, mostrando tanto o tráfego legítimo quanto a quantidade bloqueada pelos sistemas de mitigação. Esse nível de transparência ajuda você a entender como a proteção está funcionando e permite identificar riscos potenciais cedo.

:::info Acesso ao Gerenciador de DDoS faltando?
O uso do Gerenciador de DDoS requer um endereço IP dedicado ou a opção adicional "Visão Geral do Gerenciador de DDoS". Se seu pacote atual não incluir esses componentes, você pode adicioná-los a qualquer momento fazendo um upgrade no seu serviço.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
O uso do Gerenciador de DDoS só é possível se um IP próprio ou a opção "Visão Geral do Gerenciador de DDoS" tiver sido contratada como adicional. Se esses componentes estiverem faltando no seu pacote atual, você pode adicioná-los a qualquer momento fazendo um upgrade.
:::

### Arquivos de Log

Está rolando um problema técnico e você não sabe o que está causando? Uma primeira estratégia é conferir os **Arquivos de Log**. Esses arquivos contêm muitas informações sobre o servidor, como eventos atuais, dicas ou mensagens de erro.

Mensagens de erro, em especial, ajudam a identificar e entender melhor a causa do problema. Muitas vezes, dificuldades podem ser descobertas e resolvidas dando uma olhada direcionada nos arquivos de log.

:::warning
As informações encontradas não ajudam ou você não entende? Relaxa! Nesse caso, nosso suporte está disponível diariamente. É só abrir um **[Ticket](https://zap-hosting.com/en/customer/support/)** e explicar seu problema pra gente. Vamos analisar o quanto antes e ajudar você a resolver! :)
:::

### Registro de Eventos

O **Registro de Eventos** te dá uma visão completa de todas as atividades relacionadas à administração do servidor. Aqui você pode acompanhar a qualquer momento quando um servidor foi iniciado, parado ou caiu, assim como quando atualizações, backups ou novas instalações foram feitas.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Interrupções do Serviço

Seu servidor ficou offline temporariamente e você não sabe o motivo? Olhar o registro de eventos e os arquivos de log não ajudou? Pode ser que o problema não esteja diretamente no seu servidor, mas no sistema host onde ele está rodando.

Se nosso sistema de monitoramento detectar uma interrupção geral, nossos técnicos são notificados automaticamente e cuidam do problema o mais rápido possível.

Nesta seção, você encontra um histórico das interrupções do sistema host onde seu servidor de jogos está hospedado. Para mais informações e a versão mais atual do status do serviço, confira nossa nova [página de status](https://status.zap-hosting.com/).

## Configurações

Na seção **Configurações**, você encontra todas as páginas necessárias para configurar seu servidor. As opções disponíveis para configuração estão listadas em detalhes abaixo.

### Configurações

Nas configurações, você encontra uma visão geral das opções mais comuns para seu servidor, com uma explicação rápida. O uso da página de configurações é especialmente recomendado para quem está começando na administração de servidores.

Se você já tem mais experiência e quer fazer ajustes mais precisos, recomendamos usar o Editor de Configs. Mais informações sobre isso estão na categoria **Configs**.

### Configs

O editor de arquivos de configuração permite editar os arquivos diretamente pelo site, do jeito clássico, sem a visão simplificada. Essa opção permite personalizar as configurações do seu servidor conforme suas preferências.

Usando o editor, você tem acesso direto a todas as opções disponíveis e pode customizá-las com precisão. Isso é especialmente útil para usuários avançados que querem controle total sobre as configurações do servidor e sabem exatamente o que querem mudar.

:::warning
Percebeu que algumas mudanças suas são parcialmente sobrescritas? Fique ligado que certos valores são puxados da página de configurações. Se quiser alterar direto no config, primeiro desative as opções correspondentes na página de configurações.
:::

### Jogos

Em **Jogos**, você sempre pode mudar a variante do jogo do seu servidor atual ou instalar outro jogo. Jogos com o mesmo preço de slot podem ser selecionados diretamente em **Jogos Disponíveis**. Para outros jogos, é necessário ajustar o preço do slot antes. Mais informações estão no guia [Mudança de Jogo](gameserver-gameswitch.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versões

Em **Versões**, você pode ver e gerenciar a versão atual do seu servidor de jogos. Aqui, pode atualizar para a versão mais recente a qualquer momento ou ativar atualizações automáticas para garantir que seu servidor esteja sempre atualizado.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Além disso, você pode ativar notificações por e-mail para atualizações automáticas, mantendo-se informado e sempre na versão mais recente.

### Tarefas Agendadas

Crie tarefas agendadas que rodam automaticamente em horários definidos para automatizar processos no seu servidor. Você pode definir se a tarefa roda uma vez ou se repete conforme necessário. Tipos de tarefas suportadas incluem iniciar, parar ou reiniciar serviços, reiniciar o servidor se estiver online, criar backups ou executar comandos personalizados.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planejador de Reinício

Quer agendar reinícios do servidor em horários específicos? O Planejador de Reinício permite configurar reinícios automáticos agendados do seu servidor de jogos. Com essa função, você pode definir reinícios em horários fixos ou intervalos regulares.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

## Ferramentas

Na seção **Ferramentas** do seu painel de navegação, você encontra vários subitens que ajudam a gerenciar seu servidor. Entre eles estão **Navegador FTP**, **Bancos de Dados** e **Backups**. A seguir, uma introdução detalhada a essas áreas.

### Navegador FTP

Com o **Navegador FTP**, você obtém todas as informações necessárias para se conectar ao acesso FTP. O acesso FTP permite acesso direto aos arquivos do seu servidor de jogos. Recomendamos usar um programa FTP externo como **Filezilla** ou **WinSCP** para melhor experiência. Se você não está familiarizado com FTP, dê uma olhada no nosso guia [Acesso FTP](gameserver-ftpaccess.md) que pode ajudar.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla é provavelmente o cliente FTP mais simples e conhecido. É só instalar, abrir e inserir seus dados de acesso na barra superior, que você encontra um pouco acima nesta página. Com um clique rápido em "Conectar", você já está logado no servidor e pode gerenciar os arquivos.

**WinSCP:** WinSCP é feito para SCP e SFTP (versões criptografadas do FTP), mas também funciona muito bem com FTP normal. O programa é um pouco mais completo que o FileZilla e é mais indicado para usuários avançados.

### Bancos de Dados

Além dos nossos produtos de servidor de jogos, oferecemos 10 bancos de dados incluídos. Esses bancos são necessários, por exemplo, quando dados precisam ser armazenados em um banco. Em **Bancos de Dados**, você pode criar um banco e ver as credenciais de acesso. Também pode ativar a opção de backup e importar backups existentes.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Em **Backups**, você pode criar backups manuais e automáticos para seu servidor e banco de dados associado. Isso facilita recuperar seus dados em caso de problemas ou perda.

Nas configurações, você define se os backups devem ser criados automaticamente e se isso deve ser diário ou semanal. Também pode decidir se os backups mais antigos devem ser deletados quando o espaço disponível ficar limitado.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Oferecemos 10 GB de espaço para backups nos servidores de armazenamento para nossos produtos de servidor de jogos por padrão. Se precisar de mais espaço, pode fazer upgrade pagando uma taxa. Assim, você garante espaço suficiente para seus backups e acesso a versões antigas quando precisar.

## Links Úteis

Na seção **Links Úteis**, você encontra links relevantes para seu produto.

### Perguntas Frequentes

A seção **Perguntas Frequentes** traz uma visão geral das dúvidas mais comuns dos nossos clientes. Aqui você encontra respostas úteis e informações detalhadas sobre vários temas para ajudar rápido e fácil.

### Documentação ZAP-Hosting

Oferecemos documentação extensa para nossos produtos, que serve como base de conhecimento para as dúvidas e questões mais frequentes. Lá você encontra vários guias e ajudas sobre diferentes assuntos para facilitar o uso e gerenciamento do seu produto.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Notícias

A seção **Notícias** te dá uma visão completa de todos os anúncios e novidades relacionadas ao seu serviço. Aqui você encontra informações importantes sobre:

- Mudanças no serviço, como atualizações ou novas funcionalidades
- Avisos sobre manutenções ou problemas técnicos
- Ofertas especiais e promoções com benefícios ou descontos exclusivos
- Outras informações relevantes para o uso do seu serviço

Acompanhando as **Notícias** regularmente, você fica sempre informado e pode ajustar seu serviço para tirar o máximo do seu servidor.

<InlineVoucher />