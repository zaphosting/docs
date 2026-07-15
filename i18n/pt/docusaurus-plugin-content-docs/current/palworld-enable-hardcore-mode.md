---
id: palworld-enable-hardcore-mode
title: "Palworld: Ativar o Modo Hardcore"
description: "Aprenda como ativar o modo hardcore no Palworld editando a configuração correta do servidor, definindo valores True ou False e aplicando opções de morte permanente com segurança. -> Saiba mais agora"
sidebar_label: "Ativar o Modo Hardcore"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O *modo hardcore* no Palworld ativa regras de morte permanente para jogadores e, opcionalmente, para os Pals. Neste guia, você vai aprender como ativar manualmente o modo hardcore no seu servidor de jogos Palworld da ZAP-Hosting, editando o arquivo de configuração correto e reiniciando o servidor em seguida.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting. Você também precisa da permissão para editar arquivos de configuração do servidor através da seção **Configs** na administração do seu servidor de jogos.

:::danger Aviso de Perda Permanente de Dados
Quando as configurações hardcore estão ativadas, personagens podem ser perdidos permanentemente ao morrer. Se você também ativar a perda dos Pals, seus Pals poderão ser perdidos permanentemente também.
:::

:::tip Faça um Backup Antes
Antes de alterar configurações de gameplay como o modo hardcore, é recomendado criar um backup do seu servidor ou dos dados salvos, caso a opção de backup esteja disponível para o seu serviço.
:::

## Abra o Arquivo de Configuração do Palworld

Para ativar o modo hardcore, você precisa editar o arquivo `PalWorldSettings.ini`.

Na administração do servidor de jogos da ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para **Configs**.
3. Abra o arquivo `PalWorldSettings.ini`.

:::info Arquivo de Configuração Correto
As configurações hardcore estão armazenadas em `PalWorldSettings.ini`. Se você editar outro arquivo, as alterações não serão aplicadas ao seu servidor Palworld.
:::

## Edite as Configurações Hardcore

O Palworld armazena muitas configurações de gameplay dentro da entrada de configuração `OptionSettings` no arquivo `PalWorldSettings.ini`. Você precisa definir manualmente os valores hardcore relevantes ali.

### Chaves de Configuração Necessárias

As seguintes chaves de configuração controlam o comportamento hardcore:

| Chave de Configuração | Valor | Efeito |
| --- | --- | --- |
| `bHardcore` | `True` ou `False` | Ativa ou desativa a morte permanente do jogador |
| `bPalLost` | `True` ou `False` | Ativa ou desativa a perda permanente dos Pals na morte |
| `bCharacterRecreateInHardcore` | `True` ou `False` | Permite criar um novo personagem após uma morte hardcore |

### Visão Geral dos Valores Recomendados

| Cenário | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Apenas morte permanente do jogador | `True` | `False` | `False` ou `True` |
| Hardcore completo com perda dos Pals | `True` | `True` | `False` ou `True` |
| Desativar modo hardcore | `False` | `False` | `False` |

:::note Valores True e False
Essas configurações usam valores booleanos, o que significa que você deve inserir exatamente `True` ou `False` conforme suportado pelo formato da configuração.
:::

### Exemplo de Configuração

Se as chaves já estiverem presentes no seu `OptionSettings`, altere os valores conforme necessário. Se estiverem ausentes, adicione-as dentro da mesma linha `OptionSettings`.

Exemplo:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Se sua linha `OptionSettings` já contiver muitas outras configurações, não as remova. Em vez disso, adicione ou ajuste apenas as entradas relacionadas ao hardcore dentro dos parênteses existentes.

:::caution Preserve as Configurações Existentes
O arquivo `PalWorldSettings.ini` frequentemente contém muitas configurações ativas do servidor em uma única entrada `OptionSettings`. Apagar outros valores por engano pode redefinir opções de gameplay não relacionadas no seu servidor.
:::

## Salve e Aplique as Alterações

Após editar o arquivo:

1. Salve as alterações no `PalWorldSettings.ini`.
2. Reinicie seu servidor Palworld pela administração do servidor de jogos da ZAP-Hosting.

É necessário reiniciar para que o servidor carregue a configuração hardcore atualizada.

## Verifique se o Modo Hardcore Está Ativo

Após a reinicialização, entre no seu servidor e confirme que as regras hardcore estão ativas.

### O Que Verificar

| Configuração | Comportamento Esperado |
| --- | --- |
| `bHardcore=True` | Jogadores não podem continuar normalmente após a morte |
| `bPalLost=True` | Pals são perdidos permanentemente na morte |
| `bCharacterRecreateInHardcore=True` | Um novo personagem pode ser criado após uma morte hardcore |

:::info Nota Importante Sobre o Comportamento
O resultado exato no jogo depende de quais das três configurações hardcore você ativou. Se quiser morte permanente do jogador, mas ainda permitir que os usuários comecem com um novo personagem, ative `bCharacterRecreateInHardcore=True`.
:::

## Solução de Problemas

Se o modo hardcore não funcionar como esperado, verifique os seguintes pontos.

### Confirme que o Arquivo Foi Editado Corretamente

Certifique-se de que você editou o `PalWorldSettings.ini` na área **Configs** do seu servidor Palworld da ZAP-Hosting e não outro arquivo.

### Verifique a Sintaxe

As chaves hardcore devem estar dentro da entrada `OptionSettings=(...)`. Pontuação incorreta, vírgulas faltando ou valores fora da seção correta podem impedir que o servidor as leia.

Exemplo de sintaxe válida:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Reinicie o Servidor Novamente

Se o servidor não foi reiniciado após salvar o arquivo, as novas configurações não serão carregadas. Faça uma reinicialização completa e teste novamente.

## Conclusão

Parabéns, você ativou com sucesso o modo hardcore no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂