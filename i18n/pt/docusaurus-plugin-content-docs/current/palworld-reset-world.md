---
id: palworld-reset-world
title: "Palworld: Resetar Mundo"
description: "Aprenda como resetar o mundo do seu servidor de jogos Palworld removendo os dados salvos atuais e iniciando um novo mapa do mundo Palworld no mesmo servidor. -> Saiba mais agora"
sidebar_label: Palworld: Resetar Mundo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld armazena seu mundo ativo nos dados salvos do servidor, em vez de uma configuração de mundo configurável. Neste guia, você vai aprender como resetar o mundo do seu servidor de jogos Palworld na ZAP-Hosting deletando a pasta de save existente para que o servidor gere um novo mundo na próxima inicialização.

:::danger Exclusão Permanente de Dados
Resetar seu mundo Palworld apaga permanentemente o mundo atual, incluindo progresso dos jogadores, construções, Pals e outros dados salvos armazenados nesse mundo.
:::



## Preparação

Antes de começar, certifique-se de que você tem acesso à administração do seu servidor de jogos Palworld e que o servidor está offline antes de deletar qualquer arquivo de save.

:::tip Faça um Backup Primeiro
Se você pode precisar do mundo atual novamente no futuro, faça um backup antes de continuar. Se disponível para seu produto, você pode usar os recursos de backup do servidor ou baixar manualmente a pasta de save antes de deletá-la.
:::

## Entenda Como Funciona o Reset do Mundo em Palworld

Um reset do mundo em Palworld normalmente não exige alterar um valor de gameplay dentro de um arquivo de configuração. Em vez disso, o mundo ativo é armazenado no diretório de saves do servidor.

Com base na estrutura pública atual do servidor dedicado Palworld, o save do mundo geralmente está localizado no seguinte caminho:

```text
Pal/Saved/SaveGames/0/
```

Dentro desse diretório, você normalmente encontrará uma pasta com um nome hexadecimal aleatório longo, por exemplo:

```text
84B5E2264EC387DEDB43179D666031A1
```

Essa pasta contém o save do mundo atual. Quando você a deleta e inicia o servidor novamente, Palworld cria um novo mundo automaticamente.

:::note Nenhum Valor de Configuração Necessário
Para um reset padrão do mundo, normalmente não é necessário nenhum comando de console, parâmetro de inicialização ou entrada adicional na configuração. O reset é feito removendo os dados salvos existentes.
:::

## Pare o Servidor

Antes de deletar os arquivos do mundo, pare seu servidor Palworld pela administração do servidor de jogos na ZAP-Hosting.

Deletar dados salvos enquanto o servidor está rodando pode causar corrupção de arquivos ou remoção incompleta dos dados do mundo.

:::caution O Servidor Deve Estar Offline
Certifique-se de que o servidor está completamente parado antes de continuar. Se o servidor ainda estiver rodando, ele pode recriar ou bloquear arquivos enquanto você os edita.
:::

## Abra o Diretório de Save

Na administração do seu servidor Palworld na ZAP-Hosting, abra a área de gerenciamento de arquivos e navegue até o seguinte caminho:

```text
Pal/Saved/SaveGames/0/
```

Dependendo do layout do seu produto, você pode acessar isso pelo gerenciador de arquivos ou uma seção similar de acesso a arquivos na interface web.



### Referência do Caminho

| Item | Valor |
| --- | --- |
| Caminho base do save | `Pal/Saved/SaveGames/0/` |
| Nome da pasta do mundo | Pasta hexadecimal aleatória |
| Exemplo de pasta | `84B5E2264EC387DEDB43179D666031A1` |
| Ação necessária | Deletar a pasta do mundo |

## Delete o Save Atual do Mundo

Dentro de `Pal/Saved/SaveGames/0/`, localize a pasta com o nome hexadecimal aleatório. Delete essa pasta completamente.

### O Que Você Precisa Remover

| Tipo de pasta | Ação necessária |
| --- | --- |
| Pasta do save do mundo atual dentro de `Pal/Saved/SaveGames/0/` | Deletar |
| `PalworldSettings.ini` ou outros arquivos de configuração | Não editar para este reset, a menos que queira também alterar configurações do servidor |

Se houver apenas uma pasta hexadecimal em `Pal/Saved/SaveGames/0/`, essa normalmente é o save do mundo ativo. Se houver múltiplas pastas e você não souber qual está em uso, não arrisque. Nesse caso, verifique cuidadosamente seus arquivos atuais do servidor ou contate o suporte antes de deletar qualquer coisa.

:::info Esclarecimento Sobre a Seção de Configurações
Embora muitas configurações do Palworld possam ser gerenciadas pela área de **Configs**, o reset do mundo em si normalmente não é feito editando um arquivo de configuração. A ação necessária é deletar a pasta do save do mundo nos arquivos do servidor.
:::

## Inicie o Servidor Novamente

Depois que a pasta de save for deletada, inicie seu servidor Palworld novamente.

Na inicialização, o servidor deve gerar automaticamente um novo mundo porque não há save anterior disponível no local esperado.

### Comandos ou Alterações Adicionais

| Tarefa | Necessário |
| --- | --- |
| Editar um arquivo de configuração | Não |
| Executar um comando dentro do jogo | Não |
| Executar um comando no console | Não |
| Reiniciar ou iniciar o servidor após a deleção | Sim |

:::tip A Primeira Inicialização Pode Demorar Mais
A primeira inicialização após deletar o save do mundo pode levar um pouco mais de tempo que o normal, pois o Palworld precisa gerar um novo mundo.
:::

## Verifique o Reset

Quando o servidor estiver online novamente, conecte-se a ele e confirme que um mundo novo foi criado.

Você pode verificar isso normalmente observando:

- um novo estado de spawn
- nenhuma construção anterior feita por jogadores
- nenhum progresso anterior
- uma nova pasta de save gerada em `Pal/Saved/SaveGames/0/`

Se o mundo antigo ainda aparecer, pare o servidor novamente e confirme que a pasta hexadecimal correta foi deletada.

## Conclusão

Parabéns, você resetou com sucesso seu mundo Palworld e iniciou um novo save no seu servidor existente. Para dúvidas ou assistência, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂