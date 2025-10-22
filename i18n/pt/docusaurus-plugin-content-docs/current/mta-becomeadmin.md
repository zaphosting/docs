---
id: mta-becomeadmin
title: "Multi Theft Auto: Torne-se admin nos servidores MTA"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gestão eficiente do jogo → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-mta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis fornecidas pelo jogo diretamente dentro do jogo. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

### Preparação

Primeiro, é necessário criar uma conta de usuário que receberá os direitos de admin posteriormente. Para isso, execute o seguinte comando no Console Live:

```
addaccount [options] <PASSWORD>
```

O Console Live pode ser encontrado no dashboard do servidor de jogos na interface enquanto o servidor está rodando. Ele se parece com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/KHcBA5p5ZC4pJ4R/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/tKLHyoSandPpfx2/preview)




### Configuração

Depois que a conta for criada, ela precisa ser adicionada ao Grupo Admin na configuração **acl.xml**. Para isso, conecte-se ao servidor via FTP e abra o arquivo. O arquivo está localizado em **gXXXX/gtamta/mods/deathmatch/**. Se você ainda não sabe o que é um cliente FTP e como usá-lo, confira este guia: [Acesso a arquivos FTP](gameserver-ftpaccess.md)

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
</group>
```

Lá você precisa adicionar um objeto de usuário para atribuir o usuário ao Grupo Admin:

```
<object name="user.BENUTZERNAME"></object>
```

No lugar do nome de usuário, digite o seu próprio nome de usuário. O resultado deve ficar assim:

```
<group name="Admin">
    <acl name="Moderator"></acl>
    <acl name="SuperModerator"></acl>
    <acl name="Admin"></acl>
    <acl name="RPC"></acl>
    <object name="resource.admin"></object>
    <object name="resource.webadmin"></object>
    <object name="resource.acpanel"></object>
    <object name="user.Benutzername"></object>
</group>
```



### Login como admin

Agora que você finalizou a configuração do arquivo **acl.xml**, pode iniciar seu jogo/servidor e conectar ao seu servidor. Depois, faça login com o seguinte comando:

```
login USERNAME PASSWORD
```

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso suporte, que está disponível diariamente para te ajudar! 🙂


<InlineVoucher />