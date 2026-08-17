# ITLA Crush

Aplicación React/Vite con Firebase Authentication y Firestore.

1. Habilita **Email/Password** en Firebase Authentication y crea Firestore.
2. Copia `.env.example` como `.env` y añade la configuración web de Firebase.
3. Ejecuta `npm run dev`.
4. Publica [`firestore.rules`](./firestore.rules) en Firestore Database > Rules.

Las reglas permiten a visitantes leer únicamente confesiones públicas. Las privadas y la lista de perfiles exigen sesión; crear, editar o borrar una confesión solo está permitido a su autor. Las contraseñas nunca se guardan en Firestore.

Firebase podría solicitar crear un índice compuesto para `isPublic` + `createdAt` cuando se haga la primera consulta pública; abre el enlace que mostrará en la consola para crearlo.
