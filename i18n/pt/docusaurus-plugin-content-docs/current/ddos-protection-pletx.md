---
id: ddos-protection-pletx
title: Proteção DDoS PletX na ZAP Hosting
description: "Descubra como a ZAP Hosting protege seus servidores com defesa DDoS proativa e em tempo real, personalizada para cada serviço que você roda → Saiba mais agora"
sidebar_label: PletX
---

## Introdução

Ataques DDoS (Distributed Denial of Service) são tentativas maliciosas de interromper o tráfego normal de um servidor, serviço ou rede alvo, sobrecarregando-o com tráfego excessivo. Para garantir operação estável e sem interrupções para nossos clientes, a ZAP Hosting conta com sistemas dedicados de proteção DDoS, adaptados para cada localização de datacenter.

Uma das tecnologias chave da nossa infraestrutura é o PletX, uma plataforma de proteção altamente adaptativa que filtra e mitiga ataques em tempo real. Este documento explica como o PletX funciona, quais serviços se beneficiam dele e por que ele oferece uma vantagem significativa para ambientes de hospedagem críticos em performance.

## Onde a Proteção é Utilizada

O PletX já está totalmente implementado na nossa localização FFM/Eygelshoven, onde protege todos os produtos hospedados, incluindo servidores de jogos, VPS, servidores dedicados, servidores de voz TeamSpeak, bots TS3 e Discord, além de serviços de hospedagem de sites. Isso garante uma proteção abrangente e consistente em toda a linha de produtos desse local.

Estamos preparando o rollout para nossas localizações nos EUA em Ashburn, Dallas e Los Angeles, onde o PletX também estará disponível muito em breve.

## Como a Proteção DDoS Funciona

A proteção PletX nas nossas localizações está sempre ativa e totalmente sincronizada com nossa rede. Todo o tráfego de entrada é roteado pelo sistema de filtragem PletX antes de chegar à nossa infraestrutura. Isso garante que o tráfego malicioso seja eliminado o quanto antes e nunca alcance seu servidor.

### Detecção Automática de Protocolos

O PletX analisa continuamente o tráfego de entrada e identifica assinaturas específicas de protocolos assim que tráfego real aparece em uma porta. Quando jogadores conectam a um servidor FiveM na sua porta de jogo, por exemplo 30120,

ele detecta a estrutura característica dos pacotes e aplica automaticamente a regra apropriada para FiveM. O mesmo vale para outros serviços; se um servidor Minecraft recebe tráfego na porta 25565, o sistema reconhece o handshake do Minecraft e cria uma regra correspondente.

Quando um usuário conecta a um VPS ou servidor dedicado via SSH na porta 22, o PletX reconhece o handshake SSH e ativa uma regra SSH. Para sistemas Windows, o tráfego RDP na porta 3389 é detectado e uma regra específica para RDP é criada.

Se WireGuard ou OpenVPN forem usados em uma porta customizada, o PletX identifica a primeira troca válida e aplica a regra correta para VPN.

Em todos os casos, uma vez que o PletX identifica o protocolo, somente tráfego legítimo para aquele protocolo é permitido, enquanto tráfego não relacionado é filtrado antes de chegar ao servidor.

### Perfis de Proteção Suportados

O PletX suporta uma ampla gama de protocolos comuns de serviços e jogos. Isso inclui jogos populares como FiveM, Minecraft, títulos que usam o Steam Source Engine, serviços baseados em Metin 2, jogos baseados em RakNet, SAMP, Growtopia e extensões como PlasmoVoice. Aplicações de voz como TeamSpeak também são reconhecidas automaticamente.

Além do tráfego relacionado a jogos, o PletX identifica protocolos de acesso remoto como SSH e RDP, assim como protocolos de rede segura incluindo WireGuard e OpenVPN.

<details>
  <summary>Servidores de jogos</summary>
- FiveM
- Minecraft
- Vários jogos que suportam Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- Jogos baseados em RakNet
- SAMP
- Growtopia
- PlasmoVoice
- e mais..
</details>

<details>
  <summary>Servidores de voz</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Acesso Remoto</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN e Redes Seguras</summary>

- WireGuard
- OpenVPN
</details>

Qualquer protocolo não reconhecido pelo PletX é tratado como desconhecido, o que pode ocasionalmente resultar em falsos positivos ou comportamentos inesperados.

## Tráfego Web e Serviços Não Suportados

Atualmente, o PletX não filtra tráfego HTTP ou HTTPS. Aplicações web ou protocolos não suportados podem, portanto, sofrer falsos positivos ocasionais. Se você for afetado por isso, siga os passos abaixo:

1. Abra um ticket de suporte na ZAP Hosting
2. Analisamos o tráfego
3. O PletX pode aplicar ajustes e correções personalizadas mediante solicitação

Essa abordagem é especialmente indicada para serviços incomuns ou especializados. Para projetos baseados na web, recomendamos continuar usando Cloudflare. Idealmente, isso inclui Cloudflare Proxy ou CDN para sites e Cloudflare Tunnel para FiveM/RedM TxAdmin ou outros dashboards web.

## Desativação Temporária da Proteção

Em breve estará disponível uma função para desativar temporariamente a proteção. Essa opção permitirá que clientes desliguem completamente a proteção DDoS para servidores específicos quando necessário. É especialmente útil para ambientes sem risco significativo de DDoS, sistemas de alto volume como plataformas de telemetria ou monitoramento e aplicações que geram padrões de tráfego incomuns que podem disparar falsos positivos.

A função dá aos usuários avançados controle total sobre o comportamento da rede, enquanto clientes de hospedagem de jogos e aplicações continuam a se beneficiar da proteção automática e confiável.