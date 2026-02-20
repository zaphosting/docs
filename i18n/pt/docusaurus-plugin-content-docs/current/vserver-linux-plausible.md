---
id: vserver-linux-plausible
title: "Configurar Plausible Analytics em um Servidor Linux - Execute Análises Web Focadas em Privacidade"
description: "Descubra como configurar uma plataforma de análise web focada em privacidade para insights claros e desempenho rápido → Saiba mais agora"
sidebar_label: Instalar Plausible
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Plausible é uma plataforma de análise web leve e open-source que funciona sem cookies e segue totalmente as normas de privacidade. Ela entrega métricas essenciais, como contagem de visitantes, visualizações de página e duração das visitas, tudo através de um dashboard limpo e intuitivo. Com facilidade de uso, desempenho rápido e infraestrutura baseada na UE, o Plausible é uma alternativa moderna e consciente à privacidade em relação ao Google Analytics.

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

<InlineVoucher />

## Requisitos

Antes de instalar o **Plausible**, certifique-se que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 2 GB         | 4 GB                     |
| Espaço em disco | 10 GB    | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que rode em um sistema operacional suportado. Confira se seu servidor atende aos requisitos abaixo antes de seguir com a instalação:

**Dependências:** `Docker`

**Sistema Operacional:** Última versão do Ubuntu/Debian com suporte ao Docker 26+

Garanta que todas as dependências estejam instaladas e que a versão correta do sistema operacional esteja em uso para evitar problemas de compatibilidade durante a instalação do Plausible.

## Preparação

Antes de configurar o **Plausible**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça a atualização do sistema primeiro. Para isso, rode o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Depois que o processo de atualização terminar, você pode prosseguir com a instalação das dependências.

#### Git
Os dados do Plausible serão baixados via GitHub. Por isso, é necessário ter o Git instalado primeiro. Para isso, rode o comando:
```
sudo apt install git-all
```

#### Docker

O Plausible será implantado e executado na sua máquina usando um container Docker. Por isso, é necessário instalar o Docker primeiro. Para isso, rode o comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Um passo a passo completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](dedicated-linux-docker.md).

## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir com a instalação do Plausible.

Comece clonando o repositório da Community Edition e criando o arquivo de configuração necessário:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Depois, crie um arquivo de ambiente (.env) e defina as variáveis essenciais. O BASE_URL deve apontar para o domínio real que já tenha um registro DNS resolvendo para seu servidor. Também será necessário gerar uma SECRET_KEY_BASE aleatória com pelo menos 64 bytes:
```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Verifique o conteúdo do arquivo com `cat .env` para confirmar que os valores estão corretos. A saída deve ser assim:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Essas portas padrão permitem que o Let’s Encrypt emita automaticamente certificados TLS. Se você planeja rodar o Plausible atrás de um proxy reverso, pode ajustar esses valores. Além disso, crie um `compose.override.yml` para expor as portas corretas para o container do Plausible:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Por fim, inicie os serviços necessários usando o Docker Compose:

```
docker compose up -d
```

Quando os containers estiverem rodando, abra seu navegador no domínio especificado em BASE_URL e crie a primeira conta de usuário.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Configuração

O Plausible pode ser integrado ao Google Search Console para enriquecer suas análises com dados de consultas de busca. Isso permite ver quais palavras-chave estão trazendo tráfego para seu site, oferecendo insights mais profundos sobre o comportamento dos visitantes.

Com uma conta Google Cloud existente e um cliente OAuth configurado, basta adicionar suas credenciais (`GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`) ao arquivo `.env`. Depois de salvar, reinicie seus serviços Docker com `docker compose up -d`. No dashboard do Plausible, vá em *Configurações do Site > Integrações* para completar a conexão e seguir as instruções de autenticação.

Para quem ainda não tem um cliente OAuth ou não conhece o processo, a Wiki oficial do Plausible oferece um guia detalhado passo a passo. Ela explica como criar um projeto no Google Cloud, ativar as APIs necessárias, configurar um cliente OAuth e adicionar as credenciais geradas ao Plausible: [Plausible Wiki: Integração com Google](https://github.com/Plausible/community-edition/wiki/google-integration).

Se você usa o Google Search Console, pode configurar a integração para puxar dados do Search Console sobre termos de busca, o que é bem legal.

Se já tem uma conta Google Cloud com cliente OAuth, é só colar seu `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` no arquivo `.env`, reiniciar o serviço Docker com `docker compose up -d` e seguir as instruções na tela em Configurações do Site > Integrações do Plausible.

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Plausible no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Plausible.io](https://Plausible.io/) - Site Oficial
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Anúncios, Discussões, Relatório de problemas

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />