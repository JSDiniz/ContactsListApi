import * as Yup from "yup";
import { SchemaOf } from "yup";
import { IPhonesReq, IPhonesRes, IPhones } from "../../interfaces";

const phonesSchemaReq: SchemaOf<IPhonesReq> = Yup.object().shape({
  phone: Yup.string()
    .max(20)
    .required("Telefone Obrigatorio")
    .matches(
      /^[0-9]([0-9]{8}|[0-9]{9})/,
      "Deve ser um número de telefone válido"
    ),
});

const phonesSchemaRes: SchemaOf<IPhonesRes> = Yup.object().shape({
  updatedAt: Yup.date().notRequired(),
  createdAt: Yup.date().notRequired(),
  phone: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const updatePhonesSchemaRes: SchemaOf<IPhones> = Yup.object().shape({
  phone: Yup.string().notRequired(),
  id: Yup.string().notRequired(),
});

const phonesSchema: SchemaOf<IPhonesReq[]> = Yup.array(phonesSchemaReq);

export {
  phonesSchemaReq,
  phonesSchemaRes,
  updatePhonesSchemaRes,
  phonesSchema,
};
