---
id: server-linux-swush
title: "Configure o Swush em um Servidor Linux - Monte seu próprio cofre privado de mídia e arquivos"
description: "Aprenda como instalar e rodar o Swush no seu VPS Linux para criar uma plataforma autogerida de mídia, arquivos e gerenciamento de conteúdo → Saiba mais agora"
sidebar_label: Instalar Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

[Swush](https://github.com/imthatdev/swush) é um cofre digital autogerido e plataforma de gerenciamento de conteúdo feita para te ajudar a organizar arquivos, mídia e dados pessoais em um dashboard centralizado. O app combina armazenamento de arquivos, ferramentas de compartilhamento, streaming de mídia e recursos de gestão de conhecimento em uma única interface web.

Com o Swush, você pode fazer upload e gerenciar arquivos, organizar conteúdo com pastas e tags, gerar links compartilháveis e até transmitir mídia direto do seu servidor. Por ser totalmente autogerido, você mantém controle total sobre seus dados e infraestrutura, sendo uma ótima alternativa às plataformas de armazenamento na nuvem.

O app é construído com tecnologias modernas como Next.js, TypeScript e TailwindCSS, garantindo uma interface rápida e responsiva, além de ser fácil de rodar em um VPS ou servidor dedicado. Este guia vai te mostrar como instalar e rodar o Swush em um servidor Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Casos de uso do Swush

O Swush foi pensado para ser o hub central do seu conteúdo digital e fluxos de trabalho. Ele pode ser usado em várias situações:

- Gerenciar e organizar arquivos, imagens e documentos
- Criar um servidor pessoal de mídia para streaming do conteúdo enviado
- Gerar links seguros para compartilhar arquivos e mídia
- Organizar conhecimento como notas, favoritos ou trechos
- Hospedar um dashboard privado para seus fluxos pessoais
- Automatizar uploads e integrações via API do Swush

A plataforma junta várias ferramentas num só lugar, ajudando a reduzir a dependência de serviços na nuvem espalhados.

## Requisitos

Antes de instalar o Swush, confira se seu servidor atende aos requisitos abaixo.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 núcleo | 4 núcleos |
| RAM | 2 GB | 4 GB |
| Espaço em disco | 20 GB | 50 GB |

Software necessário:

- Runtime Bun
- Banco de dados PostgreSQL
- Git

Garanta que seu sistema esteja atualizado antes de começar a instalação.

<InlineServiceLink />

## Preparação

Primeiro, crie um diretório para a instalação do Swush.
```
mkdir swush
cd swush
```
Depois, clone o repositório do Swush.
```
git clone https://github.com/imthatdev/swush.git .
```
Instale as dependências do projeto usando o Bun.
```
bun install
```
## Configuração

Antes de iniciar o app, crie o arquivo de configuração do ambiente.
```
cp example.env .env
```
Abra o arquivo `.env` e configure os valores necessários:
```
APP_NAME=Swush
APP_URL=http://seu-endereco-ip:3000
SUPPORT_NAME=Suporte
SUPPORT_EMAIL=suporte@exemplo.com
DATABASE_URL=postgresql://usuario:senha@localhost:5432/swush
```
Você também pode configurar opções adicionais como:

- Backend de armazenamento (local ou S3)
- Diretório de upload
- Configurações SMTP para notificações por email
- Segredos de autenticação

O Swush suporta tanto **armazenamento local quanto sistemas compatíveis com S3**, permitindo escalar o armazenamento conforme seu ambiente.

## Instalação

Após configurar as variáveis de ambiente, inicialize o esquema do banco de dados.
```
bun run push:db
```
Depois, faça o build da aplicação.
```
bun run build
```
Inicie o servidor Swush.
```
bun start
```
O app vai iniciar e ficar escutando na porta **3000**.

## Acessando o Swush

Com o servidor rodando, abra seu navegador e acesse:
```
http://SEU_ENDERECO_IP:3000
```
Substitua `SEU_ENDERECO_IP` pelo endereço IP do seu VPS/servidor dedicado. Ao acessar o dashboard pela primeira vez, você será guiado por um assistente de configuração inicial, onde poderá criar sua primeira conta e ajustar as configurações de armazenamento.

Depois de finalizar a configuração, já pode começar a enviar arquivos, organizar mídia e gerenciar seu conteúdo digital direto do dashboard do Swush.

## Conclusão

Parabéns! Você instalou com sucesso o **Swush** no seu servidor Linux. Seu cofre digital autogerido está pronto para gerenciar arquivos, compartilhar mídia e organizar conteúdo pessoal a partir de um dashboard centralizado.

Hospedando o Swush por conta própria, você tem controle total sobre seus dados e ainda aproveita uma plataforma moderna e focada em privacidade para gerenciamento de conteúdo.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />