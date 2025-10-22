---
id: gameserver-scheduled-tasks
title: "Servidor de jogos: Tarefas Agendadas (Cron)"
description: "Descubra como automatizar processos no servidor com tarefas agendadas para backups, gerenciamento de serviços e comandos → Saiba mais agora"
sidebar_label: Tarefas agendadas
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introdução

Crie tarefas agendadas que são executadas automaticamente em horários definidos. Isso permite automatizar vários processos no seu servidor. Você pode especificar se a tarefa deve ser executada apenas uma vez ou repetidamente. 



## Tipos de tarefas

As tarefas agendadas permitem executar diferentes tipos de tarefas. Os seguintes tipos de tarefas são suportados atualmente: 

- Iniciar serviço
- Parar serviço
- Reiniciar serviço
- Reiniciar servidor (somente se estiver online)
- Criar backup
- Executar comando

Os tipos pré-definidos permitem gerenciar seu servidor de forma amplamente automatizada. Especialmente o tipo **Executar Comando** permite criar muitas outras tarefas específicas e personalizadas. 

:::warning Limites de uso
Algumas tarefas planejadas possuem limites de uso, o que significa que não podem ser executadas um número infinito de vezes e possuem um tempo de espera/limite.
 :::

## Criar tarefas

Navegue até Tarefas agendadas na administração do seu servidor de jogos em Configurações. Para criar uma nova tarefa agendada, clique no botão verde com o símbolo de mais no lado direito da lista de tarefas agendadas. Uma nova janela pop-up será aberta onde você pode configurar sua tarefa. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Gerenciar tarefas

Na configuração de uma tarefa, você pode definir qual tipo de tarefa deseja criar. Defina um nome (opcional) e selecione um dos tipos de tarefas oferecidos. Este exemplo mostra como criar uma tarefa agendada para reiniciar o serviço regularmente. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Selecione a opção `repetir` para o tipo de repetição. No campo Expressão Cron, você deve agora especificar os intervalos em que a tarefa deve ser executada. Neste caso, o serviço é reiniciado a cada três horas. 

:::tip Gerador de Cron

Não está familiarizado com a estrutura ou sintaxe do Cron? Use simplesmente o [**Crontab Guru**](https://crontab.guru/). É uma aplicação simples que permite criar e copiar expressões cron com poucos cliques. 

:::

Para concluir a criação, selecione de quando até quando a tarefa agendada deve ser executada e então clique em salvar.

## Remover tarefas

Quer remover tarefas existentes? Apague tarefas existentes na lista clicando no botão vermelho da lixeira à direita. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusão

Agora você sabe como criar, gerenciar e remover tarefas agendadas. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />