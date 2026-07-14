---
id: palworld-troubleshooting
title: "Palworld: Solução de Problemas"
description: "Corrija problemas comuns do servidor Palworld, problemas de atualização do Steam Palworld e erros de conexão Steam no seu servidor de jogos. -> Saiba mais agora"
sidebar_label: Palworld: Solução de Problemas
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Servidores dedicados Palworld podem falhar por vários motivos, incluindo falhas em atualizações do Steam, incompatibilidade de versões, conflitos de mods e problemas temporários de conexão com o Steam. Neste guia, você vai aprender a identificar problemas comuns do servidor Palworld na ZAP-Hosting e aplicar a correção correta, incluindo quando editar arquivos de configuração, verificar arquivos ou reiniciar seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar a solucionar problemas, certifique-se de que você tem acesso à administração e ao console do seu servidor de jogos Palworld na interface web da ZAP-Hosting.

Você também deve ter o seguinte pronto:

| Requisito | Por que é necessário |
| --- | --- |
| Acesso ao painel do seu servidor de jogos ZAP-Hosting | Necessário para parar, iniciar, reinstalar e editar arquivos de configuração |
| Acesso ao console do servidor | Útil para verificar se o servidor está respondendo |
| Um backup recente | Recomendado antes de alterar arquivos ou remover mods |
| Endereço IP e porta diretos do servidor | Necessário porque a lista de Servidores Recentes no jogo pode não funcionar de forma confiável |

:::caution Crie um Backup Primeiro
Se você planeja remover mods, reinstalar arquivos ou resetar partes da configuração do seu servidor Palworld, crie um backup antes para evitar perda acidental de dados.
:::

## Acessando os Arquivos de Configuração do Palworld

Alguns passos de solução de problemas exigem alterações manuais nos arquivos de configuração do Palworld. Na ZAP-Hosting, você pode acessar esses arquivos pela administração do servidor de jogos na seção `Configs`.

Para servidores dedicados Palworld, as principais configurações do servidor geralmente ficam no seguinte arquivo:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Se seu servidor roda em outro template de plataforma, o nome exato da pasta pode variar, mas em servidores Palworld baseados em Linux hospedados, o caminho `LinuxServer` é o padrão.

### Abrir o Arquivo de Configuração na Interface ZAP

Para acessar o arquivo:

1. Abra seu servidor Palworld na interface web da ZAP-Hosting.
2. Navegue até a seção `Configs`.
3. Abra o arquivo `PalWorldSettings.ini`.
4. Revise a linha `OptionSettings=(...)`, que contém a maioria das configurações de gameplay e conexão.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Arquivo Principal de Configuração
A maioria das opções do servidor Palworld está armazenada em `PalWorldSettings.ini`, geralmente dentro da seção `OptionSettings=(...)`. Se precisar ajustar configurações de gameplay, senhas, limites de jogadores ou valores relacionados à rede, normalmente é esse arquivo que você vai editar.
:::

### Salvar e Reiniciar Após a Edição

Depois de alterar qualquer valor de configuração:

1. Salve o arquivo na seção `Configs`.
2. Reinicie o servidor Palworld pela interface da ZAP-Hosting.

O Palworld não aplica mudanças de configuração ao vivo de forma confiável, então é necessário reiniciar após editar o `PalWorldSettings.ini`.

## Corrigindo Falhas em Atualizações do Steam

Um problema conhecido de atualização pode aparecer com a seguinte mensagem:

```text
Error! app '2394010' state is 0x6 after update job
```

Isso geralmente indica que os arquivos do servidor Steam Palworld não foram atualizados corretamente.

### Correção Recomendada

Para resolver isso:

1. Pare seu servidor Palworld.
2. Abra a área de gerenciamento do servidor na interface da ZAP-Hosting.
3. Use a função de reinstalação ou verificação de arquivos.
4. Selecione a opção para verificar a integridade para que os arquivos do servidor sejam checados e baixados novamente se necessário.
5. Inicie o servidor novamente.

:::tip Verifique a Integridade para Arquivos Corrompidos
A verificação de arquivos é geralmente o primeiro passo mais seguro porque repara arquivos do servidor de jogos Palworld que estejam faltando ou danificados sem precisar fazer upload manual.
:::

### Precisa Editar Algum Arquivo de Configuração?

Normalmente não é necessário alterar arquivos de configuração para esse erro específico. O problema geralmente está relacionado a arquivos do jogo danificados ou incompletos, não a uma configuração errada no `PalWorldSettings.ini`.

## Corrigindo "Connection Timed Out"

Se você receber um erro `Connection timed out` ao tentar entrar no seu servidor de jogos Palworld, várias causas diferentes podem estar envolvidas.

## Verifique se o Servidor Está Realmente Rodando

Primeiro, confirme se o servidor iniciou corretamente.

### Use o Console

Abra o console do servidor na interface da ZAP-Hosting e verifique se há atividade normal de inicialização. Se o console estiver disponível, tente um comando simples como:

```text
info
```

Se o servidor responder normalmente, provavelmente está rodando. Se não houver resposta útil ou o processo parar repetidamente, o servidor pode estar travando durante a inicialização.

### Verifique o Uso de Recursos

Se o uso da CPU permanecer muito baixo durante a inicialização e o servidor não responder no console, isso pode indicar que o processo do servidor Palworld travou ou não inicializou corretamente.

| Sintoma | Causa provável | Ação recomendada |
| --- | --- | --- |
| Sem resposta no console | Travamento na inicialização ou processo travado | Reinicie o servidor e revise mudanças recentes |
| Uso muito baixo de CPU na inicialização | Servidor não inicializando corretamente | Verifique mods, atualizações recentes e logs |
| Servidor inicia mas jogadores dão timeout | Problema no método de conexão ou versão | Use IP direto e verifique versões |

## Conecte Usando IP Direto em vez de Servidores Recentes

Um problema comum do Palworld é que entrar pelo menu `Servidores Recentes` no jogo pode falhar mesmo com o servidor online.

Use uma conexão direta:

1. Copie o IP e a porta do seu servidor na interface da ZAP-Hosting.
2. No Palworld, conecte-se diretamente usando esse endereço.
3. Evite depender da lista `Servidores Recentes` para testes.

:::note Conexão Direta é Mais Confiável
Se o navegador de servidores Steam Palworld ou a lista de servidores recentes se comportar de forma inconsistente, a conexão por IP direto é a melhor forma de confirmar se seu servidor está acessível.
:::

## Verifique Problemas com Mods ou UE4SS

Se o Palworld recebeu uma atualização recente e seu servidor usa mods ou `UE4SS`, o servidor pode parar de funcionar até que essas modificações sejam atualizadas.

### O Que Verificar

Confira se você instalou recentemente:

- mods de gameplay
- modificações personalizadas no servidor
- `UE4SS`
- outros arquivos de terceiros que interfiram no servidor de jogos Palworld

Se o problema começou logo após uma atualização Steam do Palworld, esses arquivos são uma causa provável.

### Correção Recomendada

1. Pare o servidor.
2. Crie um backup.
3. Remova ou desative mods ou `UE4SS` adicionados recentemente.
4. Inicie o servidor novamente.
5. Teste a conexão usando IP direto.

:::caution Compatibilidade de Mods Após Atualizações
Atualizações do Palworld podem quebrar mods sem aviso. Se seu servidor funcionava antes da atualização e parou depois, sempre teste removendo mods antes de mudar outras configurações.
:::

### São Necessárias Alterações na Configuração?

Geralmente não. Timeouts de conexão relacionados a mods são causados por arquivos incompatíveis, não por valores dentro do `PalWorldSettings.ini`.

## Corrigindo Erros de Conectividade Steam

Você pode ver a seguinte mensagem na inicialização:

```text
Connecting anonymously to Steam Public...Retrying
```

Isso está geralmente relacionado a problemas temporários de conexão com o Steam, não a uma configuração quebrada do Palworld.

### O Que Isso Significa

O servidor dedicado Palworld depende dos serviços Steam para partes do processo de inicialização e atualização. Se o Steam estiver com quedas, alta carga ou manutenção programada, o servidor pode falhar temporariamente ao conectar.

Isso é especialmente comum em períodos de alto tráfego ou manutenção rotineira do Steam, que geralmente ocorre às terças-feiras.

### Correção Recomendada

Tente o seguinte:

1. Aguarde de `5` a `10` minutos.
2. Reinicie o servidor.
3. Teste novamente depois.

Se o problema ocorrer durante uma queda geral do Steam, pode ser necessário esperar até que os serviços Steam se recuperem.

### Consideração Sobre Atualizações Automáticas

Se seu servidor enfrenta repetidos problemas de atualização durante quedas do Steam, você pode considerar desabilitar atualizações automáticas nas configurações do servidor até que o Steam esteja estável novamente.

:::tip Evite Janelas de Atualização Durante Manutenção do Steam
Se possível, evite forçar uma atualização Steam do Palworld durante períodos conhecidos de manutenção do Steam. Isso pode reduzir falhas na inicialização e troubleshooting desnecessário.
:::

### São Necessárias Alterações na Configuração?

Não. Esse problema normalmente não é resolvido via `PalWorldSettings.ini` ou outro arquivo de configuração manual.

## Corrigindo "Versão Incompatível do Jogo"

Se o Palworld mostrar uma mensagem de que a partida está rodando uma versão incompatível do jogo, sua versão do cliente e do servidor não coincidem.

## Atualize a Versão do Servidor

Comece reiniciando o servidor pela interface da ZAP-Hosting. Na maioria dos casos, isso permite aplicar a última atualização do servidor de jogos Palworld.

Se a versão ainda não coincidir, use seu fluxo normal de atualização do servidor. Se precisar de um guia dedicado de atualização, siga a documentação apropriada do Palworld disponível na ZAP-Docs, se houver.

### Confirme a Versão do Cliente

Certifique-se de que sua instalação local do Palworld também está totalmente atualizada via Steam.

| Componente | O que verificar |
| --- | --- |
| Servidor Palworld | Reiniciado e atualizado na ZAP-Hosting |
| Jogo Palworld local | Atualizado no Steam |
| Mods | Atualizados ou removidos se incompatíveis |

:::info Incompatibilidade de Versões Afeta Ambos os Lados
Esse erro nem sempre significa que o servidor está desatualizado. Seu cliente local Palworld também pode estar com versão antiga, então sempre verifique ambos antes de fazer mudanças mais profundas.
:::

### São Necessárias Alterações na Configuração?

Normalmente não são necessárias edições em arquivos de configuração para incompatibilidade de versão.

## Entendendo Mensagens de Inicialização `steamclient.so`

Durante a inicialização, você pode ver mensagens similares a:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

Em muitos ambientes de hospedagem Palworld, essas mensagens relacionadas ao Steam aparecem mesmo quando o servidor inicia normalmente.

### O Que Você Deve Fazer

Se o servidor continuar iniciando e ficar acessível, geralmente você pode ignorar essa mensagem.

### Quando Isso Se Torna um Problema

Só investigue mais a fundo se o servidor falhar em iniciar completamente e essa mensagem aparecer junto com erros fatais adicionais.

:::note Nem Toda Linha de Erro Steam é Crítica
Os logs de inicialização frequentemente contêm avisos não fatais. Foque se o servidor termina de iniciar e aceita conexões, não apenas se um aviso aparece no console.
:::

## Solução de Problemas de Conexão Relacionados a Mundo e Guilda

Em alguns casos, jogadores podem ter problemas de conexão relacionados ao estado do mundo ou da guilda, e não ao processo do servidor em si.

Um exemplo relatado é quando um membro da guilda sai enquanto outros dados de jogadores ligados à guilda ainda estão associados a jogadores offline. Isso pode causar problemas para entrar.

### Possíveis Correções

Tente o seguinte na ordem:

1. Peça para o jogador afetado entrar novamente na guilda, se possível.
2. Reinicie o servidor Palworld.
3. Se o problema persistir, restaure um backup ou investigue cuidadosamente os dados salvos afetados.

:::danger Alterações em Dados Salvos Podem Ser Arriscadas
Se suspeitar de corrupção no mundo ou nos dados salvos, evite fazer alterações manuais aleatórias nos arquivos sem um backup atual. Edições incorretas podem danificar permanentemente os dados do mundo Palworld.
:::

## Valores de Configuração que Valem a Pena Verificar

Embora a maioria dos problemas deste guia não seja causada diretamente por configurações erradas, há alguns valores no `PalWorldSettings.ini` que você pode querer revisar se os jogadores não conseguem entrar como esperado.

Esses valores normalmente ficam dentro da seção `OptionSettings=(...)`.

| Chave de Configuração | Propósito | O que verificar |
| --- | --- | --- |
| `ServerName` | Nome público do servidor | Confirme se está definido conforme desejado |
| `ServerDescription` | Descrição do servidor | Opcional, mas útil para identificação |
| `AdminPassword` | Senha de login admin | Certifique-se que está correta se usar comandos admin |
| `ServerPassword` | Senha para entrar | Remova ou corrija se jogadores não conseguem autenticar |
| `PublicPort` | Porta de conexão do jogo | Confirme se corresponde à porta atribuída ao seu serviço |
| `PublicIP` | IP público anunciado | Normalmente deixe em branco a menos que seu setup exija |
| `bIsMultiplay` | Modo multiplayer | Deve estar ativado para uso normal de servidor dedicado |
| `bIsDedicated` | Modo servidor dedicado | Deve estar ativado para servidores dedicados hospedados |

### Exemplo de Estrutura

O conteúdo exato do seu arquivo pode variar, mas as configurações relevantes normalmente ficam em uma linha parecida com esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Substitua os placeholders como `[your_admin_password]` e `[your_server_password]` pelos seus próprios valores.

:::caution Não Altere Valores Desconhecidos Aleatoriamente
O Palworld armazena muitas configurações em uma única linha `OptionSettings`. Se você remover vírgulas, aspas ou colchetes por engano, o servidor pode falhar ao ler a configuração corretamente.
:::

## Aplicando Mudanças de Configuração com Segurança

Se precisar editar o `PalWorldSettings.ini`, siga este processo:

1. Pare o servidor para evitar conflitos durante a edição.
2. Abra `Configs` na interface da ZAP-Hosting.
3. Edite `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Salve suas alterações.
5. Inicie ou reinicie o servidor.
6. Teste o servidor usando conexão por IP direto.

### Nenhum Comando Adicional é Necessário

Para mudanças padrão na configuração do Palworld, normalmente não é preciso nenhum comando extra no console após salvar o arquivo. O reinício é o passo final importante.

## Referência Rápida

| Problema | Precisa editar config | Reinício necessário | Ação adicional |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Não | Sim | Verificar integridade ou reinstalar arquivos |
| `Connection timed out` | Geralmente não | Frequentemente sim | Use IP direto, verifique mods, teste console |
| `Connecting anonymously to Steam Public...Retrying` | Não | Sim | Aguarde recuperação do Steam |
| `Incompatible version of the game` | Não | Sim | Atualize servidor e cliente |
| Aviso `steamclient.so` | Não | Não, se servidor iniciar normalmente | Geralmente pode ignorar |
| Problemas para entrar após mudanças na guilda | Não | Sim | Reentre na guilda ou restaure backup se precisar |

## Conclusão

Parabéns, você solucionou com sucesso problemas comuns do servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂