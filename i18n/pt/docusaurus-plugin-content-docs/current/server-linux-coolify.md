---
id: server-linux-coolify
title: "Configurar Coolify em um Servidor Linux - Aplicações Cloud Self-Hosted"
description: "Descubra como instalar e configurar o Coolify para hospedar suas próprias aplicações, bancos de dados e serviços com facilidade → Saiba mais agora"
sidebar_label: Instalar Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

[Coolify](https://coolify.io/) é uma alternativa open-source e self-hosted ao Heroku e Vercel que permite gerenciar seus servidores, aplicações e bancos de dados com facilidade.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

O dashboard intuitivo do Coolify torna o self-hosting simples. Ele te dá controle total sobre sua infraestrutura, deploys automáticos via GitHub e mantém seus custos na nuvem baixos.

Neste guia, vamos te mostrar passo a passo como configurar, pré-configurar sua conta admin e ajustar tudo que você precisa saber.

<InlineVoucher />

## Casos de uso do Coolify

O Coolify pode ser usado em vários cenários do dia a dia e é ideal para quem quer automatizar deploys de aplicações, hospedar bancos de dados ou rodar workers em background. É perfeito tanto para iniciantes quanto para experts.

Ele oferece suporte nativo para deploy de Sites Estáticos, Node.js, Python, PHP, Rust e containers Docker. Vem com templates populares de um clique como WordPress, Ghost, Grafana, Appwrite, Nextcloud e bancos PostgreSQL. Também gerencia automaticamente certificados SSL Let's Encrypt e roteamento via proxy reverso com Traefik.

## Preparação

Embora o Coolify seja leve no básico, o uso de recursos pode aumentar bastante dependendo da quantidade de aplicações, builds Docker e bancos rodando ao mesmo tempo. Recomendamos os seguintes requisitos de hardware para hospedar o Coolify no seu VPS/servidor dedicado.

| Hardware   | Mínimo      | Recomendado               |
| ---------- | ----------- | ------------------------- |
| CPU        | 2 núcleos vCPU | 4 núcleos vCPU          |
| RAM        | 2 GB        | 4 GB+                     |
| Espaço em disco | 30 GB    | 50 GB+                    |

<InlineServiceLink />

Antes de instalar o Coolify, conecte-se ao seu servidor e garanta que o sistema operacional esteja atualizado. Você deve acessar seu servidor via SSH com privilégios root. Temos um guia sobre [Acesso Inicial SSH](vserver-linux-ssh.md) caso precise de ajuda nessa etapa.

:::tip[Autenticação por Chave SSH]
Recomendamos **fortemente** configurar uma chave SSH ao invés de senha para autenticação. Veja como fazer isso no nosso tutorial de [Configuração de Chave SSH](vserver-linux-sshkey.md).
:::

## Instalação

Depois de conectado ao servidor, atualize os pacotes do sistema e instale o `curl`, que é necessário para baixar o script de instalação do Coolify:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### Prepare as Credenciais do Usuário Admin

O Coolify aplica políticas de segurança rígidas para a conta de administrador. Antes de rodar o comando de instalação, prepare as credenciais do usuário root do Coolify conforme os requisitos abaixo:

* **Nome de usuário**
  * Mínimo: 3 caracteres
  * Máximo: 255 caracteres
  * Pode conter apenas letras, números, espaços, underscores e hífens
* **Email**
  * Deve ser um endereço de email válido
  * Deve ter um registro DNS válido
  * Máximo: 255 caracteres
* **Senha**
  * Mínimo: 8 caracteres
  * Deve conter letras maiúsculas e minúsculas
  * Deve conter pelo menos um número
  * Deve conter pelo menos um símbolo especial
  * Não pode ser uma senha comum ou comprometida

### Execute o Script de Instalação

O Coolify oferece um script de instalação rápido e automatizado. Para garantir a segurança, vamos usar variáveis de ambiente para pré-definir a conta root do administrador. Isso evita acessos não autorizados enquanto a instalação acontece.

Execute o comando abaixo, substituindo o nome de usuário, email e senha pelas suas credenciais seguras:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Você pode conferir o código fonte do script de instalação no [Repositório Oficial do Coolify](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

O script vai instalar o Docker automaticamente, configurar as redes necessárias e preparar os containers do Coolify. Esse processo pode levar alguns minutos dependendo do hardware do seu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Acessando o Coolify

Após a instalação, acesse o dashboard pelo navegador. Digite o endereço IP do seu servidor seguido da porta 8000: `http://[seu_ip_do_servidor]:8000`

Como você já passou as credenciais no comando de instalação, verá direto a tela de login, sem o assistente inicial.

Entre com o email e senha que usou no terminal para acessar seu dashboard.

### Configurando Registros DNS

Depois de logar no dashboard do Coolify, o primeiro passo é configurar um domínio personalizado. Acessar o Coolify pelo IP (`http://[seu_ip_do_servidor]:8000`) não é seguro.

Conectar um domínio permite que o Coolify gere automaticamente certificados SSL gratuitos para o dashboard e todas as suas aplicações futuras.

No painel de gerenciamento DNS do seu provedor de domínio, adicione dois registros `A` apontando para seu servidor. Se seu domínio for registrado na ZAP-Hosting, siga nosso guia de [Registros de Domínio](domain-records.md) para adicionar essas entradas facilmente:

| Nome / Host | Tipo | Valor              | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[seu_ip_do_servidor]` | Auto / Mais baixo |
| `*`         | A    | `[seu_ip_do_servidor]` | Auto / Mais baixo |

:::info[Roteamento DNS]
* O registro `@` permite que o Coolify use a raiz do seu domínio
* O registro `*` (wildcard) deixa o Coolify rotear automaticamente qualquer subdomínio novo (ex: `api.[seu_dominio]`) sem precisar adicionar registros DNS para cada projeto.
:::

### Configurando o Domínio da Instância

Para garantir segurança com certificado SSL, atribua um domínio à sua instância Coolify. Vá em **Configurações** no menu lateral e encontre o campo **Domínio da Instância**. Insira seu domínio com o prefixo `https://` (ex: `https://coolify.[seu_dominio]`). Clique em **Salvar** para finalizar.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## Deploy da Sua Primeira App

Agora você pode ir na aba **Projetos** e começar a fazer deploy da sua primeira aplicação!

Clique em **+ Adicionar Recurso** para adicionar um repositório público, um arquivo Docker Compose ou escolha um dos vários serviços pré-configurados da biblioteca de templates de um clique. Sua instalação Coolify está pronta!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## Conclusão e Mais Recursos

Parabéns! Você instalou o Coolify no seu servidor e já pode começar a rodar seus projetos. Também recomendamos dar uma olhada nos recursos abaixo para mais ajuda e dicas durante sua configuração.

- [coolify.io](https://coolify.io/) - Site Oficial
- [coolify.io/docs](https://coolify.io/docs/) - Documentação do Coolify

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />