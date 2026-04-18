---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Configure o Yet Another Rclone Dashboard, uma interface gráfica moderna para rclone e navegador rclone para Linux e Windows, para gerenciar seu daemon rclone com segurança -> Saiba mais agora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Yet Another Rclone Dashboard é um dashboard web moderno para `rclone rcd` que oferece uma interface gráfica para gerenciar remotes, navegar por arquivos e revisar transferências. Neste guia, você vai aprender como implantá-lo no Linux ou Windows e conectá-lo à sua configuração existente do Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que seu sistema atende aos requisitos básicos e que o Rclone já está instalado.

### Requisitos

| Componente | Requisito |
| --- | --- |
| Sistema operacional | Linux ou Windows |
| Versão do Rclone | `v1.72.0` ou superior recomendada |
| Método de acesso | Shell local, SSH ou RDP |
| Porta padrão | `5572/tcp` |
| Opcional | Proxy reverso como Nginx ou Caddy |

### O que você precisa antes da instalação

Você precisa do seguinte:

- Uma instalação funcional do [Rclone](https://rclone.org/)
- Pelo menos um remote Rclone configurado se quiser acessar armazenamento em nuvem como *rclone Google Drive*
- Acesso para abrir ou encaminhar a porta `5572` se quiser conectar remotamente
- Um navegador para acessar o dashboard

:::info Requisito do Rclone
Yet Another Rclone Dashboard é apenas uma interface frontend para `rclone rcd`. Ele não substitui o Rclone em si, então você deve instalar e configurar o Rclone primeiro.
:::

### Espaços reservados importantes usados neste guia

Os comandos abaixo usam espaços reservados que você deve substituir pelos seus próprios valores.

| Espaço reservado | Significado |
| --- | --- |
| `[your_dashboard_path]` | Caminho onde os arquivos do dashboard estão armazenados |
| `[your_server_ip]` | Endereço IP público ou privado do seu servidor |
| `[your_domain]` | Nome do domínio usado para acesso via proxy reverso |
| `[your_rc_user]` | Nome de usuário para autenticação RC do Rclone |
| `[your_rc_password]` | Senha para autenticação RC do Rclone |

## Sobre o Yet Another Rclone Dashboard

Yet Another Rclone Dashboard é um frontend web estático publicado no [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Segundo o README do projeto, ele é projetado para `rclone rcd` e suporta recursos como:

- conexão ao Rclone em modo daemon
- gerenciamento de múltiplos perfis de conexão
- inspeção de informações e status do sistema
- navegação por diretórios
- trabalho com remotes e dados de configuração

Por ser um frontend, as operações reais de arquivo ainda são feitas pelo Rclone. Isso significa que o dashboard depende de uma instância `rclone rcd` em execução.

## Métodos de Instalação

Você pode implantar o dashboard de várias formas, dependendo de como deseja acessá-lo. Os métodos mais comuns são usar o Rclone diretamente com arquivos estáticos ou deixar o Rclone buscar a interface web automaticamente.

### Visão geral da instalação

| Método | Melhor para | Observações |
| --- | --- | --- |
| `--rc-files` | Implantações manuais | Você baixa e extrai o dashboard manualmente |
| `--rc-web-gui` com `--rc-web-fetch-url` | Configuração rápida | Rclone busca a última versão do dashboard |
| Servidor web externo | Hospedagem personalizada | Útil com Nginx ou Caddy |
| Proxy reverso com gateway de autenticação | Configurações avançadas | Ideal para acesso remoto seguro |

## Baixar o Dashboard Manualmente

Se quiser controle total sobre a versão implantada, você pode baixar a última versão manualmente nas releases do projeto no GitHub.

### Linux

Crie um diretório para o dashboard, baixe o arquivo da última release e extraia-o.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

No Windows, baixe o arquivo da release na página oficial do GitHub e extraia em uma pasta como:

```text
C:\rclone-dashboard
```

:::note Versão da Release
No momento da escrita, a última release verificada é a `v0.3.8`. Se houver uma versão mais recente, você pode usá-la no lugar.
:::

## Iniciar o Dashboard com Rclone

Com os arquivos disponíveis, você pode iniciar o `rclone rcd` e servir o dashboard pelo próprio Rclone.

### Acesso local no Linux

Use este método se quiser acessar o dashboard apenas localmente no mesmo sistema.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Acesso remoto no Linux

Use este método se quiser acessar o dashboard de outro dispositivo pela rede.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Acesso local no Windows

Abra o Prompt de Comando ou PowerShell e execute:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Acesso remoto no Windows

Para acesso remoto, execute:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Não Exponha uma GUI Rclone Sem Proteção
Se você vincular o Rclone a `0.0.0.0`, não use `--rc-no-auth`. Sempre proteja o acesso remoto com autenticação ou proxy reverso.
:::

## Usar o Rclone WebGUI Fetcher

O Rclone também pode buscar o dashboard automaticamente do GitHub. Isso é útil se você não quiser baixar e extrair os arquivos manualmente.

### Modo local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Modo remoto

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Atualizações Automáticas
Este método é prático se você quiser que o Rclone busque automaticamente a última versão do dashboard. Geralmente é a opção mais rápida para testar uma nova implantação da GUI do rclone.
:::

## Servir o Dashboard com um Servidor Web

Como o Yet Another Rclone Dashboard é um frontend estático, você também pode hospedá-lo com um servidor web padrão e manter o `rclone rcd` rodando separadamente em segundo plano.

### Exemplo Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemplo Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Este método é útil se você já usa um proxy reverso ou quer um acesso mais limpo baseado em domínio para seu app dashboard.

## Configuração Avançada de Proxy Reverso

Se quiser proteger o acesso com uma camada externa de autenticação, você pode usar um proxy reverso na frente do Rclone e encaminhar o usuário autenticado via header.

### Comando Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Exemplo Caddy com header de usuário encaminhado

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Autenticação Avançada
A implementação exata do gateway de autenticação depende do seu ambiente. O exemplo acima mostra apenas o padrão de integração entre Rclone e proxy reverso. Se você usar software adicional como um provedor de identidade ou plugin do Caddy, configure conforme a documentação oficial desse software.
:::

## Referência de Configuração

As opções RC do Rclone mais importantes usadas com este dashboard estão listadas abaixo.

| Opção | Finalidade |
| --- | --- |
| `--rc-files` | Serve os arquivos extraídos do dashboard |
| `--rc-web-gui` | Habilita suporte ao Rclone WebGUI |
| `--rc-web-fetch-url` | Busca metadados da release do dashboard no GitHub |
| `--rc-no-auth` | Desativa autenticação, adequado apenas para uso local |
| `--rc-user` | Define o nome de usuário RC do Rclone |
| `--rc-pass` | Define a senha RC do Rclone |
| `--rc-addr` | Define o endereço e porta de escuta |
| `--rc-allow-origin` | Permite acesso do navegador a partir da URL especificada |
| `--rc-web-gui-no-open-browser` | Impede abertura automática do navegador |
| `--rc-user-from-header` | Aceita usuário autenticado via header do proxy |

### Escolhendo o `--rc-allow-origin` correto

Defina `--rc-allow-origin` para a URL exata que você usa no navegador.

| Tipo de acesso | Valor de exemplo |
| --- | --- |
| Acesso local | `http://127.0.0.1:5572` |
| Acesso remoto por IP | `http://[your_server_ip]:5572` |
| Proxy reverso com HTTPS | `https://[your_domain]` |

:::caution A Origem Deve Coincidir
Se `--rc-allow-origin` não corresponder à URL usada no navegador, o dashboard pode não carregar corretamente devido a restrições de segurança do navegador.
:::

## Acessar e Verificar o Dashboard

Com o `rclone rcd` rodando, abra o dashboard no seu navegador.

### URLs comuns de acesso

| Cenário | URL |
| --- | --- |
| Máquina local | `http://127.0.0.1:5572` |
| Remoto por IP | `http://[your_server_ip]:5572` |
| Proxy reverso | `https://[your_domain]` |

### O que verificar após iniciar

Depois de abrir a página, verifique o seguinte:

- a interface do Yet Another Rclone Dashboard carrega
- seus remotes configurados estão visíveis
- a navegação de arquivos funciona na visualização do navegador Rclone
- os painéis de transferência e informações do sistema respondem corretamente

Se a página não carregar, verifique primeiro a saída do console do Rclone. Erros de autenticação, incompatibilidade de origem e problemas de binding de porta são as causas mais comuns.

## Recomendações de Segurança

Rodar um dashboard para seu armazenamento em nuvem exige configurações cuidadosas de segurança, especialmente se exposto na internet.

### Práticas recomendadas de segurança

| Recomendação | Motivo |
| --- | --- |
| Use `--rc-user` e `--rc-pass` para acesso remoto | Evita acesso não autenticado |
| Prefira HTTPS via proxy reverso | Protege credenciais em trânsito |
| Vincule a `127.0.0.1` sempre que possível | Reduz exposição |
| Restrinja acesso no firewall à porta `5572/tcp` | Limita superfície de ataque |
| Evite `--rc-no-auth` em redes públicas | Evita acesso aberto à sua instância Rclone |

:::danger Risco de Exposição Pública
Uma instância `rclone rcd` exposta e sem proteção pode permitir acesso aos seus remotes e arquivos configurados. Se você está se perguntando "o rclone é seguro", a resposta depende muito de quão seguro você expõe e autentica o serviço.
:::

## Solução de Problemas

Se o dashboard não funcionar como esperado, use as verificações abaixo.

### A página do dashboard não abre

Causas possíveis:

- `rclone rcd` não está rodando
- a porta `5572` está bloqueada por firewall
- o serviço está vinculado a `127.0.0.1` mas você tenta conectar remotamente

### A interface carrega mas as ações falham

Causas possíveis:

- `--rc-user` ou `--rc-pass` inválidos
- `--rc-allow-origin` incorreto
- configuração do remote Rclone ausente ou quebrada

### O dashboard não carrega via proxy reverso

Causas possíveis:

- proxy aponta para backend errado
- URL HTTPS não corresponde ao `--rc-allow-origin`
- headers necessários não são passados corretamente

### Verificações úteis

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Teste o endpoint local:

```bash
curl http://127.0.0.1:5572
```

:::tip Verifique os Logs do Rclone Primeiro
A maioria dos problemas de inicialização e conexão aparece diretamente no terminal ou logs do serviço onde o `rclone rcd` está rodando. Sempre revise esses logs antes de alterar sua configuração.
:::

## Notas Adicionais

O Yet Another Rclone Dashboard foi destaque no Self-Host Weekly em 10 de abril de 2026 e está hospedado publicamente no GitHub. No momento da escrita, o projeto é uma solução focada em frontend para melhorar a experiência de gerenciar o Rclone via dashboard baseado em navegador.

Alguns métodos de implantação como Docker podem ser possíveis em ambientes personalizados, mas não havia instruções verificadas de implantação Docker no material fonte fornecido. Por isso, este guia cobre apenas métodos de configuração diretamente suportados pelas informações do projeto.

## Conclusão

Parabéns, você instalou e configurou com sucesso o Yet Another Rclone Dashboard no Linux ou Windows. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você!