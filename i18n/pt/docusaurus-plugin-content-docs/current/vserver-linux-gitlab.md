---
id: vserver-linux-gitlab
title: "Configure o GitLab em um Servidor Linux - Hospede Sua Própria Plataforma DevOps"
description: "Descubra como configurar o GitLab no Linux de forma eficiente para otimizar fluxos DevOps e melhorar a colaboração da equipe → Saiba mais agora"
sidebar_label: Instalar GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

GitLab é uma plataforma DevOps completa que permite que equipes colaborem no código, automatizem fluxos de trabalho e gerenciem todo o ciclo de vida do desenvolvimento de software de forma eficiente. Neste guia, explicaremos como instalar o GitLab em um servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Preparação

Os seguintes requisitos são recomendados pela equipe oficial do [GitLab](https://docs.gitlab.com/ee/install/requirements.html) e é altamente recomendado seguir os pré-requisitos para evitar inconvenientes e problemas no futuro.

#### Hardware

| Componentes   | Mínimo                 | Recomendado                |
| ------------ | ---------------------- | -------------------------- |
| CPU          | 2x 2 GHz               | 4x 2.6+ GHz                |
| RAM          | 4 GB                   | 8 GB                       |
| Armazenamento| 10 GB                  | 50+ GB                     |
| Largura de banda | 100 mbit/s (upload & download) | 100 mbit/s (upload & download) |

#### Software

| Plataforma       | Opções                                                      |
| ---------------- | ------------------------------------------------------------ |
| Sistema Operacional | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Banco de Dados   | PostgreSQL 14.9+                                             |
| Servidor Web     | NGINX (incluído com GitLab), Puma 6.4.2+                     |
| Outros          | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
Para as informações mais precisas e atualizadas sobre especificações, consulte a documentação oficial de [Requisitos de Hardware](https://docs.gitlab.com/ee/install/requirements.html) do GitLab.
:::

Uma conexão deve ser estabelecida via cliente SSH para instalar o GitLab no seu servidor Linux. Confira nosso [Guia de acesso inicial (SSH)](vserver-linux-ssh.md) para saber mais.

Após a conexão, você pode começar a instalar os pacotes necessários para a instalação do GitLab.

## Passo 1: Instalando Dependências

Primeiro, você precisa instalar algumas dependências para rodar o instalador do GitLab. Use os comandos abaixo para instalar as dependências necessárias no seu servidor Linux.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Atualize a lista de pacotes para a versão mais recente e instale o pacote OpenSSH Server junto com os pré-requisitos usando o comando abaixo. É assim que seu painel web do GitLab será hospedado.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Você também pode instalar o Postfix (Servidor SMTP) se quiser enviar notificações por email ao usar o GitLab. Isso é **opcional**.

Se quiser usar notificações por email, instale o Postfix com o comando:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Atualize a lista de pacotes para a versão mais recente e instale o pacote OpenSSH Server junto com os pré-requisitos usando o comando abaixo. É assim que seu painel web do GitLab será hospedado.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Você também pode instalar o Postfix (Servidor SMTP) se quiser enviar notificações por email ao usar o GitLab. Isso é **opcional**.

Se quiser usar notificações por email, instale o Postfix com o comando:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Instale o pacote OpenSSH Server junto com os pré-requisitos usando o comando abaixo. É assim que seu painel web do GitLab será hospedado.

```
sudo zypper install curl openssh perl
```

Em seguida, certifique-se de que o daemon OpenSSH está ativado com os comandos:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Garanta que o firewall permita o acesso necessário, caso esteja usando `firewalld`.

Descubra se está usando `firewalld` rodando o comando:

```bash
sudo systemctl status firewalld
```

Se estiver, abra as portas necessárias (80 e 443 por padrão):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Você também pode instalar o Postfix (Servidor SMTP) se quiser enviar notificações por email ao usar o GitLab. Isso é **opcional**.

Se quiser usar notificações por email, instale o Postfix com os comandos:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Durante a instalação do Postfix, pode aparecer uma configuração. Nesse caso, selecione 'Internet Site' e pressione enter. Use o DNS externo do seu servidor Linux para o 'mail name' e pressione enter. Se aparecerem outras telas, continue pressionando enter para aceitar as configurações padrão.

Se preferir usar outra solução para enviar emails, pule este passo e [configure um servidor SMTP externo](https://docs.gitlab.com/omnibus/settings/smtp) após a instalação do GitLab seguindo um guia oficial do GitLab.
:::

## Passo 2: Instalando o GitLab

Após baixar e instalar todas as dependências necessárias, você está pronto para instalar o GitLab.

Neste guia, vamos instalar o GitLab diretamente dos repositórios oficiais.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
O script abaixo adiciona os repositórios do GitLab ao gerenciador de pacotes apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Depois, o pacote `gitlab-ee` pode ser instalado:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
O script abaixo adiciona os repositórios do GitLab ao gerenciador de pacotes Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Depois, o pacote `gitlab-ee` pode ser instalado:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Quando o processo terminar, o GitLab estará pronto no seu servidor Linux. Siga para a próxima seção para configurar algumas definições essenciais e garantir que o servidor funcione corretamente.

## Passo 3: Configurando o GitLab

Para garantir que tudo funcione, você deve fazer algumas alterações no arquivo de configuração. Comece abrindo o arquivo de configuração do GitLab com seu editor de texto preferido. Usaremos o editor `nano` como exemplo.

```
sudo nano /etc/gitlab/gitlab.rb
```

Procure pela linha `external_url` e insira seu domínio ou o endereço IP do seu servidor Linux caso não tenha um domínio para usar com o GitLab.

<!-- O código abaixo é do arquivo /etc/gitlab/gitlab.rb -->
```
## GitLab URL
##! URL na qual o GitLab estará acessível.
##! Para mais detalhes sobre a configuração do external_url, veja:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Nota: Durante instalações/atualizações, o valor da variável de ambiente
##! EXTERNAL_URL será usado para preencher/substituir este valor.
##! Em instâncias AWS EC2, tentamos também obter o hostname/IP público
##! do AWS. Para mais detalhes, veja:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Seu domínio / endereço IPv4 do seu servidor Linux`'
```

Além disso, recomendamos inserir seu email na linha `letsencrypt['contact_emails']`. Isso permitirá que o Let's Encrypt envie notificações e entre em contato sobre os certificados SSL automáticos e gratuitos.

:::note
Você precisa usar um domínio para adquirir um certificado SSL gratuito do Let's Encrypt. Não é possível solicitar um diretamente para seu endereço IP.
:::

<!-- O código abaixo é do arquivo /etc/gitlab/gitlab.rb -->
```
################################################################################
# Integração Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Seu email aqui`] # Deve ser um array de emails para contato
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Veja https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically para mais detalhes
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Deve ser um número ou expressão cron, se especificado.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Você pode usar `CTRL+W` para buscar por `letsencrypt['contact_emails']` e pressionar enter para não precisar procurar manualmente pelo arquivo inteiro.
:::

Quando terminar, pressione `CTRL+X`, depois `Y` e `Enter` para salvar as alterações.

Por fim, rode o comando abaixo para reconfigurar o GitLab com as novas opções.

```
sudo gitlab-ctl reconfigure
```

Esse processo pode demorar um pouco, pois o GitLab será inicializado com as configurações atualizadas e os certificados SSL serão emitidos caso um domínio tenha sido usado.

## Passo 4: Acessando a Interface Web

Após a inicialização, o servidor deve estar acessível via navegador. Acesse seu site digitando seu domínio ou endereço IP assim:

```
https://[seu_dominio] OU http://[seu_endereco_ip]
```

Na primeira vez que acessar a interface web, você verá a página de login.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Para obter acesso de admin no primeiro login, entre como usuário root usando `root` como nome de usuário.

A senha está armazenada em um arquivo no seu servidor Linux. Acesse o arquivo com o comando abaixo e encontre o campo `Password`.

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- O código abaixo é do arquivo /etc/gitlab/initial_root_password -->
```
# AVISO: Este valor é válido apenas nas seguintes condições

# 1. Se fornecido manualmente (via variável de ambiente `GITLAB_ROOT_PASSWORD` ou via configuração `gitlab_rails['initial_root_password']` no `gitlab.rb` antes do banco de dados ser inicializado).

# 2. A senha não foi alterada manualmente, nem via UI nem via linha de comando.

#

# Se a senha mostrada aqui não funcionar, você deve resetar a senha do admin seguindo https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[SUA_SENHA_AQUI]`

# NOTA: Este arquivo será deletado automaticamente na primeira reconfiguração após 24 horas.
```

Digite o usuário e senha na página de login para acessar seu dashboard GitLab pela primeira vez. Agora você pode usar seu painel GitLab no seu próprio servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Recomendamos criar um novo usuário e/ou alterar a senha do usuário `root`. Isso pode ser feito acessando **Admin** no canto inferior esquerdo e selecionando **Visão Geral -> Usuários**. Nessa página, você pode gerenciar os usuários da sua instância GitLab.

## Opcional: Configurar firewall com ufw

Você pode pular essa parte se não quiser configurar firewall ou, por exemplo, já usar `firewalld` no OpenSUSE. Garanta que as portas 80/443 e 22 estejam liberadas.

### Instalar ufw

Se você já tem o `ufw` instalado, pode pular essa etapa.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### Liberar portas necessárias

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Ativar firewall

:::warning
Por padrão, isso bloqueará o acesso a todas as portas que não estiverem liberadas. Certifique-se de que a lista branca está configurada corretamente antes de rodar esse comando.
:::

Para ativar o firewall, rode:

```
sudo ufw enable
```

## Conclusão

Parabéns, você instalou o GitLab com sucesso! Se tiver dúvidas ou problemas, entre em contato com nosso time de suporte, disponível todos os dias para te ajudar!

Se quiser fazer configurações adicionais, recomendamos ler a [Documentação Oficial do GitLab](https://docs.gitlab.com/ee/install/next_steps.html) para os próximos passos.

<InlineVoucher />