import * as Yup from 'yup';

export default Yup.object().shape({
  cgc: Yup.string().min(11).required('Campo obrigatório'),
  razao: Yup.string().min(5).required('Campo obrigatório'),
  fantasia: Yup.string().min(4).required('Campo obrigatório'),
  ie: Yup.string().min(4).required('Campo obrigatório'),
  tel_com: Yup.string().min(10).required('Campo obrigatório'),
  cel_com: Yup.string().min(11).required('Campo obrigatório'),
  email: Yup.string().email().required('Campo obrigatório'),
  cep: Yup.string().min(8).required('Campo obrigatório'),
  rua: Yup.string().min(4).required('Campo obrigatório'),
  numero: Yup.string().min(1).required('Campo obrigatório'),
  bairro: Yup.string().min(4).required('Campo obrigatório'),
  comple: Yup.string().min(4).required('Campo obrigatório'),
  cidade: Yup.string().min(4).required('Campo obrigatório'),
  estado: Yup.string().min(4).required('Campo obrigatório'),
  predioproprio: Yup.string().min(1).required('Campo obrigatório'),

});
