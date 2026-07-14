---
id: palworld-spectate-mode
title: "Palworld: Modo Espectador"
description: "Aprenda a usar o modo espectador no Palworld, configure a senha de administrador necessária e entre no modo espectador no seu servidor. -> Saiba mais agora"
sidebar_label: Palworld: Modo Espectador
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O modo espectador no Palworld permite que você observe os jogadores no seu servidor sem participar ativamente. Neste guia, você vai aprender como preparar o acesso de administrador, onde verificar a configuração necessária na interface da ZAP-Hosting e como entrar e sair do modo espectador dentro do jogo.

## Preparação

Antes de usar o modo espectador, você precisa ter acesso de administrador no seu servidor Palworld. Isso requer que uma senha válida `AdminPassword` esteja configurada na configuração do seu servidor.

Se ainda não configurou isso, certifique-se de revisar primeiro as configurações do seu servidor Palworld e a configuração do administrador.

:::info Acesso de Administrador Necessário
O modo espectador está disponível apenas para administradores. Se você não fizer login como admin primeiro, o comando de espectador não funcionará.
:::

## Verifique a configuração necessária do servidor

Embora o modo espectador em si não exija uma configuração dedicada para ser ativado, seu servidor deve ter uma senha de administrador configurada para que você possa se autenticar como administrador.

### Abra o arquivo de configuração na interface da ZAP

No painel web do seu servidor de jogos ZAP-Hosting, abra a seção **Configs**. A configuração relevante do Palworld está armazenada no arquivo:

`PalWorldSettings.ini`

Dependendo do template do servidor e da versão do jogo, este arquivo contém as principais opções do servidor, incluindo a entrada da senha de administrador.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifique a entrada da senha de administrador

Dentro do `PalWorldSettings.ini`, procure a seção `OptionSettings` e verifique se o valor `AdminPassword` está definido.

Um exemplo típico é este:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[sua_senha_de_admin]")
```

Se seu arquivo já contiver muitas opções em uma única linha `OptionSettings=(...)`, você só precisa garantir que a entrada `AdminPassword` exista e contenha a senha escolhida.

:::caution Preserve a Sintaxe Existente
Não remova outros valores existentes na linha `OptionSettings`. O Palworld normalmente armazena várias configurações na mesma entrada, então você deve apenas adicionar ou editar o valor `AdminPassword` com cuidado.
:::

### Referência de configuração

| Arquivo | Localização na interface ZAP | Chave necessária | Propósito |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Permite autenticar como admin e usar o modo espectador |

## Salve as alterações e reinicie o servidor

Se você alterou o `AdminPassword` no `PalWorldSettings.ini`, salve o arquivo e reinicie seu servidor Palworld pela interface web da ZAP-Hosting.

É necessário reiniciar para que a configuração atualizada seja carregada pelo servidor.

:::note Necessidade de Reinício
Se você não fez alterações no arquivo de configuração e a senha de administrador já estava configurada corretamente, não é necessário reiniciar para o modo espectador funcionar.
:::

## Faça login como administrador

Quando o servidor estiver online, conecte-se ao seu servidor Palworld no jogo normalmente. Para usar o modo espectador, você deve se autenticar com a senha de administrador configurada anteriormente.

O comando exato de login de admin pode variar dependendo da implementação atual do Palworld e do comportamento da interface. Se seu servidor exigir autenticação manual de admin após entrar, use a senha configurada no comando de admin apropriado ou no prompt de login de admin suportado pela versão atual do seu servidor.

:::info Sobre a Autenticação de Admin
Referências atuais de terceiros confirmam que o modo espectador requer privilégios de admin e que o `AdminPassword` deve estar configurado. Porém, se sua versão atual do servidor usa um comando específico para login de admin, siga o formato suportado pela sua versão instalada do Palworld.
:::

## Entre no modo espectador

Depois de conectado como administrador, você pode ativar o modo espectador de uma das seguintes formas.

### Use o atalho do teclado

Pressione a tecla `\` para entrar no modo espectador.

### Use o comando

Alternativamente, use o seguinte comando dentro do jogo:

```text
/togglespectate
```

Este comando alterna o modo espectador ligado ou desligado para sua sessão atual, desde que você esteja autenticado como admin.

### Referência dos comandos do modo espectador

| Ação | Método | Requisito |
| --- | --- | --- |
| Entrar no modo espectador | Pressione `\` | Privilégios de admin |
| Alternar modo espectador | `/togglespectate` | Privilégios de admin |
| Sair do modo espectador | Pressione `Esc` | Modo espectador ativo |

:::tip Quando Usar o Modo Espectador
O modo espectador é útil se você quiser monitorar jogadores, investigar denúncias ou observar a atividade no seu servidor sem interferir no gameplay.
:::

## Saia do modo espectador

Para sair do modo espectador e voltar ao gameplay normal, pressione `Esc`.

Se necessário, você também pode usar `/togglespectate` novamente para desligar o modo, dependendo do comportamento atual do seu servidor.

## Solução de problemas

Se o modo espectador não funcionar, verifique os seguintes pontos.

### Confirme que a senha de admin está configurada

Abra o `PalWorldSettings.ini` novamente pela seção **Configs** e certifique-se de que `AdminPassword` está presente e não está vazio.

### Reinicie após alterar a configuração

Se você editou o arquivo de configuração recentemente, reinicie o servidor antes de testar novamente.

### Certifique-se de estar autenticado como admin

Ter um `AdminPassword` configurado nem sempre é suficiente. Você também precisa ser reconhecido pelo servidor como um administrador ativo durante sua sessão.

### Verifique sua entrada de tecla

Em alguns layouts de teclado, a tecla `\` pode estar em posição diferente. Se o atalho não responder, use `/togglespectate` em vez disso.

:::caution Diferenças de Versão
O Palworld ainda está sujeito a mudanças no gameplay e no servidor. Se o modo espectador ou o comportamento do admin forem diferentes no seu servidor, verifique se ele está atualizado e se a versão atual do jogo alterou os comandos ou permissões relacionadas.
:::

## Conclusão

Parabéns, você usou com sucesso o modo espectador no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!