---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Aprenda como implantar o Tymeslot com Docker, gerenciar containers Docker e revisar os principais detalhes de configuração para ambientes de hospedagem Linux e Windows. -> Saiba mais agora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Tymeslot é uma plataforma open-source para agendamento de reuniões e compromissos, construída com Elixir e Phoenix LiveView. Neste guia, você vai aprender os requisitos do Tymeslot, como implantá-lo com Docker no Linux ou Windows, e quais pontos de configuração revisar antes de colocá-lo em produção.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, você precisa de um sistema que rode Docker de forma confiável e que exponha o Tymeslot pela rede.

### Requisitos

| Requisito | Recomendação |
| --- | --- |
| CPU | 1 vCPU ou mais |
| RAM | Pelo menos 2 GB |
| Espaço em disco | Pelo menos 10 GB |
| Sistema operacional | Linux ou Windows |
| Plataforma de container | [Docker](https://www.docker.com/) |
| Porta de rede | `4000/tcp` |

### O que você precisa ter pronto

| Item | Por que é necessário |
| --- | --- |
| Um servidor Linux ou sistema Windows | Para hospedar a aplicação |
| Docker instalado | O Tymeslot fornece arquivos relacionados ao Docker no repositório |
| Acesso de rede aberto para a porta `4000` ou um proxy reverso | Para acessar a interface web |
| Um hostname como `[your_domain]` | Recomendado para uso em produção |
| Um segredo forte gerado | Necessário para segurança da sessão e da aplicação |

:::info Requisito de Instalação do Docker
Este guia foca no Docker porque o repositório do Tymeslot inclui arquivos relacionados ao Docker, como `Dockerfile.docker` e `docker-compose.yml`. A instalação nativa com Elixir e Phoenix pode ser possível, mas os passos exatos para produção não foram totalmente verificáveis a partir do material fornecido.
:::

### Nota para Windows

No Windows, geralmente você precisa de um ambiente Docker funcional, como o Docker Desktop. Se estiver usando Docker para Windows, certifique-se de que a virtualização está habilitada e que o Docker Desktop está rodando antes de continuar.

## Sobre o Tymeslot

O Tymeslot é listado em seu repositório como uma plataforma open-source para agendamento de reuniões, construída com Elixir e Phoenix LiveView. É destinado para auto-hospedagem e também pode ser usado via oferta gerenciada na nuvem do projeto.

### Detalhes verificados do projeto

| Atributo | Valor |
| --- | --- |
| Nome | Tymeslot |
| Categoria | Agendamento |
| Repositório fonte | `https://github.com/tymeslot/tymeslot` |
| Menção semanal | Self-Host Weekly, 10 de abril de 2026 |
| Tecnologia | Elixir / Phoenix LiveView |
| Suporte à auto-hospedagem | Sim |

:::note Verificação da Fonte
O repositório confirma o nome do projeto, propósito e stack tecnológico. Contudo, alguns detalhes em tempo de execução, como o nome exato da imagem Docker publicada, lista completa de variáveis de ambiente e mapeamento oficial da porta de produção, não estavam totalmente visíveis no snapshot do material fornecido, então essas partes devem ser verificadas diretamente no repositório upstream antes da implantação em produção.
:::

## Método de Implantação

Para a maioria dos usuários, o Docker é o método de implantação mais simples porque mantém as dependências isoladas e facilita a gestão de atualizações.

### Por que o Docker é recomendado

| Benefício | Explicação |
| --- | --- |
| Configuração mais fácil | Você não precisa instalar Elixir, Erlang e Phoenix manualmente |
| Atualizações mais limpas | Pode substituir imagens Docker sem reconstruir o ambiente host |
| Melhor portabilidade | A mesma configuração de container pode ser usada no Linux e Windows |
| Rollback simples | Pode voltar para uma versão anterior da imagem se necessário |

### Limitação importante

:::caution Nome da Imagem Docker Deve Ser Verificado
O rascunho fornecido usou `youruser/tymeslot:latest` como exemplo de imagem, mas isso é apenas um placeholder e não um nome oficial verificado. Antes da implantação, verifique o repositório do Tymeslot, seu `README-Docker.md` ou as instruções do registro de containers do projeto para confirmar a fonte correta da imagem.
:::

## Instalar o Tymeslot com Docker

Esta seção mostra um fluxo de implantação baseado em Docker usando uma referência de imagem placeholder. Substitua `[your_tymeslot_image]` pelo nome da imagem verificada do projeto oficial Tymeslot.

### Baixar a imagem

```bash
docker pull [your_tymeslot_image]
```

### Gerar uma chave secreta

No Linux, você pode gerar um segredo forte com:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Salve a saída com segurança e use-a como `[your_secret_key_base]`.

No Windows, você pode gerar um valor aleatório seguro usando outro método confiável se o `openssl` não estiver disponível no seu ambiente shell.

### Executar o container

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Referência dos parâmetros

| Parâmetro | Significado |
| --- | --- |
| `-d` | Inicia o container em modo destacado (detached) |
| `--name tymeslot` | Atribui um nome legível ao container |
| `-p 4000:4000` | Mapeia a porta `4000` do host para a porta `4000` do container |
| `-e SECRET_KEY_BASE=...` | Define o segredo da aplicação |
| `-e PHX_HOST=...` | Define o hostname usado pelo Phoenix |
| `-v tymeslot_data:/app/data` | Persiste os dados da aplicação |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste os dados do PostgreSQL se usado dentro do container |

:::caution Verifique os Caminhos dos Volumes Primeiro
Os caminhos dos volumes mostrados acima vêm do material do rascunho e não foram totalmente confirmados na documentação upstream. Revise a documentação oficial do Docker do Tymeslot antes de confiar nesses caminhos exatos em produção.
:::

### Verificar status do container

```bash
docker ps
```

Para revisar os logs:

```bash
docker logs tymeslot
```

Se estiver solucionando problemas de inicialização, os logs são o primeiro lugar para verificar.

## Implantação Opcional com Docker Compose

Se preferir gerenciar containers Docker com Compose, você pode definir o serviço em um arquivo `docker-compose.yml`. Isso costuma ser mais fácil de manter do que comandos longos de `docker run`.

### Exemplo de arquivo Compose

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Inicie a stack com:

```bash
docker compose up -d
```

:::tip Gerenciamento com Compose
Usar Compose facilita atualizações, reinícios e backups porque a configuração do container fica em um único arquivo. Isso é especialmente útil se você gerencia múltiplas imagens Docker no mesmo host.
:::

## Configurar o Tymeslot

Depois que o container estiver rodando, revise os valores de configuração mais importantes.

### Variáveis de ambiente principais

| Variável | Propósito |
| --- | --- |
| `SECRET_KEY_BASE` | Protege sessões e segredos da aplicação |
| `PHX_HOST` | Define o hostname público ou endereço IP |

Use os placeholders da seguinte forma:

- `[your_secret_key_base]` é seu segredo seguro gerado
- `[your_domain_or_ip]` é o hostname público ou IP do servidor, por exemplo `schedule.[your_domain]` ou `[your_server_ip]`

### Configuração SMTP

O material do rascunho indica que SMTP pode ser configurado para notificações por e-mail em `config/prod.exs`. Exemplo:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note Verificação da Configuração SMTP
O exemplo acima vem do rascunho fornecido e reflete uma configuração típica de mailer Elixir. Você deve comparar com os arquivos atuais de configuração do Tymeslot upstream porque as configurações de e-mail podem mudar entre versões.
:::

## Rede e Acesso

Quando o Tymeslot estiver rodando, você precisa garantir que ele seja acessível pelo navegador.

### Acessar a interface web

Abra a seguinte URL no seu navegador:

```text
http://[your_server_ip]:4000
```

Se você configurou um proxy reverso e DNS, pode usar em vez disso:

```text
https://[your_domain]
```

### Referência de porta

| Porta | Protocolo | Propósito |
| --- | --- | --- |
| `4000` | TCP | Acesso web padrão do setup do rascunho |

### Considerações sobre firewall

Você precisa liberar o tráfego de entrada para `4000/tcp` se acessar o Tymeslot diretamente.

:::caution Exposição Pública
Se você expuser o Tymeslot diretamente na internet, considere fortemente colocá-lo atrás de um proxy reverso com HTTPS. Isso melhora a segurança e oferece um acesso mais limpo baseado em domínio.
:::

## Recomendação de Proxy Reverso

Um proxy reverso é recomendado se você quiser usar um nome de domínio e certificado TLS.

### Por que usar um proxy reverso

| Benefício | Explicação |
| --- | --- |
| Suporte HTTPS | Criptografa o tráfego entre usuários e seu serviço |
| Acesso baseado em domínio | Permite usar `[your_domain]` em vez de uma porta bruta |
| Gerenciamento de certificados mais fácil | Funciona bem com Let's Encrypt e ferramentas similares |
| Acesso público mais limpo | Esconde as portas internas da aplicação |

### O que verificar

A configuração exata do proxy reverso depende se você usa Nginx, Apache ou outro servidor web. Como nenhum exemplo oficial de proxy estava totalmente disponível no material fornecido, você deve verificar os cabeçalhos necessários e o suporte a websocket na documentação upstream do Tymeslot antes da implantação.

## Notas sobre Instalação Nativa

O Tymeslot é construído com Elixir e Phoenix LiveView, então uma instalação nativa pode ser possível em ambientes de desenvolvimento Linux ou Windows. O rascunho incluiu estes comandos:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### O que considerar

| Tópico | Nota |
| --- | --- |
| Elixir e Erlang | Devem estar instalados em versões compatíveis |
| Dependências do Phoenix | Podem requerer ferramentas adicionais de build |
| Configuração do banco de dados | Deve estar correta antes das migrações |
| Endurecimento para produção | Geralmente mais complexo que Docker |

:::danger Implantação Nativa em Produção Requer Verificação
Os passos de instalação nativa acima foram incluídos no rascunho, mas não foram totalmente confirmados a partir do snapshot do repositório upstream fornecido. Você não deve confiar neles para produção sem checar primeiro a documentação oficial atual do Tymeslot e os arquivos do repositório.
:::

## Verificar a Instalação

Após a implantação, confirme que a aplicação está funcionando corretamente.

### Verificações básicas

| Verificação | Resultado esperado |
| --- | --- |
| `docker ps` | O container `tymeslot` está rodando |
| `docker logs tymeslot` | Sem erros repetidos de inicialização ou banco de dados |
| Acesso pelo navegador | A interface do Tymeslot carrega |
| Teste de porta | A porta `4000` responde no servidor |

### Problemas comuns

| Problema | Possível causa |
| --- | --- |
| Página não carrega | Porta `4000` bloqueada ou container não está rodando |
| Container sai imediatamente | Variáveis de ambiente inválidas ou dependências faltando |
| Erros de banco de dados nos logs | Falha na inicialização do banco ou caminho de armazenamento errado |
| Comportamento errado do hostname | `PHX_HOST` não está configurado corretamente |

## Atualizando o Tymeslot

Quando uma versão mais nova estiver disponível, atualize a implantação com cuidado.

### Fluxo de atualização Docker

1. Baixe a imagem atualizada:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Pare o container atual:
   ```bash
   docker stop tymeslot
   ```
3. Remova o container antigo:
   ```bash
   docker rm tymeslot
   ```
4. Inicie um novo container com a mesma configuração.

Se usar Compose, normalmente pode atualizar com:

```bash
docker compose pull
docker compose up -d
```

:::tip Backup Antes de Atualizar
Antes de atualizar, faça backup dos volumes persistentes e de quaisquer dados relacionados ao banco. Isso oferece um caminho de recuperação caso a nova versão introduza migrações ou problemas de compatibilidade.
:::

## Referências Adicionais

| Recurso | Link |
| --- | --- |
| Repositório oficial do Tymeslot | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Site oficial do Docker | [Docker](https://www.docker.com/) |
| Menção no Self-Host Weekly | [Self-Host Weekly - 10 de abril de 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusão

Parabéns, você revisou e implantou com sucesso o Tymeslot no Linux ou Windows usando Docker. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂