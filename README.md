# ts-vue-ce-props

This is a project to exemplify when props are not correctly converted to primitives sent as attributes to custom elements when doing a production build with the @vue/compiler-sfc.

## Test explanation
When doing a **production** build when using type based props will not generate all runtime props. This seems to affect casting of primitive attributes sent to a vue3 custom element.

For example:
When sending a prop that is typed as a number (in the custom element) as an attribute to a vue3 webcomponent it is not converted to a number in the production build. But it is converted correctly in the dev-build. 

## Tests to display the difference:

This will do a DEV build and run the e2e test and it will be a **success** (props in component will be cast to correct types):
```sh
npm run issue:test:e2e:dev
```

This will do a PRODUCTION build and run the e2e test and it will **fail** (number props will not be cast to correct types):
```sh
npm run issue:test:e2e:prod
```



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


