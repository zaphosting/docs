---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard é um dashboard web moderno para gerenciar o `rclone rcd` através de uma interface no navegador. Neste guia, você vai aprender o que o software faz, o que ele precisa e como configurar no Linux ou Windows com o Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Antes de começar, você precisa ter uma instalação funcional do [Rclone](https://rclone.org/), pois este dashboard foi feito para se conectar ao `rclone rcd` e não para rodar como backend independente.

### Requisitos

Os requisitos a seguir são baseados nas informações disponíveis do projeto e no rascunho de configuração fornecido.

| Requisito | Detalhes |
| --- | --- |
| Sistema operacional | Linux ou Windows |
| Software necessário | `rclone` |
| Versão recomendada do Rclone | `v1.72.0` ou superior |
| Software opcional | `Nginx`, `Caddy` ou outro servidor web se quiser servir os arquivos estáticos separadamente |
| Dependência opcional para build | `Node.js` se planeja compilar o projeto a partir do código-fonte |
| Porta padrão do RC | `5572/tcp` |

:::info Rclone é Obrigatório
Yet Another Rclone Dashboard é uma interface para o `rclone rcd`. Você não pode usá-lo sem uma instância do Rclone remote control rodando.
:::

### Considerações sobre acesso e rede

Você também deve garantir que o sistema onde roda o Rclone permita acesso à porta configurada caso queira abrir o dashboard remotamente.

| Cenário | Endereço bind recomendado | URL de exemplo |
| --- | --- | --- |
| Acesso local apenas | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Acesso remoto na rede | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Configuração com reverse proxy | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Exponha o Dashboard com Segurança
Se você bindar o Rclone em `0.0.0.0`, o serviço pode ficar acessível por outros sistemas. Use autenticação e, se possível, um reverse proxy com HTTPS.
:::

## Sobre o Yet Another Rclone Dashboard

Yet Another Rclone Dashboard é uma interface web para o modo daemon do Rclone. Segundo o repositório do projeto, ele suporta conexão ao `rclone rcd`, múltiplos perfis de conexão, inspeção remota, importação e exportação de configurações, navegação de arquivos e gerenciamento relacionado a transferências.

Isso significa que você pode usá-lo como um `rclone gui` ou `rclone browser` para tarefas comuns que normalmente exigiriam interação direta via linha de comando.

### Detalhes do projeto

| Item | Valor |
| --- | --- |
| Nome | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Fonte | [Repositório GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Última release referenciada | `v0.3.8` |
| Arquivo da release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recomendado | `rclone rcd` |

### Modelo de uso suportado

As informações do projeto confirmam que o dashboard foi feito para funcionar com o modo remote control do Rclone. O comportamento exato de empacotamento específico para cada sistema operacional não está totalmente documentado no material fornecido, então este guia foca nos métodos de implantação verificados no conteúdo do repositório.

## Métodos de instalação

Você pode implantar o Yet Another Rclone Dashboard de várias formas, dependendo de como quer acessá-lo. O método mais direto é deixar o Rclone servir os arquivos do dashboard diretamente.

### Método 1: Servir o dashboard com `--rc-files`

Este método usa os arquivos extraídos do dashboard e instrui o `rclone rcd` a servi-los diretamente.

#### Baixar os arquivos da release

Baixe o arquivo da última release na página de releases do projeto no GitHub:

- [Releases do Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

No momento da referência, o arquivo da última release é:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Extraia o arquivo para uma pasta no seu servidor ou sistema local.

:::note Substitua os Caminhos de Exemplo
Nos comandos a seguir, substitua `[your_dashboard_path]` pela pasta que contém os arquivos extraídos do build do dashboard.
:::

#### Exemplo Linux

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo Windows

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo servidor remoto com autenticação

Para um servidor headless, use autenticação e bind em um endereço acessível externamente somente se necessário.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Método 2: Usar o fetcher da web GUI do Rclone

O rascunho de configuração também menciona o fetcher embutido da web GUI do Rclone. Ele pode baixar e servir o dashboard automaticamente, sem precisar extrair manualmente os arquivos.

#### Exemplo Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo Windows

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo servidor remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Use o Fetcher para Atualizações Mais Simples
Se quiser um fluxo de trabalho mais simples para baixar os arquivos do dashboard, o método com fetcher pode ser mais prático do que baixar manualmente os arquivos da release.
:::

### Método 3: Servir os arquivos estáticos com um servidor web

Como o Yet Another Rclone Dashboard é uma aplicação web estática, você também pode servir o frontend separadamente com um servidor web padrão como [Nginx](https://nginx.org/) ou [Caddy](https://caddyserver.com/).

Nesta configuração, o Rclone continua fornecendo o backend via `rclone rcd`, enquanto seu servidor web serve os arquivos do frontend.

#### Exemplo Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Exemplo Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Frontend e Backend Separados
Se usar um servidor web separado, certifique-se que o frontend ainda consiga acessar o endpoint RC do Rclone. Nesse caso, o valor de `--rc-allow-origin` é especialmente importante.
:::

## Opções importantes do Rclone

As opções a seguir são as mais relevantes ao configurar o Yet Another Rclone Dashboard.

| Opção | Função |
| --- | --- |
| `--rc-files` | Serve arquivos estáticos do dashboard a partir de um diretório local |
| `--rc-web-gui` | Ativa o mecanismo web GUI do Rclone |
| `--rc-web-fetch-url` | Define a URL da release para baixar o dashboard |
| `--rc-serve` | Serve a interface RC via HTTP |
| `--rc-addr` | Define o endereço IP e porta de escuta |
| `--rc-no-auth` | Desativa autenticação |
| `--rc-user` | Define o usuário RC |
| `--rc-pass` | Define a senha RC |
| `--rc-allow-origin` | Permite acesso do navegador da origem especificada |
| `--rc-web-gui-no-open-browser` | Impede a abertura automática do navegador |
| `--rc-user-from-header` | Aceita o usuário a partir de um header confiável do reverse proxy |

### Escolhendo o `--rc-allow-origin` correto

Você deve definir `--rc-allow-origin` para a URL exata que usa no navegador.

| Método de acesso | Valor de exemplo |
| --- | --- |
| Acesso local | `http://127.0.0.1:5572` |
| Acesso direto por IP | `http://[your_server_ip]:5572` |
| Reverse proxy com HTTPS | `https://[your_domain]` |

:::caution URLs de Origem Diferentes Podem Quebrar o Dashboard
Se `--rc-allow-origin` não corresponder à URL real do navegador, o dashboard pode falhar ao conectar ao Rclone por restrições de segurança do navegador.
:::

## Configuração avançada de reverse proxy

Se quiser colocar o dashboard atrás de um gateway de autenticação, o rascunho de configuração inclui um exemplo avançado usando reverse proxy e `--rc-user-from-header`.

### Exemplo Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Exemplo Caddy

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Confie Apenas em Headers do Seu Proxy
Você deve usar `--rc-user-from-header` somente quando o Rclone estiver bindado a uma interface local confiável como `127.0.0.1` e acessível apenas via seu reverse proxy. Caso contrário, um cliente pode falsificar headers.
:::

## Primeiro start e verificação

Depois de escolher o método de implantação, você pode verificar se o dashboard está funcionando corretamente.

### Inicie o serviço

Inicie o `rclone rcd` com o comando escolhido e mantenha o processo rodando.

### Abra o dashboard

Abra a URL correspondente no seu navegador:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Confirme o acesso bem-sucedido

Se tudo estiver configurado corretamente, você verá a interface do Yet Another Rclone Dashboard e poderá conectar ao backend do Rclone.

Então, poderá usar para inspecionar remotes, navegar arquivos e gerenciar transferências, dependendo da sua configuração do Rclone.

## Solução de problemas

Se o dashboard não carregar ou não conectar, verifique os seguintes pontos.

### Problemas comuns

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Navegador não abre a página | Rclone não está rodando | Inicie o `rclone rcd` novamente e verifique a saída no terminal |
| Dashboard carrega mas não conecta | `--rc-allow-origin` está incorreto | Defina para a URL exata do navegador |
| Acesso remoto falha | Porta `5572` está bloqueada | Abra a porta no firewall ou use um reverse proxy |
| Falha na autenticação | Usuário ou senha errados (`--rc-user` ou `--rc-pass`) | Verifique suas credenciais |
| Configuração do reverse proxy falha | Header ou origem incompatível | Verifique os headers do proxy e o `--rc-allow-origin` |

### Revisão de logs

Sempre revise primeiro a saída do console do Rclone. O material fornecido não inclui um caminho de log específico para o Yet Another Rclone Dashboard, então o passo mais confiável é inspecionar a saída do processo ativo do Rclone.

:::tip Prefira HTTPS para Acesso Remoto
Se quiser acessar o dashboard pela internet, coloque-o atrás de um reverse proxy com TLS em vez de expor HTTP puro diretamente.
:::

## Notas adicionais

O rascunho fornecido menciona cenários opcionais com Docker e build a partir do código-fonte, mas o material do projeto não inclui instruções verificadas para implantação via Docker no conteúdo referenciado. Por isso, este guia não fornece comandos Docker para evitar documentar comportamentos não verificados.

Da mesma forma, o nome exato do diretório interno do build pode variar conforme a estrutura do arquivo da release, então confirme o conteúdo da pasta extraída antes de definir `[your_dashboard_path]`.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard with Rclone on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂