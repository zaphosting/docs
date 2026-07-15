---
id: palworld-troubleshooting
title: "Palworld: Solução de Problemas"
description: "Corrija problemas comuns do servidor Palworld, como falhas na atualização Steam, timeouts de conexão e erros Steam no seu servidor de jogos. -> Saiba mais agora"
sidebar_label: "Solução de Problemas"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores dedicados Palworld podem eventualmente enfrentar problemas de atualização, inicialização e conexão, especialmente após uma atualização Steam do Palworld ou quando modificações de terceiros estão instaladas. Neste guia, você vai aprender a identificar problemas comuns, quais arquivos ou configurações verificar na administração do seu servidor de jogos ZAP-Hosting e quais ações tomar para restaurar o funcionamento normal.



## Preparação

Antes de começar a solucionar problemas, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld e pode abrir o console do servidor e a área `Configs`.

:::info Acesso Necessário
Você precisa ter acesso à interface web ZAP-Hosting do seu servidor Palworld para poder parar, iniciar, reinstalar e editar arquivos de configuração, se necessário.
:::

:::note Sobre Arquivos de Configuração
A maioria dos problemas deste guia não é resolvida apenas alterando configurações de gameplay. Porém, se precisar revisar ou ajustar manualmente as configurações do servidor Palworld, o arquivo relevante geralmente está disponível na seção `Configs` da administração do servidor de jogos.
:::

## Encontre o Arquivo de Configuração Relevante

Para servidores dedicados Palworld, as principais configurações do servidor normalmente ficam armazenadas no seguinte arquivo:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Na administração do servidor de jogos ZAP-Hosting, você geralmente pode acessar esse arquivo pela seção `Configs`.

### Para Que Serve Esse Arquivo

`PalWorldSettings.ini` contém a linha principal `OptionSettings` com valores do servidor como:

- nome do servidor
- senha
- senha de administrador
- limites de jogadores
- multiplicadores de gameplay
- configurações de PvP e raid

Uma estrutura típica se parece com isto:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Edite a Sintaxe com Cuidado
Palworld usa uma única estrutura `OptionSettings=(...)` para muitas configurações. Se você remover uma vírgula, aspas ou colchete por engano, seu servidor pode não iniciar corretamente.
:::

### Quando Você Deve Editar

Você deve editar `PalWorldSettings.ini` somente quando:

- precisar corrigir uma senha de servidor ou senha de administrador errada
- quiser remover valores inválidos após uma alteração manual que falhou
- estiver testando se um problema de inicialização é causado por uma entrada de configuração corrompida

Após salvar as alterações nesse arquivo, reinicie o servidor para que as novas configurações sejam aplicadas.

## Solucionar Erros de Atualização

Um dos problemas mais comuns em servidores de jogos Palworld é a falha na atualização via Steam.

### Erro: `app '2394010' state is 0x6 after update job`

Esse erro geralmente indica que os arquivos do jogo não foram atualizados corretamente pelo Steam.

### Como Corrigir o Erro

1. Pare completamente seu servidor Palworld.
2. Abra a administração do servidor de jogos na interface web ZAP-Hosting.
3. Vá para a área onde estão disponíveis ações de reinstalação ou reparo.
4. Inicie uma reinstalação ou verificação da integridade dos arquivos do servidor.
5. Aguarde até o processo terminar completamente.
6. Inicie o servidor novamente.

:::info Por Que Isso Funciona
A verificação de arquivos ou reinstalação força o servidor a baixar novamente arquivos Steam do Palworld que estejam faltando ou corrompidos. Essa é a correção mais confiável para o erro de estado `0x6`.
:::

### Precisa Editar Algum Arquivo de Configuração?

Normalmente, nenhuma alteração de configuração é necessária para esse erro.

| Problema | Arquivo de config necessário | Ação adicional |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Não | Pare o servidor, verifique ou reinstale arquivos, depois inicie o servidor |

## Solucionar Timeouts de Conexão

Se os jogadores veem `Connection timed out`, a causa geralmente é falha na inicialização, configuração de mod quebrada ou problema no método de conexão.

### Verifique se o Servidor Está Realmente Rodando

Primeiro, confirme que o servidor iniciou com sucesso.

Você pode verificar isso:

- vendo o status do servidor na interface web ZAP-Hosting
- abrindo o console e procurando saída normal de inicialização
- checando se o servidor responde a comandos do console, se disponível

Se o servidor mostrar atividade muito baixa e não responder normalmente, pode ter travado durante a inicialização.

### Revise Alterações Recentes na Configuração

Se você editou `PalWorldSettings.ini` pouco antes do problema começar, abra o arquivo novamente em `Configs` e verifique:

- vírgulas faltando
- aspas quebradas
- valores duplicados
- IP ou senhas inválidas

Exemplos de entradas para revisar:

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

Se não tiver certeza se o problema é causado pela configuração, reverta as alterações mais recentes e reinicie o servidor.

### Verifique Problemas com Mods ou UE4SS

Se o Palworld acabou de receber uma atualização e você usa mods ou `UE4SS`, o servidor pode não ser mais compatível.

Nesse caso, você deve:

1. Parar o servidor.
2. Criar um backup, se disponível na gestão do produto.
3. Remover ou atualizar os mods instalados.
4. Iniciar o servidor novamente e testar a conexão.

:::caution Compatibilidade de Mods Após Atualizações
Atualizações Steam do Palworld podem quebrar modificações no servidor. Se o problema começou logo após uma atualização, os mods são uma das primeiras coisas a verificar.
:::

### Use IP Direto em Vez da Lista de Servidores Recentes

Clientes Palworld podem falhar ao conectar corretamente pela lista de `Recent Servers` dentro do jogo.

Em vez disso, conecte-se diretamente usando o IP e a porta do seu servidor.

Use o formato:

```text
[your_server_ip]:8211
```

Substitua `[your_server_ip]` pelo endereço IP real do seu servidor de jogos.

### Problemas Relacionados a Guildas no Mundo

Um timeout também pode acontecer em algumas situações do estado do mundo, por exemplo, se um membro da guilda sair enquanto outros membros estão offline.

Possíveis soluções incluem:

- fazer o jogador afetado voltar para a guilda
- reiniciar o mundo
- restaurar de um backup se o mundo continuar inutilizável

:::danger Risco de Dados do Mundo
Se suspeitar de corrupção no mundo ou no save, evite mudanças manuais repetidas sem backup. Crie ou restaure um backup antes de fazer alterações destrutivas.
:::

## Solucionar Erros de Conectividade Steam

Problemas de conectividade relacionados ao Steam podem impedir seu servidor Palworld de atualizar ou ficar acessível.

### Erro: `Connecting anonymously to Steam Public...Retrying`

Essa mensagem está geralmente relacionada a um problema temporário no serviço Steam, não a uma configuração quebrada do Palworld.

### O Que Você Deve Fazer

- aguarde de `5` a `10` minutos e tente novamente
- verifique se o Steam está em manutenção ou com alguma queda
- evite reiniciar repetidamente durante uma queda temporária do Steam

Manutenções Steam costumam ocorrer às terças-feiras, então interrupções curtas são possíveis.

### Atualizações Automáticas Durante Quedas do Steam

Se seu servidor tentar atualizar repetidamente durante uma queda do Steam, ele pode ficar indisponível até que o Steam volte ao normal.

Se seu produto inclui uma configuração de atualização automática na interface de administração, você pode desativá-la temporariamente até o fim da queda.

:::tip Como Lidar com Queda Temporária do Steam
Se o servidor estava funcionando antes e de repente mostra tentativas de conexão ao Steam, geralmente é melhor esperar um pouco em vez de alterar arquivos de configuração imediatamente.
:::

### Precisa Editar Algum Arquivo de Configuração?

Normalmente, nenhuma alteração de arquivo de configuração é necessária para esse problema.

| Problema | Arquivo de config necessário | Ação adicional |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | Não | Aguarde, verifique status do Steam, opcionalmente desative atualizações automáticas temporariamente |

## Solucionar Erros de Versão Incompatível

Se aparecer uma mensagem dizendo que a partida está rodando uma versão incompatível do jogo, a versão do servidor e do cliente não coincidem.

### Como Corrigir

1. Reinicie o servidor Palworld.
2. Aguarde o servidor completar a inicialização.
3. Atualize seu cliente local do Palworld via Steam, se necessário.
4. Tente conectar novamente.

Se o servidor ainda reportar versão incompatível, a atualização pode não ter sido aplicada corretamente. Nesse caso, repita o processo de verificação ou reinstalação dos arquivos descrito anteriormente.

### Verifique Configurações do Servidor Após Atualização

Um erro de versão incompatível geralmente não é causado pelo `PalWorldSettings.ini`, mas se o servidor falhar após atualizar, vale a pena confirmar que o arquivo de configuração está válido e sem alterações incorretas.

## Entenda Mensagens Normais de Inicialização Steam

Algumas mensagens de inicialização parecem críticas, mas são comportamento esperado.

### Mensagem: `steamclient.so: cannot open shared object file: No such file or directory`

Essa mensagem é comum durante a inicialização e geralmente é inofensiva para servidores dedicados Palworld nesse contexto.

Normalmente, você não precisa editar nenhum arquivo ou executar comando extra só por essa mensagem.

:::note Pode Ser Ignorada na Maioria dos Casos
Se o servidor inicia normalmente e os jogadores conseguem conectar, essa mensagem da biblioteca Steam pode ser ignorada.
:::

## Referência de Configuração

A tabela abaixo resume as verificações de solução de problemas mais relevantes para Palworld.

| Problema | Arquivo para checar | Caminho nos arquivos do servidor | Alterações manuais necessárias | Reinício necessário |
| --- | --- | --- | --- | --- |
| Erro de atualização `0x6` | Nenhum normalmente | Não requerido | Não | Sim |
| Timeout de conexão após edição de config | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Sim, revisar valores em `OptionSettings` | Sim |
| Timeout de conexão após atualização de mod | Arquivos de mod, não config padrão | Varia | Remover ou atualizar mods incompatíveis | Sim |
| Loop de tentativas Steam | Nenhum normalmente | Não requerido | Não | Às vezes, mas esperar é recomendado primeiro |
| Versão do jogo incompatível | Nenhum normalmente | Não requerido | Não | Sim |
| Aviso `steamclient.so` | Nenhum | Não requerido | Não | Não, se o servidor funcionar normalmente |

## Ordem Recomendada para Solução de Problemas

Se não souber por onde começar, siga esta ordem:

1. Confirme que o servidor está online.
2. Tente conectar com IP direto em vez de `Recent Servers`.
3. Verifique se Palworld ou Steam tiveram atualização recente.
4. Remova ou atualize mods se você os usa.
5. Revise `PalWorldSettings.ini` em `Configs` para sintaxe inválida.
6. Reinicie o servidor.
7. Verifique ou reinstale os arquivos do jogo se os erros de atualização continuarem.

Esse método ajuda a eliminar as causas mais comuns primeiro, sem fazer mudanças desnecessárias.

## Conclusão

Parabéns, você solucionou com sucesso problemas comuns do servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂