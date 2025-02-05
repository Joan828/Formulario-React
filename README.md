# 📄 Formulario React - Proyecto

Este proyecto es un formulario interactivo creado con **React** y **Ant Design (antd)**. Permite a los usuarios ingresar información personal y simula el envío de datos a un servidor mediante **Axios**.

## 🚀 Despliegue

Actualmente el rpoyecto está desplegado en https://main.ddhb1w7jdf782.amplifyapp.com ,
con AWS.

## 🚀 Tecnologías Utilizadas

- **React**
- **Ant Design (antd)**
- **Axios**
- **SCSS** (para estilos personalizados)
- **AWS**

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalado un entorno de desarrollo compatible con **React**. Se recomienda el uso de:

- **Node.js** (para ejecutar el entorno de desarrollo de React)
- **npm** o **yarn** (para la gestión de dependencias)

Puedes verificar si están instalados ejecutando:

```bash
node -v
npm -v
```

Si ya tienes un entorno configurado para proyectos React, este paso puede no ser necesario.

---

## 📦 Instalación del Proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/formulario-react.git
cd formulario-react
```

2. **Instala las dependencias:**

Usando **npm:**

```bash
npm install
```

O usando **yarn:**

```bash
yarn install
```

---

## ▶️ Ejecución en Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

O:

```bash
yarn start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

---

## 📝 Descripción del Formulario

- **Campos Requeridos:** Nombre, Apellido, Correo Electrónico, Teléfono y Mensaje.
- **Validaciones:**
  - El correo debe tener un formato válido.
  - El número de teléfono debe cumplir con el patrón `+123456789` o `678777888` (hasta 12 dígitos).
- **Simulación de Envío:** Los datos se envían de forma simulada a `https://metricsalad.com/form` usando **Axios**.
- **Visualización:** Después del envío, los datos ingresados se muestran en una tarjeta (`CardInfo`).

---

## 🚩 Estructura del Proyecto

```
📦 src
├── assets                  # Recursos estáticos (imágenes, fuentes, etc.)
├── components              # Componentes reutilizables
│   ├── CardInfo
│   │   ├── CardInfo.jsx    # Componente que muestra la información enviada
│   │   └── CardInfo.scss   # Estilos del componente CardInfo
│   └── Formulario
│       ├── Formulario.jsx  # Componente principal del formulario
│       └── Formulario.scss # Estilos del componente Formulario
├── App.css                 # Estilos globales de la aplicación
├── App.jsx                 # Configuración de la aplicación principal
├── index.css               # Estilos globales adicionales
├── main.jsx                # Punto de entrada de React

.eslintrc.js                # Configuración de ESLint
.gitignore                  # Archivos y carpetas a ignorar por Git
index.html                  # HTML principal de la aplicación
package.json                # Configuración del proyecto y dependencias
package-lock.json           # Bloqueo de dependencias para npm
vite.config.js              # Configuración de Vite
README.md                   # Documentación del proyecto
```

---

## ❗ Problemas Comunes

- **Error de dependencias:** Asegúrate de haber ejecutado `npm install` o `yarn install` correctamente.
- **Problemas con Axios:** Verifica que tengas conexión a Internet para simular el envío.

---

## 🤝 Contribución

Si deseas mejorar el proyecto:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Realiza tus cambios y haz commit:

```bash
git commit -m "Agrega nueva funcionalidad"
```

4. Envía un **pull request**.

---

## 📧 Contacto

Si tienes alguna pregunta, no dudes en abrir un issue o contactarme.

¡Gracias por tu interés en este proyecto! 🚀

