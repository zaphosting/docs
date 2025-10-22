---
id: voiceserver-query
title: "Servidor de Voz: Acesso ao TeamSpeak Query"
description: "Descubra como gerenciar seu servidor TeamSpeak externamente usando o Login Query para um controle e administração eficientes → Saiba mais agora"
sidebar_label: Login Query
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O login query do TeamSpeak permite que você acesse a interface de consulta do servidor, onde pode gerenciar seu servidor TeamSpeak externamente via comandos.

:::warning Acesso Query de Admin do Servidor
Nossos produtos de Servidor TeamSpeak não incluem acesso ao Query de Admin do Servidor. 
:::

<InlineVoucher />

## Detalhes do login

<Tabs>
<TabItem value="Webinterface" label="Produto Servidor TeamSpeak" default>

Por questões de segurança, o login **Server Admin Query** não está disponível com o **produto servidor TeamSpeak**. Porém, se você tem direitos de admin no seu servidor TeamSpeak, pode criar seu próprio Login Query seguindo os passos abaixo.

:::info
Recursos como importar snapshot, alterar slots/portas e similares não estão disponíveis. Essas configurações são pré-definidas por nós e não podem ser ajustadas manualmente. 
:::

Para criar seu próprio Login Query, clique em "Server Query Login" no Cliente TeamSpeak em Ferramentas.
Depois, insira um nome para o login, que também será o nome de login, por exemplo, "MeuLoginQuery":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Após confirmar com "OK", uma senha será exibida. Essa senha deve ser salva, pois não poderá ser alterada depois.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Com os dados de login criados, você pode estabelecer uma conexão, por exemplo, via [YaTQA](https://yat.qa). Para isso, são necessários o IP do servidor, a porta Query, a porta do servidor e o nome e senha do login Query.

O IP do servidor, a porta Query e a porta do servidor podem ser vistos no Dashboard da interface web:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Self hosted (VPS/Servidor dedicado)">

Se o servidor TeamSpeak foi instalado no seu próprio VPS ou servidor dedicado via interface web, o "Server Admin Query" normal pode ser usado. Os dados de login podem ser encontrados na interface web da instância TeamSpeak.

</TabItem>
</Tabs>

## Acessando o Query

Preencha os dados de login fornecidos/criados para seu Login Query em Conexão Rápida no aplicativo **YatQA** e clique no botão **Conectar**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Erro de Porta Query Customizada
Por padrão, um erro pode ocorrer após uma instalação inicial se você especificar uma porta diferente da porta query padrão. Isso é normal e pode ser resolvido da seguinte forma:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusão

Você estabeleceu com sucesso uma conexão ao query usando o YatQA. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />