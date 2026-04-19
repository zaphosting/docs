---
id: windrose-dashboard
title: "Windrose: Dashboard"
description: "Descubra o dashboard Windrose da ZAP-Hosting e aprenda a gerenciar seu servidor de jogos, monitorar desempenho e usar recursos essenciais de controle de forma eficiente -> Saiba mais agora"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **dashboard Windrose** é a área central para gerenciar seu servidor de jogos na interface web da ZAP-Hosting. Neste guia, você terá uma visão estruturada das seções disponíveis no dashboard e aprenderá a usar as ferramentas mais importantes de administração, monitoramento e hospedagem de forma eficiente.

<InlineVoucher />

## Administração do Produto

Na área de **Administração do Produto**, você encontra as páginas mais importantes para controlar e monitorar seu servidor **Windrose**. Essas páginas ajudam a gerenciar o estado atual do servidor, revisar eventos técnicos e acessar rapidamente informações essenciais do serviço.

### Dashboard

O **Dashboard** é a página principal de visão geral do seu servidor **Windrose**. Aqui, você normalmente encontra os detalhes mais importantes do serviço de relance, como o status atual do servidor, localização, endereço de conexão e uso de recursos.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Dependendo da configuração atual do servidor e da integração do jogo, o dashboard pode mostrar informações adicionais, como o mapa ativo, nome do servidor, memória usada ou uso dos slots de jogadores. Também é o local onde você pode iniciar, parar ou reiniciar seu serviço diretamente.

O dashboard é especialmente útil porque combina controle e monitoramento do servidor em um só lugar. Isso permite verificar rapidamente se seu serviço está online e reagir imediatamente caso sejam necessárias mudanças.

### Estatísticas

Em **Estatísticas**, você pode revisar dados históricos de uso do seu servidor. Isso ajuda a entender melhor como seu serviço de hospedagem **Windrose** está performando ao longo do tempo.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Os gráficos disponíveis geralmente incluem valores como uso de CPU, uso de memória e utilização dos slots. Você pode alternar entre diferentes períodos para analisar picos de curto prazo ou tendências de longo prazo.

| Métrica | Propósito |
| --- | --- |
| Uso de CPU | Ajuda a identificar carga de processamento e possíveis gargalos de desempenho |
| Uso de memória | Mostra quanta RAM seu servidor está utilizando |
| Utilização de slots | Indica quantos slots de jogadores disponíveis estão sendo usados |

:::tip Análise de Desempenho
Se você notar lag, travamentos ou respostas lentas, a página de estatísticas é um dos melhores lugares para começar a diagnosticar. Ela pode ajudar a determinar se o problema está relacionado ao uso de recursos ou ocorreu em um momento específico.
:::

### Gerenciador de DDoS

O **Gerenciador de DDoS** permite revisar informações relacionadas a ataques DDoS detectados e mitigados contra seu serviço. Isso pode ser útil para entender padrões incomuns de tráfego ou investigar interrupções causadas por tráfego malicioso.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Dependendo das opções contratadas e da proteção disponível na localização selecionada, você também pode visualizar informações de ataques ativos e detalhes de tráfego em tempo real.

:::info Disponibilidade do Gerenciador de DDoS
O Gerenciador de DDoS está disponível apenas se seu serviço incluir um endereço IP dedicado ou a opção adicional **Visão Geral do Gerenciador de DDoS**. Se isso não estiver incluído no seu pacote atual, será necessário fazer um upgrade do serviço.
:::

### Arquivos de Log

Se seu servidor **Windrose** apresentar erros ou comportamento inesperado, a seção **Arquivos de Log** é um dos locais mais importantes para verificar. Os arquivos de log contêm saídas técnicas do servidor e podem incluir avisos, mensagens de inicialização e detalhes de erros.

Esses arquivos são especialmente úteis para identificar causas de travamentos, falhas na inicialização ou problemas de configuração.

:::caution Limitações na Análise de Logs
Se a saída dos logs estiver confusa ou não ajudar a identificar o problema, você deve entrar em contato com o suporte através da [página oficial de suporte](https://zap-hosting.com/en/customer/support/). Inclua uma descrição clara do problema e quaisquer mensagens relevantes dos logs para agilizar o diagnóstico.
:::

### Registro de Eventos

O **Registro de Eventos** oferece uma visão geral das ações e eventos relacionados ao seu serviço. Isso pode incluir inícios, paradas, travamentos, instalações, atualizações e atividades de backup do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Essa seção é especialmente útil para verificar quando uma alteração ocorreu ou se uma tarefa automatizada foi executada com sucesso.

### Console ao Vivo

O **Console ao Vivo** mostra a saída do servidor em tempo real enquanto seu servidor **Windrose** está rodando. Ele permite monitorar o que está acontecendo no servidor e pode ajudar a detectar problemas imediatamente.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Se suportado pelo software do servidor, você também pode enviar comandos diretamente pelo console ao vivo. Isso é útil para ações administrativas que precisam ser feitas sem reiniciar o serviço.

| Função | Descrição |
| --- | --- |
| Saída em tempo real | Exibe eventos e mensagens atuais do servidor |
| Visibilidade de erros | Ajuda a identificar problemas conforme acontecem |
| Entrada de comandos | Permite enviar comandos suportados diretamente |

### Interrupções do Serviço

Se seu servidor ficou temporariamente indisponível e não há causa óbvia no registro de eventos ou arquivos de log, o problema pode estar relacionado ao sistema host subjacente, e não ao seu serviço individual.

Na seção **Interrupções do Serviço**, você pode revisar o histórico de interrupções relacionadas ao ambiente host do seu servidor de jogos. Para informações mais amplas sobre o status da plataforma, você também pode consultar a [página oficial de status](https://status.zap-hosting.com/).

## Configurações

A área de **Configurações** contém as principais páginas de configuração do seu servidor **Windrose**. Aqui, você pode ajustar o comportamento do serviço, trocar jogos instalados onde suportado, gerenciar atualizações e configurar recursos de automação.

### Configurações

A página de **Configurações** oferece uma visão simplificada das opções comuns do servidor. Isso é especialmente útil se você é novo em aluguel de servidores de jogos e quer fazer alterações sem editar arquivos de configuração diretamente.

Se disponível para **Windrose**, essas opções podem incluir configurações relacionadas ao gameplay ou outros parâmetros comuns do serviço. As opções exatas podem variar conforme a integração do jogo atual.

### Configs

A seção **Configs** permite editar arquivos de configuração diretamente pela interface web. Isso oferece um controle mais preciso do que a página simplificada de configurações e é geralmente mais indicado para usuários avançados.

:::caution Valores Sobrescritos
Alguns valores podem ser gerenciados pela página simplificada de **Configurações**. Se você notar que certas alterações manuais no editor de configs estão sendo sobrescritas, verifique se a mesma opção ainda está controlada lá.
:::

### Jogos

Em **Jogos**, você pode trocar para outro jogo ou variante disponível, caso seu serviço suporte. Jogos com o mesmo preço de slots geralmente podem ser selecionados diretamente, enquanto outros podem exigir ajuste de pacote primeiro.

Se quiser saber mais sobre como mudar o jogo instalado no seu serviço, consulte o guia [Troca de Jogo](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versões

A página de **Versões** permite gerenciar a versão do servidor instalada no seu serviço **Windrose**, se o gerenciamento de versões for suportado. Normalmente, você pode atualizar para a versão mais recente disponível e ativar atualizações automáticas.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Atualizações automáticas ajudam a manter seu ambiente de hospedagem atualizado, mas você deve sempre verificar a compatibilidade após mudanças de versão importantes.

### Tarefas Agendadas

Com **Tarefas Agendadas**, você pode automatizar ações recorrentes para seu servidor. Isso é útil para reduzir o trabalho manual de administração e manter seu serviço rodando de forma consistente.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Ações automatizadas comuns podem incluir:

| Tipo de Tarefa | Exemplo de Uso |
| --- | --- |
| Iniciar serviço | Iniciar o servidor automaticamente em um horário específico |
| Parar serviço | Desligar o servidor durante janelas de manutenção |
| Reiniciar serviço | Realizar reinícios rotineiros para estabilidade |
| Criação de backup | Criar backups regulares sem ação manual |
| Comandos personalizados | Executar comandos suportados automaticamente |

### Planejador de Reinício

O **Planejador de Reinício** é feito especificamente para agendar reinícios automáticos do servidor. Isso pode ser útil se você quiser reiniciar seu servidor **Windrose** regularmente, por exemplo, em horários de baixa atividade.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Configurações de DNS

Com as **Configurações de DNS**, você pode atribuir um endereço mais amigável ao seu serviço. Isso torna seu servidor mais fácil de lembrar e compartilhar com outros jogadores.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Você pode usar um subdomínio fornecido pela ZAP ou seu próprio domínio, dependendo da configuração e das opções contratadas.

## Ferramentas

A seção **Ferramentas** contém recursos adicionais de gerenciamento do serviço que suportam acesso a arquivos, gerenciamento de banco de dados e manipulação de backups.

### Navegador FTP

No **Navegador FTP**, você encontra os dados de conexão necessários para acessar os arquivos do seu servidor. O acesso FTP é útil para enviar, baixar ou editar arquivos diretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Para facilitar o gerenciamento de arquivos, é recomendado usar um cliente FTP externo como [FileZilla](https://filezilla-project.org/) ou [WinSCP](https://winscp.net/). Se precisar de ajuda para conectar, confira o guia [Acesso via FTP](gameserver-ftpaccess.md).

### Bancos de Dados

Em **Bancos de Dados**, você pode criar e gerenciar os bancos de dados incluídos no seu produto de servidor de jogos, se necessário para sua configuração. Isso é útil para serviços, mods ou ferramentas que precisam de armazenamento estruturado de dados.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Normalmente, você pode visualizar as credenciais de acesso, criar novos bancos e importar backups existentes nesta seção.

### Backups

A seção **Backups** permite criar e gerenciar backups do seu servidor e, onde suportado, dos dados do banco de dados associado.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Backups regulares são fortemente recomendados porque permitem restaurar seu serviço após erros de configuração, corrupção de arquivos ou problemas inesperados.

:::tip Boa Prática de Backup
Crie um backup manual antes de fazer mudanças importantes, como editar arquivos de configuração, trocar versões ou mudar o jogo instalado. Isso garante um ponto seguro para restauração caso algo dê errado.
:::

## Links Adicionais

A seção **Links Adicionais** oferece recursos extras relacionados ao seu serviço e ao uso geral da plataforma ZAP-Hosting.

### Perguntas Frequentes

A área de **Perguntas Frequentes** contém respostas para tópicos comuns relacionados ao seu serviço. Isso pode ajudar a resolver problemas típicos mais rápido, sem precisar contatar o suporte.

### Documentação ZAP-Hosting

A **Documentação ZAP-Hosting** dá acesso a uma base de conhecimento ampla sobre administração de servidores, configuração de hospedagem, solução de problemas e temas relacionados. Se você busca guias mais avançados além desta visão geral do dashboard **Windrose**, este é o melhor lugar para continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Notícias

A seção de **Notícias** contém anúncios relevantes para seu serviço. Isso pode incluir avisos técnicos, informações de manutenção, mudanças de funcionalidades e outras atualizações importantes.

Consultar essa seção regularmente ajuda a se manter informado sobre mudanças que podem afetar seu ambiente de hospedagem **Windrose**.

<InlineVoucher />

## Conclusão

Agora você tem uma visão completa das áreas mais importantes do dashboard **Windrose** no painel da ZAP-Hosting, desde monitoramento e logs até configurações, ferramentas e recursos de automação. Esse conhecimento ajuda a navegar seu serviço de hospedagem com mais eficiência e gerenciar seu servidor com maior confiança.

Parabéns, você aprendeu com sucesso como usar o dashboard Windrose. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂