---
id: vserver-windows-troubleshooting-icmpv4-echo
title: "Solução de Problemas de Rede: ICMPv4 Echo ausente – Servidor parece offline"
description: "Descubra como liberar requisições ICMPv4 Echo no Firewall do Windows para que seu servidor seja detectado corretamente pelos sistemas de monitoramento → Saiba mais agora"
sidebar_label: ICMPv4 Echo ausente
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Em algumas situações, um servidor Windows pode parecer **offline no painel de controle** mesmo que o sistema esteja funcionando normalmente. Esse comportamento geralmente está relacionado às configurações do firewall que bloqueiam as **requisições ICMPv4 Echo**. Essas requisições são usadas pelo conhecido comando `ping` e são comumente utilizadas por sistemas de monitoramento para determinar se um servidor ou endereço IP está acessível.

Se o Firewall do Windows bloquear as requisições ICMP Echo, o sistema de monitoramento não consegue receber uma resposta do servidor. Como resultado, o painel pode mostrar o servidor ou os endereços IP atribuídos como offline, mesmo que o servidor esteja funcionando sem problemas.

![img](https://screensaver01.zap-hosting.com/index.php/s/ptD4W4MkAo85PAo/download)



## Causa

A razão mais comum para esse problema é a ausência de uma regra no **Windows Defender Firewall** que permita requisições ICMPv4 Echo de entrada. Sem essa regra, o firewall bloqueia as requisições ping por padrão.

Os sistemas de monitoramento dependem dessas respostas para determinar a disponibilidade do servidor, por isso o sistema pode parecer offline mesmo que os serviços no servidor continuem operando normalmente.



## Solução

Para resolver esse problema, é necessário criar uma regra no firewall que permita requisições ICMPv4 Echo. Comece estabelecendo uma conexão via VNC. Para isso, clique em **Console VNC** na seção de gerenciamento do VPS e faça login com suas credenciais habituais.

![img](https://screensaver01.zap-hosting.com/index.php/s/mDQt7LLbLNSPC6a/download)

Depois de logado, abra a interface do **Windows Defender Firewall com Segurança Avançada**. Pressione `Windows + R`, digite o comando abaixo e confirme com Enter:

```
wf.msc
```
A janela de configuração avançada do firewall será aberta. No menu de navegação à esquerda, selecione **Regras de Entrada**, já que o servidor deve aceitar requisições ICMP de entrada. No lado direito, escolha **Nova Regra** para criar uma nova regra de firewall.

Durante o processo de criação da regra, escolha **Personalizado** como tipo de regra. Na próxima etapa, selecione o tipo de protocolo **ICMPv4**. Após selecionar o protocolo, abra as configurações de **Personalizar** e habilite a opção para **Echo Request**, que permite que o servidor responda às requisições ping.

Continue no assistente e selecione **Permitir a conexão** como ação para essa regra. Na etapa de seleção de perfil, normalmente você pode habilitar a regra para todos os perfis, para que funcione independentemente de o servidor estar em uma rede pública, privada ou de domínio.

Por fim, dê um nome claro para a regra, por exemplo `Permitir Requisições ICMPv4 Echo`. Após finalizar o assistente, a nova regra permitirá imediatamente as requisições ICMP Echo de entrada.

![img](https://screensaver01.zap-hosting.com/index.php/s/iciYwqAkYLTMkgC/download)



## Verificação

Depois que a regra for criada, você pode verificar se o servidor responde às requisições ping. De outro sistema, execute o comando:

```
ping <SEU_ENDEREÇO_IP_DO_SERVIDOR>
```
Se o servidor responder com sucesso, o sistema de monitoramento também poderá detectá-lo novamente. Após um curto período, o status do servidor no painel deve mudar de offline para online.



## Conclusão

Parabéns! Criando a regra ICMPv4 Echo no Firewall do Windows, você garantiu que seu VPS Windows possa responder às requisições ping novamente.

Isso permite que os sistemas de monitoramento detectem corretamente a disponibilidade do seu servidor e evita que ele apareça como offline no painel de controle.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂