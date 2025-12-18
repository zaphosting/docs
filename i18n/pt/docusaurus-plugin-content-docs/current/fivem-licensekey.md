---
id: fivem-licensekey
title: "FiveM: Adicionar Chave de Licença Personalizada"
description: "Descubra como criar e gerenciar sua própria chave de licença FiveM para desbloquear benefícios de assinatura e personalizar a configuração do seu servidor → Saiba mais agora"
sidebar_label: Chave de Licença Própria
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Por padrão, seu servidor de jogos FiveM vem com uma chave de licença gerada automaticamente. Ajustar isso e usar sua própria chave de licença FiveM pode ser vantajoso por vários motivos, incluindo acessar os benefícios da sua assinatura do FiveM Element Club, como Onesync, mudar o dono do servidor para o seu nome e muito mais. Neste guia, vamos cobrir o processo de criação e adição da sua própria chave de licença ao seu servidor de jogos FiveM.

<InlineVoucher />

## Preparação

Para começar o processo de criação da chave, você deve acessar o site oficial do **[Portal Cfx.re](https://portal.cfx.re/)** e fazer login com sua conta do Fórum Cfx.re. Se ainda não tiver uma conta, pode selecionar a opção de registro para criar uma nova.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Novo Portal Cfx.re
O Portal Cfx.re é a nova casa para tudo relacionado ao FiveM, substituindo as antigas soluções do FiveM Keymaster e Patreon. Neste novo portal, você pode gerenciar suas chaves de licença do servidor, acessar qualquer asset que tenha comprado e gerenciar sua assinatura FiveM tudo em um só lugar.

Recomendamos fortemente a leitura do [post oficial no blog](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) para informações sobre a migração das assinaturas Patreon para o novo Portal Cfx.re e manter seus benefícios.
:::

## Gerando a Chave de Licença

Depois de logar no portal, navegue até a seção **Servers** pela barra de navegação superior para acessar a área principal de gerenciamento de chaves. Isso substitui o antigo site FiveM Keymaster em um portal tudo-em-um bem prático. Você também pode atualizar qualquer chave de licença usando a opção **Re-Activate** nesta página.

Selecione o botão **Generate Key** para abrir o prompt de registro.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

No prompt, insira um nome útil para a chave para ajudar a identificá-la facilmente no futuro. Clique no botão gerar quando estiver pronto.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Agora você deve ver uma nova entrada na tabela com a chave que acabou de gerar. Copie a chave usando os botões de ação do lado direito e deixe-a pronta para a próxima etapa.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Adicionando a Chave ao Servidor

Com a chave de licença pronta, agora você precisa ajustar a chave de licença existente no seu servidor de jogos FiveM e substituir pela chave recém-criada. Para isso, acesse o painel txAdmin do seu servidor de jogos FiveM para fazer as alterações necessárias. Ele pode ser encontrado no dashboard da interface web do seu servidor de jogos. Use as credenciais da página para fazer login no painel.

Ao entrar na interface txAdmin, navegue até o **CFG Editor** no menu à esquerda para acessar o arquivo `server.cfg`. No editor, encontre a linha com o parâmetro `sv_licensekey` e edite com sua chave de licença personalizada. Clique no botão salvar quando terminar para aplicar as mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Conclusão

Depois de configurar a chave de licença personalizada, reinicie seu servidor para começar a utilizá-la. Você adicionou com sucesso uma chave de licença personalizada ao seu servidor de jogos FiveM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />