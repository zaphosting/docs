---
id: vserver-ssh-default
title: "VPS: Gerencie as Chaves SSH Padrão no Perfil"
description: "Descubra como automatizar a configuração das Chaves SSH para acesso mais rápido ao servidor e instalações de produtos simplificadas com a ZAP-Hosting → Saiba mais agora"
sidebar_label: Chaves SSH Padrão
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Uma das novidades recentes na nossa interface web da ZAP-Hosting é a possibilidade de adicionar Chaves SSH padrão na sua conta diretamente pelo site. A vantagem incrível disso é que as Chaves SSH configuradas na sua página de Perfil serão automaticamente aplicadas por padrão durante a primeira configuração do produto ou reinstalação do sistema operacional. Isso economiza seu tempo, pois você não precisará configurar suas Chaves SSH manualmente.

<InlineVoucher />

## Requisitos
Para usar esse recurso, você precisa ter uma Chave SSH gerada. Se já tiver uma Chave SSH pronta, pode seguir para a próxima seção.

Para gerar uma Chave SSH, recomendamos acessar a seção **Informações->Acesso & Segurança** na interface web do seu vServer.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Aqui, você verá um botão verde **Gerar Chave SSH**. Ao clicar nesse botão, sua Chave Privada SSH será automaticamente baixada para o seu PC. Essa é a chave que você usará para se conectar ao seu servidor assim que o SSH estiver configurado.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Agora você deve salvar a Chave Pública que aparece na tela, pois é ela que você precisará enviar ao criar a Chave SSH no seu perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Siga para a próxima seção quando estiver pronto.

## Gerenciando a Chave SSH no Perfil
Gerenciar suas Chaves SSH padrão na sua conta é simples. Vá para sua **[página de Perfil da ZAP-Hosting](https://zap-hosting.com/en/customer/home/profile/)** e role até encontrar a seção **Chaves SSH Padrão**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Adicionando uma nova chave
Para adicionar uma chave, primeiro clique no ícone verde de mais para abrir o prompt de criação. Nesse prompt, escolha um nome apropriado para sua Chave SSH.

Depois, cole sua Chave Pública SSH no segundo campo. Sua Chave SSH deve estar no formato OpenSSH, começando com `ssh-rsa` e terminando com um sufixo. Quando estiver pronto, clique no botão verde **Salvar** para adicionar a chave.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Certifique-se de enviar sua **Chave Pública SSH** e não a Chave Privada SSH. A Chave Privada SSH é usada durante o login para autenticar com sua Chave Pública.
:::

Você adicionou com sucesso uma Chave SSH padrão na sua conta ZAP-Hosting.

### Editando ou removendo uma chave
Para editar uma chave, basta clicar no ícone azul de olho que abrirá um prompt. Nesse prompt, você pode ver os detalhes atuais e editar diretamente, salvando as alterações.

Da mesma forma, para deletar uma chave, clique no ícone vermelho de lixeira que removerá essa chave específica.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />