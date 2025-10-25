# La Camisetería — Sitio de promoción de camisetas

Proyecto de ejemplo (Vite + React) que promociona 3 camisetas emblemáticas: Atlético Nacional, América y Millonarios.

## 🚀 Desarrollo local

Instrucciones rápidas (Windows PowerShell):

```powershell
cd 'C:\Users\rolit\Source\tatiana'
npm install
npm run dev
```

Luego abre la URL que muestre Vite (normalmente http://localhost:5173).

## 📦 Despliegue en GitHub Pages

### Paso 1: Crear el repositorio en GitHub
1. Ve a https://github.com/new
2. Crea un repositorio llamado `tatiana` (o el nombre que prefieras)
3. **NO inicialices** con README, .gitignore ni license

### Paso 2: Configurar y subir el código
```powershell
# Inicializar git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit - La Camisetería"

# Conectar con tu repositorio (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/tatiana.git
git branch -M main
git push -u origin main
```

### Paso 3: Actualizar la configuración
Edita estos archivos con tu usuario de GitHub:
- `package.json` → línea 5: cambia `[TU-USUARIO]` por tu usuario real
- `vite.config.js` → línea 6: verifica que el nombre coincida con tu repositorio

### Paso 4: Instalar dependencias y desplegar
```powershell
npm install
npm run deploy
```

Este comando:
1. Construye la versión de producción (`npm run build`)
2. Sube el contenido de la carpeta `dist` a la rama `gh-pages`

### Paso 5: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages (en el menú lateral)
3. En "Source", selecciona la rama `gh-pages`
4. Guarda y espera 1-2 minutos

¡Listo! Tu página estará disponible en: `https://TU-USUARIO.github.io/tatiana/`

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push
npm run deploy
```

## 🛠️ Tecnologías

Dependencias añadidas: Material UI y Tailwind CSS. Tailwind está configurado mediante `postcss` y `tailwind.config.cjs`.

Las imágenes de producto están ahora referenciadas desde URLs externas; si quieres usarlas localmente, descárgalas y colócalas en `src/assets/` y actualiza `src/App.jsx`.

