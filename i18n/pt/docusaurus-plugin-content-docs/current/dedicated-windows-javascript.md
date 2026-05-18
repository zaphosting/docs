---
id: dedicated-windows-javascript
title: "Configurar Ambiente JavaScript em um Servidor Windows - Execute Aplicações Web Modernas"
description: "Descubra como instalar e configurar Node.js, Deno e Bun no Windows para rodar JavaScript de forma eficiente → Saiba mais agora"
sidebar_label: Instalar JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para instalar Node.js, Deno e Bun no Windows. Os passos abaixo devem ser executados via RDP. Se você não sabe como conectar ao seu servidor via RDP, dê uma olhada no nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md).

## Instalação

Para começar, você precisa decidir qual runtime JavaScript instalar. Existem muitos recursos online que explicam cada um em detalhes. Mas você também pode seguir este guia, que inclui comandos básicos e exemplos de código. Recomendamos usar Node.js, pois é um dos mais usados e uma escolha super popular.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Instalando o Node.js Runtime

### Passo 1: Baixando os arquivos
Abra o navegador que preferir (vou usar o Chrome neste guia) e acesse [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Agora clique no botão `Download Node.js (LTS)` e aguarde o download terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Geralmente é recomendado manter sua instalação na versão mais recente de Long Term Support (LTS).
:::

### Passo 2: Instalando o Node.js
Execute o instalador clicando nele. Agora você será guiado para configurar algumas opções da instalação. Na página `Welcome`, clique em `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Leia e aceite (marcando a caixa) o Contrato de Licença do Node.js e clique em `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Depois, escolha o local para instalar o Node.js.

:::note
Recomendamos usar o local padrão da instalação.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Na próxima página, você pode optar por não instalar alguns pacotes principais do Node.js. Para uma instalação normal, que é recomendada, apenas clique em `Next`. Também terá a opção de instalar o Chocolatey, mas isso não é necessário.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Passo 3: Finalizando a instalação
Agora é só clicar em `Install` e esperar tudo ser configurado. Tenha paciência, pode levar um tempinho. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Quando terminar, clique em `Finish` na última página e comece a usar o Node.js no seu servidor.

### Atualizando o Node.js para a versão mais recente

Rodar `node -v` mostra a versão instalada do Node.js. De vez em quando, confira se está usando a última versão LTS. Para atualizar, siga novamente a seção deste [guia de Instalação JavaScript](dedicated-windows-javascript.md).

### Rodando Node.js & npm

npm é o gerenciador oficial de pacotes do Node.js. Você vai usar ele para instalar qualquer pacote da internet.

:::tip
Você pode encontrar todos os pacotes npm no [site oficial](https://www.npmjs.com/).
:::

### Criando um novo projeto

Sempre que quiser começar um projeto Node.js novo, crie uma pasta para ele usando o Explorador de Arquivos, abra o Prompt de Comando ou PowerShell nela e rode o comando `npm init` para iniciar a configuração. Ele vai pedir algumas informações básicas para criar o arquivo `package.json`, que é o arquivo de "config" para rodar o Node.js.

:::tip
No Windows, clicar uma vez no caminho atual do Explorador de Arquivos, digitar `cmd` e apertar `Enter` abre o Prompt de Comando direto na pasta, facilitando.
:::

Depois de iniciar o projeto, crie um arquivo chamado `index.js` e escreva seu código. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Agora rode o código com o comando `node .` e confira o resultado acessando `localhost:80` no seu navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Para instalar pacotes externos do npm, use `npm install [nome-do-pacote]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando o Deno Runtime

Instalar o Deno é tão simples quanto rodar `irm https://deno.land/install.ps1 | iex` dentro do PowerShell. Use a busca do Windows para encontrar o `Powershell`. Abra como administrador e execute o comando acima, seguindo as instruções que aparecerem.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Para checar a versão instalada, rode `deno --version`.
:::

### Atualizando o Deno para a versão mais recente

Atualizar o Deno é simples, basta rodar `deno upgrade`.

### Rodando Deno

Para começar a rodar Deno, crie um arquivo `index.ts` e escreva algum código. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Agora rode o código com o comando `deno run --allow-net index.ts` e confira o resultado acessando `localhost:80` no navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno foi criado para ser mais seguro e por isso exige permissões específicas, como `--allow-net` para acessar alguns módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando o Bun Runtime

O Bun também oferece um instalador super fácil com um comando só, mas também permite instalar via npm se você já usou Node.js antes.

<Tabs>
<TabItem value="command" label="Comando" default>

Rodar `irm bun.sh/install.ps1|iex` no PowerShell vai instalar o Bun no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
O servidor pode estar faltando alguns arquivos necessários. O Bun vai te avisar disso e também fornecer links para baixar esses arquivos ao tentar rodar o instalador.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Se você já tem o npm instalado, pode rodar `npm install -g bun` para instalar o Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Rodando Bun

O Bun foi feito para ser mais rápido que alguns outros engines JavaScript, mantendo uma configuração parecida com a do Node.js. Para rodar o Bun, abra uma pasta vazia e rode `bun init` no Prompt de Comando.

:::note
Dependendo da linguagem escolhida (JS ou TS), o Bun vai criar um arquivo de configuração (jsconfig.json ou tsconfig.json).
:::

Para começar a rodar Bun, crie um arquivo `index.ts` e escreva algum código. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Agora rode o código com o comando `bun index.ts` e confira o resultado acessando `localhost:80` no navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusão

Parabéns, você instalou o JavaScript com sucesso! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂