---
id: vserver-windows-bitwarden
title: "VPS: Configurar Bitwarden no Windows"
description: "Descubra como hospedar seu próprio Bitwarden com segurança para gerenciar senhas com criptografia de ponta a ponta e recursos avançados de credenciais → Saiba mais agora"
sidebar_label: Instalar Bitwarden
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Bitwarden é um gerenciador de senhas open source para senhas e passkeys que usa zero knowledge, criptografia de ponta a ponta para proteger seus dados. Você pode usá-lo como um serviço na nuvem ou hospedar por conta própria, com recursos para gerar, armazenar e preencher automaticamente credenciais fortes.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber para manter seu setup seguro.

<InlineVoucher />



## Requisitos

Antes de instalar o **Bitwarden**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 2 GB         | 4 GB                     |
| Espaço em disco | 12 GB    | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Garanta que seu servidor atenda aos seguintes requisitos antes de prosseguir com a instalação:

**Dependências:** `Docker (Engine 26+ e Compose)`

**Sistema Operacional:** Última versão do Windows Server com suporte ao Docker 26+

Verifique se todas as dependências estão instaladas e se a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Bitwarden.



## Preparação

Antes de configurar o **Bitwarden**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça as atualizações do sistema primeiro. Isso garante que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.

### Instalar dependências
Após o processo de atualização, você pode prosseguir com a instalação das dependências. O Bitwarden será implantado e executado na sua máquina usando vários containers Docker. Para isso, é necessário instalar o Docker primeiro. Instale o [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) no seu servidor.

Um passo a passo completo do processo de instalação e como usar o Docker está disponível no nosso [guia Docker](vserver-windows-docker.md).



### Criar usuário & diretório

Recomendamos configurar seu servidor Windows com uma conta de serviço dedicada chamada `bitwarden`, a partir da qual o Bitwarden será instalado e executado. Isso garante que sua instância do Bitwarden fique isolada de outros aplicativos rodando no servidor.

Abra o PowerShell como administrador. Crie o usuário local Bitwarden executando os comandos abaixo. Após o primeiro comando, aparecerá uma caixa para digitar a senha. Insira a senha desejada e confirme. Depois execute o segundo comando para finalizar a criação.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Depois, crie uma pasta Bitwarden em `C:\` para o usuário criado:

```
PS C:\> mkdir Bitwarden
```

No Docker Desktop, vá em **Configurações → Recursos → Compartilhamento de Arquivos**. Adicione o diretório `C:\Bitwarden` aos caminhos compartilhados. Selecione Aplicar & Reiniciar para aplicar as mudanças.



### Configurar seu domínio

Por padrão, o Bitwarden roda no host pelas portas 80 (HTTP) e 443 (HTTPS). Configure um domínio com registros DNS apontando para o host, por exemplo server.exemplo.com, especialmente se for disponibilizar na internet. Evite incluir “Bitwarden” no nome do host para reduzir a exposição do papel ou software do servidor.




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode prosseguir com a instalação do Bitwarden.

Baixe o script de instalação do Bitwarden para sua máquina e execute o instalador:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

No instalador, primeiro insira o nome do domínio da sua instância Bitwarden, normalmente o registro DNS configurado. Depois escolha se o Let’s Encrypt deve gerar um certificado SSL gratuito e confiável. Se sim, informe um e-mail para avisos de expiração. Se não, as perguntas sobre certificado aparecerão.

Digite seu ID de Instalação e Chave de Instalação, ambos obtidos em [Bitwarden](https://bitwarden.com/host). Depois selecione a região US ou EU, que só importa se você conectar uma instância self-hosted a uma assinatura paga.

Se não usar Let’s Encrypt, pode usar um certificado existente colocando os arquivos em `C:\Bitwarden\bwdata\ssl\<seu_dominio>` e informando se é confiável. Alternativamente, pode gerar um certificado autoassinado, recomendado só para testes. Se escolher não usar certificado, deve colocar um proxy HTTPS na frente da instalação, senão o Bitwarden não funcionará.



## Configuração

Após a instalação, complete a configuração básica usando dois arquivos. Primeiro edite o arquivo de ambiente em `\bwdata\env\global.override.env`. Configure os detalhes do seu servidor SMTP, incluindo host, porta, SSL, usuário e senha, para que o Bitwarden possa enviar e-mails de verificação e convites para organizações. Se precisar acessar o Portal do Administrador do Sistema, adicione um e-mail de administrador em `adminSettings__admins`.

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

Valide a configuração SMTP. Uma configuração correta retorna sucesso; caso contrário, verá mensagens sobre OpenSSL ausente ou valores incorretos. Aplique as mudanças com `.\bitwarden.ps1 -start`.

Uma configuração correta retorna sucesso; caso contrário, verá mensagens sobre OpenSSL ausente ou valores incorretos. Aplique as mudanças com `.\bitwarden.ps1 -restart`.

Depois revise os parâmetros de instalação em `.\bwdata\config.yml`. Esse arquivo controla os assets gerados e deve ser ajustado para ambientes especiais, por exemplo, rodando atrás de proxy ou usando portas alternativas. Aplique essas mudanças com `.\bitwarden.ps1 -rebuild`.

Por fim, inicie a instância com `.\bitwarden.ps1 -start`. A primeira execução pode demorar enquanto o Docker baixa as imagens. Use `docker ps` para confirmar que todos os containers estão saudáveis. Depois abra o cofre web no domínio configurado e registre uma conta, se precisar. A verificação por e-mail exige variáveis SMTP configuradas corretamente.

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Bitwarden no seu VPS. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [bitwarden.com](https://bitwarden.com/) - Site Oficial
- https://bitwarden.com/help/ - Central de Ajuda Bitwarden (Documentação)

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂