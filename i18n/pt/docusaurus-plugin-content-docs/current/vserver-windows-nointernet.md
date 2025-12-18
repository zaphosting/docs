---
id: vserver-windows-nointernet
title: "VPS: Solução de Problemas Sem Internet"
description: "Descubra como solucionar e corrigir problemas de conexão com a internet no seu VPS Windows de forma eficaz → Saiba mais agora"
sidebar_label: Solução de Problemas Sem Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma conexão de internet interrompida ou com falhas pode ser causada por vários motivos, como endereço IP, máscara de sub-rede, gateway, servidor DNS ou configurações de firewall incorretas. Neste guia, vamos explicar como você pode solucionar e resolver possíveis problemas de rede.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Como Corrigir Problemas de Conexão com a Internet no VPS Windows" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja se estiver com pressa ou só quiser absorver a informação do jeito mais legal possível!"/>



<InlineVoucher />

## Acesso VNC sem Internet

Caso você não consiga se conectar ao seu servidor via RDP (Área de Trabalho Remota) por causa da conexão de internet não funcionar, uma alternativa é usar o console VNC (Virtual Network Computing) disponível no nosso site.

Essa opção permite que você acesse seu servidor e resolva problemas mesmo sem conexão com a internet. Você pode acessá-la indo até a seção **Ferramentas->Console VNC** no painel web do seu servidor.

Nessa página, você poderá ativar o console usando o botão **Abrir Cliente Web** e fazer login com suas credenciais habituais.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Métodos de Solução de Problemas

### Verificar Endereço IP, Máscara de Sub-rede e Configurações de Gateway

O primeiro passo para solucionar problemas é garantir que a configuração técnica do adaptador de rede no seu servidor esteja correta, incluindo o endereço IP, máscara de sub-rede e gateway.

Comece indo até a seção **Configurações->Endereços IP** no painel web do seu servidor, onde você poderá ver todos os endereços IP que você atualmente aluga com seu serviço.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Agora acesse seu servidor via RDP ou pelo Console VNC se estiver enfrentando problemas. Vá até as Configurações do Adaptador de Rede do Windows seguindo o caminho: 
```
Configurações -> Rede e Internet -> Alterar opções do adaptador -> Adaptador de Rede
```

Encontre a opção **Protocolo de Internet, Versão 4 (TCP/IPv4)** na lista e selecione **Propriedades**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Configurando o Adaptador

Compare as informações encontradas no adaptador e certifique-se de que estão configuradas da seguinte forma:
- Endereço IP: Deve ser o endereço IP encontrado na página **Endereços IP** no painel web.
- Máscara de Sub-rede: Geralmente deve ser `255.255.255.0`, pois nossa rede usa classe C.
- Gateway Padrão: Deve ser seu endereço IP, igual ao primeiro valor, mas com o último octeto (`.xxx`) removido e substituído por `.1`.

#### Exemplo de Configuração

:::info
Lembre-se que este é um **exemplo** para facilitar o entendimento. Você deve substituir o endereço IP pelo endereço IP **do seu próprio** servidor.
:::

Com um endereço IP `185.223.28.163`, sua configuração deve ficar assim:

| Configuração    | Valor          |
| --------------- | -------------- |
| Endereço IP     | 185.223.28.163 |
| Máscara de Sub-rede | 255.255.255.0  |
| Gateway Padrão  | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

Quando estiver pronto, clique em **Ok** para aplicar as mudanças. Recomendamos reiniciar o servidor para completar o processo de solução de problemas.



### Configurações do Servidor DNS

Outro passo para solucionar problemas caso você continue enfrentando dificuldades com a internet é garantir que o servidor DNS esteja configurado corretamente. Você deve substituir os valores DNS ausentes ou existentes por um host conhecido.

Recomendamos usar os servidores DNS do Google ou da Cloudflare, pois são amplamente usados e confiáveis.

| Provedor DNS | Valores do Servidor DNS               |
| ------------ | ----------------------------------- |
| Google       | Preferencial: 8.8.8.8 / Alternativo: 8.8.4.4 |
| Cloudflare   | Preferencial: 1.1.1.1 / Alternativo: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Quando estiver pronto, clique em **Ok** novamente para aplicar as mudanças. Também recomendamos reiniciar o servidor para completar o processo de solução de problemas.

:::tip
Você pode abrir o prompt de comando (cmd.exe) no seu servidor e executar o seguinte comando para configurar os servidores DNS de forma rápida e simples: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Configurações do Firewall

O último passo para solucionar problemas é garantir que o Firewall do Windows esteja configurado corretamente.

Recomendamos tentar desativar temporariamente todo o Firewall do Windows para ver se os problemas persistem. Use a busca do Windows para abrir as **Configurações do Firewall do Windows Defender** e selecione a opção **Ativar ou desativar o Firewall do Windows Defender** na seção à esquerda.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Se os problemas forem resolvidos com o firewall desativado, é provável que a causa raiz seja uma configuração incorreta do firewall.

A solução para o firewall depende muito do problema que você está enfrentando. Use nosso [guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda para gerenciar regras do firewall.



## Resetar configuração de rede

Você pode resetar a configuração de rede na administração do painel web do seu VPS clicando no botão **Resetar configuração de rede** na página de configurações. Durante esse processo, as configurações de endereço IP, máscara de sub-rede, gateway e servidor DNS são restauradas ao estado original.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Conclusão
Se você seguiu todos os passos, a conexão deve estar funcionando normalmente novamente. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />