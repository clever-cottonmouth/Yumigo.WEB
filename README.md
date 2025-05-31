# yumigo

This template should help get you started developing with Vue 3 in Vite.
graph TD

    446["User<br>External Actor"]
    subgraph 439["Yumigo System"]
        subgraph 440["Backend API"]
            459["Authentication API<br>Backend Service"]
            460["Menu Item API<br>Backend Service"]
            461["Order API<br>Backend Service"]
        end
        subgraph 441["Yumigo Frontend Application"]
            442["Core Utilities"]
            443["Routing System"]
            445["State Management"]
            447["Application Entry &amp; Config<br>Vite, Vue"]
            458["UI Views &amp; Components<br>Vue"]
            subgraph 444["Client-Side Services"]
                449["Order Service Client<br>JavaScript"]
                450["Menu Item Service Client<br>JavaScript"]
                451["Auth Service Client<br>JavaScript"]
                452["API Client<br>JavaScript"]
            end
            %% Edges at this level (grouped by source)
            458["UI Views &amp; Components<br>Vue"] -->|invokes| 449["Order Service Client<br>JavaScript"]
            458["UI Views &amp; Components<br>Vue"] -->|invokes| 450["Menu Item Service Client<br>JavaScript"]
            458["UI Views &amp; Components<br>Vue"] -->|invokes| 451["Auth Service Client<br>JavaScript"]
            458["UI Views &amp; Components<br>Vue"] -->|uses state from| 445["State Management"]
            458["UI Views &amp; Components<br>Vue"] -->|renders views for| 443["Routing System"]
            458["UI Views &amp; Components<br>Vue"] -->|uses| 442["Core Utilities"]
            447["Application Entry &amp; Config<br>Vite, Vue"] -->|initializes| 445["State Management"]
            447["Application Entry &amp; Config<br>Vite, Vue"] -->|configures| 443["Routing System"]
            443["Routing System"] -->|loads| 458["UI Views &amp; Components<br>Vue"]
        end
        %% Edges at this level (grouped by source)
        452["API Client<br>JavaScript"] -->|communicates with| 459["Authentication API<br>Backend Service"]
        452["API Client<br>JavaScript"] -->|communicates with| 460["Menu Item API<br>Backend Service"]
        452["API Client<br>JavaScript"] -->|communicates with| 461["Order API<br>Backend Service"]
    end
    %% Edges at this level (grouped by source)
    446["User<br>External Actor"] -->|interacts with| 458["UI Views &amp; Components<br>Vue"]

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
