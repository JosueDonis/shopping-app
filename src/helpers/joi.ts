import { ErrorType } from "@/types/elements";
import Joi from "joi";

export const joiMessages = {
  "alternatives.all": "{{#label}} no coincide con todos los tipos requeridos",
  "alternatives.any":
    "{{#label}} no coincide con ninguno de los tipos permitidos",
  "alternatives.match":
    "{{#label}} no coincide con ninguno de los tipos permitidos",
  "alternatives.one": "{{#label}} coincide con más de un tipo permitido",
  "alternatives.types": "{{#label}} debe ser uno de {{#types}}",
  "any.custom":
    "{{#label}} falló en la validación personalizada porque {{#error.message}}",
  "any.default":
    "{{#label}} generó un error al ejecutar el método predeterminado",
  "any.failover":
    "{{#label}} generó un error al ejecutar el método de respaldo",
  "any.invalid": "{{#label}} contiene un valor inválido",
  "any.only":
    '{{#label}} debe ser {if(#valids.length == 1, "", "uno de ")}{{#valids}}',
  "any.ref": "{{#label}} {{#arg}} hace referencia a {{:#ref}} que {{#reason}}",
  "any.required": "Se requiere {{#label}}",
  "any.unknown": "{{#label}} no está permitido",
  "array.base": "{{#label}} debe ser un arreglo",
  "array.excludes": "{{#label}} contiene un valor excluido",
  "array.hasKnown":
    "{{#label}} no contiene al menos una coincidencia requerida para el tipo {:#patternLabel}",
  "array.hasUnknown":
    "{{#label}} no contiene al menos una coincidencia requerida",
  "array.includes":
    "{{#label}} no coincide con ninguno de los tipos permitidos",
  "array.includesRequiredBoth":
    "{{#label}} no contiene {{#knownMisses}} y {{#unknownMisses}} otro(s) valor(es) requerido(s)",
  "array.includesRequiredKnowns": "{{#label}} no contiene {{#knownMisses}}",
  "array.includesRequiredUnknowns":
    "{{#label}} no contiene {{#unknownMisses}} valor(es) requerido(s)",
  "array.length": "{{#label}} debe contener {{#limit}} elementos",
  "array.max": "{{#label}} debe contener menos o igual a {{#limit}} elementos",
  "array.min": "{{#label}} debe contener al menos {{#limit}} elementos",
  "array.orderedLength":
    "{{#label}} debe contener como máximo {{#limit}} elementos",
  "array.sort": "{{#label}} debe estar ordenado en orden {#order} por {{#by}}",
  "array.sort.mismatching":
    "{{#label}} no se puede ordenar debido a tipos no coincidentes",
  "array.sort.unsupported":
    "{{#label}} no se puede ordenar debido a un tipo no compatible {#type}",
  "array.sparse": "{{#label}} no debe ser un elemento de arreglo disperso",
  "array.unique": "{{#label}} contiene un valor duplicado",
  "binary.base": "{{#label}} debe ser un búfer o una cadena",
  "binary.length": "{{#label}} debe tener {{#limit}} bytes",
  "binary.max": "{{#label}} debe ser menor o igual a {{#limit}} bytes",
  "binary.min": "{{#label}} debe tener al menos {{#limit}} bytes",
  "boolean.base": "{{#label}} debe ser un valor booleano",
  "date.base": "{{#label}} debe ser una fecha válida",
  "date.format":
    '{{#label}} debe estar en formato {msg("date.format." + #format) || #format}',
  "date.greater": "{{#label}} debe ser mayor que {{:#limit}}",
  "date.less": "{{#label}} debe ser menor que {{:#limit}}",
  "date.max": "{{#label}} debe ser menor o igual a {{:#limit}}",
  "date.min": "{{#label}} debe ser mayor o igual a {{:#limit}}",
  "date.format.iso": "fecha en formato ISO 8601",
  "date.format.javascript": "marca de tiempo o número de milisegundos",
  "date.format.unix": "marca de tiempo o número de segundos",
  "function.arity": "{{#label}} debe tener una aridad de {{#n}}",
  "function.class": "{{#label}} debe ser una clase",
  "function.maxArity":
    "{{#label}} debe tener una aridad menor o igual a {{#n}}",
  "function.minArity":
    "{{#label}} debe tener una aridad mayor o igual a {{#n}}",
  "object.and":
    "{{#label}} contiene {{#presentWithLabels}} sin sus pares requeridos {{#missingWithLabels}}",
  "object.assert":
    '{{#label}} es inválido porque {if(#subject.key, `"` + #subject.key + `" no superó la prueba de aserción` + (#message || ""), #message || "la aserción falló")}',
  "object.base": "{{#label}} debe ser del tipo {{#type}}",
  "object.instance": "{{#label}} debe ser una instancia de {{:#type}}",
  "object.length":
    '{{#label}} debe tener {{#limit}} clave{if(#limit == 1, "", "s")}',
  "object.max":
    '{{#label}} debe tener menos o igual a {{#limit}} clave{if(#limit == 1, "", "s")}',
  "object.min":
    '{{#label}} debe tener al menos {{#limit}} clave{if(#limit == 1, "", "s")}',
  "object.missing":
    "{{#label}} debe contener al menos uno de {{#peersWithLabels}}",
  "object.nand":
    "{{:#mainWithLabel}} no debe existir simultáneamente con {{#peersWithLabels}}",
  "object.oxor":
    "{{#label}} contiene un conflicto entre pares excluyentes opcionales {{#peersWithLabels}}",
  "object.pattern.match":
    "las claves de {{#label}} no cumplieron con los requisitos del patrón",
  "object.refType": "{{#label}} debe ser una referencia de Joi",
  "object.regex": "{{#label}} debe ser un objeto RegExp",
  "object.rename.multiple":
    "{{#label}} no puede renombrar `{{:#from}}` porque se han deshabilitado múltiples renombramientos y otra clave ya fue renombrada a `{{:#to}}`",
  "object.rename.override":
    "{{#label}} no puede renombrar `{{:#from}}` porque la anulación está deshabilitada y el destino `{{:#to}}` existe",
  "object.schema": "{{#label}} debe ser un esquema Joi del tipo `{{#type}}`",
  "object.unknown": "{{#label}} no está permitido",
  "object.with":
    "{{:#mainWithLabel}} falta en el compañero requerido `{{:#peerWithLabel}}",
  "object.without":
    "{{:#mainWithLabel}} entra en conflicto con el compañero prohibido `{{:#peerWithLabel}}",
  "object.xor":
    "{{#label}} contiene un conflicto entre compañeros exclusivos `{{#peersWithLabels}}`",
  "number.base": "{{#label}} debe ser un número",
  "number.greater": "{{#label}} debe ser mayor que `{{#limit}}`",
  "number.infinity": "{{#label}} no puede ser infinito",
  "number.integer": "{{#label}} debe ser un número entero",
  "number.less": "{{#label}} debe ser menor que `{{#limit}}`",
  "number.max": "{{#label}} debe ser menor o igual a `{{#limit}}`",
  "number.min": "{{#label}} debe ser mayor o igual a `{{#limit}}`",
  "number.multiple": "{{#label}} debe ser un múltiplo de `{{#multiple}}`",
  "number.negative": "{{#label}} debe ser un número negativo",
  "number.port": "{{#label}} debe ser un puerto válido",
  "number.positive": "{{#label}} debe ser un número positivo",
  "number.precision":
    "{{#label}} no debe tener más de `{{#limit}}` lugares decimales",
  "number.unsafe": "{{#label}} debe ser un número seguro",
  "string.alphanum": "{{#label}} solo debe contener caracteres alfanuméricos",
  "string.base": "{{#label}} debe ser una cadena de texto",
  "string.base64": "{{#label}} debe ser una cadena base64 válida",
  "string.creditCard": "{{#label}} debe ser una tarjeta de crédito",
  "string.dataUri": "{{#label}} debe ser una cadena dataUri válida",
  "string.domain": "{{#label}} debe contener un nombre de dominio válido",
  "string.email": "{{#label}} debe ser un correo electrónico válido",
  "string.empty": "{{#label}} no debe estar vacío",
  "string.guid": "{{#label}} debe ser un GUID válido",
  "string.hex": "{{#label}} solo debe contener caracteres hexadecimales",
  "string.hexAlign":
    "La representación decodificada en hexadecimal de {{#label}} debe estar alineada en bytes",
  "string.hostname": "{{#label}} debe ser un nombre de host válido",
  "string.ip":
    "{{#label}} debe ser una dirección IP válida con un CIDR de `{{#cidr}}`",
  "string.ipVersion":
    "{{#label}} debe ser una dirección IP válida de una de las siguientes versiones `{{#version}}` con un CIDR de `{{#cidr}}`",
  "string.isoDate": "{{#label}} debe estar en formato ISO",
  "string.isoDuration":
    "{{#label}} debe ser una duración válida en formato ISO 8601",
  "string.length":
    "La longitud de {{#label}} debe ser de `{{#limit}}` caracteres",
  "string.lowercase": "{{#label}} solo debe contener caracteres en minúsculas",
  "string.max":
    "La longitud de {{#label}} debe ser menor o igual a `{{#limit}}` caracteres",
  "string.min":
    "La longitud de {{#label}} debe ser de al menos `{{#limit}}` caracteres",
  "string.normalize":
    "{{#label}} debe estar normalizado en unicode en la forma `{{#form}}`",
  "string.token":
    "{{#label}} solo debe contener caracteres alfanuméricos y de subrayado",
  "string.pattern.base":
    "Con el valor {:[.]} {{#label}} no coincide con el patrón requerido: `{{#regex}}`",
  "string.pattern.name":
    "Con el valor {:[.]} {{#label}} no coincide con el patrón `{{#name}}`",
  "string.pattern.invert.base":
    "Con el valor {:[.]} {{#label}} coincide con el patrón invertido: `{{#regex}}`",
  "string.pattern.invert.name":
    "Con el valor {:[.]} {{#label}} coincide con el patrón invertido `{{#name}}`",
  "string.trim":
    "{{#label}} no debe tener espacios en blanco al inicio o al final",
  "string.uri": "{{#label}} debe ser una URI válida",
  "string.uriCustomScheme":
    "{{#label}} debe ser una URI válida con un esquema que coincida con el patrón `{{#scheme}}`",
  "string.uriRelativeOnly": "{{#label}} debe ser una URI relativa válida",
  "string.uppercase": "{{#label}} solo debe contener caracteres en mayúsculas",
  "symbol.base": "{{#label}} debe ser un símbolo",
  "symbol.map": "{{#label}} debe ser uno de `{{#map}}`",
};

export const joiResolver = async (schema: Joi.ObjectSchema, data: unknown) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return {
      values: {},
      errors: error.details.reduce((acc: ErrorType, curr: Joi.ValidationErrorItem) => {
        const path = curr.path.join(".");
        return {
          ...acc,
          [path]: {
            message: curr.message,
            type: curr.type,
          },
        };
      }, {} as ErrorType),
    };
  }
  return { values: value, errors: {} };
};
