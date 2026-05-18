---
id: rust-custom-map
title: "Rust: Use um Mapa Customizado no Seu Servidor"
description: "Aprenda como configurar e rodar um mapa customizado no seu servidor de Rust usando a configuração Level URL → Saiba mais agora"
sidebar_label: Mapa Customizado
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mapas customizados permitem que donos de servidores de Rust criem experiências de jogo únicas que vão além dos mapas procedurais padrão. Muitas comunidades usam mapas customizados para introduzir novos monumentos, terrenos alterados, eventos especiais ou ambientes totalmente redesenhados.

Esses mapas são geralmente criados com ferramentas como **RustEdit** e distribuídos por plataformas como **Lone Design**, **Codefling** ou repositórios comunitários de mapas. Depois de ter um arquivo de mapa ou link para download, ele pode ser configurado diretamente nas configurações do seu servidor.

<InlineVoucher />



## Preparação

Antes de configurar um mapa customizado, você precisa de uma **URL válida para download do mapa**. Mapas customizados normalmente são hospedados em plataformas de distribuição de mapas ou fornecidos pelos criadores.

A URL geralmente aponta para um arquivo `.map` ou pacote de mapa para download. Certifique-se que o link seja acessível publicamente para que o servidor de Rust possa baixá-lo durante a inicialização. Exemplo de URL de mapa:

```
https://example-map-host.com/maps/custommap.map
```



## Configuração

Para configurar um mapa customizado no seu servidor de Rust, abra o **painel de controle do servidor de jogos** e vá até **Configurações**.

Encontre o campo de configuração chamado **Level URL**. Essa configuração permite que o servidor baixe e carregue um mapa customizado de Rust durante a inicialização. Cole a URL do seu mapa customizado no campo **Level URL**. Por exemplo:

```
https://example-map-host.com/maps/custommap.map
```

Depois de inserir a URL, salve as configurações no painel. Quando o servidor iniciar, o Rust vai baixar automaticamente o mapa da URL fornecida e carregá-lo em vez de gerar um mapa procedural.

Se o seu mapa customizado precisar de parâmetros adicionais de configuração (como seeds específicas ou tamanhos de mundo), normalmente esses dados são fornecidos pelo criador do mapa e podem precisar ser adicionados também na configuração do servidor.

Após salvar a configuração, **reinicie o servidor** para que o mapa customizado seja baixado e carregado.



## Notas importantes

Mapas customizados precisam ser compatíveis com a versão do servidor de Rust que você está rodando. Se o arquivo do mapa estiver desatualizado ou corrompido, o servidor pode falhar ao iniciar ou voltar para um mapa procedural.

Mapas customizados grandes também podem aumentar o tempo de inicialização do servidor, pois ele precisa baixar e preparar o mapa antes que ele fique disponível para os jogadores.

Se os jogadores não conseguirem se conectar após a troca do mapa, verifique se a URL do mapa está correta e acessível pela internet.



## Conclusão

Parabéns! Você configurou com sucesso um mapa customizado para o seu servidor de Rust. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />