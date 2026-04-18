---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Aprenda como configurar o Yet Another Rclone Dashboard, uma interface gráfica moderna para rclone e navegador rclone para Linux e Windows, usando rclone rcd e arquivos de release do GitHub do rclone -> Saiba mais agora"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Yet Another Rclone Dashboard é um dashboard web moderno para o `rclone rcd` que oferece uma interface gráfica para navegar por arquivos, visualizar remotes e gerenciar transferências. Neste guia, você vai aprender o que o software faz, seus requisitos e como executá-lo no Linux ou Windows usando métodos de implantação suportados.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, você precisa de uma instalação funcional do [Rclone](https://rclone.org/), pois o Yet Another Rclone Dashboard é apenas uma interface frontend para o daemon de controle remoto do Rclone.

### Requisitos

Os requisitos a seguir são baseados nas informações disponíveis do projeto e no rascunho de configuração.

| Requisito | Detalhes |
| --- | --- |
| Sistema operacional | Linux ou Windows |
| Software necessário | `rclone` |
| Versão recomendada do Rclone | `v1.72.0` ou superior |
| Software opcional | `Docker`, `Nginx` ou `Caddy`, dependendo do método de implantação |
| Porta padrão | `5572/tcp` |
| Acesso à internet | Necessário se quiser baixar releases ou usar o método web fetch |

### Do que o dashboard depende

Yet Another Rclone Dashboard não substitui o Rclone. Ele se conecta ao `rclone rcd`, que é o modo *daemon de controle remoto* do Rclone.

| Componente | Função |
| --- | --- |
| Yet Another Rclone Dashboard | Frontend web |
| `rclone rcd` | API backend e operações de arquivo |
| Remotes do Rclone | Suas conexões configuradas de armazenamento em nuvem, como Google Drive |

:::info Rclone é Obrigatório
Você não pode usar este dashboard sozinho. É necessário ter o `rclone` instalado e executá-lo no modo daemon com a interface de controle remoto ativada.
:::

### Valores de placeholder usados neste guia

Vários comandos neste guia usam placeholders. Substitua-os pelos seus próprios valores antes de executar os comandos.

| Placeholder | Significado |
| --- | --- |
| `[your_user]` | Nome de usuário para autenticação do controle remoto do Rclone |
| `[your_password]` | Senha para autenticação do controle remoto do Rclone |
| `[your_server_ip]` | Endereço IP público ou privado do seu servidor |
| `[your_domain]` | Nome de domínio usado para acesso via proxy reverso |
| `[your_build_path]` | Caminho para os arquivos extraídos do dashboard |

## Métodos de implantação disponíveis

Você pode executar o Yet Another Rclone Dashboard de várias formas, dependendo de como deseja acessá-lo.

| Método | Ideal para | Observações |
| --- | --- | --- |
| `--rc-files` | Implantações manuais | Usa arquivos estáticos extraídos do build |
| `--rc-web-gui` com `--rc-web-fetch-url` | Configuração rápida | Permite que o Rclone baixe a última release do dashboard |
| Servidor web como Nginx ou Caddy | Hospedagem personalizada | Serve o frontend estático separadamente |
| Proxy reverso com autenticação externa | Configurações avançadas | Útil para autenticação centralizada |

## Baixar a release do dashboard

Se quiser usar o método manual `--rc-files` ou servir o frontend com seu próprio servidor web, primeiro baixe o arquivo da última release no GitHub do projeto.

Fonte oficial do projeto: [Yet Another Rclone Dashboard no GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

No momento da release referenciada, a versão mais recente é `v0.3.8` e inclui o arquivo `yet-another-rclone-dashboard-v0.3.8.zip`.

### Exemplo de download no Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Exemplo de download no Windows

No Windows, baixe o arquivo `.zip` da página de releases do GitHub e extraia para uma pasta como:

```text
C:\yet-another-rclone-dashboard
```

:::note Informação sobre a versão da release
A versão da release pode mudar com o tempo. Se houver uma versão mais nova, use o arquivo atual da página do projeto no GitHub em vez da versão de exemplo mostrada aqui.
:::

## Executar o dashboard com Rclone rc-files

Este é o método mais direto se você já baixou e extraiu os arquivos do frontend.

### Exemplo no Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemplo no Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemplo local na área de trabalho

Se quiser usar o dashboard apenas localmente no mesmo sistema, pode vinculá-lo ao `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Não Exponha o Rclone Sem Autenticação
Use `--rc-no-auth` apenas para testes locais em `127.0.0.1`. Se vincular o Rclone a `0.0.0.0`, proteja-o com autenticação ou um proxy reverso configurado corretamente.
:::

## Executar o dashboard com Rclone web fetch

O Rclone pode baixar automaticamente uma interface web, o que pode simplificar a implantação se suportado pelo seu ambiente.

### Exemplo no Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemplo no Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Explicação das flags importantes

| Flag | Função |
| --- | --- |
| `--rc-web-gui` | Ativa suporte à interface web no Rclone |
| `--rc-web-fetch-url` | Aponta o Rclone para os metadados da última release |
| `--rc-user` | Define o nome de usuário para login |
| `--rc-pass` | Define a senha para login |
| `--rc-addr` | Define o endereço IP e porta para escutar |
| `--rc-allow-origin` | Permite requisições do navegador da URL especificada |
| `--rc-web-gui-no-open-browser` | Impede a abertura automática do navegador |

:::tip Combine o Origin Exatamente
Defina `--rc-allow-origin` para a URL exata que você usa no navegador, incluindo o protocolo correto como `http://` ou `https://`. Isso é especialmente importante ao usar proxy reverso.
:::

## Servir o dashboard com um servidor web

Como o Yet Another Rclone Dashboard é uma aplicação web estática, você também pode hospedá-lo com um servidor web padrão como Nginx ou Caddy.

Essa abordagem é útil se quiser servir o frontend em uma porta ou domínio enquanto o Rclone roda separadamente em segundo plano.

### Exemplo Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemplo Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### O que considerar

Se você servir o frontend separadamente, o Rclone ainda precisa estar rodando com configurações `rc` compatíveis em segundo plano. Também deve garantir que as requisições do navegador sejam permitidas a partir da URL do seu frontend.

| Configuração | Exemplo |
| --- | --- |
| URL do frontend | `https://[your_domain]` |
| Endereço de bind do Rclone | `127.0.0.1:5572` ou `0.0.0.0:5572` |
| Origem permitida | `https://[your_domain]` |

## Configuração avançada com autenticação via proxy reverso

Para ambientes avançados, você pode colocar o dashboard atrás de um proxy reverso e usar um gateway de autenticação externo. O rascunho fornecido menciona o uso da opção `--rc-user-from-header` do Rclone para isso.

### Exemplo Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Configuração Avançada de Autenticação
Este método depende do seu proxy reverso e da pilha de autenticação. A configuração exata para ferramentas como `caddy-security` está fora do escopo deste guia, mas o exemplo acima mostra como o dashboard pode receber um cabeçalho de usuário autenticado.
:::

## Configurar acesso e segurança

Antes de começar a usar o dashboard, revise as configurações de acesso mais importantes.

### Valores recomendados de configuração

| Opção | Recomendação |
| --- | --- |
| `--rc-user` | Defina um nome de usuário dedicado, como `zaphosting` |
| `--rc-pass` | Use uma senha forte |
| `--rc-addr` | Use `127.0.0.1:5572` atrás de um proxy reverso sempre que possível |
| `--rc-allow-origin` | Combine exatamente a URL usada no navegador |
| Firewall | Abra apenas a porta `5572/tcp` se o acesso direto for necessário |

### Boas práticas de segurança

- Use autenticação ao expor o serviço em rede
- Prefira proxy reverso com HTTPS para acesso público
- Limite o acesso direto à porta `5572/tcp` sempre que possível
- Mantenha o Rclone atualizado se usar para acesso a armazenamento em nuvem como `rclone google drive`

:::danger Risco de Exposição Pública
O acesso remoto de controle do Rclone pode fornecer poderosas capacidades de gerenciamento de arquivos e remotes. Não o exponha publicamente sem autenticação e restrições de rede adequadas.
:::

## Iniciar e verificar o dashboard

Com a configuração escolhida pronta, inicie o `rclone rcd` e abra o dashboard no seu navegador.

### Exemplos de acesso

| Cenário | URL |
| --- | --- |
| Acesso local | `http://127.0.0.1:5572` |
| Acesso direto ao servidor | `http://[your_server_ip]:5572` |
| Acesso via proxy reverso | `https://[your_domain]` |

### O que você deve ver

Se tudo estiver configurado corretamente, a interface do Yet Another Rclone Dashboard deve carregar e permitir que você:

- conecte ao daemon do Rclone
- inspecione remotes configurados
- navegue por arquivos
- visualize transferências
- revise configurações e informações do sistema

Se a página não carregar, verifique o seguinte:

| Verificação | Por que é importante |
| --- | --- |
| Processo do Rclone está rodando | O dashboard precisa do daemon backend |
| Porta `5572` está acessível | Necessário para acesso direto |
| `--rc-allow-origin` está correto | Evita problemas de acesso pelo navegador |
| Nome de usuário e senha estão corretos | Necessário para acesso autenticado |
| Cabeçalhos do proxy reverso estão corretos | Importante para configurações avançadas de autenticação |

## Solução de problemas

### Navegador não conecta

Se o navegador não abrir o dashboard, verifique se o Rclone está escutando no endereço e porta esperados.

No Linux, você pode checar as portas abertas com:

```bash
ss -tulpn | grep 5572
```

No Windows, use:

```powershell
netstat -ano | findstr 5572
```

### Falha na autenticação

Se o login não funcionar:

- confirme os valores usados em `--rc-user` e `--rc-pass`
- certifique-se que seu proxy reverso não está removendo cabeçalhos necessários
- evite usar `--rc-no-auth` em interfaces remotas ou públicas

### Frontend carrega mas ações falham

Isso geralmente indica um problema de origem ou comunicação com o backend.

Revise cuidadosamente estes valores:

- `--rc-allow-origin`
- `--rc-addr`
- endereço alvo do proxy reverso
- URL usada no navegador para acessar o dashboard

:::tip Use Logs para Diagnóstico Rápido
Se o dashboard não funcionar como esperado, revise primeiro a saída do console do Rclone. Problemas de autenticação, bind e origem costumam aparecer imediatamente lá.
:::

## Referência do software

### Detalhes do projeto

| Item | Valor |
| --- | --- |
| Nome | Yet Another Rclone Dashboard |
| Categoria | Frontend |
| Fonte | [Repositório GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Release referenciada | `v0.3.8` |
| Arquivo da release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recomendado | `rclone v1.72.0` ou superior |

### Funcionalidades conhecidas da página do projeto

Baseado nas informações do repositório referenciado, o dashboard inclui suporte para as seguintes áreas:

- múltiplos perfis de conexão
- informações do sistema e resumo de status do Rclone
- inspeção de remotes
- importação e exportação da configuração do Rclone
- navegação e filtragem de arquivos
- visualizações relacionadas a transferências

:::note Disponibilidade de Funcionalidades
O comportamento das funcionalidades pode mudar entre releases. Se precisar de detalhes exatos para uma versão mais nova, consulte o changelog e notas de release do projeto no GitHub.
:::

## Conclusão

Parabéns, você configurou com sucesso o Yet Another Rclone Dashboard no Linux ou Windows. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂