---
id: server-linux-cashlytics
title: "Configure o Cashlytics em um Servidor Linux - Hospede seu gerente financeiro com IA"
description: "Aprenda a instalar e rodar o Cashlytics no seu VPS Linux usando Docker para gerenciar finanças pessoais e orçamento com ajuda de IA → Saiba mais agora"
sidebar_label: Instalar Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) é uma plataforma moderna de **finanças pessoais e orçamento** feita para te ajudar a controlar gastos, gerenciar orçamentos e entender seus hábitos financeiros. Analisando dados de transações e categorias de gastos, o Cashlytics te mostra para onde seu dinheiro está indo e como melhorar seu planejamento financeiro.

A plataforma também pode integrar uma **assistência com IA**, que analisa seus dados financeiros, identifica padrões de gastos e oferece insights inteligentes sobre seu comportamento orçamentário.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Hospedar o Cashlytics no seu próprio servidor te dá **controle total sobre seus dados financeiros**, mantendo suas ferramentas de orçamento acessíveis de qualquer lugar via interface web. Quer hospedar o Cashlytics por conta própria? Este guia te mostra como instalar usando Docker no seu VPS Linux.

<InlineVoucher />

## Casos de uso do Cashlytics

O Cashlytics pode ser usado em vários cenários pessoais e profissionais onde organização financeira e orçamento são importantes. Exemplos comuns:

- Controlar despesas pessoais e orçamentos mensais
- Monitorar padrões de gastos e hábitos financeiros
- Gerenciar múltiplas fontes de renda e categorias financeiras
- Gerar insights com IA para um orçamento mais inteligente
- Hospedar um dashboard financeiro privado e sob seu controle

Por ser self-hosted, o Cashlytics é ideal para quem busca uma alternativa focada em privacidade, sem depender de ferramentas financeiras na nuvem.

## Requisitos

Antes de instalar o Cashlytics, confira se seu VPS atende aos seguintes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 Núcleo | 2 Núcleos |
| RAM | 2 GB | 4 GB |
| Espaço em disco | 10 GB | 20 GB |



Além disso, o seguinte software deve estar instalado:

- Docker
- Docker Compose

Se o Docker ainda não estiver instalado, siga nosso guia para instalar o [Docker](dedicated-linux-docker.md) antes de continuar.



<InlineServiceLink />



## Preparação

Primeiro, crie um diretório para o projeto Cashlytics.

```bash
mkdir cashlytics && cd cashlytics
```

Depois, baixe os arquivos oficiais de configuração Docker do Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Crie seu arquivo de configuração de ambiente copiando o arquivo de exemplo.

```
cp .env.example .env
```

O arquivo `.env` contém as variáveis de configuração necessárias para rodar o Cashlytics.



## Instalação



### Abra o arquivo `.env`

Abra o arquivo `.env` para configurar as variáveis de ambiente necessárias.

```
nano .env
```



### Configure a senha do banco de dados

Defina uma senha segura para o banco de dados PostgreSQL usado pelo Cashlytics.

```
POSTGRES_PASSWORD=sua_senha_segura_aqui
```



### Configure a conexão com o banco

Atualize a string de conexão do banco usando a mesma senha definida acima.

```
DATABASE_URL=postgresql://cashlytics:sua_senha_segura_aqui@postgres:5432/cashlytics
```



### Assistente de IA opcional

O Cashlytics suporta um assistente de IA opcional que analisa dados financeiros e oferece insights para o orçamento. Para ativar, adicione sua chave API da OpenAI.

```
OPENAI_API_KEY=sk-sua-chave-openai
```

Se não quiser usar o assistente de IA, deixe essa variável vazia.



## Iniciando o Cashlytics

Com a configuração pronta, inicie a aplicação usando Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

O Docker vai baixar as imagens necessárias e iniciar os serviços do Cashlytics. Para verificar se os containers estão rodando, use:

```
docker ps
```



## Acessando o Cashlytics

Depois que os containers estiverem ativos, acesse a interface web do Cashlytics. Abra seu navegador e vá para:

```
http://SEU_ENDEREÇO_IP:3000
```

Substitua SEU_ENDEREÇO_IP pelo endereço IP do seu VPS. Quando a interface carregar, você pode começar a configurar suas finanças, orçamentos e categorias.

## Conclusão

Parabéns! Você instalou o Cashlytics com sucesso no seu servidor Linux. Agora pode usar a plataforma para controlar gastos, gerenciar orçamentos e obter insights sobre seus dados financeiros.

Rodar o Cashlytics no seu próprio VPS/servidor dedicado garante que suas informações financeiras fiquem sob seu controle, aproveitando ferramentas modernas de orçamento e análise opcional com IA.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />