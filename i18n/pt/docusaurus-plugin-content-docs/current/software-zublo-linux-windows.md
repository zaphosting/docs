---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Aprenda a implantar o Zublo para gerenciamento seguro de dados de assinaturas, acompanhamento de pagamentos recorrentes e insights de dados self-hosted com Docker -> Saiba mais agora"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Zublo é um rastreador de assinaturas open-source e self-hosted projetado para ajudar você a gerenciar pagamentos recorrentes e dados relacionados em um só lugar. Neste guia, você vai aprender como implantar o Zublo em um servidor Linux ou Windows usando Docker e verificar se a interface web está funcionando corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu servidor atende aos requisitos básicos e que o Docker está instalado.

### Requisitos

| Componente | Mínimo recomendado |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Armazenamento | 1 GB de espaço livre em disco |
| Sistema Operacional | Linux ou Windows com suporte a Docker |
| Rede | Acesso à porta `9597` |

### Software necessário

Você precisa ter o seguinte software instalado:

| Software | Finalidade |
| --- | --- |
| [Docker](https://www.docker.com/) | Executa o container do Zublo |
| Docker Compose | Inicia e gerencia a stack de containers |

:::info Requisito Docker
Este guia é baseado no método de implantação via Docker referenciado pelo repositório do projeto. Se o Docker ainda não estiver instalado, você precisa completar essa etapa antes de continuar.
:::

:::caution Acesso à Porta
O Zublo usa a porta `9597` por padrão. Certifique-se de que essa porta não esteja em uso por outro serviço e que esteja liberada no seu firewall caso queira acessar a interface web remotamente.
:::

## Sobre o Zublo

O Zublo é destinado ao acompanhamento de assinaturas, pagamentos recorrentes e dados relacionados a gastos por meio de uma aplicação web self-hosted. Segundo o repositório do projeto, ele é Docker-first e feito para quem quer ter controle total sobre seus próprios dados.

### O que o aplicativo oferece

Com base nas informações disponíveis no projeto, o Zublo foca nas seguintes áreas:

| Área de recurso | Descrição |
| --- | --- |
| Rastreamento de assinaturas | Gerencie serviços e pagamentos recorrentes |
| Self-hosting | Mantenha seus dados de assinaturas no seu próprio servidor |
| Interface web | Acesse o aplicativo pelo navegador |
| Acesso API | Use o endpoint API embutido |
| Backend administrativo | Acesse a interface admin do PocketBase |

:::note Disponibilidade de Recursos
Algumas funções avançadas mencionadas em resumos de terceiros, como análise assistida por IA, podem depender da versão atual do projeto. Se um recurso não estiver visível na sua instalação, verifique o repositório oficial para detalhes específicos da versão: [Repositório Zublo no GitHub](https://github.com/danielalves96/zublo)
:::

## Crie o diretório do projeto Zublo

Primeiro, crie um diretório dedicado para sua implantação do Zublo para manter sua configuração e dados persistentes organizados.

### Linux

Execute os seguintes comandos no terminal:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Se estiver usando PowerShell, execute:

```powershell
mkdir zublo-data
cd zublo-data
```

Esta pasta conterá seu arquivo `docker-compose.yml` e o diretório de dados persistentes da aplicação.

## Crie a configuração do Docker Compose

Em seguida, crie um arquivo `docker-compose.yml` dentro do diretório do projeto.

### Exemplo de configuração

Use a configuração abaixo:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Visão geral da configuração

| Chave | Valor de exemplo | Finalidade |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Puxa a imagem mais recente do container Zublo |
| `container_name` | `zublo` | Define um nome legível para o container |
| `restart` | `unless-stopped` | Reinicia o container automaticamente após reinicializações ou falhas |
| `ports` | `9597:9597` | Expõe a aplicação web na porta `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Protege dados sensíveis armazenados |
| `volumes` | `./zublo-data:/pb/pb_data` | Persiste os dados da aplicação no seu servidor |

:::danger Use uma Chave de Criptografia Forte
Não deixe a chave de criptografia com um valor fraco ou padrão. Substitua `[your_secure_encryption_key]` por um segredo longo e aleatório antes de iniciar o container em produção.
:::

### Salve o arquivo

Salve o arquivo como `docker-compose.yml` no diretório atual. Após salvar, você estará pronto para iniciar o serviço.

## Inicie o Zublo

Depois de criar o arquivo Compose, inicie a stack de containers.

```bash
docker compose up -d
```

Se seu ambiente usar a sintaxe antiga do Docker Compose, pode ser necessário usar:

```bash
docker-compose up -d
```

### Verifique se o container está rodando

Você pode checar o status do container com:

```bash
docker ps
```

Deve aparecer um container chamado `zublo` na lista.

### Veja os logs se necessário

Se o serviço não iniciar corretamente, inspecione os logs:

```bash
docker logs zublo
```

Isso ajuda a identificar problemas como configuração inválida, conflito de portas ou problemas de permissão com dados persistentes.

## Acesse a interface web

Com o container rodando, você pode abrir o Zublo no navegador.

### URLs da aplicação

Substitua `[your_server_ip]` pelo endereço IP público do seu servidor ou IP da rede local.

| Interface | URL |
| --- | --- |
| Aplicação principal | `http://[your_server_ip]:9597` |
| Interface admin do PocketBase | `http://[your_server_ip]:9597/_/` |
| Endpoint da API | `http://[your_server_ip]:9597/api/` |

:::info Localhost vs Acesso Remoto
Se estiver trabalhando diretamente na mesma máquina onde o Zublo está instalado, você também pode usar `http://localhost:9597`. Para acesso remoto, use o IP real do servidor ou um domínio configurado.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Configure o acesso seguro

Após confirmar que o Zublo está acessível, revise como ele está exposto à internet.

### Considerações sobre firewall

Se não conseguir acessar a aplicação de outro dispositivo, confirme que a porta `9597` está aberta na configuração do seu firewall.

| Porta | Protocolo | Finalidade |
| --- | --- | --- |
| `9597` | TCP | Interface web do Zublo, painel admin e API |

### Uso de proxy reverso

Se quiser usar um domínio como `[your_domain]`, pode colocar o Zublo atrás de um proxy reverso como Nginx ou outra solução suportada. Nesse cenário, o proxy encaminha as requisições para `http://127.0.0.1:9597` ou o endereço interno do host Docker.

:::tip Use HTTPS para Acesso Público
Se planeja expor o Zublo publicamente, é recomendado usar um proxy reverso com SSL para que seus dados de assinatura fiquem criptografados durante o trânsito.
:::

## Gerencie os dados persistentes

O Zublo armazena seus dados persistentes da aplicação no diretório montado definido no arquivo Compose.

### Localização dos dados

Neste guia, o mapeamento de volume usado é:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Isso significa que seus dados da aplicação ficam armazenados na pasta local `zublo-data` dentro do diretório do projeto.

### Por que a persistência é importante

O armazenamento persistente garante que seus dados da aplicação permaneçam disponíveis após:

- reinícios do container
- reinicializações do servidor
- atualizações da imagem
- operações de manutenção

:::caution Recomendação de Backup
Como o Zublo armazena dados pessoais importantes de assinaturas, você deve fazer backup da pasta `zublo-data` regularmente antes de realizar mudanças ou atualizações significativas.
:::

## Manutenção básica

Com o Zublo rodando, você pode precisar ocasionalmente atualizar ou reiniciar o serviço.

### Reiniciar o container

```bash
docker restart zublo
```

### Parar a implantação

```bash
docker compose down
```

### Atualizar para a imagem mais recente

Puxe a imagem mais recente e recrie o container:

```bash
docker compose pull
docker compose up -d
```

### Referência útil de comandos

| Comando | Finalidade |
| --- | --- |
| `docker compose up -d` | Inicia o Zublo em segundo plano |
| `docker ps` | Verifica containers em execução |
| `docker logs zublo` | Visualiza logs do container |
| `docker restart zublo` | Reinicia o container |
| `docker compose down` | Para e remove o container |
| `docker compose pull` | Baixa a imagem mais recente |

## Solução de problemas

Se o Zublo não funcionar como esperado, verifique as causas comuns abaixo.

### Porta `9597` já está em uso

Se o Docker reportar erro de binding de porta, outro serviço já está usando a `9597`. Você precisa parar o serviço conflitante ou alterar o mapeamento da porta no host.

Exemplo com uma porta externa diferente:

```yaml
ports:
  - "9600:9597"
```

Nesse caso, você acessaria a aplicação via `http://[your_server_ip]:9600`.

### O container inicia, mas a página não carrega

Verifique o seguinte:

- confirme que o container está rodando com `docker ps`
- revise os logs com `docker logs zublo`
- verifique se seu firewall permite a porta selecionada
- confirme que está usando o endereço IP ou hostname correto

### Problemas com a chave de criptografia

Se você alterar `PB_ENCRYPTION_KEY` após a configuração inicial, os dados criptografados existentes podem não ser mais legíveis. Se precisar trocar essa chave, revise a documentação oficial do projeto primeiro, pois o comportamento exato da migração não está documentado no material fornecido.

:::note Detalhes Ausentes sobre Comportamento
O material fonte fornecido não documenta completamente todos os passos do primeiro uso, criação de contas admin ou opções avançadas de configuração. Se precisar desses detalhes, consulte a documentação oficial do projeto: [Repositório Zublo no GitHub](https://github.com/danielalves96/zublo)
:::

## Conclusão

Parabéns, você instalou e configurou com sucesso o Zublo no Linux ou Windows usando Docker. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂