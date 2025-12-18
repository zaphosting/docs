---
id: abuse-report
title: "Reportar abuso e conteúdo ilegal - Tudo que você precisa saber!"
description: "Descubra como identificar e reportar abusos online para proteger usuários e serviços de forma eficaz → Saiba mais agora"
sidebar_label: Reportar Abuso
---

## Introdução

A internet gera valor. Abusos prejudicam usuários e serviços. Nosso objetivo é detectar e interromper incidentes rapidamente. Você pode reportar suspeitas de abuso para nossa Equipe de Abuso. Analisamos cada denúncia, preservamos evidências, agimos conforme a lei aplicável e nossas políticas, e notificamos as autoridades competentes quando necessário.

## Tipos de Abuso

O abuso pode aparecer de várias formas. Reporte qualquer caso que se encaixe ou esteja próximo das categorias abaixo:

<details>
  <summary>Spam</summary>

Mensagens não solicitadas ou em massa enviadas através dos nossos sistemas ou conteúdo hospedado que acionam filtros de spam. Variantes incluem spam por e-mail, spam em comentários, spam de links para SEO e criação automática de contas. Forneça mensagens de exemplo, cabeçalhos, endereços IP dos remetentes e padrões de envio.

</details>

<details>
  <summary>Ataques e DDoS</summary>

Tráfego hostil com a intenção de interromper serviços ou sondar sistemas. Formas comuns são ataques volumétricos L3 L4, floods HTTP camada 7, amplificação, tentativas de login por força bruta e scans agressivos de portas. Indicadores incluem picos em PPS ou Mbps, taxas elevadas de erros 4xx e 5xx, e falhas repetidas de autenticação de fontes rotativas.

</details>

<details>
  <summary>Violação de direitos autorais e marcas registradas</summary>

Distribuição não autorizada de obras protegidas ou uso indevido de marcas registradas. Variantes incluem espelhos de pirataria, downloads crackeados, personificação de marcas e domínios enganosos. Forneça a obra, titular dos direitos, localização exata e status de autorização.

</details>

<details>
  <summary>Phishing</summary>

Conteúdo criado para coletar credenciais ou dados de pagamento imitando marcas confiáveis. Variantes incluem portais falsos de login, golpes de faturas, iscas via QR ou anexos, e fadiga de MFA. Especifique a marca alvo, pontos de captura e como a página difere do site legítimo.

</details>

<details>
  <summary>GDPR</summary>

Processamento, exposição ou vazamento não autorizado de dados pessoais. Casos típicos incluem índices abertos, buckets mal configurados, scraping sem base legal e logs públicos. Descreva categorias de dados, escopo, sujeitos afetados e causa da exposição.

</details>

<details>
  <summary>CSAM/SAM</summary>

Qualquer material que retrate exploração sexual de humanos. Tolerância zero.

</details>

<details>
  <summary>Conteúdo ilegal</summary>

Conteúdo que viola a lei aplicável, como propaganda extremista, ameaças, discurso de ódio, incitação à violência ou difamação. Variantes incluem doxxing, ameaças explícitas e materiais proibidos pela jurisdição. Forneça a localização exata e, se souber, a base legal envolvida.

</details>

<details>
  <summary>Outros</summary>

Abuso que não se encaixa nas categorias acima, mas que ainda prejudica usuários ou sistemas. Exemplos incluem hospedagem de malware, botnet C2, fraude e mineração de criptomoedas não autorizada. Compartilhe hashes, URLs, padrões C2 e anomalias no uso de recursos.

</details>

## Informações Necessárias

Para garantir um relatório completo e acionável, forneça detalhes que nos permitam identificar o recurso, verificar o incidente e tomar as medidas corretas, incluindo:
- Localização. URL, IP, porta, nome do host, caminho do arquivo, hash
- Marcas de tempo em UTC no formato YYYY-MM-DDTHH:MM:SSZ
- Descrição. O que aconteceu, como foi detectado, impacto observado
- Evidências. Capturas de tela, logs de texto, e-mail completo com cabeçalhos em EML, PCAP curto, NetFlow, cabeçalhos HTTP

## Arquivos Aceitos e Envio

Forneça evidências em formatos claros e acessíveis para nós. Anexe arquivos menores no seu e-mail ou hospede arquivos grandes externamente. Anexe arquivos pequenos a médios diretamente. Prefira formatos abertos e não modificados. Texto puro é melhor que captura de tela de texto.

Para arquivos grandes, compartilhe um link de download estável. Deve ser acessível sem interação ou incluir credenciais claras. Informe o período de validade do link. Adicione checksums para permitir verificação de integridade.

Use formatos padrão como TXT, PDF, PNG, JPG, PCAP ou PCAPNG, EML, HAR, CSV e JSON. Não inclua senhas, chaves privadas ou dados pessoais completos, a menos que estritamente necessário.

Para qualidade, envie e-mails em EML com cabeçalhos completos, logs em texto puro, capturas de rede curtas e relevantes em PCAP ou PCAPNG, e capturas de tela na resolução original.

Para segurança, oculte segredos; se necessário, coloque arquivos em um arquivo protegido por senha e compartilhe a senha separadamente. Para CSAM/SAM, não envie arquivos, forneça apenas links.

## Entre em Contato Conosco

Envie seu relatório para `abuse@zap-hosting.com`. É importante usar um assunto claro como `Relatório de Abuso Phishing` ou `Relatório de Abuso DDoS`. Envie um e-mail por incidente. O exemplo abaixo mostra uma solicitação completa:

```
Para: abuse@zap-hosting.com
Assunto: Relatório de Abuso Força Bruta (SSH)

Localização:
- IP alvo: XXX.XX.XXX.XX
- Serviço: SSH
- Porta: 22
- Nome do host: v12345.zap-hosting.com

Marcas de tempo (UTC):
- Primeiro visto: 2025-08-23T09:12:04Z
- Último visto: 2025-08-23T10:03:31Z

Descrição:
"Tentativas repetidas de login SSH com nomes de usuário e IPs de origem rotativos. Detectado via anomalias no auth.log e taxa elevada de conexões. Autenticação por senha desativada após detecção. Nenhum login bem-sucedido observado."

Evidências:
- trecho do auth.log com múltiplas entradas "Failed password" e "Invalid user"
- trecho do log do fail2ban mostrando bloqueios e endereços de origem
- PCAP de 60 segundos capturando tentativas TCP na porta 22
- Contagens agregadas: 12.438 tentativas de 352 IPs de origem
- Principais fontes com informações ASN

Trecho de log de exemplo:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## O que acontece depois

Nossa Equipe de Abuso processa seu relatório o mais rápido possível e responde prontamente. Revisamos o incidente e priorizamos conforme a gravidade.

Com base na análise, tomamos ações que incluem notificação ao cliente, suspensão temporária/permanente, remoção do conteúdo reportado, preservação de evidências e notificação das autoridades competentes quando necessário.