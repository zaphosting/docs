---
id: vserver-linux-ssh2fa
title: "VPS: Autenticação de dois fatores SSH"
description: "Descubra como aumentar a segurança do SSH com o 2FA do Google Authenticator para um acesso mais seguro ao servidor e proteja seu ambiente Linux → Saiba mais agora"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O serviço de autenticação de dois fatores (2FA) do Google para SSH, conhecido como **Google Authenticator SSH**, aumenta a segurança do acesso SSH (Secure Shell) adicionando uma segunda camada de autenticação. Embora o SSH já forneça um método seguro para estabelecer uma conexão criptografada com um servidor remoto, a integração do 2FA eleva o nível de segurança ao exigir que os usuários insiram não só a senha, mas também um código de verificação único gerado pelo Google Authenticator. Neste guia, vamos explorar o processo de instalação e configuração do serviço **Google Authenticator SSH** em um servidor Linux.

<InlineVoucher />

## Instalação

Primeiro, você precisa instalar o Google Authenticator no seu VPS Linux. Execute o seguinte comando:

```
sudo apt install libpam-google-authenticator
```

Você será solicitado a digitar "Y" para instalar o pacote, digite isso, pressione Enter e o Google Authenticator será instalado!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Inicie o Google Authenticator digitando 'google-authenticator'. Certifique-se de que o tamanho da janela seja suficiente para o QR Code, caso contrário, pressione "CTRL+C" e execute novamente.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Agora você será perguntado se deseja executar, digite "Y" para aceitar. Você verá um QR Code. Abra seu app Authenticator no smartphone e escaneie o QR Code. Para este exemplo, usamos o Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Não esqueça de copiar os códigos de backup, eles podem ser usados uma vez cada caso você perca o autenticador.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

Agora o app já mostra os códigos que você vai precisar para fazer login depois. No caso, fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

As seguintes perguntas aparecerão:

1. Deseja salvar a configuração do Google Authenticator?
2. Deseja permitir apenas um login a cada 30 segundos?
3. O tempo em que um código é válido deve ser aumentado?
4. Devem ser permitidos apenas três logins a cada 30 segundos? (Proteção contra Brute Force)

Por questões de segurança, recomendamos confirmar todas com Sim.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Configuração

Agora precisamos ajustar o Google Authenticator para que ele seja usado. Isso requer duas alterações.

### /etc/ssh/sshd_config

Ative os módulos necessários no arquivo `/etc/ssh/sshd_config`. Abra o arquivo digitando:
```
sudo nano /etc/ssh/sshd_config
```

Você estará em um editor de texto. Use as setas para navegar, apague e digite livremente. Para salvar, pressione 'CTRL + X', depois 'Y' e por fim 'Enter'.

Garanta que as linhas 'UsePAM' e 'ChallengeResponseAuthentication' estejam definidas como 'yes'. Assim:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Salve o arquivo com 'CTRL + X', depois 'Y' e 'Enter'. Reinicie o SSH com o comando:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Agora adicionamos o Google Authenticator ao login no arquivo `/etc/pam.d/sshd`. Abra o arquivo digitando:
```
sudo nano /etc/pam.d/sshd
```
Role até o final do arquivo e insira a linha:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Salve o arquivo com 'CTRL + X', depois 'Y' e 'Enter'.

## Testando o acesso

Agora é hora de fazer o primeiro login com 2FA. Depois de seguir os passos acima, basta reiniciar sua conexão SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Digite sua senha normalmente. Você será solicitado a inserir um código, basta digitar o código 2FA atual.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

Pronto, você está logado!

## Conclusão

Parabéns, você ativou e configurou o 2FA para SSH com sucesso! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />