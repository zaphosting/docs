---
id: windrose-password-protection
title: "Windrose: Proteção por Senha"
description: "Defina uma senha no seu servidor de jogos Windrose para proteger o acesso e gerencie as configurações de alteração de senha com segurança na configuração do servidor -> Saiba mais agora"
sidebar_label: Proteção por Senha
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Windrose oferece proteção por senha, permitindo que você restrinja o acesso ao seu servidor dedicado com uma senha de entrada. Neste guia, você vai aprender como ativar, alterar ou remover a senha no seu servidor Windrose usando o gerenciamento de servidor de jogos da ZAP-Hosting.

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor Windrose na interface web da ZAP-Hosting e permissão para editar arquivos do servidor.

:::info Acesso Necessário
Você precisa ter acesso ao Dashboard do seu servidor e à área de gerenciamento de arquivos para editar o arquivo `ServerDescription.json`.
:::

## Entendendo a Proteção por Senha no Windrose

Definir uma senha ajuda a evitar que jogadores não autorizados entrem no seu servidor de jogos Windrose. Jogadores ainda podem acessar o servidor pelo código de convite, mas precisam digitar a senha correta antes de se conectar.

Isso é útil se você quiser:
- limitar o acesso a amigos, equipe ou um grupo privado
- proteger um servidor de testes contra acesso público
- controlar quem pode entrar sem depender de um gerenciador de senhas separado ou sistema de senha de conta

:::note Comportamento da Senha
Windrose usa a senha configurada no próprio arquivo do servidor. Isso é separado da senha da sua conta ZAP-Hosting e não está relacionado a ferramentas como gerenciadores de senha, integração do Google com gerenciadores de senha ou qualquer lista de senhas.
:::

## Ativar a Proteção por Senha

Para aplicar uma senha, você precisa primeiro parar o servidor, editar o arquivo de configuração e depois iniciar o servidor novamente.

### Parar o Servidor

Abra o Dashboard do seu servidor na interface web da ZAP-Hosting e pare o servidor completamente antes de fazer alterações.

:::caution Pare o Servidor Antes de Editar
Você deve parar o servidor antes de editar o `ServerDescription.json` para evitar conflitos de configuração ou que o arquivo seja sobrescrito enquanto o servidor estiver rodando.
:::

### Abrir o Arquivo de Configuração

No menu lateral do painel, abra `Files`.

Depois localize e abra o arquivo `ServerDescription.json` no diretório raiz da lista de arquivos do seu servidor.

### Editar as Configurações de Senha

Dentro do `ServerDescription.json`, defina `IsPasswordProtected` como `true` e informe a senha desejada no campo `Password`.

```json
"IsPasswordProtected": true,
"Password": "SuaSenhaAqui"
```

Substitua `SuaSenhaAqui` pela sua senha segura.

:::tip Escolha uma Senha Forte
Use uma senha única que não seja reutilizada da sua senha de conta ou de qualquer outro serviço. Isso ajuda a proteger seu servidor Windrose contra acessos indesejados.
:::

### Salvar e Reiniciar o Servidor

Após editar o arquivo, clique em `Save Content`.

Quando o arquivo for salvo, inicie seu servidor novamente pelo Dashboard. Seu servidor Windrose agora vai exigir a senha configurada quando os jogadores tentarem entrar.

## Referência de Configuração

A tabela a seguir explica as configurações relevantes no `ServerDescription.json`:

| Chave | Tipo | Exemplo | Descrição |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Booleano | `true` | Ativa ou desativa a proteção por senha |
| `Password` | String | `"SuaSenhaAqui"` | Define a senha de entrada usada quando a proteção por senha está ativada |

## Alterar a Senha Existente

Se quiser alterar a senha depois, o processo é o mesmo da configuração inicial.

### Atualizar o Valor da Senha

Pare o servidor, abra o `ServerDescription.json` e altere o valor no campo `Password` para sua nova senha.

Exemplo:

```json
"IsPasswordProtected": true,
"Password": "[sua_nova_senha]"
```

O placeholder `[sua_nova_senha]` representa a nova senha que você quer que os jogadores usem para entrar no servidor.

### Salvar e Reiniciar Novamente

Salve o arquivo e reinicie o servidor para que a alteração da senha tenha efeito.

:::note Verificação da Senha
Se os jogadores não conseguirem entrar após a troca da senha, peça para conferirem a digitação da senha com atenção, incluindo letras maiúsculas e minúsculas, se aplicável.
:::

## Remover a Proteção por Senha

Se você não quiser mais proteger seu servidor Windrose com senha, pode desativar o recurso no mesmo arquivo de configuração.

### Desativar a Configuração

Pare o servidor e abra o `ServerDescription.json` novamente.

Defina `IsPasswordProtected` como `false`. O valor de `Password` será ignorado quando essa opção estiver desativada.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Salvar e Reiniciar o Servidor

Clique em `Save Content` e inicie o servidor novamente. Os jogadores poderão entrar sem precisar digitar senha.

## Solução de Problemas

Se a proteção por senha não funcionar como esperado, revise os seguintes pontos.

| Problema | Possível Causa | Solução |
| --- | --- | --- |
| Servidor não pede senha | `IsPasswordProtected` ainda está como `false` | Defina como `true`, salve o arquivo e reinicie o servidor |
| Jogadores não conseguem entrar com a senha correta | Senha foi digitada incorretamente | Verifique o valor configurado e peça para os jogadores conferirem a digitação da senha |
| Alterações não são aplicadas | Servidor não foi reiniciado após a edição | Reinicie o servidor após salvar o `ServerDescription.json` |
| Alterações no arquivo são perdidas | Arquivo foi editado enquanto o servidor estava rodando | Pare o servidor primeiro, aplique as alterações novamente, salve e reinicie |

:::danger Não Armazene Senhas Sensíveis Publicamente
Não compartilhe a senha do seu servidor publicamente em posts da comunidade, screenshots ou exportações de arquivos. Também evite usar senhas de listas antigas ou reutilizar credenciais de outros serviços.
:::

## Conclusão

Parabéns, você configurou com sucesso a proteção por senha no seu servidor Windrose. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂