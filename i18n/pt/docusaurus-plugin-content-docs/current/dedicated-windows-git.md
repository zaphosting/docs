---
id: dedicated-windows-git
title: "Servidor Dedicado: Configurar Git no Windows"
description: "Descubra como configurar e ajustar o Git para um controle de versão eficiente e colaboração sem complicações nos seus projetos → Saiba mais agora"
sidebar_label: Instalar Git
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Git é um sistema de controle de versão distribuído criado para gerenciar código-fonte de forma eficiente. Ele permite que desenvolvedores acompanhem mudanças, trabalhem em diferentes branches simultaneamente e colaborem em projetos de forma tranquila. Graças à sua flexibilidade e desempenho, o Git se tornou a ferramenta padrão para controle de versão no desenvolvimento de software moderno.

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

<InlineVoucher />

## Preparação

Antes de configurar o **Git**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça as atualizações do sistema primeiro. Isso assegura que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.

## Instalação

Agora que as preparações necessárias foram feitas, você pode seguir com a instalação do aplicativo Git. Para isso, baixe o Git para Windows (x64) aqui: https://git-scm.com/downloads/win 

Depois, execute o instalador do arquivo baixado e siga os passos indicados.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Quando a instalação terminar, verifique se o Git está funcionando corretamente abrindo um terminal ou prompt de comando. Digite o comando `git --version` e pressione Enter.

Se a instalação foi bem-sucedida, o Git vai mostrar a versão instalada. Se aparecer uma mensagem de erro ou nada for exibido, geralmente significa que o Git não foi instalado direito ou que o comando não está incluído no caminho do sistema.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)

## Configuração

Configure seu nome de usuário e email do Git com os comandos abaixo, substituindo os valores de exemplo pelos seus dados. Essas credenciais vão ficar vinculadas a cada commit que você fizer.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Git com sucesso no seu servidor dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor.

- [git-scm.com](https://git-scm.com/) - Site Oficial
- [git-scm.com/doc](https://git-scm.com/doc) Documentação do Git

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nossa equipe de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />