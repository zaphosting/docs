---
id: dedicated-linux-git
title: "Configurar Git em um Servidor Linux - Ative o Controle de Versão para Seus Projetos"
description: "Descubra como configurar e usar o Git para um controle de versão eficiente e colaboração sem complicações nos seus projetos → Saiba mais agora"
sidebar_label: Instalar Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Git é um sistema de controle de versão distribuído criado para gerenciar código-fonte de forma eficiente. Ele permite que desenvolvedores acompanhem mudanças, trabalhem em diferentes branches simultaneamente e colaborem em projetos de forma fluida. Graças à sua flexibilidade e desempenho, o Git se tornou a ferramenta padrão para controle de versão no desenvolvimento de software moderno.

Pensando em hospedar esse serviço você mesmo? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.



## Instale o Git com o Instalador One Click Apps

Você pode instalar o **Git** diretamente pelo nosso **Instalador One Click Apps** na interface web da sua VPS. Depois de configurar os apps iniciais, abra o catálogo de apps, busque por **Git** e inicie a implantação com as configurações de projeto, ambiente e domínio que preferir. Essa é uma forma rápida e prática de instalar e gerenciar o **Git** sem precisar usar linha de comando manualmente, aproveitando a gestão integrada via web, suporte a domínios personalizados e provisionamento SSL quando disponível.

## Preparação

Antes de configurar o **Git**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar o Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e correções de segurança, sempre faça a atualização do sistema primeiro. Para isso, rode o comando abaixo:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.



## Instalação

Agora que as preparações necessárias foram feitas, você pode seguir com a instalação do Git. Para isso, execute o comando:

```console
sudo apt install git-all -y
```

Quando a instalação terminar, verifique se o Git está funcionando corretamente abrindo um terminal ou prompt de comando. Digite o comando `git --version` e pressione Enter.

Se a instalação foi bem-sucedida, o Git vai mostrar a versão instalada. Se aparecer uma mensagem de erro ou nada for exibido, isso geralmente indica que o Git não foi instalado corretamente ou que o comando não está no caminho do sistema.

```
git --version
git version 2.51.2
```



## Configuração

Configure seu nome de usuário e e-mail do Git com os comandos abaixo, substituindo os valores de exemplo pelos seus dados. Essas credenciais ficarão vinculadas a cada commit que você fizer.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Git com sucesso na sua VPS/servidor dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [git-scm.com](https://git-scm.com/) - Site Oficial
- [git-scm.com/doc](https://git-scm.com/doc) Documentação do Git

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂