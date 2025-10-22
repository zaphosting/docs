---
id: webspace-wordpress-migration
title: "Hospedagem de Sites: Migrando seu site WordPress para ZAP-Hosting"
description: "Descubra como migrar seu site WordPress para a Hospedagem de Sites da ZAP-Hosting sem complicações e melhore sua presença online → Saiba mais agora"
sidebar_label: Migração
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer aproveitar nossos poderosos produtos de hospedagem de sites e está pensando em migrar para a gente? Tá no lugar certo! Neste guia, vamos mostrar como migrar seu site WordPress para o produto de Hospedagem de Sites da ZAP-Hosting usando um plugin WordPress.

<InlineVoucher />

## Preparação

Antes de continuar com o guia, certifique-se de ter o seguinte preparado:
- Um domínio, com acesso de admin para gerenciar as configurações de DNS.
- Acesso de admin à sua instância antiga do WordPress.
- Ter um produto de [Hospedagem de Sites](https://zap-hosting.com/en/shop/product/webspace/) conosco.

## Passo 1: Preparando a Hospedagem de Sites

Comece visitando nossa página do produto de [Hospedagem de Sites](https://zap-hosting.com/en/shop/product/webspace/) e compre o plano de hospedagem que melhor atende às necessidades do seu site. Depois que o produto estiver configurado, você precisará instalar o WordPress nele. Leia nosso guia dedicado de [Instalação](webspace-wordpress.md) para instruções detalhadas.

Com o WordPress instalado na Hospedagem de Sites, você precisará vincular seu domínio a ele. Novamente, leia nosso guia dedicado de [Adicionar Domínio](webspace-adddomain.md) para instruções detalhadas.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Passo 2: Configurando o Plugin Migrate Guru

Para automatizar o processo de migração, você vai usar o plugin WordPress **Migrate Guru**, que é gratuito e super popular. Você precisará instalar ele tanto na sua instância antiga quanto na nova do WordPress.

:::tip Como entrar no Painel de Admin
Para entrar como admin em um site WordPress, abra seu navegador e vá até seu site. Adicione `/wp-admin` no final da URL do seu site (ex: `[seu_site].com/wp-admin`) e acesse essa página. Isso vai te levar para a página de login do admin do WordPress, onde você deve entrar com as credenciais do painel admin do seu WordPress antigo.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

No painel do WordPress, acesse a categoria **Plugins**, que fica no menu à esquerda. Agora selecione **Adicionar Novo Plugin** e na barra de busca digite **Migrate Guru**.

Quando o resultado aparecer, clique em **Instalar** e depois em **Ativar**. Faça isso nas duas instâncias do WordPress, a antiga e a nova, antes de continuar.

Depois de ativar, vai aparecer uma tela pedindo seu e-mail e para aceitar os termos e condições, preencha isso.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Passo 3: Pegando a Chave de Migração

Com o plugin Migrate Guru instalado nas duas instâncias, você precisa pegar a **Chave de Migração** que está na sua instância **nova** do WordPress na ZAP-Hosting.

Você encontra isso acessando a seção **Migrate Guru** no menu à esquerda do painel do WordPress. Copie essa chave, pois vai precisar dela no próximo passo.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Faça um Backup
Como precaução extra, recomendamos criar um backup da sua instância antiga do WordPress antes de começar a migração pelo plugin. O processo não causa perda de dados, mas é sempre melhor garantir e ter um backup à mão.
:::

## Passo 4: Processo de Migração

Volte para o painel admin da sua instância **antiga** do WordPress. Na seção **Migrate Guru**, clique no botão **Migrate** e selecione **Other Hosts** na lista.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Cole a chave de migração do Migrate Guru que você copiou da sua nova instância do WordPress na ZAP-Hosting e clique no botão **Migrate** para iniciar o processo.

:::warning
Tenha certeza de copiar a Chave de Migração do painel admin do WordPress **novo** da ZAP-Hosting e colar no painel admin do WordPress **antigo**. Se fizer ao contrário, você pode apagar dados.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Depois de clicar em **Migrate**, o processo vai começar na hora, após algumas verificações.

A migração roda em segundo plano, sem downtime, e deve terminar em poucos minutos. Tenha paciência, pois depende do tamanho do seu site. Quando terminar, vai aparecer uma tela de sucesso.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Recomendamos testar seu site com calma na nova instância do WordPress para garantir que a migração foi 100% bem-sucedida.
:::

## Passo 5: Atualizando as Configurações DNS do Domínio

Com a migração pronta, o último passo é atualizar as configurações DNS do seu domínio para apontar para a nova instância da Hospedagem de Sites. Você precisa alterar as configurações DNS do seu domínio e configurar o endereço IP da Hospedagem de Sites da ZAP-Hosting para que seu site WordPress seja servido pelo nosso servidor.

Para pegar o endereço IP da hospedagem, acesse o painel web do seu servidor na ZAP-Hosting e vá para a seção **DNS**. Lá você vai encontrar o IP da Hospedagem de Sites.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Com o IP em mãos, se seu domínio não estiver na sua conta ZAP-Hosting, faça login no site do seu provedor de domínio.

Procure a seção **Configurações DNS** ou algo parecido no provedor externo. Você vai precisar substituir o **Registro A** que aponta para seu antigo provedor de hospedagem pelo endereço IP da sua Hospedagem de Sites ZAP.

Faça isso para todos os **Registros A** que ainda apontam para a instância antiga. Depois disso, seu domínio estará pronto para funcionar com seu site WordPress na ZAP-Hosting.

:::info
Lembre-se que alterações em registros DNS podem levar até 24 horas para propagarem. Normalmente é rápido, mas às vezes demora um pouco mais.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Passo 6: Configurando o Certificado SSL

Por último, recomendamos configurar um novo certificado SSL para seu site na nova instância da Hospedagem de Sites da ZAP-Hosting. Por padrão, quando um domínio é adicionado via hospedagem, ele fica sem criptografia.

Leia nosso guia dedicado de [Criar Certificado SSL](webspace-plesk-ssl.md) para instruções detalhadas de como configurar.

## Conclusão

Seguindo este guia, você deve ter migrado com sucesso seu site WordPress antigo para sua nova Hospedagem de Sites na ZAP-Hosting. Recomendamos testar tudo com calma para garantir que a migração foi completa.

<InlineVoucher />