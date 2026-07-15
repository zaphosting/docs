---
id: palworld-reset-server
title: "Palworld: Resetar Servidor"
description: "Aprenda como resetar seu servidor Palworld na interface web da ZAP, entenda quais configurações são removidas e restaure os dados padrão do servidor com segurança. -> Saiba mais agora"
sidebar_label: "Resetar Servidor"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld armazena seu mundo, progresso dos jogadores e configurações do servidor no servidor de jogos. Neste guia, você vai aprender como resetar completamente seu servidor Palworld na ZAP-Hosting e começar do zero com uma instalação padrão.

:::danger Aviso de Exclusão Completa de Dados
Um reset completo apaga permanentemente seus dados salvos, alterações de configuração e quaisquer outros arquivos do servidor armazenados na instalação atual. Use essa opção somente como último recurso.
:::



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e que não precisa mais dos dados atuais do mundo.

:::info Faça Backup dos Dados Importantes Primeiro
Se quiser manter uma cópia do seu mundo atual ou da configuração, crie um backup antes de continuar. Após o reset, os dados apagados normalmente não poderão ser recuperados.
:::

## Entenda o que um reset do servidor Palworld faz

Um reset completo do Palworld não é o mesmo que alterar uma única configuração no arquivo de configuração. Ele reinstala todo o servidor e remove os dados atuais do servidor.

O processo de reset normalmente remove o seguinte:

| Tipo de dado | Removido durante o reset |
| --- | --- |
| Dados salvos do mundo | Sim |
| Progresso dos jogadores | Sim |
| Alterações na configuração do servidor | Sim |
| Mods instalados ou arquivos personalizados | Sim |
| Arquivos padrão do jogo | Reinstalados automaticamente |

Após o reset, seu servidor inicia com uma instalação nova e configurações padrão.

## Verifique primeiro a localização da configuração

Para alterações normais na configuração do Palworld, você pode acessar os arquivos relevantes na administração do seu servidor de jogos em `Configs`. As principais configurações do Palworld geralmente ficam no seguinte arquivo:

| Arquivo | Finalidade |
| --- | --- |
| `PalWorldSettings.ini` | Arquivo principal de configuração do servidor Palworld |

Na interface da ZAP-Hosting, normalmente você acessa isso pela administração do seu servidor Palworld em `Configs`.

:::note Reset Não Requer Edição Manual da Configuração
Um reset completo do servidor não exige que você edite manualmente o `PalWorldSettings.ini`. Esse arquivo é usado para alterações normais, mas o reset completo é feito reinstalando ou formatando o servidor para que todos os arquivos sejam recriados com valores padrão.
:::

Se seu objetivo é apenas mudar configurações de gameplay, em vez de apagar todo o servidor, edite o arquivo de configuração em `Configs` ao invés de fazer um reset completo.

## Pare o servidor

Antes de iniciar o reset, você precisa parar completamente o servidor Palworld.

1. Faça login na interface web da ZAP-Hosting.
2. Abra seu servidor de jogos Palworld.
3. Pare o servidor usando os controles de administração.
4. Aguarde até que o status do servidor confirme que ele está offline.

:::caution Não Resete Enquanto o Servidor Estiver Rodando
Se você iniciar o reset enquanto o servidor ainda estiver ativo, os arquivos podem não ser removidos corretamente e os dados salvos podem ficar inconsistentes.
:::

## Reinstale e resete o servidor

Um reset completo no Palworld é feito reinstalando o servidor com opções de formatação ou reset na interface da ZAP.

### Abra a função de reinstalação

Na administração do seu servidor Palworld, procure pela função de reinstalar ou resetar na área de gerenciamento do servidor.

Como os nomes na interface podem variar entre versões do painel, o termo exato pode ser um pouco diferente. Na ZAP-Hosting, essa função geralmente fica na área de administração do servidor onde ações de reinstalar ou formatar estão disponíveis.



### Inicie o reset completo

Use a opção de reinstalação que realiza uma formatação ou reset completo dos dados do servidor.

Confirme a ação se o painel pedir confirmação.

:::danger Essa Ação Apaga Todos os Dados do Servidor
Uma reinstalação ou formatação completa apaga saves, configurações e arquivos personalizados do servidor. Continue somente se tiver certeza de que quer resetar tudo.
:::

### Aguarde a conclusão da instalação

Após confirmar o reset, espere até que o processo de reinstalação termine. Dependendo do estado do painel e do tamanho do servidor, isso pode levar alguns minutos.

Não interrompa o processo enquanto o servidor está sendo reinstalado.

## Inicie o servidor Palworld limpo

Quando a reinstalação terminar, inicie o servidor Palworld novamente pela administração do servidor.

Após o início:

- um novo mundo será criado
- as configurações padrão do servidor serão usadas
- o progresso anterior dos jogadores e do mundo não estará mais presente

Se precisar, você pode voltar para `Configs` e ajustar as configurações do Palworld novamente em `PalWorldSettings.ini`.

## Verifique o resultado do reset

Depois que o servidor iniciar, conecte-se e confirme que o reset foi bem-sucedido.

Você deve verificar o seguinte:

| Verificação | Resultado esperado |
| --- | --- |
| Estado do mundo | Mundo novo e limpo |
| Dados dos jogadores | Sem progresso anterior |
| Configurações do servidor | Valores padrão, a menos que tenha alterado novamente |
| Arquivos personalizados ou mods | Removidos, a menos que reinstalados manualmente |

Se o mundo antigo ainda aparecer, pare o servidor e verifique se o processo de reinstalação foi concluído com sucesso no painel da ZAP. Se o painel não realizou um reset completo, pode ser necessário repetir o processo com cuidado.

## Reconfigure as configurações do servidor após o reset

Após um reset bem-sucedido, seu servidor Palworld usará valores padrão de configuração. Se quiser personalizar o servidor novamente, abra a seção `Configs` na administração do seu servidor de jogos e edite o `PalWorldSettings.ini`.

Tarefas comuns após o reset podem incluir:

- mudar o nome do servidor
- definir uma senha
- ajustar dificuldade ou valores de gameplay
- reaplicar alterações personalizadas na configuração
- reinstalar mods suportados ou arquivos adicionais, se necessário

:::tip Reaplique as Configurações com Cuidado
Se uma configuração anterior causou problemas, evite copiar todas as configurações antigas de uma vez. Reaplique apenas o que realmente precisa para identificar mudanças problemáticas com mais facilidade.
:::

## Referência de configuração

A tabela a seguir resume o arquivo relevante e o comportamento do reset:

| Item | Detalhes |
| --- | --- |
| Arquivo principal de configuração | `PalWorldSettings.ini` |
| Local na ZAP para editar configuração | `Configs` na administração do servidor de jogos |
| Alteração manual necessária para reset completo | Não |
| Ação necessária para reset completo | Reinstalar ou formatar/resetar o servidor |
| Reinício necessário após reset | Sim, inicie o servidor novamente após reinstalar |
| Comandos adicionais necessários | Nenhum confirmado |

:::note Nomes na Interface Podem Variar
A nomenclatura exata da opção de reinstalar ou formatar pode variar conforme a versão atual da interface web da ZAP. Se não encontrar a função de reset, contate o suporte antes de tentar métodos alternativos de exclusão de arquivos.
:::

## Conclusão

Parabéns, você resetou seu servidor Palworld com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂