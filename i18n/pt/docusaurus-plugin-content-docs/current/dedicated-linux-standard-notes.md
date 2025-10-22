---
id: dedicated-linux-standard-notes
title: "Servidor Dedicado: Configurar Standard Notes no Linux"
description: "Descubra como sincronizar e proteger suas notas com segurança em vários dispositivos usando o self-hosting do Standard Notes → Saiba mais agora"
sidebar_label: Instalar Standard Notes
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Standard Notes é um app de notas open-source que protege seus dados usando criptografia ponta a ponta auditada. Só você controla as chaves de descriptografia. Ele sincroniza suas notas e arquivos criptografados de forma fluida em dispositivos ilimitados, mantém eles acessíveis offline e protege seu conteúdo contra acessos externos.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Quer hospedar esse serviço por conta própria? Vamos te guiar passo a passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

<InlineVoucher />

## Requisitos

Antes de instalar o **Standard Notes**, certifique-se que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho top.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 2 GB         | 4 GB                     |
| Espaço em disco | 5 GB     | 25 GB                    |

O software precisa que todas as dependências estejam instaladas e que rode em um sistema operacional suportado. Confira se seu servidor atende a esses requisitos antes de seguir com a instalação:

**Dependências:** `Docker (Engine 26+ e Compose)`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 26+

Garanta que todas as dependências estejam instaladas e que a versão do sistema operacional esteja correta para evitar problemas de compatibilidade durante a instalação do Standard Notes.

## Preparação

Antes de configurar o **Standard Notes**, você precisa preparar seu sistema. Isso inclui atualizar o sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça a atualização do sistema primeiro. Rode o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Depois que a atualização terminar, você pode instalar as dependências. O Standard Notes será executado usando vários containers Docker, então o Docker precisa estar instalado primeiro. Rode o comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um guia completo sobre instalação e uso do Docker está disponível no nosso [guia Docker](vserver-linux-docker.md).

## Instalação
Com todos os requisitos cumpridos e preparações feitas, você pode seguir para a instalação do Standard Notes.

Primeiro, crie uma pasta para guardar todos os arquivos de configuração e setup. Essa pasta será seu diretório de trabalho para a instalação.

```
mkdir standardnotes
cd standardnotes
```

Depois, crie um arquivo `.env` no seu diretório de trabalho e preencha com os valores padrão do arquivo de exemplo do projeto:

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Esse arquivo contém só as variáveis mínimas necessárias para uma configuração funcional. A lista completa das variáveis em uso está aqui: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Abra o arquivo `.env` e confira se todas as chaves na seção KEYS estão configuradas corretamente. Gere valores aleatórios para cada variável de ambiente necessária com:

```
openssl rand -hex 32
```

Cole esses valores no seu arquivo `.env`. O Standard Notes precisa de um script bootstrap para o LocalStack. Baixe ele no seu diretório de trabalho e dê permissão de execução:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Baixe a configuração oficial de exemplo e salve como `docker-compose.yml` dentro da sua pasta de trabalho. Esse arquivo define todos os serviços de container necessários para o Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Quando tudo estiver pronto, puxe as imagens mais recentes e inicie os serviços em modo destacado:

```
docker compose pull && docker compose up -d
```

## Configuração

A configuração padrão no arquivo `docker-compose.yml` pode ser personalizada para atender suas necessidades específicas. Um ponto importante é o serviço `server`, onde você pode ajustar o mapeamento de portas na propriedade `ports`. Isso permite escolher em quais portas do host o app ficará acessível, evitando conflitos com outros serviços ou alinhando com sua rede preferida.

Garantir a segurança do banco de dados é outro passo crucial. Senhas padrão devem ser trocadas por strings fortes e geradas aleatoriamente. Você pode criar uma senha segura com:

```
openssl rand -hex 12
```

Adicione o valor gerado no arquivo `.env` como `DB_PASSWORD`. O mesmo valor precisa ser configurado para `MYSQL_ROOT_PASSWORD` e `MYSQL_PASSWORD` no arquivo `docker-compose.yml` para manter os containers sincronizados.

Essas mudanças garantem que sua instalação seja funcional, segura e personalizada para seu ambiente.

## Conectando ao Servidor de Sincronização

Para configurar sua conta no Standard Notes, clique no ícone do avatar no canto inferior direito do app. No menu que abrir, selecione “Criar Conta” para começar a criar seu perfil. Insira um e-mail válido e uma senha segura.

Antes de finalizar, abra a seção “Opções Avançadas”. Em “Servidor de Sincronização”, escolha a opção “Personalizado” e insira o endereço IP e a porta do seu próprio servidor no formato IP:Porta. Isso garante que suas notas não serão sincronizadas pelo serviço padrão do Standard Notes, mas sim pelo seu servidor self-hosted.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)

## Conclusão e Mais Recursos

Parabéns! Você instalou e configurou com sucesso o Standard Notes no seu Servidor Dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Standardnotes.com](https://standardnotes.com/) - Site Oficial
- [Standardnotes.com/help](https://standardnotes.com/help) - Central de Ajuda do Standard Notes (Documentação)

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂