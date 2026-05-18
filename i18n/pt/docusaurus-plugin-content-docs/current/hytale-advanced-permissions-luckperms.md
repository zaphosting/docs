---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Permissões Avançadas usando LuckPerms"
description: "Descubra como instalar e configurar o LuckPerms para gerenciar permissões avançadas e ranks em um servidor de Hytale → Saiba mais agora"
sidebar_label: Permissões Avançadas
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Gerenciar permissões em um servidor de Hytale fica cada vez mais importante quando você começa a trabalhar com funções de staff, ranks personalizados ou perks especiais para jogadores. Enquanto o sistema padrão de permissões dentro do jogo é adequado para administração básica, ele rapidamente atinge seus limites quando você precisa de controle detalhado sobre comandos e funcionalidades.

**LuckPerms** oferece um sistema de permissões robusto e altamente personalizável para servidores de Hytale. Ele permite que você defina com precisão quais permissões e comandos diferentes jogadores ou grupos podem acessar.

<InlineVoucher />



## Instalando o LuckPerms

Para instalar os mods LuckPerms, baixe primeiro o arquivo `.jar` mais recente do LuckPerms.  
Após o download, abra o painel de controle do seu servidor e pare o servidor para fazer o upload do mod com segurança.

Navegue até a seção **Arquivos** do seu servidor e abra a pasta `mods`. Faça o upload do arquivo `.jar` do LuckPerms nessa pasta. Para uma explicação detalhada de como instalar mods, recomendamos dar uma olhada no [guia Instalar Mods](hytale-mods).

Quando o upload do arquivo estiver completo, inicie o servidor novamente. Após a inicialização, abra o console do servidor e verifique se o LuckPerms está rodando corretamente. Se instalado com sucesso, o LuckPerms exibirá mensagens de inicialização no console.



## Concedendo permissões iniciais

Após a instalação, o LuckPerms precisa ser configurado antes de ser usado efetivamente. Para começar a gerenciar permissões, você deve se conceder permissão para usar os comandos do LuckPerms. No console ou no chat do jogo, execute o seguinte comando:

```
lp user <playername> permission set luckperms.* true
```

Isso concede ao jogador selecionado acesso total aos comandos do LuckPerms.



## Usando o editor web do LuckPerms

O LuckPerms inclui um editor web que oferece uma interface prática para criar grupos e gerenciar permissões. Para gerar uma sessão do editor, digite:

```
lp editor
```

O LuckPerms vai imprimir um link gerado para o editor no console. Abra esse link no seu navegador para acessar o editor web.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Dentro do editor, copie o **link do comando** que é exibido. Volte para o console do seu servidor e cole o link do comando para estabelecer confiança e conectar a sessão do editor ao seu servidor.

```
/lp trusteditor XXXX-XXXX
```

Uma vez conectado o editor, você pode configurar usuários, grupos e permissões diretamente na interface web. Depois de fazer alterações, clique em **Apply** para salvar a configuração. Se o LuckPerms fornecer um comando apply, copie-o e cole no console do servidor para finalizar as mudanças.



## Criando um grupo admin

Abra o link do editor no seu navegador e navegue até a seção **Groups**. Crie um novo grupo usando o ícone de mais e defina o nome do grupo como `admin`. Você pode configurar opcionalmente detalhes adicionais como nome de exibição, peso, grupo pai e prefixo/sufixo.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Após criar o grupo, selecione o grupo `admin` no editor e adicione permissões. Para conceder permissões completas do Hytale ao grupo, insira:

```
hytale.*
```

Essa permissão concede acesso total a todas as permissões do Hytale. Depois de adicionar as permissões, atribua um jogador ao grupo.  
No editor, abra a seção **Users**, selecione o usuário desejado e adicione o grupo `admin` em **Parent groups**.

Por fim, clique em **Apply** para salvar suas alterações. Se solicitado, cole o comando apply no console do servidor.



## Comandos comuns do LuckPerms

O LuckPerms pode ser gerenciado tanto pelo editor web quanto diretamente via comandos. Os seguintes comandos são usados com frequência para gerenciar permissões:

| Comando                                                      | Descrição                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Adiciona o jogador ao grupo de permissões.                    |
| `/lp user <playername> parent remove <group>`                | Remove o jogador do grupo de permissões.                      |
| `/lp user <playername> permission set <permission>`          | Concede a permissão ao jogador.                               |
| `lp user <playername> permission settemp <permission> true <duration>` | Concede uma permissão temporária ao jogador com duração, como `1h` para 1 hora ou `1m` para 1 minuto. |
| `/lp user <playername> permission unset <permission>`        | Remove a permissão do jogador.                                |
| `/lp group <group> permission set <permission>`              | Concede a permissão ao grupo.                                 |
| `/lp group <group> permission unset <permission>`            | Remove a permissão do grupo.                                  |



## Conclusão

LuckPerms é uma solução poderosa para gerenciamento avançado de permissões em servidores de Hytale. Usando grupos, permissões e o editor web, você pode criar um sistema de funções estruturado que cresce junto com sua comunidade.

Uma vez configurado, o LuckPerms facilita a manutenção de ranks de staff, perks para jogadores e controle de acesso, mantendo a administração do servidor limpa, consistente e com bom desempenho.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />