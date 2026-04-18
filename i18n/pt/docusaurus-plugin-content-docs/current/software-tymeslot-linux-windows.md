---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Aprenda como implantar o Tymeslot com Docker, containers Docker e noções básicas de instalação do Docker no Linux ou Windows para agendamento auto-hospedado. -> Saiba mais agora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Tymeslot é uma plataforma open-source para agendamento de reuniões e compromissos, construída com Elixir e Phoenix LiveView. Neste guia, você vai aprender o que é o Tymeslot, o que precisa para executá-lo e como implantá-lo no Linux ou Windows usando Docker.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de implantar o Tymeslot, certifique-se de que seu sistema atende aos requisitos básicos e que o Docker está disponível.

### Requisitos

Os seguintes requisitos são baseados nas informações disponíveis do projeto e no rascunho de configuração fornecido:

| Requisito | Recomendação |
|---|---|
| CPU | Pelo menos `1` vCPU |
| RAM | Pelo menos `2 GB` |
| Espaço em disco | Pelo menos `10 GB` |
| Sistema operacional | Linux ou Windows |
| Runtime de container | Docker |
| Rede | Acesso à porta `4000` |

### O que foi verificado e o que não foi

:::info Disponibilidade da Fonte
O repositório do Tymeslot confirma que o projeto é uma plataforma open-source para agendamento de reuniões construída com Elixir e Phoenix LiveView, e que arquivos relacionados ao Docker, como `Dockerfile.docker` e `docker-compose.yml`, existem no repositório.

No entanto, os passos exatos para implantação em produção, nome da imagem e todas as variáveis de ambiente necessárias não são totalmente verificáveis a partir do material fonte fornecido aqui. Por isso, este guia usa as informações do rascunho disponível e marca claramente os valores que você deve verificar no repositório oficial antes do uso em produção.
:::

### Instalar Docker

Você precisa do Docker para executar o Tymeslot em um container.

- No Linux, instale o Docker Engine usando a documentação oficial do [Docker](https://docs.docker.com/engine/install/)
- No Windows, instale o [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker para Windows
Se estiver usando Docker para Windows, certifique-se de que a virtualização está habilitada e que o Docker Desktop está rodando antes de continuar.
:::

## Visão Geral do Software

Tymeslot pertence à categoria *Scheduling* e é projetado para gerenciamento auto-hospedado de compromissos e reuniões.

| Propriedade | Valor |
|---|---|
| Nome | `Tymeslot` |
| Categoria | `Scheduling` |
| Fonte | `https://github.com/tymeslot/tymeslot` |
| Stack tecnológico | `Elixir`, `Phoenix LiveView` |
| Estilo de implantação | Auto-hospedado, suporte Docker |
| Menção semanal | Self-Host Weekly, 10 de abril de 2026 |

### Por que usar o Tymeslot

O Tymeslot pode ser útil se você quiser:

- hospedar sua própria plataforma de agendamento
- manter os dados de reservas na sua própria infraestrutura
- gerenciar compromissos sem depender de uma plataforma SaaS de terceiros
- implantar uma aplicação web moderna com containers Docker

## Opções de Implantação

Com base nas informações disponíveis, existem duas abordagens possíveis:

| Método | Status |
|---|---|
| Implantação via Docker | Recomendado |
| Instalação nativa Elixir/Phoenix | Possível, mas mais avançada |

Para a maioria dos usuários, Docker é a melhor opção porque simplifica a instalação, atualizações e gerenciamento do serviço.

## Instalar Tymeslot com Docker

Este é o método mais prático para sistemas Linux e Windows.

### Baixar a imagem Docker

O rascunho fornecido usa a seguinte referência de imagem:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Verifique a imagem Docker antes
O nome exato da imagem pública não está confirmado pelo conteúdo do repositório obtido. Antes de usar este comando em produção, verifique o nome correto da imagem no repositório oficial do Tymeslot, nas notas de lançamento ou na página do Docker Hub, caso exista.
:::

### Iniciar o container

Você pode iniciar o Tymeslot com o seguinte comando do rascunho fornecido:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Se estiver usando o PowerShell do Windows, o comando `openssl` pode não estar disponível por padrão. Nesse caso, gere um valor seguro aleatório separadamente e substitua `SECRET_KEY_BASE` manualmente.

### Referência do comando exemplo

| Opção | Propósito |
|---|---|
| `--name tymeslot` | Define o nome do container |
| `-p 4000:4000` | Expõe o Tymeslot na porta `4000` |
| `-e SECRET_KEY_BASE=...` | Define o segredo da aplicação para criptografia e sessões |
| `-e PHX_HOST=localhost` | Define o hostname usado pelo Phoenix |
| `-v tymeslot_data:/app/data` | Persiste os dados da aplicação |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste os dados do PostgreSQL |
| `youruser/tymeslot:latest` | Nome da imagem Docker do rascunho |

### Gerar uma chave secreta no Linux

Se o `openssl` estiver instalado, você pode gerar um segredo assim:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Gerar uma chave secreta no PowerShell do Windows

Você pode gerar um segredo temporário no PowerShell assim:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Use seu próprio valor secreto
Não reutilize segredos de exemplo em produção. Sempre gere seu próprio `SECRET_KEY_BASE` e armazene-o com segurança.
:::

## Configurar o Tymeslot

Antes do primeiro uso, revise as configurações de runtime mais importantes.

### Variáveis de ambiente

O rascunho confirma as seguintes variáveis de ambiente:

| Variável | Exemplo | Propósito |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Protege sessões e funções relacionadas à criptografia |
| `PHX_HOST` | `[your_domain]` ou `[your_server_ip]` | Define o hostname público usado pela aplicação |

Quando usar os placeholders:

- `[your_secret_key]` é seu segredo seguro gerado
- `[your_domain]` é seu domínio público, se usar um
- `[your_server_ip]` é o endereço IP do seu servidor para acesso direto

### Configuração SMTP

O rascunho também menciona configuração SMTP em `config/prod.exs` para notificações por email:

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

:::note Verificação SMTP
O formato exato da configuração do mailer deve ser verificado no repositório atual do Tymeslot antes de aplicar em produção, pois a configuração da aplicação pode mudar entre versões.
:::

## Acessar o Tymeslot

Com o container rodando, você pode testar a interface web.

### Acesso local

Se estiver testando localmente, abra:

```text
http://localhost:4000
```

### Acesso remoto

Se o Tymeslot estiver rodando em um servidor remoto, abra:

```text
http://[your_server_ip]:4000
```

Se você configurou um domínio e proxy reverso, pode acessar por:

```text
https://[your_domain]
```

## Firewall e Rede

O Tymeslot precisa de acesso de rede na porta que você expõe pelo Docker.

### Porta necessária

| Porta | Protocolo | Propósito |
|---|---|---|
| `4000` | TCP | Acesso web à aplicação Tymeslot |

### Considerações sobre firewall

Você deve garantir que:

- a porta `4000` esteja aberta no firewall do servidor para acesso direto
- o firewall da nuvem ou do provedor também permita essa porta
- seu proxy reverso encaminhe o tráfego corretamente se usar domínio

:::caution Exposição pública
Se expuser a porta `4000` diretamente para a internet, entenda as implicações de segurança. Para implantações em produção, um proxy reverso com HTTPS geralmente é a melhor escolha.
:::

## Instalação Nativa Opcional

Uma instalação nativa pode ser possível se preferir não usar Docker. Este método é mais avançado e requer ambiente compatível com Elixir e Phoenix.

### Passos básicos nativos

Segundo o rascunho fornecido, o processo é:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Notas sobre implantação nativa

Para implantações nativas, você também precisaria de:

- Elixir
- Erlang/OTP
- dependências Phoenix
- configuração de banco de dados suportada
- revisão da configuração para produção

:::info Complexidade da instalação nativa
O material fonte obtido não fornece detalhes verificados suficientes para documentar uma configuração nativa completa para Linux ou Windows em produção com segurança. Se quiser usar este método, revise a documentação oficial do repositório antes da implantação.
:::

## Manutenção e Solução de Problemas

Após a implantação, verifique se o serviço permanece disponível e se seus dados são persistentes.

### Verificar status do container

```bash
docker ps
```

### Visualizar logs

```bash
docker logs tymeslot
```

### Reiniciar o container

```bash
docker restart tymeslot
```

### Problemas comuns

| Problema | Possível causa | Ação sugerida |
|---|---|---|
| Página web não carrega | Porta `4000` bloqueada | Verifique firewall e mapeamento de portas Docker |
| Container sai imediatamente | Variáveis de ambiente inválidas | Revise `SECRET_KEY_BASE` e configurações da imagem |
| Erros relacionados ao banco | Problema de armazenamento persistente ou inicialização do banco | Verifique logs e confirme uso dos volumes |
| Hostname errado nos links | `PHX_HOST` incorreto | Defina `PHX_HOST` para `[your_domain]` ou `[your_server_ip]` |

## Melhores Práticas

### Use volumes persistentes

Sempre mantenha volumes Docker persistentes para dados da aplicação e banco, para que recriar containers não apague seus dados.

### Use um proxy reverso

Para implantações públicas, geralmente é melhor colocar o Tymeslot atrás de um proxy reverso como Nginx ou Apache e ativar HTTPS.

### Verifique mudanças upstream

Como o Tymeslot é desenvolvido ativamente, revise o repositório oficial antes de atualizar. Isso é especialmente importante para:

- imagens Docker alteradas
- variáveis de ambiente atualizadas
- migrações de banco de dados
- mudanças na configuração de email

## Referências Adicionais

| Recurso | Link |
|---|---|
| Repositório GitHub do Tymeslot | [Repositório Oficial do Tymeslot](https://github.com/tymeslot/tymeslot) |
| Menção no Self-Host Weekly | [Self-Host Weekly - 10 de abril de 2026](https://selfh.st/weekly/2026-04-10/) |
| Documentação Docker | [Documentação Docker](https://docs.docker.com/) |
| Download Docker Desktop | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusão

Parabéns, você aprendeu com sucesso como revisar e implantar o Tymeslot no Linux ou Windows usando Docker. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!