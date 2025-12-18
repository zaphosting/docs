---
id: barotrauma-becomeadmin
title: "Barotrauma: Torne-se admin no seu próprio servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento fácil dentro do jogo → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro dele. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Configuração
Adicionar um admin é feito via o arquivo de configuração **Clientpermissions.xml**, que você encontra na interface em Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Uma nova entrada de cliente deve ser adicionada no arquivo para incluir um novo jogador. A sintaxe para isso é a seguinte:

```xml
<Client
    name="<nome do jogador>"
    steamid="<steamid>"
    permissions="<permissão(ões)>">
    <command
      name="<nome do comando>" />
  </Client>
```



A entrada do cliente contém as variáveis **Name, SteamID, Permissions e Command**. Elas devem ser modificadas. O nome pode ser definido como quiser, serve apenas como um marcador para facilitar a visualização. Depois, o SteamID64 da sua conta Steam deve ser definido.

Você pode encontrá-lo acessando seu perfil Steam e clicando com o botão direito em qualquer lugar do perfil. Lá você pode copiar a URL do perfil Steam.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Depois, a URL deve ser inserida em um dos seguintes sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Isso vai te mostrar as informações gerais da conta, assim como o Steam ID. Nesse caso, o **Steam ID 64** é o que você precisa. O Steam ID deve ser adicionado na entrada do cliente em **SteamID**. O resultado fica assim: 

```xml
<Client
    name="Nome"
    steamid="123456789"
    permissions="<permissão(ões)>">
    <command
      name="<nome do comando>" />
  </Client>
```



Agora você já é admin, mas ainda não tem direitos específicos adicionados à sua conta. Você pode adicioná-los incluindo as permissões e comandos que podem ser usados. Por exemplo, assim:

```xml
...
    permissions="<permissão(ões)>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Nome"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



Nesse exemplo, o admin recebeu acesso aos logs do servidor, console, e aos comandos heal e spawn. A seguir você encontra uma visão geral das permissões que pode configurar.



## Permissões

| Permissões       | Descrição                                                  |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | Pode iniciar/encerrar rodadas.                              |
| Kick              | Pode expulsar outros jogadores.                             |
| Ban               | Pode banir outros jogadores.                                |
| Unban             | Pode remover bans de outros jogadores.                      |
| SelectSub         | Pode escolher o submarino.                                  |
| SelectMode        | Pode escolher o modo de jogo.                               |
| ManageCampaign    | Pode selecionar o destino, missão e comprar suprimentos na loja da Campanha. |
| ConsoleCommands   | Pode usar comandos do console - atenção, você também precisa dar permissões para comandos específicos do console. |
| ServerLog         | Pode ler os logs do servidor.                               |
| ManageSettings    | Pode alterar as configurações do servidor.                  |
| ManagePermissions | Pode alterar as permissões de outros clientes.              |
| KarmaImmunity     | Fica imune aos efeitos negativos do sistema de karma, não perde karma. |
| All               | Concede todas as permissões.                               |



## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />