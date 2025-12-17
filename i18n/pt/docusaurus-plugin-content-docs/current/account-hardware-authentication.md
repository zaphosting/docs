---
id: account-hardware-authentication
title: "Autenticação por hardware (Passkey)"
description: "Descubra como aumentar a segurança da sua conta com passkey e proteger suas informações pessoais de forma eficaz → Saiba mais agora"
sidebar_label: Autenticação por hardware
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Introdução

A Autenticação por Hardware usando Passkeys é um método moderno e resistente a phishing para proteger sua conta de usuário. Em vez de usar uma senha tradicional, é usada um par de chaves criptográficas. A chave privada fica armazenada com segurança no seu dispositivo e nunca sai dele. A autenticação é feita localmente usando verificação biométrica, como impressão digital ou reconhecimento facial, ou alternativamente um PIN do dispositivo.

## Requisitos

Para usar a Autenticação por Hardware com Passkeys, seu setup precisa atender a certos requisitos. Você precisa de um dispositivo compatível, como smartphone, tablet ou computador. O sistema operacional e o navegador devem suportar Passkeys ou WebAuthn. Um bloqueio de tela deve estar configurado no dispositivo, por exemplo, impressão digital, Face ID ou um PIN local.

## Ativar autenticação

Para ativar a Autenticação por Hardware, abra as configurações do perfil na área do cliente e vá para a seção Segurança (Configurações do Perfil → Segurança). Nessa área, você pode configurar as opções de segurança da sua conta. Selecione Autenticação por Hardware para continuar com a configuração.

Após selecionar essa opção, uma janela popup será aberta. Nessa janela, clique no botão chamado Adicionar autenticador para iniciar o processo de configuração.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

A configuração continua com a criação de um login Passkey para a ZAP-Hosting. Durante essa etapa, você será solicitado a definir um PIN de recuperação. Esse PIN é necessário para recuperar o acesso caso o método principal de autenticação fique temporariamente indisponível e deve ser guardado com segurança.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

Depois de confirmar esses passos e configurar com sucesso a Autenticação por Hardware via Passkey, você será automaticamente desconectado uma vez. Isso é uma medida normal de segurança e garante que o novo método de autenticação seja aplicado corretamente.

No próximo login, após inserir seu nome de usuário e senha, você verá a opção de Autenticação por Hardware. Selecione essa opção e confirme a solicitação de autenticação no seu dispositivo para completar o processo de login.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## Desativar autenticação

Para desativar a autenticação de dois fatores, vá para **Configurações do Perfil → Segurança**. Se o usuário ainda conseguir fazer login, o autenticador configurado pode ser removido das configurações de segurança a qualquer momento.

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## Perguntas Frequentes

Se você ainda estiver em dúvida sobre usar a Autenticação por Hardware ou tiver perguntas sobre seu impacto na sua conta, as informações a seguir ajudam a esclarecer dúvidas comuns e explicam como o recurso funciona na prática na ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />