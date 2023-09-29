import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput } from '../../../../components/UI/TextInput';
import s from './Store.module.scss';

interface NewStoreFormData {
  store_name: string;
  category: string;
  code: number;
}

export const NewStoreForm = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: NewStoreFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        id='registration'
        className={s.form}
        onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      >
        <label className={s.form_label}>
          Назва магазину *
          <TextInput
            type='text'
            id='store_name'
            placeholder='Петрович'
            required={true}
            regex={/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){3,5}[.]{0,1}$/}
            errorMessage='Будь ласка, введіть назву свого магазину'
          />
        </label>
        <label className={s.form_label}>
          Сфера *
          <TextInput
            type='text'
            id='category'
            placeholder='Гарні цяцьки'
            required={true}
            regex={/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){3,5}[.]{0,1}$/}
            errorMessage='Будь ласка, введіть категорію'
          />
        </label>
        <label className={s.form_label}>
          ЄДРПОУ *
          <TextInput
            type='text'
            id='code'
            placeholder='8578865464646'
            required={true}
            regex={/^[0-9]*$/}
            minLength={7}
            maxLength={7}
            maxLengthMessage='Будь ласка, введіть справний ЄДРПОУ'
            minLengthMessage='Будь ласка, введіть справний ЄДРПОУ'
          />
        </label>
        <button disabled={!isValid} className={s.form_btn}>
          Зареєструватися
        </button>
      </form>
    </FormProvider>
  );
};
