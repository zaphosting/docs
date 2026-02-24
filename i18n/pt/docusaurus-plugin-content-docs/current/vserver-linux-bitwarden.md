---
id: vserver-linux-bitwarden
title: "Configure o Bitwarden em um Servidor Linux - Proteja sua Gestão de Senhas"
description: "Descubra como hospedar o Bitwarden de forma segura para gerenciar senhas com criptografia ponta a ponta e recursos avançados de credenciais → Saiba mais agora"
sidebar_label: Instalar Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Bitwarden é um gerenciador de senhas open source para senhas e passkeys que usa zero knowledge e criptografia ponta a ponta para proteger seus dados. Você pode usá-lo como serviço na nuvem ou hospedar por conta própria, com recursos para gerar, armazenar e preencher automaticamente credenciais fortes.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber para manter seu setup seguro.

<InlineVoucher />

## Requisitos

Antes de instalar o **Bitwarden**, certifique-se que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 2 GB         | 4 GB                     |
| Espaço em disco | 12 GB    | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que rode em um sistema operacional suportado. Garanta que seu servidor atenda aos requisitos abaixo antes de continuar com a instalação:

**Dependências:** `Docker (Engine 26+ e Compose)`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 26+

Verifique se todas as dependências estão instaladas e se a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Bitwarden.

## Preparação

Antes de configurar o **Bitwarden**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça a atualização do sistema primeiro. Execute o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Após a atualização, você pode instalar as dependências. O Bitwarden será executado em sua máquina usando vários containers Docker, então o Docker precisa estar instalado primeiro. Execute:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um guia completo do processo de instalação e uso do Docker está disponível no nosso [guia Docker](dedicated-linux-docker.md).

### Criar usuário & diretório

Recomendamos configurar seu servidor Linux com uma conta de serviço dedicada `bitwarden` para instalar e rodar o Bitwarden. Isso isola sua instância Bitwarden de outros apps no servidor.

Crie o usuário bitwarden e defina uma senha forte e única para essa conta:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Crie o grupo docker caso não exista e adicione o usuário bitwarden a ele:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Crie o diretório de trabalho, defina permissões e atribua a propriedade para bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Configure seu domínio

Por padrão, o Bitwarden roda no host pelas portas 80 (HTTP) e 443 (HTTPS). Configure um domínio com registros DNS apontando para o host, por exemplo server.exemplo.com, especialmente se for acessá-lo pela internet. Evite incluir “bitwarden” no nome do host para reduzir a exposição do papel ou software do servidor.

## Instalação

Com todos os requisitos atendidos e preparações feitas, você pode prosseguir com a instalação do Bitwarden.

Baixe o script de instalação do Bitwarden para sua máquina e execute-o. Um diretório `./bwdata` será criado relativo à localização do `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

No instalador, você primeiro informa o nome do domínio da sua instância Bitwarden, normalmente o registro DNS configurado. Depois escolhe se quer que o Let’s Encrypt gere um certificado SSL gratuito e confiável. Se sim, informe um e-mail para avisos de expiração. Se não, as perguntas sobre certificado seguem.

Informe seu Installation ID e Installation Key, ambos obtidos em [Bitwarden](https://bitwarden.com/host). Depois selecione a região US ou EU, que só importa se você conectar uma instância self-hosted a uma assinatura paga.

Se não usar Let’s Encrypt, pode usar um certificado existente colocando os arquivos em `./bwdata/ssl/seu.dominio` e informando se é confiável. Alternativamente, pode gerar um certificado autoassinado, recomendado só para testes. Se escolher não usar certificado, deve colocar um proxy HTTPS na frente da instalação, senão o Bitwarden não funcionará.

## Configuração

Após a instalação, finalize a configuração básica usando dois arquivos. Primeiro edite o arquivo de ambiente em `./bwdata/env/global.override.env`. Configure os detalhes do seu servidor SMTP, incluindo host, porta, SSL, usuário e senha, para que o Bitwarden possa enviar e-mails de verificação e convites para organizações. Se precisar acessar o Portal do Administrador do Sistema, adicione um e-mail de administrador em `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Valide a configuração SMTP com `./bitwarden.sh checksmtp`. Uma configuração correta retorna sucesso; caso contrário, verá mensagens sobre OpenSSL faltando ou valores incorretos. Aplique as mudanças com `./bitwarden.sh restart`.

Depois, revise os parâmetros de instalação em `./bwdata/config.yml`. Esse arquivo controla os assets gerados e deve ser ajustado para ambientes especiais, por exemplo, rodando atrás de proxy ou usando portas alternativas. Aplique essas mudanças com `./bitwarden.sh rebuild`.

Por fim, inicie a instância com `./bitwarden.sh start`. A primeira execução pode demorar enquanto o Docker baixa as imagens. Use `docker ps` para confirmar que todos os containers estão saudáveis. Depois abra o cofre web no domínio configurado e registre uma conta se precisar. A verificação por e-mail exige variáveis SMTP configuradas corretamente.

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Bitwarden no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [bitwarden.com](https://bitwarden.com/) - Site Oficial
- https://bitwarden.com/help/ - Central de Ajuda Bitwarden (Documentação)

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂