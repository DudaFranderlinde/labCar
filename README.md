# LabCar

API REST
Aplicação desenvolvida para como primeiro projeto do Módulo 2 - DEVinHouse.

## Primeiros passos

Para instalar as dependencias é preciso executar o comando:

```
$ npm install
```

Rodar aplicação no modo de desenvolvimento. Que ficará exposto em: http://localhost:3000

```
$ npm run start:dev
```

## Endpoints disponiveis

### Listar Motoristas:
```
GET: http://localhost:3000/motoristas?name&page=0&size=10
```

#### Resultado:
```
{
		"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
		"status": "ALLOWED",
		"name": "nameUser",
		"birthDate": "12/12/1212",
		"cpf": "000.000.000-00",
		"licensePlate": "AAA0000",
		"model": "modelUser"
	}
```

### Detalhes motorista:
```
GET: http://localhost:3000/motoristas/:cpf
```

#### Resultado:
```
{
	"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
	"status": "ALLOWED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```

### Criar um motorista:
```
POST: http://localhost:3000/motoristas
Body{
	"id": "",
	"status": "ALLOWED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```
#### Resultado:
```
{
	"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
	"status": "ALLOWED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```

### Atualizar os dados cadastrais de um motorista:
```
PUT: http://localhost:3000/motoristas/:id
Body{
	"name": "nameUser",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```
#### Resultado:
```
{
	"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
	"status": "ALLOWED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```

### Bloquear motorista:
```
PATCH: http://localhost:3000/motoristas/:id
Body{
	"status": "BLOCKED"
}
```
#### Resultado:
```
{
	"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
	"status": "BLOCKED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```

### Exclusão de motorista:
```
DELETE: http://localhost:3000/motoristas/:id
```
#### Resultado:
```
{
	"id": "9f9f79dc-7628-454c-b12d-fae8a92c9dbc",
	"status": "BLOCKED",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"licensePlate": "AAA0000",
	"model": "modelUser"
}
```

### Listar passageiros:
```
GET: http://localhost:3000/passageiros?name&page=0&size=10
```
#### Resultado:
```
{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```


### Detalhes passageiro:
```
GET: http://localhost:3000/passageiros/:cpf
```
#### Resultado:
```
{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```

### Criar um passageiro:
```
POST: http://localhost:3000/passageiros
Body{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```
#### Resultado:
```
{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```

### Atualizar os dados cadastrais de um passageiro:
```
PUT: http://localhost:3000/passageiros/:id
Body{
	"name": "nameUser",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```
#### Resultado:
```
{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```

### Exclusão de um passageiro:
```
DELETE: http://localhost:3000/passageiros/:id
```
#### Resultado:
```
{
	"id": "",
	"name": "nameUser",
	"birthDate": "dd/mm/yyyy",
	"cpf": "000.000.000-00",
	"address": {
		"street": "Rua Anitápolis",
		"number": "45",
		"neighborhood": "Vorstadt",
		"city": "Blumenau",
		"state": "SC"
	}
}
```

### Solicitar uma viagem:
```
POST: http://localhost:3000/passageiros
Body{
	"id": "",
	"status": "CREATED",
	"idMotorista": "",
	"idPassageiro": "2a2aaab2-e68a-4563-b642-5f02ff2f08eb",
	"origin": "Rua 15 de Novembro, Centro, Blumenau", 
	"whither": "Rua Anitápolis, Vorstadt, Blumenau"
}
```
#### Resultado:
```
{
	"id": "",
	"status": "CREATED",
	"idMotorista": "",
	"idPassageiro": "2a2aaab2-e68a-4563-b642-5f02ff2f08eb",
	"origin": "Rua 15 de Novembro, Centro, Blumenau", 
	"whither": "Rua Anitápolis, Vorstadt, Blumenau"
}
```

### Viagens próximas do motorista:
```
GET: http://localhost:3000/passageiros/
```
#### Resultado:
```
{
	"id": "",
	"status": "CREATED",
	"idMotorista": "",
	"idPassageiro": "2a2aaab2-e68a-4563-b642-5f02ff2f08eb",
	"origin": "Rua 15 de Novembro, Centro, Blumenau", 
	"whither": "Rua Anitápolis, Vorstadt, Blumenau"
}
```
