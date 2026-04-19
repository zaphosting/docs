---
id: windrose-firststeps-connect
title: "Windrose: Conecte-se ao servidor"
description: "Aprenda como se conectar ao seu servidor Windrose usando o código de convite correto e estabeleça uma conexão confiável com o servidor sem problemas comuns de conexão -> Saiba mais agora"
sidebar_label: Conectar ao servidor
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Não sabe como se conectar ao seu servidor **Hytale** ou o que precisa para começar? Sem problemas, estamos aqui para ajudar! Vamos te guiar por tudo que você precisa. Desde as ferramentas e informações necessárias até o processo real de conexão, junto com pontos importantes para garantir uma experiência de conexão tranquila e sem complicações. Siga nosso guia e você estará conectado em pouco tempo!

## Obtenha os detalhes do servidor
Antes de se conectar, você precisa coletar as informações relevantes do servidor no painel web do seu servidor de jogos ZAP-Hosting. Para Windrose, o detalhe mais importante é o **código de convite**.

Você pode encontrar o código de convite na gestão do servidor de jogos, dentro dos arquivos de configuração do servidor, no arquivo `InviteCode.txt`.

:::info Requisito do Código de Convite
Para Windrose, o código de convite é o valor chave usado para se conectar ao servidor. Se você usar o código errado ou um código desatualizado, a conexão pode falhar.
:::

As seguintes informações são úteis antes de começar:

| Informação | Propósito |
| --- | --- |
| Conteúdo do `InviteCode.txt` | Necessário para se conectar ao servidor Windrose |
| Nome do servidor | Ajuda a identificar o servidor correto |
| Senha opcional do servidor | Pode ser necessária dependendo da sua configuração |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Estabeleça a conexão com o servidor
Depois de obter seu código de convite, você pode se conectar diretamente ao servidor Windrose pelo jogo.

### Encontre o código de convite na gestão do servidor
Abra o painel web do seu servidor de jogos ZAP-Hosting e navegue até a área de configuração do servidor. Localize o arquivo chamado `InviteCode.txt` e abra-o.

Dentro deste arquivo, você encontrará o código de convite atual do seu servidor. Copie esse valor exatamente como está.

:::note Valores de Espaço Reservado
Se você vir um valor como `[your_invite_code]` neste guia, substitua pelo código real do seu próprio arquivo `InviteCode.txt`.
:::

### Entre no servidor no Windrose
Inicie o Windrose e abra o menu de conexão ao servidor ou multiplayer do jogo. Procure a opção que permite entrar em um servidor usando um código de convite.

Digite o código de convite do `InviteCode.txt` no campo solicitado e confirme a conexão. Se seu servidor estiver protegido, pode ser solicitado que você insira uma senha nesta etapa.

| Campo | O que inserir |
| --- | --- |
| Código de convite | `[your_invite_code]` |
| Senha | `[your_server_password]` se configurada |

Após enviar o código de convite, o jogo deve estabelecer a conexão com seu servidor Windrose.

:::tip Copie o Código Exatamente
Para evitar problemas de conexão, copie e cole o código de convite diretamente do `InviteCode.txt` sempre que possível. Mesmo um pequeno erro pode impedir uma conexão bem-sucedida.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Problemas potenciais e soluções
Se a conexão com o servidor não funcionar imediatamente, você pode verificar as causas mais comuns abaixo.

### Código de convite não funciona
Se o código de convite for rejeitado, primeiro verifique se você copiou corretamente todo o conteúdo do `InviteCode.txt`. Certifique-se de que não há espaços extras antes ou depois do código.

Também é possível que o código de convite tenha mudado após uma reinicialização do servidor, atualização ou ajuste de configuração. Nesse caso, reabra o `InviteCode.txt` e use o valor atual.

### Servidor ainda não está pronto
Se o servidor ainda estiver iniciando ou não tiver completado a inicialização, os jogadores podem não conseguir se conectar mesmo com o código de convite correto.

Verifique o console do servidor e os logs na gestão do servidor de jogos para confirmar que o servidor iniciou com sucesso e está totalmente online.

:::caution Aguarde o Início Completo
Não tente se conectar enquanto o servidor ainda estiver carregando ou reiniciando. Isso pode resultar em tentativas de conexão falhadas mesmo que o código de convite esteja correto.
:::

### Problemas de configuração ou arquivos
Se o servidor continuar inacessível, pode haver um problema de configuração ou arquivos corrompidos impedindo o início correto. Nesse caso, revise as alterações recentes feitas no servidor e inspecione os logs em busca de erros.

Se necessário, restaure um backup funcional ou desfaça as alterações recentes na configuração.

### Solução ausente ou sem ajuda
Se você ainda não conseguir se conectar após verificar o código de convite, o status do servidor e a configuração, entre em contato com o suporte ZAP-Hosting através da [página oficial de suporte](https://zap-hosting.com/en/customer/support/).

Ao criar um chamado, inclua o máximo de detalhes possível, como:

- O problema exato que está enfrentando
- Se o servidor inicia com sucesso
- Se o código de convite no `InviteCode.txt` está visível
- Quaisquer mensagens de erro relevantes do console ou dos logs

## Conclusão
Parabéns, você se conectou com sucesso ao seu servidor Windrose usando o código de convite. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂