---
id: vserver-windows-javascript
title: 'VPS: Instalação do JavaScript'
description: "Descubra como instalar Node.js, Deno e Bun no Windows para configurar seu ambiente de execução JavaScript de forma eficiente → Saiba mais agora"
sidebar_label: Instalar JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação do Node.js, Deno e Bun no Windows. Os passos abaixo devem ser executados via RDP; se você não sabe como conectar ao seu servidor via RDP, dê uma olhada no nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## Instalação

Para começar, você precisa decidir qual runtime JavaScript deseja instalar. Existem muitos recursos online que explicam cada um em detalhes. Mas você também pode seguir este guia, que inclui comandos básicos e exemplos de código. Recomendamos usar o Node.js, pois é um dos mais usados e uma escolha super popular.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Instalando o Node.js Runtime

### Passo 1: Baixando os arquivos
Abra o navegador de sua preferência (vou usar o Chrome neste guia) e acesse [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Agora clique no botão `Download Node.js (LTS)` e aguarde o download terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Geralmente, é recomendado manter sua instalação na versão mais recente de Long Term Support (LTS).
:::

### Passo 2: Instalando o Node.js
Execute o instalador clicando nele. Agora você será solicitado a configurar algumas opções para a instalação. Na página `Welcome`, clique em `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Agora você precisa ler e aceitar (marcando a caixa) o Contrato de Licença do Node.js e depois clicar em `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Depois disso, será pedido um local para instalar o Node.js.

:::note
Recomendamos usar o local padrão de instalação.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Na próxima página, você pode optar por não instalar alguns pacotes principais do Node.js. Se quiser uma instalação normal, que é o recomendado, apenas clique em `Next`. Você também terá a opção de instalar o Chocolatey, mas isso não é necessário.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Passo 3: Finalizando a instalação
Agora é só clicar em `Install` e esperar tudo ser configurado. Tenha paciência, pode levar um tempinho. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Quando terminar, clique em `Finish` na última página e comece a usar o Node.js no seu servidor.

### Atualizando o Node.js para a versão mais recente

Rodar `node -v` mostrará a versão instalada do Node.js. De vez em quando, verifique se está usando a última versão LTS. Para atualizar o Node.js, siga novamente a seção de [instalação](vserver-windows-javascript.md).

### Usando Node.js & npm

npm é o gerenciador oficial de pacotes do Node.js. Você vai usá-lo para instalar qualquer pacote da internet.

:::tip
Você pode encontrar todos os pacotes npm no [site oficial](https://www.npmjs.com/).
:::

### Criando um novo projeto

Sempre que quiser começar um novo projeto Node.js, crie uma nova pasta usando o Explorador de Arquivos, abra o Prompt de Comando ou PowerShell nela e rode o comando `npm init` para iniciar a configuração. Ele vai pedir algumas informações básicas para criar o arquivo `package.json`, que é o arquivo de "configuração" para rodar o Node.js.

:::tip
No Windows, clicando uma vez no caminho atual do Explorador de Arquivos e digitando `cmd` seguido de `Enter` abre o Prompt de Comando direto na pasta atual, facilitando a vida.
:::

Depois de inicializar o projeto, crie um arquivo chamado `index.js` e escreva seu código nele. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código abaixo.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Agora você pode rodar o código com o comando `node .` e conferir o resultado acessando `localhost:80` no seu navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Para instalar pacotes externos do npm, use o comando `npm install [nome-do-pacote]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalando o Deno Runtime

Instalar o Deno é tão simples quanto rodar `irm https://deno.land/install.ps1 | iex` dentro do PowerShell. Use a barra de busca do Windows para procurar por `Powershell`. Abra o prompt como administrador e execute o comando acima, seguindo as instruções que aparecerem.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Para checar a versão instalada, rode `deno --version`.
:::

### Atualizando o Deno para a versão mais recente

Atualizar o Deno é simples, basta rodar `deno upgrade`.

### Usando o Deno

Para começar a usar o Deno, crie um arquivo `index.ts` e escreva algum código nele. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código abaixo.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Agora você pode rodar o código com o comando `deno run --allow-net index.ts` e conferir o resultado acessando `localhost:80` no navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
O Deno foi criado para ser mais seguro e por isso exige permissões específicas como `--allow-net` para acessar alguns módulos.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalando o Bun Runtime

O Bun também oferece um instalador super fácil com um comando só, mas também permite instalar via npm se você já usou Node.js antes.

<Tabs>
<TabItem value="command" label="Comando" default>

Rodar `irm bun.sh/install.ps1|iex` dentro do PowerShell vai instalar o Bun no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
O servidor pode estar faltando alguns arquivos necessários. O Bun vai te informar isso e também fornecer links para baixar esses arquivos ao tentar rodar o instalador.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Se você já tem o npm instalado, pode rodar `npm install -g bun` para instalar o Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Usando o Bun

O Bun foi feito para ser mais rápido que alguns outros motores JavaScript, mantendo uma configuração parecida com a do Node.js. Para rodar o Bun, abra uma pasta vazia e execute `bun init` no Prompt de Comando.

:::note
Dependendo da linguagem escolhida (JS ou TS), o Bun vai criar um arquivo de configuração (jsconfig.json ou tsconfig.json).
:::

Para começar a usar o Bun, crie um arquivo `index.ts` e escreva algum código nele. Como exemplo, vamos criar um servidor http simples na porta padrão 80 que responde com uma mensagem de teste quando acessado via localhost. Veja o código abaixo.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Agora você pode rodar o código com o comando `bun index.ts` e conferir o resultado acessando `localhost:80` no navegador.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## Conclusão

Parabéns, você instalou e configurou o JavaScript no seu VPS com sucesso! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />