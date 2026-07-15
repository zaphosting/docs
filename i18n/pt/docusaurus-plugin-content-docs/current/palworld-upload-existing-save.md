---
id: palworld-upload-existing-save
title: "Palworld: Enviar Save Existente"
description: "Aprenda como enviar um save existente do Palworld, enviar os dados do arquivo corretamente e configurar seu servidor para carregar a pasta do mundo certa. -> Saiba mais agora"
sidebar_label: Palworld: Enviar Save Existente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld armazena os dados do mundo do servidor dedicado em uma pasta de save específica e requer uma entrada de configuração correspondente para carregá-la corretamente. Neste guia, você vai aprender como enviar um save existente para seu servidor de jogos Palworld na ZAP-Hosting e configurar o servidor para iniciar com os dados do mundo corretos.

:::danger Fontes de Save Não Suportadas
Você não pode transferir saves da nuvem do Xbox console ou PS5 diretamente para um servidor dedicado Palworld. Apenas saves de uma instalação no PC ou de outro servidor dedicado existente podem ser migrados com este método.
:::



## Preparação

Antes de começar, certifique-se de ter o seguinte:

| Requisito | Detalhes |
| --- | --- |
| Save existente do Palworld | Uma pasta de save de uma instalação no PC ou de outro servidor dedicado |
| Acesso ao seu servidor de jogos ZAP-Hosting | Você precisa de acesso à interface web, incluindo o gerenciador de arquivos e a seção `Configs` |
| Servidor parado | O servidor Palworld deve estar parado antes de substituir os dados do save |
| Nome da pasta do save | Você precisa do nome exato da pasta do save que enviou, por exemplo `[your_savefolder_id]` |

:::info Acesso ao Arquivo de Configuração
Na ZAP-Hosting, os arquivos de configuração relevantes do Palworld podem ser acessados pela administração do seu servidor de jogos em `Configs`. Você não precisa editar o arquivo diretamente pelo gerenciador de arquivos, a menos que prefira verificar o caminho manualmente.
:::

## Entenda a Estrutura Necessária do Save

Antes de enviar qualquer coisa, é importante entender qual pasta o Palworld realmente carrega.

O local do save do servidor é:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Dentro dessa pasta, você normalmente deve ver arquivos e pastas semelhantes a:

```text
Level.sav
LevelMeta.sav
Players/
```

Em alguns saves mais antigos ou migrados, você também pode ver:

```text
WorldOption.sav
```

:::caution Remova o Arquivo Obsoleto WorldOption.sav
Se `WorldOption.sav` estiver presente na pasta do save enviada, exclua-o antes de iniciar o servidor. Este arquivo é conhecido por causar problemas em setups mais recentes de servidores Palworld e não deve ser usado para saves migrados, a menos que seja especificamente requerido por um setup atual confirmado.
:::

## Encontre o Arquivo de Configuração Correto

Para fazer o servidor carregar seu mundo enviado, você precisa editar o arquivo `GameUserSettings.ini`.

Na administração do servidor de jogos ZAP-Hosting:

1. Abra seu servidor Palworld.
2. Vá para `Configs`.
3. Abra `GameUserSettings.ini`.

Dependendo do ambiente atual do servidor, o caminho do arquivo geralmente é um dos seguintes:

| Caminho possível | Observações |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Comum em servidores Palworld baseados em Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Pode aparecer em servidores baseados em Windows |

:::note Diferenças de Caminho
As instalações do servidor Palworld podem usar `LinuxServer` ou `WindowsServer` no caminho da configuração, dependendo da plataforma usada pelo provedor. Se você estiver editando o arquivo via `Configs`, o arquivo correto já estará exposto lá, então só precisa garantir que está modificando o `GameUserSettings.ini`.
:::

## Enviar um Save de Outro Servidor Dedicado

Se seu save já vem de outro provedor de aluguel de servidores, você pode migrá-lo diretamente.

### Faça Backup do Save Existente

No seu provedor anterior, localize e baixe a pasta do save existente em:

```text
Pal/Saved/SaveGames/0/
```

Copie a pasta completa com o nome alfanumérico aleatório, por exemplo:

```text
[your_savefolder_id]
```

### Pare o Servidor ZAP-Hosting

Antes de enviar o novo save, pare seu servidor Palworld na interface web da ZAP-Hosting.

:::caution Evite Conflitos no Save
Não substitua arquivos de save enquanto o servidor estiver rodando. Isso pode causar uploads incompletos, dados sobrescritos ou um save corrompido.
:::

### Substitua a Pasta de Save Padrão

Abra o gerenciador de arquivos do seu servidor de jogos e navegue até:

```text
Pal/Saved/SaveGames/0/
```

Exclua a pasta de save padrão criada automaticamente pelo servidor e envie sua pasta de save existente para o mesmo local.

Após o envio, a estrutura deve ficar assim:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Defina a Pasta de Save Correta no GameUserSettings.ini

Agora abra o `GameUserSettings.ini` via `Configs` e procure a entrada `DedicatedServerName`.

Defina-a com o nome exato da pasta do save que você enviou:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Entrada na config | Valor necessário |
| --- | --- |
| `DedicatedServerName` | O nome exato da pasta dentro de `Pal/Saved/SaveGames/0/` |

:::tip Correspondência Exata Necessária
`DedicatedServerName` deve corresponder exatamente ao nome da pasta enviada, incluindo todas as letras e números. Se o valor não corresponder, o servidor pode iniciar um mundo diferente ou parecer carregar sem progresso no mapa.
:::

### Inicie o Servidor

Após salvar a configuração, inicie seu servidor Palworld novamente.

Normalmente, nenhum comando adicional no console é necessário após o envio. Um reinício completo do servidor é suficiente para carregar o novo save.

## Enviar um Save de um Mundo Steam Co-op

Se você hospedava seu mundo localmente via Steam co-op, também pode enviar esse save para seu servidor dedicado.

### Localize o Save Local do Steam

No seu PC Windows, pressione `Windows` + `R` e abra:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Dentro desse local, abra a pasta nomeada com seu SteamID64. Depois, localize a pasta do mundo que deseja enviar:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Envie o Save para o Servidor

Depois de identificar a pasta do save correta:

1. Pare seu servidor Palworld.
2. Abra o gerenciador de arquivos.
3. Navegue até `Pal/Saved/SaveGames/0/`.
4. Exclua a pasta de save padrão.
5. Envie sua pasta de save existente.
6. Abra `GameUserSettings.ini` em `Configs`.
7. Defina:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Salve o arquivo e inicie o servidor novamente.

:::caution Limitação do Personagem Host
Ao migrar um mundo local Steam co-op, o personagem host não é transferido automaticamente da mesma forma que os dados dos jogadores conectados. Na prática, isso significa que o host original pode precisar de etapas adicionais de conversão de save ou transferência de personagem por terceiros, caso a continuidade do personagem seja necessária.
:::

## Enviar um Save do PC Game Pass

Saves do PC Game Pass usam um formato diferente e não estão prontos diretamente para um servidor dedicado Palworld.

### Localize o Save do Game Pass

Os dados locais do save do Game Pass geralmente ficam em:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Converta o Save Primeiro

Para usar um save do PC Game Pass em um servidor dedicado, você precisa convertê-lo para um formato compatível com Steam usando uma ferramenta de conversão de terceiros.

Uma opção comum é o [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Aviso Sobre Ferramentas de Terceiros
Ferramentas de conversão de save de terceiros não são desenvolvidas nem mantidas pela ZAP-Hosting. Sua funcionalidade pode mudar com o tempo e a compatibilidade não é garantida. Sempre faça um backup do seu save original antes de usar qualquer ferramenta de conversão.
:::

Após a conversão, o save exportado geralmente fica em uma pasta como:

```text
XGP_converted_saves
```

### Envie o Save Convertido

Depois que o save for convertido:

1. Pare seu servidor.
2. Abra o gerenciador de arquivos.
3. Vá para `Pal/Saved/SaveGames/0/`.
4. Exclua a pasta de save padrão.
5. Envie a pasta do save convertida.
6. Abra `GameUserSettings.ini` em `Configs`.
7. Defina o nome correto da pasta:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Salve o arquivo e inicie o servidor.

## Alterações de Configuração Necessárias

O passo manual mais importante neste processo é editar corretamente o `GameUserSettings.ini`.

### Visão Geral da Entrada de Configuração

| Arquivo | Local na interface ZAP | Entrada a alterar | Valor de exemplo |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Exemplo de Configuração

Se sua pasta de save enviada se chama `84B5E2264EC387DEDB43179D666031A1`, a entrada deve ficar assim:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Não adicione aspas extras, a menos que já existam na sintaxe do arquivo usada pelo seu template de configuração atual.

## Verifique o Envio

Depois que o servidor iniciar, conecte-se a ele e verifique se os dados do seu mundo foram carregados corretamente.

Você deve verificar o seguinte:

| Verificação | Resultado esperado |
| --- | --- |
| Mundo carrega | O mapa e as estruturas existentes estão presentes |
| Dados do jogador | Dados dos jogadores transferidos anteriormente estão disponíveis onde aplicável |
| Pasta do save corresponde | `DedicatedServerName` corresponde exatamente à pasta enviada |
| Arquivo obsoleto removido | `WorldOption.sav` não está mais presente se causava problemas |

## Solução de Problemas

Se o envio não funcionar como esperado, verifique estas causas comuns.

### Servidor Inicia um Mundo Novo

Se o servidor criar um mundo novo em vez de carregar seu save enviado, a causa mais comum é um valor incorreto em `DedicatedServerName`.

Certifique-se de que:

- a pasta enviada está dentro de `Pal/Saved/SaveGames/0/`
- o nome da pasta foi copiado exatamente
- `DedicatedServerName=[your_savefolder_id]` corresponde exatamente a essa pasta

### Dados do Mapa Estão Faltando

Se o servidor iniciar, mas seu progresso no mundo ou dados do mapa parecerem ausentes, verifique novamente a correspondência do nome da pasta.

Esse problema é comumente causado por uma incompatibilidade entre:

- o nome da pasta do save enviada
- o valor `DedicatedServerName` em `GameUserSettings.ini`

### Upload do Save Parece Correto, Mas Ainda Falha

Se a estrutura da pasta parece correta, mas o save ainda não carrega:

- confirme que o save veio de uma fonte suportada
- remova `WorldOption.sav` se existir
- certifique-se de que o servidor estava completamente parado antes de substituir os arquivos
- reinicie o servidor após salvar as alterações na configuração

:::tip Melhor Prática para Upload de Arquivos
Se você enviar um save grande, espere até que a transferência esteja totalmente concluída antes de iniciar o servidor. Iniciar cedo demais pode deixar o save incompleto e impedir que o mundo carregue corretamente.
:::

## Conclusão

Parabéns, você enviou com sucesso um save existente do Palworld para seu servidor ZAP-Hosting. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂