---
id: vserver-linux-standard-notes
title: "VPS: Configurar Standard Notes no Linux"
description: "Descubra como sincronizar e proteger suas notas com segurança em vários dispositivos usando o self-hosting do Standard Notes → Saiba mais agora"
sidebar_label: Instalar Standard Notes
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Standard Notes é um app de notas open-source que protege seus dados usando criptografia ponta a ponta auditada. Só você controla as chaves de descriptografia. Ele sincroniza suas notas e arquivos criptografados de forma fluida entre dispositivos ilimitados, mantém eles acessíveis offline e protege seu conteúdo contra acessos externos.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar passo a passo em como configurar e ajustar tudo, além de tudo que você precisa saber para manter seu setup seguro.

<InlineVoucher />



## Requisitos

Antes de instalar o **Standard Notes**, certifique-se que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 2 GB         | 4 GB                     |
| Espaço em disco | 5 GB         | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que rode em um sistema operacional suportado. Garanta que seu servidor atenda aos seguintes requisitos antes de continuar com a instalação:

**Dependências:** `Docker (Engine 26+ e Compose)`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 26+

Confirme que todas as dependências estão instaladas e que a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Standard Notes.



## Preparação

Antes de configurar o **Standard Notes**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça a atualização do sistema primeiro. Para isso, rode o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Depois que o processo de atualização terminar, você pode instalar as dependências. O Standard Notes será implantado e executado na sua máquina usando vários containers Docker. Por isso, o Docker precisa estar instalado primeiro. Para isso, rode o comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um guia completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](vserver-linux-docker.md).




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir com a instalação do Standard Notes.



Primeiro, crie uma pasta que vai armazenar todos os arquivos de configuração e setup. Essa pasta será seu diretório de trabalho para a instalação.

```
mkdir standardnotes
cd standardnotes
```

Depois, crie um arquivo .env no seu diretório de trabalho e preencha com os valores padrão do arquivo de configuração de exemplo do projeto:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Esse arquivo contém apenas as variáveis mínimas necessárias para um setup funcional. A lista completa das variáveis atualmente em uso pode ser encontrada aqui: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Abra o arquivo .env e certifique-se que todas as chaves na seção KEYS estão corretamente definidas. Gere valores aleatórios para cada variável de ambiente necessária usando:

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

A configuração padrão no arquivo `docker-compose.yml` fornecido pode ser personalizada para atender suas necessidades específicas. Um ponto importante é o serviço `server`, onde você pode ajustar o mapeamento de portas na propriedade `ports`. Isso permite escolher em quais portas do host o app ficará acessível, ajudando a evitar conflitos com outros serviços rodando ou para alinhar com sua rede preferida.

Garantir a segurança do banco de dados é outro passo crucial. Senhas padrão devem ser substituídas por strings fortes e geradas aleatoriamente. Você pode criar uma senha segura com:

```
openssl rand -hex 12  
```

Adicione o valor gerado no arquivo `.env` como `DB_PASSWORD`. O mesmo valor também precisa ser configurado para `MYSQL_ROOT_PASSWORD` e `MYSQL_PASSWORD` no arquivo `docker-compose.yml` para manter os containers sincronizados.

Essas mudanças na configuração garantem que sua instalação não só funcione, mas também esteja segura e adaptada ao seu ambiente.





## Conectando ao Servidor de Sincronização

Para configurar sua conta no Standard Notes, clique no ícone do avatar no canto inferior direito do app. No menu que aparecer, selecione “Criar Conta” para começar a criar seu perfil de usuário. Insira um e-mail válido junto com uma senha segura.

Antes de finalizar, abra a seção “Opções Avançadas”. Em “Servidor de Sincronização”, selecione a opção “Personalizado” e insira o endereço IP e a porta do seu próprio servidor no formato IP:Porta. Isso garante que suas notas não sejam sincronizadas pelo serviço padrão do Standard Notes, mas sim pelo seu servidor self-hosted.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Standard Notes no seu VPS. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Standardnotes.com](https://standardnotes.com/) - Site Oficial
- [Standardnotes.com/help](https://standardnotes.com/help) - Central de Ajuda do Standard Notes (Documentação)

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂