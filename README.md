# Prueba Técnica Acueducto

## Pasos de Instalación

Para el correcto uso de este repositorio es necesario tener instalado:

- Node.js
- npm
- yarn
- php 8.x o superior
- composer
- mysql
- clonar el repositorio.

## Pasos para ejecutar ambiente de desarrollo local

NOTA: Los siguientes pasos fueron realizados con éxito en un equipo de trabajo
con S.O. Windows 11, usando terminales CMD y WSL al mismo tiempo. No debería ser
muy diferente para un equipo basado en Linux.

1. Usando cualquier terminal, ubicado en la raíz del repositorio, ejecutar el siguiente comando para realizar la instalación de las dependencias del monorepo:

```
yarn
```

2. Crear archivo `./apps/server/.env` usando como copia el archivo `./apps/web/.env.example`.

3. crear archivo `./apps/web/.env` usando como copia el archivo `./apps/web/.env.example`.

4. Ubicarse en la ruta `./apps/server` y ejecutar el siguiente comando para instalar las dependencias de Laravel:

```
composer install
```

5. En caso de no haber errores de instalación de dependencias (es posible que el php.ini del equipo local requiera descomentar configuraciones para la correcta instalación. Repetir el paso 4 hasta lograr una instalación limpia).

6. Cambiar las variables de entorno del archivo `./apps/web/.env`: `DB_HOST` `DB_USERNAME` y `DB_PASSWORD`, por las que sean necesarias para conectarse con el servidor Mysql del equipo local en el que se realizará la ejecución del repositorio.

7. Ejecutar los siguientes comandos consecutivamente, ubicado en la ruta `./apps/server` para inicializar la base de datos apropiadamente y que el servidor opere funcionalmente:

```
php artisan migrate:fresh
```

```
php artisan db:seed
```

8. Ubicarse en la ruta raíz del repositorio desde la terminal, y ejecutar el siguiente comando:

```
yarn dev
```

Este comando deberá iniciar el servidor y el web en paralelo. En este momento el proyecto debe estar operativo en las urls:

http://localhost:3000 para el web.
http://localhost:8000 para el servidor.

## Pasos adicionales para ejecutar pruebas unitarias.

9. Ubicado en la ruta `./apps/server` desde la terminal, ejecutar el comando:

```
yarn test
```

## Pasos para contenerización con Docker

NOTA: Los siguientes pasos fueron realizados con éxito en un equipo de trabajo
con S.O. Windows 11, usando terminales CMD y WSL al mismo tiempo. No debería ser
muy diferente para un equipo basado en Linux.

1. Usando cualquier terminal, ubicado en la raíz del repositorio, ejecutar el siguiente comando para realizar la instalación de las dependencias del monorepo:

```
yarn
```

2. Crear archivo `./apps/server/.env` usando como copia el archivo `./apps/web/.env.example`.

3. Cambiar las variables de entorno `DB_HOST` `DB_USERNAME` y `DB_PASSWORD` por las comentadas (líneas 22 a la 24) que son necesarias para la ejecución de Docker.

4. crear archivo `./apps/web/.env` usando como copia el archivo `./apps/web/.env.example`.

5. La variable de entorno del proyecto web debe ser exactamente `NEXT_PUBLIC_API_URL="http://172.28.0.1:8000/api"`. Asegurarse de ello.

6. Ubicarse en la ruta `./apps/server` y ejecutar el siguiente comando para instalar las dependencias de Laravel:

```
composer install
```

7. En caso de no haber errores de instalación de dependencias (es posible que el php.ini del equipo local requiera descomentar configuraciones para la correcta instalación. Repetir el paso 4 hasta lograr una instalación limpia).

8. Modificar manualmente el archivo `./apps/server/docker-compose.yml` y remover temporalmente o comentar todas las directivas relacionadas con el servicio "next-app" (linea 50 a la 69). Este paso es importante para la contenerización.

9. En una terminal basada en Linux (WSL en el caso de un equipo con S.O. Windows), y la cual tenga acceso al servicio Docker: Ejecutar el siguiente comando:

```
./vendor/bin/sail up
```

#### NOTA IMPORTANTE:

Esto iniciará la contenerización de 2 servicios: el API con Laravel y la DB con Mysql. No es posible iniciar el docker-compose y contenerizar todos los servicios al mismo tiempo incluyendo el Web con Next.js debido a que Next.js durante el build genera páginas estáticas que requieren el servicio de API activo y funcional.

Debido a ello se hacen estos pasos adicionales. Desafortunadamente no pude configurar entornos de desarrollo (local, dev, testing, prod y deploy), construir scripts post-docker, ni tampoco pude configurar apropiadamente docker. Los pasos descritos a continuación para generar los contenedores logran exitosamente su ejecución, a costa de pasos adicionales y complejos.

10. Usando Docker Desktop y dirigiéndose a la terminal del servicio `sail-8.2/app` o mediante el comando `docker exec`, ejecutar los siguientes comandos de forma consecutiva:

```
php artisan migrate:fresh
```

```
php artisan db:seed
```

11. Se puede comprobar el correcto funcionamiento del API mediante la URL `http://localhost:8000/api/products`.

12. Restaurar manualmente el archivo `./apps/server/docker-compose.yml` y devolver temporalmente o descomentar todas las directivas relacionadas con el servicio "next-app" (linea 50 a la 69).

13. Ubicarse en la ruta `./apps/server` y ejecutar el siguiente comando para crear el contenedor del Web:

```
docker compose up next-app -d
```

Esto hará un contenedor de Next.js y en el entorno de Development sin optimizaciones. Desafortunadamente la documentación oficial de Next.js no ofrece archivos Dockerfile para la contenerización de proyectos Next.js que viven dentro de un monorepo, los cuales tienen características particulares. No tuve la osadía ni el tiempo de configurar correctamente un Docker productivo y optimizado.

14. Se puede comprobar el correcto funcionamiento del API mediante la URL `http://localhost:3000`.

#### NOTA IMPORTANTE:

Las peticiones al API que se realizar mediante la funcionalidad del buscador arrojar un error TIMEOUT, el cual no sucede en desarrollo. Es un error muy raro que decidí no abordar por falta de tiempo.
