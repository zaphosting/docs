---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprenda a usar o Yet Another Rclone Dashboard como uma GUI moderna para rclone no Linux e Windows, incluindo acesso via navegador e configuração do daemon com rclone rcd. -> Saiba mais agora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Yet Another Rclone Dashboard é um dashboard web moderno para gerenciar o `rclone rcd` através de uma interface no navegador. Neste guia, você vai aprender o que o software faz, seus requisitos e como configurá-lo no Linux ou Windows usando métodos de implantação suportados.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu sistema atende aos requisitos básicos e que o `rclone` já está instalado.

### Requisitos

De acordo com o repositório do projeto, o Yet Another Rclone Dashboard é feito para o `rclone rcd` e recomenda **Rclone `v1.72.0` ou superior**.

| Requisito | Detalhes |
|---|---|
| Sistema operacional | Linux ou Windows |
| Dependência principal | `rclone` |
| Versão recomendada do Rclone | `v1.72.0` ou superior |
| Método de acesso | Navegador web |
| Porta RC padrão | `5572/tcp` |
| Software opcional | `Docker`, `Nginx` ou `Caddy` dependendo da sua configuração |

### O que o dashboard oferece

O projeto original descreve o Yet Another Rclone Dashboard como uma interface frontend para o `rclone rcd`. Com base nas informações disponíveis, ele inclui as seguintes funcionalidades:

| Funcionalidade | Descrição |
|---|---|
| Perfis de conexão múltiplos | Conecte-se a diferentes instâncias do `rclone rcd` |
| Informações do sistema | Visualize informações do sistema e status do Rclone |
| Gerenciamento remoto | Inspecione remotes e importe ou exporte configurações do Rclone |
| Navegador de arquivos | Navegue por diretórios e gerencie arquivos pelo dashboard |

:::info Requisito do Rclone
Este software não é um servidor de armazenamento independente. Você precisa de uma instalação funcional do `rclone` e deve rodar o `rclone` em modo daemon com `rcd`.
:::

### Baixar o código-fonte

O código-fonte oficial está disponível no GitHub:

- [Yet Another Rclone Dashboard no GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

No momento do material fornecido, a última versão é a `v0.3.8` e inclui o arquivo `yet-another-rclone-dashboard-v0.3.8.zip`.

## Entenda como o dashboard funciona

Yet Another Rclone Dashboard é um frontend web estático que se conecta à *API de controle remoto do Rclone* fornecida pelo `rclone rcd`. Isso significa que o dashboard não substitui o `rclone`. Em vez disso, oferece uma experiência mais limpa de GUI para rclone no seu navegador.

Na prática, você tem várias formas de usá-lo:

| Método | Caso de uso | Observações |
|---|---|---|
| `--rc-files` | Implantação manual local ou no servidor | Serve os arquivos extraídos do dashboard diretamente pelo `rclone rcd` |
| `--rc-web-gui` com URL de fetch | Download automático via Rclone | Permite que o Rclone baixe a última versão do dashboard |
| Proxy reverso | Acesso via domínio | Útil para publicar o dashboard via `Nginx` ou `Caddy` |
| Servidor web externo | Hospedagem de arquivos estáticos | Sirva o frontend separadamente e conecte ao `rclone rcd` |

:::note Acesso via Navegador
Como este é um dashboard web, você acessará ele pelo navegador depois que o `rclone rcd` estiver rodando e configurado corretamente.
:::

## Baixe os arquivos do dashboard

Se quiser usar o método manual, primeiro baixe o arquivo da última versão na página de releases do projeto no GitHub e extraia no seu servidor ou sistema local.

### Exemplo Linux

Você pode baixar o arquivo da versão atual com `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Depois extraia:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [seu_diretorio_do_dashboard]
```

Substitua `[seu_diretorio_do_dashboard]` pela pasta onde quer guardar os arquivos extraídos, por exemplo `/opt/yet-another-rclone-dashboard`.

### Exemplo Windows

No Windows, baixe o arquivo `.zip` na página de releases do GitHub e extraia para uma pasta como:

```text
C:\yet-another-rclone-dashboard
```

:::tip Mantenha os Arquivos em um Local Permanente
Não extraia o dashboard em uma pasta temporária. O `rclone rcd` precisa de acesso contínuo aos arquivos se usar o método `--rc-files`.
:::

## Inicie o Rclone com o dashboard

Com os arquivos prontos, você pode iniciar o `rclone rcd` e expor o dashboard.

### Método 1: Configuração manual com `--rc-files`

Este método usa os arquivos extraídos do dashboard diretamente.

#### Exemplo Linux local

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo Linux servidor

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[seu_usuario_rc] \
  --rc-pass=[sua_senha_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[seu_endereco_ip_do_servidor]:5572
```

#### Exemplo Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[seu_usuario_rc] `
  --rc-pass=[sua_senha_rc] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[seu_endereco_ip_do_servidor]:5572
```

### Método 2: Configuração automática com `--rc-web-gui`

Este método instrui o Rclone a baixar o dashboard automaticamente via API de releases do GitHub.

#### Exemplo local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo servidor remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[seu_usuario_rc] \
  --rc-pass=[sua_senha_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[seu_endereco_ip_do_servidor]:5572
```

:::caution Não Exponha uma Interface RC Sem Proteção
Se você vincular o `rclone rcd` a `0.0.0.0`, o serviço pode ficar acessível por outros sistemas. Use `--rc-user` e `--rc-pass` ou coloque-o atrás de um proxy reverso configurado corretamente.
:::

## Opções importantes do Rclone

As opções abaixo são as mais relevantes para configurar este dashboard.

| Opção | Finalidade |
|---|---|
| `--rc-files` | Serve arquivos estáticos do dashboard a partir de um diretório local |
| `--rc-web-gui` | Ativa o mecanismo de download da GUI web do Rclone |
| `--rc-web-fetch-url` | Especifica o endpoint da API de releases para o dashboard |
| `--rc-no-auth` | Desativa autenticação, adequado apenas para uso local confiável |
| `--rc-user` | Define o nome de usuário para autenticação RC |
| `--rc-pass` | Define a senha para autenticação RC |
| `--rc-addr` | Define o endereço e porta de escuta |
| `--rc-allow-origin` | Permite acesso do navegador a partir da origem especificada |
| `--rc-web-gui-no-open-browser` | Impede a abertura automática do navegador em sistemas headless |
| `--rc-user-from-header` | Aceita o usuário autenticado via cabeçalho de proxy reverso |

### Explicação dos valores de placeholder

Use os seguintes placeholders nos exemplos:

| Placeholder | Significado |
|---|---|
| `[seu_diretorio_do_dashboard]` | Pasta contendo os arquivos extraídos do dashboard |
| `[seu_usuario_rc]` | Nome de usuário para autenticação do `rclone rcd` |
| `[sua_senha_rc]` | Senha para autenticação do `rclone rcd` |
| `[seu_endereco_ip_do_servidor]` | Endereço IP público ou privado do seu servidor |

## Configure o acesso via navegador

Depois de iniciar o `rclone rcd`, abra a URL do dashboard no seu navegador.

### Acesso local

Se você iniciou o serviço localmente na mesma máquina, abra:

```text
http://127.0.0.1:5572
```

### Acesso remoto

Se iniciou o serviço em um servidor Linux ou Windows remoto e permitiu acesso externo, abra:

```text
http://[seu_endereco_ip_do_servidor]:5572
```

Se usar um domínio e proxy reverso, abra a URL configurada, por exemplo:

```text
https://[seu_dominio]
```

:::info Origem Permitida Deve Coincidir
O valor usado em `--rc-allow-origin` deve coincidir com o endereço que você realmente usa no navegador. Se não coincidir, o dashboard pode falhar ao conectar corretamente.
:::

## Use um proxy reverso

Um proxy reverso é útil se você quiser URLs mais limpas, HTTPS ou controle de acesso adicional.

### Exemplo Nginx

O exemplo abaixo serve os arquivos estáticos extraídos do dashboard via `Nginx`:

```nginx
server {
    listen 80;
    server_name [seu_dominio];

    location / {
        root /caminho/para/build-extraido;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemplo Caddy

O exemplo abaixo serve os arquivos estáticos do dashboard via `Caddy`:

```caddy
[seu_dominio] {
    root * /caminho/para/build-extraido
    file_server
}
```

:::note Hospedagem Estática do Frontend
Estes exemplos servem apenas os arquivos do frontend. Você ainda precisa de um backend `rclone rcd` funcional que o dashboard possa acessar.
:::

## Autenticação avançada com proxy reverso

O projeto também documenta uma configuração avançada onde a autenticação é feita por um gateway externo e passada para o Rclone com `--rc-user-from-header`.

### Exemplo Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/caminho/para/build-extraido' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[seu_dominio]
```

### Exemplo proxy reverso Caddy

```caddy
@rclone host [seu_dominio]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution Autenticação Avançada Requer Testes Cuidadosos
Esta configuração depende do seu proxy reverso e gateway de autenticação encaminharem os cabeçalhos corretos. Se o cabeçalho estiver ausente ou mal configurado, o acesso pode falhar ou se comportar de forma inesperada.
:::

## Verifique a instalação

Quando tudo estiver rodando, verifique se o dashboard carrega corretamente.

### Verificações básicas

Confirme o seguinte:

| Verificação | Resultado esperado |
|---|---|
| Processo `rclone rcd` está rodando | Sem erros de inicialização no console ou logs do serviço |
| Porta `5572` está escutando | Serviço acessível local ou remotamente |
| Navegador abre a URL configurada | Interface do Yet Another Rclone Dashboard carrega |
| Autenticação funciona | Você consegue fazer login se a autenticação RC estiver ativada |

### Problemas comuns

| Problema | Causa possível | Ação sugerida |
|---|---|---|
| Dashboard não carrega | URL errada ou serviço não rodando | Verifique o valor de `--rc-addr` e o status do processo |
| Erros de conexão no navegador | Porta bloqueada pelo firewall | Permita acesso de entrada para `5572/tcp` se necessário |
| Falha no login | Usuário ou senha `--rc-user`/`--rc-pass` errados | Reinicie o `rclone rcd` com as credenciais corretas |
| Frontend abre mas chamadas API falham | Incompatibilidade em `--rc-allow-origin` | Defina a origem para a URL exata do navegador |
| Acesso remoto indisponível | Serviço vinculado apenas a `127.0.0.1` | Use `0.0.0.0:5572` se quiser acesso remoto |

:::danger Exposição Pública Sem Proteção
Não exponha o dashboard diretamente na internet sem autenticação ou proxy reverso seguro. Se planeja usar isso como um navegador remoto para rclone ou gerenciar remotes do rclone google drive pela rede, proteja o endpoint primeiro.
:::

## Notas adicionais para Linux e Windows

### Linux

Linux costuma ser o ambiente mais fácil para serviços `rclone rcd` de longa duração. Você pode rodar o comando manualmente, via multiplexador de terminal ou como serviço, dependendo do seu design de sistema.

### Windows

No Windows, certifique-se que o caminho usado em `--rc-files` aponta para o diretório extraído do dashboard e que o firewall permite a porta configurada se precisar de acesso remoto.

### Nota sobre Docker

O material fornecido menciona Docker como dependência opcional, mas não inclui um procedimento verificado de implantação Docker para este projeto. Se quiser usar workflows com `rclone docker`, revise o repositório original antes de prosseguir, em vez de assumir uma configuração em container.

## Conclusão

Parabéns, você configurou com sucesso o Yet Another Rclone Dashboard no Linux ou Windows. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂