from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # URL donde corre tu React en dev
    "http://localhost:8080",  # URL donde corre tu React en prod con Docker/Nginx
    # agrega aquí otras URLs que usarás para el frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir solo estos orígenes
    allow_credentials=True,
    allow_methods=["*"],    # Permitir todos los métodos (GET, POST, etc)
    allow_headers=["*"],    # Permitir todas las cabeceras
)

@app.get("/")
async def root():
    return {"message": "Hola desde FastAPI con CORS!"}
