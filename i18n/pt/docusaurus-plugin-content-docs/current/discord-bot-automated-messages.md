---
id: discord-bot-automated-messages
title: "Discord Bot: Mensagens Automáticas no Servidor - Mantenha seus usuários informados sobre novidades, links sociais e muito mais!"
description: "Configure mensagens automáticas no servidor usando tarefas agendadas para exibir anúncios recorrentes"
sidebar_label: Mensagens Automáticas no Servidor
services:
- discord-bot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mensagens automáticas no servidor são uma forma simples e eficaz de comunicar informações importantes diretamente aos usuários. Elas podem ser usadas para mostrar regras do servidor, anunciar eventos, compartilhar dicas úteis ou enviar lembretes em intervalos regulares sem precisar de intervenção manual dos administradores.

Usando **Tarefas Agendadas**, mensagens do servidor podem ser enviadas automaticamente para canais do **Discord Bot** executando comandos pré-definidos em uma programação recorrente.

<InlineVoucher />



## Como funcionam as mensagens automáticas

Mensagens automáticas são criadas agendando uma tarefa que executa um comando do servidor em um horário ou intervalo definido. O comando pode ser usado para enviar uma mensagem no chat, broadcast ou notificação do servidor.

Depois de configurada, a tarefa roda automaticamente em segundo plano e exibe a mensagem para todos os usuários conectados. Isso garante uma comunicação consistente sem a necessidade de a equipe estar online.



## Criando uma mensagem automática

Para criar mensagens automáticas no servidor, abra o dashboard do seu servidor de jogos e vá para a seção **Tarefas Agendadas**. Crie uma nova tarefa agendada e escolha a opção para executar um **comando**. No campo do comando, insira o comando de mensagem suportado pelo seu servidor de jogos.

```
<comando de mensagem> <seu texto da mensagem>
```

Substitua o comando pelo comando do jogo ou de uma extensão que você quer usar para disparar as mensagens e `<seu texto da mensagem>` pelo texto que você quer que os usuários vejam.

Você pode definir com que frequência a mensagem deve ser enviada, como a cada poucos minutos, a cada hora ou em horários específicos do dia. Para instruções detalhadas sobre como criar tarefas agendadas, consulte o guia [Tarefas agendadas](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Personalizando os intervalos das mensagens

Tarefas agendadas permitem controle total sobre quando e com que frequência as mensagens aparecem. Usos comuns incluem:

- Exibir regras do servidor a cada poucos minutos
- Anunciar eventos futuros em horários fixos
- Enviar dicas de gameplay para usuários novos ou que retornam
- Lembrar os usuários sobre links do Discord ou do site

O intervalo pode ser ajustado a qualquer momento sem precisar reiniciar o servidor, permitindo mudanças flexíveis conforme seu servidor cresce.



## Notas importantes

A funcionalidade das mensagens automáticas depende das capacidades do jogo e dos comandos disponíveis. Enquanto mensagens básicas agendadas podem ser implementadas usando comandos padrão do servidor, essa abordagem pode ser limitada em termos de formatação, condições ou personalização avançada.

Se o jogo suporta plugins, mods ou extensões que oferecem mais flexibilidade e opções de customização, vale a pena considerar essas soluções. Nesses casos, sistemas especializados de mensagens podem oferecer recursos mais ricos do que os comandos padrão do jogo e podem ser mais adequados para setups complexos ou altamente personalizados.



## Conclusão

Mensagens automáticas no servidor são uma forma confiável de manter os usuários informados e engajados sem esforço manual. Usando tarefas agendadas para executar comandos de mensagem, administradores garantem comunicação consistente em todo o servidor.

Depois de configuradas, as mensagens automáticas funcionam de forma independente e podem ser facilmente reutilizadas ajustando apenas o comando e o texto da mensagem específicos do jogo.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />