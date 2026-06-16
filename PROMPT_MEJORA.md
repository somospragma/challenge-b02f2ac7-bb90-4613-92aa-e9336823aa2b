# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "banking-api",
  "version": "1.0.0",
  "scripts": {
    "start": "nest start",
    "build": "nest build",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.0.0",
    "@nestjs/graphql": "10.0.0",
    "typeorm": "0.3.9"
  },
  "devDependencies": {
    "@types/jest": "29.2.4",
    "jest": "29.2.2"
  }
}

// === ARCHIVO: src/api-rest/controllers/balance.controller.ts ===
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BalanceService } from '../../application/services/balance.service';
import { BalanceDto } from '../dto/balance.dto';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':id')
  async getBalance(@Param('id') id: string) {
    return this.balanceService.getBalance(id);
  }

  @Post()
  async createBalance(@Body() createBalanceDto: BalanceDto) {
    return this.balanceService.createBalance(createBalanceDto);
  }

  @Put(':id')
  async updateBalance(@Param('id') id: string, @Body() updateBalanceDto: BalanceDto) {
    return this.balanceService.updateBalance(id, updateBalanceDto);
  }

  @Delete(':id')
  async deleteBalance(@Param('id') id: string) {
    return this.balanceService.deleteBalance(id);
  }
}

// === ARCHIVO: src/api-rest/controllers/transfer.controller.ts ===
import { Controller, Post, Body } from '@nestjs/common';
import { TransferService } from '../../application/services/transfer.service';
import { TransferDto } from '../dto/transfer.dto';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async createTransfer(@Body() createTransferDto: TransferDto) {
    return this.transferService.createTransfer(createTransferDto);
  }
}

// === ARCHIVO: src/api-graphql/resolvers/balance.resolver.ts ===
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BalanceService } from '../../application/services/balance.service';
import { Balance } from '../../domain/entities/balance.entity';
import { CreateBalanceInput } from '../inputs/create-balance.input';
import { UpdateBalanceInput } from '../inputs/update-balance.input';

@Resolver('Balance')
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) {}

  @Query(() => Balance)
  async getBalance(@Args('id') id: string) {
    return this.balanceService.getBalance(id);
  }

  @Mutation(() => Balance)
  async createBalance(@Args('input') createBalanceInput: CreateBalanceInput) {
    return this.balanceService.createBalance(createBalanceInput);
  }

  @Mutation(() => Balance)
  async updateBalance(@Args('id') id: string, @Args('input') updateBalanceInput: UpdateBalanceInput) {
    return this.balanceService.updateBalance(id, updateBalanceInput);
  }

  @Mutation(() => Boolean)
  async deleteBalance(@Args('id') id: string) {
    await this.balanceService.deleteBalance(id);
    return true;
  }
}

// === ARCHIVO: src/api-graphql/resolvers/transfer.resolver.ts ===
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { TransferService } from '../../application/services/transfer.service';
import { Transfer } from '../../domain/entities/transfer.entity';
import { CreateTransferInput } from '../inputs/create-transfer.input';

@Resolver('Transfer')
export class TransferResolver {
  constructor(private readonly transferService: TransferService) {}

  @Mutation(() => Transfer)
  async createTransfer(@Args('input') createTransferInput: CreateTransferInput) {
    return this.transferService.createTransfer(createTransferInput);
  }
}

// === ARCHIVO: src/domain/entities/balance.entity.ts ===
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
}

// === ARCHIVO: src/infrastructure/repositories/balance.repository.ts ===
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Balance } from '../../domain/entities/balance.entity';

@Injectable()
export class BalanceRepository {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>
  ) {}

  async getBalance(id: string): Promise<Balance> {
    return this.balanceRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async createBalance(balance: Balance): Promise<Balance> {
    return this.balanceRepository.save(balance);
  }

  async updateBalance(id: string, balance: Balance): Promise<Balance> {
    await this.balanceRepository.update(parseInt(id, 10), balance);
    return this.balanceRepository.findOne({ where: { id: parseInt(id, 10) } });
  }

  async deleteBalance(id: string): Promise<void> {
    await this.balanceRepository.delete(parseInt(id, 10));
  }
}

// === ARCHIVO: src/application/services/balance.service.ts ===
import { Injectable } from '@nestjs/common';
import { BalanceRepository } from '../../infrastructure/repositories/balance.repository';
import { Balance } from '../../domain/entities/balance.entity';

@Injectable()
export class BalanceService {
  constructor(private readonly balanceRepository: BalanceRepository) {}

  async getBalance(id: string): Promise<Balance> {
    return this.balanceRepository.getBalance(id);
  }

  async createBalance(balance: Balance): Promise<Balance> {
    return this.balanceRepository.createBalance(balance);
  }

  async updateBalance(id: string, balance: Balance): Promise<Balance> {
    return this.balanceRepository.updateBalance(id, balance);
  }

  async deleteBalance(id: string): Promise<void> {
    await this.balanceRepository.deleteBalance(id);
  }
}

// === ARCHIVO: tests/api-rest/balance.controller.spec.ts ===
import { Test, TestingModule } from '@nestjs/testing';
import { BalanceController } from '../../src/api-rest/controllers/balance.controller';
import { BalanceService } from '../../src/application/services/balance.service';

describe('BalanceController', () => {
  let controller: BalanceController;
  let service: BalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalanceController],
      providers: [BalanceService],
    }).compile();

    controller = module.get<BalanceController>(BalanceController);
    service = module.get<BalanceService>(BalanceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// === ARCHIVO: tests/api-graphql/balance.resolver.spec.ts ===
import { Test, TestingModule } from '@nestjs/testing';
import { BalanceResolver } from '../../src/api-graphql/resolvers/balance.resolver';
import { BalanceService } from '../../src/application/services/balance.service';

describe('BalanceResolver', () => {
  let resolver: BalanceResolver;
  let service: BalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceResolver, BalanceService],
    }).compile();

    resolver = module.get<BalanceResolver>(BalanceResolver);
    service = module.get<BalanceService>(BalanceService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

// === ARCHIVO: docs/comparison-analysis.md ===
# Comparación y Análisis de APIs REST y GraphQL

## Introducción
En este documento, se comparan y analizan las diferencias entre las implementaciones REST y GraphQL para la consulta de saldo y realización de transferencias en el contexto de la banca digital.

## Estructura
- **API REST**: Se implementan endpoints específicos para cada acción (GET, POST, PUT, DELETE).
- **API GraphQL**: Se implementan consultas y mutaciones para realizar las mismas acciones.

## Eficiencia y Escalabilidad
- **API REST**: Cada acción requiere una solicitud separada, lo que puede resultar en múltiples solicitudes para obtener diferentes datos.
- **API GraphQL**: Permite obtener múltiples datos en una sola solicitud, lo que puede mejorar la eficiencia y escalabilidad.

## Experiencia del Usuario
- **API REST**: Los endpoints son más intuitivos para los desarrolladores, pero pueden requerir más solicitudes para obtener la información necesaria.
- **API GraphQL**: Proporciona una experiencia más flexible y eficiente para los clientes, ya que pueden especificar exactamente qué datos necesitan en cada solicitud.

## Conclusiones
- **REST**: Es más adecuado para aplicaciones simples y pequeñas.
- **GraphQL**: Es más adecuado para aplicaciones complejas y escalables.

## Recomendaciones
- Considerar el tamaño y complejidad de la aplicación al elegir entre REST y GraphQL.
- Evaluar las necesidades de los clientes y la experiencia del usuario al tomar la decisión.
```
