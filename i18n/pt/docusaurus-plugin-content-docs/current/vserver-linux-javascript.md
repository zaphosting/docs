---
id: vserver-linux-javascript
title: 'VPS: Instalação do JavaScript'
description: "Descubra como instalar e configurar Node.js, Deno e Bun no seu servidor para uma gestão eficiente do runtime JavaScript → Saiba mais agora"
sidebar_label: Instalar JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação do Node.js, Deno e Bun. Esses comandos devem ser executados via SSH, se você não sabe como conectar ao seu servidor via SSH, dê uma olhada no nosso [guia de Acesso inicial (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Preparação

Antes de instalar qualquer coisa no servidor, é recomendado rodar o comando de atualização correspondente ao seu sistema operacional para manter seu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalação

Para começar, você precisa decidir qual runtime JavaScript instalar. Existem muitos recursos online que explicam cada um em detalhes. Mas você também pode seguir este guia, pois ele inclui comandos básicos de uso e exemplos de código. Recomendamos usar o NodeJS, pois é um dos mais usados e uma escolha super popular.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Instalando o Node.js Runtime

Você pode instalar o Node.js via gerenciador de pacotes da sua distro Linux ou usando o nvm. Recomendamos usar o apt, pois geralmente é mais fácil.

<Tabs>
<TabItem value="apt" label="Gerenciador de Pacotes" default>

Execute o comando abaixo para começar a instalar o Node.js via gerenciador de pacotes.

```
apt install nodejs -y
```

Para instalar pacotes Node.js para seus projetos, você também vai precisar instalar o gerenciador de pacotes npm.

```
apt install npm
```

### Atualizando o Node.js para a versão mais recente

Rodar `node -v` mostra a versão instalada do Node.js. Geralmente não é a mais recente, então você vai querer atualizar para ter os recursos mais novos. Felizmente, o pacote npm `n` oferece uma forma bem fácil de fazer isso.

Primeiro, instale ele rodando `npm install -g n` e depois rode `n [versão]`, substituindo `[versão]` pelo número da versão desejada, para instalar qualquer versão do Node.js.

:::tip
Geralmente é recomendado manter sua instalação na versão Long Term Support mais recente. Você pode fazer isso rodando `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Instalar o Node.js via nvm oferece um controle mais detalhado para ter diferentes versões do Node.js com seus próprios pacotes.

Primeiro, certifique-se de que o curl está instalado no seu sistema e rode o comando abaixo.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Isso vai baixar e rodar o script de instalação do nvm do GitHub.

:::note
Se os comandos do nvm não funcionarem após a instalação, rode `source ~/.bashrc` para recarregar o arquivo de configuração do bash.
:::

Assim como no método anterior, você pode rodar o comando (`nvm install v[versão]`) para instalar qualquer versão do Node.js. Para ver todas as versões disponíveis para download, rode `nvm list-remote`. Para ver as versões instaladas, rode `nvm list`.

:::tip
Instalar a versão Long Term Support pode ser feito com `nvm install --lts`
:::

</TabItem>
</Tabs>

### Rodando Node.js & npm

O npm é o gerenciador oficial de pacotes do Node.js. Você vai usar ele para instalar qualquer pacote da internet.

:::note
Você pode encontrar todos os pacotes npm no [site oficial](https://www.npmjs.com/).
:::

### Criando um novo projeto

Sempre que quiser começar um novo projeto Node.js, crie uma nova pasta para ele (`mkdir [nome-do-projeto]`) ou entre numa pasta vazia com `cd` e rode o comando `npm init` para iniciar a configuração. Ele vai pedir algumas informações básicas para criar o arquivo `package.json`. Esse será o arquivo "config" para rodar o Node.js.

Depois de iniciar o projeto, crie um arquivo chamado `index.js` e escreva seu código dentro. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja abaixo.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Olá dos Docs da ZAP-Hosting =)')
})

server.listen(80)
```

Agora você pode rodar o código com o comando `node .` e conferir o resultado acessando `localhost:80` no seu navegador.

:::tip
Instalar pacotes externos do npm é feito com `npm install [nome-do-pacote]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando o Deno Runtime

Instalar o Deno é tão simples quanto rodar `curl -fsSL https://deno.land/install.sh | sh` no seu terminal.

:::tip
Para checar a versão instalada, rode `deno --version`.
:::

### Atualizando o Deno para a versão mais recente

Atualizar o Deno é simples, basta rodar `deno upgrade`.

### Rodando Deno

Para começar a rodar Deno, crie um arquivo `index.ts` e escreva algum código nele. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja abaixo.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Olá dos Docs da ZAP-Hosting =)')
})
```

Agora você pode rodar o código com o comando `deno run --allow-net index.ts` e conferir o resultado acessando `localhost:80` no navegador.

:::info
O Deno foi criado para ser mais seguro e por isso requer permissões específicas como `--allow-net` para acessar alguns módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando o Bun Runtime

O Bun oferece 2 formas oficiais de instalação, via curl ou npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Rodar `curl -fsSL https://bun.sh/install | bash` vai instalar o Bun no seu servidor.

:::tip
Para instalar outras versões do Bun, rode `curl -fsSL https://bun.sh/install | bash -s "bun-v[versão]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Se você já tem o npm instalado, pode rodar `npm install -g bun`.

</TabItem>
</Tabs>

### Rodando Bun

O Bun foi feito para ser mais rápido que alguns outros engines JavaScript, mantendo uma configuração parecida com o Node.js. Para rodar o Bun, abra uma pasta vazia e rode `bun init`.

:::note
Dependendo da linguagem escolhida (JS ou TS), o Bun vai criar um arquivo de configuração (jsconfig.json ou tsconfig.json).
:::

Para começar a rodar Bun, crie um arquivo `index.ts` e escreva algum código nele. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja abaixo.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Olá dos Docs da ZAP-Hosting =)')
  },
})
```

Agora você pode rodar o código com o comando `bun index.ts` e conferir o resultado acessando `localhost:80` no navegador.

</TabItem>
</Tabs>


## Conclusão

Parabéns, você instalou e configurou o JavaScript com sucesso! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />