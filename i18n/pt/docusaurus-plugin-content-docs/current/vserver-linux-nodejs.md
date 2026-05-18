---
id: vserver-linux-nodejs
title: "Configurar Node.js em um Servidor Linux - Rode Aplicações Modernas em JavaScript"
description: "Descubra como configurar um ambiente estável de Node.js para aplicações escaláveis e em tempo real usando Docker e preparação do sistema → Saiba mais agora"
sidebar_label: Instalar Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Node.js é um ambiente de execução JavaScript multiplataforma e open-source que executa código JavaScript fora do navegador, como em servidores ou em ferramentas de linha de comando. Construído sobre o motor V8, ele suporta I/O assíncrono e orientado a eventos, tornando-o super eficiente para criar aplicações de rede escaláveis e em tempo real.

O paradigma “JavaScript em todo lugar” permite que desenvolvedores usem uma única linguagem tanto no backend quanto no frontend.  



<InlineVoucher />



## Preparação

Antes de configurar o **Node.js**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça a atualização do sistema primeiro. Para isso, rode o seguinte comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Depois que o processo de atualização terminar, você pode prosseguir com a instalação das dependências. O Node.js será implantado e executado na sua máquina usando uma série de containers Docker. Por isso, é necessário instalar o Docker primeiro. Para isso, rode o seguinte comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um passo a passo completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](dedicated-linux-docker.md).



## Instalação

Agora que todos os requisitos foram atendidos e as preparações necessárias feitas, você pode seguir com a instalação da aplicação Node.js.


Para usar o Node.js dentro de um ambiente isolado, primeiro você precisa baixar a imagem oficial baseada em Alpine. Rode o comando abaixo para baixar a imagem mais recente do Node.js 22 no seu sistema, deixando-a disponível para deploys em containers:

```
docker pull node:22-alpine
```

Depois, você pode iniciar um container baseado nessa imagem e abrir uma sessão shell dentro dele. Use o comando abaixo para iniciar o container com um shell interativo. A opção `--rm` garante que o container seja removido automaticamente assim que você sair, mantendo seu ambiente host limpo.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Dentro do container, verifique a versão do Node.js instalada com `node -v`, que deve mostrar `v22.19.0`. Você também pode confirmar a versão do npm rodando

`npm -v`, que deve retornar `10.9.3`. Isso confirma que a imagem fornece as versões corretas do Node.js e npm, prontas para uso imediato.





## Configuração

Depois de iniciar o container Node.js, é recomendado configurar as definições essenciais do Node.js dentro do próprio ambiente. Uma abordagem comum é definir variáveis de ambiente, por exemplo:

```
export NODE_ENV=production
```

Isso ativa o modo produção, ligando otimizações de performance e ajustando o comportamento dos logs. Para desenvolvimento, você pode definir NODE_ENV=development para aproveitar mensagens de erro detalhadas e recursos de debug.

Um diretório de projeto bem estruturado é importante, começando com um arquivo de configuração criado via:

```
npm init -y
```

Isso gera um arquivo `package.json`, que define dependências, scripts e metadados do seu projeto. É o arquivo central de configuração para qualquer aplicação Node.js.

As dependências podem ser instaladas com `npm install <package>`, enquanto dependências de desenvolvimento são adicionadas usando `npm install <package> --save-dev`. A seção `scripts` dentro do `package.json` permite definir comandos customizados, como `npm start` ou `npm run build`, para facilitar a execução e gerenciamento do projeto.

Para setups mais avançados, o Node.js pode ser customizado usando arquivos `.npmrc` ou `.nvmrc`, que permitem configurar registries privados, opções de cache ou forçar uma versão específica do Node.js. Isso garante que suas aplicações rodem consistentemente em diferentes ambientes.



## Conclusão e mais Recursos

Parabéns! Você agora instalou e configurou com sucesso o Node.js no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante o processo de configuração do seu servidor:

- [Node.js.com](https://Node.js.com/) - Site Oficial
- https://Node.js.com/help/ - Central de Ajuda Node.js (Documentação)

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂