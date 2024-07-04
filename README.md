<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Instalar NestJS

```sh
$ npm install @nest/cli
```

## Inicializar un nuevo proyecto

```sh
$ nest new <project_name>
```

## Ejecutar la aplicacion

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Comandos

#### Crear un nuevo modulo

```sh
$ nest g mo <module_name>
```

#### Crear un controlador

```sh
$ nest g co <controller_name>
```

#### Crear un controlador sin el archivo de testing

```sh
$ nest g co <controller_name> --no-spec
```

#### Crear un controlador dentro de un modulo especifico

```sh
$ nest g co <folder_module>
```