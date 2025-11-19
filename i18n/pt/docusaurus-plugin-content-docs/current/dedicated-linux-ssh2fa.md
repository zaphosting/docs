---
id: dedicated-linux-ssh2fa
title: "Servidor Dedicado: Autenticação SSH de dois fatores"
description: "Descubra como aumentar a segurança do SSH com o 2FA do Google Authenticator para um acesso mais seguro ao servidor e proteja seu VPS Linux → Saiba mais agora"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O serviço de autenticação SSH de dois fatores (2FA) do Google, conhecido como **Google Authenticator SSH**, aumenta a segurança do acesso SSH (Secure Shell) adicionando uma segunda camada de autenticação. Embora o SSH já ofereça um método seguro para estabelecer uma conexão criptografada com um servidor remoto, a integração do 2FA eleva o nível de segurança ao exigir que os usuários insiram não apenas a senha, mas também um código de verificação único gerado pelo Google Authenticator. Neste guia, vamos explorar o processo de instalação e configuração do serviço **Google Authenticator SSH** em um servidor Linux.

## Instalação

Primeiro, você precisa instalar o Google Authenticator no seu VPS Linux. Execute o seguinte comando:

```
sudo apt install libpam-google-authenticator
```

Você será solicitado a digitar "Y" para instalar o pacote, digite isso, pressione Enter e o Google Authenticator será instalado!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Inicie o Google Authenticator digitando 'google-authenticator'. Certifique-se de que o tamanho da janela seja suficiente para o QR Code, caso contrário, pressione "CTRL+C" e execute novamente.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Agora será perguntado se você deseja executar o programa, digite "Y" para aceitar. Você verá um QR Code. Abra seu app Authenticator no smartphone e escaneie o QR Code. Para este exemplo, usamos o Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Não esqueça de copiar os códigos de backup, eles podem ser usados uma vez cada caso você perca o autenticador.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Agora o app já mostra os códigos que você vai precisar para fazer login depois. Neste caso, fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

As seguintes perguntas serão feitas:

1. Deseja salvar a configuração do Google Authenticator?
2. Deseja permitir apenas um login a cada 30 segundos?
3. O tempo em que um código é válido deve ser aumentado?
4. Devem ser permitidos apenas três logins a cada 30 segundos? (Proteção contra Brute Force)

Por questões de segurança, recomendamos confirmar todas com Sim.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuração

Agora precisamos ajustar o Google Authenticator para que ele seja usado. Isso requer duas alterações.

### /etc/ssh/sshd_config

Ative os módulos necessários no arquivo `/etc/ssh/sshd_config`. Abra o arquivo digitando:
```
sudo nano /etc/ssh/sshd_config
```

Você estará em um editor de texto. Use as setas para navegar, apague e digite livremente. Para salvar, pressione 'CTRL + X', depois 'Y' e por fim 'Enter'.

Certifique-se de que as linhas 'UsePAM' e 'ChallengeResponseAuthentication' estejam definidas como 'yes'. Assim:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Salve o arquivo com 'CTRL + X', depois 'Y' e 'Enter'. Reinicie o SSH com o comando:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Agora vamos adicionar o Google Authenticator no login em `/etc/pam.d/sshd`. Abra o arquivo digitando:
```
sudo nano /etc/pam.d/sshd
```
Role até o final do arquivo e insira a linha:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Salve o arquivo com 'CTRL + X', depois 'Y' e 'Enter'.

## Testando o acesso

Agora é hora de fazer o primeiro login com 2FA. Depois de seguir os passos acima, basta reiniciar sua conexão SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Digite sua senha normalmente. Você será solicitado a inserir um código, basta digitar o código 2FA atual.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

Pronto, você está logado!

## Conclusão

Parabéns, você configurou com sucesso o 2FA para seu acesso SSH. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂