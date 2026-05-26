---
id: subnautica-2-common-issues
title: "Subnautica 2: Problemas Comuns"
description: "Descubra problemas comuns no servidor de jogos Subnautica 2, problemas de conexão e correções de desempenho para manter seu jogo online e estável -> Saiba mais agora"
sidebar_label: "Subnautica 2: Problemas Comuns"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Problemas no servidor de Subnautica 2 podem variar desde falhas na inicialização e travamentos até lag, problemas de conexão e desempenho ruim no jogo. Neste guia, você vai aprender a identificar problemas comuns no seu servidor de jogos Subnautica 2 e aplicar soluções práticas para deixar seu jogo online e funcionando sem travamentos novamente.

:::info Mudanças em Acesso Antecipado
Se o software do servidor Subnautica 2 ainda estiver em desenvolvimento ativo, alguns comportamentos, arquivos de configuração ou recursos disponíveis podem variar entre versões. Se notar diferenças no seu servidor, sempre compare com a versão atualmente instalada na sua interface web da ZAP-Hosting.
:::

<InlineVoucher />

## Problemas e soluções

Problemas no servidor nem sempre são causados por uma única falha. Muitas vezes, o problema está relacionado a arquivos desatualizados, configurações incorretas, recursos insuficientes ou condições temporárias de rede. As seções abaixo ajudam você a diagnosticar os problemas mais comuns passo a passo.

### Problemas gerais

Problemas gerais geralmente afetam a disponibilidade básica do servidor, visibilidade ou comportamento na inicialização. Estes são os primeiros pontos que você deve verificar antes de investigar causas mais avançadas.

<details>
  <summary>Servidor não aparece no jogo</summary>

Se seu servidor Subnautica 2 não aparece, pode ser que ele não tenha iniciado corretamente ou não tenha completado o processo de inicialização. Isso pode acontecer por valores de configuração inválidos, arquivos de instalação incompletos ou erros na inicialização.

Comece verificando o seguinte:

- Confirme que o servidor está marcado como ativo na sua interface web da ZAP-Hosting
- Revise o console do servidor para erros na inicialização
- Verifique os arquivos de log para arquivos faltando ou falhas na inicialização
- Confirme que você está usando os filtros corretos no navegador de servidores dentro do jogo
- Aguarde alguns minutos após a inicialização, pois alguns servidores precisam de tempo extra antes de aparecerem publicamente

Se o servidor ainda não aparecer, reinicie-o uma vez e monitore o console desde o início do processo de inicialização.

</details>

<details>
  <summary>Servidor não inicia</summary>

Se o servidor não iniciar de jeito nenhum, a causa geralmente está relacionada a arquivos corrompidos, atualização incompleta ou configuração inválida.

Você deve verificar estes pontos:

| Verificação | Por que é importante |
| --- | --- |
| Saída do console do servidor | Mostra o erro exato na inicialização, se houver |
| Alterações recentes na configuração | Um único valor inválido pode impedir a inicialização |
| Uploads ou modificações recentes de arquivos | Arquivos alterados manualmente podem estar incompletos ou incompatíveis |
| Versão atual do jogo | Arquivos do servidor incompatíveis podem causar falha imediata na inicialização |

Se você alterou arquivos de configuração recentemente, reverta as últimas mudanças e tente novamente. Se o problema começou após uma atualização ou modificação manual, restaurar um backup pode economizar tempo.

:::tip Use Backups Antes de Grandes Mudanças
Antes de editar arquivos importantes ou atualizar seu servidor, crie um backup para poder reverter rapidamente caso surja um novo problema.
:::

</details>

<details>
  <summary>Senha do servidor ou configurações de acesso não funcionam como esperado</summary>

Se os jogadores não conseguem entrar mesmo com o servidor online, revise cuidadosamente suas configurações relacionadas ao acesso. Uma senha errada, informações antigas salvas no cliente ou divergência entre configurações públicas e privadas podem bloquear o acesso.

Você deve verificar:

- A senha digitada pelos jogadores corresponde exatamente à senha atual do servidor
- O servidor foi reiniciado após alterar as configurações de acesso
- Nenhum dado antigo salvo no cliente está sendo reutilizado
- Configurações privadas ou de whitelist estão configuradas conforme o esperado, se disponíveis para sua versão atual do servidor

Se não tiver certeza se o problema é causado pela configuração, simplifique temporariamente o setup e teste com restrições mínimas.

</details>

### Problemas de travamento

Travamentos inesperados interrompem o jogo e podem causar perda de dados se ocorrerem repetidamente. As causas mais comuns são arquivos do servidor desatualizados, mods incompatíveis ou recursos sobrecarregados.

<details>
  <summary>Mantenha seu servidor atualizado</summary>

Rodar a versão mais recente disponível do servidor Subnautica 2 é importante para estabilidade, compatibilidade e segurança. Versões antigas podem conter bugs já corrigidos ou podem não funcionar corretamente com o cliente atual do jogo.

Um servidor desatualizado pode causar:

- falhas na inicialização
- travamentos aleatórios
- erros de incompatibilidade de versão
- comportamento instável no jogo

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Se seu servidor começou a travar após uma atualização do jogo, primeiro verifique se há uma versão mais nova do servidor disponível na sua interface web. Após atualizar, reinicie o servidor e teste novamente.

</details>

<details>
  <summary>Mods ou conteúdo adicional com falhas ou incompatíveis</summary>

Se o Subnautica 2 suporta mods ou outro conteúdo adicional no servidor na sua versão atual, eles podem ser uma fonte comum de travamentos. Conteúdo incompatível ou desatualizado pode carregar parcialmente, mas causar erros depois durante o jogo.

Sinais típicos incluem:

- o servidor trava após a inicialização
- o servidor trava quando um jogador entra
- o servidor congela durante o carregamento do mundo
- erros aparecem após adicionar novo conteúdo

Para isolar a causa, siga este processo:

1. Pare o servidor
2. Remova ou desative o conteúdo adicionado recentemente
3. Inicie o servidor com a configuração mínima possível
4. Teste a estabilidade
5. Reative o conteúdo um item por vez

Esse método ajuda a identificar exatamente qual arquivo ou pacote está causando o problema.

:::caution Compatibilidade de Versão
Use apenas mods, frameworks ou outras extensões confirmadas como compatíveis com sua versão atual do servidor Subnautica 2. Mesmo um componente desatualizado pode causar travamentos repetidos.
:::

</details>

<details>
  <summary>Mundo ou dados salvos corrompidos</summary>

Se o servidor trava ao carregar o mundo ou logo após jogadores se conectarem, os dados salvos podem estar corrompidos. Isso pode acontecer após desligamentos forçados, gravações interrompidas ou travamentos repetidos.

Indicadores possíveis incluem:

- o servidor trava na mesma etapa de carregamento toda vez
- um mundo novo inicia corretamente, mas o existente não
- o console reporta erros ao carregar o save ou o mundo

Se suspeitar de corrupção no save, teste com um backup ou um mundo novo, se disponível. Se um mundo novo iniciar sem problemas, o problema provavelmente está nos dados salvos existentes.

:::danger Risco de Perda de Dados
Não exclua seus arquivos de mundo existentes imediatamente. Primeiro crie uma cópia de backup para tentar recuperação depois, se necessário.
:::

</details>

### Problemas de desempenho

Problemas de desempenho geralmente aparecem como lag, ações atrasadas, carregamento lento do mundo ou jogabilidade instável. Essas questões são frequentemente causadas por escolhas de configuração, hardware insuficiente ou conteúdo adicional pesado.

<details>
  <summary>Configuração ruim do servidor</summary>

Valores de configuração incorretos podem aumentar a carga de CPU, memória ou armazenamento e reduzir o desempenho geral do servidor. Se seu servidor Subnautica 2 parecer lento ou instável, revise suas configurações com atenção.

Verifique especialmente se:

- os limites relacionados a jogadores são realistas para seu pacote
- as configurações do mundo não são mais exigentes do que o necessário
- configurações experimentais ou não padrão foram alteradas recentemente
- o servidor foi reiniciado após aplicar mudanças

Você geralmente pode gerenciar sua configuração na seção **Settings** ou pelos arquivos disponíveis em **Configs** na sua interface web da ZAP-Hosting.

</details>

<details>
  <summary>Pacote do servidor não atende aos requisitos do projeto</summary>

Um servidor pequeno demais para seu projeto pode causar travamentos, longos tempos de carregamento e instabilidade. Isso fica mais evidente ao aumentar o número de jogadores, usar conteúdo adicional ou rodar um mundo grande e ativo.

A ZAP-Hosting oferece configurações recomendadas durante o processo de compra para ajudar a escolher recursos adequados para seu jogo.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Use a tabela abaixo como referência geral para diagnóstico:

| Sintoma | Possível causa | Ação recomendada |
| --- | --- | --- |
| Picos frequentes de lag | Recursos de CPU muito limitados | Reduza a carga ou faça upgrade do pacote |
| Tempos de carregamento lentos | Gargalo de armazenamento ou memória | Revise o uso e considere mais recursos |
| Travamentos sob carga de jogadores | Capacidade geral insuficiente | Reduza a carga ou aumente o servidor |
| Bom desempenho vazio, ruim com jogadores | Pacote pequeno para uso ativo | Faça upgrade conforme atividade esperada |

:::note Recomendações Mínimas
Tamanhos recomendados de pacotes são apenas um ponto de partida. Se seu servidor de jogos Subnautica 2 usa um mundo maior, mais jogadores ou conteúdo adicional, pode precisar de mais recursos desde o começo.
:::

</details>

<details>
  <summary>Uso alto de recursos por mods ou conteúdo adicional</summary>

Mesmo que o conteúdo adicional não trave o servidor, ele pode causar sérios problemas de desempenho. Conteúdo mal otimizado pode aumentar o uso de CPU, consumir muita memória ou disparar processamento em segundo plano repetidamente.

Um bom método de diagnóstico é comparar o desempenho com e sem o conteúdo adicionado. Se o servidor funcionar normalmente com uma configuração mínima, reintroduza o conteúdo gradualmente até o problema voltar.

Esse método é especialmente útil quando:

- o lag começou após instalar novo conteúdo
- o servidor fica instável com o tempo
- a queda de desempenho ocorre só em certas áreas ou situações
- o uso aumenta sem mudanças óbvias na configuração

</details>

<details>
  <summary>Mundo grande ou save antigo causa lentidão</summary>

À medida que o mundo do servidor cresce e mais atividade de jogadores se acumula, o desempenho pode cair. Isso é comum em servidores que rodam há muito tempo com grande quantidade de dados salvos.

Se notar que o desempenho era bom no começo, mas piorou depois, considere o seguinte:

- teste se um backup mais recente tem desempenho melhor
- verifique se muitos jogadores estão ativos ao mesmo tempo
- remova conteúdo adicional desnecessário
- confira se o problema aparece em apenas um mundo específico

Se um mundo de teste novo rodar muito melhor, a lentidão pode estar relacionada ao tamanho do mundo ou complexidade do save.

</details>

### Problemas de rede

Problemas relacionados à rede afetam como os jogadores se conectam e interagem com seu servidor. Esses problemas podem aparecer como ping alto, rubberbanding, desconexões ou inacessibilidade total.

<details>
  <summary>Picos de ping, lag e atraso na rede</summary>

Picos de ping e atraso na rede são frequentemente causados por uma combinação de carga no servidor e condições de roteamento. Mesmo que o jogo esteja online, hardware sobrecarregado ou distância geográfica longa podem criar uma experiência ruim.

Causas comuns incluem:

- localização do servidor distante da base de jogadores
- servidor com alta carga de CPU ou memória
- muitos jogadores conectados ao mesmo tempo
- tarefas em segundo plano ou outros processos consumindo recursos
- problemas temporários de roteamento ou perda de pacotes entre jogadores e servidor

Para melhorar a qualidade da rede, verifique o seguinte:

| Verificação | Resultado |
| --- | --- |
| Escolha uma localização próxima aos seus jogadores | Menor latência média |
| Reduza carga desnecessária no servidor | Menos picos de lag durante o jogo |
| Mantenha o servidor atualizado | Melhor estabilidade e compatibilidade |
| Teste em horários diferentes | Ajuda a identificar problemas temporários de roteamento |

Se o problema afetar apenas um jogador, a causa pode estar na conexão dele. Se todos os jogadores forem afetados, a causa provavelmente é do lado do servidor ou da rota.

</details>

<details>
  <summary>Jogadores desconectam aleatoriamente</summary>

Desconexões aleatórias podem ser causadas por roteamento instável, recursos do servidor sobrecarregados ou instabilidade temporária do software. Se jogadores forem removidos do servidor sem motivo claro no jogo, compare o horário das desconexões com mensagens no console e picos de desempenho.

Você deve verificar:

- se as desconexões ocorrem em horários de pico
- se o servidor reinicia ou congela brevemente
- se todos os jogadores desconectam ao mesmo tempo ou apenas alguns
- se o problema começou após uma atualização ou mudança de configuração recente

Se todos os jogadores desconectam simultaneamente, o problema geralmente está no servidor ou na rede. Se apenas um jogador desconecta, a causa costuma ser local dele.

</details>

<details>
  <summary>Ataques DDoS e outras ameaças de rede</summary>

Servidores de jogos podem ser alvo ocasional de tráfego malicioso, incluindo ataques de Negação de Serviço Distribuída (DDoS). Esses ataques podem causar lag, falhas de conexão ou downtime temporário.

A ZAP-Hosting oferece proteção DDoS para serviços hospedados, o que ajuda a reduzir o impacto de ataques comuns e avançados. Porém, se suspeitar que seu servidor Subnautica 2 está sendo atacado, entre em contato com o suporte e forneça o máximo de detalhes possível, como:

- quando o problema começou
- se todos os jogadores são afetados
- se o servidor fica completamente inacessível
- se o problema se repete em horários específicos

:::info Proteção Integrada
A mitigação de DDoS é feita na infraestrutura. Se suspeitar de tráfego malicioso, geralmente não é necessário alterar configurações do servidor de jogos primeiro. Em vez disso, reúna os sintomas e contate o suporte.
:::

</details>

### Problemas relacionados à jogabilidade no servidor

Alguns problemas não são travamentos diretos ou falhas de rede, mas ainda assim afetam se o jogo funciona corretamente para os jogadores.

<details>
  <summary>Incompatibilidade de versão entre cliente e servidor</summary>

Se jogadores não conseguem entrar após uma atualização do jogo, o servidor e o cliente podem estar rodando versões diferentes. Isso é comum logo após patches.

Para resolver:

1. Confirme que o servidor foi atualizado
2. Reinicie o servidor após a atualização
3. Certifique-se que os jogadores atualizaram o cliente do jogo
4. Teste a conexão novamente

Se apenas alguns jogadores conseguem entrar, compare a versão do jogo deles com a do servidor primeiro.

</details>

<details>
  <summary>Alterações não aplicam após editar configurações</summary>

Se você alterou valores de configuração mas nada mudou no jogo, o servidor pode estar usando dados em cache ou não atualizados, ou o arquivo editado pode não ser o ativo.

Revise o seguinte:

- o arquivo correto foi editado
- os valores foram salvos com sucesso
- o servidor foi reiniciado completamente depois
- a configuração alterada é suportada pela sua versão instalada

Se o comportamento exato da configuração não estiver claro para sua versão atual do Subnautica 2, evite chutar e teste as mudanças uma a uma para identificar claramente o que funciona.

</details>

## Medidas preventivas

Prevenir problemas geralmente é mais fácil do que consertar depois que eles afetam seus jogadores. Alguns passos regulares de manutenção podem melhorar muito a estabilidade.

### Checklist de manutenção recomendada

Use o checklist abaixo para reduzir a chance de problemas futuros:

| Tarefa | Por que fazer |
| --- | --- |
| Criar backups regulares | Protege seu mundo e configuração contra perda de dados |
| Atualizar o servidor com cuidado | Reduz bugs e problemas de incompatibilidade de versão |
| Testar mudanças uma a uma | Facilita o diagnóstico se algo quebrar |
| Monitorar desempenho após mudanças | Ajuda a identificar aumento de uso de CPU ou memória cedo |
| Manter só o conteúdo necessário instalado | Reduz riscos de compatibilidade e desempenho |

### Use backups regularmente

Backups regulares podem economizar muito tempo e evitar perda permanente de dados. Se uma mudança de configuração, atualização ou problema no mundo causar falhas, você pode restaurar um estado conhecido funcionando em vez de refazer tudo manualmente.

Você pode usar a solução de [backup disponível](gameserver-backups.md) para criar backups manuais ou agendados para seu servidor de jogos.

:::tip Backup Antes de Mudanças Arriscadas
Crie um backup antes de atualizar o servidor, editar arquivos importantes ou adicionar novos mods e conteúdo. Isso garante um ponto seguro para reverter se surgirem problemas.
:::

<InlineVoucher />

## Conclusão

Parabéns, você solucionou com sucesso problemas comuns no seu servidor de jogos Subnautica 2. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂