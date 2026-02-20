---
id: vserver-linux-supabase
title: "Configure o Supabase em um Servidor Linux - Lance Sua Plataforma Backend Open Source"
description: "Descubra como hospedar e configurar o Supabase para uma plataforma Postgres open source confiável com autenticação e recursos em tempo real → Saiba mais agora"
sidebar_label: Instalar Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Supabase é uma plataforma de desenvolvimento Postgres open source que oferece um banco de dados Postgres completo, além de autenticação, APIs instantâneas, realtime e armazenamento, sendo uma alternativa open source ao Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Quer hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

<InlineVoucher />

## Requisitos

Antes de instalar o **Supabase**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 4 GB         | 8 GB                     |
| Espaço em disco | 25 GB    | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Garanta que seu servidor atenda aos seguintes requisitos antes de continuar com a instalação:

**Dependências:** `Git`, `Docker (Engine e Compose)`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 2

Verifique se todas as dependências estão instaladas e se a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Supabase.

## Preparação

Antes de configurar o **Supabase**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça a atualização do sistema primeiro. Para isso, execute o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Depois que o processo de atualização terminar, você pode seguir para a instalação das dependências.

#### Git
Os dados do Supabase serão baixados via GitHub. Por isso, o Git precisa estar instalado primeiro. Para isso, execute:

```
sudo apt install git-all
```

#### Docker

O Supabase será implantado e executado na sua máquina usando um container Docker. Por isso, o Docker precisa estar instalado primeiro. Para isso, execute:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um passo a passo completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](dedicated-linux-docker.md).

## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir com a instalação do Supabase.

Clone o repositório do Supabase, crie um diretório dedicado para o projeto e copie os arquivos Docker e o arquivo de ambiente de exemplo para ele.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Entre no diretório do projeto, puxe as imagens mais recentes dos containers e inicie a stack em modo destacado (detached).

```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

Agora você pode acessar o Supabase Studio via `http://<seu-ip>:8000`. Será solicitado usuário e senha. Por padrão, as credenciais são:

- Usuário: `supabase`
- Senha: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Credenciais Padrão
Seu app está rodando com credenciais padrão. Proteja seus serviços o quanto antes usando as instruções abaixo.
:::

## Configuração
Nunca faça deploy com valores padrão ou de exemplo. Substitua todos os placeholders por segredos fortes e únicos, revise a configuração conforme suas necessidades de segurança e reinicie todos os serviços para aplicar as mudanças.

Gere chaves API seguras antes de expor qualquer serviço. Comece escolhendo um segredo JWT de 40 caracteres. Você pode usar o valor fornecido ou criar o seu próprio. Guarde esse segredo localmente em um lugar seguro. Não compartilhe e não faça commit dele no controle de versão. Use o segredo para gerar um JWT e depois derive as chaves API anon e service usando o formulário referenciado na documentação do Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Execute o formulário duas vezes para gerar ambas as chaves. Atualize seu arquivo `./docker/.env` com:

- `ANON_KEY`: chave anon
- `SERVICE_ROLE_KEY`: chave service

Atualize os segredos obrigatórios em `./docker/.env`. Esses valores devem estar definidos para que o deploy funcione:

- `POSTGRES_PASSWORD`: senha para o usuário `postgres`
- `JWT_SECRET`: consumido pelo PostgREST e GoTrue
- `SITE_URL`: URL base do seu site
- `SMTP_*`: credenciais do servidor de e-mail
- `POOLER_TENANT_ID`: ID do tenant usado pelo pooler Supavisor

Proteja o Dashboard com novas credenciais antes de usar em produção. Edite `./docker/.env`:

- `DASHBOARD_USERNAME`: usuário do dashboard
- `DASHBOARD_PASSWORD`: senha do dashboard

Você pode definir múltiplos usuários do dashboard em `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Para ativar todos os recursos do dashboard fora do `localhost`, defina `SUPABASE_PUBLIC_URL` em `./docker/.env` para a URL ou IP que você usará para acessar o dashboard.

Aplique as mudanças reiniciando a stack:

```
docker compose down
docker compose up -d
```

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Supabase com sucesso no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Supabase.com](https://Supabase.com/) - Site Oficial
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Documentação Supabase

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />