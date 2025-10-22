---
id: redm-licensekey
title: "RedM: Adicione sua Própria License Key"
description: "Descubra como criar e gerenciar sua própria license key do RedM para desbloquear benefícios de assinatura e personalizar seu servidor → Saiba mais agora"
sidebar_label: License Key Própria
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Por padrão, seu servidor de jogos RedM vem com uma license key gerada automaticamente. Ajustar isso e usar sua própria license key do RedM pode ser vantajoso por vários motivos, incluindo acessar os benefícios da sua assinatura RedM Element Club, como Onesync, mudar o dono do servidor para o seu nome e muito mais. Neste guia, vamos cobrir o processo de criar e adicionar sua própria license key ao seu servidor de jogos RedM.

<InlineVoucher />

## Preparação

Para começar o processo de criação da key, você deve acessar o site oficial do **[Portal Cfx.re](https://portal.cfx.re/)** e fazer login com sua conta do Fórum Cfx.re. Se ainda não tiver uma conta, pode selecionar a opção de registro para criar uma nova.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Novo Portal Cfx.re
O Portal Cfx.re é a nova casa para tudo relacionado ao RedM, substituindo as antigas soluções RedM Keymaster e Patreon. Neste novo portal, você pode gerenciar suas license keys de servidor, acessar qualquer asset que tenha comprado e gerenciar sua assinatura RedM tudo em um só lugar.

Recomendamos muito a leitura do [post oficial no blog](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) para informações sobre a migração das assinaturas Patreon para o novo Portal Cfx.re e manter seus benefícios.
:::

## Gerando a License Key

Depois de logar no portal, navegue até a seção **Servers** na barra de navegação superior para acessar a área principal de gerenciamento de keys. Isso substitui o antigo site RedM Keymaster, agora tudo em um portal completo. Você também pode atualizar qualquer license key usando a opção **Re-Activate** nesta página.

Clique no botão **Generate Key** para abrir o prompt de registro.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

No prompt, insira um nome útil para a key para facilitar a identificação no futuro. Clique em gerar quando estiver pronto.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Agora você deve ver uma nova entrada na tabela com a key que acabou de gerar. Copie a key usando os botões de ação do lado direito e deixe-a pronta para a próxima etapa.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Adicionando a Key ao Servidor

Com a license key pronta, agora você precisa substituir a license key existente no seu servidor de jogos RedM pela nova key criada. Para isso, acesse o painel txAdmin do seu servidor de jogos RedM para fazer os ajustes necessários. Ele fica disponível no dashboard da interface web do seu servidor. Use as credenciais da página para fazer login no painel.

Ao entrar na interface txAdmin, navegue até o **CFG Editor** no menu à esquerda para acessar o arquivo `server.cfg`. No editor, encontre a linha com o parâmetro `sv_licensekey` e edite com sua license key personalizada. Clique em salvar para aplicar as mudanças.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Conclusão

Depois de configurar a license key personalizada, reinicie seu servidor para começar a usá-la. Você adicionou com sucesso uma license key customizada ao seu servidor de jogos RedM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />