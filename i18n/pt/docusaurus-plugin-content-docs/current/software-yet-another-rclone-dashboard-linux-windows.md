---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprenda a configurar o Yet Another Rclone Dashboard como uma interface moderna para rclone gui e rclone browser em sistemas Linux e Windows. -> Saiba mais agora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Yet Another Rclone Dashboard é um dashboard web moderno para o `rclone rcd` que oferece uma interface gráfica para navegar em arquivos, inspecionar remotes e gerenciar sua configuração do Rclone. Neste guia, você vai aprender como implantá-lo no Linux ou Windows e conectá-lo com segurança ao seu daemon Rclone existente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu sistema atende aos requisitos básicos e que o Rclone já está disponível.

### Requisitos

| Requisito | Detalhes |
|---|---|
| Sistema operacional | Linux ou Windows |
| Versão do Rclone | `v1.72.0` ou superior recomendado |
| Método de acesso | Console local, SSH ou RDP |
| Rede | Acesso à URL do dashboard pelo seu navegador |
| Porta padrão | `5572/tcp` |

### O que você precisa saber primeiro

Yet Another Rclone Dashboard não é um serviço de armazenamento independente. Ele é uma interface para o `rclone rcd`, que é o modo daemon de controle remoto do Rclone. Isso significa que você deve iniciar o `rclone rcd` com as opções web corretas para que o dashboard possa carregar e se comunicar com o backend.

:::info Rclone é obrigatório
Você precisa de uma instalação funcional do [Rclone](https://rclone.org/) antes de usar este dashboard. Se o Rclone ainda não estiver instalado, instale e configure-o primeiro.
:::

### Checklist de preparação recomendada

| Tarefa | Por que é importante |
|---|---|
| Instalar o Rclone | Necessário para rodar o `rclone rcd` |
| Configurar pelo menos um remote | Necessário para navegar em armazenamento na nuvem, como `rclone google drive` |
| Abrir ou encaminhar a porta necessária | Necessário para acesso remoto pelo navegador |
| Decidir entre acesso local ou remoto | Define se a autenticação será necessária |

## Entendendo como o dashboard funciona

Yet Another Rclone Dashboard é uma aplicação web estática que se conecta à API de controle remoto do Rclone. Você pode servir os arquivos do dashboard diretamente pelo Rclone ou hospedar o frontend separadamente com um servidor web como Nginx ou Caddy.

### Principais funcionalidades

Baseado nas informações do projeto publicado, o dashboard oferece as seguintes funções:

| Funcionalidade | Descrição |
|---|---|
| Perfis múltiplos de conexão | Conecte-se a diferentes instâncias do `rclone rcd` |
| Informações do sistema | Veja o status do Rclone e detalhes do ambiente |
| Inspeção de remotes | Revise remotes disponíveis e dados de configuração |
| Navegador de arquivos | Navegue por diretórios e gerencie arquivos |
| Visualização de mídia | Pré-visualize conteúdos suportados |
| Visualização de transferências | Monitore a atividade de transferências |
| Interface de configurações | Ajuste opções relacionadas ao dashboard |

### Quando usar este dashboard

Este projeto é útil se você quer uma interface leve para `rclone gui` ou `rclone browser` em vez de trabalhar apenas no terminal. Pode ser especialmente útil para gerenciar remotes na nuvem a partir de um VPS, servidor dedicado ou sistema Windows local.

## Métodos de instalação

Você pode implantar o Yet Another Rclone Dashboard de várias formas. A opção correta depende se você quer a configuração mais simples, uma instalação manual ou um reverse proxy na frente do serviço.

### Método 1: Servir o dashboard com arquivos locais

Este método usa a build extraída do dashboard com a opção `--rc-files` do Rclone.

#### Baixar a release

Baixe o arquivo da última release na página de releases do projeto no GitHub:

- Projeto no GitHub: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Última release verificada no material fonte: `v0.3.8`
- Arquivo da release: `yet-another-rclone-dashboard-v0.3.8.zip`

Extraia o arquivo para um local de sua escolha.

Exemplos de locais:

| Plataforma | Caminho exemplo |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Iniciar o Rclone no Linux

Se você estiver rodando o dashboard localmente na mesma máquina e quiser acesso local pelo navegador, pode vinculá-lo ao `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Se quiser acessar remotamente de outro dispositivo, use autenticação e escute em todas as interfaces.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[seu_usuario_rc] \
  --rc-pass=[sua_senha_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[seu_ip_servidor]:5572
```

#### Iniciar o Rclone no Windows

Abra o `Prompt de Comando` ou `PowerShell` e execute:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[seu_usuario_rc] `
  --rc-pass=[sua_senha_rc] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[seu_ip_servidor]:5572
```

Substitua os placeholders pelos seus valores:

| Placeholder | Significado |
|---|---|
| `[seu_usuario_rc]` | O nome de usuário usado para login na API do Rclone |
| `[sua_senha_rc]` | A senha usada para proteger a API do Rclone |
| `[seu_ip_servidor]` | O endereço IP público ou privado usado para acessar o dashboard |

:::caution Não exponha uma API Rclone sem autenticação
Não use `--rc-no-auth` junto com `0.0.0.0:5572` em um servidor acessível pela internet. Isso exporia sua interface de controle do Rclone sem proteção.
:::

### Método 2: Usar o fetcher WebGUI do Rclone

Este método permite que o Rclone busque o dashboard automaticamente em vez de baixar manualmente os arquivos da build. Pode simplificar a implantação para uma configuração rápida.

#### Exemplo de acesso local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemplo de acesso remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[seu_usuario_rc] \
  --rc-pass=[sua_senha_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[seu_ip_servidor]:5572
```

:::note Comportamento do fetch automático
O caminho exato usado pelo Rclone para os assets da GUI buscados depende do seu ambiente Rclone. Se precisar de controle total sobre arquivos e atualizações, o método manual com `--rc-files` geralmente é mais fácil de gerenciar.
:::

### Método 3: Servir o frontend com um servidor web

Como o projeto é uma aplicação web estática, você pode hospedar o frontend separadamente com um servidor web e manter o `rclone rcd` rodando em segundo plano.

#### Exemplo Nginx

```nginx
server {
    listen 80;
    server_name [seu_dominio];

    location / {
        root /caminho/para/build-extraida;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Exemplo Caddy

```caddy
[seu_dominio] {
    root * /caminho/para/build-extraida
    file_server
}
```

Essa abordagem é útil se você já usa uma stack de reverse proxy e quer servir o dashboard de um domínio personalizado.

:::tip Melhor prática para reverse proxy
Se usar um domínio ou reverse proxy, defina `--rc-allow-origin` para a URL exata que você abre no navegador, como `https://[seu_dominio]`.
:::

### Método 4: Reverse proxy avançado com autenticação externa

Uma configuração avançada pode usar um gateway de autenticação externo e passar o usuário autenticado para o Rclone via header. Destinado a usuários experientes.

#### Exemplo Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/caminho/para/build-extraida' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[seu_dominio]
```

#### Exemplo Caddy

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

:::danger Configuração avançada de autenticação
A autenticação baseada em header deve ser usada apenas atrás de um reverse proxy confiável. Se mal configurada, pode permitir acesso não autorizado à sua instância do Rclone.
:::

## Opções importantes do Rclone

As opções a seguir são as mais relevantes ao implantar o Yet Another Rclone Dashboard.

| Opção | Propósito |
|---|---|
| `--rc-files` | Serve os arquivos extraídos do dashboard via Rclone |
| `--rc-web-gui` | Habilita suporte à GUI web via Rclone |
| `--rc-web-fetch-url` | Busca os metadados da release da GUI de uma fonte remota |
| `--rc-user` | Define o nome de usuário da API |
| `--rc-pass` | Define a senha da API |
| `--rc-no-auth` | Desabilita autenticação |
| `--rc-addr` | Define o endereço e porta de escuta |
| `--rc-allow-origin` | Permite acesso do navegador da origem especificada |
| `--rc-web-gui-no-open-browser` | Impede a abertura automática do navegador |
| `--rc-user-from-header` | Aceita o usuário autenticado via header do reverse proxy |

## Orientações de configuração

Após escolher o método de instalação, revise os principais valores de configuração antes do primeiro uso.

### Configurações de autenticação

Se o dashboard for usado apenas localmente na sua máquina, o acesso local sem autenticação pode ser aceitável. Para qualquer configuração remota ou pública, sempre use autenticação.

| Tipo de acesso | Configuração recomendada |
|---|---|
| Apenas local | `127.0.0.1` com `--rc-no-auth` opcional |
| Acesso LAN ou internet | `0.0.0.0` com `--rc-user` e `--rc-pass` |
| Reverse proxy com domínio | Bind em `127.0.0.1` ou privado + autenticação no proxy |

### Origem permitida

O valor de `--rc-allow-origin` deve corresponder à URL de onde seu navegador carrega o dashboard.

Exemplos:

| URL de acesso | `--rc-allow-origin` correspondente |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[seu_ip_servidor]:5572` | `http://[seu_ip_servidor]:5572` |
| `https://[seu_dominio]` | `https://[seu_dominio]` |

Se esse valor não corresponder, o navegador pode bloquear as requisições e o dashboard pode falhar ao carregar corretamente.

## Iniciando e verificando o dashboard

Com o comando rodando, abra o endereço configurado no seu navegador.

### O que esperar

Se a configuração estiver correta, você verá a interface do Yet Another Rclone Dashboard e poderá se conectar ao daemon Rclone configurado.

Exemplos típicos:

| Cenário | URL |
|---|---|
| Acesso local Linux ou Windows | `http://127.0.0.1:5572` |
| Acesso remoto por IP | `http://[seu_ip_servidor]:5572` |
| Acesso via reverse proxy | `https://[seu_dominio]` |

### Passos básicos para verificação

1. Inicie o `rclone rcd` com o método escolhido.
2. Abra a URL do dashboard no navegador.
3. Faça login se a autenticação estiver habilitada.
4. Confirme que remotes, funções do navegador de arquivos ou informações de status estão visíveis.
5. Teste uma ação simples de leitura, como abrir um diretório.

## Solução de problemas

Se o dashboard não carregar ou conectar corretamente, revise as causas comuns a seguir.

### Conexão recusada

Se receber erro de conexão recusada, verifique:

- se o `rclone rcd` está realmente rodando
- se a porta correta `5572` está sendo usada
- se o serviço está escutando na interface esperada
- se o firewall permite acesso de entrada quando necessário

### Problemas de origem no navegador ou login

Se a página carregar mas as requisições API falharem:

- verifique o `--rc-allow-origin`
- confirme que a URL do navegador corresponde exatamente à origem permitida
- verifique `--rc-user` e `--rc-pass`
- certifique-se que o reverse proxy encaminha as requisições corretamente

### Problemas com caminho dos arquivos

Se usar `--rc-files` e a interface não aparecer:

- confirme que os arquivos extraídos do dashboard estão no diretório correto
- verifique a sintaxe do caminho para Linux ou Windows
- certifique-se que o conteúdo do arquivo foi extraído, não apenas baixado

:::tip Verifique a saída do console do Rclone
O Rclone geralmente imprime informações úteis de inicialização e erros diretamente no terminal. Revise essa saída primeiro se o dashboard, `rclone download` ou funções do navegador remoto não funcionarem como esperado.
:::

## Recomendações de segurança

Um dashboard que controla o Rclone pode acessar remotes configurados e operações de arquivos, então a segurança é importante.

| Recomendação | Motivo |
|---|---|
| Use autenticação para acesso remoto | Protege a API do Rclone |
| Vincule a `127.0.0.1` sempre que possível | Reduz exposição |
| Use HTTPS atrás de um reverse proxy | Protege credenciais em trânsito |
| Limite a exposição no firewall | Reduz superfície de ataque |
| Use credenciais fortes | Evita acesso não autorizado |

:::caution Remotes sensíveis
Se sua configuração do Rclone inclui armazenamento na nuvem como Google Drive, expor o dashboard de forma insegura pode também expor o acesso a esses remotes e dados.
:::

## Informações adicionais do projeto

O projeto está publicado no GitHub e foi destaque no Self-Host Weekly em 10 de abril de 2026.

| Item | Valor |
|---|---|
| Nome do projeto | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Fonte | [Repositório GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Destaque semanal | [Self-Host Weekly (10 de abril de 2026)](https://selfh.st/weekly/2026-04-10/) |
| Release verificada do material fonte | `v0.3.8` |

## Conclusão

Parabéns, você configurou com sucesso o Yet Another Rclone Dashboard no Linux ou Windows. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂